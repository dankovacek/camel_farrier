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
    
    
    const element = document.getElementById("d2cba627-e9b3-4202-b6d6-75949ef1bac1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd2cba627-e9b3-4202-b6d6-75949ef1bac1' but no matching script tag was found.")
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
                  const docs_json = '{"99f82654-818f-400a-a3c0-a3127caa79ba":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p283871","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p283872"}}},"roots":[{"type":"object","name":"Column","id":"p283949","attributes":{"children":[{"type":"object","name":"Figure","id":"p283873","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p283874"},"y_range":{"type":"object","name":"DataRange1d","id":"p283875"},"x_scale":{"type":"object","name":"LinearScale","id":"p283883"},"y_scale":{"type":"object","name":"LinearScale","id":"p283884"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p283931","attributes":{"start":1.590000023841858,"end":2.427999963760376}}]]},"title":{"type":"object","name":"Title","id":"p283876","attributes":{"text":"08HA049 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p283942","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p283936","attributes":{"selected":{"type":"object","name":"Selection","id":"p283937","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p283938"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1371],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2aT2gTQRTGN4lIkSLSQw9BkkXESymhBymlh90ipZQgPRSkiMgecpBSPIgUETEpEkrxUHroofTQFRFRioiUICK4iJSQkxShiJRERIpIkZKD5t+Ok+ZYKplfQqgwe9jv9M1782b2ve/NjmHUnz9Jo33o/npq2Eb7x203mjvnA8RP5+1tdV7QMLzfk8heq/E0T1xR5wshrIWR5nn1+d26ISwSz+8ffavV9fSlw1uXmxrHzhRrxJ5cPzS/1MyuOi8k39uP1eMSkO/+V0rzs/MTNUuGb20zjuKSWr6EeOZ8L+LZXetV5Kd1EfGcxfcVtD+DfYiX6v1cRvvTfMl42dkyjGcZ7c++eWTPHc2geHrFGlv33UqNzK9w7os6T+ZPIzndeh7UqFGjxuOC9Xz4ZBXpV/vUNtOTp/vV7cn8az+cEbDOI555bVE93yvo3EP2poaqpJ6lRhz1eibdjL4YQ/XTiw+i+uks7aE6b3+9i3ju6gemK4Y2qq3oXmV+croK+xamtyJpxHMSw4hXuPMD6clC6X4Z5hems8e7Ec9M/yyh/XL9DeJ5uUcl2Hcie+7KSgnrXplnxOQ3Jb7M8xWtszVq1KjxIN8jfS71AdP1+QkBdaGAuvCfetk8OXd43JDkvY4Ios/z9ywB67UgOjvp5ZC9QuVZ5+w16nTn7DX0CFuHTFGdVxPCGlxA5/xonzX6AZ/4GR3o8sk6vIuk0Xm98Xwf9R+G/8mHfZkPdShaB3d/q3PfO7XXOJdG9ry1MPv/OLf8X/wH1qjxOKC7GQ/o70Vj2/V9dpbp9I2s0v0PWZda2r/OmSnE98a72Xl4bCdI7Ml+IUR4bjimzgscnPciP2V/1tF8Ivs65GfhwgC7h9XzIEDiaayfRfZSXg7do4peTdA+GfHcmz2MB3Us6iOP6rubyxNMN4djopPnvk5iWOtflXgt7bUvX/0FxKxmsNgqAAA="},"shape":[1371],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p283943","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p283944"}}},"glyph":{"type":"object","name":"Line","id":"p283939","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p283940","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p283941","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p283882","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p283909"},{"type":"object","name":"WheelZoomTool","id":"p283910","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p283911","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p283912","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p283918","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p283917","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p283919","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p283920","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p283921","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p283922","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p283928","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p283927","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p283929"},{"type":"object","name":"SaveTool","id":"p283930"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p283904","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p283905","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p283906"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p283907"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p283932","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p283933","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p283934"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p283935"}}},{"type":"object","name":"Legend","id":"p283945","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p283946","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p283942"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p283885","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p283886","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p283887","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p283888","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p283889","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p283890","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p283891","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p283892","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p283893","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p283894","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p283895","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p283896","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p283897","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p283898"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p283901","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p283900","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p283899","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p283902"}}}],"center":[{"type":"object","name":"Grid","id":"p283903","attributes":{"axis":{"id":"p283885"}}},{"type":"object","name":"Grid","id":"p283908","attributes":{"dimension":1,"axis":{"id":"p283904"}}}]}},{"type":"object","name":"Div","id":"p283947","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"99f82654-818f-400a-a3c0-a3127caa79ba","roots":{"p283949":"d2cba627-e9b3-4202-b6d6-75949ef1bac1"},"root_ids":["p283949"]}];
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