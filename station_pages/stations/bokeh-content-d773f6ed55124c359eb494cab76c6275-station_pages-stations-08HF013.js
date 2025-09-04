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
    
    
    const element = document.getElementById("e2fceefc-241d-4587-bcd8-6267eb484b75");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e2fceefc-241d-4587-bcd8-6267eb484b75' but no matching script tag was found.")
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
                  const docs_json = '{"b6b1f531-0d2c-4c97-adf2-d697baf493e9":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p6691","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p6692"},"y_range":{"type":"object","name":"DataRange1d","id":"p6693"},"x_scale":{"type":"object","name":"LinearScale","id":"p6700"},"y_scale":{"type":"object","name":"LinearScale","id":"p6701"},"title":{"type":"object","name":"Title","id":"p6698"},"renderers":[{"type":"object","name":"TileRenderer","id":"p6725","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p6724","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p6733","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p6727","attributes":{"selected":{"type":"object","name":"Selection","id":"p6728","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p6729"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p6734","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p6735"}}},"glyph":{"type":"object","name":"Patch","id":"p6730","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p6731","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p6732","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p6745","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p6739","attributes":{"selected":{"type":"object","name":"Selection","id":"p6740","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p6741"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p6746","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p6747"}}},"glyph":{"type":"object","name":"Scatter","id":"p6742","attributes":{"x":{"type":"value","value":-14231306.34199368},"y":{"type":"value","value":6535500.718645397},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p6743","attributes":{"x":{"type":"value","value":-14231306.34199368},"y":{"type":"value","value":6535500.718645397},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p6744","attributes":{"x":{"type":"value","value":-14231306.34199368},"y":{"type":"value","value":6535500.718645397},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p6755","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p6749","attributes":{"selected":{"type":"object","name":"Selection","id":"p6750","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p6751"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p6756","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p6757"}}},"glyph":{"type":"object","name":"Scatter","id":"p6752","attributes":{"x":{"type":"value","value":-14231335.285061285},"y":{"type":"value","value":6535421.944149208},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p6753","attributes":{"x":{"type":"value","value":-14231335.285061285},"y":{"type":"value","value":6535421.944149208},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p6754","attributes":{"x":{"type":"value","value":-14231335.285061285},"y":{"type":"value","value":6535421.944149208},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p6699","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p6712"},{"type":"object","name":"WheelZoomTool","id":"p6713","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p6714","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p6715","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p6721","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p6720","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p6722"},{"type":"object","name":"SaveTool","id":"p6723"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p6707","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p6708","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p6709","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p6710"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p6702","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p6703","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p6704","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p6705"}}}],"center":[{"type":"object","name":"Grid","id":"p6706","attributes":{"axis":{"id":"p6702"}}},{"type":"object","name":"Grid","id":"p6711","attributes":{"dimension":1,"axis":{"id":"p6707"}}},{"type":"object","name":"Legend","id":"p6736","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p6737","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p6733"}]}},{"type":"object","name":"LegendItem","id":"p6748","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p6745"}]}},{"type":"object","name":"LegendItem","id":"p6758","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p6755"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"b6b1f531-0d2c-4c97-adf2-d697baf493e9","roots":{"p6691":"e2fceefc-241d-4587-bcd8-6267eb484b75"},"root_ids":["p6691"]}];
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