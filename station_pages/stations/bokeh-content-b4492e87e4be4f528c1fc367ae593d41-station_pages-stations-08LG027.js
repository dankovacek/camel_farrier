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
    
    
    const element = document.getElementById("dd873202-a647-4af6-a607-c86f86e94d3c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dd873202-a647-4af6-a607-c86f86e94d3c' but no matching script tag was found.")
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
                  const docs_json = '{"5fdf04cf-992c-44da-8f73-b2441dd8991a":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p378134","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p378135"}}},"roots":[{"type":"object","name":"Column","id":"p378298","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p378295","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p378294","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p378287","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p378158"},{"type":"object","name":"PanTool","id":"p378234"}]}},{"type":"object","name":"ToolProxy","id":"p378288","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p378159","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p378235","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p378289","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p378160","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378161","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378167","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378166","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p378236","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378237","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378243","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378242","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p378290","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p378168"},{"type":"object","name":"ResetTool","id":"p378244"}]}},{"type":"object","name":"SaveTool","id":"p378291"},{"type":"object","name":"ToolProxy","id":"p378292","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378210","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p378293","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378286","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p378136","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p378137"},"y_range":{"type":"object","name":"DataRange1d","id":"p378138"},"x_scale":{"type":"object","name":"LinearScale","id":"p378146"},"y_scale":{"type":"object","name":"LogScale","id":"p378147"},"title":{"type":"object","name":"Title","id":"p378139","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378176","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378170","attributes":{"selected":{"type":"object","name":"Selection","id":"p378171","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378172"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgw9/1jewYEnXBwxSN7RgYGBdmT90E0g2YMJm1ibNzdGnUXJL/AddttsulzZ86sWeJ3w/7////2xsaXSaaNjY03Vx6/aM/MwFCQYn3e/uKZMzrLX5wAmbN/7vvjA06D3Les8jgofBmYtFHoCQt+HLWfNXOmZOLhw/YzZ878ydG13/73///+uzz32P/9/3+++8NdA04np6Ud007daa9lbOx8ceIWkPvi95RsHrT0v///9YFBDkxLxs3rtm2yT0pLSxPfvtH+8////fam6+yB8vtLJq8gmQYA9vq+KygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378177","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378178"}}},"glyph":{"type":"object","name":"Line","id":"p378173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378174","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378175","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378185","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378179","attributes":{"selected":{"type":"object","name":"Selection","id":"p378180","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378181"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgw9/1jewYEnXBwxSN7RgYGBdmT90E0g2YMJm1ibNzdGnUXJL/AddttsulzZ86sWeJ3w/7////2xsaXSaaNjY03Vx6/aM/MwFCQYn3e/uKZMzrLX5wAmbN/7vvjA06D3Les8jgofBmYtFHoCQt+HLWfNXOmZOLhw/YzZ878ydG13/73///+uzz32P/9/3+++8NdA04np6Ud007daa9lbOx8ceIWkPvi95RsHrT0v///9YFBDkxLxs3rtm2yT0pLSxPfvtH+8////fam6+yB8vtLJq8gmQYA9vq+KygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378186","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378187"}}},"glyph":{"type":"object","name":"Line","id":"p378182","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378183","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378184","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378196","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378190","attributes":{"selected":{"type":"object","name":"Selection","id":"p378191","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378192"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2QQU7CQBhGXbIWFq5YmJCSmBhjNBgmyoegKOJQSktxW+5Qz1DugHfAM+Adyh3KnqXt8LppZuab771/9tkmzzbH3t79a1p5aeKl5zqtLzQtdrbYNdm/1E+ZyrMW5201zLZutlfkrvVXpm1xQ/5WZ+674969XLze4f6Dvkta4nXpMfqtjs0jfU+qbBJP9Ipcn/5n8gM4Q+4N4b3oUOnbV7gjrasx8xH8N7lxk3c8xnDGcD7k8OkEziccC8fK1WVTPH3WPj2+3PPZGX0zPAL8A3wC+ud4zeGE+IXwQjgR80VwIuZcwFnAifGP4cRyz2+WcJZwvvQPv1RaTAgCAAA="},"shape":[65],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgw9/1je0YGBgbNmPvY6AWu226DxImi////b29sfNmeEA20juHflQsgdfvnvj9OMxpkD5P2cXsk+sDnv0fsfwIt1tm01/7v///z3R/uohn9+///+D0lm+3pRQO99X/lx00g+/YXZWy0/wekSyavIEgDAPAjoBAIAgAA"},"shape":[65],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378197","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378198"}}},"glyph":{"type":"object","name":"Line","id":"p378193","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378194","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378195","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378206","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378200","attributes":{"selected":{"type":"object","name":"Selection","id":"p378201","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378202"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378207","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378208"}}},"glyph":{"type":"object","name":"Line","id":"p378203","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378204","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378205","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378145","attributes":{"tools":[{"id":"p378158"},{"id":"p378159"},{"id":"p378160"},{"id":"p378168"},{"type":"object","name":"SaveTool","id":"p378169"},{"id":"p378210"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p378153","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p378154","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p378155"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378156"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p378148","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378149","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378150"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378151"}}}],"center":[{"type":"object","name":"Grid","id":"p378152","attributes":{"axis":{"id":"p378148"}}},{"type":"object","name":"Grid","id":"p378157","attributes":{"dimension":1,"axis":{"id":"p378153"}}},{"type":"object","name":"Legend","id":"p378188","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378189","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p378185"}]}},{"type":"object","name":"LegendItem","id":"p378199","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p378196"}]}},{"type":"object","name":"LegendItem","id":"p378209","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378206"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p378211","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p378221","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p378213"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p378222"},"y_scale":{"type":"object","name":"LinearScale","id":"p378223"},"title":{"type":"object","name":"Title","id":"p378214","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378252","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378246","attributes":{"selected":{"type":"object","name":"Selection","id":"p378247","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378248"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif7//7+/adwp+2AvTd41MpfsWzs6ON483WKPro4QHwAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378253","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378254"}}},"glyph":{"type":"object","name":"Line","id":"p378249","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378250","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378261","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378255","attributes":{"selected":{"type":"object","name":"Selection","id":"p378256","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378257"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif7//7+/adwp+2AvTd41MpfsWzs6ON483WKPro4QHwAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378262","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378263"}}},"glyph":{"type":"object","name":"Line","id":"p378258","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378259","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378260","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378272","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378266","attributes":{"selected":{"type":"object","name":"Selection","id":"p378267","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378268"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif7//7+/adwp+2AvTd41MpfsWzs6ON483WKPro4QHwAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378273","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378274"}}},"glyph":{"type":"object","name":"Line","id":"p378269","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378270","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378271","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378282","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378276","attributes":{"selected":{"type":"object","name":"Selection","id":"p378277","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378278"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378283","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378284"}}},"glyph":{"type":"object","name":"Line","id":"p378279","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378280","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378281","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378220","attributes":{"tools":[{"id":"p378234"},{"id":"p378235"},{"id":"p378236"},{"id":"p378244"},{"type":"object","name":"SaveTool","id":"p378245"},{"id":"p378286"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p378229","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378230","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378231"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378232"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p378224","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p378225"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p378226"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p378227"}}}],"center":[{"type":"object","name":"Grid","id":"p378228","attributes":{"axis":{"id":"p378224"}}},{"type":"object","name":"Grid","id":"p378233","attributes":{"dimension":1,"axis":{"id":"p378229"}}},{"type":"object","name":"Legend","id":"p378264","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378265","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p378261"}]}},{"type":"object","name":"LegendItem","id":"p378275","attributes":{"label":{"type":"value","value":"Median Year (1928)"},"renderers":[{"id":"p378272"}]}},{"type":"object","name":"LegendItem","id":"p378285","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378282"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p378297","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"5fdf04cf-992c-44da-8f73-b2441dd8991a","roots":{"p378298":"dd873202-a647-4af6-a607-c86f86e94d3c"},"root_ids":["p378298"]}];
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