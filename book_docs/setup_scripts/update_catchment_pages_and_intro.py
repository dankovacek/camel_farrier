import os, sys
import json
from pathlib import Path
from jinja2 import Template

project_root = Path(__file__).resolve().parents[1]  # Adjust as needed
if str(project_root) not in sys.path:
    sys.path.insert(0, str(project_root))

from book_docs.setup_scripts.catchment_page_utils import (
    process_static_catchment_page_html,
)

# Get the folder this script is in
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

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


def update_catchment_pages(site_url_prefix: str = ""):
    """Update or create README.md files for each catchment folder."""
    # catchment_data = scan_catchment_folders()
    # Process each catchment folder
    catchment_data_folder = BASE_DIR / ".." / "catchments"

    catchment_data = {}
    for folder_name in os.listdir(catchment_data_folder):
        source_code, official_id = folder_name.split("-")
        # Find the geojson file
        folder = BASE_DIR / ".." / "catchments" / folder_name
        catchment_path = folder / f"{official_id}_catchment.geojson"
        attributes_path = folder / f"{official_id}_attributes.csv"
        dam_data_path = folder / f"{official_id}_dam_data.geojson"

        if not os.path.isfile(catchment_path) or not os.path.isfile(attributes_path):
            print(f"GeoJSON file or attributes not found for {official_id}")
            raise FileNotFoundError

        if not os.path.exists(dam_data_path):
            dam_data_path = None

        data = process_static_catchment_page_html(
            folder_name,
            site_url_prefix=site_url_prefix,
        )
        catchment_data[official_id] = data
    return catchment_data


def generate_searchindex_js():
    static_dir = BASE_DIR / ".." / "_static/"
    os.makedirs(static_dir, exist_ok=True)
    search_js_path = static_dir / "searchindex.js"

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
                "urlTemplate": "https://your-domain.com/search.html?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
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
        "    `${c.id}`.toLowerCase().includes(input)\n"
        "  );\n"
        "\n"
        "  // Display results (max 10)\n"
        "  const limitedMatches = matches.slice(0, 10);\n"
        "  limitedMatches.forEach(c => {\n"
        "    const div = document.createElement('div');\n"
        "    div.className = 'search-result';\n"
        "    div.innerHTML = `<a href='${c.folder}'>${c.id}: ${c.name}</a>`;\n"
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
    static_dir = BASE_DIR / ".." / "_static/"
    os.makedirs(static_dir, exist_ok=True)
    css_path = static_dir / "custom.css"

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


def update_summary_page_markdown(
    similarity_summary_table, revision_notes_table, plot_src, site_url_prefix=""
):
    # This function is a placeholder for any additional summary page updates
    # HTML template
    template_path = BASE_DIR / ".." / "templates" / "summary_template.md.j2"
    with open(template_path, "r") as f:
        md_template = Template(f.read())

    rendered_md = md_template.render(
        change_summary_table=similarity_summary_table,
        revision_notes_table=revision_notes_table,
        iframe_src=plot_src,
    )

    # Save markdown
    md_path = BASE_DIR / ".." / "revision_summary.md"
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(rendered_md)
