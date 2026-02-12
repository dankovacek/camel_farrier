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
    
    
    const element = document.getElementById("af119745-34c5-4813-ade1-87e6ec41f22a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'af119745-34c5-4813-ade1-87e6ec41f22a' but no matching script tag was found.")
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
                  const docs_json = '{"fc1922cc-828b-4f64-b3ef-a83aa756abe9":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p622060","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p622061"}}},"roots":[{"type":"object","name":"Column","id":"p622224","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p622221","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p622220","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p622213","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p622084"},{"type":"object","name":"PanTool","id":"p622160"}]}},{"type":"object","name":"ToolProxy","id":"p622214","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p622085","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p622161","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p622215","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p622086","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p622087","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p622093","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p622092","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p622162","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p622163","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p622169","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p622168","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p622216","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p622094"},{"type":"object","name":"ResetTool","id":"p622170"}]}},{"type":"object","name":"SaveTool","id":"p622217"},{"type":"object","name":"ToolProxy","id":"p622218","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p622136","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p622219","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p622212","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p622062","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p622063"},"y_range":{"type":"object","name":"DataRange1d","id":"p622064"},"x_scale":{"type":"object","name":"LinearScale","id":"p622072"},"y_scale":{"type":"object","name":"LogScale","id":"p622073"},"title":{"type":"object","name":"Title","id":"p622065","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p622102","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p622096","attributes":{"selected":{"type":"object","name":"Selection","id":"p622097","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p622098"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+kskr7P/+//9ezXCF/e///+P7Dy21//P/v/3DqiUk07/+/5/vum2x/Y////+v/LiIavRnoDuLMhYOWxoYbvvL9s3HoD8Bw5VjzZxRms40MPzdTeNm2X8HpueZM2faAwBjX3olKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p622103","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p622104"}}},"glyph":{"type":"object","name":"Line","id":"p622099","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p622100","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p622101","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p622111","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p622105","attributes":{"selected":{"type":"object","name":"Selection","id":"p622106","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p622107"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+kskr7P/+//9ezXCF/e///+P7Dy21//P/v/3DqiUk07/+/5/vum2x/Y////+v/LiIavRnoDuLMhYOWxoYbvvL9s3HoD8Bw5VjzZxRms40MPzdTeNm2X8HpueZM2faAwBjX3olKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p622112","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p622113"}}},"glyph":{"type":"object","name":"Line","id":"p622108","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p622109","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p622110","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p622122","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p622116","attributes":{"selected":{"type":"object","name":"Selection","id":"p622117","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p622118"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3QSy5EQRgGUGJkJpFIJAaECCHi0d5NV7fW+qXd9702wJpYEwuxBDNRfWpyc6vO/32V+vz4Xz+dz/j97ZzFtRTm/8thIa6VMN9fDe9v/2vN+Xr4imuD2wxx+2OL3w7f8XzH3C63Z34/tKI7kHMYIns74o7NH8s9cX4q/4xrcS255/ou5F9yV9wVd83dcLdhMbq2+7T13um919uRF8wHucF511yX65nvcT3uwT0euD7X5/rcI/fIDfQOuIH7P+l94obyhtxQ3kjeiBvLG3NjeRNu4l2m8qbeZyrvWe+zvBk3kzfjXuS9cIn9RH/iPDGXcCmXyk31pVzKZVzGZfIyLuNyLtebczmXc4V3KOQVeguu4Ep5JVfKK7mSq7hKb8VVXMXVemuu1lt795pr5DV6G3mNvIZ7DX9SchUE6AMAAA=="},"shape":[125],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+kskr7H/9/19vy7Xc/s////YPq5ZQjf7x////lR8X0Zz+DPRHUcbCURqNBsbr/rJ983HSn4DxxLFmzig9zOjv///PnzlzJpwGANJPu9LoAwAA"},"shape":[125],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p622123","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p622124"}}},"glyph":{"type":"object","name":"Line","id":"p622119","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p622120","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p622121","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p622132","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p622126","attributes":{"selected":{"type":"object","name":"Selection","id":"p622127","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p622128"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p622133","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p622134"}}},"glyph":{"type":"object","name":"Line","id":"p622129","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p622130","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p622131","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p622071","attributes":{"tools":[{"id":"p622084"},{"id":"p622085"},{"id":"p622086"},{"id":"p622094"},{"type":"object","name":"SaveTool","id":"p622095"},{"id":"p622136"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p622079","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p622080","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p622081"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p622082"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p622074","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p622075","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p622076"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p622077"}}}],"center":[{"type":"object","name":"Grid","id":"p622078","attributes":{"axis":{"id":"p622074"}}},{"type":"object","name":"Grid","id":"p622083","attributes":{"dimension":1,"axis":{"id":"p622079"}}},{"type":"object","name":"Legend","id":"p622114","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p622115","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p622111"}]}},{"type":"object","name":"LegendItem","id":"p622125","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p622122"}]}},{"type":"object","name":"LegendItem","id":"p622135","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p622132"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p622137","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p622147","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p622139"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p622148"},"y_scale":{"type":"object","name":"LinearScale","id":"p622149"},"title":{"type":"object","name":"Title","id":"p622140","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p622178","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p622172","attributes":{"selected":{"type":"object","name":"Selection","id":"p622173","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p622174"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L////eXTF5h//v///j+Q0vtj5w5syb81CL7uLVbr62cNMd+9bUob5sLC+yFlJSYUs7MtWfAYQ4AlPCK9mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p622179","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p622180"}}},"glyph":{"type":"object","name":"Line","id":"p622175","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p622176","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p622177","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p622187","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p622181","attributes":{"selected":{"type":"object","name":"Selection","id":"p622182","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p622183"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L////eXTF5h//v///j+Q0vtj5w5syb81CL7uLVbr62cNMd+9bUob5sLC+yFlJSYUs7MtWfAYQ4AlPCK9mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p622188","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p622189"}}},"glyph":{"type":"object","name":"Line","id":"p622184","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p622185","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p622186","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p622198","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p622192","attributes":{"selected":{"type":"object","name":"Selection","id":"p622193","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p622194"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L////eXTF5h//v///j+Q0vtj5w5syb81CL7uLVbr62cNMd+9bUob5sLC+yFlJSYUs7MtWfAYQ4AlPCK9mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p622199","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p622200"}}},"glyph":{"type":"object","name":"Line","id":"p622195","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p622196","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p622197","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p622208","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p622202","attributes":{"selected":{"type":"object","name":"Selection","id":"p622203","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p622204"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p622209","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p622210"}}},"glyph":{"type":"object","name":"Line","id":"p622205","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p622206","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p622207","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p622146","attributes":{"tools":[{"id":"p622160"},{"id":"p622161"},{"id":"p622162"},{"id":"p622170"},{"type":"object","name":"SaveTool","id":"p622171"},{"id":"p622212"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p622155","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p622156","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p622157"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p622158"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p622150","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p622151"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p622152"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p622153"}}}],"center":[{"type":"object","name":"Grid","id":"p622154","attributes":{"axis":{"id":"p622150"}}},{"type":"object","name":"Grid","id":"p622159","attributes":{"dimension":1,"axis":{"id":"p622155"}}},{"type":"object","name":"Legend","id":"p622190","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p622191","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p622187"}]}},{"type":"object","name":"LegendItem","id":"p622201","attributes":{"label":{"type":"value","value":"Median Year (1924)"},"renderers":[{"id":"p622198"}]}},{"type":"object","name":"LegendItem","id":"p622211","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p622208"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p622223","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"fc1922cc-828b-4f64-b3ef-a83aa756abe9","roots":{"p622224":"af119745-34c5-4813-ade1-87e6ec41f22a"},"root_ids":["p622224"]}];
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