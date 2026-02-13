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
    
    
    const element = document.getElementById("f5ae3acb-8573-4dea-bcb5-0ec91033d638");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f5ae3acb-8573-4dea-bcb5-0ec91033d638' but no matching script tag was found.")
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
                  const docs_json = '{"3e36a612-13ad-4757-90f6-fa3f6736f27e":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p875022","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p875023"}}},"roots":[{"type":"object","name":"Column","id":"p875100","attributes":{"children":[{"type":"object","name":"Figure","id":"p875024","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p875025"},"y_range":{"type":"object","name":"DataRange1d","id":"p875026"},"x_scale":{"type":"object","name":"LinearScale","id":"p875034"},"y_scale":{"type":"object","name":"LinearScale","id":"p875035"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p875082","attributes":{"start":-0.006999999973923,"end":1.0629999542236328}}]]},"title":{"type":"object","name":"Title","id":"p875027","attributes":{"text":"08NL061 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p875093","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p875087","attributes":{"selected":{"type":"object","name":"Selection","id":"p875088","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p875089"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1280],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9UBCgSXskT0Dgj/g9NWKh9jc03Do6wNqunOBBMs9UsxTuHnuPiX2N+Q8v022/v///8933XbZngT1/1fLXLLHxSdC/33fpAvI+uU3zT2PU/+////jJ749Q4r59Ye+nrAH6ttfMvkESF+CQMRJe5g4jI9LHxZzUdT/Baqz5TqOTX/8Drmj9jAaj/vi95QcxpAHmmtv3nkQXzgAw+0AhvwfoD9PlO3DEP8FNC9JYIc9FnPkW19vxGZO/Uu1jdjUx6dYr7dHUmf/sGoJhrrPQPcF7piHIb4NHA8Zg6ocGKVH6VF6lB6lR+lRmub0A6XbT5Hr/we/Vz4lpT2Q8PTCM3LaDw7Gxs/J0UeufQn9h54ORDtHQf/uE3s66Fsw+whZ9pCrD55eAneQ1I902Pb5oT156fShPWXpnCL9wPTzcLSdPEqP0qP0KD1Kj9KjNFHtHY41HyhsX70iWT9o3PiY93uS2vG7PElzJ5P2x8HcHlK4ee49Je47INdKln4FlrB3ZLVva+zfUjM8FTbNfW2P33+v7emVHkHzIPvmv6JqetFux28eIXnc/aEXpOg7UDL5BTn2kKtvlB6lR+lRepQepUfpUXqUHqWHE73AdRtKv4RQPwZdHp2Pbt6g7a+yhL2iuTsBOrxxYQAoAAA="},"shape":[1280],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p875094","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p875095"}}},"glyph":{"type":"object","name":"Line","id":"p875090","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p875091","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p875092","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p875033","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p875060"},{"type":"object","name":"WheelZoomTool","id":"p875061","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p875062","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p875063","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p875069","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p875068","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p875070","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p875071","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p875072","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p875073","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p875079","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p875078","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p875080"},{"type":"object","name":"SaveTool","id":"p875081"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p875055","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p875056","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p875057"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p875058"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p875083","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p875084","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p875085"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p875086"}}},{"type":"object","name":"Legend","id":"p875096","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p875097","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p875093"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p875036","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p875037","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p875038","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p875039","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p875040","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p875041","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p875042","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p875043","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p875044","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p875045","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p875046","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p875047","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p875048","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p875049"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p875052","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p875051","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p875050","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p875053"}}}],"center":[{"type":"object","name":"Grid","id":"p875054","attributes":{"axis":{"id":"p875036"}}},{"type":"object","name":"Grid","id":"p875059","attributes":{"dimension":1,"axis":{"id":"p875055"}}}]}},{"type":"object","name":"Div","id":"p875098","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"3e36a612-13ad-4757-90f6-fa3f6736f27e","roots":{"p875100":"f5ae3acb-8573-4dea-bcb5-0ec91033d638"},"root_ids":["p875100"]}];
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