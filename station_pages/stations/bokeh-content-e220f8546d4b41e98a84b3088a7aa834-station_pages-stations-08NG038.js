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
    
    
    const element = document.getElementById("ac1fa79c-d9c0-427e-81b1-fec955f73505");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ac1fa79c-d9c0-427e-81b1-fec955f73505' but no matching script tag was found.")
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
                  const docs_json = '{"0faf6f58-6a24-4528-a3af-ba34d7ccd74b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p721226","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p721227"}}},"roots":[{"type":"object","name":"Column","id":"p721390","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p721387","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p721386","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p721379","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p721250"},{"type":"object","name":"PanTool","id":"p721326"}]}},{"type":"object","name":"ToolProxy","id":"p721380","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p721251","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p721327","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p721381","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p721252","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p721253","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p721259","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p721258","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p721328","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p721329","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p721335","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p721334","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p721382","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p721260"},{"type":"object","name":"ResetTool","id":"p721336"}]}},{"type":"object","name":"SaveTool","id":"p721383"},{"type":"object","name":"ToolProxy","id":"p721384","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p721302","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p721385","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p721378","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p721228","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p721229"},"y_range":{"type":"object","name":"DataRange1d","id":"p721230"},"x_scale":{"type":"object","name":"LinearScale","id":"p721238"},"y_scale":{"type":"object","name":"LogScale","id":"p721239"},"title":{"type":"object","name":"Title","id":"p721231","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p721268","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721262","attributes":{"selected":{"type":"object","name":"Selection","id":"p721263","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721264"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+18jjDZJSzNbdDHW/sXpMz3CXIH2wmDxgFF6lMZKAwBw+/myKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721269","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721270"}}},"glyph":{"type":"object","name":"Line","id":"p721265","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721266","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p721267","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p721277","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721271","attributes":{"selected":{"type":"object","name":"Selection","id":"p721272","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721273"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+18jjDZJSzNbdDHW/sXpMz3CXIH2wmDxgFF6lMZKAwBw+/myKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721278","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721279"}}},"glyph":{"type":"object","name":"Line","id":"p721274","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721275","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p721276","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p721288","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721282","attributes":{"selected":{"type":"object","name":"Selection","id":"p721283","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721284"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y1QPUhCYRRtiKKhllwKioJAgpSkF/3YzzE1n2bP5897vqhJaHCyKQjcbDEImmwqGpqChlpsCgKbbAqCNlsaAidrMRr6vu+dy4HHu9+9555zNL2i6ZWfdU19e5FqN4x2Ywjuvweh0WuBEfbH4W91fK3OJN+nELwbFvBybhqqrc1w3o8bVbPcC+BejgfnuK/hodysl5vz5FnA4+euwCL5lvBsSKJl8q7gpS4XVsm/huJZnwB4B1BtI8R7IRx0a6VubYN3w/j2yYcw70dwWPAKRKkjil85XtqknhhUux6jLh09quLUF8exIkpQZwL9StAW9SZRvXgXSFL3NgZfJwQM6jeg5BdT9GHiRM47Jv2Y7t6fSV9pd/8qTX9pqLORDH1mXL6vDP1moc6dZuk7C49sB3L0n4NtiXrLMQcL59L+kcU8LEj11TGbudhQtp9s5pPHngxmP8+c8riUCwMO83LwIWXeOsxtB//repCMcAIAAA=="},"shape":[78],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+19DlBYG0wGj9BChAXN6aQtwAgAA"},"shape":[78],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721289","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721290"}}},"glyph":{"type":"object","name":"Line","id":"p721285","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721286","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p721287","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p721298","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721292","attributes":{"selected":{"type":"object","name":"Selection","id":"p721293","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721294"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p721299","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721300"}}},"glyph":{"type":"object","name":"Line","id":"p721295","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721296","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p721297","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p721237","attributes":{"tools":[{"id":"p721250"},{"id":"p721251"},{"id":"p721252"},{"id":"p721260"},{"type":"object","name":"SaveTool","id":"p721261"},{"id":"p721302"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p721245","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p721246","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p721247"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p721248"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p721240","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p721241","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p721242"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p721243"}}}],"center":[{"type":"object","name":"Grid","id":"p721244","attributes":{"axis":{"id":"p721240"}}},{"type":"object","name":"Grid","id":"p721249","attributes":{"dimension":1,"axis":{"id":"p721245"}}},{"type":"object","name":"Legend","id":"p721280","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p721281","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p721277"}]}},{"type":"object","name":"LegendItem","id":"p721291","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p721288"}]}},{"type":"object","name":"LegendItem","id":"p721301","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p721298"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p721303","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p721313","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p721305"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p721314"},"y_scale":{"type":"object","name":"LinearScale","id":"p721315"},"title":{"type":"object","name":"Title","id":"p721306","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p721344","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721338","attributes":{"selected":{"type":"object","name":"Selection","id":"p721339","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721340"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0uXWNnsq3YLthf//v++bFGC/8f9//cBb0fa41AMAah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721345","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721346"}}},"glyph":{"type":"object","name":"Line","id":"p721341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721342","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p721343","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p721353","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721347","attributes":{"selected":{"type":"object","name":"Selection","id":"p721348","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721349"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0uXWNnsq3YLthf//v++bFGC/8f9//cBb0fa41AMAah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721354","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721355"}}},"glyph":{"type":"object","name":"Line","id":"p721350","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721351","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p721352","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p721364","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721358","attributes":{"selected":{"type":"object","name":"Selection","id":"p721359","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721360"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0uXWNnsq3YLthf//v++bFGC/8f9//cBb0fa41AMAah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p721365","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721366"}}},"glyph":{"type":"object","name":"Line","id":"p721361","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721362","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p721363","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p721374","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p721368","attributes":{"selected":{"type":"object","name":"Selection","id":"p721369","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p721370"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p721375","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p721376"}}},"glyph":{"type":"object","name":"Line","id":"p721371","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p721372","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p721373","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p721312","attributes":{"tools":[{"id":"p721326"},{"id":"p721327"},{"id":"p721328"},{"id":"p721336"},{"type":"object","name":"SaveTool","id":"p721337"},{"id":"p721378"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p721321","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p721322","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p721323"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p721324"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p721316","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p721317"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p721318"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p721319"}}}],"center":[{"type":"object","name":"Grid","id":"p721320","attributes":{"axis":{"id":"p721316"}}},{"type":"object","name":"Grid","id":"p721325","attributes":{"dimension":1,"axis":{"id":"p721321"}}},{"type":"object","name":"Legend","id":"p721356","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p721357","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p721353"}]}},{"type":"object","name":"LegendItem","id":"p721367","attributes":{"label":{"type":"value","value":"Median Year (1929)"},"renderers":[{"id":"p721364"}]}},{"type":"object","name":"LegendItem","id":"p721377","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p721374"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p721389","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"0faf6f58-6a24-4528-a3af-ba34d7ccd74b","roots":{"p721390":"ac1fa79c-d9c0-427e-81b1-fec955f73505"},"root_ids":["p721390"]}];
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