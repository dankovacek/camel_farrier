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
    
    
    const element = document.getElementById("abcff842-9819-4da3-86c2-6f7bc5ec3107");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'abcff842-9819-4da3-86c2-6f7bc5ec3107' but no matching script tag was found.")
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
                  const docs_json = '{"e0e40db5-5b59-4b4b-988f-5276a45d7b5f":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p241278","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p241279"},"y_range":{"type":"object","name":"DataRange1d","id":"p241280"},"x_scale":{"type":"object","name":"LinearScale","id":"p241287"},"y_scale":{"type":"object","name":"LinearScale","id":"p241288"},"title":{"type":"object","name":"Title","id":"p241285"},"renderers":[{"type":"object","name":"TileRenderer","id":"p241312","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p241311","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p241320","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p241314","attributes":{"selected":{"type":"object","name":"Selection","id":"p241315","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p241316"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p241321","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p241322"}}},"glyph":{"type":"object","name":"Patch","id":"p241317","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p241318","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p241319","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p241332","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p241326","attributes":{"selected":{"type":"object","name":"Selection","id":"p241327","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p241328"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p241333","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p241334"}}},"glyph":{"type":"object","name":"Scatter","id":"p241329","attributes":{"x":{"type":"value","value":-8921526.931221273},"y":{"type":"value","value":5433040.056090744},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p241330","attributes":{"x":{"type":"value","value":-8921526.931221273},"y":{"type":"value","value":5433040.056090744},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p241331","attributes":{"x":{"type":"value","value":-8921526.931221273},"y":{"type":"value","value":5433040.056090744},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p241342","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p241336","attributes":{"selected":{"type":"object","name":"Selection","id":"p241337","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p241338"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p241343","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p241344"}}},"glyph":{"type":"object","name":"Scatter","id":"p241339","attributes":{"x":{"type":"value","value":-8921531.384000905},"y":{"type":"value","value":5433026.177365202},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p241340","attributes":{"x":{"type":"value","value":-8921531.384000905},"y":{"type":"value","value":5433026.177365202},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p241341","attributes":{"x":{"type":"value","value":-8921531.384000905},"y":{"type":"value","value":5433026.177365202},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p241286","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p241299"},{"type":"object","name":"WheelZoomTool","id":"p241300","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p241301","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p241302","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p241308","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p241307","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p241309"},{"type":"object","name":"SaveTool","id":"p241310"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p241294","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p241295","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p241296","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p241297"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p241289","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p241290","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p241291","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p241292"}}}],"center":[{"type":"object","name":"Grid","id":"p241293","attributes":{"axis":{"id":"p241289"}}},{"type":"object","name":"Grid","id":"p241298","attributes":{"dimension":1,"axis":{"id":"p241294"}}},{"type":"object","name":"Legend","id":"p241323","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p241324","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p241320"}]}},{"type":"object","name":"LegendItem","id":"p241335","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p241332"}]}},{"type":"object","name":"LegendItem","id":"p241345","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p241342"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"e0e40db5-5b59-4b4b-988f-5276a45d7b5f","roots":{"p241278":"abcff842-9819-4da3-86c2-6f7bc5ec3107"},"root_ids":["p241278"]}];
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