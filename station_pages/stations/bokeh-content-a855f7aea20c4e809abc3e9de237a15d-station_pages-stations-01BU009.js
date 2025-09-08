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
    
    
    const element = document.getElementById("bdfa8573-6036-4666-b90b-907b5fb94ced");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bdfa8573-6036-4666-b90b-907b5fb94ced' but no matching script tag was found.")
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
                  const docs_json = '{"e123dd1c-6c62-443f-82fa-f137e876a576":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p12475","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p12476"},"y_range":{"type":"object","name":"DataRange1d","id":"p12477"},"x_scale":{"type":"object","name":"LinearScale","id":"p12484"},"y_scale":{"type":"object","name":"LinearScale","id":"p12485"},"title":{"type":"object","name":"Title","id":"p12482"},"renderers":[{"type":"object","name":"TileRenderer","id":"p12509","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p12508","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p12517","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p12511","attributes":{"selected":{"type":"object","name":"Selection","id":"p12512","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p12513"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p12518","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p12519"}}},"glyph":{"type":"object","name":"Patch","id":"p12514","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p12515","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p12516","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p12529","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p12523","attributes":{"selected":{"type":"object","name":"Selection","id":"p12524","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p12525"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p12530","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p12531"}}},"glyph":{"type":"object","name":"Scatter","id":"p12526","attributes":{"x":{"type":"value","value":-7252106.37642142},"y":{"type":"value","value":5762396.881530395},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p12527","attributes":{"x":{"type":"value","value":-7252106.37642142},"y":{"type":"value","value":5762396.881530395},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p12528","attributes":{"x":{"type":"value","value":-7252106.37642142},"y":{"type":"value","value":5762396.881530395},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p12539","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p12533","attributes":{"selected":{"type":"object","name":"Selection","id":"p12534","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p12535"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p12540","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p12541"}}},"glyph":{"type":"object","name":"Scatter","id":"p12536","attributes":{"x":{"type":"value","value":-7252052.943065837},"y":{"type":"value","value":5762448.058277893},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p12537","attributes":{"x":{"type":"value","value":-7252052.943065837},"y":{"type":"value","value":5762448.058277893},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p12538","attributes":{"x":{"type":"value","value":-7252052.943065837},"y":{"type":"value","value":5762448.058277893},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p12483","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p12496"},{"type":"object","name":"WheelZoomTool","id":"p12497","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p12498","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p12499","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p12505","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p12504","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p12506"},{"type":"object","name":"SaveTool","id":"p12507"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p12491","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p12492","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p12493","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p12494"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p12486","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p12487","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p12488","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p12489"}}}],"center":[{"type":"object","name":"Grid","id":"p12490","attributes":{"axis":{"id":"p12486"}}},{"type":"object","name":"Grid","id":"p12495","attributes":{"dimension":1,"axis":{"id":"p12491"}}},{"type":"object","name":"Legend","id":"p12520","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p12521","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p12517"}]}},{"type":"object","name":"LegendItem","id":"p12532","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p12529"}]}},{"type":"object","name":"LegendItem","id":"p12542","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p12539"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"e123dd1c-6c62-443f-82fa-f137e876a576","roots":{"p12475":"bdfa8573-6036-4666-b90b-907b5fb94ced"},"root_ids":["p12475"]}];
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