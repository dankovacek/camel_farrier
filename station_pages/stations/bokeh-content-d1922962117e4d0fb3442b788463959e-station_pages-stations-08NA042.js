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
    
    
    const element = document.getElementById("b512694a-75f3-44ad-9ca9-dabaa687d6a2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b512694a-75f3-44ad-9ca9-dabaa687d6a2' but no matching script tag was found.")
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
                  const docs_json = '{"8800c17e-3b97-40b3-86aa-842750950a64":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p358890","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p358891"}}},"roots":[{"type":"object","name":"Column","id":"p359054","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p359052","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p359051","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p359044","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p358914"},{"type":"object","name":"PanTool","id":"p358990"}]}},{"type":"object","name":"ToolProxy","id":"p359045","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p358915","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p358991","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p359046","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p358916","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p358917","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p358923","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p358922","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p358992","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p358993","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p358999","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p358998","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p359047","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p358924"},{"type":"object","name":"ResetTool","id":"p359000"}]}},{"type":"object","name":"SaveTool","id":"p359048"},{"type":"object","name":"ToolProxy","id":"p359049","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p358966","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p359050","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p359042","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p358892","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p358893"},"y_range":{"type":"object","name":"DataRange1d","id":"p358894"},"x_scale":{"type":"object","name":"LinearScale","id":"p358902"},"y_scale":{"type":"object","name":"LogScale","id":"p358903"},"title":{"type":"object","name":"Title","id":"p358895","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p358932","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p358926","attributes":{"selected":{"type":"object","name":"Selection","id":"p358927","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p358928"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7ZVi+hfVWq2zj0lLa3t0fIa9Jtf1x0r7JttXH/r6ol9kon3TzJkzn3zqt7feIfeU4WCP/RuNmH6Vqk77MJF17HFfWu0v/v9v/7CqBU5zrXNf2Li2yf73///10/Oa7H/9/3/fN6nB/kngjn3Jyg32V4HqONbUkEzz75Bzle2vtN8GdHfJ5IoBo/sWF9QuEK2wnw72b8mgpcWMjT+zmBRCw7+AaPr2tcUGiy7mQv2bMeJpAEqrgfMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p358933","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p358934"}}},"glyph":{"type":"object","name":"Line","id":"p358929","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p358930","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p358931","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p358941","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p358935","attributes":{"selected":{"type":"object","name":"Selection","id":"p358936","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p358937"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7ZVi+hfVWq2zj0lLa3t0fIa9Jtf1x0r7JttXH/r6ol9kon3TzJkzn3zqt7feIfeU4WCP/RuNmH6Vqk77MJF17HFfWu0v/v9v/7CqBU5zrXNf2Li2yf73///10/Oa7H/9/3/fN6nB/kngjn3Jyg32V4HqONbUkEzz75Bzle2vtN8GdHfJ5IoBo/sWF9QuEK2wnw72b8mgpcWMjT+zmBRCw7+AaPr2tcUGiy7mQv2bMeJpAEqrgfMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p358942","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p358943"}}},"glyph":{"type":"object","name":"Line","id":"p358938","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p358939","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p358940","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p358952","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p358946","attributes":{"selected":{"type":"object","name":"Selection","id":"p358947","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p358948"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SSyhEURzGLaQsSKNIUd55JO/HeM03d8ZjzJi5c2funVEi2bASycaWZGNLsmFJspktScoWJZktSmoWNiyk3HP+3+l2pznnf77/9/v+15MNL7Uf53we/fvn23sdcJ8CyP8iRNz35ZYHsl+G+zljszBXwfMqnOpVzbpa5Boy+/dz9axvhNr99jTxXjPWKu9WK+9aeb8NqtrYbKdOB9wiV6GTel2oUuWr3dTtwZWrlg33Ur8P80q2oZ99BpCnl5f9vDhR29lB9h2CLs8Ms/8I3pTM3ih9+OS8B/QDlKq6Gj99+aHbFhv0Z8i9X4M+A9hW9j4C9BuEY7vrKUjfY2hU2zdj9D+OH2XkYpwcE9AyRxPkmcSBsrU7Sa4QltXBRoh8IXiV0OIUOaegbZph8obxojEj5I7gTGG1TJN/WrjKo8whKlz5MeYRg5b5ijEXU/yumMzHFN/vJnOKi//ZOPOKC8djnLlZwhOymJ8lXNcWc7Sgt/sSzDOBB8V5nmCuCeGtSzLfJHRMh0nmnBT+Ept525LDjs3cbchnbjN/R7jWHc7BEa5Ph/NICddCinNJCddzivNJC1c0zTmlhes2zXnN4B8Gd2ukYAMAAA=="},"shape":[108],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7b///z9/5syZ9u/+/7d/WDXF/ilQvChjov2v///v+yZNsL8GpAN39Nn///+/ft/8LvsPQPmSyR32F8HqWzDo30B10/Oa4DTEnAY4fRWojmNNDdn0NrD9FYOOng72f8mQoSHxUUA2DfF3xiiNgwYANFJ912ADAAA="},"shape":[108],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p358953","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p358954"}}},"glyph":{"type":"object","name":"Line","id":"p358949","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p358950","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p358951","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p358962","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p358956","attributes":{"selected":{"type":"object","name":"Selection","id":"p358957","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p358958"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p358963","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p358964"}}},"glyph":{"type":"object","name":"Line","id":"p358959","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p358960","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p358961","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p358901","attributes":{"tools":[{"id":"p358914"},{"id":"p358915"},{"id":"p358916"},{"id":"p358924"},{"type":"object","name":"SaveTool","id":"p358925"},{"id":"p358966"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p358909","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p358910","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p358911"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p358912"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p358904","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p358905","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p358906"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p358907"}}}],"center":[{"type":"object","name":"Grid","id":"p358908","attributes":{"axis":{"id":"p358904"}}},{"type":"object","name":"Grid","id":"p358913","attributes":{"dimension":1,"axis":{"id":"p358909"}}},{"type":"object","name":"Legend","id":"p358944","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p358945","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p358941"}]}},{"type":"object","name":"LegendItem","id":"p358955","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p358952"}]}},{"type":"object","name":"LegendItem","id":"p358965","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p358962"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p358967","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p358977","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p358969"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p358978"},"y_scale":{"type":"object","name":"LinearScale","id":"p358979"},"title":{"type":"object","name":"Title","id":"p358970","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p359008","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p359002","attributes":{"selected":{"type":"object","name":"Selection","id":"p359003","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p359004"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p359009","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p359010"}}},"glyph":{"type":"object","name":"Line","id":"p359005","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p359006","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p359007","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p359017","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p359011","attributes":{"selected":{"type":"object","name":"Selection","id":"p359012","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p359013"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p359018","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p359019"}}},"glyph":{"type":"object","name":"Line","id":"p359014","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p359015","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p359016","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p359028","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p359022","attributes":{"selected":{"type":"object","name":"Selection","id":"p359023","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p359024"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p359029","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p359030"}}},"glyph":{"type":"object","name":"Line","id":"p359025","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p359026","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p359027","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p359038","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p359032","attributes":{"selected":{"type":"object","name":"Selection","id":"p359033","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p359034"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p359039","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p359040"}}},"glyph":{"type":"object","name":"Line","id":"p359035","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p359036","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p359037","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p358976","attributes":{"tools":[{"id":"p358990"},{"id":"p358991"},{"id":"p358992"},{"id":"p359000"},{"type":"object","name":"SaveTool","id":"p359001"},{"id":"p359042"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p358985","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p358986","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p358987"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p358988"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p358980","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p358981"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p358982"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p358983"}}}],"center":[{"type":"object","name":"Grid","id":"p358984","attributes":{"axis":{"id":"p358980"}}},{"type":"object","name":"Grid","id":"p358989","attributes":{"dimension":1,"axis":{"id":"p358985"}}},{"type":"object","name":"Legend","id":"p359020","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p359021","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p359017"}]}},{"type":"object","name":"LegendItem","id":"p359031","attributes":{"label":{"type":"value","value":"Median Year (1931)"},"renderers":[{"id":"p359028"}]}},{"type":"object","name":"LegendItem","id":"p359041","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p359038"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p359043","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8800c17e-3b97-40b3-86aa-842750950a64","roots":{"p359054":"b512694a-75f3-44ad-9ca9-dabaa687d6a2"},"root_ids":["p359054"]}];
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