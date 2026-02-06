# Project Overview

```{admonition} Purpose
This repository demonstrates version-controlled management of catchment polygons for Canadian hydrometric stations, enabling transparent tracking of boundary revisions, reproducible data provenance, and collaborative improvement of watershed delineations used in hydrological research.
```

## Motivation

Catchment boundaries are fundamental to hydrological analysis, but polygon quality varies across datasets and updates often lack documentation. This framework addresses:

- **Transparency** — All changes tracked with comparison metrics (Jaccard Index, area differences)
- **Reproducibility** — Specific polygon versions linked to analyses via semantic tags and commit SHAs
- **Collaboration** — Contributors can propose improvements with documented evidence and methodology
- **Quality Assessment** — Automated validation and cross-dataset comparisons

**Why Version Control?**

Git is well-suited for managing catchment polygons because it tracks file changes systematically, while GitHub enables collaboration through Pull Requests and automated validation workflows.

## Dataset Context

This demonstration uses polygons from multiple sources:

- **WSC Official Basins** — Water Survey of Canada drainage basin boundaries
- **HYDAT Polygons** — Polygons from HYDAT drainage basin dataset
- **HYSETS** {cite}`arsenault2020comprehensive` — Large-sample hydrology dataset baseline
- **Caravan** {cite}`kratzert2023caravan` — Global community large-sample dataset

For detailed provenance, download links, and methodology, see [Data Sources](../guides/DATA_SOURCES.md).

## Improvement Opportunities

Catchments ≤50 km² in HYSETS use simplified rectangular boundaries due to delineation challenges at fine scales. These represent approximately one-third of the dataset and offer significant opportunity for collaborative improvement through:

1. High-resolution DEM delineation
2. Field validation of drainage divides
3. Cross-dataset comparison (HYSETS, Caravan, WSC)
4. Community contributions with local knowledge

## Documentation Structure

- **[Cross-Station Comparisons](revision_summary.md)** — Aggregated polygon version metrics across all stations
- **[LSH Dataset Comparison](../guides/lsh_inputs_review.md)** — Compare current polygons against HYSETS and Caravan
- **[Station Pages](../guides/station_directory.md)** — Individual station diagnostics with version history
- **[User Guide](../guides/user_guide.md)** — Workflow for integrating new polygon versions

## References

```{bibliography}
:style: unsrt
:filter: docname in docnames
```
