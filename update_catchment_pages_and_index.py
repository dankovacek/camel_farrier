import os
import re
import json

from generate_introduction_page import create_intro
from generate_catchment_page import process_static_catchment_page_html


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

#!/usr/bin/env python3
"""
Generate markdown pages for catchment polygon revisions.

This script creates individual markdown files for each catchment folder
and a main index page with a search bar for easy navigation.
"""


def get_geometric_properties(gdf):
    """Extract geometric properties from a GeoDataFrame."""
    try:
        geom = gdf.iloc[0].geometry
        area = geom.area
        perimeter = geom.length

        # Create a DataFrame with geometric properties
        return pd.DataFrame(
            {
                "Area (sq km)": [area / 1e6],  # Convert to sq km
                "Perimeter (km)": [perimeter / 1e3],  # Convert to km
                "Compactness": [4 * 3.14159 * area / (perimeter**2)],  # Circularity
            }
        )
    except Exception as e:
        print(f"Error calculating geometric properties: {e}")
        return pd.DataFrame(
            {"Area (sq km)": [None], "Perimeter (km)": [None], "Compactness": [None]}
        )


def scan_catchment_folders():
    """Scan all catchment folders and return metadata for each."""
    base_folder = "catchment_polygon_revisions"
    catchment_data = []

    for folder in os.listdir(base_folder):
        folder_path = os.path.join(base_folder, folder)        
        source_code, official_id = folder.split("-")

        # Skip if not a directory or starts with "."
        if not os.path.isdir(folder_path) or folder.startswith("."):
            continue

        # Check for geojson and csv files
        geojson_file = f'{official_id}.geojson'
        attr_file = f'{official_id}_attributes.csv'

        if not os.path.exists(geojson_file) or not os.path.exists(attr_file):
            print('    Skipping folder: ', folder)
            continue

        # Check if resources folder has images
        resources_path = os.path.join(folder_path, "resources")
        has_image = os.path.isdir(resources_path) and any(
            f.endswith(".png") for f in os.listdir(resources_path)
        )

        # Get name from CSV if available
        station_name = "Unknown"
        if attr_file:
            try:
                attrs_file = os.path.join(folder_path, attr_file)
                attrs_df = pd.read_csv(attrs_file)
                if "Name" in attrs_df.columns:
                    station_name = attrs_df.loc[0, "Name"]
            except Exception as e:
                print(f"Error reading CSV for {folder}: {e}")

        catchment_data.append(
            {
                "folder": folder,
                "source_code": source_code,
                "official_id": official_id,
                "name": station_name,
                "has_image": has_image,
                "path": folder_path,
                'polygon_path': geojson_file,
                'attributes_path': attr_file,
            }
        )

    return catchment_data


def generate_index_page(catchment_data):
    """Generate the main index.md file with search functionality."""

    # # Count unique source codes and IDs
    # unique_sources = len(set([catchment_data[c]["source_code"] for c in catchment_data.keys()]))
    # total_catchments = len(catchment_data)
    
    # # import the text file "intro_content.txt" to be used as the introduction content
    # with open('intro_content.md', 'r') as file:
    #     content = file.read()

    # # Create index.md content
    # content = [
        
    #     "## Dataset Overview",
    #     f"* **Total catchments**: {total_catchments}",
    #     f"* **Data sources**: {unique_sources}",
    #     "",
    #     "## Data Dictionary",
    #     "| Source Code | Description |",
    #     "|-------------|-------------|",
    # ]

    # Add source codes (this would need to be customized with actual source descriptions)
    # source_descriptions = {
    #     "HYSETS": "HYSETS database (Arsenault et al., 2020)",
    #     "USGS": "United States Geological Survey",
    #     "WSC": "Water Survey of Canada",
    #     # Add more as needed
    # }

    # for source in sorted(set([catchment_data[c]["source_code"] for c in catchment_data.keys()])):
    #     desc = source_descriptions.get(source, "No description available")
    #     content.append(f"| {source} | {desc} |")

    # Add JavaScript for search functionality
    # content.extend(
    #     [
    #         "",
    #         "<script>",
    #         "// Catchment data for search",
    #         "const catchments = [",
    #     ]
    # )

    # Add JSON data for each catchment
    # for c in catchment_data.keys():
    #     d = catchment_data[c]
    #     official_id = d["official_id"]
    #     folder = d["folder"] + f"/{official_id}-README.html"
    #     content.append(
    #         f"  {{id: \"{d['official_id']}\", source: \"{d['source_code']}\", name: \"{d['name']}\", folder: \"catchment_polygon_revisions/{folder}\"}},"
    #     )
    # content.append("];</script>")
    
    # content.extend(["## References",
    #         "1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020.",
    #         ])
    
    

    # Write index.md
    # index_path = os.path.join(BASE_DIR, "index.md")
    # with open(index_path, "w") as f:
    #     f.write("\n".join(content))

    # print(f"Generated index page at {index_path}")


def update_catchment_pages():
    """Update or create README.md files for each catchment folder."""
    # catchment_data = scan_catchment_folders()

    # Process each catchment folder
    ws_folder = os.path.join(BASE_DIR, "catchment_polygon_revisions")
    catchment_data = {}
    for folder in os.listdir(ws_folder):
        source_code, official_id = folder.split("-")
        print(source_code, official_id, ws_folder)
        # Find the geojson file
        geojson_path = os.path.join(ws_folder, folder, f"{official_id}.geojson")
        attributes_path = os.path.join(ws_folder, folder, f"{official_id}_attributes.csv")
        if not os.path.isfile(geojson_path) or not os.path.isfile(attributes_path):
            print(f"GeoJSON file or attributes not found for {official_id}")
            raise FileNotFoundError
        
        # Process the catchment page
        # process_static_catchment_page(
        #     attrs_df=attrs_df,
        #     catchment_gdf=catchment_gdf,
        #     revision_date=attrs_df["revision_date"].values[0],
        # )
        data = process_static_catchment_page_html(
            attributes_path,
            geojson_path,
            folder_path=os.path.join(ws_folder, folder),
        )
        catchment_data[official_id] = data
    # Generate the index page
    # generate_index_page(catchment_data)
    base_intro_path = 'templates/intro_content.md'
    source_descriptions = {
        "HYSETS": "HYSETS database (Arsenault et al., 2020)",
        "USGS": "United States Geological Survey",
        "WSC": "Water Survey of Canada",
        # Add more as needed (CONAGUA?)
    }
    create_intro(catchment_data, base_intro_path, source_descriptions)
    
    print(f"Processed {len(catchment_data)} catchment folders")


# def create_catchment_image(catchment_gdf: gpd.GeoDataFrame, img_path: str, source_code: str, official_id: str):
#     # Generate a Bokeh plot of the catchment polygon
#     # First, reproject the catchment polygon to Web Mercator (EPSG:3857) for mapping
#     catchment_3857 = catchment_gdf.to_crs(epsg=3857)
#     poly_3857 = catchment_3857.iloc[0].geometry
#     x, y = poly_3857.exterior.xy

#     # Set up the figure with appropriate ranges (with a small margin)
#     buffer = 0  # adjust as needed
#     minx, miny, maxx, maxy = poly_3857.bounds
#     p = figure(
#         x_range=(minx - buffer, maxx + buffer),
#         y_range=(miny - buffer, maxy + buffer),
#         x_axis_type="mercator",
#         y_axis_type="mercator",
#         title=f"Catchment: {source_code}-{official_id}",
#         width=800, height=600,
#     )

#     # Add OpenTopoMap tiles with alpha transparency
#     p.add_tile(tiles, alpha=0.7)

#     # Add the catchment polygon as a translucent patch with dashed boundary
#     p.patch(
#         x,
#         y,
#         fill_color="green",
#         fill_alpha=0.3,
#         line_dash="dashed",
#         line_color="blue",
#         line_width=2,
#     )

#     # Save the plot as a PNG image in the resources folder
    
#     try:
#         export_png(p, filename=img_path)
#     except Exception as e:
#         print(
#             f"Failed to export PNG image: {e}. You may need to install additional dependencies (e.g., selenium)."
#         )

#     print(
#         f"Processed catchment {source_code}-{official_id} successfully."
#     )


# def process_static_catchment_page(
#     attrs_df: pd.DataFrame,
#     catchment_gdf: gpd.GeoDataFrame,
#     revision_date: str = None,
#     folder_path: str = None,
# ):
#     """Create a static markdown page for a catchment."""
#     official_id = attrs_df["Official_ID"].values[0]
#     source_code = attrs_df["Source"].values[0]
#     station_name = attrs_df["Name"].values[0]

#     # Use existing folder path if provided
#     if not folder_path:
#         base_folder = "catchment_polygon_revisions"
#         subfolder_name = f"{source_code}-{official_id}"
#         folder_path = os.path.join(base_folder, subfolder_name)

#     # Compute geometric properties for the polygon
#     # geom_props = get_geometric_properties(catchment_gdf)
#     # geom_table_md = geom_props.to_markdown(index=False)
#     # bbox_table_md = catchment_gdf.geometry.bounds.to_markdown(index=False)

#     # Convert hysets metadata row to markdown table (drop geometry if present)
#     if not attrs_df.empty:
#         if "geometry" in attrs_df.columns:
#             attrs_df = attrs_df.drop(columns=["geometry"])

#         attrs_table = attrs_df.T.copy()

#         attrs_table.columns = [f"(Arsenault, 2020)"]
#         attrs_table.index.name = "Attribute"

#         hysets_table_md = attrs_table.to_markdown()
#     else:
#         hysets_table_md = "No attribute data available."

#     # Determine the image path to display
#     img_path = os.path.join(folder_path, "resources", f"{official_id}_catchment.png")
#     if not os.path.exists(img_path):
#         create_catchment_image(catchment_gdf, img_path=img_path, source_code=source_code, official_id=official_id)

#     # Create README.md content
#     readme_content = [
#         "---", "hidden: true", "---",
#         f"# {source_code}-{official_id}",
#         f"**Latest revision:** {revision_date}",
#         "",
#         f"## {official_id}: {station_name}",
#     ]

#     # Add image if available
#     if img_path:
#         rel_img_path = os.path.join("resources", f"{official_id}_catchment.png")
#         readme_content.append(f"\n![Catchment Image]({rel_img_path})")
#     else:
#         readme_content.append("*No catchment image available*")

#     readme_content.extend(
#         [
#             "",
#             "### Catchment Attributes",
#             hysets_table_md,
#             "",
#             '### Notes\n 1. ',
#             '',
#             "### References",
#             "1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020.",
#         ]
#     )
    
#     # readme_content = (
#     #     f"# {source_code}-{official_id}\n**Revision Date:** {revision_date}\n"
#     # )
#     # readme_content += f"## {official_id}: {station_name}\n![Catchment Image](resources/{official_id}_catchment.png)\n"
#     # readme_content += f"### Geometric Properties\n{geom_table_md}\n ### Bounding Box\n{bbox_table_md}\n"
#     # readme_content += f"### Catchment Attributes\n {hysets_table_md}\n" 
#     # readme_content += 
#     # readme_content += f"### References\n1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020."

#     # Write the README.md file
#     readme_filepath = os.path.join(folder_path, f"{official_id}-README.md")
#     with open(readme_filepath, "w") as f:
#         f.write("\n".join(readme_content))

#     print(f"Updated README for {source_code}-{official_id}")


def generate_searchindex_js():
    static_dir = os.path.join(BASE_DIR, "_static")
    os.makedirs(static_dir, exist_ok=True)
    search_js_path = os.path.join(static_dir, "searchindex.js")
    
    # Structured data snippet (update URL and search URL as needed)
    structured_data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Catchment Polygon Revision Archive",
        "alternateName": "CPRA",
        "url": "https://your-domain.com",  # Update with your URL
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://your-domain.com/search.html?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }
    
    js_content = (
        "var structuredData = " + json.dumps(structured_data, indent=2) + ";\n\n"
        "const SDscript = document.createElement('script');\n"
        "SDscript.setAttribute('type', 'application/ld+json');\n"
        "SDscript.textContent = JSON.stringify(structuredData);\n"
        "document.head.appendChild(SDscript);\n\n"
        "function filterCatchments() {\n"
        "  const input = document.getElementById('catchmentSearch').value.toLowerCase();\n"
        "  const results = document.getElementById('searchResults');\n"
        "\n"
        "  // Clear previous results\n"
        "  results.innerHTML = '';\n"
        "\n"
        "  if (input.length < 2) return;\n"
        "\n"
        "  // Filter catchments\n"
        "  const matches = catchments.filter(c =>\n"
        "    c.id.toLowerCase().includes(input) ||\n"
        "    c.name.toLowerCase().includes(input) ||\n"
        "    c.source.toLowerCase().includes(input) ||\n"
        "    `${c.source}-${c.id}`.toLowerCase().includes(input)\n"
        "  );\n"
        "\n"
        "  // Display results (max 10)\n"
        "  const limitedMatches = matches.slice(0, 10);\n"
        "  limitedMatches.forEach(c => {\n"
        "    const div = document.createElement('div');\n"
        "    div.className = 'search-result';\n"
        "    div.innerHTML = `<a href='${c.folder}'>${c.source}-${c.id}: ${c.name}</a>`;\n"
        "    results.appendChild(div);\n"
        "  });\n"
        "\n"
        "  // Show message if too many results\n"
        "  if (matches.length > 10) {\n"
        "    const div = document.createElement('div');\n"
        "    div.className = 'search-more';\n"
        "    div.textContent = `... and ${matches.length - 10} more matches`;\n"
        "    results.appendChild(div);\n"
        "  }\n"
        "}\n"
    )
    
    with open(search_js_path, "w") as f:
        f.write(js_content)
    
    print(f"Generated search index JS at {search_js_path}")


def generate_search_css():
    static_dir = os.path.join(BASE_DIR, "_static")
    os.makedirs(static_dir, exist_ok=True)
    css_path = os.path.join(static_dir, "custom.css")
    
    css_content = """
    .search-container {
      margin: 20px 0;
    }
    #catchmentSearch {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .search-results {
      max-height: 300px;
      overflow-y: auto;
      border: 1px solid #ddd;
      border-top: none;
      display: block;
    }
    .search-result {
      padding: 10px;
      border-bottom: 1px solid #eee;
    }
    .search-result:hover {
      background-color: #f5f5f5;
    }
    .search-more {
      padding: 10px;
      text-align: center;
      color: #777;
      font-style: italic;
    }
    """
    
    with open(css_path, "w") as f:
        f.write(css_content.strip())
    
    print(f"Generated search CSS at {css_path}")

if __name__ == "__main__":
    update_catchment_pages()
    generate_searchindex_js()
    generate_search_css()
