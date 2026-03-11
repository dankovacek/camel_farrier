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
    
    
    const element = document.getElementById("c932d03f-bfc5-4cf2-8a4b-557f25787c88");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c932d03f-bfc5-4cf2-8a4b-557f25787c88' but no matching script tag was found.")
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
                  const docs_json = '{"c4d9d2ac-4129-4d17-8970-283997a7370a":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p490236","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p490237"}}},"roots":[{"type":"object","name":"Column","id":"p490400","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p490397","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p490396","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p490389","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p490260"},{"type":"object","name":"PanTool","id":"p490336"}]}},{"type":"object","name":"ToolProxy","id":"p490390","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p490261","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p490337","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p490391","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p490262","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p490263","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p490269","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p490268","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p490338","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p490339","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p490345","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p490344","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p490392","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p490270"},{"type":"object","name":"ResetTool","id":"p490346"}]}},{"type":"object","name":"SaveTool","id":"p490393"},{"type":"object","name":"ToolProxy","id":"p490394","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p490312","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p490395","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p490388","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p490238","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p490239"},"y_range":{"type":"object","name":"DataRange1d","id":"p490240"},"x_scale":{"type":"object","name":"LinearScale","id":"p490248"},"y_scale":{"type":"object","name":"LogScale","id":"p490249"},"title":{"type":"object","name":"Title","id":"p490241","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p490278","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490272","attributes":{"selected":{"type":"object","name":"Selection","id":"p490273","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490274"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3z7X/hoH/+/z/fumOu/Y///93tXsy0n1xgy1VTN8P+xf//9/17pw84fWBxwdxq/un2b/7/f15jP9X+3f//9g+rpozSdKJTRda1pzBOtn8KTC9FGROHLQ0APxRDkCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490279","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490280"}}},"glyph":{"type":"object","name":"Line","id":"p490275","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490276","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490277","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p490287","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490281","attributes":{"selected":{"type":"object","name":"Selection","id":"p490282","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490283"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3z7X/hoH/+/z/fumOu/Y///93tXsy0n1xgy1VTN8P+xf//9/17pw84fWBxwdxq/un2b/7/f15jP9X+3f//9g+rpozSdKJTRda1pzBOtn8KTC9FGROHLQ0APxRDkCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490288","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490289"}}},"glyph":{"type":"object","name":"Line","id":"p490284","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490285","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p490286","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p490298","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490292","attributes":{"selected":{"type":"object","name":"Selection","id":"p490293","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490294"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2PhVS+Nl/ttzwKmuR2OeN6dfjxMxAHCl3ZQyrBY+fuTAlRcxSFFu6lt8i51qLy2w9J3p5O1m/Sg6gwcPt/oWvBwiRFUvYnD5F36/Ws5zKD6zB1M5lyprcyxhOq3drgK5LlesIGaY+cAVi7lADXPwaEbaNq7045Qc50cogVBJjhDzXdxABur7wq1x83hzyeQQjeofe4OZ5JBDA+ovZ4Oc0GUqxfUfm8HoOUFQd+9oe7wcbDZBrLZF+oePwewsmh/qLsCHN6DhNsCoO4LcAgHGxQIdWegw36wAUFQ9wY5gLULBkPdHewAMsXvVTDU/SEO359uFHU8HAL1R6hDghxIZSjUP2EOJ8JAFoRB/RXmAHaGXzjUf+EOM46DFERA/RnhwAAGkQ4AIr+7kNgBAAA="},"shape":[59],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3z7X9B6e///8+fOXOm/Yv//+/7906nOv3u/3/7h1VThi39FBiORRkTB5wGABD8uLvYAQAA"},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490299","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490300"}}},"glyph":{"type":"object","name":"Line","id":"p490295","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490296","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p490297","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p490308","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490302","attributes":{"selected":{"type":"object","name":"Selection","id":"p490303","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490304"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p490309","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490310"}}},"glyph":{"type":"object","name":"Line","id":"p490305","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490306","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490307","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p490247","attributes":{"tools":[{"id":"p490260"},{"id":"p490261"},{"id":"p490262"},{"id":"p490270"},{"type":"object","name":"SaveTool","id":"p490271"},{"id":"p490312"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p490255","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p490256","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p490257"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p490258"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p490250","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p490251","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p490252"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p490253"}}}],"center":[{"type":"object","name":"Grid","id":"p490254","attributes":{"axis":{"id":"p490250"}}},{"type":"object","name":"Grid","id":"p490259","attributes":{"dimension":1,"axis":{"id":"p490255"}}},{"type":"object","name":"Legend","id":"p490290","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p490291","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p490287"}]}},{"type":"object","name":"LegendItem","id":"p490301","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p490298"}]}},{"type":"object","name":"LegendItem","id":"p490311","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p490308"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p490313","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p490323","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p490315"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p490324"},"y_scale":{"type":"object","name":"LinearScale","id":"p490325"},"title":{"type":"object","name":"Title","id":"p490316","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p490354","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490348","attributes":{"selected":{"type":"object","name":"Selection","id":"p490349","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490350"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9K////eX7ZtvD6Nh4iJlSdMVZk6xLzU8VjHl82R7Bhz6YTQAdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490355","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490356"}}},"glyph":{"type":"object","name":"Line","id":"p490351","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490352","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490353","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p490363","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490357","attributes":{"selected":{"type":"object","name":"Selection","id":"p490358","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490359"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9K////eX7ZtvD6Nh4iJlSdMVZk6xLzU8VjHl82R7Bhz6YTQAdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490364","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490365"}}},"glyph":{"type":"object","name":"Line","id":"p490360","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490361","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p490362","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p490374","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490368","attributes":{"selected":{"type":"object","name":"Selection","id":"p490369","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490370"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9K////eX7ZtvD6Nh4iJlSdMVZk6xLzU8VjHl82R7Bhz6YTQAdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490375","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490376"}}},"glyph":{"type":"object","name":"Line","id":"p490371","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490372","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p490373","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p490384","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490378","attributes":{"selected":{"type":"object","name":"Selection","id":"p490379","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490380"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p490385","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490386"}}},"glyph":{"type":"object","name":"Line","id":"p490381","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490382","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490383","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p490322","attributes":{"tools":[{"id":"p490336"},{"id":"p490337"},{"id":"p490338"},{"id":"p490346"},{"type":"object","name":"SaveTool","id":"p490347"},{"id":"p490388"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p490331","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p490332","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p490333"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p490334"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p490326","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p490327"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p490328"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p490329"}}}],"center":[{"type":"object","name":"Grid","id":"p490330","attributes":{"axis":{"id":"p490326"}}},{"type":"object","name":"Grid","id":"p490335","attributes":{"dimension":1,"axis":{"id":"p490331"}}},{"type":"object","name":"Legend","id":"p490366","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p490367","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p490363"}]}},{"type":"object","name":"LegendItem","id":"p490377","attributes":{"label":{"type":"value","value":"Median Year (1965)"},"renderers":[{"id":"p490374"}]}},{"type":"object","name":"LegendItem","id":"p490387","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p490384"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p490399","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c4d9d2ac-4129-4d17-8970-283997a7370a","roots":{"p490400":"c932d03f-bfc5-4cf2-8a4b-557f25787c88"},"root_ids":["p490400"]}];
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