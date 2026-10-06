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
    
    
    const element = document.getElementById("d12bff1a-f3c1-4903-b6b9-d4a50a29b355");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd12bff1a-f3c1-4903-b6b9-d4a50a29b355' but no matching script tag was found.")
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
                  const docs_json = '{"ffdfdf33-b104-4e3e-be19-26c1075f8fbe":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p776002","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p776003"}}},"roots":[{"type":"object","name":"Column","id":"p776184","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p776181","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p776180","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p776173","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p776026"},{"type":"object","name":"PanTool","id":"p776111"}]}},{"type":"object","name":"ToolProxy","id":"p776174","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p776027","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p776112","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p776175","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p776028","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p776029","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p776035","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p776034","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p776113","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p776114","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p776120","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p776119","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p776176","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p776036"},{"type":"object","name":"ResetTool","id":"p776121"}]}},{"type":"object","name":"SaveTool","id":"p776177"},{"type":"object","name":"ToolProxy","id":"p776178","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p776087","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p776179","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p776172","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p776004","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p776005"},"y_range":{"type":"object","name":"DataRange1d","id":"p776006"},"x_scale":{"type":"object","name":"LinearScale","id":"p776014"},"y_scale":{"type":"object","name":"LogScale","id":"p776015"},"title":{"type":"object","name":"Title","id":"p776007","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p776044","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p776038","attributes":{"selected":{"type":"object","name":"Selection","id":"p776039","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p776040"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QG+19Q+r1GzPkbTg32S6pE/OIdq+yn//9v/7CqhGiaIy1tG6tQib0g1/XV9r8LoeYWkE1vO3OmR1cx397Klit84ecs+23//+8vmZwxStM5HM5cW+zxnyXdXsbYWLn4ehI0PhOIpoNmzixUjYix35KaJsb7N9heGJzeAoYMDQAudbgxKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p776045","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p776046"}}},"glyph":{"type":"object","name":"Line","id":"p776041","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p776042","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p776043","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p776053","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p776047","attributes":{"selected":{"type":"object","name":"Selection","id":"p776048","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p776049"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvfAoPRoOo+kAZz4AAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p776054","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p776055"}}},"glyph":{"type":"object","name":"Line","id":"p776050","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p776051","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p776052","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p776062","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p776056","attributes":{"selected":{"type":"object","name":"Selection","id":"p776057","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p776058"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7vz///s6XlF9neg9EWNmG4l/yL7zCqRY58i8+xj/v/fXjI5g2j6bGqa3kytDPtrnNeVLwun2e///z/8YVUK2bRCWpqd1spk+yS5VuWUSYn2C/7/v+6blDBK0zkcwq4ttlAzi7dfZmQsPIsj2r7l///zJZMjiKaNzpxZYRkbZp9iZFy9Vj/IXvj///u+SQFDhgYA3g3SGSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p776063","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p776064"}}},"glyph":{"type":"object","name":"Line","id":"p776059","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p776060","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p776061","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p776073","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p776067","attributes":{"selected":{"type":"object","name":"Selection","id":"p776068","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p776069"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2RPUjDUBSF3So4KDpUEBQEiyBEUQyKkh6rsUb7lzQ/7eDWUTfdutVNwcHBwUHo6NixW7tVcOjg0EHo2LFjR9+777wlvOTec8534szGrUVnlnXkOY/d7qT9bC3D3FdRskeNt+I6329CrvYWv2/DTd8+DN0dzln4krPH+X10BpmPu84B9w4h8l2b+0fopzaa094xdU7wrccHp9RzMBSDLHWBexE8o34O054WyNHnHI+ycEE/FwbPpe8llJlayNP/CnNyPObw8KTKGLeumecGEi9VYK4CXixNUGS+EpakqDJzls2cV2HeChTspL3gM7dv9n585g/M/mtAjsDo+FXyVKHKHjVWQnKFiCN1fkPyRZD63yNyRpDfU4/JG0O3mVlLyJ1Aj6f/EvLXIHifNfZQxz8if79cEAIAAA=="},"shape":[66],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QG++n//9s/rCrBSf8CqyuwJ0Rv+/9/f8nkDPuhTkP8mQD1LyYtDA6PAPvhRgMAT7gDRRACAAA="},"shape":[66],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p776074","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p776075"}}},"glyph":{"type":"object","name":"Line","id":"p776070","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p776071","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p776072","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p776083","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p776077","attributes":{"selected":{"type":"object","name":"Selection","id":"p776078","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p776079"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p776084","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p776085"}}},"glyph":{"type":"object","name":"Line","id":"p776080","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p776081","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p776082","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p776013","attributes":{"tools":[{"id":"p776026"},{"id":"p776027"},{"id":"p776028"},{"id":"p776036"},{"type":"object","name":"SaveTool","id":"p776037"},{"id":"p776087"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p776021","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p776022","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p776023"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p776024"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p776016","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p776017","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p776018"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p776019"}}}],"center":[{"type":"object","name":"Grid","id":"p776020","attributes":{"axis":{"id":"p776016"}}},{"type":"object","name":"Grid","id":"p776025","attributes":{"dimension":1,"axis":{"id":"p776021"}}},{"type":"object","name":"Legend","id":"p776065","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p776066","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p776062"}]}},{"type":"object","name":"LegendItem","id":"p776076","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p776073"}]}},{"type":"object","name":"LegendItem","id":"p776086","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p776083"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p776088","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p776098","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p776090"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p776099"},"y_scale":{"type":"object","name":"LinearScale","id":"p776100"},"title":{"type":"object","name":"Title","id":"p776091","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p776129","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p776123","attributes":{"selected":{"type":"object","name":"Selection","id":"p776124","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p776125"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC32lWYDJtCvH/piy56TanUH2MHUH/v+3//0hE87HpR8ARz2hpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p776130","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p776131"}}},"glyph":{"type":"object","name":"Line","id":"p776126","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p776127","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p776128","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p776138","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p776132","attributes":{"selected":{"type":"object","name":"Selection","id":"p776133","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p776134"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFr4///7vkkB9jD16Hx0cwDIebMUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p776139","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p776140"}}},"glyph":{"type":"object","name":"Line","id":"p776135","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p776136","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p776137","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p776147","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p776141","attributes":{"selected":{"type":"object","name":"Selection","id":"p776142","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p776143"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC32lWYDJtCvH/piy56TanUH2wv//3/dNCrA/8P+//e8PmXA+Lv0AJtwRpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p776148","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p776149"}}},"glyph":{"type":"object","name":"Line","id":"p776144","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p776145","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p776146","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p776158","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p776152","attributes":{"selected":{"type":"object","name":"Selection","id":"p776153","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p776154"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC32lWYDJtCvH/piy56TanUH2MHUH/v+3//0hE87HpR8ARz2hpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p776159","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p776160"}}},"glyph":{"type":"object","name":"Line","id":"p776155","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p776156","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p776157","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p776168","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p776162","attributes":{"selected":{"type":"object","name":"Selection","id":"p776163","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p776164"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p776169","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p776170"}}},"glyph":{"type":"object","name":"Line","id":"p776165","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p776166","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p776167","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p776097","attributes":{"tools":[{"id":"p776111"},{"id":"p776112"},{"id":"p776113"},{"id":"p776121"},{"type":"object","name":"SaveTool","id":"p776122"},{"id":"p776172"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p776106","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p776107","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p776108"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p776109"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p776101","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p776102"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p776103"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p776104"}}}],"center":[{"type":"object","name":"Grid","id":"p776105","attributes":{"axis":{"id":"p776101"}}},{"type":"object","name":"Grid","id":"p776110","attributes":{"dimension":1,"axis":{"id":"p776106"}}},{"type":"object","name":"Legend","id":"p776150","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p776151","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p776147"}]}},{"type":"object","name":"LegendItem","id":"p776161","attributes":{"label":{"type":"value","value":"Median Year (1960)"},"renderers":[{"id":"p776158"}]}},{"type":"object","name":"LegendItem","id":"p776171","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p776168"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p776183","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"ffdfdf33-b104-4e3e-be19-26c1075f8fbe","roots":{"p776184":"d12bff1a-f3c1-4903-b6b9-d4a50a29b355"},"root_ids":["p776184"]}];
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