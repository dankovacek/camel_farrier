---
name: Polygon Revision
about: Propose changes to catchment boundary delineations
title: "Revise polygon for [STATION_ID] - [brief reason]"
labels: ['data-quality', 'polygon-revision']
assignees: []
---

## Station Identifier
<!-- Which station(s) does this affect? -->
[STATION_ID] - [Station Name]

## Current State
- **Polygon Version:** [Date/Source]
- **Drainage Area:** [X km²]
- **Data Source:** [HYDAT/HYSETS/Custom]

## Proposed Change
- **New Polygon Version:** [Date/Source]
- **New Drainage Area:** [Y km²]
- **Change Type:** (Select one)
  - [ ] Tributary added
  - [ ] Tributary removed
  - [ ] Boundary refinement
  - [ ] Error correction
  - [ ] Updated survey data
  - [ ] Other: _______

## Justification
<!-- Why should this change be made? -->

Provide clear evidence such as:
- Field observations from [date]
- Published study: [citation]
- Historical records or survey data
- Updated official polygons (specify version/date)
- Measurement discrepancies that justify the change

## Supporting Evidence
<!-- Attach or link to supporting materials -->

- [ ] Field visit notes (date: _______)
- [ ] Publication or report
- [ ] Official update announcement
- [ ] Historical maps or surveys
- [ ] Photos or site documentation
- [ ] Attached before/after comparison

## Impact Analysis
- **Area Change:** [X]% ± [uncertainty]%
- **Jaccard Similarity Index:** [J value]
- **Features Affected:** (Will changing this polygon affect any derivatives? Which?)
  - [ ] Specific discharge calculations
  - [ ] Flood frequency analysis
  - [ ] Land use percentages
  - [ ] Precipitation inputs
  - [ ] Other: _______

## Data Quality Check
- [ ] New polygon is valid GeoJSON (no self-intersections)
- [ ] Station point falls within polygon
- [ ] Computed area matches stated area (within 5%)
- [ ] Coordinates valid for Canada (lat/lon bounds)
- [ ] Polygon topology verified
- [ ] No overlaps or gaps with neighboring catchments (if applicable)

## Acceptance Criteria
- [ ] Polygon passes all QA checks
- [ ] Change justified by credible evidence
- [ ] Impact on derivatives is understood and acceptable
- [ ] Community review shows support
- [ ] Documentation is complete and clear

## Related Issues & References
<!-- Link to related discussions, issues, or pull requests -->
- Discussion: #[number]
- Closes: #[number] (if this completes an existing issue)
- Related to: #[number]

## Additional Notes
<!-- Any other relevant information? -->
