
# Automated Quality Documentation for Hydrometric Data

:::{div} dictionary-entry
<span class="term">Camel Farrier</span>
<span class="definition">A caretaker who trims, shoes, and maintains the hooves of camels.</span>
:::

Hydrometric data produced by the Water Survey of Canada (WSC) are critical inputs to many decisions in water resources practice and research. This supplementary material provides data summary pages with interactive visualizations of estimated streamflow timeseries with supporting information (rating curve calibration points), as well as a "changelog" of polygons representing the upstream contributing area of hydrometric monitoring stations, and some diagnostic information for helping assess data quality and changes over time.

## Reporting Backlog Example

The map below shows the reporting backlog for daily streamflow data in HYDAT, defined as the time since the most recent flow record for each station. Hovering over points shows station metadata and backlog duration. Clicking on map points takes you to the station summary page.

:::{margin}
**Linked selection.** Use box-select or lasso-select tools on the CDF to highlight stations on the map (and vice versa). Toggle legend entries to isolate specific area-change bins.

Warm colors highlight basins where Caravan's inherited geometry deviates most from the latest WSC polygons.
:::

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import plot_network_backlog
show(plot_network_backlog())
:::

## Large-Sample Hydrology Impact

WSC hydrometric data underpin large-sample hydrology (LSH) studies, which rely on catchment boundaries to derive physiographic attributes and climate forcings. However, as this repository shows, the national monitoring network drainage basins have been updated in recent years. As a result, old polygons remain in current versions of LSH datasets like HYSETS and Caravan. The Camel Farrier framework helps quantify the degree of change between the current polygon set and those included in other datasets.

See the [Broken Telephone case study](summary_pages/broken_telephone_casestudy.md) for a detailed analysis of how polygon versioning gaps propagate through derived datasets.

## Opportunities for Improvement

Catchment delineation is challenging when basin size decreases relative to DEM resolution, and in areas of low relief. These cases represent opportunities for collaborative improvement through:

1. High-resolution DEM delineation
2. Field validation
3. Cross-dataset and delineation methodology comparison
4. Community contributions with local knowledge and experience

See [Contributing](CONTRIBUTING.md) for guidelines on proposing polygon improvements.

## Contents

Station pages provide catchment polygons (GeoJSON), metadata, rating curves, field visit records, and revision history. The validation framework includes automated tests for data completeness, temporal continuity, and geometric validity. Version control workflows use Git-based tracking with semantic versioning and metadata schemas. Interactive visualizations show polygon evolution and data availability.

All data provided in open formats (GeoJSON, CSV, JSON).

## Theme

The theme of this book is adapted from the [Tufte CSS](https://github.com/edwardtufte/tufte-css).

## References

```{bibliography}
:style: unsrt
:filter: docname in docnames
```

