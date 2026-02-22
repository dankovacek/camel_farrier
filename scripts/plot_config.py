"""
Plot Configuration - Tufte Principles
Centralized styling and theme configuration for all visualizations.
Follows Edward Tufte's principles: maximize data-ink ratio, minimize chartjunk.
"""

# Colorblind-safe palette (Paul Tol's colors, adjusted for visibility)
COLORBLIND_PALETTE = [
    '#4477AA',  # Blue
    '#EE6677',  # Red  
    '#228833',  # Green
    '#AA7744',  # Brown (darker than yellow for better visibility)
    '#66CCEE',  # Cyan
    '#AA3377',  # Purple
    '#000000',  # Black (instead of grey for visibility)
]

# Global version color mapping (ensures consistency across plots)
VERSION_COLORS = {}

def get_version_color(version_tag: str) -> str:
    """Get consistent color for a version tag across all plots."""
    if version_tag not in VERSION_COLORS:
        idx = len(VERSION_COLORS) % len(COLORBLIND_PALETTE)
        VERSION_COLORS[version_tag] = COLORBLIND_PALETTE[idx]
    return VERSION_COLORS[version_tag]

# Quality flag colors (semantic, colorblind-safe)
QUALITY_COLORS = {
    'A': '#228833',  # Good - green
    'B': '#AA7744',  # Fair - brown  
    'C': '#EE6677',  # Poor - red
    'E': '#AA3377',  # Estimated - purple
    None: '#000000', # No flag - black
}

# Tufte styling defaults
PLOT_WIDTH = 900
PLOT_HEIGHT_SHORT = 300
PLOT_HEIGHT_MEDIUM = 400
PLOT_HEIGHT_TALL = 500
LINE_WIDTH = 1.5
MARKER_SIZE = 6

def apply_tufte_style(plot):
    """
    Apply minimal Tufte styling to Bokeh plot.
    Maximizes data-ink ratio, removes chartjunk.
    """
    # Remove plot border
    plot.outline_line_color = None
    
    # Minimal grid
    plot.grid.grid_line_color = '#E5E5E5'
    plot.grid.grid_line_alpha = 0.5
    plot.grid.grid_line_width = 0.5
    
    # Thin axis lines
    plot.axis.axis_line_width = 1
    plot.axis.axis_line_color = '#333333'
    
    # Remove minor ticks (unnecessary detail)
    plot.axis.minor_tick_line_color = None
    
    # Clean legend
    if plot.legend:
        plot.legend.background_fill_alpha = 0
        plot.legend.border_line_alpha = 0
        plot.legend.click_policy = 'hide'  # Enable toggle
        plot.legend.label_text_font_size = '10pt'
    
    return plot
