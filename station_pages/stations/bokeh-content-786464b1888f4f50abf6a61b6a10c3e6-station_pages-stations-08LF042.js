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
    
    
    const element = document.getElementById("a2cfa79d-f46a-4d19-ad6c-a61f89dad8c3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a2cfa79d-f46a-4d19-ad6c-a61f89dad8c3' but no matching script tag was found.")
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
                  const docs_json = '{"a3d507c8-f5e1-47a3-bc54-66744bd448de":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p252523","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p252524"}}},"roots":[{"type":"object","name":"Column","id":"p252687","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p252685","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p252684","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p252677","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p252547"},{"type":"object","name":"PanTool","id":"p252623"}]}},{"type":"object","name":"ToolProxy","id":"p252678","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p252548","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p252624","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p252679","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p252549","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p252550","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p252556","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p252555","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p252625","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p252626","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p252632","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p252631","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p252680","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p252557"},{"type":"object","name":"ResetTool","id":"p252633"}]}},{"type":"object","name":"SaveTool","id":"p252681"},{"type":"object","name":"ToolProxy","id":"p252682","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p252599","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p252683","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p252675","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p252525","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p252526"},"y_range":{"type":"object","name":"DataRange1d","id":"p252527"},"x_scale":{"type":"object","name":"LinearScale","id":"p252535"},"y_scale":{"type":"object","name":"LogScale","id":"p252536"},"title":{"type":"object","name":"Title","id":"p252528","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p252565","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p252559","attributes":{"selected":{"type":"object","name":"Selection","id":"p252560","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p252561"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9n+hNPv1xQ0zt5237z309UDlqtP2Z86ckVFuOW7/7///6uOah+ybXgf+WDRpl32OLVe69rft9r+B+voPbcVJnzhzhsdNdau9obFx9rmOTfb/geDa4g1wertcq/YX/w32rg+rfJQ619lfXlxgG/xijf0mudbfJ+TX2B8/c8bH7sVKe3Ou69E3y5faOwLVLZq+0P7ftcURn17NsT+xuGCux6Lp9s///y/fUzLZ/ohGzHnG+f32JwJ31K2P6rR/ALRHq70NJ/0MSN/sb7H/9P//8w25jfa//v+/75vUMOzoL9cWf3h9t96+wv3hrvgN1fbb/v/fXzK5gmj6VsvrziO2ZfZ3jYwnP/mUDxXPGDE0AA2nU8woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p252566","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p252567"}}},"glyph":{"type":"object","name":"Line","id":"p252562","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p252563","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p252564","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p252574","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p252568","attributes":{"selected":{"type":"object","name":"Selection","id":"p252569","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p252570"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9n+hNPv1xQ0zt5237z309UDlqtP2Z86ckVFuOW7/7///6uOah+ybXgf+WDRpl32OLVe69rft9r+B+voPbcVJnzhzhsdNdau9obFx9rmOTfb/geDa4g1wertcq/YX/w32rg+rfJQ619lfXlxgG/xijf0mudbfJ+TX2B8/c8bH7sVKe3Ou69E3y5faOwLVLZq+0P7ftcURn17NsT+xuGCux6Lp9s///y/fUzLZ/ohGzHnG+f32JwJ31K2P6rR/ALRHq70NJ/0MSN/sb7H/9P//8w25jfa//v+/75vUMOzoL9cWf3h9t96+wv3hrvgN1fbb/v/fXzK5gmj6VsvrziO2ZfZ3jYwnP/mUDxXPGDE0AA2nU8woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p252575","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p252576"}}},"glyph":{"type":"object","name":"Line","id":"p252571","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p252572","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p252573","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p252585","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p252579","attributes":{"selected":{"type":"object","name":"Selection","id":"p252580","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p252581"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3PK28CQRQFYAwGg2lCMFSsKAkhhBBCGkI4PAotb3aXl1qDAYGhoogaTA0IEJhWgGgFf5LmHs5nJjNz594zQWBuZS5BFF8Uw33/iJ9v4+j8Ce9rk9J9Bn+/Jqu6HI4Hk1d9AZ/0rHdFLBempPdlXAnqU8HlbKrqV8OJ6ur7gv3ONNS/iS29as4bNh+mpXltrKijuV3Mqaf5faRpoBwDJGmoPEM45CqXiwR5yuchTr5y+nigkfKOEKWxco8RoYnyTxCmqf4xRYhm+AcesUlrmAEAAA=="},"shape":[51],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9v///98/9/1x+7///893f7jL/jdQvP/QVgwaqO7/tcUb4DRIvZT+WvsfQPnHS1eD6P8rPy6y/w4Unzlzpv1ToLlFGRPtHwDFtdrbMOhf///f901qoDu9DeiukskVBOiMAaMBdf5YIpgBAAA="},"shape":[51],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p252586","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p252587"}}},"glyph":{"type":"object","name":"Line","id":"p252582","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p252583","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p252584","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p252595","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p252589","attributes":{"selected":{"type":"object","name":"Selection","id":"p252590","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p252591"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p252596","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p252597"}}},"glyph":{"type":"object","name":"Line","id":"p252592","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p252593","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p252594","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p252534","attributes":{"tools":[{"id":"p252547"},{"id":"p252548"},{"id":"p252549"},{"id":"p252557"},{"type":"object","name":"SaveTool","id":"p252558"},{"id":"p252599"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p252542","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p252543","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p252544"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p252545"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p252537","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p252538","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p252539"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p252540"}}}],"center":[{"type":"object","name":"Grid","id":"p252541","attributes":{"axis":{"id":"p252537"}}},{"type":"object","name":"Grid","id":"p252546","attributes":{"dimension":1,"axis":{"id":"p252542"}}},{"type":"object","name":"Legend","id":"p252577","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p252578","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p252574"}]}},{"type":"object","name":"LegendItem","id":"p252588","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p252585"}]}},{"type":"object","name":"LegendItem","id":"p252598","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p252595"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p252600","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p252610","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p252602"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p252611"},"y_scale":{"type":"object","name":"LinearScale","id":"p252612"},"title":{"type":"object","name":"Title","id":"p252603","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p252641","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p252635","attributes":{"selected":{"type":"object","name":"Selection","id":"p252636","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p252637"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p252642","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p252643"}}},"glyph":{"type":"object","name":"Line","id":"p252638","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p252639","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p252640","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p252650","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p252644","attributes":{"selected":{"type":"object","name":"Selection","id":"p252645","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p252646"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p252651","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p252652"}}},"glyph":{"type":"object","name":"Line","id":"p252647","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p252648","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p252649","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p252661","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p252655","attributes":{"selected":{"type":"object","name":"Selection","id":"p252656","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p252657"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p252662","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p252663"}}},"glyph":{"type":"object","name":"Line","id":"p252658","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p252659","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p252660","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p252671","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p252665","attributes":{"selected":{"type":"object","name":"Selection","id":"p252666","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p252667"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p252672","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p252673"}}},"glyph":{"type":"object","name":"Line","id":"p252668","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p252669","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p252670","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p252609","attributes":{"tools":[{"id":"p252623"},{"id":"p252624"},{"id":"p252625"},{"id":"p252633"},{"type":"object","name":"SaveTool","id":"p252634"},{"id":"p252675"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p252618","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p252619","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p252620"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p252621"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p252613","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p252614"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p252615"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p252616"}}}],"center":[{"type":"object","name":"Grid","id":"p252617","attributes":{"axis":{"id":"p252613"}}},{"type":"object","name":"Grid","id":"p252622","attributes":{"dimension":1,"axis":{"id":"p252618"}}},{"type":"object","name":"Legend","id":"p252653","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p252654","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p252650"}]}},{"type":"object","name":"LegendItem","id":"p252664","attributes":{"label":{"type":"value","value":"Median Year (1928)"},"renderers":[{"id":"p252661"}]}},{"type":"object","name":"LegendItem","id":"p252674","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p252671"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p252676","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"a3d507c8-f5e1-47a3-bc54-66744bd448de","roots":{"p252687":"a2cfa79d-f46a-4d19-ad6c-a61f89dad8c3"},"root_ids":["p252687"]}];
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