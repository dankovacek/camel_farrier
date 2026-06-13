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
    
    
    const element = document.getElementById("d9128cee-2d81-41d5-a3d3-0a1b51b5f3fd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd9128cee-2d81-41d5-a3d3-0a1b51b5f3fd' but no matching script tag was found.")
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
                  const docs_json = '{"d183959f-0b6d-431f-bfb2-c7a1ba786270":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p361132","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p361133"}}},"roots":[{"type":"object","name":"Column","id":"p361296","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p361293","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p361292","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p361285","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p361156"},{"type":"object","name":"PanTool","id":"p361232"}]}},{"type":"object","name":"ToolProxy","id":"p361286","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p361157","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p361233","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p361287","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p361158","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p361159","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p361165","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p361164","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p361234","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p361235","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p361241","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p361240","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p361288","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p361166"},{"type":"object","name":"ResetTool","id":"p361242"}]}},{"type":"object","name":"SaveTool","id":"p361289"},{"type":"object","name":"ToolProxy","id":"p361290","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p361208","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p361291","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p361284","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p361134","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p361135"},"y_range":{"type":"object","name":"DataRange1d","id":"p361136"},"x_scale":{"type":"object","name":"LinearScale","id":"p361144"},"y_scale":{"type":"object","name":"LogScale","id":"p361145"},"title":{"type":"object","name":"Title","id":"p361137","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p361174","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361168","attributes":{"selected":{"type":"object","name":"Selection","id":"p361169","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361170"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1///+sn3z7X/hoH/+/z/fumOu/Y///93tXsy0n1xgy1VTN8P+xf//9/17pw84fWBxwdxq/un2b/7/f15jP9X+3f//9g+rpozSdAqHVJF17SmMk+2fAtNPUcbEYUsDAD8UQ5AoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361175","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361176"}}},"glyph":{"type":"object","name":"Line","id":"p361171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361172","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p361173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p361183","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361177","attributes":{"selected":{"type":"object","name":"Selection","id":"p361178","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361179"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1///+sn3z7X/hoH/+/z/fumOu/Y///93tXsy0n1xgy1VTN8P+xf//9/17pw84fWBxwdxq/un2b/7/f15jP9X+3f//9g+rpozSdAqHVJF17SmMk+2fAtNPUcbEYUsDAD8UQ5AoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361184","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361185"}}},"glyph":{"type":"object","name":"Line","id":"p361180","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361181","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p361182","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p361194","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361188","attributes":{"selected":{"type":"object","name":"Selection","id":"p361189","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361190"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2PhVS+Nl/ttzwKmuR2OeN6dfjxMxAHCl3ZQyrBY+fuTAlRcxSFFu6lt8i51qLy2w9J3p5O1m/Sg6gwcPt/oWvBwiRFUvYnD5F36/Ws5zKD6zB1M5lyprcyxhOq3drgK5LlesIGaY+cAVi7lADXPwaEbaNq7045Qc50cogVBJjhDzXdxADtH3xVqj5vDn08gB7hB7XN3OAN0XdtkD6i9ng5zQda7ekHt93YAWl4Q9N0b6g4fB5ttIB/7Qt3j5wAOlmh/qLsCHN6DvNsWAHVfgEM4OKACoe4MdNgPNiAI6t4gB7B2wWCou4MdQL7zexUMdX+Iw/enG0UdD4dA/RHqkABUbTInFOqfMIcTYSALwqD+CnMAB49fONR/4Q4zjoMURED9GeHAAAaRDgAiv7uQ2AEAAA=="},"shape":[59],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1///+sn3z7X9B6e///8+fOXOm/Yv//+/7906nOv3u/3/7h1VT7Icr/RQYjkUZE+0HmgYAEPy4u9gBAAA="},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361195","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361196"}}},"glyph":{"type":"object","name":"Line","id":"p361191","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361192","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p361193","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p361204","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361198","attributes":{"selected":{"type":"object","name":"Selection","id":"p361199","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361200"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p361205","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361206"}}},"glyph":{"type":"object","name":"Line","id":"p361201","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361202","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p361203","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p361143","attributes":{"tools":[{"id":"p361156"},{"id":"p361157"},{"id":"p361158"},{"id":"p361166"},{"type":"object","name":"SaveTool","id":"p361167"},{"id":"p361208"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p361151","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p361152","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p361153"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p361154"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p361146","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p361147","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p361148"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p361149"}}}],"center":[{"type":"object","name":"Grid","id":"p361150","attributes":{"axis":{"id":"p361146"}}},{"type":"object","name":"Grid","id":"p361155","attributes":{"dimension":1,"axis":{"id":"p361151"}}},{"type":"object","name":"Legend","id":"p361186","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p361187","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p361183"}]}},{"type":"object","name":"LegendItem","id":"p361197","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p361194"}]}},{"type":"object","name":"LegendItem","id":"p361207","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p361204"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p361209","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p361219","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p361211"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p361220"},"y_scale":{"type":"object","name":"LinearScale","id":"p361221"},"title":{"type":"object","name":"Title","id":"p361212","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p361250","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361244","attributes":{"selected":{"type":"object","name":"Selection","id":"p361245","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361246"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif71///+sn3z7WE0TF6kLGm6wswp9qWGxyqmfJ5sj64PnQ8AdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361251","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361252"}}},"glyph":{"type":"object","name":"Line","id":"p361247","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361248","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p361249","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p361259","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361253","attributes":{"selected":{"type":"object","name":"Selection","id":"p361254","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361255"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif71///+sn3z7WE0TF6kLGm6wswp9qWGxyqmfJ5sj64PnQ8AdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361260","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361261"}}},"glyph":{"type":"object","name":"Line","id":"p361256","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361257","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p361258","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p361270","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361264","attributes":{"selected":{"type":"object","name":"Selection","id":"p361265","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361266"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif71///+sn3z7WE0TF6kLGm6wswp9qWGxyqmfJ5sj64PnQ8AdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361271","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361272"}}},"glyph":{"type":"object","name":"Line","id":"p361267","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361268","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p361269","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p361280","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361274","attributes":{"selected":{"type":"object","name":"Selection","id":"p361275","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361276"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p361281","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361282"}}},"glyph":{"type":"object","name":"Line","id":"p361277","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361278","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p361279","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p361218","attributes":{"tools":[{"id":"p361232"},{"id":"p361233"},{"id":"p361234"},{"id":"p361242"},{"type":"object","name":"SaveTool","id":"p361243"},{"id":"p361284"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p361227","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p361228","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p361229"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p361230"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p361222","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p361223"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p361224"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p361225"}}}],"center":[{"type":"object","name":"Grid","id":"p361226","attributes":{"axis":{"id":"p361222"}}},{"type":"object","name":"Grid","id":"p361231","attributes":{"dimension":1,"axis":{"id":"p361227"}}},{"type":"object","name":"Legend","id":"p361262","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p361263","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p361259"}]}},{"type":"object","name":"LegendItem","id":"p361273","attributes":{"label":{"type":"value","value":"Median Year (1965)"},"renderers":[{"id":"p361270"}]}},{"type":"object","name":"LegendItem","id":"p361283","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p361280"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p361295","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"d183959f-0b6d-431f-bfb2-c7a1ba786270","roots":{"p361296":"d9128cee-2d81-41d5-a3d3-0a1b51b5f3fd"},"root_ids":["p361296"]}];
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