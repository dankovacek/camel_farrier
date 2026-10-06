# Historical Daily-Flow Revisions

HYDAT releases do not provide a station-level changelog of historical daily-flow
corrections. This diagnostic helps identify records that warrant review before
reusing an earlier analysis. [Enhancement #4](https://github.com/dankovacek/camel_farrier/issues/4)
motivates the workflow; [PR #5](https://github.com/dankovacek/camel_farrier/pull/5)
implements the release comparison.

This example compares **15 July 2025** with **17 July 2026**. The source databases,
script and original comparison results are archived at
[Zenodo (10.5281/zenodo.23174489)](https://doi.org/10.5281/zenodo.23174489).

## At a glance

:::{bokeh-plot}
:source-position: none

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.hydat_revision_plots import revision_summary
show(revision_summary())
:::

Only valid dates with a published, non-NULL earlier flow are eligible. Numerical
changes are detected without a tolerance; removals are counted separately.
**New observations, symbol-only changes and monthly summaries are excluded.**

## Where and how persistent?

:::{margin}
**Linked selection.** Box- or lasso-select on either plot to highlight the same
stations in both. Click a map glyph to open its generated station data page,
including the two-release flow comparison.
:::

:::{bokeh-plot}
:source-position: none

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.hydat_revision_plots import plot_revision_overview
show(plot_revision_overview())
:::

Map colour shows the **number of changed daily values**, not hydrological severity.
The longest run counts **consecutive revised calendar days**; the first-to-last
affected interval can include unchanged days and gaps, so it is not a duration
of continuous revision.

## Station diagnostics

Sort column headers to prioritize large or persistent changes. Station IDs open
the same data pages as the map.

:::{bokeh-plot}
:source-position: none

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.hydat_revision_plots import revision_table
show(revision_table())
:::

**Magnitude:** absolute flow change is in m3/s. Relative magnitude is
`100 * abs(later - earlier) / abs(earlier)`; zero earlier flows and removals
are excluded from relative statistics. The table reports each station's median;
the headline median pools revised station-days. The changed-record fraction uses
all eligible earlier daily observations at that station, not just the affected
interval.

**Interpretation:** revisions identify published data that changed, not their
cause, accuracy or significance. Check the station's changed-day plots and data,
then reassess the statistics relevant to your analysis.

## Reproduce

See the [HYDAT comparison how-to](../guides/user_guide.md#howto-compare-hydat-releases).
After comparing the releases, append missing stations to the existing demo sample,
populate their observed data and revision diagnostics, then regenerate the normal
station pages:

```bash
python demo_data/generate_demo_stn_list.py --augment-existing
python scripts/demo_setup/populate_demo_data.py \
  --comparison-dir data/Hydat_sqlite3_20250715_to_Hydat_sqlite3_20260717 \
  --hydat-path /path/to/Hydat_sqlite3_20260717/Hydat.sqlite3 \
  --skip-infill
python scripts/demo_setup/process_station_pages.py
jupyter-book build book_docs
```

`--skip-infill` deliberately leaves new station flows as published observations;
omit it to run the usual gap-fill and double-mass workflow where inputs exist.
Existing station data are preserved unless `--force` is supplied. Diagnostics
always read the two source databases, never station gap-filled files.
`station_diagnostics.csv` and `revision_diagnostics.json` are generated beside
the original comparison outputs; each station receives a changed-day CSV and
revision-summary JSON. All affected stations are included even if they fall
outside the sampled polygon overlap.
