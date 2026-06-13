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
    
    
    const element = document.getElementById("ee2dd12e-2527-4a8a-8e1b-1eb2659fc44c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ee2dd12e-2527-4a8a-8e1b-1eb2659fc44c' but no matching script tag was found.")
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
                  const docs_json = '{"43788b44-ad77-471a-833e-041925370a0c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p178294","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p178295"}}},"roots":[{"type":"object","name":"Column","id":"p178367","attributes":{"children":[{"type":"object","name":"Figure","id":"p178296","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p178297"},"y_range":{"type":"object","name":"DataRange1d","id":"p178298"},"x_scale":{"type":"object","name":"LinearScale","id":"p178306"},"y_scale":{"type":"object","name":"LogScale","id":"p178307"},"title":{"type":"object","name":"Title","id":"p178299","attributes":{"text":"08GA012 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p178360","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p178354","attributes":{"selected":{"type":"object","name":"Selection","id":"p178355","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p178356"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1948],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1948],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p178361","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p178362"}}},"glyph":{"type":"object","name":"Line","id":"p178357","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p178358","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p178359","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p178305","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p178332"},{"type":"object","name":"WheelZoomTool","id":"p178333","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p178334","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p178335","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p178341","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p178340","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p178342","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p178343","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p178344","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p178345","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p178351","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p178350","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p178352"},{"type":"object","name":"SaveTool","id":"p178353"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LogAxis","id":"p178327","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p178328","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p178329"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p178330"}}}],"right":[{"type":"object","name":"Legend","id":"p178363","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p178364","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p178360"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p178308","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p178309","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p178310","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p178311","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p178312","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p178313","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p178314","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p178315","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p178316","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p178317","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p178318","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p178319","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p178320","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p178321"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p178324","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p178323","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p178322","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p178325"}}}],"center":[{"type":"object","name":"Grid","id":"p178326","attributes":{"axis":{"id":"p178308"}}},{"type":"object","name":"Grid","id":"p178331","attributes":{"dimension":1,"axis":{"id":"p178327"}}}]}},{"type":"object","name":"Div","id":"p178365","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"43788b44-ad77-471a-833e-041925370a0c","roots":{"p178367":"ee2dd12e-2527-4a8a-8e1b-1eb2659fc44c"},"root_ids":["p178367"]}];
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