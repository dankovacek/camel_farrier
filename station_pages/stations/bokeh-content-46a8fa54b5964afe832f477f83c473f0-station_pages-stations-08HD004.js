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
    
    
    const element = document.getElementById("a5fd509d-8cd6-42ec-a3da-476c568064ce");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a5fd509d-8cd6-42ec-a3da-476c568064ce' but no matching script tag was found.")
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
                  const docs_json = '{"823f2ec6-aec1-4536-9a0b-3ecd49cf86e0":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p225574","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p225575"}}},"roots":[{"type":"object","name":"Column","id":"p225647","attributes":{"children":[{"type":"object","name":"Figure","id":"p225576","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p225577"},"y_range":{"type":"object","name":"DataRange1d","id":"p225578"},"x_scale":{"type":"object","name":"LinearScale","id":"p225586"},"y_scale":{"type":"object","name":"LinearScale","id":"p225587"},"title":{"type":"object","name":"Title","id":"p225579","attributes":{"text":"08HD004 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p225640","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p225634","attributes":{"selected":{"type":"object","name":"Selection","id":"p225635","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p225636"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1259],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1259],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p225641","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p225642"}}},"glyph":{"type":"object","name":"Line","id":"p225637","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p225638","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p225639","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p225585","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p225612"},{"type":"object","name":"WheelZoomTool","id":"p225613","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p225614","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p225615","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p225621","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p225620","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p225622","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p225623","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p225624","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p225625","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p225631","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p225630","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p225632"},{"type":"object","name":"SaveTool","id":"p225633"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p225607","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p225608","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p225609"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p225610"}}}],"right":[{"type":"object","name":"Legend","id":"p225643","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p225644","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p225640"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p225588","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p225589","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p225590","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p225591","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p225592","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p225593","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p225594","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p225595","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p225596","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p225597","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p225598","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p225599","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p225600","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p225601"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p225604","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p225603","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p225602","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p225605"}}}],"center":[{"type":"object","name":"Grid","id":"p225606","attributes":{"axis":{"id":"p225588"}}},{"type":"object","name":"Grid","id":"p225611","attributes":{"dimension":1,"axis":{"id":"p225607"}}}]}},{"type":"object","name":"Div","id":"p225645","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"823f2ec6-aec1-4536-9a0b-3ecd49cf86e0","roots":{"p225647":"a5fd509d-8cd6-42ec-a3da-476c568064ce"},"root_ids":["p225647"]}];
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