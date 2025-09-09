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
    
    
    const element = document.getElementById("dc398e56-d41e-40d4-b4e9-90fca53fe5e6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dc398e56-d41e-40d4-b4e9-90fca53fe5e6' but no matching script tag was found.")
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
                  const docs_json = '{"0fca33c8-c085-4d88-ad0d-0e1cf8dd048a":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p40619","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p40620"},"y_range":{"type":"object","name":"DataRange1d","id":"p40621"},"x_scale":{"type":"object","name":"LinearScale","id":"p40628"},"y_scale":{"type":"object","name":"LinearScale","id":"p40629"},"title":{"type":"object","name":"Title","id":"p40626"},"renderers":[{"type":"object","name":"TileRenderer","id":"p40653","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p40652","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p40661","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p40655","attributes":{"selected":{"type":"object","name":"Selection","id":"p40656","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p40657"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p40662","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p40663"}}},"glyph":{"type":"object","name":"Patch","id":"p40658","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p40659","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p40660","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p40673","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p40667","attributes":{"selected":{"type":"object","name":"Selection","id":"p40668","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p40669"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p40674","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p40675"}}},"glyph":{"type":"object","name":"Scatter","id":"p40670","attributes":{"x":{"type":"value","value":-6679689.309618419},"y":{"type":"value","value":5799261.343697906},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p40671","attributes":{"x":{"type":"value","value":-6679689.309618419},"y":{"type":"value","value":5799261.343697906},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p40672","attributes":{"x":{"type":"value","value":-6679689.309618419},"y":{"type":"value","value":5799261.343697906},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p40683","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p40677","attributes":{"selected":{"type":"object","name":"Selection","id":"p40678","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p40679"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p40684","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p40685"}}},"glyph":{"type":"object","name":"Scatter","id":"p40680","attributes":{"x":{"type":"value","value":-6679680.404059156},"y":{"type":"value","value":5799243.678462156},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p40681","attributes":{"x":{"type":"value","value":-6679680.404059156},"y":{"type":"value","value":5799243.678462156},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p40682","attributes":{"x":{"type":"value","value":-6679680.404059156},"y":{"type":"value","value":5799243.678462156},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p40627","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p40640"},{"type":"object","name":"WheelZoomTool","id":"p40641","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p40642","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p40643","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p40649","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p40648","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p40650"},{"type":"object","name":"SaveTool","id":"p40651"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p40635","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p40636","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p40637","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p40638"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p40630","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p40631","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p40632","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p40633"}}}],"center":[{"type":"object","name":"Grid","id":"p40634","attributes":{"axis":{"id":"p40630"}}},{"type":"object","name":"Grid","id":"p40639","attributes":{"dimension":1,"axis":{"id":"p40635"}}},{"type":"object","name":"Legend","id":"p40664","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p40665","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p40661"}]}},{"type":"object","name":"LegendItem","id":"p40676","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p40673"}]}},{"type":"object","name":"LegendItem","id":"p40686","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p40683"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"0fca33c8-c085-4d88-ad0d-0e1cf8dd048a","roots":{"p40619":"dc398e56-d41e-40d4-b4e9-90fca53fe5e6"},"root_ids":["p40619"]}];
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