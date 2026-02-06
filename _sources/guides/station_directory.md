# Station Directory

This section provides access to diagnostic pages for individual hydrometric monitoring stations. Each station page includes:

- **Catchment Boundary Visualization** — Interactive maps showing polygon revisions and geometric changes
- **Data Availability Summary** — Status of rating curves, corrections, field visit records, and metadata files
- **Validation Results** — Automated quality checks for data completeness, temporal continuity, and geometric validity
- **Version History** — Complete revision log with timestamps, source attribution, and quality tier classifications
- **Station Metadata** — Geographic coordinates, drainage area, operational status, and hydrometric network affiliation

Station pages are generated automatically from version-controlled data files and updated with each repository commit.

## Browse Stations

Use the navigation menu at left or the search bar below to find station summary pages.

## Search Hydrometric Stations

<div class="search-container">
    <input type="text" id="stationSearch" placeholder="Search by ID or name..." onkeyup="filterStations()">
    <div id="searchResults" class="search-results"></div>
</div>


<script>
// Station data for search
const stations = [
  {id: "07AF010", name: "", folder: "station_pages/stations/07AF010.html"},
  {id: "07DB005", name: "", folder: "station_pages/stations/07DB005.html"},
  {id: "07EE009", name: "", folder: "station_pages/stations/07EE009.html"},
  {id: "07FD014", name: "", folder: "station_pages/stations/07FD014.html"},
  {id: "07GA002", name: "", folder: "station_pages/stations/07GA002.html"},
  {id: "07JC003", name: "", folder: "station_pages/stations/07JC003.html"},
  {id: "07QC005", name: "", folder: "station_pages/stations/07QC005.html"},
  {id: "08GA065", name: "", folder: "station_pages/stations/08GA065.html"},
  {id: "08LB053", name: "", folder: "station_pages/stations/08LB053.html"},
  {id: "08LE067", name: "", folder: "station_pages/stations/08LE067.html"},
  {id: "08NE067", name: "", folder: "station_pages/stations/08NE067.html"},
  {id: "08NJ134", name: "", folder: "station_pages/stations/08NJ134.html"},
  {id: "08NM133", name: "", folder: "station_pages/stations/08NM133.html"},
  {id: "08NM134", name: "", folder: "station_pages/stations/08NM134.html"},
  {id: "09DA001", name: "", folder: "station_pages/stations/09DA001.html"},
  {id: "09DC004", name: "", folder: "station_pages/stations/09DC004.html"},
  {id: "09EA005", name: "", folder: "station_pages/stations/09EA005.html"},
  {id: "09FA001", name: "", folder: "station_pages/stations/09FA001.html"},
  {id: "09FC001", name: "", folder: "station_pages/stations/09FC001.html"},
  {id: "10CD003", name: "", folder: "station_pages/stations/10CD003.html"},
  {id: "10ED009", name: "", folder: "station_pages/stations/10ED009.html"},
  {id: "10FB005", name: "", folder: "station_pages/stations/10FB005.html"},
  {id: "10JA004", name: "", folder: "station_pages/stations/10JA004.html"},
  {id: "10KC001", name: "", folder: "station_pages/stations/10KC001.html"},
  {id: "10LA002", name: "", folder: "station_pages/stations/10LA002.html"},
];</script>
