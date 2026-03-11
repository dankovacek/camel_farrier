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
    
    
    const element = document.getElementById("b7ab3e96-8104-45ff-aacc-40c47139f9c3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b7ab3e96-8104-45ff-aacc-40c47139f9c3' but no matching script tag was found.")
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
                  const docs_json = '{"46d8497a-3a83-4871-84ad-fd71bbbad24b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p510154","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p510155"}}},"roots":[{"type":"object","name":"Column","id":"p510255","attributes":{"children":[{"type":"object","name":"Figure","id":"p510156","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p510157"},"y_range":{"type":"object","name":"DataRange1d","id":"p510158"},"x_scale":{"type":"object","name":"LinearScale","id":"p510166"},"y_scale":{"type":"object","name":"LinearScale","id":"p510167"},"title":{"type":"object","name":"Title","id":"p510159","attributes":{"text":"08LG029 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p510220","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510214","attributes":{"selected":{"type":"object","name":"Selection","id":"p510215","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510216"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYBB+MbPgEAODw9qpQBoAGIwrzBAAAAA="},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510221","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510222"}}},"glyph":{"type":"object","name":"VArea","id":"p510217","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p510218","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p510219","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p510231","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510225","attributes":{"selected":{"type":"object","name":"Selection","id":"p510226","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510227"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDgS2FdwCABVFfi7CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510232","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510233"}}},"glyph":{"type":"object","name":"VArea","id":"p510228","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p510229","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p510230","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p510240","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510234","attributes":{"selected":{"type":"object","name":"Selection","id":"p510235","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510236"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJi2r7vgEAB7GvxxCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510241","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510242"}}},"glyph":{"type":"object","name":"VArea","id":"p510237","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p510238","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p510239","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.022540000043809332},"y2":{"type":"value","value":5.344799766540527},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p510249","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510243","attributes":{"selected":{"type":"object","name":"Selection","id":"p510244","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510245"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JaUwQZBzA4f9gkaQGJWkyaRiFiXlgOJxM9pJkpiaDSbEoyluMBoNkMFHfPDAIhCRBLhFFMRCCQEFEfCEUAkG5RJKiWDgchkUeYTSq36fnwyOi02y6w+pEjOvFG/8rV7eh2vw8arnSxWdEoCyaiepaaycfHIPG0gXlaHcHv3g/6vaFaEJ+buefPIgq1wO1x502visVJcwb1VMj1/m8HDSeb6P0PL7GR5xGPfkdNPmWKK+XtvK9QagjJ6GxrWrhC7egeuM51H11V/noMBS7F1AVNzfzK6LR9Duj7Oxs4qftQV06H82qH7/nb8ej0otR299u5MtTUHy8UN0ZbuD3ZqFxWIlS+egK73cS9V0/NLGCMrP4Mn8hELW/NZp75+r5+I2oXnoWdc2l7/iAT1D+tEeV2FjHz4pEU+uE8n5bLf9wF+rkV9G4/GD4ywdQfbgI9Wj/JT4lGWWeJ6rGoRp+fTqaseUoafcv8q7HUTf7oNn0TzUvhagyAlC7WaFpLbvAB69DZWmDOru6inffhtI+DVXI5fO8VQSaY44oHq2VfNcO1KGz0Vh3V/B5+1B5LkR9s+8cH56IMtkDVf7gWd4rFc2tZSiRf5TztjmoC1aj8X5cxvflo4r2Rz3FEk1Rybf8iiBU/RNRx5wv5aduQSm1Q7WqroQfCEWz2wHFvvkbvjwK9RpnNIMdxfzez1A5zEdd0VvE+8aj3HVHFTtwhndMQVOlUPyHC/l7majj3kLj9KiAr8lDFeCHemT8az6hCGVWIKraCagDz53mH2xASX4GlculfL4+BE2QPcpowyk+ZTvquU5oGq6f5NfvQjU2B3VqTx6/4ABKsxuqTf0n+PEkNOlLUdyGjvOtR1BvXY7G4n4un52Lyt0HddvYMf7jAhSrAFTHnkC9pCyH7/wIJfRpVNbVR/kTwWiWTkO5WZ/Nh4ejnuSI5lRLFu+1A9WtV1Bvv5HJ2+xDKXBF5d2Xwf+UgCZqCcqUwXS+6DDqN5eh+eX3I3zMUVRTV6MuGU3jV+ajDKxFtdsC9fSSVL7sA5Q1E1ENVh7m92xGM8MOpaL2K943FPXQDDT7m1J4xyhUVS+jXttxiB/WKHHzUDn1fslfjEPzrjvKyK/JfMIh1M4KjfktiQ/MRPVgBeqkhwf52Xko9b6ogsYT+b/OoDn0HsrcCagazibw6zag+dsWJbXmC35BCOqm6Wg2NsTz45+iSn8R9WvX4/iWnShb56Cy6Pmcz4r9z38BfAQKuagHAAA="},"shape":[245],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qz0oxsOfRVxAPE0Y4RBtIOxsSCIPiDXKgCmv2rwgegHVSI8UJoLTC8u4AXLnzkjiKwOyAera7DlApvX8DpQAEV/4A4uqH2cUHWsIFohpp/JgRFsPyNYXGTdf3sI/789kJ+QlvYPTPcf+olMg/wBohcU2H4Di++Q+2oPMe8TVP4DWP7jpZdg8aiU52DxqxVPwXTj1Mcg+oEK20MQ7fCw6oH9////5W//vAfiH/j89w4y7cDDdBskv/9E2TU4DRLnWHMFxK8/cOoi2Nx/Vy5Azb8MNm9D0Q1kexQMOR4g02Dzgf5d4LrtNrI9MH0HyvZdh9sDMxdG//3/P976/nk4DfKvTNQR+39A/sS3e+z/AM25eW471J4tcPoL0ILVMqvg6mDiIHP4dDfB5QnRP4D0yo+L4DQucUrpF///3/fvnU4yDfMfLho9XNDDB5d/iQ0fQjSSO1DijV40Lv8PNfo3ODx34fQnTJ5U/bB4geV3pHwKKxdg+Ro9f6OUH7jyN5C23/b5KnK+hsnH7/K8g1xOActLrDSwvHsE5mdMfIhRnuGhYfqA/CfI5SKcD7UXRh/w5HmEbD6K/2DuRfZn3K6bOOWxqEMvR4Hl/FUUeWQaSzzAaFj4A/U/hLv/Pzh+T2GjYeU4LnNQaAAgPwd6qAcAAA=="},"shape":[245],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510250","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510251"}}},"glyph":{"type":"object","name":"Line","id":"p510246","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510247","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p510248","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p510165","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p510192"},{"type":"object","name":"WheelZoomTool","id":"p510193","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p510194","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p510195","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p510201","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510200","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p510202","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p510203","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p510204","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p510205","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p510211","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510210","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p510212"},{"type":"object","name":"SaveTool","id":"p510213"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p510187","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p510188","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p510189"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510190"}}}],"right":[{"type":"object","name":"Legend","id":"p510223","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p510224","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p510220"},{"id":"p510231"},{"id":"p510240"}]}},{"type":"object","name":"LegendItem","id":"p510252","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p510249"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p510168","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p510169","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p510170","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p510171","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p510172","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p510173","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p510174","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p510175","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p510176","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p510177","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p510178","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p510179","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p510180","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p510181"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p510184","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p510183","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p510182","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p510185"}}}],"center":[{"type":"object","name":"Grid","id":"p510186","attributes":{"axis":{"id":"p510168"}}},{"type":"object","name":"Grid","id":"p510191","attributes":{"dimension":1,"axis":{"id":"p510187"}}}]}},{"type":"object","name":"Div","id":"p510253","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"46d8497a-3a83-4871-84ad-fd71bbbad24b","roots":{"p510255":"b7ab3e96-8104-45ff-aacc-40c47139f9c3"},"root_ids":["p510255"]}];
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