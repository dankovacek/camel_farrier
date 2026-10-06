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
    
    
    const element = document.getElementById("ddaf2c55-0ee5-4ba1-bca6-fcd7945b3e22");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ddaf2c55-0ee5-4ba1-bca6-fcd7945b3e22' but no matching script tag was found.")
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
                  const docs_json = '{"f8cbc482-b921-4fe6-be60-e23ccf2f446c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p657390","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p657391"}}},"roots":[{"type":"object","name":"Column","id":"p657554","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p657551","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p657550","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p657543","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p657414"},{"type":"object","name":"PanTool","id":"p657490"}]}},{"type":"object","name":"ToolProxy","id":"p657544","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p657415","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p657491","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p657545","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p657416","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p657417","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p657423","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p657422","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p657492","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p657493","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p657499","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p657498","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p657546","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p657424"},{"type":"object","name":"ResetTool","id":"p657500"}]}},{"type":"object","name":"SaveTool","id":"p657547"},{"type":"object","name":"ToolProxy","id":"p657548","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p657466","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p657549","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p657542","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p657392","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p657393"},"y_range":{"type":"object","name":"DataRange1d","id":"p657394"},"x_scale":{"type":"object","name":"LinearScale","id":"p657402"},"y_scale":{"type":"object","name":"LogScale","id":"p657403"},"title":{"type":"object","name":"Title","id":"p657395","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p657432","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p657426","attributes":{"selected":{"type":"object","name":"Selection","id":"p657427","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p657428"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3///+kskr7P/+//9ezXCF/e///+P7Dy21//P/v/3DqiUk07/+/5/vum2x/Y////+v/LiIavRnoDuLMhbaD1caGG77y/bNt0enPwHjgWPNHPtRmr7hAIwHd9O4Wfbfgel55syZ9gBjX3olKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p657433","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p657434"}}},"glyph":{"type":"object","name":"Line","id":"p657429","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p657430","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p657431","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p657441","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p657435","attributes":{"selected":{"type":"object","name":"Selection","id":"p657436","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p657437"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3///+kskr7P/+//9ezXCF/e///+P7Dy21//P/v/3DqiUk07/+/5/vum2x/Y////+v/LiIavRnoDuLMhbaD1caGG77y/bNt0enPwHjgWPNHPtRmr7hAIwHd9O4Wfbfgel55syZ9gBjX3olKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p657442","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p657443"}}},"glyph":{"type":"object","name":"Line","id":"p657438","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p657439","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p657440","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p657452","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p657446","attributes":{"selected":{"type":"object","name":"Selection","id":"p657447","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p657448"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y3Q2y4DQRzAYeLKnUQikbggRAgRhzqXTquqJ7XnXS/AM/FMPIhHcCem39w03fnm99+dz4//9dP5jL+/nbO4lsL8/3JYiGslzJ+vhve3/7Vmfz18xbXBbYaY+djit8N33N9xbpfbc34/tGL4QOcwxPzbEXfs/LHuif1T/TOuxbV0z8270L/krrgr7pq74W7DYvzetvdpm3tn7r25Hb3gfNAN9rvOdbme8z2uxz14jweuz/W5PvfIPXIDcwfcwPs/mfvEDfWG3FBvpDfixnpjbqw34SbuZao3dT9TvWdzn/Vm3Exvxr3ovXCJ54n5if3EuYRLuVQ3NS/lUi7jMi7Ty7iMy7nc3JzLuZwr3EOhV5hbcAVX6pVcqVdyJVdxlbkVV3EVV5tbc7W5tXuvuUavMbfRa/Qa7jX8AVJyFQToAwAA"},"shape":[125],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3///+kskr7H/9/19vy7Xc/s////YPq5ZQjf7x////lR8X2dOa/gz0R1HGQvtRGjUcgPG6v2zffFD8YqU/AeObY80c+1F6eIXD9///58+cOdMeRgMA0k+70ugDAAA="},"shape":[125],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p657453","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p657454"}}},"glyph":{"type":"object","name":"Line","id":"p657449","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p657450","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p657451","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p657462","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p657456","attributes":{"selected":{"type":"object","name":"Selection","id":"p657457","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p657458"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p657463","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p657464"}}},"glyph":{"type":"object","name":"Line","id":"p657459","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p657460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p657461","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p657401","attributes":{"tools":[{"id":"p657414"},{"id":"p657415"},{"id":"p657416"},{"id":"p657424"},{"type":"object","name":"SaveTool","id":"p657425"},{"id":"p657466"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p657409","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p657410","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p657411"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p657412"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p657404","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p657405","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p657406"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p657407"}}}],"center":[{"type":"object","name":"Grid","id":"p657408","attributes":{"axis":{"id":"p657404"}}},{"type":"object","name":"Grid","id":"p657413","attributes":{"dimension":1,"axis":{"id":"p657409"}}},{"type":"object","name":"Legend","id":"p657444","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p657445","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p657441"}]}},{"type":"object","name":"LegendItem","id":"p657455","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p657452"}]}},{"type":"object","name":"LegendItem","id":"p657465","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p657462"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p657467","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p657477","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p657469"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p657478"},"y_scale":{"type":"object","name":"LinearScale","id":"p657479"},"title":{"type":"object","name":"Title","id":"p657470","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p657508","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p657502","attributes":{"selected":{"type":"object","name":"Selection","id":"p657503","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p657504"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73///+kskr7H///x/ff2ip/ZEzZ9aEn1pkH7d267WVk+bYr74W5W1zYYG9kJISU8qZufbo+mF8AJTwivZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p657509","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p657510"}}},"glyph":{"type":"object","name":"Line","id":"p657505","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p657506","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p657507","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p657517","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p657511","attributes":{"selected":{"type":"object","name":"Selection","id":"p657512","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p657513"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73///+kskr7H///x/ff2ip/ZEzZ9aEn1pkH7d267WVk+bYr74W5W1zYYG9kJISU8qZufbo+mF8AJTwivZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p657518","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p657519"}}},"glyph":{"type":"object","name":"Line","id":"p657514","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p657515","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p657516","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p657528","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p657522","attributes":{"selected":{"type":"object","name":"Selection","id":"p657523","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p657524"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73///+kskr7H///x/ff2ip/ZEzZ9aEn1pkH7d267WVk+bYr74W5W1zYYG9kJISU8qZufbo+mF8AJTwivZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p657529","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p657530"}}},"glyph":{"type":"object","name":"Line","id":"p657525","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p657526","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p657527","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p657538","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p657532","attributes":{"selected":{"type":"object","name":"Selection","id":"p657533","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p657534"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p657539","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p657540"}}},"glyph":{"type":"object","name":"Line","id":"p657535","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p657536","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p657537","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p657476","attributes":{"tools":[{"id":"p657490"},{"id":"p657491"},{"id":"p657492"},{"id":"p657500"},{"type":"object","name":"SaveTool","id":"p657501"},{"id":"p657542"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p657485","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p657486","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p657487"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p657488"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p657480","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p657481"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p657482"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p657483"}}}],"center":[{"type":"object","name":"Grid","id":"p657484","attributes":{"axis":{"id":"p657480"}}},{"type":"object","name":"Grid","id":"p657489","attributes":{"dimension":1,"axis":{"id":"p657485"}}},{"type":"object","name":"Legend","id":"p657520","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p657521","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p657517"}]}},{"type":"object","name":"LegendItem","id":"p657531","attributes":{"label":{"type":"value","value":"Median Year (1924)"},"renderers":[{"id":"p657528"}]}},{"type":"object","name":"LegendItem","id":"p657541","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p657538"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p657553","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"f8cbc482-b921-4fe6-be60-e23ccf2f446c","roots":{"p657554":"ddaf2c55-0ee5-4ba1-bca6-fcd7945b3e22"},"root_ids":["p657554"]}];
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