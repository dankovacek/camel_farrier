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
    
    
    const element = document.getElementById("c0552193-10f3-418a-a054-00dd8c762c10");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c0552193-10f3-418a-a054-00dd8c762c10' but no matching script tag was found.")
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
                  const docs_json = '{"14dc4b7c-56cb-4f8d-8caf-0f99a1848080":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p135237","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p135238"}}},"roots":[{"type":"object","name":"Column","id":"p135310","attributes":{"children":[{"type":"object","name":"Figure","id":"p135239","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p135240"},"y_range":{"type":"object","name":"DataRange1d","id":"p135241"},"x_scale":{"type":"object","name":"LinearScale","id":"p135249"},"y_scale":{"type":"object","name":"LogScale","id":"p135250"},"title":{"type":"object","name":"Title","id":"p135242","attributes":{"text":"08EB001 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p135303","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p135297","attributes":{"selected":{"type":"object","name":"Selection","id":"p135298","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p135299"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JfUwPeBzA8Y/Oz0UeQ2QZ0zSO8zCmMW0fz+dZ1pYxrRaHsYxp+7k8fDw/rK2NdWOeH5Zlmnbd5ZlvXVu7yOWKUKKUUieRKCLr/dfrj5eIXEj/cXO2iE6JQivxQxd/rVO70nMV6sU+aNOzPXzZepTNA1F73+3Ip3nRzQpBqSj8gd+yAy1gNLr0Uh9+7kHUqlC07VUd+MDDKH8q6oJ64WuOods5G2XgpzZv+185jxa+GF1d27d2ZW8a6uBlaNd90UVkfuXfxqIe6IUWfKeVv7UOZckA1Pe5X/jEeHQhwShZBZ/5ZdvQmkagS3rSwv+0DzVnPFpURTPfnIRyOAz157pPfO4RdDEzUVobP/K/n0EbsxBdXmsTv/Iialsk2lEPunEZH/j70airu6P53Gzkj69BCe2H+iDnPb92IzrPYJTT+e/4SQloRcPQxT1q4DvvRj03Fi3s+Vu+OBFl4yTUrjX1fEoyOp2GUtLwho8/idZjHrrUlv/56RdQyyLQvD7o/NPr+LTlqLP80Mqv1vIJv6IE9EFNz3rNz1mPrjIIZXteDR/oRcsYim5+YTVfY6g7R6EFlb7iMw+ghIei1lVW8XsOoRukKNffVPIRx9Dqf0G3/+NLPvg86q1wtMi2Cv7dJZTEpaghvmjur3J+aSxKU0/UpNsv+OHr0P0diBKV+5xv3oR2aAi6kQVlfO5W1JgRaF8eP+OT96KMGY+aV17Kr0hC920yytHaEn7cEbT8GehWNT7lfc6gHl+ANqH1CV+QirI2EtXjQTv1x2N+YjRKUTfUuBvFvO8adGcDUMJyHvHFG9A2DELnl/+QT/kNVYehPX1YxG/ahdJjLGpqWSE/LRHds4ko3ur/eP9ktEtT0c1seMCXn0BNmIvWt6WAv5yCMicCtbID2rbL//L9l6NkdEGdf/U+X70S3Y7eKEFZ+XxmHNqiIHS1/9zzZn8HTdR+VMAFAAA="},"shape":[184],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/72SOU4DQRBF5xgdcgSHhBM6dEg4Actgs5hFYIzAzW52gwSkfRRCwj5Chw4JHSL8/x+p20yAkJjkqerX0lU1Wfb9TQZT/DfDMJ+27ZLmKralm1v48xdw/AzaJzA8UicXHmAX9zHHtA31QFZ+9lE95b9fo07jBnSk3ifb3sX9WszTfEPON3+JuI+LmCXtyTn8hixP2fckZk7bH8Of0g5Yx4K9hNKrPOqe/DxE3qjP+gfs3wPn9sDGLuO2Y4at2FacqHy3E8cVzLMb8BdrZJtcTWzqrS786uv4PlH9pHvGp7SbrL/+M/UuUX1F1dN/6l9Rp/kGyg78n5tn8OuehvsXiyPouodP7uB4j7CPuBmbe9D84oj3SufXHNpDRd6juov2o/uQM3eT3uE+db+UJfWVmHaZcy39jmER8XXMqNdRea6mb1q3rk7qT/P+YH8BIaCOq8AFAAA="},"shape":[184],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p135304","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p135305"}}},"glyph":{"type":"object","name":"Line","id":"p135300","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p135301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p135302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p135248","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p135275"},{"type":"object","name":"WheelZoomTool","id":"p135276","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p135277","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p135278","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p135284","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p135283","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p135285","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p135286","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p135287","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p135288","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p135294","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p135293","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p135295"},{"type":"object","name":"SaveTool","id":"p135296"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LogAxis","id":"p135270","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p135271","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p135272"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p135273"}}}],"right":[{"type":"object","name":"Legend","id":"p135306","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p135307","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p135303"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p135251","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p135252","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p135253","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p135254","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p135255","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p135256","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p135257","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p135258","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p135259","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p135260","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p135261","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p135262","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p135263","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p135264"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p135267","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p135266","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p135265","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p135268"}}}],"center":[{"type":"object","name":"Grid","id":"p135269","attributes":{"axis":{"id":"p135251"}}},{"type":"object","name":"Grid","id":"p135274","attributes":{"dimension":1,"axis":{"id":"p135270"}}}]}},{"type":"object","name":"Div","id":"p135308","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"14dc4b7c-56cb-4f8d-8caf-0f99a1848080","roots":{"p135310":"c0552193-10f3-418a-a054-00dd8c762c10"},"root_ids":["p135310"]}];
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