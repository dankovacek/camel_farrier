import os
from pydoc import text
from turtle import title
import numpy as np
import geopandas as gpd
import pandas as pd

from bokeh.plotting import figure
from bokeh.embed import components
from bokeh.resources import CDN
from jinja2 import Template
from bokeh.palettes import Bokeh6, Category10
from bokeh.models import Div, Range1d, LinearAxis, Band, ColumnDataSource
from bokeh.models import DataTable, TableColumn, ColumnDataSource
from bokeh.layouts import column, row

# Get the folder this script is in
from pathlib import Path

from setup_scripts import kde_estimator
from setup_scripts.aep_functions import calculate_distributions, run_ffa_simulation
from bokeh.palettes import Viridis256, Plasma256, Colorblind5, viridis, plasma


BASE_DIR = Path(__file__).resolve().parent

import xyzservices.providers as xyz

tiles = xyz.OpenStreetMap.Mapnik

precision_codes_fpath = BASE_DIR / ".." / "station_pages" / "HYDAT_precision_codes.csv"
precision_codes_df = pd.read_csv(precision_codes_fpath)
precision_codes_dict = precision_codes_df.set_index("PRECISION_CODE").to_dict()[
    "PRECISION_EN"
]
symbols_fpath = BASE_DIR / ".." / "station_pages" / "HYDAT_quality_codes.csv"
symbol_df = pd.read_csv(symbols_fpath)
symbol_dict = symbol_df.set_index("SYMBOL_ID").to_dict()["SYMBOL_EN"]


def render_html_from_plot(p, html_path):
    # Generate the components
    script, div = components(p)

    # Minimal Bokeh-only HTML
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


def generate_similarity_distribution_plot(similarity_dict: dict):
    """
    Generate an empirical cumulative distribution plot for the
    Jaccard similarity indices for catchments that have been updated.
    """
    # format the dictionary to a dataframe
    jaccard_df = pd.DataFrame.from_dict(similarity_dict, orient="index")

    p = figure(
        title=f"Empirical CDF of Jaccard Similarity Indices",
        x_axis_label="Jaccard Similarity Index",
        y_axis_label="P(X ≤ x)",
        width=700,
        height=400,
    )
    for c in jaccard_df.columns:
        # calculate the empirical CDF
        sorted_values = np.sort(jaccard_df[c].values)
        yvals = np.arange(1, len(sorted_values) + 1) / len(sorted_values)
        label = f"[{c[0]}] → [{c[1]}]"
        p.step(sorted_values, yvals, line_width=2, legend_label=label)
    p.legend.title = "Catchment Revisions"
    p.legend.location = "top_left"
    p.legend.click_policy = "hide"
    p.legend.background_fill_alpha = 0.75
    plot_fname = "jaccard_cdf_plot.html"
    cdf_plot_path = BASE_DIR / ".." / "_static" / plot_fname
    render_html_from_plot(p, cdf_plot_path)
    print("    Generated Jaccard similarity distribution plot at", cdf_plot_path)
    return plot_fname


def plot_station_geometries(
    official_id,
):
    # load all geojson geometry files
    folder = BASE_DIR / ".." / "stations" / official_id

    catchment_fname = folder / f"{official_id}_DrainageBasin_BassinDeDrainage.geojson"
    pour_pt_fname = folder / f"{official_id}_PourPoint_PointExutoire.geojson"
    stn_pt_fname = folder / f"{official_id}_Station.geojson"
    catchment_gdf = gpd.read_file(catchment_fname).to_crs(
        "EPSG:3857"
    )  # .to_crs("EPSG:4326")
    pour_pt = gpd.read_file(pour_pt_fname).to_crs("EPSG:3857")
    stn_pt = gpd.read_file(stn_pt_fname).to_crs("EPSG:3857")
    assert (
        catchment_gdf.crs == "EPSG:3857"
    ), f"Expected EPSG:3857 but got {catchment_gdf.crs}"

    # Create the figure
    p = figure(
        x_axis_type="mercator",
        y_axis_type="mercator",
        width=1000,
        height=500,
        tools="pan,wheel_zoom,box_zoom,reset,save",
    )

    # Add base map tiles
    p.add_tile(tiles)

    # Dictionary to track colors by revision date
    colors_by_date = {}
    # Add catchment polygons, sort by revision_date
    catchment_gdf = catchment_gdf.sort_values(by="Date_rev")

    # set up string to collect remarks and add an admonition
    remarks = '<div class="admonition note">'
    for idx, data in catchment_gdf.iterrows():
        if data["Remark"]:
            remarks += f"<p>{data['Remark']}</p>"
        rev_date = data["Date_rev"]
        # format the revision date string
        rev_date = (
            rev_date.strftime("%Y-%m-%d")
            if isinstance(rev_date, pd.Timestamp)
            else str(rev_date)
        )
        if rev_date not in colors_by_date:
            # Use Bokeh's Category10 or Category20 palette for better color distinction
            # Get the index of this date in the colors_by_date dictionary (max 6 colors)
            date_index = len(colors_by_date) % 6
            colors_by_date[rev_date] = Category10[10][date_index]

        xs, ys = data.geometry.exterior.xy
        p.patch(
            xs,
            ys,
            fill_alpha=0.3,
            fill_color=colors_by_date[rev_date],
            line_color=colors_by_date[rev_date],
            legend_label=f"Catchment ({rev_date}) [1]",
        )
    remarks += "</div>"
    remarks_div = Div(text=remarks)
    # p.add_layout(Div(text=remarks), "below")

    # Add station points
    if not stn_pt.empty:
        for idx, data in stn_pt.iterrows():
            rev_date = data["HYDAT_ver"]
            # format the revision date string
            # rev_date = (
            #     rev_date.strftime("%Y-%m-%d")
            #     if isinstance(rev_date, pd.Timestamp)
            #     else str(rev_date)
            # )
            if rev_date not in colors_by_date:
                date_index = len(colors_by_date) % 6
                colors_by_date[rev_date] = Category10[10][date_index]

            x, y = data.geometry.x, data.geometry.y
            p.scatter(
                x,
                y,
                size=10,
                marker="star",
                color=colors_by_date[rev_date],
                legend_label=f"Station ({rev_date})",
            )

    # Add pour points
    if not pour_pt.empty:
        for idx, data in pour_pt.iterrows():
            # format the revision date string
            # rev_date = (
            #     rev_date.strftime("%Y-%m-%d")
            #     if isinstance(rev_date, pd.Timestamp)
            #     else str(rev_date)
            # )
            if rev_date not in colors_by_date:
                date_index = len(colors_by_date) % 6
                colors_by_date[rev_date] = Category10[10][date_index]

            x, y = data.geometry.x, data.geometry.y
            p.scatter(
                x,
                y,
                size=10,
                marker="triangle",
                color=colors_by_date[rev_date],
                legend_label=f"Pour Point ({rev_date})",
            )

    # Add water license data if available
    license_fpath = f"{official_id}_water_licenses.geojson"
    if os.path.exists(folder / license_fpath):
        license_gdf = gpd.read_file(license_fpath)
        for idx, data in license_gdf.iterrows():
            rev_date = data["revision_date"]
            # format the revision date string
            rev_date = (
                rev_date.strftime("%Y-%m-%d")
                if isinstance(rev_date, pd.Timestamp)
                else str(rev_date)
            )
            if rev_date not in colors_by_date:
                date_index = len(colors_by_date) % 6
                colors_by_date[rev_date] = Category10[10][date_index]

            x, y = data.geometry.x, data.geometry.y
            p.scatter(
                x,
                y,
                size=10,
                marker="square",
                color=colors_by_date[rev_date],
                legend_label=f"Dam ({rev_date})",
            )

    # Configure legend
    p.legend.background_fill_alpha = 0.7
    p.legend.click_policy = "hide"

    # Save plot-only HTML separately at project root level in _static folder
    # html_static_folder = BASE_DIR / ".." / "_static" / "catchments"
    # os.makedirs(html_static_folder, exist_ok=True)
    # html_path = html_static_folder / f"{official_id}_catchment_plot.html"
    # render_html_from_plot(p, html_path)
    return p


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

    symbols_fpath = BASE_DIR / ".." / "station_pages" / "HYDAT_quality_codes.csv"
    symbol_df = pd.read_csv(symbols_fpath)
    symbol_dict = symbol_df.set_index("SYMBOL_ID").to_dict()["SYMBOL_EN"]
    symbol_colors = {
        "B": "dodgerblue",  # Baseflow
        "D": "firebrick",  # Dry weather flow
        "E": "orange",  # Estimated
    }
    df["symbol"] = quality_symbols["quality_symbol"].reindex(df.index, method=None)

    for symbol in ["B", "D", "E"]:
        description = symbol_dict.get(symbol, {})
        color = symbol_colors.get(symbol, "gray")
        n_symbols = df["symbol"].eq(symbol).sum()
        if n_symbols == 0:
            continue

        segments = find_symbol_segments(df[["symbol"]].copy(), symbol, label="symbol")

        for start, end in segments:
            runoff_plot.varea(
                x=pd.date_range(start, end),
                y1=0.98
                * df[obs_col]
                .min()
                .min(),  # get the min of the dataframe for the lower bound
                y2=1.02 * df[obs_col].max().max(),  # a bit above max for visibility
                fill_color=color,
                fill_alpha=0.3,
                legend_label=f"{description} ({symbol})",
            )
    return runoff_plot


def plot_zero_flow_periods(stn, df, runoff_plot, obs_col):

    color = "salmon"
    df["zero_flow_flag"] = df[obs_col] <= 1e-4
    n_symbols = (df["zero_flow_flag"] == True).sum()
    if n_symbols == 0:
        return runoff_plot

    # df.rename({"zero_flow_flag": "flow_symbol"}, inplace=True, axis=1)

    segments = find_symbol_segments(
        df[["zero_flow_flag"]].copy(), True, label="zero_flow_flag"
    )
    for start, end in segments:
        runoff_plot.varea(
            x=pd.date_range(start, end),
            y1=0.98
            * df[obs_col].min(),  # get the min of the dataframe for the lower bound
            y2=1.02 * df[obs_col].max(),  # a bit above max for visibility
            fill_color=color,
            fill_alpha=0.3,
            legend_label=f"Q=0 replaced",
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
    df = pd.read_csv(fpath, parse_dates=["date"], index_col="date")

    # reindex to daily frequency and keep nans
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

    # plot zero flow segments on the runoff_plot
    plot = plot_zero_flow_periods(official_id, df, plot, label)
    # plot the adjusted line
    plot.line(
        df.index,
        df[label],
        color="dodgerblue",
        legend_label=f"{label}",
        line_width=2.0,
    )
    return plot


def plot_level_series(official_id, fpath, label, plot):
    df = pd.read_csv(fpath, parse_dates=["date"], index_col="date")

    # reindex to daily frequency and keep nans
    df = df.copy().reindex(
        pd.date_range(start=df.index.min(), end=df.index.max(), freq="D")
    )
    # create a secondary axis for the water level plot
    min_w, max_w = df[label].min() - 0.01, df[label].max() - 0.01
    plot.extra_y_ranges = {"water_level": Range1d(start=min_w, end=max_w)}
    plot.add_layout(
        LinearAxis(y_range_name="water_level", axis_label="Water Level (m)"), "right"
    )
    # plot the adjusted line
    plot.line(
        df.index,
        df[label],
        color="green",
        legend_label=f"{label}",
        line_width=2.0,
        y_range_name="water_level",
    )
    # plot.yaxis.axis_label = "Water Level (m)"
    return plot


def plot_monthly_hydrograph(df):
    df["month"] = df.index.month
    df["year"] = df.index.year

    # find the counts of all months (columns) for all years (rows)
    monthly_counts = df.groupby(["year", "month"]).size().unstack(fill_value=np.nan)
    complete_mask = monthly_counts >= 25
    # compute the mean by month and year
    monthly_means = (
        df.groupby(["year", "month"])["flow_cms"].mean().unstack(fill_value=np.nan)
    )
    # compute the column-wise mean using the complete month mask
    monthly_mean = monthly_means.where(complete_mask).mean()
    monthly_hydrograph_fig = figure(
        title="Monthly hydrograph",
        width=330,
        height=300,
        toolbar_location="above",
    )
    monthly_hydrograph_fig.vbar(
        x=monthly_mean.index.values,
        top=monthly_mean.values,
        bottom=[0] * len(monthly_mean.index.values),
        width=0.95,
        color="dodgerblue",
        fill_alpha=0.7,
    )
    monthly_hydrograph_fig.xaxis.axis_label = "Month"
    monthly_hydrograph_fig.yaxis.axis_label = "Mean Flow (m³/s)"
    return monthly_hydrograph_fig


def plot_distributions(official_id):
    # load all geojson geometry files
    folder = BASE_DIR / ".." / "stations" / official_id

    daily_flow_fpath = folder / f"{official_id}_daily_flows.csv"
    daily_levels_fpath = folder / f"{official_id}_daily_levels.csv"

    folder = BASE_DIR / ".." / "stations"
    attr_fpath = folder / official_id / f"{official_id}_attributes.csv"
    stn_data = pd.read_csv(attr_fpath)
    da = stn_data["DRAINAGE_AREA_GROSS"].values[0]

    fdc = figure(
        title=f"Flow Exceedance",
        width=330,
        height=300,
        # y_axis_type="log",
        toolbar_location="above",
    )

    if os.path.exists(daily_flow_fpath):
        df = pd.read_csv(daily_flow_fpath, parse_dates=["date"], index_col="date")
        hydrograph = plot_monthly_hydrograph(df)

        if df["flow_cms"].min() <= 0:
            print(f'Min flow <= 0: {df["flow_cms"].min():.5f}')
            df["flow_cms"] = df["flow_cms"].clip(lower=1e-4)  # Ensure no negative flows
            global_min = 1e-4
        else:
            global_min = df["flow_cms"].min() / 2

        global_max = df["flow_cms"].max() * 1.5
        baseline_log_grid = np.linspace(np.log(global_min), np.log(global_max), 2**12)
        log_dx = np.gradient(baseline_log_grid)
        kde = kde_estimator.KDEEstimator(baseline_log_grid, log_dx)
        df["uar"] = 1000 * df["flow_cms"] / da
        pmf, pdf = kde.compute(df["uar"].dropna().values, da)
        baseline_lin_grid = np.exp(baseline_log_grid)
        # convert the pmf to exceedance
        pmf_exceedance = 1 - np.cumsum(pmf) / np.sum(pmf)

        # fdc.line(baseline_lin_grid, pmf, line_width=2, color="blue", legend_label="PMF")
        fdc.line(
            pmf_exceedance,
            baseline_lin_grid,
            line_width=2,
            color="dodgerblue",
            legend_label="FDC",
        )

        # plot a pdf of the data
        p = figure(
            title=f"Probability Density",
            x_axis_type="log",
            width=330,
            height=300,
            toolbar_location="above",
        )
        p.line(
            baseline_lin_grid, pdf, line_width=2, color="dodgerblue", legend_label="PDF"
        )
        # plot the histogram as a bar chart using quad glyph
        bin_edges = np.linspace(np.log(global_min), np.log(global_max), 30)
        hist, edges = np.histogram(
            np.log(df["uar"].dropna().values), bins=bin_edges, density=True
        )
        edges = np.exp(edges)
        p.quad(
            left=edges[:-1],
            right=edges[1:],
            top=hist,
            bottom=0,
            fill_alpha=0.5,
            color="lightblue",
            legend_label="Histogram",
        )
        p.yaxis.axis_label = "Probability Density"
        # p.xaxis.axis_label = "Flow (m³/s)"
        p.xaxis.axis_label = "UAR [L/s/km²]"
    else:
        return Div(text="Flow data unavailable")

    fdc.xaxis.axis_label = "P(X >= x)"
    fdc.yaxis.axis_label = "Flow (m³/s)"

    return row(fdc, p, hydrograph)


def plot_annual_peaks(plot, df):
    # convert year-month-day-hour-minute columns to string, then convert to datetime
    df["datetime"] = df.apply(
        lambda x: pd.to_datetime(
            f"{x['YEAR']}-{x['MONTH']}-{x['DAY']} {x['HOUR']}:{x['MINUTE']}"
        ),
        axis=1,
    )
    df["precision_description"] = df["PRECISION_CODE"].map(precision_codes_dict)
    df["quality_symbol"] = df["SYMBOL"].map(symbol_dict)
    peaks = df[(df["PEAK_CODE"] == "H") & (df["DATA_TYPE"] == "Q")].copy()
    lows = df[(df["PEAK_CODE"] == "L") & (df["DATA_TYPE"] == "Q")].copy()
    # plot peaks as triangle with point up
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


def create_qq_plot(peak_source, data_flag_filter):
    # min_emp, max_emp = min(peak_source.data['PEAK']), max(peak_source.data['PEAK'])
    # prepare a Q-Q plot

    qq_plot = figure(
        title="Q-Q Plot",
        width=275,
        height=275,
        output_backend="webgl",
        tools="reset,wheel_zoom,pan",
        y_axis_location="right",
    )

    qq_plot.xaxis.axis_label = "Empirical Flow [m³/s]"
    qq_plot.yaxis.axis_label = "Theoretical Flow [m³/s]"

    qq_plot.scatter("PEAK", "theoretical_quantiles", source=peak_source)
    x, y = data_flag_filter["PEAK"], data_flag_filter["theoretical_quantiles"]
    qq_plot.scatter(x, y, color="orange", legend_label="QA/QC Flag", size=5)
    qq_plot.line(
        "PEAK",
        "PEAK",
        legend_label="1:1",
        source=peak_source,
        line_dash="dashed",
        color="green",
    )

    qq_plot.legend.location = "top_left"
    qq_plot.toolbar_location = "above"
    return qq_plot


def create_pp_plot(peak_source, data_flag_filter):
    # prepare a P-P plot
    pp_plot = figure(
        title="P-P Plot",
        width=275,
        height=275,
        output_backend="webgl",
        tools="reset,wheel_zoom,pan",
        y_axis_location="right",
    )

    pp_plot.xaxis.axis_label = "Empirical P(x)"
    pp_plot.yaxis.axis_label = "Theoretical P(x)"

    pp_plot.scatter("empirical_cdf", "theoretical_cdf", source=peak_source, size=5)
    x, y = data_flag_filter["empirical_cdf"], data_flag_filter["theoretical_cdf"]
    pp_plot.scatter(x, y, color="orange", legend_label="QA/QC Flag", size=5)
    pp_plot.line((0, 1), (0, 1), legend_label="1:1", line_dash="dashed", color="green")

    pp_plot.legend.location = "top_left"
    pp_plot.toolbar_location = "above"
    return pp_plot


def create_ffa_plot(peak_source, peak_flagged_source, distribution_source):
    # create a plot for the Flood Frequency Values and style its properties
    ffa_plot = figure(
        title="Annual Exceedance Probability Plot",
        x_range=(0.9, 1e3),
        x_axis_type="log",
        width=800,
        height=550,
        output_backend="webgl",
        tools="pan,box_zoom,wheel_zoom,reset",
    )

    # add the simulated measurement error points
    # ffa_plot.scatter(
    #     "Tr_sim",
    #     "PEAK_SIM",
    #     source=peak_source,
    #     legend_label="Sim. Msmt. Error",
    #     size=5,
    #     color="red",
    #     alpha=0.5,
    #     marker="^",
    # )

    ffa_plot.scatter("Tr", "PEAK", source=peak_source, legend_label="Measured Data")
    ffa_plot.scatter(
        "Tr",
        "PEAK",
        source=peak_flagged_source,
        color="orange",
        legend_label="QA/QC Flag",
    )
    ffa_plot.line(
        "Tr",
        "theoretical_quantiles",
        color="blue",
        source=distribution_source,
        legend_label="Log-Pearson3 (Measured Data)",
    )

    ffa_plot.line(
        "Tr",
        "expected_value",
        color="green",
        source=distribution_source,
        legend_label="Expected Value",
    )
    # simulated error
    # ffa_plot.line(
    #     "Tr",
    #     "theoretical_quantiles_sim",
    #     color="red",
    #     line_dash="dotted",
    #     source=distribution_source,
    #     legend_label="Simulated Error Fit",
    # )

    # plot the error bands as shaded areas
    ffa_2_sigma_band = Band(
        base="Tr",
        lower="lower_2s_bound",
        upper="upper_2s_bound",
        level="underlay",
        fill_alpha=0.25,
        fill_color="#1c9099",
        source=distribution_source,
    )
    ffa_1_sigma_band = Band(
        base="Tr",
        lower="lower_1s_bound",
        upper="upper_1s_bound",
        level="underlay",
        fill_alpha=0.65,
        fill_color="#a6bddb",
        source=distribution_source,
    )

    ffa_plot.add_layout(ffa_2_sigma_band)
    ffa_plot.add_layout(ffa_1_sigma_band)

    ffa_plot.legend.location = "top_left"
    ffa_plot.legend.click_policy = "hide"
    ffa_plot.toolbar_location = "above"
    ffa_plot.xaxis.axis_label = "Return Period (Years)"
    ffa_plot.yaxis.axis_label = "Flow (m³/s)"

    return ffa_plot


# create a plot for the Flood Frequency Values and style its properties
def plot_peak_AEP(df):

    # drop rows where the PEAK column value is not finite
    df = df[df["PEAK"].apply(np.isfinite)]
    df["SYMBOL"] = df["SYMBOL"].replace({np.nan: ""})
    aep_data = calculate_distributions(
        df["PEAK"].values, df["YEAR"].values, df["SYMBOL"].values
    )

    peak_source = ColumnDataSource()
    peak_source.data = peak_source.from_df(aep_data)
    # peak_sim_source.data = peak_sim_source.from_df(df)
    data_flag_filter = aep_data[aep_data["SYMBOL"].isin(symbol_dict.keys())].copy()
    peak_flagged_source = ColumnDataSource()
    peak_flagged_source.data = peak_flagged_source.from_df(data_flag_filter)

    model = run_ffa_simulation(aep_data)
    distribution_source = ColumnDataSource()
    distribution_source.data = distribution_source.from_df(model)

    ffa_plot = create_ffa_plot(peak_source, peak_flagged_source, distribution_source)
    pp_plot = create_pp_plot(aep_data, data_flag_filter)
    qq_plot = create_qq_plot(aep_data, data_flag_filter)
    ffa_layout = row(ffa_plot, column(pp_plot, qq_plot))
    return ffa_layout


def get_rc_points(official_id):
    # for f in ["corrections", "field_visits", "RCs"]:
    fv_fpath = (
        BASE_DIR / ".." / "stations" / official_id / f"{official_id}_field_visits.csv"
    )
    assert os.path.exists(fv_fpath), f"{fv_fpath} does not exist"
    labels, rc_df = {}, pd.DataFrame()
    if os.path.exists(fv_fpath):
        rc_df = pd.read_csv(fv_fpath)
        labels["date"] = "Date (UTC)/Date (TUC)"
        labels["activity"] = "Activity Type/Type d'activité"
        labels["q_activity_label"] = "Discharge/Débit"
        labels["h_label"] = "Mean Gauge Height/Niveau Moyen"
        labels["remarks_label"] = "Activity Remarks/Remarques des activités"
        labels["rc_no_label"] = "Rating Curve Table Number/Numéro de cource de tarage"
    return rc_df, labels


def create_rc_table(rc_df, rc_labels, q_source):
    if rc_df.empty:
        return Div(text="No rating curve data available")

    # convert the date column to a formatted string
    # Convert the date column to datetime if it's not already
    dates = pd.to_datetime(q_source.data[rc_labels["date"]])
    # Format the date and time strings
    date_strings = [d.strftime("%Y-%m-%d") for d in dates]
    time_strings = [d.strftime("%H:%M") for d in dates]
    # Update the source data
    q_source.data[rc_labels["date"]] = date_strings
    q_source.data["time"] = time_strings
    rc_table = DataTable(
        source=q_source,
        columns=[
            TableColumn(
                field=rc_labels["date"],
                title="Date (UTC/TUC)",
            ),
            TableColumn(
                field="time",
                title="Time/Heure",
            ),
            # TableColumn(
            #     field=rc_labels["activity"], title="Activity Type/Type d'activité"
            # ),
            TableColumn(field=rc_labels["q_activity_label"], title="Discharge/Débit"),
            TableColumn(
                field=rc_labels["h_label"], title="Mean Gauge Height/Niveau Moyen"
            ),
            TableColumn(
                field=rc_labels["remarks_label"],
                title="Activity Remarks/Remarques des activités",
            ),
            TableColumn(
                field=rc_labels["rc_no_label"],
                title="Rating Curve Table Number/Numéro de cource de tarage",
            ),
        ],
        width=1000,
    )
    return rc_table


def plot_station_timeseries(official_id):

    plot = figure(
        title=f"{official_id} Observed Unit Area Runoff",
        x_axis_type="datetime",
        width=1000,
        height=350,
        y_axis_type="log",
        toolbar_location="above",
        tools="pan,wheel_zoom,box_zoom,lasso_select,box_select,reset",
    )
    folder = BASE_DIR / ".." / "stations"
    attr_fpath = folder / official_id / f"{official_id}_attributes.csv"
    stn_data = pd.read_csv(attr_fpath)

    daily_flow_fpath = folder / official_id / f"{official_id}_daily_flows.csv"
    daily_levels_fpath = folder / official_id / f"{official_id}_daily_levels.csv"
    if os.path.exists(daily_flow_fpath):
        plot = plot_flow_series(official_id, daily_flow_fpath, "flow_cms", plot)

    plot.xaxis.axis_label = "Date"
    plot.yaxis.axis_label = "Flow (m³/s)"

    if os.path.exists(daily_levels_fpath):
        plot = plot_level_series(official_id, daily_levels_fpath, "water_level_m", plot)

    folder = BASE_DIR / ".." / "stations"
    annual_peaks_fpath = (
        folder / official_id / f"{official_id}_annual_instant_peaks.csv"
    )
    if os.path.exists(annual_peaks_fpath):
        df = pd.read_csv(annual_peaks_fpath)
        if not df.empty:
            plot, peaks = plot_annual_peaks(plot, df)

    rc_df, rc_labels = get_rc_points(official_id)
    rc_plot = Div(text="No site visit information available for this station.")
    q_df = rc_df[rc_df[rc_labels["activity"]] == rc_labels["q_activity_label"]].copy()
    q_df[rc_labels["date"]] = pd.to_datetime(q_df[rc_labels["date"]])
    if not q_df.empty:
        q_source = ColumnDataSource(q_df)
        plot.scatter(
            x=rc_labels["date"],
            y=rc_labels["q_activity_label"],
            source=q_source,
            color="purple",
            marker="circle",
            size=8,
            legend_label="Measured",
        )
        rc_plot = plot_rc_points(rc_df, rc_labels, q_source)
        rc_table = create_rc_table(rc_df, rc_labels, q_source)

    plot.legend.click_policy = "hide"
    plot.add_layout(plot.legend[0], "right")
    plot.legend.background_fill_alpha = 0.65
    return column(plot, rc_plot, rc_table)


def plot_aep_figures(official_id):
    folder = BASE_DIR / ".." / "stations"
    annual_peaks_fpath = (
        folder / official_id / f"{official_id}_annual_instant_peaks.csv"
    )
    peak_layout = Div(text="No annual peak data available")
    if os.path.exists(annual_peaks_fpath):
        df = pd.read_csv(annual_peaks_fpath)
        if not df.empty:
            df["datetime"] = df.apply(
                lambda x: pd.to_datetime(
                    f"{x['YEAR']}-{x['MONTH']}-{x['DAY']} {x['HOUR']}:{x['MINUTE']}"
                ),
                axis=1,
            )
            df["precision_description"] = df["PRECISION_CODE"].map(precision_codes_dict)
            df["quality_symbol"] = df["SYMBOL"].map(symbol_dict)
            peaks = df[(df["PEAK_CODE"] == "H") & (df["DATA_TYPE"] == "Q")].copy()
            peak_layout = plot_peak_AEP(peaks)
    return peak_layout


def get_catchment_folders():
    """
    Get all catchment folders in the catchments directory.
    """
    base_folder = BASE_DIR / ".." / "catchments"
    catchment_folders = [
        folder
        for folder in os.listdir(base_folder)
        if os.path.isdir(os.path.join(base_folder, folder))
    ]
    return catchment_folders


def find_revised_catchments(catchment_folders):
    print("Finding revised catchments...")
    print(len(catchment_folders), "catchment folders found.")
    revised_catchments = {}
    for folder in catchment_folders:
        source_code, official_id = folder.split("-")
        catchment_filename = f"{official_id}_catchment.geojson"
        catchment_path = BASE_DIR / ".." / "catchments" / folder / catchment_filename
        gdf = gpd.read_file(catchment_path)
        if len(gdf) > 1:
            revised_catchments[folder] = gdf
    print(f"Found {len(revised_catchments)} catchments with revisions.")
    return revised_catchments


def compute_jaccard_similarity(gdf_dict):
    """
    Compute the Jaccard similarity between catchment polygon revisions.
    Also returns the revision dates to create a reference table.
    """
    jaccard_matrix = {}
    revision_dates = {}

    for official_id, gdf in gdf_dict.items():
        proj_gdf = gdf.copy().to_crs("EPSG:3005")
        gdf["Area"] = round(proj_gdf.geometry.area / 1e6, 1)

        jaccard_matrix[official_id] = {}

        for i, row1 in gdf.iterrows():
            if i not in revision_dates:
                revision_dates[i] = (
                    row1["revision_date"].strftime("%Y-%m-%d")
                    if isinstance(row1["revision_date"], pd.Timestamp)
                    else str(row1["revision_date"])
                )
            for j, row2 in gdf.iterrows():
                if j <= i:
                    continue  # Skip self and redundant pairs
                if j not in revision_dates:
                    revision_dates[j] = (
                        row2["revision_date"].strftime("%Y-%m-%d")
                        if isinstance(row2["revision_date"], pd.Timestamp)
                        else str(row2["revision_date"])
                    )

                intersection = row1.geometry.intersection(row2.geometry).area
                union = row1.geometry.union(row2.geometry).area

                key = tuple(sorted((i, j)))
                jaccard_matrix[official_id][key] = (
                    round(intersection / union, 2) if union > 0 else 0
                )

    return jaccard_matrix, revision_dates


def generate_summary_tables(jaccard_matrix, revision_dates):
    """
    Generate a markdown table where the index column is the Official_ID,
    and the columns are the (i, j) pairs of revision dates.
    Jaccard similarity values are the table values.
    """
    # conver the jaccard matrix dict to a dataframe
    jaccard_df = pd.DataFrame.from_dict(jaccard_matrix, orient="index")
    # sort ascending by the right-most column
    jaccard_df = jaccard_df.sort_values(by=list(jaccard_df.columns), ascending=True)
    jaccard_df.columns = [f"[{e[0]}] → [{e[1]}]" for e in jaccard_df.columns]
    jaccard_df.index = jaccard_df.index.map(
        lambda x: f"[{x}](https://dankovacek.github.io/camel_farrier/catchments/{x}/{x.split('-')[1]}.html)"
    )
    jaccard_df_markdown = jaccard_df.to_markdown(index=True, tablefmt="github")
    #  make the index column a hyperlink
    # https://dankovacek.github.io/camel_farrier/catchments/HYDAT-05AA006/05AA006.html
    # create a separate table to denote revision dates
    revision_dates_df = pd.DataFrame.from_dict(revision_dates, orient="index")
    # rev_cols = [f'[{e[0]}] --> [{e[1]}]' for e in [revision_dates_df.index.values]
    revision_dates_df.columns = ["Revision Dates"]
    revision_dates_df.index.name = "Ref. Number."

    # revision_dates_df.columns = rev_cols
    revision_dates_md = revision_dates_df.to_markdown(index=True, tablefmt="github")
    return jaccard_df_markdown, revision_dates_md


def process_static_catchment_page_html(
    folder_name: str,
    site_url_prefix: str = "",
):
    source_code, official_id = folder_name.split("-")
    folder = BASE_DIR / ".." / "catchments" / folder_name
    catchment_path = folder / f"{official_id}_catchment.geojson"
    station_path = folder / f"{official_id}_station.geojson"
    pour_point_path = folder / f"{official_id}_pour_point.geojson"
    attributes_path = folder / f"{official_id}_attributes.csv"
    dam_data_path = folder / f"{official_id}_dam_data.geojson"

    catchment_gdf = gpd.read_file(catchment_path)
    station_name = catchment_gdf["Name"].values[0]
    station_gdf, pour_point_gdf = gpd.GeoDataFrame(), gpd.GeoDataFrame()
    if os.path.exists(station_path):
        station_gdf = gpd.read_file(station_path)
    if os.path.exists(pour_point_path):
        pour_point_gdf = gpd.read_file(pour_point_path)

    attrs_df = pd.read_csv(attributes_path)
    official_id = attrs_df["Official_ID"].values[0]
    source_code = attrs_df["Source"].values[0]
    station_name = attrs_df["Name"].values[0]
    revision_date = attrs_df["revision_date"].values[0]

    dam_df = gpd.GeoDataFrame()
    dam_df_md_table = None
    if os.path.exists(dam_data_path):
        # note check 08HA025, it should have a dam in the catchment
        dam_df = gpd.read_file(dam_data_path)
        # drop columns if all row values are null
        dam_df = dam_df.dropna(axis=1, how="all")
        dam_table_df = dam_df.copy().drop(columns=["geometry"])
        dam_df_md_table = dam_table_df.to_markdown(index=False)

    attr_cols = attrs_df.columns
    static_cols = ["Source", "Name", "Official_ID"]
    if not attrs_df.empty:
        if "geometry" in attrs_df.columns:
            attrs_df = attrs_df.drop(columns=["geometry"])
        attrs_table = attrs_df[[c for c in attr_cols if c not in static_cols]].T.copy()
        attrs_table.columns = ["(Arsenault, 2020)"]
        attrs_table.index.name = "Attribute"
        hysets_table_md = attrs_table.to_markdown()
    else:
        hysets_table_md = "No attribute data found."

    # Bokeh plot components
    create_bokeh_plot(
        official_id,
        station_name,
        catchment_gdf,
        station_gdf,
        pour_point_gdf,
        dam_df,
    )

    # HTML template
    template_path = BASE_DIR / ".." / "templates" / "catchment_page_template.md.j2"
    with open(template_path, "r") as f:
        md_template = Template(f.read())

    iframe_src = (
        f"{site_url_prefix}/_static/catchments/{official_id}_catchment_plot.html"
    )

    rendered_md = md_template.render(
        source_code=source_code,
        official_id=official_id,
        station_name=station_name,
        revision_date=revision_date or "N/A",
        station_title=f"{official_id}: {station_name}",
        iframe_src=iframe_src,
        static_table=attrs_df[static_cols].to_markdown(index=False),
        attributes_table=hysets_table_md,
        dam_data_table=dam_df_md_table,
    )

    # Save markdown
    md_path = folder / f"{official_id}.md"
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(rendered_md)

    print(f"Generated Markdown with iframe at {md_path}")

    return {
        "source_code": source_code,
        "official_id": official_id,
        "name": station_name,
        "folder": folder,
        "revision_date": revision_date,
    }


def plot_rc_points(station_id, labels, q_source):
    # map rc_no_label to a colour on a scale of black (old) to blue (new)
    # get all the rows where the Rating Curve Table Number is NaN
    rc_plot = figure(
        title="Rating Curve Calibration Points",
        width=1000,
        height=500,
        tools="pan,wheel_zoom,box_zoom,lasso_select,box_select,reset",
    )
    rc_plot.scatter(
        x=labels["q_activity_label"],
        y=labels["h_label"],
        size=6,
        color="purple",
        alpha=0.7,
        legend_label="Measured Flow",
        source=q_source,
    )

    # Configure legend for better display
    rc_plot.legend.location = "bottom_right"
    rc_plot.legend.click_policy = "hide"

    rc_plot.xaxis.axis_label = "Discharge (m³/s)"
    rc_plot.yaxis.axis_label = "Gauge Height (m)"

    return rc_plot
