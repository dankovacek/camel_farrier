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
    
    
    const element = document.getElementById("a38059d5-1d48-4a34-86e7-97181d03760e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a38059d5-1d48-4a34-86e7-97181d03760e' but no matching script tag was found.")
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
                  const docs_json = '{"6aedcfef-8bf2-45ba-be3f-ac4322ce221e":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1025232","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p1025233"},"y_range":{"type":"object","name":"DataRange1d","id":"p1025234"},"x_scale":{"type":"object","name":"LinearScale","id":"p1025241"},"y_scale":{"type":"object","name":"LinearScale","id":"p1025242"},"title":{"type":"object","name":"Title","id":"p1025239"},"renderers":[{"type":"object","name":"TileRenderer","id":"p1025266","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p1025265","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p1025274","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1025268","attributes":{"selected":{"type":"object","name":"Selection","id":"p1025269","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1025270"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1025275","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1025276"}}},"glyph":{"type":"object","name":"Patch","id":"p1025271","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p1025272","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p1025273","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1025286","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1025280","attributes":{"selected":{"type":"object","name":"Selection","id":"p1025281","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1025282"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1025287","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1025288"}}},"glyph":{"type":"object","name":"Scatter","id":"p1025283","attributes":{"x":{"type":"value","value":-14189817.567775028},"y":{"type":"value","value":7318947.356418082},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1025284","attributes":{"x":{"type":"value","value":-14189817.567775028},"y":{"type":"value","value":7318947.356418082},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1025285","attributes":{"x":{"type":"value","value":-14189817.567775028},"y":{"type":"value","value":7318947.356418082},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p1025296","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1025290","attributes":{"selected":{"type":"object","name":"Selection","id":"p1025291","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1025292"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1025297","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1025298"}}},"glyph":{"type":"object","name":"Scatter","id":"p1025293","attributes":{"x":{"type":"value","value":-14189835.378893554},"y":{"type":"value","value":7318879.801737742},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1025294","attributes":{"x":{"type":"value","value":-14189835.378893554},"y":{"type":"value","value":7318879.801737742},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1025295","attributes":{"x":{"type":"value","value":-14189835.378893554},"y":{"type":"value","value":7318879.801737742},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1025240","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1025253"},{"type":"object","name":"WheelZoomTool","id":"p1025254","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1025255","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1025256","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1025262","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1025261","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1025263"},{"type":"object","name":"SaveTool","id":"p1025264"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p1025248","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1025249","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1025250","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1025251"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p1025243","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1025244","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1025245","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1025246"}}}],"center":[{"type":"object","name":"Grid","id":"p1025247","attributes":{"axis":{"id":"p1025243"}}},{"type":"object","name":"Grid","id":"p1025252","attributes":{"dimension":1,"axis":{"id":"p1025248"}}},{"type":"object","name":"Legend","id":"p1025277","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p1025278","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p1025274"}]}},{"type":"object","name":"LegendItem","id":"p1025289","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p1025286"}]}},{"type":"object","name":"LegendItem","id":"p1025299","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p1025296"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"6aedcfef-8bf2-45ba-be3f-ac4322ce221e","roots":{"p1025232":"a38059d5-1d48-4a34-86e7-97181d03760e"},"root_ids":["p1025232"]}];
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