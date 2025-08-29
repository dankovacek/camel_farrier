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
    
    
    const element = document.getElementById("dd603bac-63fc-48c4-86da-37fe5229317f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dd603bac-63fc-48c4-86da-37fe5229317f' but no matching script tag was found.")
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
                  const docs_json = '{"addf5475-7766-4c21-a82d-cbd5698d2d36":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1160762","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p1160763"},"y_range":{"type":"object","name":"DataRange1d","id":"p1160764"},"x_scale":{"type":"object","name":"LinearScale","id":"p1160771"},"y_scale":{"type":"object","name":"LinearScale","id":"p1160772"},"title":{"type":"object","name":"Title","id":"p1160769"},"renderers":[{"type":"object","name":"TileRenderer","id":"p1160796","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p1160795","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p1160804","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1160798","attributes":{"selected":{"type":"object","name":"Selection","id":"p1160799","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1160800"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1160805","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1160806"}}},"glyph":{"type":"object","name":"Patch","id":"p1160801","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p1160802","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p1160803","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1160816","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1160810","attributes":{"selected":{"type":"object","name":"Selection","id":"p1160811","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1160812"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1160817","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1160818"}}},"glyph":{"type":"object","name":"Scatter","id":"p1160813","attributes":{"x":{"type":"value","value":-13268860.288493196},"y":{"type":"value","value":6567809.024998989},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1160814","attributes":{"x":{"type":"value","value":-13268860.288493196},"y":{"type":"value","value":6567809.024998989},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1160815","attributes":{"x":{"type":"value","value":-13268860.288493196},"y":{"type":"value","value":6567809.024998989},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p1160826","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1160820","attributes":{"selected":{"type":"object","name":"Selection","id":"p1160821","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1160822"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1160827","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1160828"}}},"glyph":{"type":"object","name":"Scatter","id":"p1160823","attributes":{"x":{"type":"value","value":-13268902.589899696},"y":{"type":"value","value":6567784.421173798},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1160824","attributes":{"x":{"type":"value","value":-13268902.589899696},"y":{"type":"value","value":6567784.421173798},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1160825","attributes":{"x":{"type":"value","value":-13268902.589899696},"y":{"type":"value","value":6567784.421173798},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1160770","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1160783"},{"type":"object","name":"WheelZoomTool","id":"p1160784","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1160785","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1160786","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1160792","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1160791","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1160793"},{"type":"object","name":"SaveTool","id":"p1160794"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p1160778","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1160779","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1160780","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1160781"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p1160773","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1160774","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1160775","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1160776"}}}],"center":[{"type":"object","name":"Grid","id":"p1160777","attributes":{"axis":{"id":"p1160773"}}},{"type":"object","name":"Grid","id":"p1160782","attributes":{"dimension":1,"axis":{"id":"p1160778"}}},{"type":"object","name":"Legend","id":"p1160807","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p1160808","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p1160804"}]}},{"type":"object","name":"LegendItem","id":"p1160819","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p1160816"}]}},{"type":"object","name":"LegendItem","id":"p1160829","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p1160826"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"addf5475-7766-4c21-a82d-cbd5698d2d36","roots":{"p1160762":"dd603bac-63fc-48c4-86da-37fe5229317f"},"root_ids":["p1160762"]}];
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