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
    
    
    const element = document.getElementById("a18e40e7-33e3-47fd-af51-0c107de8a0b4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a18e40e7-33e3-47fd-af51-0c107de8a0b4' but no matching script tag was found.")
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
                  const docs_json = '{"b826e867-85ef-4624-bec5-07611bc21f50":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p584820","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p584821"}}},"roots":[{"type":"object","name":"Column","id":"p584984","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p584982","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p584981","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p584974","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p584844"},{"type":"object","name":"PanTool","id":"p584920"}]}},{"type":"object","name":"ToolProxy","id":"p584975","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p584845","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p584921","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p584976","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p584846","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p584847","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p584853","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p584852","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p584922","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p584923","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p584929","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p584928","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p584977","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p584854"},{"type":"object","name":"ResetTool","id":"p584930"}]}},{"type":"object","name":"SaveTool","id":"p584978"},{"type":"object","name":"ToolProxy","id":"p584979","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p584896","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p584980","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p584972","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p584822","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p584823"},"y_range":{"type":"object","name":"DataRange1d","id":"p584824"},"x_scale":{"type":"object","name":"LinearScale","id":"p584832"},"y_scale":{"type":"object","name":"LogScale","id":"p584833"},"title":{"type":"object","name":"Title","id":"p584825","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p584862","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584856","attributes":{"selected":{"type":"object","name":"Selection","id":"p584857","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584858"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSbUhTYRSe0z4kMZcEkz4wCiFbpN2EQurcEgMrK8M/hj+k7DZCaZmRhZAEBmKma0m8q8gxHBX+UILSMlsTg/S61IUhsdzc1NSczWUfpt3OeQ29f577nPOcj/d5X5VKFV8+sUFU/cduWW4I9q0TzYzl+Oq1xI9UFmgp3yPLa0VBEEzaiFhRwi8/dQ1H46SG4r6EJg3pPFYD5+2dmzi3d1piiLtKxlaLDPtGb4+meMxHaxRhHWOrFnEX6pw/I4kfr3asJBS9V5cQ+zx9MLWCeF7zxiVUFKXaMbOM+rfEN0aQzvr2cATtd/BZKFzcKQihvsxwPsewV035i63FYWK+JCUMOBUgbtLOAePn/gOoq5nImoUwnFux/xeocZ/81Bm4z9iV2rQQoC8695ZpWPAtCOhX3IAzSH1cVkMQcJ/Lu/u/wV9FueafniJdzA53gNd1pwZoztYzcQHSKbmFk7Dgy1fS2S3p49CFvvcavwDub0vpHqW5cX3nR6n+ZlbGMOnKIMVP+eUXGnwUn8st9MFZSbpxyz9E+Z5IPUd7RtQQxW2MeXn9u2wvr2tL8tK+Ibfay/UlYx6eP+ny0D4V040eiue9yOBx3e2uQeIq9bZBkPGzpH+GZKwvBTdUYYHb9Anwkeg+mPu5f5OlLkB/bdezesGC58s+8R7Ood+X1J10PnxnHeSPUlbbTnu0JzEH+dhSpH9D85Mfx9rhHv5o6l/BPN5vWmUrGBnbs/nQS9AJwukD+5ohURDSjvY2cT7T8oT6vS42PYIOWV7/vcAGNYz9vuu2wg9FOZY3XAdDeB9tD80wjrrQ/B0YRizSGxcxR5JGzCNV8JwxS6K2HGYVZTDzlAH+AY2c9fMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584863","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584864"}}},"glyph":{"type":"object","name":"Line","id":"p584859","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584860","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p584861","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p584871","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584865","attributes":{"selected":{"type":"object","name":"Selection","id":"p584866","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584867"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSbUhTYRSe0z4kMZcEkz4wCiFbpN2EQurcEgMrK8M/hj+k7DZCaZmRhZAEBmKma0m8q8gxHBX+UILSMlsTg/S61IUhsdzc1NSczWUfpt3OeQ29f577nPOcj/d5X5VKFV8+sUFU/cduWW4I9q0TzYzl+Oq1xI9UFmgp3yPLa0VBEEzaiFhRwi8/dQ1H46SG4r6EJg3pPFYD5+2dmzi3d1piiLtKxlaLDPtGb4+meMxHaxRhHWOrFnEX6pw/I4kfr3asJBS9V5cQ+zx9MLWCeF7zxiVUFKXaMbOM+rfEN0aQzvr2cATtd/BZKFzcKQihvsxwPsewV035i63FYWK+JCUMOBUgbtLOAePn/gOoq5nImoUwnFux/xeocZ/81Bm4z9iV2rQQoC8695ZpWPAtCOhX3IAzSH1cVkMQcJ/Lu/u/wV9FueafniJdzA53gNd1pwZoztYzcQHSKbmFk7Dgy1fS2S3p49CFvvcavwDub0vpHqW5cX3nR6n+ZlbGMOnKIMVP+eUXGnwUn8st9MFZSbpxyz9E+Z5IPUd7RtQQxW2MeXn9u2wvr2tL8tK+Ibfay/UlYx6eP+ny0D4V040eiue9yOBx3e2uQeIq9bZBkPGzpH+GZKwvBTdUYYHb9Anwkeg+mPu5f5OlLkB/bdezesGC58s+8R7Ood+X1J10PnxnHeSPUlbbTnu0JzEH+dhSpH9D85Mfx9rhHv5o6l/BPN5vWmUrGBnbs/nQS9AJwukD+5ohURDSjvY2cT7T8oT6vS42PYIOWV7/vcAGNYz9vuu2wg9FOZY3XAdDeB9tD80wjrrQ/B0YRizSGxcxR5JGzCNV8JwxS6K2HGYVZTDzlAH+AY2c9fMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584872","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584873"}}},"glyph":{"type":"object","name":"Line","id":"p584868","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584869","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p584870","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p584882","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584876","attributes":{"selected":{"type":"object","name":"Selection","id":"p584877","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584878"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2QTU7CYBBAWbmHhSs3JsXExMRosJFoZIBaaKvQlv4Zz1DOwBngCpyhPYNnqFdgy1oz85om0/m+efNm2tZdU3fnSavxQoK98//2xfJLcfTgivNr6enjcH8jGppb6u5E0/qe+gcZ6scj3Ij7J3hXtCx4ps8Y7oV+r3BvcBOiUDelzxTPTA4KzuE82Srgwb3D+XA+ngVzLOEC5gnkV7kQLoKL4D7wfcKt8K3wrW2uQUwem+cnpl9i3C6hb2JeN2Wf1LhTimdj3HGDLzPuO8Ob4cvx5fhyfAW+Al9hnFuyT2n7nkr+RyWh+ip8X/IH8/xl5jACAAA="},"shape":[70],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBofS3rwMDA0CCyTgJEM2jGgOkFBbbCIDphh5wQiD5w5owgiH6wuABMAwGEXyUiANXPC9Y3cyY3Cu3+kANEOzysQqGB5rIj00DzWaD2sjj8//8/vv8QM5TPBFXHCFb3VeOPPYiWa/1tDxH/aQ/R/8Ueov4TiAb66yNYvv8QmG449PWDPcjcPSXvweoXur6zh7gfTB/4/PcNVPwViHbguv4czC/bB6YdONY8gfIfg82PSoHQMf2PwOKePBC6KOMhmPY2fwi19wFYnf7dB1BzIHxDDjDNwKR9H+Su/8GP74Ldt8vzDtgfUvpXQfz6A6cugs0Ru3kOxLffcuKY/T8go2HqYbD/+HQPgfj2nY4HQHT8xLd77P/8/7//qwaYlr95brv9D6D446WrQfL7SyavsP8KFGdrXGr/Gcgvylho/wEsPsP+KZg/EU6D7N83v8v+1///932TCuwBvvgxYTACAAA="},"shape":[70],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584883","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584884"}}},"glyph":{"type":"object","name":"Line","id":"p584879","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584880","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p584881","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p584892","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584886","attributes":{"selected":{"type":"object","name":"Selection","id":"p584887","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584888"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p584893","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584894"}}},"glyph":{"type":"object","name":"Line","id":"p584889","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584890","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p584891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p584831","attributes":{"tools":[{"id":"p584844"},{"id":"p584845"},{"id":"p584846"},{"id":"p584854"},{"type":"object","name":"SaveTool","id":"p584855"},{"id":"p584896"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p584839","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p584840","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p584841"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p584842"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p584834","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p584835","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p584836"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p584837"}}}],"center":[{"type":"object","name":"Grid","id":"p584838","attributes":{"axis":{"id":"p584834"}}},{"type":"object","name":"Grid","id":"p584843","attributes":{"dimension":1,"axis":{"id":"p584839"}}},{"type":"object","name":"Legend","id":"p584874","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p584875","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p584871"}]}},{"type":"object","name":"LegendItem","id":"p584885","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p584882"}]}},{"type":"object","name":"LegendItem","id":"p584895","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p584892"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p584897","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p584907","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p584899"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p584908"},"y_scale":{"type":"object","name":"LinearScale","id":"p584909"},"title":{"type":"object","name":"Title","id":"p584900","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p584938","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584932","attributes":{"selected":{"type":"object","name":"Selection","id":"p584933","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584934"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584939","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584940"}}},"glyph":{"type":"object","name":"Line","id":"p584935","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584936","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p584937","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p584947","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584941","attributes":{"selected":{"type":"object","name":"Selection","id":"p584942","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584943"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584948","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584949"}}},"glyph":{"type":"object","name":"Line","id":"p584944","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584945","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p584946","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p584958","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584952","attributes":{"selected":{"type":"object","name":"Selection","id":"p584953","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584954"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584959","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584960"}}},"glyph":{"type":"object","name":"Line","id":"p584955","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584956","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p584957","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p584968","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584962","attributes":{"selected":{"type":"object","name":"Selection","id":"p584963","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584964"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p584969","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584970"}}},"glyph":{"type":"object","name":"Line","id":"p584965","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584966","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p584967","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p584906","attributes":{"tools":[{"id":"p584920"},{"id":"p584921"},{"id":"p584922"},{"id":"p584930"},{"type":"object","name":"SaveTool","id":"p584931"},{"id":"p584972"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p584915","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p584916","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p584917"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p584918"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p584910","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p584911"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p584912"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p584913"}}}],"center":[{"type":"object","name":"Grid","id":"p584914","attributes":{"axis":{"id":"p584910"}}},{"type":"object","name":"Grid","id":"p584919","attributes":{"dimension":1,"axis":{"id":"p584915"}}},{"type":"object","name":"Legend","id":"p584950","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p584951","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p584947"}]}},{"type":"object","name":"LegendItem","id":"p584961","attributes":{"label":{"type":"value","value":"Median Year (1976)"},"renderers":[{"id":"p584958"}]}},{"type":"object","name":"LegendItem","id":"p584971","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p584968"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p584973","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b826e867-85ef-4624-bec5-07611bc21f50","roots":{"p584984":"a18e40e7-33e3-47fd-af51-0c107de8a0b4"},"root_ids":["p584984"]}];
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