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
    
    
    const element = document.getElementById("d4ff9b1a-6801-4f74-92fb-bd6f4d9b6680");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd4ff9b1a-6801-4f74-92fb-bd6f4d9b6680' but no matching script tag was found.")
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
                  const docs_json = '{"ac816f08-2718-44cf-aa8d-8b41e36553d3":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p638121","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p638122"}}},"roots":[{"type":"object","name":"Column","id":"p638204","attributes":{"children":[{"type":"object","name":"Figure","id":"p638123","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p638124"},"y_range":{"type":"object","name":"DataRange1d","id":"p638125"},"x_scale":{"type":"object","name":"LinearScale","id":"p638133"},"y_scale":{"type":"object","name":"LinearScale","id":"p638134"},"title":{"type":"object","name":"Title","id":"p638126","attributes":{"text":"08NL005 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p638187","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p638181","attributes":{"selected":{"type":"object","name":"Selection","id":"p638182","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p638183"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaNjjdr7sEAPDgbAv50A0w8eFYNqh2x9MN6j+PQuW378KSAMAVLJmYDAAAAA="},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p638188","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p638189"}}},"glyph":{"type":"object","name":"VArea","id":"p638184","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.3915999579429625},"y2":{"type":"value","value":118.32000000000001},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p638185","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.3915999579429625},"y2":{"type":"value","value":118.32000000000001},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p638186","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.3915999579429625},"y2":{"type":"value","value":118.32000000000001},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p638198","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p638192","attributes":{"selected":{"type":"object","name":"Selection","id":"p638193","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p638194"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[458],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+2WP0vDQBTAT3GQLgotguAigiAoIkEQoTQiWgRFqyiWInTK3NnFfI1sgYKji4ub/QBdxKG41cWluwgO8b27vOTykthUBVtolh/v7t6/u8u9JwR+HzcSw8G6Za2aEAxwJeCEEKZhrMfG+TqQXcdZxnVEu/e0hHJWcv9cD0wtKnuVBZ2i05yTfhvF/He0C3czUq8P3fLrtLTDyPX4PMmQxxTq/xchTq+k8vyWPF6uB+f+iXZ+ym7l4R31s5L7Jzmr/qDr0vz9lV9u/7f3oXtdyOG9CthszEoZ6XneY7u9G6M8v/sdXAf+13yG/zeM8/92UBlMyP/SzHXk/5dGGSfM833g+zQqMqQyVO/3OJ7xeQxTPzES93ES36O3bXyXXOflGClE60jR3NNlmg/XiSs1H7DmyzV8h0tG/jIgWDWN5zOc54T38NTXq+isW/snKBO5/3i8Km7XqZaT6gB49vOxD5QfWq/ypjjq1u2FHjfonav1inJexpXAhLyh46omrSe7oV++DxSnoswL/BLDfCAvqn8yLrCTEEfED527dv5QJ4tmwrjrzG8pv1FCX7SJ48RW+9AI9OV4gr3IfYvaA5UNtEfU6jXV7Uj97tdngx1ZlzntXrR/zipTn51GqvtU5zOT9TW8P+Ay7y9S/fB+KaPM/fF+q99+DroPPJ+0/Y2N6+f7BatVgDNQDgAA"},"shape":[458],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p638199","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p638200"}}},"glyph":{"type":"object","name":"Line","id":"p638195","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p638196","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p638197","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p638132","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p638159"},{"type":"object","name":"WheelZoomTool","id":"p638160","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p638161","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p638162","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p638168","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p638167","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p638169","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p638170","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p638171","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p638172","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p638178","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p638177","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p638179"},{"type":"object","name":"SaveTool","id":"p638180"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p638154","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p638155","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p638156"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p638157"}}}],"right":[{"type":"object","name":"Legend","id":"p638190","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p638191","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p638187"}]}},{"type":"object","name":"LegendItem","id":"p638201","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p638198"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p638135","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p638136","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p638137","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p638138","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p638139","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p638140","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p638141","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p638142","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p638143","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p638144","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p638145","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p638146","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p638147","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p638148"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p638151","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p638150","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p638149","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p638152"}}}],"center":[{"type":"object","name":"Grid","id":"p638153","attributes":{"axis":{"id":"p638135"}}},{"type":"object","name":"Grid","id":"p638158","attributes":{"dimension":1,"axis":{"id":"p638154"}}}]}},{"type":"object","name":"Div","id":"p638202","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"ac816f08-2718-44cf-aa8d-8b41e36553d3","roots":{"p638204":"d4ff9b1a-6801-4f74-92fb-bd6f4d9b6680"},"root_ids":["p638204"]}];
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