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
    
    
    const element = document.getElementById("d591b452-f077-44ac-b3a9-9aca80511f3a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd591b452-f077-44ac-b3a9-9aca80511f3a' but no matching script tag was found.")
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
                  const docs_json = '{"ee45f46e-391a-4df2-a05f-2b52c27f3a87":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p54599","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p54600"},"y_range":{"type":"object","name":"DataRange1d","id":"p54601"},"x_scale":{"type":"object","name":"LinearScale","id":"p54608"},"y_scale":{"type":"object","name":"LinearScale","id":"p54609"},"title":{"type":"object","name":"Title","id":"p54606"},"renderers":[{"type":"object","name":"TileRenderer","id":"p54633","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p54632","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p54641","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p54635","attributes":{"selected":{"type":"object","name":"Selection","id":"p54636","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p54637"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p54642","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p54643"}}},"glyph":{"type":"object","name":"Patch","id":"p54638","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p54639","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p54640","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p54653","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p54647","attributes":{"selected":{"type":"object","name":"Selection","id":"p54648","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p54649"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p54654","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p54655"}}},"glyph":{"type":"object","name":"Scatter","id":"p54650","attributes":{"x":{"type":"value","value":-9126707.67706671},"y":{"type":"value","value":5724706.911599653},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p54651","attributes":{"x":{"type":"value","value":-9126707.67706671},"y":{"type":"value","value":5724706.911599653},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p54652","attributes":{"x":{"type":"value","value":-9126707.67706671},"y":{"type":"value","value":5724706.911599653},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p54663","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p54657","attributes":{"selected":{"type":"object","name":"Selection","id":"p54658","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p54659"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p54664","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p54665"}}},"glyph":{"type":"object","name":"Scatter","id":"p54660","attributes":{"x":{"type":"value","value":-9126680.96038892},"y":{"type":"value","value":5724678.246440541},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p54661","attributes":{"x":{"type":"value","value":-9126680.96038892},"y":{"type":"value","value":5724678.246440541},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p54662","attributes":{"x":{"type":"value","value":-9126680.96038892},"y":{"type":"value","value":5724678.246440541},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p54607","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p54620"},{"type":"object","name":"WheelZoomTool","id":"p54621","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p54622","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p54623","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p54629","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p54628","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p54630"},{"type":"object","name":"SaveTool","id":"p54631"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p54615","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p54616","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p54617","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p54618"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p54610","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p54611","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p54612","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p54613"}}}],"center":[{"type":"object","name":"Grid","id":"p54614","attributes":{"axis":{"id":"p54610"}}},{"type":"object","name":"Grid","id":"p54619","attributes":{"dimension":1,"axis":{"id":"p54615"}}},{"type":"object","name":"Legend","id":"p54644","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p54645","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p54641"}]}},{"type":"object","name":"LegendItem","id":"p54656","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p54653"}]}},{"type":"object","name":"LegendItem","id":"p54666","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p54663"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"ee45f46e-391a-4df2-a05f-2b52c27f3a87","roots":{"p54599":"d591b452-f077-44ac-b3a9-9aca80511f3a"},"root_ids":["p54599"]}];
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