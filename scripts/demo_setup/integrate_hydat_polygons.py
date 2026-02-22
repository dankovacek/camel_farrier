#!/usr/bin/env python3
"""
Integrate HYDAT Polygons into Station Records

Loads alternative catchment polygons from HYDAT source, compares with existing
polygons, and integrates as new versions with proper QC validation and comparison metrics.

Usage:
    python integrate_hydat_polygons.py
    python integrate_hydat_polygons.py --stations-file custom_list.txt --dry-run
"""

import argparse
import sys
import json
import logging
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from datetime import datetime
from collections import defaultdict

import pandas as pd
import geopandas as gpd
from shapely.ops import unary_union
from shapely.validation import explain_validity
import pyproj

# Add project root to path
PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

# Cache directory for extracted polygons
CACHE_DIR = PROJECT_ROOT / '.cache' / 'polygons'

from scripts.config.paths import (
    PROJECT_ROOT,
    HYDAT_POLYGONS_DIR,
    STATIONS_DIR,
    DEMO_DATA_DIR,
    HYDAT_REVISION_METRICS_CSV
)

logging.basicConfig(level=logging.INFO, format='%(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def get_laea_crs(polygon_gdf: gpd.GeoDataFrame) -> pyproj.CRS:
    """Get Lambert Azimuthal Equal Area CRS centered at polygon centroid.

    Args:
        polygon_gdf: GeoDataFrame with polygon geometry

    Returns:
        pyproj CRS object for LAEA projection
    """
    # Get centroid in lon/lat
    # ignore CRS warning here since we just need the centroid for projection definition
    from warnings import filterwarnings
    filterwarnings("ignore", category=UserWarning, message="Geometry is in a geographic CRS")
    centroid = polygon_gdf.to_crs('EPSG:4326').geometry.centroid.iloc[0]
    lon, lat = centroid.x, centroid.y

    # Create LAEA projection centered at centroid
    proj_string = f"+proj=laea +lat_0={lat} +lon_0={lon} +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"
    return pyproj.CRS.from_proj4(proj_string)


def compare_polygons(old_gdf: gpd.GeoDataFrame, new_gdf: gpd.GeoDataFrame) -> Dict:
    """Compare two polygon GeoDataFrames and return similarity metrics.

    Args:
        old_gdf: Existing polygon (v1.0.0)
        new_gdf: New polygon from HYDAT source

    Returns:
        Dict with jaccard_index, percent_area_diff, absolute_area_diff_km2
    """
    # Ensure both are in same CRS for centroid calculation
    old_wgs84 = old_gdf.to_crs('EPSG:4326')
    new_wgs84 = new_gdf.to_crs('EPSG:4326')

    # Get LAEA projection centered at combined centroid
    combined = gpd.GeoDataFrame(
        geometry=pd.concat([old_wgs84.geometry, new_wgs84.geometry]),
        crs='EPSG:4326'
    )
    laea_crs = get_laea_crs(combined)

    # Project both to LAEA for accurate area calculations
    old_proj = old_wgs84.to_crs(laea_crs)
    new_proj = new_wgs84.to_crs(laea_crs)

    # Get geometries
    old_geom = old_proj.geometry.iloc[0]
    new_geom = new_proj.geometry.iloc[0]

    # Calculate Jaccard similarity
    intersection = old_geom.intersection(new_geom).area
    union = old_geom.union(new_geom).area
    jaccard_index = intersection / union if union > 0 else 0.0

    # Calculate areas in km²
    old_area_km2 = old_geom.area / 1e6
    new_area_km2 = new_geom.area / 1e6

    # Calculate differences
    absolute_diff = abs(new_area_km2 - old_area_km2)
    percent_diff = ((new_area_km2 - old_area_km2) / old_area_km2) * 100 if old_area_km2 > 0 else 0.0

    return {
        'jaccard_index': round(jaccard_index, 4),
        'old_area_km2': round(old_area_km2, 4),
        'new_area_km2': round(new_area_km2, 4),
        'absolute_area_diff_km2': round(absolute_diff, 4),
        'percent_area_diff': round(percent_diff, 2)
    }


def determine_version_increment(polygon_attributes: Dict) -> str:
    """Determine if new polygon should be major or minor version increment.

    Args:
        polygon_attributes: Dict of polygon attributes (Version, Status, etc.)

    Returns:
        'major' or 'minor'
    """
    # Keywords indicating preliminary/draft status → minor increment
    minor_keywords = ['preliminary', 'draft', 'prerelease', 'provisional', 'interim', 'working']

    # Keywords indicating final/reviewed status → major increment
    major_keywords = ['final', 'reviewed', 'approved', 'official', 'validated', 'published']

    # Check Version field first
    version = str(polygon_attributes.get('Version', '')).lower()
    status = str(polygon_attributes.get('Status', '')).lower()
    remark = str(polygon_attributes.get('Remark', '')).lower()

    combined_text = f"{version} {status} {remark}"

    # Check for major keywords first
    if any(keyword in combined_text for keyword in major_keywords):
        return 'major'

    # Check for minor keywords
    if any(keyword in combined_text for keyword in minor_keywords):
        return 'minor'

    # Default to minor if uncertain
    return 'minor'


def increment_semantic_version(current_version: str, increment_type: str) -> str:
    """Increment semantic version string.

    Args:
        current_version: Current version (e.g., 'v1.0.0', 'v2.1.0')
        increment_type: 'major' or 'minor'

    Returns:
        New version string
    """
    # Parse current version
    version_str = current_version.lstrip('v')
    parts = version_str.split('.')
    major = int(parts[0])
    minor = int(parts[1]) if len(parts) > 1 else 0
    patch = int(parts[2]) if len(parts) > 2 else 0

    if increment_type == 'major':
        major += 1
        minor = 0
        patch = 0
    else:  # minor
        minor += 1
        patch = 0

    return f"v{major}.{minor}.{patch}"


def extract_hydat_polygon(
    station_id: str,
    hydat_gdf: gpd.GeoDataFrame,
    output_dir: Path,
    version_tag: str
) -> Optional[Path]:
    """Extract and save HYDAT polygon for a station.

    Args:
        station_id: Station identifier (e.g., '07AF010')
        hydat_gdf: GeoDataFrame with HYDAT polygons for region
        output_dir: Station directory to save polygon
        version_tag: Semantic version tag (e.g., 'v1.1.0')

    Returns:
        Path to saved polygon file, or None if extraction failed
    """
    # Filter for this station and make a copy to avoid SettingWithCopyWarning
    station_gdf = hydat_gdf[hydat_gdf['StationNum'] == station_id].copy()

    if station_gdf.empty:
        return None

    try:
        # Validate geometry and fix if needed
        if not station_gdf.geometry.is_valid.all():

            invalid_reason = explain_validity(station_gdf.geometry.iloc[0])
            logger.warning(f"  Invalid geometry for {station_id}: {invalid_reason}")
            logger.warning(f"  Attempting to fix with buffer(0) operation")
            # Use .loc to avoid warnings, buffer(0) fixes self-intersections and other issues
            station_gdf.loc[:, 'geometry'] = station_gdf.geometry.buffer(0)

            # Verify fix worked
            if station_gdf.geometry.is_valid.all():
                logger.info(f"  ✓ Geometry fixed successfully")
            else:
                logger.error(f"  ✗ Geometry still invalid after buffer operation")
                return None

        # Transform to EPSG:3857 (Web Mercator) for consistency with existing polygons
        station_gdf = station_gdf.to_crs('EPSG:3857')

        # Save polygon file
        output_file = output_dir / f"{station_id}_polygon_{version_tag}.geojson"
        station_gdf.to_file(output_file, driver='GeoJSON')

        return output_file

    except Exception as e:
        logger.error(f"  Failed to extract polygon for {station_id}: {e}")
        return None


def extract_hydat_pour_point(
    station_id: str,
    pour_point_gdf: gpd.GeoDataFrame,
    output_dir: Path
) -> Optional[Path]:
    """Extract and save HYDAT pour point for a station.

    Args:
        station_id: Station identifier (e.g., '07AF010')
        pour_point_gdf: GeoDataFrame with HYDAT pour points for region
        output_dir: Station directory to save pour point

    Returns:
        Path to saved pour point file, or None if extraction failed
    """
    # Filter for this station and make a copy
    station_pp = pour_point_gdf[pour_point_gdf['StationNum'] == station_id].copy()

    if station_pp.empty:
        return None

    try:
        # Validate geometry
        if not station_pp.geometry.is_valid.all():
            logger.warning(f"  Invalid pour point geometry for {station_id}")
            return None

        # Transform to EPSG:3857 (Web Mercator) for consistency
        station_pp = station_pp.to_crs('EPSG:3857')

        # Save pour point file
        output_file = output_dir / f"{station_id}_pour_point.geojson"
        station_pp.to_file(output_file, driver='GeoJSON')

        return output_file

    except Exception as e:
        logger.error(f"  Failed to extract pour point for {station_id}: {e}")
        return None


def extract_hydat_station_location(
    station_id: str,
    station_loc_gdf: gpd.GeoDataFrame,
    output_dir: Path
) -> Optional[Path]:
    """Extract and save HYDAT station location for a station.

    Args:
        station_id: Station identifier (e.g., '07AF010')
        station_loc_gdf: GeoDataFrame with HYDAT station locations for region
        output_dir: Station directory to save station location

    Returns:
        Path to saved station location file, or None if extraction failed
    """
    # Filter for this station and make a copy
    station_loc = station_loc_gdf[station_loc_gdf['StationNum'] == station_id].copy()

    if station_loc.empty:
        return None

    try:
        # Validate geometry
        if not station_loc.geometry.is_valid.all():
            logger.warning(f"  Invalid station location geometry for {station_id}")
            return None

        # Transform to EPSG:3857 (Web Mercator) for consistency
        station_loc = station_loc.to_crs('EPSG:3857')

        # Save station location file
        output_file = output_dir / f"{station_id}_station_location.geojson"
        station_loc.to_file(output_file, driver='GeoJSON')

        return output_file

    except Exception as e:
        logger.error(f"  Failed to extract station location for {station_id}: {e}")
        return None


def add_polygon_version(
    station_id: str,
    station_dir: Path,
    new_version_tag: str,
    polygon_file: str,
    data_source: str,
    old_version_tag: str,
    comparison_metrics: Optional[Dict] = None,
    source_metadata: Optional[Dict] = None
) -> bool:
    """Add new polygon version with graph-based comparison structure.

    Args:
        station_id: Station identifier
        station_dir: Path to station directory
        new_version_tag: New semantic version (e.g., 'v2.0.0')
        polygon_file: Filename of polygon (e.g., '07AF010_polygon_v2.0.0.geojson')
        data_source: Source of polygon (e.g., 'HYDAT_polygons')
        old_version_tag: Previous version tag for comparison key
        comparison_metrics: Optional dict with Jaccard/area comparison metrics
        source_metadata: Optional dict with source file metadata (Version, Status, etc.)

    Returns:
        True if successful
    """
    versions_file = station_dir / '_versions.json'

    if not versions_file.exists():
        logger.warning(f"  _versions.json not found for {station_id}")
        return False

    try:
        with open(versions_file) as f:
            versions_data = json.load(f)

        # Create new version entry (clean, no embedded comparisons)
        timestamp = datetime.now().isoformat()
        new_entry = {
            'semantic_tag': new_version_tag,
            'timestamp': timestamp,
            'data_source': data_source,
            'polygon_file': polygon_file
        }

        # Add source metadata if provided - expose ALL fields from source
        if source_metadata:
            cleaned_metadata = {}
            for k, v in source_metadata.items():
                if k == 'geometry':
                    continue
                # Convert timestamps to ISO date strings
                if hasattr(v, 'strftime'):
                    cleaned_metadata[k] = v.strftime('%Y-%m-%d')
                elif v is None or (isinstance(v, float) and pd.isna(v)):
                    cleaned_metadata[k] = None
                else:
                    cleaned_metadata[k] = str(v) if not isinstance(v, (str, int, float, bool)) else v
            new_entry['source_metadata'] = cleaned_metadata

        # Append to versions array
        versions_data['versions'].append(new_entry)

        # Initialize comparisons dict if it doesn't exist
        if 'comparisons' not in versions_data:
            versions_data['comparisons'] = {}

        # Add comparison as network edge (allows any-to-any comparisons)
        if comparison_metrics:
            comparison_key = f"{old_version_tag}_vs_{new_version_tag}"
            versions_data['comparisons'][comparison_key] = {
                'computed_at': timestamp,
                **comparison_metrics
            }

        # Update metadata
        versions_data['current_version'] = new_version_tag
        versions_data['version_count'] = len(versions_data['versions'])
        versions_data['last_updated'] = timestamp

        # Write back
        with open(versions_file, 'w') as f:
            json.dump(versions_data, f, indent=2)

        return True

    except Exception as e:
        logger.error(f"  Failed to update versions for {station_id}: {e}")
        return False


def save_comparison_stats(
    station_id: str,
    station_dir: Path,
    old_version: str,
    new_version: str,
    comparison_metrics: Dict
) -> bool:
    """Save comparison statistics to comparison_stats.json.

    This creates a network graph structure where any version can be compared
    to any other version, not just sequential pairs.

    Args:
        station_id: Station identifier
        station_dir: Path to station directory
        old_version: Previous version tag (e.g., 'v1.0.0')
        new_version: New version tag (e.g., 'v1.1.0')
        comparison_metrics: Dict with Jaccard/area metrics

    Returns:
        True if successful
    """
    stats_file = station_dir / '_comparison_stats.json'

    try:
        # Load existing stats or create new structure
        if stats_file.exists():
            with open(stats_file) as f:
                stats_data = json.load(f)

            # Migrate old list format to new dict format if needed
            if 'comparisons' in stats_data and isinstance(stats_data['comparisons'], list):
                old_comparisons = stats_data['comparisons']
                stats_data['comparisons'] = {}
                # Convert old list entries to dict keys
                for old_entry in old_comparisons:
                    # Parse old format: "v1.0.0 → v1.1.0"
                    if 'version_pair' in old_entry:
                        pair_str = old_entry['version_pair']
                        versions = pair_str.replace('→', '->').split('->')
                        if len(versions) == 2:
                            from_v = versions[0].strip()
                            to_v = versions[1].strip()
                            key = f"{from_v}_vs_{to_v}"
                            stats_data['comparisons'][key] = {
                                'from_version': from_v,
                                'to_version': to_v,
                                'timestamp': old_entry.get('timestamp', ''),
                                'jaccard_index': old_entry.get('jaccard_index', 0),
                                'old_area_km2': old_entry.get('old_area_km2', 0),
                                'new_area_km2': old_entry.get('new_area_km2', 0),
                                'absolute_area_diff_km2': old_entry.get('absolute_area_diff_km2', 0),
                                'percent_area_diff': old_entry.get('percent_area_diff', 0)
                            }
        else:
            stats_data = {
                'station_id': station_id,
                'comparisons': {}
            }

        # Use explicit version pair as key for network graph structure
        # This allows any version to be compared to any other version
        version_pair_key = f"{old_version}_vs_{new_version}"

        stats_data['comparisons'][version_pair_key] = {
            'from_version': old_version,
            'to_version': new_version,
            'timestamp': datetime.now().isoformat(),
            **comparison_metrics
        }

        # Write back
        with open(stats_file, 'w') as f:
            json.dump(stats_data, f, indent=2)

        return True

    except Exception as e:
        logger.error(f"  Failed to save comparison stats for {station_id}: {e}")
        return False


def load_regional_polygons(region_code: str) -> Optional[gpd.GeoDataFrame]:
    """Load HYDAT polygon file for a region.

    Args:
        region_code: Two-digit region code (e.g., '07', '08')

    Returns:
        GeoDataFrame with polygons, or None if file doesn't exist
    """
    region_dir = HYDAT_POLYGONS_DIR / f"MDA_ADP_{region_code}"
    polygon_file = region_dir / f"MDA_ADP_{region_code}_DrainageBasin_BassinDeDrainage.geojson"

    if not polygon_file.exists():
        logger.warning(f"HYDAT polygon file not found for region {region_code}")
        return None

    try:
        gdf = gpd.read_file(polygon_file)
        logger.info(f"Loaded {len(gdf)} polygons from region {region_code}")
        return gdf
    except Exception as e:
        logger.error(f"Failed to load HYDAT polygons for region {region_code}: {e}")
        return None


def _ensure_cache_dir(region_code: str) -> Path:
    """Ensure cache directory exists for a region.

    Args:
        region_code: Two-digit region code (e.g., '07', '08')

    Returns:
        Path to region cache directory
    """
    region_cache_dir = CACHE_DIR / region_code
    region_cache_dir.mkdir(parents=True, exist_ok=True)
    return region_cache_dir


def _get_cached_polygon(station_id: str, region_code: str) -> Optional[gpd.GeoDataFrame]:
    """Load cached polygon for a station if it exists.

    Args:
        station_id: Station identifier (e.g., '07AF010')
        region_code: Two-digit region code (e.g., '07')

    Returns:
        GeoDataFrame with cached polygon, or None if not cached
    """
    cache_file = CACHE_DIR / region_code / f"{station_id}.geojson"

    if not cache_file.exists():
        return None

    try:
        gdf = gpd.read_file(cache_file)
        logger.debug(f"  Loaded {station_id} from cache")
        return gdf
    except Exception as e:
        logger.warning(f"  Failed to load cached polygon for {station_id}: {e}")
        return None


def _cache_polygon(gdf: gpd.GeoDataFrame, station_id: str, region_code: str) -> bool:
    """Save polygon to cache.

    Args:
        gdf: GeoDataFrame with polygon
        station_id: Station identifier
        region_code: Two-digit region code

    Returns:
        True if successful
    """
    try:
        cache_dir = _ensure_cache_dir(region_code)
        cache_file = cache_dir / f"{station_id}.geojson"
        gdf.to_file(cache_file, driver='GeoJSON')
        logger.debug(f"  Cached polygon for {station_id}")
        return True
    except Exception as e:
        logger.warning(f"  Failed to cache polygon for {station_id}: {e}")
        return False


def _load_station_polygon(
    station_id: str,
    region_code: str,
    hydat_gdf: Optional[gpd.GeoDataFrame] = None,
    use_cache: bool = True
) -> Optional[gpd.GeoDataFrame]:
    """Load station polygon from cache or extract from regional file.

    Args:
        station_id: Station identifier
        region_code: Two-digit region code
        hydat_gdf: Optional pre-loaded regional GeoDataFrame
        use_cache: Whether to use cached polygons

    Returns:
        GeoDataFrame with station polygon, or None if not found
    """
    # Try cache first
    if use_cache:
        cached_gdf = _get_cached_polygon(station_id, region_code)
        if cached_gdf is not None:
            return cached_gdf

    # Extract from regional file
    if hydat_gdf is None:
        hydat_gdf = load_regional_polygons(region_code)
        if hydat_gdf is None:
            return gpd.GeoDataFrame()  # Empty

    station_gdf = hydat_gdf[hydat_gdf['StationNum'] == station_id].copy()

    if station_gdf.empty:
        return gpd.GeoDataFrame()  # Empty

    # Cache for next time
    if use_cache:
        _cache_polygon(station_gdf, station_id, region_code)

    return station_gdf


def clear_cache(region_code: Optional[str] = None):
    """Clear polygon cache.

    Args:
        region_code: If provided, only clear cache for this region
    """
    import shutil

    if region_code:
        region_cache_dir = CACHE_DIR / region_code
        if region_cache_dir.exists():
            shutil.rmtree(region_cache_dir)
            logger.info(f"Cleared cache for region {region_code}")
    else:
        if CACHE_DIR.exists():
            shutil.rmtree(CACHE_DIR)
            logger.info("Cleared all polygon cache")


def integrate_station_polygon(
    station_id: str,
    hydat_gdf: gpd.GeoDataFrame,
    dry_run: bool = False,
    use_cache: bool = True
) -> Dict:
    """Integrate HYDAT polygon for a single station.

    Args:
        station_id: Station identifier
        hydat_gdf: GeoDataFrame with HYDAT polygons
        dry_run: If True, report actions without writing files
        use_cache: If True, use cached polygons for faster lookups

    Returns:
        Dict with status and details
    """
    station_dir = STATIONS_DIR / station_id

    if not station_dir.exists():
        return {'status': 'skip', 'reason': 'Station directory not found'}

    # Get region code for caching
    region_code = station_id[:2]

    # Load HYDAT polygon (from cache if available)
    hydat_poly = _load_station_polygon(station_id, region_code, hydat_gdf, use_cache=use_cache)
    if hydat_poly.empty:
        return {'status': 'skip', 'reason': 'No HYDAT polygon available'}

    # Get current version from _versions.json
    versions_file = station_dir / '_versions.json'
    try:
        with open(versions_file) as f:
            versions_data = json.load(f)
        current_version = versions_data['current_version']
    except Exception as e:
        return {'status': 'error', 'reason': f'Failed to read versions: {e}'}

    # Find the polygon file for current_version
    current_version_entry = None
    for v in versions_data['versions']:
        if v['semantic_tag'] == current_version:
            current_version_entry = v
            break

    if not current_version_entry:
        return {'status': 'error', 'reason': f'Current version {current_version} not found in versions list'}

    # Load the polygon corresponding to current_version
    polygon_filename = current_version_entry.get('polygon_file', f"{station_id}_polygon_{current_version}.geojson")
    latest_poly_file = station_dir / polygon_filename

    if not latest_poly_file.exists():
        return {'status': 'error', 'reason': f'Polygon file not found: {polygon_filename}'}

    try:
        existing_gdf = gpd.read_file(latest_poly_file)
    except Exception as e:
        return {'status': 'error', 'reason': f'Failed to load existing polygon: {e}'}

    # Extract source file metadata from HYDAT polygon attributes
    hydat_attributes = hydat_poly.iloc[0].to_dict()
    source_version = hydat_attributes.get('Version', 'Unknown')
    source_date_rev = hydat_attributes.get('Date_rev', 'Unknown')
    source_status = hydat_attributes.get('Status', 'Unknown')

    # Check if this exact source (Version + Date_rev) has already been integrated
    try:
        with open(versions_file) as f:
            versions_data = json.load(f)

        # Check if any existing version already came from this HYDAT source
        for version_entry in versions_data.get('versions', []):
            if version_entry.get('data_source') == 'HYDAT_polygons':
                existing_metadata = version_entry.get('source_metadata', {})
                existing_version = existing_metadata.get('Version', '')
                existing_date_rev = existing_metadata.get('Date_rev', '')

                # Match on both Version and Date_rev to uniquely identify source
                if existing_version == source_version and existing_date_rev == source_date_rev:
                    return {
                        'status': 'skip',
                        'reason': f'Already integrated from HYDAT Version={source_version}, Date_rev={source_date_rev} (existing: {version_entry["semantic_tag"]})'
                    }
    except Exception as e:
        logger.warning(f"  Could not check existing versions: {e}")

    # Compare polygons
    try:
        comparison_metrics = compare_polygons(existing_gdf, hydat_poly)
    except Exception as e:
        return {'status': 'error', 'reason': f'Comparison failed: {e}'}

    # Determine version increment
    increment_type = determine_version_increment(hydat_attributes)
    new_version = increment_semantic_version(current_version, increment_type)

    result = {
        'status': 'success',
        'old_version': current_version,
        'new_version': new_version,
        'increment_type': increment_type,
        'comparison': comparison_metrics,
        'hydat_version': hydat_attributes.get('Version', 'Unknown')
    }

    if dry_run:
        result['status'] = 'dry_run'
        return result

    # Extract and save polygon
    polygon_file = extract_hydat_polygon(station_id, hydat_gdf, station_dir, new_version)
    if not polygon_file:
        return {'status': 'error', 'reason': 'Failed to extract polygon'}

    # Update version history
    if not add_polygon_version(
        station_id, station_dir, new_version,
        polygon_file.name, 'HYDAT_polygons', current_version, comparison_metrics,
        hydat_attributes  # Pass source metadata
    ):
        return {'status': 'error', 'reason': 'Failed to update versions'}

    # Save comparison stats
    save_comparison_stats(station_id, station_dir, current_version, new_version, comparison_metrics)

    return result


def read_station_list(stations_file: Path) -> List[str]:
    """Read list of station IDs from file."""
    stations = []
    with open(stations_file) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#'):
                station_id = line.split()[0]
                if len(station_id) == 7:
                    stations.append(station_id)
    return stations


def save_revision_metrics():
    """Collect and save polygon comparison metrics from all processed stations.

    Scans all station directories for _versions.json files, extracts comparison
    metrics, and saves to a centralized CSV for efficient visualization.

    The CSV contains the most recent comparison (typically v1.0.0 vs v1.1.0) for
    each station with metrics including Jaccard index and area differences.
    """
    data = []

    # Scan all station directories
    for station_dir in sorted(STATIONS_DIR.iterdir()):
        if not station_dir.is_dir():
            continue

        station_id = station_dir.name
        versions_file = station_dir / "_versions.json"
        metadata_file = station_dir / "_metadata.json"

        if not versions_file.exists():
            continue

        try:
            with open(versions_file) as f:
                versions_data = json.load(f)

            # Get comparison data (looking for v1.0.0_vs_v1.1.0 or similar)
            comparisons = versions_data.get('comparisons', {})
            if not comparisons:
                continue

            # Get the first (or only) comparison
            comparison_key = list(comparisons.keys())[0]
            comparison = comparisons[comparison_key]

            # Extract version tags from comparison key (e.g., "v1.0.0_vs_v1.1.0")
            version_parts = comparison_key.split('_vs_')
            old_version = version_parts[0] if len(version_parts) > 0 else None
            new_version = version_parts[1] if len(version_parts) > 1 else None

            # Get station location from _metadata.json
            lat, lon = None, None
            if metadata_file.exists():
                with open(metadata_file) as f:
                    metadata = json.load(f)
                    lat = metadata.get('latitude')
                    lon = metadata.get('longitude')

            # Get data source from version history
            data_source = None
            versions = versions_data.get('versions', [])
            if versions and new_version:
                for v in versions:
                    if v.get('semantic_tag') == new_version:
                        data_source = v.get('data_source')
                        break

            data.append({
                'station_id': station_id,
                'comparison_key': comparison_key,
                'old_version': old_version,
                'new_version': new_version,
                'jaccard_index': comparison['jaccard_index'],
                'percent_area_diff': comparison['percent_area_diff'],
                'absolute_area_diff_km2': comparison['absolute_area_diff_km2'],
                'old_area_km2': comparison['old_area_km2'],
                'new_area_km2': comparison['new_area_km2'],
                'latitude': lat,
                'longitude': lon,
                'timestamp': comparison.get('computed_at'),
                'data_source': data_source
            })

        except Exception as e:
            logger.warning(f"Could not process {station_id}: {e}")
            continue

    if not data:
        logger.warning("No comparison data found to save")
        return

    # Create DataFrame and save to CSV
    df = pd.DataFrame(data)

    # Ensure output directory exists
    HYDAT_REVISION_METRICS_CSV.parent.mkdir(parents=True, exist_ok=True)

    # Save to CSV
    df.to_csv(HYDAT_REVISION_METRICS_CSV, index=False)
    logger.info(f"Saved {len(df)} comparison metrics to {HYDAT_REVISION_METRICS_CSV}")


def main():
    """Main execution: integrate HYDAT polygons for all demo stations."""
    parser = argparse.ArgumentParser(description='Integrate HYDAT polygons into station records')
    parser.add_argument('--stations-file', type=Path,
                       default=DEMO_DATA_DIR / 'DEMO_STATIONS.txt',
                       help='File with station IDs')
    parser.add_argument('--dry-run', action='store_true',
                       help='Report actions without writing files')
    parser.add_argument('--verbose', action='store_true',
                       help='Enable debug logging')
    parser.add_argument('--clear-cache', action='store_true',
                       help='Clear polygon cache before processing')
    parser.add_argument('--no-cache', action='store_true',
                       help='Disable polygon caching (slower but always fresh)')

    args = parser.parse_args()

    if args.verbose:
        logger.setLevel(logging.DEBUG)

    # Clear cache if requested
    if args.clear_cache:
        clear_cache()
        logger.info("Polygon cache cleared")

    # Read station list
    if not args.stations_file.exists():
        logger.error(f"Stations file not found: {args.stations_file}")
        sys.exit(1)

    station_ids = read_station_list(args.stations_file)
    logger.info(f"Processing {len(station_ids)} stations")

    if args.dry_run:
        logger.info("DRY RUN MODE - no files will be modified")

    # Group stations by region code
    regions = defaultdict(list)
    for station_id in station_ids:
        region_code = station_id[:2]
        regions[region_code].append(station_id)

    logger.info(f"Found {len(regions)} regions: {sorted(regions.keys())}")

    # Process each region
    results = []
    for region_code in sorted(regions.keys()):
        logger.info(f"\n{'='*60}")
        logger.info(f"Processing region {region_code} ({len(regions[region_code])} stations)")
        logger.info('='*60)

        # Load regional polygon file
        hydat_gdf = load_regional_polygons(region_code)
        if hydat_gdf is None:
            for station_id in regions[region_code]:
                results.append({
                    'station_id': station_id,
                    'status': 'skip',
                    'reason': f'No HYDAT polygons for region {region_code}'
                })
            continue

        # Load regional pour points and station locations
        region_dir = HYDAT_POLYGONS_DIR / f"MDA_ADP_{region_code}"
        pour_point_file = region_dir / f"MDA_ADP_{region_code}_PourPoint_PointExutoire.geojson"
        station_loc_file = region_dir / f"MDA_ADP_{region_code}_Station.geojson"

        pour_point_gdf = None
        station_loc_gdf = None

        if pour_point_file.exists():
            try:
                pour_point_gdf = gpd.read_file(pour_point_file)
                logger.info(f"  Loaded {len(pour_point_gdf)} pour points for region {region_code}")
            except Exception as e:
                logger.warning(f"  Failed to load pour points for region {region_code}: {e}")
        else:
            logger.debug(f"  No pour point file found: {pour_point_file}")

        if station_loc_file.exists():
            try:
                station_loc_gdf = gpd.read_file(station_loc_file)
                logger.info(f"  Loaded {len(station_loc_gdf)} station locations for region {region_code}")
            except Exception as e:
                logger.warning(f"  Failed to load station locations for region {region_code}: {e}")
        else:
            logger.debug(f"  No station location file found: {station_loc_file}")

        # Process each station in region
        for station_id in regions[region_code]:
            logger.info(f"\n{station_id}:")
            result = integrate_station_polygon(
                station_id, hydat_gdf, args.dry_run, use_cache=not args.no_cache
            )
            result['station_id'] = station_id
            results.append(result)

            # Extract pour points and station locations if available
            if not args.dry_run:
                station_dir = STATIONS_DIR / station_id

                if pour_point_gdf is not None:
                    pp_file = extract_hydat_pour_point(station_id, pour_point_gdf, station_dir)
                    if pp_file:
                        logger.info(f"  ✓ Extracted pour point")
                    else:
                        logger.debug(f"  ⊘ No pour point found for {station_id}")

                if station_loc_gdf is not None:
                    loc_file = extract_hydat_station_location(station_id, station_loc_gdf, station_dir)
                    if loc_file:
                        logger.info(f"  ✓ Extracted station location")
                    else:
                        logger.debug(f"  ⊘ No station location found for {station_id}")

            # Log result
            if result['status'] in ['success', 'dry_run']:
                logger.info(f"  ✓ {result['old_version']} → {result['new_version']} ({result['increment_type']})")
                logger.info(f"    Jaccard: {result['comparison']['jaccard_index']}, "
                          f"Area diff: {result['comparison']['percent_area_diff']}%")
            elif result['status'] == 'skip':
                logger.info(f"  ⊘ Skipped: {result['reason']}")
            else:
                logger.error(f"  ✗ Error: {result['reason']}")

    # Print summary
    logger.info(f"\n{'='*60}")
    logger.info("SUMMARY")
    logger.info('='*60)

    status_counts = defaultdict(int)
    for r in results:
        status_counts[r['status']] += 1

    for status, count in sorted(status_counts.items()):
        logger.info(f"{status.upper()}: {count}")

    # Print detailed results table
    if status_counts.get('success', 0) > 0 or status_counts.get('dry_run', 0) > 0:
        logger.info(f"\n{'='*60}")
        logger.info("INTEGRATED POLYGONS")
        logger.info('='*60)
        for r in results:
            if r['status'] in ['success', 'dry_run']:
                logger.info(f"{r['station_id']}: {r['old_version']} → {r['new_version']} "
                          f"(JSI={r['comparison']['jaccard_index']}, "
                          f"ΔArea={r['comparison']['percent_area_diff']:.1f}%)")

    # Save consolidated comparison metrics to CSV
    if not args.dry_run:
        logger.info(f"\n{'='*60}")
        logger.info("Saving comparison metrics...")
        save_revision_metrics()

    sys.exit(0)


if __name__ == '__main__':
    main()
