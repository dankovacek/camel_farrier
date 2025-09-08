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
    
    
    const element = document.getElementById("df28e3ce-75eb-4e9f-85e8-22c3cf18b0b5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'df28e3ce-75eb-4e9f-85e8-22c3cf18b0b5' but no matching script tag was found.")
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
                  const docs_json = '{"40822412-35a1-48d2-8400-96ba1fa43756":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p310788","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p310789"},"y_range":{"type":"object","name":"DataRange1d","id":"p310790"},"x_scale":{"type":"object","name":"LinearScale","id":"p310797"},"y_scale":{"type":"object","name":"LinearScale","id":"p310798"},"title":{"type":"object","name":"Title","id":"p310795"},"renderers":[{"type":"object","name":"TileRenderer","id":"p310822","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p310821","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p310830","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p310824","attributes":{"selected":{"type":"object","name":"Selection","id":"p310825","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p310826"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p310831","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p310832"}}},"glyph":{"type":"object","name":"Patch","id":"p310827","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p310828","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p310829","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p310842","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p310836","attributes":{"selected":{"type":"object","name":"Selection","id":"p310837","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p310838"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p310843","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p310844"}}},"glyph":{"type":"object","name":"Scatter","id":"p310839","attributes":{"x":{"type":"value","value":-10771688.037662903},"y":{"type":"value","value":6330280.3293326385},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p310840","attributes":{"x":{"type":"value","value":-10771688.037662903},"y":{"type":"value","value":6330280.3293326385},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p310841","attributes":{"x":{"type":"value","value":-10771688.037662903},"y":{"type":"value","value":6330280.3293326385},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p310852","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p310846","attributes":{"selected":{"type":"object","name":"Selection","id":"p310847","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p310848"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p310853","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p310854"}}},"glyph":{"type":"object","name":"Scatter","id":"p310849","attributes":{"x":{"type":"value","value":-10771779.319645353},"y":{"type":"value","value":6330408.42894497},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p310850","attributes":{"x":{"type":"value","value":-10771779.319645353},"y":{"type":"value","value":6330408.42894497},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p310851","attributes":{"x":{"type":"value","value":-10771779.319645353},"y":{"type":"value","value":6330408.42894497},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p310796","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p310809"},{"type":"object","name":"WheelZoomTool","id":"p310810","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p310811","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p310812","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p310818","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p310817","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p310819"},{"type":"object","name":"SaveTool","id":"p310820"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p310804","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p310805","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p310806","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p310807"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p310799","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p310800","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p310801","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p310802"}}}],"center":[{"type":"object","name":"Grid","id":"p310803","attributes":{"axis":{"id":"p310799"}}},{"type":"object","name":"Grid","id":"p310808","attributes":{"dimension":1,"axis":{"id":"p310804"}}},{"type":"object","name":"Legend","id":"p310833","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p310834","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p310830"}]}},{"type":"object","name":"LegendItem","id":"p310845","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p310842"}]}},{"type":"object","name":"LegendItem","id":"p310855","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p310852"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"40822412-35a1-48d2-8400-96ba1fa43756","roots":{"p310788":"df28e3ce-75eb-4e9f-85e8-22c3cf18b0b5"},"root_ids":["p310788"]}];
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