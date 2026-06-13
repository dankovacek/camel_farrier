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
    
    
    const element = document.getElementById("b5e11c51-d58a-4bf7-92af-ce7da77c946a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b5e11c51-d58a-4bf7-92af-ce7da77c946a' but no matching script tag was found.")
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
                  const docs_json = '{"967af276-0ae3-48d2-a213-b694ece3eb7f":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p554763","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p554764"}}},"roots":[{"type":"object","name":"Column","id":"p554927","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p554924","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p554923","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p554916","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p554787"},{"type":"object","name":"PanTool","id":"p554863"}]}},{"type":"object","name":"ToolProxy","id":"p554917","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p554788","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p554864","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p554918","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p554789","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p554790","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p554796","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p554795","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p554865","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p554866","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p554872","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p554871","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p554919","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p554797"},{"type":"object","name":"ResetTool","id":"p554873"}]}},{"type":"object","name":"SaveTool","id":"p554920"},{"type":"object","name":"ToolProxy","id":"p554921","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p554839","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p554922","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p554915","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p554765","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p554766"},"y_range":{"type":"object","name":"DataRange1d","id":"p554767"},"x_scale":{"type":"object","name":"LinearScale","id":"p554775"},"y_scale":{"type":"object","name":"LogScale","id":"p554776"},"title":{"type":"object","name":"Title","id":"p554768","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p554805","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p554799","attributes":{"selected":{"type":"object","name":"Selection","id":"p554800","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p554801"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHhQJSLg4PGwKkYggt/Bjuv65a0tPA7XFxdsPbWQ06HQlsv8tAC7g7GxsXP3GxaQuG2oAbND/6GvO0qEGR1MjI2Dn174Z/9NI2Z5QPZf+7NnztS8Dvxjn5aWJhaV8steM6b/kMuNH/ZAfXe1U7/bz5w5M3KX5zd7oHm3q0S+2leLrDse6/3FvvV14A2hT59B6oXcVD+DxM+f1vhgf+7MmTc5YW/tge7o/zXttT3QuNY0nVf269wfBkktfmnPwMDQkDERTEusc39pD/THlQfcL+0PfdVYc2rfc/szZ86seRv/1P5hlYhfpfUTkLoLQp8e23/ViHFP7Hxsv6TA1qv95yN77uuLf5yQfwRy596YIw/tZ82c2fmN7SFIX5yT3QP7////L3/55h7IftfzaXdBfPFDi2+DzHPgYboN0nc18Oote0age/bNvwUKD3+Oolsgd1YZWYDFGdbI3LLnur6Y4eWVm2B9cbsQdI3IOvtP7GB+wcS3N0Dm/7+2+AbIned3FNwAmTe91wEsPv+Iwg17I2Pjan+5G/aBO+Rcxa9cB4nf9+/FTYPs14y5DnYHNhoYzj0nQ66D7Gdg0r4OCscv+apg8+ptuTBp2dbXgq//XwOHv9jNa/YtrwMLTpwF8xe8X45JA83Zf6LsGsg8oug3gTvSMk3B5gDT5zVQurLxu3jV/hXQw8rpV8Hucky4ai/X+noigymYL69/9woofXV+2nDFPrr/UGyO4hVQutrBN+eyfdAOuVpz/8ug+JQ71XkJFH6PZz27aK8V098kzHXRXqH1de0R2wug+PnwpO68/T9geFaJnAOZG7/L84w9ADXXkpooAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p554806","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p554807"}}},"glyph":{"type":"object","name":"Line","id":"p554802","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p554803","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p554804","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p554814","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p554808","attributes":{"selected":{"type":"object","name":"Selection","id":"p554809","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p554810"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHhQJSLg4PGwKkYggt/Bjuv65a0tPA7XFxdsPbWQ06HQlsv8tAC7g7GxsXP3GxaQuG2oAbND/6GvO0qEGR1MjI2Dn174Z/9NI2Z5QPZf+7NnztS8Dvxjn5aWJhaV8steM6b/kMuNH/ZAfXe1U7/bz5w5M3KX5zd7oHm3q0S+2leLrDse6/3FvvV14A2hT59B6oXcVD+DxM+f1vhgf+7MmTc5YW/tge7o/zXttT3QuNY0nVf269wfBkktfmnPwMDQkDERTEusc39pD/THlQfcL+0PfdVYc2rfc/szZ86seRv/1P5hlYhfpfUTkLoLQp8e23/ViHFP7Hxsv6TA1qv95yN77uuLf5yQfwRy596YIw/tZ82c2fmN7SFIX5yT3QP7////L3/55h7IftfzaXdBfPFDi2+DzHPgYboN0nc18Oote0age/bNvwUKD3+Oolsgd1YZWYDFGdbI3LLnur6Y4eWVm2B9cbsQdI3IOvtP7GB+wcS3N0Dm/7+2+AbIned3FNwAmTe91wEsPv+Iwg17I2Pjan+5G/aBO+Rcxa9cB4nf9+/FTYPs14y5DnYHNhoYzj0nQ66D7Gdg0r4OCscv+apg8+ptuTBp2dbXgq//XwOHv9jNa/YtrwMLTpwF8xe8X45JA83Zf6LsGsg8oug3gTvSMk3B5gDT5zVQurLxu3jV/hXQw8rpV8Hucky4ai/X+noigymYL69/9woofXV+2nDFPrr/UGyO4hVQutrBN+eyfdAOuVpz/8ug+JQ71XkJFH6PZz27aK8V098kzHXRXqH1de0R2wug+PnwpO68/T9geFaJnAOZG7/L84w9ADXXkpooAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p554815","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p554816"}}},"glyph":{"type":"object","name":"Line","id":"p554811","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p554812","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p554813","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p554825","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p554819","attributes":{"selected":{"type":"object","name":"Selection","id":"p554820","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p554821"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2TeUhUURjFE9FEK0NMadfEJXPJvXHSOe46zuisb56IFWGEFYUlYpkoooQZFkULhUk7qYhokUQRLZQlWWi22CJihVFmRBItZO8+z/wzzJt7v++c3zmv9Z5tY2jUB12r+j2lmw6qPnLr4TR/u+DZ1KffZVXumHnuCe8wdx+XRi/MnF8AXVFLR/4LX55bhJKm2KyTAUt5fjkejbzf8T3Bn/dWYH1F5A3fdwG8H4gf8/e4JdUFcU4w9l8WQlZyXiiWpXqe2fd0FeeG48pwwUR7eQTnR+KCZmBJSdNq7onCZP3PO5WjUdwXjUTxd2wM98agTh0Yy/1xeLJl89Xu4TjqiMfCawcK74cnUE8Cip27nF7VrKEuDRSzlz4PaqgvEb9O/TX+C9JSpxbp4/6KpbXUm4SDAsfjJOpOxsuabYj301G/Doc/Zu86rwF9AOr6MdBPCt5Gb1ckpdBXChQxyoBU+ktFsIhrJJU+02AIvOhlbUij3zTs7OvZ9CY6nb7TcbxUPEin/wwoYXhM1meQQwZGb35bVxGZSR6ZmK0CyCSXLKjx12aRTxYsnSGyd1g2OWWjXNK2NQ9lk1cOmgWe6hxyy8HtsxvMnSF68tNDtT+gJ8dczFEDzCXPXEQdPaE3BBrI1QB1fL+BfI3Yqwo2krMRSlnSxv3zyDsPD8LHjpX25ZF7Pr4MikLnk38+lPIpjTAxBxMWH5rb61psYh4mRIjrPSbmYkJKvJ9yxMx8zLA2iMKamZMZCmwlMDPzMmO3qLuHhblZ0FiboSCwMD8LTg/1Kw20MEcLVJzuVuZpxd1KYdDKXK14Lo53W5mvFWrd3GzM2YY/ZVXXk4tszNuGeYob5y4bc7dBqO91tTN/O2JEvQrt7IEdQp25084+2CHU+LhI7IWEreJ1KZDYDwliW0uHxJ5IUPE5O9gXB86JuGUHe+OAuD3R7mB/HFDlOcnskYzX4vWWZPZJxlfll7ZNZq9kzFI/BfgPrtRQprgEAAA="},"shape":[151],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/6XTT0iTYRwH8Mf1b4wREeJBZL4HkcLDkB06xHhfkRAPIuIthr5EyIgI6bDDkHwjhojI2CFEJFxIeBFPIuFhjuHBw0jd5uYs27tMrNYYstYf0c3f79twWBZGu3z4/Z7n+f2e59nzCiF0d/UVRQghObyXy5pZJe02sf62tJFVX1ouKaVSqdcbuoB8v/08K822nSvnqxA7vEKpwrqiTDHVh1qocMBSXUjj++VxSOPfWfpBzW76xqp9fV8xf3y8wAbD4S8Yz3TBYOEaVEyJPGKLB+pT/XusMDTlZNqPcmM4izqtI58x32bLYP7zW5+Q34t8ZDWn71T9tVbkpaEaqPqyHxDfvruL2BvaYfWOO+9hYzOUmo0w6Apss/7sAKT+UP/x6B3G281Qmc+nET90QroXnRWD93SZ7/9mKoXzzC2/5bjUvb3Fpl5MvME6i+c16pgNJ1R3Vjd5nRaYrMj1xx5sok6kA3kxU1eRQsmTSaJez8KfpXV6w8Ukr4e832JsA3XjUxW5znDLBuqxNDy5JJ3q4rNcAudxBRI8L9U5enb5HNcdCZznX+R9G5rQ94TUf9BuQv8zScu1mmSc6/yqPzeN/F+lPovLrjj3+y+pD71v9KPvsCLVlefz69if07eOc7Wov8v7rLUiX2/dih1LecU4g7h3oT2GOvd3o7i3x0+jfO/0XUR5XLbZkKd3HuGY3lmEY3rfa+X3ssaxevXJqnyI972C+8kOrMhF+t/d1a+O/dkvLB8BC0+A9rgEAAA="},"shape":[151],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p554826","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p554827"}}},"glyph":{"type":"object","name":"Line","id":"p554822","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p554823","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p554824","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p554835","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p554829","attributes":{"selected":{"type":"object","name":"Selection","id":"p554830","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p554831"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p554836","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p554837"}}},"glyph":{"type":"object","name":"Line","id":"p554832","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p554833","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p554834","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p554774","attributes":{"tools":[{"id":"p554787"},{"id":"p554788"},{"id":"p554789"},{"id":"p554797"},{"type":"object","name":"SaveTool","id":"p554798"},{"id":"p554839"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p554782","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p554783","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p554784"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p554785"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p554777","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p554778","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p554779"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p554780"}}}],"center":[{"type":"object","name":"Grid","id":"p554781","attributes":{"axis":{"id":"p554777"}}},{"type":"object","name":"Grid","id":"p554786","attributes":{"dimension":1,"axis":{"id":"p554782"}}},{"type":"object","name":"Legend","id":"p554817","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p554818","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p554814"}]}},{"type":"object","name":"LegendItem","id":"p554828","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p554825"}]}},{"type":"object","name":"LegendItem","id":"p554838","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p554835"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p554840","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p554850","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p554842"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p554851"},"y_scale":{"type":"object","name":"LinearScale","id":"p554852"},"title":{"type":"object","name":"Title","id":"p554843","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p554881","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p554875","attributes":{"selected":{"type":"object","name":"Selection","id":"p554876","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p554877"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD936OvBHTC6jQ8k5S/GcLc/tt12LWh3AedM+NDTUltH3iv37vd/38R+7Zg80ZIH6q+sgGmweAEULtjJgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p554882","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p554883"}}},"glyph":{"type":"object","name":"Line","id":"p554878","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p554879","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p554880","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p554890","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p554884","attributes":{"selected":{"type":"object","name":"Selection","id":"p554885","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p554886"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD936OvBHTC6jQ8k5S/GcLc/tt12LWh3AedM+NDTUltH3iv37vd/38R+7Zg80ZIH6q+sgGmweAEULtjJgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p554891","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p554892"}}},"glyph":{"type":"object","name":"Line","id":"p554887","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p554888","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p554889","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p554901","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p554895","attributes":{"selected":{"type":"object","name":"Selection","id":"p554896","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p554897"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD936OvBHTC6jQ8k5S/GcLc/tt12LWh3AedM+NDTUltH3iv37vd/38R+7Zg80ZIH6q+sgGmweAEULtjJgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p554902","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p554903"}}},"glyph":{"type":"object","name":"Line","id":"p554898","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p554899","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p554900","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p554911","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p554905","attributes":{"selected":{"type":"object","name":"Selection","id":"p554906","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p554907"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p554912","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p554913"}}},"glyph":{"type":"object","name":"Line","id":"p554908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p554909","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p554910","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p554849","attributes":{"tools":[{"id":"p554863"},{"id":"p554864"},{"id":"p554865"},{"id":"p554873"},{"type":"object","name":"SaveTool","id":"p554874"},{"id":"p554915"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p554858","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p554859","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p554860"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p554861"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p554853","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p554854"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p554855"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p554856"}}}],"center":[{"type":"object","name":"Grid","id":"p554857","attributes":{"axis":{"id":"p554853"}}},{"type":"object","name":"Grid","id":"p554862","attributes":{"dimension":1,"axis":{"id":"p554858"}}},{"type":"object","name":"Legend","id":"p554893","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p554894","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p554890"}]}},{"type":"object","name":"LegendItem","id":"p554904","attributes":{"label":{"type":"value","value":"Median Year (1968)"},"renderers":[{"id":"p554901"}]}},{"type":"object","name":"LegendItem","id":"p554914","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p554911"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p554926","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"967af276-0ae3-48d2-a213-b694ece3eb7f","roots":{"p554927":"b5e11c51-d58a-4bf7-92af-ce7da77c946a"},"root_ids":["p554927"]}];
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