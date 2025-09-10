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
    
    
    const element = document.getElementById("aced131e-4445-4093-84a3-8d2444573e62");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aced131e-4445-4093-84a3-8d2444573e62' but no matching script tag was found.")
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
                  const docs_json = '{"47ed368f-aae1-423b-af19-ee49751ab992":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p390191","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p390192"},"y_range":{"type":"object","name":"DataRange1d","id":"p390193"},"x_scale":{"type":"object","name":"LinearScale","id":"p390200"},"y_scale":{"type":"object","name":"LinearScale","id":"p390201"},"title":{"type":"object","name":"Title","id":"p390198"},"renderers":[{"type":"object","name":"TileRenderer","id":"p390225","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p390224","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p390233","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390227","attributes":{"selected":{"type":"object","name":"Selection","id":"p390228","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390229"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p390234","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390235"}}},"glyph":{"type":"object","name":"Patch","id":"p390230","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p390231","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p390232","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p390244","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390238","attributes":{"selected":{"type":"object","name":"Selection","id":"p390239","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390240"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p390245","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390246"}}},"glyph":{"type":"object","name":"Scatter","id":"p390241","attributes":{"x":{"type":"value","value":-14160306.77076573},"y":{"type":"value","value":7325066.374188913},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p390242","attributes":{"x":{"type":"value","value":-14160306.77076573},"y":{"type":"value","value":7325066.374188913},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p390243","attributes":{"x":{"type":"value","value":-14160306.77076573},"y":{"type":"value","value":7325066.374188913},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p390254","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390248","attributes":{"selected":{"type":"object","name":"Selection","id":"p390249","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390250"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p390255","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390256"}}},"glyph":{"type":"object","name":"Scatter","id":"p390251","attributes":{"x":{"type":"value","value":-14160341.279807875},"y":{"type":"value","value":7324886.732277483},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p390252","attributes":{"x":{"type":"value","value":-14160341.279807875},"y":{"type":"value","value":7324886.732277483},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p390253","attributes":{"x":{"type":"value","value":-14160341.279807875},"y":{"type":"value","value":7324886.732277483},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p390199","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p390212"},{"type":"object","name":"WheelZoomTool","id":"p390213","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p390214","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p390215","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p390221","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p390220","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p390222"},{"type":"object","name":"SaveTool","id":"p390223"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p390207","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p390208","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p390209","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p390210"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p390202","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p390203","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p390204","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p390205"}}}],"center":[{"type":"object","name":"Grid","id":"p390206","attributes":{"axis":{"id":"p390202"}}},{"type":"object","name":"Grid","id":"p390211","attributes":{"dimension":1,"axis":{"id":"p390207"}}},{"type":"object","name":"Legend","id":"p390236","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p390237","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p390233"}]}},{"type":"object","name":"LegendItem","id":"p390247","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p390244"}]}},{"type":"object","name":"LegendItem","id":"p390257","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p390254"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"47ed368f-aae1-423b-af19-ee49751ab992","roots":{"p390191":"aced131e-4445-4093-84a3-8d2444573e62"},"root_ids":["p390191"]}];
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