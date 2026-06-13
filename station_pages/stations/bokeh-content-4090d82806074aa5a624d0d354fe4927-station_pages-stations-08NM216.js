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
    
    
    const element = document.getElementById("d37f272e-b7f9-49bd-88c5-cd0d37fb7118");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd37f272e-b7f9-49bd-88c5-cd0d37fb7118' but no matching script tag was found.")
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
                  const docs_json = '{"56410589-feb0-4fae-af83-6af88258aa21":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p717248","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p717249"}}},"roots":[{"type":"object","name":"Column","id":"p717326","attributes":{"children":[{"type":"object","name":"Figure","id":"p717250","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p717251"},"y_range":{"type":"object","name":"DataRange1d","id":"p717252"},"x_scale":{"type":"object","name":"LinearScale","id":"p717260"},"y_scale":{"type":"object","name":"LogScale","id":"p717261"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p717308","attributes":{"start":-0.3150000071525574,"end":2.6419999504089358}}]]},"title":{"type":"object","name":"Title","id":"p717253","attributes":{"text":"08NM216 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p717319","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p717313","attributes":{"selected":{"type":"object","name":"Selection","id":"p717314","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p717315"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1492],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+1aTygEURgfa8lBcnRik5Qc5OQkU3KQJBc5SJuTgyQ5SGrHQQ5ykOSk1snFaQ+SlMnBQXsiJ8nIfweS/8L65huf5j371iytmL65/Pq+771v3vu9b3779s1omn09RBAc1PeHgrrLluOZss2NObxv9HJeQL1zGW1rfh3RjMeDegDaXW069vULojFVlGOjFqgU0GyqQZvQKq9GW0av7Sh/aLcM88gILoHPj3FJfrkd2xJvM72p63BkOtvmX8Wb2d8dSBWnfsZ0/UudKk8WBCo6HpVxCIeqdh+SxeH+98n8qvH+F7/VMnHlx3n9F/55nKJOMB/Mh3v/wvXA9eDHejAHpp6Uv7v2PqVy7FkZh3DK5yKRSOyV5ar3QV/1z2A8FGy7SXteDh8XafdTzQPyRRsWd7zkM4tHt1aT5IH/G9an/sB7SWx275M/Sf+U68ftbQaE/11sMx8Rfi74uWBdYF1kHWAdYB1gHWAdYB1gHWAdYB1gHWAdYB1gHfjzOmA1d53a56OEcA6ONrx3F/wU18d7TjAem0Ukm9DoORHiZMso35dsuq/WVnBm5ze6JxGjfbXnboRza8GmOHwvgn5CszEfbat0R8hHeQkpDuf82F5GiocL2zEPjY9Q9sv80fxlvohH+I4F+ZZ5UtnUT14HY6b32M6jL14fuVHlp3ba9iC2t4brEI2zckSYn2Ov3R5ivrwFB/eHEOHcHREuRBjvwbvN+ufw4gsejPf1hyn5Yj48D17HiI+eT7/Xc3hlIPHt3xV4v2y1Lr167p9ue1cdpTtO2Ld4H9dfq9cf8OSpXjOdHwYB+92M8g/fe995rrvfXt83fI3aqqAuAAA="},"shape":[1492],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p717320","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p717321"}}},"glyph":{"type":"object","name":"Line","id":"p717316","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p717317","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p717318","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p717259","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p717286"},{"type":"object","name":"WheelZoomTool","id":"p717287","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p717288","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p717289","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p717295","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p717294","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p717296","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p717297","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p717298","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p717299","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p717305","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p717304","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p717306"},{"type":"object","name":"SaveTool","id":"p717307"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LogAxis","id":"p717281","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p717282","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p717283"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p717284"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p717309","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p717310","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p717311"},"axis_label":"Water Level (m)","major_label_policy":{"type":"object","name":"AllLabels","id":"p717312"}}},{"type":"object","name":"Legend","id":"p717322","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p717323","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p717319"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p717262","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p717263","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p717264","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p717265","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p717266","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p717267","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p717268","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p717269","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p717270","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p717271","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p717272","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p717273","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p717274","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p717275"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p717278","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p717277","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p717276","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p717279"}}}],"center":[{"type":"object","name":"Grid","id":"p717280","attributes":{"axis":{"id":"p717262"}}},{"type":"object","name":"Grid","id":"p717285","attributes":{"dimension":1,"axis":{"id":"p717281"}}}]}},{"type":"object","name":"Div","id":"p717324","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"56410589-feb0-4fae-af83-6af88258aa21","roots":{"p717326":"d37f272e-b7f9-49bd-88c5-cd0d37fb7118"},"root_ids":["p717326"]}];
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