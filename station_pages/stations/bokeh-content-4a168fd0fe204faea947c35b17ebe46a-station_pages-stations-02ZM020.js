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
    
    
    const element = document.getElementById("da9d9509-487f-4583-a92f-28e6763060be");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'da9d9509-487f-4583-a92f-28e6763060be' but no matching script tag was found.")
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
                  const docs_json = '{"fbc855f1-bb0d-4f34-a59b-613bddd55a21":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p429188","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p429189"},"y_range":{"type":"object","name":"DataRange1d","id":"p429190"},"x_scale":{"type":"object","name":"LinearScale","id":"p429197"},"y_scale":{"type":"object","name":"LinearScale","id":"p429198"},"title":{"type":"object","name":"Title","id":"p429195"},"renderers":[{"type":"object","name":"TileRenderer","id":"p429222","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p429221","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p429230","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p429224","attributes":{"selected":{"type":"object","name":"Selection","id":"p429225","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p429226"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p429231","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p429232"}}},"glyph":{"type":"object","name":"Patch","id":"p429227","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p429228","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p429229","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p429242","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p429236","attributes":{"selected":{"type":"object","name":"Selection","id":"p429237","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p429238"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p429243","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p429244"}}},"glyph":{"type":"object","name":"Scatter","id":"p429239","attributes":{"x":{"type":"value","value":-5871932.820524267},"y":{"type":"value","value":6034665.3142294325},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p429240","attributes":{"x":{"type":"value","value":-5871932.820524267},"y":{"type":"value","value":6034665.3142294325},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p429241","attributes":{"x":{"type":"value","value":-5871932.820524267},"y":{"type":"value","value":6034665.3142294325},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p429252","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p429246","attributes":{"selected":{"type":"object","name":"Selection","id":"p429247","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p429248"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p429253","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p429254"}}},"glyph":{"type":"object","name":"Scatter","id":"p429249","attributes":{"x":{"type":"value","value":-5871910.5566261085},"y":{"type":"value","value":6034701.608956173},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p429250","attributes":{"x":{"type":"value","value":-5871910.5566261085},"y":{"type":"value","value":6034701.608956173},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p429251","attributes":{"x":{"type":"value","value":-5871910.5566261085},"y":{"type":"value","value":6034701.608956173},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p429196","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p429209"},{"type":"object","name":"WheelZoomTool","id":"p429210","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p429211","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p429212","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p429218","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p429217","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p429219"},{"type":"object","name":"SaveTool","id":"p429220"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p429204","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p429205","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p429206","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p429207"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p429199","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p429200","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p429201","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p429202"}}}],"center":[{"type":"object","name":"Grid","id":"p429203","attributes":{"axis":{"id":"p429199"}}},{"type":"object","name":"Grid","id":"p429208","attributes":{"dimension":1,"axis":{"id":"p429204"}}},{"type":"object","name":"Legend","id":"p429233","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p429234","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p429230"}]}},{"type":"object","name":"LegendItem","id":"p429245","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p429242"}]}},{"type":"object","name":"LegendItem","id":"p429255","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p429252"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"fbc855f1-bb0d-4f34-a59b-613bddd55a21","roots":{"p429188":"da9d9509-487f-4583-a92f-28e6763060be"},"root_ids":["p429188"]}];
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