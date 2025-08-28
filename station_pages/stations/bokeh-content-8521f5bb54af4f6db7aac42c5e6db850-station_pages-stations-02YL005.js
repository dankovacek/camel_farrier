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
    
    
    const element = document.getElementById("b5961dc2-3c85-4495-855d-1b0b2328719e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b5961dc2-3c85-4495-855d-1b0b2328719e' but no matching script tag was found.")
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
                  const docs_json = '{"15883bbf-6800-4e83-8e3f-855d7db5eab1":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p352851","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p352852"},"y_range":{"type":"object","name":"DataRange1d","id":"p352853"},"x_scale":{"type":"object","name":"LinearScale","id":"p352860"},"y_scale":{"type":"object","name":"LinearScale","id":"p352861"},"title":{"type":"object","name":"Title","id":"p352858"},"renderers":[{"type":"object","name":"TileRenderer","id":"p352885","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p352884","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p352893","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p352887","attributes":{"selected":{"type":"object","name":"Selection","id":"p352888","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p352889"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p352894","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p352895"}}},"glyph":{"type":"object","name":"Patch","id":"p352890","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p352891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p352892","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p352905","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p352899","attributes":{"selected":{"type":"object","name":"Selection","id":"p352900","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p352901"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p352906","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p352907"}}},"glyph":{"type":"object","name":"Scatter","id":"p352902","attributes":{"x":{"type":"value","value":-6468240.163246412},"y":{"type":"value","value":6284761.178849266},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p352903","attributes":{"x":{"type":"value","value":-6468240.163246412},"y":{"type":"value","value":6284761.178849266},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p352904","attributes":{"x":{"type":"value","value":-6468240.163246412},"y":{"type":"value","value":6284761.178849266},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p352915","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p352909","attributes":{"selected":{"type":"object","name":"Selection","id":"p352910","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p352911"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p352916","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p352917"}}},"glyph":{"type":"object","name":"Scatter","id":"p352912","attributes":{"x":{"type":"value","value":-6468273.5590936495},"y":{"type":"value","value":6284776.467887336},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p352913","attributes":{"x":{"type":"value","value":-6468273.5590936495},"y":{"type":"value","value":6284776.467887336},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p352914","attributes":{"x":{"type":"value","value":-6468273.5590936495},"y":{"type":"value","value":6284776.467887336},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p352859","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p352872"},{"type":"object","name":"WheelZoomTool","id":"p352873","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p352874","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p352875","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p352881","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p352880","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p352882"},{"type":"object","name":"SaveTool","id":"p352883"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p352867","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p352868","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p352869","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p352870"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p352862","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p352863","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p352864","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p352865"}}}],"center":[{"type":"object","name":"Grid","id":"p352866","attributes":{"axis":{"id":"p352862"}}},{"type":"object","name":"Grid","id":"p352871","attributes":{"dimension":1,"axis":{"id":"p352867"}}},{"type":"object","name":"Legend","id":"p352896","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p352897","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p352893"}]}},{"type":"object","name":"LegendItem","id":"p352908","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p352905"}]}},{"type":"object","name":"LegendItem","id":"p352918","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p352915"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"15883bbf-6800-4e83-8e3f-855d7db5eab1","roots":{"p352851":"b5961dc2-3c85-4495-855d-1b0b2328719e"},"root_ids":["p352851"]}];
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