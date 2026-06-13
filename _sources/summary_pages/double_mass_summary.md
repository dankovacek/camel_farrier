# Double Mass Curve Overview

The plot below maps all stations for which precipitation data (Daymet) and daily flow records (HYDAT) are both available. Points are coloured by the long-term runoff coefficient (RC = cumulative runoff / cumulative precipitation over the full record).

## Station map

The long-term runoff coefficient (RC) is the ratio of cumulative runoff to cumulative
precipitation across the full record. Except where glacier melt contributes significantly, an RC > 1 is physically implausible by conservation of mass, and it indicates a data issue such as drainage area estimation, systematic bias in
precipitation and/or flow estimation.

:::{margin}

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
Sort by **RC (final)** to quickly identify outliers by clicking on the column header.
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

The long-term RC displayed here is the **final value** of cumulative runoff / cumulative precipitation across all qualifying hydrological years. This is equivalent to the slope of a straight line from the origin to the last point on the DMC, and distinct from the OLS slope shown in per-station plots, which minimises residuals across all years. @cite{searcy1960double} used the OLS slope to detect changes in the runoff-precipitation relationship over time, but the overall cumulative RC is a more intuitive summary statistic for cross-station comparison and is more robust to noisy data in individual years.

A DMC slope break may indicate:
- A catchment boundary issue (drainage area)
- A systematic bias in precipitation estimation (e.g. interpolation issues, station relocations, gauge under-catch)
- A rating curve issue (systematic bias in daily flow estimation)
- A land-use change (deforestation, reservoir impoundment, irrigation expansion)
- A change in storage (e.g. wetland drainage, urbanisation, glacier melt, soil )
- A gauge datum shift or sensor replacement

An RC > 1 signals a data issue.  Either the drainage area is underestimated, the flow record includes diversions into the basin, the precipitation data is overestimated, or the gap-fill introduced a systematic positive bias.


## Data requirements

Double mass curves require both:
1. **Daily flow data** from HYDAT (or gap-filled via `populate_demo_data.py`)
2. **Daymet daily precipitation** NetCDF files at
   `COMMON_DATA_DIR/BC_Monitored_catchment_mean_met_forcings_20260203/catchment_daily/{station_id}_catchment_daily.nc`

Only hydrological years with 12 complete months (missing < 5 days) of both flow and precipitation pass the completeness filter and contribute to the curve.

See [Data Sources](../guides/DATA_SOURCES) for download instructions.

