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
    
    
    const element = document.getElementById("d9edb7a1-5252-46fd-905c-4dfc2737b8f1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd9edb7a1-5252-46fd-905c-4dfc2737b8f1' but no matching script tag was found.")
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
                  const docs_json = '{"89a135d6-ff27-43cd-ac6e-9443c7ec0e8d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p585802","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p585803"}}},"roots":[{"type":"object","name":"Figure","id":"p585804","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p585805"},"y_range":{"type":"object","name":"DataRange1d","id":"p585806","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LinearScale","id":"p585814"},"y_scale":{"type":"object","name":"LinearScale","id":"p585815"},"title":{"type":"object","name":"Title","id":"p585807","attributes":{"text":"Cumulative Distribution of Jaccard Similarity Indices"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p585836","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585830","attributes":{"selected":{"type":"object","name":"Selection","id":"p585831","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585832"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/93TXUiTURgHcKFgWNnKckqQaREaplH2YTF9liIapUWilS2lvDCtpcuEGgYuLywVS0ETtfyqLL8QzczCci2zZk2cyjJpaJlblu+Tmtn87Bxv3osx/Iygc/ODF87hvP/nf6zSWk1Pr++GWO/nl9e6aIE32si8keugcpm4JLGjF2z29oe8PdEH3Gzn/Ie7GGjxObXi6G4GOMEZByySGNAm2feZPWPgmGV1s4mGgeKmtoDvWxCcpxZCCleys9gNwV92/46vAOHLwDpVRDCCrr1kRChi9Uu3TY4WI4zH/+xQSxH4tYfJFwRrXrjPIPGx4MqnhgyEmIHyQ2cyEYL2v+a4ZiH0lG3sjruNMBzdmb3yLsJTO+7SqnsIZV5dktVlCKNCUf1EBUJcnSLP8xECEwM7gp4gTHiM9H2rQ6C7amUI8iF74fUXCPGFRxTbXrKGmURIF9cjOFbcwsJXCPT0Sw0IGefMyZEIkoZNe1IbWYVTgRlqQ/6ao0Qgl31X1IQg0o4+6FchHBSsOilvQVAXRLouUSPUjNEAELL8c4pL35N8wh1+3fyIoJC7l4ZpWCOVV1WaToTtsdUkGQTLduWw32dW/VaaDEIOf3NrZg+CNM0j8ayWNYQJdHfTGerpdV7P/Wpcu9xr5V2z0FSfG1rZa6iyiBbF0PJFtFGsqUI6qem9UGVBmssasJxOjHVN3XEyCeOOWUWpzQeMqxEnJHfPQRmt3eD0Fmygk5/e0DYtacTM3ec0aTs+Dx3ieaRRhpp1Ot7I/T130YU2auFsTqFFmL2VvVGkMfM3nT6rOXgxO59MduENHKr5kDD+7+T70oT/vtaFOm+nyf9Pk6n1Y8b+AXbfxMnIBwAA"},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p585837","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585838"}}},"glyph":{"type":"object","name":"Line","id":"p585833","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585834","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p585835","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p585847","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585841","attributes":{"selected":{"type":"object","name":"Selection","id":"p585842","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585843"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/93TXUiTURgHcKFgWNnKckqQaREaplH2YTF9liIapUWilS2lvDCtpcuEGgYuLywVS0ETtfyqLL8QzczCci2zZk2cyjJpaJlblu+Tmtn87Bxv3osx/Iygc/ODF87hvP/nf6zSWk1Pr++GWO/nl9e6aIE32si8keugcpm4JLGjF2z29oe8PdEH3Gzn/Ie7GGjxObXi6G4GOMEZByySGNAm2feZPWPgmGV1s4mGgeKmtoDvWxCcpxZCCleys9gNwV92/46vAOHLwDpVRDCCrr1kRChi9Uu3TY4WI4zH/+xQSxH4tYfJFwRrXrjPIPGx4MqnhgyEmIHyQ2cyEYL2v+a4ZiH0lG3sjruNMBzdmb3yLsJTO+7SqnsIZV5dktVlCKNCUf1EBUJcnSLP8xECEwM7gp4gTHiM9H2rQ6C7amUI8iF74fUXCPGFRxTbXrKGmURIF9cjOFbcwsJXCPT0Sw0IGefMyZEIkoZNe1IbWYVTgRlqQ/6ao0Qgl31X1IQg0o4+6FchHBSsOilvQVAXRLouUSPUjNEAELL8c4pL35N8wh1+3fyIoJC7l4ZpWCOVV1WaToTtsdUkGQTLduWw32dW/VaaDEIOf3NrZg+CNM0j8ayWNYQJdHfTGerpdV7P/Wpcu9xr5V2z0FSfG1rZa6iyiBbF0PJFtFGsqUI6qem9UGVBmssasJxOjHVN3XEyCeOOWUWpzQeMqxEnJHfPQRmt3eD0Fmygk5/e0DYtacTM3ec0aTs+Dx3ieaRRhpp1Ot7I/T130YU2auFsTqFFmL2VvVGkMfM3nT6rOXgxO59MduENHKr5kDD+7+T70oT/vtaFOm+nyf9Pk6n1Y8b+AXbfxMnIBwAA"},"shape":[249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVTUVRzFW7TFOGVqWBmaWrZpm1uWeQ0jT502tEzbjDQ0W9RIS4+Wa2qkUpKWmhkZkZGCiLgDAsMmMDDDDAMzw2/2fUY016zTe2/u7585836/913u/Vzd+Yk9hmTMg079LsPuMx/cdCh/Lf9n4eBZyzexjdk8/wHbuv79dkXtdr7fidJzWfVfL8/hd7tQ+PegF1/Zkcvv85Bzer8+6chu3stH9qlnJvvMe3i/ABM+C8+ZuriQdfZh7MKRQ4+tLWK9/Rix4IvIwC3FrHsAwz6t3vPVbyWsfxBDMnrOCxUdYp/DGPDJtEdePnGE/Y7i1vnyzTH2PQ759W2dpexfhtWjtz5eeq6Mc5TjypJx4mo55zmBpaNc/wzuXsG5KnCpeM2bUxIqOV8l1HHvKs5ZhTNyjNt1nFeHuepFNeeuhuw+4L4azl+D2cOPY9LDtdyjFu597+5cNbqO+9Qh7dFrxUj13KsetsI/0wIpJ7nfScjTfi80cM8GmApk40bu2yhq/7hy2RtN3LsJPnN/UUnP/fXI7asuUgc9Zr5W0ZL5WDP1aMagLbdcfffRZurSDM00S0zcQn1asCPx8AxxhToZ8NaUBNHaQL0M6Lf57cp1dQbqZoSlVQ5opH5GxMsbqWMrXlVPK/VsRZ/vf18dbWulria0GC+KSibqa0JWn+e9d2om6myGOBQTmam3GQlxIah7G+oNyWKzNurfhnW9VQP6YMHEyVIhC/2woPumMdeJWelLO6Q6qYva6U87VvSyzw5ebqdPHRivBO+gXx34T7h0RzcrfbNC7CoWsNI/KxbffM/9L91go482jEld9Lp/g41+2nBeytzLTl/tKJYybLbTXzsy4sbS506oMj910u9OXJA299TouwaztG+SRv81HJC2ZGvkQENcbo08aFAy9nWQCweUPNMc5MMBtfY2BzlxIL6Og7w40CXH7O8kN07o05d8uesdJ/lxYq+oPj/HSY6c2JDbuPdJt5M8ufCRGtRFrlxQbs9ykS8XHrjmuc9//cNFzlzooYxzkTc3Ainb88YOc5M7N2reqxp//Vw3+XMjT65b4CaHbqyR45x2k0cP0uXnIzzk0oMUz/u/PLHQQz49uEsB4iGnHiiaL3rIqxfOp+UFL7n1onzmjVd9vNRLfr0QUAmhveTYCyGOkNRHnn2YLtOT7CPXPoxTIPrItw9J3ayXPtT5yLkPlwfLgfzk3Y+OCQ8Kifzk3g+V1kw/+fdDUvNzg5858EOIKd4EmIcAlO2pAeYiAGXLpgDzEUCiWjjAnARwVq6VGGRegjDKtlODzE0QRfJ4a5D5CeI7FY8gcxSEwj4pxDyFoHCeHmKuQnhICRpivkKQao5yhZizMIQpwskw8xZGw1NlfzWlh5m7MPLTJBFh5i+MzOWycZg5jGCOcHfk0AjzGMGzyrAIcxnBvY71gtAI8xmBwr8rwpxGofAcHmVeo1D4LIgyt1Eoe0uizG8Uq6T8F6LMcQwzFBAx5jmGZDn+khhzHcNAFaQY8x3DFeo5hf8ByZugmsgHAAA="},"shape":[249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p585848","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585849"}}},"glyph":{"type":"object","name":"Scatter","id":"p585844","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p585845","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p585846","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"navy"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"navy"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p585856","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585850","attributes":{"selected":{"type":"object","name":"Selection","id":"p585851","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585852"},"data":{"type":"map","entries":[["x",[0.997,0.997]],["y",[0.01,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p585857","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585858"}}},"glyph":{"type":"object","name":"Line","id":"p585853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p585855","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p585865","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585859","attributes":{"selected":{"type":"object","name":"Selection","id":"p585860","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585861"},"data":{"type":"map","entries":[["x",[0.6292,0.997]],["y",[0.25,0.25]]]}}},"view":{"type":"object","name":"CDSView","id":"p585866","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585867"}}},"glyph":{"type":"object","name":"Line","id":"p585862","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585863","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p585864","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p585874","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585868","attributes":{"selected":{"type":"object","name":"Selection","id":"p585869","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585870"},"data":{"type":"map","entries":[["x",[0.9989,0.9989]],["y",[0.01,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p585875","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585876"}}},"glyph":{"type":"object","name":"Line","id":"p585871","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p585873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p585883","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585877","attributes":{"selected":{"type":"object","name":"Selection","id":"p585878","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585879"},"data":{"type":"map","entries":[["x",[0.6292,0.9989]],["y",[0.5,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p585884","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585885"}}},"glyph":{"type":"object","name":"Line","id":"p585880","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585881","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p585882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p585892","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585886","attributes":{"selected":{"type":"object","name":"Selection","id":"p585887","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585888"},"data":{"type":"map","entries":[["x",[0.9996,0.9996]],["y",[0.01,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p585893","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585894"}}},"glyph":{"type":"object","name":"Line","id":"p585889","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585890","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p585891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p585901","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p585895","attributes":{"selected":{"type":"object","name":"Selection","id":"p585896","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p585897"},"data":{"type":"map","entries":[["x",[0.6292,0.9996]],["y",[0.75,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p585902","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p585903"}}},"glyph":{"type":"object","name":"Line","id":"p585898","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p585899","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p585900","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p585813","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p585826"},{"type":"object","name":"WheelZoomTool","id":"p585827","attributes":{"renderers":"auto"}},{"type":"object","name":"ResetTool","id":"p585828"},{"type":"object","name":"SaveTool","id":"p585829"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p585821","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p585822","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p585823"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p585824"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p585816","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p585817","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p585818"},"axis_label":"Jaccard Similarity Index","major_label_policy":{"type":"object","name":"AllLabels","id":"p585819"}}}],"center":[{"type":"object","name":"Grid","id":"p585820","attributes":{"axis":{"id":"p585816"}}},{"type":"object","name":"Grid","id":"p585825","attributes":{"dimension":1,"axis":{"id":"p585821"}}},{"type":"object","name":"Legend","id":"p585839","attributes":{"location":"top_left","items":[{"type":"object","name":"LegendItem","id":"p585840","attributes":{"label":{"type":"value","value":"JSI CDF"},"renderers":[{"id":"p585836"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"89a135d6-ff27-43cd-ac6e-9443c7ec0e8d","roots":{"p585804":"d9edb7a1-5252-46fd-905c-4dfc2737b8f1"},"root_ids":["p585804"]}];
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