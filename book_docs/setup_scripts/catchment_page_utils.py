import os
import numpy as np
import geopandas as gpd
import pandas as pd


from bokeh.plotting import figure
from bokeh.embed import components
from bokeh.resources import CDN
from jinja2 import Template
from bokeh.palettes import Bokeh6, Category10

# Get the folder this script is in
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

import xyzservices.providers as xyz

tiles = xyz.OpenStreetMap.Mapnik


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

    iframe_src = (
        f"{site_url_prefix}/_static/catchments/{official_id}_catchment_plot.html"
    )

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
