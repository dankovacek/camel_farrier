# Contributing to Camel Farrier

Thank you for your interest in contributing to the Camel Farrier hydrometric data repository! This document provides guidelines for contributing data corrections, polygon revisions, and code improvements.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Data Contribution Guidelines](#data-contribution-guidelines)
- [Pull Request Process](#pull-request-process)
- [Quality Standards](#quality-standards)
- [Contact](#contact)

## Code of Conduct

This project is committed to providing a welcoming and inclusive environment. We expect all contributors to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

1. **Data Corrections** - Corrections to hydrometric data, rating curves, or field visit records
2. **Polygon Revisions** - Improved catchment boundary delineations with documented rationale
3. **New Station Data** - Addition of new monitoring stations with complete metadata
4. **Documentation** - Improvements to guides, specifications, or examples
5. **Code Improvements** - Bug fixes, feature enhancements, or workflow optimizations
6. **Quality Assurance** - Validation improvements or test enhancements

### Getting Started

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/camel_farrier.git
   cd camel_farrier
   ```
3. **Set up your environment** following the [Getting Started](book_docs/guides/user_guide.md) guide
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-contribution-name
   ```

## Data Contribution Guidelines

### Polygon Revisions

When submitting improved catchment boundaries:

1. **Document your methodology** in the commit message or PR description
2. **Include comparison metrics** (Jaccard Index, area difference) with existing polygons
3. **Provide data sources** used for delineation (DEM resolution, software, parameters)
4. **Run validation checks** before submitting (see Quality Standards section)
5. **Ensure GeoJSON validity** (no self-intersections, correct CRS: EPSG:4326)

**File naming convention:**
```
{STATION_ID}_polygon_v{VERSION}.geojson
```

Example: `08NM134_polygon_v2.geojson`

### Data Corrections

When submitting corrections to hydrometric data:

1. **Verify against authoritative sources** (Water Office Portal, HYDAT database)
2. **Document the rationale** for corrections in the PR description
3. **Follow CSV schemas** defined in [Data Specification](book_docs/guides/data_specification.md)
4. **Include date ranges** affected by corrections
5. **Run validation checks** before submitting:
   ```bash
   python tools/validate_station.py --station {STATION_ID}
   ```

### Metadata Updates

For station metadata changes:

1. **Update `_metadata.json`** with new information
2. **Verify against HYDAT** database when possible
3. **Document source** of metadata changes
4. **Include retrieval date** for external data sources

## Pull Request Process

### Before Submitting

- [ ] **Run validation checks:**
  ```bash
  pytest -q
  python tools/validate_data.py
  ```
- [ ] **Update documentation** if workflows or schemas change
- [ ] **Review the diff** to ensure no unintended changes are included
- [ ] **Write clear commit messages** describing what and why
- [ ] **Reference related issues** using GitHub keywords (Closes #123)

### PR Template

When creating a pull request, please use the provided template and include:

1. **Summary of changes** - What was modified and why
2. **Type of change** - Data correction, new feature, documentation, etc.
3. **Quality assurance checklist** - Validation results, testing performed
4. **Related issues** - Link to any related GitHub issues
5. **Additional context** - Screenshots, external references, or methodology notes

### Review Process

1. **Automated checks** will run on your PR (linting, tests, validation)
2. **Maintainer review** will assess data quality and adherence to standards
3. **Feedback incorporation** - Address any requested changes
4. **Approval and merge** - Once approved, your contribution will be merged

### After Merge

- Your contribution will be recorded in the version history
- Diagnostic pages will be automatically regenerated
- Changes will be reflected in the next release

## Quality Standards

### Validation Requirements

All contributions must:

- ✅ Pass automated validation checks
- ✅ Include complete metadata and provenance
- ✅ Follow established naming conventions
- ✅ Use consistent units and coordinate systems
- ✅ Document data sources and methods

**Running validation:**

```bash
# Validate specific station
python tools/validate_station.py --station {STATION_ID}

# Validate all data
python tools/validate_data.py

# Run full test suite
pytest -q
```

See [Data Validation and Version Control](book_docs/guides/DATA_GOVERNANCE.md) for detailed technical validation specifications.

## Commit Message Guidelines

Use clear, descriptive commit messages:

**Good examples:**
```
Add polygon v2 for 08NM134 from HYSETS comparison
Fix rating curve discontinuity in 07DB005 (2015-2018)
Update DATA_SOURCES.md with HYDAT version 2026-01-16
```

**Poor examples:**
```
Update file
Fix bug
Changes
```

### Commit Message Format

```
<type>: <short summary>

<optional detailed description>

<optional footer with issue references>
```

**Types:**
- `data:` - Data corrections or additions
- `polygon:` - Catchment boundary revisions
- `docs:` - Documentation changes
- `feat:` - New features
- `fix:` - Bug fixes
- `test:` - Test additions or modifications
- `refactor:` - Code restructuring without behavior changes

## Issue Reporting

Found a problem? Please open an issue using the appropriate template:

- **[Data Correction](/.github/ISSUE_TEMPLATE/data_correction.md)** - Errors in hydrometric data
- **[Polygon Revision](/.github/ISSUE_TEMPLATE/polygon_revision.md)** - Catchment boundary improvements
- **[Data Quality](/.github/ISSUE_TEMPLATE/data-quality.md)** - Quality concerns or validation failures
- **[Bug Report](/.github/ISSUE_TEMPLATE/bug_report.md)** - Code or workflow issues
- **[Documentation](/.github/ISSUE_TEMPLATE/documentation.md)** - Documentation improvements

## Development Workflow

### Local Development

1. **Create a virtual environment:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r book_docs/requirements.txt
   ```

3. **Run tests:**
   ```bash
   pytest -q
   ```

4. **Build documentation locally:**
   ```bash
   cd book_docs/
   jupyter-book build .
   open _build/html/index.html
   ```

### Code Style

- **Python:** Follow PEP 8 style guidelines
- **Formatting:** Use `black` for code formatting
- **Linting:** Run `pre-commit run --all-files` before committing
- **Type hints:** Include type annotations for function signatures

## Data Sources and Attribution

When contributing data derived from external sources:

1. **Cite the original source** in metadata or commit messages
2. **Respect data licenses** and usage restrictions
3. **Include retrieval dates** for time-sensitive datasets
4. **Document processing steps** if data was transformed

See [DATA_SOURCES.md](demo_data/DATA_SOURCES.md) for comprehensive provenance documentation.

## Contact

- **Maintainer:** Dan Kovacek
- **Repository:** https://github.com/dankovacek/camel_farrier
- **Issues:** https://github.com/dankovacek/camel_farrier/issues

For questions not covered in this guide, please open a discussion on GitHub or contact the maintainer.

---

Thank you for contributing to Camel Farrier! Your efforts help improve hydrometric data quality and accessibility for the research and practitioner community.
