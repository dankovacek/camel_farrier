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
    
    
    const element = document.getElementById("a2bc32ba-3f1e-4f65-9268-61d2d9a34983");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a2bc32ba-3f1e-4f65-9268-61d2d9a34983' but no matching script tag was found.")
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
                  const docs_json = '{"0f1f4d1f-a72c-4c0a-a675-07652220af77":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p548449","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p548450"}}},"roots":[{"type":"object","name":"Column","id":"p548613","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p548610","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p548609","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p548602","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p548473"},{"type":"object","name":"PanTool","id":"p548549"}]}},{"type":"object","name":"ToolProxy","id":"p548603","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p548474","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p548550","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p548604","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p548475","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p548476","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p548482","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p548481","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p548551","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p548552","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p548558","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p548557","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p548605","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p548483"},{"type":"object","name":"ResetTool","id":"p548559"}]}},{"type":"object","name":"SaveTool","id":"p548606"},{"type":"object","name":"ToolProxy","id":"p548607","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p548525","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p548608","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p548601","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p548451","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p548452"},"y_range":{"type":"object","name":"DataRange1d","id":"p548453"},"x_scale":{"type":"object","name":"LinearScale","id":"p548461"},"y_scale":{"type":"object","name":"LogScale","id":"p548462"},"title":{"type":"object","name":"Title","id":"p548454","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p548491","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p548485","attributes":{"selected":{"type":"object","name":"Selection","id":"p548486","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p548487"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18jjDZJSzNbdDHW/sXpMz3CXIH2wmD/B4zSo+GANR0AAHD7+bIoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p548492","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p548493"}}},"glyph":{"type":"object","name":"Line","id":"p548488","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p548489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p548490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p548500","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p548494","attributes":{"selected":{"type":"object","name":"Selection","id":"p548495","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p548496"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18jjDZJSzNbdDHW/sXpMz3CXIH2wmD/B4zSo+GANR0AAHD7+bIoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p548501","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p548502"}}},"glyph":{"type":"object","name":"Line","id":"p548497","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p548498","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p548499","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p548511","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p548505","attributes":{"selected":{"type":"object","name":"Selection","id":"p548506","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p548507"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SPUgCYRzGG6JoqCWXgqIgkCAl6aIP+3hMzdPsPD/uvKhJaHCyKQjcbDEImmwqGpqChlpsCgKbbAqCNlsaAidrMRp63/eel4eDu/t//J7nTtMrml75WRcXoV6k2g2j3RiCe+9BaPRaaITPx+FvdXytziTfTyF4NyzkZd001BhthvV+3Kgzy74A7mV5cI79Gh7KzXq5Oc85C3j83BVa5LwlPAsao73MuSt4EdX18irnr6F41icE7gEUvhHivhAOurVSt7bBvWF8C3pfK8z9ERwWvEJRckTxK8tLm+SJQeHVY+TS0aNOnHxxHKugEuRMoF8BbZE3ierFu1CS3NsYfJ0QMshvQOEXU/Rh4kTWOyb9mG7fn0lfabf/Kk1/aah4Ihn6zLjzvjL0m4Vad5ql7yw8Mv5Ajv5zsC1x3nLMwcK5tH9kMQ8Lkr46ZjMXG+p3eLKZTx578oPt55lTHpeyYcBhXg4+5O9y6zC3HfwD63qQjHACAAA="},"shape":[78],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+19DlBYGuzvAfpQeGuEAAHN6aQtwAgAA"},"shape":[78],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p548512","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p548513"}}},"glyph":{"type":"object","name":"Line","id":"p548508","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p548509","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p548510","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p548521","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p548515","attributes":{"selected":{"type":"object","name":"Selection","id":"p548516","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p548517"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p548522","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p548523"}}},"glyph":{"type":"object","name":"Line","id":"p548518","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p548519","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p548520","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p548460","attributes":{"tools":[{"id":"p548473"},{"id":"p548474"},{"id":"p548475"},{"id":"p548483"},{"type":"object","name":"SaveTool","id":"p548484"},{"id":"p548525"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p548468","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p548469","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p548470"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p548471"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p548463","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p548464","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p548465"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p548466"}}}],"center":[{"type":"object","name":"Grid","id":"p548467","attributes":{"axis":{"id":"p548463"}}},{"type":"object","name":"Grid","id":"p548472","attributes":{"dimension":1,"axis":{"id":"p548468"}}},{"type":"object","name":"Legend","id":"p548503","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p548504","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p548500"}]}},{"type":"object","name":"LegendItem","id":"p548514","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p548511"}]}},{"type":"object","name":"LegendItem","id":"p548524","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p548521"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p548526","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p548536","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p548528"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p548537"},"y_scale":{"type":"object","name":"LinearScale","id":"p548538"},"title":{"type":"object","name":"Title","id":"p548529","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p548567","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p548561","attributes":{"selected":{"type":"object","name":"Selection","id":"p548562","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p548563"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLrc2mZPpVuwvfD///d9kwLsN/7/rx94K9oel34Aah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p548568","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p548569"}}},"glyph":{"type":"object","name":"Line","id":"p548564","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p548565","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p548566","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p548576","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p548570","attributes":{"selected":{"type":"object","name":"Selection","id":"p548571","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p548572"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLrc2mZPpVuwvfD///d9kwLsN/7/rx94K9oel34Aah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p548577","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p548578"}}},"glyph":{"type":"object","name":"Line","id":"p548573","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p548574","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p548575","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p548587","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p548581","attributes":{"selected":{"type":"object","name":"Selection","id":"p548582","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p548583"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLrc2mZPpVuwvfD///d9kwLsN/7/rx94K9oel34Aah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p548588","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p548589"}}},"glyph":{"type":"object","name":"Line","id":"p548584","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p548585","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p548586","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p548597","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p548591","attributes":{"selected":{"type":"object","name":"Selection","id":"p548592","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p548593"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p548598","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p548599"}}},"glyph":{"type":"object","name":"Line","id":"p548594","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p548595","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p548596","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p548535","attributes":{"tools":[{"id":"p548549"},{"id":"p548550"},{"id":"p548551"},{"id":"p548559"},{"type":"object","name":"SaveTool","id":"p548560"},{"id":"p548601"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p548544","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p548545","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p548546"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p548547"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p548539","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p548540"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p548541"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p548542"}}}],"center":[{"type":"object","name":"Grid","id":"p548543","attributes":{"axis":{"id":"p548539"}}},{"type":"object","name":"Grid","id":"p548548","attributes":{"dimension":1,"axis":{"id":"p548544"}}},{"type":"object","name":"Legend","id":"p548579","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p548580","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p548576"}]}},{"type":"object","name":"LegendItem","id":"p548590","attributes":{"label":{"type":"value","value":"Median Year (1929)"},"renderers":[{"id":"p548587"}]}},{"type":"object","name":"LegendItem","id":"p548600","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p548597"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p548612","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"0f1f4d1f-a72c-4c0a-a675-07652220af77","roots":{"p548613":"a2bc32ba-3f1e-4f65-9268-61d2d9a34983"},"root_ids":["p548613"]}];
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