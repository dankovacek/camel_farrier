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
    
    
    const element = document.getElementById("e6ff4b3e-686d-4279-9a7f-0fbf5ad0b68a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e6ff4b3e-686d-4279-9a7f-0fbf5ad0b68a' but no matching script tag was found.")
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
                  const docs_json = '{"6912a779-cb17-4fcb-8ce5-25b7b2d6674e":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p674709","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p674710"}}},"roots":[{"type":"object","name":"Column","id":"p674873","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p674870","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p674869","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p674862","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p674733"},{"type":"object","name":"PanTool","id":"p674809"}]}},{"type":"object","name":"ToolProxy","id":"p674863","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p674734","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p674810","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p674864","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p674735","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p674736","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p674742","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p674741","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p674811","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p674812","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p674818","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p674817","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p674865","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p674743"},{"type":"object","name":"ResetTool","id":"p674819"}]}},{"type":"object","name":"SaveTool","id":"p674866"},{"type":"object","name":"ToolProxy","id":"p674867","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p674785","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p674868","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p674861","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p674711","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p674712"},"y_range":{"type":"object","name":"DataRange1d","id":"p674713"},"x_scale":{"type":"object","name":"LinearScale","id":"p674721"},"y_scale":{"type":"object","name":"LogScale","id":"p674722"},"title":{"type":"object","name":"Title","id":"p674714","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p674751","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674745","attributes":{"selected":{"type":"object","name":"Selection","id":"p674746","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674747"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGiYnnfLnoFC+qtGzPR3zLfs09LSyqqW3rC/trgglM39uv3////3nyi7hkEbGRtPtrh21X6t+8NbbDOv2GvE9J/SC7xsf2NxQayFwCX7c2fOrKi7d8GeiYHBYdLp8/YKra8r3848ax/bf8j05pTT9rZc1539I06B+ZeCTtozMjA8OPf9uH2FyLrlx98fBdHv16kesc+35RJndzpk/+//f/tOxwNwGuhe+V/qB0DuBwIEDdT3XM57v/0fsDv3YdCWXNcPt3vvs98k13r73uG99j+BHtLZtNd+71eNKxqVe+1lWl8zNnzcA7InfuJbwrTbw6opP6/usV9YYHsowG8P2J6vGnvsDYyNs/kE9oDC89ncrbtB7kt4vHS3/ZvAHXJHi3bbp6Slmcm83mX/9///+e4PcdPAcA7+57wLrF8gYicGzXl9ccBsi532qWlpdZ827LAHWr7GU3MHyB3yN89tJ0hzXF8ssKN0O8gfb9iZt4Ps/a/Vvo1sGuQeqcVbQe478PnvFgzahuu6sVPFFvstcq2nn2dttnd9WFVyrmMTSH88ny7taACpTKzdKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674752","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674753"}}},"glyph":{"type":"object","name":"Line","id":"p674748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674749","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p674750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p674760","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674754","attributes":{"selected":{"type":"object","name":"Selection","id":"p674755","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674756"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGiYnnfLnoFC+qtGzPR3zLfs09LSyqqW3rC/trgglM39uv3////3nyi7hkEbGRtPtrh21X6t+8NbbDOv2GvE9J/SC7xsf2NxQayFwCX7c2fOrKi7d8GeiYHBYdLp8/YKra8r3848ax/bf8j05pTT9rZc1539I06B+ZeCTtozMjA8OPf9uH2FyLrlx98fBdHv16kesc+35RJndzpk/+//f/tOxwNwGuhe+V/qB0DuBwIEDdT3XM57v/0fsDv3YdCWXNcPt3vvs98k13r73uG99j+BHtLZtNd+71eNKxqVe+1lWl8zNnzcA7InfuJbwrTbw6opP6/usV9YYHsowG8P2J6vGnvsDYyNs/kE9oDC89ncrbtB7kt4vHS3/ZvAHXJHi3bbp6Slmcm83mX/9///+e4PcdPAcA7+57wLrF8gYicGzXl9ccBsi532qWlpdZ827LAHWr7GU3MHyB3yN89tJ0hzXF8ssKN0O8gfb9iZt4Ps/a/Vvo1sGuQeqcVbQe478PnvFgzahuu6sVPFFvstcq2nn2dttnd9WFVyrmMTSH88ny7taACpTKzdKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674761","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674762"}}},"glyph":{"type":"object","name":"Line","id":"p674757","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674758","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p674759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p674771","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674765","attributes":{"selected":{"type":"object","name":"Selection","id":"p674766","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674767"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yt+eyDG2uC7fTGYZncQ2zShVSdF0AHCF3e4oPHR2OuPDFRc0eHoeZCAClRe3UGRO/KEk5gWVJ2OQ61b5/zAR/pQ9YYO70DKrhtB9Zk4zLn3ZZn5XlOofnMH7z89QvaLLaDmWDn8lFStc+u0hppn47DCfO9L33w7qLn2DqvAwAFqvqND086yhHWyTlB7nBxApmya4Ay1z8XB4Drfma3MrlB7XR3Yn91q3FnmBrXf3eE+SPilO9QdHg7bmEEynlD3eDn0AUWPnPeCusvbIQUs4QN1n4+DNdgCX6g7/RzAyjX8oe71d/gKMt43AOruAIfEdbIzstkDoe4PdAA6DmhhINQfQQ5gY6qCoP4JcgCZ9tE4GOqvYAd+sIZgqP9CHKouzwb6LATqz1AHsPcSQqH+DXUIepQ+5YdkGNTfYQ5g4y+HQf0f7qAJ8kZPODQcwh2AioEejYCGR4QDAxhEOgAAoezTGSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGiYnnfLnoFI+v////Ibim6A6P0nyq5h0EB1DhxrroDohKcXLtkzMjA8UGG7CKITUqzPg+iGnOenQer/r5Y5BRa33HLC/t////H9h47a//3/397Y+DCIb9/peABOM4ABgv4Dtm8fBv0TaK7Opr1wGmTuxLd7CNIg/V81EDTI/Y+X7obTQHfNd3+4CycNUicQsRODBpq/v2TyDpC58jfPbcdJA507/5j3dpB5/7XatxFNgwLj898tGPRvoL/2lGwGqYvn091EMQ0AFs4mzSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674772","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674773"}}},"glyph":{"type":"object","name":"Line","id":"p674768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p674770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p674781","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674775","attributes":{"selected":{"type":"object","name":"Selection","id":"p674776","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674777"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p674782","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674783"}}},"glyph":{"type":"object","name":"Line","id":"p674778","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674779","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p674780","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p674720","attributes":{"tools":[{"id":"p674733"},{"id":"p674734"},{"id":"p674735"},{"id":"p674743"},{"type":"object","name":"SaveTool","id":"p674744"},{"id":"p674785"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p674728","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p674729","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p674730"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p674731"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p674723","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p674724","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p674725"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p674726"}}}],"center":[{"type":"object","name":"Grid","id":"p674727","attributes":{"axis":{"id":"p674723"}}},{"type":"object","name":"Grid","id":"p674732","attributes":{"dimension":1,"axis":{"id":"p674728"}}},{"type":"object","name":"Legend","id":"p674763","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p674764","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p674760"}]}},{"type":"object","name":"LegendItem","id":"p674774","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p674771"}]}},{"type":"object","name":"LegendItem","id":"p674784","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p674781"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p674786","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p674796","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p674788"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p674797"},"y_scale":{"type":"object","name":"LinearScale","id":"p674798"},"title":{"type":"object","name":"Title","id":"p674789","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p674827","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674821","attributes":{"selected":{"type":"object","name":"Selection","id":"p674822","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674823"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzE03sUNty0/36vut/f5ZB9SlpaWZDPbntc6gE6IB6hYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674828","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674829"}}},"glyph":{"type":"object","name":"Line","id":"p674824","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674825","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p674826","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p674836","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674830","attributes":{"selected":{"type":"object","name":"Selection","id":"p674831","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674832"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzE03sUNty0/36vut/f5ZB9SlpaWZDPbntc6gE6IB6hYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674837","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674838"}}},"glyph":{"type":"object","name":"Line","id":"p674833","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674834","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p674835","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p674847","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674841","attributes":{"selected":{"type":"object","name":"Selection","id":"p674842","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674843"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzE03sUNty0/36vut/f5ZB9SlpaWZDPbntc6gE6IB6hYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674848","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674849"}}},"glyph":{"type":"object","name":"Line","id":"p674844","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674845","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p674846","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p674857","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674851","attributes":{"selected":{"type":"object","name":"Selection","id":"p674852","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674853"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p674858","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674859"}}},"glyph":{"type":"object","name":"Line","id":"p674854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674855","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p674856","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p674795","attributes":{"tools":[{"id":"p674809"},{"id":"p674810"},{"id":"p674811"},{"id":"p674819"},{"type":"object","name":"SaveTool","id":"p674820"},{"id":"p674861"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p674804","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p674805","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p674806"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p674807"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p674799","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p674800"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p674801"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p674802"}}}],"center":[{"type":"object","name":"Grid","id":"p674803","attributes":{"axis":{"id":"p674799"}}},{"type":"object","name":"Grid","id":"p674808","attributes":{"dimension":1,"axis":{"id":"p674804"}}},{"type":"object","name":"Legend","id":"p674839","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p674840","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p674836"}]}},{"type":"object","name":"LegendItem","id":"p674850","attributes":{"label":{"type":"value","value":"Median Year (1930)"},"renderers":[{"id":"p674847"}]}},{"type":"object","name":"LegendItem","id":"p674860","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p674857"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p674872","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"6912a779-cb17-4fcb-8ce5-25b7b2d6674e","roots":{"p674873":"e6ff4b3e-686d-4279-9a7f-0fbf5ad0b68a"},"root_ids":["p674873"]}];
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