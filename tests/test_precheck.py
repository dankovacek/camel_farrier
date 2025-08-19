import pytest
from book_docs.setup_scripts.precheck_utils import (
    find_geometry_files,
    load_file_config,
    build_geometry_registry,
    check_geometries_are_valid,
    load_dam_info,
    # display_summary,
    # summarize_geometries,
)

@pytest.fixture(scope="module")
def geometry_files():
    return find_geometry_files()


@pytest.fixture(scope="module")
def file_config():
    return load_file_config()


@pytest.fixture(scope="module")
def retrieve_dam_info():
    dam_data_path = "../data/Dam_Points_20240103.gpkg"
    return load_dam_info(dam_data_path)


@pytest.fixture(scope="module")
def data_registry(geometry_files, file_config):
    """
    Build a registry of geometry files with their metadata.

    Returns a dictionary where keys are Official_IDs and values are
    corresponding geometry data from the input files. This registry
    allows for quick access to geometries and their associated metadata
    during testing and validation.
    """
    data_registry, missing_files = build_geometry_registry(
        geometry_files, file_config
    )
    print(f"N stations in registry: {len(data_registry.keys())}")
    assert missing_files == [], f"Missing columns in files: {missing_files}"
    return data_registry


def test_geometry_folder_is_not_empty(geometry_files):
    assert len(geometry_files) > 0, "No geometry files found in input_data/"


def test_geometry_validity(data_registry):
    invalid_geoms, n_tested = check_geometries_are_valid(data_registry)
    assert len(invalid_geoms) == 0, f"{len(invalid_geoms)}/{n_tested} invalid geometries were found in the input data."
    
