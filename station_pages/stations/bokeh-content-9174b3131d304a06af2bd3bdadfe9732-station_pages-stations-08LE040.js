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
    
    
    const element = document.getElementById("f206c5f4-937e-4d4a-9a11-72233e65a4cc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f206c5f4-937e-4d4a-9a11-72233e65a4cc' but no matching script tag was found.")
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
                  const docs_json = '{"3c9931e1-7362-4591-a645-7839ac3a5675":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p431340","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p431341"}}},"roots":[{"type":"object","name":"Column","id":"p431513","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p431510","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p431509","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p431502","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p431364"},{"type":"object","name":"PanTool","id":"p431440"}]}},{"type":"object","name":"ToolProxy","id":"p431503","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p431365","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p431441","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p431504","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p431366","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p431367","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p431373","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p431372","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p431442","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p431443","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p431449","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p431448","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p431505","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p431374"},{"type":"object","name":"ResetTool","id":"p431450"}]}},{"type":"object","name":"SaveTool","id":"p431506"},{"type":"object","name":"ToolProxy","id":"p431507","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p431416","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p431508","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p431501","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p431342","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p431343"},"y_range":{"type":"object","name":"DataRange1d","id":"p431344"},"x_scale":{"type":"object","name":"LinearScale","id":"p431352"},"y_scale":{"type":"object","name":"LogScale","id":"p431353"},"title":{"type":"object","name":"Title","id":"p431345","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p431382","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431376","attributes":{"selected":{"type":"object","name":"Selection","id":"p431377","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431378"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHAwNpZxYIDSaWlpx7I5ZRxmzZw50+uVpMPZM2dyNE+Lg+U51ogC1Rgr93gJg9Q9e8At4ODxsMpkwgIuhyJbrumG5ewgdQfkWlnhdOvrwApbLlaHapF17AwMLFBxZji9Q65Vu66H0cHtYVXJpw1/7Ccc+sqxzv2nfY3IOnVj4+/2QHdYbvv81R5oj4j8ly/2QGdV1lz4bA+0X81n2Sd7W67rh3/O/mAPMu/z3zc46VeBO+51L3wD0rfshccr+0dVIn5B6i/sY/sPmdrsfQZSl9B/6CmcPnHmTM/f1Mf2kjH9TBYtt0DiDTnPL8PpvXKtuzkeXrTPAYbDPJszYH0CESfhdL4tl/lh3hP2ja8DJVYaHLP/9/9/fP+hozjp14E76jS4joD18+keGsx0w6cNB+yz09La5rTutT/4VWPP3cjd9pcWF8w9XLPT/hnQHyvnb7f/DfbXVpx066GvGYf0t9obANNTX+lG+7///8+X0l9LNu20Q27pGbaV9rrGxpet/Rbaf/r/355jzRyq0QBTLmkWKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431383","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431384"}}},"glyph":{"type":"object","name":"Line","id":"p431379","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431380","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p431381","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p431391","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431385","attributes":{"selected":{"type":"object","name":"Selection","id":"p431386","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431387"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHAwNpZxYIDSaWlpx7I5ZRxmzZw50+uVpMPZM2dyNE+Lg+U51ogC1Rgr93gJg9Q9e8At4ODxsMpkwgIuhyJbrumG5ewgdQfkWlnhdOvrwApbLlaHapF17AwMLFBxZji9Q65Vu66H0cHtYVXJpw1/7Ccc+sqxzv2nfY3IOnVj4+/2QHdYbvv81R5oj4j8ly/2QGdV1lz4bA+0X81n2Sd7W67rh3/O/mAPMu/z3zc46VeBO+51L3wD0rfshccr+0dVIn5B6i/sY/sPmdrsfQZSl9B/6CmcPnHmTM/f1Mf2kjH9TBYtt0DiDTnPL8PpvXKtuzkeXrTPAYbDPJszYH0CESfhdL4tl/lh3hP2ja8DJVYaHLP/9/9/fP+hozjp14E76jS4joD18+keGsx0w6cNB+yz09La5rTutT/4VWPP3cjd9pcWF8w9XLPT/hnQHyvnb7f/DfbXVpx066GvGYf0t9obANNTX+lG+7///8+X0l9LNu20Q27pGbaV9rrGxpet/Rbaf/r/355jzRyq0QBTLmkWKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431392","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431393"}}},"glyph":{"type":"object","name":"Line","id":"p431388","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431389","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p431390","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p431402","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431396","attributes":{"selected":{"type":"object","name":"Selection","id":"p431397","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431398"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xO65Z2hv/CvvRCY5nXoe2wBRGIOEL6sgw+Q3NuiBBVXc7gQ51TN+VYTKq/rsAoMDKDqjBzeqm6ZfiHOBKrezAEk+k3IAqrP0qFI5nihzHFrqH5bB5Bqp2p7qDkODkBFQBMcoeY5OciClBc6Q811cdgHNO2WtyvUfDeHeJCxqu5QezwcGMDAE2qfp8MikPAtL6i93g5g5Vt8oPb7OjwBGdPnB3WHP0TeJADqngAHYZA6xUCouwIdwNbyBUHdFwTR9zsI6s5gh1aQ814EQ90b4hAWCgRXQ6DuDnVQAwkfCoW6P8zhO8gh68Og/gh3ABszJxzqnwiHGSBndUZA/RXpAABXFTfSsAEAAA=="},"shape":[54],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHAwNpZxYGBgSNghJwGiG2y5RED0gpkzuUH0AblWVjSaGZl+ELjjlz2E/gaiD5w58wVEK8T0fwLzP/99g412eFj1AkQn9B96Cqf///9/37/3OojfkPP8MjKdIBBxEk7/+/8/vv/QUZw0SB2f7iGq0yDzJ77dA3XHTvvfYPu2YtB///+fL6W/liD96f9/e441c4imAc2WiuiwAQAA"},"shape":[54],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431403","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431404"}}},"glyph":{"type":"object","name":"Line","id":"p431399","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431400","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p431401","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p431412","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431406","attributes":{"selected":{"type":"object","name":"Selection","id":"p431407","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431408"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p431413","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431414"}}},"glyph":{"type":"object","name":"Line","id":"p431409","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431410","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p431411","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p431351","attributes":{"tools":[{"id":"p431364"},{"id":"p431365"},{"id":"p431366"},{"id":"p431374"},{"type":"object","name":"SaveTool","id":"p431375"},{"id":"p431416"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p431359","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p431360","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p431361"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p431362"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p431354","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p431355","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p431356"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p431357"}}}],"center":[{"type":"object","name":"Grid","id":"p431358","attributes":{"axis":{"id":"p431354"}}},{"type":"object","name":"Grid","id":"p431363","attributes":{"dimension":1,"axis":{"id":"p431359"}}},{"type":"object","name":"Legend","id":"p431394","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p431395","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p431391"}]}},{"type":"object","name":"LegendItem","id":"p431405","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p431402"}]}},{"type":"object","name":"LegendItem","id":"p431415","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p431412"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p431417","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p431427","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p431419"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p431428"},"y_scale":{"type":"object","name":"LinearScale","id":"p431429"},"title":{"type":"object","name":"Title","id":"p431420","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p431458","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431452","attributes":{"selected":{"type":"object","name":"Selection","id":"p431453","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431454"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxUov///3/fv/e6/b///+P7Dx21BwBGPgo3YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431459","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431460"}}},"glyph":{"type":"object","name":"Line","id":"p431455","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431456","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p431457","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p431467","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431461","attributes":{"selected":{"type":"object","name":"Selection","id":"p431462","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431463"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////9C0q77VeuWlXl8+GAPQMDwxaZqAP2aWlpz2SXn7C37HsccSjpF0hchWUalwNQfF1RxkWQ+ldLZ2+xP33mzBLGPVtB8kDwox6dBgDl000wYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431468","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431469"}}},"glyph":{"type":"object","name":"Line","id":"p431464","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431465","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p431466","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p431476","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431470","attributes":{"selected":{"type":"object","name":"Selection","id":"p431471","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431472"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////9C0q77VeuWlXl8+GAPQMDwxaZqAP2aWlpz2SXn7C37HsccSjpF0hchWUalwNQfF1RxkWQ+ldLZ2+xP33mzBLGPVtB8kDwo/4/0Dz/3uv2//7/j+8/dNQeAAp1RBNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431477","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431478"}}},"glyph":{"type":"object","name":"Line","id":"p431473","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431474","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p431475","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p431487","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431481","attributes":{"selected":{"type":"object","name":"Selection","id":"p431482","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431483"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxUov///3/fv/e6/b///+P7Dx21BwBGPgo3YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p431488","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431489"}}},"glyph":{"type":"object","name":"Line","id":"p431484","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431485","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p431486","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p431497","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p431491","attributes":{"selected":{"type":"object","name":"Selection","id":"p431492","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p431493"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p431498","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p431499"}}},"glyph":{"type":"object","name":"Line","id":"p431494","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p431495","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p431496","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p431426","attributes":{"tools":[{"id":"p431440"},{"id":"p431441"},{"id":"p431442"},{"id":"p431450"},{"type":"object","name":"SaveTool","id":"p431451"},{"id":"p431501"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p431435","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p431436","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p431437"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p431438"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p431430","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p431431"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p431432"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p431433"}}}],"center":[{"type":"object","name":"Grid","id":"p431434","attributes":{"axis":{"id":"p431430"}}},{"type":"object","name":"Grid","id":"p431439","attributes":{"dimension":1,"axis":{"id":"p431435"}}},{"type":"object","name":"Legend","id":"p431479","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p431480","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p431476"}]}},{"type":"object","name":"LegendItem","id":"p431490","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p431487"}]}},{"type":"object","name":"LegendItem","id":"p431500","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p431497"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p431512","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"3c9931e1-7362-4591-a645-7839ac3a5675","roots":{"p431513":"f206c5f4-937e-4d4a-9a11-72233e65a4cc"},"root_ids":["p431513"]}];
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