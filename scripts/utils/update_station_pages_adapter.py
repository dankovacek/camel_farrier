#!/usr/bin/env python3
"""
Update station page .md files to use bokeh_adapters for refactored plot functions.

This script updates all station pages to use the adapter pattern for plot functions
that now return status dicts instead of Bokeh widgets directly.

Usage:
    python scripts/utils/update_station_pages_adapter.py
"""

import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]
STATION_PAGES_DIR = PROJECT_ROOT / "book_docs" / "station_pages" / "stations"


def update_plot_station_polygon(content: str) -> tuple[str, int]:
    """Update plot_station_polygon calls to use adapter.

    Args:
        content: File content string

    Returns:
        Tuple of (updated_content, number_of_replacements)
    """
    # Pattern to match the bokeh-plot directive with plot_station_polygon
    pattern = r'(:::\{bokeh-plot\}\n.*?from scripts\.catchment_page_utils import plot_station_polygon\n)(show\(plot_station_polygon\("([^"]+)"\)\))'

    def replacer(match):
        prefix = match.group(1)
        station_id = match.group(3)
        return (
            f'{prefix}'
            f'from scripts.utils.bokeh_adapters import show_with_notes\n'
            f'result = plot_station_polygon("{station_id}")\n'
            f'show(show_with_notes(result))'
        )

    updated, count = re.subn(pattern, replacer, content, flags=re.DOTALL)
    return updated, count


def update_plot_distributions(content: str) -> tuple[str, int]:
    """Update plot_distributions calls to use adapter.

    Args:
        content: File content string

    Returns:
        Tuple of (updated_content, number_of_replacements)
    """
    # Pattern to match the bokeh-plot directive with plot_distributions
    pattern = r'(:::\{bokeh-plot\}\n.*?from scripts\.catchment_page_utils import plot_distributions\n)(show\(plot_distributions\("([^"]+)"\)\))'

    def replacer(match):
        prefix = match.group(1)
        station_id = match.group(3)
        return (
            f'{prefix}'
            f'from scripts.utils.bokeh_adapters import show_with_notes\n'
            f'result = plot_distributions("{station_id}")\n'
            f'show(show_with_notes(result))'
        )

    updated, count = re.subn(pattern, replacer, content, flags=re.DOTALL)
    return updated, count


def update_station_page(md_file: Path) -> dict:
    """Update a single station page file.

    Args:
        md_file: Path to markdown file

    Returns:
        Dict with update statistics
    """
    try:
        content = md_file.read_text()
        original_content = content

        # Apply updates
        content, polygon_updates = update_plot_station_polygon(content)
        content, dist_updates = update_plot_distributions(content)

        total_updates = polygon_updates + dist_updates

        # Write back if changes were made
        if content != original_content:
            md_file.write_text(content)
            return {
                'status': 'updated',
                'polygon_updates': polygon_updates,
                'dist_updates': dist_updates,
                'total': total_updates
            }

        return {'status': 'unchanged', 'total': 0}

    except Exception as e:
        return {'status': 'error', 'error': str(e), 'total': 0}


def main():
    """Update all station pages."""
    print("=" * 60)
    print("Updating station pages to use bokeh_adapters")
    print("=" * 60)

    if not STATION_PAGES_DIR.exists():
        print(f"Error: Station pages directory not found: {STATION_PAGES_DIR}")
        return

    md_files = sorted(STATION_PAGES_DIR.glob("*.md"))
    print(f"\nFound {len(md_files)} station page files\n")

    results = {
        'updated': 0,
        'unchanged': 0,
        'errors': 0,
        'total_replacements': 0
    }

    for md_file in md_files:
        result = update_station_page(md_file)

        if result['status'] == 'updated':
            results['updated'] += 1
            results['total_replacements'] += result['total']
            if result['total'] > 0:
                print(f"✓ {md_file.name}: {result['polygon_updates']} polygon, "
                      f"{result['dist_updates']} distributions")
        elif result['status'] == 'unchanged':
            results['unchanged'] += 1
        elif result['status'] == 'error':
            results['errors'] += 1
            print(f"✗ {md_file.name}: {result['error']}")

    print("\n" + "=" * 60)
    print("Summary:")
    print(f"  Updated: {results['updated']} files")
    print(f"  Unchanged: {results['unchanged']} files")
    print(f"  Errors: {results['errors']} files")
    print(f"  Total replacements: {results['total_replacements']}")
    print("=" * 60)


if __name__ == "__main__":
    main()
