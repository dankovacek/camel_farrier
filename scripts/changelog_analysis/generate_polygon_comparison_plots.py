#!/usr/bin/env python3
from pathlib import Path
import sys
from bokeh.plotting import save
from bokeh.layouts import gridplot
from bokeh.resources import CDN

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
for station_id in MANUAL_IDS[::-1]:
    try:
        result = plot_caravan_wsc_comparison(station_id, print_metrics=True)
        print(result)
        print('--------------')
    except Exception as e:
        print(f"error processing {station_id}: {e}")
        continue
    if result.get("status") == "success":
        p = result["figure"]
        # p.title = None
        if len(plots) < 2:
            # hide legend
            p.legend.visible = False
        if len(plots) == 0: # add y axis label to first plot only
            p.yaxis.axis_label = "Latitude"
        p.xaxis.axis_label = "Longitude"
        # increase font size        p.xaxis.major_label_text_font_size = "10pt"
        p.xaxis.major_label_text_font_size = "12pt"
        p.yaxis.major_label_text_font_size = "12pt"
        # increase axis label font size
        p.xaxis.axis_label_text_font_size = "14pt"
        p.yaxis.axis_label_text_font_size = "14pt"
        plots.append(p)
        # save(result["figure"], filename=str(OUT_DIR / f"{station_id}.html"), resources=CDN,
        #      title=f"Caravan vs WSC 2024 Polygon Comparison: {station_id}")
        print(f"saved {station_id}")
    else:
        print(f"skipped {station_id}: {result.get('message', 'unknown error')}")


lt = gridplot(plots, ncols=3, width=375, height=350)
save(lt, filename=str(OUT_DIR / "comparison_plots.html"), resources=CDN,
     title="Caravan vs WSC 2024 Polygon Comparison")
