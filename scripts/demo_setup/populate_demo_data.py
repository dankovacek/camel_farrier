#!/usr/bin/env python3
"""
Populate Demo Data - Streamlined setup for demonstration repository.

Reads station list and creates structured directories with metadata, QC status,
version tracking, and polygon data. WSC basins file is loaded once for efficiency.

Usage:
    python populate_demo_data.py
    python populate_demo_data.py --stations-file custom_stations.txt
"""

import argparse
import os
import sys
import json
import shutil
import logging
from pathlib import Path
from typing import List, Dict, Optional
from datetime import datetime
import sqlite3

import numpy as np
import xarray as xr
import pandas as pd
import geopandas as gpd
from scipy.spatial import cKDTree
from scipy.stats import rankdata

# Add project root to path
PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

# Import HYDAT query functions
from scripts.demo_setup.setup_utilities import (
    query_hydat_database,
    query_annual_instant_peaks
)
from scripts.config.paths import (
    CATCHMENT_ATTRIBUTES_FILE,
    PROJECT_ROOT,
    DATA_DIR,
    HYDAT_DB_PATH,
    WSC_BASINS_DIR,
    COMMON_DATA_DIR,
    WATEROFFICE_DIR,
    DAYMET_DIR
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def read_station_list(stations_file: Path) -> List[str]:
    """Read list of 7-digit station IDs from file, skipping comments."""
    station_ids = []
    with open(stations_file) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#'):
                station_id = line.split()[0]
                if len(station_id) == 7:
                    station_ids.append(station_id)
    logger.info(f"Read {len(station_ids)} station IDs from {stations_file}")
    return station_ids


def load_wsc_basins(polygon_source: Path = None) -> Optional[gpd.GeoDataFrame]:
    """Load WSC basins GeoDataFrame once. Returns None if file doesn't exist."""
    if polygon_source is None:
        # Use configured LARGE_FILE_DIR from supporting_figure_functions
        polygon_source = WSC_BASINS_DIR / 'WSC_basins_2021-12.geojson'

    if not polygon_source.exists():
        logger.warning(f"WSC basins file not found: {polygon_source}")
        return None

    try:
        gdf = gpd.read_file(polygon_source)
        logger.info(f"Loaded {len(gdf)} polygons from {polygon_source.name}")
        return gdf
    except Exception as e:
        logger.error(f"Failed to load WSC basins: {e}")
        return None


def get_hydat_metadata(station_id: str, hydat_path: Optional[Path] = None) -> Dict:
    """Query HYDAT database for station metadata. Returns minimal dict if not found."""
    if hydat_path is None:
        # Use configured HYDAT path from scripts.config.paths
        hydat_path = HYDAT_DB_PATH

    if not hydat_path or not hydat_path.exists():
        logger.debug(f"HYDAT not found for {station_id}, using placeholder metadata")
        return {'station_id': station_id, 'station_name': f"Station {station_id}", 'source': 'placeholder'}

    try:
        conn = sqlite3.connect(hydat_path)
        df = pd.read_sql_query(
            "SELECT STATION_NUMBER, STATION_NAME, LATITUDE, LONGITUDE, "
            "DRAINAGE_AREA_GROSS, DRAINAGE_AREA_EFFECT, PROV_TERR_STATE_LOC, HYD_STATUS, RHBN "
            "FROM STATIONS WHERE STATION_NUMBER = ?",
            conn, params=[station_id]
        )
        conn.close()

        if df.empty:
            logger.debug(f"Station {station_id} not in HYDAT")
            return {'station_id': station_id, 'station_name': f"Station {station_id}", 'source': 'placeholder'}

        row = df.iloc[0]
        return {
            'station_id': row['STATION_NUMBER'],
            'station_name': row['STATION_NAME'],
            'latitude': float(row['LATITUDE']) if pd.notna(row['LATITUDE']) else None,
            'longitude': float(row['LONGITUDE']) if pd.notna(row['LONGITUDE']) else None,
            'drainage_area_gross_km2': float(row['DRAINAGE_AREA_GROSS']) if pd.notna(row['DRAINAGE_AREA_GROSS']) else None,
            'drainage_area_effect_km2': float(row['DRAINAGE_AREA_EFFECT']) if pd.notna(row['DRAINAGE_AREA_EFFECT']) else None,
            'province_territory': row['PROV_TERR_STATE_LOC'],
            'hyd_status': row['HYD_STATUS'],
            'source': 'HYDAT',
            'retrieval_date': datetime.now().isoformat()
        }
    except Exception as e:
        logger.debug(f"Error querying HYDAT for {station_id}: {e}")
        return {'station_id': station_id, 'station_name': f"Station {station_id}", 'source': 'placeholder'}


def extract_polygon(station_id: str, output_dir: Path, wsc_gdf: gpd.GeoDataFrame) -> bool:
    """Extract station polygon from WSC basins GeoDataFrame. Captures version/date metadata."""
    station_gdf = wsc_gdf[wsc_gdf['StationNum'] == station_id]

    if station_gdf.empty:
        logger.debug(f"  No polygon found for {station_id}")
        return False

    try:
        # Extract ALL polygon attributes as source metadata - expose everything
        first_row = station_gdf.iloc[0]

        # Convert all attributes to dict, excluding geometry
        # Handle timestamps properly for JSON serialization
        source_metadata = {}
        for k, v in first_row.to_dict().items():
            if k == 'geometry':
                continue
            # Convert timestamps to ISO date strings
            if hasattr(v, 'strftime'):
                source_metadata[k] = v.strftime('%Y-%m-%d')
            elif v is None or (isinstance(v, float) and pd.isna(v)):
                source_metadata[k] = None
            else:
                source_metadata[k] = str(v)

        version_tag = 'v1.0.0'
        timestamp = datetime.now().isoformat()

        # Save polygon with semantic version
        output_file = output_dir / f"{station_id}_polygon_{version_tag}.geojson"
        station_gdf.to_file(output_file, driver='GeoJSON')

        # Create/update versions.json with WSC metadata
        versions_file = output_dir / '_versions.json'
        versions_data = json.load(open(versions_file)) if versions_file.exists() else {
            '$schema': 'https://json-schema.org/draft/2020-12/schema',
            'description': 'Version history for station data',
            'station_id': station_id,
            'versions': [],
            'schema_version': '1.0.0'
        }

        versions_data['versions'] = [{
            'semantic_tag': version_tag,
            'timestamp': timestamp,
            'data_source': 'WSC_basins',
            'polygon_file': f'{station_id}_polygon_{version_tag}.geojson',
            'source_metadata': source_metadata
        }]
        versions_data['current_version'] = version_tag
        versions_data['version_count'] = 1
        versions_data['first_committed'] = timestamp
        versions_data['last_updated'] = timestamp

        with open(versions_file, 'w') as f:
            json.dump(versions_data, f, indent=2)

        return True
    except Exception as e:
        logger.debug(f"  Failed to extract polygon for {station_id}: {e}")
        return False


def _copy_station_data_files(station_id: str, source_dir: Path, output_dir: Path) -> Dict[str, bool]:
    """Copy data files (RCs, corrections, field_visits) to station directory.

    Only marks files as present if they contain actual data (not just headers).

    Returns dict with keys: has_rcs, has_corrections, has_field_visits
    """
    file_status = {'has_rcs': False, 'has_corrections': False, 'has_field_visits': False}

    # Use WaterOffice dir if available, else fall back to standard data dir
    water_office_dir = WATEROFFICE_DIR
    data_source = water_office_dir if water_office_dir.exists() else source_dir
    logger.debug(f"  Data source directory: {data_source}")

    file_specs = [
        ('RCs', 'rating_curves', 'RCs', 'has_rcs'),
        ('corrections', 'corrections', 'corrections', 'has_corrections'),
        ('field_visits', 'field_visits', 'field_visits', 'has_field_visits'),
    ]

    for display_name, folder, suffix, status_key in file_specs:
        source = data_source / folder / f"{station_id}_{suffix}.csv"
        dest = output_dir / f"{station_id}_{display_name}.csv"
        logger.debug(f"  Looking for {display_name} at: {source}")

        if source.exists():
            try:
                shutil.copy2(source, dest)

                # Verify file has actual data, not just headers
                if dest.exists():
                    try:
                        df = pd.read_csv(dest)
                        if not df.empty and len(df) > 0:
                            file_status[status_key] = True
                            logger.debug(f"  ✓ {display_name}: {len(df)} rows")
                        else:
                            logger.warning(f"  ✗ {display_name} file is empty (no data rows)")
                            dest.unlink()  # Remove empty file
                    except Exception as e:
                        logger.warning(f"  ✗ {display_name} file invalid: {e}")
                        if dest.exists():
                            dest.unlink()  # Remove invalid file
            except Exception as e:
                logger.warning(f"  Failed to copy {display_name}: {e}")

    return file_status


def _calculate_timeseries_gaps(station_dir: Path, station_id: str) -> Dict:
    """Calculate gap statistics from timeseries data.

    Returns dict with: has_data, gap_count, mean_gap_days, max_gap_days, data_type, record_length_years
    """
    flow_path = station_dir / f"{station_id}_daily_flows.csv"

    if not flow_path.exists():
        return {'has_data': False, 'gap_count': 0, 'mean_gap_days': 0, 'max_gap_days': 0, 'data_type': 'none', 'record_length_years': 0}

    try:
        df = pd.read_csv(flow_path)
        if df.empty:
            return {'has_data': False, 'gap_count': 0, 'mean_gap_days': 0, 'max_gap_days': 0, 'data_type': 'none', 'record_length_years': 0}

        # Handle both 'date' and 'Date' column names
        date_col = 'date' if 'date' in df.columns else 'Date' if 'Date' in df.columns else None
        if not date_col:
            logger.warning(f"  No date column found in {flow_path.name}")
            return {'has_data': False, 'gap_count': 0, 'mean_gap_days': 0, 'max_gap_days': 0, 'data_type': 'error', 'record_length_years': 0}

        # Parse dates
        df[date_col] = pd.to_datetime(df[date_col])
        df = df.sort_values(date_col)

        # Calculate record stats
        record_length_years = round((df[date_col].max() - df[date_col].min()).days / 365.25, 1)
        total_rows = len(df)

        # Find gaps > 1 day
        date_diffs = df[date_col].diff()
        gaps = date_diffs[date_diffs > pd.Timedelta(days=1)]
        gap_days = [g.days - 1 for g in gaps]  # Subtract 1 to get actual gap length

        return {
            'has_data': True,
            'gap_count': len(gap_days),
            'mean_gap_days': round(sum(gap_days) / len(gap_days), 1) if gap_days else 0,
            'max_gap_days': max(gap_days) if gap_days else 0,
            'data_type': 'daily_flows',
            'record_length_years': record_length_years,
            'total_observations': total_rows
        }
    except Exception as e:
        logger.warning(f"  Failed to calculate gaps for {station_id}: {e}")
        return {'has_data': False, 'gap_count': 0, 'mean_gap_days': 0, 'max_gap_days': 0, 'data_type': 'error', 'record_length_years': 0}


def _analyze_quality_codes(flow_csv_path: Path) -> Dict:
    """Analyze HYDAT quality/symbol codes in timeseries data.

    Returns dict with: has_flags, flagged_percent, flag_types, flag_summary
    """
    if not flow_csv_path.exists():
        return {'has_flags': False, 'flagged_percent': 0, 'flag_types': []}

    try:
        df = pd.read_csv(flow_csv_path)

        # HYDAT uses 'quality_symbol' or 'Symbol' column for quality codes (E=estimated, B=backwater, etc.)
        symbol_col = 'quality_symbol' if 'quality_symbol' in df.columns else 'Symbol' if 'Symbol' in df.columns else None

        if not symbol_col:
            return {'has_flags': False, 'flagged_percent': 0, 'flag_types': []}

        # Count non-null, non-empty symbols
        flagged = df[symbol_col].notna() & (df[symbol_col].astype(str).str.strip() != '')
        flagged_count = flagged.sum()
        total_count = len(df)

        if flagged_count == 0:
            return {'has_flags': False, 'flagged_percent': 0, 'flag_types': []}

        # Get unique flag types with counts
        flag_counts = df.loc[flagged, symbol_col].value_counts().to_dict()
        flag_types = list(flag_counts.keys())
        flagged_percent = (flagged_count / total_count * 100) if total_count > 0 else 0

        # Common HYDAT symbols: E=Estimated, B=Backwater, A=Partial day, D=Dry
        flag_descriptions = {
            'E': 'estimated',
            'B': 'backwater',
            'A': 'partial day',
            'D': 'dry'
        }

        flag_summary = ', '.join([f"{flag_descriptions.get(str(flag), str(flag))}: {count}" for flag, count in flag_counts.items()])

        return {
            'has_flags': True,
            'flagged_percent': flagged_percent,
            'flag_types': flag_types,
            'flag_summary': flag_summary
        }
    except Exception as e:
        logger.warning(f"  Failed to analyze quality codes: {e}")
        return {'has_flags': False, 'flagged_percent': 0, 'flag_types': []}


def _create_metadata_file(station_id: str, output_dir: Path, hydat_path: Optional[Path] = None) -> Optional[Dict]:
    """Create and save metadata.json from HYDAT. Returns metadata dict or None."""
    metadata = get_hydat_metadata(station_id, hydat_path)
    try:
        with open(output_dir / '_metadata.json', 'w') as f:
            json.dump(metadata, f, indent=2)
        return metadata
    except Exception as e:
        logger.warning(f"  Failed to write metadata: {e}")
        return None


def _create_qc_status_file(
    station_id: str, output_dir: Path, metadata: Dict, file_status: Dict, has_polygon: bool
) -> bool:
    """Create QC status file based on actual files present. Fail loud on errors."""
    template_file = PROJECT_ROOT / 'demo_data' / 'templates' / '_qc_status.json'
    with open(template_file) as f:
        qc_data = json.load(f)

    now = datetime.now().isoformat()
    qc_data.update({
        'station_id': station_id,
        'qc_date': now,
        'reviewed_by': 'automated_setup',
        'created_timestamp': now,
        'last_modified': now
    })

    # Data completeness
    missing_files = [name for name, exists in [
        ('RCs', file_status['has_rcs']),
        ('corrections', file_status['has_corrections']),
        ('field_visits', file_status['has_field_visits']),
    ] if not exists]

    qc_data['validation_checks']['data_completeness'].update({
        'status': 'warning' if missing_files else 'passed',
        'rating_curves_present': file_status['has_rcs'],
        'corrections_present': file_status['has_corrections'],
        'field_visits_present': file_status['has_field_visits'],
        'missing_files': missing_files
    })

    # Polygon bounds
    polygon_area_km2 = None
    if has_polygon:
        poly_files = list(output_dir.glob(f"{station_id}_polygon_*.geojson"))
        if poly_files:
            poly_gdf = gpd.read_file(poly_files[0])
            if poly_gdf.crs and poly_gdf.crs.is_geographic:
                poly_gdf = poly_gdf.to_crs('EPSG:3857')
            polygon_area_km2 = round(poly_gdf.geometry.area.sum() / 1e6, 1)

    qc_data['validation_checks']['polygon_bounds'].update({
        'status': 'passed' if has_polygon else 'warning',
        'polygon_file_present': has_polygon,
        'crs_valid': has_polygon,
        'geometry_valid': has_polygon,
        'area_km2': polygon_area_km2
    })

    # Metadata completeness
    qc_data['validation_checks']['metadata_completeness'].update({
        'status': 'passed' if metadata.get('station_name') else 'warning',
        'station_name': bool(metadata.get('station_name')),
        'drainage_area': bool(metadata.get('drainage_area_gross_km2')),
        'coordinates': bool(metadata.get('latitude') and metadata.get('longitude'))
    })

    # Hydrometric continuity
    gap_stats = _calculate_timeseries_gaps(output_dir, station_id)
    quality_info = _analyze_quality_codes(output_dir / f"{station_id}_daily_flows.csv")

    if gap_stats['has_data']:
        total_obs = gap_stats['total_observations']
        note = f"{total_obs:,} daily observations"

        if gap_stats['gap_count'] == 0:
            status, note = 'passed', note + ", continuous record"
        elif gap_stats['mean_gap_days'] < 90:
            status = 'passed'
            note += f", minor gaps: {gap_stats['mean_gap_days']:.0f} days avg (N={gap_stats['gap_count']})"
        else:
            status = 'warning'
            note += f", seasonal gaps: {gap_stats['mean_gap_days']:.0f} days avg (N={gap_stats['gap_count']})"

        if quality_info['has_flags']:
            note += f" | {quality_info['flagged_percent']:.1f}% flagged ({quality_info['flag_summary']})"

        qc_data['validation_checks']['hydrometric_continuity'].update({
            'status': status,
            'notes': note,
            'record_length_years': gap_stats['record_length_years']
        })
    else:
        qc_data['validation_checks']['hydrometric_continuity'].update({
            'status': 'warning',
            'notes': 'No timeseries data available'
        })

    # Overall status and notes
    all_passed = all(v['status'] == 'passed' for v in qc_data['validation_checks'].values())
    issues = missing_files.copy()
    if not gap_stats['has_data']:
        issues.append("No timeseries data")
    if not has_polygon:
        issues.append("Missing polygon")

    qc_data.update({
        'overall_status': 'qa_passed' if all_passed else 'needs_revision',
        'qc_notes': f"Issues: {', '.join(issues)}" if issues else "All required data present",
        'next_steps': 'Address missing data' if issues else 'Ready for review'
    })

    with open(output_dir / '_qc_status.json', 'w') as f:
        json.dump(qc_data, f, indent=2)
    return True


def _create_versions_file(station_id: str, output_dir: Path) -> bool:
    """Create versions.json from template. Returns True if successful."""
    template_file = PROJECT_ROOT / 'demo_data' / 'templates' / '_versions.json'
    if not template_file.exists():
        logger.warning("  Versions template not found")
        return False

    try:
        with open(template_file) as f:
            versions = json.load(f)

        now = datetime.now().isoformat()
        versions['station_id'] = station_id
        versions['current_version'] = versions.get('versions', [{}])[0].get('semantic_tag', 'v1.0.0')
        versions['first_committed'] = now
        versions['last_updated'] = now

        # Fill timestamp and replace STATION_ID placeholder in version entries
        for version in versions.get('versions', []):
            version['timestamp'] = now
            # Replace STATION_ID placeholder in polygon_file
            if 'polygon_file' in version:
                version['polygon_file'] = version['polygon_file'].replace('STATION_ID', station_id)

        with open(output_dir / '_versions.json', 'w') as f:
            json.dump(versions, f, indent=2)
        return True
    except Exception as e:
        logger.warning(f"  Failed to create versions file: {e}")
        return False


def _create_data_sources_file(station_id: str, output_dir: Path, file_status: Dict) -> bool:
    """Create data sources file, listing only files that exist. Returns True if successful."""
    template_file = PROJECT_ROOT / 'demo_data' / 'templates' / '_data_sources.json'
    if not template_file.exists():
        logger.warning("  Data sources template not found")
        return False
    try:
        with open(template_file) as f:
            data_sources = json.load(f)

        # Extract source version from WATEROFFICE_DIR name (e.g., 'WaterOffice_RC_Export_20260203' -> '20260203')
        source_version = WATEROFFICE_DIR.name.split('_')[-1] if WATEROFFICE_DIR.exists() else 'unknown'

        data_sources['station_id'] = station_id
        data_sources['extraction_date'] = datetime.now().date().isoformat()

        # Map file status to template data types
        file_type_map = {
            'has_rcs': 'rating_curves',
            'has_corrections': 'corrections',
            'has_field_visits': 'field_visits',
        }

        # Filter sources to only existing files
        existing_sources = []
        for source in data_sources.get('data_sources', []):
            data_type = source.get('data_type')
            status_key = next((k for k, v in file_type_map.items() if v == data_type), None)

            if status_key and file_status.get(status_key):
                suffix = 'RCs' if data_type == 'rating_curves' else data_type
                source['file_path'] = f"{station_id}_{suffix}.csv"
                source['source_version'] = source_version  # Update with actual version
                existing_sources.append(source)

        logger.debug(f"  Data sources found: {len(existing_sources)}/{len(data_sources.get('data_sources', []))}")

        data_sources['data_sources'] = existing_sources

        with open(output_dir / '_data_sources.json', 'w') as f:
            json.dump(data_sources, f, indent=2)
        return True
    except Exception as e:
        logger.warning(f"  Failed to create data sources file: {e}")
        return False


def _check_daymet_data_exists(station_id: str):
    """Check if Daymet data file exists for the station."""
    daymet_path = DAYMET_DIR / 'catchment_daily' / f"{station_id}_catchment_daily.nc"
    if daymet_path.exists() and daymet_path.stat().st_size > 100:
        logger.debug(f"  Daymet data found for {station_id}")
        return daymet_path
    else:
        logger.debug(f"  No Daymet data found for {station_id}")
        return None


def build_neighbour_weights(
    gdf: gpd.GeoDataFrame,
    attribute_cols: list,
    station_id_col: str = 'StationNum',
    k: int = 50,
) -> Dict[str, List]:
    """
    Compute k-NN distances for every station in gdf using rank-normalized
    catchment attributes + projected centroid distance.

    Attributes rank-normalized to [0,1] (non-parametric, NaN → 0.5).
    Spatial coordinates projected to EPSG:3348 (Statistics Canada Lambert),
    then normalized to [0,1] by the maximum observed inter-station distance.

    Returns {station_id: [(nbr_id, raw_dist), ...]} sorted ascending by
    distance, length k.  Raw distances are retained so that per-day IDW
    weights can be computed from whichever neighbours have observed data.
    """
    station_ids = gdf[station_id_col].values
    n = len(station_ids)

    # --- project polygon centroids to metres (Statistics Canada Lambert, EPSG:3348) ---
    centroids = gdf[['geometry']].copy().to_crs('EPSG:3348')
    coords_xy = np.array([[g.x, g.y] for g in centroids.geometry.centroid])

    # --- attribute distances: rank-normalize all columns to [0,1] upfront ---
    # Non-parametric: no distributional assumption. NaN → 0.5 (median rank).
    num_cols = [c for c in attribute_cols if c not in (station_id_col, 'geometry')]
    attr_arr = gdf[num_cols].to_numpy(dtype=float)
    attr_ranked = np.full_like(attr_arr, 0.5)
    for j in range(attr_arr.shape[1]):
        valid = ~np.isnan(attr_arr[:, j])
        n_valid = valid.sum()
        if n_valid > 1:
            attr_ranked[valid, j] = (rankdata(attr_arr[valid, j], method='average') - 1) / (n_valid - 1)

    # --- spatial distances: actual L2 in metres, normalized to [0,1] by max distance ---
    spatial_tree = cKDTree(coords_xy)
    max_dist = spatial_tree.query(coords_xy, k=n, workers=-1)[0].max()
    spatial_norm = coords_xy / max(max_dist, 1.0)  # each axis in [0, ~1]

    # --- build one tree on combined normalized features, query k+1 to exclude self ---
    combined = np.hstack([attr_ranked, spatial_norm])
    tree = cKDTree(combined)
    dists, idxs = tree.query(combined, k=k + 1, workers=-1)

    # Return raw distances (not pre-normalized weights) so that per-day
    # reweighting over the available-data mask is possible at infill time.
    nbr_order: Dict[str, List] = {}
    for i, stn_id in enumerate(station_ids):
        mask = idxs[i] != i
        nbr_dists = dists[i][mask][:k]
        nbr_idxs = idxs[i][mask][:k]
        nbr_order[stn_id] = [(station_ids[j], float(d)) for j, d in zip(nbr_idxs, nbr_dists)]

    logger.info(f"  Built {k}-NN neighbour order for {n} stations ({len(num_cols)} attrs + x,y)")
    return nbr_order


def get_catchment_attributes(wsc_gdf: gpd.GeoDataFrame, attr_df: pd.DataFrame) -> Dict[str, Dict]:
    """Extract catchment attributes from WSC basins GeoDataFrame for all stations."""

    wsc_df = wsc_gdf.copy().set_index('StationNum')
    # attr_df = bcub_attributes_df.copy().set_index('official_id')
    # flag_cols = [col for col in attr_df.columns if col.lower().startswith('flag_')]
    keep_cols = ['prcp (mm/day)', 'high_prcp_freq (fraction)',
       'low_prcp_freq (fraction)', #'high_prcp_duration (days)','low_prcp_duration (days)',
       'tmax (degrees c)', 'tmin (degrees c)',
       'pet (mm/day)', 'swe (kg/m2)', 'srad (w/m2)', #'dayl (s)', 'vp (pa)',
       'drainage_area_km2',
    #    'centroid_lon_deg_e','centroid_lat_deg_n', #'logk_ice_x100', 'porosity_x100',
       'land_use_forest_frac_2020', #'land_use_shrubs_frac_2020',
    #    'land_use_grass_frac_2020', 'land_use_wetland_frac_2020',
    #    'land_use_crops_frac_2020', 'land_use_urban_frac_2020',
    #    'land_use_water_frac_2020', 'land_use_snow_ice_frac_2020',
       'slope_deg', 'elevation_m',
                 ]

    attr_df.set_index('official_id', inplace=True)
    df = pd.concat([wsc_df[['NameNom', 'Date', 'geometry']], attr_df[keep_cols]], axis=1, join='inner')
    df['mean_temperature'] = (df['tmax (degrees c)'] + df['tmin (degrees c)']) / 2
    df['log_drainage_area'] = np.log10(df['drainage_area_km2'])
    df.drop(columns=['tmax (degrees c)', 'tmin (degrees c)', 'drainage_area_km2'], inplace=True)
    keep_cols = [c for c in df.columns if c not in ['NameNom', 'Date']]

    df.drop(columns=['NameNom', 'Date'], inplace=True)
    # add the 'official_id' back as a column from the index
    df.index.name = 'StationNum'
    df.reset_index(inplace=True)
    logger.info(f"  Extracted catchment attributes for {len(df)} stations")
    return df, keep_cols


def build_flow_matrix(
    station_ids: List[str],
    output_dir: Path,
    hydat_conn=None,
    flow_cache: Optional[Dict] = None,
) -> pd.DataFrame:
    """
    Load each station's daily_flows CSV and pivot into a wide DataFrame.

    Returns a DataFrame indexed by date with one column per station (flow_cms).
    For stations without a CSV, queries HYDAT directly if hydat_conn is provided.
    flow_cache (mutable dict) avoids repeat HYDAT queries within the same call.
    """
    if flow_cache is None:
        flow_cache = {}
    series = {}
    for sid in station_ids:
        fpath = output_dir / sid / f"{sid}_daily_flows.csv"
        if fpath.exists():
            try:
                df = pd.read_csv(fpath, parse_dates=['date'], usecols=['date', 'flow_cms'])
                s = df.dropna(subset=['date']).set_index('date')['flow_cms']
                s.index = pd.to_datetime(s.index)
                series[sid] = s
            except Exception as e:
                logger.warning(f"  flow_matrix: failed to load {sid}: {e}")
                series[sid] = pd.Series(dtype=float, name=sid)
        elif sid in flow_cache:
            series[sid] = flow_cache[sid]
        elif hydat_conn is not None:
            try:
                df = query_hydat_database(sid, hydat_conn, table="DLY_FLOWS")
                if not df.empty and 'flow_cms' in df.columns:
                    s = df.dropna(subset=['date']).set_index('date')['flow_cms']
                    s.index = pd.to_datetime(s.index)
                    flow_cache[sid] = s
                    series[sid] = s
                else:
                    series[sid] = pd.Series(dtype=float, name=sid)
            except Exception as e:
                logger.warning(f"  flow_matrix: failed to query HYDAT for {sid}: {e}")
                series[sid] = pd.Series(dtype=float, name=sid)
        else:
            logger.debug(f"  flow_matrix: no CSV for {sid}, column will be NaN")
            series[sid] = pd.Series(dtype=float, name=sid)

    matrix = pd.DataFrame(series)
    matrix.index = pd.to_datetime(matrix.index)
    matrix.sort_index(inplace=True)
    logger.info(f"  Built flow matrix: {len(matrix)} dates × {len(station_ids)} stations")
    return matrix


def infill_daily_flows(
    target_id: str,
    nbr_order: List,
    flow_matrix: pd.DataFrame,
    area_lookup: Dict[str, float],
    k_use: int = 5,
    min_neighbours: int = 3,
) -> Optional[pd.DataFrame]:
    """
    Gap-fill a target station's daily flow record using per-day IDW from
    the k_use nearest neighbours (by pre-computed attribute+spatial distance)
    that have observed (non-NaN) flow on each missing day.

    Algorithm per missing day:
      1. Scan nbr_order (ascending distance) for the first k_use neighbours
         with a non-NaN value on that date.
      2. If fewer than min_neighbours qualify, flag as 'unfillable' (leave NaN).
      3. Convert each qualifying neighbour's flow_cms to specific discharge
         (m³/s/km²) using drainage area from area_lookup.
      4. Compute IDW weights from the raw distances of the qualifying neighbours,
         normalize to sum=1, apply to specific discharges.
      5. Convert back to flow_cms using the target's drainage area.

    Returns the target's flow column as a complete daily Series with a
    companion flag Series, or None if the target has no flow data at all.
    The output is a DataFrame with columns: date, flow_cms, infill_flag.
    """
    if target_id not in flow_matrix.columns:
        logger.warning(f"  {target_id} not in flow matrix, skipping infill")
        return None

    target_area = area_lookup.get(target_id)
    if not target_area or target_area <= 0:
        logger.warning(f"  {target_id} has no valid drainage area, skipping infill")
        return None

    flow_col = flow_matrix[target_id].copy()
    # Only process dates within the record span (not before first or after last obs)
    obs_dates = flow_col.dropna().index
    if obs_dates.empty:
        logger.warning(f"  {target_id} has no observed flow at all, skipping infill")
        return None

    full_range = pd.date_range(obs_dates.min(), obs_dates.max(), freq='D')
    flow_col = flow_col.reindex(full_range)
    flag_col = pd.Series('observed', index=full_range, dtype=object)

    missing_mask = flow_col.isna()
    n_missing = missing_mask.sum()
    if n_missing == 0:
        flag_col.name = 'infill_flag'
        return pd.DataFrame({'flow_cms': flow_col, 'infill_flag': flag_col}).reset_index(names='date')

    # Pre-filter nbr_order to neighbours present in flow_matrix and with valid area
    candidates = [
        (nbr_id, dist)
        for nbr_id, dist in nbr_order
        if nbr_id in flow_matrix.columns and area_lookup.get(nbr_id, 0) > 0
    ]

    n_filled = 0
    n_unfillable = 0
    for date in full_range[missing_mask]:
        qualifiers = []
        for nbr_id, dist in candidates:
            if date not in flow_matrix.index:
                continue
            val = flow_matrix.at[date, nbr_id]
            if pd.notna(val):
                qualifiers.append((nbr_id, dist, val))
            if len(qualifiers) == k_use:
                break

        if len(qualifiers) < min_neighbours:
            flag_col.at[date] = 'unfillable'
            n_unfillable += 1
            continue

        # Convert to specific discharge, compute IDW, convert back
        raw_dists = np.array([d for _, d, _ in qualifiers])
        nbr_q_unit = np.array([v / area_lookup[nbr_id] for nbr_id, _, v in qualifiers])
        weights = 1.0 / np.maximum(raw_dists, 1e-6)
        weights /= weights.sum()
        infilled_unit_q = (weights * nbr_q_unit).sum()
        flow_col.at[date] = infilled_unit_q * target_area
        flag_col.at[date] = f'infilled_{len(qualifiers)}'
        n_filled += 1

    logger.info(
        f"  {target_id}: {n_missing} missing days — "
        f"{n_filled} filled, {n_unfillable} unfillable"
    )
    flag_col.name = 'infill_flag'
    return pd.DataFrame({'flow_cms': flow_col, 'infill_flag': flag_col}).reset_index(names='date')


def _hyd_year(date: pd.Timestamp) -> int:
    """Return the start year of the Oct–Sep hydrological year containing *date*."""
    return date.year if date.month >= 10 else date.year - 1


def calculate_double_mass_curve(
    station_id: str,
    daymet_path: Path,
    flow_path: Path,
    output_path: Path,
    drainage_area_km2: float,
    min_days_per_year: int = 355,
) -> Optional[pd.DataFrame]:
    """
    Compute a daily double mass curve (cumulative precip vs. cumulative flow).

    Complete-year filter: hydrological years (Oct–Sep) with fewer than
    min_days_per_year non-NaN flow values, or fewer than min_days_per_year
    prcp values, are dropped entirely — their days do not contribute to the
    cumulative sums.  This prevents partial years from skewing the slope.

    Flow is converted to mm/day before accumulating, making it directly
    comparable to Daymet prcp (already mm/day).

    Output CSV columns (one row per retained day):
        date, hyd_year, prcp_mm_day, flow_mm_day,
        cumulative_precip_mm, cumulative_flow_mm, runoff_coefficient,
        infill_flag
    """
    # --- load flow (may include infill_flag column from Pass 2) ---
    flow_df = pd.read_csv(flow_path, parse_dates=['date'])
    flow_df = flow_df.dropna(subset=['date']).set_index('date').sort_index()
    if 'flow_cms' not in flow_df.columns or flow_df['flow_cms'].isna().all():
        logger.warning(f"  {station_id}: no flow data for double mass curve")
        return None

    # Convert flow_cms → mm/day:  (m³/s) / (km² × 1e6 m²/km²) × 86400 s/day × 1000 mm/m
    flow_df['flow_mm_day'] = flow_df['flow_cms'] / (drainage_area_km2 * 1e6) * 86400 * 1000

    # --- load Daymet prcp (mm/day) ---
    ds = xr.open_dataset(daymet_path)
    prcp = ds['prcp'].to_series().rename('prcp_mm_day')
    ds.close()
    prcp.index = pd.to_datetime(prcp.index)

    # --- assign hydrological year to each day ---
    flow_df['hyd_year'] = [_hyd_year(d) for d in flow_df.index]
    prcp_hy = pd.Series([_hyd_year(d) for d in prcp.index], index=prcp.index, name='hyd_year')

    # --- identify qualifying hydrological years ---
    qualifying_years = set()
    for hy, grp in flow_df.groupby('hyd_year'):
        if grp['flow_mm_day'].notna().sum() < min_days_per_year:
            continue
        prcp_yr = prcp.loc[prcp_hy == hy]
        if prcp_yr.notna().sum() < min_days_per_year:
            continue
        qualifying_years.add(hy)

    if not qualifying_years:
        logger.warning(f"  {station_id}: no qualifying hydrological years for double mass curve")
        return None

    # --- build daily output from qualifying years only ---
    daily = flow_df[flow_df['hyd_year'].isin(qualifying_years)][
        ['hyd_year', 'flow_mm_day', 'flow_cms']
    ].copy()
    if 'infill_flag' in flow_df.columns:
        daily['infill_flag'] = flow_df.loc[daily.index, 'infill_flag']
    else:
        daily['infill_flag'] = 'observed'

    daily = daily.join(prcp.rename('prcp_mm_day'), how='left')
    daily.sort_index(inplace=True)

    daily['cumulative_precip_mm'] = daily['prcp_mm_day'].cumsum()
    daily['cumulative_flow_mm']   = daily['flow_mm_day'].cumsum()
    daily['runoff_coefficient']   = (
        daily['cumulative_flow_mm'] / daily['cumulative_precip_mm'].replace(0, np.nan)
    )

    out = daily[['hyd_year', 'prcp_mm_day', 'flow_mm_day',
                 'cumulative_precip_mm', 'cumulative_flow_mm',
                 'runoff_coefficient', 'infill_flag']].reset_index(names='date')
    out.to_csv(output_path, index=False)
    logger.info(
        f"  {station_id}: double mass curve written "
        f"({len(qualifying_years)} qualifying years, {len(out)} days, "
        f"RC={daily['runoff_coefficient'].iloc[-1]:.3f})"
    )


def populate_station(
    station_id: str, data_dir: Path, output_dir: Path,
    hydat_path: Optional[Path] = None, wsc_gdf: Optional[gpd.GeoDataFrame] = None,
) -> Dict:
    """Create all files for a station: metadata, QC status, versions, polygon, and data files."""
    logger.info(f"Processing {station_id}...")
    station_dir = output_dir / station_id
    station_dir.mkdir(parents=True, exist_ok=True)

    files_created = []

    # 1. Copy data files and capture what exists
    file_status = _copy_station_data_files(station_id, data_dir, station_dir)
    files_created.extend([f for f, exists in file_status.items() if exists])

    # 2. Create metadata
    metadata = _create_metadata_file(station_id, station_dir, hydat_path) or {}
    if metadata:
        files_created.append('_metadata.json')

    # 3. Extract polygon (creates _versions.json with source metadata if found)
    has_polygon = wsc_gdf is not None and extract_polygon(station_id, station_dir, wsc_gdf)
    if has_polygon:
        files_created.extend(['polygon', '_versions.json'])

    # 4. Create versions skeleton if polygon extraction didn't already create it
    if not has_polygon and _create_versions_file(station_id, station_dir):
        files_created.append('_versions.json')

    # 5. Create data sources file
    if _create_data_sources_file(station_id, station_dir, file_status):
        files_created.append('_data_sources.json')

    # 6. Extract timeseries from HYDAT
    if hydat_path and hydat_path.exists():
        try:
            conn = sqlite3.connect(hydat_path)

            flow_path = station_dir / f"{station_id}_daily_flows.csv"
            try:
                query_hydat_database(station_id, conn, flow_path, table="DLY_FLOWS")
                if flow_path.exists() and flow_path.stat().st_size > 100:
                    files_created.append('daily_flows')
                    logger.info(f"  ✓ Extracted daily flows ({flow_path.stat().st_size} bytes)")
                else:
                    logger.warning(f"  ✗ Daily flows NOT created for {station_id}")
            except Exception as e:
                logger.warning(f"  ✗ Daily flows extraction failed for {station_id}: {e}")

            level_path = station_dir / f"{station_id}_daily_levels.csv"
            try:
                query_hydat_database(station_id, conn, level_path, table="DLY_LEVELS")
                if level_path.exists() and level_path.stat().st_size > 100:
                    files_created.append('daily_levels')
            except Exception as e:
                logger.warning(f"  ✗ Daily levels extraction failed for {station_id}: {e}")

            peaks_path = station_dir / f"{station_id}_annual_instant_peaks.csv"
            try:
                query_annual_instant_peaks(station_id, peaks_path, conn)
                if peaks_path.exists() and peaks_path.stat().st_size > 50:
                    files_created.append('annual_peaks')
            except Exception as e:
                logger.warning(f"  ✗ Annual peaks extraction failed for {station_id}: {e}")

            conn.close()
        except Exception as e:
            logger.error(f"  ✗ HYDAT failed for {station_id}: {e}")
    else:
        logger.warning(f"  ✗ HYDAT not found at {hydat_path}")

    # 7. QC status (depends on all above)
    _create_qc_status_file(station_id, station_dir, metadata, file_status, has_polygon)

    return {'station_id': station_id, 'files': files_created}



def main():
    """
    Two-pass execution:
      Pass 1 — extract HYDAT timeseries for all stations.
      Pass 2 — gap-fill each station using observed (never infilled) neighbour
               flows; writes infilled flow + flag columns back to the same CSV.
    """
    parser = argparse.ArgumentParser(description='Populate demonstration station data')
    parser.add_argument('--stations-file', type=Path, default=PROJECT_ROOT / 'demo_data' / 'DEMO_STATIONS.txt')
    parser.add_argument('--data-dir', type=Path, default=DATA_DIR)
    parser.add_argument('--output-dir', type=Path, default=PROJECT_ROOT / 'book_docs' / 'stations')
    parser.add_argument('--hydat-path', type=Path, default=HYDAT_DB_PATH)
    parser.add_argument('--force', action='store_true', help='Overwrite existing output files')
    parser.add_argument('--verbose', action='store_true')

    args = parser.parse_args()
    if args.verbose:
        logger.setLevel(logging.DEBUG)

    if not args.stations_file.exists():
        logger.error(f"Stations file not found: {args.stations_file}")
        sys.exit(1)
    if not args.data_dir.exists():
        logger.error(f"Data directory not found: {args.data_dir}")
        sys.exit(1)

    station_ids = read_station_list(args.stations_file)
    if not station_ids:
        logger.error("No valid station IDs found")
        sys.exit(1)

    # --- load WSC basins ---
    # demo_wsc_gdf: demo stations only, used for polygon extraction
    # wsc_gdf_full: full WSC basins intersected with attr_df, used for kNN donor pool
    temp_basin_path = WSC_BASINS_DIR / 'WSC_basins_sample.geojson'
    if not temp_basin_path.exists():
        wsc_gdf_full = load_wsc_basins()
        demo_wsc_gdf = wsc_gdf_full[wsc_gdf_full['StationNum'].isin(station_ids)]
        demo_wsc_gdf.to_file(temp_basin_path, driver='GeoJSON')
    else:
        demo_wsc_gdf = gpd.read_file(temp_basin_path)
        wsc_gdf_full = load_wsc_basins()

    args.output_dir.mkdir(parents=True, exist_ok=True)

    # --- build neighbour order using full WSC+attr intersection as donor pool ---
    attr_df = pd.read_csv(CATCHMENT_ATTRIBUTES_FILE)
    wsc_attributes, attrs_list = get_catchment_attributes(wsc_gdf_full, attr_df)
    nbr_order = build_neighbour_weights(wsc_attributes, attrs_list)

    # --- collect all unique donor station IDs referenced in neighbour order ---
    demo_set = set(station_ids)
    donor_ids = [sid for sid in {nbr_id for nbrs in nbr_order.values() for nbr_id, _ in nbrs} if sid not in demo_set]

    # --- open one persistent HYDAT connection for area lookup + flow matrix queries ---
    hydat_conn = sqlite3.connect(args.hydat_path) if args.hydat_path and args.hydat_path.exists() else None

    # --- build drainage area lookup from HYDAT metadata (demo + donor stations) ---
    area_lookup: Dict[str, float] = {}
    if hydat_conn is not None:
        for sid in station_ids + donor_ids:
            meta = get_hydat_metadata(sid, args.hydat_path)
            # prefer effective area; fall back to gross
            area = meta.get('drainage_area_effect_km2') or meta.get('drainage_area_gross_km2')
            if area:
                area_lookup[sid] = float(area)
            elif sid in demo_set:
                logger.warning(f"  No drainage area for {sid}, will skip infill")
    logger.info(f"  Drainage areas loaded for {len(area_lookup)}/{len(station_ids) + len(donor_ids)} stations ({len(donor_ids)} donors)")

    logger.info("=" * 60)
    logger.info(f"Pass 1: extracting HYDAT data for {len(station_ids)} stations")
    logger.info("=" * 60)

    for sid in station_ids:
        versions_json = args.output_dir / sid / '_versions.json'
        if not args.force and versions_json.exists():
            logger.info(f"  Skipping {sid} Pass 1 (already complete, use --force to overwrite)")
            continue
        populate_station(sid, args.data_dir, args.output_dir, args.hydat_path, demo_wsc_gdf)

    logger.info("=" * 60)
    logger.info("Pass 2: building flow matrix and gap-filling")
    logger.info("=" * 60)

    flow_cache: Dict[str, pd.Series] = {}
    flow_matrix = build_flow_matrix(station_ids + donor_ids, args.output_dir, hydat_conn=hydat_conn, flow_cache=flow_cache)

    n_filled_stations = 0
    for sid in station_ids:
        if sid not in nbr_order:
            if _check_daymet_data_exists(sid):
                logger.warning(f"  {sid} not in neighbour order but has Daymet data — infill skipped, DMC may be incomplete")
            else:
                logger.debug(f"  {sid} not in neighbour order (no Daymet data, infill not needed)")
            continue
        out_path = args.output_dir / sid / f"{sid}_daily_flows.csv"
        if not args.force and out_path.exists():
            try:
                _cols = pd.read_csv(out_path, nrows=0).columns
                if 'infill_flag' in _cols:
                    logger.info(f"  Skipping {sid} Pass 2 (already infilled, use --force to overwrite)")
                    n_filled_stations += 1
                    continue
            except Exception:
                pass
        result = infill_daily_flows(sid, nbr_order[sid], flow_matrix, area_lookup)
        if result is None:
            continue
        # preserve original quality_symbol column if present
        try:
            original = pd.read_csv(out_path, parse_dates=['date'])
            if 'quality_symbol' in original.columns:
                result = result.merge(original[['date', 'value', 'quality_symbol']], on='date', how='left')
        except Exception:
            pass
        result.to_csv(out_path, index=False)
        n_filled_stations += 1

        # compute double-mass curve
        daymet_path = _check_daymet_data_exists(sid)
        dmc_path = args.output_dir / sid / f"{sid}_double_mass.csv"
        if daymet_path is not None and (args.force or not dmc_path.exists()):
            calculate_double_mass_curve(
                station_id=sid,
                daymet_path=daymet_path,
                flow_path=out_path,
                output_path=dmc_path,
                drainage_area_km2=area_lookup.get(sid),
            )

    logger.info("=" * 60)
    logger.info(f"Pass 2 complete: infilled {n_filled_stations}/{len(station_ids)} stations")
    logger.info("=" * 60)
    if hydat_conn is not None:
        hydat_conn.close()
    sys.exit(0)


if __name__ == '__main__':
    main()
