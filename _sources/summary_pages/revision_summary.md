# Polygon Revision Summary

This page summarizes catchment polygon revisions across all demonstration stations. When alternate polygon sources become available (e.g., HYDAT 2024 release), we compare them against baseline polygons to quantify changes.

## Polygon Comparison Metrics

### Jaccard Similarity Index

The **Jaccard Similarity Index** (JSI) quantifies geometric overlap between polygon versions. For geometries $A$ and $B$:

$$
J(A, B) = \frac{|A \cap B|}{|A \cup B|}
$$

Where:
- $|A \cap B|$ is the intersection area
- $|A \cup B|$ is the union area

**Interpretation:**
- $J = 1.0$: Polygons are identical
- $J = 0.9$: High similarity (90% overlap relative to union)
- $J = 0.5$: Moderate difference (50% overlap)
- $J < 0.3$: Substantial revision

### Area Change

Percent area difference between versions:

$$
\Delta A = \frac{A_{\mathrm{new}} - A_{\mathrm{old}}}{A_{\mathrm{old}}} \times 100\%
$$

Positive values indicate catchment expansion; negative values indicate reduction.

## Geographic Distribution of Changes

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import plot_revision_map
show(plot_revision_map())
:::

## Statistical Distributions

### Jaccard Similarity Distribution

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import plot_jaccard_cdf
show(plot_jaccard_cdf())
:::

### Area Change Distribution

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import plot_area_change_cdf
show(plot_area_change_cdf())
:::

## Detailed Comparison Table

:::{bokeh-plot}
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3]))
from bokeh.io import show
from scripts.generation.revision_plots import generate_revision_table
show(generate_revision_table())
:::

## Version Tracking

All polygon changes are tracked in station-level `_versions.json` files with complete provenance:

- **Data Source**: Origin of polygon (WSC_basins, HYDAT, custom)
- **Source Version**: Original dataset version/date
- **Source Metadata**: All attributes from GeoJSON properties
- **Timestamp**: When polygon was integrated
- **Comparison Metrics**: Jaccard index, area differences, overlap statistics

Example version entry:

```json
{
  "semantic_tag": "v1.1.0",
  "timestamp": "2026-02-04T19:23:45Z",
  "data_source": "HYDAT_polygons",
  "source_version": "June 2024",
  "polygon_file": "07AF010_polygon_v1.1.0.geojson",
  "source_metadata": {
    "StationNum": "07AF010",
    "Version": "June 2024 / juin 2024",
    "Date_rev": "2024-06-01",
    "Area_km2": 504.8
  }
}
```

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

## References

For methodology and implementation details, see:
- [Polygon Integration Workflow](../guides/workflow.md)
- [Data Specification](../guides/data_specification.md)


