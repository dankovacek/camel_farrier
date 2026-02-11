# Data Sources and Provenance

This document records all data sources used in the Camel Farrier demonstration repository, including local hydrometric data and external polygon datasets.

:::{div} cf-section
## Local Hydrometric Data

Hydrometric data comes from two distinct Water Survey of Canada sources with different access methods and update frequencies.

### Directory Structure

```
data/
├── RCs/                    # Rating curves (1,147 stations) - from Water Office portal
│   └── {STATION_ID}_RCs.csv
├── corrections/            # Data corrections (1,147 stations) - from Water Office portal
│   └── {STATION_ID}_corrections.csv
├── field_visits/           # Field visit metadata (1,147 stations) - from Water Office portal
│   └── {STATION_ID}_field_visits.csv
├── HYSETS_watershed_boundaries/  # HYSETS polygon shapefiles
│   ├── HYSETS_watershed_boundaries_20200730.shp
│   └── HYSETS_watershed_boundaries_filtered.shp
└── WaterOffice_RC_Export_20260203.zip  # Archived Water Office portal extraction
```

### 1. HYDAT Database (Core Hydrometric Records)

- **Source**: Water Survey of Canada - National Archive (HYDAT)
- **Database**: `Hydat.sqlite3`
- **Location**: External (not in repository)
- **Version**: 2026-01-16
- **Access**: Publicly available through Environment and Climate Change Canada
- **URL**: https://www.canada.ca/en/environment-climate-change/services/water-overview/quantity/monitoring/survey/data-products-services/national-archive-hydat.html
- **Content**:
  - Daily discharge and water level records
  - Station metadata (location, drainage area, status)
  - Data quality flags and symbols
  - Historical records dating back to station establishment
- **Update Frequency**: Quarterly releases
- **License**: Open Government License - Canada

### 2. Water Office Portal Data (Operational Metadata)

- **Source**: Water Survey of Canada - Water Office Portal
- **Extraction Date**: February 3, 2026
- **Access**: Requires authenticated credentials (not publicly accessible)
- **Extraction Script**: `/home/danbot/code/2025/WSC_rating_curves/retrieve_RC_correction_data.py`
- **Archived Dataset**: `WaterOffice_RC_Export_20260203.zip`
- **DOI**: `<add_DOI>` *(to be assigned upon Zenodo publication)*
- **Content**:
  - **Rating Curves** (2,375 stations): Stage-discharge relationships with validity periods
  - **Data Corrections** (2,375 stations): Applied adjustments and correction rationale
  - **Field Visit Metadata** (2,375 stations): Site inspection records, measurement conditions
- **Update Frequency**: n/a
- **Stations Covered**: n/a
- **File Format**: CSV per station with standardized column structure

**Note**: The Water Office portal data is **not included directly in this repository** due to access restrictions. For demo replication, download the archived extraction from Zenodo using the DOI above and extract to the `data/` directory.
:::

:::{div} cf-section
## External Polygon Datasets

External watershed polygon datasets are used for cross-dataset comparisons and validation. These datasets are **NOT included in this repository** but are referenced for reproducibility.

### 1. WSC Basin Polygons (2021-12 Version)

- **Description**: Water Survey of Canada drainage basin polygons from December 2021
- **Version**: 2021-12
- **Format**: GeoJSON
- **File**: `WSC_basins_2021-12.geojson`
- **Location**: External (will be archived with DOI)
- **Use**: Baseline polygon version for v1_initial_state demonstration
- **DOI**: `<placeholder doi URL>` *(to be assigned upon Zenodo publication)*

### 2. WSC Basin Polygons (2024 Version)

- **Description**: Current Water Survey of Canada drainage basin polygons
- **Version**: 2024
- **Format**: GeoJSON (organized by region)
- **Structure**: `MDA_ADP_{region}/MDA_ADP_{region}_DrainageBasin_BassinDeDrainage.geojson`
- **Location**: External (will be archived with DOI)
- **Source URL**: https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/HydrometricNetworkBasinPolygons/
- **Use**: Updated polygon version for v2_revised_state demonstration
- **DOI**: `<placeholder doi URL>` *(to be assigned upon Zenodo publication)*

### 3. HYSETS Watershed Boundaries

- **Description**: HYSETS (Hydrometeorological Sandbox) watershed boundaries
- **Citation**: Arsenault, R., Brissette, F., Martel, J. L., Troin, M., Lévesque, G., Davidson-Chaput, J., ... & Poulin, A. (2020). A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds. *Scientific Data*, 7(1), 243.
- **DOI**: https://doi.org/10.17605/OSF.IO/RPC3W
- **Version**: 2020-07-30
- **Format**: Shapefile
- **File**: `HYSETS_watershed_boundaries_20200730.shp`
- **Location**: Included in repository at `data/HYSETS_watershed_boundaries/`
- **Stations**: 671 Canadian stations with HYDAT IDs
- **Use**: Cross-dataset comparison for Scenario 4 (HYDAT-HYSETS polygon discrepancies)

### 4. Caravan Dataset (HYSETS Subset)

- **Description**: Caravan large-sample hydrology dataset (HYSETS subset polygons)
- **Citation**: Kratzert, F., Nearing, G., Addor, N., Erickson, T., Gauch, M., Gilon, O., ... & Matias, Y. (2023). Caravan - A global community dataset for large-sample hydrology. *Scientific Data*, 10(1), 61.
- **DOI**: https://doi.org/10.5281/zenodo.15529786
- **Version**: 2023 (HYSETS subset)
- **Format**: Shapefile
- **File**: `hysets_basin_shapes.shp`
- **Location**: External (referenced for comparison)
- **Stations**: 638 Canadian stations with HYDAT IDs
- **Use**: Cross-dataset comparison for Scenario 4 (LSH dataset polygon differences)
- **Note**: Caravan polygons for Canadian stations are identical to HYSETS polygons
:::

:::{div} cf-section
## Data Processing and Quality Control

### Station Selection Criteria

For the demonstration repository, 10 stations were selected based on:

1. **User-specified for case studies** (7 stations): 05MA022, 07DB005, 05LL013, 05NG027, 07GH004, 05QA002, 03OD007
2. **Geographic diversity** (3 stations): 02HC038, 08NM134, 01FA001
3. **Data completeness**: All stations have rating curves, corrections, and field visit records
4. **Polygon availability**: All stations present in WSC 2021-12, WSC 2024, HYSETS, and Caravan datasets

### Coordinate Reference Systems

All polygon datasets are standardized to:

- **Storage CRS**: EPSG:4326 (WGS84 lat/lon)
- **Area calculations**: Local Lambert Azimuthal Equal Area (LAEA) projection centered on each polygon centroid to minimize distortion
:::

:::{div} cf-section
## Version Control and Provenance

Each station maintains version metadata tracking:

- **Commit SHA**: Immutable git identifier
- **Semantic tag**: Human-readable version (e.g., `WSC-2024-v1`)
- **Source dataset**: Which polygon source was used
- **Quality tier**: Canonical, reviewed, experimental, or superseded
- **External comparisons**: Jaccard Index and area differences with HYSETS/Caravan
:::

:::{div} cf-section
## Data Acquisition for Demo Replication

### Required External Data

To replicate this demonstration, you will need:

1. **Water Office Portal Data** (rating curves, corrections, field visits)
   - Download: `WaterOffice_RC_Export_20260203.zip` from Zenodo
   - DOI: `<add_DOI>`
   - Extract to: `data/` directory in repository root
   - Verification: Run `scripts/demo_setup/verify_data_integrity.py`

2. **WSC Polygon Datasets** (for version comparison demonstrations)
   - WSC 2021-12: DOI `<placeholder doi URL>`
   - WSC 2024: DOI `<placeholder doi URL>`
   - Extract to designated external directory (paths configurable in setup)

3. **HYDAT Database** (core hydrometric records)
   - Download from: https://www.canada.ca/en/environment-climate-change/services/water-overview/quantity/monitoring/survey/data-products-services/national-archive-hydat.html
   - Place: External location (not in repository)
   - Version: 2026-01-16 or later

### Automated Setup

```bash
# After downloading required archives:
python scripts/demo_setup/init_demo_repo.py \
  --wateroffice-archive data/WaterOffice_RC_Export_20260203.zip \
  --verify-checksums
```
:::

:::{div} cf-section
## Reproducibility

To ensure reproducibility:

1. External datasets archived with persistent DOIs (Zenodo)
2. Extraction scripts preserved in archived datasets
3. Processing scripts document all transformations
4. Version metadata links data versions to specific git commits
5. Checksums enable verification of data integrity
6. Extraction dates documented for time-sensitive data
:::

:::{div} cf-section
## Future Updates

When external polygon datasets are published to Zenodo or similar repository:

1. Replace `<placeholder doi URL>` with actual DOI
2. Update citation information
3. Verify all links and checksums
4. Document any versioning changes
:::

:::{div} cf-section
## Contact

For questions about data sources or access:

- **HYDAT Database**: Environment and Climate Change Canada
  - URL: https://www.canada.ca/en/environment-climate-change/services/water-overview/quantity/monitoring/survey.html
- **Water Office Portal**: Environment and Climate Change Canada - Water Office
  - URL: https://wateroffice.ec.gc.ca/ (requires credentials)
  - For access: Contact regional WSC offices
- **HYSETS**: Richard Arsenault (École de technologie supérieure)
  - Email: richard.arsenault@etsmtl.ca
- **Caravan**: Frederik Kratzert (Google Research)
  - GitHub: https://github.com/kratzert/Caravan
- **This Repository**: See [CONTRIBUTING](../CONTRIBUTING.md)

## Data Citation

When using data from this repository in publications, please cite:

**For HYDAT data**:
> Water Survey of Canada, 2026. HYDAT Database - Canadian Hydrometric Data. Environment and Climate Change Canada. Retrieved from https://www.canada.ca/en/environment-climate-change/services/water-overview/quantity/monitoring/survey/data-products-services/national-archive-hydat.html

**For Water Office portal data**:
> Water Survey of Canada, 2026. Water Office Portal Operational Metadata (Rating Curves, Corrections, Field Visits). Archived extraction dataset. DOI: `<add_DOI>`. Extraction date: 2026-02-03.

**For HYSETS**:
> Arsenault, R., Brissette, F., Martel, J. L., Troin, M., Lévesque, G., Davidson-Chaput, J., ... & Poulin, A. (2020). A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds. Scientific Data, 7(1), 243. https://doi.org/10.17605/OSF.IO/RPC3W

**For Caravan**:
> Kratzert, F., Nearing, G., Addor, N., Erickson, T., Gauch, M., Gilon, O., ... & Matias, Y. (2023). Caravan - A global community dataset for large-sample hydrology. Scientific Data, 10(1), 61. https://doi.org/10.5281/zenodo.15529786
:::

**Last Updated**: February 3, 2026
**Schema Version**: 1.0.0
