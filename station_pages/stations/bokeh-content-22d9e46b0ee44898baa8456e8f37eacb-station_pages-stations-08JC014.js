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
    
    
    const element = document.getElementById("c90be78a-c6bc-4bf3-935e-1308d068888a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c90be78a-c6bc-4bf3-935e-1308d068888a' but no matching script tag was found.")
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
                  const docs_json = '{"62fcd7c6-4961-4d6a-83a3-e159a9115e26":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p326212","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p326213"}}},"roots":[{"type":"object","name":"Column","id":"p326376","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p326373","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p326372","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p326365","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p326236"},{"type":"object","name":"PanTool","id":"p326312"}]}},{"type":"object","name":"ToolProxy","id":"p326366","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p326237","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p326313","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p326367","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p326238","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p326239","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p326245","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p326244","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p326314","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p326315","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p326321","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p326320","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p326368","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p326246"},{"type":"object","name":"ResetTool","id":"p326322"}]}},{"type":"object","name":"SaveTool","id":"p326369"},{"type":"object","name":"ToolProxy","id":"p326370","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p326288","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p326371","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p326364","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p326214","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p326215"},"y_range":{"type":"object","name":"DataRange1d","id":"p326216"},"x_scale":{"type":"object","name":"LinearScale","id":"p326224"},"y_scale":{"type":"object","name":"LogScale","id":"p326225"},"title":{"type":"object","name":"Title","id":"p326217","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p326254","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p326248","attributes":{"selected":{"type":"object","name":"Selection","id":"p326249","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p326250"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4VSX0hTcRS+uqxYgyQR+kcsAlPT0n4Tehnn+mIgk7GHIM1iaV1MehCFPZi5QVH0UAsyako4CYuBopaTTWNOi4i6pU1zGeZcohFYMtZW6uzXOZfYSw/el+/+zv2+75zz3Z8gCGZJKhQlSXopaxTMqrQXEPr2pRWIjLGJh3WHRUEQxmVDvvhOluVY9iGx1YHPrlziLZo82eJRxqLcelBMEQTUZNF31/HwAdL5Lb79pNNVbtcSf7Mg7CXeuCzvFNGl3D6aSTwhpzJDfCvLS4GyHaKOser0k+lUt+nV20g3EF3fQj5dkUAa8RKuiIr0K821qcRz1ulTSPf0wTIH7L/SBBxonhvFCTgvSXGTZxWQJ6qDvwD9piy+2L9zFBKcjwmzEapL7sxlqpvnO78D7s9Cxm9QxNiV5rVF8nXsPrJAmFN6aZ54fm3vF6hG3UxJmM5zZVVzhPSaRBXOFwl8Jr87hswZKMS8Rs99ArTz1tdMA+cc2k4ElXnCjZNwz+GY3tP0HjAsW8WEDLivIeZ9DRh/3m3nK9rLVvvsBc1bog4+hzeY2ybdCNxHv6tNfprP2/1xGP5wbr34dYh0Bk3qEPWx+toH4Szqis4MUv/ya8cGiGcvNruVfaLr/UlEX42xp5/ygXDj/5jPWEZD8Amsc95zYbYP1jgfrq/pg1XOjeaFXviNvOHL3cpeW7u6koiXLv6z1AVxzkPGm4+hBe/L2IdH5MNzr2+MuYyp9G2dEFX6dUAFBqEt7qC+obIq54a4hP/b4muHU5hD3mQrnMZ73OC+Cz+UvVqSOIV8k+cW/AVyBjMtKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p326255","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p326256"}}},"glyph":{"type":"object","name":"Line","id":"p326251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p326252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p326253","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p326263","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p326257","attributes":{"selected":{"type":"object","name":"Selection","id":"p326258","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p326259"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/4VSX0hTcRS+uqxYgyQR+kcsAlPT0n4Tehnn+mIgk7GHIM1iaV1MehCFPZi5QVH0UAsyako4CYuBopaTTWNOi4i6pU1zGeZcohFYMtZW6uzXOZfYSw/el+/+zv2+75zz3Z8gCGZJKhQlSXopaxTMqrQXEPr2pRWIjLGJh3WHRUEQxmVDvvhOluVY9iGx1YHPrlziLZo82eJRxqLcelBMEQTUZNF31/HwAdL5Lb79pNNVbtcSf7Mg7CXeuCzvFNGl3D6aSTwhpzJDfCvLS4GyHaKOser0k+lUt+nV20g3EF3fQj5dkUAa8RKuiIr0K821qcRz1ulTSPf0wTIH7L/SBBxonhvFCTgvSXGTZxWQJ6qDvwD9piy+2L9zFBKcjwmzEapL7sxlqpvnO78D7s9Cxm9QxNiV5rVF8nXsPrJAmFN6aZ54fm3vF6hG3UxJmM5zZVVzhPSaRBXOFwl8Jr87hswZKMS8Rs99ArTz1tdMA+cc2k4ElXnCjZNwz+GY3tP0HjAsW8WEDLivIeZ9DRh/3m3nK9rLVvvsBc1bog4+hzeY2ybdCNxHv6tNfprP2/1xGP5wbr34dYh0Bk3qEPWx+toH4Szqis4MUv/ya8cGiGcvNruVfaLr/UlEX42xp5/ygXDj/5jPWEZD8Amsc95zYbYP1jgfrq/pg1XOjeaFXviNvOHL3cpeW7u6koiXLv6z1AVxzkPGm4+hBe/L2IdH5MNzr2+MuYyp9G2dEFX6dUAFBqEt7qC+obIq54a4hP/b4muHU5hD3mQrnMZ73OC+Cz+UvVqSOIV8k+cW/AVyBjMtKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p326264","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p326265"}}},"glyph":{"type":"object","name":"Line","id":"p326260","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p326261","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p326262","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p326274","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p326268","attributes":{"selected":{"type":"object","name":"Selection","id":"p326269","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p326270"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SO0xUURCGjQ0NicTENSYGlYCPKE8XZGFhZ9+Pu4/7vhesLKGylI4OOjvo6LSzk45OOzvo7MSKTq0oLMiZ+f5ms/eeM/PNN/fi3OWycqG//yplzX/+35YDzZjY83H5oJkQe39XZjX3OHdffv9yecD5h3J85DLJvcfy+ZPLE+5PyS3NNHVm5O22y1PqPZPTry7PqftC7mheUv+V7O64zNJnTr5p5um3wPlF+i5yb4n+S9x/DUdRtMxREZ5l+a71luFakb9/XFbgeyOTmlU4V8XTlOAtyZ5yrMGxDsc6HGVRjPMyHBtwbDLPJhwV5qrwX5hPeC7Ur4piblfpU4W3Sr+aHCp3jflr8NfpX2eOOhwN5mngpSGXOlcDjiYcTTw14WjhqwVHC44WHG38tZm/DUdHFGOnA0cHji4cXTi6+O3KnHL08NyDoweHB4cHhweHB0cfjj4cfXmkHAN8DOAYwDGEY8h+hvgY4mOEjxF7GZnvMZ/3vnkPfc75NveJz3nf+l758AfWvxiw18A49gPmCYznR8BcgfkphMwXGt+7kL2HxvElZP+hcVyH+I/MXz1i/sg4PkZ4iIzjZ4SP2DhmYrzExvE+Zk+xbDiMsxhPMT4SfCT4SPCR4CNhj4l9D1cJPlJRjGLKXlN8pPhI8ZHiI7U9FTJ8ZPjI2HuGj4z9Z/YdXWf4yPGR813m+MjxkeMjx8eW3ACuBH/SUAUAAA=="},"shape":[170],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/62RX0hTcRTHr1lLDGTUECWak8rMMgqf5dy3PUn4FhE0RowefBDxaS/aw/Cp9mARI8iFmAom6x9c+rc1JPqzoCImq8h7s7lMWtBYomv9+p3zO1uGjYK6L597zu97zu97zk/TNI/Pd0jXkAsHkbFEgqh3dBDDoUZm6IDS+Ups16tIV+I+zMuvxDZdCBFNJPZy3MrxHmYL17Xw+W7uu5N9NBPzE83sx8U+djC3Mxu5voFZz/UOrtvGfbeSvreT6Aos2VlfhxzsrN2CNLuNGood05tZb2Ofm1i/kXSjvdXKX+sG1lfxvRrrNM4LUPUCqqUPw1kElS+A8keUc6xQXDu7zHmi1Oc5n1tL0+/4Qn16Mp+xf9htZUlf154Fud/jhvMT6QqTi6zL0D1ua4F0wXgalN/3RGdgHuk6eoIYc0XeraVeM2VSvy7vL8Tf33GwPvUW1Du/AbUnojn+4DWovb7iuVOoa5p2p3gvsxiLtqEk3Wv5X9L5seALnNPcZXsORZnYf+0p+36C8Yjbekxz2Y88In2k7yGd54oz3GcG8wPDDRR70s/i3O8+3ZccjcF3Iea6vD+5QvfcxXigJ3O7TOxzb+RWRa4KAV67AQX5DsH4zTKVnxt/5DdZb/n/ntj/Tv919NcUWLpapsxH+06u5yrNF+H5rvD7TlXkstxvKDSJfaP9wxPwVdYfPj1eZpHe6/J/Y176t50agxz5vbSO0g940mGe498p+851Gxfho9zj/NgF+EBznWcf5yBLez5bkUmqPwM/ACQc/SdQBQAA"},"shape":[170],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p326275","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p326276"}}},"glyph":{"type":"object","name":"Line","id":"p326271","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p326272","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p326273","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p326284","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p326278","attributes":{"selected":{"type":"object","name":"Selection","id":"p326279","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p326280"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p326285","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p326286"}}},"glyph":{"type":"object","name":"Line","id":"p326281","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p326282","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p326283","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p326223","attributes":{"tools":[{"id":"p326236"},{"id":"p326237"},{"id":"p326238"},{"id":"p326246"},{"type":"object","name":"SaveTool","id":"p326247"},{"id":"p326288"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p326231","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p326232","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p326233"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p326234"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p326226","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p326227","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p326228"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p326229"}}}],"center":[{"type":"object","name":"Grid","id":"p326230","attributes":{"axis":{"id":"p326226"}}},{"type":"object","name":"Grid","id":"p326235","attributes":{"dimension":1,"axis":{"id":"p326231"}}},{"type":"object","name":"Legend","id":"p326266","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p326267","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p326263"}]}},{"type":"object","name":"LegendItem","id":"p326277","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p326274"}]}},{"type":"object","name":"LegendItem","id":"p326287","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p326284"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p326289","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p326299","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p326291"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p326300"},"y_scale":{"type":"object","name":"LinearScale","id":"p326301"},"title":{"type":"object","name":"Title","id":"p326292","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p326330","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p326324","attributes":{"selected":{"type":"object","name":"Selection","id":"p326325","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p326326"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoM2BBiaHucXnDq5RVnY4e+aM18QTz+17rwc8K/ZeY79r927tE4822ru4uMgvf/HGngGHOQD2EeqqYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p326331","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p326332"}}},"glyph":{"type":"object","name":"Line","id":"p326327","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p326328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p326329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p326339","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p326333","attributes":{"selected":{"type":"object","name":"Selection","id":"p326334","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p326335"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoM2BBiaHucXnDq5RVnY4e+aM18QTz+17rwc8K/ZeY79r927tE4822ru4uMgvf/HGngGHOQD2EeqqYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p326340","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p326341"}}},"glyph":{"type":"object","name":"Line","id":"p326336","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p326337","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p326338","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p326350","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p326344","attributes":{"selected":{"type":"object","name":"Selection","id":"p326345","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p326346"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoM2BBiaHucXnDq5RVnY4e+aM18QTz+17rwc8K/ZeY79r927tE4822ru4uMgvf/HGngGHOQD2EeqqYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p326351","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p326352"}}},"glyph":{"type":"object","name":"Line","id":"p326347","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p326348","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p326349","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p326360","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p326354","attributes":{"selected":{"type":"object","name":"Selection","id":"p326355","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p326356"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p326361","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p326362"}}},"glyph":{"type":"object","name":"Line","id":"p326357","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p326358","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p326359","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p326298","attributes":{"tools":[{"id":"p326312"},{"id":"p326313"},{"id":"p326314"},{"id":"p326322"},{"type":"object","name":"SaveTool","id":"p326323"},{"id":"p326364"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p326307","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p326308","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p326309"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p326310"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p326302","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p326303"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p326304"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p326305"}}}],"center":[{"type":"object","name":"Grid","id":"p326306","attributes":{"axis":{"id":"p326302"}}},{"type":"object","name":"Grid","id":"p326311","attributes":{"dimension":1,"axis":{"id":"p326307"}}},{"type":"object","name":"Legend","id":"p326342","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p326343","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p326339"}]}},{"type":"object","name":"LegendItem","id":"p326353","attributes":{"label":{"type":"value","value":"Median Year (1982)"},"renderers":[{"id":"p326350"}]}},{"type":"object","name":"LegendItem","id":"p326363","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p326360"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p326375","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"62fcd7c6-4961-4d6a-83a3-e159a9115e26","roots":{"p326376":"c90be78a-c6bc-4bf3-935e-1308d068888a"},"root_ids":["p326376"]}];
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