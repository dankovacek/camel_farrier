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
* **Total catchments**: 200
* **Data sources**: 2

## Data Dictionary
| Source Code | Description |
|-------------|-------------|
| HYDAT | HYDAT database from Water Survey of Canada (WSC) |
| USGS | United States Geological Survey |

<script>
// Catchment data for search
const catchments = [
  {id: "5536000", source: "USGS", name: "NORTH BRANCH CHICAGO RIVER AT NILES, IL", folder: "catchments/USGS-5536000/5536000.html"},
  {id: "1611500", source: "USGS", name: "CACAPON RIVER NEAR GREAT CACAPON, WV", folder: "catchments/USGS-1611500/1611500.html"},
  {id: "1467031", source: "USGS", name: "Pennypack Creek at Horsham, PA", folder: "catchments/USGS-1467031/1467031.html"},
  {id: "5593600", source: "USGS", name: "BLUE GRASS CREEK NEAR RAYMOND, IL", folder: "catchments/USGS-5593600/5593600.html"},
  {id: "4288230", source: "USGS", name: "RANCH BROOK AT RANCH CAMP, NEAR STOWE, VT", folder: "catchments/USGS-4288230/4288230.html"},
  {id: "2243960", source: "USGS", name: "OCKLAWAHA R AT RODMAN DAM NEAR ORANGE SPRINGS, FL", folder: "catchments/USGS-2243960/2243960.html"},
  {id: "3251200", source: "USGS", name: "NORTH FORK LICKING RIVER NEAR MT OLIVET, KY", folder: "catchments/USGS-3251200/3251200.html"},
  {id: "10133540", source: "USGS", name: "KIMBALL CRK ABV EAST CANYON CRK NR PARK CITY, UT", folder: "catchments/USGS-10133540/10133540.html"},
  {id: "11195600", source: "USGS", name: "PASTORIA C NR LEBEC CA", folder: "catchments/USGS-11195600/11195600.html"},
  {id: "5383000", source: "USGS", name: "LA CROSSE RIVER NEAR WEST SALEM, WI", folder: "catchments/USGS-5383000/5383000.html"},
  {id: "5379288", source: "USGS", name: "BRUCE VALLEY CREEK NEAR PLEASANTVILLE, WI", folder: "catchments/USGS-5379288/5379288.html"},
  {id: "12414500", source: "USGS", name: "ST JOE RIVER AT CALDER, ID", folder: "catchments/USGS-12414500/12414500.html"},
  {id: "1022500", source: "USGS", name: "Narraguagus River at Cherryfield, Maine", folder: "catchments/USGS-1022500/1022500.html"},
  {id: "3068607", source: "USGS", name: "STALNAKER RUN NEAR BOWDEN, WV", folder: "catchments/USGS-3068607/3068607.html"},
  {id: "8381000", source: "USGS", name: "GALLINAS CREEK AT MONTEZUMA, NM", folder: "catchments/USGS-8381000/8381000.html"},
  {id: "6023100", source: "USGS", name: "Beaverhead River at Twin Bridges, MT", folder: "catchments/USGS-6023100/6023100.html"},
  {id: "3498850", source: "USGS", name: "LITTLE RIVER NEAR ALCOA, TN", folder: "catchments/USGS-3498850/3498850.html"},
  {id: "3207905", source: "USGS", name: "BIG CREEK AT DUNLAP, KY", folder: "catchments/USGS-3207905/3207905.html"},
  {id: "2351890", source: "USGS", name: "MUCKALEE CREEK AT GA 195, NEAR LEESBURG, GA", folder: "catchments/USGS-2351890/2351890.html"},
  {id: "2174000", source: "USGS", name: "EDISTO RIVER NEAR BRANCHVILLE, SC", folder: "catchments/USGS-2174000/2174000.html"},
  {id: "214266080", source: "USGS", name: "GAR CREEK AT SR2074 NR CROFT, NC", folder: "catchments/USGS-214266080/214266080.html"},
  {id: "15086960", source: "USGS", name: "SUNRISE LK OUTLET NR WRANGELL AK", folder: "catchments/USGS-15086960/15086960.html"},
  {id: "247100550", source: "USGS", name: "EIGHTMILE CREEK AT MOBILE, AL.", folder: "catchments/USGS-247100550/247100550.html"},
  {id: "9367685", source: "USGS", name: "AH-SHI-SLE-PAH WASH NEAR KIMBETO, NM", folder: "catchments/USGS-9367685/9367685.html"},
  {id: "1174565", source: "USGS", name: "WEST BRANCH SWIFT RIVER NEAR SHUTESBURY, MA", folder: "catchments/USGS-1174565/1174565.html"},
  {id: "08KC002", source: "HYDAT", name: "WRIGHT CREEK AT THE MOUTH", folder: "catchments/HYDAT-08KC002/08KC002.html"},
  {id: "3404900", source: "USGS", name: "LYNN CAMP CREEK AT CORBIN, KY", folder: "catchments/USGS-3404900/3404900.html"},
  {id: "2039000", source: "USGS", name: "BUFFALO CREEK NEAR HAMPDEN SYDNEY, VA", folder: "catchments/USGS-2039000/2039000.html"},
  {id: "10353700", source: "USGS", name: "LEONARD CK NR DENIO, NV", folder: "catchments/USGS-10353700/10353700.html"},
  {id: "3589250", source: "USGS", name: "POND CREEK (NO. 1) NEAR WILSON DAM AL", folder: "catchments/USGS-3589250/3589250.html"},
  {id: "5366300", source: "USGS", name: "BRIDGE CREEK AT AUGUSTA, WI", folder: "catchments/USGS-5366300/5366300.html"},
  {id: "08MH060", source: "HYDAT", name: "SERPENTINE RIVER NEAR PORT KELLS", folder: "catchments/HYDAT-08MH060/08MH060.html"},
  {id: "02HD018", source: "HYDAT", name: "PROCTORS CREEK NEAR BRIGHTON", folder: "catchments/HYDAT-02HD018/02HD018.html"},
  {id: "14185900", source: "USGS", name: "QUARTZVILLE CREEK NEAR CASCADIA, OR", folder: "catchments/USGS-14185900/14185900.html"},
  {id: "3332300", source: "USGS", name: "LITTLE INDIAN CREEK NEAR ROYAL CENTER, IND.", folder: "catchments/USGS-3332300/3332300.html"},
  {id: "05AB046", source: "HYDAT", name: "WILLOW CREEK AT HIGHWAY NO. 811", folder: "catchments/HYDAT-05AB046/05AB046.html"},
  {id: "1570260", source: "USGS", name: "Conodoguinet Creek Trib No. 2B near Enola, PA", folder: "catchments/USGS-1570260/1570260.html"},
  {id: "12399600", source: "USGS", name: "DEEP CREEK NEAR NORTHPORT, WA", folder: "catchments/USGS-12399600/12399600.html"},
  {id: "8049580", source: "USGS", name: "Mountain Ck nr Venus, TX", folder: "catchments/USGS-8049580/8049580.html"},
  {id: "11171500", source: "USGS", name: "COYOTE C NR EDENVALE CA", folder: "catchments/USGS-11171500/11171500.html"},
  {id: "2306660", source: "USGS", name: "AL LOPEZ PARK OUTFLOW AT TAMPA FL", folder: "catchments/USGS-2306660/2306660.html"},
  {id: "3260700", source: "USGS", name: "Bokengehalas Creek near De Graff OH", folder: "catchments/USGS-3260700/3260700.html"},
  {id: "07BA003", source: "HYDAT", name: "LOVETT RIVER NEAR THE MOUTH", folder: "catchments/HYDAT-07BA003/07BA003.html"},
  {id: "1589330", source: "USGS", name: "DEAD RUN AT FRANKLINTOWN, MD", folder: "catchments/USGS-1589330/1589330.html"},
  {id: "1192883", source: "USGS", name: "COGINCHAUG RIVER AT MIDDLEFIELD, CT", folder: "catchments/USGS-1192883/1192883.html"},
  {id: "2038000", source: "USGS", name: "FALLING CREEK NEAR CHESTERFIELD, VA", folder: "catchments/USGS-2038000/2038000.html"},
  {id: "3159540", source: "USGS", name: "Shade River near Chester OH", folder: "catchments/USGS-3159540/3159540.html"},
  {id: "5528500", source: "USGS", name: "BUFFALO CREEK NEAR WHEELING, IL", folder: "catchments/USGS-5528500/5528500.html"},
  {id: "1138000", source: "USGS", name: "AMMONOOSUC RIVER NEAR BATH, NH", folder: "catchments/USGS-1138000/1138000.html"},
  {id: "3403718", source: "USGS", name: "CRABAPPLE BRANCH NR LA FOLLETTE, TN", folder: "catchments/USGS-3403718/3403718.html"},
  {id: "11316000", source: "USGS", name: "BEAR R NR SALT SPRINGS DAM CA", folder: "catchments/USGS-11316000/11316000.html"},
  {id: "8313060", source: "USGS", name: "PUEBLO CANYON NEAR LOS ALAMOS, NM", folder: "catchments/USGS-8313060/8313060.html"},
  {id: "10263900", source: "USGS", name: "BUCKHORN C NR VALYERMO CA", folder: "catchments/USGS-10263900/10263900.html"},
  {id: "2462000", source: "USGS", name: "VALLEY CREEK NEAR OAK GROVE AL", folder: "catchments/USGS-2462000/2462000.html"},
  {id: "9362550", source: "USGS", name: "WILSON GULCH NEAR DURANGO, CO", folder: "catchments/USGS-9362550/9362550.html"},
  {id: "3207915", source: "USGS", name: "ELKFOOT BRANCH LEVISA FORK NEAR HIGH, KY", folder: "catchments/USGS-3207915/3207915.html"},
  {id: "1454500", source: "USGS", name: "Saucon Cr at Friedensville, PA", folder: "catchments/USGS-1454500/1454500.html"},
  {id: "01BF001", source: "HYDAT", name: "NOUVELLE (RIVIERE) AU PONT", folder: "catchments/HYDAT-01BF001/01BF001.html"},
  {id: "13082320", source: "USGS", name: "MARSH CREEK NR DECLO ID", folder: "catchments/USGS-13082320/13082320.html"},
  {id: "06FA001", source: "HYDAT", name: "GAUER RIVER BELOW THORSTEINSON LAKE", folder: "catchments/HYDAT-06FA001/06FA001.html"},
  {id: "3385500", source: "USGS", name: "LAKE GLENDALE INLET NEAR DIXON SPRINGS, IL", folder: "catchments/USGS-3385500/3385500.html"},
  {id: "13349210", source: "USGS", name: "PALOUSE RIVER BELOW SOUTH FORK AT COLFAX, WA", folder: "catchments/USGS-13349210/13349210.html"},
  {id: "11141300", source: "USGS", name: "ARROYO GRANDE NR ARROYO GRANDE CA", folder: "catchments/USGS-11141300/11141300.html"},
  {id: "209741955", source: "USGS", name: "NORTHEAST CREEK AT SR1100 NR GENLEE, NC", folder: "catchments/USGS-209741955/209741955.html"},
  {id: "8170500", source: "USGS", name: "San Marcos Rv at San Marcos, TX", folder: "catchments/USGS-8170500/8170500.html"},
  {id: "4235250", source: "USGS", name: "FLINT CREEK AT PHELPS NY", folder: "catchments/USGS-4235250/4235250.html"},
  {id: "8069000", source: "USGS", name: "Cypress Ck nr Westfield, TX", folder: "catchments/USGS-8069000/8069000.html"},
  {id: "1343060", source: "USGS", name: "WEST CANADA CREEK NEAR WILMURT NY", folder: "catchments/USGS-1343060/1343060.html"},
  {id: "12125000", source: "USGS", name: "SAMMAMISH RIVER NEAR REDMOND, WA", folder: "catchments/USGS-12125000/12125000.html"},
  {id: "214678230", source: "USGS", name: "WALKER BR AT SR1123 NR PINE HARBOR, NC", folder: "catchments/USGS-214678230/214678230.html"},
  {id: "2153680", source: "USGS", name: "BROAD R NR HICKORY GROVE S C", folder: "catchments/USGS-2153680/2153680.html"},
  {id: "3037400", source: "USGS", name: "South Branch Plum Creek near Home, PA", folder: "catchments/USGS-3037400/3037400.html"},
  {id: "9341350", source: "USGS", name: "WINDY PASS CR NR PAGOSA SPR, CO.", folder: "catchments/USGS-9341350/9341350.html"},
  {id: "12451000", source: "USGS", name: "STEHEKIN RIVER AT STEHEKIN, WA", folder: "catchments/USGS-12451000/12451000.html"},
  {id: "6217750", source: "USGS", name: "Fly Creek at Pompeys Pillar MT", folder: "catchments/USGS-6217750/6217750.html"},
  {id: "5294000", source: "USGS", name: "POMME DE TERRE RIVER AT APPLETON, MN", folder: "catchments/USGS-5294000/5294000.html"},
  {id: "5124990", source: "USGS", name: "FILSON CREEK IN SESW SEC. 24 NEAR WINTON, MN", folder: "catchments/USGS-5124990/5124990.html"},
  {id: "1572190", source: "USGS", name: "Swatara Creek near Inwood, PA", folder: "catchments/USGS-1572190/1572190.html"},
  {id: "1334000", source: "USGS", name: "WALLOOMSAC RIVER NEAR NORTH BENNINGTON, VT", folder: "catchments/USGS-1334000/1334000.html"},
  {id: "8411500", source: "USGS", name: "Salt Screwbean Draw nr Orla, TX", folder: "catchments/USGS-8411500/8411500.html"},
  {id: "7072500", source: "USGS", name: "Black River at Black Rock, AR", folder: "catchments/USGS-7072500/7072500.html"},
  {id: "14310700", source: "USGS", name: "SOUTH MYRTLE CREEK NEAR MYRTLE CREEK,OREG.", folder: "catchments/USGS-14310700/14310700.html"},
  {id: "8313300", source: "USGS", name: "RITO DE L FRIJOLES NR LOS ALAMOS, NM", folder: "catchments/USGS-8313300/8313300.html"},
  {id: "10317450", source: "USGS", name: "GANCE CK NR TUSCARORA, NV", folder: "catchments/USGS-10317450/10317450.html"},
  {id: "3020500", source: "USGS", name: "Oil Creek at Rouseville, PA", folder: "catchments/USGS-3020500/3020500.html"},
  {id: "1427500", source: "USGS", name: "CALLICOON CREEK AT CALLICOON NY", folder: "catchments/USGS-1427500/1427500.html"},
  {id: "1576540", source: "USGS", name: "Mill Creek at Eshelman Mill Road near Lyndon, PA", folder: "catchments/USGS-1576540/1576540.html"},
  {id: "1484695", source: "USGS", name: "BEAVERDAM DITCH NEAR MILLVILLE, DE", folder: "catchments/USGS-1484695/1484695.html"},
  {id: "12324660", source: "USGS", name: "Gold Creek at Goldcreek MT", folder: "catchments/USGS-12324660/12324660.html"},
  {id: "02UC002", source: "HYDAT", name: "MOISIE (RIVIERE) A 5,1 KM EN AMONT DU PONT DU Q.N.S.L.R.", folder: "catchments/HYDAT-02UC002/02UC002.html"},
  {id: "2105900", source: "USGS", name: "HOOD CREEK NEAR LELAND, NC", folder: "catchments/USGS-2105900/2105900.html"},
  {id: "08HA025", source: "HYDAT", name: "DE MAMIEL CREEK AT THE MOUTH", folder: "catchments/HYDAT-08HA025/08HA025.html"},
  {id: "11084500", source: "USGS", name: "FISH C NR DUARTE CA", folder: "catchments/USGS-11084500/11084500.html"},
  {id: "1546400", source: "USGS", name: "Spring Creek at Houserville, PA", folder: "catchments/USGS-1546400/1546400.html"},
  {id: "1370600", source: "USGS", name: "CRYSTAL BROOK NEAR MIDDLETOWN NY", folder: "catchments/USGS-1370600/1370600.html"},
  {id: "7315200", source: "USGS", name: "E Fk Little Wichita Rv nr Henrietta, TX", folder: "catchments/USGS-7315200/7315200.html"},
  {id: "8398500", source: "USGS", name: "RIO PENASCO AT DAYTON, NM", folder: "catchments/USGS-8398500/8398500.html"},
  {id: "08BB001", source: "HYDAT", name: "TAKU RIVER NEAR TULSEQUAH", folder: "catchments/HYDAT-08BB001/08BB001.html"},
  {id: "7165700", source: "USGS", name: "VERDIGRIS R NR MADISON, KS", folder: "catchments/USGS-7165700/7165700.html"},
  {id: "11202000", source: "USGS", name: "NF OF MF TULE R NR SPRINGVILLE(RIVER ONLY CA", folder: "catchments/USGS-11202000/11202000.html"},
  {id: "214677974", source: "USGS", name: "STEELE CR AB SR1344 NR SHOPTON, NC", folder: "catchments/USGS-214677974/214677974.html"},
  {id: "11208610", source: "USGS", name: "MONARCH C NR HAMMOND CA", folder: "catchments/USGS-11208610/11208610.html"},
  {id: "1073000", source: "USGS", name: "OYSTER RIVER NEAR DURHAM, NH", folder: "catchments/USGS-1073000/1073000.html"},
  {id: "6798800", source: "USGS", name: "ELKHORN R AT MEADOW GROVE, NE", folder: "catchments/USGS-6798800/6798800.html"},
  {id: "06CE001", source: "HYDAT", name: "FOSTER RIVER ABOVE CHURCHILL RIVER", folder: "catchments/HYDAT-06CE001/06CE001.html"},
  {id: "2391860", source: "USGS", name: "ETOWAH RIVER DOWNSTREAM OF I-575, AT CANTON, GA", folder: "catchments/USGS-2391860/2391860.html"},
  {id: "02PJ028", source: "HYDAT", name: "LINIERE (RIVIERE) A SAINT-COME-2", folder: "catchments/HYDAT-02PJ028/02PJ028.html"},
  {id: "4230380", source: "USGS", name: "OATKA CREEK AT WARSAW NY", folder: "catchments/USGS-4230380/4230380.html"},
  {id: "6364700", source: "USGS", name: "ANTELOPE CREEK NEAR TECKLA, WY", folder: "catchments/USGS-6364700/6364700.html"},
  {id: "7197360", source: "USGS", name: "Caney Creek near Barber, OK", folder: "catchments/USGS-7197360/7197360.html"},
  {id: "9175900", source: "USGS", name: "DRY CREEK NEAR NATURITA, CO.", folder: "catchments/USGS-9175900/9175900.html"},
  {id: "8013000", source: "USGS", name: "Calcasieu River nr Glenmora, LA", folder: "catchments/USGS-8013000/8013000.html"},
  {id: "12051500", source: "USGS", name: "CHIMACUM CREEK NEAR CHIMACUM, WA", folder: "catchments/USGS-12051500/12051500.html"},
  {id: "3102500", source: "USGS", name: "Little Shenango River at Greenville, PA", folder: "catchments/USGS-3102500/3102500.html"},
  {id: "11389000", source: "USGS", name: "SACRAMENTO R A BUTTE CITY CA", folder: "catchments/USGS-11389000/11389000.html"},
  {id: "2312200", source: "USGS", name: "LITTLE WITHLACOOCHEE RIVER AT RERDELL, FL", folder: "catchments/USGS-2312200/2312200.html"},
  {id: "6436198", source: "USGS", name: "WHITEWOOD CR ABOVE VALE,SD", folder: "catchments/USGS-6436198/6436198.html"},
  {id: "6333900", source: "USGS", name: "North Cr Spreader Diversion nr Alzada MT", folder: "catchments/USGS-6333900/6333900.html"},
  {id: "4083000", source: "USGS", name: "WEST BR FOND DU LAC R AT FOND DU LAC, WI", folder: "catchments/USGS-4083000/4083000.html"},
  {id: "02HC046", source: "HYDAT", name: "WIXON CREEK BELOW ALTONA", folder: "catchments/HYDAT-02HC046/02HC046.html"},
  {id: "3436100", source: "USGS", name: "RED RIVER AT PORT ROYAL, TN", folder: "catchments/USGS-3436100/3436100.html"},
  {id: "11133700", source: "USGS", name: "PURISIMA C NR LOMPOC CA", folder: "catchments/USGS-11133700/11133700.html"},
  {id: "12093900", source: "USGS", name: "CARBON RIVER AT FAIRFAX, WA", folder: "catchments/USGS-12093900/12093900.html"},
  {id: "8205500", source: "USGS", name: "Frio Rv nr Derby, TX", folder: "catchments/USGS-8205500/8205500.html"},
  {id: "1513500", source: "USGS", name: "SUSQUEHANNA RIVER AT VESTAL NY", folder: "catchments/USGS-1513500/1513500.html"},
  {id: "2298202", source: "USGS", name: "SHELL CREEK NEAR PUNTA GORDA FL", folder: "catchments/USGS-2298202/2298202.html"},
  {id: "3364000", source: "USGS", name: "EAST FORK WHITE RIVER AT COLUMBUS, IN", folder: "catchments/USGS-3364000/3364000.html"},
  {id: "1601000", source: "USGS", name: "Wills Creek below Hyndman, PA", folder: "catchments/USGS-1601000/1601000.html"},
  {id: "10309025", source: "USGS", name: "INDIAN CK AT WOODFORDS, CA", folder: "catchments/USGS-10309025/10309025.html"},
  {id: "1576105", source: "USGS", name: "Conestoga River near Terre Hill, PA", folder: "catchments/USGS-1576105/1576105.html"},
  {id: "1473500", source: "USGS", name: "Schuylkill River at Norristown, PA", folder: "catchments/USGS-1473500/1473500.html"},
  {id: "13019500", source: "USGS", name: "HOBACK RIVER NR JACKSON WY", folder: "catchments/USGS-13019500/13019500.html"},
  {id: "07AA007", source: "HYDAT", name: "SUNWAPTA RIVER AT ATHABASCA GLACIER", folder: "catchments/HYDAT-07AA007/07AA007.html"},
  {id: "4179500", source: "USGS", name: "CEDAR CREEK AT AUBURN, IND.", folder: "catchments/USGS-4179500/4179500.html"},
  {id: "8343100", source: "USGS", name: "GRANTS CANYON AT GRANTS, NM", folder: "catchments/USGS-8343100/8343100.html"},
  {id: "11313477", source: "USGS", name: "LO BLUE LK OUTLET NR MARKLEEVILLE CA", folder: "catchments/USGS-11313477/11313477.html"},
  {id: "12011000", source: "USGS", name: "NORTH NEMAH RIVER NEAR SOUTH BEND, WA", folder: "catchments/USGS-12011000/12011000.html"},
  {id: "04FB001", source: "HYDAT", name: "ATTAWAPISKAT RIVER BELOW ATTAWAPISKAT LAKE", folder: "catchments/HYDAT-04FB001/04FB001.html"},
  {id: "6091000", source: "USGS", name: "Two Medicine Creek near East Glacier MT", folder: "catchments/USGS-6091000/6091000.html"},
  {id: "05DE007", source: "HYDAT", name: "ROSE CREEK NEAR ALDER FLATS", folder: "catchments/HYDAT-05DE007/05DE007.html"},
  {id: "9310600", source: "USGS", name: "ECCLES CANYON NEAR SCOFIELD, UTAH", folder: "catchments/USGS-9310600/9310600.html"},
  {id: "7233210", source: "USGS", name: "Beaver River near Hardesty, OK", folder: "catchments/USGS-7233210/7233210.html"},
  {id: "7057500", source: "USGS", name: "North Fork River near Tecumseh, MO", folder: "catchments/USGS-7057500/7057500.html"},
  {id: "01AD015", source: "HYDAT", name: "MADAWASKA (RIVIERE) A 6 KM EN AVAL DU BARRAGE TEMISCOUATA", folder: "catchments/HYDAT-01AD015/01AD015.html"},
  {id: "7364150", source: "USGS", name: "Bayou Bartholomew near McGehee, AR", folder: "catchments/USGS-7364150/7364150.html"},
  {id: "11298650", source: "USGS", name: "ANGELS C BL MURPHYS AFTERBAY NR MURPHYS CA", folder: "catchments/USGS-11298650/11298650.html"},
  {id: "02GA045", source: "HYDAT", name: "HUNSBURGER CREEK NEAR HAYSVILLE", folder: "catchments/HYDAT-02GA045/02GA045.html"},
  {id: "12422950", source: "USGS", name: "HANGMAN CREEK NR TENSED ID", folder: "catchments/USGS-12422950/12422950.html"},
  {id: "7074420", source: "USGS", name: "Black River at Elgin Ferry, AR", folder: "catchments/USGS-7074420/7074420.html"},
  {id: "9303320", source: "USGS", name: "WAGONWHEEL CREEK AT BUDGES RESORT, CO.", folder: "catchments/USGS-9303320/9303320.html"},
  {id: "10243260", source: "USGS", name: "LEHMAN CK NR BAKER, NV", folder: "catchments/USGS-10243260/10243260.html"},
  {id: "4211500", source: "USGS", name: "Mill Creek near Jefferson OH", folder: "catchments/USGS-4211500/4211500.html"},
  {id: "5471013", source: "USGS", name: "Walnut Creek near Kelley, IA", folder: "catchments/USGS-5471013/5471013.html"},
  {id: "6413650", source: "USGS", name: "LIME CREEK AT MOUTH AT RAPID CITY, SD", folder: "catchments/USGS-6413650/6413650.html"},
  {id: "14021980", source: "USGS", name: "PATAWA CREEK AT WEST BOUNDARY NR PENDLETON, OR", folder: "catchments/USGS-14021980/14021980.html"},
  {id: "2197306", source: "USGS", name: "TIMS BRANCH AT ROAD 2 AT SRS, SC", folder: "catchments/USGS-2197306/2197306.html"},
  {id: "11202001", source: "USGS", name: "NF OF MF TULE R NR SPRINGVILLE (TOTAL FLOW) CA", folder: "catchments/USGS-11202001/11202001.html"},
  {id: "2223382", source: "USGS", name: "OCONEE RIVER NEAR DUBLIN, GA", folder: "catchments/USGS-2223382/2223382.html"},
  {id: "7356000", source: "USGS", name: "Ouachita River near Mount Ida, AR", folder: "catchments/USGS-7356000/7356000.html"},
  {id: "2125696", source: "USGS", name: "LANE CREEK AT SR2115 NEAR TRINITY, NC", folder: "catchments/USGS-2125696/2125696.html"},
  {id: "2096700", source: "USGS", name: "BIG ALAMANCE CREEK NEAR ELON COLLEGE, NC", folder: "catchments/USGS-2096700/2096700.html"},
  {id: "1593500", source: "USGS", name: "LITTLE PATUXENT RIVER AT GUILFORD, MD", folder: "catchments/USGS-1593500/1593500.html"},
  {id: "2335580", source: "USGS", name: "BIG CREEK AT GA 9, NEAR CUMMING, GA", folder: "catchments/USGS-2335580/2335580.html"},
  {id: "11390660", source: "USGS", name: "WALKER C A ARTOIS CA", folder: "catchments/USGS-11390660/11390660.html"},
  {id: "5399550", source: "USGS", name: "FENWOOD CREEK AT BRADLEY, WI", folder: "catchments/USGS-5399550/5399550.html"},
  {id: "11284700", source: "USGS", name: "NF TUOLUMNE R NR LONG BARN CA", folder: "catchments/USGS-11284700/11284700.html"},
  {id: "3148150", source: "USGS", name: "Moxahala Creek near Crooksville OH", folder: "catchments/USGS-3148150/3148150.html"},
  {id: "02HC045", source: "HYDAT", name: "MICHELL CREEK BELOW CLAREMONT", folder: "catchments/HYDAT-02HC045/02HC045.html"},
  {id: "8196000", source: "USGS", name: "Dry Frio Rv nr Reagan Wells, TX", folder: "catchments/USGS-8196000/8196000.html"},
  {id: "12072000", source: "USGS", name: "CHICO CREEK NEAR BREMERTON, WA", folder: "catchments/USGS-12072000/12072000.html"},
  {id: "08LF084", source: "HYDAT", name: "ANDERSON CREEK ABOVE DIVERSIONS", folder: "catchments/HYDAT-08LF084/08LF084.html"},
  {id: "5378235", source: "USGS", name: "GARVIN BROOK NEAR MINNESOTA CITY, MN", folder: "catchments/USGS-5378235/5378235.html"},
  {id: "11147600", source: "USGS", name: "HUERHUERO C NR CRESTON CA", folder: "catchments/USGS-11147600/11147600.html"},
  {id: "13337000", source: "USGS", name: "LOCHSA RIVER NR LOWELL ID", folder: "catchments/USGS-13337000/13337000.html"},
  {id: "13137500", source: "USGS", name: "TRAIL CREEK AT KETCHUM ID", folder: "catchments/USGS-13137500/13137500.html"},
  {id: "6818494", source: "USGS", name: "QUARRY C AT MISSOURI R, FT LEAVENWORTH, KS", folder: "catchments/USGS-6818494/6818494.html"},
  {id: "13117300", source: "USGS", name: "SAWMILL CREEK NR GOLDBURG ID", folder: "catchments/USGS-13117300/13117300.html"},
  {id: "6798000", source: "USGS", name: "SOUTH FORK ELKHORN RIVER NEAR EWING, NE", folder: "catchments/USGS-6798000/6798000.html"},
  {id: "01EJ006", source: "HYDAT", name: "MCINTOSH RUN AT OLD SAMBRO ROAD", folder: "catchments/HYDAT-01EJ006/01EJ006.html"},
  {id: "14203750", source: "USGS", name: "GALES CREEK NEAR GLENWOOD, OR", folder: "catchments/USGS-14203750/14203750.html"},
  {id: "10257800", source: "USGS", name: "LONG C NR DESERT HOT SPRINGS CA", folder: "catchments/USGS-10257800/10257800.html"},
  {id: "7047950", source: "USGS", name: "LAnguille River at Palestine, AR", folder: "catchments/USGS-7047950/7047950.html"},
  {id: "12434590", source: "USGS", name: "SANPOIL RIVER ABOVE JACK CREEK AT KELLER, WA", folder: "catchments/USGS-12434590/12434590.html"},
  {id: "2438500", source: "USGS", name: "BUTTAHATCHEE RIVER NEAR HAMILTON, AL.", folder: "catchments/USGS-2438500/2438500.html"},
  {id: "02YN003", source: "HYDAT", name: "STAR BROOK BELOW STAR LAKE", folder: "catchments/HYDAT-02YN003/02YN003.html"},
  {id: "10172765", source: "USGS", name: "CLOVER CREEK ABOVE BIG HOLLOW, NEAR CLOVER, UT", folder: "catchments/USGS-10172765/10172765.html"},
  {id: "208273070", source: "USGS", name: "DEVILS CRADLE C AT NC 39 NR KEARNEY, NC", folder: "catchments/USGS-208273070/208273070.html"},
  {id: "1483500", source: "USGS", name: "LEIPSIC RIVER NEAR CHESWOLD, DE", folder: "catchments/USGS-1483500/1483500.html"},
  {id: "4102420", source: "USGS", name: "PAW PAW RIVER NEAR HARTFORD, MI", folder: "catchments/USGS-4102420/4102420.html"},
  {id: "1674000", source: "USGS", name: "MATTAPONI RIVER NEAR BOWLING GREEN, VA", folder: "catchments/USGS-1674000/1674000.html"},
  {id: "4164300", source: "USGS", name: "EAST BRANCH COON CREEK AT ARMADA, MI", folder: "catchments/USGS-4164300/4164300.html"},
  {id: "7317500", source: "USGS", name: "Sandstone Creek SWS 16A nr Cheyenne, OK", folder: "catchments/USGS-7317500/7317500.html"},
  {id: "3599450", source: "USGS", name: "FOUNTAIN CREEK NEAR FOUNTAIN HEIGHTS, TN", folder: "catchments/USGS-3599450/3599450.html"},
  {id: "1555000", source: "USGS", name: "Penns Creek at Penns Creek, PA", folder: "catchments/USGS-1555000/1555000.html"},
  {id: "10241800", source: "USGS", name: "ASHDOWN CREEK NEAR CEDAR CITY, UTAH", folder: "catchments/USGS-10241800/10241800.html"},
  {id: "5547755", source: "USGS", name: "SQUAW CREEK AT ROUND LAKE, IL", folder: "catchments/USGS-5547755/5547755.html"},
  {id: "6301850", source: "USGS", name: "BIG GOOSE C AB PK DITCH, IN CANYON, NR SHERIDAN,WY", folder: "catchments/USGS-6301850/6301850.html"},
  {id: "02ED015", source: "HYDAT", name: "MAD RIVER AT AVENING", folder: "catchments/HYDAT-02ED015/02ED015.html"},
  {id: "9512100", source: "USGS", name: "INDIAN BEND WASH AT SCOTTSDALE ARIZ", folder: "catchments/USGS-9512100/9512100.html"},
  {id: "10347300", source: "USGS", name: "DOG CK NR VERDI, NV", folder: "catchments/USGS-10347300/10347300.html"},
];</script>
## References
1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020.