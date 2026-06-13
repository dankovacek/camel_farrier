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
    
    
    const element = document.getElementById("c13fcd68-30ab-4533-aa9e-c48314438591");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c13fcd68-30ab-4533-aa9e-c48314438591' but no matching script tag was found.")
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
                  const docs_json = '{"fe72491e-a67a-40e4-8a16-39000ab94d92":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p378630","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p378631"}}},"roots":[{"type":"object","name":"Column","id":"p378731","attributes":{"children":[{"type":"object","name":"Figure","id":"p378632","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p378633"},"y_range":{"type":"object","name":"DataRange1d","id":"p378634"},"x_scale":{"type":"object","name":"LinearScale","id":"p378642"},"y_scale":{"type":"object","name":"LinearScale","id":"p378643"},"title":{"type":"object","name":"Title","id":"p378635","attributes":{"text":"08LG029 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378696","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378690","attributes":{"selected":{"type":"object","name":"Selection","id":"p378691","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378692"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYBB+MbPgEAODw9qpQBoAGIwrzBAAAAA="},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378697","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378698"}}},"glyph":{"type":"object","name":"VArea","id":"p378693","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p378694","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p378695","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p378707","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378701","attributes":{"selected":{"type":"object","name":"Selection","id":"p378702","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378703"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgS2FdwCABVFfi7CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378708","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378709"}}},"glyph":{"type":"object","name":"VArea","id":"p378704","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p378705","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p378706","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p378716","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378710","attributes":{"selected":{"type":"object","name":"Selection","id":"p378711","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378712"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYJi2r7vgEAB7GvxxCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378717","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378718"}}},"glyph":{"type":"object","name":"VArea","id":"p378713","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p378714","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p378715","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p378725","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378719","attributes":{"selected":{"type":"object","name":"Selection","id":"p378720","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378721"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JaUwQZBzA4f9gkaQGJWkyaRiFiXlgOJxM9pJkpiaDSbEoyluMBoNkMFHfPDAIhCRBLhFFMRCCQEFEfCEUAkG5RJKiWDgchkUeYTSq36fnwyOi02y6w+pEjOvFG/8rV7eh2vw8arnSxWdEoCyaiepaaycfHIPG0gXlaHcHv3g/6vaFaEJ+buefPIgq1wO1x502visVJcwb1VMj1/m8HDSeb6P0PL7GR5xGPfkdNPmWKK+XtvK9QagjJ6GxrWrhC7egeuM51H11V/noMBS7F1AVNzfzK6LR9Duj7Oxs4qftQV06H82qH7/nb8ej0otR299u5MtTUHy8UN0ZbuD3ZqFxWIlS+egK73cS9V0/NLGCMrP4Mn8hELW/NZp75+r5+I2oXnoWdc2l7/iAT1D+tEeV2FjHz4pEU+uE8n5bLf9wF+rkV9G4/GD4ywdQfbgI9Wj/JT4lGWWeJ6rGoRp+fTqaseUoafcv8q7HUTf7oNn0TzUvhagyAlC7WaFpLbvAB69DZWmDOru6inffhtI+DVXI5fO8VQSaY44oHq2VfNcO1KGz0Vh3V/B5+1B5LkR9s+8cH56IMtkDVf7gWd4rFc2tZSiRf5TztjmoC1aj8X5cxvflo4r2Rz3FEk1Rybf8iiBU/RNRx5wv5aduQSm1Q7WqroQfCEWz2wHFvvkbvjwK9RpnNIMdxfzez1A5zEdd0VvE+8aj3HVHFTtwhndMQVOlUPyHC/l7majj3kLj9KiAr8lDFeCHemT8az6hCGVWIKraCagDz53mH2xASX4GlculfL4+BE2QPcpowyk+ZTvquU5oGq6f5NfvQjU2B3VqTx6/4ABKsxuqTf0n+PEkNOlLUdyGjvOtR1BvXY7G4n4un52Lyt0HddvYMf7jAhSrAFTHnkC9pCyH7/wIJfRpVNbVR/kTwWiWTkO5WZ/Nh4ejnuSI5lRLFu+1A9WtV1Bvv5HJ2+xDKXBF5d2Xwf+UgCZqCcqUwXS+6DDqN5eh+eX3I3zMUVRTV6MuGU3jV+ajDKxFtdsC9fSSVL7sA5Q1E1ENVh7m92xGM8MOpaL2K943FPXQDDT7m1J4xyhUVS+jXttxiB/WKHHzUDn1fslfjEPzrjvKyK/JfMIh1M4KjfktiQ/MRPVgBeqkhwf52Xko9b6ogsYT+b/OoDn0HsrcCagazibw6zag+dsWJbXmC35BCOqm6Wg2NsTz45+iSn8R9WvX4/iWnShb56Cy6Pmcz4r9z38BfAQKuagHAAA="},"shape":[245],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9WUPUhbURTHVbBoSEUxo6hDh3boII4S7lscnIqrSOMg0lEcpLgYB8ciDuIa6uQHIlJUQmkf4iBBtPWjraTUWFusiKC1KRE1t+f8887j5ZKHSkXwLT/Oxz3n3Hvf/RcV8ZfpB+6G0cV0yOJuT9qrmVZjYxXTrh2sBNOPK5ipvlDQYQAc636I+MpKLt/JIxt50XAA9aKHrajjrm9dwHrqV454OFDKrG8fKrGK0b8Y/tC0VjlbK7I7urqy4NDimZfkyrAd6w7/hX+hNs2ker+Z9B0jfrJ+AH9b5z78Wy9/ggMje8zUowe7TGu3L6W01nXJs29s26eXX720giVJjr9f7v3kkteVTW2y3W8nPqJudvODU38D9WZ6vnj71DeUpdgWog/tN9Y8l8QcTh9ZZ/e++ww/9+H6AyMbLi+1jjTtrCkhhWM1bUsqS/7ho7fqgvpvr85zPvV54/IPDTZZM+HmSZzrVDydVRK/ihmqM37yWgkl3/T/r/1L651nr0bVTSnn4EfzXMT227e5T7+86/plLvPe/Oa9bb/f/u+b/xz/c9z9n81zkrjfvvzWy71Qebx7zzsVfRD9EOa961w///dNddXc6Zb3Xcv7j8RboD+iU6SX0CuTpHff4X8xDB3L0zOyoWsFKOso/gN9HF10bUcfpb/dEkQfqZ+nj7QPzOvVsefxbc5HnhkvkGfqKOk9zsVy6uSxwD3IPHL+tB7ngfmpP/0fiULEvcqcHpo6DfsfID8HeqgHAAA="},"shape":[245],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378726","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378727"}}},"glyph":{"type":"object","name":"Line","id":"p378722","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378723","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p378724","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378641","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p378668"},{"type":"object","name":"WheelZoomTool","id":"p378669","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p378670","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378671","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378677","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378676","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p378678","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p378679","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p378680","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p378681","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p378687","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378686","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p378688"},{"type":"object","name":"SaveTool","id":"p378689"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p378663","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378664","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378665"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378666"}}}],"right":[{"type":"object","name":"Legend","id":"p378699","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378700","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p378696"},{"id":"p378707"},{"id":"p378716"}]}},{"type":"object","name":"LegendItem","id":"p378728","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p378725"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p378644","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p378645","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p378646","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p378647","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p378648","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p378649","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p378650","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p378651","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p378652","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p378653","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p378654","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p378655","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p378656","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p378657"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p378660","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p378659","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p378658","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p378661"}}}],"center":[{"type":"object","name":"Grid","id":"p378662","attributes":{"axis":{"id":"p378644"}}},{"type":"object","name":"Grid","id":"p378667","attributes":{"dimension":1,"axis":{"id":"p378663"}}}]}},{"type":"object","name":"Div","id":"p378729","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"fe72491e-a67a-40e4-8a16-39000ab94d92","roots":{"p378731":"c13fcd68-30ab-4533-aa9e-c48314438591"},"root_ids":["p378731"]}];
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