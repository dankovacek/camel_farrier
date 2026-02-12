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
    
    
    const element = document.getElementById("dd3eee1e-48d4-438a-aa91-91b86cbd445d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dd3eee1e-48d4-438a-aa91-91b86cbd445d' but no matching script tag was found.")
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
                  const docs_json = '{"8acc1870-5221-4a7a-958d-f7c3eb577e6c":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p721697","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p721698"}}},"roots":[{"type":"object","name":"Column","id":"p721861","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p721858","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p721857","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p721850","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p721721"},{"type":"object","name":"PanTool","id":"p721797"}]}},{"type":"object","name":"ToolProxy","id":"p721851","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p721722","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p721798","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p721852","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p721723","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p721724","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p721730","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p721729","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p721799","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p721800","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p721806","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p721805","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p721853","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p721731"},{"type":"object","name":"ResetTool","id":"p721807"}]}},{"type":"object","name":"SaveTool","id":"p721854"},{"type":"object","name":"ToolProxy","id":"p721855","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p721773","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p721856","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p721849","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p721699","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p721700"},"y_range":{"type":"object","name":"DataRange1d","id":"p721701"},"x_scale":{"type":"object","name":"LinearScale","id":"p721709"},"y_scale":{"type":"object","name":"LogScale","id":"p721710"},"title":{"type":"object","name":"Title","id":"p721702","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p721739","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721733","attributes":{"selected":{"type":"object","name":"Selection","id":"p721734","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721735"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+18jjDZJSzNbdDHW/sXpMz3CXIH2wmDxgFF6lMZKAwBw+/myKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721740","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721741"}}},"glyph":{"type":"object","name":"Line","id":"p721736","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721737","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p721738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p721748","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721742","attributes":{"selected":{"type":"object","name":"Selection","id":"p721743","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721744"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+18jjDZJSzNbdDHW/sXpMz3CXIH2wmDxgFF6lMZKAwBw+/myKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721749","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721750"}}},"glyph":{"type":"object","name":"Line","id":"p721745","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721746","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p721747","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p721759","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721753","attributes":{"selected":{"type":"object","name":"Selection","id":"p721754","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721755"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y1QPUhCYRRtiKKhllwKioJAgpSkF/3YzzE1n2bP5897vqhJaHCyKQjcbDEImmwqGpqChlpsCgKbbAqCNlsaAidrMRr6vu+dy4HHu9+9555zNL2i6ZWfdU19e5FqN4x2Ywjuvweh0WuBEfbH4W91fK3OJN+nELwbFvBybhqqrc1w3o8bVbPcC+BejgfnuK/hodysl5vz5FnA4+euwCL5lvBsSKJl8q7gpS4XVsm/huJZnwB4B1BtI8R7IRx0a6VubYN3w/j2yYcw70dwWPAKRKkjil85XtqknhhUux6jLh09quLUF8exIkpQZwL9StAW9SZRvXgXSFL3NgZfJwQM6jeg5BdT9GHiRM47Jv2Y7t6fSV9pd/8qTX9pqLORDH1mXL6vDP1moc6dZuk7C49sB3L0n4NtiXrLMQcL59L+kcU8LEj11TGbudhQtp9s5pPHngxmP8+c8riUCwMO83LwIWXeOsxtB//repCMcAIAAA=="},"shape":[78],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+19DlBYG0wGj9BChAXN6aQtwAgAA"},"shape":[78],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721760","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721761"}}},"glyph":{"type":"object","name":"Line","id":"p721756","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721757","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p721758","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p721769","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721763","attributes":{"selected":{"type":"object","name":"Selection","id":"p721764","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721765"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p721770","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721771"}}},"glyph":{"type":"object","name":"Line","id":"p721766","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721767","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p721768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p721708","attributes":{"tools":[{"id":"p721721"},{"id":"p721722"},{"id":"p721723"},{"id":"p721731"},{"type":"object","name":"SaveTool","id":"p721732"},{"id":"p721773"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p721716","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p721717","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p721718"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p721719"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p721711","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p721712","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p721713"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p721714"}}}],"center":[{"type":"object","name":"Grid","id":"p721715","attributes":{"axis":{"id":"p721711"}}},{"type":"object","name":"Grid","id":"p721720","attributes":{"dimension":1,"axis":{"id":"p721716"}}},{"type":"object","name":"Legend","id":"p721751","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p721752","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p721748"}]}},{"type":"object","name":"LegendItem","id":"p721762","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p721759"}]}},{"type":"object","name":"LegendItem","id":"p721772","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p721769"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p721774","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p721784","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p721776"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p721785"},"y_scale":{"type":"object","name":"LinearScale","id":"p721786"},"title":{"type":"object","name":"Title","id":"p721777","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p721815","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721809","attributes":{"selected":{"type":"object","name":"Selection","id":"p721810","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721811"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0uXWNnsq3YLthf//v++bFGC/8f9//cBb0fa41AMAah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721816","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721817"}}},"glyph":{"type":"object","name":"Line","id":"p721812","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721813","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p721814","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p721824","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721818","attributes":{"selected":{"type":"object","name":"Selection","id":"p721819","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721820"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0uXWNnsq3YLthf//v++bFGC/8f9//cBb0fa41AMAah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721825","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721826"}}},"glyph":{"type":"object","name":"Line","id":"p721821","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721822","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p721823","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p721835","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721829","attributes":{"selected":{"type":"object","name":"Selection","id":"p721830","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721831"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0uXWNnsq3YLthf//v++bFGC/8f9//cBb0fa41AMAah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721836","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721837"}}},"glyph":{"type":"object","name":"Line","id":"p721832","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721833","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p721834","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p721845","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721839","attributes":{"selected":{"type":"object","name":"Selection","id":"p721840","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721841"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p721846","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721847"}}},"glyph":{"type":"object","name":"Line","id":"p721842","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721843","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p721844","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p721783","attributes":{"tools":[{"id":"p721797"},{"id":"p721798"},{"id":"p721799"},{"id":"p721807"},{"type":"object","name":"SaveTool","id":"p721808"},{"id":"p721849"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p721792","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p721793","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p721794"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p721795"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p721787","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p721788"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p721789"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p721790"}}}],"center":[{"type":"object","name":"Grid","id":"p721791","attributes":{"axis":{"id":"p721787"}}},{"type":"object","name":"Grid","id":"p721796","attributes":{"dimension":1,"axis":{"id":"p721792"}}},{"type":"object","name":"Legend","id":"p721827","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p721828","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p721824"}]}},{"type":"object","name":"LegendItem","id":"p721838","attributes":{"label":{"type":"value","value":"Median Year (1929)"},"renderers":[{"id":"p721835"}]}},{"type":"object","name":"LegendItem","id":"p721848","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p721845"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p721860","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8acc1870-5221-4a7a-958d-f7c3eb577e6c","roots":{"p721861":"dd3eee1e-48d4-438a-aa91-91b86cbd445d"},"root_ids":["p721861"]}];
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