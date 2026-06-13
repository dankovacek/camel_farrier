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
    
    
    const element = document.getElementById("ee32881f-8ea7-4f5d-b54c-c8253deaa172");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ee32881f-8ea7-4f5d-b54c-c8253deaa172' but no matching script tag was found.")
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
                  const docs_json = '{"8958acea-539c-4157-a36f-dc38717daef3":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p578233","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p578234"}}},"roots":[{"type":"object","name":"Column","id":"p578311","attributes":{"children":[{"type":"object","name":"Figure","id":"p578235","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p578236"},"y_range":{"type":"object","name":"DataRange1d","id":"p578237"},"x_scale":{"type":"object","name":"LinearScale","id":"p578245"},"y_scale":{"type":"object","name":"LinearScale","id":"p578246"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p578293","attributes":{"start":13.200000038146973,"end":17.896999588012694}}]]},"title":{"type":"object","name":"Title","id":"p578238","attributes":{"text":"08NH096 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p578304","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p578298","attributes":{"selected":{"type":"object","name":"Selection","id":"p578299","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578300"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1736],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1736],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578305","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578306"}}},"glyph":{"type":"object","name":"Line","id":"p578301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p578303","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p578244","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p578271"},{"type":"object","name":"WheelZoomTool","id":"p578272","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p578273","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p578274","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p578280","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p578279","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p578281","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p578282","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p578283","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p578284","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p578290","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p578289","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p578291"},{"type":"object","name":"SaveTool","id":"p578292"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p578266","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p578267","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p578268"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p578269"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p578294","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p578295","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p578296"},"axis_label":"Water Level (m)","major_label_policy":{"type":"object","name":"AllLabels","id":"p578297"}}},{"type":"object","name":"Legend","id":"p578307","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p578308","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p578304"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p578247","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p578248","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p578249","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p578250","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p578251","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p578252","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p578253","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p578254","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p578255","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p578256","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p578257","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p578258","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p578259","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p578260"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p578263","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p578262","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p578261","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p578264"}}}],"center":[{"type":"object","name":"Grid","id":"p578265","attributes":{"axis":{"id":"p578247"}}},{"type":"object","name":"Grid","id":"p578270","attributes":{"dimension":1,"axis":{"id":"p578266"}}}]}},{"type":"object","name":"Div","id":"p578309","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"8958acea-539c-4157-a36f-dc38717daef3","roots":{"p578311":"ee32881f-8ea7-4f5d-b54c-c8253deaa172"},"root_ids":["p578311"]}];
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