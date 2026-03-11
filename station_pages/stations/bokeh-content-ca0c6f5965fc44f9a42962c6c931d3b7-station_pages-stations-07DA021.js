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
    
    
    const element = document.getElementById("a2e13371-dae1-42fc-9cb0-118cb87374dd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a2e13371-dae1-42fc-9cb0-118cb87374dd' but no matching script tag was found.")
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
                  const docs_json = '{"0b062f68-cd61-4f4c-bbd1-2f695eeb8b8d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p54910","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p54911"}}},"roots":[{"type":"object","name":"Column","id":"p54988","attributes":{"children":[{"type":"object","name":"Figure","id":"p54912","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p54913"},"y_range":{"type":"object","name":"DataRange1d","id":"p54914"},"x_scale":{"type":"object","name":"LinearScale","id":"p54922"},"y_scale":{"type":"object","name":"LinearScale","id":"p54923"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p54970","attributes":{"start":28.500999679565428,"end":28.833000411987303}}]]},"title":{"type":"object","name":"Title","id":"p54915","attributes":{"text":"07DA021 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p54981","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p54975","attributes":{"selected":{"type":"object","name":"Selection","id":"p54976","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p54977"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[944],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+1ZS0scQRDe5CjBXxDW+QtBvC1kIHjwH0jwsD9AxH/gaPCcEDHmpVl8v9/kISJzMycRPOS6EEJ+QUj2knW2Z2um65vqnhGE9dF7+aiqnu6p6urtr2pKpdbv31jp7qI3+K7iC/rq7w9MnyeXNj8yuTY6a7b/bzaf9s2J69YbkR7tebLk14ta1h491/N8kenD8pJ1HsJgeKXiP4j8/imPD/+scv+fbSi5erRmnZ/GZexj67L+Yktef2CT63Gc4TmFkV+htyvnwa9de3zW97jfI/t2f03265qnw1jtLrg/sL+YJyhjfql8tMj1leVUxrwV8hjPAZOFcxNML1xJNqF1XUEuOq9Dhw4dOnR44zC6f2v9nxWfVKjZ/a4v/B4/0+SH0fjHR8zuDX7j9+PUV/Pzgv2qz1ePDwvxN8YbBT9xXoXNiGc8+Q7jftzI+97vvQB+pr234EcwfFrxNX3e+LSOCXk8Gic5dU9o3c+0Hju25l2enMbhILvvej0BdUeGB3cY6+fzIr8kvf9oXva7rac6Mzj5xM8V1J9ox3pZ1b3SuOTcv4dzG9ftWL8HU2/j9z+bYZiewzd8/vFpZg+9V7CfXPaGXjr+7dDhHcGwPHkvznP9fML9b92HfW7MFd9noa+FfMDUh6L+mqkPx/p1it+tiv09God9YORJrK+o8StvaIfzreSe3onfb2ZbxISX2frCtji3/Nf6iBQPihPyKFN/nvgO8h7jPgJvyuXpXTL/UXqSEZEXCbwqb/5sv/p1/D2gxac0nkX8CnkWrY/rEd+j91Gyzg/b8cl8f7nue4PyG/rYSd5SXhns2L9XdYpW31K9gcjqGaEe7tg9+jeugwiLjqc4IJq+wxBSHJN4U5zbSPuD/0+3Ci8B0yhKS4AdAAA="},"shape":[944],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p54982","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p54983"}}},"glyph":{"type":"object","name":"Line","id":"p54978","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p54979","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p54980","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p54921","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p54948"},{"type":"object","name":"WheelZoomTool","id":"p54949","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p54950","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p54951","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p54957","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p54956","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p54958","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p54959","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p54960","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p54961","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p54967","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p54966","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p54968"},{"type":"object","name":"SaveTool","id":"p54969"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p54943","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p54944","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p54945"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p54946"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p54971","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p54972","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p54973"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p54974"}}},{"type":"object","name":"Legend","id":"p54984","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p54985","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p54981"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p54924","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p54925","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p54926","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p54927","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p54928","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p54929","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p54930","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p54931","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p54932","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p54933","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p54934","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p54935","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p54936","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p54937"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p54940","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p54939","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p54938","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p54941"}}}],"center":[{"type":"object","name":"Grid","id":"p54942","attributes":{"axis":{"id":"p54924"}}},{"type":"object","name":"Grid","id":"p54947","attributes":{"dimension":1,"axis":{"id":"p54943"}}}]}},{"type":"object","name":"Div","id":"p54986","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"0b062f68-cd61-4f4c-bbd1-2f695eeb8b8d","roots":{"p54988":"a2e13371-dae1-42fc-9cb0-118cb87374dd"},"root_ids":["p54988"]}];
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