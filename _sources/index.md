
# Automated Quality Documentation for Hydrometric Data

:::{div} dictionary-entry
<span class="term">Camel Farrier</span>
<span class="definition">A caretaker who trims, shoes, and maintains the hooves of camels.</span>
:::

Hydrometric data produced by the Water Survey of Canada (WSC) are critical inputs to many decisions in water resources practice and research.  This supplementary material provides a "changelog" of catchment polygons and other data for hydrometric monitoring stations, and some diagnostic information for helping assess data quality and changes over time.  The Camel Farrier framework tracks polygon revisions with complete provenance metadata, automated validation tests, and interactive diagnostic pages for each station.

Another important use case of WSC hydrometric data is in large-sample hydrology (LSH) studies, which often rely on catchment boundaries to derive physiographic attributes and climate forcings.  However, as this repository shows, the national monitoring network drainage basins have been updated in recent years.  As a result, old polygons remain in current versions of LSH datasets like HYSETS {cite}`arsenault2020comprehensive` and Caravan {cite}`kratzert2023caravan`.  The Camel Farrier framework helps quantify the degree of change between the current polygon set and those included in other datasets.

```{admonition} **Example**
:class: note
The map below shows the reporting backlog for daily streamflow data in HYDAT, defined as the time since the most recent flow record for each station. Hovering over points shows station metadata and backlog duration. Clicking on map points takes you to the station summary page.
```

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import plot_network_backlog
show(plot_network_backlog())
:::

```{admonition} **Interactive Selection**
:class: tip
The map and CDF share linked data: use box select or lasso select tools on the CDF plot to highlight corresponding stations on the map. This allows you to explore geographic patterns in reporting backlog.
```

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

