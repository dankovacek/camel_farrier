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
    
    
    const element = document.getElementById("e61d8e56-9599-4e84-830e-e7a627d2f100");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e61d8e56-9599-4e84-830e-e7a627d2f100' but no matching script tag was found.")
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
                  const docs_json = '{"ff40aa13-62b0-49b9-991a-cfc013a1b825":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p585818","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p585819"}}},"roots":[{"type":"object","name":"Figure","id":"p585820","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p585821","attributes":{"start":9e-05}},"y_range":{"type":"object","name":"DataRange1d","id":"p585822","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LogScale","id":"p585830"},"y_scale":{"type":"object","name":"LinearScale","id":"p585831"},"title":{"type":"object","name":"Title","id":"p585823","attributes":{"text":"Cumulative Distribution of Absolute Percent Area Changes"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p585852","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585846","attributes":{"selected":{"type":"object","name":"Selection","id":"p585847","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585848"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//uz8uMl36QA+z+j9JCkd3nyMGm3t43SBGhp/bsqbI1ThwwdYbnlRNm++YOGPr3Qddvnv0tIpl+pGXKskVlFMg0kolKs11NMT5FgCePT3UQyrXz7Z13Wni0Y9Ka575cf896OQTslPL2gdHsnQfqiEtgggvSP4MdLZx85gEE7mMYBk/QhnHS72M1z34MPY9Dnv4MNgNPiIOHHR+3jwBnkuP2y2UcUNhSdwKDf1dgDTT4Jp8HWMJ22rwWzzsDpo0DVGRPP2oNyG9BKe78kAWDSuQCnwana+TKcBhLdOc8xaVWQdPcV+5PARCelfxWa/q7DaRegqt8rb9oDCWABeAuaX+7ag7Xl3IfTVyteAlPSA3t1UHKKegBNjw+g6eKxPZi6j6ADeqfnCTU/sf/y9wpQ51N7N6DqKxVP7e/7gySe24ONSXluD46dko/2uuCI/2gPSixz3yNoSPR9si+ZDEpIn+0hyemzPSiVmHd+tweRjgm/7cHGTP4HDWdGB7C/NAUcwP60E4LS4g7sIP+8kXAAu+OSokMiKBlF2jiAQ/m4kwM4Gkt9HQAfW3SfyAcAAA=="},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p585853","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585854"}}},"glyph":{"type":"object","name":"Line","id":"p585849","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585850","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p585851","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p585863","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585857","attributes":{"selected":{"type":"object","name":"Selection","id":"p585858","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585859"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//uz8uMl36QA+z+j9JCkd3nyMGm3t43SBGhp/bsqbI1ThwwdYbnlRNm++YOGPr3Qddvnv0tIpl+pGXKskVlFMg0kolKs11NMT5FgCePT3UQyrXz7Z13Wni0Y9Ka575cf896OQTslPL2gdHsnQfqiEtgggvSP4MdLZx85gEE7mMYBk/QhnHS72M1z34MPY9Dnv4MNgNPiIOHHR+3jwBnkuP2y2UcUNhSdwKDf1dgDTT4Jp8HWMJ22rwWzzsDpo0DVGRPP2oNyG9BKe78kAWDSuQCnwana+TKcBhLdOc8xaVWQdPcV+5PARCelfxWa/q7DaRegqt8rb9oDCWABeAuaX+7ag7Xl3IfTVyteAlPSA3t1UHKKegBNjw+g6eKxPZi6j6ADeqfnCTU/sf/y9wpQ51N7N6DqKxVP7e/7gySe24ONSXluD46dko/2uuCI/2gPSixz3yNoSPR9si+ZDEpIn+0hyemzPSiVmHd+tweRjgm/7cHGTP4HDWdGB7C/NAUcwP60E4LS4g7sIP+8kXAAu+OSokMiKBlF2jiAQ/m4kwM4Gkt9HQAfW3SfyAcAAA=="},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p585864","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585865"}}},"glyph":{"type":"object","name":"Scatter","id":"p585860","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p585861","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p585862","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p585872","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585866","attributes":{"selected":{"type":"object","name":"Selection","id":"p585867","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585868"},"data":{"type":"map","entries":[["x",[0.031,0.031]],["y",[0,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p585873","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585874"}}},"glyph":{"type":"object","name":"Line","id":"p585869","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585870","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p585871","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p585881","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585875","attributes":{"selected":{"type":"object","name":"Selection","id":"p585876","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585877"},"data":{"type":"map","entries":[["x",[0.151,0.151]],["y",[0,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p585882","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585883"}}},"glyph":{"type":"object","name":"Line","id":"p585878","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585879","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p585880","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p585890","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585884","attributes":{"selected":{"type":"object","name":"Selection","id":"p585885","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585886"},"data":{"type":"map","entries":[["x",[0.621,0.621]],["y",[0,0.9]]]}}},"view":{"type":"object","name":"CDSView","id":"p585891","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585892"}}},"glyph":{"type":"object","name":"Line","id":"p585887","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585888","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p585889","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p585829","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p585842"},{"type":"object","name":"WheelZoomTool","id":"p585843","attributes":{"renderers":"auto"}},{"type":"object","name":"ResetTool","id":"p585844"},{"type":"object","name":"SaveTool","id":"p585845"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p585837","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p585838","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p585839"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p585840"}}}],"below":[{"type":"object","name":"LogAxis","id":"p585832","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p585833","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p585834"},"axis_label":"Absolute Percent Area Change (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p585835"}}}],"center":[{"type":"object","name":"Grid","id":"p585836","attributes":{"axis":{"id":"p585832"}}},{"type":"object","name":"Grid","id":"p585841","attributes":{"dimension":1,"axis":{"id":"p585837"}}},{"type":"object","name":"Legend","id":"p585855","attributes":{"location":"bottom_right","items":[{"type":"object","name":"LegendItem","id":"p585856","attributes":{"label":{"type":"value","value":"|\\u0394Area| CDF"},"renderers":[{"id":"p585852"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"ff40aa13-62b0-49b9-991a-cfc013a1b825","roots":{"p585820":"e61d8e56-9599-4e84-830e-e7a627d2f100"},"root_ids":["p585820"]}];
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