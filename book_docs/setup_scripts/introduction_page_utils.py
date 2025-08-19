def load_markdown_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        return f.read()


def generate_dataset_overview(total_catchments, unique_sources):
    return [
        "## Dataset Overview",
        f"* **Total catchments**: {total_catchments}",
        f"* **Data sources**: {unique_sources}",
        "",
    ]


def generate_data_dictionary(catchment_data, source_descriptions):
    lines = [
        "## Data Dictionary",
        "| Source Code | Description |",
        "|-------------|-------------|",
    ]
    for source in sorted({d["source_code"] for d in catchment_data.values()}):
        desc = source_descriptions.get(source, "No description available")
        lines.append(f"| {source} | {desc} |")
    return lines


def generate_js_search(catchment_data):
    lines = ["", "<script>", "// Catchment data for search", "const catchments = ["]
    for d in catchment_data.values():
        src = d["source_code"]
        oid = d["official_id"]
        folder = f'{src}-{oid}/{d["official_id"]}.html'
        lines.append(
            f'  {{id: "{oid}", source: "{src}", name: "{d["name"]}", folder: "catchments/{folder}"}},'
        )
    lines.append("];</script>")
    return lines


def generate_references():
    return [
        "## References",
        "1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020.",
    ]


def create_intro(
    catchment_data, intro_template_path, output_path
):
    source_descriptions = {
        "USGS": "United States Geological Survey",
        "WSC": "Water Survey of Canada",
        "HYSETS": "HYSETS database (Arsenault et al., 2020)",
        "HYDAT": "HYDAT database from Water Survey of Canada (WSC)",
        # Add more as needed (CONAGUA?)
    }
    content = []
    content.append(load_markdown_file(intro_template_path))
    unique_sources = len(
        set([catchment_data[c]["source_code"] for c in catchment_data.keys()])
    )
    total_catchments = len(catchment_data)
    content.extend(generate_dataset_overview(total_catchments, unique_sources))
    content.extend(generate_data_dictionary(catchment_data, source_descriptions))
    content.extend(generate_js_search(catchment_data))
    content.extend(generate_references())
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(content))
        print(f"Generated index page at {output_path}")
