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
    
    
    const element = document.getElementById("b3130d82-36f4-4b60-a442-c58c866c1595");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b3130d82-36f4-4b60-a442-c58c866c1595' but no matching script tag was found.")
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
                  const docs_json = '{"9f174f05-deac-4c31-acf8-1f573cedb975":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p234635","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p234636"}}},"roots":[{"type":"object","name":"Column","id":"p234799","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p234796","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p234795","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p234788","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p234659"},{"type":"object","name":"PanTool","id":"p234735"}]}},{"type":"object","name":"ToolProxy","id":"p234789","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p234660","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p234736","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p234790","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p234661","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p234662","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p234668","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p234667","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p234737","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p234738","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p234744","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p234743","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p234791","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p234669"},{"type":"object","name":"ResetTool","id":"p234745"}]}},{"type":"object","name":"SaveTool","id":"p234792"},{"type":"object","name":"ToolProxy","id":"p234793","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p234711","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p234794","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p234787","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p234637","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p234638"},"y_range":{"type":"object","name":"DataRange1d","id":"p234639"},"x_scale":{"type":"object","name":"LinearScale","id":"p234647"},"y_scale":{"type":"object","name":"LogScale","id":"p234648"},"title":{"type":"object","name":"Title","id":"p234640","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p234677","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p234671","attributes":{"selected":{"type":"object","name":"Selection","id":"p234672","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p234673"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/4VSX0hTcRS+uqxYgyQR+kcsAlPT0n4Tehnn+mIgk7GHIM1iaV1MehCFPZi5QVH0UAsyako4CYuBopaTTWNOi4i6pU1zGeZcohFYMtZW6uzXOZfYSw/el+/+zv2+75zz3Z8gCGZJKhQlSXopaxTMqrQXEPr2pRWIjLGJh3WHRUEQxmVDvvhOluVY9iGx1YHPrlziLZo82eJRxqLcelBMEQTUZNF31/HwAdL5Lb79pNNVbtcSf7Mg7CXeuCzvFNGl3D6aSTwhpzJDfCvLS4GyHaKOser0k+lUt+nV20g3EF3fQj5dkUAa8RKuiIr0K821qcRz1ulTSPf0wTIH7L/SBBxonhvFCTgvSXGTZxWQJ6qDvwD9piy+2L9zFBKcjwmzEapL7sxlqpvnO78D7s9Cxm9QxNiV5rVF8nXsPrJAmFN6aZ54fm3vF6hG3UxJmM5zZVVzhPSaRBXOFwl8Jr87hswZKMS8Rs99ArTz1tdMA+cc2k4ElXnCjZNwz+GY3tP0HjAsW8WEDLivIeZ9DRh/3m3nK9rLVvvsBc1bog4+hzeY2ybdCNxHv6tNfprP2/1xGP5wbr34dYh0Bk3qEPWx+toH4Szqis4MUv/ya8cGiGcvNruVfaLr/UlEX42xp5/ygXDj/5jPWEZD8Amsc95zYbYP1jgfrq/pg1XOjeaFXviNuuHL3cpeW7u6koiXLv6z1AVxzkPGm4+hBe/L2IdH5MNzr2+MuYyp9G2dEFX6dUAFBqEt7qC+obIq54a4hP/b4muHU5hD3mQrnMZ73OC+Cz+UPVuSOIV+Js8t+AtyBjMtKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p234678","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p234679"}}},"glyph":{"type":"object","name":"Line","id":"p234674","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p234675","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p234676","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p234686","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p234680","attributes":{"selected":{"type":"object","name":"Selection","id":"p234681","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p234682"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/4VSX0hTcRS+uqxYgyQR+kcsAlPT0n4Tehnn+mIgk7GHIM1iaV1MehCFPZi5QVH0UAsyako4CYuBopaTTWNOi4i6pU1zGeZcohFYMtZW6uzXOZfYSw/el+/+zv2+75zz3Z8gCGZJKhQlSXopaxTMqrQXEPr2pRWIjLGJh3WHRUEQxmVDvvhOluVY9iGx1YHPrlziLZo82eJRxqLcelBMEQTUZNF31/HwAdL5Lb79pNNVbtcSf7Mg7CXeuCzvFNGl3D6aSTwhpzJDfCvLS4GyHaKOser0k+lUt+nV20g3EF3fQj5dkUAa8RKuiIr0K821qcRz1ulTSPf0wTIH7L/SBBxonhvFCTgvSXGTZxWQJ6qDvwD9piy+2L9zFBKcjwmzEapL7sxlqpvnO78D7s9Cxm9QxNiV5rVF8nXsPrJAmFN6aZ54fm3vF6hG3UxJmM5zZVVzhPSaRBXOFwl8Jr87hswZKMS8Rs99ArTz1tdMA+cc2k4ElXnCjZNwz+GY3tP0HjAsW8WEDLivIeZ9DRh/3m3nK9rLVvvsBc1bog4+hzeY2ybdCNxHv6tNfprP2/1xGP5wbr34dYh0Bk3qEPWx+toH4Szqis4MUv/ya8cGiGcvNruVfaLr/UlEX42xp5/ygXDj/5jPWEZD8Amsc95zYbYP1jgfrq/pg1XOjeaFXviNuuHL3cpeW7u6koiXLv6z1AVxzkPGm4+hBe/L2IdH5MNzr2+MuYyp9G2dEFX6dUAFBqEt7qC+obIq54a4hP/b4muHU5hD3mQrnMZ73OC+Cz+UPVuSOIV+Js8t+AtyBjMtKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p234687","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p234688"}}},"glyph":{"type":"object","name":"Line","id":"p234683","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p234684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p234685","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p234697","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p234691","attributes":{"selected":{"type":"object","name":"Selection","id":"p234692","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p234693"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UO0wUURSGjQ0NicTENSYGlYCPKE8XZGFhz74fs495z4CVJVSW0tFBZwcdnXZ20tFpZwednVjRqRWFBbnnfH+zmdl77/nOd27m4tzlsnKhv/8qZc1/nm/LgWZM7P24fNBMiK2/K7Oae6y7L79/uTxg/UM5PnKZZN9j+fzJ5Qn7p+SWZppzZuTttstTznsmp19dnnPuC7mjecn5r2R3x2WWOnPyTTNPvQXWL1J3kX1L1F9i/2s4iqK4R0V4luW7nrcM14r8/eOyAt8bmdSswrkqnqYEb0n21NcaHOtwrMNRFtV+XoZjA45N+tmEo0JfFZ6F/oT3wvlVUX3bVepU4a1SryaHOs8a/dfgr1O/Th91OBr008BLQy51vg04mnA08dSEo4WvFhwtOFpwtPHXpv82HB3Rce504OjA0YWjC0cXv12Z0/vXw3MPjh4cHhweHB4cHhx9OPpw9OWRznOAjwEcAziGcAyZzxAfQ3yM8DFiLiPzPebzv2/eQ591vvV94rPet7pXPvyB1S8GzDUwjv2AfgLj+RHQV2B+CiH9hcb3LmTuoXF8CZl/aBzXIf4j81eP6D8yjo8RHiLj+BnhIzaOmRgvsXG8j5lTLBvuw3EW4ynGR4KPBB8JPhJ8JMwxsftwleAjFf0cFFPmmuIjxUeKjxQfqc2pkOEjw0fG3DN8ZMw/s3t0neEjx0fOvczxkeMjx0eOjy25Aa4Ef9JQBQAA"},"shape":[170],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/63RX0jTURQH8Jm1hoGMGqJEc1HZWhmFz3L3ticJ3yKCxojRgw8iPu1Fexg+1R4s4keQCzEVlswyGP3bGhL9+QUVMVlF/pbOVdKCxhJb69f5nt/d0moQ1H35cM7v3HPPvT+TyeT1+w+7TXDpEEyoKuvu6GDDSotUOWjU+Su2u+u4ruJ+fKdV0eXWdT2uqvtk3injvdI2ub9Nft8j+++CNMdOtjjB0jkOGFaUHdLt0hZIq1naBGm/DdK+bZDuuRWGeztZR3DZCmk1wsHOhi1Q645ZOLZNbYZUb5ZzbkJMayPURnvrYaLo3ACpvo5jVTVBLEh5XRjvpIt6miNmLwsjX4I0H0v3WuW4YW5F5lmqL8p8Ya1awPaZ+/TkPqF/2JPJc31je17Qu5+I2T8i1kqT72VdDlLdEteFkllI8y6y9uACdBw7ySYc0bdrdVsiGmKty7dOpJD/1cGm9BvMQf//NfcpOllt/P4rSO/6klWUNOpapzxpxPRec4h111AKsTsTeMHfj4ee457abvMzUabEgWtPuK89+BjxiCfzCLHXevQh10f7HvD3QnlW9plFfmC4mWNv9mlS9ruHvJ4aTYjvuj7f5fvpKp9zB/mBntytquhzd+Qm9/uTX3Vd+KwxUaL/EEreqGrMMyPnqu032p8JzIi/Fefc7r+O+VqDy9NVKR/vOzWN89dJ89E9o8K431V+H0skUtMVel9FmUTfeP/whPhC+4+cGa+K/+EausL/5X9YpHuYT4+JAs99+TdpHuHNhoVxj3+Xzpnvjl0SH+gdF8Yuind8vwvCmOO8yPP/OFfTFO8/K34AJBz9J1AFAAA="},"shape":[170],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p234698","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p234699"}}},"glyph":{"type":"object","name":"Line","id":"p234694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p234695","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p234696","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p234707","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p234701","attributes":{"selected":{"type":"object","name":"Selection","id":"p234702","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p234703"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p234708","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p234709"}}},"glyph":{"type":"object","name":"Line","id":"p234704","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p234705","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p234706","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p234646","attributes":{"tools":[{"id":"p234659"},{"id":"p234660"},{"id":"p234661"},{"id":"p234669"},{"type":"object","name":"SaveTool","id":"p234670"},{"id":"p234711"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p234654","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p234655","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p234656"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p234657"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p234649","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p234650","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p234651"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p234652"}}}],"center":[{"type":"object","name":"Grid","id":"p234653","attributes":{"axis":{"id":"p234649"}}},{"type":"object","name":"Grid","id":"p234658","attributes":{"dimension":1,"axis":{"id":"p234654"}}},{"type":"object","name":"Legend","id":"p234689","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p234690","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p234686"}]}},{"type":"object","name":"LegendItem","id":"p234700","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p234697"}]}},{"type":"object","name":"LegendItem","id":"p234710","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p234707"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p234712","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p234722","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p234714"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p234723"},"y_scale":{"type":"object","name":"LinearScale","id":"p234724"},"title":{"type":"object","name":"Title","id":"p234715","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p234753","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p234747","attributes":{"selected":{"type":"object","name":"Selection","id":"p234748","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p234749"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFLQ50MDkMLf43ME1ysoOZ8+c8Zp44rl97/WAZ8Xea+x37d6tfeLRRnsXFxf55S/e2KPrh/EB9hHqqmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p234754","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p234755"}}},"glyph":{"type":"object","name":"Line","id":"p234750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p234751","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p234752","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p234762","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p234756","attributes":{"selected":{"type":"object","name":"Selection","id":"p234757","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p234758"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFLQ50MDkMLf43ME1ysoOZ8+c8Zp44rl97/WAZ8Xea+x37d6tfeLRRnsXFxf55S/e2KPrh/EB9hHqqmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p234763","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p234764"}}},"glyph":{"type":"object","name":"Line","id":"p234759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p234760","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p234761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p234773","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p234767","attributes":{"selected":{"type":"object","name":"Selection","id":"p234768","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p234769"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFLQ50MDkMLf43ME1ysoOZ8+c8Zp44rl97/WAZ8Xea+x37d6tfeLRRnsXFxf55S/e2KPrh/EB9hHqqmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p234774","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p234775"}}},"glyph":{"type":"object","name":"Line","id":"p234770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p234771","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p234772","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p234783","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p234777","attributes":{"selected":{"type":"object","name":"Selection","id":"p234778","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p234779"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p234784","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p234785"}}},"glyph":{"type":"object","name":"Line","id":"p234780","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p234781","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p234782","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p234721","attributes":{"tools":[{"id":"p234735"},{"id":"p234736"},{"id":"p234737"},{"id":"p234745"},{"type":"object","name":"SaveTool","id":"p234746"},{"id":"p234787"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p234730","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p234731","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p234732"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p234733"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p234725","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p234726"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p234727"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p234728"}}}],"center":[{"type":"object","name":"Grid","id":"p234729","attributes":{"axis":{"id":"p234725"}}},{"type":"object","name":"Grid","id":"p234734","attributes":{"dimension":1,"axis":{"id":"p234730"}}},{"type":"object","name":"Legend","id":"p234765","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p234766","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p234762"}]}},{"type":"object","name":"LegendItem","id":"p234776","attributes":{"label":{"type":"value","value":"Median Year (1982)"},"renderers":[{"id":"p234773"}]}},{"type":"object","name":"LegendItem","id":"p234786","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p234783"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p234798","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"9f174f05-deac-4c31-acf8-1f573cedb975","roots":{"p234799":"b3130d82-36f4-4b60-a442-c58c866c1595"},"root_ids":["p234799"]}];
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