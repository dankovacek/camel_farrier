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
    
    
    const element = document.getElementById("ccb6e12f-5f55-43f7-8a89-1b691d062500");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ccb6e12f-5f55-43f7-8a89-1b691d062500' but no matching script tag was found.")
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
                  const docs_json = '{"e5bdab84-5b06-46bb-85f6-b1ade7956c0a":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p676595","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p676596"}}},"roots":[{"type":"object","name":"Column","id":"p676759","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p676756","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p676755","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p676748","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p676619"},{"type":"object","name":"PanTool","id":"p676695"}]}},{"type":"object","name":"ToolProxy","id":"p676749","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p676620","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p676696","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p676750","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p676621","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p676622","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p676628","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p676627","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p676697","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p676698","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p676704","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p676703","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p676751","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p676629"},{"type":"object","name":"ResetTool","id":"p676705"}]}},{"type":"object","name":"SaveTool","id":"p676752"},{"type":"object","name":"ToolProxy","id":"p676753","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p676671","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p676754","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p676747","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p676597","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p676598"},"y_range":{"type":"object","name":"DataRange1d","id":"p676599"},"x_scale":{"type":"object","name":"LinearScale","id":"p676607"},"y_scale":{"type":"object","name":"LogScale","id":"p676608"},"title":{"type":"object","name":"Title","id":"p676600","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p676637","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p676631","attributes":{"selected":{"type":"object","name":"Selection","id":"p676632","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p676633"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////8Y97b7f+TSd+vEtHrerrN3orrevTD2G32U2fO7LS4ttX+9///8f2HyKcvLy54+m7NVnsjY2NhN9Wt9gwMDAc+/92CQS8usOW61b/F/t////IRlrjpV4E7ziWYb7FPTkt7tn39ZnsDY2PteY6b7ZtfB1a8f7jJ/l6VyDK3qE32llzXL8+9tNH+xJkzf754bbR3e1gl4nN4A8i//68t3mC/1v0h17SKDfb869wLbz1cb//r///9ZfvW29e9DszI81lvb8x1/bCM7Tr7b///19ubrrO/VSXi9+DaWvuktLSyQum19hKtry/K86yxLxJZJ3/uzyr7L0BzV8sQplVi+j912qwE+Wd/yeQVRNNAfxZrf1sOcme9LRdhOt2Wy/256TL7r8BwY2tcSjT9ViPmOrvCUvs////bP6xaMujojxox9RwWS+yXuz+8tU1jsf0PYLiu/LiIaBoAo1obAigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p676638","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p676639"}}},"glyph":{"type":"object","name":"Line","id":"p676634","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p676635","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p676636","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p676646","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p676640","attributes":{"selected":{"type":"object","name":"Selection","id":"p676641","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p676642"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////8Y97b7f+TSd+vEtHrerrN3orrevTD2G32U2fO7LS4ttX+9///8f2HyKcvLy54+m7NVnsjY2NhN9Wt9gwMDAc+/92CQS8usOW61b/F/t////IRlrjpV4E7ziWYb7FPTkt7tn39ZnsDY2PteY6b7ZtfB1a8f7jJ/l6VyDK3qE32llzXL8+9tNH+xJkzf754bbR3e1gl4nN4A8i//68t3mC/1v0h17SKDfb869wLbz1cb//r///9ZfvW29e9DszI81lvb8x1/bCM7Tr7b///19ubrrO/VSXi9+DaWvuktLSyQum19hKtry/K86yxLxJZJ3/uzyr7L0BzV8sQplVi+j912qwE+Wd/yeQVRNNAfxZrf1sOcme9LRdhOt2Wy/256TL7r8BwY2tcSjT9ViPmOrvCUvs////bP6xaMujojxox9RwWS+yXuz+8tU1jsf0PYLiu/LiIaBoAo1obAigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p676647","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p676648"}}},"glyph":{"type":"object","name":"Line","id":"p676643","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p676644","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p676645","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p676657","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p676651","attributes":{"selected":{"type":"object","name":"Selection","id":"p676652","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p676653"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yt+eyDG2uC7fTGYZncQ2zShVSdF0AHCF3e4oPHR2OuPDFRc0eHoeZCAClRe3UGRO/KEk5gWVJ2OQ61b5/zAR/pQ9YYO70DKrhtB9Zk4zLn3ZZn5XlOofnMH7z89QvaLLaDmWDn8lFStc+u0hppn47DCfO9L33w7qLn2DqvAwAFqvqND086yhHWyTlB7nBxApmya4Ay1z8XB4Drfma3MrlB7XR3Yn91q3FnmBrXf3eE+SPilO9QdHg7bmEEynlD3eDn0AUWPnPeCusvbIQUs4QN1n4+DNdgCX6g7/RzAyjX8oe71d/gKMt43AOruAIfEdbIzstkDoe4PdAA6DmhhINQfQQ5gY6qCoP4JcgCZ9tE4GOqvYAd+sIZgqP9CHKouzwb6LATqz1AHsPcSQqH+DXUIepQ+5YdkGNTfYQ5g4y+HQf0f7qAJ8kZPODQcwh2AioEejYCGR4QDAxhEOgAAoezTGSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////8Y97b7f8ToP8CGVrt2+x///8f339oK8k0AwPDgc9/t2DQ//7/l4+wxE2D9O8p2Qxyx/+VHzeB3BHPp7sJJL6/KGMjWPza4g1w+hdQvGzfejj97f//envTdXAaqH++lP5a+x9Acx4vXW3/BahvtcwqnDTQHftLJq8gSAPtq7flWo6T/gr0D1vjUoL0n///7R9WLaEb/QMcrosI0gD4bGXGKAIAAA=="},"shape":[69],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p676658","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p676659"}}},"glyph":{"type":"object","name":"Line","id":"p676654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p676655","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p676656","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p676667","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p676661","attributes":{"selected":{"type":"object","name":"Selection","id":"p676662","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p676663"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p676668","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p676669"}}},"glyph":{"type":"object","name":"Line","id":"p676664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p676665","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p676666","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p676606","attributes":{"tools":[{"id":"p676619"},{"id":"p676620"},{"id":"p676621"},{"id":"p676629"},{"type":"object","name":"SaveTool","id":"p676630"},{"id":"p676671"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p676614","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p676615","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p676616"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p676617"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p676609","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p676610","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p676611"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p676612"}}}],"center":[{"type":"object","name":"Grid","id":"p676613","attributes":{"axis":{"id":"p676609"}}},{"type":"object","name":"Grid","id":"p676618","attributes":{"dimension":1,"axis":{"id":"p676614"}}},{"type":"object","name":"Legend","id":"p676649","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p676650","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p676646"}]}},{"type":"object","name":"LegendItem","id":"p676660","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p676657"}]}},{"type":"object","name":"LegendItem","id":"p676670","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p676667"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p676672","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p676682","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p676674"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p676683"},"y_scale":{"type":"object","name":"LinearScale","id":"p676684"},"title":{"type":"object","name":"Title","id":"p676675","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p676713","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p676707","attributes":{"selected":{"type":"object","name":"Selection","id":"p676708","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p676709"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0sKbJriuS9xq/2rv930sL1bY6xgbF8tZL7XHpR4A7C7o7GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p676714","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p676715"}}},"glyph":{"type":"object","name":"Line","id":"p676710","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p676711","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p676712","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p676722","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p676716","attributes":{"selected":{"type":"object","name":"Selection","id":"p676717","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p676718"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0sKbJriuS9xq/2rv930sL1bY6xgbF8tZL7XHpR4A7C7o7GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p676723","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p676724"}}},"glyph":{"type":"object","name":"Line","id":"p676719","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p676720","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p676721","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p676733","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p676727","attributes":{"selected":{"type":"object","name":"Selection","id":"p676728","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p676729"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0sKbJriuS9xq/2rv930sL1bY6xgbF8tZL7XHpR4A7C7o7GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p676734","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p676735"}}},"glyph":{"type":"object","name":"Line","id":"p676730","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p676731","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p676732","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p676743","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p676737","attributes":{"selected":{"type":"object","name":"Selection","id":"p676738","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p676739"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p676744","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p676745"}}},"glyph":{"type":"object","name":"Line","id":"p676740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p676741","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p676742","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p676681","attributes":{"tools":[{"id":"p676695"},{"id":"p676696"},{"id":"p676697"},{"id":"p676705"},{"type":"object","name":"SaveTool","id":"p676706"},{"id":"p676747"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p676690","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p676691","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p676692"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p676693"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p676685","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p676686"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p676687"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p676688"}}}],"center":[{"type":"object","name":"Grid","id":"p676689","attributes":{"axis":{"id":"p676685"}}},{"type":"object","name":"Grid","id":"p676694","attributes":{"dimension":1,"axis":{"id":"p676690"}}},{"type":"object","name":"Legend","id":"p676725","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p676726","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p676722"}]}},{"type":"object","name":"LegendItem","id":"p676736","attributes":{"label":{"type":"value","value":"Median Year (1940)"},"renderers":[{"id":"p676733"}]}},{"type":"object","name":"LegendItem","id":"p676746","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p676743"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p676758","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"e5bdab84-5b06-46bb-85f6-b1ade7956c0a","roots":{"p676759":"ccb6e12f-5f55-43f7-8a89-1b691d062500"},"root_ids":["p676759"]}];
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