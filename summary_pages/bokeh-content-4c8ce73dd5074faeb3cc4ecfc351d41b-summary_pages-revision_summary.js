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
    
    
    const element = document.getElementById("cadc62b9-2d90-4763-a94c-eb197a6d273e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cadc62b9-2d90-4763-a94c-eb197a6d273e' but no matching script tag was found.")
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
                  const docs_json = '{"2b3c6804-8528-4eb8-b2e0-558d946054a8":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p56766","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p56767"}}},"roots":[{"type":"object","name":"Figure","id":"p56768","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p56769","attributes":{"start":0.9015,"end":1}},"y_range":{"type":"object","name":"DataRange1d","id":"p56770","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LinearScale","id":"p56778"},"y_scale":{"type":"object","name":"LinearScale","id":"p56779"},"title":{"type":"object","name":"Title","id":"p56771","attributes":{"text":"Cumulative Distribution of Jaccard Similarity Indices"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p56800","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56794","attributes":{"selected":{"type":"object","name":"Selection","id":"p56795","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56796"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4vb5cnDpP3Wnn+O8aIt5u/s9xnM1JKY+s7+YZXIOveH7+xrPm0IyJ713h7IAYq8tw9SX9C54eF7+/k2OldmPXtvPynmn/Ovt+/t7xV29T359N7+vYWre9HP9/abXxVvFf2NoCvmLFLe+ee9fdTXnbe6/iJoG7+LE2P+YdJyy1946P3HTTOAwQc4DQBKeUcWyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/6sWWef+sGqJfTWY3mK/Q671deCOfVD+EftZM0HgJFT8nP2bQBDrIlT+ij3X9cUFtlzXoepu2mvG9B/6qnEHqv6e/RKQ7OIHUH0P7Y3B4DFU/xP7w181gDqeQs15bh8E1vgCat5L+4dVIIWvoOa+sS8EGVfwFmr+O3sGMPhgDwB9ZNElyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p56801","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56802"}}},"glyph":{"type":"object","name":"Line","id":"p56797","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56798","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p56799","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p56811","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56805","attributes":{"selected":{"type":"object","name":"Selection","id":"p56806","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56807"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4vb5cnDpP3Wnn+O8aIt5u/s9xnM1JKY+s7+YZXIOveH7+xrPm0IyJ713h7IAYq8tw9SX9C54eF7+/k2OldmPXtvPynmn/Ovt+/t7xV29T359N7+vYWre9HP9/abXxVvFf2NoCvmLFLe+ee9fdTXnbe6/iJoG7+LE2P+YdJyy1946P3HTTOAwQc4DQBKeUcWyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/6sWWef+sGqJfTWY3mK/Q671deCOfVD+EftZM0HgJFT8nP2bQBDrIlT+ij3X9cUFtlzXoepu2mvG9B/6qnEHqv6e/RKQ7OIHUH0P7Y3B4DFU/xP7w181gDqeQs15bh8E1vgCat5L+4dVIIWvoOa+sS8EGVfwFmr+O3sGMPhgDwB9ZNElyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p56812","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56813"}}},"glyph":{"type":"object","name":"Scatter","id":"p56808","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p56809","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p56810","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p56820","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56814","attributes":{"selected":{"type":"object","name":"Selection","id":"p56815","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56816"},"data":{"type":"map","entries":[["x",[0.9963,0.9963]],["y",[0,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p56821","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56822"}}},"glyph":{"type":"object","name":"Line","id":"p56817","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56818","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56819","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56829","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56823","attributes":{"selected":{"type":"object","name":"Selection","id":"p56824","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56825"},"data":{"type":"map","entries":[["x",[0.9115,0.9963]],["y",[0.25,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p56830","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56831"}}},"glyph":{"type":"object","name":"Line","id":"p56826","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56827","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56828","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56838","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56832","attributes":{"selected":{"type":"object","name":"Selection","id":"p56833","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56834"},"data":{"type":"map","entries":[["x",[0.9994,0.9994]],["y",[0,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p56839","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56840"}}},"glyph":{"type":"object","name":"Line","id":"p56835","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56836","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56837","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56847","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56841","attributes":{"selected":{"type":"object","name":"Selection","id":"p56842","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56843"},"data":{"type":"map","entries":[["x",[0.9115,0.9994]],["y",[0.5,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p56848","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56849"}}},"glyph":{"type":"object","name":"Line","id":"p56844","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56845","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56846","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56856","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56850","attributes":{"selected":{"type":"object","name":"Selection","id":"p56851","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56852"},"data":{"type":"map","entries":[["x",[0.9998,0.9998]],["y",[0,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p56857","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56858"}}},"glyph":{"type":"object","name":"Line","id":"p56853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56855","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p56865","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p56859","attributes":{"selected":{"type":"object","name":"Selection","id":"p56860","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p56861"},"data":{"type":"map","entries":[["x",[0.9115,0.9998]],["y",[0.75,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p56866","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p56867"}}},"glyph":{"type":"object","name":"Line","id":"p56862","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p56863","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p56864","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p56777","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p56790"},{"type":"object","name":"WheelZoomTool","id":"p56791","attributes":{"renderers":"auto"}},{"type":"object","name":"ResetTool","id":"p56792"},{"type":"object","name":"SaveTool","id":"p56793"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p56785","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p56786","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p56787"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p56788"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p56780","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p56781","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p56782"},"axis_label":"Jaccard Similarity Index","major_label_policy":{"type":"object","name":"AllLabels","id":"p56783"}}}],"center":[{"type":"object","name":"Grid","id":"p56784","attributes":{"axis":{"id":"p56780"}}},{"type":"object","name":"Grid","id":"p56789","attributes":{"dimension":1,"axis":{"id":"p56785"}}},{"type":"object","name":"Legend","id":"p56803","attributes":{"location":"bottom_right","items":[{"type":"object","name":"LegendItem","id":"p56804","attributes":{"label":{"type":"value","value":"JSI CDF"},"renderers":[{"id":"p56800"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"2b3c6804-8528-4eb8-b2e0-558d946054a8","roots":{"p56768":"cadc62b9-2d90-4763-a94c-eb197a6d273e"},"root_ids":["p56768"]}];
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