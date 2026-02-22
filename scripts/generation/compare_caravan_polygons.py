#!/usr/bin/env python3
"""
Compare Caravan (via HYSETS) polygons with current WSC polygons.

Generates comparison metrics and saves to book_docs/data/polygon_comparisons/
for visualization in documentation.

Usage:
    source /home/danbot/code/data_analysis/bin/activate
    python scripts/generation/compare_caravan_polygons.py
"""

import sys
import logging
import argparse
from pathlib import Path
from typing import List, Optional, Set
import pandas as pd
import geopandas as gpd
import numpy as np

PROJECT_ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(PROJECT_ROOT))

# Import existing comparison function - REUSE!
from scripts.demo_setup.integrate_hydat_polygons import compare_polygons
from scripts.generation.revision_plots import summarize_caravan_comparison, categorize_jsi, jsi_colors

# Import plotting dependencies
from bokeh.plotting import figure
from bokeh.models import GeoJSONDataSource, HoverTool, Div, ColumnDataSource, Label, CDSView, GroupFilter
from bokeh.layouts import column
import xyzservices.providers as xyz

# Data paths
CARAVAN_POLYGONS = Path("/home/danbot/code/common_data/Caravan/hysets_shapefiles/hysets_basin_shapes.shp")
CARAVAN_ATTRIBUTES_DIR = Path("/home/danbot/code/common_data/Caravan/attributes/hysets")
WSC_POLYGONS_BASE = Path("/home/danbot/code/common_data/HYDAT/polygons/")
OUTPUT_DIR = PROJECT_ROOT / "book_docs/data/polygon_comparisons/caravan_vs_wsc2024"

logging.basicConfig(level=logging.INFO, format='%(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Test mode: use only MDA_ADP_06 region (smaller files)
TEST_MODE = False
TEST_REGION = "MDA_ADP_06"


def load_caravan_polygons(filter_ids: Optional[Set[str]] = None) -> gpd.GeoDataFrame:
    """Load Caravan polygons (inherited from HYSETS).

    Args:
        filter_ids: If provided, load only these station IDs (for testing)

    Returns:
        GeoDataFrame with station_id and geometry columns
    """
    logger.info(f"Loading Caravan polygons from {CARAVAN_POLYGONS}")
    gdf = gpd.read_file(CARAVAN_POLYGONS)
    gdf.set_crs(epsg=4326, inplace=True)  # Ensure consistent CRS
    gdf['source'] = gdf['gauge_id'].apply(lambda x: x.split('_')[0])  # Extract source from gauge_id
    # filter to only HYSETS sources (if needed)
    gdf = gdf[gdf['source'] == 'hysets'].copy()

    # Extract station ID from gauge_id
    gdf['station_id'] = gdf['gauge_id'].apply(lambda x: x.split('_')[-1])

    if filter_ids:
        gdf = gdf[gdf['station_id'].isin(filter_ids)]
        gdf = gdf.copy()
        logger.info(f"TEST MODE: Loaded {len(gdf)} polygons (filtered)")
    else:
        logger.info(f"Loaded {len(gdf)} Caravan polygons")

    result = gdf[['station_id', 'geometry']].copy()
    return result


def load_wsc_current_polygons(filter_ids: Optional[Set[str]] = None,
                              test_region: Optional[str] = None) -> gpd.GeoDataFrame:
    """Load current WSC polygons (Sept 2024 release).

    Args:
        filter_ids: Optional set of station IDs to load
        test_region: If provided, load only this region (e.g., 'MDA_ADP_06')

    Returns:
        GeoDataFrame with station_id and geometry columns
    """
    logger.info(f"Loading WSC polygons from {WSC_POLYGONS_BASE}")
    if test_region:
        logger.info(f"  TEST MODE: Loading only {test_region} region")
    if filter_ids:
        logger.info(f"  Filtering for {len(filter_ids)} specific station IDs")

    all_polygons = []

    for mda_dir in sorted(WSC_POLYGONS_BASE.glob("MDA_ADP_*")):
        if not mda_dir.is_dir():
            continue

        # In test mode, skip other regions
        if test_region and mda_dir.name != test_region:
            continue

        basin_file = mda_dir / f"{mda_dir.name}_DrainageBasin_BassinDeDrainage.geojson"
        if not basin_file.exists():
            continue

        gdf = gpd.read_file(basin_file)
        original_crs = gdf.crs

        if filter_ids:
            gdf = gdf[gdf['StationNum'].isin(filter_ids)]
            gdf = gdf.copy()
            assert gdf.crs == original_crs, "CRS should be preserved after filtering"
        if gdf is not None:
            all_polygons.append(gdf)
            logger.info(f"  Loaded {len(gdf)} polygons from {mda_dir.name}")

    if not all_polygons:
        logger.warning("No WSC polygons loaded!")
        return gpd.GeoDataFrame(columns=['station_id', 'geometry'])

    combined = gpd.GeoDataFrame(pd.concat(all_polygons, ignore_index=True))
    combined = combined.rename(columns={'StationNum': 'station_id'})
    logger.info(f"Loaded {len(combined)} total WSC polygons")
    return combined[['station_id', 'geometry']]


def compare_all_stations(
    caravan_gdf: gpd.GeoDataFrame,
    wsc_gdf: gpd.GeoDataFrame
) -> pd.DataFrame:
    """Compare polygons for all matching stations.

    Args:
        caravan_gdf: Caravan polygons
        wsc_gdf: Current WSC polygons

    Returns:
        DataFrame with comparison metrics for each station
    """
    results = []

    # Find stations present in both datasets
    caravan_ids = set(caravan_gdf['station_id'])
    wsc_ids = set(wsc_gdf['station_id'])
    common_ids = caravan_ids.intersection(wsc_ids)

    logger.info(f"Found {len(common_ids)} stations in both datasets")
    logger.info(f"Caravan only: {len(caravan_ids - wsc_ids)}")
    logger.info(f"WSC only: {len(wsc_ids - caravan_ids)}")

    for i, station_id in enumerate(sorted(common_ids), 1):
        if i % 100 == 0:
            logger.info(f"  Processing station {i}/{len(common_ids)}")

        try:
            # Extract single-station GeoDataFrames
            caravan_station = caravan_gdf[caravan_gdf['station_id'] == station_id].copy()
            wsc_station = wsc_gdf[wsc_gdf['station_id'] == station_id].copy()

            # REUSE existing compare_polygons function!
            metrics = compare_polygons(caravan_station, wsc_station)

            results.append({
                'station_id': station_id,
                'jaccard_index': metrics['jaccard_index'],
                'percent_area_diff': metrics['percent_area_diff'],
                'absolute_area_diff_km2': metrics['absolute_area_diff_km2'],
                'old_area_km2': metrics['old_area_km2'],  # Caravan area
                'new_area_km2': metrics['new_area_km2'],  # WSC current area
            })

        except Exception as e:
            logger.warning(f"Failed to compare {station_id}: {e}")
            continue

    logger.info(f"Successfully compared {len(results)} stations")
    return pd.DataFrame(results)


def filter_small_geometries(geom, min_area_m2=10, debug=False):
    """Filter out small vestigial geometries and ensure validity.

    Reused utility to avoid duplication.
    """
    gdf = gpd.GeoDataFrame(geometry=[geom], crs='EPSG:3857').explode(index_parts=False).reset_index(drop=True)

    if debug and len(gdf) > 0:
        areas = gdf.geometry.area.values
        logger.debug(f"  Total sub-geometries: {len(areas)}")
        logger.debug(f"  Area range: {areas.min():.2f} - {areas.max():.2f} m²")
        logger.debug(f"  Filtering out {(areas < min_area_m2).sum()} geometries < {min_area_m2} m²")

    gdf['area_km2'] = gdf.geometry.area / 1e6
    gdf = gdf[gdf['area_km2'] >= min_area_m2 / 1e6]
    gdf.geometry = gdf.geometry.apply(lambda g: g.buffer(0) if not g.is_valid else g)
    gdf = gdf[gdf.geometry.is_valid]
    return gdf


def round_coordinates(gdf: gpd.GeoDataFrame, precision_m: float = 1.0) -> gpd.GeoDataFrame:
    """Round coordinates to specified precision in meters (for EPSG:3857).

    Reused utility to avoid duplication.
    """
    gdf = gdf.copy()
    gdf.geometry = gdf.geometry.apply(
        lambda geom: geom if geom is None else
        type(geom)([(round(x / precision_m) * precision_m,
                     round(y / precision_m) * precision_m)
                    for x, y in geom.exterior.coords])
    )
    return gdf


def plot_caravan_wsc_comparison(station_id: str, width: int = 800, print_metrics: bool = False):
    """Plot Caravan vs WSC 2024 polygon comparison for a single station.

    Creates an overlay visualization showing:
    - Light green: Intersection (areas that match)
    - Red: Caravan only (false positive - Caravan included incorrectly)
    - Purple: WSC only (false negative - Caravan missed area)
    - Green solid line (weight=3): WSC 2024 boundary
    - Red dashed line (weight=3): Caravan boundary

    Args:
        station_id: WSC station ID (e.g., '07AF010')
        width: Plot width in pixels (default 800)
        print_metrics: If True, print JSI and percent area difference

    Returns:
        Dict with 'status' key:
        - If 'success': includes 'figure' (Bokeh figure) and 'notes' (dict with title/items)
        - If 'warning'/'error': includes 'message' and optional 'context'
    """
    station_dir = PROJECT_ROOT / "book_docs" / "stations" / station_id

    if not station_dir.exists():
        return {
            'status': 'warning',
            'message': f'Station {station_id} not found in book stations directory.',
            'context': 'Station may not have been processed yet.'
        }

    # Load WSC polygon from station directory
    polygon_files = sorted(station_dir.glob(f"{station_id}_polygon*.geojson"))
    if not polygon_files:
        return {
            'status': 'warning',
            'message': f'No polygon files found for station {station_id}.',
            'context': 'Station directory exists but contains no polygons.'
        }

    wsc_gdf = gpd.read_file(polygon_files[-1]).to_crs("EPSG:3857")

    caravan_gdf = load_caravan_polygons(filter_ids=[station_id])
    caravan_gdf = caravan_gdf[caravan_gdf['station_id'] == station_id]
    caravan_gdf.to_crs("EPSG:3857", inplace=True)

    # Get geometries
    caravan_geom = caravan_gdf.geometry.iloc[0]
    wsc_geom = wsc_gdf.geometry.iloc[0]

    comparison_metrics = compare_polygons(caravan_gdf, wsc_gdf)
    if print_metrics:
        print(
            f"{station_id} | JSI: {comparison_metrics['jaccard_index']:.4f} | "
            f"% area diff: {comparison_metrics['percent_area_diff']:+.2f}%\n"
        )

    # Compute spatial differences (WSC 2024 is ground truth)
    intersection = caravan_geom.intersection(wsc_geom)  # Light green: areas that match
    false_positive = caravan_geom.difference(wsc_geom)  # Red: Caravan had it, WSC doesn't (error in Caravan)
    false_negative = wsc_geom.difference(caravan_geom)  # Purple: WSC has it, Caravan didn't (Caravan missed it)

    # Filter out small vestigial geometries
    wsc_area_m2 = wsc_geom.area
    min_area_m2 = min(1000, 0.0001 * wsc_area_m2)
    intersection = filter_small_geometries(intersection, min_area_m2=min_area_m2, debug=False)
    false_positive = filter_small_geometries(false_positive, min_area_m2=min_area_m2, debug=False)
    false_negative = filter_small_geometries(false_negative, min_area_m2=min_area_m2, debug=False)

    jsi = intersection.area / (intersection.area + false_positive.area + false_negative.area) if (intersection.area + false_positive.area + false_negative.area) > 0 else 0

    # Combined bounds for view
    combined_bounds = gpd.GeoDataFrame(
        geometry=pd.concat([caravan_gdf.geometry, wsc_gdf.geometry])
    ).total_bounds

    # Create figure
    tiles = xyz.OpenStreetMap.Mapnik
    height = int(width * 0.625)  # Maintain aspect ratio

    p = figure(
        # title=f"Caravan vs WSC 2024 Polygon Comparison: {station_id}",
        title=f'WSC ID: {station_id}',
        x_axis_type="mercator",
        y_axis_type="mercator",
        width=width,
        height=height,
        match_aspect=True,
        tools="pan,wheel_zoom,box_zoom,reset,save"
    )

    p.add_tile(tiles)

    area_string = "@area_km2{0.000} km²"

    # Plot comparison layers - fills only, no patch outlines
    # 1. Intersection (light green) - areas that match
    if len(intersection) > 0:
        intersection_source = GeoJSONDataSource(geojson=intersection.to_json())
        r1 = p.patches('xs', 'ys', source=intersection_source,
                 fill_color='lightgreen', fill_alpha=0.5,
                 line_color=None,
                 legend_label='Agreement')
        p.add_tools(HoverTool(renderers=[r1], tooltips=[("Agreement", ""), ("Area", area_string)]))

    # 2. False positive (orangish red) - Caravan had it, WSC doesn't
    if len(false_positive) > 0:
        fp_source = GeoJSONDataSource(geojson=false_positive.to_json())
        r2 = p.patches('xs', 'ys', source=fp_source,
                 fill_color='#FF6347', fill_alpha=0.4,
                 line_color=None,
                 legend_label='Caravan only')
        p.add_tools(HoverTool(renderers=[r2], tooltips=[("Caravan only", ""), ("Area", area_string)]))

    # 3. False negative (purple) - WSC has it, Caravan didn't
    if len(false_negative) > 0:
        fn_source = GeoJSONDataSource(geojson=false_negative.to_json())
        r3 = p.patches('xs', 'ys', source=fn_source,
                 fill_color='purple', fill_alpha=0.4,
                 line_color=None,
                 legend_label='WSC 2024 only')
        p.add_tools(HoverTool(renderers=[r3], tooltips=[("WSC 2024 only", ""), ("Area", area_string)]))

    # 4. Boundary outlines - separate lines for each polygon
    # Caravan boundary (firebrick dashed)
    caravan_boundary = GeoJSONDataSource(geojson=gpd.GeoDataFrame(geometry=[caravan_geom], crs='EPSG:3857').to_json())
    p.patches('xs', 'ys', source=caravan_boundary,
             fill_color=None, fill_alpha=0,
             line_color='#B22222', line_width=3, line_dash='dashed',
             legend_label='Caravan boundary')

    # WSC 2024 boundary (dark purple solid)
    wsc_boundary = GeoJSONDataSource(geojson=gpd.GeoDataFrame(geometry=[wsc_geom], crs='EPSG:3857').to_json())
    p.patches('xs', 'ys', source=wsc_boundary,
             fill_color=None, fill_alpha=0,
             line_color='#6A0DAD', line_width=3,
             legend_label='WSC 2024 boundary')

    # Add pour point and station location markers
    from scripts.catchment_page_utils import add_pour_point_and_station_markers
    add_pour_point_and_station_markers(p, station_dir, station_id)

    # Set view bounds with padding
    x_range = combined_bounds[2] - combined_bounds[0]
    y_range = combined_bounds[3] - combined_bounds[1]
    padding = 0.15
    p.x_range.start = combined_bounds[0] - x_range * padding
    p.x_range.end = combined_bounds[2] + x_range * padding
    p.y_range.start = combined_bounds[1] - y_range * padding
    p.y_range.end = combined_bounds[3] + y_range * padding

    p.legend.location = "top_right"
    p.legend.click_policy = "hide"

    # Return success with figure and notes
    notes = [
        "**Caravan Source**: Inherited from HYSETS (2020), originally from WSC 2021 release",
        "**WSC 2024 Source**: Official WSC drainage basin polygons (September 2024 release)",
        "**Fill Colors**: Light green = agreement, Orangish red = Caravan only, Purple = WSC 2024 only",
        "**Boundary Lines**: Firebrick dashed = Caravan, Dark purple solid = WSC 2024",
        "**Markers**: Green triangle = pour point, Orange square = station location"
    ]

    return {
        'status': 'success',
        'figure': p,
        'notes': {'title': 'Comparison Notes:', 'items': notes}
    }


def save_comparison_metrics(df: pd.DataFrame, output_dir: Path):
    """Save comparison metrics to output directory.

    Args:
        df: DataFrame with comparison metrics
        output_dir: Where to save outputs
    """
    output_dir.mkdir(parents=True, exist_ok=True)

    metrics_path = output_dir / "comparison_metrics.csv"
    df.to_csv(metrics_path, index=False)
    logger.info(f"Saved metrics to {metrics_path}")


def run_diagnostics(df: pd.DataFrame) -> bool:
    """Run diagnostic checks on comparison results.

    Args:
        df: Comparison results DataFrame

    Returns:
        True if all checks pass
    """
    logger.info("\nRunning diagnostics...")
    checks_passed = True

    # Check 1: Has results
    if len(df) == 0:
        logger.error("  ✗ No comparison results generated")
        return False
    else:
        logger.info(f"  ✓ Generated {len(df)} comparisons")

    # Check 2: Valid Jaccard indices (0-1)
    invalid_jsi = df[(df['jaccard_index'] < 0) | (df['jaccard_index'] > 1)]
    if len(invalid_jsi) > 0:
        logger.error(f"  ✗ Found {len(invalid_jsi)} invalid Jaccard indices")
        checks_passed = False
    else:
        logger.info(f"  ✓ All Jaccard indices valid [0,1]")

    # Check 3: Required columns
    required_cols = ['station_id', 'jaccard_index', 'percent_area_diff',
                     'old_area_km2', 'new_area_km2']
    missing = set(required_cols) - set(df.columns)
    if missing:
        logger.error(f"  ✗ Missing columns: {missing}")
        checks_passed = False
    else:
        logger.info(f"  ✓ All required columns present")

    # Check 4: Reasonable area values
    if (df['old_area_km2'] <= 0).any() or (df['new_area_km2'] <= 0).any():
        logger.error(f"  ✗ Found non-positive area values")
        checks_passed = False
    else:
        logger.info(f"  ✓ All areas positive")

    return checks_passed


def load_caravan_attributes() -> pd.DataFrame:
    """Load original Caravan attributes for HYSETS stations.

    Returns:
        DataFrame with gauge_id and all attributes
    """
    # Load all three attribute files
    caravan_attrs = pd.read_csv(CARAVAN_ATTRIBUTES_DIR / "attributes_caravan_hysets.csv")
    hydroatlas_attrs = pd.read_csv(CARAVAN_ATTRIBUTES_DIR / "attributes_hydroatlas_hysets.csv")
    other_attrs = pd.read_csv(CARAVAN_ATTRIBUTES_DIR / "attributes_other_hysets.csv")

    # Merge on gauge_id
    df = caravan_attrs.merge(hydroatlas_attrs, on='gauge_id', how='outer')
    df = df.merge(other_attrs, on='gauge_id', how='outer')

    # Extract station_id from gauge_id (format: hysets_01010000 -> 01010000)
    df['station_id'] = df['gauge_id'].str.replace('hysets_', '')

    return df


def load_reprocessed_attributes() -> Optional[pd.DataFrame]:
    """Load reprocessed attributes computed with updated WSC 2024 polygons.

    Returns:
        DataFrame with station_id and attributes, or None if not yet processed
    """
    # Placeholder: will be generated by GEE workflow
    reprocessed_file = PROJECT_ROOT / "book_docs" / "data" / "GEE_attributes_20260211.csv"

    if not reprocessed_file.exists():
        logger.info(f"Reprocessed attributes not found: {reprocessed_file}")
        return None

    return pd.read_csv(reprocessed_file)


def _load_comparison_metrics_and_filter():
    """Load comparison metrics and filter for geometrically different stations.

    Returns:
        Tuple of (comparison_df, filter_gauge_ids, n_significant, n_jsi, n_area, error_dict)
        error_dict is None on success, or contains error info on failure
    """
    comparison_file = OUTPUT_DIR / "comparison_metrics.csv"

    if not comparison_file.exists():
        error = {
            'status': 'error',
            'message': f'Comparison metrics not found: {comparison_file}',
            'context': 'Run `python scripts/generation/compare_caravan_polygons.py` first.'
        }
        return None, None, None, None, None, error

    comparison_df = pd.read_csv(comparison_file)

    # Filter for stations with significant geometric differences
    significant_diffs = comparison_df[
        (comparison_df['jaccard_index'] <= 0.9) |
        (comparison_df['percent_area_diff'].abs() >= 10)
    ]

    filter_gauge_ids = set('hysets_' + significant_diffs['station_id'].astype(str))
    n_significant = len(filter_gauge_ids)
    n_jsi = (comparison_df['jaccard_index'] <= 0.9).sum()
    n_area = (comparison_df['percent_area_diff'].abs() >= 10).sum()

    return comparison_df, filter_gauge_ids, n_significant, n_jsi, n_area, None


def _create_descriptor_regression_plot(descriptor: str, plot_data: pd.DataFrame,
                                       descriptor_labels: dict, width: int) -> figure:
    """Create a single descriptor regression plot with JSI-colored points.

    Args:
        descriptor: Base descriptor name (e.g., 'ele_mt_sav')
        plot_data: DataFrame with old_col, new_col, jsi_category columns
        descriptor_labels: Mapping of descriptor to display labels
        width: Plot width in pixels

    Returns:
        Bokeh figure object
    """
    old_col = f"{descriptor}_caravan"
    new_col = f"{descriptor}_wsc2024"

    # Compute RMSE and R²
    rmse = np.sqrt(np.mean((plot_data[new_col] - plot_data[old_col])**2))
    correlation = np.corrcoef(plot_data[old_col], plot_data[new_col])[0, 1]
    r_squared = correlation ** 2

    # Create plot
    p = figure(
        # title=descriptor_labels.get(descriptor, descriptor),
        title="",
        x_axis_label=f"Caravan (2021 polygons)",
        y_axis_label=f"WSC 2024 polygons",
        width=width // 2 - 20,
        height=width // 2 - 20,
        tools="pan,wheel_zoom,box_zoom,reset,save"
    )

    # Add 1:1 line
    min_val = min(plot_data[old_col].min(), plot_data[new_col].min())
    max_val = max(plot_data[old_col].max(), plot_data[new_col].max())
    p.line([min_val, max_val], [min_val, max_val],
           line_dash='dashed', line_color='gray', alpha=0.5, line_width=2)

    # Scatter plot with JSI-based colors
    source = ColumnDataSource(plot_data.rename(columns={
        old_col: 'x',
        new_col: 'y',
        'jaccard_index': 'jsi'
    }))

    # Plot each JSI category separately for legend
    jsi_categories = ['Excellent (≥0.95)', 'Good (0.90-0.95)', 'Moderate (0.80-0.90)',
                      'Poor (0.70-0.80)', 'Very Poor (<0.70)']
    for jsi_cat in jsi_categories:
        if jsi_cat in plot_data['jsi_category'].values:
            view = CDSView(filter=GroupFilter(column_name='jsi_category', group=jsi_cat))
            p.scatter('x', 'y', source=source, view=view,
                     size=8, color=jsi_colors[jsi_cat], alpha=0.7,
                     legend_label=jsi_cat)

    # Configure legend
    p.legend.location = "bottom_right"
    p.legend.title = "JSI Agreement"
    p.legend.title_text_font_style = "bold"
    p.legend.title_text_font_size = "10pt"
    p.legend.label_text_font_size = "9pt"
    p.legend.click_policy = "hide"

    # Add RMSE and R² text
    stats_text = f"RMSE: {rmse:.2f}\nR²: {r_squared:.3f}"
    label_annotation = Label(
        x=5, y=250, x_units='screen', y_units='screen',
        text=stats_text,
        text_font_size='14pt',
        text_color='#333333',
        background_fill_color='white',
        background_fill_alpha=0.8,
        border_line_color='gray',
        border_line_width=0
    )
    p.add_layout(label_annotation)

    return p


def _generate_regression_note(filter_gauge_ids: set, merged_count: int) -> dict:
    """Generate explanatory note data for regression plots."""
    items = [
        f"Filtered to **{len(filter_gauge_ids)} stations** with JSI ≤ 0.9 or area change ≥ 10%",
        f"Plotted: {merged_count} stations with reprocessed attributes available",
        "Dashed line shows 1:1 relationship (perfect agreement)",
        "RMSE quantifies typical descriptor error from polygon differences",
        "R² measures correlation between old and new values"
    ]
    return {'title': 'Analysis Notes:', 'items': items}


def plot_caravan_descriptor_regressions(width: int = 900):
    """Create regression plots comparing Caravan vs reprocessed catchment descriptors.

    Shows how polygon changes affect derived attributes like elevation, aridity, etc.

    Args:
        width: Plot width in pixels

    Returns:
        Dict with 'status' key:
        - If 'success': includes 'figure' (Bokeh gridplot) and 'notes' (dict with title/items)
        - If 'warning'/'error': includes 'message' and optional 'context'
    """
    from bokeh.layouts import gridplot

    # Load original Caravan attributes
    caravan_df = load_caravan_attributes()
    reprocessed_df = load_reprocessed_attributes()

    if reprocessed_df is not None:
        reprocessed_df['gauge_id'] = reprocessed_df['gauge_id'].apply(lambda x: f'hysets_{x}')

    # Select relevant descriptor columns
    cols_to_check = ['sgr_dk_sav', 'pet_mm_syr', 'gwt_cm_sav', 'slp_dg_sav', 'pre_mm_syr', 'snw_pc_syr',
                     'cmi_ix_syr', 'slt_pc_sav', 'swc_pc_syr', 'soc_th_sav', 'snd_pc_sav', 'cly_pc_sav',
                     'aet_mm_syr', 'ari_ix_sav', 'tmp_dc_syr', 'run_mm_syr', 'ele_mt_sav', 'dis_m3_pyr',
                     'glc_pc_s01', 'glc_pc_s02', 'glc_pc_s03']
    caravan_df = caravan_df[['gauge_id'] + cols_to_check]
    if reprocessed_df is not None:
        reprocessed_df = reprocessed_df[['gauge_id'] + cols_to_check]

    # Load comparison metrics and filter for geometrically different stations
    comparison_df, filter_gauge_ids, n_significant, n_jsi, n_area, error_dict = \
        _load_comparison_metrics_and_filter()

    if error_dict is not None:
        return error_dict

    # Handle case where reprocessing not yet complete
    if reprocessed_df is None:
        message = (
            f"Descriptor Reprocessing In Progress\n\n"
            f"Found **{n_significant} stations** with significant geometric differences "
            f"(JSI ≤ 0.9: {n_jsi} stations; area change ≥ 10%: {n_area} stations). "
            f"Catchment descriptors are being recomputed for these stations using the updated WSC 2024 "
            f"polygons through the Caravan workflow in Google Earth Engine."
        )
        context = (
            "To generate reprocessed attributes: "
            "(1) Export updated WSC 2024 polygons to Google Earth Engine, "
            "(2) Run the Caravan attribute extraction workflow (see Caravan repository), "
            "(3) Save results to book_docs/data/polygon_comparisons/caravan_vs_wsc2024/reprocessed_attributes/attributes_wsc2024.csv, "
            "(4) Rebuild this documentation. "
            f"Once complete, this section will display regression plots comparing old vs new descriptor values "
            f"for the {n_significant} stations where polygon differences are most likely to affect derived attributes."
        )
        return {
            'status': 'warning',
            'message': message,
            'context': context
        }

    # Merge datasets and filter to geometrically different stations
    merged = caravan_df.merge(reprocessed_df, on='gauge_id', suffixes=('_caravan', '_wsc2024'))
    merged = merged[merged['gauge_id'].isin(filter_gauge_ids)]

    if merged.empty:
        return {
            'status': 'warning',
            'message': f'Found {len(filter_gauge_ids)} stations with significant geometric differences, but none have reprocessed attributes available yet.'
        }

    # Determine available descriptors
    base_cols = sorted([c.replace('_caravan', '') for c in merged.columns if c.endswith('_caravan')])
    descriptor_labels = {
        'ele_mt_sav': 'Mean Elevation (m)',
        'pre_mm_syr': 'Mean Precipitation (mm/yr)',
        'tmp_dc_syr': 'Temperature (°C)',
        'soc_th_sav': 'Soil Organic Carbon (t/ha)',
        # 'ari_ix_sav': 'Aridity Index',
        # 'pet_mm_syr': 'Potential Evapotranspiration (mm/yr)',
        'glc_pc_s02': 'CL Tree Cover (%)',
        # 'run_mm_syr': 'Runoff (mm/yr)',
        'snw_pc_syr': 'Snow Cover (%)',
        'sgr_dk_sav': 'Stream Gradient (m/km)',
        'slp_dg_sav': 'Mean Slope (°)',
    }
    priority_descriptors = list(descriptor_labels.keys())
    available_descriptors = [d for d in priority_descriptors if d in base_cols]

    # Create regression plots
    plots = []
    for descriptor in available_descriptors:
        old_col = f"{descriptor}_caravan"
        new_col = f"{descriptor}_wsc2024"

        plot_data = merged[[old_col, new_col, 'gauge_id']].dropna()
        if plot_data.empty:
            continue

        # Merge with comparison data to get JSI values
        plot_data['station_id'] = plot_data['gauge_id'].str.replace('hysets_', '')
        plot_data = plot_data.merge(comparison_df[['station_id', 'jaccard_index']],
                                   on='station_id', how='left')
        plot_data['jsi_category'] = plot_data['jaccard_index'].apply(categorize_jsi)

        plots.append(_create_descriptor_regression_plot(descriptor, plot_data,
                                                        descriptor_labels, width))

    if not plots:
        return {
            'status': 'error',
            'message': 'No comparable descriptors found in reprocessed attributes.'
        }

    grid = gridplot(plots, ncols=2, sizing_mode='scale_width')
    note_data = _generate_regression_note(filter_gauge_ids, len(merged))

    return {
        'status': 'success',
        'figure': grid,
        'notes': note_data
    }


def main():
    """Main execution."""
    parser = argparse.ArgumentParser(description='Compare Caravan and WSC polygons')
    parser.add_argument('--test', action='store_true',
                       help=f'Test mode: process only {TEST_REGION} region')
    args = parser.parse_args()

    test_mode = args.test
    test_region = TEST_REGION if test_mode else None

    logger.info("=" * 60)
    if test_mode:
        logger.info(f"TEST MODE: Processing {TEST_REGION} region only")
    else:
        logger.info("Starting Caravan vs. WSC polygon comparison")
    logger.info("=" * 60)

    # In test mode: load WSC first to get station IDs, then filter Caravan
    if test_mode:
        logger.info("\n1. Loading WSC test region...")
        wsc_gdf = load_wsc_current_polygons(test_region=test_region)
        wsc_ids = set(wsc_gdf['station_id'].unique())

        logger.info("\n2. Loading matching Caravan polygons...")
        caravan_gdf = load_caravan_polygons(filter_ids=wsc_ids)
    else:
        # Full mode: load Caravan first, then filter WSC
        logger.info("\n1. Loading Caravan polygons...")
        caravan_gdf = load_caravan_polygons()
        caravan_ids = set(caravan_gdf['station_id'].unique())

        logger.info("\n2. Loading WSC current polygons...")
        wsc_gdf = load_wsc_current_polygons(filter_ids=caravan_ids)

    # Compare
    logger.info("\n3. Comparing polygons...")
    comparison_df = compare_all_stations(caravan_gdf, wsc_gdf)

    # Diagnostics
    if not run_diagnostics(comparison_df):
        logger.error("\n✗ Diagnostics failed!")
        sys.exit(1)

    # Save
    logger.info("\n4. Saving outputs...")
    output_dir = OUTPUT_DIR if not test_mode else OUTPUT_DIR.parent / "caravan_vs_wsc2024_TEST"
    save_comparison_metrics(comparison_df, output_dir)

    # Generate summary metrics CSV for documentation
    logger.info("\n5. Generating summary metrics...")
    summarize_caravan_comparison(comparison_df)

    logger.info("\n" + "=" * 60)
    logger.info(f"✓ Comparison complete: {len(comparison_df)} stations processed")
    logger.info(f"✓ Output directory: {output_dir}")

    if test_mode:
        logger.info("\nTest passed! Run without --test flag to process full dataset.")
    logger.info("=" * 60)


if __name__ == '__main__':
    main()

