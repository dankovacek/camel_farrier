"""Template rendering utilities for generating MyST syntax from structured data.

This module provides functions to render status messages, notes, and placeholders
using Jinja2 templates. This ensures separation of concerns: Python code returns
structured data (dicts), and templates handle presentation (MyST syntax).

Example:
    >>> result = plot_function(station_id)
    >>> if result['status'] != 'success':
    ...     myst = render_message(result['status'], result['message'], result.get('context'))
    >>> else:
    ...     myst = render_note("Analysis Notes", result['notes'])
"""

from pathlib import Path
from typing import List, Optional, Dict, Any
from jinja2 import Environment, FileSystemLoader, select_autoescape

# Template directory relative to this file
PROJECT_ROOT = Path(__file__).parent.parent.parent
TEMPLATE_DIR = PROJECT_ROOT / "book_docs" / "templates"


def _get_jinja_env() -> Environment:
    """Create and configure Jinja2 environment for MyST templates.

    Returns:
        Configured Jinja2 Environment
    """
    env = Environment(
        loader=FileSystemLoader(TEMPLATE_DIR),
        autoescape=select_autoescape(['html', 'xml']),
        trim_blocks=True,
        lstrip_blocks=True
    )
    return env


def render_message(status: str, message: str, context: Optional[str] = None) -> str:
    """Render a status message as MyST admonition syntax.

    Args:
        status: Message type ('error', 'warning', 'info', 'success')
        message: Main message text
        context: Optional additional context information

    Returns:
        MyST syntax string with styled admonition

    Example:
        >>> render_message('warning', 'Station not found', 'May not be in dataset')
        "```{admonition} Warning\\n:class: cf-message-warning\\n\\nStation not found\\n\\n*May not be in dataset*\\n```"
    """
    env = _get_jinja_env()
    template = env.get_template(f"messages/{status}.myst")
    return template.render(message=message, context=context)


def render_note(title: str, items: List[str]) -> str:
    """Render a note box with bullet points as MyST syntax.

    Args:
        title: Note box title
        items: List of bullet point strings

    Returns:
        MyST syntax string with formatted note

    Example:
        >>> render_note("Notes", ["Point 1", "Point 2"])
        "**Notes**\\n\\n- Point 1\\n- Point 2\\n"
    """
    env = _get_jinja_env()
    template = env.get_template("messages/note.myst")
    return template.render(title=title, items=items)


def render_placeholder(placeholder_type: str, **kwargs) -> str:
    """Render a placeholder message (e.g., 'pending', 'no_data').

    Args:
        placeholder_type: Type of placeholder ('pending', 'no_data')
        **kwargs: Template-specific variables (title, subtitle, reason, etc.)

    Returns:
        HTML string with placeholder styling (uses .cf-placeholder CSS class)

    Example:
        >>> render_placeholder('pending', title='Coming soon', subtitle='Processing...')
        '<div class="cf-placeholder">...</div>'
    """
    env = _get_jinja_env()
    template = env.get_template(f"placeholders/{placeholder_type}.myst")
    return template.render(**kwargs)


def render_from_result(result: Dict[str, Any]) -> str:
    """Render MyST content from a function result dict.

    This is a convenience function that inspects a result dictionary
    and renders appropriate MyST content based on the status.

    Args:
        result: Result dictionary with keys like 'status', 'message', 'context', 'notes'

    Returns:
        MyST syntax string

    Example:
        >>> result = {'status': 'error', 'message': 'File not found', 'context': 'Check path'}
        >>> render_from_result(result)
        "```{admonition} Error\\n:class: cf-message-error\\n\\nFile not found\\n\\n*Check path*\\n```"
    """
    status = result.get('status')

    if status in ('error', 'warning', 'info', 'success'):
        return render_message(
            status=status,
            message=result.get('message', 'No message provided'),
            context=result.get('context')
        )

    elif status == 'note':
        return render_note(
            title=result.get('title', 'Note'),
            items=result.get('items', [])
        )

    elif status == 'placeholder':
        return render_placeholder(
            placeholder_type=result.get('type', 'pending'),
            **result.get('data', {})
        )

    else:
        # Unknown status - return as info message
        return render_message(
            status='info',
            message=str(result.get('message', result)),
            context=f"Unknown status: {status}"
        )
