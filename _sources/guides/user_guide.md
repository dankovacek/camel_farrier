# Getting Started

This guide walks you through setting up and using the Camel Farrier repository to work with hydrometric station data and catchment polygons to automatically generate interactive documentation.

:::{margin}
**For data schema reference,** see [Data Specification](data_specification.md).

**For dataset provenance and citations,** see [Data Sources](DATA_SOURCES.md).
:::

This guide covers environment configuration and dependencies, data initialization workflow, polygon version integration, diagnostic page generation and validation, and documentation building and deployment.

## Environment Setup

### Clone Repository and Install Dependencies

```bash
git clone https://github.com/dankovacek/camel_farrier.git
cd camel_farrier
pip install -r book_docs/requirements.txt
```

### Configure External Data Path

External geospatial datasets (HYDAT database, WSC basins) are accessed via the `COMMON_DATA_DIR` environment variable.

:::{margin}
**Default:** `~/data/hydrometric/` (if not set)
:::

```bash
export COMMON_DATA_DIR=/path/to/your/geospatial/data

# Persist in shell profile
echo 'export COMMON_DATA_DIR=/path/to/your/geospatial/data' >> ~/.bashrc
source ~/.bashrc
```

### Download Required Datasets

See [Data Sources](DATA_SOURCES.md) for download links and provenance. Required datasets include HYDAT database (Canadian hydrometric SQLite), WSC catchment polygons (Water Survey basin boundaries), and optionally HYDAT drainage basins for polygon version comparisons.

Expected directory structure:

```
$COMMON_DATA_DIR/
└── HYDAT/
    ├── Hydat.sqlite3
    ├── WSC_basin_polygons/
    └── polygons/              # Optional: For HYDAT polygon integration
        ├── MDA_ADP_07/
        ├── MDA_ADP_08/
        └── MDA_ADP_09/
```

### Verify Setup

```bash
python -c "
from scripts.config.paths import HYDAT_DB_PATH, COMMON_DATA_DIR
print(f'COMMON_DATA_DIR: {COMMON_DATA_DIR}')
print(f'HYDAT path: {HYDAT_DB_PATH}')
print(f'HYDAT exists: {HYDAT_DB_PATH.exists()}')
"
```

**Expected output:**
```
COMMON_DATA_DIR: /your/path/to/common_data
HYDAT path: /your/path/to/common_data/HYDAT/Hydat_sqlite3_20260116/Hydat.sqlite3
HYDAT exists: True
```

**If `HYDAT exists: False`**, check environment variables and download paths.

## Quick Start Workflow

```bash
# Initialize random set of stations (n=number, m=min per region)
python demo_data/generate_demo_stn_list.py -n 25 -m 2

# Initialize demo stations
python scripts/demo_setup/populate_demo_data.py

# (Optional) Integrate HYDAT polygon versions
python scripts/demo_setup/integrate_hydat_polygons.py --dry-run
python scripts/demo_setup/integrate_hydat_polygons.py

# Generate diagnostic pages
python scripts/demo_setup/process_station_pages.py

# Build documentation
cd book_docs/
jupyter book build .
open _build/html/index.html
```

## Station Data Initialization

### Demo Stations

The repository includes 10 demonstration stations from across Canada:

```
07AF010, 07DB005, 07EE009, 07FD014, 07GA002
07JC003, 07QC005, 08GA065, 08LB053, 08LE067
08NE067, 08NJ134, 08NM133, 08NM134, 09DA001
09DC004, 09EA005, 09FA001, 09FC001, 10CD003
10ED009, 10FB005, 10JA004, 10KC001, 10LA002
```

Station IDs are defined in `demo_data/DEMO_STATIONS.txt`.

### Running Initialization

```bash
python scripts/demo_setup/populate_demo_data.py
```

This script:
1. Extracts Water Office export (corrections, field visits, rating curves)
2. Queries HYDAT for station metadata
3. Extracts catchment polygons from WSC basins
4. Generates JSON metadata files

**Output files per station:**

```
book_docs/stations/{STATION_ID}/
├── _metadata.json                 # Station info from HYDAT (tracked in git)
├── _versions.json                 # Polygon version history (tracked in git)
├── _comparison_stats.json         # Pre-computed comparison metrics (tracked in git)
├── _qc_status.json                # Quality control status (tracked in git)
├── _data_sources.json             # Data provenance tracking (tracked in git)
├── {STATION_ID}_corrections.csv   # Data corrections (tracked in git)
├── {STATION_ID}_field_visits.csv  # Field visit records (tracked in git)
├── {STATION_ID}_RCs.csv           # Rating curves (tracked in git)
├── {STATION_ID}_daily_flows.csv   # Daily flow timeseries (local only)
├── {STATION_ID}_daily_levels.csv  # Daily level timeseries (local only)
├── {STATION_ID}_annual_peaks.csv  # Annual peak flows (local only)
└── {STATION_ID}_polygon_v*.geojson # Catchment polygons (local only, not in git)
```

### Git Tracking Philosophy

This repository tracks metadata only. CSV files and JSON metadata are tracked in git, while polygon GeoJSON files (large geospatial data) remain local only. This approach maintains data integrity by keeping polygons unmodified from source, keeps repository size lightweight with streamlined git history, ensures complete provenance tracking via metadata, and follows production patterns where large files stay external while metadata lives in git.

## Integrating HYDAT Catchment Polygons

To create versioned polygon histories, integrate alternative catchment polygons from HYDAT's drainage basin dataset.

### Download HYDAT Polygons

Download from [Hydrometric Network Basin Polygons](https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/HydrometricNetworkBasinPolygons/).

```bash
cd $COMMON_DATA_DIR/HYDAT/
mkdir -p polygons

# Download regional files (example: regions 07, 08, 09)
wget https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/HydrometricNetworkBasinPolygons/geojson/MDA_ADP_07.zip
wget https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/HydrometricNetworkBasinPolygons/geojson/MDA_ADP_08.zip
wget https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/HydrometricNetworkBasinPolygons/geojson/MDA_ADP_09.zip

# Extract
unzip MDA_ADP_07.zip -d polygons/
unzip MDA_ADP_08.zip -d polygons/
unzip MDA_ADP_09.zip -d polygons/
```

### Integration Workflow

```bash
# Preview changes (dry-run mode)
python scripts/demo_setup/integrate_hydat_polygons.py --dry-run

# Integrate all demo stations
python scripts/demo_setup/integrate_hydat_polygons.py

# Integrate specific stations
echo -e "07DB005\n08NM134" > /tmp/my_stations.txt
python scripts/demo_setup/integrate_hydat_polygons.py --stations-file /tmp/my_stations.txt
```

**What it does:**
1. **Find HYDAT Polygon:** Searches regional directories for matching StationNum
2. **Compare Geometries:** Computes Jaccard similarity and area differences (equal-area projection)
3. **Determine Version:** Assigns semantic version (major vs minor) based on keywords
4. **Extract Polygon:** Transforms to EPSG:3857, saves as versioned GeoJSON
5. **Update Metadata:** Adds version entry and comparison metrics to `_versions.json`

### Comparison Metrics

Jaccard Similarity Index (JSI) measures overlap as the ratio of intersection to union area, ranging from 0 (no overlap) to 1 (identical), with values above 0.95 indicating high similarity. Area difference expresses percent change as ((new_area - old_area) / old_area) × 100, with positive values indicating the new polygon is larger and negative values showing it is smaller.

Projection: Uses Lambert Azimuthal Equal Area (LAEA) centered at polygon centroid for accurate area calculations.

### Version Graph Structure

`_versions.json` uses a graph-based structure allowing any-to-any version comparisons:

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
## Diagnostic Page Generation

### Generate Station Pages

After initializing data, run:

```bash
python scripts/demo_setup/process_station_pages.py
```

This creates Markdown pages for each station in `book_docs/station_pages/stations/` containing station metadata table (coordinates, drainage area, source, retrieval date), version history with polygon provenance and comparison metrics, data quality status from QC validation results, and interactive visualizations showing catchment maps, polygon comparisons, and flow plots.

### Plot Generation

Interactive visualizations use Bokeh plots generated by `scripts/catchment_page_utils.py`. The catchment boundary map provides interactive polygon visualization with basemap tiles. When two or more versions exist, polygon comparison plots show spatial differences using light green for agreement (intersection), red for old area not in new (false positive), and purple for new area not in old (false negative). Timeseries charts display flow and level data over time.

Plots execute at build time using MyST `bokeh-plot` directives.

### Validation Rules

Automated checks include:

- **Data Completeness** — Required CSV/JSON files present
- **CSV Format** — Valid column structure and data types
- **Discharge Values** — No negative streamflow (≥0)
- **Timestamps** — Valid ISO 8601 format
- **Polygon Geometry** — Valid GeoJSON, no self-intersections
- **Metadata Quality** — Required fields populated

Results stored in `_qc_status.json` per station.

## Caravan vs WSC Polygon Comparison

Benchmark Caravan's inherited HYSETS polygons against the current WSC drainage basins. Start with the test region so you can validate dependencies and CRS handling before launching the full computation.

```bash
# Fast validation (39 stations, MDA_ADP_06 only)
python scripts/generation/compare_caravan_polygons.py --test

# Full national run (1,432 stations)
python scripts/generation/compare_caravan_polygons.py
```

Outputs land in `book_docs/data/polygon_comparisons/caravan_vs_wsc2024/` and drive the "Broken Telephone" case study page. Rebuild the Jupyter Book after a successful run to refresh the plots.

## Build and Deploy Documentation

### Build Jupyter Book

```bash
cd book_docs/
jupyter book build .
```

View locally:

```bash
open _build/html/index.html
```

### Deploy to GitHub Pages

```bash
ghp-import -n -p -f book_docs/_build/html
```

## Scripts Architecture

The workflow uses modular, reusable scripts organized into layers:

### Configuration Layer (`scripts/config/`)

- **`paths.py`** — Centralized path resolution (single source of truth)

### Utilities Layer (`scripts/utils/`)

- **`bokeh.py`** — Bokeh visualization utilities
- **`geometry.py`** — Geospatial operations (Jaccard, projections)
- **`markdown.py`** — Template rendering and table generation
- **`data_loaders.py`** — Unified data loading with caching

### Generation Layer (`scripts/generation/`)

The generation layer contains `page_generator.py` for unified page generation.

### Workflow Scripts (`scripts/demo_setup/`)

Workflow scripts include `populate_demo_data.py` to initialize station data, `integrate_hydat_polygons.py` to add polygon versions, and `process_station_pages.py` to generate diagnostic pages.

This design provides single source of truth where path changes only require editing `paths.py`, reusability enabling multiple workflows without duplication, testability with each layer tested independently, and maintainability through clear separation of concerns.

## Troubleshooting

### "WaterOffice export not found"

```bash
ls data/WaterOffice_RC_Export_20260203.zip
```

Download from Zenodo using DOI (see [Data Sources](DATA_SOURCES.md)).

### "HYDAT database not found"

Complete environment setup above. Script creates placeholder metadata if HYDAT unavailable.

### "Import error: supporting_figure_functions"

Run from repository root:

```bash
cd /path/to/camel_farrier
python scripts/demo_setup/populate_demo_data.py
```

### CRS/Projection Warnings

Non-fatal warnings indicate potential data updates needed. Safe to ignore for most operations.

## Full Rebuild Workflow

To clean legacy data and rebuild with latest polygons:

```bash
# 1. Clean existing station data
rm -rf book_docs/stations/*

# 2. Repopulate from scratch (creates v1.0.0 from WSC_basins)
python scripts/demo_setup/populate_demo_data.py

# 3. Integrate HYDAT polygons (creates v1.1.0 or higher)
python scripts/demo_setup/integrate_hydat_polygons.py

# 4. Generate diagnostic pages
python scripts/demo_setup/process_station_pages.py

# 5. Build documentation
cd book_docs/
jupyter book build .
```

## Next Steps

- **[Data Specification](data_specification.md)** — Detailed CSV schemas and JSON metadata formats
- **[Data Sources](DATA_SOURCES.md)** — Dataset provenance and citation information
- **[CONTRIBUTING](../CONTRIBUTING.md)** — Guidelines for contributing to the project
