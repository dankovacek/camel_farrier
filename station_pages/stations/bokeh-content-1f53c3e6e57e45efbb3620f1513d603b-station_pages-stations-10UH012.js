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
    
    
    const element = document.getElementById("d074a3c4-12a5-417b-aa12-29e49dd8ad3e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd074a3c4-12a5-417b-aa12-29e49dd8ad3e' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.6.0.min.js"];
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
                  const docs_json = '{"a2214e99-a9d8-4284-91b5-d4d7628f5c60":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p607540","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p607541"},"y_range":{"type":"object","name":"DataRange1d","id":"p607542"},"x_scale":{"type":"object","name":"LinearScale","id":"p607549"},"y_scale":{"type":"object","name":"LinearScale","id":"p607550"},"title":{"type":"object","name":"Title","id":"p607547"},"renderers":[{"type":"object","name":"TileRenderer","id":"p607574","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p607573","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p607582","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p607576","attributes":{"selected":{"type":"object","name":"Selection","id":"p607577","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p607578"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p607583","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p607584"}}},"glyph":{"type":"object","name":"Patch","id":"p607579","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p607580","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p607581","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p607594","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p607588","attributes":{"selected":{"type":"object","name":"Selection","id":"p607589","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p607590"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p607595","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p607596"}}},"glyph":{"type":"object","name":"Scatter","id":"p607591","attributes":{"x":{"type":"value","value":-7626696.462940784},"y":{"type":"value","value":9290149.019315384},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p607592","attributes":{"x":{"type":"value","value":-7626696.462940784},"y":{"type":"value","value":9290149.019315384},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p607593","attributes":{"x":{"type":"value","value":-7626696.462940784},"y":{"type":"value","value":9290149.019315384},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p607604","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p607598","attributes":{"selected":{"type":"object","name":"Selection","id":"p607599","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p607600"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p607605","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p607606"}}},"glyph":{"type":"object","name":"Scatter","id":"p607601","attributes":{"x":{"type":"value","value":-7626643.029585203},"y":{"type":"value","value":9290093.619864047},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p607602","attributes":{"x":{"type":"value","value":-7626643.029585203},"y":{"type":"value","value":9290093.619864047},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p607603","attributes":{"x":{"type":"value","value":-7626643.029585203},"y":{"type":"value","value":9290093.619864047},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p607548","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p607561"},{"type":"object","name":"WheelZoomTool","id":"p607562","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p607563","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p607564","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p607570","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p607569","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p607571"},{"type":"object","name":"SaveTool","id":"p607572"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p607556","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p607557","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p607558","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p607559"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p607551","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p607552","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p607553","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p607554"}}}],"center":[{"type":"object","name":"Grid","id":"p607555","attributes":{"axis":{"id":"p607551"}}},{"type":"object","name":"Grid","id":"p607560","attributes":{"dimension":1,"axis":{"id":"p607556"}}},{"type":"object","name":"Legend","id":"p607585","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p607586","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p607582"}]}},{"type":"object","name":"LegendItem","id":"p607597","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p607594"}]}},{"type":"object","name":"LegendItem","id":"p607607","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p607604"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"a2214e99-a9d8-4284-91b5-d4d7628f5c60","roots":{"p607540":"d074a3c4-12a5-417b-aa12-29e49dd8ad3e"},"root_ids":["p607540"]}];
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