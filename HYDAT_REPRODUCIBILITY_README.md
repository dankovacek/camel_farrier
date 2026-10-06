# HYDAT daily flow revision example

This package demonstrates detection of revisions to previously published daily
mean flows between the July 15, 2025 and July 17, 2026 HYDAT releases. It supports
the open enhancement workflow documented in
[Camel Farrier issue #4](https://github.com/dankovacek/camel_farrier/issues/4).


## Archive and implementation

- Package version: `1.0.0`
- Author: Dan Kovacek, University of British Columbia, ORCID: 0000-0001-7882-8586
- Zenodo version-specific DOI: 10.5281/zenodo.23174489
- Repository: https://github.com/dankovacek/camel_farrier
- Implementation commit: [ADD: full Git commit SHA]
- Pull request: [ADD: PR URL; if not yet available, state this]
- Python version used: 3.12.3
- Operating system used: Ubuntu 24.04.5 LTS
- Archive verification date: 2026-10-05

The comparison script uses only the Python standard library. Use Python 3.12 or
later; no third-party packages are required for this workflow.

## Source data and provenance

HYDAT is produced by the Water Survey of Canada, Environment and Climate Change
Canada (WSC/ECCC). The databases are redistributed unchanged.

Official source: [Water Survey of Canada HYDAT](https://www.canada.ca/en/environment-climate-change/services/water-overview/quantity/monitoring/survey/data-products-services/national-archive-hydat.html)

| Item | Earlier release | Later release |
|---|---|---|
| Release date | 2025-07-15 | 2026-07-17 |
| Original filename | `Hydat.sqlite3` | `Hydat.sqlite3` |
| Archive folder | `inputs/Hydat_sqlite3_20250715/` | `inputs/Hydat_sqlite3_20260717/` |
| Download date | "2025-07-21" | "2026-10-05" |
| Download URL or acquisition source | https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/ | https://collaboration.cmc.ec.gc.ca/cmc/hydrometrics/www/ |

Internal version metadata is recorded automatically in `results/comparison_summary.json`.
SHA-256 checksums are provided in `SHA256SUMS`.

## Package contents

```text
Hydat_revision_comparison_example/
├── README.md
├── SHA256SUMS
├── inputs/
│   ├── Hydat_sqlite3_20250715/
│   │   └── Hydat.sqlite3
│   └── Hydat_sqlite3_20260717/
│       └── Hydat.sqlite3
├── scripts/
│   ├── __init__.py
│   └── hydat_version_comparison.py
└── results/
    ├── affected_stations.csv
    └── comparison_summary.json
```

## Reproduce the comparison

Extract the archive and run these commands from `Hydat_revision_comparison_example/`.
On systems where Python is invoked as `python3`, substitute that for `python`.

### 1. Verify the package files

On Linux:

```bash
sha256sum -c SHA256SUMS
```

On macOS:

```bash
shasum -a 256 -c SHA256SUMS
```

Every listed file should report `OK`. Do not proceed if checksums differ.

### 2. Compare the archived releases

```bash
python scripts/hydat_version_comparison.py \
    --earlier inputs/Hydat_sqlite3_20250715 \
    --later inputs/Hydat_sqlite3_20260717 \
    --output-dir reproduced_results
```

Explicit paths override the developer-specific defaults in the script.
Both databases are opened read-only. Existing files in the specified output
directory are replaced.

### 3. Verify the results

| Result | Expected value |
|---|---:|
| Earlier stations with daily flow records | 6,450 |
| Stations with numerical revisions | 91 |
| Revised daily observations | 69,961 |
| Stations with removals | 0 |
| Removed daily observations | 0 |

Compare the station-level CSV:

```bash
diff results/affected_stations.csv reproduced_results/affected_stations.csv
```

**No output indicates files are identical**. If line endings differ between operating
systems, compare the parsed CSV rows instead.

The reproduced `comparison_summary.json` should agree with the archived summary
on release metadata, comparison rules, and counts. Input paths and completion
timestamps depend on the execution environment and are expected to differ.

## Comparison rules and interpretation

- Match daily mean flows by station and valid calendar date.
- Consider only non-missing flow values present in the earlier release.
- Count numerically unequal earlier/later values as revisions, without rounding
  or tolerance.
- Count an earlier value absent from the later release as a removal, including
  values whose entire monthly row disappeared.
- Exclude newly added observations, quality-symbol-only changes, monthly
  summaries, water levels, and instantaneous flows.
- Include zero flows and respect month lengths and leap years.

`affected_stations.csv` contains station identifiers, revision/removal counts,
and the first and last affected dates. `comparison_summary.json` records source
paths, release metadata, comparison rules, completion time, and aggregate counts.

Detected differences do not establish their causes, correctness, or hydrological
significance. Comparing two snapshots identifies changes between releases, not
when individual changes occurred within that interval.

## Licensing and attribution

- HYDAT databases: sourced from WSC/ECCC's public download directory. No licence
  file accompanied these downloads; applicable redistribution terms have not yet
  been verified. The package's CC BY 4.0 licence does not apply to these databases.
- Comparison script and tests: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), as specified in the repository `LICENSE`.
- This README and derived comparison results: CC BY 4.0.

Licences apply to the specified components; a licence for the code or derived
results does not replace the HYDAT source licence. WSC/ECCC supplied the source
data and does not necessarily endorse this analysis.

## Citation

Kovacek, Daniel (2026). *HYDAT daily flow revision example:
July 2025 to July 2026* (Version 1.0.0) [Reproducibility package]. Zenodo.
https://doi.org/10.5281/zenodo.23174489

