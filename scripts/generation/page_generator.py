"""Unified page generation from templates and data."""

import json
import numpy as np
import pandas as pd
from pathlib import Path
from datetime import datetime
from jinja2 import Environment, FileSystemLoader
from scripts.config.paths import TEMPLATES_DIR, STATION_PAGES_DIR, get_station_dir


def load_station_json_data(station_id: str, json_filename: str) -> dict:
    """Load JSON metadata file for a station.

    Args:
        station_id: Station identifier
        json_filename: JSON file name (e.g., "_metadata.json")

    Returns:
        Dictionary contents or empty dict if file missing
    """
    json_path = get_station_dir(station_id) / json_filename
    if not json_path.exists():
        return {}

    with open(json_path, encoding="utf-8") as f:
        return json.load(f)


def generate_metadata_table_html(metadata: dict, field_mapping: dict = None) -> str:
    """Convert metadata dict to HTML table (vertical format).

    Args:
        metadata: Dictionary of metadata fields
        field_mapping: Optional dict to rename/reorder fields

    Returns:
        HTML table string
    """
    if not metadata:
        return "<p><em>No metadata available.</em></p>"

    if field_mapping:
        # Reorder and rename according to mapping
        ordered_data = {
            display_name: metadata.get(key, "N/A")
            for display_name, key in field_mapping.items()
        }
    else:
        ordered_data = metadata

    df = pd.DataFrame([ordered_data]).T
    rows = []
    for label, value in zip(df.index, df.iloc[:, 0]):
        rows.append(f"<tr><td><strong>{label}</strong></td><td>{value}</td></tr>")

    html = '<table class="dataframe table">\n' + "\n".join(rows) + "\n</table>"
    return html


def format_station_metadata_horizontal(metadata: dict) -> str:
    """Format station metadata as horizontal table with bold headers.

    Args:
        metadata: Station metadata dictionary

    Returns:
        HTML table string with horizontal layout
    """
    if not metadata:
        return "<p><em>No metadata available.</em></p>"

    # Format numeric values
    lat = round(metadata.get('latitude', 0), 3)
    lon = round(metadata.get('longitude', 0), 3)
    drainage_gross = metadata.get('drainage_area_gross_km2', 0)
    drainage_effect = metadata.get('drainage_area_effec_km2', 0)

    drainage_gross = np.nan if drainage_gross is None else drainage_gross
    drainage_effect = np.nan if drainage_effect is None else drainage_effect

    # Build horizontal table
    headers = ['Station ID', 'Station Name', 'Latitude', 'Longitude', 'Gross (Effective) Area [km²]', 'Province', 'Status']
    values = [
        metadata.get('station_id', 'N/A'),
        metadata.get('station_name', 'N/A'),
        f"{lat:.3f}",
        f"{lon:.3f}",
        f"{drainage_gross:.1f} ({drainage_effect:.1f})",
        metadata.get('province_territory', 'N/A'),
        metadata.get('hyd_status', 'N/A')
    ]

    header_row = '<tr>' + ''.join([f'<th>{h}</th>' for h in headers]) + '</tr>'
    value_row = '<tr>' + ''.join([f'<td>{v}</td>' for v in values]) + '</tr>'

    html = f'<table class="dataframe table">\n{header_row}\n{value_row}\n</table>'
    return html


def load_and_format_versions_table(station_id: str) -> str:
    """Load version history and format as table with comparison metrics.

    Args:
        station_id: Station identifier

    Returns:
        HTML table string with version history and comparison to previous version
    """
    versions_data = load_station_json_data(station_id, '_versions.json')

    if not versions_data or 'versions' not in versions_data:
        return "<p><em>No version history available.</em></p>"

    versions = versions_data['versions']
    if not versions:
        return "<p><em>No versions recorded.</em></p>"

    comparisons = versions_data.get('comparisons', {})

    rows = ['<tr><th>Version</th><th>Date</th><th>Data Source</th><th>Source Version</th><th>Notes</th><th>Comparison</th></tr>']

    for i, ver in enumerate(versions):
        version = ver.get('semantic_tag', 'N/A')
        timestamp = ver.get('timestamp', '')

        # Format timestamp to date only
        if timestamp:
            try:
                dt = datetime.fromisoformat(timestamp)
                date_str = dt.strftime('%Y-%m-%d')
            except:
                date_str = timestamp[:10]  # Fallback to first 10 chars
        else:
            date_str = 'N/A'

        source = ver.get('data_source', 'N/A')

        # Get source metadata if available - extract version and date info
        source_metadata = ver.get('source_metadata', {})
        source_version = 'N/A'
        source_date = ''
        notes = ''

        if source_metadata:
            source_version = source_metadata.get('Version', 'N/A')

            # Check for Date_rev (revision date) first, then fall back to Date (export date)
            source_date = source_metadata.get('Date_rev', '')
            if source_date:
                # Has official revision date
                source_info = f"{source_version} ({source_date})"
                notes = 'Official revision date'
            else:
                # Fall back to export Date if no Date_rev
                source_date = source_metadata.get('Date', '')
                if source_date:
                    source_info = f"{source_version} ({source_date})"
                    notes = 'Export date (no official revision date available)'
                else:
                    source_info = source_version
                    notes = 'No date information available'
        else:
            source_info = 'N/A'
            notes = 'No metadata available'

        # Get comparison metrics if available
        comparison_text = '-'
        if i > 0:
            # Look for comparison between previous and current version
            prev_version = versions[i-1].get('semantic_tag', '')
            comparison_key = f"{prev_version}_vs_{version}"
            if comparison_key in comparisons:
                comp = comparisons[comparison_key]
                jsi = comp.get('jaccard_index', 0)
                area_diff = comp.get('percent_area_diff', 0)
                comparison_text = f"JSI: {jsi:.2f}, ΔArea: {area_diff:+.1f}%"

        rows.append(f'<tr><td><strong>{version}</strong></td><td>{date_str}</td><td>{source}</td><td>{source_info}</td><td><em>{notes}</em></td><td>{comparison_text}</td></tr>')

    html = '<table class="dataframe table">\n' + '\n'.join(rows) + '\n</table>'
    return html


def load_and_format_data_sources_table(station_id: str) -> str:
    """Load data sources and format as table.

    Args:
        station_id: Station identifier

    Returns:
        HTML table string
    """
    sources_data = load_station_json_data(station_id, '_data_sources.json')

    if not sources_data or 'data_sources' not in sources_data:
        return "<p><em>No data source information available.</em></p>"

    sources = sources_data['data_sources']
    if not sources:
        return "<p><em>No data sources recorded.</em></p>"

    rows = ['<tr><th>Data Type</th><th>Source</th><th>Version</th><th>Retrieval Method</th></tr>']

    for src in sources:
        data_type = src.get('data_type', 'N/A')
        source = src.get('source', 'N/A')
        version = src.get('source_version', 'N/A')
        method = src.get('retrieval_method', 'N/A')

        rows.append(f'<tr><td>{data_type}</td><td>{source}</td><td>{version}</td><td>{method}</td></tr>')

    html = '<table class="dataframe table">\n' + '\n'.join(rows) + '\n</table>'
    return html


def load_and_format_qc_status(station_id: str) -> dict:
    """Load QC status and format for display.

    Args:
        station_id: Station identifier

    Returns:
        Dictionary with qc_summary and qc_checks_table
    """
    qc_data = load_station_json_data(station_id, '_qc_status.json')

    if not qc_data:
        return {
            'qc_summary': '<p><em>No QC status available.</em></p>',
            'qc_checks_table': ''
        }

    # Format summary
    overall_status = qc_data.get('overall_status', 'unknown')
    qc_date = qc_data.get('qc_date', 'N/A')
    reviewed_by = qc_data.get('reviewed_by', 'N/A')

    # Format date
    if qc_date != 'N/A':
        try:
            dt = datetime.fromisoformat(qc_date)
            qc_date = dt.strftime('%Y-%m-%d')
        except:
            qc_date = qc_date[:10]

    # Extract hydrometric continuity statistics for summary display
    hydrometric = qc_data.get('validation_checks', {}).get('hydrometric_continuity', {})
    timeseries_summary = hydrometric.get('notes', 'No timeseries information available')
    record_length = hydrometric.get('record_length_years')

    # Build enhanced summary with timeseries statistics
    summary_lines = [
        f"<p><strong>Overall Status:</strong> {overall_status}<br>",
        f"<strong>Review Date:</strong> {qc_date}<br>",
        f"<strong>Reviewed By:</strong> {reviewed_by}"
    ]

    if record_length:
        summary_lines.append(f"<br><strong>Record Length:</strong> {record_length} years")

    if timeseries_summary != 'No timeseries information available':
        summary_lines.append(f"<br><strong>Timeseries Summary:</strong> {timeseries_summary}")

    summary = '\n'.join(summary_lines) + "</p>"

    # Format checks table
    checks = qc_data.get('validation_checks', {})
    if not checks:
        return {'qc_summary': summary, 'qc_checks_table': ''}

    status_icons = {'passed': '✅', 'warning': '⚠️', 'failed': '❌', 'unknown': '❓'}
    rows = ['<tr><th>Check Category</th><th>Status</th><th>Notes</th></tr>']

    check_names = {
        'data_completeness': 'Data Completeness',
        'polygon_bounds': 'Polygon Bounds',
        'hydrometric_continuity': 'Hydrometric Continuity',
        'metadata_completeness': 'Metadata Completeness'
    }

    for check_key, check_data in checks.items():
        category = check_names.get(check_key, check_key)
        status = check_data.get('status', 'unknown')
        icon = status_icons.get(status, '❓')
        status_display = f"{icon} {status.capitalize()}"

        # Build descriptive notes with quantitative details
        notes_parts = []

        if check_key == 'data_completeness':
            missing = check_data.get('missing_files', [])
            if missing:
                notes_parts.append(f"Missing: {', '.join(missing)}")
            else:
                present = []
                if check_data.get('rating_curves_present'):
                    present.append('rating curves')
                if check_data.get('corrections_present'):
                    present.append('corrections')
                if check_data.get('field_visits_present'):
                    present.append('field visits')
                if present:
                    notes_parts.append(f"Available: {', '.join(present)}")

        elif check_key == 'polygon_bounds':
            if check_data.get('polygon_file_present'):
                area = check_data.get('area_km2')
                if area:
                    notes_parts.append(f"Catchment area: {area:.1f} km²")
                else:
                    notes_parts.append("Polygon file present")
            else:
                notes_parts.append("No polygon file")

        elif check_key == 'hydrometric_continuity':
            custom_note = check_data.get('notes', '')
            if custom_note:
                notes_parts.append(custom_note)
                # Add record length if available
                record_length = check_data.get('record_length_years')
                if record_length:
                    notes_parts.append(f"Record: {record_length:.1f} years")

        elif check_key == 'metadata_completeness':
            missing_fields = []
            if not check_data.get('station_name'):
                missing_fields.append('name')
            if not check_data.get('coordinates'):
                missing_fields.append('coordinates')
            if not check_data.get('drainage_area'):
                missing_fields.append('drainage area')

            if missing_fields:
                notes_parts.append(f"Missing: {', '.join(missing_fields)}")
            else:
                notes_parts.append("All key metadata present")

        # Fallback to existing notes field if nothing generated
        if not notes_parts:
            existing_note = check_data.get('notes', '')
            notes_parts.append(existing_note if existing_note else 'No details available')

        notes_display = ' | '.join(notes_parts)
        rows.append(f'<tr><td><strong>{category}</strong></td><td>{status_display}</td><td>{notes_display}</td></tr>')

    checks_table = '<table class="dataframe table">\n' + '\n'.join(rows) + '\n</table>'

    return {'qc_summary': summary, 'qc_checks_table': checks_table}


def load_and_format_rating_curves(station_id: str, max_curves: int = 5) -> str:
    """Load rating curves CSV and format as table.

    Args:
        station_id: Station identifier
        max_curves: Maximum number of curves to display

    Returns:
        HTML table string
    """
    rc_path = get_station_dir(station_id) / f"{station_id}_RCs.csv"

    if not rc_path.exists():
        return "<p><em>No rating curve data available.</em></p>"

    try:
        df = pd.read_csv(rc_path)

        # Take first max_curves rows
        df = df.head(max_curves)

        # Select and rename columns
        display_cols = {
            'Curve Number/Numéro de courbe': 'Curve #',
            'Type/Catégorie': 'Type',
            'Approval/Approbation': 'Approval Status',
            'Remarks/Remarques': 'Remarks'
        }

        df_display = df.copy()
        # Rename columns that exist
        rename_map = {col: display_cols[col] for col in df.columns if col in display_cols}
        df_display = df_display.rename(columns=rename_map)

        # Truncate remarks to 100 characters
        if 'Remarks' in df_display.columns:
            df_display['Remarks'] = df_display['Remarks'].apply(
                lambda x: str(x)[:100] + '...' if pd.notna(x) and len(str(x)) > 100 else str(x)
            )

        # Select columns that exist
        cols_to_show = [col for col in ['Curve #', 'Type', 'Approval Status', 'Remarks'] if col in df_display.columns]
        df_display = df_display[cols_to_show]

        html = df_display.to_html(index=False, classes='tufte-table', border=0, escape=False)
        return html

    except Exception as e:
        return f"<p><em>Error loading rating curves: {e}</em></p>"


def get_jinja_environment() -> Environment:
    """Create Jinja2 environment for templates.

    Returns:
        Configured Jinja2 Environment
    """
    return Environment(
        loader=FileSystemLoader(str(TEMPLATES_DIR)),
        autoescape=False,  # Emitting Markdown
        keep_trailing_newline=True,
    )


def render_page_from_template(
    template_name: str,
    context: dict,
    output_path: Path,
) -> bool:
    """Render Jinja2 template and write to file.

    Args:
        template_name: Template filename (e.g., "station_page_template.md.j2")
        context: Dictionary of template variables
        output_path: Where to write rendered markdown

    Returns:
        True if successful, False otherwise
    """
    try:
        env = get_jinja_environment()
        template = env.get_template(template_name)
        rendered = template.render(**context)

        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(rendered)

        return True
    except Exception as e:
        print(f"Error rendering {template_name}: {e}")
        return False


def generate_station_page(
    station_id: str,
    template_name: str = "station_page_template.md.j2",
    output_dir: Path = None,
) -> bool:
    """Generate a complete station page from metadata and template.

    Args:
        station_id: Station identifier
        template_name: Template filename to use
        output_dir: Override default output directory

    Returns:
        True if successful
    """
    if output_dir is None:
        output_dir = STATION_PAGES_DIR

    stn_dir = get_station_dir(station_id)

    # Load all JSON metadata
    metadata = load_station_json_data(station_id, "_metadata.json")
    if not metadata:
        print(f"  ⚠ {station_id}: Missing _metadata.json")
        return False

    qc_status = load_station_json_data(station_id, "_qc_status.json")
    versions_data = load_station_json_data(station_id, "_versions.json")

    # Build context with formatted tables
    station_data_table = format_station_metadata_horizontal(metadata)
    version_history_table = load_and_format_versions_table(station_id)
    data_sources_table = load_and_format_data_sources_table(station_id)
    qc_status = load_and_format_qc_status(station_id)
    rating_curves_table = load_and_format_rating_curves(station_id, max_curves=5)

    # Check timeseries file availability for download buttons
    daily_flows_available = (stn_dir / f"{station_id}_daily_flows.csv").exists()
    daily_levels_available = (stn_dir / f"{station_id}_daily_levels.csv").exists()
    annual_peaks_available = (stn_dir / f"{station_id}_annual_instant_peaks.csv").exists()
    field_visits_available = (stn_dir / f"{station_id}_field_visits.csv").exists()

    context = {
        "official_id": metadata.get("station_id", station_id),
        "stn": {"STATION_NAME": metadata.get("station_name", "Unknown")},
        "station_data_table": station_data_table,
        "version_history_table": version_history_table,
        "data_sources_table": data_sources_table,
        "qc_summary": qc_status['qc_summary'],
        "qc_checks_table": qc_status['qc_checks_table'],
        "rating_curves_table": rating_curves_table,
        "daily_flows_available": daily_flows_available,
        "daily_levels_available": daily_levels_available,
        "annual_peaks_available": annual_peaks_available,
        "field_visits_available": field_visits_available
    }

    output_path = output_dir / f"{station_id}.md"
    return render_page_from_template(template_name, context, output_path)
