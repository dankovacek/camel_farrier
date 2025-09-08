
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
  {id: "08HB032", name: "MILLSTONE RIVER AT NANAIMO", folder: "station_pages/stations/08HB032.html"},
  {id: "05JA005", name: "WOOD RIVER NEAR MCCORD", folder: "station_pages/stations/05JA005.html"},
  {id: "02HC047", name: "HUMBER RIVER NEAR PALGRAVE", folder: "station_pages/stations/02HC047.html"},
  {id: "10CB001", name: "SIKANNI CHIEF RIVER NEAR FORT NELSON", folder: "station_pages/stations/10CB001.html"},
  {id: "07OA001", name: "SOUSA CREEK NEAR HIGH LEVEL", folder: "station_pages/stations/07OA001.html"},
  {id: "05JM010", name: "EKAPO CREEK NEAR MARIEVAL", folder: "station_pages/stations/05JM010.html"},
  {id: "06AB002", name: "WOLF RIVER AT OUTLET OF WOLF LAKE", folder: "station_pages/stations/06AB002.html"},
  {id: "01FB003", name: "SOUTHWEST MARGAREE RIVER NEAR UPPER MARGAREE", folder: "station_pages/stations/01FB003.html"},
  {id: "01DR001", name: "SOUTH RIVER AT ST. ANDREWS", folder: "station_pages/stations/01DR001.html"},
  {id: "02EC021", name: "UXBRIDGE BROOK NEAR UXBRIDGE", folder: "station_pages/stations/02EC021.html"},
  {id: "08DB001", name: "NASS RIVER ABOVE SHUMAL CREEK", folder: "station_pages/stations/08DB001.html"},
  {id: "08EE012", name: "SIMPSON CREEK AT THE MOUTH", folder: "station_pages/stations/08EE012.html"},
  {id: "07EE007", name: "PARSNIP RIVER ABOVE MISINCHINKA RIVER", folder: "station_pages/stations/07EE007.html"},
  {id: "08FE003", name: "KEMANO RIVER ABOVE POWERHOUSE TAILRACE", folder: "station_pages/stations/08FE003.html"},
  {id: "07HF002", name: "KEG RIVER AT HIGHWAY NO. 35", folder: "station_pages/stations/07HF002.html"},
  {id: "02GE008", name: "OXBOW CREEK NEAR KILWORTH", folder: "station_pages/stations/02GE008.html"},
  {id: "05CE018", name: "THREEHILLS CREEK BELOW RAY CREEK", folder: "station_pages/stations/05CE018.html"},
  {id: "11AC025", name: "DENNIEL CREEK NEAR VAL MARIE", folder: "station_pages/stations/11AC025.html"},
  {id: "05CE012", name: "GHOSTPINE CREEK NEAR HUXLEY", folder: "station_pages/stations/05CE012.html"},
  {id: "02YR003", name: "INDIAN BAY BROOK NEAR NORTHWEST ARM", folder: "station_pages/stations/02YR003.html"},
  {id: "02YO006", name: "PETERS RIVER NEAR BOTWOOD", folder: "station_pages/stations/02YO006.html"},
  {id: "05DF006", name: "WHITEMUD CREEK NEAR ELLERSLIE", folder: "station_pages/stations/05DF006.html"},
  {id: "05CC011", name: "WASKASOO CREEK AT RED DEER", folder: "station_pages/stations/05CC011.html"},
  {id: "07JF003", name: "PONTON RIVER ABOVE BOYER RIVER", folder: "station_pages/stations/07JF003.html"},
  {id: "07GG001", name: "WASKAHIGAN RIVER NEAR THE MOUTH", folder: "station_pages/stations/07GG001.html"},
  {id: "10UH001", name: "SYLVIA GRINNELL RIVER NEAR IQALUIT", folder: "station_pages/stations/10UH001.html"},
  {id: "08NL024", name: "TULAMEEN RIVER AT PRINCETON", folder: "station_pages/stations/08NL024.html"},
  {id: "08NH115", name: "SULLIVAN CREEK NEAR CANYON", folder: "station_pages/stations/08NH115.html"},
  {id: "08EF001", name: "SKEENA RIVER AT USK", folder: "station_pages/stations/08EF001.html"},
  {id: "02HM004", name: "WILTON CREEK NEAR NAPANEE", folder: "station_pages/stations/02HM004.html"},
  {id: "08LF033", name: "THOMPSON RIVER NEAR SAVONA", folder: "station_pages/stations/08LF033.html"},
  {id: "09BC001", name: "PELLY RIVER AT PELLY CROSSING", folder: "station_pages/stations/09BC001.html"},
  {id: "03NE012", name: "TRIBUTARY TO REID BROOK", folder: "station_pages/stations/03NE012.html"},
  {id: "08KH019", name: "MOFFAT CREEK NEAR HORSEFLY", folder: "station_pages/stations/08KH019.html"},
  {id: "07RD001", name: "LOCKHART RIVER AT OUTLET OF ARTILLERY LAKE", folder: "station_pages/stations/07RD001.html"},
  {id: "02ED017", name: "HOGG CREEK NEAR VICTORIA HARBOUR", folder: "station_pages/stations/02ED017.html"},
  {id: "01EE005", name: "MOOSE PIT BROOK AT TUPPER LAKE", folder: "station_pages/stations/01EE005.html"},
  {id: "10UH012", name: "INFLOW TO LAKE GERALDINE NEAR IQALUIT", folder: "station_pages/stations/10UH012.html"},
  {id: "05MG001", name: "ARROW RIVER NEAR ARROW RIVER", folder: "station_pages/stations/05MG001.html"},
  {id: "07FA006", name: "HALFWAY RIVER NEAR FARRELL CREEK", folder: "station_pages/stations/07FA006.html"},
  {id: "05CA002", name: "JAMES RIVER NEAR SUNDRE", folder: "station_pages/stations/05CA002.html"},
  {id: "02YO012", name: "SOUTHWEST BROOK AT LEWISPORTE", folder: "station_pages/stations/02YO012.html"},
  {id: "08LC040", name: "VANCE CREEK BELOW DEAFIES CREEK", folder: "station_pages/stations/08LC040.html"},
  {id: "08NG077", name: "ST. MARY RIVER BELOW MORRIS CREEK", folder: "station_pages/stations/08NG077.html"},
  {id: "03NE001", name: "REID BROOK AT OUTLET OF REID POND", folder: "station_pages/stations/03NE001.html"},
  {id: "02CE007", name: "MINISTIC CREEK ABOVE AGNEW LAKE", folder: "station_pages/stations/02CE007.html"},
  {id: "07BK005", name: "SAULTEAUX RIVER NEAR SPURFIELD", folder: "station_pages/stations/07BK005.html"},
  {id: "08LB020", name: "BARRIERE RIVER AT THE MOUTH", folder: "station_pages/stations/08LB020.html"},
  {id: "05CE002", name: "KNEEHILLS CREEK NEAR DRUMHELLER", folder: "station_pages/stations/05CE002.html"},
  {id: "05JA006", name: "SIX MILE CREEK NEAR GLENTWORTH", folder: "station_pages/stations/05JA006.html"},
  {id: "04KA001", name: "KWETABOHIGAN RIVER NEAR THE MOUTH", folder: "station_pages/stations/04KA001.html"},
  {id: "08NE074", name: "SALMO RIVER NEAR SALMO", folder: "station_pages/stations/08NE074.html"},
  {id: "01BU002", name: "PETITCODIAC RIVER NEAR PETITCODIAC", folder: "station_pages/stations/01BU002.html"},
  {id: "02YL008", name: "UPPER HUMBER RIVER ABOVE BLACK BROOK", folder: "station_pages/stations/02YL008.html"},
  {id: "02FE008", name: "MIDDLE MAITLAND RIVER NEAR BELGRAVE", folder: "station_pages/stations/02FE008.html"},
  {id: "05OA007", name: "BADGER CREEK NEAR CARTWRIGHT", folder: "station_pages/stations/05OA007.html"},
  {id: "02GC011", name: "BIG CREEK NEAR KELVIN", folder: "station_pages/stations/02GC011.html"},
  {id: "04EA001", name: "EKWAN RIVER BELOW NORTH WASHAGAMI RIVER", folder: "station_pages/stations/04EA001.html"},
  {id: "05AB013", name: "BEAVER CREEK NEAR BROCKET", folder: "station_pages/stations/05AB013.html"},
  {id: "08HB074", name: "CRUICKSHANK RIVER NEAR THE MOUTH", folder: "station_pages/stations/08HB074.html"},
  {id: "05MF024", name: "LITTLE SASKATCHEWAN RIVER NEAR HOROD", folder: "station_pages/stations/05MF024.html"},
  {id: "07JA003", name: "WILLOW RIVER NEAR WABASCA", folder: "station_pages/stations/07JA003.html"},
  {id: "02ZD002", name: "GREY RIVER NEAR GREY RIVER", folder: "station_pages/stations/02ZD002.html"},
  {id: "02EC009", name: "HOLLAND RIVER EAST BRANCH AT HOLLAND LANDING", folder: "station_pages/stations/02EC009.html"},
  {id: "08NM240", name: "TWO FORTY CREEK NEAR PENTICTON", folder: "station_pages/stations/08NM240.html"},
  {id: "04CA002", name: "SEVERN RIVER AT OUTLET OF MUSKRAT DAM LAKE", folder: "station_pages/stations/04CA002.html"},
  {id: "08NM134", name: "CAMP CREEK AT MOUTH NEAR THIRSK", folder: "station_pages/stations/08NM134.html"},
  {id: "05QE008", name: "CEDAR RIVER BELOW WABASKANG LAKE", folder: "station_pages/stations/05QE008.html"},
  {id: "06FC001", name: "LITTLE CHURCHILL RIVER ABOVE RECLUSE LAKE", folder: "station_pages/stations/06FC001.html"},
  {id: "10KB001", name: "CARCAJOU RIVER BELOW IMPERIAL RIVER", folder: "station_pages/stations/10KB001.html"},
  {id: "08NK002", name: "ELK RIVER AT FERNIE", folder: "station_pages/stations/08NK002.html"},
  {id: "01FJ002", name: "MACASKILLS BROOK NEAR BIRCH GROVE", folder: "station_pages/stations/01FJ002.html"},
  {id: "02GG006", name: "BEAR CREEK NEAR PETROLIA", folder: "station_pages/stations/02GG006.html"},
  {id: "07FD006", name: "SADDLE RIVER NEAR WOKING", folder: "station_pages/stations/07FD006.html"},
  {id: "08CE001", name: "STIKINE RIVER AT TELEGRAPH CREEK", folder: "station_pages/stations/08CE001.html"},
  {id: "10EB001", name: "SOUTH NAHANNI RIVER ABOVE VIRGINIA FALLS", folder: "station_pages/stations/10EB001.html"},
  {id: "02GC002", name: "KETTLE CREEK AT ST. THOMAS", folder: "station_pages/stations/02GC002.html"},
  {id: "08LG016", name: "PENNASK CREEK NEAR QUILCHENA", folder: "station_pages/stations/08LG016.html"},
  {id: "05PC023", name: "PINEWOOD RIVER AT HIGHWAY NO. 617", folder: "station_pages/stations/05PC023.html"},
  {id: "06BB003", name: "CHURCHILL RIVER NEAR PATUANAK", folder: "station_pages/stations/06BB003.html"},
  {id: "05OC019", name: "BUFFALO CREEK NEAR ROSENFELD", folder: "station_pages/stations/05OC019.html"},
  {id: "08MF065", name: "NAHATLATCH RIVER BELOW TACHEWANA CREEK", folder: "station_pages/stations/08MF065.html"},
  {id: "05LJ007", name: "TURTLE RIVER NEAR LAURIER", folder: "station_pages/stations/05LJ007.html"},
  {id: "08NJ061", name: "REDFISH CREEK NEAR HARROP", folder: "station_pages/stations/08NJ061.html"},
  {id: "08KE016", name: "BAKER CREEK AT QUESNEL", folder: "station_pages/stations/08KE016.html"},
  {id: "08HF013", name: "SIMPSON CREEK NEAR KOPRINO HARBOUR", folder: "station_pages/stations/08HF013.html"},
  {id: "03NE011", name: "REID BROOK BELOW TRIBUTARY", folder: "station_pages/stations/03NE011.html"},
  {id: "09DB001", name: "BEAVER RIVER BELOW MATSON CREEK", folder: "station_pages/stations/09DB001.html"},
  {id: "07EF004", name: "CARBON CREEK NEAR THE MOUTH", folder: "station_pages/stations/07EF004.html"},
  {id: "08JD006", name: "DRIFTWOOD RIVER ABOVE KASTBERG CREEK", folder: "station_pages/stations/08JD006.html"},
  {id: "08ME027", name: "HURLEY RIVER BELOW LONE GOAT CREEK", folder: "station_pages/stations/08ME027.html"},
  {id: "04LE002", name: "NEMEGOSENDA RIVER NEAR CHAPLEAU", folder: "station_pages/stations/04LE002.html"},
  {id: "08KH031", name: "HORSEFLY RIVER ABOVE QUESNEL LAKE", folder: "station_pages/stations/08KH031.html"},
  {id: "05FC007", name: "YOUNG CREEK NEAR CASTOR", folder: "station_pages/stations/05FC007.html"},
  {id: "07HA005", name: "WHITEMUD RIVER NEAR DIXONVILLE", folder: "station_pages/stations/07HA005.html"},
  {id: "02EA010", name: "NORTH MAGNETAWAN RIVER ABOVE PICKEREL LAKE", folder: "station_pages/stations/02EA010.html"},
  {id: "08HA010", name: "SAN JUAN RIVER NEAR PORT RENFREW", folder: "station_pages/stations/08HA010.html"},
  {id: "02ED007", name: "COLDWATER RIVER AT COLDWATER", folder: "station_pages/stations/02ED007.html"},
  {id: "07EE010", name: "PACK RIVER AT OUTLET OF MCLEOD LAKE", folder: "station_pages/stations/07EE010.html"},
  {id: "02HC049", name: "DUFFINS CREEK AT AJAX", folder: "station_pages/stations/02HC049.html"},
  {id: "02CG003", name: "BLUE JAY CREEK NEAR TEHKUMMAH", folder: "station_pages/stations/02CG003.html"},
  {id: "03NE002", name: "CAMP POND BROOK BELOW CAMP POND", folder: "station_pages/stations/03NE002.html"},
  {id: "02ZK004", name: "LITTLE SALMONIER RIVER NEAR NORTH HARBOUR", folder: "station_pages/stations/02ZK004.html"},
  {id: "02YN002", name: "LLOYDS RIVER BELOW KING GEORGE IV LAKE", folder: "station_pages/stations/02YN002.html"},
  {id: "04LA006", name: "MOLLIE RIVER AT HIGHWAY NO. 144", folder: "station_pages/stations/04LA006.html"},
  {id: "08NL071", name: "TULAMEEN RIVER BELOW VUICH CREEK", folder: "station_pages/stations/08NL071.html"},
  {id: "08FF002", name: "HIRSCH CREEK NEAR THE MOUTH", folder: "station_pages/stations/08FF002.html"},
  {id: "10CD004", name: "BOUGIE CREEK AT KILOMETRE 368 ALASKA HIGHWAY", folder: "station_pages/stations/10CD004.html"},
  {id: "08GA075", name: "MAMQUAM RIVER ABOVE RING CREEK", folder: "station_pages/stations/08GA075.html"},
  {id: "05NF002", name: "ANTLER RIVER NEAR MELITA", folder: "station_pages/stations/05NF002.html"},
  {id: "04AB001", name: "HAYES RIVER BELOW GODS RIVER", folder: "station_pages/stations/04AB001.html"},
  {id: "02BF002", name: "GOULAIS RIVER NEAR SEARCHMONT", folder: "station_pages/stations/02BF002.html"},
  {id: "07EA005", name: "FINLAY RIVER ABOVE AKIE RIVER", folder: "station_pages/stations/07EA005.html"},
  {id: "06DA002", name: "COCHRANE RIVER NEAR BROCHET", folder: "station_pages/stations/06DA002.html"},
  {id: "02FE014", name: "BLYTH BROOK BELOW BLYTH", folder: "station_pages/stations/02FE014.html"},
  {id: "07BF905", name: "SOUTH HEART RIVER NEAR BIG PRAIRIE SETTLEMENT", folder: "station_pages/stations/07BF905.html"},
  {id: "07FD009", name: "CLEAR RIVER NEAR BEAR CANYON", folder: "station_pages/stations/07FD009.html"},
  {id: "01AL004", name: "NARROWS MOUNTAIN BROOK NEAR NARROWS MOUNTAIN", folder: "station_pages/stations/01AL004.html"},
  {id: "01FG001", name: "RIVER DENYS AT BIG MARSH", folder: "station_pages/stations/01FG001.html"},
  {id: "07JD002", name: "WABASCA RIVER AT HIGHWAY NO. 88", folder: "station_pages/stations/07JD002.html"},
  {id: "05AB005", name: "TROUT CREEK NEAR GRANUM", folder: "station_pages/stations/05AB005.html"},
  {id: "07DD002", name: "RICHARDSON RIVER NEAR THE MOUTH", folder: "station_pages/stations/07DD002.html"},
  {id: "10ED007", name: "BLACKSTONE RIVER AT HIGHWAY NO. 7", folder: "station_pages/stations/10ED007.html"},
  {id: "02ZL005", name: "BIG BROOK AT LEAD COVE", folder: "station_pages/stations/02ZL005.html"},
  {id: "05OE015", name: "JOUBERT CREEK NEAR PANSY", folder: "station_pages/stations/05OE015.html"},
  {id: "02BC006", name: "PUKASKWA RIVER BELOW FOX RIVER", folder: "station_pages/stations/02BC006.html"},
  {id: "08EE013", name: "BUCK CREEK AT THE MOUTH", folder: "station_pages/stations/08EE013.html"},
  {id: "05EE009", name: "VERMILION RIVER AT VEGREVILLE", folder: "station_pages/stations/05EE009.html"},
  {id: "10RC002", name: "MEADOWBANK RIVER ABOVE NANAU LAKE", folder: "station_pages/stations/10RC002.html"},
  {id: "04GB005", name: "BRIGHTSAND RIVER AT MOBERLEY", folder: "station_pages/stations/04GB005.html"},
  {id: "05RD008", name: "PIGEON RIVER AT OUTLET OF ROUND LAKE", folder: "station_pages/stations/05RD008.html"},
  {id: "02HB031", name: "CREDIT RIVER ERIN BRANCH AT HILLSBURGH", folder: "station_pages/stations/02HB031.html"},
  {id: "05QA004", name: "STURGEON RIVER AT MCDOUGALL MILLS", folder: "station_pages/stations/05QA004.html"},
  {id: "08AB001", name: "ALSEK RIVER ABOVE BATES RIVER", folder: "station_pages/stations/08AB001.html"},
  {id: "02JC008", name: "BLANCHE RIVER ABOVE ENGLEHART", folder: "station_pages/stations/02JC008.html"},
  {id: "08NH132", name: "KEEN CREEK BELOW KYAWATS CREEK", folder: "station_pages/stations/08NH132.html"},
  {id: "05NB033", name: "MOSELEY CREEK NEAR HALBRITE", folder: "station_pages/stations/05NB033.html"},
  {id: "02HC009", name: "EAST HUMBER RIVER NEAR PINE GROVE", folder: "station_pages/stations/02HC009.html"},
  {id: "10LC003", name: "RENGLENG RIVER BELOW HIGHWAY NO. 8 (DEMPSTER HIGHWAY)", folder: "station_pages/stations/10LC003.html"},
  {id: "02HD013", name: "HARMONY CREEK AT OSHAWA", folder: "station_pages/stations/02HD013.html"},
  {id: "09AE006", name: "MORLEY RIVER AT KM 1251 ALASKA HIGHWAY", folder: "station_pages/stations/09AE006.html"},
  {id: "02HB022", name: "BRONTE CREEK AT CARLISLE", folder: "station_pages/stations/02HB022.html"},
  {id: "02HJ001", name: "JACKSON CREEK AT PETERBOROUGH", folder: "station_pages/stations/02HJ001.html"},
  {id: "02FB014", name: "BIGHEAD RIVER NEAR STRATHAVON", folder: "station_pages/stations/02FB014.html"},
  {id: "07FC003", name: "BLUEBERRY RIVER BELOW AITKEN CREEK", folder: "station_pages/stations/07FC003.html"},
  {id: "02CF011", name: "VERMILION RIVER NEAR VAL CARON", folder: "station_pages/stations/02CF011.html"},
  {id: "05AA033", name: "KETTLES CREEK AT PINCHER CREEK", folder: "station_pages/stations/05AA033.html"},
  {id: "05MG003", name: "GOPHER CREEK NEAR VIRDEN", folder: "station_pages/stations/05MG003.html"},
  {id: "07AG007", name: "MCLEOD RIVER NEAR ROSEVEAR", folder: "station_pages/stations/07AG007.html"},
  {id: "10HB005", name: "REDSTONE RIVER 63 KM ABOVE THE MOUTH", folder: "station_pages/stations/10HB005.html"},
  {id: "02HK016", name: "TROUT CREEK NEAR CAMPBELLFORD", folder: "station_pages/stations/02HK016.html"},
  {id: "03QC002", name: "ALEXIS RIVER NEAR PORT HOPE SIMPSON", folder: "station_pages/stations/03QC002.html"},
  {id: "08MH076", name: "KANAKA CREEK NEAR WEBSTER CORNERS", folder: "station_pages/stations/08MH076.html"},
  {id: "05LC004", name: "RED DEER RIVER NEAR THE MOUTH", folder: "station_pages/stations/05LC004.html"},
  {id: "05GA008", name: "SOUNDING CREEK NEAR OYEN", folder: "station_pages/stations/05GA008.html"},
  {id: "02YM004", name: "INDIAN BROOK DIVERSION ABOVE BIRCHY LAKE", folder: "station_pages/stations/02YM004.html"},
  {id: "02FE017", name: "LAKELET CREEK NEAR GORRIE", folder: "station_pages/stations/02FE017.html"},
  {id: "10LD004", name: "HARE INDIAN RIVER NEAR FORT GOOD HOPE", folder: "station_pages/stations/10LD004.html"},
  {id: "01DG003", name: "BEAVERBANK RIVER NEAR KINSAC", folder: "station_pages/stations/01DG003.html"},
  {id: "08KA013", name: "MORKILL RIVER BELOW HELLROARING CREEK", folder: "station_pages/stations/08KA013.html"},
  {id: "01FA001", name: "RIVER INHABITANTS AT GLENORA", folder: "station_pages/stations/01FA001.html"},
  {id: "08NN019", name: "TRAPPING CREEK NEAR THE MOUTH", folder: "station_pages/stations/08NN019.html"},
  {id: "10LB007", name: "TIEDA RIVER NEAR THE MOUTH", folder: "station_pages/stations/10LB007.html"},
  {id: "07DD001", name: "ATHABASCA RIVER AT EMBARRAS AIRPORT", folder: "station_pages/stations/07DD001.html"},
  {id: "10AC005", name: "COTTONWOOD RIVER ABOVE BASS CREEK", folder: "station_pages/stations/10AC005.html"},
  {id: "09EA004", name: "NORTH KLONDIKE RIVER NEAR THE MOUTH", folder: "station_pages/stations/09EA004.html"},
  {id: "07FB004", name: "DICKEBUSCH CREEK NEAR THE MOUTH", folder: "station_pages/stations/07FB004.html"},
  {id: "10ED009", name: "SCOTTY CREEK AT HIGHWAY NO. 7", folder: "station_pages/stations/10ED009.html"},
  {id: "05CE010", name: "RAY CREEK NEAR INNISFAIL", folder: "station_pages/stations/05CE010.html"},
  {id: "02EC002", name: "BLACK RIVER NEAR WASHAGO", folder: "station_pages/stations/02EC002.html"},
  {id: "01AJ003", name: "MEDUXNEKEAG RIVER NEAR BELLEVILLE", folder: "station_pages/stations/01AJ003.html"},
  {id: "05QE009", name: "STURGEON RIVER AT OUTLET OF SALVESEN LAKE", folder: "station_pages/stations/05QE009.html"},
  {id: "10AA005", name: "BIG CREEK AT KM 1084.8 ALASKA HIGHWAY", folder: "station_pages/stations/10AA005.html"},
  {id: "06BD001", name: "HAULTAIN RIVER ABOVE NORBERT RIVER", folder: "station_pages/stations/06BD001.html"},
  {id: "05CC013", name: "LASTHILL CREEK NEAR ECKVILLE", folder: "station_pages/stations/05CC013.html"},
  {id: "04FA002", name: "KAWINOGANS RIVER NEAR PICKLE CROW", folder: "station_pages/stations/04FA002.html"},
  {id: "02FE010", name: "BOYLE DRAIN NEAR ATWOOD", folder: "station_pages/stations/02FE010.html"},
  {id: "02ZM018", name: "VIRGINIA RIVER AT PLEASANTVILLE", folder: "station_pages/stations/02ZM018.html"},
  {id: "02HD009", name: "WILMOT CREEK NEAR NEWCASTLE", folder: "station_pages/stations/02HD009.html"},
  {id: "06OA007", name: "BROWN RIVER AT THE OUTLET OF BROWN LAKE", folder: "station_pages/stations/06OA007.html"},
  {id: "05ME010", name: "SILVER CREEK NEAR BINSCARTH", folder: "station_pages/stations/05ME010.html"},
  {id: "10RC001", name: "BACK RIVER ABOVE HERMANN RIVER", folder: "station_pages/stations/10RC001.html"},
  {id: "02GD019", name: "TROUT CREEK NEAR FAIRVIEW", folder: "station_pages/stations/02GD019.html"},
  {id: "02YN004", name: "STAR BROOK ABOVE STAR LAKE", folder: "station_pages/stations/02YN004.html"},
  {id: "08GA071", name: "ELAHO RIVER NEAR THE MOUTH", folder: "station_pages/stations/08GA071.html"},
  {id: "02ZK002", name: "NORTHEAST RIVER NEAR PLACENTIA", folder: "station_pages/stations/02ZK002.html"},
  {id: "07GD004", name: "REDWILLOW RIVER NEAR RIO GRANDE", folder: "station_pages/stations/07GD004.html"},
  {id: "02YE001", name: "GREAVETT BROOK ABOVE PORTLAND CREEK POND", folder: "station_pages/stations/02YE001.html"},
  {id: "02AD010", name: "BLACKWATER RIVER AT BEARDMORE", folder: "station_pages/stations/02AD010.html"},
  {id: "02ZK008", name: "RATTLING BROOK BELOW PLANT DISCHARGE", folder: "station_pages/stations/02ZK008.html"},
  {id: "02HC038", name: "WEST DUFFINS CREEK ABOVE GREEN RIVER", folder: "station_pages/stations/02HC038.html"},
  {id: "08HA016", name: "BINGS CREEK NEAR THE MOUTH", folder: "station_pages/stations/08HA016.html"},
  {id: "01EJ001", name: "SACKVILLE RIVER AT BEDFORD", folder: "station_pages/stations/01EJ001.html"},
  {id: "01BU009", name: "HOLMES BROOK SITE NO. 9 NEAR PETITCODIAC", folder: "station_pages/stations/01BU009.html"},
  {id: "08KA007", name: "FRASER RIVER AT RED PASS", folder: "station_pages/stations/08KA007.html"},
  {id: "01BL002", name: "RIVIERE CARAQUET AT BURNSVILLE", folder: "station_pages/stations/01BL002.html"},
  {id: "02AB019", name: "MCVICAR CREEK AT THUNDER BAY", folder: "station_pages/stations/02AB019.html"},
  {id: "08NL038", name: "SIMILKAMEEN RIVER NEAR HEDLEY", folder: "station_pages/stations/08NL038.html"},
  {id: "05FE002", name: "BUFFALO CREEK AT HIGHWAY NO. 41", folder: "station_pages/stations/05FE002.html"},
  {id: "05ME009", name: "SCISSOR CREEK NEAR MCAULEY", folder: "station_pages/stations/05ME009.html"},
];</script>