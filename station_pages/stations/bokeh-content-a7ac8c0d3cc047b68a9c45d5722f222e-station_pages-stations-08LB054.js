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
    
    
    const element = document.getElementById("f46bd0b5-5d86-4145-ae71-3277cac6f591");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f46bd0b5-5d86-4145-ae71-3277cac6f591' but no matching script tag was found.")
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
                  const docs_json = '{"03f2d237-0a53-49b6-8335-6744b9498ff6":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p461589","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p461590"}}},"roots":[{"type":"object","name":"Column","id":"p461753","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p461750","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p461749","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p461742","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p461613"},{"type":"object","name":"PanTool","id":"p461689"}]}},{"type":"object","name":"ToolProxy","id":"p461743","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p461614","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p461690","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p461744","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p461615","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p461616","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p461622","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p461621","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p461691","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p461692","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p461698","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p461697","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p461745","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p461623"},{"type":"object","name":"ResetTool","id":"p461699"}]}},{"type":"object","name":"SaveTool","id":"p461746"},{"type":"object","name":"ToolProxy","id":"p461747","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p461665","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p461748","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p461741","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p461591","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p461592"},"y_range":{"type":"object","name":"DataRange1d","id":"p461593"},"x_scale":{"type":"object","name":"LinearScale","id":"p461601"},"y_scale":{"type":"object","name":"LogScale","id":"p461602"},"title":{"type":"object","name":"Title","id":"p461594","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p461631","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461625","attributes":{"selected":{"type":"object","name":"Selection","id":"p461626","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461627"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////+Uwvf2qelpf07K/nG3tjYeLMnzyv7WTNnCj6KeAkSd0t4+sKegYHBgev6c5D84vBTz+zPnjlzJ+zNUxC/+Cf/UxDfpmH7E5A6BUOOJ/bpaWnLfEQfg8R5Nlc/AvOnpD60Z2RgePDhyz2QuoS0tHsg+R7n7jsg/o5fMbft/wPBJd9b9qlpade4J98E8e3NO2+C7e90vEE0DdS3f+776/YzgeDsqusgc+779yJooDsYNGOu258B2i+ffA2kLvHw5atgd/UfQtBAffWOCVdB+sE0UP7A579XcNJAdfL6d6+Aws2u4BxYncPDKhS6YbIEmA+mgfbePPf9MoiOFIi4DLb/6YVLIFrgge4lsL0HTl0E8RfMnAmmGf5duQCnZ8+c+VMj5jzY/Vefn7M3NDZuXrftFMhfISfYj9r/A+qfnneIavQfoINWyxwCu3eX5wF7YCSymdnstTcyNnaujNhhfxKYDt5bbIWGzxacNNBd8hGWW0DuAtO///+P31OyGU5PnDmzcqrzZvtkYEAqOG60/wWMz7J96+H0kTNn5lwzWW//Deg/e9N19pNmzmz02L/W/u////Ol9NfaJwLTz9WwNfY/gOY+XrraPi4tTc9n2SqQfftLJq+A0/FpaWqPIpaDzK235cKkPwHTH8eaOfYAi/xwrCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461632","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461633"}}},"glyph":{"type":"object","name":"Line","id":"p461628","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461629","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p461630","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p461640","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461634","attributes":{"selected":{"type":"object","name":"Selection","id":"p461635","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461636"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////+Uwvf2qelpf07K/nG3tjYeLMnzyv7WTNnCj6KeAkSd0t4+sKegYHBgev6c5D84vBTz+zPnjlzJ+zNUxC/+Cf/UxDfpmH7E5A6BUOOJ/bpaWnLfEQfg8R5Nlc/AvOnpD60Z2RgePDhyz2QuoS0tHsg+R7n7jsg/o5fMbft/wPBJd9b9qlpade4J98E8e3NO2+C7e90vEE0DdS3f+776/YzgeDsqusgc+779yJooDsYNGOu258B2i+ffA2kLvHw5atgd/UfQtBAffWOCVdB+sE0UP7A579XcNJAdfL6d6+Aws2u4BxYncPDKhS6YbIEmA+mgfbePPf9MoiOFIi4DLb/6YVLIFrgge4lsL0HTl0E8RfMnAmmGf5duQCnZ8+c+VMj5jzY/Vefn7M3NDZuXrftFMhfISfYj9r/A+qfnneIavQfoINWyxwCu3eX5wF7YCSymdnstTcyNnaujNhhfxKYDt5bbIWGzxacNNBd8hGWW0DuAtO///+P31OyGU5PnDmzcqrzZvtkYEAqOG60/wWMz7J96+H0kTNn5lwzWW//Deg/e9N19pNmzmz02L/W/u////Ol9NfaJwLTz9WwNfY/gOY+XrraPi4tTc9n2SqQfftLJq+A0/FpaWqPIpaDzK235cKkPwHTH8eaOfYAi/xwrCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461641","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461642"}}},"glyph":{"type":"object","name":"Line","id":"p461637","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461638","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p461639","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p461651","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461645","attributes":{"selected":{"type":"object","name":"Selection","id":"p461646","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461647"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UO0wUURiFTUywEGOEGCXGLD4WH6DyZnntnn2/2MfMzu6MBTZaYYONNlhRUWGjFRU22GhFRYUNVthgg4VaUaEFJgYb3fn5tpnM5N77n/OdczcWWT4ain1LxOz5K/HUX38eXfjD+79E+DWyfFon38/I3era7HfO6mT9ea1uH19eW72gk3XdehFdaJ9wkfWX9Ghl//XGfA/7rihzWNp7n7nK/ojebMy3V/RyzjXZ8pXrnHdDLzt3d74v3eTcqJ7FOw4eL/Zx/i09WQw/3GbOHQWhfP8u8/oVTjssDTD3nmx7/D7zH6hnLXQwiI5BdbfdbXUNoWdINr5zGF3Dsu0dI+gb0Sn7jaJzVH/bNLaPR9E7pt8hvqMxdI/rpwkaR/+E7LiDCXzE9GMpnBjDz6S+hjj2J/E1pS+hnb0p/E3rcyhvdxqfM7LXnRn8zsri2Z7Fd1wW31Yc/wmZ3c0EHMQcwUPME1ySClf3O0n4JGV4dpNwSqlsvFPwSumT6UnBLa2s5Z+GX1ofTV8ajhklDHAGnhn0ZuCaQXcWvln0Z+Gc1bAVMwfvnD5Y4XJwz2nADOThn5fVbyNPDnlZfaMF8ijI6rReIJeC7JpEiuRTlNVnrUhORTiW4FiCYwmOJTiWya+sVxZQmRzLOmdA58hzDo5z5DoHxwr5VuBYIecKHKvkXYVjFY5VOFbhWINjDY41ONbwUWddHT911tfxVWdfHX919tfx6ZCHQ28c2XVddOiPQz4OPXJk9Th06JNLXi69cmXxLLhwcfXO8nPpmUuOLpwa6rMNDXrXINcG3Bp6a/k26GGDnBtw9NRreXv00pONm/fg6pG/B19P9ve178HZg2MTjk2ZfL8JxyYcm3Bsyq7PXhOOTTi24NiCY4t+t+hPC44tOLboe4s++XD04ejTfx+OPvfAh6MPRx+OAfcioHcBHAM4BtyTAI4BHAM4PtR/bDiJBmgGAAA="},"shape":[205],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////+Uwvf2jMwMDxQM3wDoh1M416BaIY1MhD6asVLEL/BMQFML5DSB9MPVNggtG/SC7A+ruvPkekGsZvPwOrfLwfTDJd9wfQBb/OnyDTDvytPwPJQ+kDJZDBfwZADhV7wtuYxWLz5wCNkGmgumN9gbwqhD319YM8IFNCMuQ+iHbacuAenQfYvdL1n/x/o7zNn7oD0OTysugPix+/yBNP2xsa3QfT/S763sNH25p03weqw0SDzOh1vgM2lBQ20d//c99dB9oNpkH/K9oH59/17CdOQcLkODR+w+npbLjBtv+3zVTgNNDeh/9BVkPl4aZB+xwSwPqw0yH2f/14Bu5MSGmi+vP7dKyB7UGhI/IHNB8YjXrphsgRYnhD9YPmxyyB1MDrh6YVL4HBAox/8rAOLK7S+vgj2/4FTCBoovmDmzIsgeRgNTN8XQHys9F9g+rO+fx4ULwkp1gga5F6xm+fA/uNYcwbsrp91p+z/AdX3HzoK4gPD9QiIXz8979CQoSHhdRAUbv+vLT4ADhegV+x/Avk6m/aC/Tfx7R5wuAtE7LT/A4z3m+e22/8G+3sr1N9bKKaB9shHWG4B2YeXBtm7p2Qz2H58NCge+XQ3gdTtL8rYCPXfBvtfQH7ZvvUE6W/AeLQ3XWePiwaaP19Kf609LvoH0P7HS1fb46K/AMN3tcwqkH/3l0xeQZAGuhtYPiwHuZss+hOwXOFYM8ceAPN596BoBgAA"},"shape":[205],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461652","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461653"}}},"glyph":{"type":"object","name":"Line","id":"p461648","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461649","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p461650","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p461661","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461655","attributes":{"selected":{"type":"object","name":"Selection","id":"p461656","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461657"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p461662","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461663"}}},"glyph":{"type":"object","name":"Line","id":"p461658","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461659","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p461660","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p461600","attributes":{"tools":[{"id":"p461613"},{"id":"p461614"},{"id":"p461615"},{"id":"p461623"},{"type":"object","name":"SaveTool","id":"p461624"},{"id":"p461665"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p461608","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p461609","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p461610"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p461611"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p461603","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p461604","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p461605"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p461606"}}}],"center":[{"type":"object","name":"Grid","id":"p461607","attributes":{"axis":{"id":"p461603"}}},{"type":"object","name":"Grid","id":"p461612","attributes":{"dimension":1,"axis":{"id":"p461608"}}},{"type":"object","name":"Legend","id":"p461643","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p461644","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p461640"}]}},{"type":"object","name":"LegendItem","id":"p461654","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p461651"}]}},{"type":"object","name":"LegendItem","id":"p461664","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p461661"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p461666","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p461676","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p461668"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p461677"},"y_scale":{"type":"object","name":"LinearScale","id":"p461678"},"title":{"type":"object","name":"Title","id":"p461669","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p461707","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461701","attributes":{"selected":{"type":"object","name":"Selection","id":"p461702","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461703"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC724W2/Gq5yb9p0dHX9EXZ/Yl5yzdM8wum7vxKF4REryir2zi8uU98uP2T+dU3zuaNQ2+1///88/+GmVPcw8AAfhC65gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461708","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461709"}}},"glyph":{"type":"object","name":"Line","id":"p461704","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461705","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p461706","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p461716","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461710","attributes":{"selected":{"type":"object","name":"Selection","id":"p461711","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461712"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC724W2/Gq5yb9p0dHX9EXZ/Yl5yzdM8wum7vxKF4REryir2zi8uU98uP2T+dU3zuaNQ2+1///88/+GmVPcw8AAfhC65gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461717","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461718"}}},"glyph":{"type":"object","name":"Line","id":"p461713","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461714","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p461715","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p461727","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461721","attributes":{"selected":{"type":"object","name":"Selection","id":"p461722","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461723"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC724W2/Gq5yb9p0dHX9EXZ/Yl5yzdM8wum7vxKF4REryir2zi8uU98uP2T+dU3zuaNQ2+1///88/+GmVPcw8AAfhC65gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461728","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461729"}}},"glyph":{"type":"object","name":"Line","id":"p461724","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461725","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p461726","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p461737","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461731","attributes":{"selected":{"type":"object","name":"Selection","id":"p461732","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461733"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p461738","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461739"}}},"glyph":{"type":"object","name":"Line","id":"p461734","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461735","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p461736","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p461675","attributes":{"tools":[{"id":"p461689"},{"id":"p461690"},{"id":"p461691"},{"id":"p461699"},{"type":"object","name":"SaveTool","id":"p461700"},{"id":"p461741"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p461684","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p461685","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p461686"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p461687"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p461679","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p461680"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p461681"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p461682"}}}],"center":[{"type":"object","name":"Grid","id":"p461683","attributes":{"axis":{"id":"p461679"}}},{"type":"object","name":"Grid","id":"p461688","attributes":{"dimension":1,"axis":{"id":"p461684"}}},{"type":"object","name":"Legend","id":"p461719","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p461720","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p461716"}]}},{"type":"object","name":"LegendItem","id":"p461730","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p461727"}]}},{"type":"object","name":"LegendItem","id":"p461740","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p461737"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p461752","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"03f2d237-0a53-49b6-8335-6744b9498ff6","roots":{"p461753":"f46bd0b5-5d86-4145-ae71-3277cac6f591"},"root_ids":["p461753"]}];
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