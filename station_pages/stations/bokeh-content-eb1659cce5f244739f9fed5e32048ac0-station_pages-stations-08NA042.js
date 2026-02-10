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
    
    
    const element = document.getElementById("b5a414c4-abff-4999-9fde-1cb4015cd846");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b5a414c4-abff-4999-9fde-1cb4015cd846' but no matching script tag was found.")
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
                  const docs_json = '{"044ca858-a217-4a2d-ab5c-efb4dd05cdb7":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p353253","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p353254"}}},"roots":[{"type":"object","name":"Column","id":"p353417","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p353415","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p353414","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p353407","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p353277"},{"type":"object","name":"PanTool","id":"p353353"}]}},{"type":"object","name":"ToolProxy","id":"p353408","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p353278","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p353354","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p353409","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p353279","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p353280","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p353286","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p353285","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p353355","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p353356","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p353362","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p353361","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p353410","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p353287"},{"type":"object","name":"ResetTool","id":"p353363"}]}},{"type":"object","name":"SaveTool","id":"p353411"},{"type":"object","name":"ToolProxy","id":"p353412","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p353329","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p353413","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p353405","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p353255","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p353256"},"y_range":{"type":"object","name":"DataRange1d","id":"p353257"},"x_scale":{"type":"object","name":"LinearScale","id":"p353265"},"y_scale":{"type":"object","name":"LogScale","id":"p353266"},"title":{"type":"object","name":"Title","id":"p353258","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p353295","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353289","attributes":{"selected":{"type":"object","name":"Selection","id":"p353290","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353291"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7ZVi+hfVWq2zj0lLa3t0fIa9Jtf1x0r7JttXH/r6ol9kon3TzJkzn3zqt7feIfeU4WCP/RuNmH6Vqk77MJF17HFfWu0v/v9v/7CqBU5zrXNf2Li2yf73///10/Oa7H/9/3/fN6nB/kngjn3Jyg32V4HqONbUkEzz75Bzle2vtN8GdHfJ5IoBo/sWF9QuEK2wnw72b8mgpcWMjT+zmBRCw7+AaPr2tcUGiy7mQv2bMeJpAEqrgfMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353296","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353297"}}},"glyph":{"type":"object","name":"Line","id":"p353292","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353293","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p353294","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p353304","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353298","attributes":{"selected":{"type":"object","name":"Selection","id":"p353299","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353300"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7ZVi+hfVWq2zj0lLa3t0fIa9Jtf1x0r7JttXH/r6ol9kon3TzJkzn3zqt7feIfeU4WCP/RuNmH6Vqk77MJF17HFfWu0v/v9v/7CqBU5zrXNf2Li2yf73///10/Oa7H/9/3/fN6nB/kngjn3Jyg32V4HqONbUkEzz75Bzle2vtN8GdHfJ5IoBo/sWF9QuEK2wnw72b8mgpcWMjT+zmBRCw7+AaPr2tcUGiy7mQv2bMeJpAEqrgfMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353305","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353306"}}},"glyph":{"type":"object","name":"Line","id":"p353301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p353303","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p353315","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353309","attributes":{"selected":{"type":"object","name":"Selection","id":"p353310","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353311"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SSyhEURzGLaQsSKNIUd55JO/HeM03d8ZjzJi5c2funVEi2bASycaWZGNLsmFJspktScoWJZktSmoWNiyk3HP+3+l2pznnf77/9/v+15MNL7Uf53we/fvn23sdcJ8CyP8iRNz35ZYHsl+G+zljszBXwfMqnOpVzbpa5Boy+/dz9axvhNr99jTxXjPWKu9WK+9aeb8NqtrYbKdOB9wiV6GTel2oUuWr3dTtwZWrlg33Ur8P80q2oZ99BpCnl5f9vDhR29lB9h2CLs8Ms/8I3pTM3ih9+OS8B/QDlKq6Gj99+aHbFhv0Z8i9X4M+A9hW9j4C9BuEY7vrKUjfY2hU2zdj9D+OH2XkYpwcE9AyRxPkmcSBsrU7Sa4QltXBRoh8IXiV0OIUOaegbZph8obxojEj5I7gTGG1TJN/WrjKo8whKlz5MeYRg5b5ijEXU/yumMzHFN/vJnOKi//ZOPOKC8djnLlZwhOymJ8lXNcWc7Sgt/sSzDOBB8V5nmCuCeGtSzLfJHRMh0nmnBT+Ept525LDjs3cbchnbjN/R7jWHc7BEa5Ph/NICddCinNJCddzivNJC1c0zTmlhes2zXnN4B8Gd2ukYAMAAA=="},"shape":[108],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3r7b///z9/5syZ9u/+/7d/WDXF/ilQvChjov2v///v+yZNsL8GpAN39Nn///+/ft/8LvsPQPmSyR32F8HqWzDo30B10/Oa4DTEnAY4fRWojmNNDdn0NrD9FYOOng72f8mQoSHxUUA2DfF3xiiNgwYANFJ912ADAAA="},"shape":[108],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353316","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353317"}}},"glyph":{"type":"object","name":"Line","id":"p353312","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353313","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p353314","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p353325","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353319","attributes":{"selected":{"type":"object","name":"Selection","id":"p353320","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353321"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p353326","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353327"}}},"glyph":{"type":"object","name":"Line","id":"p353322","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353323","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p353324","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p353264","attributes":{"tools":[{"id":"p353277"},{"id":"p353278"},{"id":"p353279"},{"id":"p353287"},{"type":"object","name":"SaveTool","id":"p353288"},{"id":"p353329"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p353272","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p353273","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p353274"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p353275"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p353267","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p353268","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p353269"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p353270"}}}],"center":[{"type":"object","name":"Grid","id":"p353271","attributes":{"axis":{"id":"p353267"}}},{"type":"object","name":"Grid","id":"p353276","attributes":{"dimension":1,"axis":{"id":"p353272"}}},{"type":"object","name":"Legend","id":"p353307","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p353308","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p353304"}]}},{"type":"object","name":"LegendItem","id":"p353318","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p353315"}]}},{"type":"object","name":"LegendItem","id":"p353328","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p353325"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p353330","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p353340","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p353332"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p353341"},"y_scale":{"type":"object","name":"LinearScale","id":"p353342"},"title":{"type":"object","name":"Title","id":"p353333","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p353371","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353365","attributes":{"selected":{"type":"object","name":"Selection","id":"p353366","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353367"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353372","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353373"}}},"glyph":{"type":"object","name":"Line","id":"p353368","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353369","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p353370","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p353380","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353374","attributes":{"selected":{"type":"object","name":"Selection","id":"p353375","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353376"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353381","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353382"}}},"glyph":{"type":"object","name":"Line","id":"p353377","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353378","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p353379","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p353391","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353385","attributes":{"selected":{"type":"object","name":"Selection","id":"p353386","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353387"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Cf//2tvmttv7yjgdOLXkyJ7ubVbw2ZXZ9szuri4vDMtt8elDwA8MEQpYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p353392","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353393"}}},"glyph":{"type":"object","name":"Line","id":"p353388","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353389","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p353390","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p353401","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p353395","attributes":{"selected":{"type":"object","name":"Selection","id":"p353396","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p353397"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p353402","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p353403"}}},"glyph":{"type":"object","name":"Line","id":"p353398","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p353399","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p353400","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p353339","attributes":{"tools":[{"id":"p353353"},{"id":"p353354"},{"id":"p353355"},{"id":"p353363"},{"type":"object","name":"SaveTool","id":"p353364"},{"id":"p353405"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p353348","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p353349","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p353350"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p353351"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p353343","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p353344"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p353345"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p353346"}}}],"center":[{"type":"object","name":"Grid","id":"p353347","attributes":{"axis":{"id":"p353343"}}},{"type":"object","name":"Grid","id":"p353352","attributes":{"dimension":1,"axis":{"id":"p353348"}}},{"type":"object","name":"Legend","id":"p353383","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p353384","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p353380"}]}},{"type":"object","name":"LegendItem","id":"p353394","attributes":{"label":{"type":"value","value":"Median Year (1931)"},"renderers":[{"id":"p353391"}]}},{"type":"object","name":"LegendItem","id":"p353404","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p353401"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p353406","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"044ca858-a217-4a2d-ab5c-efb4dd05cdb7","roots":{"p353417":"b5a414c4-abff-4999-9fde-1cb4015cd846"},"root_ids":["p353417"]}];
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