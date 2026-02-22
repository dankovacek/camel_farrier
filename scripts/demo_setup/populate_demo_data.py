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

import pandas as pd
import geopandas as gpd

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
    PROJECT_ROOT,
    DATA_DIR,
    HYDAT_DB_PATH,
    WSC_BASINS_DIR,
    COMMON_DATA_DIR,
    WATEROFFICE_DIR
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


def populate_station(
    station_id: str, data_dir: Path, output_dir: Path,
    hydat_path: Optional[Path] = None, wsc_gdf: Optional[gpd.GeoDataFrame] = None
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
    if _create_metadata_file(station_id, station_dir, hydat_path):
        files_created.append('_metadata.json')
        metadata = get_hydat_metadata(station_id, hydat_path)
    else:
        metadata = {}

    # 3. Extract polygon (if available)
    has_polygon = wsc_gdf is not None and extract_polygon(station_id, station_dir, wsc_gdf)

    if has_polygon:
        files_created.append('polygon')
        files_created.append('_versions.json')  # extract_polygon() creates _versions.json with source_metadata

    # 4. Create versions file (only if polygon extraction didn't already create it)
    if not has_polygon and _create_versions_file(station_id, station_dir):
        files_created.append('_versions.json')

    # 5. Create data sources file
    if _create_data_sources_file(station_id, station_dir, file_status):
        files_created.append('_data_sources.json')

    # 6. Extract time series data from HYDAT (if available)
    if hydat_path and hydat_path.exists():
        try:
            conn = sqlite3.connect(hydat_path)
            logger.debug(f"  Connected to HYDAT database: {hydat_path}")

            # Extract daily flows
            flow_path = station_dir / f"{station_id}_daily_flows.csv"
            try:
                result = query_hydat_database(station_id, conn, flow_path, table="DLY_FLOWS")
                if flow_path.exists() and flow_path.stat().st_size > 100:
                    files_created.append('daily_flows')
                    logger.info(f"  ✓ Extracted daily flows ({flow_path.stat().st_size} bytes)")
                else:
                    logger.warning(f"  ✗ Daily flows file NOT created or empty for {station_id}")
            except Exception as e:
                logger.warning(f"  ✗ Daily flows extraction failed for {station_id}: {e}")

            # Extract daily levels
            level_path = station_dir / f"{station_id}_daily_levels.csv"
            try:
                result = query_hydat_database(station_id, conn, level_path, table="DLY_LEVELS")
                if level_path.exists() and level_path.stat().st_size > 100:
                    files_created.append('daily_levels')
                    logger.info(f"  ✓ Extracted daily levels ({level_path.stat().st_size} bytes)")
                else:
                    logger.warning(f"  ✗ Daily levels file NOT created or empty for {station_id}")
            except Exception as e:
                logger.warning(f"  ✗ Daily levels extraction failed for {station_id}: {e}")

            # Extract annual peaks
            peaks_path = station_dir / f"{station_id}_annual_instant_peaks.csv"
            try:
                query_annual_instant_peaks(station_id, peaks_path, conn)
                if peaks_path.exists() and peaks_path.stat().st_size > 50:
                    files_created.append('annual_peaks')
                    logger.info(f"  ✓ Extracted annual peaks ({peaks_path.stat().st_size} bytes)")
                else:
                    logger.warning(f"  ✗ Annual peaks file NOT created or empty for {station_id}")
            except Exception as e:
                logger.warning(f"  ✗ Annual peaks extraction failed for {station_id}: {e}")

            conn.close()
        except Exception as e:
            logger.error(f"  ✗ HYDAT connection or extraction failed for {station_id}: {e}")
    else:
        logger.warning(f"  ✗ HYDAT database not found at {hydat_path}, skipping timeseries extraction")

    # 7. Create QC status AFTER timeseries extraction (based on actual files present)
    if _create_qc_status_file(station_id, station_dir, metadata, file_status, has_polygon):
        files_created.append('_qc_status.json')

    success = len(files_created) >= 3
    logger.info(f"  ✓ Created {len(files_created)} files")

    return {'station_id': station_id, 'success': success, 'files': len(files_created), 'errors': []}


def main():
    """Main execution: load stations and WSC basins once, then process each station."""
    parser = argparse.ArgumentParser(description='Populate demonstration station data')
    parser.add_argument('--stations-file', type=Path, default=PROJECT_ROOT / 'demo_data' / 'DEMO_STATIONS.txt')
    parser.add_argument('--data-dir', type=Path, default=DATA_DIR)
    parser.add_argument('--output-dir', type=Path, default=PROJECT_ROOT / 'book_docs' / 'stations')
    parser.add_argument('--hydat-path', type=Path, default=HYDAT_DB_PATH)
    parser.add_argument('--verbose', action='store_true')

    args = parser.parse_args()
    if args.verbose:
        logger.setLevel(logging.DEBUG)

    # Validate inputs
    if not args.stations_file.exists():
        logger.error(f"Stations file not found: {args.stations_file}")
        sys.exit(1)
    if not args.data_dir.exists():
        logger.error(f"Data directory not found: {args.data_dir}")
        sys.exit(1)

    # Read stations and load WSC basins once
    station_ids = read_station_list(args.stations_file)
    if not station_ids:
        logger.error("No valid station IDs found")
        sys.exit(1)

    temp_basin_path = WSC_BASINS_DIR / 'WSC_basins_sample.geojson'
    if not os.path.exists(temp_basin_path):
        wsc_gdf = load_wsc_basins()
        # filter for only needed stations
        wsc_gdf = wsc_gdf[wsc_gdf['StationNum'].isin(station_ids)]
        # write to temp file for faster access
        wsc_gdf.to_file(temp_basin_path, driver='GeoJSON')
    else:
        wsc_gdf = gpd.read_file(temp_basin_path)

    # Copy wateroffice data to data dir if not already present
    for folder in ['rating_curves', 'corrections', 'field_visits']:
        source_folder = WATEROFFICE_DIR / folder
        dest_folder = args.data_dir / folder

    args.output_dir.mkdir(parents=True, exist_ok=True)

    logger.info("=" * 60)
    logger.info(f"Populating {len(station_ids)} stations...")
    logger.info(f"  Data source: {args.data_dir}")
    logger.info(f"  Output: {args.output_dir}")
    logger.info("=" * 60)

    # Process all stations
    results = [populate_station(sid, args.data_dir, args.output_dir, args.hydat_path, wsc_gdf)
               for sid in station_ids]

    # Summary
    successful = sum(1 for r in results if r['success'])
    logger.info("=" * 60)
    logger.info(f"Summary: {successful}/{len(results)} successful")
    if successful < len(results):
        logger.info("Failed stations:")
        for r in results:
            if not r['success']:
                logger.info(f"  - {r['station_id']}: {', '.join(r['errors'])}")
    logger.info("=" * 60)

    sys.exit(0 if successful == len(results) else 1)


if __name__ == '__main__':
    main()
