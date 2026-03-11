#!/usr/bin/env python3
from pathlib import Path
import sys
from bokeh.plotting import save
from bokeh.layouts import gridplot
from bokeh.resources import CDN
from bokeh.io import export_png
from PIL import Image
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

PROJECT_ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(PROJECT_ROOT))
from scripts.generation.compare_caravan_polygons import plot_caravan_wsc_comparison

STATIONS_DIR = PROJECT_ROOT / "book_docs/stations"
OUT_DIR = PROJECT_ROOT / "book_docs/images/comparison_plots"
MANUAL_IDS = ["07DB005",  "08AB001",  "09AC007"]
# "07BC006", "07SB013","08HB075",

auto_ids = [
    d.name for d in sorted(STATIONS_DIR.glob("*"))
    if d.is_dir() and len(list(d.glob(f"{d.name}_polygon_v*.geojson"))) > 1
]
station_ids = sorted(set(MANUAL_IDS + auto_ids))
OUT_DIR.mkdir(parents=True, exist_ok=True)

plots = []
to_process = MANUAL_IDS[::-1]
for station_id in to_process:
    # try:
    result = plot_caravan_wsc_comparison(station_id, print_metrics=True)
    print('--------------')
    # except Exception as e:
    #     print(f"error processing {station_id}: {e}")
    #     continue
    if result.get("status") == "success":
        p = result["figure"]
        if len(plots) < len(to_process) - 1:
            p.legend.visible = False  # hide in all subplots except last column
        else:
            # Extend right edge only to make room for the legend (~30% of x-range width).
            # Extending both edges or using a large factor warps the aspect ratio on geo plots.
            p.x_range.end += 0.30 * (p.x_range.end - p.x_range.start)

        if len(plots) == 0:
            p.yaxis.axis_label = "Latitude"
        p.xaxis.axis_label = "Longitude"
        # increase font size        p.xaxis.major_label_text_font_size = "10pt"
        p.xaxis.major_label_text_font_size = "12pt"
        p.yaxis.major_label_text_font_size = "12pt"
        # increase axis label font size
        p.xaxis.axis_label_text_font_size = "14pt"
        p.yaxis.axis_label_text_font_size = "14pt"
        p.legend.background_fill_alpha = 0.65
        plots.append(p)
        # save(result["figure"], filename=str(OUT_DIR / f"{station_id}.html"), resources=CDN,
        #      title=f"Caravan vs WSC 2024 Polygon Comparison: {station_id}")
        print(f"saved {station_id}")
    else:
        print(f"skipped {station_id}: {result.get('message', 'unknown error')}")


# ncols=None/nrows=1 so gridplot respects each plot's individual width
lt = gridplot(plots, ncols=3, toolbar_location=None, width=500, height=450)
save(lt, filename=str(OUT_DIR / "comparison_plots.html"), resources=CDN,
     title="Caravan vs WSC 2024 Polygon Comparison")

# Export PNG at 300 DPI: scale_factor=300/96 upscales pixel dims from screen res
_png_path = OUT_DIR / "Figure2.png"
_chrome_opts = Options()
_scale = 300 / 96  # ~3.125
_chrome_opts.add_argument("--headless")
_chrome_opts.add_argument("--no-sandbox")          # prevents privileged subprocesses
_chrome_opts.add_argument("--disable-dev-shm-usage")
_chrome_opts.add_argument(f"--force-device-scale-factor={_scale}")
_chrome_opts.binary_location = "/opt/google/chrome/google-chrome"
_driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()),
    options=_chrome_opts,
)
try:
    export_png(lt, filename=str(_png_path), scale_factor=_scale, webdriver=_driver)
finally:
    _driver.quit()
# Stamp DPI metadata and save TIFF (lossless, 300 DPI — suitable for print/submission)
_img = Image.open(_png_path)
_img.save(_png_path, dpi=(300, 300))  # overwrite PNG with DPI metadata
_tif_path = _png_path.with_suffix(".tif")
_img.save(_tif_path, dpi=(300, 300), compression="tiff_lzw")
print(f"Saved: {OUT_DIR / 'comparison_plots.html'}, {_png_path}, {_tif_path}")
print(f'saved to', _tif_path)
