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
    
    
    const element = document.getElementById("db2dc56e-b465-4d0b-ac44-2302b93744b6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'db2dc56e-b465-4d0b-ac44-2302b93744b6' but no matching script tag was found.")
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
                  const docs_json = '{"0cf89aa1-a84f-4d3c-b1fc-60be58f9baff":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p41396","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p41397"}}},"roots":[{"type":"object","name":"Column","id":"p41469","attributes":{"children":[{"type":"object","name":"Figure","id":"p41398","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p41399"},"y_range":{"type":"object","name":"DataRange1d","id":"p41400"},"x_scale":{"type":"object","name":"LinearScale","id":"p41408"},"y_scale":{"type":"object","name":"LinearScale","id":"p41409"},"title":{"type":"object","name":"Title","id":"p41401","attributes":{"text":"07BK004 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p41462","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41456","attributes":{"selected":{"type":"object","name":"Selection","id":"p41457","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41458"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JfUQccBjA8UdELJumpClFRDQ1s0zEQ5Rm75qNNCLVNFnjiMivlNk0zWYjUmu9rdbL1W1X10rPTtM0sUhZ0jRlcRxL2ZIp+/71+eMjYr7AtCcoIlcrUHdi0TUGP/7XEh+gTCSh3vg6xYdq0ZrTUFKWA/xUA7qiTLTw+iT/+Alq6kV0M9sT/O0XKLuK2hL282ntaFaIUvznA7/fg671Jlq6oMwNv+fvFqP7G4X23O/jz5ahzsegK50d5w/vo7w6g5r1ZYxf8KCVpaIcffPybfXozmegLX4f5SsfoUZcQNf+c4TPfoaylItaFRrmI9vQOvNRcvaG+OUudNXX0KL+veO7B1Fz76BbjUSr8Q3y0aWofSfR6fQAv3YPxROPeurzW37gIVpeCsrGYj9fW4fudDra0EofX9CEunkOXd2PXj7uKYo3B/XSTg+/9RKtPg8l4Xc37+tAd+Uy2q+DN3xjP2riLXT+CLTr3i4+VILafAJdcuA1HyhHKYpFDX/q9ASPAQ642k3YAgAA"},"shape":[91],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzDhGZkYEiw3HLCHkYDBRMEIk7a//v/3z5u10kQ/4Bc62n7v///z3d/eApOw+SR1DWI3TyHQf8Hqj+icAFOA+15oMJ2EcSPt9xyAaRuwdua83AaaN79KpFzcBqLvXjFkcy3Nza+DDZXSv8qiC+/oegGSN5hy4l7IHGH+/4PkekGW67HYP/OfQ+mE/oPPUWmwfK49MPEkeQXHFF4gEyj2wejsarDYh4wHm7b0yodAAAy1SuM2AIAAA=="},"shape":[91],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41463","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41464"}}},"glyph":{"type":"object","name":"Line","id":"p41459","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p41461","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p41407","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p41434"},{"type":"object","name":"WheelZoomTool","id":"p41435","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p41436","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p41437","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p41443","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p41442","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p41444","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p41445","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p41446","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p41447","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p41453","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p41452","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p41454"},{"type":"object","name":"SaveTool","id":"p41455"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p41429","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p41430","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p41431"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p41432"}}}],"right":[{"type":"object","name":"Legend","id":"p41465","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p41466","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p41462"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p41410","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p41411","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p41412","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p41413","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p41414","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p41415","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p41416","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p41417","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p41418","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p41419","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p41420","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p41421","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p41422","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p41423"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p41426","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p41425","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p41424","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p41427"}}}],"center":[{"type":"object","name":"Grid","id":"p41428","attributes":{"axis":{"id":"p41410"}}},{"type":"object","name":"Grid","id":"p41433","attributes":{"dimension":1,"axis":{"id":"p41429"}}}]}},{"type":"object","name":"Div","id":"p41467","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"0cf89aa1-a84f-4d3c-b1fc-60be58f9baff","roots":{"p41469":"db2dc56e-b465-4d0b-ac44-2302b93744b6"},"root_ids":["p41469"]}];
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