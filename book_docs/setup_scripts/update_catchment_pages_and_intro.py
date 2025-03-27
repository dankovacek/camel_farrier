import os
import re
import json

from introduction_page_utils import create_intro
from catchment_page_utils import process_static_catchment_page_html


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
    base_folder = "catchments"
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


def update_catchment_pages():
    """Update or create README.md files for each catchment folder."""
    # catchment_data = scan_catchment_folders()
    # Process each catchment folder
    catchment_data_folder = os.path.join(BASE_DIR, "catchments")
    # static_html_folder = os.path.join(BASE_DIR, '_static', 'catchments')
    catchment_data = {}
    for folder in os.listdir(catchment_data_folder):
        source_code, official_id = folder.split("-")
        # Find the geojson file
        geojson_path = os.path.join(catchment_data_folder, folder, f"{official_id}.geojson")
        attributes_path = os.path.join(catchment_data_folder, folder, f"{official_id}_attributes.csv")
        if not os.path.isfile(geojson_path) or not os.path.isfile(attributes_path):
            print(f"GeoJSON file or attributes not found for {official_id}")
            raise FileNotFoundError

        data = process_static_catchment_page_html(
            attributes_path,
            geojson_path,
            catchment_data_folder=catchment_data_folder,
            # static_html_folder=static_html_folder,
        )
        catchment_data[official_id] = data
    return catchment_data


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
    catchment_data = update_catchment_pages()
    # generate the introduction page
    base_intro_path = 'templates/intro_content.md'
    create_intro(catchment_data, base_intro_path)
    print(f"Processed {len(catchment_data)} catchment folders")
    generate_searchindex_js()
    generate_search_css()
