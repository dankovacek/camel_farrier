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
    
    
    const element = document.getElementById("d38f5bf3-6690-4e73-ad52-eb99ee3a7b95");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd38f5bf3-6690-4e73-ad52-eb99ee3a7b95' but no matching script tag was found.")
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
                  const docs_json = '{"8d8e519a-f661-47c3-98e9-3f1d97cac461":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p704252","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p704253"}}},"roots":[{"type":"object","name":"Column","id":"p704416","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p704413","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p704412","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p704405","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p704276"},{"type":"object","name":"PanTool","id":"p704352"}]}},{"type":"object","name":"ToolProxy","id":"p704406","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p704277","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p704353","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p704407","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p704278","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p704279","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p704285","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p704284","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p704354","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p704355","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p704361","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p704360","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p704408","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p704286"},{"type":"object","name":"ResetTool","id":"p704362"}]}},{"type":"object","name":"SaveTool","id":"p704409"},{"type":"object","name":"ToolProxy","id":"p704410","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p704328","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p704411","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p704404","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p704254","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p704255"},"y_range":{"type":"object","name":"DataRange1d","id":"p704256"},"x_scale":{"type":"object","name":"LinearScale","id":"p704264"},"y_scale":{"type":"object","name":"LogScale","id":"p704265"},"title":{"type":"object","name":"Title","id":"p704257","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p704294","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p704288","attributes":{"selected":{"type":"object","name":"Selection","id":"p704289","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p704290"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvfAoPRoOo+kAZz4AAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p704295","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p704296"}}},"glyph":{"type":"object","name":"Line","id":"p704291","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p704292","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p704293","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p704303","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p704297","attributes":{"selected":{"type":"object","name":"Selection","id":"p704298","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p704299"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvfAoPRoOo+kAZz4AAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p704304","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p704305"}}},"glyph":{"type":"object","name":"Line","id":"p704300","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p704301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p704302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p704314","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p704308","attributes":{"selected":{"type":"object","name":"Selection","id":"p704309","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p704310"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9Pf9WJRt56Sgz6YNnJwFY8tuehqDeU7OYCFd7lBxb0dLoIV+EPlgxxKwQIhUHVhDgxgEOkAAH+Qhq1YAAAA"},"shape":[11],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvTCVaQAda0CyWAAAAA=="},"shape":[11],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p704315","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p704316"}}},"glyph":{"type":"object","name":"Line","id":"p704311","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p704312","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p704313","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p704324","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p704318","attributes":{"selected":{"type":"object","name":"Selection","id":"p704319","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p704320"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p704325","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p704326"}}},"glyph":{"type":"object","name":"Line","id":"p704321","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p704322","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p704323","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p704263","attributes":{"tools":[{"id":"p704276"},{"id":"p704277"},{"id":"p704278"},{"id":"p704286"},{"type":"object","name":"SaveTool","id":"p704287"},{"id":"p704328"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p704271","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p704272","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p704273"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p704274"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p704266","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p704267","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p704268"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p704269"}}}],"center":[{"type":"object","name":"Grid","id":"p704270","attributes":{"axis":{"id":"p704266"}}},{"type":"object","name":"Grid","id":"p704275","attributes":{"dimension":1,"axis":{"id":"p704271"}}},{"type":"object","name":"Legend","id":"p704306","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p704307","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p704303"}]}},{"type":"object","name":"LegendItem","id":"p704317","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p704314"}]}},{"type":"object","name":"LegendItem","id":"p704327","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p704324"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p704329","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p704339","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p704331"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p704340"},"y_scale":{"type":"object","name":"LinearScale","id":"p704341"},"title":{"type":"object","name":"Title","id":"p704332","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p704370","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p704364","attributes":{"selected":{"type":"object","name":"Selection","id":"p704365","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p704366"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy38//9936QAexiNrg6XOEwdALx4wxpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p704371","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p704372"}}},"glyph":{"type":"object","name":"Line","id":"p704367","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p704368","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p704369","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p704379","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p704373","attributes":{"selected":{"type":"object","name":"Selection","id":"p704374","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p704375"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy38//9936QAexiNrg6XOEwdALx4wxpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p704380","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p704381"}}},"glyph":{"type":"object","name":"Line","id":"p704376","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p704377","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p704378","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p704390","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p704384","attributes":{"selected":{"type":"object","name":"Selection","id":"p704385","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p704386"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy38//9936QAexiNrg6XOEwdALx4wxpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p704391","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p704392"}}},"glyph":{"type":"object","name":"Line","id":"p704387","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p704388","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p704389","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p704400","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p704394","attributes":{"selected":{"type":"object","name":"Selection","id":"p704395","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p704396"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p704401","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p704402"}}},"glyph":{"type":"object","name":"Line","id":"p704397","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p704398","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p704399","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p704338","attributes":{"tools":[{"id":"p704352"},{"id":"p704353"},{"id":"p704354"},{"id":"p704362"},{"type":"object","name":"SaveTool","id":"p704363"},{"id":"p704404"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p704347","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p704348","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p704349"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p704350"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p704342","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p704343"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p704344"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p704345"}}}],"center":[{"type":"object","name":"Grid","id":"p704346","attributes":{"axis":{"id":"p704342"}}},{"type":"object","name":"Grid","id":"p704351","attributes":{"dimension":1,"axis":{"id":"p704347"}}},{"type":"object","name":"Legend","id":"p704382","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p704383","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p704379"}]}},{"type":"object","name":"LegendItem","id":"p704393","attributes":{"label":{"type":"value","value":"Median Year (1944)"},"renderers":[{"id":"p704390"}]}},{"type":"object","name":"LegendItem","id":"p704403","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p704400"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p704415","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8d8e519a-f661-47c3-98e9-3f1d97cac461","roots":{"p704416":"d38f5bf3-6690-4e73-ad52-eb99ee3a7b95"},"root_ids":["p704416"]}];
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