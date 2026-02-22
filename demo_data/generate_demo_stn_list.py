#!/usr/bin/env python3
"""Generate random sample of N stations present in both WSC and HYDAT polygon sources."""

import geopandas as gpd
import numpy as np
from pathlib import Path
import geopandas as gpd


def load_hydat_stations(hydat_dir):
    """Load station IDs from HYDAT regional polygon directories."""
    stations = set()
    for regional_dir in hydat_dir.iterdir():
        if not regional_dir.is_dir() or not regional_dir.name.startswith('MDA_ADP_'):
            continue
        basin_file = regional_dir / f"{regional_dir.name}_DrainageBasin_BassinDeDrainage.geojson"
        if basin_file.exists():
            gdf = gpd.read_file(basin_file)
            if 'StationNum' in gdf.columns:
                stations.update(gdf['StationNum'].values)
    return stations


def sample_stations(n=500):
    """Sample n stations randomly from overlap of WSC and HYDAT sources."""
    wsc_file = Path.home() / "code/common_data/WSC_basin_polygons/WSC_basins_2021-12.geojson"
    hydat_dir = Path.home() / "code/common_data/HYDAT/polygons"

    print(f"Loading WSC polygons...")
    wsc_gdf = gpd.read_file(wsc_file)
    wsc_stations = set(wsc_gdf['StationNum'].values)
    print(f"  {len(wsc_stations)} WSC stations")

    print(f"Loading HYDAT polygons...")
    hydat_stations = load_hydat_stations(hydat_dir)
    print(f"  {len(hydat_stations)} HYDAT stations")

    overlap = wsc_stations & hydat_stations
    print(f"  {len(overlap)} stations in BOTH sources")

    # Filter to overlap and sample
    overlap_gdf = wsc_gdf[wsc_gdf['StationNum'].isin(overlap)].copy()

    selected = overlap_gdf.sample(n=min(n, len(overlap_gdf)), random_state=42)

    # Format output
    output = [f"# {len(selected)} stations present in both WSC (2021-12) and HYDAT (2024-06) polygons\n"]
    for _, row in selected.iterrows():
        stn_id = row['StationNum']
        name = row['NameNom'].split('/')[0].strip()
        output.append(f"{stn_id}  # {name}")

    return '\n'.join(output)

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description='Generate demo station list from WSC+HYDAT overlap')
    parser.add_argument('-n', '--num-stations', type=int, default=25,
                       help='Number of stations to sample ')
    args = parser.parse_args()

    output_text = sample_stations(n=args.num_stations)

    output_file = Path(__file__).parent / "DEMO_STATIONS.txt"
    output_file.write_text(output_text)
    print(f"\nWrote to {output_file}")
