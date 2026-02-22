"""Bokeh visualization utilities."""

from pathlib import Path
from jinja2 import Template
from bokeh.plotting import figure
from bokeh.embed import components
from bokeh.resources import CDN


def render_html_from_plot(p, html_path):
    """Convert Bokeh plot to standalone HTML file.

    Args:
        p: Bokeh figure object
        html_path: Path to output HTML file
    """
    script, div = components(p)

    plot_template = Template(
        """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        {{ resources }}
        {{ script }}
        <style> body { margin: 0; } </style>
    </head>
    <body>
        {{ div | safe }}
    </body>
    </html>
    """
    )
    rendered_plot_html = plot_template.render(
        script=script, div=div, resources=CDN.render()
    )
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(rendered_plot_html)
