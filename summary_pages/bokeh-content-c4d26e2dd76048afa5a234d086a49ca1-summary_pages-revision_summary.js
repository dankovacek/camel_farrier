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
    
    
    const element = document.getElementById("c58e67bd-db13-45e2-8ed8-5ea20e206550");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c58e67bd-db13-45e2-8ed8-5ea20e206550' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.8.0.min.js"];
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
                  const docs_json = '{"50151d52-d82c-4817-9229-990bc3e11f8f":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p56928","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p56929"}}},"roots":[{"type":"object","name":"Figure","id":"p56930","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p56931","attributes":{"start":0}},"y_range":{"type":"object","name":"DataRange1d","id":"p56932","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LinearScale","id":"p56940"},"y_scale":{"type":"object","name":"LinearScale","id":"p56941"},"title":{"type":"object","name":"Title","id":"p56933","attributes":{"text":"Cumulative Distribution of Absolute Percent Area Changes"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p56962","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56956","attributes":{"selected":{"type":"object","name":"Selection","id":"p56957","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56958"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgIA1Ui6xzf1jVYk8aPYUAvcR+1kwQWGm/Q671deCOdfZLCmy5ri8+YA8iC2xvQeVfQumP9hDXMDmAZLnClR0ApInKicgAAAA="},"shape":[25],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/6sWWef+sGqJfTWY3mK/Q671deCOfVD+EftZM0HgJFT8nP2bQBDrIlT+ij3X9cUFtlzXoepu2mvG9B/6qnEHqv6e/RKQ7OIHUH0P7Y3B4DFU/xP7w181gDqeQs15bh8E1vgCat5L+4dVIIWvoOa+sS8EGVfwFmr+O3sGMPhgDwB9ZNElyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p56963","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56964"}}},"glyph":{"type":"object","name":"Line","id":"p56959","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56960","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p56961","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p56973","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56967","attributes":{"selected":{"type":"object","name":"Selection","id":"p56968","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56969"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgIA1Ui6xzf1jVYk8aPYUAvcR+1kwQWGm/Q671deCOdfZLCmy5ri8+YA8iC2xvQeVfQumP9hDXMDmAZLnClR0ApInKicgAAAA="},"shape":[25],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/6sWWef+sGqJfTWY3mK/Q671deCOfVD+EftZM0HgJFT8nP2bQBDrIlT+ij3X9cUFtlzXoepu2mvG9B/6qnEHqv6e/RKQ7OIHUH0P7Y3B4DFU/xP7w181gDqeQs15bh8E1vgCat5L+4dVIIWvoOa+sS8EGVfwFmr+O3sGMPhgDwB9ZNElyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p56974","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56975"}}},"glyph":{"type":"object","name":"Scatter","id":"p56970","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p56971","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p56972","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p56982","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56976","attributes":{"selected":{"type":"object","name":"Selection","id":"p56977","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56978"},"data":{"type":"map","entries":[["x",[0.02,0.02]],["y",[0,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p56983","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56984"}}},"glyph":{"type":"object","name":"Line","id":"p56979","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56980","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56981","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56991","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56985","attributes":{"selected":{"type":"object","name":"Selection","id":"p56986","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56987"},"data":{"type":"map","entries":[["x",[0.06,0.06]],["y",[0,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p56992","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56993"}}},"glyph":{"type":"object","name":"Line","id":"p56988","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56989","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56990","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p57000","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56994","attributes":{"selected":{"type":"object","name":"Selection","id":"p56995","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56996"},"data":{"type":"map","entries":[["x",[0.9800000000000005,0.9800000000000005]],["y",[0,0.9]]]}}},"view":{"type":"object","name":"CDSView","id":"p57001","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p57002"}}},"glyph":{"type":"object","name":"Line","id":"p56997","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56998","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56999","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p56939","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p56952"},{"type":"object","name":"WheelZoomTool","id":"p56953","attributes":{"renderers":"auto"}},{"type":"object","name":"ResetTool","id":"p56954"},{"type":"object","name":"SaveTool","id":"p56955"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p56947","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p56948","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p56949"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p56950"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p56942","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p56943","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p56944"},"axis_label":"Absolute Percent Area Change (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p56945"}}}],"center":[{"type":"object","name":"Grid","id":"p56946","attributes":{"axis":{"id":"p56942"}}},{"type":"object","name":"Grid","id":"p56951","attributes":{"dimension":1,"axis":{"id":"p56947"}}},{"type":"object","name":"Legend","id":"p56965","attributes":{"location":"bottom_right","items":[{"type":"object","name":"LegendItem","id":"p56966","attributes":{"label":{"type":"value","value":"|\\u0394Area| CDF"},"renderers":[{"id":"p56962"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"50151d52-d82c-4817-9229-990bc3e11f8f","roots":{"p56930":"c58e67bd-db13-45e2-8ed8-5ea20e206550"},"root_ids":["p56930"]}];
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