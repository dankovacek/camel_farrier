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
    
    
    const element = document.getElementById("e9cf9843-b27b-4a60-a19c-fff4041d2d51");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e9cf9843-b27b-4a60-a19c-fff4041d2d51' but no matching script tag was found.")
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
                  const docs_json = '{"fbe1d73c-96b9-4c3a-8c25-ce7e3508330c":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p426329","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p426330"},"y_range":{"type":"object","name":"DataRange1d","id":"p426331"},"x_scale":{"type":"object","name":"LinearScale","id":"p426338"},"y_scale":{"type":"object","name":"LinearScale","id":"p426339"},"title":{"type":"object","name":"Title","id":"p426336"},"renderers":[{"type":"object","name":"TileRenderer","id":"p426363","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p426362","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p426371","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p426365","attributes":{"selected":{"type":"object","name":"Selection","id":"p426366","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p426367"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p426372","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p426373"}}},"glyph":{"type":"object","name":"Patch","id":"p426368","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p426369","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p426370","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p426383","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p426377","attributes":{"selected":{"type":"object","name":"Selection","id":"p426378","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p426379"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p426384","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p426385"}}},"glyph":{"type":"object","name":"Scatter","id":"p426380","attributes":{"x":{"type":"value","value":-5865510.799100403},"y":{"type":"value","value":6038739.524219918},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p426381","attributes":{"x":{"type":"value","value":-5865510.799100403},"y":{"type":"value","value":6038739.524219918},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p426382","attributes":{"x":{"type":"value","value":-5865510.799100403},"y":{"type":"value","value":6038739.524219918},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p426393","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p426387","attributes":{"selected":{"type":"object","name":"Selection","id":"p426388","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p426389"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p426394","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p426395"}}},"glyph":{"type":"object","name":"Scatter","id":"p426390","attributes":{"x":{"type":"value","value":-5865500.780346232},"y":{"type":"value","value":6038666.900987836},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p426391","attributes":{"x":{"type":"value","value":-5865500.780346232},"y":{"type":"value","value":6038666.900987836},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p426392","attributes":{"x":{"type":"value","value":-5865500.780346232},"y":{"type":"value","value":6038666.900987836},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p426337","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p426350"},{"type":"object","name":"WheelZoomTool","id":"p426351","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p426352","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p426353","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p426359","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p426358","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p426360"},{"type":"object","name":"SaveTool","id":"p426361"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p426345","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p426346","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p426347","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p426348"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p426340","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p426341","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p426342","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p426343"}}}],"center":[{"type":"object","name":"Grid","id":"p426344","attributes":{"axis":{"id":"p426340"}}},{"type":"object","name":"Grid","id":"p426349","attributes":{"dimension":1,"axis":{"id":"p426345"}}},{"type":"object","name":"Legend","id":"p426374","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p426375","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p426371"}]}},{"type":"object","name":"LegendItem","id":"p426386","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p426383"}]}},{"type":"object","name":"LegendItem","id":"p426396","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p426393"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"fbe1d73c-96b9-4c3a-8c25-ce7e3508330c","roots":{"p426329":"e9cf9843-b27b-4a60-a19c-fff4041d2d51"},"root_ids":["p426329"]}];
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