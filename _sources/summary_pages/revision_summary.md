# Polygon Revision Summary

This page summarizes catchment polygon revisions across a sample of the national hydrometric monitoring stations in HYDAT. When alternate polygon sources are published (e.g., HYDAT 2024 release), we compare them against baseline polygons (earlier, unversioned files) to quantify changes.

## Revision Map

:::{margin}
**Linked selection.**
Click on a dot to navigate to the corresponding station summary page.

Warm colors highlight basins where a previous polygon version (December 2021) deviates most from the latest WSC polygons.
:::

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import plot_revision_map
show(plot_revision_map())
:::

## Polygon Comparison Metrics

### Jaccard Similarity Index
:::{margin}
**Interpreting JSI:** Values near 1.0 indicate nearly perfect overlap of polygons; a value of 0 indicates no overlap.
:::

The **Jaccard Similarity Index** (JSI) quantifies geometric overlap between polygon versions. For geometries $A$ and $B$:

$$
J(A, B) = \frac{|A \cap B|}{|A \cup B|}
$$

Where $|A \cap B|$ is the intersection area and $|A \cup B|$ is the union area.



### Area Change
:::{margin}
**Area Change Context:** Changes reflect unique DEM inputs or hyraulic conditioning steps, or detailed site information.
:::

Percent area difference between versions:

$$
\Delta A = \frac{A_{\mathrm{new}} - A_{\mathrm{old}}}{A_{\mathrm{old}}} \times 100\%
$$

Positive values indicate catchment expansion; negative values indicate reduction.



## Sample distributions

### Jaccard similarity index distribution

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import plot_jaccard_cdf
show(plot_jaccard_cdf())
:::

### Area change distribution

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import plot_area_change_cdf
show(plot_area_change_cdf())
:::

## Detailed comparison table

:::{margin}
Sort the table by clicking on the column headers.  Click station links to navigate to the station summary page.
:::

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import generate_revision_table
show(generate_revision_table())
:::

All polygon changes are tracked in station-level `_versions.json` files with complete provenance — data source (origin of polygon: WSC_basins, HYDAT, custom), source version (original dataset version/date), source metadata (all attributes from GeoJSON properties), timestamp (when polygon was integrated), and comparison metrics (Jaccard index, area differences, overlap statistics).

:::{margin}
Example version entry:

```json
{
  "semantic_tag": "v1.1.0",
  "timestamp": "2026-02-04T19:23:45Z",
  "data_source": "HYDAT_polygons",
  "source_version": "June 2024",
  "polygon_file": "07AF010_polygon_v1.1.0.geojson"
}
```
:::

## Integration Workflow

To integrate new polygon versions:

```bash
# Preview changes (dry-run)
python scripts/demo_setup/integrate_hydat_polygons.py --dry-run

# Integrate for all demo stations
python scripts/demo_setup/integrate_hydat_polygons.py

# Or specific stations
echo -e "07AF010\n08GA065" > /tmp/stations.txt
python scripts/demo_setup/integrate_hydat_polygons.py --stations-file /tmp/stations.txt
```

Comparison metrics are calculated automatically using LAEA projection for accurate area calculations.

For methodology and implementation details, see [Getting Started](../guides/user_guide.md) and [Data Specification](../guides/data_specification.md).
:::


