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
    
    
    const element = document.getElementById("d02a0a8d-d3a7-45c3-9b83-2e4d5baf7589");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd02a0a8d-d3a7-45c3-9b83-2e4d5baf7589' but no matching script tag was found.")
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
                  const docs_json = '{"f3f5bdd8-7529-4e0f-a536-38bea16507db":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1182","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1183"}}},"roots":[{"type":"object","name":"DataTable","id":"p1206","attributes":{"stylesheets":[{"type":"object","name":"InlineStyleSheet","id":"p1205","attributes":{"css":"/* HTML Table Styling (for pandas to_html output) */\\n.tufte-table {\\n    width: 100%;\\n    border-collapse: collapse;\\n    background: transparent;\\n    font-size: 0.85rem;\\n    margin: 1.5rem 0;\\n}\\n\\n.tufte-table thead th {\\n    background: transparent;\\n    color: #1f1e1b;\\n    font-weight: 700;\\n    font-size: 0.75rem;\\n    letter-spacing: 0.02em;\\n    text-transform: uppercase;\\n    border: none;\\n    border-bottom: 2px solid #1f1e1b;\\n    padding: 0.75rem 1rem 0.75rem 0;\\n    text-align: left;\\n}\\n\\n.tufte-table tbody td {\\n    background: transparent;\\n    color: #1f1e1b;\\n    border: none;\\n    border-bottom: 1px solid #d5cfc0;\\n    padding: 0.5rem 1rem 0.5rem 0;\\n    line-height: 1.4;\\n}\\n\\n.tufte-table tbody tr:last-child td {\\n    border-bottom: none;\\n}\\n\\n.tufte-table tbody tr:hover {\\n    background: rgba(0, 109, 119, 0.03);\\n}\\n\\n/* Bokeh DataTable (SlickGrid) Styling */\\n.slick-header {\\n    background: transparent !important;\\n    border: none !important;\\n}\\n\\n.slick-header-column {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    font-weight: 700 !important;\\n    font-size: 0.75rem !important;\\n    letter-spacing: 0.02em !important;\\n    text-transform: uppercase !important;\\n    border: none !important;\\n    border-bottom: 2px solid #1f1e1b !important;\\n    /* padding: 0.75rem 1rem 0.75rem 0 !important; */\\n    text-align: left !important;\\n    cursor: pointer !important;\\n}\\n\\n.slick-header-column:hover {\\n    background: rgba(0, 109, 119, 0.05) !important;\\n}\\n\\n.slick-sort-indicator {\\n    color: #006d77 !important;\\n    font-weight: bold !important;\\n    margin-left: 0.25rem !important;\\n}\\n\\n.slick-cell {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    border: none !important;\\n    border-bottom: 1px solid #d5cfc0 !important;\\n    font-size: 0.85rem !important;\\n    line-height: 1.4 !important;\\n}\\n\\n/* Override alternating row colors */\\n.slick-row {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even,\\n.slick-row.odd {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even .slick-cell,\\n.slick-row.odd .slick-cell {\\n    background: transparent !important;\\n}\\n\\n/* Hover effect on entire row */\\n.slick-row:hover {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:hover .slick-cell {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:last-child .slick-cell {\\n    border-bottom: none !important;\\n}\\n\\n.slick-viewport {\\n    background: transparent !important;\\n}\\n\\n.grid-canvas {\\n    background: transparent !important;\\n}\\n\\n/* Links */\\na {\\n    color: #006d77 !important;\\n    text-decoration: underline;\\n}\\n\\na:hover {\\n    color: #1f1e1b !important;\\n}\\n"}}],"width":640,"source":{"type":"object","name":"ColumnDataSource","id":"p1184","attributes":{"selected":{"type":"object","name":"Selection","id":"p1185","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1186"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xXDh1ZBAQAA0KdEEQ2lIRoaWhQtQqJdSMb/f4rbPefeB0Gw47xRf83YcOS1My7Y8c2Q/9aNuOWPfcc+mHDin1WvHPpuz4HPll3x07Qbfvvlh0mzbnrhq2FvjDvrrmtumzflpXVjnpvzxFNbHlqybcU5CzZddNknbz3wxTuPrbnqko8W3bPrmfseOQXoDl7ZXAEAAA=="},"shape":[87],"dtype":"int32","order":"little"}],["station_id",{"type":"ndarray","array":["08LF081","08FC005","07GD001","07FD007","09AC007","08FC003","08NA020","10CD003","08LA029","07BB002","07GD004","08NH051","08NJ130","07AG004","07AG003","08EC001","07FB004","08EE013","08NN028","09AC001","10CD005","08LG016","08CD001","10ED003","10CB001","08MA006","08LA028","10CD001","08NJ168","09AA013","10BC001","08NG076","08LB020","08DA012","08NK022","08ED002","08EE005","08NN023","08NK026","08NK020","08CF001","08FF005","08EE012","08JD006","08NH132","07FB002","08LB069","08CA001","07EA007","08GA054","08EB005","08EF005","08HA001","08EB003","08KE024","08MH001","08AB001","08HF007","08GA027","08HB048","08HB075","08NG012","08HA034","08KH022","08NH007","08LB047","07FB003","08HB069","08NA053","08CC003","08DA010","08NE006","08LE024","08GF007","08NH119","08LE027","08HA070","08ME027","08DC006","08CG005","08ME028","08KH014","08GA071","09AA010","08HB086","08GE003","08HA069"],"shape":[87],"dtype":"object","order":"little"}],["rc_final_str",{"type":"ndarray","array":["0.041","0.053","0.100","0.150","0.162","0.162","0.233","0.253","0.253","0.256","0.257","0.275","0.278","0.279","0.283","0.286","0.323","0.349","0.357","0.371","0.376","0.385","0.388","0.414","0.440","0.442","0.444","0.445","0.476","0.491","0.493","0.494","0.501","0.510","0.520","0.542","0.544","0.544","0.563","0.564","0.610","0.610","0.613","0.616","0.628","0.633","0.647","0.648","0.660","0.683","0.688","0.697","0.700","0.702","0.717","0.747","0.770","0.789","0.790","0.795","0.797","0.804","0.810","0.815","0.816","0.828","0.840","0.849","0.860","0.919","0.922","0.927","0.977","1.010","1.026","1.060","1.067","1.076","1.156","1.207","1.232","1.327","1.454","1.484","1.603","1.802","2.013"],"shape":[87],"dtype":"object","order":"little"}],["flag",{"type":"ndarray","array":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1","\\u26a0 RC &gt; 1"],"shape":[87],"dtype":"object","order":"little"}],["record_start",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9vDzsBwFoj3QPFRJDZI7AKUfxJNHKYeRp+Dyu/Hoe48Hnlk+2Hm7UUyB5s8NnXoboLxTyCZdRCH+5D1HgaqQQ6Ha2huOYPEh7Fh7j0NlAOFBcjNANyNz0xcAQAA"},"shape":[87],"dtype":"int32","order":"little"}],["record_end",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zvHzsBwDYifo+F9UP4lJPGDaGrQ+ehmIPPvQvXeg9KnsNiJrv80UA1I3U0camFmHMLjrsdAuXNAfBlJDUjfXiBGdz9IHchOGEZ3DzIfpBZmPyysTiLZAVILANG5NXdcAQAA"},"shape":[87],"dtype":"int32","order":"little"}],["n_years",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/21QSQqAQAwbBUXBBeciLih4UNH//88EIpQyh5Bpky7TGEKogVc4xLnjDXFhfPTbeJJ2O8/ft1N+F/8x9TlR8yDXA/Q1CZ111OgrnW73uqSP8pyqy8D+PxE5zqxcz8H0564LQC/n881bcY8WWAHegr4P/+XiSFwBAAA="},"shape":[87],"dtype":"int32","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1210","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1211"}}},"columns":[{"type":"object","name":"TableColumn","id":"p1187","attributes":{"field":"station_id","title":"Station","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p1188"},"editor":{"type":"object","name":"StringEditor","id":"p1189"}}},{"type":"object","name":"TableColumn","id":"p1190","attributes":{"field":"rc_final_str","title":"RC (final)","width":100,"formatter":{"type":"object","name":"StringFormatter","id":"p1191"},"editor":{"type":"object","name":"StringEditor","id":"p1192"}}},{"type":"object","name":"TableColumn","id":"p1193","attributes":{"field":"flag","title":"Flag","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p1194"},"editor":{"type":"object","name":"StringEditor","id":"p1195"}}},{"type":"object","name":"TableColumn","id":"p1196","attributes":{"field":"record_start","title":"Start year","width":90,"formatter":{"type":"object","name":"StringFormatter","id":"p1197"},"editor":{"type":"object","name":"StringEditor","id":"p1198"}}},{"type":"object","name":"TableColumn","id":"p1199","attributes":{"field":"record_end","title":"End year","width":90,"formatter":{"type":"object","name":"StringFormatter","id":"p1200"},"editor":{"type":"object","name":"StringEditor","id":"p1201"}}},{"type":"object","name":"TableColumn","id":"p1202","attributes":{"field":"n_years","title":"Hydro years","width":100,"formatter":{"type":"object","name":"StringFormatter","id":"p1203"},"editor":{"type":"object","name":"StringEditor","id":"p1204"}}}],"index_position":null}}]}}';
                  const render_items = [{"docid":"f3f5bdd8-7529-4e0f-a536-38bea16507db","roots":{"p1206":"d02a0a8d-d3a7-45c3-9b83-2e4d5baf7589"},"root_ids":["p1206"]}];
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