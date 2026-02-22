import os
import numpy as np
import geopandas as gpd
import pandas as pd
import logging


from bokeh.plotting import figure
from bokeh.embed import components
from bokeh.resources import CDN
from bokeh.layouts import gridplot

from bokeh.models import GeoJSONDataSource
from jinja2 import Template
from bokeh.palettes import Bokeh6, Category10

from pathlib import Path
from shapely.geometry import mapping

# Get the folder this script is in
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

logger = logging.getLogger(__name__)

import xyzservices.providers as xyz

tiles = xyz.OpenStreetMap.Mapnik


def add_pour_point_and_station_markers(p, station_dir: Path, station_id: str):
    """Add pour point and station location markers to a Bokeh plot.

    Args:
        p: Bokeh figure to add markers to
        station_dir: Path to station directory
        station_id: Station identifier
    """
    # Load and plot pour point if available
    pour_point_file = station_dir / f"{station_id}_pour_point.geojson"
    if pour_point_file.exists():
        try:
            pp_gdf = gpd.read_file(pour_point_file).to_crs("EPSG:3857")
            pp_x = pp_gdf.geometry.x.values
            pp_y = pp_gdf.geometry.y.values
            p.scatter(pp_x, pp_y, size=12, color='green', alpha=0.8, marker='triangle',
                    legend_label='Pour Point', line_color='darkgreen', line_width=2)
        except Exception as e:
            logger.debug(f"Failed to load pour point for {station_id}: {e}")

    # Load and plot station location if available
    station_loc_file = station_dir / f"{station_id}_station_location.geojson"
    if station_loc_file.exists():
        try:
            loc_gdf = gpd.read_file(station_loc_file).to_crs("EPSG:3857")
            loc_x = loc_gdf.geometry.x.values
            loc_y = loc_gdf.geometry.y.values
            p.scatter(loc_x, loc_y, size=12, color='orange', alpha=0.8, marker='square',
                    legend_label='Station Location', line_color='darkorange', line_width=2)
        except Exception as e:
            logger.debug(f"Failed to load station location for {station_id}: {e}")


def render_html_from_plot(p, html_path):
    # Generate the components
    script, div = components(p)

    # Minimal Bokeh-only HTML
    plot_template = Template(
        """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        {{ resources }}
        {{ script }}
        <style> body { margin: 0; } </style>
    </head>
    <body>
        {{ div | safe }}
    </body>
    </html>
    """
    )
    rendered_plot_html = plot_template.render(
        script=script, div=div, resources=CDN.render()
    )
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(rendered_plot_html)


def generate_similarity_distribution_plot(similarity_dict: dict):
    """
    Generate an empirical cumulative distribution plot for the
    Jaccard similarity indices for catchments that have been updated.
    """
    # format the dictionary to a dataframe
    jaccard_df = pd.DataFrame.from_dict(similarity_dict, orient="index")

    p = figure(
        title=f"Empirical CDF of Jaccard Similarity Indices",
        x_axis_label="Jaccard Similarity Index",
        y_axis_label="P(X ≤ x)",
        width=700,
        height=400,
    )
    for c in jaccard_df.columns:
        # calculate the empirical CDF
        sorted_values = np.sort(jaccard_df[c].values)
        yvals = np.arange(1, len(sorted_values) + 1) / len(sorted_values)
        label = f"[{c[0]}] → [{c[1]}]"
        p.step(sorted_values, yvals, line_width=2, legend_label=label)
    p.legend.title = "Catchment Revisions"
    p.legend.location = "top_left"
    p.legend.click_policy = "hide"
    p.legend.background_fill_alpha = 0.75
    plot_fname = "jaccard_cdf_plot.html"
    cdf_plot_path = BASE_DIR / ".." / "_static" / plot_fname
    render_html_from_plot(p, cdf_plot_path)
    print("    Generated Jaccard similarity distribution plot at", cdf_plot_path)
    return plot_fname


def create_bokeh_plot(
    official_id,
    station_name,
    catchment_gdf: gpd.GeoDataFrame,
    station_gdf: gpd.GeoDataFrame,
    pour_point_gdf: gpd.GeoDataFrame,
    dam_gdf: gpd.GeoDataFrame,
):
    # Reproject all data to web mercator
    catchment_gdf = catchment_gdf.to_crs("EPSG:3857")
    if not station_gdf.empty:
        station_gdf = station_gdf.to_crs("EPSG:3857")
    if not pour_point_gdf.empty:
        pour_point_gdf = pour_point_gdf.to_crs("EPSG:3857")
    if not dam_gdf.empty:
        dam_gdf = dam_gdf.to_crs("EPSG:3857")

    # Create the figure
    p = figure(
        x_axis_type="mercator",
        y_axis_type="mercator",
        width=700,
        height=550,
        tools="pan,wheel_zoom,box_zoom,reset,save",
    )

    # Add base map tiles
    p.add_tile(tiles)

    # Dictionary to track colors by revision date
    colors_by_date = {}

    # Add catchment polygons
    # sort by revision_date
    catchment_gdf = catchment_gdf.sort_values(by="revision_date")
    for idx, row in catchment_gdf.iterrows():
        rev_date = row["revision_date"]
        # format the revision date string
        rev_date = (
            rev_date.strftime("%Y-%m-%d")
            if isinstance(rev_date, pd.Timestamp)
            else str(rev_date)
        )
        if rev_date not in colors_by_date:
            # Use Bokeh's Category10 or Category20 palette for better color distinction
            # Get the index of this date in the colors_by_date dictionary (max 6 colors)
            date_index = len(colors_by_date) % 6
            colors_by_date[rev_date] = Category10[10][date_index]

        xs, ys = row.geometry.exterior.xy
        p.patch(
            xs,
            ys,
            fill_alpha=0.3,
            fill_color=colors_by_date[rev_date],
            line_color=colors_by_date[rev_date],
            legend_label=f"Catchment ({rev_date})",
        )

    # Add station points
    if not station_gdf.empty:
        for idx, row in station_gdf.iterrows():
            rev_date = row["revision_date"]
            # format the revision date string
            rev_date = (
                rev_date.strftime("%Y-%m-%d")
                if isinstance(rev_date, pd.Timestamp)
                else str(rev_date)
            )
            if rev_date not in colors_by_date:
                date_index = len(colors_by_date) % 6
                colors_by_date[rev_date] = Category10[10][date_index]

            x, y = row.geometry.x, row.geometry.y
            p.scatter(
                x,
                y,
                size=10,
                marker="star",
                color=colors_by_date[rev_date],
                legend_label=f"Station ({rev_date})",
            )

    # Add pour points
    if not pour_point_gdf.empty:
        for idx, row in pour_point_gdf.iterrows():
            rev_date = row["revision_date"]
            # format the revision date string
            rev_date = (
                rev_date.strftime("%Y-%m-%d")
                if isinstance(rev_date, pd.Timestamp)
                else str(rev_date)
            )
            if rev_date not in colors_by_date:
                date_index = len(colors_by_date) % 6
                colors_by_date[rev_date] = Category10[10][date_index]

            x, y = row.geometry.x, row.geometry.y
            p.scatter(
                x,
                y,
                size=10,
                marker="triangle",
                color=colors_by_date[rev_date],
                legend_label=f"Pour Point ({rev_date})",
            )

    # Add dams
    if not dam_gdf.empty:
        for idx, row in dam_gdf.iterrows():
            rev_date = row["revision_date"]
            # format the revision date string
            rev_date = (
                rev_date.strftime("%Y-%m-%d")
                if isinstance(rev_date, pd.Timestamp)
                else str(rev_date)
            )
            if rev_date not in colors_by_date:
                date_index = len(colors_by_date) % 6
                colors_by_date[rev_date] = Category10[10][date_index]

            x, y = row.geometry.x, row.geometry.y
            p.scatter(
                x,
                y,
                size=10,
                marker="square",
                color=colors_by_date[rev_date],
                legend_label=f"Dam ({rev_date})",
            )

    # Configure legend
    p.legend.background_fill_alpha = 0.75
    p.legend.click_policy = "hide"

    # Save plot-only HTML separately at project root level in _static folder
    html_static_folder = BASE_DIR / ".." / "_static" / "catchments"
    os.makedirs(html_static_folder, exist_ok=True)
    html_path = html_static_folder / f"{official_id}_catchment_plot.html"
    render_html_from_plot(p, html_path)


def get_catchment_folders():
    """
    Get all catchment folders in the catchments directory.
    """
    base_folder = BASE_DIR / ".." / "catchments"
    catchment_folders = [
        folder
        for folder in os.listdir(base_folder)
        if os.path.isdir(os.path.join(base_folder, folder))
    ]
    return catchment_folders


def find_revised_catchments(catchment_folders):
    print("Finding revised catchments...")
    print(len(catchment_folders), "catchment folders found.")
    revised_catchments = {}
    for folder in catchment_folders:
        source_code, official_id = folder.split("-")
        catchment_filename = f"{official_id}_catchment.geojson"
        catchment_path = BASE_DIR / ".." / "catchments" / folder / catchment_filename
        gdf = gpd.read_file(catchment_path)
        if len(gdf) > 1:
            revised_catchments[folder] = gdf
    print(f"Found {len(revised_catchments)} catchments with revisions.")
    return revised_catchments


def compute_jaccard_similarity(gdf_dict):
    """
    Compute the Jaccard similarity between catchment polygon revisions.
    Also returns the revision dates to create a reference table.
    """
    jaccard_matrix = {}
    revision_dates = {}

    for official_id, gdf in gdf_dict.items():
        proj_gdf = gdf.copy().to_crs("EPSG:3005")
        gdf["Area"] = round(proj_gdf.geometry.area / 1e6, 1)

        jaccard_matrix[official_id] = {}

        for i, row1 in gdf.iterrows():
            if i not in revision_dates:
                revision_dates[i] = (
                    row1["revision_date"].strftime("%Y-%m-%d")
                    if isinstance(row1["revision_date"], pd.Timestamp)
                    else str(row1["revision_date"])
                )
            for j, row2 in gdf.iterrows():
                if j <= i:
                    continue  # Skip self and redundant pairs
                if j not in revision_dates:
                    revision_dates[j] = (
                        row2["revision_date"].strftime("%Y-%m-%d")
                        if isinstance(row2["revision_date"], pd.Timestamp)
                        else str(row2["revision_date"])
                    )

                intersection = row1.geometry.intersection(row2.geometry).area
                union = row1.geometry.union(row2.geometry).area

                key = tuple(sorted((i, j)))
                jaccard_matrix[official_id][key] = (
                    round(intersection / union, 2) if union > 0 else 0
                )

    return jaccard_matrix, revision_dates


def generate_summary_tables(jaccard_matrix, revision_dates):
    """
    Generate a markdown table where the index column is the Official_ID,
    and the columns are the (i, j) pairs of revision dates.
    Jaccard similarity values are the table values.
    """
    # conver the jaccard matrix dict to a dataframe
    jaccard_df = pd.DataFrame.from_dict(jaccard_matrix, orient="index")
    # sort ascending by the right-most column
    jaccard_df = jaccard_df.sort_values(by=list(jaccard_df.columns), ascending=True)
    jaccard_df.columns = [f"[{e[0]}] → [{e[1]}]" for e in jaccard_df.columns]
    jaccard_df.index = jaccard_df.index.map(
        lambda x: f"[{x}](https://dankovacek.github.io/camel_farrier/catchments/{x}/{x.split('-')[1]}.html)"
    )
    jaccard_df_markdown = jaccard_df.to_markdown(index=True, tablefmt="github")
    #  make the index column a hyperlink
    # https://dankovacek.github.io/camel_farrier/catchments/HYDAT-05AA006/05AA006.html
    # create a separate table to denote revision dates
    revision_dates_df = pd.DataFrame.from_dict(revision_dates, orient="index")
    # rev_cols = [f'[{e[0]}] --> [{e[1]}]' for e in [revision_dates_df.index.values]
    revision_dates_df.columns = ["Revision Dates"]
    revision_dates_df.index.name = "Ref. Number."

    # revision_dates_df.columns = rev_cols
    revision_dates_md = revision_dates_df.to_markdown(index=True, tablefmt="github")
    return jaccard_df_markdown, revision_dates_md


def process_static_catchment_page_html(
    folder_name: str,
    site_url_prefix: str = "",
):
    source_code, official_id = folder_name.split("-")
    folder = BASE_DIR / ".." / "catchments" / folder_name
    catchment_path = folder / f"{official_id}_catchment.geojson"
    station_path = folder / f"{official_id}_station.geojson"
    pour_point_path = folder / f"{official_id}_pour_point.geojson"
    attributes_path = folder / f"{official_id}_attributes.csv"
    dam_data_path = folder / f"{official_id}_dam_data.geojson"

    catchment_gdf = gpd.read_file(catchment_path)
    station_name = catchment_gdf["Name"].values[0]
    station_gdf, pour_point_gdf = gpd.GeoDataFrame(), gpd.GeoDataFrame()
    if os.path.exists(station_path):
        station_gdf = gpd.read_file(station_path)
    if os.path.exists(pour_point_path):
        pour_point_gdf = gpd.read_file(pour_point_path)

    attrs_df = pd.read_csv(attributes_path)
    official_id = attrs_df["Official_ID"].values[0]
    source_code = attrs_df["Source"].values[0]
    station_name = attrs_df["Name"].values[0]
    revision_date = attrs_df["revision_date"].values[0]

    dam_df = gpd.GeoDataFrame()
    dam_df_md_table = None
    if os.path.exists(dam_data_path):
        # note check 08HA025, it should have a dam in the catchment
        dam_df = gpd.read_file(dam_data_path)
        # drop columns if all row values are null
        dam_df = dam_df.dropna(axis=1, how="all")
        dam_table_df = dam_df.copy().drop(columns=["geometry"])
        dam_df_md_table = dam_table_df.to_markdown(index=False)

    attr_cols = attrs_df.columns
    static_cols = ["Source", "Name", "Official_ID"]
    if not attrs_df.empty:
        if "geometry" in attrs_df.columns:
            attrs_df = attrs_df.drop(columns=["geometry"])
        attrs_table = attrs_df[[c for c in attr_cols if c not in static_cols]].T.copy()
        attrs_table.columns = ["(Arsenault, 2020)"]
        attrs_table.index.name = "Attribute"
        hysets_table_md = attrs_table.to_markdown()
    else:
        hysets_table_md = "No attribute data found."

    # Bokeh plot components
    create_bokeh_plot(
        official_id,
        station_name,
        catchment_gdf,
        station_gdf,
        pour_point_gdf,
        dam_df,
    )

    # HTML template
    template_path = BASE_DIR / ".." / "templates" / "catchment_page_template.md.j2"
    with open(template_path, "r") as f:
        md_template = Template(f.read())

    # Use root-relative path (starts with /) to avoid relative path issues
    iframe_src = f"/_static/catchments/{official_id}_catchment_plot.html"

    rendered_md = md_template.render(
        source_code=source_code,
        official_id=official_id,
        station_name=station_name,
        revision_date=revision_date or "N/A",
        station_title=f"{official_id}: {station_name}",
        iframe_src=iframe_src,
        static_table=attrs_df[static_cols].to_markdown(index=False),
        attributes_table=hysets_table_md,
        dam_data_table=dam_df_md_table,
    )

    # Save markdown
    md_path = folder / f"{official_id}.md"
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(rendered_md)

    print(f"Generated Markdown with iframe at {md_path}")

    return {
        "source_code": source_code,
        "official_id": official_id,
        "name": station_name,
        "folder": folder,
        "revision_date": revision_date,
    }


def filter_small_geometries(geom, min_area_m2=10, debug=False):
    """Filter out small vestigial geometries and ensure validity."""
    from shapely.geometry import Polygon

    gdf = gpd.GeoDataFrame(geometry=[geom], crs='EPSG:3857').explode(index_parts=False).reset_index(drop=True)

    if debug and len(gdf) > 0:
        areas = gdf.geometry.area.values
        print(f"  Total sub-geometries: {len(areas)}")
        print(f"  Area range: {areas.min():.2f} - {areas.max():.2f} m²")
        print(f"  Area percentiles: p50={np.percentile(areas, 50):.2f}, p95={np.percentile(areas, 95):.2f}, p99={np.percentile(areas, 99):.2f} m²")
        print(f"  Filtering out {(areas < min_area_m2).sum()} geometries < {min_area_m2} m²")

    gdf['area_km2'] = gdf.geometry.area / 1e6
    gdf = gdf[gdf['area_km2'] >= min_area_m2 / 1e6]
    gdf.geometry = gdf.geometry.apply(lambda g: g.buffer(0) if not g.is_valid else g)
    gdf = gdf[gdf.geometry.is_valid]
    return gdf


def round_coordinates(gdf: gpd.GeoDataFrame, precision_m: float = 1.0) -> gpd.GeoDataFrame:
    """Round coordinates to specified precision in meters (for EPSG:3857).

    Args:
        gdf: GeoDataFrame in EPSG:3857 (Web Mercator)
        precision_m: Rounding precision in meters (default 1.0m)

    Returns:
        GeoDataFrame with rounded coordinates
    """
    gdf = gdf.copy()
    gdf.geometry = gdf.geometry.apply(
        lambda geom: geom if geom is None else
        type(geom)([(round(x / precision_m) * precision_m,
                     round(y / precision_m) * precision_m)
                    for x, y in geom.exterior.coords])
    )
    return gdf


def plot_station_polygon(station_id: str, width: int = 800):
    """
    Plot station catchment polygon on basemap for Jupyter Book bokeh-plot directive.
    When multiple versions exist, shows comparison with latest as ground truth:
    - Light green: Intersection (areas that match)
    - Red: Old area NOT in new (false positive - old included incorrectly)
    - Purple: New area NOT in old (false negative - old missed area)

    Args:
        station_id: Station ID (e.g., '07DB005')
        width: Plot width in pixels (default 800)

    Returns:
        Dict with 'status' key:
        - If 'success': includes 'figure' and optional 'notes'
        - If 'pending': includes 'title' and 'subtitle' for placeholder
    """

    # Path to station data directory
    station_dir = BASE_DIR / "book_docs" / "stations" / station_id

    if not os.path.exists(station_dir):
        print(f"Station directory not found: {station_dir}")
        return {
            'status': 'pending',
            'title': 'Catchment boundary will appear here once delineation is complete.',
            'subtitle': f'Station: {station_id}'
        }

    # Find polygon files
    polygon_files = sorted(station_dir.glob(f"{station_id}_polygon*.geojson"))

    if not polygon_files:
        print(f"No polygon files found for station {station_id} in {station_dir}")
        return {
            'status': 'pending',
            'title': 'Catchment boundary will appear here once delineation is complete.',
            'subtitle': f'Station: {station_id}'
        }


    # Load polygons
    latest_file = polygon_files[-1]
    try:
        latest_gdf = gpd.read_file(latest_file)
    except Exception as exc:
        logger.warning("Failed to read latest polygon for %s: %s", station_id, exc)
        return {
            'status': 'warning',
            'message': f'Unable to load catchment polygon for {station_id}.'
        }

    if latest_gdf.empty:
        return {
            'status': 'warning',
            'message': f'No polygon features found for {station_id}.'
        }

    latest_gdf = latest_gdf.to_crs("EPSG:3857")
    latest_gdf = round_coordinates(latest_gdf, precision_m=1.0)

    # Get version info from latest
    latest_version = latest_gdf.get('Version', ['Unknown']).values[0] if 'Version' in latest_gdf.columns else 'Unknown'
    date_cols = [col for col in latest_gdf.columns if col in ['Date', 'Date_rev']]
    if date_cols:
        latest_date = pd.to_datetime(latest_gdf[date_cols[0]].values[0]).strftime("%Y-%m-%d")
    else:
        latest_date = 'Unknown'

    # Check if we should show comparison (2+ versions)
    show_comparison = len(polygon_files) > 1

    if show_comparison:
            # Load previous version from local files
            previous_file = polygon_files[-2]
            try:
                previous_gdf = gpd.read_file(previous_file)
            except Exception as exc:
                logger.warning("Failed to read previous polygon for %s: %s", station_id, exc)
                return {
                    'status': 'warning',
                    'message': f'Unable to compare polygon versions for {station_id}.'
                }

            if previous_gdf.empty:
                return {
                    'status': 'warning',
                    'message': f'Previous polygon version missing for {station_id}.'
                }

            previous_gdf = previous_gdf.to_crs("EPSG:3857")
            previous_gdf = round_coordinates(previous_gdf, precision_m=1.0)

            # Get previous version info
            prev_version = previous_gdf.get('Version', ['Unknown']).values[0] if 'Version' in previous_gdf.columns else 'Unknown'
            date_cols_prev = [col for col in previous_gdf.columns if col in ['Date', 'Date_rev']]
            if date_cols_prev:
                prev_date = pd.to_datetime(previous_gdf[date_cols_prev[0]].values[0]).strftime("%Y-%m-%d")
            else:
                prev_date = 'Not found'

    if show_comparison:
        # Get geometries
        old_geom = previous_gdf.geometry.iloc[0]
        new_geom = latest_gdf.geometry.iloc[0]

        # Compute spatial differences (semantic: latest is ground truth)
        intersection = old_geom.intersection(new_geom)  # Light green: areas that match
        false_positive = old_geom.difference(new_geom)  # Red: old had it, new doesn't (error in old)
        false_negative = new_geom.difference(old_geom)  # Purple: new has it, old didn't (old missed it)

        # Filter out small vestigial geometries using adaptive threshold
        # Use either 100 m² or 0.01% of new polygon area, whichever is smaller
        new_area_m2 = new_geom.area
        min_area_m2 = min(1000, 0.0001 * new_area_m2)
        intersection = filter_small_geometries(intersection, min_area_m2=min_area_m2, debug=False)
        false_positive = filter_small_geometries(false_positive, min_area_m2=min_area_m2, debug=False)
        false_negative = filter_small_geometries(false_negative, min_area_m2=min_area_m2, debug=False)

        # Combined bounds
        combined_bounds = gpd.GeoDataFrame(
            geometry=pd.concat([previous_gdf.geometry, latest_gdf.geometry])
        ).total_bounds
    else:
        # Single version mode
        combined_bounds = latest_gdf.total_bounds

    # Create figure
    height = int(width * 0.625)  # Maintain aspect ratio
    p = figure(
        title=f"",
        x_axis_type="mercator",
        y_axis_type="mercator",
        width=width,
        height=height,
        match_aspect=True,
        tools="pan,wheel_zoom,box_zoom,reset,save"
    )

    p.add_tile(tiles)

    area_string = "@area_km2{0.000} km²"

    if show_comparison:
        from bokeh.models import HoverTool

        # Plot comparison layers with area information in hover tooltips


        # 1. Intersection (light green) - areas that match
        if len(intersection) > 0:
            intersection_source = GeoJSONDataSource(geojson=intersection.to_json())
            r1 = p.patches('xs', 'ys', source=intersection_source,
                     fill_color='lightgreen', fill_alpha=0.7,
                     line_color='darkgreen', line_width=1,
                     legend_label='Agreement')
            p.add_tools(HoverTool(renderers=[r1], tooltips=[("Agreement", ""), ("Area", area_string)]))

        # 2. False positive (red) - old had it, new doesn't (error in old)
        if len(false_positive) > 0:
            fp_source = GeoJSONDataSource(geojson=false_positive.to_json())
            r2 = p.patches('xs', 'ys', source=fp_source,
                     fill_color='red', fill_alpha=0.6,
                     line_color='darkred', line_width=2,
                     legend_label=f'Old only ({prev_version})')
            p.add_tools(HoverTool(renderers=[r2], tooltips=[("Old only", f"{prev_version}"), ("Area", area_string)]))

        # 3. False negative (purple) - new has it, old didn't (old missed it)
        if len(false_negative) > 0:
            fn_source = GeoJSONDataSource(geojson=false_negative.to_json())
            r3 = p.patches('xs', 'ys', source=fn_source,
                     fill_color='purple', fill_alpha=0.6,
                     line_color='indigo', line_width=2,
                     legend_label=f'New only ({latest_version})')
            p.add_tools(HoverTool(renderers=[r3], tooltips=[("New only", f"{latest_version}"), ("Area", area_string)]))
    else:
        # Single version - standard blue polygon
        from bokeh.models import HoverTool
        latest_gdf['area_km2'] = latest_gdf.geometry.area / 1e6
        # remove date columns from latest_gdf
        latest_gdf = latest_gdf.drop(columns=[col for col in latest_gdf.columns if col in ['Date', 'Date_rev', 'date']], errors='ignore')
        geo_source = GeoJSONDataSource(geojson=latest_gdf.to_json())
        r = p.patches('xs', 'ys', source=geo_source,
                 fill_color='dodgerblue', fill_alpha=0.5,
                 line_color='navy', line_width=2,
                 legend_label=f'{latest_version} ({latest_date})')
        p.add_tools(HoverTool(renderers=[r], tooltips=[("Version", f"{latest_version}"), ("Area", area_string)]))

    # Set view bounds with padding
    x_range = combined_bounds[2] - combined_bounds[0]
    y_range = combined_bounds[3] - combined_bounds[1]
    padding = 0.15
    p.x_range.start = combined_bounds[0] - x_range * padding
    p.x_range.end = combined_bounds[2] + x_range * padding
    p.y_range.start = combined_bounds[1] - y_range * padding
    p.y_range.end = combined_bounds[3] + y_range * padding

    # Add pour point and station location markers
    add_pour_point_and_station_markers(p, station_dir, station_id)

    p.legend.location = "top_right"
    p.legend.click_policy = "hide"

    # Return success with figure and notes
    notes = {
        'title': 'Geometric Precision Notes:',
        'items': [
            "**Coordinate Precision**: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations",
            "**Small Geometry Filter**: Sub-polygons smaller than min(1000 m², 0.01% of new polygon area) are filtered as vestigial artifacts",
            "**Area Calculations**: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion"
        ]
    }

    return {
        'status': 'success',
        'figure': p,
        'notes': notes
    }

def plot_distributions(station_id: str):
    """
    Plot flow duration curve and monthly hydrograph for a station.

    Flow Duration Curve: Shows the percentage of time flow exceeds a given value
    Monthly Hydrograph: Shows mean monthly flows with variability bands

    Args:
        station_id: Station ID (e.g., '07DB005')

    Returns:
        Dict with 'status' key:
        - If 'success': includes 'figure' (Bokeh gridplot) and 'notes'
        - If 'pending': includes 'title' and 'subtitle' for placeholder
    """
    from bokeh.models import Div, HoverTool
    from bokeh.layouts import gridplot
    from bokeh.palettes import Category20

    # Path to station data directory
    station_dir = BASE_DIR / "book_docs" / "stations" / station_id

    # Load daily flows
    daily_flows_file = station_dir / f"{station_id}_daily_flows.csv"

    if not daily_flows_file.exists():
        return {
            'status': 'warning',
            'message': f'No daily flow file found for {station_id}.'
        }

    try:
        df = pd.read_csv(daily_flows_file, parse_dates=['date'])
    except Exception as exc:
        logger.warning("Failed to read daily flows for %s: %s", station_id, exc)
        return {
            'status': 'warning',
            'message': f'Unable to parse daily flow data for {station_id}.'
        }

    if df.empty or 'flow_cms' not in df.columns:
        return {
            'status': 'warning',
            'message': f'No valid flow data available for {station_id}.'
        }

    df = df.rename(columns={'date': 'Date', 'flow_cms': 'Value'})
    df = df[df['Value'] > 0]
    df = df.dropna(subset=['Value'])

    if len(df) == 0:
        return {
            'status': 'info',
            'message': f'Flow records for {station_id} contain no positive values.'
        }

    # Add month column for monthly analysis
    df['Month'] = df['Date'].dt.month
    df['Year'] = df['Date'].dt.year

    # Get unique years for annual analysis
    years = sorted(df['Year'].unique())

    # 1. Flow Duration Curve with POR, annual FDCs, and ensemble median
    p1 = figure(
        title="Flow Duration Curve",
        x_axis_label="Exceedance Probability (%)",
        y_axis_label="Discharge (m³/s)",
        width=450,
        height=450,
        y_axis_type="log",
        tools="pan,wheel_zoom,box_zoom,reset,save"
    )

    # Compute annual FDCs and store for ensemble median
    annual_fdcs = {}
    exceedance_pct = np.arange(0, 101, 1)  # Integer percentiles 0-100

    for year in years:
        year_data = df[df['Year'] == year]['Value'].values
        if len(year_data) > 10:  # Need minimum data for meaningful FDC
            sorted_flows = np.sort(year_data)[::-1]
            # Interpolate to integer percentiles
            year_exceedance = np.arange(1, len(sorted_flows) + 1) / len(sorted_flows) * 100
            year_fdc = np.interp(exceedance_pct, year_exceedance, sorted_flows)
            annual_fdcs[year] = year_fdc

            # Plot individual annual FDC in light lightgrey
            p1.line(exceedance_pct, year_fdc, line_width=1, color='lightgrey', alpha=0.7)

    # Compute ensemble median FDC (median at each percentile across all years)
    if annual_fdcs:
        fdc_matrix = np.array(list(annual_fdcs.values()))
        ensemble_median_fdc = np.median(fdc_matrix, axis=0)
        p1.line(exceedance_pct, ensemble_median_fdc, line_width=2.5, color='orange',
                alpha=0.9, legend_label='Ensemble Median')

    # Plot POR (Period of Record) FDC
    sorted_flows_por = np.sort(df['Value'].values)[::-1]
    exceedance_por = np.arange(1, len(sorted_flows_por) + 1) / len(sorted_flows_por) * 100
    p1.line(exceedance_por, sorted_flows_por, line_width=2, color='navy',
            alpha=0.8, legend_label='POR')

    # Add lightgrey line for annual FDCs to legend (manually since they're plotted in loop)
    p1.line([np.nan], [np.nan], line_width=1, color='lightgrey', alpha=0.7,
            legend_label=f'Annual (n={len(annual_fdcs)})')

    p1.add_tools(HoverTool(tooltips=[("Exceedance", "@x{0.1f}%"), ("Flow", "@y{0.2f} m³/s")]))
    p1.legend.location = "top_right"
    p1.legend.click_policy = "hide"

    # 2. Monthly Hydrograph with POR mean, individual years, and median year
    month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    p2 = figure(
        title="Monthly Hydrograph",
        x_axis_label="Month",
        y_axis_label="Discharge (m³/s)",
        width=450,
        height=450,
        tools="pan,wheel_zoom,box_zoom,reset,save",
        x_range=month_names
    )

    # Compute annual total volumes to find median year
    annual_volumes = df.groupby('Year')['Value'].sum()
    median_year = annual_volumes.median()
    closest_year = (annual_volumes - median_year).abs().idxmin()

    # Plot individual years in light lightgrey
    for year in years:
        year_data = df[df['Year'] == year].groupby('Month')['Value'].mean().reindex(range(1, 13))
        if not year_data.isna().all():
            p2.line(month_names, year_data.values, line_width=1, color='lightgrey', alpha=0.7)

    # Plot POR mean (blue)
    monthly_mean = df.groupby('Month')['Value'].mean().reindex(range(1, 13))
    p2.line(month_names, monthly_mean.values, line_width=2, color='navy',
            legend_label='POR Mean')

    # Plot median year (orange)
    median_year_data = df[df['Year'] == closest_year].groupby('Month')['Value'].mean().reindex(range(1, 13))
    p2.line(month_names, median_year_data.values, line_width=2.5, color='orange',
            alpha=0.9, legend_label=f'Median Year ({closest_year})')

    # Add lightgrey line for annual patterns to legend
    p2.line([np.nan], [np.nan], line_width=1, color='lightgrey', alpha=0.7,
            legend_label=f'Annual (n={len(years)})')

    p2.add_tools(HoverTool(tooltips=[("Month", "@x"), ("Flow", "@y{0.2f} m³/s")]))
    p2.legend.location = "top_right"
    p2.legend.click_policy = "hide"

    # Return success with figure and notes
    plots_grid = gridplot([[p1, p2]], toolbar_location='right')

    notes = {
        'title': 'Notes:',
        'items': [
            "**POR**: Period of Record - uses all daily observations across entire time period",
            "**Ensemble Median**: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years",
            "**Median Year**: The actual year with total annual volume closest to the median of all years",
            "**Annual**: Light grey lines show individual year patterns preserving inter-annual variability"
        ]
    }

    return {
        'status': 'success',
        'figure': plots_grid,
        'notes': notes
    }


