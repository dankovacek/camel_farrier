var structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Catchment Polygon Revision Archive",
  "alternateName": "CPRA",
  "url": "https://your-domain.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://your-domain.com/search.html?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const SDscript = document.createElement('script');
SDscript.setAttribute('type', 'application/ld+json');
SDscript.textContent = JSON.stringify(structuredData);
document.head.appendChild(SDscript);

function filterStations() {
  const input = document.getElementById('stationSearch').value.toLowerCase();
  const results = document.getElementById('searchResults');

  // Clear previous results
  results.innerHTML = '';

  if (input.length < 2) return;

  // Filter catchments
  const matches = stations.filter(c =>
    c.id.toLowerCase().includes(input) ||
    c.name.toLowerCase().includes(input) ||
    `${c.source}-${c.id}`.toLowerCase().includes(input)
  );

  // Display results (max 10)
  const limitedMatches = matches.slice(0, 10);
  limitedMatches.forEach(c => {
    const div = document.createElement('div');
    div.className = 'search-result';
    // Handle both file:// protocol (local viewing) and http(s):// (web server/GitHub Pages)
    let path;
    if (window.location.protocol === 'file:') {
      // For local file:// viewing, use relative path from guides/ to station_pages/
      path = c.folder.startsWith('/') ? `../${c.folder.substring(1)}` : `../${c.folder}`;
    } else {
      // For web servers, use root-relative path
      path = c.folder.startsWith('/') ? c.folder : `/${c.folder}`;
    }
    div.innerHTML = `<a href='${path}'>${c.id}: ${c.name}</a>`;
    results.appendChild(div);
  });

  // Show message if too many results
  if (matches.length > 10) {
    const div = document.createElement('div');
    div.className = 'search-more';
    div.textContent = `... and ${matches.length - 10} more matches`;
    results.appendChild(div);
  }
}
