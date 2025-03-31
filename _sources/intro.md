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
* **Data sources**: 3

## Data Dictionary
| Source Code | Description |
|-------------|-------------|
| HYDAT | HYDAT database from Water Survey of Canada (WSC) |
| Mexico | No description available |
| USGS | United States Geological Survey |

<script>
// Catchment data for search
const catchments = [
  {id: "02GH003", source: "HYDAT", name: "CANARD RIVER NEAR LUKERVILLE", folder: "catchments/HYDAT-02GH003/02GH003.html"},
  {id: "12324590", source: "USGS", name: "Little Blackfoot River near Garrison MT", folder: "catchments/USGS-12324590/12324590.html"},
  {id: "7361200", source: "USGS", name: "OZAN CREEK NEAR MCCASKILL, ARK.", folder: "catchments/USGS-7361200/7361200.html"},
  {id: "01CC005", source: "HYDAT", name: "WEST RIVER AT RIVERDALE", folder: "catchments/HYDAT-01CC005/01CC005.html"},
  {id: "2149702", source: "USGS", name: "GREEN RIVER NEAR SALUDA, NC", folder: "catchments/USGS-2149702/2149702.html"},
  {id: "12200762", source: "USGS", name: "UNNAMED TRIBUTARY MASSACRE BAY ON ORCAS ISLAND, WA", folder: "catchments/USGS-12200762/12200762.html"},
  {id: "2444490", source: "USGS", name: "BOGUE CHITTO CREEK NEAR MEMPHIS, ALABAMA", folder: "catchments/USGS-2444490/2444490.html"},
  {id: "10343500", source: "USGS", name: "SAGEHEN C NR TRUCKEE CA", folder: "catchments/USGS-10343500/10343500.html"},
  {id: "3298100", source: "USGS", name: "POPE LICK AT POPE LICK ROAD NEAR MIDDLETOWN, KY", folder: "catchments/USGS-3298100/3298100.html"},
  {id: "10308789", source: "USGS", name: "LEVIATHAN C AB ASPEN C NR MARKLEEVILLE CA", folder: "catchments/USGS-10308789/10308789.html"},
  {id: "3136175", source: "USGS", name: "Kokosing River near Lucerne OH", folder: "catchments/USGS-3136175/3136175.html"},
  {id: "5060510", source: "USGS", name: "CASS COUNTY DRAIN #52 NEAR AMENIA, ND", folder: "catchments/USGS-5060510/5060510.html"},
  {id: "12408000", source: "USGS", name: "COLVILLE RIVER AT BLUE CREEK, WA", folder: "catchments/USGS-12408000/12408000.html"},
  {id: "12407700", source: "USGS", name: "CHEWELAH CREEK AT CHEWELAH, WA", folder: "catchments/USGS-12407700/12407700.html"},
  {id: "6154430", source: "USGS", name: "Lodge Pole Creek at Lodge Pole MT", folder: "catchments/USGS-6154430/6154430.html"},
  {id: "05PB015", source: "HYDAT", name: "PIPESTONE RIVER ABOVE RAINY LAKE", folder: "catchments/HYDAT-05PB015/05PB015.html"},
  {id: "2317748", source: "USGS", name: "WITHLACOOCHEE R AT SKIPPER BR RD, NR BEMISS, GA", folder: "catchments/USGS-2317748/2317748.html"},
  {id: "6453255", source: "USGS", name: "CHOTEAU CR NR AVON SD", folder: "catchments/USGS-6453255/6453255.html"},
  {id: "6040300", source: "USGS", name: "Jack Creek near Ennis MT", folder: "catchments/USGS-6040300/6040300.html"},
  {id: "11154100", source: "USGS", name: "BODFISH C NR GILROY CA", folder: "catchments/USGS-11154100/11154100.html"},
  {id: "11135200", source: "USGS", name: "RODEO-SAN PASQUAL C NR LOMPOC CA", folder: "catchments/USGS-11135200/11135200.html"},
  {id: "5414820", source: "USGS", name: "SINSINAWA RIVER NEAR MENOMINEE, IL", folder: "catchments/USGS-5414820/5414820.html"},
  {id: "5422450", source: "USGS", name: "Crow Creek at Mount Joy, IA", folder: "catchments/USGS-5422450/5422450.html"},
  {id: "9302450", source: "USGS", name: "LOST CREEK NEAR BUFORD, CO.", folder: "catchments/USGS-9302450/9302450.html"},
  {id: "08HA069", source: "HYDAT", name: "RENFREW CREEK NEAR PORT RENFREW", folder: "catchments/HYDAT-08HA069/08HA069.html"},
  {id: "14241100", source: "USGS", name: "NORTH FORK TOUTLE RIVER AT KID VALLEY, WA", folder: "catchments/USGS-14241100/14241100.html"},
  {id: "6284200", source: "USGS", name: "SHOSHONE RIVER AT WILLWOOD, WY", folder: "catchments/USGS-6284200/6284200.html"},
  {id: "2298530", source: "USGS", name: "COKER CREEK NEAR MYAKKA CITY FL", folder: "catchments/USGS-2298530/2298530.html"},
  {id: "14193300", source: "USGS", name: "MILL CREEK NEAR WILLAMINA, OR", folder: "catchments/USGS-14193300/14193300.html"},
  {id: "3427690", source: "USGS", name: "BUSHMAN CRK AT PITTS LANE FORD NR COMPTON, TN", folder: "catchments/USGS-3427690/3427690.html"},
  {id: "12455000", source: "USGS", name: "WENATCHEE RIVER BELOW WENATCHEE LAKE, WA", folder: "catchments/USGS-12455000/12455000.html"},
  {id: "1101000", source: "USGS", name: "PARKER RIVER AT BYFIELD, MA", folder: "catchments/USGS-1101000/1101000.html"},
  {id: "3427500", source: "USGS", name: "EAST FORK STONES RIVER NEAR LASCASSAS, TN", folder: "catchments/USGS-3427500/3427500.html"},
  {id: "11443501", source: "USGS", name: "SF AMERICAN R NR CAMINO + AMERICAN R FLUME CA", folder: "catchments/USGS-11443501/11443501.html"},
  {id: "2414715", source: "USGS", name: "TALLAPOOSA RIVER NR NEW SITE, AL.(HORSESHOE BEND)", folder: "catchments/USGS-2414715/2414715.html"},
  {id: "9122000", source: "USGS", name: "CEBOLLA CREEK AT POWDERHORN, CO.", folder: "catchments/USGS-9122000/9122000.html"},
  {id: "11376550", source: "USGS", name: "BATTLE C BL COLEMAN FISH HATCHERY NR COTTONWOOD CA", folder: "catchments/USGS-11376550/11376550.html"},
  {id: "15765185", source: "USGS", name: "Unnamed Trib to Big Spring Run nr Willow Street PA", folder: "catchments/USGS-15765185/15765185.html"},
  {id: "11231600", source: "USGS", name: "MONO C BL DIV DAM NR MONO HOT SPRINGS CA", folder: "catchments/USGS-11231600/11231600.html"},
  {id: "5077700", source: "USGS", name: "RUFFY BROOK NEAR GONVICK, MN", folder: "catchments/USGS-5077700/5077700.html"},
  {id: "12025000", source: "USGS", name: "NEWAUKUM RIVER NEAR CHEHALIS, WA", folder: "catchments/USGS-12025000/12025000.html"},
  {id: "9485500", source: "USGS", name: "PANTANO WASH NEAR TUCSON ARIZ", folder: "catchments/USGS-9485500/9485500.html"},
  {id: "5507500", source: "USGS", name: "Salt River near Monroe City, MO", folder: "catchments/USGS-5507500/5507500.html"},
  {id: "6891490", source: "USGS", name: "YANKEE TANK C NR LAWRENCE, KS", folder: "catchments/USGS-6891490/6891490.html"},
  {id: "11042800", source: "USGS", name: "WARM SPRINGS C NR MURRIETA CA", folder: "catchments/USGS-11042800/11042800.html"},
  {id: "10148400", source: "USGS", name: "NEBO CREEK NEAR THISTLE, UTAH", folder: "catchments/USGS-10148400/10148400.html"},
  {id: "05CA012", source: "HYDAT", name: "FALLENTIMBER CREEK NEAR SUNDRE", folder: "catchments/HYDAT-05CA012/05CA012.html"},
  {id: "6921720", source: "USGS", name: "Big Creek near Blairstown, MO", folder: "catchments/USGS-6921720/6921720.html"},
  {id: "5341500", source: "USGS", name: "APPLE RIVER NEAR SOMERSET, WI", folder: "catchments/USGS-5341500/5341500.html"},
  {id: "02PB004", source: "HYDAT", name: "SAINTE-ANNE (RIVIERE) (BRAS DU NORD DE LA)", folder: "catchments/HYDAT-02PB004/02PB004.html"},
  {id: "15296950", source: "USGS", name: "AKALURA C AT OLGA BAY AK", folder: "catchments/USGS-15296950/15296950.html"},
  {id: "2146579", source: "USGS", name: "IRVIN'S CREEK AT LEBANON RD NR MINT HILL, NC", folder: "catchments/USGS-2146579/2146579.html"},
  {id: "12413040", source: "USGS", name: "SF COEUR D ALENE R ABV DEADMAN GULCH NR MULLAN ID", folder: "catchments/USGS-12413040/12413040.html"},
  {id: "10UH002", source: "HYDAT", name: "APEX RIVER AT APEX", folder: "catchments/HYDAT-10UH002/10UH002.html"},
  {id: "6697200", source: "USGS", name: "FRENCH CREEK NEAR JEFFERSON,COLORADO", folder: "catchments/USGS-6697200/6697200.html"},
  {id: "1401650", source: "USGS", name: "Pike Run at Belle Mead NJ", folder: "catchments/USGS-1401650/1401650.html"},
  {id: "5357182", source: "USGS", name: "RICE CREEK AT CT HIGHWAY K NR BOULDER JUNCTION, WI", folder: "catchments/USGS-5357182/5357182.html"},
  {id: "2371500", source: "USGS", name: "CONECUH RIVER AT BRANTLEY AL", folder: "catchments/USGS-2371500/2371500.html"},
  {id: "02BA003", source: "HYDAT", name: "LITTLE PIC RIVER NEAR COLDWELL", folder: "catchments/HYDAT-02BA003/02BA003.html"},
  {id: "15054600", source: "USGS", name: "BRIDGET COVE TR NR AUKE BAY AK", folder: "catchments/USGS-15054600/15054600.html"},
  {id: "08NA056", source: "HYDAT", name: "DRY GULCH CREEK NEAR RADIUM JUNCTION", folder: "catchments/HYDAT-08NA056/08NA056.html"},
  {id: "3198690", source: "USGS", name: "Spruce Fork at Sharples, WV", folder: "catchments/USGS-3198690/3198690.html"},
  {id: "2369800", source: "USGS", name: "BLACKWATER RIVER NEAR BRADLEY AL", folder: "catchments/USGS-2369800/2369800.html"},
  {id: "7254500", source: "USGS", name: "SIXMILE C SWS 2 NR CAULKSVILLE ARK", folder: "catchments/USGS-7254500/7254500.html"},
  {id: "1547950", source: "USGS", name: "Beech Creek at Monument, PA", folder: "catchments/USGS-1547950/1547950.html"},
  {id: "5502500", source: "USGS", name: "North Fork Salt River near Shelbina, MO", folder: "catchments/USGS-5502500/5502500.html"},
  {id: "1425500", source: "USGS", name: "COLD SPRING BROOK AT CHINA NY", folder: "catchments/USGS-1425500/1425500.html"},
  {id: "1583000", source: "USGS", name: "SLADE RUN NEAR GLYNDON, MD", folder: "catchments/USGS-1583000/1583000.html"},
  {id: "10965844", source: "USGS", name: "BEAVER BROOK AT SOUTH ROAD, NEAR DERRY, NH", folder: "catchments/USGS-10965844/10965844.html"},
  {id: "3431517", source: "USGS", name: "CUMMINGS BRANCH AT LICKTON, TN", folder: "catchments/USGS-3431517/3431517.html"},
  {id: "11519000", source: "USGS", name: "SHACKLEFORD C NR MUGGINSVILLE CA", folder: "catchments/USGS-11519000/11519000.html"},
  {id: "08MH056", source: "HYDAT", name: "SLESSE CREEK NEAR VEDDER CROSSING", folder: "catchments/HYDAT-08MH056/08MH056.html"},
  {id: "2329600", source: "USGS", name: "LITTLE RIVER NR MIDWAY, FLA.", folder: "catchments/USGS-2329600/2329600.html"},
  {id: "1434176", source: "USGS", name: "WEST BR NEVERSINK RIVER NR CLARYVILLE NY", folder: "catchments/USGS-1434176/1434176.html"},
  {id: "08NG009", source: "HYDAT", name: "CAITHNESS (ROCK) CREEK NEAR GALLOWAY", folder: "catchments/HYDAT-08NG009/08NG009.html"},
  {id: "11475560", source: "USGS", name: "ELDER C NR BRANSCOMB CA", folder: "catchments/USGS-11475560/11475560.html"},
  {id: "1073750", source: "USGS", name: "MILL BROOK NR NH 108, AT STRATHAM, NH", folder: "catchments/USGS-1073750/1073750.html"},
  {id: "1172800", source: "USGS", name: "NATTY POND BROOK NEAR HUBBARDSTON, MA", folder: "catchments/USGS-1172800/1172800.html"},
  {id: "11374100", source: "USGS", name: "BEAR C NR MILLVILLE CA", folder: "catchments/USGS-11374100/11374100.html"},
  {id: "4282795", source: "USGS", name: "LAPLATTE RIVER AT SHELBURNE FALLS, VT.", folder: "catchments/USGS-4282795/4282795.html"},
  {id: "09AC007", source: "HYDAT", name: "IBEX RIVER NEAR WHITEHORSE", folder: "catchments/HYDAT-09AC007/09AC007.html"},
  {id: "13317000", source: "USGS", name: "SALMON RIVER AT WHITE BIRD ID", folder: "catchments/USGS-13317000/13317000.html"},
  {id: "8158930", source: "USGS", name: "Williamson Ck at Manchaca Rd, Austin, TX", folder: "catchments/USGS-8158930/8158930.html"},
  {id: "13051000", source: "USGS", name: "TRAIL CREEK NR VICTOR ID", folder: "catchments/USGS-13051000/13051000.html"},
  {id: "4220250", source: "USGS", name: "WEST CREEK NEAR HILTON NY", folder: "catchments/USGS-4220250/4220250.html"},
  {id: "21459367", source: "USGS", name: "BIG DUTCHMAN CREEK AT ROCK HILL, SC", folder: "catchments/USGS-21459367/21459367.html"},
  {id: "12103500", source: "USGS", name: "SNOW CREEK NEAR LESTER, WA", folder: "catchments/USGS-12103500/12103500.html"},
  {id: "1361500", source: "USGS", name: "CATSKILL CREEK AT OAK HILL NY", folder: "catchments/USGS-1361500/1361500.html"},
  {id: "1399200", source: "USGS", name: "Lamington (Black) River near Ironia NJ", folder: "catchments/USGS-1399200/1399200.html"},
  {id: "12144800", source: "USGS", name: "BEAVER CREEK NEAR SNOQUALMIE, WA", folder: "catchments/USGS-12144800/12144800.html"},
  {id: "6799230", source: "USGS", name: "UNION CREEK AT MADISON, NEBR.", folder: "catchments/USGS-6799230/6799230.html"},
  {id: "1631000", source: "USGS", name: "S F SHENANDOAH RIVER AT FRONT ROYAL, VA", folder: "catchments/USGS-1631000/1631000.html"},
  {id: "5525000", source: "USGS", name: "IROQUOIS RIVER AT IROQUOIS, IL", folder: "catchments/USGS-5525000/5525000.html"},
  {id: "1022840", source: "USGS", name: "Otter Creek near Bar Harbor, Maine", folder: "catchments/USGS-1022840/1022840.html"},
  {id: "6309460", source: "USGS", name: "BEAVER C AB WHITE PANTHER DITCH NR BARNUM WY", folder: "catchments/USGS-6309460/6309460.html"},
  {id: "02GA035", source: "HYDAT", name: "EAST CANAGAGIGUE CREEK NEAR FLORADALE", folder: "catchments/HYDAT-02GA035/02GA035.html"},
  {id: "2316000", source: "USGS", name: "ALAPAHA RIVER NEAR ALAPAHA, GA", folder: "catchments/USGS-2316000/2316000.html"},
  {id: "5484800", source: "USGS", name: "Walnut Creek at Des Moines, IA", folder: "catchments/USGS-5484800/5484800.html"},
  {id: "5127220", source: "USGS", name: "BURGO CREEK NEAR ELY, MN", folder: "catchments/USGS-5127220/5127220.html"},
  {id: "11473530", source: "USGS", name: "MILL C BL ALDER C NR COVELO CA", folder: "catchments/USGS-11473530/11473530.html"},
  {id: "7122400", source: "USGS", name: "CROOKED ARROYO NEAR SWINK, CO.", folder: "catchments/USGS-7122400/7122400.html"},
  {id: "3361630", source: "USGS", name: "SUGAR CREEK AT EDEN, IN", folder: "catchments/USGS-3361630/3361630.html"},
  {id: "7052050", source: "USGS", name: "N. F. WILSON CK AT HWY 13 AND 160,SPRINGFIELD,MO", folder: "catchments/USGS-7052050/7052050.html"},
  {id: "5487980", source: "USGS", name: "White Breast Creek near Dallas, IA", folder: "catchments/USGS-5487980/5487980.html"},
  {id: "7052120", source: "USGS", name: "South Creek near Springfield, MO", folder: "catchments/USGS-7052120/7052120.html"},
  {id: "6889700", source: "USGS", name: "SHUNGANUNGA C AT RICE RD, TOPEKA, KS", folder: "catchments/USGS-6889700/6889700.html"},
  {id: "1505500", source: "USGS", name: "CANASAWACTA CREEK NEAR SOUTH PLYMOUTH NY", folder: "catchments/USGS-1505500/1505500.html"},
  {id: "2011400", source: "USGS", name: "JACKSON RIVER NEAR BACOVA, VA", folder: "catchments/USGS-2011400/2011400.html"},
  {id: "1621410", source: "USGS", name: "BLACKS RUN AT RT 726 AT HARRISONBURG, VA", folder: "catchments/USGS-1621410/1621410.html"},
  {id: "1410787", source: "USGS", name: "Great Egg Harbor R tr at Sicklerville NJ", folder: "catchments/USGS-1410787/1410787.html"},
  {id: "7179600", source: "USGS", name: "FOUR MILE C NR COUNCIL GROVE, KS", folder: "catchments/USGS-7179600/7179600.html"},
  {id: "02HC046", source: "HYDAT", name: "WIXON CREEK BELOW ALTONA", folder: "catchments/HYDAT-02HC046/02HC046.html"},
  {id: "8210400", source: "USGS", name: "Lagarto Ck nr George West, TX", folder: "catchments/USGS-8210400/8210400.html"},
  {id: "9296500", source: "USGS", name: "CLOVER CREEK NEAR NEOLA, UTAH", folder: "catchments/USGS-9296500/9296500.html"},
  {id: "02GC021", source: "HYDAT", name: "VENISON CREEK NEAR WALSINGHAM", folder: "catchments/HYDAT-02GC021/02GC021.html"},
  {id: "1195500", source: "USGS", name: "QUINNIPIAC R AT SOUTHINGTON, CT.", folder: "catchments/USGS-1195500/1195500.html"},
  {id: "8048800", source: "USGS", name: "Big Fossil Ck at Haltom City, TX", folder: "catchments/USGS-8048800/8048800.html"},
  {id: "103367585", source: "USGS", name: "EDGEWOOD CK AT PALISADE DRIVE NR KINGSBURY, NV", folder: "catchments/USGS-103367585/103367585.html"},
  {id: "3252500", source: "USGS", name: "SOUTH FORK LICKING RIVER AT CYNTHIANA, KY", folder: "catchments/USGS-3252500/3252500.html"},
  {id: "7321000", source: "USGS", name: "Sandstone Creek SWS 5 near Elk City, OK", folder: "catchments/USGS-7321000/7321000.html"},
  {id: "15086600", source: "USGS", name: "BIG C NR POINT BAKER AK", folder: "catchments/USGS-15086600/15086600.html"},
  {id: "08NL036", source: "HYDAT", name: "WHIPSAW CREEK BELOW LAMONT CREEK", folder: "catchments/HYDAT-08NL036/08NL036.html"},
  {id: "1158500", source: "USGS", name: "OTTER BROOK NEAR KEENE, NH", folder: "catchments/USGS-1158500/1158500.html"},
  {id: "2028500", source: "USGS", name: "ROCKFISH RIVER NEAR GREENFIELD, VA", folder: "catchments/USGS-2028500/2028500.html"},
  {id: "2044000", source: "USGS", name: "NOTTOWAY RIVER NEAR BURKEVILLE, VA", folder: "catchments/USGS-2044000/2044000.html"},
  {id: "3268500", source: "USGS", name: "Beaver Creek near Springfield OH", folder: "catchments/USGS-3268500/3268500.html"},
  {id: "11409500", source: "USGS", name: "OREGON C NR NORTH SAN JUAN CA", folder: "catchments/USGS-11409500/11409500.html"},
  {id: "5495000", source: "USGS", name: "Fox River at Wayland, MO", folder: "catchments/USGS-5495000/5495000.html"},
  {id: "2224940", source: "USGS", name: "ALTAMAHA RIVER AT US 221, NR CHARLOTTEVILLE, GA", folder: "catchments/USGS-2224940/2224940.html"},
  {id: "5500000", source: "USGS", name: "South Fabius River near Taylor, MO", folder: "catchments/USGS-5500000/5500000.html"},
  {id: "07EB002", source: "HYDAT", name: "OSPIKA RIVER ABOVE ALEY CREEK", folder: "catchments/HYDAT-07EB002/07EB002.html"},
  {id: "3583330", source: "USGS", name: "FACTORY CREEK NEAR CAMPBELLSVILLE, TN", folder: "catchments/USGS-3583330/3583330.html"},
  {id: "6137500", source: "USGS", name: "Big Sandy Creek near Big Sandy MT", folder: "catchments/USGS-6137500/6137500.html"},
  {id: "14169300", source: "USGS", name: "AMAZON CREEK AT EUGENE, OREG.", folder: "catchments/USGS-14169300/14169300.html"},
  {id: "3332500", source: "USGS", name: "TIPPECANOE RIVER NEAR MONTICELLO, IND.", folder: "catchments/USGS-3332500/3332500.html"},
  {id: "14077500", source: "USGS", name: "NORTH FORK BEAVER CREEK NEAR PAULINA, OR", folder: "catchments/USGS-14077500/14077500.html"},
  {id: "2454055", source: "USGS", name: "LOST CREEK ABOVE PARRISH, AL.", folder: "catchments/USGS-2454055/2454055.html"},
  {id: "1393450", source: "USGS", name: "Elizabeth River at Ursino Lake at Elizabeth NJ", folder: "catchments/USGS-1393450/1393450.html"},
  {id: "8014800", source: "USGS", name: "Bundick Creek near DeRidder, LA", folder: "catchments/USGS-8014800/8014800.html"},
  {id: "14044000", source: "USGS", name: "MIDDLE FORK JOHN DAY RIVER AT RITTER, OR", folder: "catchments/USGS-14044000/14044000.html"},
  {id: "12459000", source: "USGS", name: "WENATCHEE RIVER AT PESHASTIN, WA", folder: "catchments/USGS-12459000/12459000.html"},
  {id: "8082180", source: "USGS", name: "N Croton Ck nr Knox City, TX", folder: "catchments/USGS-8082180/8082180.html"},
  {id: "12196200", source: "USGS", name: "DAY CREEK BELOW DAY LAKE NEAR LYMAN, WA", folder: "catchments/USGS-12196200/12196200.html"},
  {id: "6175000", source: "USGS", name: "Porcupine Creek at Nashua MT", folder: "catchments/USGS-6175000/6175000.html"},
  {id: "05SA002", source: "HYDAT", name: "BROKENHEAD RIVER NEAR BEAUSEJOUR", folder: "catchments/HYDAT-05SA002/05SA002.html"},
  {id: "1594526", source: "USGS", name: "WESTERN BRANCH AT UPPER MARLBORO, MD", folder: "catchments/USGS-1594526/1594526.html"},
  {id: "2042287", source: "USGS", name: "CHICKAHOMINY RIVER NEAR ATLEE, VA", folder: "catchments/USGS-2042287/2042287.html"},
  {id: "11298650", source: "USGS", name: "ANGELS C BL MURPHYS AFTERBAY NR MURPHYS CA", folder: "catchments/USGS-11298650/11298650.html"},
  {id: "3117500", source: "USGS", name: "Sandy Creek at Waynesburg OH", folder: "catchments/USGS-3117500/3117500.html"},
  {id: "10034", source: "Mexico", name: "10034", folder: "catchments/Mexico-10034/10034.html"},
  {id: "2430000", source: "USGS", name: "MACKEYS CREEK NR DENNIS, MS", folder: "catchments/USGS-2430000/2430000.html"},
  {id: "1192704", source: "USGS", name: "MATTABESSET RIVER AT ROUTE 372 AT EAST BERLIN", folder: "catchments/USGS-1192704/1192704.html"},
  {id: "2053800", source: "USGS", name: "S F ROANOKE RIVER NEAR SHAWSVILLE, VA", folder: "catchments/USGS-2053800/2053800.html"},
  {id: "10309070", source: "USGS", name: "BUCKEYE CK NR MINDEN, NV", folder: "catchments/USGS-10309070/10309070.html"},
  {id: "2398195", source: "USGS", name: "MILLS CREEK NEAR CHESTERFIELD AL", folder: "catchments/USGS-2398195/2398195.html"},
  {id: "02GD013", source: "HYDAT", name: "WYE CREEK NEAR THORNDALE", folder: "catchments/HYDAT-02GD013/02GD013.html"},
  {id: "7064533", source: "USGS", name: "Current River above Akers, MO", folder: "catchments/USGS-7064533/7064533.html"},
  {id: "2266496", source: "USGS", name: "REEDY CREEK BELOW S-40, NEAR LOUGHMAN, FL", folder: "catchments/USGS-2266496/2266496.html"},
  {id: "2084500", source: "USGS", name: "HERRING RUN NEAR WASHINGTON, NC", folder: "catchments/USGS-2084500/2084500.html"},
  {id: "08NB012", source: "HYDAT", name: "BLAEBERRY RIVER ABOVE WILLOWBANK CREEK", folder: "catchments/HYDAT-08NB012/08NB012.html"},
  {id: "2030000", source: "USGS", name: "HARDWARE RIVER BL BRIERY RUN NR SCOTTSVILLE, VA", folder: "catchments/USGS-2030000/2030000.html"},
  {id: "7035500", source: "USGS", name: "Barnes Creek near Fredericktown, MO", folder: "catchments/USGS-7035500/7035500.html"},
  {id: "6464900", source: "USGS", name: "KEYA PAHA RIVER NEAR NAPER, NEBR.", folder: "catchments/USGS-6464900/6464900.html"},
  {id: "5518500", source: "USGS", name: "SINGLETON DITCH NR HEBRON IND", folder: "catchments/USGS-5518500/5518500.html"},
  {id: "3407882", source: "USGS", name: "LOWE BRANCH NEAR MONTGOMERY, TN", folder: "catchments/USGS-3407882/3407882.html"},
  {id: "14022200", source: "USGS", name: "NORTH FORK MCKAY CREEK NEAR PILOT ROCK,OREG.", folder: "catchments/USGS-14022200/14022200.html"},
  {id: "3351072", source: "USGS", name: "WILLIAMS CREEK AT 96TH STREET, INDIANAPOLIS, IN", folder: "catchments/USGS-3351072/3351072.html"},
  {id: "7147050", source: "USGS", name: "WB WHITEWATER R NR FURLEY, KS", folder: "catchments/USGS-7147050/7147050.html"},
  {id: "12054500", source: "USGS", name: "HAMMA HAMMA RIVER NEAR ELDON, WA", folder: "catchments/USGS-12054500/12054500.html"},
  {id: "11449450", source: "USGS", name: "COPSEY C NR LOWER LAKE CA", folder: "catchments/USGS-11449450/11449450.html"},
  {id: "7332390", source: "USGS", name: "Blue River near Connerville, OK", folder: "catchments/USGS-7332390/7332390.html"},
  {id: "7186000", source: "USGS", name: "Spring River near Waco, MO", folder: "catchments/USGS-7186000/7186000.html"},
  {id: "3207845", source: "USGS", name: "CARD CREEK AT MOUTHCARD, KY", folder: "catchments/USGS-3207845/3207845.html"},
  {id: "6406000", source: "USGS", name: "BATTLE CR AT HERMOSA,SD", folder: "catchments/USGS-6406000/6406000.html"},
  {id: "11209900", source: "USGS", name: "KAWEAH R A THREE RIVERS CA", folder: "catchments/USGS-11209900/11209900.html"},
  {id: "9058800", source: "USGS", name: "EAST MEADOW CREEK NEAR MINTURN CO.", folder: "catchments/USGS-9058800/9058800.html"},
  {id: "7053250", source: "USGS", name: "Yocum Creek near Oak Grove, AR", folder: "catchments/USGS-7053250/7053250.html"},
  {id: "1381900", source: "USGS", name: "Passaic River at Pine Brook NJ", folder: "catchments/USGS-1381900/1381900.html"},
  {id: "7268000", source: "USGS", name: "LITTLE TALLAHATCHIE RIVER AT ETTA, MS", folder: "catchments/USGS-7268000/7268000.html"},
  {id: "6045500", source: "USGS", name: "Gallatin River near Belgrade MT", folder: "catchments/USGS-6045500/6045500.html"},
  {id: "7244100", source: "USGS", name: "Coal Creek near Henryetta, OK", folder: "catchments/USGS-7244100/7244100.html"},
  {id: "11023318", source: "USGS", name: "POMERADO C A GLENOAK RD NR POWAY CA", folder: "catchments/USGS-11023318/11023318.html"},
  {id: "6468250", source: "USGS", name: "JAMES RIVER ABOVE ARROWWOOD LAKE NR KENSAL, ND", folder: "catchments/USGS-6468250/6468250.html"},
  {id: "2439500", source: "USGS", name: "BUTTAHATCHEE RIVER NR CALEDONIA, MS", folder: "catchments/USGS-2439500/2439500.html"},
  {id: "7354000", source: "USGS", name: "LITTLE SANDY CK @ KISATCHIE, LA", folder: "catchments/USGS-7354000/7354000.html"},
  {id: "13046680", source: "USGS", name: "BOUNDARY CREEK NR BECHLER RANGER STATION Y.N.P. WY", folder: "catchments/USGS-13046680/13046680.html"},
  {id: "14142800", source: "USGS", name: "BEAVER CREEK AT TROUTDALE, OR", folder: "catchments/USGS-14142800/14142800.html"},
  {id: "12150500", source: "USGS", name: "CHERRY CREEK NEAR DUVALL, WA", folder: "catchments/USGS-12150500/12150500.html"},
  {id: "2217475", source: "USGS", name: "MIDDLE OCONEE RIVER NEAR ARCADE, GA", folder: "catchments/USGS-2217475/2217475.html"},
  {id: "6805000", source: "USGS", name: "Salt Creek Near Ashland, Nebr.", folder: "catchments/USGS-6805000/6805000.html"},
  {id: "6428000", source: "USGS", name: "BELLE FOURCHE RIVER AT HULETT, WYO.", folder: "catchments/USGS-6428000/6428000.html"},
  {id: "5547755", source: "USGS", name: "SQUAW CREEK AT ROUND LAKE, IL", folder: "catchments/USGS-5547755/5547755.html"},
  {id: "3264000", source: "USGS", name: "Greenville Creek near Bradford OH", folder: "catchments/USGS-3264000/3264000.html"},
  {id: "14307620", source: "USGS", name: "SIUSLAW RIVER NEAR MAPLETON, OR", folder: "catchments/USGS-14307620/14307620.html"},
  {id: "8157600", source: "USGS", name: "E Bouldin Ck at S 1st St, Austin, TX", folder: "catchments/USGS-8157600/8157600.html"},
  {id: "1376270", source: "USGS", name: "SPARKILL CREEK AT TAPPAN NY", folder: "catchments/USGS-1376270/1376270.html"},
  {id: "3030852", source: "USGS", name: "Clarion River at Callensburg, PA", folder: "catchments/USGS-3030852/3030852.html"},
  {id: "05QD025", source: "HYDAT", name: "LAKE 382 OUTFLOW", folder: "catchments/HYDAT-05QD025/05QD025.html"},
  {id: "02BA002", source: "HYDAT", name: "STEEL RIVER NEAR TERRACE BAY", folder: "catchments/HYDAT-02BA002/02BA002.html"},
  {id: "5367202", source: "USGS", name: "RED CEDAR RIVER @ RED CEDAR LAKE OUTLT @ MIKANA,WI", folder: "catchments/USGS-5367202/5367202.html"},
];</script>
## References
1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020.