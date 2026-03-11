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
    
    
    const element = document.getElementById("f1d106da-c6fa-4759-a1d6-ed0860869e6f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f1d106da-c6fa-4759-a1d6-ed0860869e6f' but no matching script tag was found.")
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
                  const docs_json = '{"a4274712-3f65-463b-bc2d-4a0da7ef4e43":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p509869","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p509870"}}},"roots":[{"type":"object","name":"Column","id":"p510033","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p510030","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p510029","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p510022","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p509893"},{"type":"object","name":"PanTool","id":"p509969"}]}},{"type":"object","name":"ToolProxy","id":"p510023","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p509894","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p509970","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p510024","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p509895","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p509896","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p509902","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p509901","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p509971","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p509972","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p509978","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p509977","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p510025","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p509903"},{"type":"object","name":"ResetTool","id":"p509979"}]}},{"type":"object","name":"SaveTool","id":"p510026"},{"type":"object","name":"ToolProxy","id":"p510027","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p509945","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p510028","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p510021","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p509871","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p509872"},"y_range":{"type":"object","name":"DataRange1d","id":"p509873"},"x_scale":{"type":"object","name":"LinearScale","id":"p509881"},"y_scale":{"type":"object","name":"LogScale","id":"p509882"},"title":{"type":"object","name":"Title","id":"p509874","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p509911","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509905","attributes":{"selected":{"type":"object","name":"Selection","id":"p509906","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509907"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDgw9/1jewYEnXBwxSN7RgYGBdmT90E0g2YMJm1ibNzdGnUXxF/guu022fS5M2fWLPG7Yf///397Y+PLJNPGxsabK49ftGdmYChIsT5vf/HMGZ3lL06A5PfPfX98wGmQ+5ZVHgeFKwOTNgo9YcGPo/azZs6UTDx82H7mzJk/Obr22//+/99/l+ce+7///893f7hrwOnktLRj2qk77bWMjZ0vTtwCcl/8npLNg5b+9/+/PjDIQeHevG7bJvuktLQ08e0b7T///99vb7oOJL+/ZPIKkmkA9vq+KygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509912","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509913"}}},"glyph":{"type":"object","name":"Line","id":"p509908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509909","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p509910","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p509920","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509914","attributes":{"selected":{"type":"object","name":"Selection","id":"p509915","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509916"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDgw9/1jewYEnXBwxSN7RgYGBdmT90E0g2YMJm1ibNzdGnUXxF/guu022fS5M2fWLPG7Yf///397Y+PLJNPGxsabK49ftGdmYChIsT5vf/HMGZ3lL06A5PfPfX98wGmQ+5ZVHgeFKwOTNgo9YcGPo/azZs6UTDx82H7mzJk/Obr22//+/99/l+ce+7///893f7hrwOnktLRj2qk77bWMjZ0vTtwCcl/8npLNg5b+9/+/PjDIQeHevG7bJvuktLQ08e0b7T///99vb7oOJL+/ZPIKkmkA9vq+KygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509921","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509922"}}},"glyph":{"type":"object","name":"Line","id":"p509917","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p509919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p509931","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509925","attributes":{"selected":{"type":"object","name":"Selection","id":"p509926","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509927"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2PQU4CQRBFWboGF65YkBhITIwhEo0d4SvgIGozDDMMbMc7jGcY7wB3gDPgHYY7wJ6l6eb1pruqfv33e1+symJ16u39faHvZp4186rO9ZUmh5097Or0G1qXbnDNvKVLs6mZzQ26W/1Z97hD31bFn3v2OvLy2gP7j/rJnPAJH6OtG5tn/LrK/Vz4Ct0L/q/o+3AG7A3gDXV0pX2DG+jXYcsA/kjeJnsnxxjOGM6HfDv/hPMFx8Kx8nbFhJwhdYhPqLNsit+UHBH5I/JE+M/INYMTky+GF8NJ+F8CJ+GfczhzOCn5UzipfNss4CzgLPUPv1RaTAgCAAA="},"shape":[65],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDgw9/1je0YGBgbNmPvY6AWu224TTf///9/e2PgyQRpoPMO/KxdA/P1z3x+nGQ2yh0kbhT7w+e8R+59ABTqb9tr//f9/vvvDXTSjf///H7+nZDPdaKC3/q/8uAnE31+UsdH+H5AumbyCIA0A8COgEAgCAAA="},"shape":[65],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509932","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509933"}}},"glyph":{"type":"object","name":"Line","id":"p509928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509929","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p509930","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p509941","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509935","attributes":{"selected":{"type":"object","name":"Selection","id":"p509936","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509937"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p509942","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509943"}}},"glyph":{"type":"object","name":"Line","id":"p509938","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509939","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p509940","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p509880","attributes":{"tools":[{"id":"p509893"},{"id":"p509894"},{"id":"p509895"},{"id":"p509903"},{"type":"object","name":"SaveTool","id":"p509904"},{"id":"p509945"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p509888","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p509889","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p509890"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p509891"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p509883","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p509884","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p509885"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p509886"}}}],"center":[{"type":"object","name":"Grid","id":"p509887","attributes":{"axis":{"id":"p509883"}}},{"type":"object","name":"Grid","id":"p509892","attributes":{"dimension":1,"axis":{"id":"p509888"}}},{"type":"object","name":"Legend","id":"p509923","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p509924","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p509920"}]}},{"type":"object","name":"LegendItem","id":"p509934","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p509931"}]}},{"type":"object","name":"LegendItem","id":"p509944","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p509941"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p509946","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p509956","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p509948"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p509957"},"y_scale":{"type":"object","name":"LinearScale","id":"p509958"},"title":{"type":"object","name":"Title","id":"p509949","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p509987","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509981","attributes":{"selected":{"type":"object","name":"Selection","id":"p509982","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509983"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9P////1N407ZB3tp8q6RuWTf2tHB8ebpFnsGHOpx0QAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509988","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509989"}}},"glyph":{"type":"object","name":"Line","id":"p509984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509985","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p509986","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p509996","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509990","attributes":{"selected":{"type":"object","name":"Selection","id":"p509991","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509992"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9P////1N407ZB3tp8q6RuWTf2tHB8ebpFnsGHOpx0QAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509997","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509998"}}},"glyph":{"type":"object","name":"Line","id":"p509993","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509994","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p509995","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p510007","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510001","attributes":{"selected":{"type":"object","name":"Selection","id":"p510002","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510003"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9P////1N407ZB3tp8q6RuWTf2tHB8ebpFnsGHOpx0QAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510008","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510009"}}},"glyph":{"type":"object","name":"Line","id":"p510004","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510005","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p510006","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p510017","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510011","attributes":{"selected":{"type":"object","name":"Selection","id":"p510012","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510013"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p510018","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510019"}}},"glyph":{"type":"object","name":"Line","id":"p510014","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510015","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510016","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p509955","attributes":{"tools":[{"id":"p509969"},{"id":"p509970"},{"id":"p509971"},{"id":"p509979"},{"type":"object","name":"SaveTool","id":"p509980"},{"id":"p510021"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p509964","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p509965","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p509966"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p509967"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p509959","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p509960"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p509961"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p509962"}}}],"center":[{"type":"object","name":"Grid","id":"p509963","attributes":{"axis":{"id":"p509959"}}},{"type":"object","name":"Grid","id":"p509968","attributes":{"dimension":1,"axis":{"id":"p509964"}}},{"type":"object","name":"Legend","id":"p509999","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p510000","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p509996"}]}},{"type":"object","name":"LegendItem","id":"p510010","attributes":{"label":{"type":"value","value":"Median Year (1928)"},"renderers":[{"id":"p510007"}]}},{"type":"object","name":"LegendItem","id":"p510020","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p510017"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p510032","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"a4274712-3f65-463b-bc2d-4a0da7ef4e43","roots":{"p510033":"f1d106da-c6fa-4759-a1d6-ed0860869e6f"},"root_ids":["p510033"]}];
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