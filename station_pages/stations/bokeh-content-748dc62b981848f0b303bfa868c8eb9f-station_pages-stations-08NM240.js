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
    
    
    const element = document.getElementById("fd911e79-524d-462c-b450-f24816e535ad");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fd911e79-524d-462c-b450-f24816e535ad' but no matching script tag was found.")
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
                  const docs_json = '{"84fdecc7-061d-4ed9-b542-521f16bd64ec":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p543121","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p543122"},"y_range":{"type":"object","name":"DataRange1d","id":"p543123"},"x_scale":{"type":"object","name":"LinearScale","id":"p543130"},"y_scale":{"type":"object","name":"LinearScale","id":"p543131"},"title":{"type":"object","name":"Title","id":"p543128"},"renderers":[{"type":"object","name":"TileRenderer","id":"p543155","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p543154","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p543163","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p543157","attributes":{"selected":{"type":"object","name":"Selection","id":"p543158","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p543159"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p543164","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p543165"}}},"glyph":{"type":"object","name":"Patch","id":"p543160","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p543161","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p543162","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p543175","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p543169","attributes":{"selected":{"type":"object","name":"Selection","id":"p543170","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p543171"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p543176","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p543177"}}},"glyph":{"type":"object","name":"Scatter","id":"p543172","attributes":{"x":{"type":"value","value":-13291547.200716864},"y":{"type":"value","value":6386034.225163409},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p543173","attributes":{"x":{"type":"value","value":-13291547.200716864},"y":{"type":"value","value":6386034.225163409},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p543174","attributes":{"x":{"type":"value","value":-13291547.200716864},"y":{"type":"value","value":6386034.225163409},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p543185","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p543179","attributes":{"selected":{"type":"object","name":"Selection","id":"p543180","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p543181"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p543186","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p543187"}}},"glyph":{"type":"object","name":"Scatter","id":"p543182","attributes":{"x":{"type":"value","value":-13291543.86113214},"y":{"type":"value","value":6385982.64420339},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p543183","attributes":{"x":{"type":"value","value":-13291543.86113214},"y":{"type":"value","value":6385982.64420339},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p543184","attributes":{"x":{"type":"value","value":-13291543.86113214},"y":{"type":"value","value":6385982.64420339},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p543129","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p543142"},{"type":"object","name":"WheelZoomTool","id":"p543143","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p543144","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p543145","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p543151","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p543150","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p543152"},{"type":"object","name":"SaveTool","id":"p543153"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p543137","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p543138","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p543139","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p543140"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p543132","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p543133","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p543134","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p543135"}}}],"center":[{"type":"object","name":"Grid","id":"p543136","attributes":{"axis":{"id":"p543132"}}},{"type":"object","name":"Grid","id":"p543141","attributes":{"dimension":1,"axis":{"id":"p543137"}}},{"type":"object","name":"Legend","id":"p543166","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p543167","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p543163"}]}},{"type":"object","name":"LegendItem","id":"p543178","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p543175"}]}},{"type":"object","name":"LegendItem","id":"p543188","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p543185"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"84fdecc7-061d-4ed9-b542-521f16bd64ec","roots":{"p543121":"fd911e79-524d-462c-b450-f24816e535ad"},"root_ids":["p543121"]}];
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