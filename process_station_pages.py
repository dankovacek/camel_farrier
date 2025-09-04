# INGEST HYDAT DATASET
import os
from pathlib import Path
import pandas as pd
from jinja2 import Environment, FileSystemLoader, select_autoescape

BASE_DIR = Path(__file__).resolve().parent
BOOK_DIR = BASE_DIR / "book_docs"
STATION_DATA_DIR = BOOK_DIR / "stations"

TEMPLATES = BOOK_DIR / "templates"
PAGES_OUT = BOOK_DIR / "station_pages"

processed_stations = os.listdir(STATION_DATA_DIR)

env = Environment(
    loader=FileSystemLoader(str(TEMPLATES)),
    autoescape=False,  # we are emitting Markdown
    keep_trailing_newline=True,
)

# import the station page template
tpl = env.get_template("station_page_template.md.j2")


def generate_station_data_table(df, cols=None, transpose=False):
    if df is None or df.empty:
        return "<p><em>No data available.</em></p>"

    if cols is not None:
        df = df[cols]

    if transpose:
        # Transpose and convert to 2-column structure
        df_t = df.T
        rows = []
        for label, value in zip(df_t.index, df_t.iloc[:, 0]):
            rows.append(f"<tr><td><strong>{label}</strong></td><td>{value}</td></tr>")
        html = '<table class="dataframe table">\n' + "\n".join(rows) + "\n</table>"
        return html
    # otherwise return markdown
    return df.to_markdown(index=False)


info_types = {
    "annual_peaks": "annual_instant_peaks.csv",
    "attributes": "attributes.csv",
    "auxiliary_data": "auxiliary_data.csv",
    "daily_flows": "daily_flows.csv",
    "data_ranges": "data_ranges.csv",
    "datum": "datum_data.csv",
    "remarks": "remarks.csv",
    # there will be a water licenses file in some cases...
}

js_search_data = []
for stn in processed_stations:
    out_path = PAGES_OUT / "stations" / f"{stn}.md"

    df = pd.read_csv(STATION_DATA_DIR / stn / f"{stn}_attributes.csv")
    data_ranges = pd.read_csv(STATION_DATA_DIR / stn / f"{stn}_data_ranges.csv")
    datum_df = pd.DataFrame()
    datum_fpath = STATION_DATA_DIR / stn / f"{stn}_datum_data.csv"
    remarks_df = pd.read_csv(STATION_DATA_DIR / stn / f"{stn}_remarks.csv")
    aux_df = pd.read_csv(STATION_DATA_DIR / stn / f"{stn}_auxiliary_data.csv")
    # check if the file is empty
    if os.path.exists(datum_fpath) and os.path.getsize(datum_fpath) > 10:
        print(f"{stn}_datum_data.csv")
        datum_df = pd.read_csv(datum_fpath)

    data = df.to_dict(orient="index")[0]
    name = data["STATION_NAME"]
    js_search_data.append((stn, name))
    context = {
        "stn": data,
        "official_id": data["STATION_NUMBER"],
        "station_data_table": generate_station_data_table(df, transpose=True),
        "datum_table": generate_station_data_table(datum_df),
        "data_ranges_table": generate_station_data_table(
            data_ranges,
            cols=["YEAR_FROM", "YEAR_TO", "RECORD_LENGTH", "DATA_TYPE"],
            transpose=True,
        ),
        "auxiliary_data_table": generate_station_data_table(
            aux_df,
            cols=["REGIONAL_OFFICE_ID", "REGIONAL_OFFICE_NAME_EN"],
            transpose=True,
        ),
        "remarks_table": generate_station_data_table(remarks_df, transpose=True),
        # "water_license_table": df_md(water_lic),
    }
    md = tpl.render(**context)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(md, encoding="utf-8")


def generate_js_search(station_ids):
    lines = ["", "<script>", "// Station data for search", "const stations = ["]
    for stn, name in station_ids:
        folder = f"/station_pages/stations/{stn}.html"
        lines.append(f'  {{id: "{stn}", name: "{name}", folder: "{folder}"}},')
    lines.append("];</script>")
    return lines


js_search_lines = generate_js_search(js_search_data)

# Define the content to append after the search results heading
search_content = """
<div class="search-container">
    <input type="text" id="stationSearch" placeholder="Search by Official ID, name, or source..." onkeyup="filterStations()">
    <div id="searchResults" class="search-results"></div>
</div>
"""


def update_markdown_with_search(file_path, heading_pattern, end_heading_pattern=None):
    """
    Update a markdown file with station search functionality

    Args:
        file_path: Path to the markdown file
        heading_pattern: Pattern to find where to insert search content
        end_heading_pattern: Optional pattern to mark the end of the section
    """
    if file_path.exists():
        # Read the existing content
        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()

        # Find section boundaries
        start_index = -1
        end_index = -1

        for i, line in enumerate(lines):
            if heading_pattern in line:
                start_index = i
            if end_heading_pattern and end_heading_pattern in line:
                end_index = i
                break

        if start_index != -1:
            # If we have both start and end patterns
            if end_heading_pattern and end_index != -1:
                content = "".join(lines[: start_index + 1]) + "\n"
                content += search_content + "\n" + "\n".join(js_search_lines) + "\n\n"
                content += "".join(lines[end_index:])
            else:
                # Just have start pattern
                content = "".join(lines[: start_index + 1]) + "\n"
                content += search_content + "\n" + "\n".join(js_search_lines)
        else:
            # If section not found, keep everything and add the heading
            content = "".join(lines) + f"\n{heading_pattern}\n"
            content += search_content + "\n" + "\n".join(js_search_lines)
    else:
        # Create a new file if it doesn't exist
        content = f"# Station Pages\n\n{heading_pattern}\n"
        content += search_content + "\n" + "\n".join(js_search_lines)

    # Write the updated content
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Updated {file_path.name} with {len(js_search_data)} stations")


# Update index.md
update_markdown_with_search(BOOK_DIR / "index.md", "## Search Results")

# Update intro.md
update_markdown_with_search(
    BOOK_DIR / "intro.md", "## Search Hydrometric Stations", "## References"
)
