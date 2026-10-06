import csv
from contextlib import redirect_stdout
import io
import json
from pathlib import Path
import sqlite3
import tempfile
import unittest
from unittest.mock import patch

from scripts.hydat_version_comparison import (
    compare_daily_flows, database_path, main, write_results,
)


def create_database(path: Path, records: list[tuple]) -> None:
    columns = ", ".join(f"FLOW{day} REAL" for day in range(1, 32))
    with sqlite3.connect(path) as connection:
        connection.execute(
            f"CREATE TABLE DLY_FLOWS "
            f"(STATION_NUMBER TEXT, YEAR INTEGER, MONTH INTEGER, {columns}, FLOW_SYMBOL1 TEXT)"
        )
        connection.execute("CREATE TABLE VERSION (Version TEXT)")
        connection.execute("INSERT INTO VERSION VALUES ('test')")
        for station, year, month, flows, symbol in records:
            values = [flows.get(day) for day in range(1, 32)]
            connection.execute(
                f"INSERT INTO DLY_FLOWS VALUES ({', '.join('?' for _ in range(35))})",
                [station, year, month, *values, symbol],
            )


class TestHydatVersionComparison(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.folder = Path(self.temp.name)
        self.earlier = self.folder / "earlier.sqlite3"
        self.later = self.folder / "later.sqlite3"

    def test_revisions_removals_additions_and_calendar(self) -> None:
        create_database(self.earlier, [
            ("A", 2024, 2, {1: 0, 2: 2, 29: 3, 30: 999}, None),
            ("A", 2023, 2, {28: 4, 29: 999}, None),
            ("B", 2020, 1, {1: 5}, None),
            ("C", 2020, 1, {1: 6}, None),
            ("D", 2020, 1, {1: 7}, "A"),
        ])
        create_database(self.later, [
            ("A", 2024, 2, {1: 0.000000001, 2: 2, 3: 8, 29: 4, 30: 1}, None),
            ("A", 2023, 2, {28: 4, 29: 1}, None),
            ("C", 2020, 1, {}, None),
            ("D", 2020, 1, {1: 7}, "B"),
            ("E", 2026, 1, {1: 9}, None),
        ])
        before = (self.earlier.read_bytes(), self.later.read_bytes())
        results, summary = compare_daily_flows(self.earlier, self.later)
        self.assertEqual([item.station_number for item in results], ["A", "B", "C"])
        self.assertEqual(results[0].revised_days, 2)
        self.assertEqual(results[0].removed_days, 0)
        self.assertEqual(results[0].first_affected_date, "2024-02-01")
        self.assertEqual(results[0].last_affected_date, "2024-02-29")
        self.assertEqual(results[1].removed_days, 1)
        self.assertEqual(results[2].removed_days, 1)
        self.assertEqual(summary["revised_days"], 2)
        self.assertEqual(summary["removed_days"], 2)
        self.assertEqual(summary["earlier_stations"], 4)
        self.assertEqual(summary["stations_with_removals_only"], 2)
        self.assertEqual(summary["earlier_version"], [{"Version": "test"}])
        self.assertEqual(before, (self.earlier.read_bytes(), self.later.read_bytes()))

        write_results(results, summary, self.folder / "output")
        with (self.folder / "output/affected_stations.csv").open(newline="") as f:
            rows = list(csv.DictReader(f))
        self.assertEqual(rows[0]["station_number"], "A")
        self.assertEqual(rows[0]["revised_days"], "2")
        with (self.folder / "output/comparison_summary.json").open() as f:
            self.assertEqual(json.load(f), summary)

    def test_unchanged_values_and_new_observations_are_not_revisions(self) -> None:
        create_database(self.earlier, [("A", 2020, 1, {1: 0}, None)])
        create_database(self.later, [("A", 2020, 1, {1: 0, 2: 1}, "B")])
        results, summary = compare_daily_flows(self.earlier, self.later)
        self.assertEqual(results, [])
        self.assertEqual(summary["affected_stations"], 0)
        write_results(results, summary, self.folder / "output")
        with (self.folder / "output/affected_stations.csv").open(newline="") as f:
            self.assertEqual(list(csv.DictReader(f)), [])

    def test_duplicate_keys_are_rejected(self) -> None:
        record = ("A", 2020, 1, {1: 1}, None)
        create_database(self.earlier, [record])
        create_database(self.later, [record, record])
        with self.assertRaisesRegex(ValueError, "Duplicate"):
            compare_daily_flows(self.earlier, self.later)

    def test_invalid_calendar_keys_are_rejected(self) -> None:
        create_database(self.earlier, [("A", 2020, 13, {1: 1}, None)])
        create_database(self.later, [])
        with self.assertRaisesRegex(ValueError, "Invalid station/year/month"):
            compare_daily_flows(self.earlier, self.later)

    def test_non_numeric_flows_are_rejected(self) -> None:
        create_database(self.earlier, [("A", 2020, 1, {1: "invalid"}, None)])
        create_database(self.later, [])
        with self.assertRaisesRegex(ValueError, "Non-numeric"):
            compare_daily_flows(self.earlier, self.later)

    def test_missing_schema_is_rejected(self) -> None:
        with sqlite3.connect(self.earlier) as connection:
            connection.execute("CREATE TABLE unrelated (value TEXT)")
        create_database(self.later, [])
        with self.assertRaisesRegex(ValueError, "missing columns"):
            compare_daily_flows(self.earlier, self.later)

    def test_same_database_is_rejected(self) -> None:
        create_database(self.earlier, [])
        with self.assertRaisesRegex(ValueError, "different database"):
            compare_daily_flows(self.earlier, self.earlier)

    def test_missing_database_is_not_created(self) -> None:
        create_database(self.earlier, [])
        with self.assertRaises(FileNotFoundError):
            compare_daily_flows(self.earlier, self.later)
        self.assertFalse(self.later.exists())

    def test_database_path_accepts_folder_and_file(self) -> None:
        path = self.folder / "Hydat.sqlite3"
        create_database(path, [])
        self.assertEqual(database_path(self.folder), path.resolve())
        self.assertEqual(database_path(path), path.resolve())

    def test_folder_without_database_is_rejected(self) -> None:
        with self.assertRaises(FileNotFoundError):
            database_path(self.folder)
        self.assertFalse((self.folder / "Hydat.sqlite3").exists())

    def test_main_uses_configured_folders_and_cli_overrides(self) -> None:
        earlier_folder = self.folder / "earlier"
        later_folder = self.folder / "later"
        earlier_folder.mkdir()
        later_folder.mkdir()
        create_database(earlier_folder / "Hydat.sqlite3", [("A", 2020, 1, {1: 1}, None)])
        create_database(later_folder / "Hydat.sqlite3", [("A", 2020, 1, {1: 2}, None)])
        cases = (
            ([], earlier_folder),
            (["--earlier", str(later_folder), "--later", str(earlier_folder)],
             later_folder),
            (["--earlier", str(earlier_folder / "Hydat.sqlite3"),
              "--later", str(later_folder / "Hydat.sqlite3")], earlier_folder),
        )
        for overrides, expected_earlier in cases:
            with (
                patch("scripts.hydat_version_comparison.EARLIER_FOLDER", str(earlier_folder)),
                patch("scripts.hydat_version_comparison.LATER_FOLDER", str(later_folder)),
                patch("sys.argv", ["comparison", "--output-dir", str(self.folder / "output"),
                                   *overrides]),
                redirect_stdout(io.StringIO()),
            ):
                main()
            with (self.folder / "output/comparison_summary.json").open() as f:
                summary = json.load(f)
            self.assertEqual(
                summary["earlier_database"], str(expected_earlier / "Hydat.sqlite3")
            )
            self.assertEqual(summary["revised_days"], 1)


if __name__ == "__main__":
    unittest.main()
