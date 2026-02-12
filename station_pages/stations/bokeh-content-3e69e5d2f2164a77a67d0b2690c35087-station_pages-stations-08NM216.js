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
    
    
    const element = document.getElementById("cfda45c1-eebb-45c6-9ff9-5fbd3acf33b9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cfda45c1-eebb-45c6-9ff9-5fbd3acf33b9' but no matching script tag was found.")
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
                  const docs_json = '{"088bdc4d-f0b7-4765-ab3a-3005ce744408":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p940073","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p940074"}}},"roots":[{"type":"object","name":"Column","id":"p940151","attributes":{"children":[{"type":"object","name":"Figure","id":"p940075","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p940076"},"y_range":{"type":"object","name":"DataRange1d","id":"p940077"},"x_scale":{"type":"object","name":"LinearScale","id":"p940085"},"y_scale":{"type":"object","name":"LinearScale","id":"p940086"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p940133","attributes":{"start":-0.3150000071525574,"end":2.6419999504089358}}]]},"title":{"type":"object","name":"Title","id":"p940078","attributes":{"text":"08NM216 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p940144","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p940138","attributes":{"selected":{"type":"object","name":"Selection","id":"p940139","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p940140"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1492],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+3YO0jDQBgA4LRWcRBxdNIgJSAdSicnuYA4iIi4FAeR4uQgItJBRDAO0kEcJBQnoU4uTh1ERDA4OEgnxamURmztY1BKfWON8dKryRlDfbS0+nfoxz3y5+6/kDvCMG+/h0XmXf583sEzH+srrXS8ie8but4yyI/vYeWtI6wUiTh4u9qeO9HK+QJWENsb8bjtLoPSYI9BmfOYWm4/EpeNOU2l51UaV5XzWe8K69PWz+FSsMGqXZqdtJeTdyHYV0CftdvU/+6xR2RxPeuOPSDz+9+jP7gu8vBqDsHzCYIgCILVOR/7xSfLc4or8PztfVlRlLizqVCL+zrr8N58eVxaPq5+bT5qvFD/TrSceFLH8umB2bmJ88jIJO+d4Y04nKdAEARBEARBEARBEARBEPyPykMTaaRT8otY1h0z1BP5lakUbg9vpPRlojCVMrSTMi0dl0juy3hbM7j/5Bo2NNOb1cs6vFnT+pjToDTQgpW7ooZ4tKSdcQWyZpJ2X9toRj8+Il1P54/Mm85XKU9ie9oqX7TkOnodhPXpS1zeySf1flZPZM7msPIC0vpnuGRxPlr58DaB+zdva57PY2XOkyh+X08Ux3cB39v/nmT9IR8gCFZb375f+fb7x6buUyO7L6hS/X8wTvXc8lK379Uf5Kkm4mvn3YrGV89JdzW7vq98jdqqoC4AAA=="},"shape":[1492],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p940145","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p940146"}}},"glyph":{"type":"object","name":"Line","id":"p940141","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p940142","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p940143","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p940084","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p940111"},{"type":"object","name":"WheelZoomTool","id":"p940112","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p940113","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p940114","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p940120","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p940119","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p940121","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p940122","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p940123","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p940124","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p940130","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p940129","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p940131"},{"type":"object","name":"SaveTool","id":"p940132"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p940106","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p940107","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p940108"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p940109"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p940134","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p940135","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p940136"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p940137"}}},{"type":"object","name":"Legend","id":"p940147","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p940148","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p940144"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p940087","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p940088","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p940089","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p940090","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p940091","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p940092","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p940093","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p940094","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p940095","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p940096","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p940097","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p940098","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p940099","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p940100"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p940103","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p940102","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p940101","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p940104"}}}],"center":[{"type":"object","name":"Grid","id":"p940105","attributes":{"axis":{"id":"p940087"}}},{"type":"object","name":"Grid","id":"p940110","attributes":{"dimension":1,"axis":{"id":"p940106"}}}]}},{"type":"object","name":"Div","id":"p940149","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"088bdc4d-f0b7-4765-ab3a-3005ce744408","roots":{"p940151":"cfda45c1-eebb-45c6-9ff9-5fbd3acf33b9"},"root_ids":["p940151"]}];
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