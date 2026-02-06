
# Camel Farrier: Automated Quality Documentation for Hydrometric Data

```{admonition} **Camel Farrier**
:class: tip
A caretaker who trims, shoes, and maintains the hooves of camels.
```

## Summary

Hydrometric data produced by the Water Survey of Canada (WSC) is an important input to many decisions in water resources practice and research.  This supplementary material provides a "changelog" of catchment polygons and other data for hydrometric monitoring stations, and some diagnostic information for helping assess data quality and changes over time.  The Camel Farrier framework tracks polygon revisions with complete provenance metadata, automated validation tests, and interactive diagnostic pages for each station.

Another important use case of WSC hydrometric data is in large-sample hydrology (LSH) studies, which often rely on catchment boundaries to derive physiographic attributes and climate forcings.  However, as this repository shows, the national monitoring network drainage basins have been updated in recent years.  As a result, old polygons remain in current versions of LSH datasets like HYSETS {cite}`arsenault2020comprehensive` and Caravan {cite}`kratzert2023caravan`.  The Camel Farrier framework helps quantify the degree of change between the current polygon set and those included in other datasets.

## Contents

- **Station Pages** — Catchment polygons (GeoJSON), metadata, rating curves, field visit records, and revision history
- **Validation Framework** — Automated tests for data completeness, temporal continuity, and geometric validity
- **Version Control Workflows** — Git-based tracking with semantic versioning and metadata schemas
- **Interactive Visualizations** — Bokeh plots showing polygon evolution and data availability

All data provided in open formats (GeoJSON, CSV, JSON).

## References

```{bibliography}
:style: unsrt
:filter: docname in docnames
```

