(function() {
  const fn = function() {
    'use strict';
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("d318bbca-2028-4abc-b945-43e47b65418d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd318bbca-2028-4abc-b945-43e47b65418d' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.9.1.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"02cf052d-94fe-4570-a8e6-1cdf515d1c87":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1175","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1176"}}},"roots":[{"type":"object","name":"DataTable","id":"p1187","attributes":{"stylesheets":[{"type":"object","name":"InlineStyleSheet","id":"p1186","attributes":{"css":"/* HTML Table Styling (for pandas to_html output) */\\n.tufte-table {\\n    width: 100%;\\n    border-collapse: collapse;\\n    background: transparent;\\n    font-size: 0.85rem;\\n    margin: 1.5rem 0;\\n}\\n\\n.tufte-table thead th {\\n    background: transparent;\\n    color: #1f1e1b;\\n    font-weight: 700;\\n    font-size: 0.75rem;\\n    letter-spacing: 0.02em;\\n    text-transform: uppercase;\\n    border: none;\\n    border-bottom: 2px solid #1f1e1b;\\n    padding: 0.75rem 1rem 0.75rem 0;\\n    text-align: left;\\n}\\n\\n.tufte-table tbody td {\\n    background: transparent;\\n    color: #1f1e1b;\\n    border: none;\\n    border-bottom: 1px solid #d5cfc0;\\n    padding: 0.5rem 1rem 0.5rem 0;\\n    line-height: 1.4;\\n}\\n\\n.tufte-table tbody tr:last-child td {\\n    border-bottom: none;\\n}\\n\\n.tufte-table tbody tr:hover {\\n    background: rgba(0, 109, 119, 0.03);\\n}\\n\\n/* Bokeh DataTable (SlickGrid) Styling */\\n.slick-header {\\n    background: transparent !important;\\n    border: none !important;\\n}\\n\\n.slick-header-column {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    font-weight: 700 !important;\\n    font-size: 0.75rem !important;\\n    letter-spacing: 0.02em !important;\\n    text-transform: uppercase !important;\\n    border: none !important;\\n    border-bottom: 2px solid #1f1e1b !important;\\n    /* padding: 0.75rem 1rem 0.75rem 0 !important; */\\n    text-align: left !important;\\n    cursor: pointer !important;\\n}\\n\\n.slick-header-column:hover {\\n    background: rgba(0, 109, 119, 0.05) !important;\\n}\\n\\n.slick-sort-indicator {\\n    color: #006d77 !important;\\n    font-weight: bold !important;\\n    margin-left: 0.25rem !important;\\n}\\n\\n.slick-cell {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    border: none !important;\\n    border-bottom: 1px solid #d5cfc0 !important;\\n    font-size: 0.85rem !important;\\n    line-height: 1.4 !important;\\n}\\n\\n/* Override alternating row colors */\\n.slick-row {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even,\\n.slick-row.odd {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even .slick-cell,\\n.slick-row.odd .slick-cell {\\n    background: transparent !important;\\n}\\n\\n/* Hover effect on entire row */\\n.slick-row:hover {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:hover .slick-cell {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:last-child .slick-cell {\\n    border-bottom: none !important;\\n}\\n\\n.slick-viewport {\\n    background: transparent !important;\\n}\\n\\n.grid-canvas {\\n    background: transparent !important;\\n}\\n\\n/* Links */\\na {\\n    color: #006d77 !important;\\n    text-decoration: underline;\\n}\\n\\na:hover {\\n    color: #1f1e1b !important;\\n}\\n"}}],"width":460,"height":230,"source":{"type":"object","name":"ColumnDataSource","id":"p1177","attributes":{"selected":{"type":"object","name":"Selection","id":"p1178","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1179"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBgBGImIGYGYhYgZgViNiAGAHe63owcAAAA"},"shape":[7],"dtype":"int32","order":"little"}],["Metric",{"type":"ndarray","array":["Stations compared","Area change &gt; 10%","JSI &lt; 0.80","Median Jaccard index","Median |\\u0394area| (%)","Median |\\u0394area| (km\\u00b2)","Largest |\\u0394area| (km\\u00b2)"],"shape":[7],"dtype":"object","order":"little"}],["Value",{"type":"ndarray","array":["885","8.8%","8.0%","0.951","0.98%","4.63","875.9"],"shape":[7],"dtype":"object","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1191","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1192"}}},"columns":[{"type":"object","name":"TableColumn","id":"p1180","attributes":{"field":"Metric","title":"Metric","width":250,"formatter":{"type":"object","name":"StringFormatter","id":"p1181"},"editor":{"type":"object","name":"StringEditor","id":"p1182"}}},{"type":"object","name":"TableColumn","id":"p1183","attributes":{"field":"Value","title":"Value","width":200,"formatter":{"type":"object","name":"StringFormatter","id":"p1184"},"editor":{"type":"object","name":"StringEditor","id":"p1185"}}}],"sortable":false,"reorderable":false,"index_position":null}}]}}';
                  const render_items = [{"docid":"02cf052d-94fe-4570-a8e6-1cdf515d1c87","roots":{"p1187":"d318bbca-2028-4abc-b945-43e47b65418d"},"root_ids":["p1187"]}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();