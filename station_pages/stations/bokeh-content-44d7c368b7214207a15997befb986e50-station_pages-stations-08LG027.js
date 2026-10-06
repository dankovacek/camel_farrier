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
    
    
    const element = document.getElementById("ad996c1b-3eea-4cae-b14a-78300c1ac02c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ad996c1b-3eea-4cae-b14a-78300c1ac02c' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.9.1.min.js"];
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
                  const docs_json = '{"652427ac-4b66-4a2d-9054-3d9feaa2bfa5":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p574644","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p574645"}}},"roots":[{"type":"object","name":"Column","id":"p574808","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p574805","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p574804","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p574797","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p574668"},{"type":"object","name":"PanTool","id":"p574744"}]}},{"type":"object","name":"ToolProxy","id":"p574798","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p574669","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p574745","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p574799","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p574670","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p574671","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p574677","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p574676","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p574746","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p574747","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p574753","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p574752","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p574800","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p574678"},{"type":"object","name":"ResetTool","id":"p574754"}]}},{"type":"object","name":"SaveTool","id":"p574801"},{"type":"object","name":"ToolProxy","id":"p574802","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p574720","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p574803","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p574796","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p574646","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p574647"},"y_range":{"type":"object","name":"DataRange1d","id":"p574648"},"x_scale":{"type":"object","name":"LinearScale","id":"p574656"},"y_scale":{"type":"object","name":"LogScale","id":"p574657"},"title":{"type":"object","name":"Title","id":"p574649","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p574686","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574680","attributes":{"selected":{"type":"object","name":"Selection","id":"p574681","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574682"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgw9/1jewYEnXBwxSN7RgYGBdmT90E0g2YMJm1ibNzdGnUXJL/AddttsulzZ86sWeJ3w/7////2xsaXSaaNjY03Vx6/aM/MwFCQYn3e/uKZMzrLX5wAmbN/7vvjA06D3Les8jgofBmYtFHoCQt+HLWfNXOmZOLhw/YzZ878ydG13/73///+uzz32P/9/3+++8NdA04np6Ud007daa9lbOx8ceIWkPvi95RsHrT0v///9YFBDkxLxs3rtm2yT0pLSxPfvtH+8////fam6+yB8vtLJq8gmQYA9vq+KygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574687","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574688"}}},"glyph":{"type":"object","name":"Line","id":"p574683","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p574685","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p574695","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574689","attributes":{"selected":{"type":"object","name":"Selection","id":"p574690","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574691"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgw9/1jewYEnXBwxSN7RgYGBdmT90E0g2YMJm1ibNzdGnUXJL/AddttsulzZ86sWeJ3w/7////2xsaXSaaNjY03Vx6/aM/MwFCQYn3e/uKZMzrLX5wAmbN/7vvjA06D3Les8jgofBmYtFHoCQt+HLWfNXOmZOLhw/YzZ878ydG13/73///+uzz32P/9/3+++8NdA04np6Ud007daa9lbOx8ceIWkPvi95RsHrT0v///9YFBDkxLxs3rtm2yT0pLSxPfvtH+8////fam6+yB8vtLJq8gmQYA9vq+KygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574696","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574697"}}},"glyph":{"type":"object","name":"Line","id":"p574692","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574693","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p574694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p574706","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574700","attributes":{"selected":{"type":"object","name":"Selection","id":"p574701","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574702"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2QQU7CQBhGXbIWFq5YmJCSmBhjNBgmyoegKOJQSktxW+5Qz1DugHfAM+Adyh3KnqXt8LppZuab771/9tkmzzbH3t79a1p5aeKl5zqtLzQtdrbYNdm/1E+ZyrMW5201zLZutlfkrvVXpm1xQ/5WZ+674969XLze4f6Dvkta4nXpMfqtjs0jfU+qbBJP9Ipcn/5n8gM4Q+4N4b3oUOnbV7gjrasx8xH8N7lxk3c8xnDGcD7k8OkEziccC8fK1WVTPH3WPj2+3PPZGX0zPAL8A3wC+ud4zeGE+IXwQjgR80VwIuZcwFnAifGP4cRyz2+WcJZwvvQPv1RaTAgCAAA="},"shape":[65],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgw9/1je0YGBgbNmPvY6AWu226DxImi////b29sfNmeEA20juHflQsgdfvnvj9OMxpkD5P2cXsk+sDnv0fsfwIt1tm01/7v///z3R/uohn9+///+D0lm+3pRQO99X/lx00g+/YXZWy0/wekSyavIEgDAPAjoBAIAgAA"},"shape":[65],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574707","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574708"}}},"glyph":{"type":"object","name":"Line","id":"p574703","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574704","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p574705","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p574716","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574710","attributes":{"selected":{"type":"object","name":"Selection","id":"p574711","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574712"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p574717","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574718"}}},"glyph":{"type":"object","name":"Line","id":"p574713","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574714","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p574715","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p574655","attributes":{"tools":[{"id":"p574668"},{"id":"p574669"},{"id":"p574670"},{"id":"p574678"},{"type":"object","name":"SaveTool","id":"p574679"},{"id":"p574720"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p574663","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p574664","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p574665"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p574666"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p574658","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p574659","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p574660"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p574661"}}}],"center":[{"type":"object","name":"Grid","id":"p574662","attributes":{"axis":{"id":"p574658"}}},{"type":"object","name":"Grid","id":"p574667","attributes":{"dimension":1,"axis":{"id":"p574663"}}},{"type":"object","name":"Legend","id":"p574698","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p574699","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p574695"}]}},{"type":"object","name":"LegendItem","id":"p574709","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p574706"}]}},{"type":"object","name":"LegendItem","id":"p574719","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p574716"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p574721","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p574731","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p574723"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p574732"},"y_scale":{"type":"object","name":"LinearScale","id":"p574733"},"title":{"type":"object","name":"Title","id":"p574724","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p574762","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574756","attributes":{"selected":{"type":"object","name":"Selection","id":"p574757","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574758"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif7//7+/adwp+2AvTd41MpfsWzs6ON483WKPro4QHwAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574763","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574764"}}},"glyph":{"type":"object","name":"Line","id":"p574759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574760","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p574761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p574771","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574765","attributes":{"selected":{"type":"object","name":"Selection","id":"p574766","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574767"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif7//7+/adwp+2AvTd41MpfsWzs6ON483WKPro4QHwAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574772","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574773"}}},"glyph":{"type":"object","name":"Line","id":"p574768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p574770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p574782","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574776","attributes":{"selected":{"type":"object","name":"Selection","id":"p574777","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574778"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif7//7+/adwp+2AvTd41MpfsWzs6ON483WKPro4QHwAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574783","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574784"}}},"glyph":{"type":"object","name":"Line","id":"p574779","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574780","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p574781","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p574792","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574786","attributes":{"selected":{"type":"object","name":"Selection","id":"p574787","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574788"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p574793","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574794"}}},"glyph":{"type":"object","name":"Line","id":"p574789","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574790","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p574791","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p574730","attributes":{"tools":[{"id":"p574744"},{"id":"p574745"},{"id":"p574746"},{"id":"p574754"},{"type":"object","name":"SaveTool","id":"p574755"},{"id":"p574796"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p574739","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p574740","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p574741"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p574742"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p574734","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p574735"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p574736"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p574737"}}}],"center":[{"type":"object","name":"Grid","id":"p574738","attributes":{"axis":{"id":"p574734"}}},{"type":"object","name":"Grid","id":"p574743","attributes":{"dimension":1,"axis":{"id":"p574739"}}},{"type":"object","name":"Legend","id":"p574774","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p574775","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p574771"}]}},{"type":"object","name":"LegendItem","id":"p574785","attributes":{"label":{"type":"value","value":"Median Year (1928)"},"renderers":[{"id":"p574782"}]}},{"type":"object","name":"LegendItem","id":"p574795","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p574792"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p574807","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"652427ac-4b66-4a2d-9054-3d9feaa2bfa5","roots":{"p574808":"ad996c1b-3eea-4cae-b14a-78300c1ac02c"},"root_ids":["p574808"]}];
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