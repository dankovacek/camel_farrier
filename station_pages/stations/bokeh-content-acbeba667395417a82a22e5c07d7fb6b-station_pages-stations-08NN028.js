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
    
    
    const element = document.getElementById("af4d88f9-7eae-467a-9809-721a6da12b57");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'af4d88f9-7eae-467a-9809-721a6da12b57' but no matching script tag was found.")
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
                  const docs_json = '{"c98f84fc-cc1a-43f4-92bf-620de448d1a1":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1323586","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p1323587"},"y_range":{"type":"object","name":"DataRange1d","id":"p1323588"},"x_scale":{"type":"object","name":"LinearScale","id":"p1323595"},"y_scale":{"type":"object","name":"LinearScale","id":"p1323596"},"title":{"type":"object","name":"Title","id":"p1323593"},"renderers":[{"type":"object","name":"TileRenderer","id":"p1323620","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p1323619","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p1323628","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1323622","attributes":{"selected":{"type":"object","name":"Selection","id":"p1323623","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1323624"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1323629","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1323630"}}},"glyph":{"type":"object","name":"Patch","id":"p1323625","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p1323626","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p1323627","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1323640","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1323634","attributes":{"selected":{"type":"object","name":"Selection","id":"p1323635","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1323636"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1323641","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1323642"}}},"glyph":{"type":"object","name":"Scatter","id":"p1323637","attributes":{"x":{"type":"value","value":-13230243.557137007},"y":{"type":"value","value":6337162.896282819},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1323638","attributes":{"x":{"type":"value","value":-13230243.557137007},"y":{"type":"value","value":6337162.896282819},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1323639","attributes":{"x":{"type":"value","value":-13230243.557137007},"y":{"type":"value","value":6337162.896282819},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p1323650","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1323644","attributes":{"selected":{"type":"object","name":"Selection","id":"p1323645","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1323646"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1323651","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1323652"}}},"glyph":{"type":"object","name":"Scatter","id":"p1323647","attributes":{"x":{"type":"value","value":-13230268.047424983},"y":{"type":"value","value":6337094.521335297},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1323648","attributes":{"x":{"type":"value","value":-13230268.047424983},"y":{"type":"value","value":6337094.521335297},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1323649","attributes":{"x":{"type":"value","value":-13230268.047424983},"y":{"type":"value","value":6337094.521335297},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1323594","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1323607"},{"type":"object","name":"WheelZoomTool","id":"p1323608","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1323609","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1323610","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1323616","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1323615","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1323617"},{"type":"object","name":"SaveTool","id":"p1323618"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p1323602","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1323603","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1323604","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1323605"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p1323597","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1323598","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1323599","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1323600"}}}],"center":[{"type":"object","name":"Grid","id":"p1323601","attributes":{"axis":{"id":"p1323597"}}},{"type":"object","name":"Grid","id":"p1323606","attributes":{"dimension":1,"axis":{"id":"p1323602"}}},{"type":"object","name":"Legend","id":"p1323631","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p1323632","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p1323628"}]}},{"type":"object","name":"LegendItem","id":"p1323643","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p1323640"}]}},{"type":"object","name":"LegendItem","id":"p1323653","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p1323650"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"c98f84fc-cc1a-43f4-92bf-620de448d1a1","roots":{"p1323586":"af4d88f9-7eae-467a-9809-721a6da12b57"},"root_ids":["p1323586"]}];
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