"""
Outline for Hydrometric Station Data Ingestion and File Generation

1. Connect to HYDAT SQLite database (✓)
2. Query the STATIONS table to retrieve all unique hydrometric stations (STATION_NUMBER) (✓)
3. For each station:
    a. Retrieve all associated data from relevant tables:
        - Station metadata (STATIONS table)
            -cross reference information from the following: AGENCY_LIST, REGIONAL_OFFICE_LIST, STN_OPERATION_SCHEDULE, STN_DATUM_UNRELATED, STN_DATUM_CONVERSION, STN_DATA_COLLECTION, STN_REGULATION, STN_DATA_RANGE, STN_REMARKS)
        - Daily/instantaneous water level and discharge (e.g., DLY_FLOWS, DLY_LEVELS, etc.)
        - Benchmark data: DATUM_LIST table
        - Uncertainty estimates
    b. Retrieve additional data from other data files:
        - Rating curves (saved under /home/danbot/Documents/code/25/WSC_rating_curves/rating_curves )
        - Field visits (saved under /home/danbot/Documents/code/25/WSC_rating_curves/field_visits )
        - Corrections (saved under /home/danbot/Documents/code/25/WSC_benchmarks )
        - Catchment polygons and spatial data (saved under /home/danbot/Documents/code/25/WSC_catchment )
        - Any other relevant tables (see HYDAT_Definition_EN.pdf for full schema)
    c. Organize all retrieved data into a structured object or dictionary for the station
    d. Plan output files for each station, e.g.:
        - <STATION_NUMBER>_attributes.csv: Station metadata
        - <STATION_NUMBER>_flows.csv: Daily/instantaneous flow data
        - <STATION_NUMBER>_levels.csv: Water level data
        - <STATION_NUMBER>_rating_curves.csv: Rating curve data
        - <STATION_NUMBER>_benchmarks.csv: Benchmark survey data
        - <STATION_NUMBER>_cross_sections.csv: Cross-section survey data
        - <STATION_NUMBER>_catchment.geojson: Catchment polygon (if available)
        - <STATION_NUMBER>.md: Markdown summary page for the station
    e. (Later) Write code to generate these files for each station, to be tracked in version control
4. (Optional) Create an index or summary file listing all stations and their key attributes
5. (Optional) Add logging and error handling for missing or incomplete data

Next: Implement the above outline as code, starting with querying the STATIONS table and retrieving all associated data for each station.
"""

# INGEST HYDAT DATASET
import os
from pathlib import Path
import sqlite3
from turtle import pd
import geopandas as gpd
import shutil

from setup_utilities import (
    retrieve_HYDAT,
    query_all_stations,
    query_station_metadata,
    query_stn_datum,
    query_stn_data_ranges,
    query_stn_remarks,
    batch_retrieve_station_geometries,
    query_hydat_database,
    query_annual_instant_peaks,
    query_hydat_version,
    query_quality_codes,
    query_precision_codes,
    check_for_rc_data,
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

station_df = query_all_stations(conn)

rc_stations = check_for_rc_data(station_df, BASE_DIR)

station_df = station_df[station_df["STATION_NUMBER"].isin(rc_stations)]
station_df = station_df.reset_index(drop=True)
water_license_df = gpd.read_file(WATER_LICENSE_FILE)
# convert to the same crs as the catchment polygons
water_license_df = water_license_df.to_crs("EPSG:3857")

n_to_generate = 1000
random_idxs = station_df.sample(n=n_to_generate, random_state=42).index

query_quality_codes(conn, BOOK_DIR / "station_pages")
query_precision_codes(conn, BOOK_DIR / "station_pages")

selected_stns = station_df.iloc[random_idxs].copy().sort_values("STATION_NUMBER")

# Group stations by region code
selected_stns_sorted = selected_stns.sort_values("STATION_NUMBER")
region_groups = {}
for i, row in selected_stns_sorted.iterrows():
    station_id = row["STATION_NUMBER"]
    region_code = station_id[:2]
    if region_code not in region_groups:
        region_groups[region_code] = []
    region_groups[region_code].append((i, row))

n = 0
for region_code, stn_list in region_groups.items():
    stn_ids = [row["STATION_NUMBER"] for i, row in stn_list]
    # Retrieve and save geometries for all stations in this region
    batch_retrieve_station_geometries(stn_ids, STATION_DATA_DIR, CATCHMENT_POLYGON_DIR)
    for i, row in stn_list:
        n += 1
        station_id = row["STATION_NUMBER"]
        station_name = row["STATION_NAME"]
        print(f"Processing station {n}/{n_to_generate}: {station_name} ({station_id})")
        stn_output_folder = STATION_DATA_DIR / f"{station_id}"

        # create a dict from the row data
        data = row.to_dict()
        data_df = station_df.iloc[[i]].copy()
        data_df.to_csv(stn_output_folder / f"{station_id}_attributes.csv", index=False)
        station_data_df = station_df.iloc[[i]]
        query_station_metadata(data, conn, stn_output_folder)
        query_stn_datum(data, conn, stn_output_folder)
        query_stn_remarks(data, conn, stn_output_folder)
        query_stn_data_ranges(data, conn, stn_output_folder)

        # load the catchment geometry for this station only
        catchment_path = (
            stn_output_folder / f"{station_id}_DrainageBasin_BassinDeDrainage.geojson"
        )
        if os.path.exists(catchment_path):
            catchment_gdf = gpd.read_file(catchment_path)
            licenses = gpd.sjoin(
                water_license_df,
                catchment_gdf,
                predicate="within",
            )
            licenses = licenses[water_license_df.columns]
            if not licenses.empty:
                licenses.to_file(
                    stn_output_folder / f"{station_id}_water_licenses.geojson",
                    driver="GeoJSON",
                )

        # query the daily flows and water level data
        output_flow_path = stn_output_folder / f"{station_id}_daily_flows.csv"
        query_hydat_database(station_id, conn, output_flow_path, table="DLY_FLOWS")
        output_level_path = stn_output_folder / f"{station_id}_daily_levels.csv"
        query_hydat_database(station_id, conn, output_level_path, table="DLY_LEVELS")
        output_stats_path = stn_output_folder / f"{station_id}_annual_instant_peaks.csv"
        query_annual_instant_peaks(station_id, output_stats_path, conn)
        version, version_date = query_hydat_version(conn)

        for f in ["corrections", "field_visits", "RCs"]:
            fpath = BASE_DIR / "data" / f / f"{station_id}_{f}.csv"
            if os.path.exists(fpath):
                shutil.copy(fpath, stn_output_folder)
            else:
                print(f"    No {f} file found for {station_id}.")
