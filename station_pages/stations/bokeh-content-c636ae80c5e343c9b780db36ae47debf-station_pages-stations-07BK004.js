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
    
    
    const element = document.getElementById("e0c6a6d3-00f8-42b3-903b-f43a822f472d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e0c6a6d3-00f8-42b3-903b-f43a822f472d' but no matching script tag was found.")
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
                  const docs_json = '{"df1544d7-3789-44eb-8a16-0421b0633b63":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p34421","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p34422"}}},"roots":[{"type":"object","name":"Column","id":"p34585","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p34582","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p34581","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p34574","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p34445"},{"type":"object","name":"PanTool","id":"p34521"}]}},{"type":"object","name":"ToolProxy","id":"p34575","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p34446","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p34522","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p34576","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p34447","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p34448","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p34454","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p34453","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p34523","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p34524","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p34530","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p34529","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p34577","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p34455"},{"type":"object","name":"ResetTool","id":"p34531"}]}},{"type":"object","name":"SaveTool","id":"p34578"},{"type":"object","name":"ToolProxy","id":"p34579","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p34497","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p34580","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p34573","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p34423","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p34424"},"y_range":{"type":"object","name":"DataRange1d","id":"p34425"},"x_scale":{"type":"object","name":"LinearScale","id":"p34433"},"y_scale":{"type":"object","name":"LogScale","id":"p34434"},"title":{"type":"object","name":"Title","id":"p34426","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p34463","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p34457","attributes":{"selected":{"type":"object","name":"Selection","id":"p34458","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p34459"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEjoP/TUngEHvc79YdTN8qf2s2bO5Nxc/cTeluv64wk7Htt7PKz6stnmMUhfgy0XCs3gHfnIPi0tjS0r6yFI3uG+P13oD4E7HoDsW3BEgXj6YZXIO9Yb9+13yLWu7uC5b88IdO+WE/copice+qrxQOCefbXIOvaVvnfsjY2NDxvMvGWvEdOf1PLhBigcm7VMr4P5nwuv2n/ViLlf7nrF/v///0C1l+1fB+44l8x2CeSOBypsF+H0d42YfM6fF0DmXT5z5oL9mTNn1lydcMF+xsyZkaaOF0D65x9RQNBA8ZlPPp23j+k/1Lqz4zw4fN7WnAe7Z1nleXugdKWuIli8QezmOZx0gS2X+4+l5+wNgRrPWp+z//f///0qEcL0lcUFf51/nbVf7/6QK37GGXsTY+PJpYWnQe71/CNx2v4v0L3uD09RTDe9Djwx9fwpsPtCDU6B3Gcft+skTvr0mTM1D+actF9cYPvqVPpJ+wmHvnKckzxpz3198YWQgydA4Z1guQVBAwBz5Dm7KAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p34464","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p34465"}}},"glyph":{"type":"object","name":"Line","id":"p34460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p34461","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p34462","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p34472","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p34466","attributes":{"selected":{"type":"object","name":"Selection","id":"p34467","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p34468"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEjoP/TUngEHvc79YdTN8qf2s2bO5Nxc/cTeluv64wk7Htt7PKz6stnmMUhfgy0XCs3gHfnIPi0tjS0r6yFI3uG+P13oD4E7HoDsW3BEgXj6YZXIO9Yb9+13yLWu7uC5b88IdO+WE/copice+qrxQOCefbXIOvaVvnfsjY2NDxvMvGWvEdOf1PLhBigcm7VMr4P5nwuv2n/ViLlf7nrF/v///0C1l+1fB+44l8x2CeSOBypsF+H0d42YfM6fF0DmXT5z5oL9mTNn1lydcMF+xsyZkaaOF0D65x9RQNBA8ZlPPp23j+k/1Lqz4zw4fN7WnAe7Z1nleXugdKWuIli8QezmOZx0gS2X+4+l5+wNgRrPWp+z//f///0qEcL0lcUFf51/nbVf7/6QK37GGXsTY+PJpYWnQe71/CNx2v4v0L3uD09RTDe9Djwx9fwpsPtCDU6B3Gcft+skTvr0mTM1D+actF9cYPvqVPpJ+wmHvnKckzxpz3198YWQgydA4Z1guQVBAwBz5Dm7KAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p34473","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p34474"}}},"glyph":{"type":"object","name":"Line","id":"p34469","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p34470","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p34471","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p34483","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p34477","attributes":{"selected":{"type":"object","name":"Selection","id":"p34478","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p34479"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xO65Z2hv/CvvRCY5nXoe2wBRGIOEL6sgw9QdG+LElRczeFCnFM151tNqLyuwyowMICqM3J4q7pl+oU4E6h6MweQ7m9CFlB9lg5FMscLZY5bQ/XbOoBUO1XbQ81xcAAaDjTBEWqek4MsSHmhM9RcF4d9QNNuebtCzXdziAc5R9Udao+HAwMYeELt83RYBLL+lhfUXm8HsPItPlD7fR2egLzb5wd1hz9E3iQA6p4AB2FQuCgGQt0V6AAOHr4gqPuCIPp+B0HdGezQCnLei2Coe0McwkKB4GoI1N2hDmogDx8Khbo/zOE7KKDXh0H9Ee4A9u6ccKh/IhxmgIKnMwLqr0gHAFcVN9KwAQAA"},"shape":[54],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEjoP/TUngFBH5j7/jGI32DLhUI73Pd/CBInl15wROEBSD9WmhFo7pYT9+yJpYHmHJBrvW3///9/+Q1FN8DmSulfBfHtjY0vg8x5oMJ2EU4DxeMtt1wAyc8/ooCgQfre1pwH64fSDWI3z4H9j0z/+///fpXIOXtcNMQ9p+3/As13f3iKaBponn3crpMgc1FooHkJAhEnQe5PsNxyAk4DAN1u3N6wAQAA"},"shape":[54],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p34484","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p34485"}}},"glyph":{"type":"object","name":"Line","id":"p34480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p34481","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p34482","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p34493","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p34487","attributes":{"selected":{"type":"object","name":"Selection","id":"p34488","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p34489"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p34494","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p34495"}}},"glyph":{"type":"object","name":"Line","id":"p34490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p34491","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p34492","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p34432","attributes":{"tools":[{"id":"p34445"},{"id":"p34446"},{"id":"p34447"},{"id":"p34455"},{"type":"object","name":"SaveTool","id":"p34456"},{"id":"p34497"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p34440","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p34441","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p34442"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p34443"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p34435","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p34436","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p34437"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p34438"}}}],"center":[{"type":"object","name":"Grid","id":"p34439","attributes":{"axis":{"id":"p34435"}}},{"type":"object","name":"Grid","id":"p34444","attributes":{"dimension":1,"axis":{"id":"p34440"}}},{"type":"object","name":"Legend","id":"p34475","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p34476","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p34472"}]}},{"type":"object","name":"LegendItem","id":"p34486","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p34483"}]}},{"type":"object","name":"LegendItem","id":"p34496","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p34493"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p34498","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p34508","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p34500"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p34509"},"y_scale":{"type":"object","name":"LinearScale","id":"p34510"},"title":{"type":"object","name":"Title","id":"p34501","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p34539","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p34533","attributes":{"selected":{"type":"object","name":"Selection","id":"p34534","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p34535"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKPDpih9xJ++y1W8WWX71kH+dcefb/2wf2MPMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p34540","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p34541"}}},"glyph":{"type":"object","name":"Line","id":"p34536","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p34537","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p34538","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p34548","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p34542","attributes":{"selected":{"type":"object","name":"Selection","id":"p34543","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p34544"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKPDpih9xJ++y1W8WWX71kH+dcefb/2wf2MPMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p34549","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p34550"}}},"glyph":{"type":"object","name":"Line","id":"p34545","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p34546","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p34547","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p34559","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p34553","attributes":{"selected":{"type":"object","name":"Selection","id":"p34554","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p34555"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKPDpih9xJ++y1W8WWX71kH+dcefb/2wf2MPMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p34560","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p34561"}}},"glyph":{"type":"object","name":"Line","id":"p34556","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p34557","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p34558","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p34569","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p34563","attributes":{"selected":{"type":"object","name":"Selection","id":"p34564","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p34565"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p34570","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p34571"}}},"glyph":{"type":"object","name":"Line","id":"p34566","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p34567","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p34568","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p34507","attributes":{"tools":[{"id":"p34521"},{"id":"p34522"},{"id":"p34523"},{"id":"p34531"},{"type":"object","name":"SaveTool","id":"p34532"},{"id":"p34573"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p34516","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p34517","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p34518"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p34519"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p34511","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p34512"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p34513"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p34514"}}}],"center":[{"type":"object","name":"Grid","id":"p34515","attributes":{"axis":{"id":"p34511"}}},{"type":"object","name":"Grid","id":"p34520","attributes":{"dimension":1,"axis":{"id":"p34516"}}},{"type":"object","name":"Legend","id":"p34551","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p34552","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p34548"}]}},{"type":"object","name":"LegendItem","id":"p34562","attributes":{"label":{"type":"value","value":"Median Year (1922)"},"renderers":[{"id":"p34559"}]}},{"type":"object","name":"LegendItem","id":"p34572","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p34569"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p34584","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"df1544d7-3789-44eb-8a16-0421b0633b63","roots":{"p34585":"e0c6a6d3-00f8-42b3-903b-f43a822f472d"},"root_ids":["p34585"]}];
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