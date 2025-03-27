import geopandas as gpd
import pandas as pd
import os
import json

from bokeh.plotting import figure
from bokeh.models import GeoJSONDataSource
from bokeh.embed import components
from bokeh.resources import CDN
from jinja2 import Template
from shapely.geometry import Point


import xyzservices.providers as xyz
tiles = xyz.OpenStreetMap.Mapnik


def create_bokeh_plot(official_id, gdf: gpd.GeoDataFrame, attrs_df: pd.DataFrame, static_html_path: str):
    gdf = gdf.to_crs("EPSG:3857")
    geo_source = GeoJSONDataSource(geojson=gdf.to_json())   

    p = figure(
        title=f"{official_id} Catchment Polygon",
        x_axis_type="mercator",
        y_axis_type="mercator",
        width=700,
        height=550,
        tools="pan,wheel_zoom,box_zoom,reset,save",
    )
    p.patches('xs', 'ys', source=geo_source, fill_alpha=0.4, line_color="black")
    p.add_tile(tiles)
    
    script, div = components(p)
    
    # Minimal Bokeh-only HTML
    plot_template = Template("""
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
    """)    

    rendered_plot_html = plot_template.render(
        script=script,
        div=div,
        resources=CDN.render()
    )
    
    # Save plot-only HTML
    with open(static_html_path, "w", encoding="utf-8") as f:
        f.write(rendered_plot_html)
    

def process_static_catchment_page_html(
    attributes_path: str,
    geojson_path: str,
    catchment_data_folder: str,
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
    
    attr_cols = attrs_df.columns
    static_cols = ['Source', 'Name', 'Official_ID']

    if not attrs_df.empty:
        if "geometry" in attrs_df.columns:
            attrs_df = attrs_df.drop(columns=["geometry"])
        attrs_table = attrs_df[[c for c in attr_cols if c not in static_cols]].T.copy()
        attrs_table.columns = ["(Arsenault, 2020)"]
        attrs_table.index.name = "Attribute"
        hysets_table_md = attrs_table.to_markdown()
    else:
        hysets_table_md = "No attribute data available."

    # Bokeh plot components
    bokeh_plot_path = f"_static/catchments/{official_id}_catchment_plot.html"
    create_bokeh_plot(official_id, catchment_gdf, attrs_df, static_html_path=bokeh_plot_path)

    # HTML template
    with open("templates/catchment_page_template.md.j2", "r") as f:
        md_template = Template(f.read())

    rendered_md = md_template.render(
        source_code=source_code,
        official_id=official_id,
        station_name=station_name,
        revision_date=revision_date or "N/A",
        station_title=f"{official_id}: {station_name}",
        iframe_src='/' + bokeh_plot_path,
        static_table=attrs_df[static_cols].to_markdown(index=False),
        attributes_table=hysets_table_md,
    )

    # Save markdown
    md_path = os.path.join(catchment_data_folder, f'{source_code}-{official_id}', f"{official_id}.md")
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(rendered_md)

    print(f"Generated Markdown with iframe at {md_path}")

    return {
        "source_code": source_code,
        "official_id": official_id,
        "name": station_name,
        "folder": catchment_data_folder,
    }