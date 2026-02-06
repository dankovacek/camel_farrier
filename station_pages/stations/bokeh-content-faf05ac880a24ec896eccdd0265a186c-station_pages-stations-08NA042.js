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
    
    
    const element = document.getElementById("beaeac63-5fd0-4a28-aa37-e4c31a90f091");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'beaeac63-5fd0-4a28-aa37-e4c31a90f091' but no matching script tag was found.")
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
                  const docs_json = '{"96d004d1-f112-4ead-88df-27b3d327c7ff":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p348615","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p348616"}}},"roots":[{"type":"object","name":"Column","id":"p348779","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p348777","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p348776","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p348769","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p348639"},{"type":"object","name":"PanTool","id":"p348715"}]}},{"type":"object","name":"ToolProxy","id":"p348770","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p348640","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p348716","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p348771","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p348641","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p348642","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p348648","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p348647","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p348717","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p348718","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p348724","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p348723","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p348772","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p348649"},{"type":"object","name":"ResetTool","id":"p348725"}]}},{"type":"object","name":"SaveTool","id":"p348773"},{"type":"object","name":"ToolProxy","id":"p348774","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p348691","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p348775","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p348767","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p348617","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p348618"},"y_range":{"type":"object","name":"DataRange1d","id":"p348619"},"x_scale":{"type":"object","name":"LinearScale","id":"p348627"},"y_scale":{"type":"object","name":"LogScale","id":"p348628"},"title":{"type":"object","name":"Title","id":"p348620","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p348657","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p348651","attributes":{"selected":{"type":"object","name":"Selection","id":"p348652","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p348653"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7ZVi+hfVWq2zj0lLa3t0fIa9Jtf1x0r7JttXH/r6ol9kon3TzJkzn3zqt7feIfeU4WCP/RuNmH6Vqk77MJF17HFfWu0v/v9v/7CqBU5zrXNf2Li2yf73///10/Oa7H/9/3/fN6nB/kngjn3Jyg32V4HqONbUkEzz75Bzle2vtN8GdHfJ5IoBo/sWF9QuEK2wnw72b8mgpcWMjT+zmBRCw7+AaPr2tcUGiy7mQv2bMeJpAEqrgfMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p348658","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p348659"}}},"glyph":{"type":"object","name":"Line","id":"p348654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p348655","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p348656","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p348666","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p348660","attributes":{"selected":{"type":"object","name":"Selection","id":"p348661","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p348662"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7ZVi+hfVWq2zj0lLa3t0fIa9Jtf1x0r7JttXH/r6ol9kon3TzJkzn3zqt7feIfeU4WCP/RuNmH6Vqk77MJF17HFfWu0v/v9v/7CqBU5zrXNf2Li2yf73///10/Oa7H/9/3/fN6nB/kngjn3Jyg32V4HqONbUkEzz75Bzle2vtN8GdHfJ5IoBo/sWF9QuEK2wnw72b8mgpcWMjT+zmBRCw7+AaPr2tcUGiy7mQv2bMeJpAEqrgfMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p348667","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p348668"}}},"glyph":{"type":"object","name":"Line","id":"p348663","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p348664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p348665","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p348677","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p348671","attributes":{"selected":{"type":"object","name":"Selection","id":"p348672","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p348673"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SSyhEURzGLaQsSKNIUd55JO/HeM03d8ZjzJi5c2funVEi2bASycaWZGNLsmFJspktScoWJZktSmoWNiyk3HP+3+l2pznnf77/9/v+15MNL7Uf53we/fvn23sdcJ8CyP8iRNz35ZYHsl+G+zljszBXwfMqnOpVzbpa5Boy+/dz9axvhNr99jTxXjPWKu9WK+9aeb8NqtrYbKdOB9wiV6GTel2oUuWr3dTtwZWrlg33Ur8P80q2oZ99BpCnl5f9vDhR29lB9h2CLs8Ms/8I3pTM3ih9+OS8B/QDlKq6Gj99+aHbFhv0Z8i9X4M+A9hW9j4C9BuEY7vrKUjfY2hU2zdj9D+OH2XkYpwcE9AyRxPkmcSBsrU7Sa4QltXBRoh8IXiV0OIUOaegbZph8obxojEj5I7gTGG1TJN/WrjKo8whKlz5MeYRg5b5ijEXU/yumMzHFN/vJnOKi//ZOPOKC8djnLlZwhOymJ8lXNcWc7Sgt/sSzDOBB8V5nmCuCeGtSzLfJHRMh0nmnBT+Ept525LDjs3cbchnbjN/R7jWHc7BEa5Ph/NICddCinNJCddzivNJC1c0zTmlhes2zXnN4B8Gd2ukYAMAAA=="},"shape":[108],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7b///z9/5syZ9u/+/7d/WDXF/ilQvChjov2v///v+yZNsL8GpAN39Nn///+/ft/8LvsPQPmSyR32F8HqWzDo30B10/Oa4DTEnAY4fRWojmNNDdn0NrD9FYOOng72f8mQoSHxUUA2DfF3xiiNgwYANFJ912ADAAA="},"shape":[108],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p348678","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p348679"}}},"glyph":{"type":"object","name":"Line","id":"p348674","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p348675","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p348676","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p348687","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p348681","attributes":{"selected":{"type":"object","name":"Selection","id":"p348682","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p348683"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p348688","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p348689"}}},"glyph":{"type":"object","name":"Line","id":"p348684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p348685","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p348686","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p348626","attributes":{"tools":[{"id":"p348639"},{"id":"p348640"},{"id":"p348641"},{"id":"p348649"},{"type":"object","name":"SaveTool","id":"p348650"},{"id":"p348691"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p348634","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p348635","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p348636"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p348637"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p348629","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p348630","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p348631"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p348632"}}}],"center":[{"type":"object","name":"Grid","id":"p348633","attributes":{"axis":{"id":"p348629"}}},{"type":"object","name":"Grid","id":"p348638","attributes":{"dimension":1,"axis":{"id":"p348634"}}},{"type":"object","name":"Legend","id":"p348669","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p348670","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p348666"}]}},{"type":"object","name":"LegendItem","id":"p348680","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p348677"}]}},{"type":"object","name":"LegendItem","id":"p348690","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p348687"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p348692","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p348702","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p348694"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p348703"},"y_scale":{"type":"object","name":"LinearScale","id":"p348704"},"title":{"type":"object","name":"Title","id":"p348695","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p348733","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p348727","attributes":{"selected":{"type":"object","name":"Selection","id":"p348728","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p348729"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p348734","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p348735"}}},"glyph":{"type":"object","name":"Line","id":"p348730","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p348731","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p348732","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p348742","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p348736","attributes":{"selected":{"type":"object","name":"Selection","id":"p348737","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p348738"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p348743","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p348744"}}},"glyph":{"type":"object","name":"Line","id":"p348739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p348740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p348741","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p348753","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p348747","attributes":{"selected":{"type":"object","name":"Selection","id":"p348748","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p348749"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p348754","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p348755"}}},"glyph":{"type":"object","name":"Line","id":"p348750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p348751","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p348752","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p348763","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p348757","attributes":{"selected":{"type":"object","name":"Selection","id":"p348758","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p348759"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p348764","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p348765"}}},"glyph":{"type":"object","name":"Line","id":"p348760","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p348761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p348762","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p348701","attributes":{"tools":[{"id":"p348715"},{"id":"p348716"},{"id":"p348717"},{"id":"p348725"},{"type":"object","name":"SaveTool","id":"p348726"},{"id":"p348767"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p348710","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p348711","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p348712"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p348713"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p348705","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p348706"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p348707"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p348708"}}}],"center":[{"type":"object","name":"Grid","id":"p348709","attributes":{"axis":{"id":"p348705"}}},{"type":"object","name":"Grid","id":"p348714","attributes":{"dimension":1,"axis":{"id":"p348710"}}},{"type":"object","name":"Legend","id":"p348745","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p348746","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p348742"}]}},{"type":"object","name":"LegendItem","id":"p348756","attributes":{"label":{"type":"value","value":"Median Year (1931)"},"renderers":[{"id":"p348753"}]}},{"type":"object","name":"LegendItem","id":"p348766","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p348763"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p348768","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"96d004d1-f112-4ead-88df-27b3d327c7ff","roots":{"p348779":"beaeac63-5fd0-4a28-aa37-e4c31a90f091"},"root_ids":["p348779"]}];
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