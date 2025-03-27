# Revision Archive

This repository is intended to serve as a demonstration of the use of version control for 
editing and open-source publication of catchment polygons used widely in hydrological research.

Each catchment folder contains geometric data (GeoJSON), attribute data (CSV), and a plot of the catchment polygon.

Version control of catchment polygons in an open-source repository is multi-purpose:
1.  **Transparency**: All changes to catchment polygons are tracked and can be reviewed.
2.  **Reproducibility**: The catchment polygons can be linked to specific versions of the attribute data.
3.  **Collaboration**: Multiple contributors can suggest changes to catchment polygons by sharing specific knowledge and evidence.

Git for version control is well suited to the management of catchment polygons because it is designed to track changes to many kinds of files, 
and Github is particularly useful for its capacity for collaboration and automation.

## Search Catchments

<div class="search-container">
  <input type="text" id="catchmentSearch" placeholder="Search by ID, name, or source..." onkeyup="filterCatchments()">
    <div id="searchResults" class="search-results"></div>
  </div>

### HYSETS Dataset

The HYSETS dataset (Arsenault et al., 2020) is used as the baseline polygon set for this exercise.  
The provenance of polygons used to generate catchment attributes and meteorological forcing data in HYSETS is 
described in the direct quote below.

```{admonition} Arsenault (2020)
*"The drainage area was made available for most hydrometric gauges by the water management 
agencies that collate and curate those sources of data. However, a filter was applied to remove all stations that did not have an 
official drainage area value at the hydrometric gauge, as the value is key in determining if the watershed bounds are acceptable or not. 
The drainage areas were validated using the watershed delineation boundaries as described above in the geospatial analysis software QGIS 3.4. 
However, in some instances, the water management agencies did not provide watershed boundary files as they had not been produced or made 
available publicly. In those cases, estimated watershed contours were taken from the Global Streamflow Indices and Metadata (GSIM) project 
where available. For catchments where GSIM boundaries were kept for the data extraction a flag (“flag_GSIM_boundaries”) was set to 1 to 
inform users that the boundaries are from GSIM and not from the official agencies. The GSIM-derived area is also identified in those 
cases in the dataset, under the “Drainage_Area_GSIM_km2” heading. **For catchments smaller or equal to 50 km2 in size according to the 
official gauge, a bounding box equal to the surface area around the catchment outlet was provided as the contour of the catchment as at 
those scales catchment delineations are difficult due to the resolution and hydrometric gauge accuracy**. These catchments are represented 
by the “flag_artificial_boundaries” indicator in the dataset files."*
```

The text quoted in bold above is the subject of the exercise presented here as an example of how to manage 
catchment polygons in a version-control repository.  These catchments represent a significant proportion of 
the HYSETS dataset (roughly one third) and they represent an opportunity for well documented, collaborative improvement.
