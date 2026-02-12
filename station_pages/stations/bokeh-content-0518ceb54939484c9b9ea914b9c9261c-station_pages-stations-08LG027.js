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
    
    
    const element = document.getElementById("b5063498-065b-4f27-a6a8-6a9b013c0c71");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b5063498-065b-4f27-a6a8-6a9b013c0c71' but no matching script tag was found.")
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
                  const docs_json = '{"f0243a73-2cc5-4af0-b5e5-a428832b6ba7":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p510270","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p510271"}}},"roots":[{"type":"object","name":"Column","id":"p510434","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p510431","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p510430","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p510423","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p510294"},{"type":"object","name":"PanTool","id":"p510370"}]}},{"type":"object","name":"ToolProxy","id":"p510424","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p510295","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p510371","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p510425","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p510296","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p510297","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p510303","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510302","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p510372","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p510373","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p510379","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510378","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p510426","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p510304"},{"type":"object","name":"ResetTool","id":"p510380"}]}},{"type":"object","name":"SaveTool","id":"p510427"},{"type":"object","name":"ToolProxy","id":"p510428","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p510346","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p510429","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p510422","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p510272","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p510273"},"y_range":{"type":"object","name":"DataRange1d","id":"p510274"},"x_scale":{"type":"object","name":"LinearScale","id":"p510282"},"y_scale":{"type":"object","name":"LogScale","id":"p510283"},"title":{"type":"object","name":"Title","id":"p510275","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p510312","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510306","attributes":{"selected":{"type":"object","name":"Selection","id":"p510307","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510308"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDgw9/1jewYEnXBwxSN7RgYGBdmT90E0g2YMJm1ibNzdGnUXxF/guu022fS5M2fWLPG7Yf///397Y+PLJNPGxsabK49ftGdmYChIsT5vf/HMGZ3lL06A5PfPfX98wGmQ+5ZVHgeFKwOTNgo9YcGPo/azZs6UTDx82H7mzJk/Obr22//+/99/l+ce+7///893f7hrwOnktLRj2qk77bWMjZ0vTtwCcl/8npLNg5b+9/+/PjDIQeHevG7bJvuktLQ08e0b7T///99vb7oOJL+/ZPIKkmkA9vq+KygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510313","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510314"}}},"glyph":{"type":"object","name":"Line","id":"p510309","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510310","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510311","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p510321","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510315","attributes":{"selected":{"type":"object","name":"Selection","id":"p510316","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510317"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDgw9/1jewYEnXBwxSN7RgYGBdmT90E0g2YMJm1ibNzdGnUXxF/guu022fS5M2fWLPG7Yf///397Y+PLJNPGxsabK49ftGdmYChIsT5vf/HMGZ3lL06A5PfPfX98wGmQ+5ZVHgeFKwOTNgo9YcGPo/azZs6UTDx82H7mzJk/Obr22//+/99/l+ce+7///893f7hrwOnktLRj2qk77bWMjZ0vTtwCcl/8npLNg5b+9/+/PjDIQeHevG7bJvuktLQ08e0b7T///99vb7oOJL+/ZPIKkmkA9vq+KygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510322","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510323"}}},"glyph":{"type":"object","name":"Line","id":"p510318","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510319","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p510320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p510332","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510326","attributes":{"selected":{"type":"object","name":"Selection","id":"p510327","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510328"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2PQU4CQRBFWboGF65YkBhITIwhEo0d4SvgIGozDDMMbMc7jGcY7wB3gDPgHYY7wJ6l6eb1pruqfv33e1+symJ16u39faHvZp4186rO9ZUmh5097Or0G1qXbnDNvKVLs6mZzQ26W/1Z97hD31bFn3v2OvLy2gP7j/rJnPAJH6OtG5tn/LrK/Vz4Ct0L/q/o+3AG7A3gDXV0pX2DG+jXYcsA/kjeJnsnxxjOGM6HfDv/hPMFx8Kx8nbFhJwhdYhPqLNsit+UHBH5I/JE+M/INYMTky+GF8NJ+F8CJ+GfczhzOCn5UzipfNss4CzgLPUPv1RaTAgCAAA="},"shape":[65],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDgw9/1je0YGBgbNmPvY6AWu224TTf///9/e2PgyQRpoPMO/KxdA/P1z3x+nGQ2yh0kbhT7w+e8R+59ABTqb9tr//f9/vvvDXTSjf///H7+nZDPdaKC3/q/8uAnE31+UsdH+H5AumbyCIA0A8COgEAgCAAA="},"shape":[65],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510333","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510334"}}},"glyph":{"type":"object","name":"Line","id":"p510329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510330","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p510331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p510342","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510336","attributes":{"selected":{"type":"object","name":"Selection","id":"p510337","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510338"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p510343","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510344"}}},"glyph":{"type":"object","name":"Line","id":"p510339","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p510281","attributes":{"tools":[{"id":"p510294"},{"id":"p510295"},{"id":"p510296"},{"id":"p510304"},{"type":"object","name":"SaveTool","id":"p510305"},{"id":"p510346"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p510289","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p510290","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p510291"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510292"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p510284","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p510285","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p510286"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510287"}}}],"center":[{"type":"object","name":"Grid","id":"p510288","attributes":{"axis":{"id":"p510284"}}},{"type":"object","name":"Grid","id":"p510293","attributes":{"dimension":1,"axis":{"id":"p510289"}}},{"type":"object","name":"Legend","id":"p510324","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p510325","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p510321"}]}},{"type":"object","name":"LegendItem","id":"p510335","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p510332"}]}},{"type":"object","name":"LegendItem","id":"p510345","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p510342"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p510347","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p510357","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p510349"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p510358"},"y_scale":{"type":"object","name":"LinearScale","id":"p510359"},"title":{"type":"object","name":"Title","id":"p510350","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p510388","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510382","attributes":{"selected":{"type":"object","name":"Selection","id":"p510383","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510384"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9P////1N407ZB3tp8q6RuWTf2tHB8ebpFnsGHOpx0QAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510389","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510390"}}},"glyph":{"type":"object","name":"Line","id":"p510385","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510386","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510387","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p510397","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510391","attributes":{"selected":{"type":"object","name":"Selection","id":"p510392","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510393"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9P////1N407ZB3tp8q6RuWTf2tHB8ebpFnsGHOpx0QAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510398","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510399"}}},"glyph":{"type":"object","name":"Line","id":"p510394","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510395","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p510396","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p510408","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510402","attributes":{"selected":{"type":"object","name":"Selection","id":"p510403","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510404"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9P////1N407ZB3tp8q6RuWTf2tHB8ebpFnsGHOpx0QAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510409","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510410"}}},"glyph":{"type":"object","name":"Line","id":"p510405","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510406","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p510407","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p510418","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510412","attributes":{"selected":{"type":"object","name":"Selection","id":"p510413","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510414"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p510419","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510420"}}},"glyph":{"type":"object","name":"Line","id":"p510415","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510416","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510417","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p510356","attributes":{"tools":[{"id":"p510370"},{"id":"p510371"},{"id":"p510372"},{"id":"p510380"},{"type":"object","name":"SaveTool","id":"p510381"},{"id":"p510422"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p510365","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p510366","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p510367"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510368"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p510360","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p510361"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p510362"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p510363"}}}],"center":[{"type":"object","name":"Grid","id":"p510364","attributes":{"axis":{"id":"p510360"}}},{"type":"object","name":"Grid","id":"p510369","attributes":{"dimension":1,"axis":{"id":"p510365"}}},{"type":"object","name":"Legend","id":"p510400","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p510401","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p510397"}]}},{"type":"object","name":"LegendItem","id":"p510411","attributes":{"label":{"type":"value","value":"Median Year (1928)"},"renderers":[{"id":"p510408"}]}},{"type":"object","name":"LegendItem","id":"p510421","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p510418"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p510433","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"f0243a73-2cc5-4af0-b5e5-a428832b6ba7","roots":{"p510434":"b5063498-065b-4f27-a6a8-6a9b013c0c71"},"root_ids":["p510434"]}];
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