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
    
    
    const element = document.getElementById("f7907e69-d70a-4b37-8914-6873eded0bad");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f7907e69-d70a-4b37-8914-6873eded0bad' but no matching script tag was found.")
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
                  const docs_json = '{"60b30f0d-e82e-4f2b-bdae-481da3b5db5d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p674252","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p674253"}}},"roots":[{"type":"object","name":"Column","id":"p674416","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p674413","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p674412","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p674405","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p674276"},{"type":"object","name":"PanTool","id":"p674352"}]}},{"type":"object","name":"ToolProxy","id":"p674406","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p674277","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p674353","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p674407","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p674278","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p674279","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p674285","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p674284","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p674354","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p674355","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p674361","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p674360","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p674408","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p674286"},{"type":"object","name":"ResetTool","id":"p674362"}]}},{"type":"object","name":"SaveTool","id":"p674409"},{"type":"object","name":"ToolProxy","id":"p674410","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p674328","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p674411","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p674404","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p674254","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p674255"},"y_range":{"type":"object","name":"DataRange1d","id":"p674256"},"x_scale":{"type":"object","name":"LinearScale","id":"p674264"},"y_scale":{"type":"object","name":"LogScale","id":"p674265"},"title":{"type":"object","name":"Title","id":"p674257","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p674294","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674288","attributes":{"selected":{"type":"object","name":"Selection","id":"p674289","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674290"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGiYnnfLnoFC+qtGzPR3zLfs09LSyqqW3rC/trgglM39uv3////3nyi7hkEbGRtPtrh21X6t+8NbbDOv2GvE9J/SC7xsf2NxQayFwCX7c2fOrKi7d8GeiYHBYdLp8/YKra8r3848ax/bf8j05pTT9rZc1539I06B+ZeCTtozMjA8OPf9uH2FyLrlx98fBdHv16kesc+35RJndzpk/+//f/tOxwNwGuhe+V/qB0DuBwIEDdT3XM57v/0fsDv3YdCWXNcPt3vvs98k13r73uG99j+BHtLZtNd+71eNKxqVe+1lWl8zNnzcA7InfuJbwrTbw6opP6/usV9YYHsowG8P2J6vGnvsDYyNs/kE9oDC89ncrbtB7kt4vHS3/ZvAHXJHi3bbp6Slmcm83mX/9///+e4PcdPAcA7+57wLrF8gYicGzXl9ccBsi532qWlpdZ827LAHWr7GU3MHyB3yN89tJ0hzXF8ssKN0O8gfb9iZt4Ps/a/Vvo1sGuQeqcVbQe478PnvFgzahuu6sVPFFvstcq2nn2dttnd9WFVyrmMTSH88ny7taACpTKzdKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674295","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674296"}}},"glyph":{"type":"object","name":"Line","id":"p674291","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674292","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p674293","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p674303","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674297","attributes":{"selected":{"type":"object","name":"Selection","id":"p674298","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674299"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGiYnnfLnoFC+qtGzPR3zLfs09LSyqqW3rC/trgglM39uv3////3nyi7hkEbGRtPtrh21X6t+8NbbDOv2GvE9J/SC7xsf2NxQayFwCX7c2fOrKi7d8GeiYHBYdLp8/YKra8r3848ax/bf8j05pTT9rZc1539I06B+ZeCTtozMjA8OPf9uH2FyLrlx98fBdHv16kesc+35RJndzpk/+//f/tOxwNwGuhe+V/qB0DuBwIEDdT3XM57v/0fsDv3YdCWXNcPt3vvs98k13r73uG99j+BHtLZtNd+71eNKxqVe+1lWl8zNnzcA7InfuJbwrTbw6opP6/usV9YYHsowG8P2J6vGnvsDYyNs/kE9oDC89ncrbtB7kt4vHS3/ZvAHXJHi3bbp6Slmcm83mX/9///+e4PcdPAcA7+57wLrF8gYicGzXl9ccBsi532qWlpdZ827LAHWr7GU3MHyB3yN89tJ0hzXF8ssKN0O8gfb9iZt4Ps/a/Vvo1sGuQeqcVbQe478PnvFgzahuu6sVPFFvstcq2nn2dttnd9WFVyrmMTSH88ny7taACpTKzdKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674304","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674305"}}},"glyph":{"type":"object","name":"Line","id":"p674300","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p674302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p674314","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674308","attributes":{"selected":{"type":"object","name":"Selection","id":"p674309","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674310"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yt+eyDG2uC7fTGYZncQ2zShVSdF0AHCF3e4oPHR2OuPDFRc0eHoeZCAClRe3UGRO/KEk5gWVJ2OQ61b5/zAR/pQ9YYO70DKrhtB9Zk4zLn3ZZn5XlOofnMH7z89QvaLLaDmWDn8lFStc+u0hppn47DCfO9L33w7qLn2DqvAwAFqvqND086yhHWyTlB7nBxApmya4Ay1z8XB4Drfma3MrlB7XR3Yn91q3FnmBrXf3eE+SPilO9QdHg7bmEEynlD3eDn0AUWPnPeCusvbIQUs4QN1n4+DNdgCX6g7/RzAyjX8oe71d/gKMt43AOruAIfEdbIzstkDoe4PdAA6DmhhINQfQQ5gY6qCoP4JcgCZ9tE4GOqvYAd+sIZgqP9CHKouzwb6LATqz1AHsPcSQqH+DXUIepQ+5YdkGNTfYQ5g4y+HQf0f7qAJ8kZPODQcwh2AioEejYCGR4QDAxhEOgAAoezTGSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGiYnnfLnoFI+v////Ibim6A6P0nyq5h0EB1DhxrroDohKcXLtkzMjA8UGG7CKITUqzPg+iGnOenQer/r5Y5BRa33HLC/t////H9h47a//3/397Y+DCIb9/peABOM4ABgv4Dtm8fBv0TaK7Opr1wGmTuxLd7CNIg/V81EDTI/Y+X7obTQHfNd3+4CycNUicQsRODBpq/v2TyDpC58jfPbcdJA507/5j3dpB5/7XatxFNgwLj898tGPRvoL/2lGwGqYvn091EMQ0AFs4mzSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674315","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674316"}}},"glyph":{"type":"object","name":"Line","id":"p674311","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674312","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p674313","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p674324","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674318","attributes":{"selected":{"type":"object","name":"Selection","id":"p674319","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674320"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p674325","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674326"}}},"glyph":{"type":"object","name":"Line","id":"p674321","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674322","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p674323","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p674263","attributes":{"tools":[{"id":"p674276"},{"id":"p674277"},{"id":"p674278"},{"id":"p674286"},{"type":"object","name":"SaveTool","id":"p674287"},{"id":"p674328"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p674271","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p674272","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p674273"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p674274"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p674266","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p674267","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p674268"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p674269"}}}],"center":[{"type":"object","name":"Grid","id":"p674270","attributes":{"axis":{"id":"p674266"}}},{"type":"object","name":"Grid","id":"p674275","attributes":{"dimension":1,"axis":{"id":"p674271"}}},{"type":"object","name":"Legend","id":"p674306","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p674307","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p674303"}]}},{"type":"object","name":"LegendItem","id":"p674317","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p674314"}]}},{"type":"object","name":"LegendItem","id":"p674327","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p674324"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p674329","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p674339","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p674331"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p674340"},"y_scale":{"type":"object","name":"LinearScale","id":"p674341"},"title":{"type":"object","name":"Title","id":"p674332","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p674370","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674364","attributes":{"selected":{"type":"object","name":"Selection","id":"p674365","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674366"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzE03sUNty0/36vut/f5ZB9SlpaWZDPbntc6gE6IB6hYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674371","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674372"}}},"glyph":{"type":"object","name":"Line","id":"p674367","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674368","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p674369","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p674379","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674373","attributes":{"selected":{"type":"object","name":"Selection","id":"p674374","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674375"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzE03sUNty0/36vut/f5ZB9SlpaWZDPbntc6gE6IB6hYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674380","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674381"}}},"glyph":{"type":"object","name":"Line","id":"p674376","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674377","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p674378","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p674390","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674384","attributes":{"selected":{"type":"object","name":"Selection","id":"p674385","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674386"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzE03sUNty0/36vut/f5ZB9SlpaWZDPbntc6gE6IB6hYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p674391","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674392"}}},"glyph":{"type":"object","name":"Line","id":"p674387","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674388","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p674389","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p674400","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p674394","attributes":{"selected":{"type":"object","name":"Selection","id":"p674395","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p674396"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p674401","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p674402"}}},"glyph":{"type":"object","name":"Line","id":"p674397","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p674398","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p674399","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p674338","attributes":{"tools":[{"id":"p674352"},{"id":"p674353"},{"id":"p674354"},{"id":"p674362"},{"type":"object","name":"SaveTool","id":"p674363"},{"id":"p674404"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p674347","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p674348","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p674349"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p674350"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p674342","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p674343"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p674344"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p674345"}}}],"center":[{"type":"object","name":"Grid","id":"p674346","attributes":{"axis":{"id":"p674342"}}},{"type":"object","name":"Grid","id":"p674351","attributes":{"dimension":1,"axis":{"id":"p674347"}}},{"type":"object","name":"Legend","id":"p674382","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p674383","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p674379"}]}},{"type":"object","name":"LegendItem","id":"p674393","attributes":{"label":{"type":"value","value":"Median Year (1930)"},"renderers":[{"id":"p674390"}]}},{"type":"object","name":"LegendItem","id":"p674403","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p674400"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p674415","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"60b30f0d-e82e-4f2b-bdae-481da3b5db5d","roots":{"p674416":"f7907e69-d70a-4b37-8914-6873eded0bad"},"root_ids":["p674416"]}];
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