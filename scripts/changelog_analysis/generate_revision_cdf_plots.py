#!/usr/bin/env python3
"""Generate publication-style CDF plots for polygon comparison metrics.

This script loads pre-processed Caravan-vs-WSC comparison metrics and exports
one PNG containing two empirical CDF panels:
1. Jaccard similarity index distribution.
2. Absolute percent area change distribution.
"""

from __future__ import annotations

import argparse
from pathlib import Path
import sys

import numpy as np
import pandas as pd
from bokeh.io import export_png
from bokeh.layouts import row, gridplot
from bokeh.plotting import figure
from PIL import Image

PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from scripts.config.paths import CARAVAN_COMPARISON_OUTPUT_DIR

ACADEMIC_FONT = "EB Garamond, STIX Two Text, DejaVu Serif, Noto Serif, serif"
DEFAULT_INPUT = CARAVAN_COMPARISON_OUTPUT_DIR / "comparison_metrics.csv"
DEFAULT_OUTPUT = PROJECT_ROOT / "images" / "geometric_deviations.png"
EPSILON = 1e-3


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate JSI and area-change CDF figure from pre-processed metrics."
    )
    parser.add_argument(
        "--input",
        type=Path,
        default=DEFAULT_INPUT,
        help=f"Input metrics CSV (default: {DEFAULT_INPUT})",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help=f"Output PNG path (default: {DEFAULT_OUTPUT})",
    )
    parser.add_argument(
        "--width",
        type=int,
        default=900,
        help="Per-panel width in pixels (default: 900)",
    )
    parser.add_argument(
        "--height",
        type=int,
        default=650,
        help="Per-panel height in pixels (default: 650)",
    )
    return parser.parse_args()


def _ecdf(values: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    sorted_values = np.sort(values)
    probs = (np.arange(len(sorted_values)) + 1) / len(sorted_values)
    return sorted_values, probs


def _apply_publication_style(p):
    p.title.text_font = ACADEMIC_FONT
    p.title.text_font_size = "22pt"
    p.title.text_font_style = "normal"

    p.axis.axis_label_text_font = ACADEMIC_FONT
    p.axis.axis_label_text_font_size = "20pt"
    p.axis.major_label_text_font = ACADEMIC_FONT
    p.axis.major_label_text_font_size = "16pt"

    p.min_border_left = 65
    p.min_border_bottom = 55
    p.min_border_top = 28
    p.min_border_right = 25


def build_jsi_cdf_plot(df: pd.DataFrame, width: int, height: int):
    if "jaccard_index" not in df.columns:
        raise ValueError("Missing required column: jaccard_index")

    values = df["jaccard_index"].dropna().to_numpy(dtype=float)
    if values.size == 0:
        raise ValueError("No valid jaccard_index values found in input data")

    x, y = _ecdf(values)

    p = figure(
        title="",
        x_axis_label="Jaccard Similarity Index",
        y_axis_label="P(X ≤ x)",
        width=width,
        height=height,
        tools="pan,wheel_zoom,reset,save",
        y_range=(0, 1.1)
    )
    p.line(x, y, line_width=4, color="#1f4e79", alpha=0.9)
    p.scatter(x, y, size=7, color="#1f4e79", alpha=0.6)
    p.y_range.start = 0
    p.y_range.end = 1

    _apply_publication_style(p)
    return p


def build_area_cdf_plot(df: pd.DataFrame, width: int, height: int):
    if "percent_area_diff" not in df.columns:
        raise ValueError("Missing required column: percent_area_diff")

    values = np.abs(df["percent_area_diff"].dropna().to_numpy(dtype=float))
    if values.size == 0:
        raise ValueError("No valid percent_area_diff values found in input data")

    values = np.maximum(values, EPSILON)
    x, y = _ecdf(values)

    p = figure(
        title="",
        x_axis_label="Absolute Percent Area Change (%)",
        y_axis_label="P(X ≤ x)",
        width=width,
        height=height,
        x_axis_type="log",
        tools="pan,wheel_zoom,reset,save",
    )
    p.line(x, y, line_width=4, color="#8b1e3f", alpha=0.9)
    p.scatter(x, y, size=7, color="#8b1e3f", alpha=0.6)
    p.y_range.start = 0
    p.y_range.end = 1

    _apply_publication_style(p)
    return p


def load_metrics(path: Path) -> pd.DataFrame:
    if not path.exists():
        raise FileNotFoundError(f"Input CSV not found: {path}")

    df = pd.read_csv(path)
    if df.empty:
        raise ValueError(f"Input CSV is empty: {path}")
    return df


def main() -> None:
    args = parse_args()

    df = load_metrics(args.input)

    pw, ph = 300, 300

    jsi_plot = build_jsi_cdf_plot(df, width=pw, height=ph)
    area_plot = build_area_cdf_plot(df, width=pw, height=ph)

    for p in [jsi_plot, area_plot]:
        p.title.text_font_size = "22pt"
        p.title.text_font = ACADEMIC_FONT
        p.axis.axis_label_text_font_size = "22pt"
        p.axis.major_label_text_font_size = "30pt"
        p.axis.major_tick_out = 15
        p.axis.major_tick_line_width = 2

    layout = gridplot(
        [[jsi_plot, area_plot]], width=500, height=500,
        toolbar_location=None,
    )

    args.output.parent.mkdir(parents=True, exist_ok=True)
    export_png(layout, filename=str(args.output))

    # Add print-friendly DPI metadata without changing pixel dimensions.
    img = Image.open(args.output)
    img.save(args.output, dpi=(300, 300))

    print(f"Saved CDF figure: {args.output}")


if __name__ == "__main__":
    main()
