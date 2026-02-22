"""Markdown generation and table formatting utilities."""

import pandas as pd
from jinja2 import Environment, FileSystemLoader
from scripts.config.paths import TEMPLATES_DIR


def dataframe_to_markdown_table(df: pd.DataFrame, index: bool = False) -> str:
    """Convert DataFrame to GitHub-flavored markdown table.

    Args:
        df: Pandas DataFrame
        index: Include index as column

    Returns:
        Markdown table string
    """
    return df.to_markdown(index=index, tablefmt="github")


def dataframe_to_html_table(df: pd.DataFrame, classes: str = "") -> str:
    """Convert DataFrame to HTML table.

    Args:
        df: Pandas DataFrame
        classes: CSS classes for table element

    Returns:
        HTML table string
    """
    return df.to_html(classes=classes, index=False)


def load_template(template_name: str) -> str:
    """Load Jinja2 template content.

    Args:
        template_name: Template filename (e.g., "station_page_template.md.j2")

    Returns:
        Template string content
    """
    template_path = TEMPLATES_DIR / template_name
    with open(template_path, "r", encoding="utf-8") as f:
        return f.read()


def render_template(template_name: str, context: dict) -> str:
    """Render Jinja2 template with context.

    Args:
        template_name: Template filename
        context: Dictionary of template variables

    Returns:
        Rendered template string
    """
    from jinja2 import Template
    template_content = load_template(template_name)
    template = Template(template_content)
    return template.render(**context)


def jaccard_matrix_to_markdown(
    jaccard_matrix: dict, revision_dates: dict
) -> tuple:
    """Convert Jaccard similarity matrix to markdown tables.

    Args:
        jaccard_matrix: Dict mapping station_id to similarity values
        revision_dates: Dict mapping revision indices to dates

    Returns:
        Tuple of (similarity_table_md, revision_dates_table_md)
    """
    jaccard_df = pd.DataFrame.from_dict(jaccard_matrix, orient="index")
    jaccard_df = jaccard_df.sort_values(by=list(jaccard_df.columns), ascending=True)
    jaccard_df.columns = [f"[{e[0]}] → [{e[1]}]" for e in jaccard_df.columns]

    similarity_table_md = jaccard_df.to_markdown(index=True, tablefmt="github")

    revision_dates_df = pd.DataFrame.from_dict(revision_dates, orient="index")
    revision_dates_df.columns = ["Revision Date"]
    revision_dates_df.index.name = "Ref. Number"
    revision_dates_md = revision_dates_df.to_markdown(index=True, tablefmt="github")

    return similarity_table_md, revision_dates_md
