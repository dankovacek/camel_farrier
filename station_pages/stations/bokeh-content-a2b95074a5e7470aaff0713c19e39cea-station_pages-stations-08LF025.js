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
    
    
    const element = document.getElementById("fd3209c3-abb0-49f6-b584-a2d9d31c6855");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fd3209c3-abb0-49f6-b584-a2d9d31c6855' but no matching script tag was found.")
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
                  const docs_json = '{"58b50024-d818-49b0-8e84-6cf4651586ca":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p472255","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p472256"}}},"roots":[{"type":"object","name":"Column","id":"p472419","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p472416","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p472415","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p472408","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p472279"},{"type":"object","name":"PanTool","id":"p472355"}]}},{"type":"object","name":"ToolProxy","id":"p472409","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p472280","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p472356","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p472410","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p472281","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p472282","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p472288","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p472287","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p472357","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p472358","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p472364","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p472363","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p472411","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p472289"},{"type":"object","name":"ResetTool","id":"p472365"}]}},{"type":"object","name":"SaveTool","id":"p472412"},{"type":"object","name":"ToolProxy","id":"p472413","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p472331","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p472414","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p472407","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p472257","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p472258"},"y_range":{"type":"object","name":"DataRange1d","id":"p472259"},"x_scale":{"type":"object","name":"LinearScale","id":"p472267"},"y_scale":{"type":"object","name":"LogScale","id":"p472268"},"title":{"type":"object","name":"Title","id":"p472260","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p472297","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p472291","attributes":{"selected":{"type":"object","name":"Selection","id":"p472292","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p472293"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBg0j5ub8t1XXm3+nH7K4sLYm2aj9kvLrC1EpQ8Zv/3//96x4Sj9ilpaWEzfI7ar3V/OOvE5CP2mjH9RtPsjtj/+///f8PUw/avAnf4yRYdtgcal/D0wiH7JQW2r26uOWTPdX3xhDLRQ/ZVIuvSDTceBKnfX5QxcmlguHZN3HzA3v1h1ZQrnAfsy0XWuTe37bP/A5Q/UbYPpC5+4ts99verRPYternH3sDYePJ25T3gcH28dLd9TP+hqxrTdoPiZb77w132Lg+rrqw/ucv+NzAeVsuM0sTSk2bOlHz9aJv9V42Y8xmyW+25ry8WkBfcbH/8zJkzebs3gNIr+y+Xdfa/gOnflmu5PQDHsqhNKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p472298","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p472299"}}},"glyph":{"type":"object","name":"Line","id":"p472294","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p472295","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p472296","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p472306","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p472300","attributes":{"selected":{"type":"object","name":"Selection","id":"p472301","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p472302"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBg0j5ub8t1XXm3+nH7K4sLYm2aj9kvLrC1EpQ8Zv/3//96x4Sj9ilpaWEzfI7ar3V/OOvE5CP2mjH9RtPsjtj/+///f8PUw/avAnf4yRYdtgcal/D0wiH7JQW2r26uOWTPdX3xhDLRQ/ZVIuvSDTceBKnfX5QxcmlguHZN3HzA3v1h1ZQrnAfsy0XWuTe37bP/A5Q/UbYPpC5+4ts99verRPYternH3sDYePJ25T3gcH28dLd9TP+hqxrTdoPiZb77w132Lg+rrqw/ucv+NzAeVsuM0sTSk2bOlHz9aJv9V42Y8xmyW+25ry8WkBfcbH/8zJkzebs3gNIr+y+Xdfa/gOnflmu5PQDHsqhNKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p472307","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p472308"}}},"glyph":{"type":"object","name":"Line","id":"p472303","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p472304","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p472305","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p472317","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p472311","attributes":{"selected":{"type":"object","name":"Selection","id":"p472312","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p472313"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3RzytscRgGcBupu7GgdFMkCWnicv28mGdmGDPGcObMnHOG1HRLCmXDgoWNjQ0LFjYsWLDwX8hNJLcbyU1uNxIJYcFCivO+5/lsTmfmfN8fzzeTEY9+fWQ+/HMqB957LlZXRB683wswOSEK+X8xNjdECb8rxdKiKOP35ZhRlTxXhdER4eP5amypGtb5hvU1Uct6dVhW31m3HgvzooH1GzGrmtinGdNTooX9fmBctbJvG4ZUO/v74VPgHECFCnCeAEpVkHMFUaRCnC+Er6qDc3YgX3Vy3k7kqjDnDuOL6uL8XchWEe4RQZaKcp8o3t9ElHt14/VFdHO/GJ6fRIx79uDhTvRw3zhurkWce/fi8kL0cv8+nKs+5mDgXo6PGczD8OrcGswl4dUbTjCfhFf3KsGcTK/+T5N5mV6f/yZzS+KftBtMMr8kBsRZkjmm8PfU5aSYZwq25TpJMVcLx0cu02K+Fgzxx2LONn4fuuI287YREwc2c3ewv+eKOMzfQVjsOryHNH7tuEJp3kcawYBrO8176ccnkTJfDjADAAA="},"shape":[102],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGBg0j5u//f///9a7cfsgZT8XZVjIH69Y8JROA0Uv7909hF7oPIFMlFH7P8BBRqmHobTQPGEpxcOodB8uodA+uoPnDoIUre/KGOUBobH/2uLD4DCBwgO2P8Bip8o2wengeriJ77dA6dB4l819oDD8/HS3XAaGC/z3R/ugtO/geaulhmlSaUh6X4bKFwPfP67BRw/Kz9ugsbTBvtvwPRrb7rO/heQtuVabg8Ahoui9zADAAA="},"shape":[102],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p472318","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p472319"}}},"glyph":{"type":"object","name":"Line","id":"p472314","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p472315","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p472316","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p472327","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p472321","attributes":{"selected":{"type":"object","name":"Selection","id":"p472322","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p472323"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p472328","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p472329"}}},"glyph":{"type":"object","name":"Line","id":"p472324","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p472325","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p472326","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p472266","attributes":{"tools":[{"id":"p472279"},{"id":"p472280"},{"id":"p472281"},{"id":"p472289"},{"type":"object","name":"SaveTool","id":"p472290"},{"id":"p472331"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p472274","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p472275","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p472276"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p472277"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p472269","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p472270","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p472271"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p472272"}}}],"center":[{"type":"object","name":"Grid","id":"p472273","attributes":{"axis":{"id":"p472269"}}},{"type":"object","name":"Grid","id":"p472278","attributes":{"dimension":1,"axis":{"id":"p472274"}}},{"type":"object","name":"Legend","id":"p472309","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p472310","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p472306"}]}},{"type":"object","name":"LegendItem","id":"p472320","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p472317"}]}},{"type":"object","name":"LegendItem","id":"p472330","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p472327"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p472332","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p472342","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p472334"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p472343"},"y_scale":{"type":"object","name":"LinearScale","id":"p472344"},"title":{"type":"object","name":"Title","id":"p472335","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p472373","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p472367","attributes":{"selected":{"type":"object","name":"Selection","id":"p472368","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p472369"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6FNnzuQ0smy1//3////VMrvsM9ZuvfZk8377t+/evbu55pA9Ln0ARN+4FmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p472374","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p472375"}}},"glyph":{"type":"object","name":"Line","id":"p472370","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p472371","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p472372","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p472382","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p472376","attributes":{"selected":{"type":"object","name":"Selection","id":"p472377","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p472378"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6FNnzuQ0smy1//3////VMrvsM9ZuvfZk8377t+/evbu55pA9Ln0ARN+4FmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p472383","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p472384"}}},"glyph":{"type":"object","name":"Line","id":"p472379","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p472380","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p472381","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p472393","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p472387","attributes":{"selected":{"type":"object","name":"Selection","id":"p472388","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p472389"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6FNnzuQ0smy1//3////VMrvsM9ZuvfZk8377t+/evbu55pA9Ln0ARN+4FmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p472394","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p472395"}}},"glyph":{"type":"object","name":"Line","id":"p472390","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p472391","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p472392","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p472403","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p472397","attributes":{"selected":{"type":"object","name":"Selection","id":"p472398","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p472399"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p472404","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p472405"}}},"glyph":{"type":"object","name":"Line","id":"p472400","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p472401","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p472402","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p472341","attributes":{"tools":[{"id":"p472355"},{"id":"p472356"},{"id":"p472357"},{"id":"p472365"},{"type":"object","name":"SaveTool","id":"p472366"},{"id":"p472407"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p472350","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p472351","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p472352"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p472353"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p472345","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p472346"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p472347"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p472348"}}}],"center":[{"type":"object","name":"Grid","id":"p472349","attributes":{"axis":{"id":"p472345"}}},{"type":"object","name":"Grid","id":"p472354","attributes":{"dimension":1,"axis":{"id":"p472350"}}},{"type":"object","name":"Legend","id":"p472385","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p472386","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p472382"}]}},{"type":"object","name":"LegendItem","id":"p472396","attributes":{"label":{"type":"value","value":"Median Year (1911)"},"renderers":[{"id":"p472393"}]}},{"type":"object","name":"LegendItem","id":"p472406","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p472403"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p472418","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"58b50024-d818-49b0-8e84-6cf4651586ca","roots":{"p472419":"fd3209c3-abb0-49f6-b584-a2d9d31c6855"},"root_ids":["p472419"]}];
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