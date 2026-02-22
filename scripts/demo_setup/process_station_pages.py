# Generate station diagnostic pages from metadata and data files
import os
import sys
from pathlib import Path

# Add project root to path so scripts package can be imported
PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from scripts.config.paths import STATIONS_DIR, STATION_PAGES_DIR
from scripts.generation.page_generator import generate_station_page
from scripts.utils.data_loaders import load_station_metadata

print(f"Reading station data from {STATIONS_DIR}")
print(f"Writing station pages to {STATION_PAGES_DIR}")

processed_stations = [d for d in os.listdir(STATIONS_DIR) if (STATIONS_DIR / d).is_dir()]
station_data = []

for stn in sorted(processed_stations):
    success = generate_station_page(stn, output_dir=STATION_PAGES_DIR)
    if success:
        print(f"  ✓ Generated page for {stn}")
        # Collect station metadata for search index
        metadata = load_station_metadata(stn)
        if metadata:
            station_data.append({
                "id": stn,
                "name": metadata.get("STATION_NAME", ""),
                "folder": f"station_pages/stations/{stn}.html"
            })
    else:
        print(f"  ✗ Failed to generate page for {stn}")

print("\n" + "=" * 60)
print(f"Summary: Processed {len(processed_stations)} stations")
print("=" * 60)

# Update changelog_intro.md with station search data
changelog_intro_path = PROJECT_ROOT / "book_docs" / "guides" / "station_directory.md"
if changelog_intro_path.exists():
    with open(changelog_intro_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Generate JavaScript station array
    js_lines = ["const stations = ["]
    for station in station_data:
        js_lines.append(f'  {{id: "{station["id"]}", name: "{station["name"]}", folder: "station_pages/stations/{station["id"]}.html"}},')
    js_lines.append("];")

    # Replace the empty stations array
    start_marker = "const stations = ["
    end_marker = "];"

    if start_marker in content and end_marker in content:
        start_idx = content.find(start_marker)
        end_idx = content.find(end_marker, start_idx) + len(end_marker)
        new_content = content[:start_idx] + "\n".join(js_lines) + content[end_idx:]

        with open(changelog_intro_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"\n✓ Updated search index in {changelog_intro_path.relative_to(PROJECT_ROOT)}")
        print(f"  Added {len(station_data)} stations to search index")
    else:
        print(f"\n⚠ Could not find station array markers in {changelog_intro_path.relative_to(PROJECT_ROOT)}")
else:
    print(f"\n⚠ {changelog_intro_path.relative_to(PROJECT_ROOT)} not found")
