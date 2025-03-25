# Farrier: Catchment Polygon Revision Archive

## Overview

This repository serves as a version control archive for catchment polygons used in hydrological and environmental models. Each catchment folder contains:

- **Geometric Data:** GeoJSON files representing catchment boundaries.
- **Attribute Data:** CSV files with relevant metadata.
- **Visualizations:** Plots and images of the catchment polygons.

A custom Python script generates individual pages for each catchment revision and a central index page with search functionality. The site is built using Jupyter Book and Sphinx for a clean, organized online presentation.

## Deployment to GitHub Pages

To deploy this repository to GitHub Pages, follow these steps:

1. **Build the Site:**

   Ensure you have Jupyter Book installed, then run:
   ```bash
   jupyter-book build .
   ghp-import -n -p -f _build/html
   ```