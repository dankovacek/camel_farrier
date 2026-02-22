---
name: Data Correction
about: Report data quality issues or corrections needed
title: "Fix [data type] for [STATION_ID] - [brief description]"
labels: ['data-quality', 'bug']
assignees: []
---

## Problem Statement
<!-- What's the issue? Be specific and clear. -->

## Location
- **Station(s):** [STATION_ID] or [multiple IDs]
- **Data Type:** (Select one)
  - [ ] Water Level
  - [ ] Discharge
  - [ ] Rating Curve
  - [ ] Metadata
  - [ ] Field Visit Records
  - [ ] Polygon/Boundary
  - [ ] Other: _______
- **Date Range:** [Start date] to [End date], or [specific date]

## Evidence
<!-- What demonstrates that there's a problem? -->

Provide supporting documentation:
- Field visit notes from [date]: _______
- Manual measurement or observation: _______
- Publication or reference: _______
- Instrument error record: _______
- Photo or field documentation: _______
- Data comparison showing inconsistency: _______

## Proposed Solution
<!-- What should the data be instead? -->

Current value: _______
Proposed value: _______

Justification: _______

## Verification
<!-- How can we verify that the fix is correct? -->

- [ ] Cross-checked against HYDAT or official source
- [ ] Compared with field measurements
- [ ] Verified with publication or reference
- [ ] Confirmed by subject matter expert
- [ ] Other: _______

## Impact Assessment
- **Affected Records:** [X] record(s)
- **Impact:** (e.g., 10% change in specific discharge, shifts trend analysis, etc.)
  _______

## Quality Assurance
- [ ] Original value preserved (for audit trail)
- [ ] Corrected value has supporting documentation
- [ ] Related records checked for consistency
- [ ] Uncertainty estimates or flags updated
- [ ] Quality flag set appropriately (A/D/R)

## Acceptance Criteria
- [ ] Correction is documented with evidence
- [ ] Original value preserved in version history
- [ ] Updated value is demonstrably accurate
- [ ] Related records are consistent with correction
- [ ] No unintended side effects on derivatives

## References
- Related discussion: #[number]
- Related issue: #[number]
- Closes: #[number] (if resolving an existing issue)

## Additional Notes
