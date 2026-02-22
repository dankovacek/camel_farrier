"""Geometry and polygon utilities."""

import numpy as np
import pandas as pd
import geopandas as gpd
from pyproj import CRS
import warnings


def create_local_crs(polygon) -> str:
    """Create a local Lambert Azimuthal Equal Area projection centered at polygon centroid.

    Args:
        polygon: GeoDataFrame with single row

    Returns:
        CRS object for local projection
    """
    with warnings.catch_warnings():
        warnings.filterwarnings("ignore", message="Geometry is in a geographic CRS.")
        centroid = polygon.centroid
        lat, lon = centroid.y[0], centroid.x[0]
        proj_string = f"+proj=laea +lat_0={lat} +lon_0={lon} +units=m +datum=WGS84"
        local_crs = CRS.from_proj4(proj_string)
        return local_crs


def get_geometric_properties(poly) -> dict:
    """Compute basic geometric properties of a polygon.

    Args:
        poly: GeoDataFrame with single row

    Returns:
        Dictionary with Area and Perimeter values
    """
    local_crs = create_local_crs(poly)
    projected_poly = poly.to_crs(local_crs)
    return {
        "area_km2": round(projected_poly.geometry.area[0] / 1e6, 1),
        "perimeter_km": round(projected_poly.geometry.length[0] / 1000, 2),
    }


def compute_jaccard_similarity(gdf_dict: dict) -> dict:
    """Compute Jaccard similarity between polygon versions.

    Args:
        gdf_dict: Dict mapping station_id to GeoDataFrame with multiple rows (versions)

    Returns:
        Dict mapping station_id to dict of Jaccard values by version pairs
    """
    jaccard_matrix = {}

    for official_id, gdf in gdf_dict.items():
        jaccard_matrix[official_id] = {}

        for i, row1 in gdf.iterrows():
            for j, row2 in gdf.iterrows():
                if j <= i:
                    continue

                intersection = row1.geometry.intersection(row2.geometry).area
                union = row1.geometry.union(row2.geometry).area
                key = tuple(sorted((i, j)))
                jaccard_matrix[official_id][key] = (
                    round(intersection / union, 2) if union > 0 else 0
                )

    return jaccard_matrix
