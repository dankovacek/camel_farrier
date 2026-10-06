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
    
    
    const element = document.getElementById("d0589ddd-bc63-45f7-8a18-ced1ff79a17e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd0589ddd-bc63-45f7-8a18-ced1ff79a17e' but no matching script tag was found.")
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
                  const docs_json = '{"481e8f1b-13aa-4557-baa0-2162ebea6b36":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p228147","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p228148"}}},"roots":[{"type":"object","name":"Column","id":"p228220","attributes":{"children":[{"type":"object","name":"Figure","id":"p228149","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p228150"},"y_range":{"type":"object","name":"DataRange1d","id":"p228151"},"x_scale":{"type":"object","name":"LinearScale","id":"p228159"},"y_scale":{"type":"object","name":"LinearScale","id":"p228160"},"title":{"type":"object","name":"Title","id":"p228152","attributes":{"text":"07BK004 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p228213","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228207","attributes":{"selected":{"type":"object","name":"Selection","id":"p228208","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228209"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JfUQccBjA8UdELJumpClFRDQ1s0zEQ5Rm75qNNCLVNFnjiMivlNk0zWYjUmu9rdbL1W1X10rPTtM0sUhZ0jRlcRxL2ZIp+/71+eMjYr7AtCcoIlcrUHdi0TUGP/7XEh+gTCSh3vg6xYdq0ZrTUFKWA/xUA7qiTLTw+iT/+Alq6kV0M9sT/O0XKLuK2hL282ntaFaIUvznA7/fg671Jlq6oMwNv+fvFqP7G4X23O/jz5ahzsegK50d5w/vo7w6g5r1ZYxf8KCVpaIcffPybfXozmegLX4f5SsfoUZcQNf+c4TPfoaylItaFRrmI9vQOvNRcvaG+OUudNXX0KL+veO7B1Fz76BbjUSr8Q3y0aWofSfR6fQAv3YPxROPeurzW37gIVpeCsrGYj9fW4fudDra0EofX9CEunkOXd2PXj7uKYo3B/XSTg+/9RKtPg8l4Xc37+tAd+Uy2q+DN3xjP2riLXT+CLTr3i4+VILafAJdcuA1HyhHKYpFDX/q9ASPAQ642k3YAgAA"},"shape":[91],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqGNCMDAwJlltO2MNooKcSBCJO2v/7/98+btdJeyD/gFzrafu////Pd394Ck7D5JHUNYjdPAdSj0L/B+o7onDBHkYD7XmgwnYRxI+33HIBpH7B25rzcBpo3v0qkXMg+8E0FnvxiiOZb29sfBlsrpT+VZB98huKboD86bDlxD2QuMN9/4fIdIMt12Owf+e+B9MJ/YeeItNgeVz6YeJI8guOKDwA2w+l0e2D8bGqw2IeMB5ug8wDAuqnPwAy1SuM2AIAAA=="},"shape":[91],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p228214","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228215"}}},"glyph":{"type":"object","name":"Line","id":"p228210","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p228211","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p228212","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p228158","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p228185"},{"type":"object","name":"WheelZoomTool","id":"p228186","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p228187","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p228188","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p228194","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p228193","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p228195","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p228196","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p228197","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p228198","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p228204","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p228203","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p228205"},{"type":"object","name":"SaveTool","id":"p228206"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p228180","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p228181","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p228182"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p228183"}}}],"right":[{"type":"object","name":"Legend","id":"p228216","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p228217","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p228213"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p228161","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p228162","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p228163","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p228164","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p228165","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p228166","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p228167","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p228168","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p228169","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p228170","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p228171","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p228172","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p228173","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p228174"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p228177","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p228176","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p228175","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p228178"}}}],"center":[{"type":"object","name":"Grid","id":"p228179","attributes":{"axis":{"id":"p228161"}}},{"type":"object","name":"Grid","id":"p228184","attributes":{"dimension":1,"axis":{"id":"p228180"}}}]}},{"type":"object","name":"Div","id":"p228218","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"481e8f1b-13aa-4557-baa0-2162ebea6b36","roots":{"p228220":"d0589ddd-bc63-45f7-8a18-ced1ff79a17e"},"root_ids":["p228220"]}];
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