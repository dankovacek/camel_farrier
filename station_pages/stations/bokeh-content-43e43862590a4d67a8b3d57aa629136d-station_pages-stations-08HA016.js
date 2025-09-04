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
    
    
    const element = document.getElementById("dacd2901-5067-4c82-8917-f796157064ac");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dacd2901-5067-4c82-8917-f796157064ac' but no matching script tag was found.")
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
                  const docs_json = '{"3731e6e1-6966-4527-971f-37f488198eae":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1053459","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p1053460"},"y_range":{"type":"object","name":"DataRange1d","id":"p1053461"},"x_scale":{"type":"object","name":"LinearScale","id":"p1053468"},"y_scale":{"type":"object","name":"LinearScale","id":"p1053469"},"title":{"type":"object","name":"Title","id":"p1053466"},"renderers":[{"type":"object","name":"TileRenderer","id":"p1053493","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p1053492","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p1053501","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1053495","attributes":{"selected":{"type":"object","name":"Selection","id":"p1053496","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1053497"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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H/aYm7NHasHDnqTnvUdqwYeYOEXAR2rB2Ww+a8VHasGwGzOlx0dqwch/mvbrR2rBjXkuVO5HasHgTTR680dqwaRHyNf1R2rB9hvO/fpHasHNysI3/UdqwV6+bacHSGrBNW1i4QlIasGqKL7mI0hqwYHXsiAmSGrB0qu4RitIasH7/MMMKUhqwUzRyTIuSGrBdSLV+CtIasHI9toeMUhqwfFH5uQuSGrBQhzsCjRIasFrbffQMUhqwZ8JroxGSGrByVq5UkRIasEykybKbUhqwfeMuidwSGrBSGHATXVIasEhELWHd0hqwWAvWtF8SGrBguTAFohIasHBA2ZgjUhqwVNb7wOrSGrBpC/1KbBIasF73uljskhqwbv9jq23SGrBalt4IbxIasGoeh1rwUhqwUUjpgLGSGrBeb9cvtpIasFSblH43EhqwZGN9kHiSGrBaDzre+RIasG7EPGh6UhqwR5oaArlSGrBXIcNVOpIasGYjXn250hqwSmBJGbySGrBUtIvLPBIasH3ejt4+khqwR7MRj74SGrBAZT30wdJasF163SlDklqwce/essTSWrBi7kOKRZJasHejRRPG0lqwSeUhlokSWrBuYcxyi5JasGQNiYEMUlqwQXygQlLSWrBoJoKoU9JasHzbhDHVElqwcodBQFXSWrBCT2qSlxJasF9lCccY0lqwc5oLUJoSWrBahG22WxJasH7BGFJd0lqwdOzVYN5SWrBJYhbqX5JasHBMORAg0lqwRQF6maISWrB1/59xIpJasEq04Pqj0lqwZwqAbyWSWrB3EmmBZxJasGKp495oElqwcvGNMOlSWrBonUp/adJasHzSS8jrUlqwRybOumqSWrBro7lWLVJasHolFH7sklqwSi09kS4SWrBYrpi57VJasGzjmgNu0lqwQcxf5m2SWrBWAWFv7tJasEftHOQsklqwc7fbWqtSWrB9zB5MKtJasFJBX9WsElqwRC0bSenSWrBUNMScaxJasGzKorZp0lqwQb/j/+sSWrBL1CbxapJasGAJKHrr0lqwdV7EuufSWrBE5u3NKVJasFPoSPXoklqwY7AyCCoSWrBG2lLT6FJasHcSaYFnElqwQSbscuZSWrBVm+38Z5JasHuaDkUf0lqwT89PzqESWrBo5S2on9JasHis1vshElqwdOzVYN5SWrBJYhbqX5JasGK39IR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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1053502","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1053503"}}},"glyph":{"type":"object","name":"Patch","id":"p1053498","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p1053499","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p1053500","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1053513","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1053507","attributes":{"selected":{"type":"object","name":"Selection","id":"p1053508","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1053509"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1053514","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1053515"}}},"glyph":{"type":"object","name":"Scatter","id":"p1053510","attributes":{"x":{"type":"value","value":-13773059.65814317},"y":{"type":"value","value":6239171.82328465},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1053511","attributes":{"x":{"type":"value","value":-13773059.65814317},"y":{"type":"value","value":6239171.82328465},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1053512","attributes":{"x":{"type":"value","value":-13773059.65814317},"y":{"type":"value","value":6239171.82328465},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p1053523","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1053517","attributes":{"selected":{"type":"object","name":"Selection","id":"p1053518","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1053519"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1053524","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1053525"}}},"glyph":{"type":"object","name":"Scatter","id":"p1053520","attributes":{"x":{"type":"value","value":-13773050.752583904},"y":{"type":"value","value":6239163.375030606},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1053521","attributes":{"x":{"type":"value","value":-13773050.752583904},"y":{"type":"value","value":6239163.375030606},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1053522","attributes":{"x":{"type":"value","value":-13773050.752583904},"y":{"type":"value","value":6239163.375030606},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1053467","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1053480"},{"type":"object","name":"WheelZoomTool","id":"p1053481","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1053482","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1053483","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1053489","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1053488","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1053490"},{"type":"object","name":"SaveTool","id":"p1053491"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p1053475","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1053476","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1053477","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1053478"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p1053470","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1053471","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1053472","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1053473"}}}],"center":[{"type":"object","name":"Grid","id":"p1053474","attributes":{"axis":{"id":"p1053470"}}},{"type":"object","name":"Grid","id":"p1053479","attributes":{"dimension":1,"axis":{"id":"p1053475"}}},{"type":"object","name":"Legend","id":"p1053504","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p1053505","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p1053501"}]}},{"type":"object","name":"LegendItem","id":"p1053516","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p1053513"}]}},{"type":"object","name":"LegendItem","id":"p1053526","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p1053523"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"3731e6e1-6966-4527-971f-37f488198eae","roots":{"p1053459":"dacd2901-5067-4c82-8917-f796157064ac"},"root_ids":["p1053459"]}];
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