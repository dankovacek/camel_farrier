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
    
    
    const element = document.getElementById("db1d6cbb-90fa-440f-aed7-35395b05a16e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'db1d6cbb-90fa-440f-aed7-35395b05a16e' but no matching script tag was found.")
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
                  const docs_json = '{"31388ccf-f567-4e48-bf80-35e1a8da98e0":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p155854","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p155855"}}},"roots":[{"type":"object","name":"Column","id":"p155927","attributes":{"children":[{"type":"object","name":"Figure","id":"p155856","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p155857"},"y_range":{"type":"object","name":"DataRange1d","id":"p155858"},"x_scale":{"type":"object","name":"LinearScale","id":"p155866"},"y_scale":{"type":"object","name":"LinearScale","id":"p155867"},"title":{"type":"object","name":"Title","id":"p155859","attributes":{"text":"08EB001 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p155920","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155914","attributes":{"selected":{"type":"object","name":"Selection","id":"p155915","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155916"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JfUwPeBzA8Y/Oz0UeQ2QZ0zSO8zCmMW0fz+dZ1pYxrRaHsYxp+7k8fDw/rK2NdWOeH5Zlmnbd5ZlvXVu7yOWKUKKUUieRKCLr/dfrj5eIXEj/cXO2iE6JQivxQxd/rVO70nMV6sU+aNOzPXzZepTNA1F73+3Ip3nRzQpBqSj8gd+yAy1gNLr0Uh9+7kHUqlC07VUd+MDDKH8q6oJ64WuOods5G2XgpzZv+185jxa+GF1d27d2ZW8a6uBlaNd90UVkfuXfxqIe6IUWfKeVv7UOZckA1Pe5X/jEeHQhwShZBZ/5ZdvQmkagS3rSwv+0DzVnPFpURTPfnIRyOAz157pPfO4RdDEzUVobP/K/n0EbsxBdXmsTv/Iialsk2lEPunEZH/j70airu6P53Gzkj69BCe2H+iDnPb92IzrPYJTT+e/4SQloRcPQxT1q4DvvRj03Fi3s+Vu+OBFl4yTUrjX1fEoyOp2GUtLwho8/idZjHrrUlv/56RdQyyLQvD7o/NPr+LTlqLP80Mqv1vIJv6IE9EFNz3rNz1mPrjIIZXteDR/oRcsYim5+YTVfY6g7R6EFlb7iMw+ghIei1lVW8XsOoRukKNffVPIRx9Dqf0G3/+NLPvg86q1wtMi2Cv7dJZTEpaghvmjur3J+aSxKU0/UpNsv+OHr0P0diBKV+5xv3oR2aAi6kQVlfO5W1JgRaF8eP+OT96KMGY+aV17Kr0hC920yytHaEn7cEbT8GehWNT7lfc6gHl+ANqH1CV+QirI2EtXjQTv1x2N+YjRKUTfUuBvFvO8adGcDUMJyHvHFG9A2DELnl/+QT/kNVYehPX1YxG/ahdJjLGpqWSE/LRHds4ko3ur/eP9ktEtT0c1seMCXn0BNmIvWt6WAv5yCMicCtbID2rbL//L9l6NkdEGdf/U+X70S3Y7eKEFZ+XxmHNqiIHS1/9zzZn8HTdR+VMAFAAA="},"shape":[184],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/8XSuU7DQBAG4H0MlzwCJaXLlC4pXXAYCGAOhRAEWe4cEA4JaP0olJR+hC1TUqZEMP9vaQZzRELCzafx7M56duzc+zPpuv8w9OIPcxhd6pj5aCjGD+L4XvR3WHeDPJwfiem1dgwj5MPIvB/qetz33BdnB2Ix0N/H2F/pfUlf99NDf3MX4su5NoOTM3wPzE5wzrE2huVRvb6LOl5sG5mv9nnt64F428H7fZzfFmdauJddrNvWhi0dcx3l/mJHr0uxz28gbsJVuGJi5JNcn1u0tDyP+TKv12+i7nq9/C7KcxNTh/9p+Sg2nnQc8D83TvU8OS+aHup52DnQsPdFbPqnvG/bf2LuodL0Xd1LU/tpbnTNzM+awWWtX0Ifi9MZFr7X/SDX/ba+m7LuH/gGIaCOq8AFAAA="},"shape":[184],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p155921","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155922"}}},"glyph":{"type":"object","name":"Line","id":"p155917","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p155919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p155865","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p155892"},{"type":"object","name":"WheelZoomTool","id":"p155893","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p155894","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p155895","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p155901","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p155900","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p155902","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p155903","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p155904","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p155905","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p155911","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p155910","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p155912"},{"type":"object","name":"SaveTool","id":"p155913"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p155887","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p155888","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p155889"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p155890"}}}],"right":[{"type":"object","name":"Legend","id":"p155923","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p155924","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p155920"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p155868","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p155869","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p155870","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p155871","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p155872","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p155873","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p155874","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p155875","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p155876","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p155877","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p155878","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p155879","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p155880","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p155881"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p155884","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p155883","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p155882","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p155885"}}}],"center":[{"type":"object","name":"Grid","id":"p155886","attributes":{"axis":{"id":"p155868"}}},{"type":"object","name":"Grid","id":"p155891","attributes":{"dimension":1,"axis":{"id":"p155887"}}}]}},{"type":"object","name":"Div","id":"p155925","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"31388ccf-f567-4e48-bf80-35e1a8da98e0","roots":{"p155927":"db1d6cbb-90fa-440f-aed7-35395b05a16e"},"root_ids":["p155927"]}];
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