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
    
    
    const element = document.getElementById("b3c4cd71-9d81-4779-bf5b-3edfc9cbccf1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b3c4cd71-9d81-4779-bf5b-3edfc9cbccf1' but no matching script tag was found.")
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
                  const docs_json = '{"970f7224-528f-4332-9f34-3c3d90e79485":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p677992","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p677993"}}},"roots":[{"type":"object","name":"Column","id":"p678156","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p678153","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p678152","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p678145","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p678016"},{"type":"object","name":"PanTool","id":"p678092"}]}},{"type":"object","name":"ToolProxy","id":"p678146","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p678017","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p678093","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p678147","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p678018","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p678019","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p678025","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p678024","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p678094","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p678095","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p678101","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p678100","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p678148","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p678026"},{"type":"object","name":"ResetTool","id":"p678102"}]}},{"type":"object","name":"SaveTool","id":"p678149"},{"type":"object","name":"ToolProxy","id":"p678150","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p678068","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p678151","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p678144","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p677994","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p677995"},"y_range":{"type":"object","name":"DataRange1d","id":"p677996"},"x_scale":{"type":"object","name":"LinearScale","id":"p678004"},"y_scale":{"type":"object","name":"LogScale","id":"p678005"},"title":{"type":"object","name":"Title","id":"p677997","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p678034","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p678028","attributes":{"selected":{"type":"object","name":"Selection","id":"p678029","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p678030"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xP+//++b1KAvfAoPUqP0jhpAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p678035","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p678036"}}},"glyph":{"type":"object","name":"Line","id":"p678031","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p678032","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p678033","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p678043","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p678037","attributes":{"selected":{"type":"object","name":"Selection","id":"p678038","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p678039"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xP+//++b1KAvfAoPUqP0jhpAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p678044","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p678045"}}},"glyph":{"type":"object","name":"Line","id":"p678040","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p678041","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p678042","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p678054","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p678048","attributes":{"selected":{"type":"object","name":"Selection","id":"p678049","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p678050"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/9Pf9WJRt56Sgz6YNnJwFY8tuehqDeU7OYCpXW5QcW+Hi2CGP1Q+yKEULBACVRfmwAAGkQ4Af5CGrVgAAAA="},"shape":[11],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xP+//++b1KAvTCVaQAda0CyWAAAAA=="},"shape":[11],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p678055","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p678056"}}},"glyph":{"type":"object","name":"Line","id":"p678051","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p678052","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p678053","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p678064","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p678058","attributes":{"selected":{"type":"object","name":"Selection","id":"p678059","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p678060"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p678065","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p678066"}}},"glyph":{"type":"object","name":"Line","id":"p678061","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p678062","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p678063","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p678003","attributes":{"tools":[{"id":"p678016"},{"id":"p678017"},{"id":"p678018"},{"id":"p678026"},{"type":"object","name":"SaveTool","id":"p678027"},{"id":"p678068"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p678011","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p678012","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p678013"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p678014"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p678006","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p678007","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p678008"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p678009"}}}],"center":[{"type":"object","name":"Grid","id":"p678010","attributes":{"axis":{"id":"p678006"}}},{"type":"object","name":"Grid","id":"p678015","attributes":{"dimension":1,"axis":{"id":"p678011"}}},{"type":"object","name":"Legend","id":"p678046","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p678047","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p678043"}]}},{"type":"object","name":"LegendItem","id":"p678057","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p678054"}]}},{"type":"object","name":"LegendItem","id":"p678067","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p678064"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p678069","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p678079","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p678071"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p678080"},"y_scale":{"type":"object","name":"LinearScale","id":"p678081"},"title":{"type":"object","name":"Title","id":"p678072","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p678110","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p678104","attributes":{"selected":{"type":"object","name":"Selection","id":"p678105","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p678106"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOH//+/7JgXYw2hc8rj0AwC8eMMaYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p678111","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p678112"}}},"glyph":{"type":"object","name":"Line","id":"p678107","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p678108","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p678109","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p678119","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p678113","attributes":{"selected":{"type":"object","name":"Selection","id":"p678114","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p678115"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOH//+/7JgXYw2hc8rj0AwC8eMMaYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p678120","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p678121"}}},"glyph":{"type":"object","name":"Line","id":"p678116","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p678117","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p678118","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p678130","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p678124","attributes":{"selected":{"type":"object","name":"Selection","id":"p678125","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p678126"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOH//+/7JgXYw2hc8rj0AwC8eMMaYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p678131","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p678132"}}},"glyph":{"type":"object","name":"Line","id":"p678127","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p678128","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p678129","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p678140","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p678134","attributes":{"selected":{"type":"object","name":"Selection","id":"p678135","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p678136"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p678141","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p678142"}}},"glyph":{"type":"object","name":"Line","id":"p678137","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p678138","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p678139","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p678078","attributes":{"tools":[{"id":"p678092"},{"id":"p678093"},{"id":"p678094"},{"id":"p678102"},{"type":"object","name":"SaveTool","id":"p678103"},{"id":"p678144"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p678087","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p678088","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p678089"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p678090"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p678082","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p678083"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p678084"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p678085"}}}],"center":[{"type":"object","name":"Grid","id":"p678086","attributes":{"axis":{"id":"p678082"}}},{"type":"object","name":"Grid","id":"p678091","attributes":{"dimension":1,"axis":{"id":"p678087"}}},{"type":"object","name":"Legend","id":"p678122","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p678123","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p678119"}]}},{"type":"object","name":"LegendItem","id":"p678133","attributes":{"label":{"type":"value","value":"Median Year (1944)"},"renderers":[{"id":"p678130"}]}},{"type":"object","name":"LegendItem","id":"p678143","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p678140"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p678155","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"970f7224-528f-4332-9f34-3c3d90e79485","roots":{"p678156":"b3c4cd71-9d81-4779-bf5b-3edfc9cbccf1"},"root_ids":["p678156"]}];
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