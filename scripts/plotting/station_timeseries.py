"""Station time series plotting with flow, level, quality flags, and rating curves."""

import logging
import os
import numpy as np
import pandas as pd
from pathlib import Path

from bokeh.plotting import figure
from bokeh.models import Div, Range1d, LinearAxis, ColumnDataSource, DataTable, TableColumn, HoverTool, InlineStyleSheet
from bokeh.layouts import column

# Import from refactored utilities
from scripts.config.paths import get_station_dir

BASE_DIR = Path(__file__).resolve().parent.parent.parent

BASE_DIR = Path(__file__).resolve().parent.parent.parent
from scripts.utils.data_loaders import load_quality_codes, load_precision_codes

# Load symbol dictionaries
symbol_dict = load_quality_codes()
precision_codes_dict = load_precision_codes()

logger = logging.getLogger(__name__)

SYMBOL_COLOURS = {
    "B": "dodgerblue",  # Baseflow
    "D": "firebrick",  # Dry weather flow
    "E": "orange",  # Estimated
}


def _map_quality_symbols(dates: pd.Series, flow_df: pd.DataFrame) -> pd.Series:
    """Map HYDAT quality symbols onto a series of field-visit dates.

    Returns a NaN series when the column is absent (e.g. gap-filled demo data).
    """
    if not flow_df.empty and "quality_symbol" in flow_df.columns:
        flow_df = flow_df.copy()
        flow_df.index = pd.to_datetime(flow_df.index).normalize()
        return dates.map(flow_df["quality_symbol"])
    return pd.Series(np.nan, index=dates.index)


def find_symbol_segments(symbol_df, target_symbol, label="symbol"):
    """Return (start, end) date pairs for each continuous period of target_symbol."""
    # Filter for matching symbol only
    mask = symbol_df[label] == target_symbol
    dates = symbol_df[label].index[mask]

    if dates.empty:
        return []

    # Compute gaps in days between successive dates
    gaps = dates.to_series().diff().gt(pd.Timedelta(days=1)).fillna(True)

    # Group by contiguous regions (cumsum creates a new group after each gap)
    group_ids = gaps.cumsum()

    # Group by group ID and extract start and end of each contiguous block
    segments = [
        (group.min(), group.max()) for _, group in dates.to_series().groupby(group_ids)
    ]

    return segments


def plot_quality_flag_periods(stn, df, quality_symbols, runoff_plot, obs_col):
    """Highlight periods with quality flags (E=Estimated, D=Dry, B=Baseflow)."""
    df["symbol"] = quality_symbols["quality_symbol"].reindex(df.index, method=None)

    for symbol in ["B", "D", "E"]:
        description = symbol_dict.get(symbol, "")
        color = SYMBOL_COLOURS.get(symbol, "gray")
        n_symbols = df["symbol"].eq(symbol).sum()
        if n_symbols == 0:
            continue

        segments = find_symbol_segments(df[["symbol"]].copy(), symbol, label="symbol")

        for start, end in segments:
            runoff_plot.varea(
                x=pd.date_range(start, end),
                y1=0.98 * df[obs_col].min(),
                y2=1.02 * df[obs_col].max(),
                fill_color=color,
                fill_alpha=0.3,
                legend_label=f"{description} ({symbol})",
            )
    return runoff_plot


def plot_zero_flow_periods(stn, df, runoff_plot, obs_col):
    """Highlight periods where Q=0 was replaced."""
    color = "salmon"
    df["zero_flow_flag"] = df[obs_col] <= 1e-4
    n_symbols = (df["zero_flow_flag"] == True).sum()
    if n_symbols == 0:
        return runoff_plot

    segments = find_symbol_segments(
        df[["zero_flow_flag"]].copy(), True, label="zero_flow_flag"
    )
    for start, end in segments:
        runoff_plot.varea(
            x=pd.date_range(start, end),
            y1=0.98 * df[obs_col].min(),
            y2=1.02 * df[obs_col].max(),
            fill_color=color,
            fill_alpha=0.3,
            legend_label="Q=0 replaced",
        )
    runoff_plot.line(
        df.index,
        df[obs_col],
        color="purple",
        legend_label=obs_col,
        line_width=2,
        line_dash="dotted",
    )
    return runoff_plot


def plot_flow_series(official_id, fpath, label, plot):
    """Plot daily flow time series with quality flags."""
    try:
        df = pd.read_csv(fpath, parse_dates=["date"], index_col="date")
    except Exception as exc:
        raise ValueError(f"Unable to read daily flow data for {official_id}: {exc}") from exc

    if df.empty or label not in df.columns:
        return plot, pd.DataFrame()

    if "quality_symbol" not in df.columns:
        df["quality_symbol"] = np.nan

    # Reindex to daily frequency and keep nans
    df = df.copy().reindex(
        pd.date_range(start=df.index.min(), end=df.index.max(), freq="D")
    )
    quality_symbols = df[["quality_symbol"]]

    if (not df.empty) & (not quality_symbols.empty):
        plot = plot_quality_flag_periods(
            official_id,
            df,
            quality_symbols,
            plot,
            label,
        )

    # Plot zero flow segments
    plot = plot_zero_flow_periods(official_id, df, plot, label)

    # Plot the adjusted line
    plot.line(
        df.index,
        df[label],
        color="dodgerblue",
        legend_label=f"{label}",
        line_width=2.0,
    )
    return plot, df


def plot_level_series(official_id, fpath, label, plot):
    """Plot daily water level time series on secondary y-axis."""
    try:
        df = pd.read_csv(fpath, parse_dates=["date"], index_col="date")
    except Exception as exc:
        raise ValueError(f"Unable to read water level data for {official_id}: {exc}") from exc

    if df.empty or label not in df.columns:
        return plot, False

    # Reindex to daily frequency and keep nans
    df = df.copy().reindex(
        pd.date_range(start=df.index.min(), end=df.index.max(), freq="D")
    )

    if df[label].dropna().empty:
        return plot, False

    # Create a secondary axis for the water level plot
    min_w, max_w = df[label].min() - 0.01, df[label].max() - 0.01
    plot.extra_y_ranges = {"water_level": Range1d(start=min_w, end=max_w)}
    plot.add_layout(
        LinearAxis(y_range_name="water_level", axis_label="Water Level (m)"), "right"
    )

    # Plot the adjusted line
    plot.line(
        df.index,
        df[label],
        color="green",
        legend_label=f"{label}",
        line_width=2.0,
        y_range_name="water_level",
    )
    return plot, True


def safe_datetime(x):
    """Convert year/month/day/hour/minute dict to datetime, handling missing values."""
    hour = int(x.get("HOUR", 0)) if pd.notnull(x.get("HOUR", 0)) else 0
    minute = int(x.get("MINUTE", 0)) if pd.notnull(x.get("MINUTE", 0)) else 0
    try:
        datetime = pd.Timestamp(
            f"{x['YEAR']}-{x['MONTH']}-{x['DAY']} {hour:02d}:{minute:02d}",
        )
    except Exception:
        datetime = pd.NaT
    return datetime


def plot_annual_peaks(plot, df):
    """Add annual peak/low flow markers to time series plot."""
    df["datetime"] = df.apply(safe_datetime, axis=1)
    df = df.dropna(subset=["datetime"])
    df["precision_description"] = df["PRECISION_CODE"].map(precision_codes_dict)
    df["quality_symbol"] = df["SYMBOL"].map(symbol_dict)

    peaks = df[(df["PEAK_CODE"] == "H") & (df["DATA_TYPE"] == "Q")].copy()
    lows = df[(df["PEAK_CODE"] == "L") & (df["DATA_TYPE"] == "Q")].copy()

    # Plot peaks as triangle with point up
    plot.scatter(
        peaks["datetime"].values,
        peaks["PEAK"],
        marker="^",
        size=15,
        color="lightblue",
        legend_label="Peaks",
    )
    plot.scatter(
        lows["datetime"].values,
        lows["PEAK"],
        marker="v",
        size=15,
        color="red",
        legend_label="Lows",
    )
    return plot, peaks


def get_rc_points(official_id):
    """Load rating curve field visit data for a station."""
    station_dir = get_station_dir(official_id)
    fv_fpath = station_dir / f"{official_id}_field_visits.csv"

    if not fv_fpath.exists():
        return pd.DataFrame(), {}

    rc_df = pd.read_csv(fv_fpath)
    labels = {
        "date": "Date (UTC)/Date (TUC)",
        "activity": "Activity Type/Type d'activité",
        "q_activity_label": "Discharge/Débit",
        "h_label": "Mean Gauge Height/Niveau Moyen",
        "remarks_label": "Activity Remarks/Remarques des activités",
        "rc_no_label": "Rating Curve Table Number/Numéro de cource de tarage",
    }
    return rc_df, labels


def plot_rc_points(labels, q_source):
    """Create scatter plot of rating curve calibration points."""
    rc_plot = figure(
        title="Rating Curve Calibration Points",
        width=1000,
        height=500,
        tools="pan,wheel_zoom,box_zoom,lasso_select,box_select,reset,save",
    )

    hover = HoverTool(
        tooltips=[
            ("Date", "@date_string"),
            ("Rating Curve Table Number", "@{Rating Curve Table Number/Numéro de cource de tarage}"),
            ("Control Condition", "@{Control Condition Remarks/Remark sur les condition de contrôle}"),
            ("Uncertainty", "@{Uncertainty/Incertitude}"),
            ("Quality Symbol", "@quality_label"),
            ("Water Temperature (°C)", "@{Water Temperature/La température de l'eau}"),
            ("Air Temperature (°C)", "@{Air Temperature/Température de l'air}"),
        ]
    )
    rc_plot.add_tools(hover)
    rc_plot.xaxis.axis_label = "Discharge (m³/s)"
    rc_plot.yaxis.axis_label = "Gauge Height (m)"

    # Add scatter plot
    rc_plot.scatter(
        x=labels["q_activity_label"],
        y=labels["h_label"],
        source=q_source,
        color="colour",
        size=8,
        alpha=0.8,
        legend_field="quality_label",
    )

    # Configure legend
    if rc_plot.legend:
        rc_plot.legend.title = "Quality Symbol"
        rc_plot.legend.location = "bottom_right"
        rc_plot.legend.background_fill_alpha = 0.5
        rc_plot.legend.click_policy = "hide"

    return rc_plot


def create_rc_table(rc_labels, q_source):
    """Create data table for rating curve measurements."""
    # Load tufte table CSS
    tufte_css_path = BASE_DIR / "book_docs" / "_static" / "tufte_table.css"
    tufte_css = tufte_css_path.read_text() if tufte_css_path.exists() else ""

    rc_table = DataTable(
        source=q_source,
        columns=[
            TableColumn(field="date_string", title="Date (UTC/TUC)"),
            TableColumn(field="time", title="Time/Heure"),
            TableColumn(field=rc_labels["q_activity_label"], title="Discharge/Débit"),
            TableColumn(field=rc_labels["h_label"], title="Mean Gauge Height/Niveau Moyen"),
            TableColumn(field=rc_labels["remarks_label"], title="Activity Remarks/Remarques des activités"),
            TableColumn(field=rc_labels["rc_no_label"], title="Rating Curve Table Number/Numéro de cource de tarage"),
        ],
        width=1000,
        sortable=True,
        index_position=None,
        stylesheets=[InlineStyleSheet(css=tufte_css)]
    )
    return rc_table


def plot_station_timeseries(official_id):
    """
    Create comprehensive time series plot for a station including:
    - Daily flow and level data
    - Quality flag periods
    - Annual peak/low events
    - Rating curve calibration points

    Args:
        official_id: Station identifier (e.g., '07AF010')

    Returns:
        Bokeh column layout with time series plot, rating curve plot, and data table
    """
    ts_plot = figure(
        title=f"{official_id} Observed Unit Area Runoff",
        x_axis_type="datetime",
        width=1000,
        height=350,
        # y_axis_type='log',
        toolbar_location="above",
        tools="pan,wheel_zoom,box_zoom,lasso_select,box_select,reset,save",
    )

    # Load station data from configured paths
    station_dir = get_station_dir(official_id)

    daily_flow_fpath = station_dir / f"{official_id}_daily_flows.csv"
    daily_levels_fpath = station_dir / f"{official_id}_daily_levels.csv"
    annual_peaks_fpath = station_dir / f"{official_id}_annual_instant_peaks.csv"

    # Plot flow series
    flow_df = pd.DataFrame()
    has_flow_series = False
    has_level_series = False
    has_peaks = False
    has_rc_points = False

    if daily_flow_fpath.exists():
        try:
            ts_plot, flow_df = plot_flow_series(official_id, daily_flow_fpath, "flow_cms", ts_plot)
            has_flow_series = not flow_df.empty
        except ValueError as exc:
            logger.warning("Daily flow load failed for %s: %s", official_id, exc)

    # Plot level series
    if daily_levels_fpath.exists():
        try:
            ts_plot, has_level_series = plot_level_series(official_id, daily_levels_fpath, "water_level_m", ts_plot)
        except ValueError as exc:
            logger.warning("Water level load failed for %s: %s", official_id, exc)

    # Plot annual peaks/lows
    if annual_peaks_fpath.exists():
        try:
            df = pd.read_csv(annual_peaks_fpath)
            if not df.empty:
                ts_plot, peaks = plot_annual_peaks(ts_plot, df)
                has_peaks = not peaks.empty
        except Exception as exc:
            logger.warning("Annual peaks load failed for %s: %s", official_id, exc)

    # Load rating curve data
    rc_df, rc_labels_dict = get_rc_points(official_id)
    rc_plot = Div(text="<p><em>No site visit information available for this station.</em></p>")
    rc_table = Div(text="<p><em>No rating curve data available for this station.</em></p>")

    if not rc_df.empty and rc_labels_dict:
        q_df = rc_df[rc_df[rc_labels_dict["activity"]] == rc_labels_dict["q_activity_label"]].copy()

        # Ensure both are datetime (normalized to date only)
        q_df[rc_labels_dict["date"]] = pd.to_datetime(q_df[rc_labels_dict["date"]]).dt.normalize()

        q_df["quality_symbol"] = _map_quality_symbols(q_df[rc_labels_dict["date"]], flow_df)
        q_df["quality_label"] = q_df["quality_symbol"].map(symbol_dict)

        # Format date and time strings
        date_strings = [d.strftime("%Y-%m-%d") for d in q_df[rc_labels_dict["date"]]]
        time_strings = [d.strftime("%H:%M") for d in q_df[rc_labels_dict["date"]]]
        q_df["date_string"] = date_strings
        q_df["time"] = time_strings
        q_df["colour"] = q_df["quality_symbol"].map(lambda x: SYMBOL_COLOURS.get(x, "purple"))

        if not q_df.empty:
            xlabel, ylabel = rc_labels_dict["date"], rc_labels_dict["q_activity_label"]
            q_df.dropna(subset=[ylabel], inplace=True)
            q_df["quality_label"] = q_df["quality_label"].replace({np.nan: "No flag"})
            q_source = ColumnDataSource(q_df)
            has_rc_points = True

            ts_plot.scatter(
                x=xlabel,
                y=ylabel,
                source=q_source,
                color="colour",
                size=8,
                alpha=0.8,
                legend_label="Measured Discharge",
            )

            rc_plot = plot_rc_points(rc_labels_dict, q_source)
            rc_table = create_rc_table(rc_labels_dict, q_source)

    # Set axis labels — index [0] to avoid overwriting the secondary water level axis
    ts_plot.xaxis.axis_label = "Date"
    ts_plot.yaxis[0].axis_label = "Flow (m³/s)"

    # Configure legend if it exists (only created when glyphs have legend_label)
    if ts_plot.legend:
        ts_plot.legend.click_policy = "hide"
        ts_plot.legend.background_fill_alpha = 0.65
        ts_plot.add_layout(ts_plot.legend[0], "right")
    has_visual_content = any([has_flow_series, has_level_series, has_peaks, has_rc_points])

    if not has_visual_content:
        return Div(text=f"<p><em>No timeseries data available for {official_id}.</em></p>")

    return column(ts_plot, rc_plot)


def generate_field_visits_table(official_id: str):
    """Generate sortable Bokeh DataTable for field visit measurements.

    Args:
        official_id: Station identifier

    Returns:
        Bokeh DataTable widget displaying field visit measurements
    """
    # Load tufte table CSS
    tufte_css_path = BASE_DIR / "book_docs" / "_static" / "tufte_table.css"
    tufte_css = tufte_css_path.read_text() if tufte_css_path.exists() else ""

    # Load rating curve data
    rc_df, rc_labels_dict = get_rc_points(official_id)

    if rc_df.empty or not rc_labels_dict:
        return Div(text="<p><em>No field visit data available for this station.</em></p>")

    q_df = rc_df[rc_df[rc_labels_dict["activity"]] == rc_labels_dict["q_activity_label"]].copy()

    if q_df.empty:
        return Div(text="<p><em>No discharge measurements available.</em></p>")

    # Ensure datetime format
    q_df[rc_labels_dict["date"]] = pd.to_datetime(q_df[rc_labels_dict["date"]]).dt.normalize()

    # Load flow data for quality symbols
    station_dir = get_station_dir(official_id)
    daily_flow_fpath = station_dir / f"{official_id}_daily_flows.csv"

    flow_df = (
        pd.read_csv(daily_flow_fpath, parse_dates=["date"], index_col="date")
        if daily_flow_fpath.exists() else pd.DataFrame()
    )
    q_df["quality_symbol"] = _map_quality_symbols(q_df[rc_labels_dict["date"]], flow_df)

    q_df["quality_label"] = q_df["quality_symbol"].map(symbol_dict)

    # Format date and time strings
    date_strings = [d.strftime("%Y-%m-%d") for d in q_df[rc_labels_dict["date"]]]
    time_strings = [d.strftime("%H:%M") for d in q_df[rc_labels_dict["date"]]]
    q_df["date_string"] = date_strings
    q_df["time"] = time_strings

    ylabel = rc_labels_dict["q_activity_label"]
    q_df = q_df.dropna(subset=[ylabel])
    q_df["quality_label"] = q_df["quality_label"].replace({np.nan: "No flag"})

    if q_df.empty:
        return Div(text="<p><em>No valid discharge measurements available.</em></p>")

    source = ColumnDataSource(q_df)

    data_table = DataTable(
        source=source,
        columns=[
            TableColumn(field="date_string", title="Date (UTC/TUC)", width=120),
            TableColumn(field="time", title="Time/Heure", width=100),
            TableColumn(field=rc_labels_dict["q_activity_label"], title="Discharge/Débit", width=120),
            TableColumn(field=rc_labels_dict["h_label"], title="Mean Gauge Height/Niveau Moyen", width=180),
            TableColumn(field="quality_label", title="Quality", width=120),
            TableColumn(field=rc_labels_dict["rc_no_label"], title="Rating Curve #", width=120),
        ],
        width=1000,
        height=400,
        sortable=True,
        index_position=None,
        stylesheets=[InlineStyleSheet(css=tufte_css)]
    )

    return data_table


def plot_double_mass_curve(official_id: str):
    """Plot the daily double mass curve (cumulative precip vs. cumulative flow).

    Reads {official_id}_double_mass.csv produced by calculate_double_mass_curve().
    Points coloured by infill_flag: observed = steel blue, infilled = orange.
    Includes a 1:1 reference line and an OLS slope line.

    Returns a Bokeh figure, or a Div placeholder if no data file exists.
    """
    station_dir = get_station_dir(official_id)
    dmc_path = station_dir / f"{official_id}_double_mass.csv"

    if not dmc_path.exists():
        return Div(text="<p><em>Double mass curve data not available for this station.</em></p>")

    df = pd.read_csv(dmc_path, parse_dates=["date"])
    if df.empty or "cumulative_precip_mm" not in df.columns:
        return Div(text="<p><em>Double mass curve data is empty or malformed.</em></p>")

    df = df.sort_values("date").dropna(subset=["cumulative_precip_mm", "cumulative_flow_mm"])

    x_max    = float(df["cumulative_precip_mm"].max())
    y_max    = float(df["cumulative_flow_mm"].max())
    rc_final = float(df["runoff_coefficient"].iloc[-1]) if "runoff_coefficient" in df.columns else np.nan

    p = figure(
        title=f"{official_id} \u2014 Double Mass Curve  (RC\u00a0=\u00a0{rc_final:.3f})",
        x_axis_label="Cumulative precipitation (mm)",
        y_axis_label="Cumulative runoff (mm)",
        width=700, height=480,
        tools="pan,wheel_zoom,box_zoom,reset,save",
    )

    infill_flag = (
        df["infill_flag"]
        if "infill_flag" in df.columns
        else pd.Series("observed", index=df.index)
    )
    for mask, color, legend_label in [
        (infill_flag == "observed", "steelblue",  "Observed"),
        (infill_flag != "observed", "darkorange", "Infilled"),
    ]:
        seg = df[mask]
        if seg.empty:
            continue
        src = ColumnDataSource({
            "x":    seg["cumulative_precip_mm"].tolist(),
            "y":    seg["cumulative_flow_mm"].tolist(),
            "date": seg["date"].dt.strftime("%Y-%m-%d").tolist(),
            "rc":   (
                seg["runoff_coefficient"].tolist()
                if "runoff_coefficient" in seg.columns
                else [np.nan] * len(seg)
            ),
        })
        p.scatter("x", "y", source=src, size=3, color=color, alpha=0.6,
                  legend_label=legend_label)

    # Overall line connecting all retained days
    p.line(
        df["cumulative_precip_mm"].tolist(),
        df["cumulative_flow_mm"].tolist(),
        line_width=1.5, color="steelblue", alpha=0.7,
    )

    # OLS best-fit line
    xv = df["cumulative_precip_mm"].values
    yv = df["cumulative_flow_mm"].values
    slope, intercept = np.polyfit(xv, yv, 1)
    p.line(
        [float(xv[0]), float(xv[-1])],
        [float(slope * xv[0] + intercept), float(slope * xv[-1] + intercept)],
        line_width=1.5, color="firebrick", line_dash="dashed",
        legend_label=f"OLS slope\u00a0=\u00a0{slope:.3f}",
    )

    # 1:1 reference line
    ref_max = max(x_max, y_max)
    p.line([0, ref_max], [0, ref_max],
           line_dash="dotted", color="black", line_width=1.0, legend_label="1:1")

    p.add_tools(HoverTool(tooltips=[
        ("Date",         "@date"),
        ("Cum. P (mm)",  "@x{0,0}"),
        ("Cum. Q (mm)",  "@y{0,0}"),
        ("RC",           "@rc{0.3f}"),
    ]))
    p.legend.location = "top_left"
    p.legend.click_policy = "hide"

    return p
