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
    
    
    const element = document.getElementById("def737dc-c1c3-4e2c-bdab-d74dc50b0207");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'def737dc-c1c3-4e2c-bdab-d74dc50b0207' but no matching script tag was found.")
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
                  const docs_json = '{"99989609-131e-4d85-9287-486ff0311300":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1067","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1068"}}},"roots":[{"type":"object","name":"Figure","id":"p1069","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p1070","attributes":{"start":0.9015,"end":1}},"y_range":{"type":"object","name":"DataRange1d","id":"p1071","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LinearScale","id":"p1079"},"y_scale":{"type":"object","name":"LinearScale","id":"p1080"},"title":{"type":"object","name":"Title","id":"p1072","attributes":{"text":"Cumulative Distribution of Jaccard Similarity Indices"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1101","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1095","attributes":{"selected":{"type":"object","name":"Selection","id":"p1096","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1097"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4vb5cnDpP3Wnn+O8aIt5u/s9xnM1JKY+s7+YZXIOveH7+xrPm0IyJ713h7IAYq8tw9SX9C54eF7+/k2OldmPXtvPynmn/Ovt+/t7xV29T359N7+vYWre9HP9/abXxVvFf2NoCvmLFLe+ee9fdTXnbe6/iJoG7+LE2P+YdJyy1946P3HTTOAwQc4DQBKeUcWyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/6sWWef+sGqJfTWY3mK/Q671deCOfVD+EftZM0HgJFT8nP2bQBDrIlT+ij3X9cUFtlzXoepu2mvG9B/6qnEHqv6e/RKQ7OIHUH0P7Y3B4DFU/xP7w181gDqeQs15bh8E1vgCat5L+4dVIIWvoOa+sS8EGVfwFmr+O3sGMPhgDwB9ZNElyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1102","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1103"}}},"glyph":{"type":"object","name":"Line","id":"p1098","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1099","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1100","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p1112","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1106","attributes":{"selected":{"type":"object","name":"Selection","id":"p1107","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1108"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4vb5cnDpP3Wnn+O8aIt5u/s9xnM1JKY+s7+YZXIOveH7+xrPm0IyJ713h7IAYq8tw9SX9C54eF7+/k2OldmPXtvPynmn/Ovt+/t7xV29T359N7+vYWre9HP9/abXxVvFf2NoCvmLFLe+ee9fdTXnbe6/iJoG7+LE2P+YdJyy1946P3HTTOAwQc4DQBKeUcWyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/6sWWef+sGqJfTWY3mK/Q671deCOfVD+EftZM0HgJFT8nP2bQBDrIlT+ij3X9cUFtlzXoepu2mvG9B/6qnEHqv6e/RKQ7OIHUH0P7Y3B4DFU/xP7w181gDqeQs15bh8E1vgCat5L+4dVIIWvoOa+sS8EGVfwFmr+O3sGMPhgDwB9ZNElyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1113","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1114"}}},"glyph":{"type":"object","name":"Scatter","id":"p1109","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1110","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1111","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1121","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1115","attributes":{"selected":{"type":"object","name":"Selection","id":"p1116","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1117"},"data":{"type":"map","entries":[["x",[0.9963,0.9963]],["y",[0,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p1122","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1123"}}},"glyph":{"type":"object","name":"Line","id":"p1118","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1119","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1120","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1130","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1124","attributes":{"selected":{"type":"object","name":"Selection","id":"p1125","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1126"},"data":{"type":"map","entries":[["x",[0.9115,0.9963]],["y",[0.25,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p1131","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1132"}}},"glyph":{"type":"object","name":"Line","id":"p1127","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1128","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1129","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1139","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1133","attributes":{"selected":{"type":"object","name":"Selection","id":"p1134","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1135"},"data":{"type":"map","entries":[["x",[0.9994,0.9994]],["y",[0,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1140","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1141"}}},"glyph":{"type":"object","name":"Line","id":"p1136","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1137","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1138","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1148","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1142","attributes":{"selected":{"type":"object","name":"Selection","id":"p1143","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1144"},"data":{"type":"map","entries":[["x",[0.9115,0.9994]],["y",[0.5,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1149","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1150"}}},"glyph":{"type":"object","name":"Line","id":"p1145","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1146","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1147","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1157","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1151","attributes":{"selected":{"type":"object","name":"Selection","id":"p1152","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1153"},"data":{"type":"map","entries":[["x",[0.9998,0.9998]],["y",[0,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1158","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1159"}}},"glyph":{"type":"object","name":"Line","id":"p1154","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1155","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1156","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1166","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1160","attributes":{"selected":{"type":"object","name":"Selection","id":"p1161","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1162"},"data":{"type":"map","entries":[["x",[0.9115,0.9998]],["y",[0.75,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1167","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1168"}}},"glyph":{"type":"object","name":"Line","id":"p1163","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1165","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1078","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1091"},{"type":"object","name":"WheelZoomTool","id":"p1092","attributes":{"renderers":"auto"}},{"type":"object","name":"ResetTool","id":"p1093"},{"type":"object","name":"SaveTool","id":"p1094"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1086","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1087","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1088"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p1089"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1081","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1082","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1083"},"axis_label":"Jaccard Similarity Index","major_label_policy":{"type":"object","name":"AllLabels","id":"p1084"}}}],"center":[{"type":"object","name":"Grid","id":"p1085","attributes":{"axis":{"id":"p1081"}}},{"type":"object","name":"Grid","id":"p1090","attributes":{"dimension":1,"axis":{"id":"p1086"}}},{"type":"object","name":"Legend","id":"p1104","attributes":{"location":"bottom_right","items":[{"type":"object","name":"LegendItem","id":"p1105","attributes":{"label":{"type":"value","value":"JSI CDF"},"renderers":[{"id":"p1101"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"99989609-131e-4d85-9287-486ff0311300","roots":{"p1069":"def737dc-c1c3-4e2c-bdab-d74dc50b0207"},"root_ids":["p1069"]}];
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