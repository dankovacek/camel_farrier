# Station Directory

:::{div} cf-section
This section provides access to diagnostic pages for individual hydrometric monitoring stations. Each station page includes:

- **Catchment Boundary Visualization** — Interactive maps showing polygon revisions and geometric changes
- **Data Availability Summary** — Status of rating curves, corrections, field visit records, and metadata files
- **Validation Results** — Automated quality checks for data completeness, temporal continuity, and geometric validity
- **Version History** — Complete revision log with timestamps, source attribution, and quality tier classifications
- **Station Metadata** — Geographic coordinates, drainage area, operational status, and hydrometric network affiliation

Station pages are generated automatically from version-controlled data files and updated with each repository commit.
:::

:::{div} cf-section
## Browse Stations

Use the navigation menu at left or the search bar below to find station summary pages.
:::

:::{div} cf-section
## Search Hydrometric Stations

<div class="search-container">
    <input type="text" id="stationSearch" placeholder="Search by ID or name..." onkeyup="filterStations()">
    <div id="searchResults" class="search-results"></div>
</div>


<script>
// Station data for search
const stations = [
];</script>
:::
