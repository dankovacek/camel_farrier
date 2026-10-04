#!/usr/bin/env python3
from pathlib import Path
import sys
from bokeh.plotting import save
from bokeh.layouts import gridplot
from bokeh.resources import CDN
from bokeh.io import export_png
from bokeh.models import Spacer
from PIL import Image
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager

PROJECT_ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(PROJECT_ROOT))
from scripts.generation.compare_caravan_polygons import plot_caravan_wsc_comparison
from scripts.catchment_page_utils import plot_station_polygon

STATIONS_DIR = PROJECT_ROOT / "book_docs/stations"
OUT_DIR = PROJECT_ROOT / "book_docs/images/comparison_plots"
MANUAL_IDS = ["07BC006", "07HA914",  "09AC007"]
# "07BC006", "07SB013","08HB075",
ACADEMIC_FONT: str = "EB Garamond, STIX Two Text, DejaVu Serif, Noto Serif, serif"

auto_ids = [
    d.name for d in sorted(STATIONS_DIR.glob("*"))
    if d.is_dir() and len(list(d.glob(f"{d.name}_polygon_v*.geojson"))) > 1
]
station_ids = sorted(set(MANUAL_IDS + auto_ids))
OUT_DIR.mkdir(parents=True, exist_ok=True)


def make_legend_panel(width: int = 500, height: int = 450):
        """Create a standalone legend panel using native Bokeh legend entries."""
        from bokeh.plotting import figure

        panel = figure(
            width=width,
            height=height,
            toolbar_location=None,
            x_range=(0, 1),
            y_range=(0, 1),
        )
        panel.axis.visible = False
        panel.grid.visible = False
        panel.outline_line_color = None
        rect_w, rect_h = 2.0, 1.5

        # Put glyph prototypes off-canvas so only legend swatches are visible.
        panel.rect(
            x=[-10], y=[-10], width=rect_w, height=rect_h,
            fill_color='lightgreen', fill_alpha=0.5, line_color=None,
            legend_label='Agreement'
        )
        panel.rect(
            x=[-10], y=[-10], width=rect_w, height=rect_h,
            fill_color='#FF6347', fill_alpha=0.4, line_color=None,
            legend_label='Caravan only'
        )
        panel.rect(
            x=[-10], y=[-10], width=rect_w, height=rect_h,
            fill_color='purple', fill_alpha=0.4, line_color=None,
            legend_label='WSC 2024 only'
        )
        panel.line(
            x=[-10, -9], y=[-10, -10], line_color='#B22222', line_width=3,
            line_dash='dashed', legend_label='Caravan boundary'
        )
        panel.line(
            x=[-10, -9], y=[-10, -10], line_color='#6A0DAD', line_width=3,
            legend_label='WSC 2024 boundary'
        )

        panel.legend.location = 'top_left'
        panel.legend.label_text_font_size = '26pt'
        panel.legend.label_text_font = ACADEMIC_FONT
        panel.legend.glyph_width = 55
        panel.legend.glyph_height = 35
        panel.legend.label_standoff = 14
        panel.legend.background_fill_alpha = 0.0
        panel.legend.border_line_alpha = 0.0
        panel.legend.spacing = 15
        return panel

plots = []
to_process = MANUAL_IDS[::-1]


def _style_panel_plot(p, i=0):
    """Apply consistent axis styling for panel plots."""
    if i < 2:
        p.yaxis.axis_label = "Latitude"
    if i > 0:
        p.xaxis.axis_label = "Longitude"
    p.axis.major_label_text_font_size = "22pt"
    p.axis.axis_label_text_font_size = "22pt"
    p.axis.axis_label_text_font = ACADEMIC_FONT
    p.axis.major_label_text_font = ACADEMIC_FONT
    # Reserve enough room so large tick labels are not clipped by the frame.
    p.min_border_bottom = 45
    p.min_border_left = 30
    p.xaxis.major_label_standoff = 12
    p.legend.visible = False


for i, station_id in enumerate(to_process):
    # try:
    show_x_label, show_y_label = True, True
    if i == 0:
        show_x_label = False
    if i == 2:
        show_y_label = False

    result = plot_caravan_wsc_comparison(station_id, print_metrics=True,
                                         x_label=show_x_label, y_label=show_y_label,
                                         font=ACADEMIC_FONT)

    print('--------------')
    # except Exception as e:
    #     print(f"error processing {station_id}: {e}")
    #     continue
    if result.get("status") == "success":
        p = result["figure"]
        _style_panel_plot(p, i=i)
        plots.append(p)
        # save(result["figure"], filename=str(OUT_DIR / f"{station_id}.html"), resources=CDN,
        #      title=f"Caravan vs WSC 2024 Polygon Comparison: {station_id}")
        print(f"saved {station_id}")
    else:
        msg = result.get('message', 'unknown error')
        # Fallback: if Caravan geometry is missing, compare local station polygon versions.
        if "No Caravan polygon found" in msg:
            fallback = plot_station_polygon(station_id, width=500,
                                                     font=ACADEMIC_FONT)
            if fallback.get("status") == "success":
                p = fallback["figure"]
                p.title.text = f"WSC ID: {station_id}"
                _style_panel_plot(p, i = i)
                plots.append(p)
                print(f"saved {station_id} (fallback: local versions)")
                continue
        print(f"skipped {station_id}: {msg}")


# Build 2x2 layout: 3 plots + legend panel in bottom-right cell.
# plot_cells = plots[:3]
# while len(plot_s) < 3:
#     plot_cells.append(Spacer(width=500, height=450))
legend_panel = make_legend_panel(width=500, height=450)
# insert the legend panel at the second index
plots.insert(1, legend_panel)

# Add a little whitespace around each panel so plots are less crowded.
for panel in plots:
    panel.margin = (12, 12, 12, 12)

lt = gridplot(plots, ncols=2,
    width=500, height=500,
    toolbar_location=None,
)
save(lt, filename=str(OUT_DIR / "comparison_plots.html"), resources=CDN,
     title="Caravan vs WSC 2024 Polygon Comparison")

# Export PNG at 300 DPI: scale_factor=300/96 upscales pixel dims from screen res
_png_path = OUT_DIR / "Figure2.png"
# _chrome_opts = Options()
# _scale = 300 / 96  # ~3.125
# _chrome_opts.add_argument("--headless")
# _chrome_opts.add_argument("--no-sandbox")          # prevents privileged subprocesses
# _chrome_opts.add_argument("--disable-dev-shm-usage")
# _chrome_opts.add_argument(f"--force-device-scale-factor={_scale}")
# _chrome_opts.binary_location = "/opt/google/chrome/google-chrome"
# _driver = webdriver.Chrome(
#     # service=Service(ChromeDriverManager().install()),
#     service=Service("/usr/bin/chromedriver"),
#     options=_chrome_opts,
# )
# try:
export_png(lt, filename=str(_png_path))#, scale_factor=_scale)#, webdriver=_driver)
# finally:
#     _driver.quit()
# Stamp DPI metadata and save TIFF (lossless, 300 DPI — suitable for print/submission)
_img = Image.open(_png_path)
_img.save(_png_path, dpi=(300, 300))  # overwrite PNG with DPI metadata
_tif_path = _png_path.with_suffix(".tif")
_img.save(_tif_path, dpi=(300, 300), compression="tiff_lzw")
print(f"Saved: {OUT_DIR / 'comparison_plots.html'}, {_png_path}, {_tif_path}")
print(f'saved to', _tif_path)
