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
    
    
    const element = document.getElementById("aa95efd4-e979-49c2-9b59-27cbbada91f0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aa95efd4-e979-49c2-9b59-27cbbada91f0' but no matching script tag was found.")
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
                  const docs_json = '{"9137a74c-e848-462e-8931-5dd94c253039":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p349875","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p349876"}}},"roots":[{"type":"object","name":"Column","id":"p350039","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p350037","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p350036","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p350029","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p349899"},{"type":"object","name":"PanTool","id":"p349975"}]}},{"type":"object","name":"ToolProxy","id":"p350030","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p349900","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p349976","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p350031","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p349901","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p349902","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p349908","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p349907","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p349977","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p349978","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p349984","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p349983","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p350032","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p349909"},{"type":"object","name":"ResetTool","id":"p349985"}]}},{"type":"object","name":"SaveTool","id":"p350033"},{"type":"object","name":"ToolProxy","id":"p350034","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p349951","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p350035","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p350027","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p349877","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p349878"},"y_range":{"type":"object","name":"DataRange1d","id":"p349879"},"x_scale":{"type":"object","name":"LinearScale","id":"p349887"},"y_scale":{"type":"object","name":"LogScale","id":"p349888"},"title":{"type":"object","name":"Title","id":"p349880","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p349917","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349911","attributes":{"selected":{"type":"object","name":"Selection","id":"p349912","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349913"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7ZVi+hfVWq2zj0lLa3t0fIa9Jtf1x0r7JttXH/r6ol9kon3TzJkzn3zqt7feIfeU4WCP/RuNmH6Vqk77MJF17HFfWu0v/v9v/7CqBU5zrXNf2Li2yf73///10/Oa7H/9/3/fN6nB/kngjn3Jyg32V4HqONbUkEzz75Bzle2vtN8GdHfJ5IoBo/sWF9QuEK2wnw72b8mgpcWMjT+zmBRCw7+AaPr2tcUGiy7mQv2bMeJpAEqrgfMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p349918","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349919"}}},"glyph":{"type":"object","name":"Line","id":"p349914","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349915","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p349916","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p349926","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349920","attributes":{"selected":{"type":"object","name":"Selection","id":"p349921","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349922"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7ZVi+hfVWq2zj0lLa3t0fIa9Jtf1x0r7JttXH/r6ol9kon3TzJkzn3zqt7feIfeU4WCP/RuNmH6Vqk77MJF17HFfWu0v/v9v/7CqBU5zrXNf2Li2yf73///10/Oa7H/9/3/fN6nB/kngjn3Jyg32V4HqONbUkEzz75Bzle2vtN8GdHfJ5IoBo/sWF9QuEK2wnw72b8mgpcWMjT+zmBRCw7+AaPr2tcUGiy7mQv2bMeJpAEqrgfMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p349927","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349928"}}},"glyph":{"type":"object","name":"Line","id":"p349923","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349924","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p349925","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p349937","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349931","attributes":{"selected":{"type":"object","name":"Selection","id":"p349932","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349933"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SSyhEURzGLaQsSKNIUd55JO/HeM03d8ZjzJi5c2funVEi2bASycaWZGNLsmFJspktScoWJZktSmoWNiyk3HP+3+l2pznnf77/9/v+15MNL7Uf53we/fvn23sdcJ8CyP8iRNz35ZYHsl+G+zljszBXwfMqnOpVzbpa5Boy+/dz9axvhNr99jTxXjPWKu9WK+9aeb8NqtrYbKdOB9wiV6GTel2oUuWr3dTtwZWrlg33Ur8P80q2oZ99BpCnl5f9vDhR29lB9h2CLs8Ms/8I3pTM3ih9+OS8B/QDlKq6Gj99+aHbFhv0Z8i9X4M+A9hW9j4C9BuEY7vrKUjfY2hU2zdj9D+OH2XkYpwcE9AyRxPkmcSBsrU7Sa4QltXBRoh8IXiV0OIUOaegbZph8obxojEj5I7gTGG1TJN/WrjKo8whKlz5MeYRg5b5ijEXU/yumMzHFN/vJnOKi//ZOPOKC8djnLlZwhOymJ8lXNcWc7Sgt/sSzDOBB8V5nmCuCeGtSzLfJHRMh0nmnBT+Ept525LDjs3cbchnbjN/R7jWHc7BEa5Ph/NICddCinNJCddzivNJC1c0zTmlhes2zXnN4B8Gd2ukYAMAAA=="},"shape":[108],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7b///z9/5syZ9u/+/7d/WDXF/ilQvChjov2v///v+yZNsL8GpAN39Nn///+/ft/8LvsPQPmSyR32F8HqWzDo30B10/Oa4DTEnAY4fRWojmNNDdn0NrD9FYOOng72f8mQoSHxUUA2DfF3xiiNgwYANFJ912ADAAA="},"shape":[108],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p349938","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349939"}}},"glyph":{"type":"object","name":"Line","id":"p349934","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349935","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p349936","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p349947","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349941","attributes":{"selected":{"type":"object","name":"Selection","id":"p349942","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349943"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p349948","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349949"}}},"glyph":{"type":"object","name":"Line","id":"p349944","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349945","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p349946","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p349886","attributes":{"tools":[{"id":"p349899"},{"id":"p349900"},{"id":"p349901"},{"id":"p349909"},{"type":"object","name":"SaveTool","id":"p349910"},{"id":"p349951"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p349894","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p349895","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p349896"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p349897"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p349889","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p349890","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p349891"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p349892"}}}],"center":[{"type":"object","name":"Grid","id":"p349893","attributes":{"axis":{"id":"p349889"}}},{"type":"object","name":"Grid","id":"p349898","attributes":{"dimension":1,"axis":{"id":"p349894"}}},{"type":"object","name":"Legend","id":"p349929","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p349930","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p349926"}]}},{"type":"object","name":"LegendItem","id":"p349940","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p349937"}]}},{"type":"object","name":"LegendItem","id":"p349950","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p349947"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p349952","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p349962","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p349954"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p349963"},"y_scale":{"type":"object","name":"LinearScale","id":"p349964"},"title":{"type":"object","name":"Title","id":"p349955","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p349993","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349987","attributes":{"selected":{"type":"object","name":"Selection","id":"p349988","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349989"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p349994","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349995"}}},"glyph":{"type":"object","name":"Line","id":"p349990","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349991","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p349992","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p350002","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349996","attributes":{"selected":{"type":"object","name":"Selection","id":"p349997","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349998"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p350003","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p350004"}}},"glyph":{"type":"object","name":"Line","id":"p349999","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p350000","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p350001","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p350013","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p350007","attributes":{"selected":{"type":"object","name":"Selection","id":"p350008","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p350009"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p350014","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p350015"}}},"glyph":{"type":"object","name":"Line","id":"p350010","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p350011","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p350012","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p350023","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p350017","attributes":{"selected":{"type":"object","name":"Selection","id":"p350018","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p350019"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p350024","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p350025"}}},"glyph":{"type":"object","name":"Line","id":"p350020","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p350021","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p350022","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p349961","attributes":{"tools":[{"id":"p349975"},{"id":"p349976"},{"id":"p349977"},{"id":"p349985"},{"type":"object","name":"SaveTool","id":"p349986"},{"id":"p350027"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p349970","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p349971","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p349972"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p349973"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p349965","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p349966"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p349967"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p349968"}}}],"center":[{"type":"object","name":"Grid","id":"p349969","attributes":{"axis":{"id":"p349965"}}},{"type":"object","name":"Grid","id":"p349974","attributes":{"dimension":1,"axis":{"id":"p349970"}}},{"type":"object","name":"Legend","id":"p350005","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p350006","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p350002"}]}},{"type":"object","name":"LegendItem","id":"p350016","attributes":{"label":{"type":"value","value":"Median Year (1931)"},"renderers":[{"id":"p350013"}]}},{"type":"object","name":"LegendItem","id":"p350026","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p350023"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p350028","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"9137a74c-e848-462e-8931-5dd94c253039","roots":{"p350039":"aa95efd4-e979-49c2-9b59-27cbbada91f0"},"root_ids":["p350039"]}];
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