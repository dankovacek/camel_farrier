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
    
    
    const element = document.getElementById("f3cab2ac-30cd-43c1-a677-3c4cf158853d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f3cab2ac-30cd-43c1-a677-3c4cf158853d' but no matching script tag was found.")
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
                  const docs_json = '{"91d8d8b6-6525-4a34-9222-806ffa711198":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p501057","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p501058"},"y_range":{"type":"object","name":"DataRange1d","id":"p501059"},"x_scale":{"type":"object","name":"LinearScale","id":"p501066"},"y_scale":{"type":"object","name":"LinearScale","id":"p501067"},"title":{"type":"object","name":"Title","id":"p501064"},"renderers":[{"type":"object","name":"TileRenderer","id":"p501091","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p501090","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p501099","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p501093","attributes":{"selected":{"type":"object","name":"Selection","id":"p501094","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p501095"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p501100","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p501101"}}},"glyph":{"type":"object","name":"Patch","id":"p501096","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p501097","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p501098","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p501111","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p501105","attributes":{"selected":{"type":"object","name":"Selection","id":"p501106","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p501107"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p501112","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p501113"}}},"glyph":{"type":"object","name":"Scatter","id":"p501108","attributes":{"x":{"type":"value","value":-12961685.285598235},"y":{"type":"value","value":6292572.386681497},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p501109","attributes":{"x":{"type":"value","value":-12961685.285598235},"y":{"type":"value","value":6292572.386681497},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p501110","attributes":{"x":{"type":"value","value":-12961685.285598235},"y":{"type":"value","value":6292572.386681497},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p501121","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p501115","attributes":{"selected":{"type":"object","name":"Selection","id":"p501116","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p501117"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p501122","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p501123"}}},"glyph":{"type":"object","name":"Scatter","id":"p501118","attributes":{"x":{"type":"value","value":-12961693.07796259},"y":{"type":"value","value":6292492.470455613},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p501119","attributes":{"x":{"type":"value","value":-12961693.07796259},"y":{"type":"value","value":6292492.470455613},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p501120","attributes":{"x":{"type":"value","value":-12961693.07796259},"y":{"type":"value","value":6292492.470455613},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p501065","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p501078"},{"type":"object","name":"WheelZoomTool","id":"p501079","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p501080","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p501081","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p501087","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p501086","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p501088"},{"type":"object","name":"SaveTool","id":"p501089"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p501073","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p501074","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p501075","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p501076"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p501068","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p501069","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p501070","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p501071"}}}],"center":[{"type":"object","name":"Grid","id":"p501072","attributes":{"axis":{"id":"p501068"}}},{"type":"object","name":"Grid","id":"p501077","attributes":{"dimension":1,"axis":{"id":"p501073"}}},{"type":"object","name":"Legend","id":"p501102","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p501103","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p501099"}]}},{"type":"object","name":"LegendItem","id":"p501114","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p501111"}]}},{"type":"object","name":"LegendItem","id":"p501124","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p501121"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"91d8d8b6-6525-4a34-9222-806ffa711198","roots":{"p501057":"f3cab2ac-30cd-43c1-a677-3c4cf158853d"},"root_ids":["p501057"]}];
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