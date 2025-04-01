#!/usr/bin/env python
"""
Test suite for validating catchment polygon geometries.
"""
# import os
# import numpy as np
# import geopandas as gpd
import pytest
# from shapely.geometry import Polygon
# import rasterio as rio
# from rasterio.features import rasterize
# from shapely.geometry import mapping
# from collections import Counter
# from pathlib import Path



# BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Supported file extensions for catchment geometries
# SUPPORTED_EXTS = [".geojson", ".json", ".shp", ".gpkg", ".parquet", ".fgb"]


# Threshold constants
# AREA_CHANGE_THRESHOLD = 0.05  # 5% maximum allowed area change
# JACCARD_SIMILARITY_THRESHOLD = 0.95  # 95% minimum allowed Jaccard similarity

# def compute_area_change(poly_original: Polygon, poly_updated: Polygon) -> float:
#     """
#     Compute the relative change in area between the original and updated polygons.

#     Returns:
#         The absolute relative difference in area.
#     """
#     original_area = poly_original.area
#     updated_area = poly_updated.area
#     return abs(updated_area - original_area) / original_area


# def compute_jaccard_similarity(poly_original: Polygon, poly_updated: Polygon) -> float:
#     """
#     Compute the Jaccard similarity index between two polygons.

#     Returns:
#         The ratio of the intersection area to the union area.
#     """
#     intersection_area = poly_original.intersection(poly_updated).area
#     union_area = poly_original.union(poly_updated).area
#     return intersection_area / union_area


# def test_area_change(original_polygon: Polygon, proposed_polygon: Polygon):
#     """
#     Test that the relative change in drainage area does not exceed 5%.
#     """
#     area_change = compute_area_change(original_polygon, proposed_polygon)
#     assert area_change <= AREA_CHANGE_THRESHOLD, (
#         f"Area change too high: {area_change*100:.2f}% exceeds the {AREA_CHANGE_THRESHOLD*100}% threshold."
#     )


# def test_jaccard_similarity(original_polygon: Polygon, proposed_polygon: Polygon):
#     """
#     Test that the Jaccard similarity index between the original and updated polygons is at least 95%.
#     """
#     jaccard = compute_jaccard_similarity(original_polygon, proposed_polygon)
#     assert jaccard >= JACCARD_SIMILARITY_THRESHOLD, (
#         f"Jaccard similarity too low: {jaccard*100:.2f}% is below the {JACCARD_SIMILARITY_THRESHOLD*100}% threshold."
#     )


# def rasterize_polygon(polygon, out_shape, transform, all_touched=False):
#     return rasterize(
#         [(mapping(polygon), 1)],
#         out_shape=out_shape,
#         transform=transform,
#         fill=0,
#         all_touched=all_touched,
#         dtype="uint8"
#     )

# def compare_polygons_by_pixels(poly_old, poly_new, resolution=30, all_touched=False):
#     # Combine bounds
#     bounds = poly_old.union(poly_new).bounds
#     minx, miny, maxx, maxy = bounds

#     width = int(np.ceil((maxx - minx) / resolution))
#     height = int(np.ceil((maxy - miny) / resolution))

#     transform = rio.transform.from_origin(minx, maxy, resolution, resolution)

#     # Rasterize
#     old_raster = rasterize_polygon(poly_old, (height, width), transform, all_touched)
#     new_raster = rasterize_polygon(poly_new, (height, width), transform, all_touched)

#     # Compute masks
#     intersection = (old_raster == 1) & (new_raster == 1)
#     union = (old_raster == 1) | (new_raster == 1)
#     only_old = (old_raster == 1) & (new_raster == 0)
#     only_new = (new_raster == 1) & (old_raster == 0)

#     jaccard = intersection.sum() / union.sum() if union.sum() else 0

#     return {
#         "resolution": resolution,
#         "all_touched": all_touched,
#         "jaccard_index": jaccard,
#         "matched_pixels": intersection.sum(),
#         "dropped_pixels": only_old.sum(),
#         "new_pixels": only_new.sum(),
#         "total_union_pixels": union.sum()
#     }

# @pytest.fixture
# def official_id_exists(gdf, official_ID_column="Official_ID") -> Polygon:
#     """
#     Test if the Official_ID is new or if a polygon exists to compare against.
#     Input a geodataframe of polygons.
#     At minimum there must be an "Official_ID" column and a "geometry" column.
#     Geometries must be valid polygons.
#     """
#     existing_IDs = retrieve_existing_Official_IDs()
#     update_bool = []
#     for i, rdat in gdf.iterrows():
#         official_ID = rdat[official_ID_column]
#         # Check if the geometry is valid
#         if not rdat.geometry.is_valid:
#             raise ValueError(f"Invalid geometry for Official_ID {official_ID}")

#         if official_ID in existing_IDs:
#             update_bool.append(True)
#         else:
#             update_bool.append(False)
#     return update_bool


# Example fixture for the original committed polygon
# @pytest.fixture
# def original_polygon() -> Polygon:
#     # For demonstration: a simple square from (0,0) to (1,1)
#     return Polygon([(0, 0), (1, 0), (1, 1), (0, 1)])

# # Example fixture for the proposed updated polygon
# @pytest.fixture
# def proposed_polygon() -> Polygon:
#     # For demonstration: a square slightly expanded (1% increase on each side)
#     return Polygon([(0, 0), (1.01, 0), (1.01, 1.01), (0, 1.01)])
