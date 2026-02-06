# Environment Setup

## When to Use This Guide

**Read this guide FIRST if you are:**
- Setting up the repository for the first time
- Configuring Python dependencies
- Setting external data paths (HYDAT, WSC basins)
- Troubleshooting "dataset not found" errors

**Skip this guide if:**
- Your environment is already configured
- You're looking for data initialization steps (see [Data Population](data_population.md))
- You're looking for schema reference (see [Data Specification](data_specification.md))

## Purpose and Scope

**Purpose:** Configure your local development environment to work with the Camel Farrier repository.

**Scope:** Python dependencies, external data paths, verification.

**Next Step After Completion:** Proceed to [Data Population](data_population.md) to initialize demo stations.

**Data Sources:** See [DATA_SOURCES](DATA_SOURCES.md) for dataset download links and provenance.

## Quick Start

### Step 1: Clone Repository

```bash
git clone https://github.com/dankovacek/camel_farrier.git
cd camel_farrier
```

### Step 2: Install Dependencies

```bash
pip install -r book_docs/requirements.txt
```

### Step 3: Configure External Data Path

External geospatial datasets (HYDAT database, WSC basins) are accessed via the `COMMON_DATA_DIR` environment variable.

**Default:** `~/data/hydrometric/` (if not set)

**To customize:** Set the environment variable:

```bash
export COMMON_DATA_DIR=/path/to/your/geospatial/data
```

Persist by adding to your shell profile:

```bash
echo 'export COMMON_DATA_DIR=/path/to/your/geospatial/data' >> ~/.bashrc
source ~/.bashrc
```

### Step 4: Download Required Datasets

See [DATA_SOURCES](DATA_SOURCES.md) for:
- HYDAT database download and location
- WSC catchment polygons download and structure
- HYSETS watershed boundaries
- Water Office portal data access

Expected directory structure after setup:

```
$COMMON_DATA_DIR/
└── HYDAT/
    ├── Hydat.sqlite3
    └── WSC_basin_polygons/
```

## Verification

Verify your setup:

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

If `HYDAT exists: False`, check your paths and dataset downloads.
```

## Troubleshooting

### Dataset Not Found

Check the environment variable and file paths:

```bash
echo $COMMON_DATA_DIR
ls -la $COMMON_DATA_DIR/HYDAT/Hydat.sqlite3
```

If using default location, data should be in `~/data/hydrometric/HYDAT/`

### CRS/Projection Warnings

Some scripts use different coordinate reference systems. These warnings are usually non-fatal but indicate potential data updates needed.

## Next Steps

✅ **Environment configured!** Proceed to:

1. [Data Population](data_population.md) — Initialize demonstration stations and integrate polygon versions
2. [Data Specification](data_specification.md) — Reference for CSV schemas and JSON metadata (consult as needed)
3. [Workflow Documentation](workflow.md) — Page generation and documentation building
