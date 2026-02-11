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
    
    
    const element = document.getElementById("ecbd5d4a-1977-4f96-bfef-c7cff81493ab");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ecbd5d4a-1977-4f96-bfef-c7cff81493ab' but no matching script tag was found.")
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
                  const docs_json = '{"a50fd25d-abbd-4c7f-a735-8d8bfa3363b7":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p463809","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p463810"}}},"roots":[{"type":"object","name":"Column","id":"p463882","attributes":{"children":[{"type":"object","name":"Figure","id":"p463811","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p463812"},"y_range":{"type":"object","name":"DataRange1d","id":"p463813"},"x_scale":{"type":"object","name":"LinearScale","id":"p463821"},"y_scale":{"type":"object","name":"LinearScale","id":"p463822"},"title":{"type":"object","name":"Title","id":"p463814","attributes":{"text":"08NG031 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p463875","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p463869","attributes":{"selected":{"type":"object","name":"Selection","id":"p463870","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p463871"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1278],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2ZS0hVQRjHbxuJFtE6hDYtIooW0qJFDK1aREQ7aWO0chUhIhHCrYhe9DIrswe3MulhTzM1M729H4ugRUIrFSki6GnWLdPTnDn+P8/9nzvMtU0g0+bPNzPfY75z8PzuVyoV/sulU9NMgyBIZ1/cVwU06GvKhpp5sqpDjQZBxcEHt0XH9MbCXe2yDz+9rsrKHoqtk6yfU/58yqr9e09/flpI8+oc1/XUfex21s8a8yt4P75nfL27+pZomOfS19Yw3rzyZW1iQ3/rumt6rodxMnOXXI1rxezFrWJ/1+dbSi+L5vT+UHNLGLe3uv5iGCe9fNYFNaLzlGxrTsTFfs7kPaeG9X5V5VlR1Ddq7JtyL6y7bO4T9qHRc7tjdKj5rvqj/d687MjrV7x/eD7cT/jH4ps+xfva13RD9Ie+t1p6Tfrg6htU16cGt5wXxTnY6CP0m16feeWUeh8E/Wv2N4j+1HkbGxsTyufgj/1PJs8R9dY8jzrZhw3lOPCLnn8mobY6Oa5NXxv/fdZ9rrvYePBzabFxXYp4qWn6d9urV69ep5vyd8xl/6siDnMS1LXPfMDcxevgCnAJOMXGfcyFzDOwXfvgPd3c7PBYW5wDDW/BZsV5cB/4Lqxr5WCXmpFKDcwvmeRvcFuUt1P4j+OB10ZN3V0Sj7nPVhfzIu4HBRdD2Q/rNm5kfuS+wq/Y58/cxxzHyhxp4zmss7+N9xAPPDZg+rxTbH2//tUbtorCj9dZEQfqOsf5bH4cF9punsdmpz8r/Fht51xxXPmguC/3fapabD6uc6p5mNuLVf/98urVq1ev/1kNZ2r+7H1W0yMcyvNKnmcyH8MGV2LeyHzJc0jmehfnMxczj7If82hs7ot4Z0rXPTL3H1nQLXyOfoyb+z42caoqDb+rPSuy6peOv6j1nvihb9wnniMzd3PdXCfmr7b5Ld8TCj8+Z5vX8u84rMNmnv5i8hyfeD+OiWIdivP63umGjYfN/zf0ZPaKDX6Cjfrhz5yOc+AotiO/3ZIn4rtDwmvYh/3KxN+R4Lo+7be284DsQ6N824UbOR/XAT/mb8SB4jwr5+F1rofrjOqpTdyjMHfXisKf+wPbVq+tvzY/9I1/78R+95j3D88Zz4XPIR7OQf3fd69evXr16jWXxhwZ82Mo1pn/wdux+XYeh4IrwZu2OS++4x8M754Ujb7/JxIcGcU7Kt9xcBxzI3iAFeeZ/+AP3mVO5bzQd2YeXp9Yt3EJ8sJmzoEfc6eNN5mrWBHfxpvMo6wNRqtFmS953zZXBj+yvy2PjU8RPz9f5UTcTWJzfbBt+/DP1+Q9UVfhuJPzcPazzc25r9w/7hNsfr5QG2+7bNv7wO+nyw/vO+y/LbUDVPAnAAA="},"shape":[1278],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p463876","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p463877"}}},"glyph":{"type":"object","name":"Line","id":"p463872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p463873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p463874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p463820","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p463847"},{"type":"object","name":"WheelZoomTool","id":"p463848","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p463849","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p463850","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p463856","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p463855","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p463857","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p463858","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p463859","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p463860","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p463866","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p463865","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p463867"},{"type":"object","name":"SaveTool","id":"p463868"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p463842","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p463843","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p463844"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p463845"}}}],"right":[{"type":"object","name":"Legend","id":"p463878","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p463879","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p463875"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p463823","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p463824","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p463825","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p463826","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p463827","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p463828","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p463829","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p463830","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p463831","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p463832","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p463833","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p463834","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p463835","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p463836"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p463839","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p463838","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p463837","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p463840"}}}],"center":[{"type":"object","name":"Grid","id":"p463841","attributes":{"axis":{"id":"p463823"}}},{"type":"object","name":"Grid","id":"p463846","attributes":{"dimension":1,"axis":{"id":"p463842"}}}]}},{"type":"object","name":"Div","id":"p463880","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"a50fd25d-abbd-4c7f-a735-8d8bfa3363b7","roots":{"p463882":"ecbd5d4a-1977-4f96-bfef-c7cff81493ab"},"root_ids":["p463882"]}];
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