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
    
    
    const element = document.getElementById("da0fba45-ed3c-4068-abeb-f51b88f33352");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'da0fba45-ed3c-4068-abeb-f51b88f33352' but no matching script tag was found.")
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
                  const docs_json = '{"93cdd4c7-b2c0-4ea0-a1d9-22abf14cccb3":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p235192","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p235193"}}},"roots":[{"type":"object","name":"Column","id":"p235356","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p235353","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p235352","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p235345","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p235216"},{"type":"object","name":"PanTool","id":"p235292"}]}},{"type":"object","name":"ToolProxy","id":"p235346","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p235217","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p235293","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p235347","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p235218","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p235219","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p235225","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p235224","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p235294","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p235295","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p235301","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p235300","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p235348","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p235226"},{"type":"object","name":"ResetTool","id":"p235302"}]}},{"type":"object","name":"SaveTool","id":"p235349"},{"type":"object","name":"ToolProxy","id":"p235350","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p235268","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p235351","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p235344","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p235194","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p235195"},"y_range":{"type":"object","name":"DataRange1d","id":"p235196"},"x_scale":{"type":"object","name":"LinearScale","id":"p235204"},"y_scale":{"type":"object","name":"LogScale","id":"p235205"},"title":{"type":"object","name":"Title","id":"p235197","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p235234","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p235228","attributes":{"selected":{"type":"object","name":"Selection","id":"p235229","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p235230"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/4VSX0hTcRS+uqxYgyQR+kcsAlPT0n4Tehnn+mIgk7GHIM1iaV1MehCFPZi5QVH0UAsyako4CYuBopaTTWNOi4i6pU1zGeZcohFYMtZW6uzXOZfYSw/el+/+zv2+75zz3Z8gCGZJKhQlSXopaxTMqrQXEPr2pRWIjLGJh3WHRUEQxmVDvvhOluVY9iGx1YHPrlziLZo82eJRxqLcelBMEQTUZNF31/HwAdL5Lb79pNNVbtcSf7Mg7CXeuCzvFNGl3D6aSTwhpzJDfCvLS4GyHaKOser0k+lUt+nV20g3EF3fQj5dkUAa8RKuiIr0K821qcRz1ulTSPf0wTIH7L/SBBxonhvFCTgvSXGTZxWQJ6qDvwD9piy+2L9zFBKcjwmzEapL7sxlqpvnO78D7s9Cxm9QxNiV5rVF8nXsPrJAmFN6aZ54fm3vF6hG3UxJmM5zZVVzhPSaRBXOFwl8Jr87hswZKMS8Rs99ArTz1tdMA+cc2k4ElXnCjZNwz+GY3tP0HjAsW8WEDLivIeZ9DRh/3m3nK9rLVvvsBc1bog4+hzeY2ybdCNxHv6tNfprP2/1xGP5wbr34dYh0Bk3qEPWx+toH4Szqis4MUv/ya8cGiGcvNruVfaLr/UlEX42xp5/ygXDj/5jPWEZD8Amsc95zYbYP1jgfrq/pg1XOjeaFXviNuuHL3cpeW7u6koiXLv6z1AVxzkPGm4+hBe/L2IdH5MNzr2+MuYyp9G2dEFX6dUAFBqEt7qC+obIq54a4hP/b4muHU5hD3mQrnMZ73OC+Cz+UPVuSOIV+Js8t+AtyBjMtKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p235235","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p235236"}}},"glyph":{"type":"object","name":"Line","id":"p235231","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p235232","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p235233","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p235243","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p235237","attributes":{"selected":{"type":"object","name":"Selection","id":"p235238","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p235239"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/4VSX0hTcRS+uqxYgyQR+kcsAlPT0n4Tehnn+mIgk7GHIM1iaV1MehCFPZi5QVH0UAsyako4CYuBopaTTWNOi4i6pU1zGeZcohFYMtZW6uzXOZfYSw/el+/+zv2+75zz3Z8gCGZJKhQlSXopaxTMqrQXEPr2pRWIjLGJh3WHRUEQxmVDvvhOluVY9iGx1YHPrlziLZo82eJRxqLcelBMEQTUZNF31/HwAdL5Lb79pNNVbtcSf7Mg7CXeuCzvFNGl3D6aSTwhpzJDfCvLS4GyHaKOser0k+lUt+nV20g3EF3fQj5dkUAa8RKuiIr0K821qcRz1ulTSPf0wTIH7L/SBBxonhvFCTgvSXGTZxWQJ6qDvwD9piy+2L9zFBKcjwmzEapL7sxlqpvnO78D7s9Cxm9QxNiV5rVF8nXsPrJAmFN6aZ54fm3vF6hG3UxJmM5zZVVzhPSaRBXOFwl8Jr87hswZKMS8Rs99ArTz1tdMA+cc2k4ElXnCjZNwz+GY3tP0HjAsW8WEDLivIeZ9DRh/3m3nK9rLVvvsBc1bog4+hzeY2ybdCNxHv6tNfprP2/1xGP5wbr34dYh0Bk3qEPWx+toH4Szqis4MUv/ya8cGiGcvNruVfaLr/UlEX42xp5/ygXDj/5jPWEZD8Amsc95zYbYP1jgfrq/pg1XOjeaFXviNuuHL3cpeW7u6koiXLv6z1AVxzkPGm4+hBe/L2IdH5MNzr2+MuYyp9G2dEFX6dUAFBqEt7qC+obIq54a4hP/b4muHU5hD3mQrnMZ73OC+Cz+UPVuSOIV+Js8t+AtyBjMtKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p235244","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p235245"}}},"glyph":{"type":"object","name":"Line","id":"p235240","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p235241","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p235242","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p235254","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p235248","attributes":{"selected":{"type":"object","name":"Selection","id":"p235249","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p235250"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UO0wUURSGjQ0NicTENSYGlYCPKE8XZGFhz74fs495z4CVJVSW0tFBZwcdnXZ20tFpZwednVjRqRWFBbnnfH+zmdl77/nOd27m4tzlsnKhv/8qZc1/nm/LgWZM7P24fNBMiK2/K7Oae6y7L79/uTxg/UM5PnKZZN9j+fzJ5Qn7p+SWZppzZuTttstTznsmp19dnnPuC7mjecn5r2R3x2WWOnPyTTNPvQXWL1J3kX1L1F9i/2s4iqK4R0V4luW7nrcM14r8/eOyAt8bmdSswrkqnqYEb0n21NcaHOtwrMNRFtV+XoZjA45N+tmEo0JfFZ6F/oT3wvlVUX3bVepU4a1SryaHOs8a/dfgr1O/Th91OBr008BLQy51vg04mnA08dSEo4WvFhwtOFpwtPHXpv82HB3Rce504OjA0YWjC0cXv12Z0/vXw3MPjh4cHhweHB4cHhx9OPpw9OWRznOAjwEcAziGcAyZzxAfQ3yM8DFiLiPzPebzv2/eQ591vvV94rPet7pXPvyB1S8GzDUwjv2AfgLj+RHQV2B+CiH9hcb3LmTuoXF8CZl/aBzXIf4j81eP6D8yjo8RHiLj+BnhIzaOmRgvsXG8j5lTLBvuw3EW4ynGR4KPBB8JPhJ8JMwxsftwleAjFf0cFFPmmuIjxUeKjxQfqc2pkOEjw0fG3DN8ZMw/s3t0neEjx0fOvczxkeMjx0eOjy25Aa4Ef9JQBQAA"},"shape":[170],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/63RX0jTURQH8Jm1hoGMGqJEc1HZWhmFz3L3ticJ3yKCxojRgw8iPu1Fexg+1R4s4keQCzEVlswyGP3bGhL9+QUVMVlF/pbOVdKCxhJb69f5nt/d0moQ1H35cM7v3HPPvT+TyeT1+w+7TXDpEEyoKuvu6GDDSotUOWjU+Su2u+u4ruJ+fKdV0eXWdT2uqvtk3injvdI2ub9Nft8j+++CNMdOtjjB0jkOGFaUHdLt0hZIq1naBGm/DdK+bZDuuRWGeztZR3DZCmk1wsHOhi1Q645ZOLZNbYZUb5ZzbkJMayPURnvrYaLo3ACpvo5jVTVBLEh5XRjvpIt6miNmLwsjX4I0H0v3WuW4YW5F5lmqL8p8Ya1awPaZ+/TkPqF/2JPJc31je17Qu5+I2T8i1kqT72VdDlLdEteFkllI8y6y9uACdBw7ySYc0bdrdVsiGmKty7dOpJD/1cGm9BvMQf//NfcpOllt/P4rSO/6klWUNOpapzxpxPRec4h111AKsTsTeMHfj4ee457abvMzUabEgWtPuK89+BjxiCfzCLHXevQh10f7HvD3QnlW9plFfmC4mWNv9mlS9ruHvJ4aTYjvuj7f5fvpKp9zB/mBntytquhzd+Qm9/uTX3Vd+KwxUaL/EEreqGrMMyPnqu032p8JzIi/Fefc7r+O+VqDy9NVKR/vOzWN89dJ89E9o8K431V+H0skUtMVel9FmUTfeP/whPhC+4+cGa+K/+EausL/5X9YpHuYT4+JAs99+TdpHuHNhoVxj3+Xzpnvjl0SH+gdF8Yuind8vwvCmOO8yPP/OFfTFO8/K34AJBz9J1AFAAA="},"shape":[170],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p235255","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p235256"}}},"glyph":{"type":"object","name":"Line","id":"p235251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p235252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p235253","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p235264","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p235258","attributes":{"selected":{"type":"object","name":"Selection","id":"p235259","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p235260"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p235265","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p235266"}}},"glyph":{"type":"object","name":"Line","id":"p235261","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p235262","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p235263","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p235203","attributes":{"tools":[{"id":"p235216"},{"id":"p235217"},{"id":"p235218"},{"id":"p235226"},{"type":"object","name":"SaveTool","id":"p235227"},{"id":"p235268"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p235211","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p235212","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p235213"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p235214"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p235206","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p235207","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p235208"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p235209"}}}],"center":[{"type":"object","name":"Grid","id":"p235210","attributes":{"axis":{"id":"p235206"}}},{"type":"object","name":"Grid","id":"p235215","attributes":{"dimension":1,"axis":{"id":"p235211"}}},{"type":"object","name":"Legend","id":"p235246","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p235247","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p235243"}]}},{"type":"object","name":"LegendItem","id":"p235257","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p235254"}]}},{"type":"object","name":"LegendItem","id":"p235267","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p235264"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p235269","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p235279","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p235271"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p235280"},"y_scale":{"type":"object","name":"LinearScale","id":"p235281"},"title":{"type":"object","name":"Title","id":"p235272","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p235310","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p235304","attributes":{"selected":{"type":"object","name":"Selection","id":"p235305","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p235306"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFLQ50MDkMLf43ME1ysoOZ8+c8Zp44rl97/WAZ8Xea+x37d6tfeLRRnsXFxf55S/e2KPrh/EB9hHqqmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p235311","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p235312"}}},"glyph":{"type":"object","name":"Line","id":"p235307","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p235308","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p235309","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p235319","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p235313","attributes":{"selected":{"type":"object","name":"Selection","id":"p235314","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p235315"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFLQ50MDkMLf43ME1ysoOZ8+c8Zp44rl97/WAZ8Xea+x37d6tfeLRRnsXFxf55S/e2KPrh/EB9hHqqmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p235320","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p235321"}}},"glyph":{"type":"object","name":"Line","id":"p235316","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p235317","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p235318","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p235330","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p235324","attributes":{"selected":{"type":"object","name":"Selection","id":"p235325","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p235326"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFLQ50MDkMLf43ME1ysoOZ8+c8Zp44rl97/WAZ8Xea+x37d6tfeLRRnsXFxf55S/e2KPrh/EB9hHqqmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p235331","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p235332"}}},"glyph":{"type":"object","name":"Line","id":"p235327","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p235328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p235329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p235340","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p235334","attributes":{"selected":{"type":"object","name":"Selection","id":"p235335","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p235336"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p235341","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p235342"}}},"glyph":{"type":"object","name":"Line","id":"p235337","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p235338","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p235339","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p235278","attributes":{"tools":[{"id":"p235292"},{"id":"p235293"},{"id":"p235294"},{"id":"p235302"},{"type":"object","name":"SaveTool","id":"p235303"},{"id":"p235344"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p235287","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p235288","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p235289"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p235290"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p235282","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p235283"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p235284"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p235285"}}}],"center":[{"type":"object","name":"Grid","id":"p235286","attributes":{"axis":{"id":"p235282"}}},{"type":"object","name":"Grid","id":"p235291","attributes":{"dimension":1,"axis":{"id":"p235287"}}},{"type":"object","name":"Legend","id":"p235322","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p235323","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p235319"}]}},{"type":"object","name":"LegendItem","id":"p235333","attributes":{"label":{"type":"value","value":"Median Year (1982)"},"renderers":[{"id":"p235330"}]}},{"type":"object","name":"LegendItem","id":"p235343","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p235340"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p235355","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"93cdd4c7-b2c0-4ea0-a1d9-22abf14cccb3","roots":{"p235356":"da0fba45-ed3c-4068-abeb-f51b88f33352"},"root_ids":["p235356"]}];
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