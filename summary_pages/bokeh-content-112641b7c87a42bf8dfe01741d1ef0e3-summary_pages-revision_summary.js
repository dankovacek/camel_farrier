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
    
    
    const element = document.getElementById("aa1f3fea-99ee-434a-88c8-dbb4cb372dfc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aa1f3fea-99ee-434a-88c8-dbb4cb372dfc' but no matching script tag was found.")
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
                  const docs_json = '{"77a4003e-464c-46dd-8528-318950bd8205":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1679","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1680"}}},"roots":[{"type":"object","name":"Figure","id":"p1681","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p1682"},"y_range":{"type":"object","name":"DataRange1d","id":"p1683","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LinearScale","id":"p1691"},"y_scale":{"type":"object","name":"LinearScale","id":"p1692"},"title":{"type":"object","name":"Title","id":"p1684","attributes":{"text":"Cumulative Distribution of Jaccard Similarity Indices"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1713","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1707","attributes":{"selected":{"type":"object","name":"Selection","id":"p1708","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1709"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/93TXUiTURgHcKFgWNnKckqQaREaplH2YTF9liIapUWilS2lvDCtpcuEGgYuLywVS0ETtfyqLL8QzczCci2zZk2cyjJpaJlblu+Tmtn87Bxv3osx/Iygc/ODF87hvP/nf6zSWk1Pr++GWO/nl9e6aIE32si8keugcpm4JLGjF2z29oe8PdEH3Gzn/Ie7GGjxObXi6G4GOMEZByySGNAm2feZPWPgmGV1s4mGgeKmtoDvWxCcpxZCCleys9gNwV92/46vAOHLwDpVRDCCrr1kRChi9Uu3TY4WI4zH/+xQSxH4tYfJFwRrXrjPIPGx4MqnhgyEmIHyQ2cyEYL2v+a4ZiH0lG3sjruNMBzdmb3yLsJTO+7SqnsIZV5dktVlCKNCUf1EBUJcnSLP8xECEwM7gp4gTHiM9H2rQ6C7amUI8iF74fUXCPGFRxTbXrKGmURIF9cjOFbcwsJXCPT0Sw0IGefMyZEIkoZNe1IbWYVTgRlqQ/6ao0Qgl31X1IQg0o4+6FchHBSsOilvQVAXRLouUSPUjNEAELL8c4pL35N8wh1+3fyIoJC7l4ZpWCOVV1WaToTtsdUkGQTLduWw32dW/VaaDEIOf3NrZg+CNM0j8ayWNYQJdHfTGerpdV7P/Wpcu9xr5V2z0FSfG1rZa6iyiBbF0PJFtFGsqUI6qem9UGVBmssasJxOjHVN3XEyCeOOWUWpzQeMqxEnJHfPQRmt3eD0Fmygk5/e0DYtacTM3ec0aTs+Dx3ieaRRhpp1Ot7I/T130YU2auFsTqFFmL2VvVGkMfM3nT6rOXgxO59MduENHKr5kDD+7+T70oT/vtaFOm+nyf9Pk6n1Y8b+AXbfxMnIBwAA"},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1714","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1715"}}},"glyph":{"type":"object","name":"Line","id":"p1710","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1711","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1712","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p1724","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1718","attributes":{"selected":{"type":"object","name":"Selection","id":"p1719","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1720"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/93TXUiTURgHcKFgWNnKckqQaREaplH2YTF9liIapUWilS2lvDCtpcuEGgYuLywVS0ETtfyqLL8QzczCci2zZk2cyjJpaJlblu+Tmtn87Bxv3osx/Iygc/ODF87hvP/nf6zSWk1Pr++GWO/nl9e6aIE32si8keugcpm4JLGjF2z29oe8PdEH3Gzn/Ie7GGjxObXi6G4GOMEZByySGNAm2feZPWPgmGV1s4mGgeKmtoDvWxCcpxZCCleys9gNwV92/46vAOHLwDpVRDCCrr1kRChi9Uu3TY4WI4zH/+xQSxH4tYfJFwRrXrjPIPGx4MqnhgyEmIHyQ2cyEYL2v+a4ZiH0lG3sjruNMBzdmb3yLsJTO+7SqnsIZV5dktVlCKNCUf1EBUJcnSLP8xECEwM7gp4gTHiM9H2rQ6C7amUI8iF74fUXCPGFRxTbXrKGmURIF9cjOFbcwsJXCPT0Sw0IGefMyZEIkoZNe1IbWYVTgRlqQ/6ao0Qgl31X1IQg0o4+6FchHBSsOilvQVAXRLouUSPUjNEAELL8c4pL35N8wh1+3fyIoJC7l4ZpWCOVV1WaToTtsdUkGQTLduWw32dW/VaaDEIOf3NrZg+CNM0j8ayWNYQJdHfTGerpdV7P/Wpcu9xr5V2z0FSfG1rZa6iyiBbF0PJFtFGsqUI6qem9UGVBmssasJxOjHVN3XEyCeOOWUWpzQeMqxEnJHfPQRmt3eD0Fmygk5/e0DYtacTM3ec0aTs+Dx3ieaRRhpp1Ot7I/T130YU2auFsTqFFmL2VvVGkMfM3nT6rOXgxO59MduENHKr5kDD+7+T70oT/vtaFOm+nyf9Pk6n1Y8b+AXbfxMnIBwAA"},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1725","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1726"}}},"glyph":{"type":"object","name":"Scatter","id":"p1721","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1722","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1723","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1733","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1727","attributes":{"selected":{"type":"object","name":"Selection","id":"p1728","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1729"},"data":{"type":"map","entries":[["x",[0.997,0.997]],["y",[0.01,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p1734","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1735"}}},"glyph":{"type":"object","name":"Line","id":"p1730","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1731","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1732","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1742","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1736","attributes":{"selected":{"type":"object","name":"Selection","id":"p1737","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1738"},"data":{"type":"map","entries":[["x",[0.6292,0.997]],["y",[0.25,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p1743","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1744"}}},"glyph":{"type":"object","name":"Line","id":"p1739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1741","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1751","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1745","attributes":{"selected":{"type":"object","name":"Selection","id":"p1746","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1747"},"data":{"type":"map","entries":[["x",[0.9989,0.9989]],["y",[0.01,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1752","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1753"}}},"glyph":{"type":"object","name":"Line","id":"p1748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1749","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1760","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1754","attributes":{"selected":{"type":"object","name":"Selection","id":"p1755","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1756"},"data":{"type":"map","entries":[["x",[0.6292,0.9989]],["y",[0.5,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1761","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1762"}}},"glyph":{"type":"object","name":"Line","id":"p1757","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1758","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1769","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1763","attributes":{"selected":{"type":"object","name":"Selection","id":"p1764","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1765"},"data":{"type":"map","entries":[["x",[0.9996,0.9996]],["y",[0.01,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1770","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1771"}}},"glyph":{"type":"object","name":"Line","id":"p1766","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1767","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1778","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1772","attributes":{"selected":{"type":"object","name":"Selection","id":"p1773","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1774"},"data":{"type":"map","entries":[["x",[0.6292,0.9996]],["y",[0.75,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1779","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1780"}}},"glyph":{"type":"object","name":"Line","id":"p1775","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1776","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1777","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1690","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1703"},{"type":"object","name":"WheelZoomTool","id":"p1704","attributes":{"renderers":"auto"}},{"type":"object","name":"ResetTool","id":"p1705"},{"type":"object","name":"SaveTool","id":"p1706"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1698","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1699","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1700"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p1701"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1693","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1694","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1695"},"axis_label":"Jaccard Similarity Index","major_label_policy":{"type":"object","name":"AllLabels","id":"p1696"}}}],"center":[{"type":"object","name":"Grid","id":"p1697","attributes":{"axis":{"id":"p1693"}}},{"type":"object","name":"Grid","id":"p1702","attributes":{"dimension":1,"axis":{"id":"p1698"}}},{"type":"object","name":"Legend","id":"p1716","attributes":{"location":"top_left","items":[{"type":"object","name":"LegendItem","id":"p1717","attributes":{"label":{"type":"value","value":"JSI CDF"},"renderers":[{"id":"p1713"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"77a4003e-464c-46dd-8528-318950bd8205","roots":{"p1681":"aa1f3fea-99ee-434a-88c8-dbb4cb372dfc"},"root_ids":["p1681"]}];
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