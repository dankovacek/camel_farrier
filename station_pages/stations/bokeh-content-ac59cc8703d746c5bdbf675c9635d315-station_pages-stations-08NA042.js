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
    
    
    const element = document.getElementById("f4492c77-a199-480d-9042-3adc44ff1c54");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f4492c77-a199-480d-9042-3adc44ff1c54' but no matching script tag was found.")
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
                  const docs_json = '{"25e23ae0-d9c5-42d1-86e9-e787c459049f":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p353176","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p353177"}}},"roots":[{"type":"object","name":"Column","id":"p353250","attributes":{"children":[{"type":"object","name":"Figure","id":"p353178","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p353179"},"y_range":{"type":"object","name":"DataRange1d","id":"p353180"},"x_scale":{"type":"object","name":"LinearScale","id":"p353188"},"y_scale":{"type":"object","name":"LinearScale","id":"p353189"},"title":{"type":"object","name":"Title","id":"p353181","attributes":{"text":"08NA042 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p353242","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353236","attributes":{"selected":{"type":"object","name":"Selection","id":"p353237","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353238"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JfWgMYBzA8R9ZWy7LGE3DanW1oom8NE17mizL6yLq6mpZTYZxNZ2m6bksWUQ7jrPjZrfd7GxzHDe3aJ4hsqjLhYZpMlZXV0QTaV6+f33++IjouD3meCBiaiwoaf13/qtaq1EXZaNJDPbxtQdQZSxAHRiK8sWHUV5bUTkSt3mLC02wEEW9u8W/aUJdtwpN5qcIH3KjWqtQj6Ru8k4fyqxyVD0TN/iyDjSjFShH/oT5Ob2owzY05RkoY9Hr/NEq1DlZaCIDvfymfajG56F2Penhcw+h9OWj2hrv5pMNaBoXoeQNX+P7j6PethxN6kOIP3EGVf4a1PeSXfwOL8rXdahOfrvKW9vQ3N+MYvvdyX8PoT69E01BGsrDSJC3V6L+MQNN890OfvEeVI/noq581M7/cqB48lAteR7gn9ajqSpAmXzZxnuPoV62FM2z91f43adQTVmN2jfeyq/woMRLUdV88fPT/Gj8G1CKfl7mE52o929Hkz4VJRC+xBfbUb+ajuZgzMdbqlEFZ6MuGWzhh2tR6uajyhy6yHc50ZRaUUZeeHmnRp1ViKb77QW+rAnV6ErU9WPn+Ww3SrgEVXnKw39sQdOwHiVn4hwfaUe9sQLN58mzvKsHVa4NdTQdzZaom0/uQtU4E/XCgWY+tveffwGkelyj0AMAAA=="},"shape":[122],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qx0oqf//2//sKrE/iKYbrF/+v///qKMifa/gHTZvvX23///nz9z5kz7d2D5KSDx+75JE+z///9fv29+l/01ID9wR5/9B6D6kskdcHNg9G+guul5TXD6KlCcY00NBr0NrL8Cg0aXh7kXF42uDt08QvphNMSfBVB9GQNOD1Z3wdwDiydC7oSJo6tDp3HFP0S+gWC6wUWjpwtizSM23aDTAMhD/oXQAwAA"},"shape":[122],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353243","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353244"}}},"glyph":{"type":"object","name":"Line","id":"p353239","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353240","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p353241","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p353187","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p353214"},{"type":"object","name":"WheelZoomTool","id":"p353215","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p353216","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p353217","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p353223","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p353222","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p353224","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p353225","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p353226","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p353227","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p353233","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p353232","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p353234"},{"type":"object","name":"SaveTool","id":"p353235"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p353209","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p353210","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p353211"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p353212"}}}],"right":[{"type":"object","name":"Legend","id":"p353245","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p353246","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p353242"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p353190","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p353191","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p353192","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p353193","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p353194","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p353195","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p353196","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p353197","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p353198","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p353199","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p353200","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p353201","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p353202","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p353203"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p353206","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p353205","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p353204","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p353207"}}}],"center":[{"type":"object","name":"Grid","id":"p353208","attributes":{"axis":{"id":"p353190"}}},{"type":"object","name":"Grid","id":"p353213","attributes":{"dimension":1,"axis":{"id":"p353209"}}}]}},{"type":"object","name":"Div","id":"p353247","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p353249","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p353248","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"25e23ae0-d9c5-42d1-86e9-e787c459049f","roots":{"p353250":"f4492c77-a199-480d-9042-3adc44ff1c54"},"root_ids":["p353250"]}];
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