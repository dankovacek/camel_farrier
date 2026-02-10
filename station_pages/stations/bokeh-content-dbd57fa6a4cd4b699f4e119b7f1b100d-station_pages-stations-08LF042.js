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
    
    
    const element = document.getElementById("f869542e-bbbf-47fb-8dff-191fe592ae87");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f869542e-bbbf-47fb-8dff-191fe592ae87' but no matching script tag was found.")
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
                  const docs_json = '{"f2884134-1975-4110-b98f-015936b65ebd":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p256507","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p256508"}}},"roots":[{"type":"object","name":"Column","id":"p256671","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p256669","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p256668","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p256661","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p256531"},{"type":"object","name":"PanTool","id":"p256607"}]}},{"type":"object","name":"ToolProxy","id":"p256662","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p256532","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p256608","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p256663","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p256533","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p256534","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p256540","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p256539","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p256609","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p256610","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p256616","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p256615","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p256664","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p256541"},{"type":"object","name":"ResetTool","id":"p256617"}]}},{"type":"object","name":"SaveTool","id":"p256665"},{"type":"object","name":"ToolProxy","id":"p256666","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p256583","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p256667","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p256659","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p256509","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p256510"},"y_range":{"type":"object","name":"DataRange1d","id":"p256511"},"x_scale":{"type":"object","name":"LinearScale","id":"p256519"},"y_scale":{"type":"object","name":"LogScale","id":"p256520"},"title":{"type":"object","name":"Title","id":"p256512","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p256549","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p256543","attributes":{"selected":{"type":"object","name":"Selection","id":"p256544","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p256545"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9n+hNPv1xQ0zt5237z309UDlqtP2Z86ckVFuOW7/7///6uOah+ybXgf+WDRpl32OLVe69rft9r+B+voPbcVJnzhzhsdNdau9obFx9rmOTfb/geDa4g1wertcq/YX/w32rg+rfJQ619lfXlxgG/xijf0mudbfJ+TX2B8/c8bH7sVKe3Ou69E3y5faOwLVLZq+0P7ftcURn17NsT+xuGCux6Lp9s///y/fUzLZ/ohGzHnG+f32JwJ31K2P6rR/ALRHq70NJ/0MSN/sb7H/9P//8w25jfa//v+/75vUMOzoL9cWf3h9t96+wv3hrvgN1fbb/v/fXzK5gmj6VsvrziO2ZfZ3jYwnP/mUDxXPGDE0AA2nU8woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p256550","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p256551"}}},"glyph":{"type":"object","name":"Line","id":"p256546","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p256547","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p256548","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p256558","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p256552","attributes":{"selected":{"type":"object","name":"Selection","id":"p256553","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p256554"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9n+hNPv1xQ0zt5237z309UDlqtP2Z86ckVFuOW7/7///6uOah+ybXgf+WDRpl32OLVe69rft9r+B+voPbcVJnzhzhsdNdau9obFx9rmOTfb/geDa4g1wertcq/YX/w32rg+rfJQ619lfXlxgG/xijf0mudbfJ+TX2B8/c8bH7sVKe3Ou69E3y5faOwLVLZq+0P7ftcURn17NsT+xuGCux6Lp9s///y/fUzLZ/ohGzHnG+f32JwJ31K2P6rR/ALRHq70NJ/0MSN/sb7H/9P//8w25jfa//v+/75vUMOzoL9cWf3h9t96+wv3hrvgN1fbb/v/fXzK5gmj6VsvrziO2ZfZ3jYwnP/mUDxXPGDE0AA2nU8woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p256559","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p256560"}}},"glyph":{"type":"object","name":"Line","id":"p256555","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p256556","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p256557","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p256569","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p256563","attributes":{"selected":{"type":"object","name":"Selection","id":"p256564","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p256565"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3PK28CQRQFYAwGg2lCMFSsKAkhhBBCGkI4PAotb3aXl1qDAYGhoogaTA0IEJhWgGgFf5LmHs5nJjNz594zQWBuZS5BFF8Uw33/iJ9v4+j8Ce9rk9J9Bn+/Jqu6HI4Hk1d9AZ/0rHdFLBempPdlXAnqU8HlbKrqV8OJ6ur7gv3ONNS/iS29as4bNh+mpXltrKijuV3Mqaf5faRpoBwDJGmoPEM45CqXiwR5yuchTr5y+nigkfKOEKWxco8RoYnyTxCmqf4xRYhm+AcesUlrmAEAAA=="},"shape":[51],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9v///98/9/1x+7///893f7jL/jdQvP/QVgwaqO7/tcUb4DRIvZT+WvsfQPnHS1eD6P8rPy6y/w4Unzlzpv1ToLlFGRPtHwDFtdrbMOhf///f901qoDu9DeiukskVBOiMAaMBdf5YIpgBAAA="},"shape":[51],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p256570","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p256571"}}},"glyph":{"type":"object","name":"Line","id":"p256566","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p256567","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p256568","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p256579","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p256573","attributes":{"selected":{"type":"object","name":"Selection","id":"p256574","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p256575"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p256580","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p256581"}}},"glyph":{"type":"object","name":"Line","id":"p256576","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p256577","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p256578","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p256518","attributes":{"tools":[{"id":"p256531"},{"id":"p256532"},{"id":"p256533"},{"id":"p256541"},{"type":"object","name":"SaveTool","id":"p256542"},{"id":"p256583"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p256526","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p256527","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p256528"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p256529"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p256521","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p256522","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p256523"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p256524"}}}],"center":[{"type":"object","name":"Grid","id":"p256525","attributes":{"axis":{"id":"p256521"}}},{"type":"object","name":"Grid","id":"p256530","attributes":{"dimension":1,"axis":{"id":"p256526"}}},{"type":"object","name":"Legend","id":"p256561","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p256562","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p256558"}]}},{"type":"object","name":"LegendItem","id":"p256572","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p256569"}]}},{"type":"object","name":"LegendItem","id":"p256582","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p256579"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p256584","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p256594","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p256586"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p256595"},"y_scale":{"type":"object","name":"LinearScale","id":"p256596"},"title":{"type":"object","name":"Title","id":"p256587","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p256625","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p256619","attributes":{"selected":{"type":"object","name":"Selection","id":"p256620","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p256621"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p256626","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p256627"}}},"glyph":{"type":"object","name":"Line","id":"p256622","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p256623","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p256624","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p256634","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p256628","attributes":{"selected":{"type":"object","name":"Selection","id":"p256629","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p256630"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p256635","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p256636"}}},"glyph":{"type":"object","name":"Line","id":"p256631","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p256632","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p256633","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p256645","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p256639","attributes":{"selected":{"type":"object","name":"Selection","id":"p256640","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p256641"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p256646","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p256647"}}},"glyph":{"type":"object","name":"Line","id":"p256642","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p256643","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p256644","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p256655","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p256649","attributes":{"selected":{"type":"object","name":"Selection","id":"p256650","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p256651"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p256656","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p256657"}}},"glyph":{"type":"object","name":"Line","id":"p256652","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p256653","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p256654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p256593","attributes":{"tools":[{"id":"p256607"},{"id":"p256608"},{"id":"p256609"},{"id":"p256617"},{"type":"object","name":"SaveTool","id":"p256618"},{"id":"p256659"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p256602","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p256603","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p256604"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p256605"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p256597","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p256598"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p256599"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p256600"}}}],"center":[{"type":"object","name":"Grid","id":"p256601","attributes":{"axis":{"id":"p256597"}}},{"type":"object","name":"Grid","id":"p256606","attributes":{"dimension":1,"axis":{"id":"p256602"}}},{"type":"object","name":"Legend","id":"p256637","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p256638","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p256634"}]}},{"type":"object","name":"LegendItem","id":"p256648","attributes":{"label":{"type":"value","value":"Median Year (1928)"},"renderers":[{"id":"p256645"}]}},{"type":"object","name":"LegendItem","id":"p256658","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p256655"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p256660","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"f2884134-1975-4110-b98f-015936b65ebd","roots":{"p256671":"f869542e-bbbf-47fb-8dff-191fe592ae87"},"root_ids":["p256671"]}];
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