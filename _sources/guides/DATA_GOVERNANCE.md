# Data Governance and Quality Tiers

This document defines quality tiers, validation requirements, and governance policies for station data in the Camel Farrier demonstration repository.

## Quality Tiers

Each committed version of station data is assigned a **quality tier** indicating its review status and suitability for different use cases.

### Tier 1: Canonical

**Description**: Peer-reviewed, authoritative version suitable for publication and citation

**Validation Requirements**:
- ✅ All automated validation checks passed
- ✅ Reviewed by qualified domain expert
- ✅ External polygon comparisons documented with metrics
- ✅ Metadata complete and accurate
- ✅ Data provenance fully traceable
- ✅ Known limitations documented

**Use Cases**:
- Scientific publications
- Professional practice
- Reference datasets for model calibration
- Long-term archival

**Promotion Criteria**:
1. Must start from "reviewed" tier
2. Requires explicit peer review (documented in git commit message)
3. External polygon comparisons must show Jaccard Index ≥ 0.85 OR documented explanation for discrepancies
4. All QC checks in `_qc_status.json` must be "passed"

**Badge Color**: 🟢 Green

---

### Tier 2: Reviewed

**Description**: Quality assurance passed, suitable for analysis and operational use

**Validation Requirements**:
- ✅ All automated validation checks passed
- ✅ QC review completed (documented in `_qc_status.json`)
- ✅ Known issues documented in changelog
- ✅ Data completeness verified (RCs, corrections, field visits present)
- ✅ Polygon geometry valid (no self-intersections, proper CRS)

**Use Cases**:
- Operational hydrological analyses
- Internal reports
- Exploratory data analysis
- Model testing and development

**Promotion Criteria**:
1. All validation checks in `_qc_status.json` return "passed" or "warning" status
2. QC review completed by automated validator or manual reviewer
3. No "failed" validation checks

**Badge Color**: 🔵 Blue

---

### Tier 3: Experimental

**Description**: Trial version for testing, use with caution

**Validation Requirements**:
- ✅ Basic validation checks passed (geometry valid, files readable)
- ⚠️ May contain unreviewed changes
- ⚠️ External comparisons may not be complete
- ⚠️ Suitable for exploratory analysis only

**Use Cases**:
- Testing new polygon sources
- Prototype workflows
- Learning and demonstration
- Pre-review drafts

**Promotion Criteria**:
1. Minimum: geometry valid, no syntax errors in metadata
2. Default tier for new commits unless explicitly specified otherwise

**Badge Color**: 🟠 Orange

---

### Tier 4: Superseded

**Description**: Older version replaced by newer data, kept for audit trail

**Validation Requirements**:
- 📋 No active validation requirements
- 📋 Maintained for reproducibility only
- 📋 Not recommended for new analyses

**Use Cases**:
- Historical reference
- Reproducibility of published analyses
- Audit trail
- Understanding data evolution

**Demotion Criteria**:
1. Automatically applied when a new version with higher quality tier is committed
2. Previous "canonical" and "reviewed" versions become "superseded"
3. Can be manually set via commit message: `quality_tier: superseded`

**Badge Color**: ⚫ Gray

---

## Version Lifecycle

```
┌─────────────────┐
│  Initial Commit │  → Experimental (default)
└────────┬────────┘
         │
         ├─→ QC Review → Reviewed
         │   (automated or manual)
         │
         └─→ Peer Review → Canonical
             (requires expert review)

When new version committed:
Previous Canonical → Superseded
Previous Reviewed → Superseded
```

---

## Validation Checks

### Automated Checks (in `_qc_status.json`)

1. **Data Completeness**
   - Rating curves file present (`{STATION_ID}_RCs.csv`)
   - Corrections file present (`{STATION_ID}_corrections.csv`)
   - Field visits file present (`{STATION_ID}_field_visits.csv`)
   - No missing required files

2. **Polygon Bounds**
   - Polygon file present (`.geojson`)
   - Valid CRS (EPSG:4326 expected)
   - Geometry valid (no self-intersections, proper topology)
   - Area within reasonable range for station catchment

3. **Hydrometric Continuity**
   - No unexplained temporal gaps in discharge/level data
   - Data quality flags reviewed
   - Outliers documented

4. **Metadata Completeness**
   - Station name present
   - Drainage area documented
   - Coordinates valid
   - All required fields in `_metadata.json` populated

### Manual Review Checklist

For promotion to **Reviewed** tier:
- [ ] Visual inspection of polygon boundaries
- [ ] Cross-check drainage area against HYDAT database
- [ ] Verify field visit records align with data corrections
- [ ] Review rating curve applicability dates

For promotion to **Canonical** tier:
- [ ] Domain expert review of polygon delineation
- [ ] Comparison with peer datasets (HYSETS, Caravan) documented
- [ ] Justification for any significant discrepancies
- [ ] Literature review for catchment characteristics
- [ ] Peer review documented in PR or commit message

---

## Commit Message Format

To ensure proper version tracking and quality tier assignment, follow these conventions:

### Station Update (Single Station)

```
[station_update] 05MA022: Updated polygon from WSC 2024 release (source: WSC_2024, quality_tier: reviewed)
```

### Bulk Update (Multiple Stations)

```
[bulk_update] Region-05: Updated polygons for BC stations (stations: 05MA022, 05LL013, 05NG027) (source: WSC_2024, quality_tier: experimental)
```

### Skip Version Tracking

```
[skip-version] Fixed typo in README
```

### Metadata Fields in Commit Messages

- `source:` Data source (WSC_2024, WSC_2021-12, HYSETS, Caravan, field_correction, etc.)
- `quality_tier:` Target quality tier (canonical, reviewed, experimental, superseded)
- `stations:` Comma-separated list of station IDs (for bulk updates)

---

## External Polygon Comparisons

### Required Metrics

When documenting comparisons with external datasets (HYSETS, Caravan), include:

1. **Jaccard Similarity Index (JSI)**: Intersection-over-union metric
   - JSI ≥ 0.95: Excellent agreement
   - 0.85 ≤ JSI < 0.95: Good agreement, minor boundary differences
   - 0.70 ≤ JSI < 0.85: Moderate differences, requires investigation
   - JSI < 0.70: Significant discrepancies, expert review required

2. **Area Delta**: Percentage and absolute differences
   - |Δ%| < 5%: Acceptable variation
   - 5% ≤ |Δ%| < 15%: Moderate difference, document reasons
   - |Δ%| ≥ 15%: Major discrepancy, requires explanation

3. **Notes**: Qualitative description of differences
   - Boundary differences location (headwaters, outlet, tributary junctions)
   - Potential causes (DEM resolution, delineation method, data vintage)
   - Impact on hydrological analyses

### DOI References

Always include DOI when referencing external datasets:

- **HYSETS**: `10.17605/OSF.IO/RPC3W`
- **Caravan**: `10.5281/zenodo.15529786`

---

## Version Metadata Schema

### Required Fields in `_versions.json`

```json
{
  "commit_sha": "full_40_character_git_hash",
  "commit_sha_short": "7_char_short_hash",
  "semantic_tag": "WSC-2024-v1",
  "timestamp": "ISO8601_timestamp",
  "author": "git_commit_author",
  "source_dataset": "WSC_2024|WSC_2021-12|HYSETS|Caravan|field_correction",
  "quality_tier": "canonical|reviewed|experimental|superseded",
  "validation_status": "passed_checks|failed_checks|needs_review",
  "changelog": "Brief description of changes",
  "external_polygon_comparisons": [
    {
      "dataset": "HYSETS",
      "dataset_doi": "10.17605/OSF.IO/RPC3W",
      "jsi": 0.87,
      "area_delta_pct": -2.3,
      "notes": "Boundary differences in headwaters"
    }
  ]
}
```

---

## Responsibilities

### Data Contributor
- Follow commit message conventions
- Run QC checks before committing
- Document known issues in changelog
- Request appropriate quality tier

### QC Reviewer
- Verify validation checks passed
- Review polygon overlays visually
- Document findings in `_qc_status.json`
- Approve or request revisions

### Domain Expert (for Canonical tier)
- Review catchment delineation methodology
- Validate against field knowledge
- Approve external comparisons
- Document review in git commit or PR

---

## Governance Workflow

### Individual Contribution (PR-based)

1. Contributor edits station data
2. Contributor runs `populate_qc_status.py --station {ID}`
3. Automated validators populate `_qc_status.json`
4. Contributor creates Pull Request
5. Reviewer examines `_qc_status.json` in PR diff
6. Reviewer approves or requests changes
7. Upon merge, post-commit hook creates version entry in `_versions.json`
8. Diagnostic pages auto-generated showing version history

### Agency Bulk Update

1. Agency updates N stations from official release
2. Agency runs `populate_qc_status.py --bulk region-XX`
3. Single commit updates all stations: `[bulk_update] ...`
4. Post-commit hook adds same commit SHA to all affected `_versions.json` files
5. Collective CHANGELOG.md updated with bulk change
6. Diagnostic pages regenerated for all affected stations

---

## Versioning Best Practices

1. **Commit Early, Commit Often**: Each logical change should be its own commit
2. **Semantic Tags for Citations**: Use semantic tags (not SHAs) in publications for readability
3. **Immutable SHAs for Reproducibility**: Always store commit SHA for exact reproducibility
4. **Persist QC Records**: Keep `_qc_status.json` in repository for audit trail
5. **Document Rationale**: Use commit messages and changelog to explain why changes were made
6. **Link External Data**: Always include DOI for external datasets used in comparisons

---

## Quality Tier Statistics

Track repository health with version quality metrics:

```python
# Example: Count versions by quality tier
from scripts.quality_assurance.version_utils import load_versions

stations = ['05MA022', '07DB005', ...]
tier_counts = {'canonical': 0, 'reviewed': 0, 'experimental': 0, 'superseded': 0}

for station_id in stations:
    versions = load_versions(station_id)
    for version in versions['versions']:
        tier = version['quality_tier']
        tier_counts[tier] += 1
```

---

**Last Updated**: February 3, 2026
**Schema Version**: 1.0.0
**Maintainer**: See [CONTRIBUTING](../CONTRIBUTING.md)
