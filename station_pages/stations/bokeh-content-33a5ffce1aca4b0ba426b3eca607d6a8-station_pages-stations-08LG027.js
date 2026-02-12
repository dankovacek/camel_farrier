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
    
    
    const element = document.getElementById("becfe867-1396-4102-80d5-e64a7948b758");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'becfe867-1396-4102-80d5-e64a7948b758' but no matching script tag was found.")
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
                  const docs_json = '{"12a8acf2-bdbd-4f53-9cc4-328e809ff8f7":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p510194","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p510195"}}},"roots":[{"type":"object","name":"Column","id":"p510267","attributes":{"children":[{"type":"object","name":"Figure","id":"p510196","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p510197"},"y_range":{"type":"object","name":"DataRange1d","id":"p510198"},"x_scale":{"type":"object","name":"LinearScale","id":"p510206"},"y_scale":{"type":"object","name":"LinearScale","id":"p510207"},"title":{"type":"object","name":"Title","id":"p510199","attributes":{"text":"08LG027 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p510260","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510254","attributes":{"selected":{"type":"object","name":"Selection","id":"p510255","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510256"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3Jb2QUABjA4beSknF17daurWtra2urMcZYKa8ax7E0y2ZKszSLMc1Z+jPtdYxlWZaUUkYxpWSzMcbxalNqZUoz9mGa1VY2xRhjtOr36fnwiFi05VD8tYjPRlDaPhz8r6ZdQ+vPR49NFvLfE6jtxWjhmQJ+sAvlZBnqj/kDfOIueuZxlOHf+XzlY7TFGHrHah6f1Yc6UoV2egP6r1f7+ZtnUXO2oSWHc/maBpTlIOotz+HzmtE9A+XMu338ymW027noBZ+z+bF21HNFaKvTWfydTpSiUtS3c3v5+h70tWMo95YifPFDtPdR9Asre/j1J6gPTqGV/MnkP75AuViLunEL2qOhDL70PMqnAGpTcje/uQm9Nx3l8Jsw/yWO1pyNvnUinX/ahnq0EG1qahff0oGSUoLa9zWN12706SMorT9DfOA+2vNy9BPLqfxML+qVCrTg2k7+5TOUaDXq7Ca06wNBPlSH0p+CGhvZwX9rRL8RQgmPbucHL6FVRNAXxgN84uo//wJYwPBG2AIAAA=="},"shape":[91],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzDiP535YL9////9899f5xoGqSPSRtB/wRK6GzaC+If+Pz3CLJ6e2Pjy3CakYFhgeu22yCaQTPmPlj93PeP4XwkGqYOK41uHh73otiPLv/7///4PSWb4fTf///nuz/chSGOLo9LHdDc/ys/biKoHl2cWBqXu9Dpf0D/lUxeQZAGqt9flLHRHgD8QG2r2AIAAA=="},"shape":[91],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510261","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510262"}}},"glyph":{"type":"object","name":"Line","id":"p510257","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510258","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p510259","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p510205","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p510232"},{"type":"object","name":"WheelZoomTool","id":"p510233","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p510234","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p510235","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p510241","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510240","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p510242","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p510243","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p510244","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p510245","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p510251","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510250","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p510252"},{"type":"object","name":"SaveTool","id":"p510253"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p510227","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p510228","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p510229"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510230"}}}],"right":[{"type":"object","name":"Legend","id":"p510263","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p510264","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p510260"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p510208","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p510209","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p510210","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p510211","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p510212","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p510213","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p510214","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p510215","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p510216","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p510217","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p510218","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p510219","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p510220","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p510221"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p510224","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p510223","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p510222","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p510225"}}}],"center":[{"type":"object","name":"Grid","id":"p510226","attributes":{"axis":{"id":"p510208"}}},{"type":"object","name":"Grid","id":"p510231","attributes":{"dimension":1,"axis":{"id":"p510227"}}}]}},{"type":"object","name":"Div","id":"p510265","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"12a8acf2-bdbd-4f53-9cc4-328e809ff8f7","roots":{"p510267":"becfe867-1396-4102-80d5-e64a7948b758"},"root_ids":["p510267"]}];
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