

def load_intro_markdown(file_path):
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
    lines = [
        "",
        "<script>",
        "// Catchment data for search",
        "const catchments = ["
    ]
    for d in catchment_data.values():
        folder = f'{d["folder"]}/{d["official_id"]}-README.html'
        lines.append(
            f'  {{id: "{d["official_id"]}", source: "{d["source_code"]}", name: "{d["name"]}", folder: "catchment_polygon_revisions/{folder}"}},'
        )
    lines.append("];</script>")
    return lines


def generate_references():
    return [
        "## References",
        "1. Arsenault, R., Brissette, F., Martel, J.-L., Troin, M., Lévesque, G., Davidson-Chaput, J., Gonzalez, M. C., Ameli, A., and Poulin, A.: A comprehensive, multisource database for hydrometeorological modeling of 14,425 North American watersheds, Scientific Data, 7, 243, [https://doi.org/10.1038/s41597-020-00583-2](https://doi.org/10.1038/s41597-020-00583-2), 2020.",
    ]


def create_intro(catchment_data, intro_path, source_descriptions, output_path="intro.md"):
    content = []
    content.append(load_intro_markdown(intro_path))
    unique_sources = len(set([catchment_data[c]["source_code"] for c in catchment_data.keys()]))
    total_catchments = len(catchment_data)
    content.extend(generate_dataset_overview(total_catchments, unique_sources))
    content.extend(generate_data_dictionary(catchment_data, source_descriptions))
    content.extend(generate_js_search(catchment_data))
    content.extend(generate_references())

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(content))
        print(f"Generated index page at {output_path}")