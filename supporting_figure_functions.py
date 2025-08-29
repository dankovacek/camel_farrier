import os
from pathlib import Path
import sqlite3
import pandas as pd
import numpy as np
import geopandas as gpd
from shapely.geometry import Point

from bokeh.plotting import figure
from bokeh.embed import components
from bokeh.resources import CDN
from jinja2 import Template
from bokeh.palettes import Bokeh6, Category10
from bokeh.models import Div, Range1d, LinearAxis, Band, ColumnDataSource
from bokeh.models import DataTable, TableColumn, ColumnDataSource
from bokeh.layouts import column, row

# Get the folder this script is in
from pathlib import Path

# from setup_scripts import kde_estimator
# from setup_scripts.aep_functions import calculate_distributions, run_ffa_simulation
# from bokeh.palettes import Viridis256, Plasma256, Colorblind5, viridis, plasma

from setup_utilities import (
    retrieve_HYDAT,
)


BASE_DIR = Path(__file__).resolve().parent
BOOK_DIR = BASE_DIR / "book_docs"
STATION_DATA_DIR = BOOK_DIR / "stations"
if not os.path.exists(STATION_DATA_DIR):
    os.makedirs(STATION_DATA_DIR)
# define data folders
DATA_DIR = BASE_DIR / "input_data"

# define HYDAT database folder
LARGE_FILE_DIR = Path("/home/danbot/Documents/common_data")

HYDAT_DIR = LARGE_FILE_DIR / "HYDAT"
HYDAT_fpath = HYDAT_DIR / "Hydat.sqlite3"

CATCHMENT_POLYGON_DIR = HYDAT_DIR / "WSC_basin_polygons_20240905"

WATER_LICENSE_FILE = (
    LARGE_FILE_DIR / "BC_water_extraction_licenses" / "Dam_Points_20240103.gpkg"
)

if not os.path.exists(HYDAT_fpath):
    retrieve_HYDAT(HYDAT_DIR, HYDAT_fpath)

conn = sqlite3.connect(HYDAT_fpath)

hysets_fpath = "/home/danbot/Documents/common_data/HYSETS/HYSETS_watershed_boundaries/HYSETS_watershed_boundaries_20200730.shp"
hysets_gdf = gpd.read_file(hysets_fpath).set_crs(crs="EPSG:4326")


def query_hydat_areas():
    query = """
    SELECT
        STATION_NUMBER, DRAINAGE_AREA_GROSS, DRAINAGE_AREA_EFFECT, LONGITUDE, LATITUDE, PROV_TERR_STATE_LOC
    FROM
        STATIONS
    """
    return pd.read_sql_query(query, conn)


def query_prov_stns(prov_terr_code):

    query = f"""
    SELECT
        *
    FROM
        STATIONS
    WHERE
        PROV_TERR_STATE_LOC = '{prov_terr_code}'
    """
    return pd.read_sql_query(query, conn)


# Create a histogram of catchment areas
def get_hist_and_log_edges(areas):
    min_A, max_A = np.min(areas), np.max(areas)
    edges = np.linspace(np.log(min_A), np.log(max_A), 50)
    hist, edges = np.histogram(areas, bins=np.exp(edges), density=True)
    return hist, edges


def plot_catchment_area_distributions():
    """
    Plot the distribution of catchment areas for revised catchments.
    """
    # import the hysets catchment attributes
    hs_fpath = BASE_DIR / "data" / "HYSETS_watershed_properties.txt"
    hs_df = pd.read_csv(hs_fpath, sep=";")
    hs_df = hs_df[hs_df["Source"] == "HYDAT"]
    hs_areas = hs_df["Drainage_Area_km2"].dropna().values

    caravan_fpath = BASE_DIR / "data" / "attributes_other_hysets.csv"
    car_df = pd.read_csv(caravan_fpath)
    car_df = car_df[car_df["country"] == "Canada"]
    car_areas = car_df["area"].dropna().values

    hydat_areas = query_hydat_areas()
    # where there is a value in 'DRAINAGE_AREA_EFFECT', use the value, otherwise use 'DRAINAGE_AREA_GROSS'
    hydat_DAs = np.where(
        hydat_areas["DRAINAGE_AREA_EFFECT"].notna(),
        hydat_areas["DRAINAGE_AREA_EFFECT"],
        hydat_areas["DRAINAGE_AREA_GROSS"],
    )
    # drop all nan values
    hydat_DAs = hydat_DAs[~np.isnan(hydat_DAs)]

    p = figure(
        title="Distribution of WSC monitored catchments across sources",
        x_axis_label="Drainage Area (km²)",
        y_axis_label="Probability Density",
        x_axis_type="log",
        width=500,
        height=275,
    )
    # plot empirical CDFs
    p.line(
        np.sort(hydat_DAs),
        np.arange(1, len(hydat_DAs) + 1) / len(hydat_DAs),
        color="purple",
        line_width=3,
        alpha=0.8,
        legend_label=f"HYDAT (N={len(hydat_DAs)})",
    )
    p.line(
        np.sort(hs_areas),
        np.arange(1, len(hs_areas) + 1) / len(hs_areas),
        color="dodgerblue",
        line_width=3,
        alpha=0.8,
        legend_label=f"HYSETS (N={len(hs_areas)})",
    )
    p.line(
        np.sort(car_areas),
        np.arange(1, len(car_areas) + 1) / len(car_areas),
        color="orange",
        line_width=3,
        alpha=0.8,
        legend_label=f"Caravan (N={len(car_areas)})",
    )
    p.legend.click_policy = "hide"
    p.legend.location = "top_left"
    p.xaxis.axis_label_text_font = "Bitstream Charter"
    p.xaxis.axis_label_text_font_size = "14pt"
    p.xaxis.axis_label_text_font_style = "italic"

    # Set y-axis label font
    p.yaxis.axis_label_text_font = "Bitstream Charter"
    p.yaxis.axis_label_text_font_size = "12pt"
    p.yaxis.axis_label_text_font_style = "italic"
    # Set legend label font
    p.legend.label_text_font = "Bitstream Charter"
    p.legend.label_text_font_size = "10pt"
    p.legend.label_text_font_style = "normal"

    return p


def retrieve_hydat_bc_polygons():
    bc_fpath = BASE_DIR / "data" / "BC_WSC_Station_Polygons.geojson"
    if os.path.exists(bc_fpath):
        bc_stn_polygons = gpd.read_file(bc_fpath)
    else:
        bc_df = query_prov_stns("BC")
        wsc_polygon_folder = (
            "/home/danbot/Documents/common_data/HYDAT/WSC_basin_polygons_20240905"
        )
        # group by the region id (first two digits of stn id)
        bc_df["region_code"] = bc_df["STATION_NUMBER"].str[:2]
        bc_stn_polygons = []
        for group, data in bc_df.groupby("region_code"):
            print(f"Region: {group}")
            group_prefix = f"MDA_ADP_{group}"
            region_polygons_folder = os.path.join(wsc_polygon_folder, group_prefix)
            fpath = f"{group_prefix}_DrainageBasin_BassinDeDrainage.geojson"
            wsc_gdf = gpd.read_file(os.path.join(region_polygons_folder, fpath))
            wsc_gdf = wsc_gdf[wsc_gdf["StationNum"].isin(data["STATION_NUMBER"])]
            bc_stn_polygons.append(wsc_gdf)

        # concatenate all GeoDataFrames in the list
        bc_stn_polygons = gpd.GeoDataFrame(
            pd.concat(bc_stn_polygons, ignore_index=True), crs=wsc_gdf.crs
        )
        bc_stn_polygons = bc_stn_polygons.to_crs("EPSG:3005")
        # simplify the geometry by 200m buffer
        bc_stn_polygons["geometry"] = bc_stn_polygons["geometry"].simplify(20).buffer(0)
        # write to the data folder
        bc_stn_polygons.to_file(bc_fpath, driver="GeoJSON")
    return bc_stn_polygons


def find_water_licenses():
    """
    Plot the distribution of catchment areas for revised catchments.
    """
    # get the WSC polygons for BC
    bc_polygons = retrieve_hydat_bc_polygons()
    # find greata
    # filter for rows with 'greata' in the NameNom column
    # b1 = bc_polygons[bc_polygons["NameNom"].str.contains("camp creek", case=False)]
    # stn_str = "greata"
    # b1 = bc_polygons[bc_polygons["NameNom"].str.contains(stn_str, case=False)]
    # if not b1.empty:
    #     b1.to_file(f"data/BC_{stn_str}.geojson", driver="GeoJSON")
    # b1 = bc_polygons[bc_polygons["NameNom"].str.contains("greata", case=False)]
    # b1.to_file("data/BC_greata.geojson", driver="GeoJSON")
    # greata_area = round(b1.geometry.area.values[0] / 1e6, 2)
    # print(f"{stn_str} area: {greata_area} km²")
    # print(asdf)

    # # location of the BC water licenses file
    wl_fpath = "/home/danbot/Documents/common_data/BC_water_extraction_licenses/Dam_Points_20240103.gpkg"
    wl_gdf = gpd.read_file(wl_fpath).to_crs(bc_polygons.crs)

    # # find catchments in the hysets_gdf that contain at least one point in wl_gdf
    # hs_wls = gpd.sjoin(wl_gdf, bc_polygons, how="inner", predicate="within")

    # # get just the unique Dam_IDs
    # bc_stns = query_hydat_areas()
    # bc_stns = bc_stns[bc_stns["PROV_TERR_STATE_LOC"] == "BC"]
    # wsc_stations_with_upstream_dams = hs_wls["StationNum"].unique()
    # bc_stns["contains_water_license"] = bc_stns["STATION_NUMBER"].isin(
    #     wsc_stations_with_upstream_dams
    # )
    # # count contains_water_license_flags
    # count = bc_stns["contains_water_license"].sum()
    # print(
    #     f"{count} stations contain water license, {len(bc_stns) - count} ({100 - 100*count/len(bc_stns):.0f}%) do not."
    # )
    # bc_pts = bc_stns.apply(lambda row: Point(row["LONGITUDE"], row["LATITUDE"]), axis=1)
    # bc_stn_gdf = gpd.GeoDataFrame(bc_stns, geometry=bc_pts, crs="EPSG:4326")
    # bc_stn_gdf.to_file(os.path.join("data", f"BC_stations_waterLicense_check.geojson"))


# find_water_licenses()
