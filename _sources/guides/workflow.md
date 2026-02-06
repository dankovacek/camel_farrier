# Quality Assurance and Diagnostic Pages

## When to Use This Guide

**Read this guide to:**
- Generate diagnostic pages after data initialization
- Understand page generation and plot rendering
- Build and deploy Jupyter Book documentation
- Learn validation rules and quality checks

**Prerequisites:**
- Complete [Environment Setup](setup.md)
- Complete [Data Population](data_population.md)

**Reference as Needed:**
- [Data Specification](data_specification.md) — CSV schemas and JSON metadata formats

## Purpose and Scope

**Purpose:** Generate diagnostic pages and understand quality assurance for station data.

**Scope:** Page templating, validation rules, plot generation, Jupyter Book building.

**Not covered here:** Environment setup (see [Environment Setup](setup.md)) or data initialization (see [Data Population](data_population.md)).

## Overview

This framework automates quality assurance and documentation generation for hydrometric monitoring station data.

## Process Flow

1. **Station Data Input** — Data organized in `demo_data/stations/{STATION_ID}/`
2. **Validation** — Automated checks for data completeness and quality
3. **Page Generation** — Jinja2 templates populate with station-specific data
4. **Plot Generation** — Bokeh plots created at build time via MyST directives
5. **Book Build** — Jupyter Book compiles diagnostic pages to static HTML

## Quick Start

### Generate Diagnostic Pages

After initializing demo stations (see [Data Population](data_population.md)), generate markdown pages:

```bash
python scripts/demo_setup/process_station_pages.py
```

This creates markdown files for each station in `book_docs/station_pages/stations/`.

### Build Documentation

```bash
cd book_docs/
jupyter book build .
```

View results:

```bash
open _build/html/index.html
```

## Data Structure

Input data organized as:

```
book_docs/stations/{STATION_ID}/
├── _metadata.json          # Station metadata from HYDAT
├── _qc_status.json         # Quality control validation results
├── _versions.json          # Polygon version history with comparison metrics
├── _comparison_stats.json  # Polygon comparison statistics (Jaccard, area diffs)
├── _data_sources.json      # Data provenance tracking
├── {STATION_ID}_corrections.csv      # Level/discharge corrections
├── {STATION_ID}_field_visits.csv     # Field measurement records
├── {STATION_ID}_RCs.csv              # Rating curve data
├── {STATION_ID}_daily_flows.csv      # Daily discharge timeseries
├── {STATION_ID}_daily_levels.csv     # Daily water level timeseries
├── {STATION_ID}_annual_instant_peaks.csv  # Annual maximum flow events
└── {STATION_ID}_polygon_v*.geojson   # Catchment polygons (versioned)
```

## Page Generation

`scripts/demo_setup/process_station_pages.py` generates Markdown diagnostic pages with:

- **Station Metadata Table** — Coordinates, drainage area, source, retrieval date
- **Version History** — Polygon version provenance with comparison metrics (Jaccard index, area diffs)
- **Data Quality Status** — QC validation check results from `_qc_status.json`
- **Stub Sections** — Placeholders for remarks, datum, data ranges, auxiliary data

Each station gets its own Markdown page rendered from `book_docs/templates/station_page_template.md.j2`.

### Regenerating Pages After Data Updates

After integrating new polygon versions or updating station data:

```bash
# Regenerate diagnostic pages
python scripts/demo_setup/process_station_pages.py

# Rebuild documentation
cd book_docs/
jupyter book build .
```

For polygon integration details, see [Data Population](data_population.md).

## Plot Generation

Interactive visualizations are created using functions in `scripts/catchment_page_utils.py`:

- **Catchment Boundary Map** — Interactive polygon visualization with basemap tiles
- **Polygon Comparison Visualization** — When 2+ versions exist, shows spatial differences:
  - **Light green**: Agreement (intersection of old and new polygons)
  - **Red**: Old area NOT in new (false positive - incorrectly included in old version)
  - **Purple**: New area NOT in old (false negative - missed in old version)
  - Semantic logic: Latest version is ground truth
- **Data Availability Chart** — Timeline of available hydrometric records

Plots execute at build time using MyST `bokeh-plot` directives, enabling conditional rendering based on data availability.

The comparison visualization automatically activates when multiple polygon versions are detected for a station.

## Validation Rules

Automated checks include:

- **Data Completeness** — Required CSV/JSON files present
- **CSV Format** — Valid column structure and data types
- **Discharge Values** — No negative streamflow (≥0)
- **Timestamps** — Valid ISO 8601 format and timezone info
- **Polygon Geometry** — Valid GeoJSON with no self-intersections
- **Metadata Quality** — Required fields populated

## Output Features

Generated diagnostic pages include:

- Interactive maps showing catchment boundaries
- Downloadable data tables (CSV format)
- Version history with commit references
- Metadata with JSON export capability
- Automated placeholders for missing data

## Workflow Integration

Complete data workflow:

```bash
# 1. Set up environment (one-time)
export COMMON_DATA_DIR=/path/to/data
pip install -r book_docs/requirements.txt

# 2. Initialize station data (one-time)
python scripts/demo_setup/populate_demo_data.py

# 3. Integrate polygon versions (when new HYDAT data available)
python scripts/demo_setup/integrate_hydat_polygons.py

# 4. Generate diagnostic pages
python scripts/demo_setup/process_station_pages.py

# 5. Build and view documentation
cd book_docs/
jupyter book build .
open _build/html/index.html
```

**Performance Note:** `integrate_hydat_polygons.py` caches extracted station polygons to `.cache/polygons/{region}/{station_id}.geojson` to avoid re-reading large regional GeoJSON files on subsequent runs. Use `--clear-cache` to force fresh extraction or `--no-cache` to disable caching.

See [Data Population](data_population.md) for detailed initialization and polygon integration workflows.

## Deployment

Deploy to GitHub Pages:

```bash
ghp-import -n -p -f book_docs/_build/html
```

## Notes

- See [Data Population](data_population.md) for initialization workflow
- See [Data Specification](data_specification.md) for CSV schemas
- See [Setup Guide](setup.md) for environment configuration
