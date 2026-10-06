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
    
    
    const element = document.getElementById("b51a9e07-abe0-4aea-8dbe-16f451f1510e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b51a9e07-abe0-4aea-8dbe-16f451f1510e' but no matching script tag was found.")
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
                  const docs_json = '{"47a45267-a691-434a-a71b-7d4464683745":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p558020","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p558021"}}},"roots":[{"type":"object","name":"Column","id":"p558184","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p558181","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p558180","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p558173","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p558044"},{"type":"object","name":"PanTool","id":"p558120"}]}},{"type":"object","name":"ToolProxy","id":"p558174","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p558045","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p558121","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p558175","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p558046","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p558047","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p558053","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p558052","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p558122","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p558123","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p558129","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p558128","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p558176","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p558054"},{"type":"object","name":"ResetTool","id":"p558130"}]}},{"type":"object","name":"SaveTool","id":"p558177"},{"type":"object","name":"ToolProxy","id":"p558178","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p558096","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p558179","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p558172","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p558022","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p558023"},"y_range":{"type":"object","name":"DataRange1d","id":"p558024"},"x_scale":{"type":"object","name":"LinearScale","id":"p558032"},"y_scale":{"type":"object","name":"LogScale","id":"p558033"},"title":{"type":"object","name":"Title","id":"p558025","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p558062","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p558056","attributes":{"selected":{"type":"object","name":"Selection","id":"p558057","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p558058"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1///+sn3z7X/hoH/+/z/fumOu/Y///93tXsy0n1xgy1VTN8P+xf//9/17pw84fWBxwdxq/un2b/7/f15jP9X+3f//9g+rpozSdAqHVJF17SmMk+2fAtNPUcbEYUsDAD8UQ5AoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p558063","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p558064"}}},"glyph":{"type":"object","name":"Line","id":"p558059","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p558060","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p558061","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p558071","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p558065","attributes":{"selected":{"type":"object","name":"Selection","id":"p558066","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p558067"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1///+sn3z7X/hoH/+/z/fumOu/Y///93tXsy0n1xgy1VTN8P+xf//9/17pw84fWBxwdxq/un2b/7/f15jP9X+3f//9g+rpozSdAqHVJF17SmMk+2fAtNPUcbEYUsDAD8UQ5AoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p558072","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p558073"}}},"glyph":{"type":"object","name":"Line","id":"p558068","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p558069","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p558070","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p558082","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p558076","attributes":{"selected":{"type":"object","name":"Selection","id":"p558077","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p558078"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2PhVS+Nl/ttzwKmuR2OeN6dfjxMxAHCl3ZQyrBY+fuTAlRcxSFFu6lt8i51qLy2w9J3p5O1m/Sg6gwcPt/oWvBwiRFUvYnD5F36/Ws5zKD6zB1M5lyprcyxhOq3drgK5LlesIGaY+cAVi7lADXPwaEbaNq7045Qc50cogVBJjhDzXdxADtH3xVqj5vDn08gB7hB7XN3OAN0XdtkD6i9ng5zQda7ekHt93YAWl4Q9N0b6g4fB5ttIB/7Qt3j5wAOlmh/qLsCHN6DvNsWAHVfgEM4OKACoe4MdNgPNiAI6t4gB7B2wWCou4MdQL7zexUMdX+Iw/enG0UdD4dA/RHqkABUbTInFOqfMIcTYSALwqD+CnMAB49fONR/4Q4zjoMURED9GeHAAAaRDgAiv7uQ2AEAAA=="},"shape":[59],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1///+sn3z7X9B6e///8+fOXOm/Yv//+/7906nOv3u/3/7h1VT7Icr/RQYjkUZE+0HmgYAEPy4u9gBAAA="},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p558083","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p558084"}}},"glyph":{"type":"object","name":"Line","id":"p558079","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p558080","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p558081","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p558092","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p558086","attributes":{"selected":{"type":"object","name":"Selection","id":"p558087","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p558088"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p558093","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p558094"}}},"glyph":{"type":"object","name":"Line","id":"p558089","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p558090","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p558091","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p558031","attributes":{"tools":[{"id":"p558044"},{"id":"p558045"},{"id":"p558046"},{"id":"p558054"},{"type":"object","name":"SaveTool","id":"p558055"},{"id":"p558096"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p558039","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p558040","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p558041"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p558042"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p558034","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p558035","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p558036"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p558037"}}}],"center":[{"type":"object","name":"Grid","id":"p558038","attributes":{"axis":{"id":"p558034"}}},{"type":"object","name":"Grid","id":"p558043","attributes":{"dimension":1,"axis":{"id":"p558039"}}},{"type":"object","name":"Legend","id":"p558074","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p558075","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p558071"}]}},{"type":"object","name":"LegendItem","id":"p558085","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p558082"}]}},{"type":"object","name":"LegendItem","id":"p558095","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p558092"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p558097","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p558107","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p558099"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p558108"},"y_scale":{"type":"object","name":"LinearScale","id":"p558109"},"title":{"type":"object","name":"Title","id":"p558100","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p558138","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p558132","attributes":{"selected":{"type":"object","name":"Selection","id":"p558133","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p558134"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif71///+sn3z7WE0TF6kLGm6wswp9qWGxyqmfJ5sj64PnQ8AdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p558139","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p558140"}}},"glyph":{"type":"object","name":"Line","id":"p558135","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p558136","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p558137","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p558147","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p558141","attributes":{"selected":{"type":"object","name":"Selection","id":"p558142","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p558143"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif71///+sn3z7WE0TF6kLGm6wswp9qWGxyqmfJ5sj64PnQ8AdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p558148","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p558149"}}},"glyph":{"type":"object","name":"Line","id":"p558144","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p558145","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p558146","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p558158","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p558152","attributes":{"selected":{"type":"object","name":"Selection","id":"p558153","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p558154"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif71///+sn3z7WE0TF6kLGm6wswp9qWGxyqmfJ5sj64PnQ8AdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p558159","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p558160"}}},"glyph":{"type":"object","name":"Line","id":"p558155","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p558156","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p558157","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p558168","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p558162","attributes":{"selected":{"type":"object","name":"Selection","id":"p558163","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p558164"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p558169","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p558170"}}},"glyph":{"type":"object","name":"Line","id":"p558165","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p558166","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p558167","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p558106","attributes":{"tools":[{"id":"p558120"},{"id":"p558121"},{"id":"p558122"},{"id":"p558130"},{"type":"object","name":"SaveTool","id":"p558131"},{"id":"p558172"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p558115","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p558116","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p558117"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p558118"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p558110","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p558111"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p558112"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p558113"}}}],"center":[{"type":"object","name":"Grid","id":"p558114","attributes":{"axis":{"id":"p558110"}}},{"type":"object","name":"Grid","id":"p558119","attributes":{"dimension":1,"axis":{"id":"p558115"}}},{"type":"object","name":"Legend","id":"p558150","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p558151","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p558147"}]}},{"type":"object","name":"LegendItem","id":"p558161","attributes":{"label":{"type":"value","value":"Median Year (1965)"},"renderers":[{"id":"p558158"}]}},{"type":"object","name":"LegendItem","id":"p558171","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p558168"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p558183","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"47a45267-a691-434a-a71b-7d4464683745","roots":{"p558184":"b51a9e07-abe0-4aea-8dbe-16f451f1510e"},"root_ids":["p558184"]}];
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