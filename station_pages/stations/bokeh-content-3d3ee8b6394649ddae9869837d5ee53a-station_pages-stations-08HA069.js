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
    
    
    const element = document.getElementById("a78bfbfd-b2ed-4a8e-8743-6b3faa22bf6b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a78bfbfd-b2ed-4a8e-8743-6b3faa22bf6b' but no matching script tag was found.")
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
                  const docs_json = '{"9d5971ea-6511-4167-864d-39e08a7fa8aa":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1060908","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p1060909"},"y_range":{"type":"object","name":"DataRange1d","id":"p1060910"},"x_scale":{"type":"object","name":"LinearScale","id":"p1060917"},"y_scale":{"type":"object","name":"LinearScale","id":"p1060918"},"title":{"type":"object","name":"Title","id":"p1060915"},"renderers":[{"type":"object","name":"TileRenderer","id":"p1060942","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p1060941","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p1060950","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1060944","attributes":{"selected":{"type":"object","name":"Selection","id":"p1060945","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1060946"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1060951","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1060952"}}},"glyph":{"type":"object","name":"Patch","id":"p1060947","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p1060948","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p1060949","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1060962","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1060956","attributes":{"selected":{"type":"object","name":"Selection","id":"p1060957","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1060958"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1060963","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1060964"}}},"glyph":{"type":"object","name":"Scatter","id":"p1060959","attributes":{"x":{"type":"value","value":-13836088.753830321},"y":{"type":"value","value":6213448.735563518},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1060960","attributes":{"x":{"type":"value","value":-13836088.753830321},"y":{"type":"value","value":6213448.735563518},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1060961","attributes":{"x":{"type":"value","value":-13836088.753830321},"y":{"type":"value","value":6213448.735563518},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p1060972","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1060966","attributes":{"selected":{"type":"object","name":"Selection","id":"p1060967","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1060968"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1060973","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1060974"}}},"glyph":{"type":"object","name":"Scatter","id":"p1060969","attributes":{"x":{"type":"value","value":-13836056.471177991},"y":{"type":"value","value":6213396.515015577},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1060970","attributes":{"x":{"type":"value","value":-13836056.471177991},"y":{"type":"value","value":6213396.515015577},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1060971","attributes":{"x":{"type":"value","value":-13836056.471177991},"y":{"type":"value","value":6213396.515015577},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1060916","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1060929"},{"type":"object","name":"WheelZoomTool","id":"p1060930","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1060931","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1060932","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1060938","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1060937","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1060939"},{"type":"object","name":"SaveTool","id":"p1060940"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p1060924","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1060925","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1060926","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1060927"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p1060919","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1060920","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1060921","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1060922"}}}],"center":[{"type":"object","name":"Grid","id":"p1060923","attributes":{"axis":{"id":"p1060919"}}},{"type":"object","name":"Grid","id":"p1060928","attributes":{"dimension":1,"axis":{"id":"p1060924"}}},{"type":"object","name":"Legend","id":"p1060953","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p1060954","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p1060950"}]}},{"type":"object","name":"LegendItem","id":"p1060965","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p1060962"}]}},{"type":"object","name":"LegendItem","id":"p1060975","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p1060972"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"9d5971ea-6511-4167-864d-39e08a7fa8aa","roots":{"p1060908":"a78bfbfd-b2ed-4a8e-8743-6b3faa22bf6b"},"root_ids":["p1060908"]}];
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