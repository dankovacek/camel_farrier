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
    
    
    const element = document.getElementById("fb063af6-cebd-4d78-80e4-813426ac982e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fb063af6-cebd-4d78-80e4-813426ac982e' but no matching script tag was found.")
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
                  const docs_json = '{"714c3cea-7c8c-4200-972e-81a87959a267":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p745230","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p745231"},"y_range":{"type":"object","name":"DataRange1d","id":"p745232"},"x_scale":{"type":"object","name":"LinearScale","id":"p745239"},"y_scale":{"type":"object","name":"LinearScale","id":"p745240"},"title":{"type":"object","name":"Title","id":"p745237"},"renderers":[{"type":"object","name":"TileRenderer","id":"p745264","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p745263","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p745272","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745266","attributes":{"selected":{"type":"object","name":"Selection","id":"p745267","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745268"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p745273","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745274"}}},"glyph":{"type":"object","name":"Patch","id":"p745269","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p745270","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p745271","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p745284","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745278","attributes":{"selected":{"type":"object","name":"Selection","id":"p745279","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745280"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p745285","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745286"}}},"glyph":{"type":"object","name":"Scatter","id":"p745281","attributes":{"x":{"type":"value","value":-10787557.74427039},"y":{"type":"value","value":6383378.219006414},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p745282","attributes":{"x":{"type":"value","value":-10787557.74427039},"y":{"type":"value","value":6383378.219006414},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p745283","attributes":{"x":{"type":"value","value":-10787557.74427039},"y":{"type":"value","value":6383378.219006414},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p745294","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745288","attributes":{"selected":{"type":"object","name":"Selection","id":"p745289","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745290"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p745295","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745296"}}},"glyph":{"type":"object","name":"Scatter","id":"p745291","attributes":{"x":{"type":"value","value":-10787534.367177324},"y":{"type":"value","value":6383476.192611513},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p745292","attributes":{"x":{"type":"value","value":-10787534.367177324},"y":{"type":"value","value":6383476.192611513},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p745293","attributes":{"x":{"type":"value","value":-10787534.367177324},"y":{"type":"value","value":6383476.192611513},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p745238","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p745251"},{"type":"object","name":"WheelZoomTool","id":"p745252","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p745253","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p745254","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p745260","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p745259","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p745261"},{"type":"object","name":"SaveTool","id":"p745262"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p745246","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p745247","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p745248","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p745249"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p745241","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p745242","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p745243","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p745244"}}}],"center":[{"type":"object","name":"Grid","id":"p745245","attributes":{"axis":{"id":"p745241"}}},{"type":"object","name":"Grid","id":"p745250","attributes":{"dimension":1,"axis":{"id":"p745246"}}},{"type":"object","name":"Legend","id":"p745275","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p745276","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p745272"}]}},{"type":"object","name":"LegendItem","id":"p745287","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p745284"}]}},{"type":"object","name":"LegendItem","id":"p745297","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p745294"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"714c3cea-7c8c-4200-972e-81a87959a267","roots":{"p745230":"fb063af6-cebd-4d78-80e4-813426ac982e"},"root_ids":["p745230"]}];
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