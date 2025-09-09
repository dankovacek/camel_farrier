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
    
    
    const element = document.getElementById("c1ed152c-a420-4ddb-879a-4647485478cb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c1ed152c-a420-4ddb-879a-4647485478cb' but no matching script tag was found.")
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
                  const docs_json = '{"9d137e1a-96f7-4d2b-a5f8-383ddb888683":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p23617","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p23618"},"y_range":{"type":"object","name":"DataRange1d","id":"p23619"},"x_scale":{"type":"object","name":"LinearScale","id":"p23626"},"y_scale":{"type":"object","name":"LinearScale","id":"p23627"},"title":{"type":"object","name":"Title","id":"p23624"},"renderers":[{"type":"object","name":"TileRenderer","id":"p23651","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p23650","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p23659","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p23653","attributes":{"selected":{"type":"object","name":"Selection","id":"p23654","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p23655"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p23660","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p23661"}}},"glyph":{"type":"object","name":"Patch","id":"p23656","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p23657","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p23658","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p23671","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p23665","attributes":{"selected":{"type":"object","name":"Selection","id":"p23666","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p23667"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p23672","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p23673"}}},"glyph":{"type":"object","name":"Scatter","id":"p23668","attributes":{"x":{"type":"value","value":-7241085.746832885},"y":{"type":"value","value":5537191.827273044},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p23669","attributes":{"x":{"type":"value","value":-7241085.746832885},"y":{"type":"value","value":5537191.827273044},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p23670","attributes":{"x":{"type":"value","value":-7241085.746832885},"y":{"type":"value","value":5537191.827273044},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p23681","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p23675","attributes":{"selected":{"type":"object","name":"Selection","id":"p23676","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p23677"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p23682","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p23683"}}},"glyph":{"type":"object","name":"Scatter","id":"p23678","attributes":{"x":{"type":"value","value":-7241095.765587056},"y":{"type":"value","value":5537171.551010877},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p23679","attributes":{"x":{"type":"value","value":-7241095.765587056},"y":{"type":"value","value":5537171.551010877},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p23680","attributes":{"x":{"type":"value","value":-7241095.765587056},"y":{"type":"value","value":5537171.551010877},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p23625","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p23638"},{"type":"object","name":"WheelZoomTool","id":"p23639","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p23640","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p23641","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p23647","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p23646","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p23648"},{"type":"object","name":"SaveTool","id":"p23649"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p23633","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p23634","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p23635","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p23636"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p23628","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p23629","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p23630","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p23631"}}}],"center":[{"type":"object","name":"Grid","id":"p23632","attributes":{"axis":{"id":"p23628"}}},{"type":"object","name":"Grid","id":"p23637","attributes":{"dimension":1,"axis":{"id":"p23633"}}},{"type":"object","name":"Legend","id":"p23662","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p23663","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p23659"}]}},{"type":"object","name":"LegendItem","id":"p23674","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p23671"}]}},{"type":"object","name":"LegendItem","id":"p23684","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p23681"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"9d137e1a-96f7-4d2b-a5f8-383ddb888683","roots":{"p23617":"c1ed152c-a420-4ddb-879a-4647485478cb"},"root_ids":["p23617"]}];
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