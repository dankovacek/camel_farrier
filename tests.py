#!/usr/bin/env python
"""
Test suite for validating catchment polygon geometries.
This framework can be extended with additional tests.
"""

import pytest
from shapely.geometry import Polygon

# Threshold constants
AREA_CHANGE_THRESHOLD = 0.05         # 5% maximum allowed area change
JACCARD_SIMILARITY_THRESHOLD = 0.95    # 95% minimum allowed Jaccard similarity

def compute_area_change(poly_original: Polygon, poly_updated: Polygon) -> float:
    """
    Compute the relative change in area between the original and updated polygons.
    
    Returns:
        The absolute relative difference in area.
    """
    original_area = poly_original.area
    updated_area = poly_updated.area
    return abs(updated_area - original_area) / original_area


def compute_jaccard_similarity(poly_original: Polygon, poly_updated: Polygon) -> float:
    """
    Compute the Jaccard similarity index between two polygons.
    
    Returns:
        The ratio of the intersection area to the union area.
    """
    intersection_area = poly_original.intersection(poly_updated).area
    union_area = poly_original.union(poly_updated).area
    return intersection_area / union_area

# Example fixture for the original committed polygon
@pytest.fixture
def original_polygon() -> Polygon:
    # For demonstration: a simple square from (0,0) to (1,1)
    return Polygon([(0, 0), (1, 0), (1, 1), (0, 1)])

# Example fixture for the proposed updated polygon
@pytest.fixture
def proposed_polygon() -> Polygon:
    # For demonstration: a square slightly expanded (1% increase on each side)
    return Polygon([(0, 0), (1.01, 0), (1.01, 1.01), (0, 1.01)])


def test_area_change(original_polygon: Polygon, proposed_polygon: Polygon):
    """
    Test that the relative change in drainage area does not exceed 5%.
    """
    area_change = compute_area_change(original_polygon, proposed_polygon)
    assert area_change <= AREA_CHANGE_THRESHOLD, (
        f"Area change too high: {area_change*100:.2f}% exceeds the {AREA_CHANGE_THRESHOLD*100}% threshold."
    )

def test_jaccard_similarity(original_polygon: Polygon, proposed_polygon: Polygon):
    """
    Test that the Jaccard similarity index between the original and updated polygons is at least 95%.
    """
    jaccard = compute_jaccard_similarity(original_polygon, proposed_polygon)
    assert jaccard >= JACCARD_SIMILARITY_THRESHOLD, (
        f"Jaccard similarity too low: {jaccard*100:.2f}% is below the {JACCARD_SIMILARITY_THRESHOLD*100}% threshold."
    )

if __name__ == "__main__":
    # Run the tests if the script is executed directly
    pytest.main([__file__])
