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
    
    
    const element = document.getElementById("ee956770-2e81-4c5e-acb3-430cd668f08d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ee956770-2e81-4c5e-acb3-430cd668f08d' but no matching script tag was found.")
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
                  const docs_json = '{"cb544552-731c-4b4d-9baf-e238a4faa447":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p578711","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p578712"}}},"roots":[{"type":"object","name":"Column","id":"p578893","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p578890","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p578889","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p578882","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p578735"},{"type":"object","name":"PanTool","id":"p578820"}]}},{"type":"object","name":"ToolProxy","id":"p578883","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p578736","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p578821","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p578884","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p578737","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p578738","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p578744","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p578743","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p578822","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p578823","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p578829","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p578828","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p578885","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p578745"},{"type":"object","name":"ResetTool","id":"p578830"}]}},{"type":"object","name":"SaveTool","id":"p578886"},{"type":"object","name":"ToolProxy","id":"p578887","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p578796","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p578888","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p578881","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p578713","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p578714"},"y_range":{"type":"object","name":"DataRange1d","id":"p578715"},"x_scale":{"type":"object","name":"LinearScale","id":"p578723"},"y_scale":{"type":"object","name":"LogScale","id":"p578724"},"title":{"type":"object","name":"Title","id":"p578716","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p578753","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578747","attributes":{"selected":{"type":"object","name":"Selection","id":"p578748","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578749"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QG+19Q+r1GzPkbTg32S6pE/OIdq+yn//9v/7CqhGiaIy1tG6tQib0g1/XV9r8LoeYWkE1vO3OmR1cx397Klit84ecs+23//+8vmZwxStM5HM5cW+zxnyXdXsbYWLn4ehI0PhOIpoNmzixUjYix35KaJsb7N9heGJzeAoYMDQAudbgxKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578754","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578755"}}},"glyph":{"type":"object","name":"Line","id":"p578750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578751","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p578752","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p578762","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578756","attributes":{"selected":{"type":"object","name":"Selection","id":"p578757","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578758"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xP+//++b1KAvfAoPRoOo+kAZz4AAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578763","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578764"}}},"glyph":{"type":"object","name":"Line","id":"p578759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578760","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p578761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p578771","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578765","attributes":{"selected":{"type":"object","name":"Selection","id":"p578766","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578767"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7vz///s6XlF9neg9EWNmG4l/yL7zCqRY58i8+xj/v/fXjI5g2j6bGqa3kytDPtrnNeVLwun2e///z/8YVUK2bRCWpqd1spk+yS5VuWUSYn2C/7/v+6blDBK0zkcwq4ttlAzi7dfZmQsPIsj2r7l///zJZMjiKaNzpxZYRkbZp9iZFy9Vj/IXvj///u+SQFDhgYA3g3SGSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578772","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578773"}}},"glyph":{"type":"object","name":"Line","id":"p578768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p578770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p578782","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578776","attributes":{"selected":{"type":"object","name":"Selection","id":"p578777","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578778"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2RPUjDUBSF3So4KDpUEBQEiyBEUQyKkh6rsUb7lzQ/7eDWUTfdutVNwcHBwUHo6NixW7tVcOjg0EHo2LFjR9+777wlvOTec8534szGrUVnlnXkOY/d7qT9bC3D3FdRskeNt+I6329CrvYWv2/DTd8+DN0dzln4krPH+X10BpmPu84B9w4h8l2b+0fopzaa094xdU7wrccHp9RzMBSDLHWBexE8o34O054WyNHnHI+ycEE/FwbPpe8llJlayNP/CnNyPObw8KTKGLeumecGEi9VYK4CXixNUGS+EpakqDJzls2cV2HeChTspL3gM7dv9n585g/M/mtAjsDo+FXyVKHKHjVWQnKFiCN1fkPyRZD63yNyRpDfU4/JG0O3mVlLyJ1Aj6f/EvLXIHifNfZQxz8if79cEAIAAA=="},"shape":[66],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QG++n//9s/rCrBSf8CqyuwJ0Rv+/9/f8nkDPuhTkP8mQD1LyYtDA6PAPvhRgMAT7gDRRACAAA="},"shape":[66],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578783","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578784"}}},"glyph":{"type":"object","name":"Line","id":"p578779","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578780","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p578781","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p578792","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578786","attributes":{"selected":{"type":"object","name":"Selection","id":"p578787","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578788"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p578793","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578794"}}},"glyph":{"type":"object","name":"Line","id":"p578789","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578790","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p578791","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p578722","attributes":{"tools":[{"id":"p578735"},{"id":"p578736"},{"id":"p578737"},{"id":"p578745"},{"type":"object","name":"SaveTool","id":"p578746"},{"id":"p578796"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p578730","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p578731","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p578732"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p578733"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p578725","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p578726","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p578727"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p578728"}}}],"center":[{"type":"object","name":"Grid","id":"p578729","attributes":{"axis":{"id":"p578725"}}},{"type":"object","name":"Grid","id":"p578734","attributes":{"dimension":1,"axis":{"id":"p578730"}}},{"type":"object","name":"Legend","id":"p578774","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p578775","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p578771"}]}},{"type":"object","name":"LegendItem","id":"p578785","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p578782"}]}},{"type":"object","name":"LegendItem","id":"p578795","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p578792"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p578797","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p578807","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p578799"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p578808"},"y_scale":{"type":"object","name":"LinearScale","id":"p578809"},"title":{"type":"object","name":"Title","id":"p578800","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p578838","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578832","attributes":{"selected":{"type":"object","name":"Selection","id":"p578833","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578834"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC32lWYDJtCvH/piy56TanUH2MHUH/v+3//0hE87HpR8ARz2hpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578839","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578840"}}},"glyph":{"type":"object","name":"Line","id":"p578835","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578836","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p578837","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p578847","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578841","attributes":{"selected":{"type":"object","name":"Selection","id":"p578842","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578843"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFr4///7vkkB9jD16Hx0cwDIebMUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578848","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578849"}}},"glyph":{"type":"object","name":"Line","id":"p578844","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578845","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p578846","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p578856","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578850","attributes":{"selected":{"type":"object","name":"Selection","id":"p578851","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578852"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC32lWYDJtCvH/piy56TanUH2wv//3/dNCrA/8P+//e8PmXA+Lv0AJtwRpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578857","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578858"}}},"glyph":{"type":"object","name":"Line","id":"p578853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p578855","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p578867","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578861","attributes":{"selected":{"type":"object","name":"Selection","id":"p578862","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578863"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC32lWYDJtCvH/piy56TanUH2MHUH/v+3//0hE87HpR8ARz2hpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578868","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578869"}}},"glyph":{"type":"object","name":"Line","id":"p578864","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578865","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p578866","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p578877","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578871","attributes":{"selected":{"type":"object","name":"Selection","id":"p578872","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578873"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p578878","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578879"}}},"glyph":{"type":"object","name":"Line","id":"p578874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578875","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p578876","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p578806","attributes":{"tools":[{"id":"p578820"},{"id":"p578821"},{"id":"p578822"},{"id":"p578830"},{"type":"object","name":"SaveTool","id":"p578831"},{"id":"p578881"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p578815","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p578816","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p578817"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p578818"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p578810","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p578811"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p578812"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p578813"}}}],"center":[{"type":"object","name":"Grid","id":"p578814","attributes":{"axis":{"id":"p578810"}}},{"type":"object","name":"Grid","id":"p578819","attributes":{"dimension":1,"axis":{"id":"p578815"}}},{"type":"object","name":"Legend","id":"p578859","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p578860","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p578856"}]}},{"type":"object","name":"LegendItem","id":"p578870","attributes":{"label":{"type":"value","value":"Median Year (1960)"},"renderers":[{"id":"p578867"}]}},{"type":"object","name":"LegendItem","id":"p578880","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p578877"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p578892","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"cb544552-731c-4b4d-9baf-e238a4faa447","roots":{"p578893":"ee956770-2e81-4c5e-acb3-430cd668f08d"},"root_ids":["p578893"]}];
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