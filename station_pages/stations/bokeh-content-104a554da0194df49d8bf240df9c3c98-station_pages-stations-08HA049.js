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
    
    
    const element = document.getElementById("f87225d4-353c-47a0-a6f7-9a7fc7bd4d82");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f87225d4-353c-47a0-a6f7-9a7fc7bd4d82' but no matching script tag was found.")
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
                  const docs_json = '{"ae5590ae-83ea-46db-a4e4-18f722635161":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p195439","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p195440"}}},"roots":[{"type":"object","name":"Column","id":"p195517","attributes":{"children":[{"type":"object","name":"Figure","id":"p195441","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p195442"},"y_range":{"type":"object","name":"DataRange1d","id":"p195443"},"x_scale":{"type":"object","name":"LinearScale","id":"p195451"},"y_scale":{"type":"object","name":"LinearScale","id":"p195452"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p195499","attributes":{"start":1.590000023841858,"end":2.427999963760376}}]]},"title":{"type":"object","name":"Title","id":"p195444","attributes":{"text":"08HA049 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p195510","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p195504","attributes":{"selected":{"type":"object","name":"Selection","id":"p195505","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p195506"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1371],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+2aQUgUYRTHxzViiYjw4EFiHSK6iIiHEOkwIxERS3QQQiJiDh5CpEOEREQ7EotIB+ngYfHgREQUS0TIEhE0RMiyp5BAIsSNCImIkD2kbbvb/9thINdlmPd3CbTxMuzqb9773nvf+/5vRk1TPxup+qU1V+fHI81s4f1a5VfjffSVY22Mn9ar63Iupmnuz2E5B6d3Gk993wV5Pmq1mjE9FJ5T67t2pWYQebe+vKsy3JZ8VuHw0rlQ9zFzpQpjD/mj1mePr8m5dqxu+UGo9WyJQxs+9T4Xrc9cPV8xEL75xaSI8+3as6coTp/qpDgznv3N5M82TlCcNfOmzNjTYj0UZ3d++MXYc/VnHJefoDjEU86p+uyZknOqD57OUfF0SxUu72tleX1ifcWjH+Uc+qeWGpPvd2D+PoyurdEvURyjOLZSD//X9aT64cO58Dryr35mHliW6ybw1qFeuT30X/PuOGUP5zzF6Zdm5P1eoHMb604fGZSfg8ifPWTJzzPoye6nZ+Qc7LnJATmH/Fn3vsvXhyCZn25SnDP3luKswQWK83WvmE+NUfYwt3B6K5GmOGv0JMUVb3yl9GRx8zbFob9QnHv2IMXp6W+bzDxgXn5JcW7hvpzz5k45h/3nZDIUV+9v6DO14c8iHn2eqrPGfhp9jnRipBPrgm0jisPujQP6vVwvY7nQBxSH541yvezpQjnn6cJAna3vn9x+Xzx/tV4ktn9fT3NAvUOfr94y5BxuivNazuH4S7kFOQd7xfJjOcfa887pf2fP0yNyeyoPuZKcq+B9ycC0nGPrTPkZzwbWddM6hZ/d/XE5h/y9TqTlc5naLU/WqflDq76X+wlzmMs4LpOR50/ZW1+iOGq/s/a859KUn+58F9XntclZjgvqr6qeot9HemsP1oGzmKT+PyDaDwF6bA/WiTTfbn6C6sPmQj48B52Nc3BH9WsdHqF4PFejznu9byVmEvWBeaGd4ZyuPjmHcxvPeyk/MZ9R8ZTWl//3mOsoP4vH+yk/rY47ck7NBdkjcg6Y7RbC7we/rtR7kIujcg484klxztUOjiN1LDVHYn1N524/bgFX9AlKx2L/URxcofQW3mdQeWDt7XYO7++ofdl03X8AxKxmsNgqAAA="},"shape":[1371],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p195511","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p195512"}}},"glyph":{"type":"object","name":"Line","id":"p195507","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p195508","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p195509","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p195450","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p195477"},{"type":"object","name":"WheelZoomTool","id":"p195478","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p195479","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p195480","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p195486","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p195485","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p195487","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p195488","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p195489","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p195490","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p195496","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p195495","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p195497"},{"type":"object","name":"SaveTool","id":"p195498"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p195472","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p195473","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p195474"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p195475"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p195500","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p195501","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p195502"},"axis_label":"Water Level (m)","major_label_policy":{"type":"object","name":"AllLabels","id":"p195503"}}},{"type":"object","name":"Legend","id":"p195513","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p195514","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p195510"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p195453","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p195454","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p195455","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p195456","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p195457","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p195458","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p195459","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p195460","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p195461","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p195462","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p195463","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p195464","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p195465","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p195466"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p195469","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p195468","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p195467","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p195470"}}}],"center":[{"type":"object","name":"Grid","id":"p195471","attributes":{"axis":{"id":"p195453"}}},{"type":"object","name":"Grid","id":"p195476","attributes":{"dimension":1,"axis":{"id":"p195472"}}}]}},{"type":"object","name":"Div","id":"p195515","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"ae5590ae-83ea-46db-a4e4-18f722635161","roots":{"p195517":"f87225d4-353c-47a0-a6f7-9a7fc7bd4d82"},"root_ids":["p195517"]}];
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