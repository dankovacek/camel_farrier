"""Centralized path resolution for all scripts."""

import os
from pathlib import Path

# Project root: scripts/config/paths.py -> scripts/ -> project root
PROJECT_ROOT = Path(__file__).resolve().parents[2]

# Main directories
SCRIPTS_DIR = PROJECT_ROOT / "scripts"
BOOK_DOCS_DIR = PROJECT_ROOT / "book_docs"
DATA_DIR = PROJECT_ROOT / "data"
DEMO_DATA_DIR = PROJECT_ROOT / "demo_data"

# External data directory (configurable via environment variable)
COMMON_DATA_DIR = Path(os.getenv('COMMON_DATA_DIR', Path.home() / 'code' / 'common_data'))

# HYDAT database path
HYDAT_DIR = COMMON_DATA_DIR / "HYDAT" / "Hydat_sqlite3_20260116"
HYDAT_DB_PATH = HYDAT_DIR / "Hydat.sqlite3"

# Reference data files (in book_docs/stations/)
PRECISION_CODES_FILE = BOOK_DOCS_DIR / "station_pages" / "HYDAT_precision_codes.csv"
QUALITY_CODES_FILE = BOOK_DOCS_DIR / "station_pages" / "HYDAT_quality_codes.csv"

# WSC catchment polygons
WSC_BASINS_DIR = COMMON_DATA_DIR / "WSC_basin_polygons"

# Catchment attributes file
CATCHMENT_ATTRIBUTES_FILE = DATA_DIR / "Watershed_descriptors_20260203_with_stats.csv"
# CATCHMENT_ATTRIBUTES_FILE = DATA_DIR / "HYSETS_watershed_properties.txt"

# HYDAT catchment polygons (new source)
HYDAT_POLYGONS_DIR = COMMON_DATA_DIR / "HYDAT" / "polygons"

# Caravan / HYSETS data (external drive; override with CARAVAN_DIR env var)
CARAVAN_DIR = Path(os.getenv('CARAVAN_DIR', '/media/danbot/Samsung_T5/geospatial_data/Caravan'))
CARAVAN_POLYGONS_DIR = CARAVAN_DIR / "shapefiles" / "hysets"
CARAVAN_ATTRIBUTES_DIR = CARAVAN_DIR / "attributes" / "hysets"

# Caravan comparison output
CARAVAN_COMPARISON_OUTPUT_DIR = BOOK_DOCS_DIR / "data" / "polygon_comparisons" / "caravan_vs_wsc2024"

# WaterOffice data export
WATEROFFICE_DIR = COMMON_DATA_DIR / "WaterOffice_RC_Export_20260203"

# Daymet meteorology data
DAYMET_DIR = COMMON_DATA_DIR / "BC_Monitored_catchment_mean_met_forcings_20260203"

# Conditional assertions - only if running as main script
if __name__ != '__main__':
    if not HYDAT_DB_PATH.exists():
        import warnings
        warnings.warn(f"HYDAT database not found at {HYDAT_DB_PATH}", UserWarning)

# Book subdirectories
STATIONS_DIR = BOOK_DOCS_DIR / "stations"
CATCHMENTS_DIR = PROJECT_ROOT / "catchments"
TEMPLATES_DIR = BOOK_DOCS_DIR / "templates"
STATIC_DIR = BOOK_DOCS_DIR / "_static"
STATION_PAGES_DIR = BOOK_DOCS_DIR / "station_pages" / "stations"

# Data files
HYDAT_REVISION_METRICS_CSV = BOOK_DOCS_DIR / "data" / "hydat_revision_metrics.csv"



# Ensure directories exist
for directory in [STATIONS_DIR, TEMPLATES_DIR, STATIC_DIR, STATION_PAGES_DIR]:
    directory.mkdir(parents=True, exist_ok=True)


def get_station_dir(station_id: str) -> Path:
    """Get the directory for a specific station."""
    return STATIONS_DIR / station_id


def get_template_file(template_name: str) -> Path:
    """Get path to a template file."""
    return TEMPLATES_DIR / template_name


def get_static_file(filename: str, subdir: str = "") -> Path:
    """Get path to a static file (e.g., HTML plots, CSS)."""
    if subdir:
        return STATIC_DIR / subdir / filename
    return STATIC_DIR / filename
