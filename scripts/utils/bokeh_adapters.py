"""Adapters for converting status dicts to Bokeh widgets for :::{bokeh-plot} directives.

This module provides temporary adapter functions that bridge the gap between our
refactored backend functions (which return status dicts) and the existing bokeh-plot
MyST directive (which expects Bokeh figure objects).

MIGRATION NOTE: This is a transitional layer. The long-term goal is to generate
pages directly as MyST markdown that uses native admonitions/directives rather than
embedding HTML through Bokeh Div widgets. As pages are migrated to pure MyST generation,
these adapters become obsolete.

Usage in :::{bokeh-plot} directives:
    ```python
    from scripts.utils.bokeh_adapters import show_with_notes
    result = plot_station_polygon(station_id)
    show(show_with_notes(result))
    ```
"""

from typing import Dict, Any, Union
from bokeh.models import Div
from bokeh.layouts import column
from bokeh.plotting import figure


def render_placeholder_div(result: Dict[str, Any], width: int = 800, height: int = 400) -> Div:
    """Render a placeholder Div from a pending status dict.

    Args:
        result: Status dict with 'title' and optional 'subtitle'
        width: Width in pixels
        height: Height in pixels

    Returns:
        Bokeh Div widget with placeholder styling
    """
    title = result.get('title', 'Pending')
    subtitle = result.get('subtitle', '')

    subtitle_html = f'<br><span style="font-size: 0.9rem;">{subtitle}</span>' if subtitle else ''

    html = f"""
    <div class="cf-placeholder" style="min-height: {height}px;">
        <div>
            <p style="margin: 0; font-weight: 500;">{title}</p>
            {subtitle_html}
        </div>
    </div>
    """
    return Div(text=html, width=width, height=height)


def render_message_div(result: Dict[str, Any], width: int = 800, height: int = 120) -> Div:
    """Render a compact italic message Div from status dict."""
    message = result.get('message', 'No message provided')
    context = result.get('context')

    if context:
        message = f"{message} — {context}"

    html = f"<p style=\"margin: 0; font-style: italic;\">{message}</p>"
    return Div(text=html, width=width, height=height)


def render_note_div(notes: Dict[str, Any], width: int = 800) -> Div:
    """Render a note box Div from notes dict.

    Args:
        notes: Dict with 'title' and 'items' (list of strings)
        width: Width in pixels

    Returns:
        Bokeh Div widget with note styling
    """
    title = notes.get('title', 'Notes')
    items = notes.get('items', [])

    # Handle markdown bold syntax in items
    items_html = []
    for item in items:
        # Convert **text** to <strong>text</strong>
        formatted = item.replace('**', '<strong>', 1).replace('**', '</strong>', 1) if '**' in item else item
        items_html.append(f'<li>{formatted}</li>')

    items_list = ''.join(items_html)

    html = f"""
    <div class="cf-note-box">
        <strong>{title}</strong>
        <ul>
            {items_list}
        </ul>
    </div>
    """
    return Div(text=html, width=width)


def show_with_notes(result: Dict[str, Any], width: int = 800) -> Union[figure, Div, column]:
    """Convert status dict to Bokeh widget(s) for bokeh-plot directive.

    This adapter function bridges refactored plot functions (returning status dicts)
    with the existing :::{bokeh-plot} MyST directive pattern (expecting Bokeh objects).

    Args:
        result: Status dict from plot function with structure:
            - {'status': 'success', 'figure': bokeh_fig, 'notes': {...}}
            - {'status': 'warning/error', 'message': str, 'context': str}
            - {'status': 'pending', 'title': str, 'subtitle': str}
        width: Width for non-figure widgets

    Returns:
        - For success: Bokeh figure or column(figure, note_div)
        - For errors: Div with error message
        - For pending: Div with placeholder

    Examples:
        >>> # In a bokeh-plot directive:
        >>> result = plot_station_polygon(station_id)
        >>> show(show_with_notes(result))
    """
    status = result.get('status')

    # Handle pending/placeholder states
    if status == 'pending':
        return render_placeholder_div(result, width=width)

    # Handle error/warning/info messages
    if status in ('error', 'warning', 'info'):
        return render_message_div(result, width=width)

    # Handle success - extract figure and optional notes
    if status == 'success':
        fig = result.get('figure')
        notes = result.get('notes')

        if fig is None:
            # Shouldn't happen, but handle gracefully
            return render_message_div({
                'status': 'error',
                'message': 'Success status but no figure provided'
            }, width=width)

        # Return figure with notes if present
        if notes:
            note_div = render_note_div(notes, width=width)
            return column(fig, note_div)

        return fig

    # Unknown status - render as info message
    return render_message_div({
        'status': 'info',
        'message': f'Unknown status: {status}',
        'context': str(result)
    }, width=width)
