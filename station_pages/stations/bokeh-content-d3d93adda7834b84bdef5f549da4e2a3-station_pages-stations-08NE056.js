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
    
    
    const element = document.getElementById("cd043c2f-6e84-4f53-b0ba-5734865a7561");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cd043c2f-6e84-4f53-b0ba-5734865a7561' but no matching script tag was found.")
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
                  const docs_json = '{"c91c11dd-a69b-4c9b-b944-07fbbbd7814e":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p677052","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p677053"}}},"roots":[{"type":"object","name":"Column","id":"p677216","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p677213","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p677212","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p677205","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p677076"},{"type":"object","name":"PanTool","id":"p677152"}]}},{"type":"object","name":"ToolProxy","id":"p677206","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p677077","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p677153","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p677207","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p677078","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p677079","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p677085","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p677084","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p677154","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p677155","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p677161","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p677160","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p677208","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p677086"},{"type":"object","name":"ResetTool","id":"p677162"}]}},{"type":"object","name":"SaveTool","id":"p677209"},{"type":"object","name":"ToolProxy","id":"p677210","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p677128","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p677211","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p677204","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p677054","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p677055"},"y_range":{"type":"object","name":"DataRange1d","id":"p677056"},"x_scale":{"type":"object","name":"LinearScale","id":"p677064"},"y_scale":{"type":"object","name":"LogScale","id":"p677065"},"title":{"type":"object","name":"Title","id":"p677057","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p677094","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677088","attributes":{"selected":{"type":"object","name":"Selection","id":"p677089","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677090"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////8Y97b7f+TSd+vEtHrerrN3orrevTD2G32U2fO7LS4ttX+9///8f2HyKcvLy54+m7NVnsjY2NhN9Wt9gwMDAc+/92CQS8usOW61b/F/t////IRlrjpV4E7ziWYb7FPTkt7tn39ZnsDY2PteY6b7ZtfB1a8f7jJ/l6VyDK3qE32llzXL8+9tNH+xJkzf754bbR3e1gl4nN4A8i//68t3mC/1v0h17SKDfb869wLbz1cb//r///9ZfvW29e9DszI81lvb8x1/bCM7Tr7b///19ubrrO/VSXi9+DaWvuktLSyQum19hKtry/K86yxLxJZJ3/uzyr7L0BzV8sQplVi+j912qwE+Wd/yeQVRNNAfxZrf1sOcme9LRdhOt2Wy/256TL7r8BwY2tcSjT9ViPmOrvCUvs////bP6xaMujojxox9RwWS+yXuz+8tU1jsf0PYLiu/LiIaBoAo1obAigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677095","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677096"}}},"glyph":{"type":"object","name":"Line","id":"p677091","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677092","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p677093","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p677103","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677097","attributes":{"selected":{"type":"object","name":"Selection","id":"p677098","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677099"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////8Y97b7f+TSd+vEtHrerrN3orrevTD2G32U2fO7LS4ttX+9///8f2HyKcvLy54+m7NVnsjY2NhN9Wt9gwMDAc+/92CQS8usOW61b/F/t////IRlrjpV4E7ziWYb7FPTkt7tn39ZnsDY2PteY6b7ZtfB1a8f7jJ/l6VyDK3qE32llzXL8+9tNH+xJkzf754bbR3e1gl4nN4A8i//68t3mC/1v0h17SKDfb869wLbz1cb//r///9ZfvW29e9DszI81lvb8x1/bCM7Tr7b///19ubrrO/VSXi9+DaWvuktLSyQum19hKtry/K86yxLxJZJ3/uzyr7L0BzV8sQplVi+j912qwE+Wd/yeQVRNNAfxZrf1sOcme9LRdhOt2Wy/256TL7r8BwY2tcSjT9ViPmOrvCUvs////bP6xaMujojxox9RwWS+yXuz+8tU1jsf0PYLiu/LiIaBoAo1obAigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677104","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677105"}}},"glyph":{"type":"object","name":"Line","id":"p677100","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677101","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p677102","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p677114","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677108","attributes":{"selected":{"type":"object","name":"Selection","id":"p677109","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677110"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yt+eyDG2uC7fTGYZncQ2zShVSdF0AHCF3e4oPHR2OuPDFRc0eHoeZCAClRe3UGRO/KEk5gWVJ2OQ61b5/zAR/pQ9YYO70DKrhtB9Zk4zLn3ZZn5XlOofnMH7z89QvaLLaDmWDn8lFStc+u0hppn47DCfO9L33w7qLn2DqvAwAFqvqND086yhHWyTlB7nBxApmya4Ay1z8XB4Drfma3MrlB7XR3Yn91q3FnmBrXf3eE+SPilO9QdHg7bmEEynlD3eDn0AUWPnPeCusvbIQUs4QN1n4+DNdgCX6g7/RzAyjX8oe71d/gKMt43AOruAIfEdbIzstkDoe4PdAA6DmhhINQfQQ5gY6qCoP4JcgCZ9tE4GOqvYAd+sIZgqP9CHKouzwb6LATqz1AHsPcSQqH+DXUIepQ+5YdkGNTfYQ5g4y+HQf0f7qAJ8kZPODQcwh2AioEejYCGR4QDAxhEOgAAoezTGSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////8Y97b7f8ToP8CGVrt2+x///8f339oK8k0AwPDgc9/t2DQ//7/l4+wxE2D9O8p2Qxyx/+VHzeB3BHPp7sJJL6/KGMjWPza4g1w+hdQvGzfejj97f//envTdXAaqH++lP5a+x9Acx4vXW3/BahvtcwqnDTQHftLJq8gSAPtq7flWo6T/gr0D1vjUoL0n///7R9WLaEb/QMcrosI0gD4bGXGKAIAAA=="},"shape":[69],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677115","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677116"}}},"glyph":{"type":"object","name":"Line","id":"p677111","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677112","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p677113","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p677124","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677118","attributes":{"selected":{"type":"object","name":"Selection","id":"p677119","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677120"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p677125","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677126"}}},"glyph":{"type":"object","name":"Line","id":"p677121","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677122","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p677123","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p677063","attributes":{"tools":[{"id":"p677076"},{"id":"p677077"},{"id":"p677078"},{"id":"p677086"},{"type":"object","name":"SaveTool","id":"p677087"},{"id":"p677128"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p677071","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p677072","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p677073"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p677074"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p677066","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p677067","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p677068"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p677069"}}}],"center":[{"type":"object","name":"Grid","id":"p677070","attributes":{"axis":{"id":"p677066"}}},{"type":"object","name":"Grid","id":"p677075","attributes":{"dimension":1,"axis":{"id":"p677071"}}},{"type":"object","name":"Legend","id":"p677106","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p677107","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p677103"}]}},{"type":"object","name":"LegendItem","id":"p677117","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p677114"}]}},{"type":"object","name":"LegendItem","id":"p677127","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p677124"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p677129","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p677139","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p677131"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p677140"},"y_scale":{"type":"object","name":"LinearScale","id":"p677141"},"title":{"type":"object","name":"Title","id":"p677132","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p677170","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677164","attributes":{"selected":{"type":"object","name":"Selection","id":"p677165","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677166"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0sKbJriuS9xq/2rv930sL1bY6xgbF8tZL7XHpR4A7C7o7GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677171","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677172"}}},"glyph":{"type":"object","name":"Line","id":"p677167","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677168","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p677169","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p677179","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677173","attributes":{"selected":{"type":"object","name":"Selection","id":"p677174","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677175"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0sKbJriuS9xq/2rv930sL1bY6xgbF8tZL7XHpR4A7C7o7GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677180","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677181"}}},"glyph":{"type":"object","name":"Line","id":"p677176","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677177","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p677178","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p677190","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677184","attributes":{"selected":{"type":"object","name":"Selection","id":"p677185","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677186"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0sKbJriuS9xq/2rv930sL1bY6xgbF8tZL7XHpR4A7C7o7GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677191","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677192"}}},"glyph":{"type":"object","name":"Line","id":"p677187","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677188","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p677189","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p677200","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677194","attributes":{"selected":{"type":"object","name":"Selection","id":"p677195","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677196"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p677201","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677202"}}},"glyph":{"type":"object","name":"Line","id":"p677197","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677198","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p677199","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p677138","attributes":{"tools":[{"id":"p677152"},{"id":"p677153"},{"id":"p677154"},{"id":"p677162"},{"type":"object","name":"SaveTool","id":"p677163"},{"id":"p677204"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p677147","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p677148","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p677149"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p677150"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p677142","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p677143"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p677144"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p677145"}}}],"center":[{"type":"object","name":"Grid","id":"p677146","attributes":{"axis":{"id":"p677142"}}},{"type":"object","name":"Grid","id":"p677151","attributes":{"dimension":1,"axis":{"id":"p677147"}}},{"type":"object","name":"Legend","id":"p677182","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p677183","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p677179"}]}},{"type":"object","name":"LegendItem","id":"p677193","attributes":{"label":{"type":"value","value":"Median Year (1940)"},"renderers":[{"id":"p677190"}]}},{"type":"object","name":"LegendItem","id":"p677203","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p677200"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p677215","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c91c11dd-a69b-4c9b-b944-07fbbbd7814e","roots":{"p677216":"cd043c2f-6e84-4f53-b0ba-5734865a7561"},"root_ids":["p677216"]}];
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