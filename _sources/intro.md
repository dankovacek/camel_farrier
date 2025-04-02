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

## Dataset Overview
* **Total catchments**: 100
* **Data sources**: 2

## Data Dictionary
| Source Code | Description |
|-------------|-------------|
| HYDAT | HYDAT database from Water Survey of Canada (WSC) |
| USGS | United States Geological Survey |

<script>
// Catchment data for search
const catchments = [
  {id: "12324400", source: "USGS", name: "Clark Fork ab Little Blackfoot R nr Garrison MT", folder: "catchments/USGS-12324400/12324400.html"},
  {id: "15094000", source: "USGS", name: "DEER LK OUTLET NR PORT ALEXANDER AK", folder: "catchments/USGS-15094000/15094000.html"},
  {id: "05AD003", source: "HYDAT", name: "WATERTON RIVER NEAR WATERTON PARK", folder: "catchments/HYDAT-05AD003/05AD003.html"},
  {id: "05CC001", source: "HYDAT", name: "BLINDMAN RIVER NEAR BLACKFALDS", folder: "catchments/HYDAT-05CC001/05CC001.html"},
  {id: "10BC001", source: "HYDAT", name: "COAL RIVER AT THE MOUTH", folder: "catchments/HYDAT-10BC001/10BC001.html"},
  {id: "08LB020", source: "HYDAT", name: "BARRIERE RIVER AT THE MOUTH", folder: "catchments/HYDAT-08LB020/08LB020.html"},
  {id: "12125000", source: "USGS", name: "SAMMAMISH RIVER NEAR REDMOND, WA", folder: "catchments/USGS-12125000/12125000.html"},
  {id: "08NH137", source: "HYDAT", name: "TEETZEL CREEK ABOVE DIVERSIONS", folder: "catchments/HYDAT-08NH137/08NH137.html"},
  {id: "12042800", source: "USGS", name: "BOGACHIEL RIVER NEAR FORKS, WA", folder: "catchments/USGS-12042800/12042800.html"},
  {id: "08FB004", source: "HYDAT", name: "SALLOOMT RIVER NEAR HAGENSBORG", folder: "catchments/HYDAT-08FB004/08FB004.html"},
  {id: "07FD020", source: "HYDAT", name: "SPIRIT RIVER NEAR SPIRIT RIVER", folder: "catchments/HYDAT-07FD020/07FD020.html"},
  {id: "07HC002", source: "HYDAT", name: "BUCHANAN CREEK NEAR MANNING", folder: "catchments/HYDAT-07HC002/07HC002.html"},
  {id: "08NM015", source: "HYDAT", name: "VASEUX CREEK ABOVE DUTTON CREEK", folder: "catchments/HYDAT-08NM015/08NM015.html"},
  {id: "12020000", source: "USGS", name: "CHEHALIS RIVER NEAR DOTY, WA", folder: "catchments/USGS-12020000/12020000.html"},
  {id: "12142000", source: "USGS", name: "NF SNOQUALMIE RIVER NEAR SNOQUALMIE FALLS, WA", folder: "catchments/USGS-12142000/12142000.html"},
  {id: "12200737", source: "USGS", name: "UNNAMED TRIBUTARY SQUAW BAY ON SHAW ISLAND, WA", folder: "catchments/USGS-12200737/12200737.html"},
  {id: "08NN012", source: "HYDAT", name: "KETTLE RIVER NEAR LAURIER", folder: "catchments/HYDAT-08NN012/08NN012.html"},
  {id: "08HA031", source: "HYDAT", name: "TUGWELL CREEK AT THE MOUTH", folder: "catchments/HYDAT-08HA031/08HA031.html"},
  {id: "08NJ065", source: "HYDAT", name: "EAGLE CREEK (SOUTH FORK) NEAR BLEWETT", folder: "catchments/HYDAT-08NJ065/08NJ065.html"},
  {id: "08ED001", source: "HYDAT", name: "NANIKA RIVER AT OUTLET OF KIDPRICE LAKE", folder: "catchments/HYDAT-08ED001/08ED001.html"},
  {id: "05CE018", source: "HYDAT", name: "THREEHILLS CREEK BELOW RAY CREEK", folder: "catchments/HYDAT-05CE018/05CE018.html"},
  {id: "05BF016", source: "HYDAT", name: "MARMOT CREEK MAIN STEM NEAR SEEBE", folder: "catchments/HYDAT-05BF016/05BF016.html"},
  {id: "12039220", source: "USGS", name: "MOCLIPS RIVER AT MOCLIPS, WA", folder: "catchments/USGS-12039220/12039220.html"},
  {id: "07AH003", source: "HYDAT", name: "SAKWATAMAU RIVER NEAR WHITECOURT", folder: "catchments/HYDAT-07AH003/07AH003.html"},
  {id: "15087618", source: "USGS", name: "STARRIGAVAN C AT UPPER BRIDGE NR SITKA AK", folder: "catchments/USGS-15087618/15087618.html"},
  {id: "10CB001", source: "HYDAT", name: "SIKANNI CHIEF RIVER NEAR FORT NELSON", folder: "catchments/HYDAT-10CB001/10CB001.html"},
  {id: "08KA005", source: "HYDAT", name: "FRASER RIVER AT MCBRIDE", folder: "catchments/HYDAT-08KA005/08KA005.html"},
  {id: "12024000", source: "USGS", name: "SOUTH FORK NEWAUKUM RIVER NEAR ONALASKA, WA", folder: "catchments/USGS-12024000/12024000.html"},
  {id: "07OA001", source: "HYDAT", name: "SOUSA CREEK NEAR HIGH LEVEL", folder: "catchments/HYDAT-07OA001/07OA001.html"},
  {id: "12113350", source: "USGS", name: "GREEN RIVER AT TUKWILA, WA", folder: "catchments/USGS-12113350/12113350.html"},
  {id: "12065500", source: "USGS", name: "GOLD CREEK NEAR BREMERTON, WA", folder: "catchments/USGS-12065500/12065500.html"},
  {id: "12158040", source: "USGS", name: "TULALIP CREEK NEAR TULALIP, WA", folder: "catchments/USGS-12158040/12158040.html"},
  {id: "12079000", source: "USGS", name: "DESCHUTES RIVER NEAR RAINIER, WA", folder: "catchments/USGS-12079000/12079000.html"},
  {id: "07BB003", source: "HYDAT", name: "LOBSTICK RIVER NEAR STYAL", folder: "catchments/HYDAT-07BB003/07BB003.html"},
  {id: "08HB048", source: "HYDAT", name: "CARNATION CREEK AT THE MOUTH", folder: "catchments/HYDAT-08HB048/08HB048.html"},
  {id: "05DA008", source: "HYDAT", name: "PEYTO CREEK AT PEYTO GLACIER", folder: "catchments/HYDAT-05DA008/05DA008.html"},
  {id: "08NL040", source: "HYDAT", name: "RICHTER CREEK NEAR OSOYOOS", folder: "catchments/HYDAT-08NL040/08NL040.html"},
  {id: "12360000", source: "USGS", name: "Twin Creek near Hungry Horse MT", folder: "catchments/USGS-12360000/12360000.html"},
  {id: "12078650", source: "USGS", name: "SNYDER CREEK NEAR OLYMPIA, WA", folder: "catchments/USGS-12078650/12078650.html"},
  {id: "05DB005", source: "HYDAT", name: "PRAIRIE CREEK BELOW LICK CREEK", folder: "catchments/HYDAT-05DB005/05DB005.html"},
  {id: "15048000", source: "USGS", name: "SHEEP C NR JUNEAU AK", folder: "catchments/USGS-15048000/15048000.html"},
  {id: "12035450", source: "USGS", name: "BIG CREEK NEAR GRISDALE, WA", folder: "catchments/USGS-12035450/12035450.html"},
  {id: "08CA001", source: "HYDAT", name: "SPATSIZI RIVER NEAR THE MOUTH", folder: "catchments/HYDAT-08CA001/08CA001.html"},
  {id: "08NE087", source: "HYDAT", name: "DEER CREEK AT DEER PARK", folder: "catchments/HYDAT-08NE087/08NE087.html"},
  {id: "12433100", source: "USGS", name: "CHAMOKANE CREEK NEAR SPRINGDALE, WA", folder: "catchments/USGS-12433100/12433100.html"},
  {id: "12078000", source: "USGS", name: "SKOOKUM CREEK AT KAMILCHE, WA", folder: "catchments/USGS-12078000/12078000.html"},
  {id: "12359000", source: "USGS", name: "S F Flathead R at Sbrs nr Hungry Horse MT", folder: "catchments/USGS-12359000/12359000.html"},
  {id: "12208500", source: "USGS", name: "CANYON CREEK AT KULSHAN, WA", folder: "catchments/USGS-12208500/12208500.html"},
  {id: "08HB063", source: "HYDAT", name: "KITSUCKSUS CREEK ABOVE CHERRY CREEK", folder: "catchments/HYDAT-08HB063/08HB063.html"},
  {id: "05BJ006", source: "HYDAT", name: "ELBOW RIVER ABOVE ELBOW FALLS", folder: "catchments/HYDAT-05BJ006/05BJ006.html"},
  {id: "08NL069", source: "HYDAT", name: "PASAYTEN RIVER ABOVE CALCITE CREEK", folder: "catchments/HYDAT-08NL069/08NL069.html"},
  {id: "08HF012", source: "HYDAT", name: "PUGH CREEK NEAR NAHWITTI LAKE", folder: "catchments/HYDAT-08HF012/08HF012.html"},
  {id: "12078400", source: "USGS", name: "KENNEDY CREEK NEAR KAMILCHE, WA", folder: "catchments/USGS-12078400/12078400.html"},
  {id: "08NA012", source: "HYDAT", name: "TOBY CREEK NEAR ATHALMER", folder: "catchments/HYDAT-08NA012/08NA012.html"},
  {id: "12191800", source: "USGS", name: "SULPHUR CREEK NEAR CONCRETE, WA", folder: "catchments/USGS-12191800/12191800.html"},
  {id: "05DD004", source: "HYDAT", name: "BROWN CREEK AT FORESTRY ROAD", folder: "catchments/HYDAT-05DD004/05DD004.html"},
  {id: "08HB040", source: "HYDAT", name: "KNARSTON CREEK AT SUPERIOR ROAD", folder: "catchments/HYDAT-08HB040/08HB040.html"},
  {id: "15052800", source: "USGS", name: "MONTANA C NR AUKE BAY AK", folder: "catchments/USGS-15052800/15052800.html"},
  {id: "09AA006", source: "HYDAT", name: "ATLIN RIVER NEAR ATLIN", folder: "catchments/HYDAT-09AA006/09AA006.html"},
  {id: "08MG019", source: "HYDAT", name: "PLACE CREEK NEAR BIRKEN", folder: "catchments/HYDAT-08MG019/08MG019.html"},
  {id: "08FB005", source: "HYDAT", name: "NUSATSUM RIVER NEAR HAGENSBORG", folder: "catchments/HYDAT-08FB005/08FB005.html"},
  {id: "08LC048", source: "HYDAT", name: "TRINITY CREEK ABOVE DIVERSION", folder: "catchments/HYDAT-08LC048/08LC048.html"},
  {id: "12105000", source: "USGS", name: "SMAY CREEK NEAR LESTER, WA", folder: "catchments/USGS-12105000/12105000.html"},
  {id: "12026400", source: "USGS", name: "SKOOKUMCHUCK RIVER NEAR BUCODA, WA", folder: "catchments/USGS-12026400/12026400.html"},
  {id: "15040000", source: "USGS", name: "DOROTHY C NR JUNEAU AK", folder: "catchments/USGS-15040000/15040000.html"},
  {id: "12331900", source: "USGS", name: "Clark Fork near Clinton MT", folder: "catchments/USGS-12331900/12331900.html"},
  {id: "08NL035", source: "HYDAT", name: "SOUKUP CREEK NEAR HEDLEY", folder: "catchments/HYDAT-08NL035/08NL035.html"},
  {id: "10BE004", source: "HYDAT", name: "TOAD RIVER ABOVE NONDA CREEK", folder: "catchments/HYDAT-10BE004/10BE004.html"},
  {id: "12069651", source: "USGS", name: "GAMBLE CREEK NEAR PORT GAMBLE, WA", folder: "catchments/USGS-12069651/12069651.html"},
  {id: "05BB003", source: "HYDAT", name: "FORTY MILE CREEK NEAR BANFF", folder: "catchments/HYDAT-05BB003/05BB003.html"},
  {id: "08LE074", source: "HYDAT", name: "CANOE CREEK ABOVE EAST CANOE CREEK", folder: "catchments/HYDAT-08LE074/08LE074.html"},
  {id: "08LA007", source: "HYDAT", name: "CLEARWATER RIVER AT OUTLET OF CLEARWATER LAKE", folder: "catchments/HYDAT-08LA007/08LA007.html"},
  {id: "12158032", source: "USGS", name: "EAST FORK TULALIP CREEK NEAR MOUTH NR TULALIP, WA", folder: "catchments/USGS-12158032/12158032.html"},
  {id: "05AA006", source: "HYDAT", name: "TODD CREEK AT ELTON'S RANCH", folder: "catchments/HYDAT-05AA006/05AA006.html"},
  {id: "15106920", source: "USGS", name: "KADASHAN R AB HOOK C NR TENAKEE AK", folder: "catchments/USGS-15106920/15106920.html"},
  {id: "07BC006", source: "HYDAT", name: "DAPP CREEK AT HIGHWAY NO. 44", folder: "catchments/HYDAT-07BC006/07BC006.html"},
  {id: "12073000", source: "USGS", name: "BURLEY CREEK AT BURLEY, WA", folder: "catchments/USGS-12073000/12073000.html"},
  {id: "12098500", source: "USGS", name: "WHITE RIVER NEAR BUCKLEY, WA", folder: "catchments/USGS-12098500/12098500.html"},
  {id: "12059800", source: "USGS", name: "SOUTH FORK SKOKOMISH RIVER NEAR HOODSPORT, WA", folder: "catchments/USGS-12059800/12059800.html"},
  {id: "12456500", source: "USGS", name: "CHIWAWA RIVER NEAR PLAIN, WA", folder: "catchments/USGS-12456500/12456500.html"},
  {id: "08HC002", source: "HYDAT", name: "UCONA RIVER AT THE MOUTH", folder: "catchments/HYDAT-08HC002/08HC002.html"},
  {id: "12145500", source: "USGS", name: "RAGING RIVER NEAR FALL CITY, WA", folder: "catchments/USGS-12145500/12145500.html"},
  {id: "08NJ152", source: "HYDAT", name: "WOLVERTON CREEK NEAR SLOCAN PARK", folder: "catchments/HYDAT-08NJ152/08NJ152.html"},
  {id: "08MB010", source: "HYDAT", name: "CHILCOTIN RIVER ABOVE CLUSKO RIVER", folder: "catchments/HYDAT-08MB010/08MB010.html"},
  {id: "08EE010", source: "HYDAT", name: "KATHLYN CREEK ABOVE SIMPSON CREEK", folder: "catchments/HYDAT-08EE010/08EE010.html"},
  {id: "08NG065", source: "HYDAT", name: "KOOTENAY RIVER AT FORT STEELE", folder: "catchments/HYDAT-08NG065/08NG065.html"},
  {id: "08KD007", source: "HYDAT", name: "BOWRON RIVER BELOW BOX CANYON", folder: "catchments/HYDAT-08KD007/08KD007.html"},
  {id: "07FD009", source: "HYDAT", name: "CLEAR RIVER NEAR BEAR CANYON", folder: "catchments/HYDAT-07FD009/07FD009.html"},
  {id: "08LA028", source: "HYDAT", name: "WINDY CREEK ABOVE JIM CREEK", folder: "catchments/HYDAT-08LA028/08LA028.html"},
  {id: "5014300", source: "USGS", name: "Swiftcurrent Cr ab Swiftcurrent Lk at Many Glacier", folder: "catchments/USGS-5014300/5014300.html"},
  {id: "08NF001", source: "HYDAT", name: "KOOTENAY RIVER AT KOOTENAY CROSSING", folder: "catchments/HYDAT-08NF001/08NF001.html"},
  {id: "07AA007", source: "HYDAT", name: "SUNWAPTA RIVER AT ATHABASCA GLACIER", folder: "catchments/HYDAT-07AA007/07AA007.html"},
  {id: "12108500", source: "USGS", name: "NEWAUKUM CREEK NEAR BLACK DIAMOND, WA", folder: "catchments/USGS-12108500/12108500.html"},
  {id: "12357000", source: "USGS", name: "Middle Fork Flathead River at Essex MT", folder: "catchments/USGS-12357000/12357000.html"},
  {id: "08CG004", source: "HYDAT", name: "ISKUT RIVER ABOVE SNIPPAKER CREEK", folder: "catchments/HYDAT-08CG004/08CG004.html"},
  {id: "15052475", source: "USGS", name: "JORDAN C BL EGAN DR NR AUKE BAY AK", folder: "catchments/USGS-15052475/15052475.html"},
  {id: "10BE013", source: "HYDAT", name: "SMITH RIVER NEAR THE MOUTH", folder: "catchments/HYDAT-10BE013/10BE013.html"},
  {id: "12157250", source: "USGS", name: "MISSION CREEK NEAR TULALIP, WA", folder: "catchments/USGS-12157250/12157250.html"},
  {id: "12392400", source: "USGS", name: "RAPID LIGHTNING CREEK NR SAMUELS ID", folder: "catchments/USGS-12392400/12392400.html"},
  {id: "05CK001", source: "HYDAT", name: "BLOOD INDIAN CREEK NEAR THE MOUTH", folder: "catchments/HYDAT-05CK001/05CK001.html"},
];</script>
## References
1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020.