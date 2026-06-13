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
    
    
    const element = document.getElementById("e164dcea-9592-45b0-9a58-215303f36773");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e164dcea-9592-45b0-9a58-215303f36773' but no matching script tag was found.")
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
                  const docs_json = '{"ff90aff3-2df2-4d57-aa06-faff04735567":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p183183","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p183184"}}},"roots":[{"type":"object","name":"Column","id":"p183261","attributes":{"children":[{"type":"object","name":"Figure","id":"p183185","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p183186"},"y_range":{"type":"object","name":"DataRange1d","id":"p183187"},"x_scale":{"type":"object","name":"LinearScale","id":"p183195"},"y_scale":{"type":"object","name":"LinearScale","id":"p183196"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p183243","attributes":{"start":0.6819999718666077,"end":1.2909999990463257}}]]},"title":{"type":"object","name":"Title","id":"p183188","attributes":{"text":"08GA070 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p183254","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p183248","attributes":{"selected":{"type":"object","name":"Selection","id":"p183249","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p183250"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[854],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[854],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p183255","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p183256"}}},"glyph":{"type":"object","name":"Line","id":"p183251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p183252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p183253","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p183194","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p183221"},{"type":"object","name":"WheelZoomTool","id":"p183222","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p183223","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p183224","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p183230","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p183229","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p183231","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p183232","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p183233","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p183234","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p183240","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p183239","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p183241"},{"type":"object","name":"SaveTool","id":"p183242"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p183216","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p183217","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p183218"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p183219"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p183244","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p183245","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p183246"},"axis_label":"Water Level (m)","major_label_policy":{"type":"object","name":"AllLabels","id":"p183247"}}},{"type":"object","name":"Legend","id":"p183257","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p183258","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p183254"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p183197","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p183198","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p183199","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p183200","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p183201","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p183202","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p183203","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p183204","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p183205","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p183206","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p183207","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p183208","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p183209","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p183210"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p183213","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p183212","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p183211","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p183214"}}}],"center":[{"type":"object","name":"Grid","id":"p183215","attributes":{"axis":{"id":"p183197"}}},{"type":"object","name":"Grid","id":"p183220","attributes":{"dimension":1,"axis":{"id":"p183216"}}}]}},{"type":"object","name":"Div","id":"p183259","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"ff90aff3-2df2-4d57-aa06-faff04735567","roots":{"p183261":"e164dcea-9592-45b0-9a58-215303f36773"},"root_ids":["p183261"]}];
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