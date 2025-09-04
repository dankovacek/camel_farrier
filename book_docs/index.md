
# Introduction

Version Control for Hydrometric Data Management.

## Abstract

Catchment attributes and meteorological forcings of streamflow monitored basins are widely used in hydrological modelling. Recent developments in standardized data processing pipelines for extracting catchment information have significantly improved the consistency and quality of hydrological model inputs. Harmonization of input datasets has made research more comparable, and has enabled the merging of regional and continental large sample hydrology (LSH) datasets. The LSH dataset development workflow requires accurate catchment polygons to define the upstream contributing area for capturing time series meteorological inputs, and to define catchment attributes associated with the hydrological response from gridded geospatial input data.  The delineation of catchments is not typically treated in LSH datasets since the delination of these is typically left to the governing authority responsible for streamflow monitoring.  Catchment boundaries represent a source of uncertainty in large sample hydrology datasets, and they represent an opportunity to further improve the quality of LSH datasets.  Neural network based modelling specifically benefits from large, diverse samples of catchments, and addressing uncertainty in catchment delineation could help recover some monitored catchments currently excluded on the basis of uncertainty in the catchment delineation.

In this paper we introduce Camel Farrier, a conceptual quality-control framework for streamflow monitoring data informed by standard practice from software development, including version control, bug reporting, community discussion, pull requests, automated testing, and versioning.  Using the HYDAT dataset as a case study, we demonstrate how similar practices could be adopted by governing agencies responsible for streamflow monitoring and applied in practice to improve the quality, consistency, and transparency of streamflow monitoring data.

Why doesn't each streamflow monitoring station have its own page with complete diagnostic information, rating curves, etc.?

## Introduction

Recent studies show that machine learning approaches, in particular Long Short-Term Memory networks (LSTMS), are competitive with state of the art process-based models in daily rainfall-runoff modelling. Both approaches use large samples of monitored catchments for parameter calibration and model training. Regionalization of physical-conceptual rainfall-runoff model parameters and training neural network models for streamflow prediction in ungauged basins requires a large sample hydrology dataset.  Regardless of the approach, the quality of input data derived from streamflow monitoring is critical to predictive performance.  The data describing each catchment come from various sources, including manual and automatic measurements of water level and volumetric flow, geospatial data products describing terrain, land cover, soil, and meteorological time series.

## Gap Statement

The availability of high-quality, well-documented datasets is crucial for advancing research and improving water resource management. However, many datasets remain isolated within specific agencies or institutions, limiting their accessibility and usability for the broader scientific community.  The open publication of national-scale monitoring network data is a relatively new advancement, but there remains considerable opportunity to improve the documentation around the provenance of streamflow data, and related information about the catchment and its hydrological characteristics.

The many non-government practitioners whose use of streamflow monitoring data affects water resources decisions on a day-to-day basis, in particular under-resourced organizations, small communities, etc.

Sophisticated software exists for management and analysis of water resources data: Aquarius is a software platform designed to support the management and analysis of environmental data, including streamflow monitoring data. It provides tools for data visualization, management, and quality control for practitioners in the field of hydrology.  It is widely used by agencies responsible for national monitoring networks, but it is a proprietary software, which has limitations.  The Camel Farrier framework is not presented as a replacement to Aquarius but rather as a complementary approach or an in interface that leverages existing open source software to improve the quality of streamflow monitoring data for the greater public.  Aquarius has a well-documented application programming interface (API) that is well suited to automating large-scale data processing tasks, in particular for rolling out updates, which represents another significant opportunity for improvement.

The Canadian National Water Data Archive (HYDAT) is a database that contains streamflow monitoring information for all of Canada.  HYDAT is updated quarterly, and at present it is published as a link on a government website.  The relational database format is an efficient mode of storing and transmitting the (body) of water resource data, but it misses important context and metadata.  Catchment polygons are provided separately, and these have recently undergone extensive quality review, however no documentation of the DEM, the data pre-processing, any subjective modifications that occurred in their processing.


## Large Sample Datasets

Do et al. (2018) trace the evolution of large-sample hydrology (LSH) datasets from early collections, like the Global Runoff Database and MOPEX, which provided extensive streamflow and hydrometeorological records, to the incorporation of geospatial attributes in GAGES-II. These precursor datasets evolved into CAMELS, which combined both data types for numerous US catchments, later expanding regionally with versions from Chile, Brazil, Australia, and Great Britain, and across Europe. The HYSETS dataset covered North America and Mexico, and the recent Caravan dataset unified these diverse resources into a standardized, global framework for hydrological modeling.

A challenge common to these datasets is the exclusion of small catchments due to uncertainties in catchment delineation, underscoring the need for improved, standardized processes at the first steps of catchment representation.  Small catchments represent a significant component of streamflow monitoring data, and their exclusion is a loss to hydrological research.

:::{bokeh-plot}
import sys
sys.path.insert(0, "/home/danbot/Documents/code/25/camel_farrier/")
from bokeh.io import show
from supporting_figure_functions import plot_catchment_area_distributions
show(plot_catchment_area_distributions())
:::

(Caravan / Google Earth Engine) represents a significant contribution in the standardization of the workflow used to extract attributes and time series meteorological forcings corresponding to monitored catchments from a growing variety of geospatial data sources.

The basis of extracting static attributes and forcings is the catchment polygon. Polygons in North America included in the Caravan dataset come from from the Camels dataset (contiguous USA) and Hysets dataset (North America and Mexico). Hysets polygons were obtained from governing bodies (WSC, USGS, Conagua), and methods used to generate these polygons are not documented, and catchment polygons are unique to the digital elevation source and to the methodological choices used in delineating catchment polygons.

Governing bodies like the USGS and WSC do not guarantee the accuracy of catchment polygons, and this information is periodically updated. Both the catchment polygons and the datasets used to describe attributes and climate forcings are subject to change in ways that materially affect the quality of the input data used to train rainfall-runoff models that are used to support water resources decisions.

Opportunities for Addressing Uncertainty in Catchment Polygons
The quality of large sample hydrology datasets could benefit from standard practice procedures in software development version control and publication in open source repositories using standardized testing and documentation practices. This would allow for the transparent and documented history of changes to catchment polygons, and a platform for sharing knowledge about uncertainties in catchment delineation.

LSH datasets have excluded (or flagged) small catchments on the basis of uncertainty in catchment delineation and as well on the basis of the daily observation frequency being insufficient to capture the dynamics of the basin response. Higher frequency observations are already published by many governing agencies (WSC, USGS), and streamflow forecasting research is already using hourly data. The inclusion of small catchments in LSH datasets is therefore necessary to improve the quality and diversity of training data for model calibration.

The smallest catchment in the Caravan dataset is X km2, and the smallest dataset in the HYSETS dataset is X km2, though roughly 1/3 of the catchments in the datset are represented by a square centred at the station location.

Delineation of small catchments is uncertain in the case of discontinued monitoring stations where recorded geographic coordinates are approximate. These historical records could add valuable information for model training.

The water survey of Canada published updates to the streamflow monitoring network catchment polygons in July 2022 and September 2024. The polygons in this set represent significant changes in X of the catchments included in the HYSETS dataset.

Catchment polygons are derived by many groups, and there does not exist a platform for sharing knowledge about uncertainties in catchment delineation. We propose adopting version control and crowd-sourced quality control to catchment polygons. This will allow for a transparent and documented history of changes to catchment polygons, and a platform for sharing knowledge about uncertainties in catchment delineation.

These polygons are often created by hand, and are subject to errors and inconsistencies. This project aims to crowd-source the quality control of these polygons, and to provide a version-controlled history of changes to the polygons.


## Advantages of Open Source Development Practices:

* ability to track changes to catchment polygons and see the downstream impact on derived attributes
* platform for sharing knowledge about uncertainties in catchment delineation
* standardization of catchment delineation methods
* broader expert knowledge can be applied to review process
* explicit documentation of decisions made regarding catchment delineation, standardized testing, and review process
* automated testing of revisions to identify significant changes with respect to input data, and trigger updates to LSH datasets
* versioning of polygon datasets can be linked to versioning of large sample hydrology datasets


## Quantifying the effect of changes to catchment polygons on input data:
* how many catchments were affected?
* what was the change in area (magnitude)?
* what was the change in overlapping area (Jaccard index)?
* what pct change in area reflects a significant change in input data quality? – depends on magnitude of change but also variability of spatial data within the catchment


## Approach

The objective is to take the data collected according to the Manual of British Columbia Hydrometric Standards @cite{resources2018manual} and organize it in a systematic way that enables greater transparency in the revision process, making use of powerful tools for automated tracking revision histories, for highlighting changes to support efficient review processes, and uses existing platforms to support contributions from expert practitioners outside of official organizations.

* host streamflow monitoring data in a public, open-source repository
* each monitoring station has a unique identifier (e.g. `Official_ID` -- add note about USGS non-unique zero-padded numbering system)
* each unique identifier has a dedicated folder that contains all associated hydrological information
  * site metadata (installation date, geographic coordinates, Name, geographic references, benchmark survey, control section surveys)
  * timeseries water level observations
    * sensor metadata
  * field observations
    * field work metadata (field notes)
    * volumetric flow measurements
      * measurement metadata
      * instrument type
      * uncertainty estimate
    * independent water level validation (survey)
  * rating curves with valid dates

* Github has built in features to support community contributions
  * discussions and bug reports are openly accessible, fostering community engagement, transparency, and providing concrete examples of best practices
  * community members can open a discussion about some aspect of the data collected in relation to a streamflow monitored catchment
  * authorized repository manager follows up to determine whether a new issue should be opened
  * issues are opened using a template to systematically describe the situation and outline suggested changes
  * issues can be assigned to individuals within the organization, and they are open to outside contributors
  * anyone can work on a solution to any issue, and a dedicated discussion thread exists to facilitate collaboration
  * an automated test suite is run on the proposed changes to ensure minimum standards are met in terms of data quality and completeness
  * acceptance / integration of changes ultimately remains with the repository manager -- the agency governing data collection (WSC/USGS)
  * all changes are documented in the repository's history, providing a clear audit trail
  * acceptance and integration can trigger automated workflows (e.g. updating documentation, revising database files)
  * all revisions are linked to specific issues or discussions, providing context for the changes made
  * the dataset can be "checked out" at any specific point in its history, allowing users to easily access previous versions of the data



* guidelines for testing
  * issue reports can trigger a review process
  * include a code to derive the catchment polygon (e.g. to highlight disagreement between data sources)
  * include a polygon manually adjusted based on other information (expert knowledge, historical records, additional survey, etc.)
  * review process can be partially automated
  * a suite of tests can be run on the catchment polygon to identify the significance of changes with respect to input data -
  * the review process results in either: 1) no change, or 2) a pull request:
    *pull request is approved by the community
    * pull request is merged into the main branch
    * pull request triggers a new version of the catchment polygon
    * pull request triggers a new version of the input data


## References
1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020.

## Search Results

<div class="search-container">
    <input type="text" id="stationSearch" placeholder="Search by Official ID, name, or source..." onkeyup="filterStations()">
    <div id="searchResults" class="search-results"></div>
</div>


<script>
// Station data for search
const stations = [
  {id: "05JA006", name: "SIX MILE CREEK NEAR GLENTWORTH", folder: "/station_pages/stations/05JA006.html"},
  {id: "02EC009", name: "HOLLAND RIVER EAST BRANCH AT HOLLAND LANDING", folder: "/station_pages/stations/02EC009.html"},
  {id: "08NM240", name: "TWO FORTY CREEK NEAR PENTICTON", folder: "/station_pages/stations/08NM240.html"},
  {id: "10KB001", name: "CARCAJOU RIVER BELOW IMPERIAL RIVER", folder: "/station_pages/stations/10KB001.html"},
  {id: "08HF013", name: "SIMPSON CREEK NEAR KOPRINO HARBOUR", folder: "/station_pages/stations/08HF013.html"},
];</script>