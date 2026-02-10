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
    
    
    const element = document.getElementById("c06ea883-a888-45de-a7bb-fd499dd02359");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c06ea883-a888-45de-a7bb-fd499dd02359' but no matching script tag was found.")
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
                  const docs_json = '{"bfba732a-068a-43df-94bd-1752b8aecfde":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p589624","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p589625"}}},"roots":[{"type":"object","name":"Column","id":"p589788","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p589786","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p589785","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p589778","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p589648"},{"type":"object","name":"PanTool","id":"p589724"}]}},{"type":"object","name":"ToolProxy","id":"p589779","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p589649","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p589725","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p589780","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p589650","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p589651","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p589657","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p589656","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p589726","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p589727","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p589733","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p589732","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p589781","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p589658"},{"type":"object","name":"ResetTool","id":"p589734"}]}},{"type":"object","name":"SaveTool","id":"p589782"},{"type":"object","name":"ToolProxy","id":"p589783","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p589700","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p589784","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p589776","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p589626","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p589627"},"y_range":{"type":"object","name":"DataRange1d","id":"p589628"},"x_scale":{"type":"object","name":"LinearScale","id":"p589636"},"y_scale":{"type":"object","name":"LogScale","id":"p589637"},"title":{"type":"object","name":"Title","id":"p589629","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p589666","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589660","attributes":{"selected":{"type":"object","name":"Selection","id":"p589661","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589662"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSbUhTYRSe0z4kMZcEkz4wCiFbpN2EQurcEgMrK8M/hj+k7DZCaZmRhZAEBmKma0m8q8gxHBX+UILSMlsTg/S61IUhsdzc1NSczWUfpt3OeQ29f577nPOcj/d5X5VKFV8+sUFU/cduWW4I9q0TzYzl+Oq1xI9UFmgp3yPLa0VBEEzaiFhRwi8/dQ1H46SG4r6EJg3pPFYD5+2dmzi3d1piiLtKxlaLDPtGb4+meMxHaxRhHWOrFnEX6pw/I4kfr3asJBS9V5cQ+zx9MLWCeF7zxiVUFKXaMbOM+rfEN0aQzvr2cATtd/BZKFzcKQihvsxwPsewV035i63FYWK+JCUMOBUgbtLOAePn/gOoq5nImoUwnFux/xeocZ/81Bm4z9iV2rQQoC8695ZpWPAtCOhX3IAzSH1cVkMQcJ/Lu/u/wV9FueafniJdzA53gNd1pwZoztYzcQHSKbmFk7Dgy1fS2S3p49CFvvcavwDub0vpHqW5cX3nR6n+ZlbGMOnKIMVP+eUXGnwUn8st9MFZSbpxyz9E+Z5IPUd7RtQQxW2MeXn9u2wvr2tL8tK+Ibfay/UlYx6eP+ny0D4V040eiue9yOBx3e2uQeIq9bZBkPGzpH+GZKwvBTdUYYHb9Anwkeg+mPu5f5OlLkB/bdezesGC58s+8R7Ood+X1J10PnxnHeSPUlbbTnu0JzEH+dhSpH9D85Mfx9rhHv5o6l/BPN5vWmUrGBnbs/nQS9AJwukD+5ohURDSjvY2cT7T8oT6vS42PYIOWV7/vcAGNYz9vuu2wg9FOZY3XAdDeB9tD80wjrrQ/B0YRizSGxcxR5JGzCNV8JwxS6K2HGYVZTDzlAH+AY2c9fMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589667","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589668"}}},"glyph":{"type":"object","name":"Line","id":"p589663","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p589664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p589665","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p589675","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589669","attributes":{"selected":{"type":"object","name":"Selection","id":"p589670","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589671"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSbUhTYRSe0z4kMZcEkz4wCiFbpN2EQurcEgMrK8M/hj+k7DZCaZmRhZAEBmKma0m8q8gxHBX+UILSMlsTg/S61IUhsdzc1NSczWUfpt3OeQ29f577nPOcj/d5X5VKFV8+sUFU/cduWW4I9q0TzYzl+Oq1xI9UFmgp3yPLa0VBEEzaiFhRwi8/dQ1H46SG4r6EJg3pPFYD5+2dmzi3d1piiLtKxlaLDPtGb4+meMxHaxRhHWOrFnEX6pw/I4kfr3asJBS9V5cQ+zx9MLWCeF7zxiVUFKXaMbOM+rfEN0aQzvr2cATtd/BZKFzcKQihvsxwPsewV035i63FYWK+JCUMOBUgbtLOAePn/gOoq5nImoUwnFux/xeocZ/81Bm4z9iV2rQQoC8695ZpWPAtCOhX3IAzSH1cVkMQcJ/Lu/u/wV9FueafniJdzA53gNd1pwZoztYzcQHSKbmFk7Dgy1fS2S3p49CFvvcavwDub0vpHqW5cX3nR6n+ZlbGMOnKIMVP+eUXGnwUn8st9MFZSbpxyz9E+Z5IPUd7RtQQxW2MeXn9u2wvr2tL8tK+Ibfay/UlYx6eP+ny0D4V040eiue9yOBx3e2uQeIq9bZBkPGzpH+GZKwvBTdUYYHb9Anwkeg+mPu5f5OlLkB/bdezesGC58s+8R7Ood+X1J10PnxnHeSPUlbbTnu0JzEH+dhSpH9D85Mfx9rhHv5o6l/BPN5vWmUrGBnbs/nQS9AJwukD+5ohURDSjvY2cT7T8oT6vS42PYIOWV7/vcAGNYz9vuu2wg9FOZY3XAdDeB9tD80wjrrQ/B0YRizSGxcxR5JGzCNV8JwxS6K2HGYVZTDzlAH+AY2c9fMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589676","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589677"}}},"glyph":{"type":"object","name":"Line","id":"p589672","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p589673","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p589674","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p589686","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589680","attributes":{"selected":{"type":"object","name":"Selection","id":"p589681","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589682"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2QTU7CYBBAWbmHhSs3JsXExMRosJFoZIBaaKvQlv4Zz1DOwBngCpyhPYNnqFdgy1oz85om0/m+efNm2tZdU3fnSavxQoK98//2xfJLcfTgivNr6enjcH8jGppb6u5E0/qe+gcZ6scj3Ij7J3hXtCx4ps8Y7oV+r3BvcBOiUDelzxTPTA4KzuE82Srgwb3D+XA+ngVzLOEC5gnkV7kQLoKL4D7wfcKt8K3wrW2uQUwem+cnpl9i3C6hb2JeN2Wf1LhTimdj3HGDLzPuO8Ob4cvx5fhyfAW+Al9hnFuyT2n7nkr+RyWh+ip8X/IH8/xl5jACAAA="},"shape":[70],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBofS3rwMDA0CCyTgJEM2jGgOkFBbbCIDphh5wQiD5w5owgiH6wuABMAwGEXyUiANXPC9Y3cyY3Cu3+kANEOzysQqGB5rIj00DzWaD2sjj8//8/vv8QM5TPBFXHCFb3VeOPPYiWa/1tDxH/aQ/R/8Ueov4TiAb66yNYvv8QmG449PWDPcjcPSXvweoXur6zh7gfTB/4/PcNVPwViHbguv4czC/bB6YdONY8gfIfg82PSoHQMf2PwOKePBC6KOMhmPY2fwi19wFYnf7dB1BzIHxDDjDNwKR9H+Su/8GP74Ldt8vzDtgfUvpXQfz6A6cugs0Ru3kOxLffcuKY/T8go2HqYbD/+HQPgfj2nY4HQHT8xLd77P/8/7//qwaYlr95brv9D6D446WrQfL7SyavsP8KFGdrXGr/Gcgvylho/wEsPsP+KZg/EU6D7N83v8v+1///932TCuwBvvgxYTACAAA="},"shape":[70],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589687","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589688"}}},"glyph":{"type":"object","name":"Line","id":"p589683","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p589684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p589685","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p589696","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589690","attributes":{"selected":{"type":"object","name":"Selection","id":"p589691","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589692"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p589697","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589698"}}},"glyph":{"type":"object","name":"Line","id":"p589693","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p589694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p589695","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p589635","attributes":{"tools":[{"id":"p589648"},{"id":"p589649"},{"id":"p589650"},{"id":"p589658"},{"type":"object","name":"SaveTool","id":"p589659"},{"id":"p589700"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p589643","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p589644","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p589645"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p589646"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p589638","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p589639","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p589640"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p589641"}}}],"center":[{"type":"object","name":"Grid","id":"p589642","attributes":{"axis":{"id":"p589638"}}},{"type":"object","name":"Grid","id":"p589647","attributes":{"dimension":1,"axis":{"id":"p589643"}}},{"type":"object","name":"Legend","id":"p589678","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p589679","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p589675"}]}},{"type":"object","name":"LegendItem","id":"p589689","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p589686"}]}},{"type":"object","name":"LegendItem","id":"p589699","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p589696"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p589701","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p589711","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p589703"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p589712"},"y_scale":{"type":"object","name":"LinearScale","id":"p589713"},"title":{"type":"object","name":"Title","id":"p589704","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p589742","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589736","attributes":{"selected":{"type":"object","name":"Selection","id":"p589737","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589738"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589743","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589744"}}},"glyph":{"type":"object","name":"Line","id":"p589739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p589740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p589741","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p589751","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589745","attributes":{"selected":{"type":"object","name":"Selection","id":"p589746","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589747"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589752","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589753"}}},"glyph":{"type":"object","name":"Line","id":"p589748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p589749","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p589750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p589762","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589756","attributes":{"selected":{"type":"object","name":"Selection","id":"p589757","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589758"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6LNnziQZhT6xP2f5vEcrhMOh2H9xppXtVXtC+gD2JuwQYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589763","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589764"}}},"glyph":{"type":"object","name":"Line","id":"p589759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p589760","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p589761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p589772","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589766","attributes":{"selected":{"type":"object","name":"Selection","id":"p589767","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589768"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p589773","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589774"}}},"glyph":{"type":"object","name":"Line","id":"p589769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p589770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p589771","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p589710","attributes":{"tools":[{"id":"p589724"},{"id":"p589725"},{"id":"p589726"},{"id":"p589734"},{"type":"object","name":"SaveTool","id":"p589735"},{"id":"p589776"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p589719","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p589720","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p589721"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p589722"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p589714","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p589715"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p589716"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p589717"}}}],"center":[{"type":"object","name":"Grid","id":"p589718","attributes":{"axis":{"id":"p589714"}}},{"type":"object","name":"Grid","id":"p589723","attributes":{"dimension":1,"axis":{"id":"p589719"}}},{"type":"object","name":"Legend","id":"p589754","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p589755","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p589751"}]}},{"type":"object","name":"LegendItem","id":"p589765","attributes":{"label":{"type":"value","value":"Median Year (1976)"},"renderers":[{"id":"p589762"}]}},{"type":"object","name":"LegendItem","id":"p589775","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p589772"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p589777","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"bfba732a-068a-43df-94bd-1752b8aecfde","roots":{"p589788":"c06ea883-a888-45de-a7bb-fd499dd02359"},"root_ids":["p589788"]}];
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