"""Changelog generation for station polygon revisions.

This module demonstrates how the shared utilities from scripts.generation
can be reused for changelog pages.

Example:
    from scripts.generation.page_generator import render_page_from_template

    context = {
        "station_id": "07AF010",
        "changes": [...],
        "comparison_table": html_table,
    }
    render_page_from_template("changelog_template.md.j2", context, output_path)
"""

from scripts.generation.page_generator import render_page_from_template

# TODO: Implement changelog page generation functions
