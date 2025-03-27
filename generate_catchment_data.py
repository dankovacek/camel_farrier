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
import datetime
import pandas as pd
import geopandas as gpd
from pyproj import CRS
import warnings
from textwrap import dedent
from bokeh.plotting import figure, save
from bokeh.io import export_png
import xyzservices.providers as xyz

tiles = xyz.OpenStreetMap.Mapnik


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
    catchment_gdf: gpd.GeoDataFrame,
    revision_date: str = None,
):

    official_id = data["Official_ID"]
    source_code = data["Source"]

    # Define folder structure
    base_folder = "catchment_polygon_revisions"
    subfolder_name = f"{source_code}-{official_id}"
    subfolder_path = os.path.join(base_folder, subfolder_name)
    resources_path = os.path.join(subfolder_path, "resources")

    # Create directories if they do not exist
    os.makedirs(resources_path, exist_ok=True)

    # Save the polygon to a GeoJSON file
    poly_filepath = os.path.join(
        subfolder_path, f"{official_id}.geojson"
    )
    catchment_gdf.to_file(poly_filepath)

    # save the attributes to a csv file
    attributes_fname = f"{official_id}_attributes.csv"
    attributes_fpath = os.path.join(subfolder_path, attributes_fname)
    attrs_df['Reference'] = "(Arsenault et al., 2020)"
    hs_attrs['revision_date'] = revision_date
    attrs_df.to_csv(attributes_fpath, index=False)

    print(
        f"Processed catchment {source_code}-{official_id} successfully. Data saved in {subfolder_path}"
    )


# Example usage (for iterative development on a single test case)
if __name__ == "__main__":
    # initial date corresponds to HSYETS polygons file date here: https://osf.io/rpc3w/
    initial_date = '2022-04-26'
    # For testing purposes, load your hysets_df and catchment_gdf here.
    # For example:
    data_folder = os.path.join(os.path.dirname(__file__), "data")
    hysets_properties_file = "HYSETS_watershed_properties.txt"

    hs_properties_fpath = os.path.join(data_folder, hysets_properties_file)
    hysets_df = pd.read_csv(hs_properties_fpath, sep=";")

    hysets_bounds_folder = os.path.join(data_folder, "HYSETS_watershed_boundaries")
    hysets_bounds_fpath = os.path.join(
        hysets_bounds_folder, "HYSETS_watershed_boundaries_20200730.shp"
    )
    catchment_gdf = gpd.read_file(hysets_bounds_fpath)
    catchment_gdf.set_crs(
        "EPSG:4326", inplace=True
    )  # by default crs is not set at import

    for i, stn_data in hysets_df[:100].iterrows():
        official_id = stn_data["Official_ID"]
        source = stn_data["Source"]
        polygon = catchment_gdf.loc[
            catchment_gdf["OfficialID"] == official_id
        ].copy()
        hs_attrs = hysets_df[hysets_df["Official_ID"] == official_id].copy()
        if hs_attrs.empty:
            print('No attributes found for station:', official_id)
        initialize_catchment_data(stn_data, attrs_df=hs_attrs, catchment_gdf=polygon, revision_date=initial_date)
