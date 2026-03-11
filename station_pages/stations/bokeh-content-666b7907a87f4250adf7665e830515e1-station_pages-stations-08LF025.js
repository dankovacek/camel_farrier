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
    
    
    const element = document.getElementById("c009ffe3-4438-4cdd-932d-4de5dd789e0e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c009ffe3-4438-4cdd-932d-4de5dd789e0e' but no matching script tag was found.")
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
                  const docs_json = '{"c7033a85-5f43-4d53-8adf-a390edfa4ae0":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p471854","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p471855"}}},"roots":[{"type":"object","name":"Column","id":"p472018","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p472015","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p472014","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p472007","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p471878"},{"type":"object","name":"PanTool","id":"p471954"}]}},{"type":"object","name":"ToolProxy","id":"p472008","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p471879","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p471955","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p472009","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p471880","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p471881","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p471887","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p471886","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p471956","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p471957","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p471963","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p471962","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p472010","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p471888"},{"type":"object","name":"ResetTool","id":"p471964"}]}},{"type":"object","name":"SaveTool","id":"p472011"},{"type":"object","name":"ToolProxy","id":"p472012","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p471930","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p472013","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p472006","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p471856","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p471857"},"y_range":{"type":"object","name":"DataRange1d","id":"p471858"},"x_scale":{"type":"object","name":"LinearScale","id":"p471866"},"y_scale":{"type":"object","name":"LogScale","id":"p471867"},"title":{"type":"object","name":"Title","id":"p471859","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p471896","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p471890","attributes":{"selected":{"type":"object","name":"Selection","id":"p471891","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p471892"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBg0j5ub8t1XXm3+nH7K4sLYm2aj9kvLrC1EpQ8Zv/3//96x4Sj9ilpaWEzfI7ar3V/OOvE5CP2mjH9RtPsjtj/+///f8PUw/avAnf4yRYdtgcal/D0wiH7JQW2r26uOWTPdX3xhDLRQ/ZVIuvSDTceBKnfX5QxcmlguHZN3HzA3v1h1ZQrnAfsy0XWuTe37bP/A5Q/UbYPpC5+4ts99verRPYternH3sDYePJ25T3gcH28dLd9TP+hqxrTdoPiZb77w132Lg+rrqw/ucv+NzAeVsuM0sTSk2bOlHz9aJv9V42Y8xmyW+25ry8WkBfcbH/8zJkzebs3gNIr+y+Xdfa/gOnflmu5PQDHsqhNKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p471897","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p471898"}}},"glyph":{"type":"object","name":"Line","id":"p471893","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p471894","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p471895","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p471905","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p471899","attributes":{"selected":{"type":"object","name":"Selection","id":"p471900","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p471901"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBg0j5ub8t1XXm3+nH7K4sLYm2aj9kvLrC1EpQ8Zv/3//96x4Sj9ilpaWEzfI7ar3V/OOvE5CP2mjH9RtPsjtj/+///f8PUw/avAnf4yRYdtgcal/D0wiH7JQW2r26uOWTPdX3xhDLRQ/ZVIuvSDTceBKnfX5QxcmlguHZN3HzA3v1h1ZQrnAfsy0XWuTe37bP/A5Q/UbYPpC5+4ts99verRPYternH3sDYePJ25T3gcH28dLd9TP+hqxrTdoPiZb77w132Lg+rrqw/ucv+NzAeVsuM0sTSk2bOlHz9aJv9V42Y8xmyW+25ry8WkBfcbH/8zJkzebs3gNIr+y+Xdfa/gOnflmu5PQDHsqhNKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p471906","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p471907"}}},"glyph":{"type":"object","name":"Line","id":"p471902","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p471903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p471904","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p471916","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p471910","attributes":{"selected":{"type":"object","name":"Selection","id":"p471911","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p471912"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3RzytscRgGcBupu7GgdFMkCWnicv28mGdmGDPGcObMnHOG1HRLCmXDgoWNjQ0LFjYsWLDwX8hNJLcbyU1uNxIJYcFCivO+5/lsTmfmfN8fzzeTEY9+fWQ+/HMqB957LlZXRB683wswOSEK+X8xNjdECb8rxdKiKOP35ZhRlTxXhdER4eP5amypGtb5hvU1Uct6dVhW31m3HgvzooH1GzGrmtinGdNTooX9fmBctbJvG4ZUO/v74VPgHECFCnCeAEpVkHMFUaRCnC+Er6qDc3YgX3Vy3k7kqjDnDuOL6uL8XchWEe4RQZaKcp8o3t9ElHt14/VFdHO/GJ6fRIx79uDhTvRw3zhurkWce/fi8kL0cv8+nKs+5mDgXo6PGczD8OrcGswl4dUbTjCfhFf3KsGcTK/+T5N5mV6f/yZzS+KftBtMMr8kBsRZkjmm8PfU5aSYZwq25TpJMVcLx0cu02K+Fgzxx2LONn4fuuI287YREwc2c3ewv+eKOMzfQVjsOryHNH7tuEJp3kcawYBrO8176ccnkTJfDjADAAA="},"shape":[102],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBg0j5u//f///9a7cfsgZT8XZVjIH69Y8JROA0Uv7909hF7oPIFMlFH7P8BBRqmHobTQPGEpxcOodB8uodA+uoPnDoIUre/KGOUBobH/2uLD4DCBwgO2P8Bip8o2wengeriJ77dA6dB4l819oDD8/HS3XAaGC/z3R/ugtO/geaulhmlSaUh6X4bKFwPfP67BRw/Kz9ugsbTBvtvwPRrb7rO/heQtuVabg8Ahoui9zADAAA="},"shape":[102],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p471917","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p471918"}}},"glyph":{"type":"object","name":"Line","id":"p471913","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p471914","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p471915","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p471926","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p471920","attributes":{"selected":{"type":"object","name":"Selection","id":"p471921","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p471922"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p471927","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p471928"}}},"glyph":{"type":"object","name":"Line","id":"p471923","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p471924","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p471925","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p471865","attributes":{"tools":[{"id":"p471878"},{"id":"p471879"},{"id":"p471880"},{"id":"p471888"},{"type":"object","name":"SaveTool","id":"p471889"},{"id":"p471930"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p471873","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p471874","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p471875"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p471876"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p471868","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p471869","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p471870"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p471871"}}}],"center":[{"type":"object","name":"Grid","id":"p471872","attributes":{"axis":{"id":"p471868"}}},{"type":"object","name":"Grid","id":"p471877","attributes":{"dimension":1,"axis":{"id":"p471873"}}},{"type":"object","name":"Legend","id":"p471908","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p471909","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p471905"}]}},{"type":"object","name":"LegendItem","id":"p471919","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p471916"}]}},{"type":"object","name":"LegendItem","id":"p471929","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p471926"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p471931","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p471941","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p471933"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p471942"},"y_scale":{"type":"object","name":"LinearScale","id":"p471943"},"title":{"type":"object","name":"Title","id":"p471934","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p471972","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p471966","attributes":{"selected":{"type":"object","name":"Selection","id":"p471967","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p471968"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6FNnzuQ0smy1//3////VMrvsM9ZuvfZk8377t+/evbu55pA9Ln0ARN+4FmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p471973","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p471974"}}},"glyph":{"type":"object","name":"Line","id":"p471969","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p471970","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p471971","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p471981","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p471975","attributes":{"selected":{"type":"object","name":"Selection","id":"p471976","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p471977"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6FNnzuQ0smy1//3////VMrvsM9ZuvfZk8377t+/evbu55pA9Ln0ARN+4FmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p471982","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p471983"}}},"glyph":{"type":"object","name":"Line","id":"p471978","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p471979","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p471980","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p471992","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p471986","attributes":{"selected":{"type":"object","name":"Selection","id":"p471987","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p471988"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6FNnzuQ0smy1//3////VMrvsM9ZuvfZk8377t+/evbu55pA9Ln0ARN+4FmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p471993","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p471994"}}},"glyph":{"type":"object","name":"Line","id":"p471989","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p471990","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p471991","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p472002","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p471996","attributes":{"selected":{"type":"object","name":"Selection","id":"p471997","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p471998"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p472003","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p472004"}}},"glyph":{"type":"object","name":"Line","id":"p471999","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p472000","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p472001","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p471940","attributes":{"tools":[{"id":"p471954"},{"id":"p471955"},{"id":"p471956"},{"id":"p471964"},{"type":"object","name":"SaveTool","id":"p471965"},{"id":"p472006"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p471949","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p471950","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p471951"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p471952"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p471944","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p471945"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p471946"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p471947"}}}],"center":[{"type":"object","name":"Grid","id":"p471948","attributes":{"axis":{"id":"p471944"}}},{"type":"object","name":"Grid","id":"p471953","attributes":{"dimension":1,"axis":{"id":"p471949"}}},{"type":"object","name":"Legend","id":"p471984","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p471985","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p471981"}]}},{"type":"object","name":"LegendItem","id":"p471995","attributes":{"label":{"type":"value","value":"Median Year (1911)"},"renderers":[{"id":"p471992"}]}},{"type":"object","name":"LegendItem","id":"p472005","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p472002"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p472017","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c7033a85-5f43-4d53-8adf-a390edfa4ae0","roots":{"p472018":"c009ffe3-4438-4cdd-932d-4de5dd789e0e"},"root_ids":["p472018"]}];
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