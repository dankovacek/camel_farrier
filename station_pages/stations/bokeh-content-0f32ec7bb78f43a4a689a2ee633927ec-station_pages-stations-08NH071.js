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
    
    
    const element = document.getElementById("c7a3ba55-d0f6-42d4-aefa-53134790de3c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c7a3ba55-d0f6-42d4-aefa-53134790de3c' but no matching script tag was found.")
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
                  const docs_json = '{"c00ec007-e7e6-4e8b-b19b-692882bc6993":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p770116","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p770117"}}},"roots":[{"type":"object","name":"Column","id":"p770280","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p770277","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p770276","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p770269","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p770140"},{"type":"object","name":"PanTool","id":"p770216"}]}},{"type":"object","name":"ToolProxy","id":"p770270","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p770141","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p770217","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p770271","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p770142","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p770143","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p770149","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p770148","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p770218","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p770219","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p770225","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p770224","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p770272","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p770150"},{"type":"object","name":"ResetTool","id":"p770226"}]}},{"type":"object","name":"SaveTool","id":"p770273"},{"type":"object","name":"ToolProxy","id":"p770274","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p770192","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p770275","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p770268","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p770118","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p770119"},"y_range":{"type":"object","name":"DataRange1d","id":"p770120"},"x_scale":{"type":"object","name":"LinearScale","id":"p770128"},"y_scale":{"type":"object","name":"LogScale","id":"p770129"},"title":{"type":"object","name":"Title","id":"p770121","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p770158","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p770152","attributes":{"selected":{"type":"object","name":"Selection","id":"p770153","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p770154"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+1+j9Cg9SuOkAemQC74oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p770159","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p770160"}}},"glyph":{"type":"object","name":"Line","id":"p770155","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p770156","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p770157","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p770167","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p770161","attributes":{"selected":{"type":"object","name":"Selection","id":"p770162","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p770163"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+1+j9Cg9SuOkAemQC74oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p770168","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p770169"}}},"glyph":{"type":"object","name":"Line","id":"p770164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p770165","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p770166","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p770178","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p770172","attributes":{"selected":{"type":"object","name":"Selection","id":"p770173","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p770174"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/1sft7fq66uv9uvBNKsDMzufjEWBgAOEL+oQvS3n5qZUaai4ggOQc3qarjJUXtWhlUtUK2SFBlSdtoNh0pEOQWU9qHoDh3d3dhY/P2cI1WfsAJJ16zGB6jd1mGWSeWmJpznUHAuHggcHGpnZraDmWTu49UgAjbSBmmvnADQUqMIear6Dw8+Pj4/3yztC7XF0eALk2dc5Qe1zdjg/17r83R1nqL0uDruAquZau0Ltd3VY4jlZzXeWG9Qd7g4g3X9+uEPd4+FQ/fXV1dXhnlB3eTmkAU2N3uYFdZ+3Q+BCJ6BSH6g7fRxsykEu8YW6189B3Rdksh/U3f4OnSBnSARA3R/gALQM6IMAqD8CHUpAzisPhPon0AHkqslqQVB/BTnEg5x9NQjqv2CHkBUBQBcEQ/0Z7OAF8o5JCNS/IQ72YAtCoP4OdTAFGxgK9X+ogxbYgDBoOIQ5KIA1hEHDI9xBFKwgHBou4Q7cYIEIaPhEODCAQaQDANzYKpZIAgAA"},"shape":[73],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+1+j9ChNAQ0AK0xpVUgCAAA="},"shape":[73],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p770179","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p770180"}}},"glyph":{"type":"object","name":"Line","id":"p770175","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p770176","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p770177","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p770188","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p770182","attributes":{"selected":{"type":"object","name":"Selection","id":"p770183","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p770184"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p770189","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p770190"}}},"glyph":{"type":"object","name":"Line","id":"p770185","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p770186","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p770187","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p770127","attributes":{"tools":[{"id":"p770140"},{"id":"p770141"},{"id":"p770142"},{"id":"p770150"},{"type":"object","name":"SaveTool","id":"p770151"},{"id":"p770192"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p770135","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p770136","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p770137"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p770138"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p770130","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p770131","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p770132"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p770133"}}}],"center":[{"type":"object","name":"Grid","id":"p770134","attributes":{"axis":{"id":"p770130"}}},{"type":"object","name":"Grid","id":"p770139","attributes":{"dimension":1,"axis":{"id":"p770135"}}},{"type":"object","name":"Legend","id":"p770170","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p770171","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p770167"}]}},{"type":"object","name":"LegendItem","id":"p770181","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p770178"}]}},{"type":"object","name":"LegendItem","id":"p770191","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p770188"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p770193","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p770203","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p770195"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p770204"},"y_scale":{"type":"object","name":"LinearScale","id":"p770205"},"title":{"type":"object","name":"Title","id":"p770196","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p770234","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p770228","attributes":{"selected":{"type":"object","name":"Selection","id":"p770229","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p770230"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0r/+/7/vm5Rgj07jUg8ASPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p770235","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p770236"}}},"glyph":{"type":"object","name":"Line","id":"p770231","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p770232","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p770233","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p770243","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p770237","attributes":{"selected":{"type":"object","name":"Selection","id":"p770238","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p770239"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0r/+/7/vm5Rgj07jUg8ASPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p770244","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p770245"}}},"glyph":{"type":"object","name":"Line","id":"p770240","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p770241","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p770242","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p770254","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p770248","attributes":{"selected":{"type":"object","name":"Selection","id":"p770249","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p770250"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0r/+/7/vm5Rgj07jUg8ASPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p770255","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p770256"}}},"glyph":{"type":"object","name":"Line","id":"p770251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p770252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p770253","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p770264","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p770258","attributes":{"selected":{"type":"object","name":"Selection","id":"p770259","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p770260"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p770265","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p770266"}}},"glyph":{"type":"object","name":"Line","id":"p770261","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p770262","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p770263","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p770202","attributes":{"tools":[{"id":"p770216"},{"id":"p770217"},{"id":"p770218"},{"id":"p770226"},{"type":"object","name":"SaveTool","id":"p770227"},{"id":"p770268"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p770211","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p770212","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p770213"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p770214"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p770206","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p770207"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p770208"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p770209"}}}],"center":[{"type":"object","name":"Grid","id":"p770210","attributes":{"axis":{"id":"p770206"}}},{"type":"object","name":"Grid","id":"p770215","attributes":{"dimension":1,"axis":{"id":"p770211"}}},{"type":"object","name":"Legend","id":"p770246","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p770247","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p770243"}]}},{"type":"object","name":"LegendItem","id":"p770257","attributes":{"label":{"type":"value","value":"Median Year (1939)"},"renderers":[{"id":"p770254"}]}},{"type":"object","name":"LegendItem","id":"p770267","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p770264"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p770279","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c00ec007-e7e6-4e8b-b19b-692882bc6993","roots":{"p770280":"c7a3ba55-d0f6-42d4-aefa-53134790de3c"},"root_ids":["p770280"]}];
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