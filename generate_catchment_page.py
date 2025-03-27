import geopandas as gpd
import pandas as pd
import os
import json

from bokeh.plotting import figure
from bokeh.models import GeoJSONDataSource
from bokeh.embed import components
from bokeh.resources import CDN
from jinja2 import Template


import xyzservices.providers as xyz
tiles = xyz.OpenStreetMap.Mapnik



def create_bokeh_plot(gdf: gpd.GeoDataFrame):
    gdf = gdf.to_crs("EPSG:3857")
    geo_source = GeoJSONDataSource(geojson=gdf.to_json())

    p = figure(
        title="Catchment Polygon",
        x_axis_type="mercator",
        y_axis_type="mercator",
        width=600,
        height=400,
        tools="pan,wheel_zoom,box_zoom,reset,save",
    )
    p.patches('xs', 'ys', source=geo_source, fill_alpha=0.4, line_color="black")
    p.add_tile(tiles)
    return components(p)

def process_static_catchment_page_html(
    attributes_path: str,
    geojson_path: str,
    catchment_data_folder: str,
    static_html_folder: str,
):
    catchment_gdf = gpd.read_file(geojson_path)
    attrs_df = pd.read_csv(attributes_path)
    official_id = attrs_df["Official_ID"].values[0]
    source_code = attrs_df["Source"].values[0]
    station_name = attrs_df["Name"].values[0]
    revision_date = attrs_df["revision_date"].values[0]

    subfolder_name = f"{source_code}-{official_id}"
    md_folder_path = os.path.join(catchment_data_folder, subfolder_name)

    os.makedirs(md_folder_path, exist_ok=True)

    if not attrs_df.empty:
        if "geometry" in attrs_df.columns:
            attrs_df = attrs_df.drop(columns=["geometry"])
        attrs_table = attrs_df.T.copy()
        attrs_table.columns = ["(Arsenault, 2020)"]
        attrs_table.index.name = "Attribute"
        hysets_table_md = attrs_table.to_markdown()
    else:
        hysets_table_md = "No attribute data available."

    # Bokeh plot components
    script, div = create_bokeh_plot(catchment_gdf)

    # HTML template
    with open("templates/catchment_page_template.txt", "r", encoding="utf-8") as f:
        html_template = Template(f.read())

    rendered_html = html_template.render(
        title=f"{source_code}-{official_id}",
        revision_date=revision_date or "N/A",
        station_title=f"{official_id}: {station_name}",
        hysets_table=hysets_table_md,
        script=script,
        div=div,
        resources=CDN.render()
    )

    # Save HTML
    html_filename = f"{official_id}_catchment_plot.html"
    html_path = os.path.join(static_html_folder, html_filename)
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(rendered_html)

    # Save companion .md that embeds iframe to the HTML
    md_path = os.path.join(catchment_data_folder, f'{source_code}-{official_id}', f"{official_id}.md")
    iframe_url = f"/_static/catchments/{official_id}_catchment_plot.html"
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(f"# {source_code}-{official_id}\n\n")
        f.write(f'<iframe src="{iframe_url}" width="100%" height="650px" frameborder="0"></iframe>\n')
        
        # print the f string to the console
        print(f'<iframe src="{iframe_url}" width="100%" height="650px" frameborder="0"></iframe>\n')

    print(f"Generated HTML at {html_path} and Markdown wrapper at {md_path}")

    return {
        "source_code": source_code,
        "official_id": official_id,
        "name": station_name,
        "folder": catchment_data_folder,
    }