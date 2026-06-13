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
    
    
    const element = document.getElementById("fe3af10e-bce8-4e11-833d-cd475f264186");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fe3af10e-bce8-4e11-833d-cd475f264186' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.9.1.min.js"];
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
                  const docs_json = '{"788ce329-2ce5-4125-b583-2f2bee2c521d":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p265419","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p265420"}}},"roots":[{"type":"object","name":"Column","id":"p265583","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p265580","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p265579","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p265572","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p265443"},{"type":"object","name":"PanTool","id":"p265519"}]}},{"type":"object","name":"ToolProxy","id":"p265573","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p265444","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p265520","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p265574","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p265445","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p265446","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p265452","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p265451","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p265521","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p265522","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p265528","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p265527","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p265575","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p265453"},{"type":"object","name":"ResetTool","id":"p265529"}]}},{"type":"object","name":"SaveTool","id":"p265576"},{"type":"object","name":"ToolProxy","id":"p265577","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p265495","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p265578","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p265571","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p265421","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p265422"},"y_range":{"type":"object","name":"DataRange1d","id":"p265423"},"x_scale":{"type":"object","name":"LinearScale","id":"p265431"},"y_scale":{"type":"object","name":"LogScale","id":"p265432"},"title":{"type":"object","name":"Title","id":"p265424","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p265461","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265455","attributes":{"selected":{"type":"object","name":"Selection","id":"p265456","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265457"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////+Uwvf2qelpf07K/nG3tjYeLMnzyv7WTNnCj6KeAkSd0t4+sKegYHBgev6c5D84vBTz+zPnjlzJ+zNUxC/+Cf/UxDfpmH7E5A6BUOOJ/bpaWnLfEQfg8R5Nlc/AvOnpD60Z2RgePDhyz2QuoS0tHsg+R7n7jsg/o5fMbft/wPBJd9b9qlpade4J98E8e3NO2+C7e90vEE0DdS3f+776/YzgeDsqusgc+779yJooDsYNGOu258B2i+ffA2kLvHw5atgd/UfQtBAffWOCVdB+sE0UP7A579XcNJAdfL6d6+Aws2u4BxYncPDKhS6YbIEmA+mgfbePPf9MoiOFIi4DLb/6YVLIFrgge4lsL0HTl0E8RfMnAmmGf5duQCnZ8+c+VMj5jzY/Vefn7M3NDZuXrftFMhfISfYj9r/A+qfnneIavQfoINWyxwCu3eX5wF7YCSymdnstTcyNnaujNhhfxKYDt5bbIWGzxacNNBd8hGWW0DuAtO///+P31OyGU5PnDmzcqrzZvtkYEAqOG60/wWMz7J96+H0kTNn5lwzWW//Deg/e9N19pNmzmz02L/W/u////Ol9NfaJwLTz9WwNfY/gOY+XrraPi4tTc9n2SqQfftLJq+A0/FpaWqPIpaDzK235cKkPwHTH8eaOfYAi/xwrCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265462","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265463"}}},"glyph":{"type":"object","name":"Line","id":"p265458","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265459","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p265460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p265470","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265464","attributes":{"selected":{"type":"object","name":"Selection","id":"p265465","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265466"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////+Uwvf2qelpf07K/nG3tjYeLMnzyv7WTNnCj6KeAkSd0t4+sKegYHBgev6c5D84vBTz+zPnjlzJ+zNUxC/+Cf/UxDfpmH7E5A6BUOOJ/bpaWnLfEQfg8R5Nlc/AvOnpD60Z2RgePDhyz2QuoS0tHsg+R7n7jsg/o5fMbft/wPBJd9b9qlpade4J98E8e3NO2+C7e90vEE0DdS3f+776/YzgeDsqusgc+779yJooDsYNGOu258B2i+ffA2kLvHw5atgd/UfQtBAffWOCVdB+sE0UP7A579XcNJAdfL6d6+Aws2u4BxYncPDKhS6YbIEmA+mgfbePPf9MoiOFIi4DLb/6YVLIFrgge4lsL0HTl0E8RfMnAmmGf5duQCnZ8+c+VMj5jzY/Vefn7M3NDZuXrftFMhfISfYj9r/A+qfnneIavQfoINWyxwCu3eX5wF7YCSymdnstTcyNnaujNhhfxKYDt5bbIWGzxacNNBd8hGWW0DuAtO///+P31OyGU5PnDmzcqrzZvtkYEAqOG60/wWMz7J96+H0kTNn5lwzWW//Deg/e9N19pNmzmz02L/W/u////Ol9NfaJwLTz9WwNfY/gOY+XrraPi4tTc9n2SqQfftLJq+A0/FpaWqPIpaDzK235cKkPwHTH8eaOfYAi/xwrCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265471","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265472"}}},"glyph":{"type":"object","name":"Line","id":"p265467","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265468","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p265469","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p265481","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265475","attributes":{"selected":{"type":"object","name":"Selection","id":"p265476","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265477"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UO0wUURiFTUywEGOEGCXGLD4WH6DyZnntnn2/2MfMzu6MBTZaYYONNlhRUWGjFRU22GhFRYUNVthgg4VaUaEFJgYb3fn5tpnM5N77n/OdczcWWT4ain1LxOz5K/HUX38eXfjD+79E+DWyfFon38/I3era7HfO6mT9ea1uH19eW72gk3XdehFdaJ9wkfWX9Ghl//XGfA/7rihzWNp7n7nK/ojebMy3V/RyzjXZ8pXrnHdDLzt3d74v3eTcqJ7FOw4eL/Zx/i09WQw/3GbOHQWhfP8u8/oVTjssDTD3nmx7/D7zH6hnLXQwiI5BdbfdbXUNoWdINr5zGF3Dsu0dI+gb0Sn7jaJzVH/bNLaPR9E7pt8hvqMxdI/rpwkaR/+E7LiDCXzE9GMpnBjDz6S+hjj2J/E1pS+hnb0p/E3rcyhvdxqfM7LXnRn8zsri2Z7Fd1wW31Yc/wmZ3c0EHMQcwUPME1ySClf3O0n4JGV4dpNwSqlsvFPwSumT6UnBLa2s5Z+GX1ofTV8ajhklDHAGnhn0ZuCaQXcWvln0Z+Gc1bAVMwfvnD5Y4XJwz2nADOThn5fVbyNPDnlZfaMF8ijI6rReIJeC7JpEiuRTlNVnrUhORTiW4FiCYwmOJTiWya+sVxZQmRzLOmdA58hzDo5z5DoHxwr5VuBYIecKHKvkXYVjFY5VOFbhWINjDY41ONbwUWddHT911tfxVWdfHX919tfx6ZCHQ28c2XVddOiPQz4OPXJk9Th06JNLXi69cmXxLLhwcfXO8nPpmUuOLpwa6rMNDXrXINcG3Bp6a/k26GGDnBtw9NRreXv00pONm/fg6pG/B19P9ve178HZg2MTjk2ZfL8JxyYcm3Bsyq7PXhOOTTi24NiCY4t+t+hPC44tOLboe4s++XD04ejTfx+OPvfAh6MPRx+OAfcioHcBHAM4BtyTAI4BHAM4PtR/bDiJBmgGAAA="},"shape":[205],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////+Uwvf2jMwMDxQM3wDoh1M416BaIY1MhD6asVLEL/BMQFML5DSB9MPVNggtG/SC7A+ruvPkekGsZvPwOrfLwfTDJd9wfQBb/OnyDTDvytPwPJQ+kDJZDBfwZADhV7wtuYxWLz5wCNkGmgumN9gbwqhD319YM8IFNCMuQ+iHbacuAenQfYvdL1n/x/o7zNn7oD0OTysugPix+/yBNP2xsa3QfT/S763sNH25p03weqw0SDzOh1vgM2lBQ20d//c99dB9oNpkH/K9oH59/17CdOQcLkODR+w+npbLjBtv+3zVTgNNDeh/9BVkPl4aZB+xwSwPqw0yH2f/14Bu5MSGmi+vP7dKyB7UGhI/IHNB8YjXrphsgRYnhD9YPmxyyB1MDrh6YVL4HBAox/8rAOLK7S+vgj2/4FTCBoovmDmzIsgeRgNTN8XQHys9F9g+rO+fx4ULwkp1gga5F6xm+fA/uNYcwbsrp91p+z/AdX3HzoK4gPD9QiIXz8979CQoSHhdRAUbv+vLT4ADhegV+x/Avk6m/aC/Tfx7R5wuAtE7LT/A4z3m+e22/8G+3sr1N9bKKaB9shHWG4B2YeXBtm7p2Qz2H58NCge+XQ3gdTtL8rYCPXfBvtfQH7ZvvUE6W/AeLQ3XWePiwaaP19Kf609LvoH0P7HS1fb46K/AMN3tcwqkH/3l0xeQZAGuhtYPiwHuZss+hOwXOFYM8ceAPN596BoBgAA"},"shape":[205],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265482","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265483"}}},"glyph":{"type":"object","name":"Line","id":"p265478","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265479","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p265480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p265491","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265485","attributes":{"selected":{"type":"object","name":"Selection","id":"p265486","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265487"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p265492","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265493"}}},"glyph":{"type":"object","name":"Line","id":"p265488","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p265490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p265430","attributes":{"tools":[{"id":"p265443"},{"id":"p265444"},{"id":"p265445"},{"id":"p265453"},{"type":"object","name":"SaveTool","id":"p265454"},{"id":"p265495"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p265438","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p265439","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p265440"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p265441"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p265433","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p265434","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p265435"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p265436"}}}],"center":[{"type":"object","name":"Grid","id":"p265437","attributes":{"axis":{"id":"p265433"}}},{"type":"object","name":"Grid","id":"p265442","attributes":{"dimension":1,"axis":{"id":"p265438"}}},{"type":"object","name":"Legend","id":"p265473","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p265474","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p265470"}]}},{"type":"object","name":"LegendItem","id":"p265484","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p265481"}]}},{"type":"object","name":"LegendItem","id":"p265494","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p265491"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p265496","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p265506","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p265498"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p265507"},"y_scale":{"type":"object","name":"LinearScale","id":"p265508"},"title":{"type":"object","name":"Title","id":"p265499","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p265537","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265531","attributes":{"selected":{"type":"object","name":"Selection","id":"p265532","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265533"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC724W2/Gq5yb9p0dHX9EXZ/Yl5yzdM8wum7vxKF4REryir2zi8uU98uP2T+dU3zuaNQ2+1///88/+GmVPcw8AAfhC65gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265538","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265539"}}},"glyph":{"type":"object","name":"Line","id":"p265534","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265535","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p265536","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p265546","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265540","attributes":{"selected":{"type":"object","name":"Selection","id":"p265541","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265542"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC724W2/Gq5yb9p0dHX9EXZ/Yl5yzdM8wum7vxKF4REryir2zi8uU98uP2T+dU3zuaNQ2+1///88/+GmVPcw8AAfhC65gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265547","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265548"}}},"glyph":{"type":"object","name":"Line","id":"p265543","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265544","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p265545","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p265557","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265551","attributes":{"selected":{"type":"object","name":"Selection","id":"p265552","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265553"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC724W2/Gq5yb9p0dHX9EXZ/Yl5yzdM8wum7vxKF4REryir2zi8uU98uP2T+dU3zuaNQ2+1///88/+GmVPcw8AAfhC65gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265558","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265559"}}},"glyph":{"type":"object","name":"Line","id":"p265554","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265555","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p265556","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p265567","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265561","attributes":{"selected":{"type":"object","name":"Selection","id":"p265562","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265563"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p265568","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265569"}}},"glyph":{"type":"object","name":"Line","id":"p265564","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265565","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p265566","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p265505","attributes":{"tools":[{"id":"p265519"},{"id":"p265520"},{"id":"p265521"},{"id":"p265529"},{"type":"object","name":"SaveTool","id":"p265530"},{"id":"p265571"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p265514","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p265515","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p265516"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p265517"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p265509","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p265510"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p265511"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p265512"}}}],"center":[{"type":"object","name":"Grid","id":"p265513","attributes":{"axis":{"id":"p265509"}}},{"type":"object","name":"Grid","id":"p265518","attributes":{"dimension":1,"axis":{"id":"p265514"}}},{"type":"object","name":"Legend","id":"p265549","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p265550","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p265546"}]}},{"type":"object","name":"LegendItem","id":"p265560","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p265557"}]}},{"type":"object","name":"LegendItem","id":"p265570","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p265567"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p265582","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"788ce329-2ce5-4125-b583-2f2bee2c521d","roots":{"p265583":"fe3af10e-bce8-4e11-833d-cd475f264186"},"root_ids":["p265583"]}];
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