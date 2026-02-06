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
    
    
    const element = document.getElementById("c39c0718-213e-40bc-8bc0-0b684b3519fb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c39c0718-213e-40bc-8bc0-0b684b3519fb' but no matching script tag was found.")
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
                  const docs_json = '{"fa24cf9a-c24c-4a18-8914-45c6c6827108":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p253783","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p253784"}}},"roots":[{"type":"object","name":"Column","id":"p253947","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p253945","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p253944","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p253937","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p253807"},{"type":"object","name":"PanTool","id":"p253883"}]}},{"type":"object","name":"ToolProxy","id":"p253938","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p253808","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p253884","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p253939","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p253809","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p253810","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p253816","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p253815","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p253885","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p253886","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p253892","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p253891","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p253940","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p253817"},{"type":"object","name":"ResetTool","id":"p253893"}]}},{"type":"object","name":"SaveTool","id":"p253941"},{"type":"object","name":"ToolProxy","id":"p253942","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p253859","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p253943","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p253935","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p253785","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p253786"},"y_range":{"type":"object","name":"DataRange1d","id":"p253787"},"x_scale":{"type":"object","name":"LinearScale","id":"p253795"},"y_scale":{"type":"object","name":"LogScale","id":"p253796"},"title":{"type":"object","name":"Title","id":"p253788","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p253825","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p253819","attributes":{"selected":{"type":"object","name":"Selection","id":"p253820","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p253821"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9n+hNPv1xQ0zt5237z309UDlqtP2Z86ckVFuOW7/7///6uOah+ybXgf+WDRpl32OLVe69rft9r+B+voPbcVJnzhzhsdNdau9obFx9rmOTfb/geDa4g1wertcq/YX/w32rg+rfJQ619lfXlxgG/xijf0mudbfJ+TX2B8/c8bH7sVKe3Ou69E3y5faOwLVLZq+0P7ftcURn17NsT+xuGCux6Lp9s///y/fUzLZ/ohGzHnG+f32JwJ31K2P6rR/ALRHq70NJ/0MSN/sb7H/9P//8w25jfa//v+/75vUMOzoL9cWf3h9t96+wv3hrvgN1fbb/v/fXzK5gmj6VsvrziO2ZfZ3jYwnP/mUDxXPGDE0AA2nU8woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p253826","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p253827"}}},"glyph":{"type":"object","name":"Line","id":"p253822","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p253823","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p253824","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p253834","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p253828","attributes":{"selected":{"type":"object","name":"Selection","id":"p253829","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p253830"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9n+hNPv1xQ0zt5237z309UDlqtP2Z86ckVFuOW7/7///6uOah+ybXgf+WDRpl32OLVe69rft9r+B+voPbcVJnzhzhsdNdau9obFx9rmOTfb/geDa4g1wertcq/YX/w32rg+rfJQ619lfXlxgG/xijf0mudbfJ+TX2B8/c8bH7sVKe3Ou69E3y5faOwLVLZq+0P7ftcURn17NsT+xuGCux6Lp9s///y/fUzLZ/ohGzHnG+f32JwJ31K2P6rR/ALRHq70NJ/0MSN/sb7H/9P//8w25jfa//v+/75vUMOzoL9cWf3h9t96+wv3hrvgN1fbb/v/fXzK5gmj6VsvrziO2ZfZ3jYwnP/mUDxXPGDE0AA2nU8woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p253835","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p253836"}}},"glyph":{"type":"object","name":"Line","id":"p253831","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p253832","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p253833","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p253845","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p253839","attributes":{"selected":{"type":"object","name":"Selection","id":"p253840","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p253841"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3PK28CQRQFYAwGg2lCMFSsKAkhhBBCGkI4PAotb3aXl1qDAYGhoogaTA0IEJhWgGgFf5LmHs5nJjNz594zQWBuZS5BFF8Uw33/iJ9v4+j8Ce9rk9J9Bn+/Jqu6HI4Hk1d9AZ/0rHdFLBempPdlXAnqU8HlbKrqV8OJ6ur7gv3ONNS/iS29as4bNh+mpXltrKijuV3Mqaf5faRpoBwDJGmoPEM45CqXiwR5yuchTr5y+nigkfKOEKWxco8RoYnyTxCmqf4xRYhm+AcesUlrmAEAAA=="},"shape":[51],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9v///98/9/1x+7///893f7jL/jdQvP/QVgwaqO7/tcUb4DRIvZT+WvsfQPnHS1eD6P8rPy6y/w4Unzlzpv1ToLlFGRPtHwDFtdrbMOhf///f901qoDu9DeiukskVBOiMAaMBdf5YIpgBAAA="},"shape":[51],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p253846","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p253847"}}},"glyph":{"type":"object","name":"Line","id":"p253842","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p253843","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p253844","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p253855","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p253849","attributes":{"selected":{"type":"object","name":"Selection","id":"p253850","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p253851"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p253856","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p253857"}}},"glyph":{"type":"object","name":"Line","id":"p253852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p253853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p253854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p253794","attributes":{"tools":[{"id":"p253807"},{"id":"p253808"},{"id":"p253809"},{"id":"p253817"},{"type":"object","name":"SaveTool","id":"p253818"},{"id":"p253859"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p253802","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p253803","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p253804"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p253805"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p253797","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p253798","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p253799"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p253800"}}}],"center":[{"type":"object","name":"Grid","id":"p253801","attributes":{"axis":{"id":"p253797"}}},{"type":"object","name":"Grid","id":"p253806","attributes":{"dimension":1,"axis":{"id":"p253802"}}},{"type":"object","name":"Legend","id":"p253837","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p253838","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p253834"}]}},{"type":"object","name":"LegendItem","id":"p253848","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p253845"}]}},{"type":"object","name":"LegendItem","id":"p253858","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p253855"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p253860","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p253870","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p253862"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p253871"},"y_scale":{"type":"object","name":"LinearScale","id":"p253872"},"title":{"type":"object","name":"Title","id":"p253863","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p253901","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p253895","attributes":{"selected":{"type":"object","name":"Selection","id":"p253896","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p253897"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p253902","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p253903"}}},"glyph":{"type":"object","name":"Line","id":"p253898","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p253899","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p253900","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p253910","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p253904","attributes":{"selected":{"type":"object","name":"Selection","id":"p253905","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p253906"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p253911","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p253912"}}},"glyph":{"type":"object","name":"Line","id":"p253907","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p253908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p253909","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p253921","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p253915","attributes":{"selected":{"type":"object","name":"Selection","id":"p253916","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p253917"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p253922","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p253923"}}},"glyph":{"type":"object","name":"Line","id":"p253918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p253919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p253920","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p253931","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p253925","attributes":{"selected":{"type":"object","name":"Selection","id":"p253926","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p253927"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p253932","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p253933"}}},"glyph":{"type":"object","name":"Line","id":"p253928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p253929","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p253930","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p253869","attributes":{"tools":[{"id":"p253883"},{"id":"p253884"},{"id":"p253885"},{"id":"p253893"},{"type":"object","name":"SaveTool","id":"p253894"},{"id":"p253935"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p253878","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p253879","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p253880"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p253881"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p253873","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p253874"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p253875"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p253876"}}}],"center":[{"type":"object","name":"Grid","id":"p253877","attributes":{"axis":{"id":"p253873"}}},{"type":"object","name":"Grid","id":"p253882","attributes":{"dimension":1,"axis":{"id":"p253878"}}},{"type":"object","name":"Legend","id":"p253913","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p253914","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p253910"}]}},{"type":"object","name":"LegendItem","id":"p253924","attributes":{"label":{"type":"value","value":"Median Year (1928)"},"renderers":[{"id":"p253921"}]}},{"type":"object","name":"LegendItem","id":"p253934","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p253931"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p253936","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"fa24cf9a-c24c-4a18-8914-45c6c6827108","roots":{"p253947":"c39c0718-213e-40bc-8bc0-0b684b3519fb"},"root_ids":["p253947"]}];
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