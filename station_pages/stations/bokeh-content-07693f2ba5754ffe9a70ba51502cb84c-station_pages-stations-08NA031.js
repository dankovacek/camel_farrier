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
    
    
    const element = document.getElementById("e35dbb47-fd17-4dc7-be9f-08310100727a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e35dbb47-fd17-4dc7-be9f-08310100727a' but no matching script tag was found.")
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
                  const docs_json = '{"e8aebb1d-513a-4004-af6b-4d37cb63728c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p461100","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p461101"}}},"roots":[{"type":"object","name":"Column","id":"p461264","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p461261","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p461260","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p461253","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p461124"},{"type":"object","name":"PanTool","id":"p461200"}]}},{"type":"object","name":"ToolProxy","id":"p461254","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p461125","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p461201","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p461255","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p461126","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p461127","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p461133","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p461132","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p461202","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p461203","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p461209","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p461208","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p461256","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p461134"},{"type":"object","name":"ResetTool","id":"p461210"}]}},{"type":"object","name":"SaveTool","id":"p461257"},{"type":"object","name":"ToolProxy","id":"p461258","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p461176","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p461259","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p461252","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p461102","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p461103"},"y_range":{"type":"object","name":"DataRange1d","id":"p461104"},"x_scale":{"type":"object","name":"LinearScale","id":"p461112"},"y_scale":{"type":"object","name":"LogScale","id":"p461113"},"title":{"type":"object","name":"Title","id":"p461105","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p461142","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461136","attributes":{"selected":{"type":"object","name":"Selection","id":"p461137","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461138"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3///+kskr7P/+//9ezXCF/e///+P7Dy21//P/v/3DqiUk07/+/5/vum2x/Y////+v/LiIavRnoDuLMhbaD1caGG77y/bNt0enPwHjgWPNHPtRmr7hAIwHd9O4Wfbfgel55syZ9gBjX3olKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461143","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461144"}}},"glyph":{"type":"object","name":"Line","id":"p461139","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461140","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p461141","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p461151","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461145","attributes":{"selected":{"type":"object","name":"Selection","id":"p461146","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461147"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3///+kskr7P/+//9ezXCF/e///+P7Dy21//P/v/3DqiUk07/+/5/vum2x/Y////+v/LiIavRnoDuLMhbaD1caGG77y/bNt0enPwHjgWPNHPtRmr7hAIwHd9O4Wfbfgel55syZ9gBjX3olKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461152","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461153"}}},"glyph":{"type":"object","name":"Line","id":"p461148","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461149","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p461150","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p461162","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461156","attributes":{"selected":{"type":"object","name":"Selection","id":"p461157","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461158"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y3Q2y4DQRzAYeLKnUQikbggRAgRhzqXTquqJ7XnXS/AM/FMPIhHcCem39w03fnm99+dz4//9dP5jL+/nbO4lsL8/3JYiGslzJ+vhve3/7Vmfz18xbXBbYaY+djit8N33N9xbpfbc34/tGL4QOcwxPzbEXfs/LHuif1T/TOuxbV0z8270L/krrgr7pq74W7DYvzetvdpm3tn7r25Hb3gfNAN9rvOdbme8z2uxz14jweuz/W5PvfIPXIDcwfcwPs/mfvEDfWG3FBvpDfixnpjbqw34SbuZao3dT9TvWdzn/Vm3Exvxr3ovXCJ54n5if3EuYRLuVQ3NS/lUi7jMi7Ty7iMy7nc3JzLuZwr3EOhV5hbcAVX6pVcqVdyJVdxlbkVV3EVV5tbc7W5tXuvuUavMbfRa/Qa7jX8AVJyFQToAwAA"},"shape":[125],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3///+kskr7H/9/19vy7Xc/s////YPq5ZQjf7x////lR8X2dOa/gz0R1HGQvtRGjUcgPG6v2zffFD8YqU/AeObY80c+1F6eIXD9///58+cOdMeRgMA0k+70ugDAAA="},"shape":[125],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461163","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461164"}}},"glyph":{"type":"object","name":"Line","id":"p461159","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461160","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p461161","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p461172","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461166","attributes":{"selected":{"type":"object","name":"Selection","id":"p461167","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461168"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p461173","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461174"}}},"glyph":{"type":"object","name":"Line","id":"p461169","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461170","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p461171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p461111","attributes":{"tools":[{"id":"p461124"},{"id":"p461125"},{"id":"p461126"},{"id":"p461134"},{"type":"object","name":"SaveTool","id":"p461135"},{"id":"p461176"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p461119","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p461120","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p461121"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p461122"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p461114","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p461115","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p461116"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p461117"}}}],"center":[{"type":"object","name":"Grid","id":"p461118","attributes":{"axis":{"id":"p461114"}}},{"type":"object","name":"Grid","id":"p461123","attributes":{"dimension":1,"axis":{"id":"p461119"}}},{"type":"object","name":"Legend","id":"p461154","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p461155","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p461151"}]}},{"type":"object","name":"LegendItem","id":"p461165","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p461162"}]}},{"type":"object","name":"LegendItem","id":"p461175","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p461172"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p461177","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p461187","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p461179"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p461188"},"y_scale":{"type":"object","name":"LinearScale","id":"p461189"},"title":{"type":"object","name":"Title","id":"p461180","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p461218","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461212","attributes":{"selected":{"type":"object","name":"Selection","id":"p461213","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461214"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73///+kskr7H///x/ff2ip/ZEzZ9aEn1pkH7d267WVk+bYr74W5W1zYYG9kJISU8qZufbo+mF8AJTwivZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461219","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461220"}}},"glyph":{"type":"object","name":"Line","id":"p461215","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461216","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p461217","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p461227","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461221","attributes":{"selected":{"type":"object","name":"Selection","id":"p461222","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461223"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73///+kskr7H///x/ff2ip/ZEzZ9aEn1pkH7d267WVk+bYr74W5W1zYYG9kJISU8qZufbo+mF8AJTwivZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461228","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461229"}}},"glyph":{"type":"object","name":"Line","id":"p461224","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461225","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p461226","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p461238","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461232","attributes":{"selected":{"type":"object","name":"Selection","id":"p461233","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461234"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73///+kskr7H///x/ff2ip/ZEzZ9aEn1pkH7d267WVk+bYr74W5W1zYYG9kJISU8qZufbo+mF8AJTwivZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461239","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461240"}}},"glyph":{"type":"object","name":"Line","id":"p461235","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461236","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p461237","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p461248","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461242","attributes":{"selected":{"type":"object","name":"Selection","id":"p461243","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461244"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p461249","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461250"}}},"glyph":{"type":"object","name":"Line","id":"p461245","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p461246","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p461247","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p461186","attributes":{"tools":[{"id":"p461200"},{"id":"p461201"},{"id":"p461202"},{"id":"p461210"},{"type":"object","name":"SaveTool","id":"p461211"},{"id":"p461252"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p461195","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p461196","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p461197"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p461198"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p461190","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p461191"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p461192"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p461193"}}}],"center":[{"type":"object","name":"Grid","id":"p461194","attributes":{"axis":{"id":"p461190"}}},{"type":"object","name":"Grid","id":"p461199","attributes":{"dimension":1,"axis":{"id":"p461195"}}},{"type":"object","name":"Legend","id":"p461230","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p461231","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p461227"}]}},{"type":"object","name":"LegendItem","id":"p461241","attributes":{"label":{"type":"value","value":"Median Year (1924)"},"renderers":[{"id":"p461238"}]}},{"type":"object","name":"LegendItem","id":"p461251","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p461248"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p461263","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"e8aebb1d-513a-4004-af6b-4d37cb63728c","roots":{"p461264":"e35dbb47-fd17-4dc7-be9f-08310100727a"},"root_ids":["p461264"]}];
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