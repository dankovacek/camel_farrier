# Project Overview

```{admonition} **Purpose**
:class: tip
This repository demonstrates version-controlled management of catchment polygons for Canadian hydrometric stations, enabling transparent tracking of boundary revisions, reproducible data provenance, and collaborative improvement of watershed delineations used in hydrological research.
```

## Motivation

Catchment boundaries are fundamental to hydrological analysis, but errors occur in their delineation as evidenced by the differences between revisions. This framework addresses:

- **Transparency** — All changes tracked with comparison metrics (Jaccard Index, area differences)
- **Reproducibility** — Specific polygon versions linked to analyses via semantic tags and commit SHAs
- **Collaboration** — Contributors can propose improvements with documented evidence and methodology
- **Quality Assessment** — Automated validation and cross-dataset comparisons

**Why Version Control?**

Git is well-suited for managing catchment polygons because it tracks file changes systematically, while GitHub enables collaboration through Pull Requests and automated validation workflows.

## Dataset ontext

This demonstration uses polygons from multiple sources:

- **WSC Official Basins** — Water Survey of Canada drainage basin boundaries
- **HYDAT Polygons** — Polygons from HYDAT drainage basin dataset
- **HYSETS** {cite}`arsenault2020comprehensive` — Large-sample hydrology dataset baseline
- **Caravan** {cite}`kratzert2023caravan` — Global community large-sample dataset

For detailed provenance, download links, and methodology, see [Data Sources](../guides/DATA_SOURCES.md).

## Opportunities

Catchment delineation is challenging when the size decreases relative to the DEM resolution, and in areas of low relief. These cases represent an opportunity for collaborative improvement through:

1. High-resolution DEM delineation
2. Field validation
3. Cross-dataset and delineation methodology comparison
4. Community contributions with local knowledge and experience

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
