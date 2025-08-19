#!/usr/bin/env python
"""
Automated population of catchment polygons.  This represents the "baseline"
polygons for version-controlled catchment polygons corresponding to active and
historical monitoring stations.

Creates a folder structure under "catchment_polygon_revisions" with a subfolder
named "<country code>-<official_id>" that contains:
  - The catchment polygon as a GeoJSON file.
  - A README.md populated with HYSETS metadata, geometric properties (derived
    from the catchment geometry), and a revision date.
  - A "resources" folder that stores a Bokeh-generated image of the catchment overlaid
    on an OpenTopoMap base tile.

Requirements:
  - geopandas, pandas, shapely
  - bokeh (and bokeh.io.export_png with its dependencies for image export)

Usage:
  process_catchment(official_id, source_code, hysets_df, catchment_gdf)

The function assumes that both hysets_df and catchment_gdf have a column "Official_ID"
that matches the unique identifier of the governing agency.
"""

import os
import pandas as pd
import numpy as np
import geopandas as gpd
from pyproj import CRS
import warnings

# Get the folder this script is in
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent

# set random seed
np.random.seed(22)


def get_geometric_properties(poly) -> dict:
    """
    Compute basic geometric properties of a shapely polygon.
    """
    local_crs = create_local_crs(poly)
    projected_poly = poly.to_crs(local_crs)
    poly_properties_df = pd.DataFrame(
        {
            "Area [km²]": [round(projected_poly.geometry.area[0] / 1e6, 1)],
            "Perimeter [km]": [round(projected_poly.geometry.length[0] / 1000, 2)],
        }
    )
    return poly_properties_df


def create_local_crs(polygon) -> str:
    # Compute the centroid of the polygon
    with warnings.catch_warnings():
        warnings.filterwarnings("ignore", message="Geometry is in a geographic CRS.")
        centroid = polygon.centroid
        lat, lon = centroid.y, centroid.x
        # Create a Lambert Azimuthal Equal Area projection centered at the centroid
        proj_string = f"+proj=laea +lat_0={lat} +lon_0={lon} +units=m +datum=WGS84"
        local_crs = CRS.from_proj4(proj_string)
        return local_crs


def initialize_catchment_data(
    data: pd.Series,
    attrs_df: pd.DataFrame,
    dam_data: gpd.GeoDataFrame,
    catchment_gdf: gpd.GeoDataFrame,
    dam_data_revision_date: str = None,
):
    official_id = data["Official_ID"]
    source_code = data["Source"]

    # Define folder structure
    # base_folder = "catchments"
    subfolder_name = f"{source_code}-{official_id}"
    # subfolder_path = os.path.join(BOOK_ROOT, base_folder, subfolder_name)
    subfolder_path = BASE_DIR / ".." / "catchments" / subfolder_name

    # Create directories if they do not exist
    os.makedirs(subfolder_path, exist_ok=True)

    # Save the polygon to a GeoJSON file
    poly_filepath = subfolder_path / f"{official_id}_catchment.geojson"

    catchment_gdf.to_file(poly_filepath)

    # if there are flow regulation points registered, save them
    if not dam_data.empty:
        dam_data["revision_date"] = dam_data_revision_date
        dam_data_path = subfolder_path / f"{official_id}_dam_data.geojson"
        dam_data.to_file(dam_data_path, driver="GeoJSON")

    # save the attributes to a csv file
    attributes_fname = f"{official_id}_attributes.csv"
    attributes_fpath = subfolder_path / attributes_fname
    attrs_df.to_csv(attributes_fpath, index=False)
    print(
        f"Processed catchment {source_code}-{official_id} successfully. Data saved in {subfolder_path}"
    )


# First generate the catchment data
def generate_catchment_data(initial_hysets_date="2022-04-26", n_to_process=None):
    # Example usage (for iterative development on a small set of test cases)
    # initial date corresponds to HSYETS polygons file date here: https://osf.io/rpc3w/
    
    # For testing purposes, load your hysets_df and catchment_gdf here.
    hysets_properties_file = "HYSETS_watershed_properties.txt"
    # hs_properties_fpath = os.path.join(data_folder, hysets_properties_file)
    data_dir = BASE_DIR / '..' / '..' / 'data'
    hs_properties_fpath = data_dir / hysets_properties_file
    # print(hs_properties_fpath)
    hysets_df = pd.read_csv(hs_properties_fpath, sep=";")
    # random_idxs = np.random.choice(range(len(hysets_df)), n_to_add, replace=False)
    # df = hysets_df.iloc[random_idxs].copy()
    dam_df_path = data_dir / "Dam_Points_20240103.gpkg"
    dam_gdf = gpd.read_file(dam_df_path)
    dam_data_revision_date = "2024-01-03"

    # hysets_bounds_folder = os.path.join(data_folder, "HYSETS_watershed_boundaries")
    hysets_bounds_folder = data_dir / "HYSETS_watershed_boundaries"
    hysets_bounds_fpath = hysets_bounds_folder / "HYSETS_watershed_boundaries_20200730.shp"
    catchment_gdf = gpd.read_file(hysets_bounds_fpath)
    catchment_gdf.set_crs(
        "EPSG:4326", inplace=True
    )  # by default crs is not set at import
    bcub_path = BASE_DIR / '..' / '..' / 'data' / "BCUB_stations.geojson"
    bcub_gdf = gpd.read_file(bcub_path)
    to_process = hysets_df.copy()
    
    if n_to_process is not None:
        filtered_set = hysets_df[hysets_df["Official_ID"].isin(bcub_gdf["Official_ID"].values)]        
        random_idxs = np.random.choice(range(len(filtered_set)), n_to_process, replace=False)
        to_process = filtered_set.iloc[random_idxs].copy()
    
    for i, stn_data in to_process.iterrows():
        official_id = stn_data["Official_ID"]
        polygon = catchment_gdf.loc[catchment_gdf["OfficialID"] == official_id].copy()
        polygon["revision_date"] = initial_hysets_date
        projected_poly = polygon.to_crs(dam_gdf.crs)
        # assert polygon.crs == dam_data.crs, f"CRS mismatch: {polygon.crs} != {dam_data.crs}"
        hs_attrs = hysets_df[hysets_df["Official_ID"] == official_id].copy()
        hs_attrs["revision_date"] = initial_hysets_date
        hs_attrs["Reference"] = "(Arsenault et al., 2020)"
        # find dam geometries contained in the polygon
        # Find dams within the polygon
        dam_subset = gpd.sjoin(dam_gdf, projected_poly, how="inner", predicate="within")
        dam_ids = dam_subset["Dam_ID"].values

        if hs_attrs.empty:
            print("No attributes found for station:", official_id)
        initialize_catchment_data(
            stn_data,
            attrs_df=hs_attrs,
            dam_data=dam_gdf[dam_gdf["Dam_ID"].isin(dam_ids)].copy(),
            catchment_gdf=polygon,
            dam_data_revision_date=dam_data_revision_date,
        )