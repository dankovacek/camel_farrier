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
    
    
    const element = document.getElementById("b328b740-df96-48ba-b900-891d35ad384f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b328b740-df96-48ba-b900-891d35ad384f' but no matching script tag was found.")
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
                  const docs_json = '{"7f6e9472-1251-4937-8945-b522fe15e754":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p507364","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p507365"}}},"roots":[{"type":"object","name":"Column","id":"p507528","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p507525","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p507524","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p507517","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p507388"},{"type":"object","name":"PanTool","id":"p507464"}]}},{"type":"object","name":"ToolProxy","id":"p507518","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p507389","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p507465","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p507519","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p507390","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p507391","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p507397","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p507396","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p507466","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p507467","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p507473","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p507472","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p507520","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p507398"},{"type":"object","name":"ResetTool","id":"p507474"}]}},{"type":"object","name":"SaveTool","id":"p507521"},{"type":"object","name":"ToolProxy","id":"p507522","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p507440","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p507523","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p507516","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p507366","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p507367"},"y_range":{"type":"object","name":"DataRange1d","id":"p507368"},"x_scale":{"type":"object","name":"LinearScale","id":"p507376"},"y_scale":{"type":"object","name":"LogScale","id":"p507377"},"title":{"type":"object","name":"Title","id":"p507369","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p507406","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507400","attributes":{"selected":{"type":"object","name":"Selection","id":"p507401","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507402"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvfAoPRoOo+kAZz4AAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507407","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507408"}}},"glyph":{"type":"object","name":"Line","id":"p507403","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507404","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507405","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p507415","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507409","attributes":{"selected":{"type":"object","name":"Selection","id":"p507410","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507411"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvfAoPRoOo+kAZz4AAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507416","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507417"}}},"glyph":{"type":"object","name":"Line","id":"p507412","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507413","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p507414","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p507426","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507420","attributes":{"selected":{"type":"object","name":"Selection","id":"p507421","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507422"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9Pf9WJRt56Sgz6YNnJwFY8tuehqDeU7OYCFd7lBxb0dLoIV+EPlgxxKwQIhUHVhDgxgEOkAAH+Qhq1YAAAA"},"shape":[11],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvTCVaQAda0CyWAAAAA=="},"shape":[11],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507427","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507428"}}},"glyph":{"type":"object","name":"Line","id":"p507423","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507424","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p507425","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p507436","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507430","attributes":{"selected":{"type":"object","name":"Selection","id":"p507431","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507432"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p507437","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507438"}}},"glyph":{"type":"object","name":"Line","id":"p507433","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507434","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507435","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p507375","attributes":{"tools":[{"id":"p507388"},{"id":"p507389"},{"id":"p507390"},{"id":"p507398"},{"type":"object","name":"SaveTool","id":"p507399"},{"id":"p507440"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p507383","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p507384","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p507385"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507386"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p507378","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p507379","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p507380"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507381"}}}],"center":[{"type":"object","name":"Grid","id":"p507382","attributes":{"axis":{"id":"p507378"}}},{"type":"object","name":"Grid","id":"p507387","attributes":{"dimension":1,"axis":{"id":"p507383"}}},{"type":"object","name":"Legend","id":"p507418","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p507419","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p507415"}]}},{"type":"object","name":"LegendItem","id":"p507429","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p507426"}]}},{"type":"object","name":"LegendItem","id":"p507439","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p507436"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p507441","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p507451","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p507443"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p507452"},"y_scale":{"type":"object","name":"LinearScale","id":"p507453"},"title":{"type":"object","name":"Title","id":"p507444","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p507482","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507476","attributes":{"selected":{"type":"object","name":"Selection","id":"p507477","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507478"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy38//9936QAexiNrg6XOEwdALx4wxpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507483","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507484"}}},"glyph":{"type":"object","name":"Line","id":"p507479","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507481","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p507491","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507485","attributes":{"selected":{"type":"object","name":"Selection","id":"p507486","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507487"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy38//9936QAexiNrg6XOEwdALx4wxpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507492","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507493"}}},"glyph":{"type":"object","name":"Line","id":"p507488","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p507490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p507502","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507496","attributes":{"selected":{"type":"object","name":"Selection","id":"p507497","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507498"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy38//9936QAexiNrg6XOEwdALx4wxpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507503","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507504"}}},"glyph":{"type":"object","name":"Line","id":"p507499","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507500","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p507501","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p507512","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507506","attributes":{"selected":{"type":"object","name":"Selection","id":"p507507","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507508"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p507513","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507514"}}},"glyph":{"type":"object","name":"Line","id":"p507509","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507510","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507511","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p507450","attributes":{"tools":[{"id":"p507464"},{"id":"p507465"},{"id":"p507466"},{"id":"p507474"},{"type":"object","name":"SaveTool","id":"p507475"},{"id":"p507516"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p507459","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p507460","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p507461"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507462"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p507454","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p507455"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p507456"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p507457"}}}],"center":[{"type":"object","name":"Grid","id":"p507458","attributes":{"axis":{"id":"p507454"}}},{"type":"object","name":"Grid","id":"p507463","attributes":{"dimension":1,"axis":{"id":"p507459"}}},{"type":"object","name":"Legend","id":"p507494","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p507495","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p507491"}]}},{"type":"object","name":"LegendItem","id":"p507505","attributes":{"label":{"type":"value","value":"Median Year (1944)"},"renderers":[{"id":"p507502"}]}},{"type":"object","name":"LegendItem","id":"p507515","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p507512"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p507527","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"7f6e9472-1251-4937-8945-b522fe15e754","roots":{"p507528":"b328b740-df96-48ba-b900-891d35ad384f"},"root_ids":["p507528"]}];
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