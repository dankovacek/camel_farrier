"""Find revisions to previously published daily mean flows in two HYDAT files.

Only non-NULL flows in the earlier release are eligible. Numerical revisions
and removals are reported separately; additions and symbol changes are ignored.
Edit EARLIER_FOLDER and LATER_FOLDER below, then run this script without arguments.
"""

import argparse
import calendar
import csv
from dataclasses import asdict, dataclass
from datetime import date, datetime, timezone
import json
from pathlib import Path
import sqlite3


# Change these two folder strings to select the releases to compare.
EARLIER_FOLDER = "/home/danbot/code/common_data/HYDAT/Hydat_sqlite3_20250715"
LATER_FOLDER = "/home/danbot/code/common_data/HYDAT/Hydat_sqlite3_20260717"

FLOW_COLUMNS = tuple(f"FLOW{day}" for day in range(1, 32))
CSV_FIELDS = (
    "station_number",
    "revised_days",
    "removed_days",
    "first_affected_date",
    "last_affected_date",
)


@dataclass
class StationChanges:
    """Counts and date range of daily flow changes for one station."""

    station_number: str
    revised_days: int = 0
    removed_days: int = 0
    first_affected_date: str = ""
    last_affected_date: str = ""

    def record(self, affected_date: str, *, removed: bool) -> None:
        """Count a revision or removal and extend the affected date range."""
        if removed:
            self.removed_days += 1
        else:
            self.revised_days += 1
        if not self.first_affected_date or affected_date < self.first_affected_date:
            self.first_affected_date = affected_date
        if affected_date > self.last_affected_date:
            self.last_affected_date = affected_date


def validate_daily_flows(connection: sqlite3.Connection, schema: str) -> None:
    """Reject missing columns, invalid keys, duplicate months, or non-numeric flows."""
    columns = {
        row[1] for row in connection.execute(f"PRAGMA {schema}.table_info(DLY_FLOWS)")
    }
    required = {"STATION_NUMBER", "YEAR", "MONTH", *FLOW_COLUMNS}
    missing = required - columns
    if missing:
        raise ValueError(f"{schema}.DLY_FLOWS is missing columns: {sorted(missing)}")

    invalid = connection.execute(
        f"""
        SELECT STATION_NUMBER, YEAR, MONTH FROM {schema}.DLY_FLOWS
        WHERE STATION_NUMBER IS NULL OR TRIM(STATION_NUMBER) = ''
           OR typeof(STATION_NUMBER) != 'text'
           OR typeof(YEAR) != 'integer' OR YEAR NOT BETWEEN 1 AND 9999
           OR typeof(MONTH) != 'integer' OR MONTH NOT BETWEEN 1 AND 12
        LIMIT 1
        """
    ).fetchone()
    if invalid:
        raise ValueError(f"Invalid station/year/month in {schema}.DLY_FLOWS: {invalid}")

    duplicate = connection.execute(
        f"""
        SELECT STATION_NUMBER, YEAR, MONTH FROM {schema}.DLY_FLOWS
        GROUP BY STATION_NUMBER, YEAR, MONTH HAVING COUNT(*) > 1 LIMIT 1
        """
    ).fetchone()
    if duplicate:
        raise ValueError(f"Duplicate station/year/month in {schema}.DLY_FLOWS: {duplicate}")

    invalid_flow = " OR ".join(
        f"({column} IS NOT NULL AND typeof({column}) NOT IN ('integer', 'real'))"
        for column in FLOW_COLUMNS
    )
    if connection.execute(
        f"SELECT 1 FROM {schema}.DLY_FLOWS WHERE {invalid_flow} LIMIT 1"
    ).fetchone():
        raise ValueError(f"Non-numeric daily flow in {schema}.DLY_FLOWS")


def version_metadata(connection: sqlite3.Connection, schema: str) -> list[dict]:
    """Read release metadata, returning an empty list if VERSION is absent."""
    exists = connection.execute(
        f"SELECT 1 FROM {schema}.sqlite_master WHERE type = 'table' AND name = 'VERSION'"
    ).fetchone()
    if not exists:
        return []
    cursor = connection.execute(f"SELECT * FROM {schema}.VERSION")
    names = [column[0] for column in cursor.description]
    return [dict(zip(names, row)) for row in cursor]


def compare_daily_flows(
    earlier_path: Path, later_path: Path
) -> tuple[list[StationChanges], dict]:
    """Compare two read-only SQLite files and return sorted station changes and totals."""
    earlier_path = earlier_path.resolve(strict=True)
    later_path = later_path.resolve(strict=True)
    if earlier_path == later_path:
        raise ValueError("Earlier and later inputs must be different database files")

    connection = sqlite3.connect(earlier_path.as_uri() + "?mode=ro", uri=True)
    try:
        connection.execute(
            "ATTACH DATABASE ? AS later", (later_path.as_uri() + "?mode=ro",)
        )
        connection.execute("PRAGMA query_only = ON")
        connection.execute("BEGIN")
        for schema in ("main", "later"):
            validate_daily_flows(connection, schema)

        old_columns = ", ".join(f"old.{column}" for column in FLOW_COLUMNS)
        new_columns = ", ".join(f"new.{column}" for column in FLOW_COLUMNS)
        differences = " OR ".join(
            f"(old.{column} IS NOT NULL AND old.{column} IS NOT new.{column})"
            for column in FLOW_COLUMNS
        )
        rows = connection.execute(
            f"""
            SELECT old.STATION_NUMBER, old.YEAR, old.MONTH,
                   {old_columns}, {new_columns}
            FROM main.DLY_FLOWS AS old
            LEFT JOIN later.DLY_FLOWS AS new
              ON old.STATION_NUMBER = new.STATION_NUMBER
             AND old.YEAR = new.YEAR AND old.MONTH = new.MONTH
            WHERE {differences}
            """
        )
        changes: dict[str, StationChanges] = {}
        for row in rows:
            station, year, month = row[:3]
            days_in_month = calendar.monthrange(year, month)[1]
            for day in range(1, days_in_month + 1):
                old_flow = row[day + 2]
                new_flow = row[day + 33]
                if old_flow is None or old_flow == new_flow:
                    continue
                change = changes.setdefault(station, StationChanges(station))
                change.record(
                    date(year, month, day).isoformat(), removed=new_flow is None
                )

        results = [changes[station] for station in sorted(changes)]
        earlier_rows, earlier_stations = connection.execute(
            "SELECT COUNT(*), COUNT(DISTINCT STATION_NUMBER) FROM main.DLY_FLOWS"
        ).fetchone()
        summary = {
            "completed_at_utc": datetime.now(timezone.utc).isoformat(),
            "earlier_database": str(earlier_path),
            "later_database": str(later_path),
            "earlier_version": version_metadata(connection, "main"),
            "later_version": version_metadata(connection, "later"),
            "comparison_rules": {
                "eligible": "Valid calendar dates with a non-NULL earlier FLOW value",
                "revised": "Both values present and numerically unequal; no tolerance",
                "removed": "Earlier value present, later value or monthly row absent",
                "excluded": "Additions, symbol-only changes, and monthly summaries",
            },
            "earlier_monthly_rows": earlier_rows,
            "earlier_stations": earlier_stations,
            "affected_stations": len(results),
            "stations_with_revisions": sum(item.revised_days > 0 for item in results),
            "stations_with_removals": sum(item.removed_days > 0 for item in results),
            "stations_with_removals_only": sum(
                item.removed_days > 0 and item.revised_days == 0 for item in results
            ),
            "revised_days": sum(item.revised_days for item in results),
            "removed_days": sum(item.removed_days for item in results),
        }
        return results, summary
    finally:
        connection.close()


def write_results(
    results: list[StationChanges], summary: dict, output_dir: Path
) -> None:
    """Write station changes as CSV and reproducibility metadata as JSON."""
    output_dir.mkdir(parents=True, exist_ok=True)
    with (output_dir / "affected_stations.csv").open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_FIELDS)
        writer.writeheader()
        writer.writerows(asdict(item) for item in results)
    with (output_dir / "comparison_summary.json").open("w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)
        f.write("\n")


def database_path(path: Path) -> Path:
    """Resolve a database file or a folder containing Hydat.sqlite3."""
    path = path.expanduser()
    if path.is_dir():
        path = path / "Hydat.sqlite3"
    return path.resolve(strict=True)


def main() -> None:
    """Compare the configured folders or CLI overrides and save station-level results."""
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--earlier", type=Path, default=Path(EARLIER_FOLDER),
        help="Earlier folder containing Hydat.sqlite3, or a SQLite file",
    )
    parser.add_argument(
        "--later", type=Path, default=Path(LATER_FOLDER),
        help="Later folder containing Hydat.sqlite3, or a SQLite file",
    )
    parser.add_argument(
        "--output-dir", type=Path,
        help="Output folder (default: project data/<earlier folder>_to_<later folder>)",
    )
    args = parser.parse_args()
    try:
        earlier_path = database_path(args.earlier)
        later_path = database_path(args.later)
    except OSError as error:
        parser.exit(1, f"Invalid database path: {error}\n")
    output_dir = args.output_dir or (
        Path(__file__).resolve().parents[1] / "data"
        / f"{earlier_path.parent.name}_to_{later_path.parent.name}"
    )
    outputs = (
        output_dir / "affected_stations.csv",
        output_dir / "comparison_summary.json",
    )
    if any(
        output.resolve() == source.resolve()
        for output in outputs
        for source in (earlier_path, later_path)
    ):
        parser.error("Output paths must not overwrite either input database")
    print("Validating and comparing daily flows (inputs opened read-only)...", flush=True)
    try:
        results, summary = compare_daily_flows(earlier_path, later_path)
        write_results(results, summary, output_dir)
    except (OSError, sqlite3.Error, ValueError) as error:
        parser.exit(1, f"Comparison failed: {error}\n")
    print(
        f"Compared {summary['earlier_stations']:,} earlier stations.\n"
        f"Numerical revisions: {summary['revised_days']:,} days at "
        f"{summary['stations_with_revisions']:,} stations.\n"
        f"Removals: {summary['removed_days']:,} days at "
        f"{summary['stations_with_removals']:,} stations "
        f"({summary['stations_with_removals_only']:,} removals-only).\n"
        f"Affected stations: {summary['affected_stations']:,}.\n"
        f"Results: {output_dir.resolve()}"
    )


if __name__ == "__main__":
    main()
