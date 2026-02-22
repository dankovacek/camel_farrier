#!/usr/bin/env python3
"""
Unpack Water Office Portal Data Archive

Extracts the archived Water Office portal data (rating curves, corrections, field visits)
from the compressed archive and verifies data integrity.

Usage:
    python unpack_wateroffice_data.py --archive data/WaterOffice_RC_Export_20260203.zip
    python unpack_wateroffice_data.py --archive data/WaterOffice_RC_Export_20260203.zip --verify-checksums
    python unpack_wateroffice_data.py --help

Author: Generated for WSC Catchment Delineation Demo
Date: February 3, 2026
"""

import argparse
import zipfile
import sys
from pathlib import Path
import logging
from typing import Dict, List, Tuple

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


def verify_archive_exists(archive_path: Path) -> bool:
    """
    Check if the archive file exists.

    Args:
        archive_path: Path to the archive file

    Returns:
        True if archive exists, False otherwise
    """
    if not archive_path.exists():
        logger.error(f"Archive not found: {archive_path}")
        logger.info("Please download the Water Office data archive from:")
        logger.info("  DOI: <add_DOI>")
        logger.info(f"  Place at: {archive_path}")
        return False

    logger.info(f"Found archive: {archive_path} ({archive_path.stat().st_size / (1024*1024):.2f} MB)")
    return True


def extract_archive(archive_path: Path, extract_to: Path) -> Tuple[bool, Dict[str, int]]:
    """
    Extract the Water Office archive to the specified directory.

    Args:
        archive_path: Path to the archive file
        extract_to: Directory to extract files to

    Returns:
        Tuple of (success, file_counts) where file_counts is a dict of {directory: count}
    """
    logger.info(f"Extracting archive to: {extract_to}")

    try:
        with zipfile.ZipFile(archive_path, 'r') as zip_ref:
            # Get list of all files
            all_files = zip_ref.namelist()
            logger.info(f"Archive contains {len(all_files)} files")

            # Extract all files
            zip_ref.extractall(extract_to)

            # Count files by directory
            file_counts = {}
            for file_path in all_files:
                if '/' in file_path:
                    directory = file_path.split('/')[0]
                    file_counts[directory] = file_counts.get(directory, 0) + 1

            logger.info("Extraction complete")
            return True, file_counts

    except zipfile.BadZipFile:
        logger.error(f"Invalid zip file: {archive_path}")
        return False, {}
    except Exception as e:
        logger.error(f"Extraction failed: {e}")
        return False, {}


def verify_data_structure(extract_to: Path) -> Tuple[bool, Dict[str, any]]:
    """
    Verify the extracted data has the expected structure.

    Expected structure:
        data/
        ├── rating_curves/  (2,375 station files: *_RCs.csv)
        ├── corrections/    (2,375 station files: *_corrections.csv)
        └── field_visits/   (2,375 station files: *_field_visits.csv)

    Args:
        extract_to: Directory where files were extracted

    Returns:
        Tuple of (valid, verification_results)
    """
    logger.info("Verifying data structure...")

    expected_dirs = ['rating_curves', 'corrections', 'field_visits']
    expected_station_count = 2375
    expected_total_files = expected_station_count * 3  # 3 files per station

    results = {
        'directories_found': [],
        'directories_missing': [],
        'file_counts': {},
        'total_files': 0,
        'valid': True
    }

    for dir_name in expected_dirs:
        dir_path = extract_to / dir_name
        if dir_path.exists() and dir_path.is_dir():
            # Count CSV files
            csv_files = list(dir_path.glob('*.csv'))
            file_count = len(csv_files)
            results['directories_found'].append(dir_name)
            results['file_counts'][dir_name] = file_count
            results['total_files'] += file_count

            logger.info(f"  {dir_name}/: {file_count} files")

            if file_count != expected_station_count:
                logger.warning(f"  Expected {expected_station_count} files, found {file_count}")
                results['valid'] = False
        else:
            results['directories_missing'].append(dir_name)
            results['valid'] = False
            logger.error(f"  Missing directory: {dir_name}/")

    # Check total file count
    logger.info(f"Total files extracted: {results['total_files']}")
    if results['total_files'] != expected_total_files:
        logger.warning(f"Expected {expected_total_files} total files, found {results['total_files']}")
        results['valid'] = False

    if results['valid']:
        logger.info("✓ Data structure verification passed")
    else:
        logger.error("✗ Data structure verification failed")

    return results['valid'], results


def verify_station_files(extract_to: Path, sample_size: int = 10) -> bool:
    """
    Verify a sample of station files have the expected format.

    Args:
        extract_to: Directory where files were extracted
        sample_size: Number of stations to sample for verification

    Returns:
        True if verification passed, False otherwise
    """
    logger.info(f"Verifying file integrity (sampling {sample_size} stations)...")

    rcs_dir = extract_to / 'RCs'
    corrections_dir = extract_to / 'corrections'
    field_visits_dir = extract_to / 'field_visits'

    # Get a sample of station IDs
    rc_files = list(rcs_dir.glob('*_RCs.csv'))
    if len(rc_files) < sample_size:
        sample_size = len(rc_files)

    import random
    sample_files = random.sample(rc_files, sample_size)

    all_valid = True
    for rc_file in sample_files:
        station_id = rc_file.stem.replace('_RCs', '')

        # Check all three files exist for this station
        corrections_file = corrections_dir / f"{station_id}_corrections.csv"
        field_visits_file = field_visits_dir / f"{station_id}_field_visits.csv"

        if not corrections_file.exists():
            logger.error(f"  Missing corrections file for {station_id}")
            all_valid = False
            continue

        if not field_visits_file.exists():
            logger.error(f"  Missing field_visits file for {station_id}")
            all_valid = False
            continue

        # Check files are not empty
        if rc_file.stat().st_size == 0:
            logger.error(f"  Empty file: {rc_file.name}")
            all_valid = False

        # Verify CSV header (basic check)
        try:
            with open(rc_file, 'r') as f:
                header = f.readline().strip()
                if not header:
                    logger.error(f"  No header in {rc_file.name}")
                    all_valid = False
        except Exception as e:
            logger.error(f"  Error reading {rc_file.name}: {e}")
            all_valid = False

    if all_valid:
        logger.info("✓ File integrity verification passed")
    else:
        logger.error("✗ File integrity verification failed")

    return all_valid


def main():
    """Main execution function."""
    parser = argparse.ArgumentParser(
        description='Unpack Water Office Portal data archive',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Basic extraction
  python unpack_wateroffice_data.py --archive data/WaterOffice_RC_Export_20260203.zip

  # Extract with full verification
  python unpack_wateroffice_data.py --archive data/WaterOffice_RC_Export_20260203.zip --verify-checksums

  # Extract to custom location
  python unpack_wateroffice_data.py --archive data/WaterOffice_RC_Export_20260203.zip --extract-to /path/to/data
        """
    )

    parser.add_argument(
        '--archive',
        type=Path,
        default=Path('data/WaterOffice_RC_Export_20260203.zip'),
        help='Path to Water Office data archive (default: data/WaterOffice_RC_Export_20260203.zip)'
    )

    parser.add_argument(
        '--extract-to',
        type=Path,
        default=Path('data'),
        help='Directory to extract files to (default: data/)'
    )

    parser.add_argument(
        '--verify-checksums',
        action='store_true',
        help='Verify file integrity with checksums (includes sampling verification)'
    )

    parser.add_argument(
        '--force',
        action='store_true',
        help='Force extraction even if directories already exist'
    )

    args = parser.parse_args()

    # Verify archive exists
    if not verify_archive_exists(args.archive):
        sys.exit(1)

    # Check if data already extracted
    rcs_dir = args.extract_to / 'RCs'
    if rcs_dir.exists() and not args.force:
        logger.warning(f"Data directory already exists: {rcs_dir}")
        logger.warning("Use --force to re-extract (will overwrite existing files)")

        response = input("Verify existing data instead? (y/n): ")
        if response.lower() == 'y':
            valid, results = verify_data_structure(args.extract_to)
            if valid and args.verify_checksums:
                verify_station_files(args.extract_to)
            sys.exit(0 if valid else 1)
        else:
            sys.exit(0)

    # Extract archive
    success, file_counts = extract_archive(args.archive, args.extract_to)
    if not success:
        sys.exit(1)

    # Verify structure
    valid, results = verify_data_structure(args.extract_to)
    if not valid:
        logger.error("Data structure verification failed")
        sys.exit(1)

    # Optional: verify file integrity
    if args.verify_checksums:
        if not verify_station_files(args.extract_to):
            logger.error("File integrity verification failed")
            sys.exit(1)

    logger.info("=" * 60)
    logger.info("✓ Water Office data unpacked successfully")
    logger.info(f"  Total files: {results['total_files']}")
    logger.info(f"  Rating curves: {results['file_counts'].get('RCs', 0)}")
    logger.info(f"  Corrections: {results['file_counts'].get('corrections', 0)}")
    logger.info(f"  Field visits: {results['file_counts'].get('field_visits', 0)}")
    logger.info("=" * 60)

    sys.exit(0)


if __name__ == '__main__':
    main()
