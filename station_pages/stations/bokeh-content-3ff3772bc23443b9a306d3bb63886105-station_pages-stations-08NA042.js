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
    
    
    const element = document.getElementById("cd3ff432-f765-4291-aebe-3f49a158f198");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cd3ff432-f765-4291-aebe-3f49a158f198' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.8.0.min.js"];
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
                  const docs_json = '{"8b2b35a7-5ff9-48d8-9dc6-6c196e15e157":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p353395","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p353396"}}},"roots":[{"type":"object","name":"Column","id":"p353469","attributes":{"children":[{"type":"object","name":"Figure","id":"p353397","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p353398"},"y_range":{"type":"object","name":"DataRange1d","id":"p353399"},"x_scale":{"type":"object","name":"LinearScale","id":"p353407"},"y_scale":{"type":"object","name":"LinearScale","id":"p353408"},"title":{"type":"object","name":"Title","id":"p353400","attributes":{"text":"08NA042 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p353461","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353455","attributes":{"selected":{"type":"object","name":"Selection","id":"p353456","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353457"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JfWgMYBzA8R9ZWy7LGE3DanW1oom8NE17mizL6yLq6mpZTYZxNZ2m6bksWUQ7jrPjZrfd7GxzHDe3aJ4hsqjLhYZpMlZXV0QTaV6+f33++IjouD3meCBiaiwoaf13/qtaq1EXZaNJDPbxtQdQZSxAHRiK8sWHUV5bUTkSt3mLC02wEEW9u8W/aUJdtwpN5qcIH3KjWqtQj6Ru8k4fyqxyVD0TN/iyDjSjFShH/oT5Ob2owzY05RkoY9Hr/NEq1DlZaCIDvfymfajG56F2Penhcw+h9OWj2hrv5pMNaBoXoeQNX+P7j6PethxN6kOIP3EGVf4a1PeSXfwOL8rXdahOfrvKW9vQ3N+MYvvdyX8PoT69E01BGsrDSJC3V6L+MQNN890OfvEeVI/noq581M7/cqB48lAteR7gn9ajqSpAmXzZxnuPoV62FM2z91f43adQTVmN2jfeyq/woMRLUdV88fPT/Gj8G1CKfl7mE52o929Hkz4VJRC+xBfbUb+ajuZgzMdbqlEFZ6MuGWzhh2tR6uajyhy6yHc50ZRaUUZeeHmnRp1ViKb77QW+rAnV6ErU9WPn+Ww3SrgEVXnKw39sQdOwHiVn4hwfaUe9sQLN58mzvKsHVa4NdTQdzZaom0/uQtU4E/XCgWY+tveffwGkelyj0AMAAA=="},"shape":[122],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qx0oqf//2//sKrE/iKYbrF/+v///qKMifa/gHTZvvX23///nz9z5kz7d2D5KSDx+75JE+z///9fv29+l/01ID9wR5/9B6D6kskdcHNg9G+guul5TXD6KlCcY00NBr0NrL8Cg0aXh7kXF42uDt08QvphNMSfBVB9GQNOD1Z3wdwDiydC7oSJo6tDp3HFP0S+gWC6wUWjpwtizSM23aDTAMhD/oXQAwAA"},"shape":[122],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353462","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353463"}}},"glyph":{"type":"object","name":"Line","id":"p353458","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353459","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p353460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p353406","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p353433"},{"type":"object","name":"WheelZoomTool","id":"p353434","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p353435","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p353436","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p353442","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p353441","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p353443","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p353444","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p353445","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p353446","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p353452","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p353451","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p353453"},{"type":"object","name":"SaveTool","id":"p353454"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p353428","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p353429","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p353430"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p353431"}}}],"right":[{"type":"object","name":"Legend","id":"p353464","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p353465","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p353461"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p353409","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p353410","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p353411","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p353412","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p353413","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p353414","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p353415","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p353416","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p353417","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p353418","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p353419","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p353420","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p353421","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p353422"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p353425","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p353424","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p353423","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p353426"}}}],"center":[{"type":"object","name":"Grid","id":"p353427","attributes":{"axis":{"id":"p353409"}}},{"type":"object","name":"Grid","id":"p353432","attributes":{"dimension":1,"axis":{"id":"p353428"}}}]}},{"type":"object","name":"Div","id":"p353466","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p353468","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p353467","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"8b2b35a7-5ff9-48d8-9dc6-6c196e15e157","roots":{"p353469":"cd3ff432-f765-4291-aebe-3f49a158f198"},"root_ids":["p353469"]}];
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