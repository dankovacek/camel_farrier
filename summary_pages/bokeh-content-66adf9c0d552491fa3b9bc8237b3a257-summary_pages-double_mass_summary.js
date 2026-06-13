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
    
    
    const element = document.getElementById("ff8edfdd-ed55-4a06-ab34-7b052168c64d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ff8edfdd-ed55-4a06-ab34-7b052168c64d' but no matching script tag was found.")
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
                  const docs_json = '{"73d810a9-144c-4fd9-ba86-f054dd3f6de3":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p789967","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p789968"}}},"roots":[{"type":"object","name":"DataTable","id":"p789989","attributes":{"stylesheets":[{"type":"object","name":"InlineStyleSheet","id":"p789988","attributes":{"css":"/* HTML Table Styling (for pandas to_html output) */\\n.tufte-table {\\n    width: 100%;\\n    border-collapse: collapse;\\n    background: transparent;\\n    font-size: 0.85rem;\\n    margin: 1.5rem 0;\\n}\\n\\n.tufte-table thead th {\\n    background: transparent;\\n    color: #1f1e1b;\\n    font-weight: 700;\\n    font-size: 0.75rem;\\n    letter-spacing: 0.02em;\\n    text-transform: uppercase;\\n    border: none;\\n    border-bottom: 2px solid #1f1e1b;\\n    padding: 0.75rem 1rem 0.75rem 0;\\n    text-align: left;\\n}\\n\\n.tufte-table tbody td {\\n    background: transparent;\\n    color: #1f1e1b;\\n    border: none;\\n    border-bottom: 1px solid #d5cfc0;\\n    padding: 0.5rem 1rem 0.5rem 0;\\n    line-height: 1.4;\\n}\\n\\n.tufte-table tbody tr:last-child td {\\n    border-bottom: none;\\n}\\n\\n.tufte-table tbody tr:hover {\\n    background: rgba(0, 109, 119, 0.03);\\n}\\n\\n/* Bokeh DataTable (SlickGrid) Styling */\\n.slick-header {\\n    background: transparent !important;\\n    border: none !important;\\n}\\n\\n.slick-header-column {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    font-weight: 700 !important;\\n    font-size: 0.75rem !important;\\n    letter-spacing: 0.02em !important;\\n    text-transform: uppercase !important;\\n    border: none !important;\\n    border-bottom: 2px solid #1f1e1b !important;\\n    /* padding: 0.75rem 1rem 0.75rem 0 !important; */\\n    text-align: left !important;\\n    cursor: pointer !important;\\n}\\n\\n.slick-header-column:hover {\\n    background: rgba(0, 109, 119, 0.05) !important;\\n}\\n\\n.slick-sort-indicator {\\n    color: #006d77 !important;\\n    font-weight: bold !important;\\n    margin-left: 0.25rem !important;\\n}\\n\\n.slick-cell {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    border: none !important;\\n    border-bottom: 1px solid #d5cfc0 !important;\\n    font-size: 0.85rem !important;\\n    line-height: 1.4 !important;\\n}\\n\\n/* Override alternating row colors */\\n.slick-row {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even,\\n.slick-row.odd {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even .slick-cell,\\n.slick-row.odd .slick-cell {\\n    background: transparent !important;\\n}\\n\\n/* Hover effect on entire row */\\n.slick-row:hover {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:hover .slick-cell {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:last-child .slick-cell {\\n    border-bottom: none !important;\\n}\\n\\n.slick-viewport {\\n    background: transparent !important;\\n}\\n\\n.grid-canvas {\\n    background: transparent !important;\\n}\\n\\n/* Links */\\na {\\n    color: #006d77 !important;\\n    text-decoration: underline;\\n}\\n\\na:hover {\\n    color: #1f1e1b !important;\\n}\\n"}}],"width":640,"source":{"type":"object","name":"ColumnDataSource","id":"p789969","attributes":{"selected":{"type":"object","name":"Selection","id":"p789970","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p789971"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xXDh1ZBAQAA0KdEEQ2lIRoaWhQtQqJdSMb/f4rbPefeB0Gw47xRM/7acOS1My7Y8c2Q/9aNuOWPfcc+mHDin1WvHPpuz4HPll3x07Tfbvjlh1mTbnrhq2FvjDvrrmtumzflpXVjnpvzxFNbHlqybcU5CzZddNknbz3wxTuPrbnqko8W3bPrmfseOQWzMfS8XAEAAA=="},"shape":[87],"dtype":"int32","order":"little"}],["station_id",{"type":"ndarray","array":["08LF081","08FC005","07GD001","07FD007","08FC003","09AC007","08NA020","10CD003","08LA029","07BB002","07GD004","08NH051","08NJ130","07AG004","07AG003","08EC001","07FB004","08EE013","08NN028","09AC001","10CD005","08LG016","08CD001","10ED003","10CB001","08MA006","08LA028","10CD001","08NJ168","09AA013","10BC001","08NG076","08LB020","08DA012","08NK022","08ED002","08NN023","08EE005","08NK026","08NK020","08FF005","08CF001","08EE012","08JD006","08NH132","07FB002","08LB069","08CA001","07EA007","08GA054","08EB005","08EF005","08HA001","08EB003","08KE024","08MH001","08AB001","08HF007","08GA027","08HB048","08HB075","08NG012","08HA034","08KH022","08NH007","08LB047","07FB003","08HB069","08NA053","08CC003","08DA010","08NE006","08LE024","08GF007","08NH119","08LE027","08HA070","08ME027","08DC006","08CG005","08ME028","08KH014","08GA071","09AA010","08HB086","08GE003","08HA069"],"shape":[87],"dtype":"object","order":"little"}],["rc_final",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wG4Akf9fQGTTGsRpT9/ljdVZemqP7E9w8Lkmbk/e58NjcIlwz9epss3IrrEPwhsV6WEv8Q/dVwiAGHHzT+NvZLfcynQP57+OFlPMNA/bkI1TB1e0D/43cwKQHHQP7M43agEmtE/XToCDG3O0T+d3Vkor9fRP9o/RQJOHtI/Z2Nyo55Q0j8EFq/Va6zUP4ItthRpW9Y/IOHEg1bW1j86KrQQIrjXP5ZoKRadFdg/XEWLwJqg2D8qlDfz8c3YP/NU+Rk/gto/ayDxEvIu3D8LSvsfC0ncPxk/HKH+adw/H2jzSqKA3D9Ieze50HDeP8YLumeVa98/1GA9XumG3z9Chww4ZJ3fP/RthKyaB+A/aH5Og49V4D/kb3I+WKfgPyagiZW8WuE/Z/ywBmtm4T9gxhkHdWvhP4Bu2A8eB+I/rdS2Bu8J4j+26Rz494LjPwVEx5EFhOM/wBo+fAia4z8VyXSZwbXjPyYI0za6FeQ/P1p1RdBA5D9Fwc7FxLXkPyCZkVQru+Q/avP+1jsc5T/tCoSMHN/lPy9l8zkbAeY/9pykS6BO5j86JN6UoWPmP8ZQxJzRd+Y/WvhNir/15j8C3ftowubnP4efIRfip+g/6tezIsI96T+GgTwsDkjpP5SLceWTcek/JJPlF4yB6T/5mLOv8bjpP31nNWLs7ek/YaKjdwAS6j8IRvBOdBrqP/X+S6xvfuo/r4XdSenf6j+JzJHRUSvrP8oY+9Q1gus/rw84BvVq7T+HgoxnNH3tP4fKhpXLrO0/Bi3shz5C7z9qihVN9irwP1RqHAjqa/A/D3zdfYD18D+mUWYb1RHxP9BlzOjyNvE/G0ovL4V+8j9b5zSSbVDzP4aky0IstvM/8Y0HK/w69T+aHsa+/kT3PzNgVK7vv/c/AC7STrCk+T8sbpmJNtb8P1/Bzg3oGQBA/qh7h7gCAAA="},"shape":[87],"dtype":"float64","order":"little"}],["record_start",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9vDzsBwFoj3IOGjSOwLUPZJNDXI6kHsc1D5/TjUnccjj24/yLy9UPXY5JDthqlDdw8y/wSSmw7icB+y+sNANchhcA1JD8g9Z5D4MDbMHaeBcqCwAKkDABPI7uJcAQAA"},"shape":[87],"dtype":"int32","order":"little"}],["record_end",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zvHzsBwDYifo+F9UP4lJPGDaGrQ+ehmIPPvQvXeg9KnsNiJrv80UM1NIMalFiZ+CI+7HgPlzgHxZSQ1IH17gRjd/SB1IDthGN09yHyQWpj9sLA6iWQHSC0AVhzdmFwBAAA="},"shape":[87],"dtype":"int32","order":"little"}],["n_years",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/21QywqAMAybgqLgA3cRHyh4UNH//z8TyKAUD6FrmrZZYwihBl6DA+9ceYob8sLpbD6pdjtNmtuJ3xVTzvr80/OA64EGsFrrkzx1peu3vi7VR2lOzcsQ/X8iOO6s3MzBzKfXBaCW+/nmjeijBVaAt6DuA/tpa2tcAQAA"},"shape":[87],"dtype":"int32","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p789993","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p789994"}}},"columns":[{"type":"object","name":"TableColumn","id":"p789972","attributes":{"field":"station_id","title":"Station","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p789973"},"editor":{"type":"object","name":"StringEditor","id":"p789974"}}},{"type":"object","name":"TableColumn","id":"p789976","attributes":{"field":"rc_final","title":"RC (final)","width":100,"formatter":{"type":"object","name":"NumberFormatter","id":"p789975","attributes":{"format":"0.00"}},"editor":{"type":"object","name":"StringEditor","id":"p789978"}}},{"type":"object","name":"TableColumn","id":"p789979","attributes":{"field":"record_start","title":"Start year","width":90,"formatter":{"type":"object","name":"StringFormatter","id":"p789980"},"editor":{"type":"object","name":"StringEditor","id":"p789981"}}},{"type":"object","name":"TableColumn","id":"p789982","attributes":{"field":"record_end","title":"End year","width":90,"formatter":{"type":"object","name":"StringFormatter","id":"p789983"},"editor":{"type":"object","name":"StringEditor","id":"p789984"}}},{"type":"object","name":"TableColumn","id":"p789985","attributes":{"field":"n_years","title":"Hydro years","width":100,"formatter":{"type":"object","name":"StringFormatter","id":"p789986"},"editor":{"type":"object","name":"StringEditor","id":"p789987"}}}],"index_position":null}}]}}';
                  const render_items = [{"docid":"73d810a9-144c-4fd9-ba86-f054dd3f6de3","roots":{"p789989":"ff8edfdd-ed55-4a06-ab34-7b052168c64d"},"root_ids":["p789989"]}];
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