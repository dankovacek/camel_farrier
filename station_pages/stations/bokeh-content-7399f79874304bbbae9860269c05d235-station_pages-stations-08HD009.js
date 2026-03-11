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
    
    
    const element = document.getElementById("b623778a-267c-4a8d-a3dd-7c7fd7faeab6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b623778a-267c-4a8d-a3dd-7c7fd7faeab6' but no matching script tag was found.")
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
                  const docs_json = '{"77bed8c6-b320-4133-a3f6-f7f07e864933":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p316555","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p316556"}}},"roots":[{"type":"object","name":"Column","id":"p316719","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p316716","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p316715","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p316708","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p316579"},{"type":"object","name":"PanTool","id":"p316655"}]}},{"type":"object","name":"ToolProxy","id":"p316709","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p316580","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p316656","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p316710","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p316581","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p316582","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p316588","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p316587","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p316657","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p316658","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p316664","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p316663","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p316711","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p316589"},{"type":"object","name":"ResetTool","id":"p316665"}]}},{"type":"object","name":"SaveTool","id":"p316712"},{"type":"object","name":"ToolProxy","id":"p316713","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p316631","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p316714","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p316707","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p316557","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p316558"},"y_range":{"type":"object","name":"DataRange1d","id":"p316559"},"x_scale":{"type":"object","name":"LinearScale","id":"p316567"},"y_scale":{"type":"object","name":"LogScale","id":"p316568"},"title":{"type":"object","name":"Title","id":"p316560","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p316597","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316591","attributes":{"selected":{"type":"object","name":"Selection","id":"p316592","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316593"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhQYCvh8E0jZn5ToKjD4a8aNcvDhRzWuT9cJpgq4MDIwOBgbMzrMGvmTENDDl4HBgaGB1UiPA5LCmw/nX7H4XDoq4bN2kwOkDiDZgy7Q1pa2jb3h2wgfoPIOlZstMI6dzAdsEOOBWRuZcZEZqg4s8PrwB11Oc+ZwPyYfhTages6o0P/oa8e4dGMIHXHPHkYHVqBjF42BrD9IDXfNWLiNU//s2dmYFiREPLX/mGVyLu+4D/2EP2/7c+eOdMz1fm3vbGxsfLtnz/td8i1ep9P+wmST9gh9xMk/njNrx9g9Q+rELR2TL+Q//rvYHVAN9hfX1xwdKPeZxB/gfvDT/ZtrwNfTL/7yd6O67ryzj8fQfbqzZX9AJJvyHn+3j49LS2vq++9fYEtl7vnrnf2wHBlCHn81l54nbsiE99bqLrXIPqBf+9rkDv/mC98BTbfufuFvWLra87mA8/tO14Hzmh7+BQkr3P75yOQvELzAQRtw3V98kM2CJ+t8SHIP5eP5j4Am/86EEwXGPDet////3/8Ls87IBqo5jacdntYtWXt7ptgvnnnTZB6hn9Xbti3vA7s4J9+w97U2Hjyl9vXweJM2mD6wELXayD19Y4JV8HhxbHmij0bkO50vALm8zBdhtMgdQdOXbRPAaaTzWUXQfz93uYIGuje4oTVF+wnHPq6Yw/DebC7xW6eg9N/gQp1Np2F2nMGpO/+BaXT9l80YtQP2J0Cx49AxElkGujvE/b/gOr8e4+DzE/OPXrM3sjYONpA6yjY/Z//HgGHs0zUEfupM2fetDY8DHXnQTgNAAyCNLAoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316598","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316599"}}},"glyph":{"type":"object","name":"Line","id":"p316594","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316595","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p316596","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p316606","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316600","attributes":{"selected":{"type":"object","name":"Selection","id":"p316601","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316602"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhQYCvh8E0jZn5ToKjD4a8aNcvDhRzWuT9cJpgq4MDIwOBgbMzrMGvmTENDDl4HBgaGB1UiPA5LCmw/nX7H4XDoq4bN2kwOkDiDZgy7Q1pa2jb3h2wgfoPIOlZstMI6dzAdsEOOBWRuZcZEZqg4s8PrwB11Oc+ZwPyYfhTages6o0P/oa8e4dGMIHXHPHkYHVqBjF42BrD9IDXfNWLiNU//s2dmYFiREPLX/mGVyLu+4D/2EP2/7c+eOdMz1fm3vbGxsfLtnz/td8i1ep9P+wmST9gh9xMk/njNrx9g9Q+rELR2TL+Q//rvYHVAN9hfX1xwdKPeZxB/gfvDT/ZtrwNfTL/7yd6O67ryzj8fQfbqzZX9AJJvyHn+3j49LS2vq++9fYEtl7vnrnf2wHBlCHn81l54nbsiE99bqLrXIPqBf+9rkDv/mC98BTbfufuFvWLra87mA8/tO14Hzmh7+BQkr3P75yOQvELzAQRtw3V98kM2CJ+t8SHIP5eP5j4Am/86EEwXGPDet////3/8Ls87IBqo5jacdntYtWXt7ptgvnnnTZB6hn9Xbti3vA7s4J9+w97U2Hjyl9vXweJM2mD6wELXayD19Y4JV8HhxbHmij0bkO50vALm8zBdhtMgdQdOXbRPAaaTzWUXQfz93uYIGuje4oTVF+wnHPq6Yw/DebC7xW6eg9N/gQp1Np2F2nMGpO/+BaXT9l80YtQP2J0Cx49AxElkGujvE/b/gOr8e4+DzE/OPXrM3sjYONpA6yjY/Z//HgGHs0zUEfupM2fetDY8DHXnQTgNAAyCNLAoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316607","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316608"}}},"glyph":{"type":"object","name":"Line","id":"p316603","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316604","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p316605","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p316617","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316611","attributes":{"selected":{"type":"object","name":"Selection","id":"p316612","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316613"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SeWwMYRjGEcR9FVVHtaqqWlW9tFXt093udtvd7u7M7M5upa6ouoKoO4imBHUFQV1BWkdICXHULQhKCEIQjaOCuO8QR8V8n2f+mczMN+/7HD9tdNvDJfPqMjR5/5zxp2N5q/Opv/jcEBFpd57sqG2C/+9b4Pb7oSl1m9rg//f2OOOaerVdVQDPdcKavonfY1t24fmuKGr4s5cyoTv/C0aPSY/3HC8M4f+hWJqPs7Z1vTgnDF8sFXcfXOzNeeEoiGv8dtzXPpzbF1eCxcRIzu+HuJY1gWVqFPdEY8uPyJig0v7cF4Omz5dn7T00gHtjkfxq5v6tn2K5fyDk62Zx1BEHsT06JJ564vHgWvOb3wYlUFcCjKUPT7sSqS8RpuqJLxaNTaLOJMwypjsWDKLeZFRV3vjdsTyZulNQt+lv00cHUqg/FYGrB3TYdTmVPgbDvnikIXUw/aShZJ6YlEZfQ3Cs+EJ8fet0+kuHsTT9UngGfWZAjgsG/QL75AX6Bi6Fmw+uSsqk/0w83VF7tPhCJnMw4Xe36ad0p4l5mNBJyHxoYi5myPFFZuZjRu7KIdcbfTEzpyyMaXbv9sv5WcwrCyULJ9+/1tzC3CzYLOyvtzA/C47M2f5sbaiVOVphDDGUWpmnFW+m3DKcZjPXbDSWhrOZrw09ZVA25mxDigzYxrxz4JGDcph7DqbcF0JzmH8ulqkiiFz2kIudYkwrO/uwixC6zt1oZy92iBRG9HawHwdE+uaDDvbkQJuTw6Ii0vLYVx6kzJo89uaESP+j5mR/TgyPEkk42aMLc3afy6ye6GKfLqwL9Wdv+eFir27oztnGCTf7dUMeW+Jmz26IVipvuNm3GzLuAIW9K1ghjucr7F9BUOkMowKFHCjYI9a/UMiDioT61oYjlVyokDVOVcmHCpeQU62SExViSny9Sl40jJcBaeRGg0gjsEwjPxokHjc1cqShvSzSQ5482PZaAOAhVx5ES3A85MuDE4Xig4eceWGVi73kzQtB2dFiL7nzYqQMzkv+vPggavjrJYc65m5sYkSqk0cdcu0ynVzq2BAgFOnkU0eYMuHdqM4+curDIVFvgY+8+pBuuLJU+MitD9LWKx/59UO0GxnjJ8d+GEt/dZvuJ89+TBPYnPSTaz8ayCsf/wBAMR2uuAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhQYCvhwMDA8CBwhwiIBvKFwbT7Q0EQnbBDTtCBkYFBYZ07P4h2MDbmxaBB+qtEeJBpB67rnFBzOZBpoPlgmkEzhh2D/v//f3z/IVYQv0FkHVE00F0otMPDKhaoPDMyDZTHSgP9yQTmx/TjpYH+YUSmHywuYISGD4IGhkfD60AGsH9AanHRTEBzW1//tYfREHf/QaG5rv/GShsbg2mgu36B6IT+Qz9R6B1yeGmg+T8I0ozg+PgONfcrnIaIf7aHhNsnfHRCWhqYBvrvI9TcDyC6Ief5e3z0g4qX7+A0yL6Qx28xaJB5CU/fQPW9xkYDwwmFZrha8RLsPufuF8j0gbJ9z5FpoLqnYHdHpTwG080HHhFDM6yRgfDZGh+i0Pp3H4Dd9ToQkwam9/v+vfdB9P4TZfdAdPwuzzvItL2x8W0MGqR/et4tMN+88yYGDXLPvys3MGiQPXPfX4fTIHEmbRT6wELXa3AaqK7eMeEqnAaFJ8eaK1hpHqbLOGmQ/gOnLmKj93ubE0XHW265AKLnH1G4APa/2M1zBOm/QA06m87CaYh7z8BpUPhfUDqNTP9fLXMKnH4FIk7io4HxdwJO/wPH43E4DYqHLSeOgWj5uyrHwOH5+e8RbPQCmSgEDdT/v2HqYRBdPz3vEDScDmLQAH2k+be4BQAA"},"shape":[183],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316618","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316619"}}},"glyph":{"type":"object","name":"Line","id":"p316614","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316615","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p316616","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p316627","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316621","attributes":{"selected":{"type":"object","name":"Selection","id":"p316622","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316623"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p316628","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316629"}}},"glyph":{"type":"object","name":"Line","id":"p316624","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316625","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p316626","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p316566","attributes":{"tools":[{"id":"p316579"},{"id":"p316580"},{"id":"p316581"},{"id":"p316589"},{"type":"object","name":"SaveTool","id":"p316590"},{"id":"p316631"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p316574","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p316575","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p316576"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p316577"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p316569","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p316570","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p316571"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p316572"}}}],"center":[{"type":"object","name":"Grid","id":"p316573","attributes":{"axis":{"id":"p316569"}}},{"type":"object","name":"Grid","id":"p316578","attributes":{"dimension":1,"axis":{"id":"p316574"}}},{"type":"object","name":"Legend","id":"p316609","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p316610","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p316606"}]}},{"type":"object","name":"LegendItem","id":"p316620","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p316617"}]}},{"type":"object","name":"LegendItem","id":"p316630","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p316627"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p316632","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p316642","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p316634"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p316643"},"y_scale":{"type":"object","name":"LinearScale","id":"p316644"},"title":{"type":"object","name":"Title","id":"p316635","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p316673","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316667","attributes":{"selected":{"type":"object","name":"Selection","id":"p316668","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316669"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoGHJ/9/2Vs/nHF66kdnB2NiY+9bFn/YtAk4VnhZX7LPXbg1bJ33dfvWqVU6rrD/YM+AwBwCScwrhYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316674","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316675"}}},"glyph":{"type":"object","name":"Line","id":"p316670","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316671","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p316672","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p316682","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316676","attributes":{"selected":{"type":"object","name":"Selection","id":"p316677","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316678"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoGHJ/9/2Vs/nHF66kdnB2NiY+9bFn/YtAk4VnhZX7LPXbg1bJ33dfvWqVU6rrD/YM+AwBwCScwrhYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316683","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316684"}}},"glyph":{"type":"object","name":"Line","id":"p316679","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316680","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p316681","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p316693","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316687","attributes":{"selected":{"type":"object","name":"Selection","id":"p316688","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316689"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoGHJ/9/2Vs/nHF66kdnB2NiY+9bFn/YtAk4VnhZX7LPXbg1bJ33dfvWqVU6rrD/YM+AwBwCScwrhYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316694","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316695"}}},"glyph":{"type":"object","name":"Line","id":"p316690","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316691","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p316692","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p316703","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316697","attributes":{"selected":{"type":"object","name":"Selection","id":"p316698","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316699"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p316704","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316705"}}},"glyph":{"type":"object","name":"Line","id":"p316700","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316701","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p316702","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p316641","attributes":{"tools":[{"id":"p316655"},{"id":"p316656"},{"id":"p316657"},{"id":"p316665"},{"type":"object","name":"SaveTool","id":"p316666"},{"id":"p316707"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p316650","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p316651","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p316652"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p316653"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p316645","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p316646"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p316647"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p316648"}}}],"center":[{"type":"object","name":"Grid","id":"p316649","attributes":{"axis":{"id":"p316645"}}},{"type":"object","name":"Grid","id":"p316654","attributes":{"dimension":1,"axis":{"id":"p316650"}}},{"type":"object","name":"Legend","id":"p316685","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p316686","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p316682"}]}},{"type":"object","name":"LegendItem","id":"p316696","attributes":{"label":{"type":"value","value":"Median Year (1969)"},"renderers":[{"id":"p316693"}]}},{"type":"object","name":"LegendItem","id":"p316706","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p316703"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p316718","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"77bed8c6-b320-4133-a3f6-f7f07e864933","roots":{"p316719":"b623778a-267c-4a8d-a3dd-7c7fd7faeab6"},"root_ids":["p316719"]}];
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