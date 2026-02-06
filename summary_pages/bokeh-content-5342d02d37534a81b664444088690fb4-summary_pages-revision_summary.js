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
    
    
    const element = document.getElementById("c4f8e6ff-cc71-4283-880d-83a4046e1db6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c4f8e6ff-cc71-4283-880d-83a4046e1db6' but no matching script tag was found.")
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
                  const docs_json = '{"21ed7fa3-ec95-4b57-9af0-ae5ecbab75d8":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p56822","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p56823"}}},"roots":[{"type":"object","name":"Figure","id":"p56824","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p56825","attributes":{"start":0.9015,"end":1}},"y_range":{"type":"object","name":"DataRange1d","id":"p56826","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LinearScale","id":"p56834"},"y_scale":{"type":"object","name":"LinearScale","id":"p56835"},"title":{"type":"object","name":"Title","id":"p56827","attributes":{"text":"Cumulative Distribution of Jaccard Similarity Indices"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p56856","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56850","attributes":{"selected":{"type":"object","name":"Selection","id":"p56851","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56852"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4vb5cnDpP3Wnn+O8aIt5u/s9xnM1JKY+s7+YZXIOveH7+xrPm0IyJ713h7IAYq8tw9SX9C54eF7+/k2OldmPXtvPynmn/Ovt+/t7xV29T359N7+vYWre9HP9/abXxVvFf2NoCvmLFLe+ee9fdTXnbe6/iJoG7+LE2P+YdJyy1946P3HTTOAwQc4DQBKeUcWyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/6sWWef+sGqJfTWY3mK/Q671deCOfVD+EftZM0HgJFT8nP2bQBDrIlT+ij3X9cUFtlzXoepu2mvG9B/6qnEHqv6e/RKQ7OIHUH0P7Y3B4DFU/xP7w181gDqeQs15bh8E1vgCat5L+4dVIIWvoOa+sS8EGVfwFmr+O3sGMPhgDwB9ZNElyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p56857","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56858"}}},"glyph":{"type":"object","name":"Line","id":"p56853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p56855","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p56867","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56861","attributes":{"selected":{"type":"object","name":"Selection","id":"p56862","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56863"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4vb5cnDpP3Wnn+O8aIt5u/s9xnM1JKY+s7+YZXIOveH7+xrPm0IyJ713h7IAYq8tw9SX9C54eF7+/k2OldmPXtvPynmn/Ovt+/t7xV29T359N7+vYWre9HP9/abXxVvFf2NoCvmLFLe+ee9fdTXnbe6/iJoG7+LE2P+YdJyy1946P3HTTOAwQc4DQBKeUcWyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/6sWWef+sGqJfTWY3mK/Q671deCOfVD+EftZM0HgJFT8nP2bQBDrIlT+ij3X9cUFtlzXoepu2mvG9B/6qnEHqv6e/RKQ7OIHUH0P7Y3B4DFU/xP7w181gDqeQs15bh8E1vgCat5L+4dVIIWvoOa+sS8EGVfwFmr+O3sGMPhgDwB9ZNElyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p56868","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56869"}}},"glyph":{"type":"object","name":"Scatter","id":"p56864","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p56865","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p56866","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p56876","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56870","attributes":{"selected":{"type":"object","name":"Selection","id":"p56871","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56872"},"data":{"type":"map","entries":[["x",[0.9963,0.9963]],["y",[0,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p56877","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56878"}}},"glyph":{"type":"object","name":"Line","id":"p56873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56875","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56885","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56879","attributes":{"selected":{"type":"object","name":"Selection","id":"p56880","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56881"},"data":{"type":"map","entries":[["x",[0.9115,0.9963]],["y",[0.25,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p56886","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56887"}}},"glyph":{"type":"object","name":"Line","id":"p56882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56884","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56894","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56888","attributes":{"selected":{"type":"object","name":"Selection","id":"p56889","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56890"},"data":{"type":"map","entries":[["x",[0.9994,0.9994]],["y",[0,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p56895","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56896"}}},"glyph":{"type":"object","name":"Line","id":"p56891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56892","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56893","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56903","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56897","attributes":{"selected":{"type":"object","name":"Selection","id":"p56898","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56899"},"data":{"type":"map","entries":[["x",[0.9115,0.9994]],["y",[0.5,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p56904","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56905"}}},"glyph":{"type":"object","name":"Line","id":"p56900","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56901","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56902","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56912","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56906","attributes":{"selected":{"type":"object","name":"Selection","id":"p56907","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56908"},"data":{"type":"map","entries":[["x",[0.9998,0.9998]],["y",[0,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p56913","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56914"}}},"glyph":{"type":"object","name":"Line","id":"p56909","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56910","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56911","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56921","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56915","attributes":{"selected":{"type":"object","name":"Selection","id":"p56916","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56917"},"data":{"type":"map","entries":[["x",[0.9115,0.9998]],["y",[0.75,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p56922","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56923"}}},"glyph":{"type":"object","name":"Line","id":"p56918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56920","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p56833","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p56846"},{"type":"object","name":"WheelZoomTool","id":"p56847","attributes":{"renderers":"auto"}},{"type":"object","name":"ResetTool","id":"p56848"},{"type":"object","name":"SaveTool","id":"p56849"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p56841","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p56842","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p56843"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p56844"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p56836","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p56837","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p56838"},"axis_label":"Jaccard Similarity Index","major_label_policy":{"type":"object","name":"AllLabels","id":"p56839"}}}],"center":[{"type":"object","name":"Grid","id":"p56840","attributes":{"axis":{"id":"p56836"}}},{"type":"object","name":"Grid","id":"p56845","attributes":{"dimension":1,"axis":{"id":"p56841"}}},{"type":"object","name":"Legend","id":"p56859","attributes":{"location":"bottom_right","items":[{"type":"object","name":"LegendItem","id":"p56860","attributes":{"label":{"type":"value","value":"JSI CDF"},"renderers":[{"id":"p56856"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"21ed7fa3-ec95-4b57-9af0-ae5ecbab75d8","roots":{"p56824":"c4f8e6ff-cc71-4283-880d-83a4046e1db6"},"root_ids":["p56824"]}];
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