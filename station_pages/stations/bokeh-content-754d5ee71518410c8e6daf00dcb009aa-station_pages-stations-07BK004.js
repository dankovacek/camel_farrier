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
    
    
    const element = document.getElementById("ab29964a-f9e3-4409-a726-ef0a08dbf088");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ab29964a-f9e3-4409-a726-ef0a08dbf088' but no matching script tag was found.")
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
                  const docs_json = '{"1d124594-5e65-4e69-a8c9-7a731b581f06":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p228223","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p228224"}}},"roots":[{"type":"object","name":"Column","id":"p228387","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p228384","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p228383","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p228376","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p228247"},{"type":"object","name":"PanTool","id":"p228323"}]}},{"type":"object","name":"ToolProxy","id":"p228377","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p228248","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p228324","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p228378","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p228249","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p228250","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p228256","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p228255","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p228325","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p228326","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p228332","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p228331","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p228379","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p228257"},{"type":"object","name":"ResetTool","id":"p228333"}]}},{"type":"object","name":"SaveTool","id":"p228380"},{"type":"object","name":"ToolProxy","id":"p228381","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p228299","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p228382","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p228375","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p228225","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p228226"},"y_range":{"type":"object","name":"DataRange1d","id":"p228227"},"x_scale":{"type":"object","name":"LinearScale","id":"p228235"},"y_scale":{"type":"object","name":"LogScale","id":"p228236"},"title":{"type":"object","name":"Title","id":"p228228","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p228265","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228259","attributes":{"selected":{"type":"object","name":"Selection","id":"p228260","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228261"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEjoP/TUngEHvc79YdTN8qf2s2bO5Nxc/cTeluv64wk7Htt7PKz6stnmMUhfgy0XCs3gHfnIPi0tjS0r6yFI3uG+P13oD4E7HoDsW3BEgXj6YZXIO9Yb9+13yLWu7uC5b88IdO+WE/copice+qrxQOCefbXIOvaVvnfsjY2NDxvMvGWvEdOf1PLhBigcm7VMr4P5nwuv2n/ViLlf7nrF/v///0C1l+1fB+44l8x2CeSOBypsF+H0d42YfM6fF0DmXT5z5oL9mTNn1lydcMF+xsyZkaaOF0D65x9RQNBA8ZlPPp23j+k/1Lqz4zw4fN7WnAe7Z1nleXugdKWuIli8QezmOZx0gS2X+4+l5+wNgRrPWp+z//f///0qEcL0lcUFf51/nbVf7/6QK37GGXsTY+PJpYWnQe71/CNx2v4v0L3uD09RTDe9Djwx9fwpsPtCDU6B3Gcft+skTvr0mTM1D+actF9cYPvqVPpJ+wmHvnKckzxpz3198YWQgydA4Z1guQVBAwBz5Dm7KAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p228266","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228267"}}},"glyph":{"type":"object","name":"Line","id":"p228262","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p228263","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p228264","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p228274","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228268","attributes":{"selected":{"type":"object","name":"Selection","id":"p228269","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228270"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEjoP/TUngEHvc79YdTN8qf2s2bO5Nxc/cTeluv64wk7Htt7PKz6stnmMUhfgy0XCs3gHfnIPi0tjS0r6yFI3uG+P13oD4E7HoDsW3BEgXj6YZXIO9Yb9+13yLWu7uC5b88IdO+WE/copice+qrxQOCefbXIOvaVvnfsjY2NDxvMvGWvEdOf1PLhBigcm7VMr4P5nwuv2n/ViLlf7nrF/v///0C1l+1fB+44l8x2CeSOBypsF+H0d42YfM6fF0DmXT5z5oL9mTNn1lydcMF+xsyZkaaOF0D65x9RQNBA8ZlPPp23j+k/1Lqz4zw4fN7WnAe7Z1nleXugdKWuIli8QezmOZx0gS2X+4+l5+wNgRrPWp+z//f///0qEcL0lcUFf51/nbVf7/6QK37GGXsTY+PJpYWnQe71/CNx2v4v0L3uD09RTDe9Djwx9fwpsPtCDU6B3Gcft+skTvr0mTM1D+actF9cYPvqVPpJ+wmHvnKckzxpz3198YWQgydA4Z1guQVBAwBz5Dm7KAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p228275","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228276"}}},"glyph":{"type":"object","name":"Line","id":"p228271","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p228272","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p228273","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p228285","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228279","attributes":{"selected":{"type":"object","name":"Selection","id":"p228280","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228281"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xO65Z2hv/CvvRCY5nXoe2wBRGIOEL6sgw9QdG+LElRczeFCnFM151tNqLyuwyowMICqM3J4q7pl+oU4E6h6MweQ7m9CFlB9lg5FMscLZY5bQ/XbOoBUO1XbQ81xcAAaDjTBEWqek4MsSHmhM9RcF4d9QNNuebtCzXdziAc5R9Udao+HAwMYeELt83RYBLL+lhfUXm8HsPItPlD7fR2egLzb5wd1hz9E3iQA6p4AB2FQuCgGQt0V6AAOHr4gqPuCIPp+B0HdGezQCnLei2Coe0McwkKB4GoI1N2hDmogDx8Khbo/zOE7KKDXh0H9Ee4A9u6ccKh/IhxmgIKnMwLqr0gHAFcVN9KwAQAA"},"shape":[54],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEjoP/TUngFBH5j7/jGI32DLhUI73Pd/CBInl15wROEBSD9WmhFo7pYT9+yJpYHmHJBrvW3///9/+Q1FN8DmSulfBfHtjY0vg8x5oMJ2EU4DxeMtt1wAyc8/ooCgQfre1pwH64fSDWI3z4H9j0z/+///fpXIOXtcNMQ9p+3/As13f3iKaBponn3crpMgc1FooHkJAhEnQe5PsNxyAk4DAN1u3N6wAQAA"},"shape":[54],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p228286","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228287"}}},"glyph":{"type":"object","name":"Line","id":"p228282","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p228283","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p228284","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p228295","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228289","attributes":{"selected":{"type":"object","name":"Selection","id":"p228290","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228291"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p228296","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228297"}}},"glyph":{"type":"object","name":"Line","id":"p228292","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p228293","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p228294","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p228234","attributes":{"tools":[{"id":"p228247"},{"id":"p228248"},{"id":"p228249"},{"id":"p228257"},{"type":"object","name":"SaveTool","id":"p228258"},{"id":"p228299"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p228242","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p228243","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p228244"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p228245"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p228237","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p228238","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p228239"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p228240"}}}],"center":[{"type":"object","name":"Grid","id":"p228241","attributes":{"axis":{"id":"p228237"}}},{"type":"object","name":"Grid","id":"p228246","attributes":{"dimension":1,"axis":{"id":"p228242"}}},{"type":"object","name":"Legend","id":"p228277","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p228278","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p228274"}]}},{"type":"object","name":"LegendItem","id":"p228288","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p228285"}]}},{"type":"object","name":"LegendItem","id":"p228298","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p228295"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p228300","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p228310","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p228302"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p228311"},"y_scale":{"type":"object","name":"LinearScale","id":"p228312"},"title":{"type":"object","name":"Title","id":"p228303","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p228341","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228335","attributes":{"selected":{"type":"object","name":"Selection","id":"p228336","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228337"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKPDpih9xJ++y1W8WWX71kH+dcefb/2wf2MPMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p228342","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228343"}}},"glyph":{"type":"object","name":"Line","id":"p228338","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p228339","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p228340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p228350","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228344","attributes":{"selected":{"type":"object","name":"Selection","id":"p228345","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228346"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKPDpih9xJ++y1W8WWX71kH+dcefb/2wf2MPMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p228351","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228352"}}},"glyph":{"type":"object","name":"Line","id":"p228347","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p228348","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p228349","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p228361","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228355","attributes":{"selected":{"type":"object","name":"Selection","id":"p228356","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228357"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKPDpih9xJ++y1W8WWX71kH+dcefb/2wf2MPMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p228362","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228363"}}},"glyph":{"type":"object","name":"Line","id":"p228358","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p228359","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p228360","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p228371","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p228365","attributes":{"selected":{"type":"object","name":"Selection","id":"p228366","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p228367"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p228372","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p228373"}}},"glyph":{"type":"object","name":"Line","id":"p228368","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p228369","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p228370","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p228309","attributes":{"tools":[{"id":"p228323"},{"id":"p228324"},{"id":"p228325"},{"id":"p228333"},{"type":"object","name":"SaveTool","id":"p228334"},{"id":"p228375"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p228318","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p228319","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p228320"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p228321"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p228313","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p228314"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p228315"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p228316"}}}],"center":[{"type":"object","name":"Grid","id":"p228317","attributes":{"axis":{"id":"p228313"}}},{"type":"object","name":"Grid","id":"p228322","attributes":{"dimension":1,"axis":{"id":"p228318"}}},{"type":"object","name":"Legend","id":"p228353","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p228354","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p228350"}]}},{"type":"object","name":"LegendItem","id":"p228364","attributes":{"label":{"type":"value","value":"Median Year (1922)"},"renderers":[{"id":"p228361"}]}},{"type":"object","name":"LegendItem","id":"p228374","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p228371"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p228386","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"1d124594-5e65-4e69-a8c9-7a731b581f06","roots":{"p228387":"ab29964a-f9e3-4409-a726-ef0a08dbf088"},"root_ids":["p228387"]}];
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