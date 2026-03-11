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
    
    
    const element = document.getElementById("a4e7aad0-845d-4b50-b541-460b779f770c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a4e7aad0-845d-4b50-b541-460b779f770c' but no matching script tag was found.")
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
                  const docs_json = '{"1c0924b2-6547-4d07-baf3-13aa387bd9eb":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p770401","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p770402"}}},"roots":[{"type":"object","name":"Column","id":"p770479","attributes":{"children":[{"type":"object","name":"Figure","id":"p770403","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p770404"},"y_range":{"type":"object","name":"DataRange1d","id":"p770405"},"x_scale":{"type":"object","name":"LinearScale","id":"p770413"},"y_scale":{"type":"object","name":"LinearScale","id":"p770414"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p770461","attributes":{"start":12.486999740600586,"end":13.993000259399414}}]]},"title":{"type":"object","name":"Title","id":"p770406","attributes":{"text":"08NH092 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p770472","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p770466","attributes":{"selected":{"type":"object","name":"Selection","id":"p770467","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p770468"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1736],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1736],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p770473","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p770474"}}},"glyph":{"type":"object","name":"Line","id":"p770469","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p770470","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p770471","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p770412","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p770439"},{"type":"object","name":"WheelZoomTool","id":"p770440","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p770441","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p770442","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p770448","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p770447","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p770449","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p770450","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p770451","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p770452","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p770458","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p770457","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p770459"},{"type":"object","name":"SaveTool","id":"p770460"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p770434","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p770435","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p770436"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p770437"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p770462","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p770463","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p770464"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p770465"}}},{"type":"object","name":"Legend","id":"p770475","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p770476","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p770472"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p770415","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p770416","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p770417","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p770418","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p770419","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p770420","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p770421","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p770422","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p770423","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p770424","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p770425","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p770426","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p770427","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p770428"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p770431","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p770430","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p770429","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p770432"}}}],"center":[{"type":"object","name":"Grid","id":"p770433","attributes":{"axis":{"id":"p770415"}}},{"type":"object","name":"Grid","id":"p770438","attributes":{"dimension":1,"axis":{"id":"p770434"}}}]}},{"type":"object","name":"Div","id":"p770477","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"1c0924b2-6547-4d07-baf3-13aa387bd9eb","roots":{"p770479":"a4e7aad0-845d-4b50-b541-460b779f770c"},"root_ids":["p770479"]}];
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