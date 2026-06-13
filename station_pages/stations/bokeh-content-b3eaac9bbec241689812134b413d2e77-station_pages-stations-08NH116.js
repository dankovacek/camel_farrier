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
    
    
    const element = document.getElementById("db2c1916-a186-4b5b-a5f4-a89acfced5e6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'db2c1916-a186-4b5b-a5f4-a89acfced5e6' but no matching script tag was found.")
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
                  const docs_json = '{"9f25e3d6-8fb0-4190-ba80-215e95e70a25":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p579582","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p579583"}}},"roots":[{"type":"object","name":"Column","id":"p579764","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p579761","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p579760","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p579753","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p579606"},{"type":"object","name":"PanTool","id":"p579691"}]}},{"type":"object","name":"ToolProxy","id":"p579754","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p579607","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p579692","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p579755","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p579608","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p579609","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p579615","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p579614","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p579693","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p579694","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p579700","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p579699","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p579756","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p579616"},{"type":"object","name":"ResetTool","id":"p579701"}]}},{"type":"object","name":"SaveTool","id":"p579757"},{"type":"object","name":"ToolProxy","id":"p579758","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p579667","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p579759","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p579752","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p579584","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p579585"},"y_range":{"type":"object","name":"DataRange1d","id":"p579586"},"x_scale":{"type":"object","name":"LinearScale","id":"p579594"},"y_scale":{"type":"object","name":"LogScale","id":"p579595"},"title":{"type":"object","name":"Title","id":"p579587","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p579624","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p579618","attributes":{"selected":{"type":"object","name":"Selection","id":"p579619","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p579620"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QG+19Q+r1GzPkbTg32S6pE/OIdq+yn//9v/7CqhGiaIy1tG6tQib0g1/XV9r8LoeYWkE1vO3OmR1cx397Klit84ecs+23//+8vmZwxStM5HM5cW+zxnyXdXsbYWLn4ehI0PhOIpoNmzixUjYix35KaJsb7N9heGJzeAoYMDQAudbgxKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p579625","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p579626"}}},"glyph":{"type":"object","name":"Line","id":"p579621","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p579622","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p579623","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p579633","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p579627","attributes":{"selected":{"type":"object","name":"Selection","id":"p579628","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p579629"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvfAoPRoOo+kAZz4AAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p579634","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p579635"}}},"glyph":{"type":"object","name":"Line","id":"p579630","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p579631","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p579632","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p579642","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p579636","attributes":{"selected":{"type":"object","name":"Selection","id":"p579637","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p579638"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7vz///s6XlF9neg9EWNmG4l/yL7zCqRY58i8+xj/v/fXjI5g2j6bGqa3kytDPtrnNeVLwun2e///z/8YVUK2bRCWpqd1spk+yS5VuWUSYn2C/7/v+6blDBK0zkcwq4ttlAzi7dfZmQsPIsj2r7l///zJZMjiKaNzpxZYRkbZp9iZFy9Vj/IXvj///u+SQFDhgYA3g3SGSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p579643","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p579644"}}},"glyph":{"type":"object","name":"Line","id":"p579639","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p579640","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p579641","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p579653","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p579647","attributes":{"selected":{"type":"object","name":"Selection","id":"p579648","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p579649"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2RPUjDUBSF3So4KDpUEBQEiyBEUQyKkh6rsUb7lzQ/7eDWUTfdutVNwcHBwUHo6NixW7tVcOjg0EHo2LFjR9+777wlvOTec8534szGrUVnlnXkOY/d7qT9bC3D3FdRskeNt+I6329CrvYWv2/DTd8+DN0dzln4krPH+X10BpmPu84B9w4h8l2b+0fopzaa094xdU7wrccHp9RzMBSDLHWBexE8o34O054WyNHnHI+ycEE/FwbPpe8llJlayNP/CnNyPObw8KTKGLeumecGEi9VYK4CXixNUGS+EpakqDJzls2cV2HeChTspL3gM7dv9n585g/M/mtAjsDo+FXyVKHKHjVWQnKFiCN1fkPyRZD63yNyRpDfU4/JG0O3mVlLyJ1Aj6f/EvLXIHifNfZQxz8if79cEAIAAA=="},"shape":[66],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QG++n//9s/rCrBSf8CqyuwJ0Rv+/9/f8nkDPuhTkP8mQD1LyYtDA6PAPvhRgMAT7gDRRACAAA="},"shape":[66],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p579654","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p579655"}}},"glyph":{"type":"object","name":"Line","id":"p579650","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p579651","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p579652","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p579663","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p579657","attributes":{"selected":{"type":"object","name":"Selection","id":"p579658","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p579659"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p579664","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p579665"}}},"glyph":{"type":"object","name":"Line","id":"p579660","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p579661","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p579662","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p579593","attributes":{"tools":[{"id":"p579606"},{"id":"p579607"},{"id":"p579608"},{"id":"p579616"},{"type":"object","name":"SaveTool","id":"p579617"},{"id":"p579667"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p579601","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p579602","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p579603"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p579604"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p579596","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p579597","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p579598"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p579599"}}}],"center":[{"type":"object","name":"Grid","id":"p579600","attributes":{"axis":{"id":"p579596"}}},{"type":"object","name":"Grid","id":"p579605","attributes":{"dimension":1,"axis":{"id":"p579601"}}},{"type":"object","name":"Legend","id":"p579645","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p579646","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p579642"}]}},{"type":"object","name":"LegendItem","id":"p579656","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p579653"}]}},{"type":"object","name":"LegendItem","id":"p579666","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p579663"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p579668","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p579678","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p579670"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p579679"},"y_scale":{"type":"object","name":"LinearScale","id":"p579680"},"title":{"type":"object","name":"Title","id":"p579671","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p579709","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p579703","attributes":{"selected":{"type":"object","name":"Selection","id":"p579704","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p579705"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC32lWYDJtCvH/piy56TanUH2MHUH/v+3//0hE87HpR8ARz2hpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p579710","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p579711"}}},"glyph":{"type":"object","name":"Line","id":"p579706","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p579707","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p579708","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p579718","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p579712","attributes":{"selected":{"type":"object","name":"Selection","id":"p579713","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p579714"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFr4///7vkkB9jD16Hx0cwDIebMUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p579719","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p579720"}}},"glyph":{"type":"object","name":"Line","id":"p579715","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p579716","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p579717","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p579727","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p579721","attributes":{"selected":{"type":"object","name":"Selection","id":"p579722","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p579723"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC32lWYDJtCvH/piy56TanUH2wv//3/dNCrA/8P+//e8PmXA+Lv0AJtwRpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p579728","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p579729"}}},"glyph":{"type":"object","name":"Line","id":"p579724","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p579725","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p579726","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p579738","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p579732","attributes":{"selected":{"type":"object","name":"Selection","id":"p579733","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p579734"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC32lWYDJtCvH/piy56TanUH2MHUH/v+3//0hE87HpR8ARz2hpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p579739","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p579740"}}},"glyph":{"type":"object","name":"Line","id":"p579735","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p579736","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p579737","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p579748","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p579742","attributes":{"selected":{"type":"object","name":"Selection","id":"p579743","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p579744"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p579749","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p579750"}}},"glyph":{"type":"object","name":"Line","id":"p579745","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p579746","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p579747","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p579677","attributes":{"tools":[{"id":"p579691"},{"id":"p579692"},{"id":"p579693"},{"id":"p579701"},{"type":"object","name":"SaveTool","id":"p579702"},{"id":"p579752"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p579686","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p579687","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p579688"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p579689"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p579681","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p579682"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p579683"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p579684"}}}],"center":[{"type":"object","name":"Grid","id":"p579685","attributes":{"axis":{"id":"p579681"}}},{"type":"object","name":"Grid","id":"p579690","attributes":{"dimension":1,"axis":{"id":"p579686"}}},{"type":"object","name":"Legend","id":"p579730","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p579731","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p579727"}]}},{"type":"object","name":"LegendItem","id":"p579741","attributes":{"label":{"type":"value","value":"Median Year (1960)"},"renderers":[{"id":"p579738"}]}},{"type":"object","name":"LegendItem","id":"p579751","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p579748"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p579763","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"9f25e3d6-8fb0-4190-ba80-215e95e70a25","roots":{"p579764":"db2c1916-a186-4b5b-a5f4-a89acfced5e6"},"root_ids":["p579764"]}];
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