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
    
    
    const element = document.getElementById("ebaf7f5a-b59a-4563-b380-8bdb63894b8a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ebaf7f5a-b59a-4563-b380-8bdb63894b8a' but no matching script tag was found.")
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
                  const docs_json = '{"28f0e4a9-d776-4322-9a2b-f7f43883d09d":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p378278","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p378279"}}},"roots":[{"type":"object","name":"Column","id":"p378351","attributes":{"children":[{"type":"object","name":"Figure","id":"p378280","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p378281"},"y_range":{"type":"object","name":"DataRange1d","id":"p378282"},"x_scale":{"type":"object","name":"LinearScale","id":"p378290"},"y_scale":{"type":"object","name":"LinearScale","id":"p378291"},"title":{"type":"object","name":"Title","id":"p378283","attributes":{"text":"08LG027 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378344","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378338","attributes":{"selected":{"type":"object","name":"Selection","id":"p378339","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378340"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3Jb2QUABjA4beSknF17daurWtra2urMcZYKa8ax7E0y2ZKszSLMc1Z+jPtdYxlWZaUUkYxpWSzMcbxalNqZUoz9mGa1VY2xRhjtOr36fnwiFi05VD8tYjPRlDaPhz8r6ZdQ+vPR49NFvLfE6jtxWjhmQJ+sAvlZBnqj/kDfOIueuZxlOHf+XzlY7TFGHrHah6f1Yc6UoV2egP6r1f7+ZtnUXO2oSWHc/maBpTlIOotz+HzmtE9A+XMu338ymW027noBZ+z+bF21HNFaKvTWfydTpSiUtS3c3v5+h70tWMo95YifPFDtPdR9Asre/j1J6gPTqGV/MnkP75AuViLunEL2qOhDL70PMqnAGpTcje/uQm9Nx3l8Jsw/yWO1pyNvnUinX/ahnq0EG1qahff0oGSUoLa9zWN12706SMorT9DfOA+2vNy9BPLqfxML+qVCrTg2k7+5TOUaDXq7Ca06wNBPlSH0p+CGhvZwX9rRL8RQgmPbucHL6FVRNAXxgN84uo//wJYwPBG2AIAAA=="},"shape":[91],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqmND/rlyw//////65748TTYN8z6R93B5G/wQaoLNpL4h/4PPfI8jm2BsbXwbxwTQjA8MC1223QTSDZsx9sPq57x/D+TBxJHUw9Sg0unl43I9iP7q63///x+8p2WwPo//+/z/f/eEuOB+XPC51QPP/r/y4CcM8dPUwPqk0untw8f8B47Nk8gp7QjRQ//6ijI32APxAbavYAgAA"},"shape":[91],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378345","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378346"}}},"glyph":{"type":"object","name":"Line","id":"p378341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378342","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p378343","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378289","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p378316"},{"type":"object","name":"WheelZoomTool","id":"p378317","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p378318","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378319","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378325","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378324","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p378326","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p378327","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p378328","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p378329","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p378335","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378334","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p378336"},{"type":"object","name":"SaveTool","id":"p378337"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p378311","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378312","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378313"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378314"}}}],"right":[{"type":"object","name":"Legend","id":"p378347","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378348","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p378344"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p378292","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p378293","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p378294","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p378295","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p378296","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p378297","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p378298","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p378299","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p378300","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p378301","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p378302","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p378303","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p378304","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p378305"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p378308","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p378307","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p378306","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p378309"}}}],"center":[{"type":"object","name":"Grid","id":"p378310","attributes":{"axis":{"id":"p378292"}}},{"type":"object","name":"Grid","id":"p378315","attributes":{"dimension":1,"axis":{"id":"p378311"}}}]}},{"type":"object","name":"Div","id":"p378349","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"28f0e4a9-d776-4322-9a2b-f7f43883d09d","roots":{"p378351":"ebaf7f5a-b59a-4563-b380-8bdb63894b8a"},"root_ids":["p378351"]}];
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