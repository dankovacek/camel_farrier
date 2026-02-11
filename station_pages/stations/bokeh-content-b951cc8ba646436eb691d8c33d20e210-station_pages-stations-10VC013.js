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
    
    
    const element = document.getElementById("a42ad98f-48c4-4e8b-9ed4-e72c6af0eff1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a42ad98f-48c4-4e8b-9ed4-e72c6af0eff1' but no matching script tag was found.")
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
                  const docs_json = '{"34137785-3da4-4d54-8187-0fd8d914e544":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p598357","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p598358"}}},"roots":[{"type":"object","name":"Column","id":"p598521","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p598519","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p598518","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p598511","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p598381"},{"type":"object","name":"PanTool","id":"p598457"}]}},{"type":"object","name":"ToolProxy","id":"p598512","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p598382","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p598458","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p598513","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p598383","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p598384","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p598390","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p598389","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p598459","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p598460","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p598466","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p598465","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p598514","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p598391"},{"type":"object","name":"ResetTool","id":"p598467"}]}},{"type":"object","name":"SaveTool","id":"p598515"},{"type":"object","name":"ToolProxy","id":"p598516","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p598433","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p598517","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p598509","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p598359","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p598360"},"y_range":{"type":"object","name":"DataRange1d","id":"p598361"},"x_scale":{"type":"object","name":"LinearScale","id":"p598369"},"y_scale":{"type":"object","name":"LogScale","id":"p598370"},"title":{"type":"object","name":"Title","id":"p598362","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p598399","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598393","attributes":{"selected":{"type":"object","name":"Selection","id":"p598394","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598395"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSbUhTYRSe0z4kMZcEkz4wCiFbpN2EQurcEgMrK8M/hj+k7DZCaZmRhZAEBmKma0m8q8gxHBX+UILSMlsTg/S61IUhsdzc1NSczWUfpt3OeQ29f577nPOcj/d5X5VKFV8+sUFU/cduWW4I9q0TzYzl+Oq1xI9UFmgp3yPLa0VBEEzaiFhRwi8/dQ1H46SG4r6EJg3pPFYD5+2dmzi3d1piiLtKxlaLDPtGb4+meMxHaxRhHWOrFnEX6pw/I4kfr3asJBS9V5cQ+zx9MLWCeF7zxiVUFKXaMbOM+rfEN0aQzvr2cATtd/BZKFzcKQihvsxwPsewV035i63FYWK+JCUMOBUgbtLOAePn/gOoq5nImoUwnFux/xeocZ/81Bm4z9iV2rQQoC8695ZpWPAtCOhX3IAzSH1cVkMQcJ/Lu/u/wV9FueafniJdzA53gNd1pwZoztYzcQHSKbmFk7Dgy1fS2S3p49CFvvcavwDub0vpHqW5cX3nR6n+ZlbGMOnKIMVP+eUXGnwUn8st9MFZSbpxyz9E+Z5IPUd7RtQQxW2MeXn9u2wvr2tL8tK+Ibfay/UlYx6eP+ny0D4V040eiue9yOBx3e2uQeIq9bZBkPGzpH+GZKwvBTdUYYHb9Anwkeg+mPu5f5OlLkB/bdezesGC58s+8R7Ood+X1J10PnxnHeSPUlbbTnu0JzEH+dhSpH9D85Mfx9rhHv5o6l/BPN5vWmUrGBnbs/nQS9AJwukD+5ohURDSjvY2cT7T8oT6vS42PYIOWV7/vcAGNYz9vuu2wg9FOZY3XAdDeB9tD80wjrrQ/B0YRizSGxcxR5JGzCNV8JwxS6K2HGYVZTDzlAH+AY2c9fMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598400","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598401"}}},"glyph":{"type":"object","name":"Line","id":"p598396","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p598397","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p598398","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p598408","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598402","attributes":{"selected":{"type":"object","name":"Selection","id":"p598403","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598404"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSbUhTYRSe0z4kMZcEkz4wCiFbpN2EQurcEgMrK8M/hj+k7DZCaZmRhZAEBmKma0m8q8gxHBX+UILSMlsTg/S61IUhsdzc1NSczWUfpt3OeQ29f577nPOcj/d5X5VKFV8+sUFU/cduWW4I9q0TzYzl+Oq1xI9UFmgp3yPLa0VBEEzaiFhRwi8/dQ1H46SG4r6EJg3pPFYD5+2dmzi3d1piiLtKxlaLDPtGb4+meMxHaxRhHWOrFnEX6pw/I4kfr3asJBS9V5cQ+zx9MLWCeF7zxiVUFKXaMbOM+rfEN0aQzvr2cATtd/BZKFzcKQihvsxwPsewV035i63FYWK+JCUMOBUgbtLOAePn/gOoq5nImoUwnFux/xeocZ/81Bm4z9iV2rQQoC8695ZpWPAtCOhX3IAzSH1cVkMQcJ/Lu/u/wV9FueafniJdzA53gNd1pwZoztYzcQHSKbmFk7Dgy1fS2S3p49CFvvcavwDub0vpHqW5cX3nR6n+ZlbGMOnKIMVP+eUXGnwUn8st9MFZSbpxyz9E+Z5IPUd7RtQQxW2MeXn9u2wvr2tL8tK+Ibfay/UlYx6eP+ny0D4V040eiue9yOBx3e2uQeIq9bZBkPGzpH+GZKwvBTdUYYHb9Anwkeg+mPu5f5OlLkB/bdezesGC58s+8R7Ood+X1J10PnxnHeSPUlbbTnu0JzEH+dhSpH9D85Mfx9rhHv5o6l/BPN5vWmUrGBnbs/nQS9AJwukD+5ohURDSjvY2cT7T8oT6vS42PYIOWV7/vcAGNYz9vuu2wg9FOZY3XAdDeB9tD80wjrrQ/B0YRizSGxcxR5JGzCNV8JwxS6K2HGYVZTDzlAH+AY2c9fMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598409","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598410"}}},"glyph":{"type":"object","name":"Line","id":"p598405","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p598406","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p598407","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p598419","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598413","attributes":{"selected":{"type":"object","name":"Selection","id":"p598414","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598415"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2QTU7CYBBAWbmHhSs3JsXExMRosJFoZIBaaKvQlv4Zz1DOwBngCpyhPYNnqFdgy1oz85om0/m+efNm2tZdU3fnSavxQoK98//2xfJLcfTgivNr6enjcH8jGppb6u5E0/qe+gcZ6scj3Ij7J3hXtCx4ps8Y7oV+r3BvcBOiUDelzxTPTA4KzuE82Srgwb3D+XA+ngVzLOEC5gnkV7kQLoKL4D7wfcKt8K3wrW2uQUwem+cnpl9i3C6hb2JeN2Wf1LhTimdj3HGDLzPuO8Ob4cvx5fhyfAW+Al9hnFuyT2n7nkr+RyWh+ip8X/IH8/xl5jACAAA="},"shape":[70],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBofS3rwMDA0CCyTgJEM2jGgOkFBbbCIDphh5wQiD5w5owgiH6wuABMAwGEXyUiANXPC9Y3cyY3Cu3+kANEOzysQqGB5rIj00DzWaD2sjj8//8/vv8QM5TPBFXHCFb3VeOPPYiWa/1tDxH/aQ/R/8Ueov4TiAb66yNYvv8QmG449PWDPcjcPSXvweoXur6zh7gfTB/4/PcNVPwViHbguv4czC/bB6YdONY8gfIfg82PSoHQMf2PwOKePBC6KOMhmPY2fwi19wFYnf7dB1BzIHxDDjDNwKR9H+Su/8GP74Ldt8vzDtgfUvpXQfz6A6cugs0Ru3kOxLffcuKY/T8go2HqYbD/+HQPgfj2nY4HQHT8xLd77P/8/7//qwaYlr95brv9D6D446WrQfL7SyavsP8KFGdrXGr/Gcgvylho/wEsPsP+KZg/EU6D7N83v8v+1///932TCuwBvvgxYTACAAA="},"shape":[70],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598420","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598421"}}},"glyph":{"type":"object","name":"Line","id":"p598416","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p598417","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p598418","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p598429","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598423","attributes":{"selected":{"type":"object","name":"Selection","id":"p598424","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598425"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p598430","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598431"}}},"glyph":{"type":"object","name":"Line","id":"p598426","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p598427","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p598428","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p598368","attributes":{"tools":[{"id":"p598381"},{"id":"p598382"},{"id":"p598383"},{"id":"p598391"},{"type":"object","name":"SaveTool","id":"p598392"},{"id":"p598433"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p598376","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p598377","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p598378"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p598379"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p598371","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p598372","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p598373"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p598374"}}}],"center":[{"type":"object","name":"Grid","id":"p598375","attributes":{"axis":{"id":"p598371"}}},{"type":"object","name":"Grid","id":"p598380","attributes":{"dimension":1,"axis":{"id":"p598376"}}},{"type":"object","name":"Legend","id":"p598411","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p598412","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p598408"}]}},{"type":"object","name":"LegendItem","id":"p598422","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p598419"}]}},{"type":"object","name":"LegendItem","id":"p598432","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p598429"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p598434","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p598444","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p598436"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p598445"},"y_scale":{"type":"object","name":"LinearScale","id":"p598446"},"title":{"type":"object","name":"Title","id":"p598437","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p598475","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598469","attributes":{"selected":{"type":"object","name":"Selection","id":"p598470","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598471"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598476","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598477"}}},"glyph":{"type":"object","name":"Line","id":"p598472","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p598473","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p598474","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p598484","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598478","attributes":{"selected":{"type":"object","name":"Selection","id":"p598479","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598480"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598485","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598486"}}},"glyph":{"type":"object","name":"Line","id":"p598481","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p598482","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p598483","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p598495","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598489","attributes":{"selected":{"type":"object","name":"Selection","id":"p598490","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598491"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598496","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598497"}}},"glyph":{"type":"object","name":"Line","id":"p598492","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p598493","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p598494","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p598505","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598499","attributes":{"selected":{"type":"object","name":"Selection","id":"p598500","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598501"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p598506","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598507"}}},"glyph":{"type":"object","name":"Line","id":"p598502","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p598503","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p598504","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p598443","attributes":{"tools":[{"id":"p598457"},{"id":"p598458"},{"id":"p598459"},{"id":"p598467"},{"type":"object","name":"SaveTool","id":"p598468"},{"id":"p598509"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p598452","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p598453","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p598454"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p598455"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p598447","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p598448"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p598449"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p598450"}}}],"center":[{"type":"object","name":"Grid","id":"p598451","attributes":{"axis":{"id":"p598447"}}},{"type":"object","name":"Grid","id":"p598456","attributes":{"dimension":1,"axis":{"id":"p598452"}}},{"type":"object","name":"Legend","id":"p598487","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p598488","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p598484"}]}},{"type":"object","name":"LegendItem","id":"p598498","attributes":{"label":{"type":"value","value":"Median Year (1976)"},"renderers":[{"id":"p598495"}]}},{"type":"object","name":"LegendItem","id":"p598508","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p598505"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p598510","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"34137785-3da4-4d54-8187-0fd8d914e544","roots":{"p598521":"a42ad98f-48c4-4e8b-9ed4-e72c6af0eff1"},"root_ids":["p598521"]}];
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