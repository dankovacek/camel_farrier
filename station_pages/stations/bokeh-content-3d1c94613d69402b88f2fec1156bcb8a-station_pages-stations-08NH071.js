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
    
    
    const element = document.getElementById("fce6ad9f-5833-42d4-aa16-9b59a24a3882");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fce6ad9f-5833-42d4-aa16-9b59a24a3882' but no matching script tag was found.")
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
                  const docs_json = '{"065a613e-171b-405c-a7ee-fb6cbb842957":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p577771","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p577772"}}},"roots":[{"type":"object","name":"Column","id":"p577935","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p577932","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p577931","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p577924","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p577795"},{"type":"object","name":"PanTool","id":"p577871"}]}},{"type":"object","name":"ToolProxy","id":"p577925","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p577796","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p577872","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p577926","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p577797","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p577798","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p577804","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p577803","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p577873","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p577874","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p577880","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p577879","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p577927","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p577805"},{"type":"object","name":"ResetTool","id":"p577881"}]}},{"type":"object","name":"SaveTool","id":"p577928"},{"type":"object","name":"ToolProxy","id":"p577929","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p577847","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p577930","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p577923","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p577773","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p577774"},"y_range":{"type":"object","name":"DataRange1d","id":"p577775"},"x_scale":{"type":"object","name":"LinearScale","id":"p577783"},"y_scale":{"type":"object","name":"LogScale","id":"p577784"},"title":{"type":"object","name":"Title","id":"p577776","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p577813","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577807","attributes":{"selected":{"type":"object","name":"Selection","id":"p577808","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577809"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+1+j9Gg4jKYDnPkAAOmQC74oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p577814","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577815"}}},"glyph":{"type":"object","name":"Line","id":"p577810","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577811","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p577812","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p577822","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577816","attributes":{"selected":{"type":"object","name":"Selection","id":"p577817","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577818"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+1+j9Gg4jKYDnPkAAOmQC74oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p577823","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577824"}}},"glyph":{"type":"object","name":"Line","id":"p577819","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577820","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p577821","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p577833","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577827","attributes":{"selected":{"type":"object","name":"Selection","id":"p577828","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577829"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/1sft7fq66uv9uvBNKsDMzufjEWBgAOEL+oQvS3n5qZUaai4ggOQc3qarjJUXtWhlUtUK2SFBlSdtoNh0pEOQWU9qHoDh3d3dhY/P2cI1WfsAJJ16zGB6jd1mGWSeWmJpznUHAuHggcHGpnZraDmWTu49UgAjbSBmmvnAHQcUIU91HwHh58fHx/vl3eE2uPo8ATIs69zgtrn7HB+rnX5uzvOUHtdHHYBXTPX2hVqv6vDEs/Jar6z3KDucHcA6f7zwx3qHg+H6q+vrq4O94S6y8shDej76G1eUPd5OwQudAIGgQ/UnT4ONkDbdhb7Qt3r56DuC/KhH9Td/g6dIO9LBEDdH+AAtAzogwCoPwIdSkDOKw+E+ifQARQ6k9WCoP4KcogHRdPVIKj/gh1CVgQAXRAM9WewgxfIOyYhUP+GOIB88/FxCNTfoQ6mYANDof4PdQBGHtCAMGg4hDkogDWEQcMj3AEUuwELw6HhEu7ADRaIgIZPhAMDGEQ6AADc2CqWSAIAAA=="},"shape":[73],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+1+j9Gg4UJAOACtMaVVIAgAA"},"shape":[73],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p577834","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577835"}}},"glyph":{"type":"object","name":"Line","id":"p577830","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577831","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p577832","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p577843","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577837","attributes":{"selected":{"type":"object","name":"Selection","id":"p577838","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577839"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p577844","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577845"}}},"glyph":{"type":"object","name":"Line","id":"p577840","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577841","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p577842","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p577782","attributes":{"tools":[{"id":"p577795"},{"id":"p577796"},{"id":"p577797"},{"id":"p577805"},{"type":"object","name":"SaveTool","id":"p577806"},{"id":"p577847"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p577790","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p577791","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p577792"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p577793"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p577785","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p577786","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p577787"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p577788"}}}],"center":[{"type":"object","name":"Grid","id":"p577789","attributes":{"axis":{"id":"p577785"}}},{"type":"object","name":"Grid","id":"p577794","attributes":{"dimension":1,"axis":{"id":"p577790"}}},{"type":"object","name":"Legend","id":"p577825","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p577826","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p577822"}]}},{"type":"object","name":"LegendItem","id":"p577836","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p577833"}]}},{"type":"object","name":"LegendItem","id":"p577846","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p577843"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p577848","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p577858","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p577850"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p577859"},"y_scale":{"type":"object","name":"LinearScale","id":"p577860"},"title":{"type":"object","name":"Title","id":"p577851","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p577889","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577883","attributes":{"selected":{"type":"object","name":"Selection","id":"p577884","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577885"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCPrX///3fZMS7NFpXPoBSPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p577890","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577891"}}},"glyph":{"type":"object","name":"Line","id":"p577886","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577887","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p577888","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p577898","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577892","attributes":{"selected":{"type":"object","name":"Selection","id":"p577893","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577894"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCPrX///3fZMS7NFpXPoBSPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p577899","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577900"}}},"glyph":{"type":"object","name":"Line","id":"p577895","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577896","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p577897","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p577909","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577903","attributes":{"selected":{"type":"object","name":"Selection","id":"p577904","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577905"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCPrX///3fZMS7NFpXPoBSPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p577910","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577911"}}},"glyph":{"type":"object","name":"Line","id":"p577906","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577907","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p577908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p577919","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577913","attributes":{"selected":{"type":"object","name":"Selection","id":"p577914","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577915"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p577920","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577921"}}},"glyph":{"type":"object","name":"Line","id":"p577916","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577917","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p577918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p577857","attributes":{"tools":[{"id":"p577871"},{"id":"p577872"},{"id":"p577873"},{"id":"p577881"},{"type":"object","name":"SaveTool","id":"p577882"},{"id":"p577923"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p577866","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p577867","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p577868"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p577869"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p577861","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p577862"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p577863"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p577864"}}}],"center":[{"type":"object","name":"Grid","id":"p577865","attributes":{"axis":{"id":"p577861"}}},{"type":"object","name":"Grid","id":"p577870","attributes":{"dimension":1,"axis":{"id":"p577866"}}},{"type":"object","name":"Legend","id":"p577901","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p577902","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p577898"}]}},{"type":"object","name":"LegendItem","id":"p577912","attributes":{"label":{"type":"value","value":"Median Year (1939)"},"renderers":[{"id":"p577909"}]}},{"type":"object","name":"LegendItem","id":"p577922","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p577919"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p577934","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"065a613e-171b-405c-a7ee-fb6cbb842957","roots":{"p577935":"fce6ad9f-5833-42d4-aa16-9b59a24a3882"},"root_ids":["p577935"]}];
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