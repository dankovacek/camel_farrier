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
    
    
    const element = document.getElementById("d6cceb58-c5f4-42ff-8ca5-500c4f0a5682");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd6cceb58-c5f4-42ff-8ca5-500c4f0a5682' but no matching script tag was found.")
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
                  const docs_json = '{"1d7e7a76-0cff-4667-95e2-45276f64828f":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p490637","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p490638"}}},"roots":[{"type":"object","name":"Column","id":"p490801","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p490798","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p490797","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p490790","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p490661"},{"type":"object","name":"PanTool","id":"p490737"}]}},{"type":"object","name":"ToolProxy","id":"p490791","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p490662","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p490738","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p490792","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p490663","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p490664","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p490670","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p490669","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p490739","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p490740","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p490746","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p490745","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p490793","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p490671"},{"type":"object","name":"ResetTool","id":"p490747"}]}},{"type":"object","name":"SaveTool","id":"p490794"},{"type":"object","name":"ToolProxy","id":"p490795","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p490713","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p490796","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p490789","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p490639","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p490640"},"y_range":{"type":"object","name":"DataRange1d","id":"p490641"},"x_scale":{"type":"object","name":"LinearScale","id":"p490649"},"y_scale":{"type":"object","name":"LogScale","id":"p490650"},"title":{"type":"object","name":"Title","id":"p490642","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p490679","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490673","attributes":{"selected":{"type":"object","name":"Selection","id":"p490674","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490675"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3z7X/hoH/+/z/fumOu/Y///93tXsy0n1xgy1VTN8P+xf//9/17pw84fWBxwdxq/un2b/7/f15jP9X+3f//9g+rpozSdKJTRda1pzBOtn8KTC9FGROHLQ0APxRDkCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490680","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490681"}}},"glyph":{"type":"object","name":"Line","id":"p490676","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490677","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490678","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p490688","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490682","attributes":{"selected":{"type":"object","name":"Selection","id":"p490683","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490684"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3z7X/hoH/+/z/fumOu/Y///93tXsy0n1xgy1VTN8P+xf//9/17pw84fWBxwdxq/un2b/7/f15jP9X+3f//9g+rpozSdKJTRda1pzBOtn8KTC9FGROHLQ0APxRDkCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490689","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490690"}}},"glyph":{"type":"object","name":"Line","id":"p490685","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490686","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p490687","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p490699","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490693","attributes":{"selected":{"type":"object","name":"Selection","id":"p490694","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490695"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2PhVS+Nl/ttzwKmuR2OeN6dfjxMxAHCl3ZQyrBY+fuTAlRcxSFFu6lt8i51qLy2w9J3p5O1m/Sg6gwcPt/oWvBwiRFUvYnD5F36/Ws5zKD6zB1M5lyprcyxhOq3drgK5LlesIGaY+cAVi7lADXPwaEbaNq7045Qc50cogVBJjhDzXdxABur7wq1x83hzyeQQjeofe4OZ5JBDA+ovZ4Oc0GUqxfUfm8HoOUFQd+9oe7wcbDZBrLZF+oePwewsmh/qLsCHN6DhNsCoO4LcAgHGxQIdWegw36wAUFQ9wY5gLULBkPdHewAMsXvVTDU/SEO359uFHU8HAL1R6hDghxIZSjUP2EOJ8JAFoRB/RXmAHaGXzjUf+EOM46DFERA/RnhwAAGkQ4AIr+7kNgBAAA="},"shape":[59],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1///+sn3z7X9B6e///8+fOXOm/Yv//+/7906nOv3u/3/7h1VThi39FBiORRkTB5wGABD8uLvYAQAA"},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490700","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490701"}}},"glyph":{"type":"object","name":"Line","id":"p490696","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490697","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p490698","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p490709","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490703","attributes":{"selected":{"type":"object","name":"Selection","id":"p490704","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490705"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p490710","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490711"}}},"glyph":{"type":"object","name":"Line","id":"p490706","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490707","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490708","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p490648","attributes":{"tools":[{"id":"p490661"},{"id":"p490662"},{"id":"p490663"},{"id":"p490671"},{"type":"object","name":"SaveTool","id":"p490672"},{"id":"p490713"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p490656","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p490657","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p490658"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p490659"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p490651","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p490652","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p490653"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p490654"}}}],"center":[{"type":"object","name":"Grid","id":"p490655","attributes":{"axis":{"id":"p490651"}}},{"type":"object","name":"Grid","id":"p490660","attributes":{"dimension":1,"axis":{"id":"p490656"}}},{"type":"object","name":"Legend","id":"p490691","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p490692","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p490688"}]}},{"type":"object","name":"LegendItem","id":"p490702","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p490699"}]}},{"type":"object","name":"LegendItem","id":"p490712","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p490709"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p490714","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p490724","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p490716"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p490725"},"y_scale":{"type":"object","name":"LinearScale","id":"p490726"},"title":{"type":"object","name":"Title","id":"p490717","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p490755","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490749","attributes":{"selected":{"type":"object","name":"Selection","id":"p490750","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490751"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9K////eX7ZtvD6Nh4iJlSdMVZk6xLzU8VjHl82R7Bhz6YTQAdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490756","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490757"}}},"glyph":{"type":"object","name":"Line","id":"p490752","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490753","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490754","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p490764","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490758","attributes":{"selected":{"type":"object","name":"Selection","id":"p490759","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490760"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9K////eX7ZtvD6Nh4iJlSdMVZk6xLzU8VjHl82R7Bhz6YTQAdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490765","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490766"}}},"glyph":{"type":"object","name":"Line","id":"p490761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490762","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p490763","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p490775","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490769","attributes":{"selected":{"type":"object","name":"Selection","id":"p490770","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490771"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9K////eX7ZtvD6Nh4iJlSdMVZk6xLzU8VjHl82R7Bhz6YTQAdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490776","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490777"}}},"glyph":{"type":"object","name":"Line","id":"p490772","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490773","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p490774","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p490785","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490779","attributes":{"selected":{"type":"object","name":"Selection","id":"p490780","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490781"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p490786","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490787"}}},"glyph":{"type":"object","name":"Line","id":"p490782","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490783","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490784","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p490723","attributes":{"tools":[{"id":"p490737"},{"id":"p490738"},{"id":"p490739"},{"id":"p490747"},{"type":"object","name":"SaveTool","id":"p490748"},{"id":"p490789"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p490732","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p490733","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p490734"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p490735"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p490727","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p490728"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p490729"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p490730"}}}],"center":[{"type":"object","name":"Grid","id":"p490731","attributes":{"axis":{"id":"p490727"}}},{"type":"object","name":"Grid","id":"p490736","attributes":{"dimension":1,"axis":{"id":"p490732"}}},{"type":"object","name":"Legend","id":"p490767","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p490768","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p490764"}]}},{"type":"object","name":"LegendItem","id":"p490778","attributes":{"label":{"type":"value","value":"Median Year (1965)"},"renderers":[{"id":"p490775"}]}},{"type":"object","name":"LegendItem","id":"p490788","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p490785"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p490800","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"1d7e7a76-0cff-4667-95e2-45276f64828f","roots":{"p490801":"d6cceb58-c5f4-42ff-8ca5-500c4f0a5682"},"root_ids":["p490801"]}];
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