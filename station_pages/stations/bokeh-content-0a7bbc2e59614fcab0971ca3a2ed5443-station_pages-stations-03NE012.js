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
    
    
    const element = document.getElementById("c95159b6-af2b-4490-a99f-9702c927dbc1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c95159b6-af2b-4490-a99f-9702c927dbc1' but no matching script tag was found.")
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
                  const docs_json = '{"990e415c-4959-4f65-ae32-9929c2a89905":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p433977","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p433978"},"y_range":{"type":"object","name":"DataRange1d","id":"p433979"},"x_scale":{"type":"object","name":"LinearScale","id":"p433986"},"y_scale":{"type":"object","name":"LinearScale","id":"p433987"},"title":{"type":"object","name":"Title","id":"p433984"},"renderers":[{"type":"object","name":"TileRenderer","id":"p434011","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p434010","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p434019","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p434013","attributes":{"selected":{"type":"object","name":"Selection","id":"p434014","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p434015"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p434020","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p434021"}}},"glyph":{"type":"object","name":"Patch","id":"p434016","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p434017","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p434018","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p434031","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p434025","attributes":{"selected":{"type":"object","name":"Selection","id":"p434026","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p434027"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p434032","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p434033"}}},"glyph":{"type":"object","name":"Scatter","id":"p434028","attributes":{"x":{"type":"value","value":-6912306.970359675},"y":{"type":"value","value":7619586.3779766755},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p434029","attributes":{"x":{"type":"value","value":-6912306.970359675},"y":{"type":"value","value":7619586.3779766755},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p434030","attributes":{"x":{"type":"value","value":-6912306.970359675},"y":{"type":"value","value":7619586.3779766755},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p434041","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p434035","attributes":{"selected":{"type":"object","name":"Selection","id":"p434036","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p434037"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p434042","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p434043"}}},"glyph":{"type":"object","name":"Scatter","id":"p434038","attributes":{"x":{"type":"value","value":-6912368.196079611},"y":{"type":"value","value":7619540.225459329},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p434039","attributes":{"x":{"type":"value","value":-6912368.196079611},"y":{"type":"value","value":7619540.225459329},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p434040","attributes":{"x":{"type":"value","value":-6912368.196079611},"y":{"type":"value","value":7619540.225459329},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p433985","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p433998"},{"type":"object","name":"WheelZoomTool","id":"p433999","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p434000","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p434001","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p434007","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p434006","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p434008"},{"type":"object","name":"SaveTool","id":"p434009"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p433993","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p433994","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p433995","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p433996"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p433988","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p433989","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p433990","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p433991"}}}],"center":[{"type":"object","name":"Grid","id":"p433992","attributes":{"axis":{"id":"p433988"}}},{"type":"object","name":"Grid","id":"p433997","attributes":{"dimension":1,"axis":{"id":"p433993"}}},{"type":"object","name":"Legend","id":"p434022","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p434023","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p434019"}]}},{"type":"object","name":"LegendItem","id":"p434034","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p434031"}]}},{"type":"object","name":"LegendItem","id":"p434044","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p434041"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"990e415c-4959-4f65-ae32-9929c2a89905","roots":{"p433977":"c95159b6-af2b-4490-a99f-9702c927dbc1"},"root_ids":["p433977"]}];
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