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
    
    
    const element = document.getElementById("e67f881d-fabb-4f7b-abbb-b8158c72f898");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e67f881d-fabb-4f7b-abbb-b8158c72f898' but no matching script tag was found.")
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
                  const docs_json = '{"911fb70a-99cc-40f5-865a-aeba45f925a3":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p273797","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p273798"}}},"roots":[{"type":"object","name":"Column","id":"p273880","attributes":{"children":[{"type":"object","name":"Figure","id":"p273799","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p273800"},"y_range":{"type":"object","name":"DataRange1d","id":"p273801"},"x_scale":{"type":"object","name":"LinearScale","id":"p273809"},"y_scale":{"type":"object","name":"LinearScale","id":"p273810"},"title":{"type":"object","name":"Title","id":"p273802","attributes":{"text":"08LB079 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p273863","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273857","attributes":{"selected":{"type":"object","name":"Selection","id":"p273858","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273859"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYJinluXjBAC52BMPCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p273864","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p273865"}}},"glyph":{"type":"object","name":"VArea","id":"p273860","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.007840000372380009},"y2":{"type":"value","value":0.05508000142872328},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p273861","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.007840000372380009},"y2":{"type":"value","value":0.05508000142872328},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p273862","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.007840000372380009},"y2":{"type":"value","value":0.05508000142872328},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p273874","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273868","attributes":{"selected":{"type":"object","name":"Selection","id":"p273869","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273870"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FfTjUBwDA8V+muklmkkkeyUxWl0nyiIbdvI1j2FVe2iWry1NY2bVkhqxdVrKStksmqbDSzaQmWV0eYSo1mSGPZLKbSpLM5NGevp9/PoIgqHtXBEoEQajf5skjIgnb5HtzyDt+nFr7AZetlHKnLphFKaHs8pqM1xet4pxlEaxtjOLBKDlbPo7mgIxPOGm2gotLY7nVfTPr3Yxnx5gtLH+WyFmZ27h6bhLrNMlsJvmSvf9I48TYDC58voubs3fzxPw9vPBcFof7f8uqOwe4MiGXe6d8z8aHDrOHfT7HXSzgvOBj3HjvOI8qi9lW9COHHTnN6Q4a1lwp5y7ZWTbQnWPXL6pYYXSRc4/9yrXOWh5qqGWrqKssHWzg5J1NXGp6g9tKbrK+ews7Nbdy9Lo/OXukg2t2d/GAxV0219xj3/f6WNnaz0Ub/+Fb4w94ct8gi+c/4cjKp5zpN8rnO8e4L/45m0yZZK9cQfryhAWvcH71VG4KEvFYjwHbKWeybLoxZ+SZcPni2dytfYMNZRbs9rclxybP4+9m2nBdoS0PL13A1g1vc3CkmFMeOfCp9CXcPsuZp5W4sLPbco654c77oz340lMvfqh6ny0sfNn/jD9/7hXIJ24HcYsihIXxMHbYt5LXWIfznrORXOX7Mfd3rGXT+BiWCBt4y8GNXGC3ia9fiONx6ads37OVV32m5F3TtnPF4R3cI05hI20qr/hoJ2/q/4rVO1Rcb/gNjxzdyzZLszmkfj+nRhzksoeHuDNNzaJZR9il+Adev7yQc64XsXbtSR4cLmFL1SkOmHOGk8p+4mLPCm5tqWQ9xS/s+N8FlmfVcNa8y1xdcYV1PnVs1lHP3nG/ceKLa1yY08zNb/3OE1W3eaG0jcPvtrMq8Q5XTu3mXnUPG4v/Yo/L9zkuTMd59we4MekRj84YYtujwxzm9IzTr/7LmvBx7nowwQZpL9jVRC/o5YqT+pzrOp1rr73KQ3JDtho2YunXr3OyuSmXnjbjNo85rN8yl502WHH0mDVn732Ta6zseOBnezb3WcS+7YtZudmRiyad+NaBZTxp68riKjeODHyXM7s9+fxWCffp+7CJ2o+9FgVwwiUp54d+yE19oTy2XcZ2M1azrCCCM5as4fI6OXevXhck+R8Hhxb5sAYAAA=="},"shape":[214],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqGNAv/v+/79873R6Xf57+/7+/KGOi/bP//+P3lEy2h/Fh9Pf//+fPnDkTLo+u7hfQfN+kCfYw+u////+12qfZw+iv///LszVOxdAPcxe6Oph6dH3o7oLxr/7/b8+xpscenYbJ/wD66/HS1fZAZ9Xvmz8Lw12/geLT8ybB3Q/zB7p5EP1dUHMI0x+A4VoyucMenX4ADp82e0L0RaC/Hla1YOiH+QMWPjD3orsPPbxg/oGpQ/cfzDxYvMBoWHzD5NFpmD3o6QA9HFHdOcseZj7MPFg8oLsbnY/ubnR/U8pHjy9y+cTGLyyeIf5vsofRkPBqgKbLBpz5F1e+HhUfHOU3LH5pFR8AumxNrbAGAAA="},"shape":[214],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p273875","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p273876"}}},"glyph":{"type":"object","name":"Line","id":"p273871","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p273872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p273873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p273808","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p273835"},{"type":"object","name":"WheelZoomTool","id":"p273836","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p273837","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p273838","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p273844","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p273843","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p273845","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p273846","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p273847","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p273848","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p273854","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p273853","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p273855"},{"type":"object","name":"SaveTool","id":"p273856"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p273830","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p273831","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p273832"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p273833"}}}],"right":[{"type":"object","name":"Legend","id":"p273866","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p273867","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p273863"}]}},{"type":"object","name":"LegendItem","id":"p273877","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p273874"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p273811","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p273812","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p273813","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p273814","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p273815","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p273816","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p273817","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p273818","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p273819","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p273820","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p273821","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p273822","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p273823","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p273824"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p273827","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p273826","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p273825","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p273828"}}}],"center":[{"type":"object","name":"Grid","id":"p273829","attributes":{"axis":{"id":"p273811"}}},{"type":"object","name":"Grid","id":"p273834","attributes":{"dimension":1,"axis":{"id":"p273830"}}}]}},{"type":"object","name":"Div","id":"p273878","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"911fb70a-99cc-40f5-865a-aeba45f925a3","roots":{"p273880":"e67f881d-fabb-4f7b-abbb-b8158c72f898"},"root_ids":["p273880"]}];
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