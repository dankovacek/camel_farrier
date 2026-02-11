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
    
    
    const element = document.getElementById("b58bc444-f265-423c-9f3d-ec864ba77c89");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b58bc444-f265-423c-9f3d-ec864ba77c89' but no matching script tag was found.")
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
                  const docs_json = '{"bb96d209-e829-4133-9cd5-7af613842860":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p592186","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p592187"}}},"roots":[{"type":"object","name":"Column","id":"p592350","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p592348","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p592347","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p592340","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p592210"},{"type":"object","name":"PanTool","id":"p592286"}]}},{"type":"object","name":"ToolProxy","id":"p592341","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p592211","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p592287","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p592342","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p592212","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p592213","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p592219","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p592218","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p592288","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p592289","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p592295","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p592294","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p592343","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p592220"},{"type":"object","name":"ResetTool","id":"p592296"}]}},{"type":"object","name":"SaveTool","id":"p592344"},{"type":"object","name":"ToolProxy","id":"p592345","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p592262","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p592346","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p592338","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p592188","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p592189"},"y_range":{"type":"object","name":"DataRange1d","id":"p592190"},"x_scale":{"type":"object","name":"LinearScale","id":"p592198"},"y_scale":{"type":"object","name":"LogScale","id":"p592199"},"title":{"type":"object","name":"Title","id":"p592191","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p592228","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592222","attributes":{"selected":{"type":"object","name":"Selection","id":"p592223","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592224"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSbUhTYRSe0z4kMZcEkz4wCiFbpN2EQurcEgMrK8M/hj+k7DZCaZmRhZAEBmKma0m8q8gxHBX+UILSMlsTg/S61IUhsdzc1NSczWUfpt3OeQ29f577nPOcj/d5X5VKFV8+sUFU/cduWW4I9q0TzYzl+Oq1xI9UFmgp3yPLa0VBEEzaiFhRwi8/dQ1H46SG4r6EJg3pPFYD5+2dmzi3d1piiLtKxlaLDPtGb4+meMxHaxRhHWOrFnEX6pw/I4kfr3asJBS9V5cQ+zx9MLWCeF7zxiVUFKXaMbOM+rfEN0aQzvr2cATtd/BZKFzcKQihvsxwPsewV035i63FYWK+JCUMOBUgbtLOAePn/gOoq5nImoUwnFux/xeocZ/81Bm4z9iV2rQQoC8695ZpWPAtCOhX3IAzSH1cVkMQcJ/Lu/u/wV9FueafniJdzA53gNd1pwZoztYzcQHSKbmFk7Dgy1fS2S3p49CFvvcavwDub0vpHqW5cX3nR6n+ZlbGMOnKIMVP+eUXGnwUn8st9MFZSbpxyz9E+Z5IPUd7RtQQxW2MeXn9u2wvr2tL8tK+Ibfay/UlYx6eP+ny0D4V040eiue9yOBx3e2uQeIq9bZBkPGzpH+GZKwvBTdUYYHb9Anwkeg+mPu5f5OlLkB/bdezesGC58s+8R7Ood+X1J10PnxnHeSPUlbbTnu0JzEH+dhSpH9D85Mfx9rhHv5o6l/BPN5vWmUrGBnbs/nQS9AJwukD+5ohURDSjvY2cT7T8oT6vS42PYIOWV7/vcAGNYz9vuu2wg9FOZY3XAdDeB9tD80wjrrQ/B0YRizSGxcxR5JGzCNV8JwxS6K2HGYVZTDzlAH+AY2c9fMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592229","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592230"}}},"glyph":{"type":"object","name":"Line","id":"p592225","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p592226","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p592227","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p592237","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592231","attributes":{"selected":{"type":"object","name":"Selection","id":"p592232","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592233"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSbUhTYRSe0z4kMZcEkz4wCiFbpN2EQurcEgMrK8M/hj+k7DZCaZmRhZAEBmKma0m8q8gxHBX+UILSMlsTg/S61IUhsdzc1NSczWUfpt3OeQ29f577nPOcj/d5X5VKFV8+sUFU/cduWW4I9q0TzYzl+Oq1xI9UFmgp3yPLa0VBEEzaiFhRwi8/dQ1H46SG4r6EJg3pPFYD5+2dmzi3d1piiLtKxlaLDPtGb4+meMxHaxRhHWOrFnEX6pw/I4kfr3asJBS9V5cQ+zx9MLWCeF7zxiVUFKXaMbOM+rfEN0aQzvr2cATtd/BZKFzcKQihvsxwPsewV035i63FYWK+JCUMOBUgbtLOAePn/gOoq5nImoUwnFux/xeocZ/81Bm4z9iV2rQQoC8695ZpWPAtCOhX3IAzSH1cVkMQcJ/Lu/u/wV9FueafniJdzA53gNd1pwZoztYzcQHSKbmFk7Dgy1fS2S3p49CFvvcavwDub0vpHqW5cX3nR6n+ZlbGMOnKIMVP+eUXGnwUn8st9MFZSbpxyz9E+Z5IPUd7RtQQxW2MeXn9u2wvr2tL8tK+Ibfay/UlYx6eP+ny0D4V040eiue9yOBx3e2uQeIq9bZBkPGzpH+GZKwvBTdUYYHb9Anwkeg+mPu5f5OlLkB/bdezesGC58s+8R7Ood+X1J10PnxnHeSPUlbbTnu0JzEH+dhSpH9D85Mfx9rhHv5o6l/BPN5vWmUrGBnbs/nQS9AJwukD+5ohURDSjvY2cT7T8oT6vS42PYIOWV7/vcAGNYz9vuu2wg9FOZY3XAdDeB9tD80wjrrQ/B0YRizSGxcxR5JGzCNV8JwxS6K2HGYVZTDzlAH+AY2c9fMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592238","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592239"}}},"glyph":{"type":"object","name":"Line","id":"p592234","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p592235","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p592236","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p592248","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592242","attributes":{"selected":{"type":"object","name":"Selection","id":"p592243","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592244"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2QTU7CYBBAWbmHhSs3JsXExMRosJFoZIBaaKvQlv4Zz1DOwBngCpyhPYNnqFdgy1oz85om0/m+efNm2tZdU3fnSavxQoK98//2xfJLcfTgivNr6enjcH8jGppb6u5E0/qe+gcZ6scj3Ij7J3hXtCx4ps8Y7oV+r3BvcBOiUDelzxTPTA4KzuE82Srgwb3D+XA+ngVzLOEC5gnkV7kQLoKL4D7wfcKt8K3wrW2uQUwem+cnpl9i3C6hb2JeN2Wf1LhTimdj3HGDLzPuO8Ob4cvx5fhyfAW+Al9hnFuyT2n7nkr+RyWh+ip8X/IH8/xl5jACAAA="},"shape":[70],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBofS3rwMDA0CCyTgJEM2jGgOkFBbbCIDphh5wQiD5w5owgiH6wuABMAwGEXyUiANXPC9Y3cyY3Cu3+kANEOzysQqGB5rIj00DzWaD2sjj8//8/vv8QM5TPBFXHCFb3VeOPPYiWa/1tDxH/aQ/R/8Ueov4TiAb66yNYvv8QmG449PWDPcjcPSXvweoXur6zh7gfTB/4/PcNVPwViHbguv4czC/bB6YdONY8gfIfg82PSoHQMf2PwOKePBC6KOMhmPY2fwi19wFYnf7dB1BzIHxDDjDNwKR9H+Su/8GP74Ldt8vzDtgfUvpXQfz6A6cugs0Ru3kOxLffcuKY/T8go2HqYbD/+HQPgfj2nY4HQHT8xLd77P/8/7//qwaYlr95brv9D6D446WrQfL7SyavsP8KFGdrXGr/Gcgvylho/wEsPsP+KZg/EU6D7N83v8v+1///932TCuwBvvgxYTACAAA="},"shape":[70],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592249","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592250"}}},"glyph":{"type":"object","name":"Line","id":"p592245","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p592246","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p592247","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p592258","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592252","attributes":{"selected":{"type":"object","name":"Selection","id":"p592253","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592254"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p592259","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592260"}}},"glyph":{"type":"object","name":"Line","id":"p592255","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p592256","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p592257","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p592197","attributes":{"tools":[{"id":"p592210"},{"id":"p592211"},{"id":"p592212"},{"id":"p592220"},{"type":"object","name":"SaveTool","id":"p592221"},{"id":"p592262"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p592205","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p592206","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p592207"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p592208"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p592200","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p592201","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p592202"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p592203"}}}],"center":[{"type":"object","name":"Grid","id":"p592204","attributes":{"axis":{"id":"p592200"}}},{"type":"object","name":"Grid","id":"p592209","attributes":{"dimension":1,"axis":{"id":"p592205"}}},{"type":"object","name":"Legend","id":"p592240","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p592241","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p592237"}]}},{"type":"object","name":"LegendItem","id":"p592251","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p592248"}]}},{"type":"object","name":"LegendItem","id":"p592261","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p592258"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p592263","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p592273","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p592265"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p592274"},"y_scale":{"type":"object","name":"LinearScale","id":"p592275"},"title":{"type":"object","name":"Title","id":"p592266","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p592304","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592298","attributes":{"selected":{"type":"object","name":"Selection","id":"p592299","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592300"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592305","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592306"}}},"glyph":{"type":"object","name":"Line","id":"p592301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p592302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p592303","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p592313","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592307","attributes":{"selected":{"type":"object","name":"Selection","id":"p592308","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592309"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592314","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592315"}}},"glyph":{"type":"object","name":"Line","id":"p592310","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p592311","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p592312","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p592324","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592318","attributes":{"selected":{"type":"object","name":"Selection","id":"p592319","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592320"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592325","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592326"}}},"glyph":{"type":"object","name":"Line","id":"p592321","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p592322","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p592323","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p592334","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592328","attributes":{"selected":{"type":"object","name":"Selection","id":"p592329","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592330"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p592335","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592336"}}},"glyph":{"type":"object","name":"Line","id":"p592331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p592332","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p592333","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p592272","attributes":{"tools":[{"id":"p592286"},{"id":"p592287"},{"id":"p592288"},{"id":"p592296"},{"type":"object","name":"SaveTool","id":"p592297"},{"id":"p592338"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p592281","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p592282","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p592283"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p592284"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p592276","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p592277"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p592278"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p592279"}}}],"center":[{"type":"object","name":"Grid","id":"p592280","attributes":{"axis":{"id":"p592276"}}},{"type":"object","name":"Grid","id":"p592285","attributes":{"dimension":1,"axis":{"id":"p592281"}}},{"type":"object","name":"Legend","id":"p592316","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p592317","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p592313"}]}},{"type":"object","name":"LegendItem","id":"p592327","attributes":{"label":{"type":"value","value":"Median Year (1976)"},"renderers":[{"id":"p592324"}]}},{"type":"object","name":"LegendItem","id":"p592337","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p592334"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p592339","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"bb96d209-e829-4133-9cd5-7af613842860","roots":{"p592350":"b58bc444-f265-423c-9f3d-ec864ba77c89"},"root_ids":["p592350"]}];
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