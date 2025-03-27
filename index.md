# Catchment Polygon Revision Archive

## Introduction
This repository is intended to serve as a demonstration of the use of version control for editing and open-source publication of catchment polygons used widely in hydrological research.
Each catchment folder contains geometric data (GeoJSON), attribute data (CSV), and a plot of the catchment polygon.
Version control of catchment polygons in an open-source repository is multi-purpose:
1.  **Transparency**: All changes to catchment polygons are tracked and can be reviewed.
2.  **Reproducibility**: The catchment polygons can be linked to specific versions of the attribute data.
3.  **Collaboration**: Multiple contributors can suggest changes to catchment polygons by sharing specific knowledge and evidence.

Git for version control is well suited to the management of catchment polygons because it is designed to track changes to many kinds of files, and Github is particularly useful for its capacity for collaboration and automation.

## Search Catchments
<div class="search-container">
  <input type="text" id="catchmentSearch" placeholder="Search by ID, name, or source..." onkeyup="filterCatchments()">
  <div id="searchResults" class="search-results"></div>
</div>

### HYSETS Dataset
The HYSETS dataset (Arsenault et al., 2020) is used as the baseline polygon set for this exercise.  The provenance of polygons used to generate catchment attributes and meteorological forcing data in HYSETS is described in the direct quote below.
```{admonition} Arsenault (2020)
*"The drainage area was made available for most hydrometric gauges by the water management agencies that collate and curate those sources of data. However, a filter was applied to remove all stations that did not have an official drainage area value at the hydrometric gauge, as the value is key in determining if the watershed bounds are acceptable or not. The drainage areas were validated using the watershed delineation boundaries as described above in the geospatial analysis software QGIS 3.4. However, in some instances, the water management agencies did not provide watershed boundary files as they had not been produced or made available publicly. In those cases, estimated watershed contours were taken from the Global Streamflow Indices and Metadata (GSIM) project where available. For catchments where GSIM boundaries were kept for the data extraction a flag (“flag_GSIM_boundaries”) was set to 1 to inform users that the boundaries are from GSIM and not from the official agencies. The GSIM-derived area is also identified in those cases in the dataset, under the “Drainage_Area_GSIM_km2” heading. **For catchments smaller or equal to 50 km2 in size according to the official gauge, a bounding box equal to the surface area around the catchment outlet was provided as the contour of the catchment as at those scales catchment delineations are difficult due to the resolution and hydrometric gauge accuracy**. These catchments are represented by the “flag_artificial_boundaries” indicator in the dataset files."*
```

The quoted text in bold is the subject of the exercise presented here as an example of how to manage catchment polygons in a version-control repository.
## Dataset Overview
* **Total catchments**: 100
* **Data sources**: 1

## Data Dictionary
| Source Code | Description |
|-------------|-------------|
| HYDAT | No description available |

<script>
// Catchment data for search
const catchments = [
  {id: "01BJ003", source: "HYDAT", name: "JACQUET RIVER NEAR DURHAM CENTRE", folder: "catchment_polygon_revisions/HYDAT-01BJ003/01BJ003-README.html"},
  {id: "01CB008", source: "HYDAT", name: "DUNK RIVER NEAR BREADALBANE", folder: "catchment_polygon_revisions/HYDAT-01CB008/01CB008-README.html"},
  {id: "01AF007", source: "HYDAT", name: "GRANDE RIVIERE AT VIOLETTE BRIDGE", folder: "catchment_polygon_revisions/HYDAT-01AF007/01AF007-README.html"},
  {id: "01BC001", source: "HYDAT", name: "RESTIGOUCHE RIVER BELOW KEDGWICK RIVER", folder: "catchment_polygon_revisions/HYDAT-01BC001/01BC001-README.html"},
  {id: "01BG005", source: "HYDAT", name: "CASCAPEDIA (RIVIERE) EN AVAL DU RUISSEAU BERRY", folder: "catchment_polygon_revisions/HYDAT-01BG005/01BG005-README.html"},
  {id: "01AK001", source: "HYDAT", name: "SHOGOMOC STREAM NEAR TRANS CANADA HIGHWAY", folder: "catchment_polygon_revisions/HYDAT-01AK001/01AK001-README.html"},
  {id: "01BD002", source: "HYDAT", name: "MATAPEDIA (RIVIERE) EN AMONT DE LA RIVIERE ASSEMETQUAGAN", folder: "catchment_polygon_revisions/HYDAT-01BD002/01BD002-README.html"},
  {id: "01BD008", source: "HYDAT", name: "MATAPEDIA (RIVIERE) PRES DE AMQUI", folder: "catchment_polygon_revisions/HYDAT-01BD008/01BD008-README.html"},
  {id: "01BJ010", source: "HYDAT", name: "MIDDLE RIVER NEAR BATHURST", folder: "catchment_polygon_revisions/HYDAT-01BJ010/01BJ010-README.html"},
  {id: "01AL008", source: "HYDAT", name: "NASHWAAK RIVER AT STANLEY", folder: "catchment_polygon_revisions/HYDAT-01AL008/01AL008-README.html"},
  {id: "01AL002", source: "HYDAT", name: "NASHWAAK RIVER AT DURHAM BRIDGE", folder: "catchment_polygon_revisions/HYDAT-01AL002/01AL002-README.html"},
  {id: "01BT001", source: "HYDAT", name: "KINNEAR RIVER NEAR HAUTE-ABOUJAGANE", folder: "catchment_polygon_revisions/HYDAT-01BT001/01BT001-README.html"},
  {id: "01BV006", source: "HYDAT", name: "POINT WOLFE RIVER AT FUNDY NATIONAL PARK", folder: "catchment_polygon_revisions/HYDAT-01BV006/01BV006-README.html"},
  {id: "01CC005", source: "HYDAT", name: "WEST RIVER AT RIVERDALE", folder: "catchment_polygon_revisions/HYDAT-01CC005/01CC005-README.html"},
  {id: "01AN002", source: "HYDAT", name: "SALMON RIVER AT CASTAWAY", folder: "catchment_polygon_revisions/HYDAT-01AN002/01AN002-README.html"},
  {id: "01BP002", source: "HYDAT", name: "CATAMARAN BROOK AT REPAP ROAD BRIDGE", folder: "catchment_polygon_revisions/HYDAT-01BP002/01BP002-README.html"},
  {id: "01AJ006", source: "HYDAT", name: "HOLMES BROOK AT MOOSE MOUNTAIN", folder: "catchment_polygon_revisions/HYDAT-01AJ006/01AJ006-README.html"},
  {id: "01AK006", source: "HYDAT", name: "MIDDLE BRANCH NASHWAAKSIS STREAM AT SANDWITH'S FARM", folder: "catchment_polygon_revisions/HYDAT-01AK006/01AK006-README.html"},
  {id: "01BG008", source: "HYDAT", name: "CASCAPEDIA (PETITE RIVIERE) A SAINT-EDGAR", folder: "catchment_polygon_revisions/HYDAT-01BG008/01BG008-README.html"},
  {id: "01BG002", source: "HYDAT", name: "BONAVENTURE (RIVIERE) EN AMONT DU PONT", folder: "catchment_polygon_revisions/HYDAT-01BG002/01BG002-README.html"},
  {id: "01BH009", source: "HYDAT", name: "YORK RIVIERE) EN AMONT DU RUISSEAU D'ARGENT", folder: "catchment_polygon_revisions/HYDAT-01BH009/01BH009-README.html"},
  {id: "01BH003", source: "HYDAT", name: "PORPHYRE (RUISSEAU)", folder: "catchment_polygon_revisions/HYDAT-01BH003/01BH003-README.html"},
  {id: "01BU006", source: "HYDAT", name: "HAYWARD BROOK SITE NO. 4 NEAR PETITCODIAC", folder: "catchment_polygon_revisions/HYDAT-01BU006/01BU006-README.html"},
  {id: "01BA001", source: "HYDAT", name: "RESTIGOUCHE RIVER ABOVE KEDGWICK RIVER", folder: "catchment_polygon_revisions/HYDAT-01BA001/01BA001-README.html"},
  {id: "01CB005", source: "HYDAT", name: "NORTH BROOK NEAR WALL ROAD", folder: "catchment_polygon_revisions/HYDAT-01CB005/01CB005-README.html"},
  {id: "01AR007", source: "HYDAT", name: "BOCABEC RIVER AT OUTLET OF KERR LAKE", folder: "catchment_polygon_revisions/HYDAT-01AR007/01AR007-README.html"},
  {id: "01AM001", source: "HYDAT", name: "NORTH BRANCH OROMOCTO RIVER AT TRACY", folder: "catchment_polygon_revisions/HYDAT-01AM001/01AM001-README.html"},
  {id: "01BU002", source: "HYDAT", name: "PETITCODIAC RIVER NEAR PETITCODIAC", folder: "catchment_polygon_revisions/HYDAT-01BU002/01BU002-README.html"},
  {id: "01BH007", source: "HYDAT", name: "GRANDE-RIVIERE OUEST (LA)", folder: "catchment_polygon_revisions/HYDAT-01BH007/01BH007-README.html"},
  {id: "01AP004", source: "HYDAT", name: "KENNEBECASIS RIVER AT APOHAQUI", folder: "catchment_polygon_revisions/HYDAT-01AP004/01AP004-README.html"},
  {id: "01BU008", source: "HYDAT", name: "HAYWARD BROOK SITE NO. 6 NEAR PETITCODIAC", folder: "catchment_polygon_revisions/HYDAT-01BU008/01BU008-README.html"},
  {id: "01AJ011", source: "HYDAT", name: "COLD STREAM AT COLDSTREAM", folder: "catchment_polygon_revisions/HYDAT-01AJ011/01AJ011-README.html"},
  {id: "01AD003", source: "HYDAT", name: "ST. FRANCIS RIVER AT OUTLET OF GLASIER LAKE", folder: "catchment_polygon_revisions/HYDAT-01AD003/01AD003-README.html"},
  {id: "01BS001", source: "HYDAT", name: "COAL BRANCH RIVER AT BEERSVILLE", folder: "catchment_polygon_revisions/HYDAT-01BS001/01BS001-README.html"},
  {id: "01BE001", source: "HYDAT", name: "UPSALQUITCH RIVER AT UPSALQUITCH", folder: "catchment_polygon_revisions/HYDAT-01BE001/01BE001-README.html"},
  {id: "01BG006", source: "HYDAT", name: "BASTIEN (RUISSEAU) EN AMONT DU PONT", folder: "catchment_polygon_revisions/HYDAT-01BG006/01BG006-README.html"},
  {id: "01BL003", source: "HYDAT", name: "BIG TRACADIE RIVER AT MURCHY BRIDGE CROSSING", folder: "catchment_polygon_revisions/HYDAT-01BL003/01BL003-README.html"},
  {id: "01AH005", source: "HYDAT", name: "MAMOZEKEL RIVER NEAR CAMPBELL RIVER", folder: "catchment_polygon_revisions/HYDAT-01AH005/01AH005-README.html"},
  {id: "01CB012", source: "HYDAT", name: "ELMO RIVER NEAR SCALES POND", folder: "catchment_polygon_revisions/HYDAT-01CB012/01CB012-README.html"},
  {id: "01BO004", source: "HYDAT", name: "BARTIBOG RIVER BELOW HIGHWAY NO. 8", folder: "catchment_polygon_revisions/HYDAT-01BO004/01BO004-README.html"},
  {id: "01BV005", source: "HYDAT", name: "RATCLIFFE BROOK BELOW OTTER LAKE", folder: "catchment_polygon_revisions/HYDAT-01BV005/01BV005-README.html"},
  {id: "01BV008", source: "HYDAT", name: "BIG SALMON RIVER NEAR ST. MARTINS", folder: "catchment_polygon_revisions/HYDAT-01BV008/01BV008-README.html"},
  {id: "01AN001", source: "HYDAT", name: "CASTAWAY STREAM NEAR CASTAWAY", folder: "catchment_polygon_revisions/HYDAT-01AN001/01AN001-README.html"},
  {id: "01CB015", source: "HYDAT", name: "CAPE TRAVERSE RIVER AT CARLETON", folder: "catchment_polygon_revisions/HYDAT-01CB015/01CB015-README.html"},
  {id: "01BO003", source: "HYDAT", name: "BARNABY RIVER BELOW SEMIWAGAN RIVER", folder: "catchment_polygon_revisions/HYDAT-01BO003/01BO003-README.html"},
  {id: "01BP001", source: "HYDAT", name: "LITTLE SOUTHWEST MIRAMICHI RIVER AT LYTTLETON", folder: "catchment_polygon_revisions/HYDAT-01BP001/01BP001-README.html"},
  {id: "01BF001", source: "HYDAT", name: "NOUVELLE (RIVIERE) AU PONT", folder: "catchment_polygon_revisions/HYDAT-01BF001/01BF001-README.html"},
  {id: "01BG001", source: "HYDAT", name: "CASCAPEDIA (PETITE RIVIERE) EN AMONT DU PONT", folder: "catchment_polygon_revisions/HYDAT-01BG001/01BG001-README.html"},
  {id: "01BQ001", source: "HYDAT", name: "NORTHWEST MIRAMICHI RIVER AT TROUT BROOK", folder: "catchment_polygon_revisions/HYDAT-01BQ001/01BQ001-README.html"},
  {id: "01AK005", source: "HYDAT", name: "MIDDLE BRANCH NASHWAAKSIS STREAM NEAR ROYAL ROAD", folder: "catchment_polygon_revisions/HYDAT-01AK005/01AK005-README.html"},
  {id: "01CB006", source: "HYDAT", name: "EMERALD BROOK NEAR EMERALD", folder: "catchment_polygon_revisions/HYDAT-01CB006/01CB006-README.html"},
  {id: "01BJ007", source: "HYDAT", name: "RESTIGOUCHE RIVER ABOVE RAFTING GROUND BROOK", folder: "catchment_polygon_revisions/HYDAT-01BJ007/01BJ007-README.html"},
  {id: "01BU005", source: "HYDAT", name: "HAYWARD BROOK SITE NO. 1 NEAR PETITCODIAC", folder: "catchment_polygon_revisions/HYDAT-01BU005/01BU005-README.html"},
  {id: "01AF009", source: "HYDAT", name: "IROQUOIS RIVER AT MOULIN MORNEAULT", folder: "catchment_polygon_revisions/HYDAT-01AF009/01AF009-README.html"},
  {id: "01AP009", source: "HYDAT", name: "PARLEE BROOK BELOW ARNOLDS BRIDGE", folder: "catchment_polygon_revisions/HYDAT-01AP009/01AP009-README.html"},
  {id: "01AK007", source: "HYDAT", name: "NACKAWIC STREAM NEAR TEMPERANCE VALE", folder: "catchment_polygon_revisions/HYDAT-01AK007/01AK007-README.html"},
  {id: "01BG003", source: "HYDAT", name: "CASCAPEDIA (RIVIERE) EN AVAL DU LAC CASCAPEDIA", folder: "catchment_polygon_revisions/HYDAT-01BG003/01BG003-README.html"},
  {id: "01BG009", source: "HYDAT", name: "BONAVENTURE (RIVIERE) EN AMONT DU RUISSEAU CREUX", folder: "catchment_polygon_revisions/HYDAT-01BG009/01BG009-README.html"},
  {id: "01BU007", source: "HYDAT", name: "HAYWARD BROOK SITE NO. 5 NEAR PETITCODIAC", folder: "catchment_polygon_revisions/HYDAT-01BU007/01BU007-README.html"},
  {id: "01BH002", source: "HYDAT", name: "YORK (RIVIERE) A SUNNY BANK", folder: "catchment_polygon_revisions/HYDAT-01BH002/01BH002-README.html"},
  {id: "01BH008", source: "HYDAT", name: "SAINT-JEAN (RIVIERE)", folder: "catchment_polygon_revisions/HYDAT-01BH008/01BH008-README.html"},
  {id: "01AO009", source: "HYDAT", name: "BURPEE MILLSTREAM NEAR FERNMOUNT", folder: "catchment_polygon_revisions/HYDAT-01AO009/01AO009-README.html"},
  {id: "01CC004", source: "HYDAT", name: "WRIGHTS CREEK NEAR AVONLEA ROAD", folder: "catchment_polygon_revisions/HYDAT-01CC004/01CC004-README.html"},
  {id: "01CA003", source: "HYDAT", name: "CARRUTHERS BROOK NEAR ST. ANTHONY", folder: "catchment_polygon_revisions/HYDAT-01CA003/01CA003-README.html"},
  {id: "01AQ001", source: "HYDAT", name: "LEPREAU RIVER AT LEPREAU", folder: "catchment_polygon_revisions/HYDAT-01AQ001/01AQ001-README.html"},
  {id: "01AL004", source: "HYDAT", name: "NARROWS MOUNTAIN BROOK NEAR NARROWS MOUNTAIN", folder: "catchment_polygon_revisions/HYDAT-01AL004/01AL004-README.html"},
  {id: "01AD015", source: "HYDAT", name: "MADAWASKA (RIVIERE) A 6 KM EN AVAL DU BARRAGE TEMISCOUATA", folder: "catchment_polygon_revisions/HYDAT-01AD015/01AD015-README.html"},
  {id: "01BD004", source: "HYDAT", name: "MATAPEDIA (LAC) A VAL-BRILLANT", folder: "catchment_polygon_revisions/HYDAT-01BD004/01BD004-README.html"},
  {id: "01AJ007", source: "HYDAT", name: "HOLMES BROOK NEAR HOLMESVILLE", folder: "catchment_polygon_revisions/HYDAT-01AJ007/01AJ007-README.html"},
  {id: "01BO001", source: "HYDAT", name: "SOUTHWEST MIRAMICHI RIVER AT BLACKVILLE", folder: "catchment_polygon_revisions/HYDAT-01BO001/01BO001-README.html"},
  {id: "01CB010", source: "HYDAT", name: "DAMES BROOK NEAR NEWTON", folder: "catchment_polygon_revisions/HYDAT-01CB010/01CB010-README.html"},
  {id: "01BD009", source: "HYDAT", name: "MATAPEDIA (RIVIERE) A 4 KM EN AMONT DE L'ASSEMETQUAGAN", folder: "catchment_polygon_revisions/HYDAT-01BD009/01BD009-README.html"},
  {id: "01BF004", source: "HYDAT", name: "NOUVELLE (RIVIERE) A 0,2 KM EN AMONT DU PONT-ROUTE 132 A NOUVELLE", folder: "catchment_polygon_revisions/HYDAT-01BF004/01BF004-README.html"},
  {id: "01CA004", source: "HYDAT", name: "SMELT CREEK NEAR ELLERSLIE", folder: "catchment_polygon_revisions/HYDAT-01CA004/01CA004-README.html"},
  {id: "01AL003", source: "HYDAT", name: "HAYDEN BROOK NEAR NARROWS MOUNTAIN", folder: "catchment_polygon_revisions/HYDAT-01AL003/01AL003-README.html"},
  {id: "01BV007", source: "HYDAT", name: "UPPER SALMON RIVER NEAR ALMA", folder: "catchment_polygon_revisions/HYDAT-01BV007/01BV007-README.html"},
  {id: "01AE001", source: "HYDAT", name: "FISH RIVER NEAR FORT KENT", folder: "catchment_polygon_revisions/HYDAT-01AE001/01AE001-README.html"},
  {id: "01AP006", source: "HYDAT", name: "NEREPIS RIVER NEAR FOWLERS CORNER", folder: "catchment_polygon_revisions/HYDAT-01AP006/01AP006-README.html"},
  {id: "01AF006", source: "HYDAT", name: "BLACK BROOK NEAR ST-ANDRE-DE-MADAWASKA", folder: "catchment_polygon_revisions/HYDAT-01AF006/01AF006-README.html"},
  {id: "01BG004", source: "HYDAT", name: "CASCAPEDIA (RIVIERE) EN AMONT DE LA RIVIERE ANGERS", folder: "catchment_polygon_revisions/HYDAT-01BG004/01BG004-README.html"},
  {id: "01BL001", source: "HYDAT", name: "BASS RIVER AT BASS RIVER", folder: "catchment_polygon_revisions/HYDAT-01BL001/01BL001-README.html"},
  {id: "01BV010", source: "HYDAT", name: "DICKSON BROOK AT FUNDY NATIONAL PARK", folder: "catchment_polygon_revisions/HYDAT-01BV010/01BV010-README.html"},
  {id: "01CB007", source: "HYDAT", name: "EAST BRANCH DUNK RIVER AT ELLIOTT", folder: "catchment_polygon_revisions/HYDAT-01CB007/01CB007-README.html"},
  {id: "01BH001", source: "HYDAT", name: "DARTMOUTH (RIVIERE) PRES DE CORTEREAL", folder: "catchment_polygon_revisions/HYDAT-01BH001/01BH001-README.html"},
  {id: "01AP002", source: "HYDAT", name: "CANAAN RIVER AT EAST CANAAN", folder: "catchment_polygon_revisions/HYDAT-01AP002/01AP002-README.html"},
  {id: "01BU004", source: "HYDAT", name: "PALMERS CREEK NEAR DORCHESTER", folder: "catchment_polygon_revisions/HYDAT-01BU004/01BU004-README.html"},
  {id: "01AQ008", source: "HYDAT", name: "PISKAHEGAN STREAM NEAR PLEASANT MOUNTAIN", folder: "catchment_polygon_revisions/HYDAT-01AQ008/01AQ008-README.html"},
  {id: "01BK006", source: "HYDAT", name: "FORTY MILE BROOK (WEST BRANCH) AT CARIBOU DEPOT", folder: "catchment_polygon_revisions/HYDAT-01BK006/01BK006-README.html"},
  {id: "01AJ004", source: "HYDAT", name: "BIG PRESQUE ISLE STREAM AT TRACEY MILLS", folder: "catchment_polygon_revisions/HYDAT-01AJ004/01AJ004-README.html"},
  {id: "01CB014", source: "HYDAT", name: "SOUTHWEST BROOK NEAR MIDDLETON", folder: "catchment_polygon_revisions/HYDAT-01CB014/01CB014-README.html"},
  {id: "01BH012", source: "HYDAT", name: "SAINT-JEAN (RIVIERE) EN AMONT DU PONT-ROUTE 132", folder: "catchment_polygon_revisions/HYDAT-01BH012/01BH012-README.html"},
  {id: "01AJ003", source: "HYDAT", name: "MEDUXNEKEAG RIVER NEAR BELLEVILLE", folder: "catchment_polygon_revisions/HYDAT-01AJ003/01AJ003-README.html"},
  {id: "01BJ012", source: "HYDAT", name: "EEL RIVER NEAR DUNDEE", folder: "catchment_polygon_revisions/HYDAT-01BJ012/01BJ012-README.html"},
  {id: "01BV004", source: "HYDAT", name: "BLACK RIVER AT GARNET SETTLEMENT", folder: "catchment_polygon_revisions/HYDAT-01BV004/01BV004-README.html"},
  {id: "01BU009", source: "HYDAT", name: "HOLMES BROOK SITE NO. 9 NEAR PETITCODIAC", folder: "catchment_polygon_revisions/HYDAT-01BU009/01BU009-README.html"},
  {id: "01AD002", source: "HYDAT", name: "SAINT JOHN RIVER AT FORT KENT", folder: "catchment_polygon_revisions/HYDAT-01AD002/01AD002-README.html"},
  {id: "01BJ001", source: "HYDAT", name: "TETAGOUCHE RIVER NEAR WEST BATHURST", folder: "catchment_polygon_revisions/HYDAT-01BJ001/01BJ001-README.html"},
  {id: "01AR008", source: "HYDAT", name: "BOCABEC RIVER ABOVE TIDE", folder: "catchment_polygon_revisions/HYDAT-01AR008/01AR008-README.html"},
  {id: "01AJ010", source: "HYDAT", name: "BECAGUIMEC STREAM AT COLDSTREAM", folder: "catchment_polygon_revisions/HYDAT-01AJ010/01AJ010-README.html"},
  {id: "01BL002", source: "HYDAT", name: "RIVIERE CARAQUET AT BURNSVILLE", folder: "catchment_polygon_revisions/HYDAT-01BL002/01BL002-README.html"},
];</script>
## References
1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020.