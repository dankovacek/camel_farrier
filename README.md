# Camel Farrier: Version Control for Hydrometric Data

A demonstration of version control workflows for hydrometric monitoring stations: catchment polygon versioning, rating curve provenance, and automated Jupyter Book documentation generation.

## Documentation

See the documentation live at [https://dankovacek.github.io/camel_farrier/](https://dankovacek.github.io/camel_farrier/), or build locally following the instructions below.

## Quick Start

```bash
git clone https://github.com/dankovacek/camel_farrier.git
cd camel_farrier
pip install -r book_docs/requirements.txt

# Point to external geospatial datasets (HYDAT, WSC polygons)
export COMMON_DATA_DIR=/path/to/geospatial/data

# Unpack rating curve export from Water Office
python scripts/demo_setup/unpack_wateroffice_data.py \
    --input_zip_path $COMMON_DATA_DIR/WaterOffice_RC_Export_20260203.zip \
    --output_dir $COMMON_DATA_DIR/WaterOffice_RC_Export_20260203

# Populate per-station data from HYDAT and WSC sources
python scripts/demo_setup/populate_demo_data.py

# Generate station diagnostic pages and build the book
uv run python scripts/demo_setup/process_station_pages.py
cd book_docs/ && uv run jupyter-book build .  # requires jupyter-book v1 (v2 uses an incompatible CLI)

# push changes to github pages
ghp-import -n -p -f book_docs/_build/html
```

## Repository Structure

```
camel_farrier/
├── scripts/
│   ├── demo_setup/          # Populate station data from HYDAT/WSC sources
│   ├── generation/          # Station page generation (Jinja2 + Bokeh)
│   ├── plotting/            # Plot utilities (rating curves, polygons)
│   ├── changelog_analysis/  # Detect and summarize data revisions
│   ├── utils/               # Shared helpers
│   └── config/              # Path and environment configuration
├── book_docs/
│   ├── guides/              # User guide, data spec, governance docs
│   ├── stations/            # Auto-generated per-station diagnostic pages
│   ├── summary_pages/       # Cross-station summary and comparison pages
│   ├── templates/           # Jinja2 page templates
│   └── data/                # Derived summary data (revision metrics, etc.)
├── demo_data/
│   └── DEMO_STATIONS.txt    # ~500 stations present in WSC + HYDAT polygons
├── data/
│   ├── rating_curves/       # Water Office rating curve exports
│   ├── field_visits/        # Field measurement records
│   ├── corrections/         # Applied data corrections
│   └── HYSETS_watershed_boundaries/  # Cross-dataset polygon comparison
└── tests/
```

## External Datasets

Configure via `COMMON_DATA_DIR` (default: `~/data/hydrometric/`):

| Dataset | Use |
|---|---|
| HYDAT SQLite | Discharge/level timeseries and station metadata |
| WSC basin polygons | Catchment boundary delineations |
| HYDAT drainage basins | Polygon version comparison (optional) |
| Daymet catchment-average NetCDF | Precipitation input for double mass curves — one `.nc` per station under `COMMON_DATA_DIR/BC_Monitored_catchment_mean_met_forcings_20260203/catchment_daily/` |

See [Data Sources](book_docs/guides/DATA_SOURCES.md) for download links.

## License

[CC BY-SA 4.0]( https://creativecommons.org/licenses/by-sa/4.0/) - Attribution-ShareAlike for all code, documentation, and generated content.
