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
    
    
    const element = document.getElementById("cc5e40f7-2225-44b5-9f3a-3934a20483be");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc5e40f7-2225-44b5-9f3a-3934a20483be' but no matching script tag was found.")
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
                  const docs_json = '{"e4c219be-94ad-4968-bf20-cb6160874d1b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p353472","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p353473"}}},"roots":[{"type":"object","name":"Column","id":"p353636","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p353634","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p353633","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p353626","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p353496"},{"type":"object","name":"PanTool","id":"p353572"}]}},{"type":"object","name":"ToolProxy","id":"p353627","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p353497","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p353573","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p353628","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p353498","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p353499","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p353505","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p353504","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p353574","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p353575","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p353581","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p353580","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p353629","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p353506"},{"type":"object","name":"ResetTool","id":"p353582"}]}},{"type":"object","name":"SaveTool","id":"p353630"},{"type":"object","name":"ToolProxy","id":"p353631","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p353548","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p353632","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p353624","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p353474","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p353475"},"y_range":{"type":"object","name":"DataRange1d","id":"p353476"},"x_scale":{"type":"object","name":"LinearScale","id":"p353484"},"y_scale":{"type":"object","name":"LogScale","id":"p353485"},"title":{"type":"object","name":"Title","id":"p353477","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p353514","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353508","attributes":{"selected":{"type":"object","name":"Selection","id":"p353509","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353510"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7ZVi+hfVWq2zj0lLa3t0fIa9Jtf1x0r7JttXH/r6ol9kon3TzJkzn3zqt7feIfeU4WCP/RuNmH6Vqk77MJF17HFfWu0v/v9v/7CqBU5zrXNf2Li2yf73///10/Oa7H/9/3/fN6nB/kngjn3Jyg32V4HqONbUkEzz75Bzle2vtN8GdHfJ5IoBo/sWF9QuEK2wnw72b8mgpcWMjT+zmBRCw7+AaPr2tcUGiy7mQv2bMeJpAEqrgfMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353515","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353516"}}},"glyph":{"type":"object","name":"Line","id":"p353511","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353512","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p353513","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p353523","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353517","attributes":{"selected":{"type":"object","name":"Selection","id":"p353518","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353519"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7ZVi+hfVWq2zj0lLa3t0fIa9Jtf1x0r7JttXH/r6ol9kon3TzJkzn3zqt7feIfeU4WCP/RuNmH6Vqk77MJF17HFfWu0v/v9v/7CqBU5zrXNf2Li2yf73///10/Oa7H/9/3/fN6nB/kngjn3Jyg32V4HqONbUkEzz75Bzle2vtN8GdHfJ5IoBo/sWF9QuEK2wnw72b8mgpcWMjT+zmBRCw7+AaPr2tcUGiy7mQv2bMeJpAEqrgfMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353524","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353525"}}},"glyph":{"type":"object","name":"Line","id":"p353520","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353521","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p353522","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p353534","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353528","attributes":{"selected":{"type":"object","name":"Selection","id":"p353529","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353530"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SSyhEURzGLaQsSKNIUd55JO/HeM03d8ZjzJi5c2funVEi2bASycaWZGNLsmFJspktScoWJZktSmoWNiyk3HP+3+l2pznnf77/9/v+15MNL7Uf53we/fvn23sdcJ8CyP8iRNz35ZYHsl+G+zljszBXwfMqnOpVzbpa5Boy+/dz9axvhNr99jTxXjPWKu9WK+9aeb8NqtrYbKdOB9wiV6GTel2oUuWr3dTtwZWrlg33Ur8P80q2oZ99BpCnl5f9vDhR29lB9h2CLs8Ms/8I3pTM3ih9+OS8B/QDlKq6Gj99+aHbFhv0Z8i9X4M+A9hW9j4C9BuEY7vrKUjfY2hU2zdj9D+OH2XkYpwcE9AyRxPkmcSBsrU7Sa4QltXBRoh8IXiV0OIUOaegbZph8obxojEj5I7gTGG1TJN/WrjKo8whKlz5MeYRg5b5ijEXU/yumMzHFN/vJnOKi//ZOPOKC8djnLlZwhOymJ8lXNcWc7Sgt/sSzDOBB8V5nmCuCeGtSzLfJHRMh0nmnBT+Ept525LDjs3cbchnbjN/R7jWHc7BEa5Ph/NICddCinNJCddzivNJC1c0zTmlhes2zXnN4B8Gd2ukYAMAAA=="},"shape":[108],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7b///z9/5syZ9u/+/7d/WDXF/ilQvChjov2v///v+yZNsL8GpAN39Nn///+/ft/8LvsPQPmSyR32F8HqWzDo30B10/Oa4DTEnAY4fRWojmNNDdn0NrD9FYOOng72f8mQoSHxUUA2DfF3xiiNgwYANFJ912ADAAA="},"shape":[108],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353535","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353536"}}},"glyph":{"type":"object","name":"Line","id":"p353531","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353532","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p353533","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p353544","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353538","attributes":{"selected":{"type":"object","name":"Selection","id":"p353539","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353540"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p353545","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353546"}}},"glyph":{"type":"object","name":"Line","id":"p353541","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353542","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p353543","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p353483","attributes":{"tools":[{"id":"p353496"},{"id":"p353497"},{"id":"p353498"},{"id":"p353506"},{"type":"object","name":"SaveTool","id":"p353507"},{"id":"p353548"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p353491","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p353492","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p353493"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p353494"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p353486","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p353487","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p353488"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p353489"}}}],"center":[{"type":"object","name":"Grid","id":"p353490","attributes":{"axis":{"id":"p353486"}}},{"type":"object","name":"Grid","id":"p353495","attributes":{"dimension":1,"axis":{"id":"p353491"}}},{"type":"object","name":"Legend","id":"p353526","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p353527","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p353523"}]}},{"type":"object","name":"LegendItem","id":"p353537","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p353534"}]}},{"type":"object","name":"LegendItem","id":"p353547","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p353544"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p353549","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p353559","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p353551"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p353560"},"y_scale":{"type":"object","name":"LinearScale","id":"p353561"},"title":{"type":"object","name":"Title","id":"p353552","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p353590","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353584","attributes":{"selected":{"type":"object","name":"Selection","id":"p353585","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353586"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353591","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353592"}}},"glyph":{"type":"object","name":"Line","id":"p353587","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353588","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p353589","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p353599","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353593","attributes":{"selected":{"type":"object","name":"Selection","id":"p353594","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353595"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353600","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353601"}}},"glyph":{"type":"object","name":"Line","id":"p353596","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353597","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p353598","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p353610","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353604","attributes":{"selected":{"type":"object","name":"Selection","id":"p353605","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353606"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353611","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353612"}}},"glyph":{"type":"object","name":"Line","id":"p353607","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353608","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p353609","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p353620","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353614","attributes":{"selected":{"type":"object","name":"Selection","id":"p353615","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353616"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p353621","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353622"}}},"glyph":{"type":"object","name":"Line","id":"p353617","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353618","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p353619","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p353558","attributes":{"tools":[{"id":"p353572"},{"id":"p353573"},{"id":"p353574"},{"id":"p353582"},{"type":"object","name":"SaveTool","id":"p353583"},{"id":"p353624"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p353567","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p353568","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p353569"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p353570"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p353562","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p353563"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p353564"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p353565"}}}],"center":[{"type":"object","name":"Grid","id":"p353566","attributes":{"axis":{"id":"p353562"}}},{"type":"object","name":"Grid","id":"p353571","attributes":{"dimension":1,"axis":{"id":"p353567"}}},{"type":"object","name":"Legend","id":"p353602","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p353603","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p353599"}]}},{"type":"object","name":"LegendItem","id":"p353613","attributes":{"label":{"type":"value","value":"Median Year (1931)"},"renderers":[{"id":"p353610"}]}},{"type":"object","name":"LegendItem","id":"p353623","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p353620"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p353625","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"e4c219be-94ad-4968-bf20-cb6160874d1b","roots":{"p353636":"cc5e40f7-2225-44b5-9f3a-3934a20483be"},"root_ids":["p353636"]}];
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