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
    
    
    const element = document.getElementById("ad5a95f8-8168-4526-9c3a-a264969b2480");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ad5a95f8-8168-4526-9c3a-a264969b2480' but no matching script tag was found.")
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
                  const docs_json = '{"1bf4e975-fe9d-4b1e-857e-60b691c0a60b":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p416248","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p416249"},"y_range":{"type":"object","name":"DataRange1d","id":"p416250"},"x_scale":{"type":"object","name":"LinearScale","id":"p416257"},"y_scale":{"type":"object","name":"LinearScale","id":"p416258"},"title":{"type":"object","name":"Title","id":"p416255"},"renderers":[{"type":"object","name":"TileRenderer","id":"p416282","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p416281","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p416290","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416284","attributes":{"selected":{"type":"object","name":"Selection","id":"p416285","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416286"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416291","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416292"}}},"glyph":{"type":"object","name":"Patch","id":"p416287","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p416288","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p416289","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p416302","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416296","attributes":{"selected":{"type":"object","name":"Selection","id":"p416297","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416298"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p416303","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416304"}}},"glyph":{"type":"object","name":"Scatter","id":"p416299","attributes":{"x":{"type":"value","value":-5909073.455432535},"y":{"type":"value","value":6113974.855747025},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p416300","attributes":{"x":{"type":"value","value":-5909073.455432535},"y":{"type":"value","value":6113974.855747025},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p416301","attributes":{"x":{"type":"value","value":-5909073.455432535},"y":{"type":"value","value":6113974.855747025},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p416312","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416306","attributes":{"selected":{"type":"object","name":"Selection","id":"p416307","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416308"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p416313","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416314"}}},"glyph":{"type":"object","name":"Scatter","id":"p416309","attributes":{"x":{"type":"value","value":-5909097.94572051},"y":{"type":"value","value":6113986.510928937},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p416310","attributes":{"x":{"type":"value","value":-5909097.94572051},"y":{"type":"value","value":6113986.510928937},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p416311","attributes":{"x":{"type":"value","value":-5909097.94572051},"y":{"type":"value","value":6113986.510928937},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p416256","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p416269"},{"type":"object","name":"WheelZoomTool","id":"p416270","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p416271","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p416272","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p416278","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p416277","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p416279"},{"type":"object","name":"SaveTool","id":"p416280"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p416264","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p416265","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p416266","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p416267"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p416259","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p416260","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p416261","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p416262"}}}],"center":[{"type":"object","name":"Grid","id":"p416263","attributes":{"axis":{"id":"p416259"}}},{"type":"object","name":"Grid","id":"p416268","attributes":{"dimension":1,"axis":{"id":"p416264"}}},{"type":"object","name":"Legend","id":"p416293","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p416294","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p416290"}]}},{"type":"object","name":"LegendItem","id":"p416305","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p416302"}]}},{"type":"object","name":"LegendItem","id":"p416315","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p416312"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"1bf4e975-fe9d-4b1e-857e-60b691c0a60b","roots":{"p416248":"ad5a95f8-8168-4526-9c3a-a264969b2480"},"root_ids":["p416248"]}];
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