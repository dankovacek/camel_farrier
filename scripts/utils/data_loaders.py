"""Unified data loading utilities."""

import json
import pandas as pd
import geopandas as gpd
from pathlib import Path
from scripts.config.paths import (
    PRECISION_CODES_FILE,
    QUALITY_CODES_FILE,
    get_station_dir,
)

# Cache reference tables to avoid repeated file I/O
_CACHE = {}


def load_reference_table(csv_path: Path, key_col: str, value_col: str) -> dict:
    """Load reference table (codes, symbols) into lookup dict with caching.

    Args:
        csv_path: Path to CSV file
        key_col: Column to use as dictionary key
        value_col: Column to use as dictionary value

    Returns:
        Dictionary mapping keys to values
    """
    cache_key = f"{csv_path}:{key_col}:{value_col}"
    if cache_key in _CACHE:
        return _CACHE[cache_key]

    df = pd.read_csv(csv_path)
    lookup = df.set_index(key_col).to_dict()[value_col]
    _CACHE[cache_key] = lookup
    return lookup


def load_precision_codes() -> dict:
    """Load HYDAT precision codes."""
    return load_reference_table(PRECISION_CODES_FILE, "PRECISION_CODE", "PRECISION_EN")


def load_quality_codes() -> dict:
    """Load HYDAT quality codes."""
    return load_reference_table(QUALITY_CODES_FILE, "SYMBOL_ID", "SYMBOL_EN")


def load_station_metadata(station_id: str) -> dict:
    """Load _metadata.json for a station.

    Args:
        station_id: Station identifier (e.g., "07AF010")

    Returns:
        Dictionary of station metadata
    """
    metadata_path = get_station_dir(station_id) / "_metadata.json"
    if not metadata_path.exists():
        return {}

    with open(metadata_path, "r", encoding="utf-8") as f:
        return json.load(f)


def load_station_qc_status(station_id: str) -> dict:
    """Load _qc_status.json for a station.

    Args:
        station_id: Station identifier

    Returns:
        Dictionary of QC validation status
    """
    qc_path = get_station_dir(station_id) / "_qc_status.json"
    if not qc_path.exists():
        return {}

    with open(qc_path, "r", encoding="utf-8") as f:
        return json.load(f)


def load_csv_with_dates(filepath: Path, date_cols: list = None) -> pd.DataFrame:
    """Load CSV with automatic date column parsing.

    Args:
        filepath: Path to CSV file
        date_cols: List of column names to parse as dates

    Returns:
        Pandas DataFrame
    """
    kwargs = {}
    if date_cols:
        kwargs["parse_dates"] = date_cols
    return pd.read_csv(filepath, **kwargs)


def load_geojson(filepath: Path) -> gpd.GeoDataFrame:
    """Load GeoJSON file as GeoDataFrame.

    Args:
        filepath: Path to GeoJSON file

    Returns:
        GeoDataFrame
    """
    return gpd.read_file(filepath)
