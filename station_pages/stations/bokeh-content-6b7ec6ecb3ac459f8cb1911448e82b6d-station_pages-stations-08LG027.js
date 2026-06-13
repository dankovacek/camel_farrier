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
    
    
    const element = document.getElementById("d431d22e-d58d-406c-bc0f-c74152513f01");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd431d22e-d58d-406c-bc0f-c74152513f01' but no matching script tag was found.")
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
                  const docs_json = '{"40ebc35d-1e0e-4800-b9ea-587fc256eeb0":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p378354","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p378355"}}},"roots":[{"type":"object","name":"Column","id":"p378518","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p378515","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p378514","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p378507","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p378378"},{"type":"object","name":"PanTool","id":"p378454"}]}},{"type":"object","name":"ToolProxy","id":"p378508","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p378379","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p378455","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p378509","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p378380","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378381","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378387","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378386","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p378456","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378457","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378463","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378462","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p378510","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p378388"},{"type":"object","name":"ResetTool","id":"p378464"}]}},{"type":"object","name":"SaveTool","id":"p378511"},{"type":"object","name":"ToolProxy","id":"p378512","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378430","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p378513","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378506","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p378356","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p378357"},"y_range":{"type":"object","name":"DataRange1d","id":"p378358"},"x_scale":{"type":"object","name":"LinearScale","id":"p378366"},"y_scale":{"type":"object","name":"LogScale","id":"p378367"},"title":{"type":"object","name":"Title","id":"p378359","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378396","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378390","attributes":{"selected":{"type":"object","name":"Selection","id":"p378391","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378392"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgw9/1jewYEnXBwxSN7RgYGBdmT90E0g2YMJm1ibNzdGnUXJL/AddttsulzZ86sWeJ3w/7////2xsaXSaaNjY03Vx6/aM/MwFCQYn3e/uKZMzrLX5wAmbN/7vvjA06D3Les8jgofBmYtFHoCQt+HLWfNXOmZOLhw/YzZ878ydG13/73///+uzz32P/9/3+++8NdA04np6Ud007daa9lbOx8ceIWkPvi95RsHrT0v///9YFBDkxLxs3rtm2yT0pLSxPfvtH+8////fam6+yB8vtLJq8gmQYA9vq+KygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378397","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378398"}}},"glyph":{"type":"object","name":"Line","id":"p378393","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378394","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378395","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378405","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378399","attributes":{"selected":{"type":"object","name":"Selection","id":"p378400","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378401"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgw9/1jewYEnXBwxSN7RgYGBdmT90E0g2YMJm1ibNzdGnUXJL/AddttsulzZ86sWeJ3w/7////2xsaXSaaNjY03Vx6/aM/MwFCQYn3e/uKZMzrLX5wAmbN/7vvjA06D3Les8jgofBmYtFHoCQt+HLWfNXOmZOLhw/YzZ878ydG13/73///+uzz32P/9/3+++8NdA04np6Ud007daa9lbOx8ceIWkPvi95RsHrT0v///9YFBDkxLxs3rtm2yT0pLSxPfvtH+8////fam6+yB8vtLJq8gmQYA9vq+KygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378406","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378407"}}},"glyph":{"type":"object","name":"Line","id":"p378402","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378403","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378404","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378416","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378410","attributes":{"selected":{"type":"object","name":"Selection","id":"p378411","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378412"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2QQU7CQBhGXbIWFq5YmJCSmBhjNBgmyoegKOJQSktxW+5Qz1DugHfAM+Adyh3KnqXt8LppZuab771/9tkmzzbH3t79a1p5aeKl5zqtLzQtdrbYNdm/1E+ZyrMW5201zLZutlfkrvVXpm1xQ/5WZ+674969XLze4f6Dvkta4nXpMfqtjs0jfU+qbBJP9Ipcn/5n8gM4Q+4N4b3oUOnbV7gjrasx8xH8N7lxk3c8xnDGcD7k8OkEziccC8fK1WVTPH3WPj2+3PPZGX0zPAL8A3wC+ud4zeGE+IXwQjgR80VwIuZcwFnAifGP4cRyz2+WcJZwvvQPv1RaTAgCAAA="},"shape":[65],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDgw9/1je0YGBgbNmPvY6AWu226DxImi////b29sfNmeEA20juHflQsgdfvnvj9OMxpkD5P2cXsk+sDnv0fsfwIt1tm01/7v///z3R/uohn9+///+D0lm+3pRQO99X/lx00g+/YXZWy0/wekSyavIEgDAPAjoBAIAgAA"},"shape":[65],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378417","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378418"}}},"glyph":{"type":"object","name":"Line","id":"p378413","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378414","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378415","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378426","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378420","attributes":{"selected":{"type":"object","name":"Selection","id":"p378421","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378422"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378427","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378428"}}},"glyph":{"type":"object","name":"Line","id":"p378423","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378424","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378425","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378365","attributes":{"tools":[{"id":"p378378"},{"id":"p378379"},{"id":"p378380"},{"id":"p378388"},{"type":"object","name":"SaveTool","id":"p378389"},{"id":"p378430"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p378373","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p378374","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p378375"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378376"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p378368","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378369","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378370"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378371"}}}],"center":[{"type":"object","name":"Grid","id":"p378372","attributes":{"axis":{"id":"p378368"}}},{"type":"object","name":"Grid","id":"p378377","attributes":{"dimension":1,"axis":{"id":"p378373"}}},{"type":"object","name":"Legend","id":"p378408","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378409","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p378405"}]}},{"type":"object","name":"LegendItem","id":"p378419","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p378416"}]}},{"type":"object","name":"LegendItem","id":"p378429","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378426"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p378431","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p378441","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p378433"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p378442"},"y_scale":{"type":"object","name":"LinearScale","id":"p378443"},"title":{"type":"object","name":"Title","id":"p378434","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378472","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378466","attributes":{"selected":{"type":"object","name":"Selection","id":"p378467","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378468"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif7//7+/adwp+2AvTd41MpfsWzs6ON483WKPro4QHwAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378473","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378474"}}},"glyph":{"type":"object","name":"Line","id":"p378469","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378470","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378471","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378481","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378475","attributes":{"selected":{"type":"object","name":"Selection","id":"p378476","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378477"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif7//7+/adwp+2AvTd41MpfsWzs6ON483WKPro4QHwAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378482","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378483"}}},"glyph":{"type":"object","name":"Line","id":"p378478","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378479","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378492","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378486","attributes":{"selected":{"type":"object","name":"Selection","id":"p378487","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378488"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif7//7+/adwp+2AvTd41MpfsWzs6ON483WKPro4QHwAvhOzdYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378493","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378494"}}},"glyph":{"type":"object","name":"Line","id":"p378489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378491","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378502","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378496","attributes":{"selected":{"type":"object","name":"Selection","id":"p378497","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378498"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378503","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378504"}}},"glyph":{"type":"object","name":"Line","id":"p378499","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378500","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378501","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378440","attributes":{"tools":[{"id":"p378454"},{"id":"p378455"},{"id":"p378456"},{"id":"p378464"},{"type":"object","name":"SaveTool","id":"p378465"},{"id":"p378506"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p378449","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378450","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378451"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378452"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p378444","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p378445"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p378446"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p378447"}}}],"center":[{"type":"object","name":"Grid","id":"p378448","attributes":{"axis":{"id":"p378444"}}},{"type":"object","name":"Grid","id":"p378453","attributes":{"dimension":1,"axis":{"id":"p378449"}}},{"type":"object","name":"Legend","id":"p378484","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378485","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p378481"}]}},{"type":"object","name":"LegendItem","id":"p378495","attributes":{"label":{"type":"value","value":"Median Year (1928)"},"renderers":[{"id":"p378492"}]}},{"type":"object","name":"LegendItem","id":"p378505","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378502"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p378517","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"40ebc35d-1e0e-4800-b9ea-587fc256eeb0","roots":{"p378518":"d431d22e-d58d-406c-bc0f-c74152513f01"},"root_ids":["p378518"]}];
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