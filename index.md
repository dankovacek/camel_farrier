# Introduction

Version Control for Catchment Polygons

## Abstract

Catchment attributes and meteorological forcings of gauged basins are widely used in hydrological modelling. Recent developments in standardized data processing pipelines for extracting catchment information have significantly improved the consistency and quality of hydrological model inputs. Harmonization of input datasets has made research more comparable, and has enabled the merging of regional and continental large sample hydrology datasets. Current standardized LSH dataset development assumes an input dataset of catchment polygons, where the delineation of catchments is to our knowledge outside the scope of standardization. Catchment boundaries represent an important source of uncertainty in large sample hydrology datasets, and they represent an opportunity to further improve the quality of LSH datasets. Addressing uncertainty in catchment delineation could result in the incorporation of many monitored catchments currently excluded, thereby expanding LSH sample size and dataset diversity.

In this paper we introduce Camel Farrier, an open-source repository of catchment polygons that adopts best practices in open-source software development such as version control, bug reporting, community discussion, pull requests, automated testing, and versioning. Such practices could improve the quality and consistency of monitored catchment polygons that represent a critical first step in the data processing pipeline of large-sample hydrology datasets.

## Introduction
Recent studies show that machine learning approaches, in particular Long Short-Term Memory networks (LSTMS), are competitive with state of the art process-based models in daily rainfall-runoff modelling. Both approaches use large samples of monitored catchments for parameter calibration and model training. If you want to train an LSTM or regionalize rainfall-runoff model parameters to predict runoff in ungauged basins, you must first develop a large sample dataset. Regardless of the approach, the quality of data describing catchment attributes and meteorological forcings is critical to predictive performance.

## Large Sample Datasets
Do et al. (2018) trace the evolution of large-sample hydrology (LSH) datasets from early collections, like the Global Runoff Database and MOPEX, which provided extensive streamflow and hydrometeorological records, to the incorporation of geospatial attributes in GAGES-II. These precursor datasets evolved into CAMELS, which combined both data types for numerous US catchments, later expanding regionally with versions from Chile, Brazil, Australia, and Great Britain, and across Europe. The HYSETS dataset covered North America and Mexico, and the recent Caravan dataset unified these diverse resources into a standardized, global framework for hydrological modeling.

A challenge common to these datasets is the exclusion of small catchments due to uncertainties in catchment delineation, underscoring the need for improved, standardized processes at the first steps of catchment representation.

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

* ability to track changes to catchment polygons 
* platform for sharing knowledge about uncertainties in catchment delineation 
* standardization of catchment delineation methods 
* broader expert knowledge can be applied to review process 
* explicit documentation of decisions made regarding catchment delineation, standardized testing, and review process 
* automated testing can be applied to catchment polygons to identify significant changes with respect to input data and trigger updates to LSH datasets
* versioning of polygon datasets can be linked to versioning of large sample hydrology datasets

## Quantifying the effect of changes to catchment polygons on input data:
* how many catchments were affected? 
* what was the change in area (magnitude)? 
* what was the change in overlapping area (Jaccard index)? 
* what pct change in area reflects a significant change in input data quality? – depends on magnitude of change but also variability of spatial data within the catchment

## Approach
* host the catchment polygons in a public, open-source repository 
* allow users to submit “issue reports” to highlight uncertainties in catchment polygons 
* issue reports should contain a minimum subset of information (similar to template bug reports) 
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