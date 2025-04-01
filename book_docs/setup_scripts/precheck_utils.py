import os
import json
from pathlib import Path
from collections import Counter
import numpy as np
import geopandas as gpd

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Supported file extensions for catchment geometries
SUPPORTED_EXTS = [".geojson", ".shp", ".gpkg", ".parquet", ".fgb"]
REQUIRED_COLUMNS = ["Official_ID", "Name", "Source", "geometry"]


def load_dam_info(dam_data_path):
    return gpd.read_file(dam_data_path)


def load_file_config(config_path="input_data/input_data_config.json"):
    default = {"version_info": {}, "remap_cols": {}, "new_cols": {}}

    if not os.path.exists(config_path):
        print("⚠️  No column config file found. Using default settings.")
        return default

    try:
        with open(config_path, "r") as f:
            config = json.load(f)
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid JSON in config file: {e}")
    
    return config


def find_geometry_files(base_folder="input_data"):
    geometry_files = []
    for root, _, files in os.walk(base_folder):
        for f in files:
            if any(f.endswith(ext) for ext in SUPPORTED_EXTS):
                geometry_files.append(Path(root) / f)
    return geometry_files


def check_required_columns(
    gdf: gpd.GeoDataFrame,
    file_config: dict = None,
):
    column_remap = file_config["remap_cols"] if file_config else {}
    new_attributes = file_config["new_cols"] if file_config else None

    try:
        for new_attribute, new_value in new_attributes.items():
            if new_attribute not in gdf.columns:
                gdf[new_attribute] = new_value

        for attr in REQUIRED_COLUMNS:
            if attr in gdf.columns:
                continue

            # Use cached remap if available
            if attr in column_remap:
                substitute = column_remap[attr]
                if substitute in gdf.columns:
                    gdf.rename(columns={substitute: attr}, inplace=True)
                    continue

        missing_cols = [c for c in REQUIRED_COLUMNS if c not in gdf.columns]
        return missing_cols

    except Exception as e:
        return [], f"Failed to read: {str(e).splitlines()[0]}"


def build_geometry_registry(files, file_config):
    registry = {}
    missing_cols = []
    n = 0
    for file in files[:100]:
        n += 1
        foo = str(file).split('/')[-1]
        # print(f"Processing {n}/{len(files)}: {foo}")
        try:
            gdf = gpd.read_file(file)
            if gdf.empty or gdf.geometry.is_empty.all():
                continue

            # add new columns/values from config
            missing_columns = check_required_columns(gdf, file_config=file_config)
            if missing_columns:
                print(f'    Missing columns in {file}: {missing_columns}')
                missing_cols.append((file, missing_columns))
                continue

            # Determine geometry type labels for each row
            gdf["geom_type"] = gdf.geometry.geom_type

            gdf["crs"] = gdf.crs.to_string() if gdf.crs else None

            for _, rdat in gdf.iterrows():
                official_id = str(rdat["Official_ID"])
                geom_type_label = rdat["geom_type"]

                # Ensure nested dict exists for this official_id
                if official_id not in registry:
                    registry[official_id] = {}

                crs = rdat["crs"]
                if geom_type_label in registry[official_id]:
                    n_existing = len(registry[official_id][geom_type_label])
                    geom_type_label = f"{geom_type_label}_{n_existing + 1}"
                else:
                    geom_type_label = f"{geom_type_label}_1"
                    registry[official_id] = {geom_type_label: {}}

                attributes = rdat.to_dict()
                registry[official_id][geom_type_label] = attributes
                registry[official_id][geom_type_label].update(
                    {
                        "geom_type": rdat.geometry.geom_type,
                        "crs": crs,
                        "path": str(file),
                    }
                )

        except Exception as e:
            print(f"Error reading {file}: {e}")
    print(f'{len(registry)} unique Official_IDs found.')
    return registry, missing_cols


def check_geometries_are_valid(registry):
    invalid = []
    n_tested = 0
    for official_id, geom_type_label in registry.items():
        n_tested += 1
        for geom_type_label, data in registry[official_id].items():
            is_valid = data['geometry'].is_valid
            crs = data['crs']
            geom = data['geometry']
            if not is_valid:
                fixed_geom = geom.buffer(0)
                if fixed_geom.is_valid:
                    geom = fixed_geom
                    is_valid = True
                    
                gdf = gpd.GeoDataFrame(geometry=[geom], crs=crs)
                # Explode MultiPolygon into parts and filter small ones
                if any(gdf.geometry.geom_type == "MultiPolygon"):
                    gdf = gdf.explode(index_parts=False).reset_index(drop=True)
                    gdf["area"] = gdf.geometry.area / 1e6
                    gdf = gdf[gdf["area"] > 0.001]
                    gdf["area_pct_total"] = gdf["area"] / gdf["area"].sum()

                    # If still multiple parts or any remain MultiPolygon, mark as invalid
                    if len(gdf) > 1 or any(gdf.geometry.geom_type == "MultiPolygon"):
                        is_valid = False
                        invalid.append((official_id, geom_type_label))

                data["is_valid"] = is_valid
                data["geometry"] = gdf.union_all() if is_valid else [geom]  # collapse back to one geometry
                
                registry[official_id][geom_type_label]["is_valid"] = is_valid
    return invalid, n_tested


def is_station_registered():
    """
    Retrieve existing Official_IDs from the catchments folder.
    """
    processed_catchment_folder = os.path.join(BASE_DIR, "book_docs", "catchments")
    # Retrieve a list of existing Official_IDs
    return [e.split("-")[1] for e in processed_catchment_folder]


def display_summary(results):
    print(f"🔍 Found {results['total']} geometry files:")
    for fmt, count in results["summary"].items():
        print(f"- {count} {fmt.upper()} files")

    print("\n📍 Breakdown by Official_ID:")
    print(f"- {results['id_status']['existing']} existing")
    print(f"- {results['id_status']['new']} new")
    print(f"- {results['id_status']['missing']} missing IDs")

    if results["invalid_files"]:
        print("\n⚠️ Warnings:")
        for f, reason in results["invalid_files"]:
            print(f"- {f}: {reason}")

    return input("\nWould you like to continue? [y/N]: ").strip().lower() == "y"

