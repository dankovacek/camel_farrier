# Data Specification for Camel Farrier

## When to Use This Guide

**Consult this reference when:**
- Creating custom data exports from Water Office
- Debugging validation errors
- Understanding CSV column definitions
- Interpreting JSON metadata structures
- Planning data integration for new stations

**This is reference documentation** — not a workflow guide. For step-by-step instructions, see:
- [Environment Setup](setup.md) — First-time configuration
- [Data Population](data_population.md) — Data initialization and polygon integration
- [Workflow Documentation](workflow.md) — Page generation and building

## Overview

This document defines the schema and format requirements for hydrometric data in the Camel Farrier demonstration repository. All station data is extracted from the Water Office portal export (`WaterOffice_RC_Export_*.zip`) and organized into individual station folders.

## Data Organization

Station data is organized hierarchically:

```
demo_data/stations/
└── {STATION_ID}/
    ├── _metadata.json                    # Station metadata from HYDAT
    ├── _versions.json                    # Version history and provenance
    ├── _qc_status.json                   # Quality control status
    ├── _data_sources.json                # Data source attribution
    ├── {STATION_ID}_corrections.csv      # Data corrections
    ├── {STATION_ID}_field_visits.csv     # Field visit records
    ├── {STATION_ID}_RCs.csv              # Rating curves
    └── {STATION_ID}_polygon_v*.geojson   # Catchment boundary (local files only)
```

## CSV Data Schemas

### 1. Corrections

**Source:** Water Office Portal export

**File Pattern:** `{STATION_ID}_corrections.csv`

**Columns:**

| Column | EN Header | FR Header | Data Type | Required | Notes |
|--------|-----------|-----------|-----------|----------|-------|
| 1 | Station ID | Identification de la station | String | Yes | WSC 7-char station code (e.g., "07DB005") |
| 2 | Correction Type | Type de correction | String | Yes | Type of correction applied (e.g., "Shift", "Offset") |
| 3 | Data Type | Type de données | String | Yes | Which parameter: "Discharge", "Level", etc. |
| 4 | Start Time (UTC) | Heure de début (TUC) | ISO 8601 DateTime | Yes | Correction effective start date-time |
| 5 | End Time (UTC) | Heure de fin (TUC) | ISO 8601 DateTime | No | Correction end date (if correction expired) |
| 6 | Applied Time (UTC) | Temps appliqué (TUC) | ISO 8601 DateTime | Yes | When correction was entered/applied |
| 7 | Timezone Offset | Décalage Horaire | String | Yes | Station timezone offset (e.g., "-05:00") |
| 8 | Comment | Commentaire | String | No | Explanation of correction rationale |
| 9 | Settings | Paramètre | String | No | Technical parameters of correction |
| 10 | Parameters Processing Order | Ordre d'application des paramètres | String | No | Execution order for stacked corrections |

**Validation Rules:**
- All timestamps must be in UTC (Z or +00:00 designation)
- Start Time must be before or equal to End Time (if End Time present)
- Station ID must match parent directory name

---

### 2. Field Visits

**Source:** Water Office Portal export

**File Pattern:** `{STATION_ID}_field_visits.csv`

**Columns:**

| Column | EN Header | FR Header | Data Type | Required | Notes |
|--------|-----------|-----------|-----------|----------|-------|
| 1 | Station ID | Identification de la station | String | Yes | WSC 7-char station code |
| 2 | Date (UTC) | Date (TUC) | ISO 8601 Date | Yes | Field visit date in UTC |
| 3 | Timezone Offset | Décalage Horaire | String | Yes | Station timezone offset |
| 4 | Activity Type | Type d'activité | String | Yes | Measurement type (e.g., "Discharge", "Level") |
| 5 | Gauge Height | Niveau | Float | No | Water level measurement (units: meters or feet as recorded) |
| 6 | Mean Gauge Height | Niveau Moyen | Float | No | Average gauge height across measurement section |
| 7 | Discharge | Débit | Float | No | Measured streamflow (units: m³/s or ft³/s as recorded); **must be ≥ 0** |
| 8 | Rating Curve Table Number | Numéro de courbe de tarage | String | No | Which rating curve was used for reference |
| 9 | Shift From Base Curve | Décalage par rapport à la courbe de base | Float | No | Vertical shift applied to rating curve (units: meters or feet) |
| 10 | Deviation From Base Curve | Déviation par rapport à la courbe de base | Float | No | Measured deviation from base curve estimate |
| 11 | Deviation From Shifted Curve | Déviation par rapport à la courbe décalée | Float | No | Measured deviation from shifted curve estimate |
| 12 | Control Condition | Condition de contrôle | String | No | Control type at measurement section (e.g., "Stable", "Shifting", "Ice") |
| 13 | Control Condition Remarks | Remarques sur la condition de contrôle | String | No | Notes about control conditions |
| 14 | Activity Remarks | Remarques des activités | String | No | General field notes and observations |
| 15 | Width | Largeur | Float | No | Measured channel width (units: meters or feet) |
| 16 | Area | Secteur | Float | No | Measured cross-sectional area (units: m² or ft²) |
| 17 | Velocity | Vitesse | Float | No | Measured mean velocity (units: m/s or ft/s) |
| 18 | Air Temperature | Température de l'air | Float | No | Air temperature during measurement (units: °C or °F as recorded) |
| 19 | Water Temperature | La température de l'eau | Float | No | Water temperature during measurement (units: °C or °F as recorded) |
| 20 | Approval | Approbation | String | No | Approval status (e.g., "Approved", "Pending Review") |
| 21 | Uncertainty | Incertitude | Float | No | Estimated measurement uncertainty (typically percent or absolute units) |

**Validation Rules:**
- All dates must be in ISO 8601 format
- Discharge values must be ≥ 0 (no negative flows)
- Date must be parseable and within reasonable historical range (station establishment date onwards)

---

### 3. Rating Curves

**Source:** Water Office Portal export

**File Pattern:** `{STATION_ID}_RCs.csv`

**Columns:**

| Column | EN Header | FR Header | Data Type | Required | Notes |
|--------|-----------|-----------|-----------|----------|-------|
| 1 | Station ID | Identification de la station | String | Yes | WSC 7-char station code |
| 2 | Curve Number | Numéro de courbe | String | Yes | Unique identifier for this rating curve (e.g., "1", "2.1") |
| 3 | Remarks | Remarques | String | No | Notes about curve development, validity period, method |
| 4 | Type | Catégorie | String | Yes | Curve type (typically "LinearTable" for stage-discharge tables) |
| 5 | Approval | Approbation | String | No | Approval status (e.g., "Approved", "Working") |
| 6 | Offset | Décalage | Float | No | Vertical shift or datum offset applied to curve (units: meters or feet) |

**Validation Rules:**
- Station ID must match parent directory name
- Curve Number must be unique within station file
- Type field determines how curve is interpreted (LinearTable = tabular stage-discharge pairs)

---

## Provenance and Attribution

### `_data_sources.json` Schema

Each station maintains a `_data_sources.json` file documenting the source and retrieval method for each data type:

```json
{
  "station_id": "07DB005",
  "data_sources": [
    {
      "data_type": "corrections",
      "source": "WaterOffice_RC_Export",
      "source_version": "20260203",
      "doi": "10.xxxx/xxxxx",
      "extraction_date": "2026-02-03",
      "retrieval_method": "Water Office Portal authenticated export",
      "file_path": "07DB005_corrections.csv",
      "record_count": 24,
      "checksum_sha256": "abc123...",
      "notes": "Extracted from Water Office portal on 2026-02-03"
    },
    {
      "data_type": "field_visits",
      "source": "WaterOffice_RC_Export",
      "source_version": "20260203",
      "doi": "10.xxxx/xxxxx",
      "extraction_date": "2026-02-03",
      "retrieval_method": "Water Office Portal authenticated export",
      "file_path": "07DB005_field_visits.csv",
      "record_count": 156,
      "checksum_sha256": "def456...",
      "notes": "Field visit records from operational monitoring"
    },
    {
      "data_type": "rating_curves",
      "source": "WaterOffice_RC_Export",
      "source_version": "20260203",
      "doi": "10.xxxx/xxxxx",
      "extraction_date": "2026-02-03",
      "retrieval_method": "Water Office Portal authenticated export",
      "file_path": "07DB005_RCs.csv",
      "record_count": 3,
      "checksum_sha256": "ghi789...",
      "notes": "Stage-discharge relationships for discharge estimation"
    }
  ]
}
```

### `_versions.json` Schema

Version history tracks polygon source, quality tier, and commit metadata with graph-structured comparisons:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "description": "Version history for station data",
  "station_id": "07AF010",
  "schema_version": "1.0.0",
  "current_version": "v1.1.0",
  "version_count": 2,
  "first_committed": "2026-02-05T14:50:35.707820",
  "last_updated": "2026-02-05T14:51:01.688377",
  "versions": [
    {
      "semantic_tag": "v1.0.0",
      "timestamp": "2026-02-05T14:50:35.707820",
      "data_source": "WSC_basins",
      "polygon_file": "07AF010_polygon_v1.0.0.geojson",
      "source_metadata": {
        "StationNum": "07AF010",
        "NameNom": "SUNDANCE CREEK NEAR BICKERDIKE",
        "Status": "active",
        "Etat": "en service",
        "Area_km2": "177.597",
        "Aire_km2": "177.597",
        "Version": "Prerelease/Préliminaire",
        "Date": "2021-12-17"
      }
    },
    {
      "semantic_tag": "v1.1.0",
      "timestamp": "2026-02-05T14:51:01.688377",
      "data_source": "HYDAT_polygons",
      "polygon_file": "07AF010_polygon_v1.1.0.geojson",
      "source_metadata": {
        "StationNum": "07AF010",
        "NameNom": "SUNDANCE CREEK NEAR BICKERDIKE",
        "Status": "active",
        "Area_km2": 177.614,
        "Version": "June 2024 / juin 2024",
        "Date_rev": "2024-06-01",
        "Shape_Leng": 134760.0,
        "Shape_Area": 177614100.0
      }
    }
  ],
  "comparisons": {
    "v1.0.0_vs_v1.1.0": {
      "computed_at": "2026-02-05T14:51:01.688377",
      "jaccard_index": 0.9994,
      "old_area_km2": 177.597,
      "new_area_km2": 177.6134,
      "absolute_area_diff_km2": 0.0164,
      "percent_area_diff": 0.01
    }
  }
}
```

**Key Fields:**
- `versions[]`: Array of version entries (clean, no embedded comparisons)
- `versions[].source_metadata`: All original GeoJSON properties from source file
- `comparisons{}`: Graph-structured comparison metrics keyed by version pair (e.g., `v1.0.0_vs_v1.1.0`)
- `comparisons[].jaccard_index`: Geometric overlap (0-1 scale, computed using LAEA projection)
- `comparisons[].percent_area_diff`: Percent change in catchment area

**Interpretation:**
- Jaccard Index > 0.99: Minimal change (likely coordinate precision or projection difference)
- Jaccard Index 0.90-0.99: Minor revision (boundary refinement)
- Jaccard Index < 0.90: Substantial revision (significant boundary change)

### `_qc_status.json` Schema

Quality control status tracking for data validation and review workflow:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "description": "Quality control status for station data during review",
  "station_id": "07AF010",
  "qc_date": "2026-02-05T14:50:35.715215",
  "reviewed_by": "automated_setup",
  "overall_status": "needs_revision",
  "validator_version": "1.0.0",
  "validation_checks": {
    "data_completeness": {
      "status": "passed",
      "rating_curves_present": true,
      "corrections_present": true,
      "field_visits_present": true,
      "missing_files": [],
      "notes": ""
    },
    "polygon_bounds": {
      "status": "passed",
      "polygon_file_present": true,
      "crs_valid": true,
      "geometry_valid": true,
      "area_km2": 504.8,
      "notes": ""
    },
    "hydrometric_continuity": {
      "status": "warning",
      "temporal_gaps": [],
      "data_quality_flags": [],
      "record_length_years": 52.2,
      "notes": "13,815 daily observations, seasonal gaps: 101 days avg (N=52) | 26.9% flagged (backwater: 3447, estimated: 212, partial day: 51)"
    },
    "metadata_completeness": {
      "status": "passed",
      "required_fields_present": true,
      "station_name": true,
      "drainage_area": true,
      "coordinates": true,
      "notes": ""
    }
  },
  "qc_notes": "No issues detected - all required data present",
  "next_steps": "Ready for review",
  "created_timestamp": "2026-02-05T14:50:35.715220",
  "last_modified": "2026-02-05T14:50:35.715221"
}
```

**Key Fields:**
- `overall_status`: "passed", "warning", "needs_revision", "failed"
- `validation_checks{}`: Dict of check categories with individual status
- `hydrometric_continuity.notes`: Free-text summary of temporal coverage and quality flags

**Hydrometric Continuity Notes Format:**
Pattern: `{N} daily observations, seasonal gaps: {avg_days} days avg (N={gap_count}) | {pct}% flagged ({flag_type}: {count}, ...)`

Example interpretations:
- "13,815 daily observations": Total record length
- "seasonal gaps: 101 days avg (N=52)": 52 gaps averaging 101 days (winter freeze-up)
- "26.9% flagged": Over 1/4 of observations have quality flags
- "backwater: 3447": Ice/backwater affected readings (common in winter)
- "estimated: 212": Gap-filled estimates from rating curve
- "partial day: 51": Incomplete daily records

---

## Data Initialization Workflow

See [Data Population Guide](data_population.md) for step-by-step instructions on extracting and organizing data from the Water Office export.

---

## References

Water Survey of Canada. Water Office Portal. Government of Canada. Accessed 2026-02-03.
