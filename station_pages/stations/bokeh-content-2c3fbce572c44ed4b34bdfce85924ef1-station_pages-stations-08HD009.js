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
    
    
    const element = document.getElementById("c8c519e0-1c18-4709-9e22-1219681ecdcf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c8c519e0-1c18-4709-9e22-1219681ecdcf' but no matching script tag was found.")
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
                  const docs_json = '{"ee4d4273-1827-4645-af71-65861539a609":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p316914","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p316915"}}},"roots":[{"type":"object","name":"Column","id":"p317078","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p317075","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p317074","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p317067","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p316938"},{"type":"object","name":"PanTool","id":"p317014"}]}},{"type":"object","name":"ToolProxy","id":"p317068","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p316939","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p317015","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p317069","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p316940","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p316941","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p316947","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p316946","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p317016","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p317017","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p317023","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p317022","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p317070","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p316948"},{"type":"object","name":"ResetTool","id":"p317024"}]}},{"type":"object","name":"SaveTool","id":"p317071"},{"type":"object","name":"ToolProxy","id":"p317072","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p316990","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p317073","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p317066","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p316916","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p316917"},"y_range":{"type":"object","name":"DataRange1d","id":"p316918"},"x_scale":{"type":"object","name":"LinearScale","id":"p316926"},"y_scale":{"type":"object","name":"LogScale","id":"p316927"},"title":{"type":"object","name":"Title","id":"p316919","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p316956","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316950","attributes":{"selected":{"type":"object","name":"Selection","id":"p316951","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316952"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhQYCvh8E0jZn5ToKjD4a8aNcvDhRzWuT9cJpgq4MDIwOBgbMzrMGvmTENDDl4HBgaGB1UiPA5LCmw/nX7H4XDoq4bN2kwOkDiDZgy7Q1pa2jb3h2wgfoPIOlZstMI6dzAdsEOOBWRuZcZEZqg4s8PrwB11Oc+ZwPyYfhTages6o0P/oa8e4dGMIHXHPHkYHVqBjF42BrD9IDXfNWLiNU//s2dmYFiREPLX/mGVyLu+4D/2EP2/7c+eOdMz1fm3vbGxsfLtnz/td8i1ep9P+wmST9gh9xMk/njNrx9g9Q+rELR2TL+Q//rvYHVAN9hfX1xwdKPeZxB/gfvDT/ZtrwNfTL/7yd6O67ryzj8fQfbqzZX9AJJvyHn+3j49LS2vq++9fYEtl7vnrnf2wHBlCHn81l54nbsiE99bqLrXIPqBf+9rkDv/mC98BTbfufuFvWLra87mA8/tO14Hzmh7+BQkr3P75yOQvELzAQRtw3V98kM2CJ+t8SHIP5eP5j4Am/86EEwXGPDet////3/8Ls87IBqo5jacdntYtWXt7ptgvnnnTZB6hn9Xbti3vA7s4J9+w97U2Hjyl9vXweJM2mD6wELXayD19Y4JV8HhxbHmij0bkO50vALm8zBdhtMgdQdOXbRPAaaTzWUXQfz93uYIGuje4oTVF+wnHPq6Yw/DebC7xW6eg9N/gQp1Np2F2nMGpO/+BaXT9l80YtQP2J0Cx49AxElkGujvE/b/gOr8e4+DzE/OPXrM3sjYONpA6yjY/Z//HgGHs0zUEfupM2fetDY8DHXnQTgNAAyCNLAoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316957","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316958"}}},"glyph":{"type":"object","name":"Line","id":"p316953","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316954","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p316955","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p316965","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316959","attributes":{"selected":{"type":"object","name":"Selection","id":"p316960","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316961"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhQYCvh8E0jZn5ToKjD4a8aNcvDhRzWuT9cJpgq4MDIwOBgbMzrMGvmTENDDl4HBgaGB1UiPA5LCmw/nX7H4XDoq4bN2kwOkDiDZgy7Q1pa2jb3h2wgfoPIOlZstMI6dzAdsEOOBWRuZcZEZqg4s8PrwB11Oc+ZwPyYfhTages6o0P/oa8e4dGMIHXHPHkYHVqBjF42BrD9IDXfNWLiNU//s2dmYFiREPLX/mGVyLu+4D/2EP2/7c+eOdMz1fm3vbGxsfLtnz/td8i1ep9P+wmST9gh9xMk/njNrx9g9Q+rELR2TL+Q//rvYHVAN9hfX1xwdKPeZxB/gfvDT/ZtrwNfTL/7yd6O67ryzj8fQfbqzZX9AJJvyHn+3j49LS2vq++9fYEtl7vnrnf2wHBlCHn81l54nbsiE99bqLrXIPqBf+9rkDv/mC98BTbfufuFvWLra87mA8/tO14Hzmh7+BQkr3P75yOQvELzAQRtw3V98kM2CJ+t8SHIP5eP5j4Am/86EEwXGPDet////3/8Ls87IBqo5jacdntYtWXt7ptgvnnnTZB6hn9Xbti3vA7s4J9+w97U2Hjyl9vXweJM2mD6wELXayD19Y4JV8HhxbHmij0bkO50vALm8zBdhtMgdQdOXbRPAaaTzWUXQfz93uYIGuje4oTVF+wnHPq6Yw/DebC7xW6eg9N/gQp1Np2F2nMGpO/+BaXT9l80YtQP2J0Cx49AxElkGujvE/b/gOr8e4+DzE/OPXrM3sjYONpA6yjY/Z//HgGHs0zUEfupM2fetDY8DHXnQTgNAAyCNLAoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316966","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316967"}}},"glyph":{"type":"object","name":"Line","id":"p316962","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316963","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p316964","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p316976","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316970","attributes":{"selected":{"type":"object","name":"Selection","id":"p316971","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316972"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SeWwMYRjGEcR9FVVHtaqqWlW9tFXt093udtvd7u7M7M5upa6ouoKoO4imBHUFQV1BWkdICXHULQhKCEIQjaOCuO8QR8V8n2f+mczMN+/7HD9tdNvDJfPqMjR5/5zxp2N5q/Opv/jcEBFpd57sqG2C/+9b4Pb7oSl1m9rg//f2OOOaerVdVQDPdcKavonfY1t24fmuKGr4s5cyoTv/C0aPSY/3HC8M4f+hWJqPs7Z1vTgnDF8sFXcfXOzNeeEoiGv8dtzXPpzbF1eCxcRIzu+HuJY1gWVqFPdEY8uPyJig0v7cF4Omz5dn7T00gHtjkfxq5v6tn2K5fyDk62Zx1BEHsT06JJ564vHgWvOb3wYlUFcCjKUPT7sSqS8RpuqJLxaNTaLOJMwypjsWDKLeZFRV3vjdsTyZulNQt+lv00cHUqg/FYGrB3TYdTmVPgbDvnikIXUw/aShZJ6YlEZfQ3Cs+EJ8fet0+kuHsTT9UngGfWZAjgsG/QL75AX6Bi6Fmw+uSsqk/0w83VF7tPhCJnMw4Xe36ad0p4l5mNBJyHxoYi5myPFFZuZjRu7KIdcbfTEzpyyMaXbv9sv5WcwrCyULJ9+/1tzC3CzYLOyvtzA/C47M2f5sbaiVOVphDDGUWpmnFW+m3DKcZjPXbDSWhrOZrw09ZVA25mxDigzYxrxz4JGDcph7DqbcF0JzmH8ulqkiiFz2kIudYkwrO/uwixC6zt1oZy92iBRG9HawHwdE+uaDDvbkQJuTw6Ii0vLYVx6kzJo89uaESP+j5mR/TgyPEkk42aMLc3afy6ye6GKfLqwL9Wdv+eFir27oztnGCTf7dUMeW+Jmz26IVipvuNm3GzLuAIW9K1ghjucr7F9BUOkMowKFHCjYI9a/UMiDioT61oYjlVyokDVOVcmHCpeQU62SExViSny9Sl40jJcBaeRGg0gjsEwjPxokHjc1cqShvSzSQ5482PZaAOAhVx5ES3A85MuDE4Xig4eceWGVi73kzQtB2dFiL7nzYqQMzkv+vPggavjrJYc65m5sYkSqk0cdcu0ynVzq2BAgFOnkU0eYMuHdqM4+curDIVFvgY+8+pBuuLJU+MitD9LWKx/59UO0GxnjJ8d+GEt/dZvuJ89+TBPYnPSTaz8ayCsf/wBAMR2uuAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhQYCvhwMDA8CBwhwiIBvKFwbT7Q0EQnbBDTtCBkYFBYZ07P4h2MDbmxaBB+qtEeJBpB67rnFBzOZBpoPlgmkEzhh2D/v//f3z/IVYQv0FkHVE00F0otMPDKhaoPDMyDZTHSgP9yQTmx/TjpYH+YUSmHywuYISGD4IGhkfD60AGsH9AanHRTEBzW1//tYfREHf/QaG5rv/GShsbg2mgu36B6IT+Qz9R6B1yeGmg+T8I0ozg+PgONfcrnIaIf7aHhNsnfHRCWhqYBvrvI9TcDyC6Ief5e3z0g4qX7+A0yL6Qx28xaJB5CU/fQPW9xkYDwwmFZrha8RLsPufuF8j0gbJ9z5FpoLqnYHdHpTwG080HHhFDM6yRgfDZGh+i0Pp3H4Dd9ToQkwam9/v+vfdB9P4TZfdAdPwuzzvItL2x8W0MGqR/et4tMN+88yYGDXLPvys3MGiQPXPfX4fTIHEmbRT6wELXa3AaqK7eMeEqnAaFJ8eaK1hpHqbLOGmQ/gOnLmKj93ubE0XHW265AKLnH1G4APa/2M1zBOm/QA06m87CaYh7z8BpUPhfUDqNTP9fLXMKnH4FIk7io4HxdwJO/wPH43E4DYqHLSeOgWj5uyrHwOH5+e8RbPQCmSgEDdT/v2HqYRBdPz3vEDScDmLQAH2k+be4BQAA"},"shape":[183],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p316977","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316978"}}},"glyph":{"type":"object","name":"Line","id":"p316973","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316974","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p316975","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p316986","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p316980","attributes":{"selected":{"type":"object","name":"Selection","id":"p316981","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p316982"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p316987","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p316988"}}},"glyph":{"type":"object","name":"Line","id":"p316983","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p316984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p316985","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p316925","attributes":{"tools":[{"id":"p316938"},{"id":"p316939"},{"id":"p316940"},{"id":"p316948"},{"type":"object","name":"SaveTool","id":"p316949"},{"id":"p316990"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p316933","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p316934","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p316935"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p316936"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p316928","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p316929","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p316930"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p316931"}}}],"center":[{"type":"object","name":"Grid","id":"p316932","attributes":{"axis":{"id":"p316928"}}},{"type":"object","name":"Grid","id":"p316937","attributes":{"dimension":1,"axis":{"id":"p316933"}}},{"type":"object","name":"Legend","id":"p316968","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p316969","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p316965"}]}},{"type":"object","name":"LegendItem","id":"p316979","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p316976"}]}},{"type":"object","name":"LegendItem","id":"p316989","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p316986"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p316991","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p317001","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p316993"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p317002"},"y_scale":{"type":"object","name":"LinearScale","id":"p317003"},"title":{"type":"object","name":"Title","id":"p316994","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p317032","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p317026","attributes":{"selected":{"type":"object","name":"Selection","id":"p317027","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p317028"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoGHJ/9/2Vs/nHF66kdnB2NiY+9bFn/YtAk4VnhZX7LPXbg1bJ33dfvWqVU6rrD/YM+AwBwCScwrhYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p317033","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p317034"}}},"glyph":{"type":"object","name":"Line","id":"p317029","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p317030","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p317031","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p317041","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p317035","attributes":{"selected":{"type":"object","name":"Selection","id":"p317036","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p317037"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoGHJ/9/2Vs/nHF66kdnB2NiY+9bFn/YtAk4VnhZX7LPXbg1bJ33dfvWqVU6rrD/YM+AwBwCScwrhYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p317042","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p317043"}}},"glyph":{"type":"object","name":"Line","id":"p317038","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p317039","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p317040","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p317052","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p317046","attributes":{"selected":{"type":"object","name":"Selection","id":"p317047","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p317048"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotKCgoGHJ/9/2Vs/nHF66kdnB2NiY+9bFn/YtAk4VnhZX7LPXbg1bJ33dfvWqVU6rrD/YM+AwBwCScwrhYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p317053","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p317054"}}},"glyph":{"type":"object","name":"Line","id":"p317049","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p317050","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p317051","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p317062","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p317056","attributes":{"selected":{"type":"object","name":"Selection","id":"p317057","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p317058"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p317063","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p317064"}}},"glyph":{"type":"object","name":"Line","id":"p317059","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p317060","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p317061","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p317000","attributes":{"tools":[{"id":"p317014"},{"id":"p317015"},{"id":"p317016"},{"id":"p317024"},{"type":"object","name":"SaveTool","id":"p317025"},{"id":"p317066"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p317009","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p317010","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p317011"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p317012"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p317004","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p317005"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p317006"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p317007"}}}],"center":[{"type":"object","name":"Grid","id":"p317008","attributes":{"axis":{"id":"p317004"}}},{"type":"object","name":"Grid","id":"p317013","attributes":{"dimension":1,"axis":{"id":"p317009"}}},{"type":"object","name":"Legend","id":"p317044","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p317045","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p317041"}]}},{"type":"object","name":"LegendItem","id":"p317055","attributes":{"label":{"type":"value","value":"Median Year (1969)"},"renderers":[{"id":"p317052"}]}},{"type":"object","name":"LegendItem","id":"p317065","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p317062"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p317077","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"ee4d4273-1827-4645-af71-65861539a609","roots":{"p317078":"c8c519e0-1c18-4709-9e22-1219681ecdcf"},"root_ids":["p317078"]}];
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