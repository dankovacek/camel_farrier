# LSH Dataset Input Review

## Purpose

Compare current catchment polygon versions against Large-Sample Hydrology (LSH) dataset sources (HYSETS and Caravan) to quantify differences, identify discrepancies, and assess data quality for hydrological analysis.

**Target Datasets:**
- **HYSETS** — Large-sample hydrology dataset for North America {cite}`arsenault2020comprehensive`
- **Caravan** — Global community large-sample hydrology dataset {cite}`kratzert2023caravan`
- **Current WSC catchment polygons used in this repository** -- Canadian national hydrometric network station boundaries in both HYSETS and Caravan were originally derived from WSC datasets where polygons were available, though some differences exist due to updates and processing.

**Quality Metrics:**
- **Jaccard Similarity Index (JSI)** — Spatial overlap between polygons
- **Area Difference** — Absolute and percentage drainage area changes

---

## Motivation

Watershed boundaries are fundamental to hydrological modeling. Different delineation methods and input data can produce significantly different polygons for the same gauge station, affecting:

- **Runoff calculations** — Area-normalized discharge depends on drainage area
- **Model calibration** — Parameter sensitivity may vary with catchment descriptors

This review quantifies polygon discrepancies to:
1. Assess reliability of LSH dataset polygons for Canadian stations
2. Identify stations where boundary revisions were significant
3. Document provenance for reproducible analyses
4. Establish quality baselines for future dataset versions

---

## Methodology

### Comparison Metrics

#### Jaccard Similarity Index (JSI)

Measures spatial overlap between two polygons:

$$
JSI = \frac{\text{Area}(P_1 \cap P_2)}{\text{Area}(P_1 \cup P_2)}
$$

**Interpretation:**
- **JSI = 1.0**: Perfect agreement
- **JSI ≥ 0.95**: Excellent agreement (< 5% coverage differences)
- **0.85 ≤ JSI < 0.95**: Good agreement (minor coverage differences)
- **0.70 ≤ JSI < 0.85**: Moderate differences (investigate causes)
- **JSI < 0.70**: Significant discrepancies (additional review recommended)

#### Area Difference

Percentage change in drainage area:

$$
\Delta_{\text{area}} = \frac{\text{Area}_{\text{LSH}} - \text{Area}_{\text{current}}}{\text{Area}_{\text{current}}} \times 100\%
$$

**Interpretation:**
- **|Δ| < 5%**: Acceptable variation (typical for same-method delineations)
- **5% ≤ |Δ| < 10%**: Moderate difference (document reasons)
- **|Δ| ≥ 10%**: Major discrepancy (additional review recommended)

### Coordinate Reference System

All area calculations use **Lambert Azimuthal Equal Area (LAEA)** projection centered on polygon centroid to minimize distortion and ensure accurate measurements across Canada's large geographic extent.

---

## Dataset Comparison

### HYSETS Polygon Comparison

**Dataset Version:** 2020-07-30
**DOI:** [10.17605/OSF.IO/RPC3W](https://doi.org/10.17605/OSF.IO/RPC3W)
**Stations Compared:** [TBD]

#### Distribution of Jaccard Similarity

**[Interactive plot pending data analysis]**

When analysis is complete, this section will display:
- Histogram of JSI values across all stations
- Cumulative distribution function
- Threshold lines for quality interpretation (JSI ≥ 0.95, 0.85, 0.70)

**[Interactive plot pending data analysis]**

When analysis is complete, this section will display:
- Histogram of area differences across all stations
- Cumulative distribution function
- Threshold lines for acceptable variation (|Δ| < 5%, 5-10%, >10%)

#### Per-Station Comparison Table

| Station ID | Province | JSI | Area Diff (%) | Area Diff (km²) | Status |
|------------|----------|-----|---------------|-----------------|--------|
| TBD | TBD | TBD | TBD | TBD | Pending analysis |

**Summary Statistics:**
- **Median JSI:** TBD
- **Stations with JSI ≥ 0.95:** TBD / TBD ([TBD]%)
- **Stations with JSI < 0.85:** TBD / TBD ([TBD]%)
- **Mean absolute area difference:** TBD%
- **Stations with |Δ| > 10%:** TBD / TBD

---

### Caravan Polygon Comparison

**Dataset Version:** 2023-v1.3
**DOI:** [10.5281/zenodo.15529786](https://doi.org/10.5281/zenodo.15529786)
**Stations Compared:** [TBD]

#### Distribution of Jaccard Similarity

**[Interactive plot pending data analysis]**

When analysis is complete, this section will display:
- Histogram of JSI values across all stations
- Cumulative distribution function
- Threshold lines for quality interpretation (JSI ≥ 0.95, 0.85, 0.70)

#### Distribution of Area Differences

**[Interactive plot pending data analysis]**

When analysis is complete, this section will display:
- Histogram of area differences across all stations
- Cumulative distribution function
- Threshold lines for acceptable variation (|Δ| < 5%, 5-10%, >10%)

#### Per-Station Comparison Table

| Station ID | Province | JSI | Area Diff (%) | Area Diff (km²) | Status |
|------------|----------|-----|---------------|-----------------|--------|
| TBD | TBD | TBD | TBD | TBD | Pending analysis |

**Summary Statistics:**
- **Median JSI:** TBD
- **Stations with JSI ≥ 0.95:** TBD / TBD ([TBD]%)
- **Stations with JSI < 0.85:** TBD / TBD ([TBD]%)
- **Mean absolute area difference:** TBD%
- **Stations with |Δ| > 10%:** TBD / TBD

---

## Geographic Distribution of Discrepancies

**[Interactive map pending data analysis]**

When analysis is complete, this section will display:
- Geographic map of Canadian hydrometric stations
- Stations colored by JSI agreement level
- Symbols sized by absolute area differences
- Hover tooltips with station details

---

## Cross-Dataset Comparison

### HYSETS vs. Caravan Consistency

For stations present in both LSH datasets, assess consistency:

- **Both datasets agree well with current version** (JSI ≥ 0.95 for both)
- **One dataset agrees, other diverges** (investigate which source is more reliable)
- **Both datasets diverge** (current version may need review)

**Consistency Matrix:** [TBD - Pending analysis]

---

## Findings and Recommendations

### Key Findings

**[To be populated after analysis]**

Examples of expected findings:
- Overall agreement level between datasets
- Regions with systematic discrepancies (e.g., headwaters, drainage divides)
- Stations requiring boundary verification
- Differences in delineation methodology (DEM resolution, flow accumulation thresholds)

### Implications for Hydrological Analysis

**Impact on Runoff Calculations:**
- Area errors propagate to specific discharge calculations
- 5% area difference → 5% error in runoff estimates

**Impact on Model Calibration:**
- Parameter uncertainty increases with boundary uncertainty
- Transfer functions assume geometric similarity

**Dataset Selection Guidance:**
- Recommend dataset based on JSI/area agreement
- Document version choice in research methods

### Recommendations

1. **For Researchers:**
   - Always document polygon source and version
   - Check JSI before combining analyses across datasets
   - Prefer current WSC versions when available

2. **For Dataset Maintainers:**
   - Include comparison metrics in dataset documentation
   - Provide version history and changelog
   - Cross-reference with official WSC boundaries

3. **For This Repository:**
   - Continue tracking polygon versions in `_versions.json`
   - Store comparison metrics in `_comparison_stats.json`
   - Update this review when new LSH dataset versions release

---

## Implementation Notes

### Data Sources

**Current Polygons:**
- Source: `book_docs/stations/{STATION_ID}/_versions.json`
- Schema: See [Data Specification](data_specification.md)

**HYSETS Polygons:**
- Download: [OSF Repository](https://osf.io/rpc3w/)
- Format: Shapefile
- CRS: EPSG:4326

**Caravan Polygons:**
- Download: [Zenodo Repository](https://zenodo.org/records/15529786)
- Format: GeoJSON
- CRS: EPSG:4326

### Analysis Script

**Planned Implementation:** `scripts/analysis/compare_lsh_datasets.py`

Expected workflow:
1. Load current polygon versions for demonstration stations
2. Load corresponding HYSETS and Caravan polygons
3. Compute JSI and area differences using local LAEA projection
4. Generate distribution plots and summary tables
5. Update this page with results

### Update Frequency

This review should be refreshed:
- When new HYSETS versions release
- When new Caravan versions release
- When demonstration stations update polygon versions
- Annually as part of data quality review

---

## References

```{bibliography}
:filter: docname in docnames
```

---

## Related Pages

- [Cross-Station Comparisons](../summary_pages/revision_summary.md) — Compare polygon versions within this repository
- [Data Sources](DATA_SOURCES.md) — Dataset provenance and download links
- [Getting Started](user_guide.md) — Polygon integration workflow
- [Data Specification](data_specification.md) — Version metadata schema
