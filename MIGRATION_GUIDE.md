# Migration Guide: HTML-in-Python → MyST-First Architecture

## Current State (Phase 2 Complete)

✅ Backend functions return structured data (status dicts)
✅ CSS classes defined in `custom.css`
✅ MyST templates created in `book_docs/templates/`
✅ Template renderer in `scripts/utils/templates.py`
⏳ **Adapter layer** in `scripts/utils/bokeh_adapters.py` (transitional)

## Phase 3 Options

### Option C: Adapter Layer (CURRENT - Pragmatic Middle Ground)

**Philosophy**: Keep `:::{bokeh-plot}` working while backend is clean

**Update pattern for existing bokeh-plot directives**:

```python
# OLD - Direct function call
:::{bokeh-plot}
from scripts.catchment_page_utils import plot_station_polygon
show(plot_station_polygon(station_id))
:::

# NEW - Via adapter
:::{bokeh-plot}
from scripts.catchment_page_utils import plot_station_polygon
from scripts.utils.bokeh_adapters import show_with_notes
result = plot_station_polygon(station_id)
show(show_with_notes(result))
:::
```

**Pros**:
- Minimal changes to existing MyST pages
- Backend functions are clean and testable
- `:::{bokeh-plot}` continues to work
- Incremental migration path

**Cons**:
- Still generates HTML via Bokeh Div (not pure MyST)
- Adapter layer adds indirection
- Doesn't fully leverage MyST admonitions

**When to use**: Immediate compatibility while migrating

---

### Option B: Pure MyST Generation (FUTURE - Ideal Architecture)

**Philosophy**: Python generates `.md` files directly, MyST handles all presentation

**Pattern for page generators**:

```python
# In scripts/generation/page_generator.py or similar
from scripts.utils.templates import render_from_result, render_note
from scripts.utils.bokeh import save_bokeh

def generate_station_page(station_id: str) -> str:
    """Generate complete MyST markdown for a station."""

    # Get polygon plot
    polygon_result = plot_station_polygon(station_id)

    if polygon_result['status'] == 'success':
        # Save figure to standalone HTML
        fig_path = save_bokeh(polygon_result['figure'],
                             f'stations/{station_id}/polygon.html')

        # Render notes as MyST
        notes_myst = render_note(**polygon_result['notes'])

        myst_content = f"""
## Catchment Boundary

```{{raw}} html
:file: {fig_path}
```

{notes_myst}
"""
    else:
        # Render error/warning message as MyST admonition
        myst_content = render_from_result(polygon_result)

    return myst_content
```

**Then in the .md file** (generated or templated):
```markdown
# Station 07DB005

{{ station_overview }}

## Catchment Boundary

```{raw} html
:file: stations/07DB005/polygon.html
```

**Geometric Precision Notes:**

- **Coordinate Precision**: Coordinates rounded to 1m after reprojection...
- **Small Geometry Filter**: Sub-polygons smaller than min(1000 m²...
- **Area Calculations**: Displayed areas computed in EPSG:3857...
```

**Pros**:
- Pure MyST syntax in final pages
- Native admonitions with semantic HTML
- CSS maintained in one place (custom.css)
- No HTML generation in Python

**Cons**:
- Requires rewriting page generation logic
- Can't use `:::{bokeh-plot}` directive (loses live Python execution)
- More upfront work

**When to use**: New pages or full page regeneration

---

## Migration Path (Recommended)

### Stage 1: Adapter (Quick Win) ✅ Current

1. Use `bokeh_adapters.show_with_notes()` in existing `:::{bokeh-plot}` blocks
2. Backend functions return clean dicts
3. Everything still works

**Files updated**: All `:::{bokeh-plot}` directives in `book_docs/**/*.md`

### Stage 2: Hybrid Approach (Incremental)

For **static content** (intro pages, summary pages):
- Generate `.md` files directly using `templates.render_*()` functions
- Use MyST admonitions natively
- Example: `book_docs/index.md`, summary pages

For **dynamic visualizations** (station-specific plots):
- Keep using `:::{bokeh-plot}` with adapter
- Example: Individual station pages with live plots

### Stage 3: Full MyST Generation (Long-term)

- Page generator scripts create complete `.md` files
- Bokeh plots saved as static HTML, embedded via `{raw}`
- All messages/notes as MyST admonitions
- Remove `bokeh_adapters.py` (no longer needed)

---

## Decision Tree

```
Does the page need live Python execution in bokeh-plot?
│
├─ YES → Use Option C (adapter) for now
│         Plan migration to static generation
│
└─ NO  → Use Option B (pure MyST)
          Generate .md files directly
```

---

## Key Principle

**Separation of Concerns Hierarchy**:

1. **Best**: Python computes → writes MyST → Jupyter Book renders
2. **Good**: Python computes → returns dict → adapter → Bokeh widget
3. **Bad**: Python generates HTML strings directly (old pattern)

We're at level 2 (Good) heading toward level 1 (Best).

---

## Files to Update

### Immediate (Phase 3 - Use Adapter)

Update all `:::{bokeh-plot}` directives in:
- `book_docs/summary_pages/*.md` - Pattern comparison plots
- Any dynamically generated station pages that use catchment_page_utils functions

### Later (Phase 4 - Pure MyST)

Refactor these scripts to generate .md:
- `scripts/introduction_page_utils.py` - Intro page generation
- Any other scripts that write MyST content

**Note**: `scripts/update_catchment_pages_and_intro.py` has been moved to `scripts/superseded/` as it referenced non-existent imports and was not used anywhere.

### Never Update

These are fine as-is:
- `scripts/utils/bokeh.py` - Utility for Bokeh → HTML conversion (still useful)
- `scripts/utils/markdown.py` - Data transformation utilities
