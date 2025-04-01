# main_runner.py
from tests.test_precheck import find_geometry_files, load_file_config
from book_docs.setup_scripts.precheck_utils import build_geometry_registry
from integration import run_integration_workflow

if __name__ == "__main__":
    files = find_geometry_files()
    config = load_file_config()
    
    registry, missing_cols = build_geometry_registry(files, config)

    run_integration_workflow(registry, config)
