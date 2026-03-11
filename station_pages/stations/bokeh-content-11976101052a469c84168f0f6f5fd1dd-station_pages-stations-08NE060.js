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
    
    
    const element = document.getElementById("e03e57ae-7f26-4f95-b0fc-04024d49f39c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e03e57ae-7f26-4f95-b0fc-04024d49f39c' but no matching script tag was found.")
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
                  const docs_json = '{"95b5532b-a1b7-430e-af6e-ed9fd31afb25":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p677535","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p677536"}}},"roots":[{"type":"object","name":"Column","id":"p677699","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p677696","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p677695","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p677688","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p677559"},{"type":"object","name":"PanTool","id":"p677635"}]}},{"type":"object","name":"ToolProxy","id":"p677689","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p677560","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p677636","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p677690","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p677561","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p677562","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p677568","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p677567","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p677637","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p677638","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p677644","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p677643","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p677691","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p677569"},{"type":"object","name":"ResetTool","id":"p677645"}]}},{"type":"object","name":"SaveTool","id":"p677692"},{"type":"object","name":"ToolProxy","id":"p677693","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p677611","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p677694","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p677687","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p677537","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p677538"},"y_range":{"type":"object","name":"DataRange1d","id":"p677539"},"x_scale":{"type":"object","name":"LinearScale","id":"p677547"},"y_scale":{"type":"object","name":"LogScale","id":"p677548"},"title":{"type":"object","name":"Title","id":"p677540","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p677577","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677571","attributes":{"selected":{"type":"object","name":"Selection","id":"p677572","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677573"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xP+//++b1KAvfAoPUqP0jhpAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677578","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677579"}}},"glyph":{"type":"object","name":"Line","id":"p677574","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677575","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p677576","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p677586","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677580","attributes":{"selected":{"type":"object","name":"Selection","id":"p677581","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677582"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xP+//++b1KAvfAoPUqP0jhpAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677587","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677588"}}},"glyph":{"type":"object","name":"Line","id":"p677583","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677584","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p677585","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p677597","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677591","attributes":{"selected":{"type":"object","name":"Selection","id":"p677592","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677593"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/9Pf9WJRt56Sgz6YNnJwFY8tuehqDeU7OYCpXW5QcW+Hi2CGP1Q+yKEULBACVRfmwAAGkQ4Af5CGrVgAAAA="},"shape":[11],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xP+//++b1KAvTCVaQAda0CyWAAAAA=="},"shape":[11],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677598","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677599"}}},"glyph":{"type":"object","name":"Line","id":"p677594","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677595","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p677596","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p677607","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677601","attributes":{"selected":{"type":"object","name":"Selection","id":"p677602","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677603"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p677608","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677609"}}},"glyph":{"type":"object","name":"Line","id":"p677604","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677605","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p677606","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p677546","attributes":{"tools":[{"id":"p677559"},{"id":"p677560"},{"id":"p677561"},{"id":"p677569"},{"type":"object","name":"SaveTool","id":"p677570"},{"id":"p677611"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p677554","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p677555","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p677556"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p677557"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p677549","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p677550","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p677551"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p677552"}}}],"center":[{"type":"object","name":"Grid","id":"p677553","attributes":{"axis":{"id":"p677549"}}},{"type":"object","name":"Grid","id":"p677558","attributes":{"dimension":1,"axis":{"id":"p677554"}}},{"type":"object","name":"Legend","id":"p677589","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p677590","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p677586"}]}},{"type":"object","name":"LegendItem","id":"p677600","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p677597"}]}},{"type":"object","name":"LegendItem","id":"p677610","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p677607"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p677612","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p677622","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p677614"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p677623"},"y_scale":{"type":"object","name":"LinearScale","id":"p677624"},"title":{"type":"object","name":"Title","id":"p677615","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p677653","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677647","attributes":{"selected":{"type":"object","name":"Selection","id":"p677648","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677649"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOH//+/7JgXYw2hc8rj0AwC8eMMaYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677654","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677655"}}},"glyph":{"type":"object","name":"Line","id":"p677650","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677651","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p677652","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p677662","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677656","attributes":{"selected":{"type":"object","name":"Selection","id":"p677657","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677658"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOH//+/7JgXYw2hc8rj0AwC8eMMaYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677663","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677664"}}},"glyph":{"type":"object","name":"Line","id":"p677659","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677660","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p677661","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p677673","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677667","attributes":{"selected":{"type":"object","name":"Selection","id":"p677668","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677669"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOH//+/7JgXYw2hc8rj0AwC8eMMaYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p677674","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677675"}}},"glyph":{"type":"object","name":"Line","id":"p677670","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677671","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p677672","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p677683","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p677677","attributes":{"selected":{"type":"object","name":"Selection","id":"p677678","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p677679"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p677684","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p677685"}}},"glyph":{"type":"object","name":"Line","id":"p677680","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p677681","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p677682","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p677621","attributes":{"tools":[{"id":"p677635"},{"id":"p677636"},{"id":"p677637"},{"id":"p677645"},{"type":"object","name":"SaveTool","id":"p677646"},{"id":"p677687"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p677630","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p677631","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p677632"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p677633"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p677625","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p677626"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p677627"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p677628"}}}],"center":[{"type":"object","name":"Grid","id":"p677629","attributes":{"axis":{"id":"p677625"}}},{"type":"object","name":"Grid","id":"p677634","attributes":{"dimension":1,"axis":{"id":"p677630"}}},{"type":"object","name":"Legend","id":"p677665","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p677666","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p677662"}]}},{"type":"object","name":"LegendItem","id":"p677676","attributes":{"label":{"type":"value","value":"Median Year (1944)"},"renderers":[{"id":"p677673"}]}},{"type":"object","name":"LegendItem","id":"p677686","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p677683"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p677698","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"95b5532b-a1b7-430e-af6e-ed9fd31afb25","roots":{"p677699":"e03e57ae-7f26-4f95-b0fc-04024d49f39c"},"root_ids":["p677699"]}];
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