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
    
    
    const element = document.getElementById("b515f318-9a6c-47f5-932e-e90bd15b18e1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b515f318-9a6c-47f5-932e-e90bd15b18e1' but no matching script tag was found.")
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
                  const docs_json = '{"e35faaec-8431-44d6-9167-8bcbc73ac5b8":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p260350","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p260351"}}},"roots":[{"type":"object","name":"Column","id":"p260423","attributes":{"children":[{"type":"object","name":"Figure","id":"p260352","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p260353"},"y_range":{"type":"object","name":"DataRange1d","id":"p260354"},"x_scale":{"type":"object","name":"LinearScale","id":"p260362"},"y_scale":{"type":"object","name":"LinearScale","id":"p260363"},"title":{"type":"object","name":"Title","id":"p260355","attributes":{"text":"08GA012 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p260416","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p260410","attributes":{"selected":{"type":"object","name":"Selection","id":"p260411","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p260412"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1948],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1948],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p260417","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p260418"}}},"glyph":{"type":"object","name":"Line","id":"p260413","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p260414","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p260415","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p260361","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p260388"},{"type":"object","name":"WheelZoomTool","id":"p260389","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p260390","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p260391","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p260397","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p260396","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p260398","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p260399","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p260400","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p260401","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p260407","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p260406","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p260408"},{"type":"object","name":"SaveTool","id":"p260409"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p260383","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p260384","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p260385"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p260386"}}}],"right":[{"type":"object","name":"Legend","id":"p260419","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p260420","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p260416"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p260364","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p260365","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p260366","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p260367","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p260368","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p260369","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p260370","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p260371","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p260372","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p260373","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p260374","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p260375","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p260376","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p260377"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p260380","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p260379","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p260378","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p260381"}}}],"center":[{"type":"object","name":"Grid","id":"p260382","attributes":{"axis":{"id":"p260364"}}},{"type":"object","name":"Grid","id":"p260387","attributes":{"dimension":1,"axis":{"id":"p260383"}}}]}},{"type":"object","name":"Div","id":"p260421","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"e35faaec-8431-44d6-9167-8bcbc73ac5b8","roots":{"p260423":"b515f318-9a6c-47f5-932e-e90bd15b18e1"},"root_ids":["p260423"]}];
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