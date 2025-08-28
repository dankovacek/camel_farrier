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
    
    
    const element = document.getElementById("ec3d3e9a-1681-4428-a5db-6e5d4f53f5a0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ec3d3e9a-1681-4428-a5db-6e5d4f53f5a0' but no matching script tag was found.")
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
                  const docs_json = '{"bb5885f3-835d-4aa9-99a9-90d74cd9c7e1":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p19571","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p19572"},"y_range":{"type":"object","name":"DataRange1d","id":"p19573"},"x_scale":{"type":"object","name":"LinearScale","id":"p19580"},"y_scale":{"type":"object","name":"LinearScale","id":"p19581"},"title":{"type":"object","name":"Title","id":"p19578"},"renderers":[{"type":"object","name":"TileRenderer","id":"p19605","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p19604","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p19613","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p19607","attributes":{"selected":{"type":"object","name":"Selection","id":"p19608","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p19609"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p19614","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p19615"}}},"glyph":{"type":"object","name":"Patch","id":"p19610","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p19611","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p19612","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p19625","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p19619","attributes":{"selected":{"type":"object","name":"Selection","id":"p19620","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p19621"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p19626","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p19627"}}},"glyph":{"type":"object","name":"Scatter","id":"p19622","attributes":{"x":{"type":"value","value":-7460787.007057398},"y":{"type":"value","value":5824877.704958856},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p19623","attributes":{"x":{"type":"value","value":-7460787.007057398},"y":{"type":"value","value":5824877.704958856},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p19624","attributes":{"x":{"type":"value","value":-7460787.007057398},"y":{"type":"value","value":5824877.704958856},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p19635","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p19629","attributes":{"selected":{"type":"object","name":"Selection","id":"p19630","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p19631"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p19636","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p19637"}}},"glyph":{"type":"object","name":"Scatter","id":"p19632","attributes":{"x":{"type":"value","value":-7460761.403574514},"y":{"type":"value","value":5824901.863901108},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p19633","attributes":{"x":{"type":"value","value":-7460761.403574514},"y":{"type":"value","value":5824901.863901108},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p19634","attributes":{"x":{"type":"value","value":-7460761.403574514},"y":{"type":"value","value":5824901.863901108},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p19579","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p19592"},{"type":"object","name":"WheelZoomTool","id":"p19593","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p19594","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p19595","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p19601","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p19600","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p19602"},{"type":"object","name":"SaveTool","id":"p19603"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p19587","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p19588","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p19589","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p19590"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p19582","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p19583","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p19584","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p19585"}}}],"center":[{"type":"object","name":"Grid","id":"p19586","attributes":{"axis":{"id":"p19582"}}},{"type":"object","name":"Grid","id":"p19591","attributes":{"dimension":1,"axis":{"id":"p19587"}}},{"type":"object","name":"Legend","id":"p19616","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p19617","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p19613"}]}},{"type":"object","name":"LegendItem","id":"p19628","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p19625"}]}},{"type":"object","name":"LegendItem","id":"p19638","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p19635"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"bb5885f3-835d-4aa9-99a9-90d74cd9c7e1","roots":{"p19571":"ec3d3e9a-1681-4428-a5db-6e5d4f53f5a0"},"root_ids":["p19571"]}];
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