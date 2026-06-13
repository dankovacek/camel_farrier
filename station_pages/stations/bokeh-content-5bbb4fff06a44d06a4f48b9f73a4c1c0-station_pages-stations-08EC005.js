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
    
    
    const element = document.getElementById("f7551a2e-6abf-48f1-9e27-88bf06b64cf7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f7551a2e-6abf-48f1-9e27-88bf06b64cf7' but no matching script tag was found.")
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
                  const docs_json = '{"5b22cca0-bb1b-4cd6-ad61-34d6f88ed3d9":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p139720","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p139721"}}},"roots":[{"type":"object","name":"Column","id":"p139793","attributes":{"children":[{"type":"object","name":"Figure","id":"p139722","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p139723"},"y_range":{"type":"object","name":"DataRange1d","id":"p139724"},"x_scale":{"type":"object","name":"LinearScale","id":"p139732"},"y_scale":{"type":"object","name":"LinearScale","id":"p139733"},"title":{"type":"object","name":"Title","id":"p139725","attributes":{"text":"08EC005 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p139786","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p139780","attributes":{"selected":{"type":"object","name":"Selection","id":"p139781","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p139782"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1337],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1337],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p139787","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p139788"}}},"glyph":{"type":"object","name":"Line","id":"p139783","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p139784","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p139785","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p139731","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p139758"},{"type":"object","name":"WheelZoomTool","id":"p139759","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p139760","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p139761","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p139767","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p139766","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p139768","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p139769","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p139770","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p139771","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p139777","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p139776","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p139778"},{"type":"object","name":"SaveTool","id":"p139779"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p139753","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p139754","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p139755"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p139756"}}}],"right":[{"type":"object","name":"Legend","id":"p139789","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p139790","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p139786"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p139734","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p139735","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p139736","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p139737","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p139738","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p139739","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p139740","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p139741","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p139742","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p139743","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p139744","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p139745","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p139746","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p139747"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p139750","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p139749","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p139748","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p139751"}}}],"center":[{"type":"object","name":"Grid","id":"p139752","attributes":{"axis":{"id":"p139734"}}},{"type":"object","name":"Grid","id":"p139757","attributes":{"dimension":1,"axis":{"id":"p139753"}}}]}},{"type":"object","name":"Div","id":"p139791","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"5b22cca0-bb1b-4cd6-ad61-34d6f88ed3d9","roots":{"p139793":"f7551a2e-6abf-48f1-9e27-88bf06b64cf7"},"root_ids":["p139793"]}];
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