
# Automated Quality Documentation for Hydrometric Data

:::{div} dictionary-entry
<span class="term">Camel Farrier</span>
<span class="definition">A caretaker who trims, shoes, and maintains the hooves of camels.</span>
:::

Hydrometric data from the Water Survey of Canada (WSC) inform many decisions in water resources practice and research. Camel Farrier is a demonstration of how current open-source tools could enhance delivery of the wide array of information that supports hydrometric data use.

Here, information is organized around the hydrometric station.  Each station page contains the catchment boundary and its version history, daily streamflow from HYDAT, and field measurements used to calibrate rating curves where available. A variety of data related to a streamflow monitoring station and the information that supports daily flow estimates can be downloaded from the same location. Summaries of data quality checks highlight completeness, and external data sources provide important context for related analyses, e.g. double mass curves, flow duration curves and monthly hydrographs. Summary pages compare stations across the network, for example catchment polygons changes between releases at the network level. The goal is to help data users assess quality, track how the data change over time, and troubleshoot and share findings with the broader community.

## Where Camel Farrier fits

```{mermaid}
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'fontSize': '20px',
    'primaryColor': '#fdfbf7',
    'primaryTextColor': '#1f1e1b',
    'primaryBorderColor': '#b9b2a2',
    'lineColor': '#464646',
    'clusterBkg': '#f6f3ec',
    'clusterBorder': '#d5cfc0',
    'edgeLabelBackground': '#fdfbf7'
  },
  'flowchart': {
    'wrappingWidth': 420,
    'diagramPadding': 16,
    'rankSpacing': 56,
    'nodeSpacing': 24,
    'padding': 16,
    'subGraphTitleMargin': {
      'top': 10,
      'bottom': 14
    }
  }
}}%%
flowchart TB
    subgraph source["A.#nbsp;Source#nbsp;information#nbsp;(WSC)"]
        flow["<b>HYDAT streamflow</b><br/>Quarterly file + OGC API,<br/>Categorical flags, no version IDs"]
        curves["<b>Rating curves</b><br/>Available by request,<br/>No public API"]
        basins["<b>Catchment polygons</b><br/>Release date stamped,<br/>No DOI or change log"]
    end

    stewardship["<b>B. Camel Farrier: source-side stewardship</b><br/>Station-centric access, Automated documentation,<br/>Interactive version and change-impact views,<br/>Open and publicly documented feedback."]

    lsh["<b>C. Downstream large-sample<br/>hydrology (LSH) datasets</b><br/>e.g., Caravan, HYSETS"]

    fair["<b>FAIR infrastructure</b><br/>e.g., CUAHSI HydroShare<br/>Data sharing, discovery, access"]

    flow --> stewardship
    curves --> stewardship
    basins --> stewardship
    stewardship -. "changes impact" .-> lsh
    stewardship <-. "complementary to" .-> fair
    linkStyle default stroke-width: 2.5px
    style stewardship fill:#f6f3ec,stroke:#464646,stroke-width:2px
```

**A. Source information.** WSC daily streamflow is published as HYDAT, a database file released quarterly, and the same values are served through the standards-based MSC GeoMet [OGC API](https://eccc-msc.github.io/open-data/msc-geomet/ogc_api_en/). In both, data quality is described only by categorical flags (e.g., ice conditions, estimated), and neither identifies which release a value belongs to.  Stage–discharge rating curves and field measurements used to derive daily values are not published and are available only on request. Catchment polygons are distributed separately as regional files with a date stamp but no DOI, and neither rating curves nor catchment polygons are served by the API.

**B. Camel Farrier** illustrates how source-side stewardship could use existing open-source tools, building on existing standards-based services such as the MSC GeoMet OGC API (not duplicating them), and in line with practices such as those of the USGS to:

:::{div} roman-list
1. *organize data around the monitoring station*: Water Office provides a [page per station](https://wateroffice.ec.gc.ca/report/historical_e.html?stn=07AG003), but related information is spread across many views and downloads; here, streamflow, rating curves and catchment boundaries share one page,
2. *generate rich, interactive data documentation* automatically,
3. *quantify the effect of data revisions* in interactive views that support navigation between network and station levels, and
4. *host open, publicly documented feedback*, in place of the current closed, generic [web form](https://weather.gc.ca/mainmenu/water_contact_us_e.html) and [FAQ](https://wateroffice.ec.gc.ca/contactus/faq_e.html).
:::

**C. Downstream datasets** such as Caravan and HYSETS reuse source information directly, so source updates can propagate slowly or not at all. Camel Farrier is a stewardship pattern and an opportunity, not a replacement for data providers, downstream LSH datasets, or FAIR repositories such as HydroShare. Its aim is to make source information easier to access, document, compare, and discuss openly.


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

WSC hydrometric data underpin large-sample hydrology (LSH) studies, which rely on catchment boundaries to derive physiographic attributes and climate forcings. This repository examines changes to the national monitoring network drainage basins polygons: how this information is transmitted and how it propagates downstream. There is a delay between when information is updated by the producer and when these changes are integrated into downstream applications. As a result, old polygons remain in current versions of LSH datasets like HYSETS and Caravan. The Camel Farrier framework summarizes these changes and their potential impacts.

See the [Broken Telephone case study](summary_pages/broken_telephone_casestudy.md) for a detailed analysis of how polygon versioning gaps propagate through derived datasets.

## Opportunities for Improvement

Catchment delineation is challenging when basin size decreases relative to DEM resolution, and in areas of low relief. These cases represent opportunities for collaborative improvement through:

1. High-resolution DEM delineation
2. Field validation
3. Cross-dataset and delineation methodology comparison
4. Community contributions based on local knowledge and experience

See [Contributing](CONTRIBUTING.md) for guidelines on proposing polygon improvements.

## Contents

Station catchment summary pages provide catchment polygons (GeoJSON), metadata, rating curves, field visit records, and revision history. The validation framework includes automated tests for data completeness, temporal continuity, and geometric validity. Version control workflows use Git-based tracking with semantic versioning and metadata schemas. Interactive visualizations show polygon evolution and data availability.

All data provided in open formats (GeoJSON, CSV, JSON).

## Theme

The theme of this book is adapted from the [Tufte CSS](https://github.com/edwardtufte/tufte-css).

## References

```{bibliography}
:style: unsrt
:filter: docname in docnames
```
