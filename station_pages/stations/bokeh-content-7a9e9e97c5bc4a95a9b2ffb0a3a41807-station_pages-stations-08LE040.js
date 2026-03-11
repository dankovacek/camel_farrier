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
    
    
    const element = document.getElementById("e8744f5c-0bbd-4150-8dce-8360116c4686");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e8744f5c-0bbd-4150-8dce-8360116c4686' but no matching script tag was found.")
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
                  const docs_json = '{"9b760a94-54ab-4c64-9af1-cfa7e7f77d5b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p431727","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p431728"}}},"roots":[{"type":"object","name":"Column","id":"p431900","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p431897","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p431896","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p431889","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p431751"},{"type":"object","name":"PanTool","id":"p431827"}]}},{"type":"object","name":"ToolProxy","id":"p431890","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p431752","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p431828","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p431891","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p431753","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p431754","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p431760","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p431759","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p431829","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p431830","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p431836","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p431835","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p431892","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p431761"},{"type":"object","name":"ResetTool","id":"p431837"}]}},{"type":"object","name":"SaveTool","id":"p431893"},{"type":"object","name":"ToolProxy","id":"p431894","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p431803","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p431895","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p431888","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p431729","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p431730"},"y_range":{"type":"object","name":"DataRange1d","id":"p431731"},"x_scale":{"type":"object","name":"LinearScale","id":"p431739"},"y_scale":{"type":"object","name":"LogScale","id":"p431740"},"title":{"type":"object","name":"Title","id":"p431732","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p431769","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431763","attributes":{"selected":{"type":"object","name":"Selection","id":"p431764","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431765"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHAwNpZxYIDSaWlpx7I5ZRxmzZw50+uVpMPZM2dyNE+Lg+U51ogC1Rgr93gJg9Q9e8At4ODxsMpkwgIuhyJbrumG5ewgdQfkWlnhdOvrwApbLlaHapF17AwMLFBxZji9Q65Vu66H0cHtYVXJpw1/7Ccc+sqxzv2nfY3IOnVj4+/2QHdYbvv81R5oj4j8ly/2QGdV1lz4bA+0X81n2Sd7W67rh3/O/mAPMu/z3zc46VeBO+51L3wD0rfshccr+0dVIn5B6i/sY/sPmdrsfQZSl9B/6CmcPnHmTM/f1Mf2kjH9TBYtt0DiDTnPL8PpvXKtuzkeXrTPAYbDPJszYH0CESfhdL4tl/lh3hP2ja8DJVYaHLP/9/9/fP+hozjp14E76jS4joD18+keGsx0w6cNB+yz09La5rTutT/4VWPP3cjd9pcWF8w9XLPT/hnQHyvnb7f/DfbXVpx066GvGYf0t9obANNTX+lG+7///8+X0l9LNu20Q27pGbaV9rrGxpet/Rbaf/r/355jzRyq0QBTLmkWKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431770","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431771"}}},"glyph":{"type":"object","name":"Line","id":"p431766","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431767","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p431768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p431778","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431772","attributes":{"selected":{"type":"object","name":"Selection","id":"p431773","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431774"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHAwNpZxYIDSaWlpx7I5ZRxmzZw50+uVpMPZM2dyNE+Lg+U51ogC1Rgr93gJg9Q9e8At4ODxsMpkwgIuhyJbrumG5ewgdQfkWlnhdOvrwApbLlaHapF17AwMLFBxZji9Q65Vu66H0cHtYVXJpw1/7Ccc+sqxzv2nfY3IOnVj4+/2QHdYbvv81R5oj4j8ly/2QGdV1lz4bA+0X81n2Sd7W67rh3/O/mAPMu/z3zc46VeBO+51L3wD0rfshccr+0dVIn5B6i/sY/sPmdrsfQZSl9B/6CmcPnHmTM/f1Mf2kjH9TBYtt0DiDTnPL8PpvXKtuzkeXrTPAYbDPJszYH0CESfhdL4tl/lh3hP2ja8DJVYaHLP/9/9/fP+hozjp14E76jS4joD18+keGsx0w6cNB+yz09La5rTutT/4VWPP3cjd9pcWF8w9XLPT/hnQHyvnb7f/DfbXVpx066GvGYf0t9obANNTX+lG+7///8+X0l9LNu20Q27pGbaV9rrGxpet/Rbaf/r/355jzRyq0QBTLmkWKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431779","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431780"}}},"glyph":{"type":"object","name":"Line","id":"p431775","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431776","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p431777","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p431789","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431783","attributes":{"selected":{"type":"object","name":"Selection","id":"p431784","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431785"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xO65Z2hv/CvvRCY5nXoe2wBRGIOEL6sgw+Q3NuiBBVXc7gQ51TN+VYTKq/rsAoMDKDqjBzeqm6ZfiHOBKrezAEk+k3IAqrP0qFI5nihzHFrqH5bB5Bqp2p7qDkODkBFQBMcoeY5OciClBc6Q811cdgHNO2WtyvUfDeHeJCxqu5QezwcGMDAE2qfp8MikPAtL6i93g5g5Vt8oPb7OjwBGdPnB3WHP0TeJADqngAHYZA6xUCouwIdwNbyBUHdFwTR9zsI6s5gh1aQ814EQ90b4hAWCgRXQ6DuDnVQAwkfCoW6P8zhO8gh68Og/gh3ABszJxzqnwiHGSBndUZA/RXpAABXFTfSsAEAAA=="},"shape":[54],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHAwNpZxYGBgSNghJwGiG2y5RED0gpkzuUH0AblWVjSaGZl+ELjjlz2E/gaiD5w58wVEK8T0fwLzP/99g412eFj1AkQn9B96Cqf///9/37/3OojfkPP8MjKdIBBxEk7/+/8/vv/QUZw0SB2f7iGq0yDzJ77dA3XHTvvfYPu2YtB///+fL6W/liD96f9/e441c4imAc2WiuiwAQAA"},"shape":[54],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431790","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431791"}}},"glyph":{"type":"object","name":"Line","id":"p431786","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431787","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p431788","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p431799","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431793","attributes":{"selected":{"type":"object","name":"Selection","id":"p431794","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431795"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p431800","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431801"}}},"glyph":{"type":"object","name":"Line","id":"p431796","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431797","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p431798","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p431738","attributes":{"tools":[{"id":"p431751"},{"id":"p431752"},{"id":"p431753"},{"id":"p431761"},{"type":"object","name":"SaveTool","id":"p431762"},{"id":"p431803"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p431746","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p431747","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p431748"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p431749"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p431741","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p431742","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p431743"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p431744"}}}],"center":[{"type":"object","name":"Grid","id":"p431745","attributes":{"axis":{"id":"p431741"}}},{"type":"object","name":"Grid","id":"p431750","attributes":{"dimension":1,"axis":{"id":"p431746"}}},{"type":"object","name":"Legend","id":"p431781","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p431782","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p431778"}]}},{"type":"object","name":"LegendItem","id":"p431792","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p431789"}]}},{"type":"object","name":"LegendItem","id":"p431802","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p431799"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p431804","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p431814","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p431806"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p431815"},"y_scale":{"type":"object","name":"LinearScale","id":"p431816"},"title":{"type":"object","name":"Title","id":"p431807","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p431845","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431839","attributes":{"selected":{"type":"object","name":"Selection","id":"p431840","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431841"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxUov///3/fv/e6/b///+P7Dx21BwBGPgo3YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431846","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431847"}}},"glyph":{"type":"object","name":"Line","id":"p431842","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431843","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p431844","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p431854","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431848","attributes":{"selected":{"type":"object","name":"Selection","id":"p431849","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431850"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////9C0q77VeuWlXl8+GAPQMDwxaZqAP2aWlpz2SXn7C37HsccSjpF0hchWUalwNQfF1RxkWQ+ldLZ2+xP33mzBLGPVtB8kDwox6dBgDl000wYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431855","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431856"}}},"glyph":{"type":"object","name":"Line","id":"p431851","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p431853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p431863","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431857","attributes":{"selected":{"type":"object","name":"Selection","id":"p431858","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431859"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////9C0q77VeuWlXl8+GAPQMDwxaZqAP2aWlpz2SXn7C37HsccSjpF0hchWUalwNQfF1RxkWQ+ldLZ2+xP33mzBLGPVtB8kDwo/4/0Dz/3uv2//7/j+8/dNQeAAp1RBNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431864","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431865"}}},"glyph":{"type":"object","name":"Line","id":"p431860","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431861","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p431862","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p431874","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431868","attributes":{"selected":{"type":"object","name":"Selection","id":"p431869","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431870"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxUov///3/fv/e6/b///+P7Dx21BwBGPgo3YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431875","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431876"}}},"glyph":{"type":"object","name":"Line","id":"p431871","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p431873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p431884","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431878","attributes":{"selected":{"type":"object","name":"Selection","id":"p431879","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431880"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p431885","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431886"}}},"glyph":{"type":"object","name":"Line","id":"p431881","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p431883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p431813","attributes":{"tools":[{"id":"p431827"},{"id":"p431828"},{"id":"p431829"},{"id":"p431837"},{"type":"object","name":"SaveTool","id":"p431838"},{"id":"p431888"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p431822","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p431823","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p431824"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p431825"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p431817","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p431818"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p431819"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p431820"}}}],"center":[{"type":"object","name":"Grid","id":"p431821","attributes":{"axis":{"id":"p431817"}}},{"type":"object","name":"Grid","id":"p431826","attributes":{"dimension":1,"axis":{"id":"p431822"}}},{"type":"object","name":"Legend","id":"p431866","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p431867","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p431863"}]}},{"type":"object","name":"LegendItem","id":"p431877","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p431874"}]}},{"type":"object","name":"LegendItem","id":"p431887","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p431884"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p431899","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"9b760a94-54ab-4c64-9af1-cfa7e7f77d5b","roots":{"p431900":"e8744f5c-0bbd-4150-8dce-8360116c4686"},"root_ids":["p431900"]}];
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