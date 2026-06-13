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
    
    
    const element = document.getElementById("ded60317-f36f-4cc3-90f3-2b23f2508c23");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ded60317-f36f-4cc3-90f3-2b23f2508c23' but no matching script tag was found.")
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
                  const docs_json = '{"e9643cb1-a8ae-445a-849e-240bfefab44e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p553215","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p553216"}}},"roots":[{"type":"object","name":"Column","id":"p553288","attributes":{"children":[{"type":"object","name":"Figure","id":"p553217","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p553218"},"y_range":{"type":"object","name":"DataRange1d","id":"p553219"},"x_scale":{"type":"object","name":"LinearScale","id":"p553227"},"y_scale":{"type":"object","name":"LinearScale","id":"p553228"},"title":{"type":"object","name":"Title","id":"p553220","attributes":{"text":"08NG062 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p553281","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p553275","attributes":{"selected":{"type":"object","name":"Selection","id":"p553276","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p553277"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1363],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1363],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p553282","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p553283"}}},"glyph":{"type":"object","name":"Line","id":"p553278","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p553279","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p553280","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p553226","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p553253"},{"type":"object","name":"WheelZoomTool","id":"p553254","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p553255","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p553256","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p553262","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p553261","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p553263","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p553264","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p553265","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p553266","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p553272","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p553271","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p553273"},{"type":"object","name":"SaveTool","id":"p553274"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p553248","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p553249","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p553250"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p553251"}}}],"right":[{"type":"object","name":"Legend","id":"p553284","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p553285","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p553281"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p553229","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p553230","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p553231","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p553232","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p553233","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p553234","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p553235","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p553236","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p553237","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p553238","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p553239","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p553240","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p553241","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p553242"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p553245","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p553244","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p553243","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p553246"}}}],"center":[{"type":"object","name":"Grid","id":"p553247","attributes":{"axis":{"id":"p553229"}}},{"type":"object","name":"Grid","id":"p553252","attributes":{"dimension":1,"axis":{"id":"p553248"}}}]}},{"type":"object","name":"Div","id":"p553286","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"e9643cb1-a8ae-445a-849e-240bfefab44e","roots":{"p553288":"ded60317-f36f-4cc3-90f3-2b23f2508c23"},"root_ids":["p553288"]}];
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