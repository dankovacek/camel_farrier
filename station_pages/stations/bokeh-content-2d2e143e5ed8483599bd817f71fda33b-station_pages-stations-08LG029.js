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
    
    
    const element = document.getElementById("e612566e-4caf-4bd6-bbc4-af3227374df7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e612566e-4caf-4bd6-bbc4-af3227374df7' but no matching script tag was found.")
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
                  const docs_json = '{"5abf536f-f091-4dbd-afda-d0a92a5fdf90":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p378410","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p378411"}}},"roots":[{"type":"object","name":"Column","id":"p378511","attributes":{"children":[{"type":"object","name":"Figure","id":"p378412","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p378413"},"y_range":{"type":"object","name":"DataRange1d","id":"p378414"},"x_scale":{"type":"object","name":"LinearScale","id":"p378422"},"y_scale":{"type":"object","name":"LinearScale","id":"p378423"},"title":{"type":"object","name":"Title","id":"p378415","attributes":{"text":"08LG029 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378476","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378470","attributes":{"selected":{"type":"object","name":"Selection","id":"p378471","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378472"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYBB+MbPgEAODw9qpQBoAGIwrzBAAAAA="},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378477","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378478"}}},"glyph":{"type":"object","name":"VArea","id":"p378473","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p378474","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p378475","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p378487","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378481","attributes":{"selected":{"type":"object","name":"Selection","id":"p378482","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378483"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgS2FdwCABVFfi7CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378488","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378489"}}},"glyph":{"type":"object","name":"VArea","id":"p378484","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p378485","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p378486","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p378496","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378490","attributes":{"selected":{"type":"object","name":"Selection","id":"p378491","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378492"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYJi2r7vgEAB7GvxxCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378497","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378498"}}},"glyph":{"type":"object","name":"VArea","id":"p378493","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p378494","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p378495","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p378505","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378499","attributes":{"selected":{"type":"object","name":"Selection","id":"p378500","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378501"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JaUwQZBzA4f9gkaQGJWkyaRiFiXlgOJxM9pJkpiaDSbEoyluMBoNkMFHfPDAIhCRBLhFFMRCCQEFEfCEUAkG5RJKiWDgchkUeYTSq36fnwyOi02y6w+pEjOvFG/8rV7eh2vw8arnSxWdEoCyaiepaaycfHIPG0gXlaHcHv3g/6vaFaEJ+buefPIgq1wO1x502visVJcwb1VMj1/m8HDSeb6P0PL7GR5xGPfkdNPmWKK+XtvK9QagjJ6GxrWrhC7egeuM51H11V/noMBS7F1AVNzfzK6LR9Duj7Oxs4qftQV06H82qH7/nb8ej0otR299u5MtTUHy8UN0ZbuD3ZqFxWIlS+egK73cS9V0/NLGCMrP4Mn8hELW/NZp75+r5+I2oXnoWdc2l7/iAT1D+tEeV2FjHz4pEU+uE8n5bLf9wF+rkV9G4/GD4ywdQfbgI9Wj/JT4lGWWeJ6rGoRp+fTqaseUoafcv8q7HUTf7oNn0TzUvhagyAlC7WaFpLbvAB69DZWmDOru6inffhtI+DVXI5fO8VQSaY44oHq2VfNcO1KGz0Vh3V/B5+1B5LkR9s+8cH56IMtkDVf7gWd4rFc2tZSiRf5TztjmoC1aj8X5cxvflo4r2Rz3FEk1Rybf8iiBU/RNRx5wv5aduQSm1Q7WqroQfCEWz2wHFvvkbvjwK9RpnNIMdxfzez1A5zEdd0VvE+8aj3HVHFTtwhndMQVOlUPyHC/l7majj3kLj9KiAr8lDFeCHemT8az6hCGVWIKraCagDz53mH2xASX4GlculfL4+BE2QPcpowyk+ZTvquU5oGq6f5NfvQjU2B3VqTx6/4ABKsxuqTf0n+PEkNOlLUdyGjvOtR1BvXY7G4n4un52Lyt0HddvYMf7jAhSrAFTHnkC9pCyH7/wIJfRpVNbVR/kTwWiWTkO5WZ/Nh4ejnuSI5lRLFu+1A9WtV1Bvv5HJ2+xDKXBF5d2Xwf+UgCZqCcqUwXS+6DDqN5eh+eX3I3zMUVRTV6MuGU3jV+ajDKxFtdsC9fSSVL7sA5Q1E1ENVh7m92xGM8MOpaL2K943FPXQDDT7m1J4xyhUVS+jXttxiB/WKHHzUDn1fslfjEPzrjvKyK/JfMIh1M4KjfktiQ/MRPVgBeqkhwf52Xko9b6ogsYT+b/OoDn0HsrcCagazibw6zag+dsWJbXmC35BCOqm6Wg2NsTz45+iSn8R9WvX4/iWnShb56Cy6Pmcz4r9z38BfAQKuagHAAA="},"shape":[245],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9WUPUhbURTHVbBoSEUxo6hDh3boII4S7lscnIqrSOMg0lEcpLgYB8ciDuIa6uQHIlJUQmkf4iBBtPWjraTUWFusiKC1KRE1t+f8887j5ZKHSkXwLT/Oxz3n3Hvf/RcV8ZfpB+6G0cV0yOJuT9qrmVZjYxXTrh2sBNOPK5ipvlDQYQAc636I+MpKLt/JIxt50XAA9aKHrajjrm9dwHrqV454OFDKrG8fKrGK0b8Y/tC0VjlbK7I7urqy4NDimZfkyrAd6w7/hX+hNs2ker+Z9B0jfrJ+AH9b5z78Wy9/ggMje8zUowe7TGu3L6W01nXJs29s26eXX720giVJjr9f7v3kkteVTW2y3W8nPqJudvODU38D9WZ6vnj71DeUpdgWog/tN9Y8l8QcTh9ZZ/e++ww/9+H6AyMbLi+1jjTtrCkhhWM1bUsqS/7ho7fqgvpvr85zPvV54/IPDTZZM+HmSZzrVDydVRK/ihmqM37yWgkl3/T/r/1L651nr0bVTSnn4EfzXMT227e5T7+86/plLvPe/Oa9bb/f/u+b/xz/c9z9n81zkrjfvvzWy71Qebx7zzsVfRD9EOa961w///dNddXc6Zb3Xcv7j8RboD+iU6SX0CuTpHff4X8xDB3L0zOyoWsFKOso/gN9HF10bUcfpb/dEkQfqZ+nj7QPzOvVsefxbc5HnhkvkGfqKOk9zsVy6uSxwD3IPHL+tB7ngfmpP/0fiULEvcqcHpo6DfsfID8HeqgHAAA="},"shape":[245],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378506","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378507"}}},"glyph":{"type":"object","name":"Line","id":"p378502","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378503","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p378504","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378421","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p378448"},{"type":"object","name":"WheelZoomTool","id":"p378449","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p378450","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378451","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378457","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378456","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p378458","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p378459","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p378460","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p378461","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p378467","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378466","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p378468"},{"type":"object","name":"SaveTool","id":"p378469"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p378443","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378444","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378445"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378446"}}}],"right":[{"type":"object","name":"Legend","id":"p378479","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378480","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p378476"},{"id":"p378487"},{"id":"p378496"}]}},{"type":"object","name":"LegendItem","id":"p378508","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p378505"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p378424","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p378425","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p378426","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p378427","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p378428","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p378429","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p378430","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p378431","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p378432","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p378433","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p378434","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p378435","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p378436","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p378437"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p378440","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p378439","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p378438","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p378441"}}}],"center":[{"type":"object","name":"Grid","id":"p378442","attributes":{"axis":{"id":"p378424"}}},{"type":"object","name":"Grid","id":"p378447","attributes":{"dimension":1,"axis":{"id":"p378443"}}}]}},{"type":"object","name":"Div","id":"p378509","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"5abf536f-f091-4dbd-afda-d0a92a5fdf90","roots":{"p378511":"e612566e-4caf-4bd6-bbc4-af3227374df7"},"root_ids":["p378511"]}];
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