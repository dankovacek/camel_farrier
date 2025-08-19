import os
import json
from pathlib import Path
import geopandas as gpd

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Supported file extensions for catchment geometries
SUPPORTED_EXTS = [".geojson", ".shp", ".gpkg", ".parquet", ".fgb"]
REQUIRED_COLUMNS = ["Official_ID", "Name", "Source", "geometry"]


def load_dam_info(dam_data_path):
    return gpd.read_file(dam_data_path)


def load_file_config(config_path="input_data/input_data_config.json"):
    default = {"version_info": {}, "remap_cols": {}}

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
    
    try:
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


def get_label_from_filename(file):
    """
    Extract a label from the filename. This is used to distinguish between
    catchment, station, and pour point geometries.
    """
    filename = os.path.basename(file)
    if "DrainageBasin" in filename:
        return "catchment"
    elif "Station" in filename:
        return "station"
    elif "PourPoint" in filename:
        return "pour_point"
    else:
        raise ValueError(f"Unknown geometry type for file: {file}")


def build_geometry_registry(files, file_config, existing_sites=None):

    registry = {}
    missing_cols = []
    version_info = file_config.get("version_info", {})
    source_code = version_info.get("source_code", "UNKNOWN")
    # filtered_files = [e for e in files if str(e.stem).split('/')[-1].split('_')[0].startswith('08')]
    for file in files:
        try:
            gdf = gpd.read_file(file)
            if gdf.empty:
                continue

            if "Source" not in gdf.columns:
                gdf["Source"] = source_code

            missing_columns = check_required_columns(gdf, file_config=file_config)
            if missing_columns:
                print(f"    Missing columns in {file}: {missing_columns}")
                missing_cols.append((file, missing_columns))
                continue

            gdf["geom_type"] = gdf.geometry.geom_type
            gdf["crs"] = gdf.crs.to_string() if gdf.crs else None
            gdf["path"] = str(file)

            for idx in range(len(gdf)):
                row = gdf.iloc[idx]
                official_id = str(row["Official_ID"])
                if official_id not in registry:
                    registry[official_id] = {}
                # create a label to distinguish between
                # catchment, station, and pour point
                label = get_label_from_filename(file)
                
                # assert the label doesn't exist yet
                assert label not in registry[official_id], f"Duplicate label {label} for Official_ID {official_id}"     

                # Store all data in a single dict
                attributes = row.to_dict()
                registry[official_id][label] = attributes

        except Exception as e:
            print(f"Error reading {file}: {e}")

    print(f"{len(registry)} unique Official_IDs found.")
        
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

