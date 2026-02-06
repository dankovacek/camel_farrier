# Data Population and Initialization

## When to Use This Guide

**Read this guide to:**
- Initialize demo stations for the first time
- Integrate new HYDAT polygon versions
- Understand version tracking and comparison metrics
- Learn the metadata-only git philosophy

**Prerequisites:**
- Complete [Environment Setup](setup.md) first
- Download required datasets (see <a href="https://github.com/dankovacek/camel_farrier/blob/main/demo_data/DATA_SOURCES.md" target="_blank">DATA_SOURCES.md</a>)

**After Completion:**
- Proceed to [Workflow Documentation](workflow.md) to generate diagnostic pages
- Consult [Data Specification](data_specification.md) for schema reference as needed

## Purpose and Scope

**Purpose:** Initialize the demonstration repository with hydrometric station data and integrate catchment polygon versions.

**Scope:** Running initialization scripts, polygon version management, understanding data structure and git tracking strategy.

**Not covered here:** Building diagnostic pages (see [Workflow Documentation](workflow.md)) or schema details (see [Data Specification](data_specification.md)).

## Quick Start

```bash
# Extract and populate all demo stations
python scripts/demo_setup/populate_demo_data.py

# Build diagnostic pages
python scripts/demo_setup/process_station_pages.py

# View results
cd book_docs/
jupyter book build .
open _build/html/index.html
```

## Scripts Architecture

The demo initialization workflow uses modular, reusable scripts organized into layers:

### Configuration Layer (`scripts/config/`)

- **`paths.py`** — Centralized path resolution
  - Single source of truth for all file paths (stations, templates, static files)
  - Prevents scattered hardcoded paths throughout the codebase
  - Ensures all scripts reference the same directories

### Utilities Layer (`scripts/utils/`)

- **`bokeh.py`** — Bokeh visualization utilities
  - `render_html_from_plot()` — Convert Bokeh plots to standalone HTML

- **`geometry.py`** — Geospatial operations
  - `create_local_crs()` — Project polygons to local coordinate systems
  - `compute_jaccard_similarity()` — Compare polygon versions
  - `get_geometric_properties()` — Calculate area and perimeter

- **`markdown.py`** — Template rendering and table generation
  - `load_template()` / `render_template()` — Jinja2 template operations
  - `jaccard_matrix_to_markdown()` — Convert similarity matrices to tables

- **`data_loaders.py`** — Unified data loading with caching
  - `load_reference_table()` — Load HYDAT codes with caching
  - `load_station_metadata()` — Read JSON metadata files
  - `load_csv_with_dates()` — Parse CSV data with date columns

### Generation Layer (`scripts/generation/`)

- **`page_generator.py`** — Unified page generation
  - `generate_station_page()` — Create complete station diagnostic page
  - `render_page_from_template()` — Render Jinja2 templates and write to disk
  - `generate_metadata_table_html()` — Convert metadata dicts to HTML tables

### Demo Setup Workflow (`scripts/demo_setup/`)

- **`populate_demo_data.py`** — Initialize station data
  - Loads demo station IDs from `demo_data/DEMO_STATIONS.txt`
  - Extracts Water Office export (corrections, field visits, rating curves)
  - Queries HYDAT for metadata
  - Extracts catchment polygons from WSC basins
  - Generates JSON provenance files

- **`process_station_pages.py`** — Generate diagnostic pages
  - Reads station metadata and QC status JSON files
  - Renders Markdown pages using `scripts/generation/page_generator.py`
  - Outputs to `book_docs/station_pages/stations/`

### Design Benefits

**Single Source of Truth:** Path changes only require editing `scripts/config/paths.py`

**Reusability:** Utilities layer enables multiple workflows (demo setup, future changelog analysis) without duplication

**Testability:** Each layer can be tested independently

**Maintainability:** Clear separation of concerns makes changes easier to implement safely

## Quick Start

```bash
# Extract and populate all demo stations
python scripts/demo_setup/populate_demo_data.py

# Build diagnostic pages
cd book_docs/
jupyter book build .
```

Station data structure:

```
book_docs/stations/
└── {STATION_ID}/
    ├── _metadata.json                 # Station metadata from HYDAT
    ├── _versions.json                 # Polygon version history (graph structure)
    ├── _comparison_stats.json         # Pre-computed comparison metrics
    ├── _qc_status.json                # Quality control status
    ├── _data_sources.json             # Data source attribution
    ├── {STATION_ID}_corrections.csv   # Data corrections (tracked in git)
    ├── {STATION_ID}_field_visits.csv  # Field visit records (tracked in git)
    ├── {STATION_ID}_RCs.csv           # Rating curves (tracked in git)
    ├── {STATION_ID}_daily_flows.csv   # Daily flow timeseries (local only)
    ├── {STATION_ID}_daily_levels.csv  # Daily level timeseries (local only)
    ├── {STATION_ID}_annual_peaks.csv  # Annual peak flows (local only)
    └── {STATION_ID}_polygon_v*.geojson # Catchment polygons (local files only)
```

## Step-by-Step Initialization

### Step 1: Verify Data Files

Confirm the Water Office export is available:

```bash
ls -lh data/WaterOffice_RC_Export_20260203.zip
```

Expected archive contains:
- `corrections/` — Data corrections for each station
- `field_visits/` — Field measurement records for each station
- `rating_curves/` — Stage-discharge relationships for each station

### Step 2: Run Initialization Script

```bash
python scripts/demo_setup/populate_demo_data.py
```

This script:
1. Loads a set of demonstration station IDs from `demo_data/DEMO_STATIONS.txt`
2. Extracts the Water Office export
3. For each station:
   - Copies corrections, field_visits, and rating_curves CSVs
   - Queries HYDAT for station metadata
   - Extracts catchment polygon from WSC basins 2021-12
   - Generates JSON metadata files (_metadata.json, _versions.json, _data_sources.json)
4. Organizes files into `demo_data/stations/{STATION_ID}/`

Expected output:

```
INFO - Extracted 10 stations from WaterOffice export
INFO - 07DB005: ✓ Corrections (24 records), Field visits (156 records), Rating curves (3 curves)
INFO - 08NM134: ✓ Corrections (31 records), Field visits (203 records), Rating curves (4 curves)
INFO - ...
INFO - Summary: 10/10 stations initialized with hydrometric data
```

### Step 3: Verify Station Structure

Inspect one initialized station:

```bash
tree demo_data/stations/07DB005/
```

Expected files:

```
demo_data/stations/07DB005/
├── _metadata.json                    # ✓ In git
├── _qc_status.json                   # ✓ In git
├── _versions.json                    # ✓ In git
├── _data_sources.json                # ✓ In git
├── 07DB005_corrections.csv           # ✓ In git
├── 07DB005_field_visits.csv          # ✓ In git
├── 07DB005_RCs.csv                   # ✓ In git
└── 07DB005_polygon_v1.0.0.geojson    # ✗ Local only (git ignored)
```

### Step 4: Review Provenance Metadata

Inspect data source attribution:

```bash
cat demo_data/stations/07DB005/_data_sources.json | python -m json.tool
```

Sample output:

```json
{
  "station_id": "07DB005",
  "data_sources": [
    {
      "data_type": "corrections",
      "source": "WaterOffice_RC_Export",
      "source_version": "20260203",
      "extraction_date": "2026-02-03",
      "file_path": "07DB005_corrections.csv"
    }
  ]
}
```

## Data Specifications

For complete schema documentation including all columns, data types, and validation rules, see [Data Specification](data_specification.md).

For data provenance, download locations, and citation information, see <a href="https://github.com/dankovacek/camel_farrier/blob/main/demo_data/DATA_SOURCES.md" target="_blank">DATA_SOURCES.md</a>.

## Git Tracking Philosophy

**Metadata-only approach:**

- ✓ **Tracked in git**: CSV files (corrections, field_visits, RCs), JSON metadata
- ✗ **Not tracked**: Polygon GeoJSON files (large geospatial data)

**Rationale:**

- **Data Integrity**: Polygons come unmodified from source (WSC basins 2021-12)
- **Repository Size**: Keeps git history lightweight
- **Provenance**: Metadata tracks exactly where each data type came from
- **Production Pattern**: Large files stored externally; metadata in git

## Demo Stations

10 stations selected for demonstration:

```
01FA001  # Newfoundland
02HC038  # Maritime/Atlantic
03OD007  # Quebec
05LL013  # British Columbia
05MA022  # Saskatchewan
05NG027  # Saskatchewan
05QA002  # British Columbia
07DB005  # Alberta
07GH004  # Alberta
08NM134  # Saskatchewan
```

All stations have complete hydrometric records (corrections, field visits, rating curves).

## Troubleshooting

### "WaterOffice export not found"

```bash
# Check file exists
ls data/WaterOffice_RC_Export_20260203.zip

# If missing, download from Zenodo using DOI (when available)
```

### "HYDAT database not found"

The script will create placeholder metadata if HYDAT is unavailable. Complete the [Setup Guide](setup.md) to configure HYDAT access.

### "Import error: supporting_figure_functions"

Ensure you're running from the repository root:

```bash
cd /path/to/camel_farrier
python scripts/demo_setup/populate_demo_data.py
```

## Integrating HYDAT Catchment Polygons

After initial population, you can integrate alternative catchment polygons from HYDAT's drainage basin dataset to create versioned polygon histories.

### Prerequisites

Download and extract HYDAT drainage basins from the [Hydrometric Network Basin Polygons](https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/HydrometricNetworkBasinPolygons/) portal.

**Available Formats:**
- `geojson/` — GeoJSON format (recommended)
- `gpkg/` — GeoPackage format
- `shp/` — Shapefile format
- `gdb/` — File Geodatabase format

All formats contain the same data separated by drainage region. The unzip procedure is identical regardless of format.

```bash
# Download GeoJSON format (requires COMMON_DATA_DIR configured)
cd $COMMON_DATA_DIR/HYDAT/
mkdir -p polygons

# Download regional files (example: regions 07, 08, 09)
wget https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/HydrometricNetworkBasinPolygons/geojson/MDA_ADP_07.zip
wget https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/HydrometricNetworkBasinPolygons/geojson/MDA_ADP_08.zip
wget https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/HydrometricNetworkBasinPolygons/geojson/MDA_ADP_09.zip

# Extract to polygons directory
unzip MDA_ADP_07.zip -d polygons/
unzip MDA_ADP_08.zip -d polygons/
unzip MDA_ADP_09.zip -d polygons/
```

Expected directory structure:

```
$COMMON_DATA_DIR/HYDAT/polygons/
├── MDA_ADP_07/
│   └── MDA_ADP_07_DrainageBasin_BassinDeDrainage.geojson
├── MDA_ADP_08/
│   └── MDA_ADP_08_DrainageBasin_BassinDeDrainage.geojson
└── MDA_ADP_09/
    └── MDA_ADP_09_DrainageBasin_BassinDeDrainage.geojson
```

### Integration Workflow

```bash
# Dry-run mode: preview changes without writing files
python scripts/demo_setup/integrate_hydat_polygons.py --dry-run

# Integrate all stations (uses DEMO_STATIONS.txt)
python scripts/demo_setup/integrate_hydat_polygons.py

# Integrate specific stations
echo -e "07DB005\n08NM134" > /tmp/my_stations.txt
python scripts/demo_setup/integrate_hydat_polygons.py --stations-file /tmp/my_stations.txt
```

### What It Does

For each station:
1. **Find HYDAT Polygon**: Searches all `MDA_ADP_XX/` directories for matching StationNum
2. **Compare Geometries**: Computes Jaccard similarity index and area differences using equal-area projection
3. **Determine Version**: Keyword detection for major vs minor increment:
   - Minor (v1.x.0 → v1.x+1.0): "preliminary", "draft", "interim"
   - Major (v1.x.0 → v2.0.0): "final", "reviewed", "approved"
4. **Extract Polygon**: Transform to EPSG:3857, save as `{STATION_ID}_polygon_vX.Y.Z.geojson`
5. **Update Metadata**: Add version entry and comparison metrics to `_versions.json`

Example output:

```
INFO - 07DB005: Found HYDAT polygon (Version: June 2024)
INFO -   Current: v1.0.0 (WSC_basins)
INFO -   ✓ v1.0.0 → v1.1.0 (minor)
INFO -     Jaccard: 0.9945, Area diff: 0.5%
INFO - 08NM134: Found HYDAT polygon (Version: June 2024)
INFO -   Current: v1.0.0 (WSC_basins)
INFO -   ✓ v1.0.0 → v1.1.0 (minor)
INFO -     Jaccard: 0.9987, Area diff: -0.1%
INFO - SUMMARY
INFO - SUCCESS: 2
```

### Version Graph Structure

The `_versions.json` file uses a graph-based structure allowing any-to-any version comparisons:

```json
{
  "station_id": "07DB005",
  "current_version": "v1.1.0",
  "versions": [
    {
      "semantic_tag": "v1.0.0",
      "timestamp": "2026-02-05T03:19:25.266031",
      "data_source": "WSC_basins",
      "polygon_file": "07DB005_polygon_v1.0.0.geojson"
    },
    {
      "semantic_tag": "v1.1.0",
      "timestamp": "2026-02-05T04:11:56.142026",
      "data_source": "HYDAT_polygons",
      "polygon_file": "07DB005_polygon_v1.1.0.geojson"
    }
  ],
  "comparisons": {
    "v1.0.0_vs_v1.1.0": {
      "computed_at": "2026-02-05T04:11:56.142190",
      "jaccard_index": 0.9945,
      "old_area_km2": 1823.45,
      "new_area_km2": 1833.12,
      "absolute_area_diff_km2": 9.67,
      "percent_area_diff": 0.5
    }
  }
}
```

**Design Benefits:**
- **Temporal Tracking**: Each version has timestamp, can track polygon evolution
- **Graph Structure**: `comparisons` dict allows comparing any version pair (not just sequential)
- **Pre-computed Metrics**: Store comparison statistics once, avoid recomputing on every book build
- **Future Analysis**: Can generate version comparison matrices using `_comparison_stats.json`

### Comparison Metrics

**Jaccard Similarity Index (JSI)**: Measures overlap between polygons
- JSI = Area(intersection) / Area(union)
- Range: 0 (no overlap) to 1 (identical)
- Values > 0.95 indicate high similarity

**Area Difference**: Absolute and percentage changes
- Percent diff = ((new_area - old_area) / old_area) × 100
- Positive: new polygon larger
- Negative: new polygon smaller

**Equal-Area Projection**: Uses Lambert Azimuthal Equal Area (LAEA) centered at polygon centroid for accurate area calculations

### Full Rebuild Workflow

To clean legacy data and rebuild with latest polygons:

```bash
# 1. Clean existing station data
rm -rf book_docs/stations/*

# 2. Repopulate from scratch (creates v1.0.0 from WSC_basins)
python scripts/demo_setup/populate_demo_data.py

# 3. Integrate HYDAT polygons (creates v1.1.0 or higher)
python scripts/demo_setup/integrate_hydat_polygons.py

# 4. Regenerate diagnostic pages
python scripts/demo_setup/process_station_pages.py

# 5. Build documentation
cd book_docs/
jupyter book build .
```

## Next Steps

- [Data Specification](data_specification.md) — Understand CSV schemas
- [Quality Assurance and Diagnostic Pages](workflow.md) — Generate station pages and validate data
- Back to [Environment Setup](setup.md) if dependencies missing

## Metadata-Only Git Tracking Philosophy

**Key Principle:** Git tracks metadata about geospatial files, not the files themselves.

```
demo_data/stations/07DB005/
├── _versions.json          ✓ Tracked in git (metadata)
├── _metadata.json          ✓ Tracked in git (station info)
├── _qc_status.json         ✓ Tracked in git (QC state)
├── 07DB005_RCs.csv         ✓ Tracked in git (small tabular data)
├── 07DB005_corrections.csv ✓ Tracked in git (small tabular data)
└── 07DB005_polygon_v1.0.0.geojson  ✗ NOT tracked (large file, local only)
```

**Why this approach?**

- **Data Integrity:** Preserves exact provenance - polygons come unmodified from source
- **Repository Size:** Keeps git history lightweight and fast to clone
- **Production Pattern:** Demonstrates real-world workflow where large geospatial files live in external storage
- **Collaboration:** PRs show clear metadata diffs without polluting history with large binary-like files

## Design Notes

### Why Separate Metadata from Polygons?

**Data provenance is sacred:**
- If we modify geometry, we can't claim it came from "WSC basins 2021-12"
- Can't verify integrity with checksums
- Creates ambiguity in version tracking
- Undermines trust in the data system

Instead, we accept that polygons are large files and keep them out of git entirely.

### Why Not All Stations Have Polygons?

This is accurate to real-world datasets:
- **Incomplete coverage:** 2021-12 WSC basins doesn't have all stations
- **Progressive completion:** Later PRs can add missing polygons
- **Update motivation:** Clear value in updating to newer releases

### Production Deployment

For real hydrological data management:

1. **External Storage:** Store polygons in S3/cloud/institutional storage
2. **URL Tracking:** Record URLs in `_versions.json`
3. **Hash Verification:** Include SHA256 hashes for integrity checks
4. **Access Control:** Manage permissions at storage layer
5. **CDN Delivery:** Serve polygons via fast content delivery network

The demo pattern (local files + metadata in git) scales directly to production by adding storage URLs to the metadata schema.

## References

```{bibliography}
:style: unsrt
```
