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
    
    
    const element = document.getElementById("f3a594e1-5684-4015-b8e9-5245da037832");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f3a594e1-5684-4015-b8e9-5245da037832' but no matching script tag was found.")
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
                  const docs_json = '{"93c3e8e6-e436-425b-99a9-9aedbfec1f89":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p325853","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p325854"}}},"roots":[{"type":"object","name":"Column","id":"p326017","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p326014","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p326013","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p326006","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p325877"},{"type":"object","name":"PanTool","id":"p325953"}]}},{"type":"object","name":"ToolProxy","id":"p326007","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p325878","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p325954","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p326008","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p325879","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p325880","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p325886","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p325885","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p325955","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p325956","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p325962","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p325961","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p326009","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p325887"},{"type":"object","name":"ResetTool","id":"p325963"}]}},{"type":"object","name":"SaveTool","id":"p326010"},{"type":"object","name":"ToolProxy","id":"p326011","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p325929","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p326012","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p326005","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p325855","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p325856"},"y_range":{"type":"object","name":"DataRange1d","id":"p325857"},"x_scale":{"type":"object","name":"LinearScale","id":"p325865"},"y_scale":{"type":"object","name":"LogScale","id":"p325866"},"title":{"type":"object","name":"Title","id":"p325858","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p325895","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p325889","attributes":{"selected":{"type":"object","name":"Selection","id":"p325890","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p325891"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4VSX0hTcRS+uqxYgyQR+kcsAlPT0n4Tehnn+mIgk7GHIM1iaV1MehCFPZi5QVH0UAsyako4CYuBopaTTWNOi4i6pU1zGeZcohFYMtZW6uzXOZfYSw/el+/+zv2+75zz3Z8gCGZJKhQlSXopaxTMqrQXEPr2pRWIjLGJh3WHRUEQxmVDvvhOluVY9iGx1YHPrlziLZo82eJRxqLcelBMEQTUZNF31/HwAdL5Lb79pNNVbtcSf7Mg7CXeuCzvFNGl3D6aSTwhpzJDfCvLS4GyHaKOser0k+lUt+nV20g3EF3fQj5dkUAa8RKuiIr0K821qcRz1ulTSPf0wTIH7L/SBBxonhvFCTgvSXGTZxWQJ6qDvwD9piy+2L9zFBKcjwmzEapL7sxlqpvnO78D7s9Cxm9QxNiV5rVF8nXsPrJAmFN6aZ54fm3vF6hG3UxJmM5zZVVzhPSaRBXOFwl8Jr87hswZKMS8Rs99ArTz1tdMA+cc2k4ElXnCjZNwz+GY3tP0HjAsW8WEDLivIeZ9DRh/3m3nK9rLVvvsBc1bog4+hzeY2ybdCNxHv6tNfprP2/1xGP5wbr34dYh0Bk3qEPWx+toH4Szqis4MUv/ya8cGiGcvNruVfaLr/UlEX42xp5/ygXDj/5jPWEZD8Amsc95zYbYP1jgfrq/pg1XOjeaFXviNvOHL3cpeW7u6koiXLv6z1AVxzkPGm4+hBe/L2IdH5MNzr2+MuYyp9G2dEFX6dUAFBqEt7qC+obIq54a4hP/b4muHU5hD3mQrnMZ73OC+Cz+UvVqSOIV8k+cW/AVyBjMtKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p325896","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p325897"}}},"glyph":{"type":"object","name":"Line","id":"p325892","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p325893","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p325894","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p325904","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p325898","attributes":{"selected":{"type":"object","name":"Selection","id":"p325899","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p325900"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4VSX0hTcRS+uqxYgyQR+kcsAlPT0n4Tehnn+mIgk7GHIM1iaV1MehCFPZi5QVH0UAsyako4CYuBopaTTWNOi4i6pU1zGeZcohFYMtZW6uzXOZfYSw/el+/+zv2+75zz3Z8gCGZJKhQlSXopaxTMqrQXEPr2pRWIjLGJh3WHRUEQxmVDvvhOluVY9iGx1YHPrlziLZo82eJRxqLcelBMEQTUZNF31/HwAdL5Lb79pNNVbtcSf7Mg7CXeuCzvFNGl3D6aSTwhpzJDfCvLS4GyHaKOser0k+lUt+nV20g3EF3fQj5dkUAa8RKuiIr0K821qcRz1ulTSPf0wTIH7L/SBBxonhvFCTgvSXGTZxWQJ6qDvwD9piy+2L9zFBKcjwmzEapL7sxlqpvnO78D7s9Cxm9QxNiV5rVF8nXsPrJAmFN6aZ54fm3vF6hG3UxJmM5zZVVzhPSaRBXOFwl8Jr87hswZKMS8Rs99ArTz1tdMA+cc2k4ElXnCjZNwz+GY3tP0HjAsW8WEDLivIeZ9DRh/3m3nK9rLVvvsBc1bog4+hzeY2ybdCNxHv6tNfprP2/1xGP5wbr34dYh0Bk3qEPWx+toH4Szqis4MUv/ya8cGiGcvNruVfaLr/UlEX42xp5/ygXDj/5jPWEZD8Amsc95zYbYP1jgfrq/pg1XOjeaFXviNvOHL3cpeW7u6koiXLv6z1AVxzkPGm4+hBe/L2IdH5MNzr2+MuYyp9G2dEFX6dUAFBqEt7qC+obIq54a4hP/b4muHU5hD3mQrnMZ73OC+Cz+UvVqSOIV8k+cW/AVyBjMtKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p325905","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p325906"}}},"glyph":{"type":"object","name":"Line","id":"p325901","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p325902","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p325903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p325915","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p325909","attributes":{"selected":{"type":"object","name":"Selection","id":"p325910","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p325911"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SO0xUURCGjQ0NicTENSYGlYCPKE8XZGFhZ9+Pu4/7vhesLKGylI4OOjvo6LSzk45OOzvo7MSKTq0oLMiZ+f5ms/eeM/PNN/fi3OWycqG//yplzX/+35YDzZjY83H5oJkQe39XZjX3OHdffv9yecD5h3J85DLJvcfy+ZPLE+5PyS3NNHVm5O22y1PqPZPTry7PqftC7mheUv+V7O64zNJnTr5p5um3wPlF+i5yb4n+S9x/DUdRtMxREZ5l+a71luFakb9/XFbgeyOTmlU4V8XTlOAtyZ5yrMGxDsc6HGVRjPMyHBtwbDLPJhwV5qrwX5hPeC7Ur4piblfpU4W3Sr+aHCp3jflr8NfpX2eOOhwN5mngpSGXOlcDjiYcTTw14WjhqwVHC44WHG38tZm/DUdHFGOnA0cHji4cXTi6+O3KnHL08NyDoweHB4cHhweHB0cfjj4cfXmkHAN8DOAYwDGEY8h+hvgY4mOEjxF7GZnvMZ/3vnkPfc75NveJz3nf+l758AfWvxiw18A49gPmCYznR8BcgfkphMwXGt+7kL2HxvElZP+hcVyH+I/MXz1i/sg4PkZ4iIzjZ4SP2DhmYrzExvE+Zk+xbDiMsxhPMT4SfCT4SPCR4CNhj4l9D1cJPlJRjGLKXlN8pPhI8ZHiI7U9FTJ8ZPjI2HuGj4z9Z/YdXWf4yPGR813m+MjxkeMjx8eW3ACuBH/SUAUAAA=="},"shape":[170],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/62RX0hTcRTHr1lLDGTUECWak8rMMgqf5dy3PUn4FhE0RowefBDxaS/aw/Cp9mARI8iFmAom6x9c+rc1JPqzoCImq8h7s7lMWtBYomv9+p3zO1uGjYK6L597zu97zu97zk/TNI/Pd0jXkAsHkbFEgqh3dBDDoUZm6IDS+Ups16tIV+I+zMuvxDZdCBFNJPZy3MrxHmYL17Xw+W7uu5N9NBPzE83sx8U+djC3Mxu5voFZz/UOrtvGfbeSvreT6Aos2VlfhxzsrN2CNLuNGood05tZb2Ofm1i/kXSjvdXKX+sG1lfxvRrrNM4LUPUCqqUPw1kElS+A8keUc6xQXDu7zHmi1Oc5n1tL0+/4Qn16Mp+xf9htZUlf154Fud/jhvMT6QqTi6zL0D1ua4F0wXgalN/3RGdgHuk6eoIYc0XeraVeM2VSvy7vL8Tf33GwPvUW1Du/AbUnojn+4DWovb7iuVOoa5p2p3gvsxiLtqEk3Wv5X9L5seALnNPcZXsORZnYf+0p+36C8Yjbekxz2Y88In2k7yGd54oz3GcG8wPDDRR70s/i3O8+3ZccjcF3Iea6vD+5QvfcxXigJ3O7TOxzb+RWRa4KAV67AQX5DsH4zTKVnxt/5DdZb/n/ntj/Tv919NcUWLpapsxH+06u5yrNF+H5rvD7TlXkstxvKDSJfaP9wxPwVdYfPj1eZpHe6/J/Y176t50agxz5vbSO0g940mGe498p+851Gxfho9zj/NgF+EBznWcf5yBLez5bkUmqPwM/ACQc/SdQBQAA"},"shape":[170],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p325916","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p325917"}}},"glyph":{"type":"object","name":"Line","id":"p325912","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p325913","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p325914","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p325925","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p325919","attributes":{"selected":{"type":"object","name":"Selection","id":"p325920","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p325921"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p325926","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p325927"}}},"glyph":{"type":"object","name":"Line","id":"p325922","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p325923","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p325924","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p325864","attributes":{"tools":[{"id":"p325877"},{"id":"p325878"},{"id":"p325879"},{"id":"p325887"},{"type":"object","name":"SaveTool","id":"p325888"},{"id":"p325929"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p325872","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p325873","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p325874"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p325875"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p325867","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p325868","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p325869"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p325870"}}}],"center":[{"type":"object","name":"Grid","id":"p325871","attributes":{"axis":{"id":"p325867"}}},{"type":"object","name":"Grid","id":"p325876","attributes":{"dimension":1,"axis":{"id":"p325872"}}},{"type":"object","name":"Legend","id":"p325907","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p325908","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p325904"}]}},{"type":"object","name":"LegendItem","id":"p325918","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p325915"}]}},{"type":"object","name":"LegendItem","id":"p325928","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p325925"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p325930","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p325940","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p325932"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p325941"},"y_scale":{"type":"object","name":"LinearScale","id":"p325942"},"title":{"type":"object","name":"Title","id":"p325933","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p325971","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p325965","attributes":{"selected":{"type":"object","name":"Selection","id":"p325966","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p325967"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoM2BBiaHucXnDq5RVnY4e+aM18QTz+17rwc8K/ZeY79r927tE4822ru4uMgvf/HGngGHOQD2EeqqYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p325972","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p325973"}}},"glyph":{"type":"object","name":"Line","id":"p325968","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p325969","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p325970","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p325980","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p325974","attributes":{"selected":{"type":"object","name":"Selection","id":"p325975","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p325976"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoM2BBiaHucXnDq5RVnY4e+aM18QTz+17rwc8K/ZeY79r927tE4822ru4uMgvf/HGngGHOQD2EeqqYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p325981","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p325982"}}},"glyph":{"type":"object","name":"Line","id":"p325977","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p325978","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p325979","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p325991","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p325985","attributes":{"selected":{"type":"object","name":"Selection","id":"p325986","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p325987"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoM2BBiaHucXnDq5RVnY4e+aM18QTz+17rwc8K/ZeY79r927tE4822ru4uMgvf/HGngGHOQD2EeqqYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p325992","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p325993"}}},"glyph":{"type":"object","name":"Line","id":"p325988","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p325989","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p325990","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p326001","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p325995","attributes":{"selected":{"type":"object","name":"Selection","id":"p325996","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p325997"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p326002","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p326003"}}},"glyph":{"type":"object","name":"Line","id":"p325998","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p325999","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p326000","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p325939","attributes":{"tools":[{"id":"p325953"},{"id":"p325954"},{"id":"p325955"},{"id":"p325963"},{"type":"object","name":"SaveTool","id":"p325964"},{"id":"p326005"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p325948","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p325949","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p325950"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p325951"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p325943","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p325944"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p325945"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p325946"}}}],"center":[{"type":"object","name":"Grid","id":"p325947","attributes":{"axis":{"id":"p325943"}}},{"type":"object","name":"Grid","id":"p325952","attributes":{"dimension":1,"axis":{"id":"p325948"}}},{"type":"object","name":"Legend","id":"p325983","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p325984","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p325980"}]}},{"type":"object","name":"LegendItem","id":"p325994","attributes":{"label":{"type":"value","value":"Median Year (1982)"},"renderers":[{"id":"p325991"}]}},{"type":"object","name":"LegendItem","id":"p326004","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p326001"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p326016","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"93c3e8e6-e436-425b-99a9-9aedbfec1f89","roots":{"p326017":"f3a594e1-5684-4015-b8e9-5245da037832"},"root_ids":["p326017"]}];
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