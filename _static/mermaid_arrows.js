// Mermaid sizes arrowheads in fixed user-space units (8px), which reads as
// tiny next to larger labels. Enlarge them once diagrams have rendered.
(function () {
  const ARROW_SIZE = 16;

  const enlargeMarkers = (root) => {
    root.querySelectorAll('pre.mermaid svg marker[id*="point"]').forEach((m) => {
      m.setAttribute('markerWidth', ARROW_SIZE);
      m.setAttribute('markerHeight', ARROW_SIZE);
    });
  };

  const observer = new MutationObserver(() => enlargeMarkers(document));
  const start = () => {
    enlargeMarkers(document);
    observer.observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
