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
    
    
    const element = document.getElementById("e347928d-53cf-4c98-9fe1-d0c07ecba34c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e347928d-53cf-4c98-9fe1-d0c07ecba34c' but no matching script tag was found.")
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
                  const docs_json = '{"a9bcbcd6-ace2-45a5-b462-72eb169060fc":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1067","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1068"}}},"roots":[{"type":"object","name":"Figure","id":"p1069","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p1070"},"y_range":{"type":"object","name":"DataRange1d","id":"p1071","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LogScale","id":"p1079"},"y_scale":{"type":"object","name":"LinearScale","id":"p1080"},"title":{"type":"object","name":"Title","id":"p1072","attributes":{"text":"Cumulative Distribution of Jaccard Similarity Indices"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1101","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1095","attributes":{"selected":{"type":"object","name":"Selection","id":"p1096","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1097"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/93QeyzUARwA8Et1xCk7dH+0SRirTViu85ovajUlr9ssJY82ipIsppDOYuZRGOPm2rVZiIXKqzGPjrub1zHa8pib0OHqfl+Pk8or//3+uJlna+uvz/8fi9QqozCjCch34Ocdt5kEcyxT72qdgg6Kp/DZsBxYzN54yQ0FmGbRG2pZBMidnU9esyXAgB0TzMggYJWjTtVpIuC+Vp5cTUqAoLU6grBAuGRGd2OeQXi939ej3BHhbk1Ko6cTwrJsVR4ZgLDWna4bEE4alkYpiYlE0IvvVw4mIrDfWVUaP0dgarqGLKzbYx201M5FyJFlhoYXIERDiSHwEFYKD6wk8xEOhzXX6BYh9B0jjOuKEYT2LTlHKxDoXm5SShVCQXVp/cVahIORBu6B9Qj6NoNUogVhMWumsfkjwtC0enS2AIHPOztu3UbKUV4poAoRzhfHa5SJEEzXcprjxAiVN2d5gg6E7AYNdm4n6QM9Q82QLlVZIveHhyQISzGPZW96EJKGhwTzfQgh1nOPhP0IRL6HD+0zQu9MiLZ03feuCW2VA+s//ppHCkYQvtSdEN2RkqYIbn0bHUW4HJXnmzSGcLq7XMdnnFTHVCg2m0CotdRSvJAhcFONXt2bJI0ds73uNKWqn70XnT69sY65t9vHt6Gh4gmnRq7qV34FcfW7quJFYdEpBWmp54jf8hZML1XqSgjScDVa50sktaq2sz03u7G62t4zenMbuxAcWiLbgQNNHP8P85tbz+Dqpyk3N6Fd9NT8x9YNNJLare1Cl7iF2d5FVU0+0UoLf+5cqrlJYNSvvXMq2Z5x4ff27ZB6SxhLu7ecFZY8vQMzsxIdGpb33shp7nzGyr+T7fK2zH/178vkiYMs1/4/tWIjaPsoM1v2D5CA3EjIBwAA"},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1102","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1103"}}},"glyph":{"type":"object","name":"Line","id":"p1098","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1099","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1100","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p1112","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1106","attributes":{"selected":{"type":"object","name":"Selection","id":"p1107","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1108"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/93QeyzUARwA8Et1xCk7dH+0SRirTViu85ovajUlr9ssJY82ipIsppDOYuZRGOPm2rVZiIXKqzGPjrub1zHa8pib0OHqfl+Pk8or//3+uJlna+uvz/8fi9QqozCjCch34Ocdt5kEcyxT72qdgg6Kp/DZsBxYzN54yQ0FmGbRG2pZBMidnU9esyXAgB0TzMggYJWjTtVpIuC+Vp5cTUqAoLU6grBAuGRGd2OeQXi939ej3BHhbk1Ko6cTwrJsVR4ZgLDWna4bEE4alkYpiYlE0IvvVw4mIrDfWVUaP0dgarqGLKzbYx201M5FyJFlhoYXIERDiSHwEFYKD6wk8xEOhzXX6BYh9B0jjOuKEYT2LTlHKxDoXm5SShVCQXVp/cVahIORBu6B9Qj6NoNUogVhMWumsfkjwtC0enS2AIHPOztu3UbKUV4poAoRzhfHa5SJEEzXcprjxAiVN2d5gg6E7AYNdm4n6QM9Q82QLlVZIveHhyQISzGPZW96EJKGhwTzfQgh1nOPhP0IRL6HD+0zQu9MiLZ03feuCW2VA+s//ppHCkYQvtSdEN2RkqYIbn0bHUW4HJXnmzSGcLq7XMdnnFTHVCg2m0CotdRSvJAhcFONXt2bJI0ds73uNKWqn70XnT69sY65t9vHt6Gh4gmnRq7qV34FcfW7quJFYdEpBWmp54jf8hZML1XqSgjScDVa50sktaq2sz03u7G62t4zenMbuxAcWiLbgQNNHP8P85tbz+Dqpyk3N6Fd9NT8x9YNNJLare1Cl7iF2d5FVU0+0UoLf+5cqrlJYNSvvXMq2Z5x4ff27ZB6SxhLu7ecFZY8vQMzsxIdGpb33shp7nzGyr+T7fK2zH/178vkiYMs1/4/tWIjaPsoM1v2D5CA3EjIBwAA"},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1113","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1114"}}},"glyph":{"type":"object","name":"Scatter","id":"p1109","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1110","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1111","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1121","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1115","attributes":{"selected":{"type":"object","name":"Selection","id":"p1116","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1117"},"data":{"type":"map","entries":[["x",[0.997,0.997]],["y",[0,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p1122","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1123"}}},"glyph":{"type":"object","name":"Line","id":"p1118","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1119","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1120","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1130","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1124","attributes":{"selected":{"type":"object","name":"Selection","id":"p1125","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1126"},"data":{"type":"map","entries":[["x",[0.629201,0.997]],["y",[0.25,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p1131","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1132"}}},"glyph":{"type":"object","name":"Line","id":"p1127","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1128","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1129","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1139","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1133","attributes":{"selected":{"type":"object","name":"Selection","id":"p1134","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1135"},"data":{"type":"map","entries":[["x",[0.9989,0.9989]],["y",[0,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1140","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1141"}}},"glyph":{"type":"object","name":"Line","id":"p1136","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1137","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1138","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1148","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1142","attributes":{"selected":{"type":"object","name":"Selection","id":"p1143","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1144"},"data":{"type":"map","entries":[["x",[0.629201,0.9989]],["y",[0.5,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1149","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1150"}}},"glyph":{"type":"object","name":"Line","id":"p1145","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1146","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1147","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1157","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1151","attributes":{"selected":{"type":"object","name":"Selection","id":"p1152","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1153"},"data":{"type":"map","entries":[["x",[0.9996,0.9996]],["y",[0,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1158","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1159"}}},"glyph":{"type":"object","name":"Line","id":"p1154","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1155","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1156","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1166","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1160","attributes":{"selected":{"type":"object","name":"Selection","id":"p1161","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1162"},"data":{"type":"map","entries":[["x",[0.629201,0.9996]],["y",[0.75,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1167","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1168"}}},"glyph":{"type":"object","name":"Line","id":"p1163","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1165","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1078","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1091"},{"type":"object","name":"WheelZoomTool","id":"p1092","attributes":{"renderers":"auto"}},{"type":"object","name":"ResetTool","id":"p1093"},{"type":"object","name":"SaveTool","id":"p1094"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1086","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1087","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1088"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p1089"}}}],"below":[{"type":"object","name":"LogAxis","id":"p1081","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p1082","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p1083"},"axis_label":"Jaccard Similarity Index","major_label_policy":{"type":"object","name":"AllLabels","id":"p1084"}}}],"center":[{"type":"object","name":"Grid","id":"p1085","attributes":{"axis":{"id":"p1081"}}},{"type":"object","name":"Grid","id":"p1090","attributes":{"dimension":1,"axis":{"id":"p1086"}}},{"type":"object","name":"Legend","id":"p1104","attributes":{"location":"top_left","items":[{"type":"object","name":"LegendItem","id":"p1105","attributes":{"label":{"type":"value","value":"JSI CDF"},"renderers":[{"id":"p1101"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"a9bcbcd6-ace2-45a5-b462-72eb169060fc","roots":{"p1069":"e347928d-53cf-4c98-9fe1-d0c07ecba34c"},"root_ids":["p1069"]}];
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