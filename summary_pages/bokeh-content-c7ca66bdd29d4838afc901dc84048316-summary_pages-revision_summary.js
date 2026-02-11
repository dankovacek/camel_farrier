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
    
    
    const element = document.getElementById("abb8d541-c362-43b9-9918-aad9b6f4f3d7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'abb8d541-c362-43b9-9918-aad9b6f4f3d7' but no matching script tag was found.")
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
                  const docs_json = '{"f05bf9c2-a18a-4ba9-b444-cb8fceaed510":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1820","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1821"}}},"roots":[{"type":"object","name":"Figure","id":"p1822","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p1823"},"y_range":{"type":"object","name":"DataRange1d","id":"p1824","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LinearScale","id":"p1832"},"y_scale":{"type":"object","name":"LinearScale","id":"p1833"},"title":{"type":"object","name":"Title","id":"p1825","attributes":{"text":"Cumulative Distribution of Jaccard Similarity Indices"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1864","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1858","attributes":{"selected":{"type":"object","name":"Selection","id":"p1859","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1860"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/93TXUiTURgHcKFgWNnKckqQaREaplH2YTF9liIapUWilS2lvDCtpcuEGgYuLywVS0ETtfyqLL8QzczCci2zZk2cyjJpaJlblu+Tmtn87Bxv3osx/Iygc/ODF87hvP/nf6zSWk1Pr++GWO/nl9e6aIE32si8keugcpm4JLGjF2z29oe8PdEH3Gzn/Ie7GGjxObXi6G4GOMEZByySGNAm2feZPWPgmGV1s4mGgeKmtoDvWxCcpxZCCleys9gNwV92/46vAOHLwDpVRDCCrr1kRChi9Uu3TY4WI4zH/+xQSxH4tYfJFwRrXrjPIPGx4MqnhgyEmIHyQ2cyEYL2v+a4ZiH0lG3sjruNMBzdmb3yLsJTO+7SqnsIZV5dktVlCKNCUf1EBUJcnSLP8xECEwM7gp4gTHiM9H2rQ6C7amUI8iF74fUXCPGFRxTbXrKGmURIF9cjOFbcwsJXCPT0Sw0IGefMyZEIkoZNe1IbWYVTgRlqQ/6ao0Qgl31X1IQg0o4+6FchHBSsOilvQVAXRLouUSPUjNEAELL8c4pL35N8wh1+3fyIoJC7l4ZpWCOVV1WaToTtsdUkGQTLduWw32dW/VaaDEIOf3NrZg+CNM0j8ayWNYQJdHfTGerpdV7P/Wpcu9xr5V2z0FSfG1rZa6iyiBbF0PJFtFGsqUI6qem9UGVBmssasJxOjHVN3XEyCeOOWUWpzQeMqxEnJHfPQRmt3eD0Fmygk5/e0DYtacTM3ec0aTs+Dx3ieaRRhpp1Ot7I/T130YU2auFsTqFFmL2VvVGkMfM3nT6rOXgxO59MduENHKr5kDD+7+T70oT/vtaFOm+nyf9Pk6n1Y8b+AXbfxMnIBwAA"},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1865","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1866"}}},"glyph":{"type":"object","name":"Line","id":"p1861","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1862","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1863","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p1875","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1869","attributes":{"selected":{"type":"object","name":"Selection","id":"p1870","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1871"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/93TXUiTURgHcKFgWNnKckqQaREaplH2YTF9liIapUWilS2lvDCtpcuEGgYuLywVS0ETtfyqLL8QzczCci2zZk2cyjJpaJlblu+Tmtn87Bxv3osx/Iygc/ODF87hvP/nf6zSWk1Pr++GWO/nl9e6aIE32si8keugcpm4JLGjF2z29oe8PdEH3Gzn/Ie7GGjxObXi6G4GOMEZByySGNAm2feZPWPgmGV1s4mGgeKmtoDvWxCcpxZCCleys9gNwV92/46vAOHLwDpVRDCCrr1kRChi9Uu3TY4WI4zH/+xQSxH4tYfJFwRrXrjPIPGx4MqnhgyEmIHyQ2cyEYL2v+a4ZiH0lG3sjruNMBzdmb3yLsJTO+7SqnsIZV5dktVlCKNCUf1EBUJcnSLP8xECEwM7gp4gTHiM9H2rQ6C7amUI8iF74fUXCPGFRxTbXrKGmURIF9cjOFbcwsJXCPT0Sw0IGefMyZEIkoZNe1IbWYVTgRlqQ/6ao0Qgl31X1IQg0o4+6FchHBSsOilvQVAXRLouUSPUjNEAELL8c4pL35N8wh1+3fyIoJC7l4ZpWCOVV1WaToTtsdUkGQTLduWw32dW/VaaDEIOf3NrZg+CNM0j8ayWNYQJdHfTGerpdV7P/Wpcu9xr5V2z0FSfG1rZa6iyiBbF0PJFtFGsqUI6qem9UGVBmssasJxOjHVN3XEyCeOOWUWpzQeMqxEnJHfPQRmt3eD0Fmygk5/e0DYtacTM3ec0aTs+Dx3ieaRRhpp1Ot7I/T130YU2auFsTqFFmL2VvVGkMfM3nT6rOXgxO59MduENHKr5kDD+7+T70oT/vtaFOm+nyf9Pk6n1Y8b+AXbfxMnIBwAA"},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1876","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1877"}}},"glyph":{"type":"object","name":"Scatter","id":"p1872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1884","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1878","attributes":{"selected":{"type":"object","name":"Selection","id":"p1879","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1880"},"data":{"type":"map","entries":[["x",[0.997,0.997]],["y",[0.01,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p1885","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1886"}}},"glyph":{"type":"object","name":"Line","id":"p1881","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1893","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1887","attributes":{"selected":{"type":"object","name":"Selection","id":"p1888","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1889"},"data":{"type":"map","entries":[["x",[0.6292,0.997]],["y",[0.25,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p1894","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1895"}}},"glyph":{"type":"object","name":"Line","id":"p1890","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1892","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1902","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1896","attributes":{"selected":{"type":"object","name":"Selection","id":"p1897","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1898"},"data":{"type":"map","entries":[["x",[0.9989,0.9989]],["y",[0.01,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1903","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1904"}}},"glyph":{"type":"object","name":"Line","id":"p1899","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1900","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1901","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1911","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1905","attributes":{"selected":{"type":"object","name":"Selection","id":"p1906","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1907"},"data":{"type":"map","entries":[["x",[0.6292,0.9989]],["y",[0.5,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1912","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1913"}}},"glyph":{"type":"object","name":"Line","id":"p1908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1909","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1910","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1920","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1914","attributes":{"selected":{"type":"object","name":"Selection","id":"p1915","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1916"},"data":{"type":"map","entries":[["x",[0.9996,0.9996]],["y",[0.01,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1921","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1922"}}},"glyph":{"type":"object","name":"Line","id":"p1917","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1929","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1923","attributes":{"selected":{"type":"object","name":"Selection","id":"p1924","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1925"},"data":{"type":"map","entries":[["x",[0.6292,0.9996]],["y",[0.75,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1930","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1931"}}},"glyph":{"type":"object","name":"Line","id":"p1926","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1927","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1831","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1844"},{"type":"object","name":"WheelZoomTool","id":"p1845","attributes":{"renderers":"auto"}},{"type":"object","name":"LassoSelectTool","id":"p1846","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p1847","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p1848","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p1849","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p1855","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1854","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1856"},{"type":"object","name":"SaveTool","id":"p1857"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1839","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1840","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1841"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p1842"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1834","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1835","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1836"},"axis_label":"Jaccard Similarity Index","major_label_policy":{"type":"object","name":"AllLabels","id":"p1837"}}}],"center":[{"type":"object","name":"Grid","id":"p1838","attributes":{"axis":{"id":"p1834"}}},{"type":"object","name":"Grid","id":"p1843","attributes":{"dimension":1,"axis":{"id":"p1839"}}},{"type":"object","name":"Legend","id":"p1867","attributes":{"location":"top_left","items":[{"type":"object","name":"LegendItem","id":"p1868","attributes":{"label":{"type":"value","value":"JSI CDF"},"renderers":[{"id":"p1864"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"f05bf9c2-a18a-4ba9-b444-cb8fceaed510","roots":{"p1822":"abb8d541-c362-43b9-9918-aad9b6f4f3d7"},"root_ids":["p1822"]}];
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