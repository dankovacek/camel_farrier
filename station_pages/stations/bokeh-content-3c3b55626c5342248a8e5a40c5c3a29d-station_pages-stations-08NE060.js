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
    
    
    const element = document.getElementById("c354c85e-9646-4175-8570-4d41cf5ea8c5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c354c85e-9646-4175-8570-4d41cf5ea8c5' but no matching script tag was found.")
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
                  const docs_json = '{"7deccbe1-93bf-411e-870e-082890af420e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p507962","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p507963"}}},"roots":[{"type":"object","name":"Column","id":"p508126","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p508123","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p508122","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p508115","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p507986"},{"type":"object","name":"PanTool","id":"p508062"}]}},{"type":"object","name":"ToolProxy","id":"p508116","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p507987","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p508063","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p508117","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p507988","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p507989","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p507995","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p507994","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p508064","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p508065","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p508071","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p508070","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p508118","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p507996"},{"type":"object","name":"ResetTool","id":"p508072"}]}},{"type":"object","name":"SaveTool","id":"p508119"},{"type":"object","name":"ToolProxy","id":"p508120","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p508038","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p508121","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p508114","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p507964","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p507965"},"y_range":{"type":"object","name":"DataRange1d","id":"p507966"},"x_scale":{"type":"object","name":"LinearScale","id":"p507974"},"y_scale":{"type":"object","name":"LogScale","id":"p507975"},"title":{"type":"object","name":"Title","id":"p507967","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p508004","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507998","attributes":{"selected":{"type":"object","name":"Selection","id":"p507999","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p508000"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvfAoPRoOo+kAZz4AAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p508005","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p508006"}}},"glyph":{"type":"object","name":"Line","id":"p508001","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p508002","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p508003","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p508013","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p508007","attributes":{"selected":{"type":"object","name":"Selection","id":"p508008","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p508009"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvfAoPRoOo+kAZz4AAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p508014","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p508015"}}},"glyph":{"type":"object","name":"Line","id":"p508010","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p508011","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p508012","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p508024","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p508018","attributes":{"selected":{"type":"object","name":"Selection","id":"p508019","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p508020"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9Pf9WJRt56Sgz6YNnJwFY8tuehqDeU7OYCFd7lBxb0dLoIV+EPlgxxKwQIhUHVhDgxgEOkAAH+Qhq1YAAAA"},"shape":[11],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvTCVaQAda0CyWAAAAA=="},"shape":[11],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p508025","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p508026"}}},"glyph":{"type":"object","name":"Line","id":"p508021","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p508022","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p508023","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p508034","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p508028","attributes":{"selected":{"type":"object","name":"Selection","id":"p508029","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p508030"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p508035","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p508036"}}},"glyph":{"type":"object","name":"Line","id":"p508031","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p508032","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p508033","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p507973","attributes":{"tools":[{"id":"p507986"},{"id":"p507987"},{"id":"p507988"},{"id":"p507996"},{"type":"object","name":"SaveTool","id":"p507997"},{"id":"p508038"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p507981","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p507982","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p507983"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507984"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p507976","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p507977","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p507978"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507979"}}}],"center":[{"type":"object","name":"Grid","id":"p507980","attributes":{"axis":{"id":"p507976"}}},{"type":"object","name":"Grid","id":"p507985","attributes":{"dimension":1,"axis":{"id":"p507981"}}},{"type":"object","name":"Legend","id":"p508016","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p508017","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p508013"}]}},{"type":"object","name":"LegendItem","id":"p508027","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p508024"}]}},{"type":"object","name":"LegendItem","id":"p508037","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p508034"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p508039","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p508049","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p508041"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p508050"},"y_scale":{"type":"object","name":"LinearScale","id":"p508051"},"title":{"type":"object","name":"Title","id":"p508042","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p508080","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p508074","attributes":{"selected":{"type":"object","name":"Selection","id":"p508075","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p508076"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy38//9936QAexiNrg6XOEwdALx4wxpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p508081","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p508082"}}},"glyph":{"type":"object","name":"Line","id":"p508077","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p508078","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p508079","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p508089","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p508083","attributes":{"selected":{"type":"object","name":"Selection","id":"p508084","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p508085"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy38//9936QAexiNrg6XOEwdALx4wxpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p508090","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p508091"}}},"glyph":{"type":"object","name":"Line","id":"p508086","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p508087","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p508088","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p508100","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p508094","attributes":{"selected":{"type":"object","name":"Selection","id":"p508095","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p508096"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy38//9936QAexiNrg6XOEwdALx4wxpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p508101","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p508102"}}},"glyph":{"type":"object","name":"Line","id":"p508097","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p508098","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p508099","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p508110","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p508104","attributes":{"selected":{"type":"object","name":"Selection","id":"p508105","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p508106"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p508111","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p508112"}}},"glyph":{"type":"object","name":"Line","id":"p508107","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p508108","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p508109","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p508048","attributes":{"tools":[{"id":"p508062"},{"id":"p508063"},{"id":"p508064"},{"id":"p508072"},{"type":"object","name":"SaveTool","id":"p508073"},{"id":"p508114"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p508057","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p508058","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p508059"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p508060"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p508052","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p508053"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p508054"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p508055"}}}],"center":[{"type":"object","name":"Grid","id":"p508056","attributes":{"axis":{"id":"p508052"}}},{"type":"object","name":"Grid","id":"p508061","attributes":{"dimension":1,"axis":{"id":"p508057"}}},{"type":"object","name":"Legend","id":"p508092","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p508093","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p508089"}]}},{"type":"object","name":"LegendItem","id":"p508103","attributes":{"label":{"type":"value","value":"Median Year (1944)"},"renderers":[{"id":"p508100"}]}},{"type":"object","name":"LegendItem","id":"p508113","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p508110"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p508125","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"7deccbe1-93bf-411e-870e-082890af420e","roots":{"p508126":"c354c85e-9646-4175-8570-4d41cf5ea8c5"},"root_ids":["p508126"]}];
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