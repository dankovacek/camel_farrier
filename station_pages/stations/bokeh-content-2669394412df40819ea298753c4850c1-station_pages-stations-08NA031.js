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
    
    
    const element = document.getElementById("c72a8882-1430-43a7-96ee-04eb28a9014e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c72a8882-1430-43a7-96ee-04eb28a9014e' but no matching script tag was found.")
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
                  const docs_json = '{"9eb9f906-24d2-4595-9e0e-914dcfbad395":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p621617","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p621618"}}},"roots":[{"type":"object","name":"Column","id":"p621781","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p621778","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p621777","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p621770","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p621641"},{"type":"object","name":"PanTool","id":"p621717"}]}},{"type":"object","name":"ToolProxy","id":"p621771","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p621642","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p621718","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p621772","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p621643","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p621644","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p621650","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p621649","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p621719","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p621720","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p621726","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p621725","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p621773","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p621651"},{"type":"object","name":"ResetTool","id":"p621727"}]}},{"type":"object","name":"SaveTool","id":"p621774"},{"type":"object","name":"ToolProxy","id":"p621775","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p621693","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p621776","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p621769","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p621619","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p621620"},"y_range":{"type":"object","name":"DataRange1d","id":"p621621"},"x_scale":{"type":"object","name":"LinearScale","id":"p621629"},"y_scale":{"type":"object","name":"LogScale","id":"p621630"},"title":{"type":"object","name":"Title","id":"p621622","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p621659","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p621653","attributes":{"selected":{"type":"object","name":"Selection","id":"p621654","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p621655"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+kskr7P/+//9ezXCF/e///+P7Dy21//P/v/3DqiUk07/+/5/vum2x/Y////+v/LiIavRnoDuLMhYOWxoYbvvL9s3HoD8Bw5VjzZxRms40MPzdTeNm2X8HpueZM2faAwBjX3olKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p621660","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p621661"}}},"glyph":{"type":"object","name":"Line","id":"p621656","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p621657","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p621658","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p621668","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p621662","attributes":{"selected":{"type":"object","name":"Selection","id":"p621663","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p621664"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+kskr7P/+//9ezXCF/e///+P7Dy21//P/v/3DqiUk07/+/5/vum2x/Y////+v/LiIavRnoDuLMhYOWxoYbvvL9s3HoD8Bw5VjzZxRms40MPzdTeNm2X8HpueZM2faAwBjX3olKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p621669","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p621670"}}},"glyph":{"type":"object","name":"Line","id":"p621665","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p621666","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p621667","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p621679","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p621673","attributes":{"selected":{"type":"object","name":"Selection","id":"p621674","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p621675"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3QSy5EQRgGUGJkJpFIJAaECCHi0d5NV7fW+qXd9702wJpYEwuxBDNRfWpyc6vO/32V+vz4Xz+dz/j97ZzFtRTm/8thIa6VMN9fDe9v/2vN+Xr4imuD2wxx+2OL3w7f8XzH3C63Z34/tKI7kHMYIns74o7NH8s9cX4q/4xrcS255/ou5F9yV9wVd83dcLdhMbq2+7T13um919uRF8wHucF511yX65nvcT3uwT0euD7X5/rcI/fIDfQOuIH7P+l94obyhtxQ3kjeiBvLG3NjeRNu4l2m8qbeZyrvWe+zvBk3kzfjXuS9cIn9RH/iPDGXcCmXyk31pVzKZVzGZfIyLuNyLtebczmXc4V3KOQVeguu4Ep5JVfKK7mSq7hKb8VVXMXVemuu1lt795pr5DV6G3mNvIZ7DX9SchUE6AMAAA=="},"shape":[125],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+kskr7H/9/19vy7Xc/s////YPq5ZQjf7x////lR8X0Zz+DPRHUcbCURqNBsbr/rJ983HSn4DxxLFmzig9zOjv///PnzlzJpwGANJPu9LoAwAA"},"shape":[125],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p621680","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p621681"}}},"glyph":{"type":"object","name":"Line","id":"p621676","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p621677","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p621678","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p621689","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p621683","attributes":{"selected":{"type":"object","name":"Selection","id":"p621684","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p621685"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p621690","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p621691"}}},"glyph":{"type":"object","name":"Line","id":"p621686","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p621687","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p621688","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p621628","attributes":{"tools":[{"id":"p621641"},{"id":"p621642"},{"id":"p621643"},{"id":"p621651"},{"type":"object","name":"SaveTool","id":"p621652"},{"id":"p621693"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p621636","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p621637","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p621638"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p621639"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p621631","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p621632","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p621633"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p621634"}}}],"center":[{"type":"object","name":"Grid","id":"p621635","attributes":{"axis":{"id":"p621631"}}},{"type":"object","name":"Grid","id":"p621640","attributes":{"dimension":1,"axis":{"id":"p621636"}}},{"type":"object","name":"Legend","id":"p621671","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p621672","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p621668"}]}},{"type":"object","name":"LegendItem","id":"p621682","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p621679"}]}},{"type":"object","name":"LegendItem","id":"p621692","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p621689"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p621694","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p621704","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p621696"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p621705"},"y_scale":{"type":"object","name":"LinearScale","id":"p621706"},"title":{"type":"object","name":"Title","id":"p621697","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p621735","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p621729","attributes":{"selected":{"type":"object","name":"Selection","id":"p621730","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p621731"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L////eXTF5h//v///j+Q0vtj5w5syb81CL7uLVbr62cNMd+9bUob5sLC+yFlJSYUs7MtWfAYQ4AlPCK9mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p621736","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p621737"}}},"glyph":{"type":"object","name":"Line","id":"p621732","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p621733","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p621734","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p621744","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p621738","attributes":{"selected":{"type":"object","name":"Selection","id":"p621739","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p621740"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L////eXTF5h//v///j+Q0vtj5w5syb81CL7uLVbr62cNMd+9bUob5sLC+yFlJSYUs7MtWfAYQ4AlPCK9mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p621745","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p621746"}}},"glyph":{"type":"object","name":"Line","id":"p621741","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p621742","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p621743","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p621755","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p621749","attributes":{"selected":{"type":"object","name":"Selection","id":"p621750","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p621751"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L////eXTF5h//v///j+Q0vtj5w5syb81CL7uLVbr62cNMd+9bUob5sLC+yFlJSYUs7MtWfAYQ4AlPCK9mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p621756","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p621757"}}},"glyph":{"type":"object","name":"Line","id":"p621752","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p621753","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p621754","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p621765","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p621759","attributes":{"selected":{"type":"object","name":"Selection","id":"p621760","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p621761"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p621766","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p621767"}}},"glyph":{"type":"object","name":"Line","id":"p621762","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p621763","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p621764","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p621703","attributes":{"tools":[{"id":"p621717"},{"id":"p621718"},{"id":"p621719"},{"id":"p621727"},{"type":"object","name":"SaveTool","id":"p621728"},{"id":"p621769"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p621712","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p621713","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p621714"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p621715"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p621707","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p621708"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p621709"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p621710"}}}],"center":[{"type":"object","name":"Grid","id":"p621711","attributes":{"axis":{"id":"p621707"}}},{"type":"object","name":"Grid","id":"p621716","attributes":{"dimension":1,"axis":{"id":"p621712"}}},{"type":"object","name":"Legend","id":"p621747","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p621748","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p621744"}]}},{"type":"object","name":"LegendItem","id":"p621758","attributes":{"label":{"type":"value","value":"Median Year (1924)"},"renderers":[{"id":"p621755"}]}},{"type":"object","name":"LegendItem","id":"p621768","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p621765"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p621780","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"9eb9f906-24d2-4595-9e0e-914dcfbad395","roots":{"p621781":"c72a8882-1430-43a7-96ee-04eb28a9014e"},"root_ids":["p621781"]}];
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