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
    
    
    const element = document.getElementById("f8fc7974-60d2-4401-9b6c-edac36585d56");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f8fc7974-60d2-4401-9b6c-edac36585d56' but no matching script tag was found.")
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
                  const docs_json = '{"fba19589-d261-496c-8e97-f504cbcdbf2d":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p644542","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p644543"},"y_range":{"type":"object","name":"DataRange1d","id":"p644544"},"x_scale":{"type":"object","name":"LinearScale","id":"p644551"},"y_scale":{"type":"object","name":"LinearScale","id":"p644552"},"title":{"type":"object","name":"Title","id":"p644549"},"renderers":[{"type":"object","name":"TileRenderer","id":"p644576","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p644575","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p644584","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p644578","attributes":{"selected":{"type":"object","name":"Selection","id":"p644579","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p644580"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p644585","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p644586"}}},"glyph":{"type":"object","name":"Patch","id":"p644581","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p644582","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p644583","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p644596","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p644590","attributes":{"selected":{"type":"object","name":"Selection","id":"p644591","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p644592"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p644597","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p644598"}}},"glyph":{"type":"object","name":"Scatter","id":"p644593","attributes":{"x":{"type":"value","value":-11073760.155099897},"y":{"type":"value","value":6529285.093015232},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p644594","attributes":{"x":{"type":"value","value":-11073760.155099897},"y":{"type":"value","value":6529285.093015232},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p644595","attributes":{"x":{"type":"value","value":-11073760.155099897},"y":{"type":"value","value":6529285.093015232},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p644606","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p644600","attributes":{"selected":{"type":"object","name":"Selection","id":"p644601","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p644602"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p644607","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p644608"}}},"glyph":{"type":"object","name":"Scatter","id":"p644603","attributes":{"x":{"type":"value","value":-11073790.21136241},"y":{"type":"value","value":6529369.056814913},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p644604","attributes":{"x":{"type":"value","value":-11073790.21136241},"y":{"type":"value","value":6529369.056814913},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p644605","attributes":{"x":{"type":"value","value":-11073790.21136241},"y":{"type":"value","value":6529369.056814913},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p644550","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p644563"},{"type":"object","name":"WheelZoomTool","id":"p644564","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p644565","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p644566","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p644572","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p644571","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p644573"},{"type":"object","name":"SaveTool","id":"p644574"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p644558","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p644559","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p644560","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p644561"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p644553","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p644554","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p644555","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p644556"}}}],"center":[{"type":"object","name":"Grid","id":"p644557","attributes":{"axis":{"id":"p644553"}}},{"type":"object","name":"Grid","id":"p644562","attributes":{"dimension":1,"axis":{"id":"p644558"}}},{"type":"object","name":"Legend","id":"p644587","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p644588","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p644584"}]}},{"type":"object","name":"LegendItem","id":"p644599","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p644596"}]}},{"type":"object","name":"LegendItem","id":"p644609","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p644606"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"fba19589-d261-496c-8e97-f504cbcdbf2d","roots":{"p644542":"f8fc7974-60d2-4401-9b6c-edac36585d56"},"root_ids":["p644542"]}];
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