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
    
    
    const element = document.getElementById("bd50cb7b-7c01-42ce-996e-9e10aec875cd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bd50cb7b-7c01-42ce-996e-9e10aec875cd' but no matching script tag was found.")
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
                  const docs_json = '{"3abff778-8ecd-49d0-91d2-4705c8b33733":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p774191","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p774192"}}},"roots":[{"type":"object","name":"Column","id":"p774355","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p774352","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p774351","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p774344","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p774215"},{"type":"object","name":"PanTool","id":"p774291"}]}},{"type":"object","name":"ToolProxy","id":"p774345","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p774216","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p774292","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p774346","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p774217","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p774218","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p774224","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p774223","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p774293","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p774294","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p774300","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p774299","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p774347","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p774225"},{"type":"object","name":"ResetTool","id":"p774301"}]}},{"type":"object","name":"SaveTool","id":"p774348"},{"type":"object","name":"ToolProxy","id":"p774349","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p774267","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p774350","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p774343","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p774193","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p774194"},"y_range":{"type":"object","name":"DataRange1d","id":"p774195"},"x_scale":{"type":"object","name":"LinearScale","id":"p774203"},"y_scale":{"type":"object","name":"LogScale","id":"p774204"},"title":{"type":"object","name":"Title","id":"p774196","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p774233","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p774227","attributes":{"selected":{"type":"object","name":"Selection","id":"p774228","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p774229"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+1+j9Gg4jKYDnPkAAOmQC74oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p774234","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p774235"}}},"glyph":{"type":"object","name":"Line","id":"p774230","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p774231","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p774232","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p774242","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p774236","attributes":{"selected":{"type":"object","name":"Selection","id":"p774237","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p774238"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+1+j9Gg4jKYDnPkAAOmQC74oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p774243","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p774244"}}},"glyph":{"type":"object","name":"Line","id":"p774239","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p774240","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p774241","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p774253","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p774247","attributes":{"selected":{"type":"object","name":"Selection","id":"p774248","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p774249"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/1sft7fq66uv9uvBNKsDMzufjEWBgAOEL+oQvS3n5qZUaai4ggOQc3qarjJUXtWhlUtUK2SFBlSdtoNh0pEOQWU9qHoDh3d3dhY/P2cI1WfsAJJ16zGB6jd1mGWSeWmJpznUHAuHggcHGpnZraDmWTu49UgAjbSBmmvnAHQcUIU91HwHh58fHx/vl3eE2uPo8ATIs69zgtrn7HB+rnX5uzvOUHtdHHYBXTPX2hVqv6vDEs/Jar6z3KDucHcA6f7zwx3qHg+H6q+vrq4O94S6y8shDej76G1eUPd5OwQudAIGgQ/UnT4ONkDbdhb7Qt3r56DuC/KhH9Td/g6dIO9LBEDdH+AAtAzogwCoPwIdSkDOKw+E+ifQARQ6k9WCoP4KcogHRdPVIKj/gh1CVgQAXRAM9WewgxfIOyYhUP+GOIB88/FxCNTfoQ6mYANDof4PdQBGHtCAMGg4hDkogDWEQcMj3AEUuwELw6HhEu7ADRaIgIZPhAMDGEQ6AADc2CqWSAIAAA=="},"shape":[73],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+1+j9Gg4UJAOACtMaVVIAgAA"},"shape":[73],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p774254","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p774255"}}},"glyph":{"type":"object","name":"Line","id":"p774250","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p774251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p774252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p774263","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p774257","attributes":{"selected":{"type":"object","name":"Selection","id":"p774258","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p774259"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p774264","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p774265"}}},"glyph":{"type":"object","name":"Line","id":"p774260","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p774261","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p774262","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p774202","attributes":{"tools":[{"id":"p774215"},{"id":"p774216"},{"id":"p774217"},{"id":"p774225"},{"type":"object","name":"SaveTool","id":"p774226"},{"id":"p774267"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p774210","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p774211","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p774212"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p774213"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p774205","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p774206","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p774207"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p774208"}}}],"center":[{"type":"object","name":"Grid","id":"p774209","attributes":{"axis":{"id":"p774205"}}},{"type":"object","name":"Grid","id":"p774214","attributes":{"dimension":1,"axis":{"id":"p774210"}}},{"type":"object","name":"Legend","id":"p774245","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p774246","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p774242"}]}},{"type":"object","name":"LegendItem","id":"p774256","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p774253"}]}},{"type":"object","name":"LegendItem","id":"p774266","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p774263"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p774268","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p774278","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p774270"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p774279"},"y_scale":{"type":"object","name":"LinearScale","id":"p774280"},"title":{"type":"object","name":"Title","id":"p774271","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p774309","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p774303","attributes":{"selected":{"type":"object","name":"Selection","id":"p774304","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p774305"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCPrX///3fZMS7NFpXPoBSPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p774310","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p774311"}}},"glyph":{"type":"object","name":"Line","id":"p774306","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p774307","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p774308","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p774318","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p774312","attributes":{"selected":{"type":"object","name":"Selection","id":"p774313","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p774314"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCPrX///3fZMS7NFpXPoBSPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p774319","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p774320"}}},"glyph":{"type":"object","name":"Line","id":"p774315","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p774316","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p774317","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p774329","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p774323","attributes":{"selected":{"type":"object","name":"Selection","id":"p774324","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p774325"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCPrX///3fZMS7NFpXPoBSPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p774330","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p774331"}}},"glyph":{"type":"object","name":"Line","id":"p774326","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p774327","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p774328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p774339","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p774333","attributes":{"selected":{"type":"object","name":"Selection","id":"p774334","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p774335"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p774340","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p774341"}}},"glyph":{"type":"object","name":"Line","id":"p774336","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p774337","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p774338","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p774277","attributes":{"tools":[{"id":"p774291"},{"id":"p774292"},{"id":"p774293"},{"id":"p774301"},{"type":"object","name":"SaveTool","id":"p774302"},{"id":"p774343"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p774286","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p774287","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p774288"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p774289"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p774281","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p774282"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p774283"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p774284"}}}],"center":[{"type":"object","name":"Grid","id":"p774285","attributes":{"axis":{"id":"p774281"}}},{"type":"object","name":"Grid","id":"p774290","attributes":{"dimension":1,"axis":{"id":"p774286"}}},{"type":"object","name":"Legend","id":"p774321","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p774322","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p774318"}]}},{"type":"object","name":"LegendItem","id":"p774332","attributes":{"label":{"type":"value","value":"Median Year (1939)"},"renderers":[{"id":"p774329"}]}},{"type":"object","name":"LegendItem","id":"p774342","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p774339"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p774354","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"3abff778-8ecd-49d0-91d2-4705c8b33733","roots":{"p774355":"bd50cb7b-7c01-42ce-996e-9e10aec875cd"},"root_ids":["p774355"]}];
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