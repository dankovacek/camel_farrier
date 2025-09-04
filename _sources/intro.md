# Camel Farrier - Version control for open hydrological data quality management

:::{bokeh-plot}
import sys
sys.path.insert(0, "/home/danbot/Documents/code/25/camel_farrier/")
from bokeh.io import show
from supporting_figure_functions import plot_station_map
show(plot_station_map())
:::

## Introduction

This repository is intended to serve as a demonstration of the use of version control for open hydrological data management.

Each catchment folder contains geometric data (GeoJSON), attribute data (CSV), and a plot of the catchment polygon.

Version control of catchment polygons in an open-source repository is multi-purpose:
1.  **Transparency**: All changes to catchment polygons are tracked and can be reviewed.
2.  **Reproducibility**: The catchment polygons can be linked to specific versions of the attribute data.
3.  **Collaboration**: Multiple contributors can suggest changes to catchment polygons by sharing specific knowledge and evidence.

Git for version control is well suited to the management of catchment polygons because it is designed to track changes to many kinds of files,
and Github is particularly useful for its capacity for collaboration and automation.

## Search Hydrometric Stations


<div class="search-container">
    <input type="text" id="stationSearch" placeholder="Search by Official ID, name, or source..." onkeyup="filterStations()">
    <div id="searchResults" class="search-results"></div>
</div>


<script>
// Station data for search
const stations = [
  {id: "05JA005", name: "WOOD RIVER NEAR MCCORD", folder: "station_pages/stations/05JA005.html"},
  {id: "07OA001", name: "SOUSA CREEK NEAR HIGH LEVEL", folder: "station_pages/stations/07OA001.html"},
  {id: "01DR001", name: "SOUTH RIVER AT ST. ANDREWS", folder: "station_pages/stations/01DR001.html"},
  {id: "05DF006", name: "WHITEMUD CREEK NEAR ELLERSLIE", folder: "station_pages/stations/05DF006.html"},
  {id: "05JA006", name: "SIX MILE CREEK NEAR GLENTWORTH", folder: "station_pages/stations/05JA006.html"},
  {id: "08NE074", name: "SALMO RIVER NEAR SALMO", folder: "station_pages/stations/08NE074.html"},
  {id: "02EC009", name: "HOLLAND RIVER EAST BRANCH AT HOLLAND LANDING", folder: "station_pages/stations/02EC009.html"},
  {id: "08NM240", name: "TWO FORTY CREEK NEAR PENTICTON", folder: "station_pages/stations/08NM240.html"},
  {id: "10KB001", name: "CARCAJOU RIVER BELOW IMPERIAL RIVER", folder: "station_pages/stations/10KB001.html"},
  {id: "08HF013", name: "SIMPSON CREEK NEAR KOPRINO HARBOUR", folder: "station_pages/stations/08HF013.html"},
  {id: "02CG003", name: "BLUE JAY CREEK NEAR TEHKUMMAH", folder: "station_pages/stations/02CG003.html"},
  {id: "06DA002", name: "COCHRANE RIVER NEAR BROCHET", folder: "station_pages/stations/06DA002.html"},
  {id: "08AB001", name: "ALSEK RIVER ABOVE BATES RIVER", folder: "station_pages/stations/08AB001.html"},
  {id: "02FB014", name: "BIGHEAD RIVER NEAR STRATHAVON", folder: "station_pages/stations/02FB014.html"},
  {id: "05GA008", name: "SOUNDING CREEK NEAR OYEN", folder: "station_pages/stations/05GA008.html"},
  {id: "08NN019", name: "TRAPPING CREEK NEAR THE MOUTH", folder: "station_pages/stations/08NN019.html"},
  {id: "10AA005", name: "BIG CREEK AT KM 1084.8 ALASKA HIGHWAY", folder: "station_pages/stations/10AA005.html"},
  {id: "06BD001", name: "HAULTAIN RIVER ABOVE NORBERT RIVER", folder: "station_pages/stations/06BD001.html"},
  {id: "02YE001", name: "GREAVETT BROOK ABOVE PORTLAND CREEK POND", folder: "station_pages/stations/02YE001.html"},
  {id: "05ME009", name: "SCISSOR CREEK NEAR MCAULEY", folder: "station_pages/stations/05ME009.html"},
];</script>

## References

1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020.

2. Resources Information Standards Committee (RISC). 2018. Manual of British Columbia Hydrometric Standards, Version 2.0, December 2018. Knowledge Management Branch, B.C. Ministry of Environment and Climate Change Strategy, Victoria, B.C. [https://www2.gov.bc.ca/assets/gov/environment/natural-resource-stewardship/nr-laws-policy/risc/man_bc_hydrometric_stand_v2.pdf](https://www2.gov.bc.ca/assets/gov/environment/natural-resource-stewardship/nr-laws-policy/risc/man_bc_hydrometric_stand_v2.pdf) Last accessed 15 August 2025.

3. Water Survey of Canada, Environment and Climate Change Canada (2022). qSOP-NA052-01-2022
Water Survey of Canada Hydrometric Manual, Data Computations: Stage Correction. [https://publications.gc.ca/collections/collection_2022/eccc/En37-557-2022-eng.pdf](https://publications.gc.ca/collections/collection_2022/eccc/En37-557-2022-eng.pdf). Last accessed 15 August 2025.

4. Water Survey of Canada, Environment and Climate Change Canada (2016). qSOP-NA049-01-2016
Water Survey of Canada Hydrometric Manual, Data Computations: Stage-Discharge Model Development and Maintenance. [https://publications.gc.ca/collections/collection_2021/eccc/en37/En37-464-2016-eng.pdf](https://publications.gc.ca/collections/collection_2021/eccc/en37/En37-464-2016-eng.pdf). Last accessed 15 August 2025.
