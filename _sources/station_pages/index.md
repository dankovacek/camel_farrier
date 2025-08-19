# Stations

## Search Results

<div class="search-container">
    <input type="text" id="stationSearch" placeholder="Search by Official ID, name, or source..." onkeyup="filterStations()">
    <div id="searchResults" class="search-results"></div>
</div>

<script>
// Station data for search
const stations = [
  {id: "04CC001", name: "SEVERN RIVER AT LIMESTONE RAPIDS", folder: "/station_pages/stations/04CC001.html"},
  {id: "05AB006", name: "MEADOW CREEK AT HART'S RANCH", folder: "/station_pages/stations/05AB006.html"},
  {id: "02HF003", name: "BURNT RIVER NEAR BURNT RIVER", folder: "/station_pages/stations/02HF003.html"},
  {id: "02RG013", name: "SAINT-JEAN (LAC) A LA POINTE SCOTT", folder: "/station_pages/stations/02RG013.html"},
  {id: "02JD002", name: "MONTREAL RIVER NEAR ELK LAKE", folder: "/station_pages/stations/02JD002.html"},
];</script>