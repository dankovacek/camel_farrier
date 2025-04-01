import os
import pandas as pd
import geopandas as gpd

def get_version_info(config, data):
    """
    Get version information for the catchment data.
    """
    version_info = config["version_info"]
    # use as a default the revision date of the web publication
    # of the dataset (revision_date from filename)
    revision_date = config.get("revision_date", version_info['Date'])
    # but individual files may have their own reivsion date in the metadata
    if 'version_check_col' in version_info:
        revision_date_col = config['version_info']['version_check_col']
        # use the version_check_col from the geometry file itself
        if revision_date_col in data:
            revision_date = data[revision_date_col].values[0]
    version_info["revision_date"] = revision_date
    
    # Add any other relevant metadata from the config
    return version_info


def setup_catchment_folder(official_id, data):
    print(f"    Initializing new streamflow monitoring location for {official_id}")
    sources = list(set([entry["Source"] for entry in data.values()]))
    assert len(sources) == 1, f"Multiple sources found for {official_id}: {sources}"
    source_code = sources[0]

    # Define folder structure
    # base_folder = "catchments"
    subfolder_name = f"{source_code}-{official_id}"
    # subfolder_path = os.path.join(BOOK_ROOT, base_folder, subfolder_name)
    subfolder_path = os.path.join("./catchments", subfolder_name)
    resources_path = os.path.join(subfolder_path, "resources")
    os.makedirs(resources_path, exist_ok=True)
    return subfolder_path, resources_path


def initialize_new_location(official_id, data, dam_gdf, config):
    print(f"    Initializing new streamflow monitoring location for {official_id}")
    subfolder_path, resources_path = setup_catchment_folder(official_id, data)
    
    for _, rdat in data.items():
        # Save the geometry to a GeoJSON file
        filename = rdat["path"].split("/")[-1].split(".")[0]
        poly_filepath = os.path.join(subfolder_path, f"{filename}.geojson")
        geom = rdat["geometry"]
        del rdat["geometry"]
        # Get the CRS of the geometry
        crs = rdat["crs"]
        gdf = gpd.GeoDataFrame(rdat, geometry=[geom], crs=crs, index=[0])
        gdf.to_file(poly_filepath)

        if geom.geom_type == "Polygon":
            # Compute basic geometric properties of the polygon
            gdf = gdf.to_crs(dam_gdf.crs)
            dam_subset = gpd.sjoin(dam_gdf, gdf, how="inner", predicate="within")

            dam_ids = dam_subset["Dam_ID"].values
            filtered_dams = dam_gdf[dam_gdf["Dam_ID"].isin(dam_ids)].copy()
            # Save the properties to a CSV file
            # if there are flow regulation points registered, save them
            if not filtered_dams.empty:
                filtered_dams.to_file(
                    os.path.join(subfolder_path, f"{official_id}_dam_data.geojson"),
                    driver="GeoJSON",
                )

    # save the attributes to a csv file
    # attributes_fname = f"{official_id}_attributes.csv"
    # attributes_fpath = os.path.join(subfolder_path, attributes_fname)
    # attrs_df["Reference"] = "(Arsenault et al., 2020)"
    # Check if revision_date is provided in config
    revision_fname = f'{official_id}_revision_data.csv'
    version_data = get_version_info(config, data)
    version_df = pd.DataFrame.from_dict(version_data, orient="index")
    version_df.columns = ['']
    version_df.to_csv(os.path.join(subfolder_path, revision_fname), index=False)
    # print(version_check_config)
    
    # hs_attrs["revision_date"] = revision_date
    # attrs_df.to_csv(attributes_fpath, index=False)

    print(
        f"Processed catchment {source_code}-{official_id} successfully. Data saved in {subfolder_path}"
    )
    
def update_existing_location(official_id, data, dam_gdf, config):
    subfolder_path, resources_path = setup_catchment_folder(official_id, data)
    
    for _, rdat in data.items():
        version_data = get_version_info(config, data)
        # Save the geometry to a GeoJSON file
        filename = rdat["path"].split("/")[-1].split(".")[0]
        poly_filepath = os.path.join(subfolder_path, f"{filename}.geojson")
        geom = rdat["geometry"]
        del rdat["geometry"]
        # Get the CRS of the geometry
        crs = rdat["crs"]
        gdf = gpd.GeoDataFrame(rdat, geometry=[geom], crs=crs, index=[0])
        gdf.to_file(poly_filepath)

        gdf.to_csv(
            os.path.join(subfolder_path, f"{filename}_properties.csv"), index=False
        )

        if geom.geom_type == "Polygon":
            # Compute basic geometric properties of the polygon
            gdf = gdf.to_crs(dam_gdf.crs)
            dam_subset = gpd.sjoin(dam_gdf, gdf, how="inner", predicate="within")

            dam_ids = dam_subset["Dam_ID"].values
            filtered_dams = dam_gdf[dam_gdf["Dam_ID"].isin(dam_ids)].copy()
            # Save the properties to a CSV file
            # if there are flow regulation points registered, save them
            if not filtered_dams.empty:
                filtered_dams.to_file(
                    os.path.join(subfolder_path, f"{official_id}_dam_data.geojson"),
                    driver="GeoJSON",
                )

    # save the attributes to a csv file
    # attributes_fname = f"{official_id}_attributes.csv"
    # attributes_fpath = os.path.join(subfolder_path, attributes_fname)
    # attrs_df["Reference"] = "(Arsenault et al., 2020)"
    # Check if revision_date is provided in config
    revision_fname = f'{official_id}_revision_date.csv'
    
    version_df = pd.DataFrame.from_dict(version_data, orient="index")
    version_df.columns = ['']
    version_df.to_csv(os.path.join(subfolder_path, revision_fname), index=False)
    # print(version_check_config)
    
    


# integration.py
def run_integration_workflow(registry, config, output_dir="book_docs/catchments"):
    existing_unique_ids = set([e.split("-")[1] for e in os.listdir(output_dir)])

    dam_gdf = gpd.read_file("data/Dam_Points_20240103.gpkg", sep=";")

    new_stations, existing_stations = [], []
    for official_id, types in registry.items():
        # check if official_id has already been registered:
        station_is_registered = official_id in existing_unique_ids
        if station_is_registered:
            print(f"    {official_id} already registered, scheduling for update.")
            existing_stations.append(official_id)
        else:
            print(f"    {official_id} not registered, appending to new sites list.")
            new_stations.append(official_id)
            
    for new_station in new_stations:
        print(f"    processing {new_station} as new station.")
        # Process the new station
        initialize_new_location(new_station, registry[new_station], dam_gdf, config)
    
    for existing_station in existing_stations:
        print(f"    updating {existing_station} existing station.")
        update_existing_location(existing_station, registry[existing_station], dam_gdf, config)
