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
    
    
    const element = document.getElementById("d37475e1-02e6-4ab3-80ec-939c3731a915");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd37475e1-02e6-4ab3-80ec-939c3731a915' but no matching script tag was found.")
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
                  const docs_json = '{"90f0e9dc-c096-438b-bbcb-57056f47475c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p789465","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p789466"}}},"roots":[{"type":"object","name":"DataTable","id":"p789489","attributes":{"stylesheets":[{"type":"object","name":"InlineStyleSheet","id":"p789488","attributes":{"css":"/* HTML Table Styling (for pandas to_html output) */\\n.tufte-table {\\n    width: 100%;\\n    border-collapse: collapse;\\n    background: transparent;\\n    font-size: 0.85rem;\\n    margin: 1.5rem 0;\\n}\\n\\n.tufte-table thead th {\\n    background: transparent;\\n    color: #1f1e1b;\\n    font-weight: 700;\\n    font-size: 0.75rem;\\n    letter-spacing: 0.02em;\\n    text-transform: uppercase;\\n    border: none;\\n    border-bottom: 2px solid #1f1e1b;\\n    padding: 0.75rem 1rem 0.75rem 0;\\n    text-align: left;\\n}\\n\\n.tufte-table tbody td {\\n    background: transparent;\\n    color: #1f1e1b;\\n    border: none;\\n    border-bottom: 1px solid #d5cfc0;\\n    padding: 0.5rem 1rem 0.5rem 0;\\n    line-height: 1.4;\\n}\\n\\n.tufte-table tbody tr:last-child td {\\n    border-bottom: none;\\n}\\n\\n.tufte-table tbody tr:hover {\\n    background: rgba(0, 109, 119, 0.03);\\n}\\n\\n/* Bokeh DataTable (SlickGrid) Styling */\\n.slick-header {\\n    background: transparent !important;\\n    border: none !important;\\n}\\n\\n.slick-header-column {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    font-weight: 700 !important;\\n    font-size: 0.75rem !important;\\n    letter-spacing: 0.02em !important;\\n    text-transform: uppercase !important;\\n    border: none !important;\\n    border-bottom: 2px solid #1f1e1b !important;\\n    /* padding: 0.75rem 1rem 0.75rem 0 !important; */\\n    text-align: left !important;\\n    cursor: pointer !important;\\n}\\n\\n.slick-header-column:hover {\\n    background: rgba(0, 109, 119, 0.05) !important;\\n}\\n\\n.slick-sort-indicator {\\n    color: #006d77 !important;\\n    font-weight: bold !important;\\n    margin-left: 0.25rem !important;\\n}\\n\\n.slick-cell {\\n    background: transparent !important;\\n    color: #1f1e1b !important;\\n    border: none !important;\\n    border-bottom: 1px solid #d5cfc0 !important;\\n    font-size: 0.85rem !important;\\n    line-height: 1.4 !important;\\n}\\n\\n/* Override alternating row colors */\\n.slick-row {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even,\\n.slick-row.odd {\\n    background: transparent !important;\\n}\\n\\n.slick-row.even .slick-cell,\\n.slick-row.odd .slick-cell {\\n    background: transparent !important;\\n}\\n\\n/* Hover effect on entire row */\\n.slick-row:hover {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:hover .slick-cell {\\n    background: rgba(0, 109, 119, 0.03) !important;\\n}\\n\\n.slick-row:last-child .slick-cell {\\n    border-bottom: none !important;\\n}\\n\\n.slick-viewport {\\n    background: transparent !important;\\n}\\n\\n.grid-canvas {\\n    background: transparent !important;\\n}\\n\\n/* Links */\\na {\\n    color: #006d77 !important;\\n    text-decoration: underline;\\n}\\n\\na:hover {\\n    color: #1f1e1b !important;\\n}\\n"}}],"width":1000,"source":{"type":"object","name":"ColumnDataSource","id":"p789467","attributes":{"selected":{"type":"object","name":"Selection","id":"p789468","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p789469"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NiYGBgBWIAJijZEAgAAAA="},"shape":[2],"dtype":"int32","order":"little"}],["Station ID/Identification de la station",{"type":"ndarray","array":["10VK001","10VK001"],"shape":[2],"dtype":"object","order":"little"}],["Date (UTC)/Date (TUC)",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgOBDkNbPCiYGBYfXHtgonAOTE8okQAAAA"},"shape":[2],"dtype":"float64","order":"little"}],["Timezone Offset/D\\u00e9calage Horaire",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v5////n0AMAEeJQMIIAAAA"},"shape":[2],"dtype":"int32","order":"little"}],["Activity Type/Type d&#x27;activit\\u00e9",{"type":"ndarray","array":["Discharge/D\\u00e9bit","Discharge/D\\u00e9bit"],"shape":[2],"dtype":"object","order":"little"}],["Gauge Height/Niveau",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKSAMAJIzl3BAAAAA="},"shape":[2],"dtype":"float64","order":"little"}],["Mean Gauge Height/Niveau Moyen",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/8sXaj5waqGcg71p3C5PHgkHABqTEOkQAAAA"},"shape":[2],"dtype":"float64","order":"little"}],["Discharge/D\\u00e9bit",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIFch28aMf2Hvoo4AAAYQ6WsEAAAAA=="},"shape":[2],"dtype":"float64","order":"little"}],["Rating Curve Table Number/Num\\u00e9ro de cource de tarage",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAEJBzAFpAGHUJfyEAAAAA=="},"shape":[2],"dtype":"float64","order":"little"}],["Shift From Base Curve/D\\u00e9calage par rapport \\u00e0 la courbe de base",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/5sswRLGp3vI/o3+bnV+7q37AU26RhUQAAAA"},"shape":[2],"dtype":"float64","order":"little"}],["Deviation From Base Curve/D\\u00e9viation par rapport \\u00e0 la courbe de base",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xN4uX098/Mj9mar7cKjN17eDwCcJAFrEAAAAA=="},"shape":[2],"dtype":"float64","order":"little"}],["Deviation From Shifted Curve/D\\u00e9viation par rapport \\u00e0 la courbe d\\u00e9cal\\u00e9e",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xN4uX098/Mj9rrOMq8fmUntBwCrwPR7EAAAAA=="},"shape":[2],"dtype":"float64","order":"little"}],["Control Condition/Condition de contr\\u00f4le",{"type":"ndarray","array":["Measurement condition : Clear; Cloudy , No Precipitation , Light Wind Blowing Cross Stream","Measurement condition : Ice; Clear , No Precipitation , Calm Wind Blowing Downstream"],"shape":[2],"dtype":"object","order":"little"}],["Control Condition Remarks/Remark sur les condition de contr\\u00f4le",{"type":"ndarray","array":["Open water conditions.  Control no longer has any ice and is totally open.  Unknown if channel has changed from previous conditions.  Did not hear any rocks moving on the rivier bed.","OPEN LEAD FROM MOUTH OF RIVER THROUGH CENTER OF THE RIVER, SUSPECT MINIMAL EDGE ICE."],"shape":[2],"dtype":"object","order":"little"}],["Activity Remarks/Remarques des activit\\u00e9s",{"type":"ndarray","array":["Measured upstream of old gauging location.  Could not measure farther down as river velocity too high for boat and motor combination.  Not likely to be an issue.  Measurement conditions seem to good at this cross section.  Mmnt time seems off, set time prior to mmnt but software would not initiate edge measurement.  Had to disconnect then re connect mid measurement.  HG cut 0.102 15:15, HG3 cut 0.160 15:20.  Reset HG and HG2 after 16:45 reading.  See photos.  HG3 @ 15:20 -7.622, HG3 @ 16:15 7.632 ADCP by Moving Boat","@ Uncertainty: IVE method, 2-sigma value (2 x Uncertainty Value reported in *.ft File). @ MEASURED AT THE SECTION DEFINED AS THE WADING TRANSECT DOWN STREAM OF THE CONTROL AND LOCATION OF THE OLD GAUGE. JUST DOWN STREAM OF THE POOL LOCATED JUST AFTER THE RAPIDS THROUGH THE CONTROL. OLD LOCATION: FOUND TEMPORARY GAUGE COMPLETELY UNCOVERED FROM SNOW BUT ICED IN PLACE AROUND THE SIDES. FOUND OLD SENSOR LINE PULLED AND CUT IN THE WATER. PULLED AS MUCH OF THE LINE AS POSSIBLE AND REUSED THE BLOCK TO SET THE NEW OTT SENSOR. PLACED THE NEW LINE IN THE SAME LOCATION THAT I FOUND THE PREVIOUS SENSOR (SEEMINGLY THE DEEPEST PART OF THE MOUTH. ORRIFICE DEPTH READING 0.819, OFFSET OF 0 RESET AT 1344 OFFSET NOW 5.193. TIME ON FTS WAS OFF BY 10 MINUTES MANUALLY ADJUSTED AT 13:41. NEW LOCATION: CHANGED OUT GAME CAMERA DISK AND REPLACED BATTERIES; SET TO CUSTOM. ATTEMPTED TO CHANGE THE FIELD FACTOR OF THE HG_MAIN SENSOR BUT WAS UNSUCCESSFUL SO AT 16:49 I DELETED THE SENSOR AND STARTED IT OVER AND SET THE OFFSET FROM 11.34 TO THE DWL FOUND 6.011 FOR A NEW CALCULATED OFFSET OF -5.329. LEFT RUGGLES AT ABOUT 19:30 CENTRAL TIME AND DIDN&#x27;T MAKE IT BACK TO CAMP UNTIL ABOUT 21:30 BECAUSE OF SNOWMOBILE ISSUES AND LOSING OUR GEAR LOAD FROM THE QAMMITIQ AND HAVING TO RETRIEVE GEAR AND RE-PACK.  Mid-section"],"shape":[2],"dtype":"object","order":"little"}],["Width/Largeur",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIIDcQ4giqHB0QEAjfbWShAAAAA="},"shape":[2],"dtype":"float64","order":"little"}],["Area/Secteur",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIIHaQ7GYKDrAAA/1AatEAAAAA=="},"shape":[2],"dtype":"float64","order":"little"}],["Velocity/Vitesse",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wvaIdf6OvCLPdf1xQW2XNftAXY7qHgQAAAA"},"shape":[2],"dtype":"float64","order":"little"}],["Air Temperature/Temp\\u00e9rature de l&#x27;air",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WlgwOYAAC7MloQQAAAA"},"shape":[2],"dtype":"float64","order":"little"}],["Water Temperature/La temp\\u00e9rature de l&#x27;eau",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/5s1EwSEHRjA4IM9AFN91+UQAAAA"},"shape":[2],"dtype":"float64","order":"little"}],["Approval/Approbation",{"type":"ndarray","array":["Provisional/Provisoire","Provisional/Provisoire"],"shape":[2],"dtype":"object","order":"little"}],["Uncertainty/Incertitude",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zM2BgFuh1kzQUDdAQDj5wTMEAAAAA=="},"shape":[2],"dtype":"float64","order":"little"}],["quality_symbol",{"type":"ndarray","array":["E","B"],"shape":[2],"dtype":"object","order":"little"}],["quality_label",{"type":"ndarray","array":["Estimated","Ice Conditions"],"shape":[2],"dtype":"object","order":"little"}],["date_string",{"type":"ndarray","array":["2023-07-27","2023-05-31"],"shape":[2],"dtype":"object","order":"little"}],["time",{"type":"ndarray","array":["00:00","00:00"],"shape":[2],"dtype":"object","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p789493","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p789494"}}},"columns":[{"type":"object","name":"TableColumn","id":"p789470","attributes":{"field":"date_string","title":"Date (UTC/TUC)","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p789471"},"editor":{"type":"object","name":"StringEditor","id":"p789472"}}},{"type":"object","name":"TableColumn","id":"p789473","attributes":{"field":"time","title":"Time/Heure","width":100,"formatter":{"type":"object","name":"StringFormatter","id":"p789474"},"editor":{"type":"object","name":"StringEditor","id":"p789475"}}},{"type":"object","name":"TableColumn","id":"p789476","attributes":{"field":"Discharge/D\\u00e9bit","title":"Discharge/D\\u00e9bit","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p789477"},"editor":{"type":"object","name":"StringEditor","id":"p789478"}}},{"type":"object","name":"TableColumn","id":"p789479","attributes":{"field":"Mean Gauge Height/Niveau Moyen","title":"Mean Gauge Height/Niveau Moyen","width":180,"formatter":{"type":"object","name":"StringFormatter","id":"p789480"},"editor":{"type":"object","name":"StringEditor","id":"p789481"}}},{"type":"object","name":"TableColumn","id":"p789482","attributes":{"field":"quality_label","title":"Quality","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p789483"},"editor":{"type":"object","name":"StringEditor","id":"p789484"}}},{"type":"object","name":"TableColumn","id":"p789485","attributes":{"field":"Rating Curve Table Number/Num\\u00e9ro de cource de tarage","title":"Rating Curve #","width":120,"formatter":{"type":"object","name":"StringFormatter","id":"p789486"},"editor":{"type":"object","name":"StringEditor","id":"p789487"}}}],"index_position":null}}]}}';
                  const render_items = [{"docid":"90f0e9dc-c096-438b-bbcb-57056f47475c","roots":{"p789489":"d37475e1-02e6-4ab3-80ec-939c3731a915"},"root_ids":["p789489"]}];
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