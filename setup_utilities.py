# Helper functions for the main setup script (HYDAT data ingest)

import os
import re
import requests
import pandas as pd
import geopandas as gpd
from collections import defaultdict
import time
from pathlib import Path


def retrieve_HYDAT(HYDAT_DIR, HYDAT_fpath):
    """Retrieve the HYDAT database files."""

    if not os.path.exists(HYDAT_fpath):
        hydat_url = "https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/"
        # get the list of files from the hydat_url
        response = requests.get(hydat_url)

        # Parse HTML to extract links using a simple approach

        # Extract all href attributes from the HTML content
        file_list = re.findall(r'href=[\'"]?([^\'" >]+)', response.text)

        # Filter for relevant files (you may want to adjust this filter)
        file_list = [
            f for f in file_list if not f.startswith("?") and not f.startswith("/")
        ]

        # Create full URLs by joining with the base URL
        file_urls = [
            f"{hydat_url.rstrip('/')}/{f}"
            for f in file_list
            if f.endswith(".pdf") or ("sqlite3" in f)
        ]
        filtered_file_urls = [
            f for f in file_urls if not f.startswith("ECDataExplorer")
        ]
        # retrieve all files and save them to HYDAT_DIR
        for f in filtered_file_urls:
            # check if file already exists
            fpath = HYDAT_DIR / f.split("/")[-1]
            zip_files = []
            if not os.path.exists(fpath):
                command = f"wget -P {HYDAT_DIR} {f}"
                os.system(command)
                if f.endswith(".zip"):
                    zip_files.append(fpath)

            # expand the zip archive files
            for f in zip_files:
                command = f"unzip -o {f} -d {HYDAT_DIR}"
                os.system(command)
                # remove the zip file after extraction
                os.remove(f)

    print("    Finished retrieving HYDAT database files.")


def query_all_stations(conn):
    """
    Query the main station data.
    """
    stn_df = pd.read_sql_query("SELECT * FROM STATIONS;", conn)
    return stn_df


def query_station_metadata(stn_data, conn, stn_output_folder):
    """Query auxiliary station metadata."""
    regional_office_id = stn_data.get("REGIONAL_OFFICE_ID")
    stn_id = stn_data.get("STATION_NUMBER")
    hyd_status = stn_data.get("HYD_STATUS")
    contrib_id = stn_data.get("CONTRIBUTOR_ID")
    auxiliary_tables = [
        ("REGIONAL_OFFICE_LIST", "REGIONAL_OFFICE_ID", regional_office_id),
        ("STN_STATUS_CODES", "STATUS_CODE", hyd_status),
        ("AGENCY_LIST", "AGENCY_ID", contrib_id),
        # ("STN_OPERATION_SCHEDULE", "STATION_NUMBER", stn),
        # ("STN_DATA_COLLECTION", "STATION_NUMBER", stn),
        # ("STN_REGULATION", "STATION_NUMBER", stn),
        # ("STN_DATA_RANGE", "STATION_NUMBER", stn),
        # ("STN_REMARKS", "STATION_NUMBER", stn),
        # ("ANNUAL_INSTANT_PEAKS", "STATION_NUMBER", stn),
        # ("ANNUAL_STATISTICS", "STATION_NUMBER", stn),
    ]

    auxiliary_data = []
    for table, field_name, key in auxiliary_tables:
        query = f"SELECT * FROM {table} WHERE {field_name} = ?"
        df = pd.read_sql_query(query, conn, params=(key,))

        if not df.empty:
            df["table"] = table
            auxiliary_data.append(df)
    aux_df = (
        pd.concat(auxiliary_data, ignore_index=True)
        if auxiliary_data
        else pd.DataFrame()
    )
    aux_df.to_csv(stn_output_folder / f"{stn_id}_auxiliary_data.csv", index=False)


def query_stn_datum(stn_data, conn, stn_output_folder):
    """Query station datum information."""
    # get the datum information
    # datum_id = stn_data.get("DATUM_ID")
    stn_id = stn_data.get("STATION_NUMBER")
    # get descriptive datum information from datum id
    tables = [
        ("STN_DATUM_UNRELATED", "STATION_NUMBER", stn_id),
        ("STN_DATUM_CONVERSION", "STATION_NUMBER", stn_id),
    ]
    datum_dfs = []
    for table, field_name, key in tables:
        query = f"SELECT * FROM {table} WHERE {field_name} = ?"
        datum_df = pd.read_sql_query(query, conn, params=(key,))
        if not datum_df.empty:
            datum_dfs.append(datum_df)
    out_df = pd.concat(datum_dfs, ignore_index=True) if datum_dfs else pd.DataFrame()
    if not out_df.empty:
        out_df.to_csv(stn_output_folder / f"{stn_id}_datum_data.csv", index=False)


def query_stn_remarks(stn_data, conn, stn_output_folder):
    stn = stn_data.get("STATION_NUMBER")
    query = "SELECT * FROM STN_REMARKS WHERE STATION_NUMBER = ?"
    remarks_df = pd.read_sql_query(query, conn, params=(stn,))
    remarks_df.to_csv(stn_output_folder / f"{stn}_remarks.csv", index=False)


def query_stn_data_ranges(stn_data, conn, stn_output_folder):
    stn = stn_data.get("STATION_NUMBER")
    query = "SELECT * FROM STN_DATA_RANGE WHERE STATION_NUMBER = ?"
    data_ranges_df = pd.read_sql_query(query, conn, params=(stn,))

    if not data_ranges_df.empty:
        # Get all unique data types in a single query
        unique_dtypes = data_ranges_df["DATA_TYPE"].unique()

        # Create a dictionary of data type mappings with a single query
        dtype_query = "SELECT DATA_TYPE, DATA_TYPE_EN FROM DATA_TYPES WHERE DATA_TYPE IN ({})".format(
            ",".join(["?"] * len(unique_dtypes))
        )
        dtype_mappings = pd.read_sql_query(dtype_query, conn, params=unique_dtypes)
        dtype_dict = dict(
            zip(dtype_mappings["DATA_TYPE"], dtype_mappings["DATA_TYPE_EN"])
        )

        # Replace data types using the mapping dictionary
        data_ranges_df["DATA_TYPE"] = data_ranges_df["DATA_TYPE"].map(dtype_dict)

        # Save to CSV
        data_ranges_df.to_csv(stn_output_folder / f"{stn}_data_ranges.csv", index=False)

    return data_ranges_df


def batch_retrieve_station_geometries(
    station_ids, output_folder, CATCHMENT_POLYGON_DIR
):
    """Retrieve catchment, pour point, and station geometries for a list of stations."""

    print(f"   Retrieving geometries for {len(station_ids)} stations...")
    start_time = time.time()

    # Group stations by region code
    region_map = defaultdict(list)
    for stn_id in station_ids:
        region_map[stn_id[:2]].append(stn_id)

    processed = 0
    for region_code, stns in region_map.items():
        print(f"   Processing region {region_code} ({len(stns)} stations)")
        region_folder = CATCHMENT_POLYGON_DIR / f"MDA_ADP_{region_code}"

        # Define geometry types to process
        geometries = [
            (
                "catchment",
                f"MDA_ADP_{region_code}_DrainageBasin_BassinDeDrainage.geojson",
            ),
            ("pour_pt", f"MDA_ADP_{region_code}_PourPoint_PointExutoire.geojson"),
            ("station", f"MDA_ADP_{region_code}_Station.geojson"),
        ]

        for label, fname in geometries:
            geo_start = time.time()
            geojson_path = region_folder / fname

            if not geojson_path.exists():
                print(f"    Warning: {geojson_path} not found, skipping.")
                continue
            # try:
            # Read geojson and filter for our stations
            # Read geojson and filter for our stations at import time
            gdf = gpd.read_file(
                geojson_path,
                mask=None,
                engine="pyogrio",
                use_arrow=True,
                where=f"StationNum IN ({','.join(['\''+s+'\'' for s in stns])})",
            )
            gdf = gdf[gdf["StationNum"].isin(stns)].to_crs("EPSG:3857")
            # Save individual station files
            for stn_id in stns:
                stn_output_folder = output_folder / f"{stn_id}"
                if not os.path.exists(stn_output_folder):
                    os.makedirs(stn_output_folder)

                stn_gdf = gdf[gdf["StationNum"] == stn_id].copy()
                if not stn_gdf.empty:
                    out_fname = f"{stn_id}_{fname.split(f'_{region_code}_')[-1]}"
                    stn_gdf.to_file(stn_output_folder / out_fname, driver="GeoJSON")
                    processed += 1
            print(f"    Processed {label} geometries in {time.time()-geo_start:.1f}s")
            # except Exception as e:
            #     print(f"    Error processing {label} geometries: {e}")

    print(
        f"   Completed geometry retrieval in {time.time()-start_time:.1f}s ({processed} files created)"
    )


def check_if_station_in_hydat(stn, conn):
    # Query to check if the station exists
    check_query = """
    SELECT STATION_NUMBER, STATION_NAME
    FROM STATIONS
    WHERE STATION_NUMBER = ?
    """
    # Run the query
    station_check = pd.read_sql_query(check_query, conn, params=(stn,))

    # Test if any result was returned
    if station_check.empty:
        return False
    else:
        return True


def query_data_symbols(stn, conn):
    # Connect to the database
    # Query all data symbols
    query = "SELECT SYMBOL_ID, SYMBOL_EN FROM DATA_SYMBOLS ORDER BY SYMBOL_ID"
    try:
        df = pd.read_sql_query(query, conn)
        return df.set_index("SYMBOL_ID")["SYMBOL_EN"]
    except Exception as ex:
        print(ex)
        return pd.DataFrame()


def reshape_hydat_wide(input_df, table):
    # First, ensure all FLOW_SYMBOL columns exist and are named correctly
    id_vars = ["STATION_NUMBER", "YEAR", "MONTH", "NO_DAYS"]

    if table == "DLY_FLOWS":
        value_var = "FLOW"
        value_name = "flow_cms"
    elif table == "DLY_LEVELS":
        value_var = "LEVEL"
        value_name = "water_level_m"

    value_vars = [f"{value_var}{i}" for i in range(1, 32)]
    symbol_vars = [f"{value_var}_SYMBOL{i}" for i in range(1, 32)]

    # Melt flows
    df = input_df.melt(
        id_vars=id_vars,
        value_vars=value_vars,
        var_name="day",
        value_name=value_name,
    )

    # Melt symbols
    sym_df = input_df.melt(
        id_vars=id_vars,
        value_vars=symbol_vars,
        var_name="day",
        value_name="quality_symbol",
    )

    # Extract day number
    df["day"] = df["day"].str.extract(r"(\d+)$").astype(int)
    sym_df["day"] = sym_df["day"].str.extract(r"(\d+)$").astype(int)

    # Merge on ID columns + day
    merged = pd.merge(df, sym_df, on=id_vars + ["day"])

    # Construct date
    merged["date"] = pd.to_datetime(
        dict(year=merged["YEAR"], month=merged["MONTH"], day=merged["day"]),
        errors="coerce",
    )

    # Filter out invalid days (e.g., day > NO_DAYS)
    merged = merged[merged["day"] <= merged["NO_DAYS"]]
    formatted_df = merged[["STATION_NUMBER", "date", value_name, "quality_symbol"]]
    formatted_df.set_index("date", inplace=True)
    return formatted_df


def query_hydat_database(stn, conn, output_path, table="DLY_FLOWS"):
    """Query the HYDAT database for a given station and date range."""
    station_in_hydat = check_if_station_in_hydat(stn, conn)
    if station_in_hydat is False:
        print(f"Station {stn} not found in HYDAT database.")
        return pd.DataFrame()

    base_columns = ["STATION_NUMBER", "YEAR", "MONTH"]
    if table == "DLY_FLOWS":
        columns = [f"FLOW{i}, FLOW_SYMBOL{i}" for i in range(1, 32)]
    elif table == "DLY_LEVELS":
        columns = [f"LEVEL{i}, LEVEL_SYMBOL{i}" for i in range(1, 32)]
    else:
        raise Exception(
            f"   {table} variable not defined.  must be DLY_FLOWS or DLY_LEVELS"
        )

    all_columns = base_columns + columns + ["NO_DAYS"]
    column_str = ",\n    ".join(all_columns)

    query = f"""
    SELECT
        {column_str}
    FROM {table}
    WHERE STATION_NUMBER = ?
    ORDER BY YEAR, MONTH;
    """
    df = pd.read_sql_query(query, conn, params=(stn,))

    if df.empty:
        print(f"No {table} data found for {stn} in HYDAT.")
        return pd.DataFrame()
    df = reshape_hydat_wide(df, table)
    df.to_csv(output_path)


def find_symbol_segments(symbol_df, target_symbol):
    """Return (start, end) date pairs for each continuous period of target_symbol."""
    # Filter for matching symbol only
    mask = symbol_df["flow_symbol"] == target_symbol
    dates = symbol_df["flow_symbol"].index[mask]

    if dates.empty:
        return []

    # Compute gaps in days between successive dates
    gaps = dates.to_series().diff().gt(pd.Timedelta(days=1)).fillna(True)

    # Group by contiguous regions (cumsum creates a new group after each gap)
    group_ids = gaps.cumsum()

    # Group by group ID and extract start and end of each contiguous block
    segments = [
        (group.min(), group.max()) for _, group in dates.to_series().groupby(group_ids)
    ]

    return segments


def query_annual_instant_peaks(station_id, output_fpath, conn):
    query = """
        SELECT *
        FROM ANNUAL_INSTANT_PEAKS
        WHERE STATION_NUMBER = ?
        """
    df = pd.read_sql_query(query, conn, params=(station_id,))
    peak_codes = sorted(list(set(df["PEAK_CODE"].values)))
    for code in peak_codes:
        peak_code_query = "SELECT * FROM PEAK_CODES WHERE PEAK_CODE = ?"
        peak_df = pd.read_sql_query(peak_code_query, conn, params=(code,))
        if peak_df.empty:
            continue
        description = peak_df["PEAK_EN"].values[0]
        df.loc[df["PEAK_CODE"] == code, "CODE DESCRIPTION"] = description
    df.to_csv(output_fpath, index=False)


def query_quality_codes(conn, stn_output_folder):
    query = """
    SELECT *
    FROM DATA_SYMBOLS
    """
    df = pd.read_sql_query(query, conn)
    if not df.empty:
        df.to_csv(stn_output_folder / f"HYDAT_quality_codes.csv", index=False)


def query_precision_codes(conn, stn_output_folder):
    query = """
    SELECT *
    FROM PRECISION_CODES
    """
    df = pd.read_sql_query(query, conn)
    if not df.empty:
        df.to_csv(stn_output_folder / f"HYDAT_precision_codes.csv", index=False)


def query_hydat_version(conn):
    version_query = """
    SELECT *
    FROM VERSION
    """
    df = pd.read_sql_query(version_query, conn)
    version = df["Version"].iloc[0] if not df.empty else None
    version_date = df["Date"].iloc[0] if not df.empty else None
    # print(f"    HYDAT version: {version}, date: {version_date}")
    return version, version_date


def check_for_rc_data(df, BASE_DIR):
    rc_stations = [e.split("_")[0] for e in os.listdir(BASE_DIR / "data" / "RCs")]

    stations_with_rc_data = []
    for stn in rc_stations:
        fpath = BASE_DIR / "data" / "RCs" / f"{stn}_RCs.csv"
        rcdf = pd.read_csv(fpath)
        if not rcdf.empty:
            stations_with_rc_data.append(stn)

    return stations_with_rc_data
