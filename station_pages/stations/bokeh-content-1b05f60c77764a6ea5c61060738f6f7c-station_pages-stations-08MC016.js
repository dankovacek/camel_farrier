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
    
    
    const element = document.getElementById("ba61985c-b7df-4ce7-8f3b-7e3280c9be22");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ba61985c-b7df-4ce7-8f3b-7e3280c9be22' but no matching script tag was found.")
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
                  const docs_json = '{"46b9a7a8-2803-42c9-b6f0-d4c5a233f9ef":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p387182","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p387183"}}},"roots":[{"type":"object","name":"Column","id":"p387260","attributes":{"children":[{"type":"object","name":"Figure","id":"p387184","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p387185"},"y_range":{"type":"object","name":"DataRange1d","id":"p387186"},"x_scale":{"type":"object","name":"LinearScale","id":"p387194"},"y_scale":{"type":"object","name":"LogScale","id":"p387195"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p387242","attributes":{"start":0.017000000700354498,"end":1.2669999504089355}}]]},"title":{"type":"object","name":"Title","id":"p387187","attributes":{"text":"08MC016 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p387253","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p387247","attributes":{"selected":{"type":"object","name":"Selection","id":"p387248","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p387249"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1675],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+2brRKCQBRGDUazY3PfwGSGarKZnPEFHF8BZowGg8FgsRh8C57AQHFwBsWx2fwJzhhWIBJILOzioWyDO9+993x3YWk0kuvjpIveq7vqRJYBcVat4/bhh+ikfz1XXSc8v1je2Yvpkb6j7+irYvsKPdHThPnU9DoVc8/Hv/Av0+uY+PGL2vvFXcrJbbeB1/Aa3sG72vMubXPynJdntx2c8QPqRNc+Eb2Q7zclcEwEB95Dq9ZZStkdL0/wFt7qylviYl7MmxfrUh/Rd3+FwxkOx/7kWH32A6rnAO6fKGDE+THiJE95fmhfhi98JOMj8A2+wfe/9Dd3PXvDQ/U89AYtdMZnjPOZ+H+MJ3xQz4ei9i2iOSqPMz9MHMYHWDQAAA=="},"shape":[1675],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p387254","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p387255"}}},"glyph":{"type":"object","name":"Line","id":"p387250","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p387251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p387252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p387193","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p387220"},{"type":"object","name":"WheelZoomTool","id":"p387221","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p387222","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p387223","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p387229","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p387228","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p387230","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p387231","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p387232","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p387233","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p387239","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p387238","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p387240"},{"type":"object","name":"SaveTool","id":"p387241"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LogAxis","id":"p387215","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p387216","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p387217"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p387218"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p387243","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p387244","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p387245"},"axis_label":"Water Level (m)","major_label_policy":{"type":"object","name":"AllLabels","id":"p387246"}}},{"type":"object","name":"Legend","id":"p387256","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p387257","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p387253"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p387196","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p387197","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p387198","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p387199","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p387200","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p387201","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p387202","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p387203","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p387204","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p387205","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p387206","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p387207","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p387208","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p387209"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p387212","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p387211","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p387210","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p387213"}}}],"center":[{"type":"object","name":"Grid","id":"p387214","attributes":{"axis":{"id":"p387196"}}},{"type":"object","name":"Grid","id":"p387219","attributes":{"dimension":1,"axis":{"id":"p387215"}}}]}},{"type":"object","name":"Div","id":"p387258","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"46b9a7a8-2803-42c9-b6f0-d4c5a233f9ef","roots":{"p387260":"ba61985c-b7df-4ce7-8f3b-7e3280c9be22"},"root_ids":["p387260"]}];
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