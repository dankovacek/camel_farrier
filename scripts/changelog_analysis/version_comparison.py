"""Version comparison utilities for changelog analysis workflow.

This module demonstrates how the shared utilities from scripts.utils
can be reused for changelog comparison workflows.

Example:
    from scripts.utils.geometry import compute_jaccard_similarity
    from scripts.utils.markdown import jaccard_matrix_to_markdown

    jaccard_dict = compute_jaccard_similarity(polygon_versions_dict)
    similarity_md, dates_md = jaccard_matrix_to_markdown(jaccard_dict, revision_dates)
"""

from scripts.utils.geometry import compute_jaccard_similarity
from scripts.utils.markdown import jaccard_matrix_to_markdown

# TODO: Implement version comparison functions
