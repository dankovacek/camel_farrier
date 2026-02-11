# Broken Telephone: Caravan Divergence

Caravan re-published HYSETS catchment polygons in 2023 using the 2021 HYDAT drainage basin archive. Meanwhile, Water Survey of Canada (WSC) released 8,000+ polygon revisions between 2022 and late 2024. There are no DOIs to verify if these updates propagated downstream. This case study quantifies how far Caravan's polygons are from the current WSC geometry to make the case for automated provenance checks for derived datasets.

## Spatial Divergence Map


:::{margin}
**Linked selection.** Use box-select or lasso-select tools on the CDF to highlight stations on the map (and vice versa). Toggle legend entries to isolate specific area-change bins.

Warm colors highlight basins where Caravan's inherited geometry deviates most from the latest WSC polygons.
:::

:::{bokeh-plot}
:tags: [hide-input]
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import plot_caravan_map_with_cdf
show(plot_caravan_map_with_cdf(metric="jaccard"))
:::

:::{margin}
```{mermaid}
%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'14px'}, 'flowchart': {'rankSpacing': 30, 'nodeSpacing': 30}}}%%
flowchart TD
    A[WSC 2021] --> B[HYSETS 2022]
    B --> C[Caravan 2023]

    D[WSC 2024] --> E[Camel Farrier]
    E --> F[Updated<br/>datasets]

    F -.-> B
    F -.-> C

    style A fill:#f5f5f5,stroke:#1f1e1b,stroke-width:0px
    style B fill:#f5f5f5,stroke:#1f1e1b,stroke-width:0px
    style C fill:#f5f5f5,stroke:#1f1e1b,stroke-width:0px
    style D fill:#f5f5f5,stroke:#1f1e1b,stroke-width:0px
    style E fill:#f5f5f5,stroke:#1f1e1b,stroke-width:0px
    style F fill:#f5f5f5,stroke:#1f1e1b,stroke-width:0px
```
*Solid lines show the stale data lineage; dashed lines show potential updates from Camel Farrier's versioned polygons.*
:::




The "broken telephone" happens because each step copied polygons prior to a new polygon set being available.

## Why It Matters

Three invisible failure modes compound when stale polygons sneak into hydrologic workflows: runoff statistics inherit area bias one-to-one, calibration targets drift away from reality, and provenance breadcrumbs disappear.

Runoff math is unforgiving. A 5% drainage-area error instantly becomes a 5% bias in area-normalized discharge and any flow statistics derived from it.

Model calibration drifts. Large-sample workflows tune parameters against physiographic descriptors. When the descriptor is out-of-date, the calibrated model is answering yesterday's basin.

Provenance is invisible today. Polygons lack version identifiers or DOIs, so downstream users have difficulty verifying if their data is up-to-date or tracking the source of errors.


## Network-wide summary

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import generate_caravan_summary_table
show(generate_caravan_summary_table())
:::


### Data sources

- **Current WSC polygons:** September 2024 drop hosted in `COMMON_DATA_DIR/HYDAT/polygons/`.
- **HYSETS watershed properties:** 2022 release (DOI [10.17605/OSF.IO/RPC3W](https://doi.org/10.17605/OSF.IO/RPC3W)).
- **Caravan polygons:** 2023 v1.3 release (DOI [10.5281/zenodo.15529786](https://doi.org/10.5281/zenodo.15529786)).

All calculations convert geometries to Lambert Azimuthal Equal Area (LAEA) centered on each basin so area and overlap metrics are unbiased across Canada's span.


## Distribution of Overlap

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import load_caravan_comparison_data, plot_area_change_cdf
show(plot_area_change_cdf(load_caravan_comparison_data(include_coordinates=False)))
:::

## Per-Station Metrics

:::{margin}
Sort by Jaccard similarity or |Δarea| to find the basins most impacted by the HYDAT→HYSETS→Caravan lag (closer to zero is less overlap). Station links activate when a diagnostic page already exists in this repository.
:::

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import generate_caravan_comparison_table
show(generate_caravan_comparison_table())
:::

## Per-Station Basin Comparison

Running the `compare_caravan_polygons.py` script generates station-level comparison tables with all metrics and source metadata, but to avoid excessive computaton, these do not generate visualizations. A function is provided to generate polygon overlay plots between the Caravan and current WSC polygons for a station on demand so long
as there are polygons in the source data.

:::{margin}
In the example below, the drainage areas are close, but the catchment polygon is non-overlapping!

The example station ID is 07DB005.
:::

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.compare_caravan_polygons import plot_caravan_wsc_comparison
show(plot_caravan_wsc_comparison("07DB005", width=800))
:::


## Implications for LSH Datasets

1. **Area errors propagate directly**: 5% polygon error = 5% unit area runoff bias
2. **Calibrated models drift**: Parameters tuned on wrong geometry answer the wrong question

## Repeatable results

This repository maintains `compare_caravan_polygons.py` in the `scripts/generation/` directory to replicate the results presented here.

## Reproduction Checklist

1. **Quick test (39 stations, <15 s):**
   ```bash
   python scripts/generation/compare_caravan_polygons.py --test
   ```
2. **Full network comparison (1,432 stations, ~5 min):**
   ```bash
   python scripts/generation/compare_caravan_polygons.py
   ```
3. **Rebuild the book (optional):**
   ```bash
   cd book_docs
   jupyter book build .
   ```

Both commands read WSC polygons from `COMMON_DATA_DIR` and write comparison metrics to `book_docs/data/polygon_comparisons/caravan_vs_wsc2024/`. The documentation pulls directly from that CSV, so regenerated plots automatically reflect the latest run without any JSON summaries.
