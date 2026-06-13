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
    
    
    const element = document.getElementById("e5b8466a-1a5a-4e7f-94b8-339cad8731c0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e5b8466a-1a5a-4e7f-94b8-339cad8731c0' but no matching script tag was found.")
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
                  const docs_json = '{"a7eb3208-56b3-4e6d-990f-3a27b80f7617":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p553960","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p553961"}}},"roots":[{"type":"object","name":"Column","id":"p554033","attributes":{"children":[{"type":"object","name":"Figure","id":"p553962","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p553963"},"y_range":{"type":"object","name":"DataRange1d","id":"p553964"},"x_scale":{"type":"object","name":"LinearScale","id":"p553972"},"y_scale":{"type":"object","name":"LogScale","id":"p553973"},"title":{"type":"object","name":"Title","id":"p553965","attributes":{"text":"08NG062 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p554026","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p554020","attributes":{"selected":{"type":"object","name":"Selection","id":"p554021","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p554022"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1363],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1363],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p554027","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p554028"}}},"glyph":{"type":"object","name":"Line","id":"p554023","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p554024","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p554025","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p553971","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p553998"},{"type":"object","name":"WheelZoomTool","id":"p553999","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p554000","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p554001","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p554007","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p554006","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p554008","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p554009","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p554010","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p554011","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p554017","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p554016","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p554018"},{"type":"object","name":"SaveTool","id":"p554019"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LogAxis","id":"p553993","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p553994","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p553995"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p553996"}}}],"right":[{"type":"object","name":"Legend","id":"p554029","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p554030","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p554026"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p553974","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p553975","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p553976","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p553977","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p553978","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p553979","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p553980","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p553981","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p553982","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p553983","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p553984","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p553985","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p553986","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p553987"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p553990","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p553989","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p553988","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p553991"}}}],"center":[{"type":"object","name":"Grid","id":"p553992","attributes":{"axis":{"id":"p553974"}}},{"type":"object","name":"Grid","id":"p553997","attributes":{"dimension":1,"axis":{"id":"p553993"}}}]}},{"type":"object","name":"Div","id":"p554031","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"a7eb3208-56b3-4e6d-990f-3a27b80f7617","roots":{"p554033":"e5b8466a-1a5a-4e7f-94b8-339cad8731c0"},"root_ids":["p554033"]}];
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