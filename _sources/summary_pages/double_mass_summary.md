# Double Mass Curve Overview

A double mass curve (DMC) plots cumulative precipitation against cumulative runoff for a catchment over time. Under stationary conditions the relationship is linear; a change in slope indicates a shift in the precipitation-runoff ratio.  Changes can result from land-cover change, gauge error, or a flow estimation problem.

This page maps all stations for which Daymet precipitation data and gap-filled daily flow records are both available. Points are coloured by the long-term runoff coefficient (RC = cumulative runoff / cumulative precipitation over the full record). Stations flagged **RC > 1** are physically implausible and warrant closer inspection.

## Station map

:::{margin}
**Colour key:**
- Red: RC > 1.0 — runoff exceeds precipitation (data error or poor gap-fill)
- Orange: RC 0.7–1.0 — high but plausible in wet maritime catchments
- Yellow: RC 0.4–0.7 — typical mid-range
- Light green: RC 0.2–0.4 — drier catchments
- Dark green: RC < 0.2 — semi-arid or heavily regulated

Use **lasso-select** on the map or CDF to highlight subsets. Click a point to open the station diagnostic page.
:::

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import plot_dmc_overview_map
show(plot_dmc_overview_map())
:::


## Per-station summary

:::{margin}
Sort by **RC (final)** to quickly identify outliers. The ⚠ flag marks stations where cumulative runoff exceeds cumulative precipitation over the full record.
:::

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import generate_dmc_summary_table
show(generate_dmc_summary_table())
:::


## Interpretation

The long-term RC displayed here is the **final value** of cumulative runoff / cumulative precipitation across all qualifying hydrological years. This is equivalent to the slope of a straight line from the origin to the last point on the DMC. It is distinct from the OLS slope shown in per-station plots, which minimises residuals across all years.

A DMC slope break may indicate:
- A catchment boundary revision (polygon change alters effective drainage area)
- A rating curve update that shifted estimated flows systematically
- A land-use change (deforestation, reservoir impoundment, irrigation expansion)
- A gauge datum shift or sensor replacement

An RC > 1 signals a data issue.  Either the drainage area is underestimated, the flow record includes diversions into the basin, the precipitation data is overestimated, or the gap-fill introduced a systematic positive bias.


## Data requirements

Double mass curves require both:
1. **Daily flow data** from HYDAT (or gap-filled via `populate_demo_data.py`)
2. **Daymet daily precipitation** NetCDF files at
   `COMMON_DATA_DIR/BC_Monitored_catchment_mean_met_forcings_20260203/catchment_daily/{station_id}_catchment_daily.nc`

Only hydrological years with 12 complete months (missing < 5 days) of both flow and precipitation pass the completeness filter and contribute to the curve.

See [Data Sources](../guides/DATA_SOURCES) for download instructions.


## Reproduction

```bash
# Generate gap-filled flows and double mass CSVs for all demo stations
uv run python scripts/demo_setup/populate_demo_data.py

# Regenerate station pages (picks up new double mass data)
uv run python scripts/demo_setup/process_station_pages.py

# Rebuild the book
cd book_docs && uv run jupyter-book build .
```
