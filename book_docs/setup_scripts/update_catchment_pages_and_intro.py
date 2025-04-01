import os
import json


from introduction_page_utils import create_intro
from catchment_page_utils import process_static_catchment_page_html

# PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
# BOOK_ROOT = os.path.join(PROJECT_ROOT, 'book_docs')
PROJECT_ROOT = '../'
BOOK_ROOT = 'book_docs'

#!/usr/bin/env python3
"""
Generate markdown pages for catchment polygon revisions.

This script creates individual markdown files for each catchment folder
and a main index page with a search bar for easy navigation.

Specify --mode flag to choose between 'dev' and 'prod' modes.
In 'prod' mode, the url for inserting the iframe includes 'camel_farrier' 
to work with the Jupyter book build process.  Running in dev mode allows 
you to test locally without the Jupyter book build process.
Usage:
    (production): python generate_catchment_pages.py --mode prod
    (development/testing): python generate_catchment_pages.py --mode dev
Testing: `python3 -m http.server --directory ../build/html 8000`
Production (to github pages): `ghp-import -n -p -f _build/html`

"""


def update_catchment_pages():
    """Update or create README.md files for each catchment folder."""
    # catchment_data = scan_catchment_folders()
    # Process each catchment folder
    catchment_data_folder = '../book_docs/catchments' #os.path.join(BOOK_ROOT, "catchments")
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
        
        dam_data_path = os.path.join(catchment_data_folder, folder, f"{official_id}_dam_data.geojson")
        if not os.path.exists(dam_data_path):
            dam_data_path = None

        data = process_static_catchment_page_html(
            attributes_path,
            geojson_path,
            official_id,
            catchment_data_folder=catchment_data_folder,
            book_root_path=BOOK_ROOT,
            dam_data_path=dam_data_path,
        )
        catchment_data[official_id] = data
    return catchment_data


def generate_searchindex_js():
    static_dir = '_static/'#os.path.join(BOOK_ROOT, "_static")
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
    static_dir = os.path.join(BOOK_ROOT, "_static")
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
    # base_intro_path = os.path.join(BOOK_ROOT, 'templates/intro_content.md')
    base_intro_path = 'templates/intro_content.md'
    create_intro(catchment_data, base_intro_path)
    print(f"Processed {len(catchment_data)} catchment folders")
    generate_searchindex_js()
    generate_search_css()
