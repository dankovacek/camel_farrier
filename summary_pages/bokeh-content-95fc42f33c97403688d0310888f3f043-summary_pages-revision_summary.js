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
    
    
    const element = document.getElementById("e22fb4b1-6cee-4c31-9fc2-d3582b4aa142");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e22fb4b1-6cee-4c31-9fc2-d3582b4aa142' but no matching script tag was found.")
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
                  const docs_json = '{"5af23ed8-7e9a-4744-9310-b63eff3be8db":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1067","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1068"}}},"roots":[{"type":"object","name":"Figure","id":"p1069","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p1070"},"y_range":{"type":"object","name":"DataRange1d","id":"p1071","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LogScale","id":"p1079"},"y_scale":{"type":"object","name":"LinearScale","id":"p1080"},"title":{"type":"object","name":"Title","id":"p1072","attributes":{"text":"Cumulative Distribution of Jaccard Similarity Indices"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1101","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1095","attributes":{"selected":{"type":"object","name":"Selection","id":"p1096","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1097"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/93TbyyUcRwAcJOtmmHVSH9206y6apTGXClfR1a5xapl6FiRobWk60WaVlr+i2j3AqeoLrWQuh1Zy4QiyvSPdOIq5Zzu+RLXOZF+z/PmabuFs2tt/d589vxePN/f99+YZqB2k2MvhBe3uyKvD0b3fpIWNKhAHJkaEdqlBvP8ecsuh2lgaMQvOJlHgfxGfOOazRT0V92Z05dJwdPPcL2nhgKPY62pL7spuMDVWNVsQLDN9FNbuCKIonM0CYDgvrR2vwMfoVHgnsY/gNC8seGu81FWN+T5bj+O0KO0vHTrHALH7vCu4SwEs9hEi8fZCPl59EEIEzTN3VqA4EWiWksQ6K99VxA6W3Xk5QiFZ1fVJZcgXCwadflSjvBefj6hTYYQueRj0OIqhLY3gV/XP0BQShZIHz5CqNNyhdl1CFJ/r0UH6xFimICsApJ1O9HGks4cYSjiWaigCeEUqUJuC4LQgU+uWD3jg266PTfUfF2KXWcrwpMu+kEIAXS4VwgueWvtxa8RqsdTRhQdCCSZ22VvEU6XV4af6ST1qfcui+lGKF0ecsijh3XP6qK0ig8IdkziCHqS7cpeVkX6RKSOmCj2yTjShxBBhXh7qlhJsfU2/YYyv53C+fqiKJl65g7svs9JGjC0gkwPV2NorvCnz9hvnpDb/mihpjfQ2uleIbLyorbFxA6yjtuLOhZ++7PdcelZvVNY21zsWzlsvNcc6c5ObxKZ0mDt9O50nlwx8X3mMmOnm71WSieySoYy66qfvS9y6AabTplaRCbBeJn1MIEnJVdJJ403RFv9Ln3C9G7xpyvz7+SUqHY4T/59zZgz+N8ZV5qhiDbCX7neDezIBwAA"},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1102","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1103"}}},"glyph":{"type":"object","name":"Line","id":"p1098","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1099","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1100","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1078","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1091"},{"type":"object","name":"WheelZoomTool","id":"p1092","attributes":{"renderers":"auto"}},{"type":"object","name":"ResetTool","id":"p1093"},{"type":"object","name":"SaveTool","id":"p1094"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1086","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1087","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1088"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p1089"}}}],"below":[{"type":"object","name":"LogAxis","id":"p1081","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p1082","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p1083"},"axis_label":"Jaccard Similarity Index","major_label_policy":{"type":"object","name":"AllLabels","id":"p1084"}}}],"center":[{"type":"object","name":"Grid","id":"p1085","attributes":{"axis":{"id":"p1081"}}},{"type":"object","name":"Grid","id":"p1090","attributes":{"dimension":1,"axis":{"id":"p1086"}}},{"type":"object","name":"Legend","id":"p1104","attributes":{"items":[{"type":"object","name":"LegendItem","id":"p1105","attributes":{"label":{"type":"value","value":"JSI CDF"},"renderers":[{"id":"p1101"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"5af23ed8-7e9a-4744-9310-b63eff3be8db","roots":{"p1069":"e22fb4b1-6cee-4c31-9fc2-d3582b4aa142"},"root_ids":["p1069"]}];
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