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
    
    
    const element = document.getElementById("d796fe05-7386-44de-b6be-c93c56d88ac8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd796fe05-7386-44de-b6be-c93c56d88ac8' but no matching script tag was found.")
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
                  const docs_json = '{"54552216-5501-4116-a266-59ddee6d1bbb":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p257825","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p257826"}}},"roots":[{"type":"object","name":"Column","id":"p257989","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p257987","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p257986","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p257979","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p257849"},{"type":"object","name":"PanTool","id":"p257925"}]}},{"type":"object","name":"ToolProxy","id":"p257980","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p257850","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p257926","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p257981","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p257851","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p257852","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p257858","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p257857","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p257927","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p257928","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p257934","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p257933","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p257982","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p257859"},{"type":"object","name":"ResetTool","id":"p257935"}]}},{"type":"object","name":"SaveTool","id":"p257983"},{"type":"object","name":"ToolProxy","id":"p257984","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p257901","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p257985","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p257977","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p257827","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p257828"},"y_range":{"type":"object","name":"DataRange1d","id":"p257829"},"x_scale":{"type":"object","name":"LinearScale","id":"p257837"},"y_scale":{"type":"object","name":"LogScale","id":"p257838"},"title":{"type":"object","name":"Title","id":"p257830","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p257867","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p257861","attributes":{"selected":{"type":"object","name":"Selection","id":"p257862","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p257863"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9n+hNPv1xQ0zt5237z309UDlqtP2Z86ckVFuOW7/7///6uOah+ybXgf+WDRpl32OLVe69rft9r+B+voPbcVJnzhzhsdNdau9obFx9rmOTfb/geDa4g1wertcq/YX/w32rg+rfJQ619lfXlxgG/xijf0mudbfJ+TX2B8/c8bH7sVKe3Ou69E3y5faOwLVLZq+0P7ftcURn17NsT+xuGCux6Lp9s///y/fUzLZ/ohGzHnG+f32JwJ31K2P6rR/ALRHq70NJ/0MSN/sb7H/9P//8w25jfa//v+/75vUMOzoL9cWf3h9t96+wv3hrvgN1fbb/v/fXzK5gmj6VsvrziO2ZfZ3jYwnP/mUDxXPGDE0AA2nU8woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p257868","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p257869"}}},"glyph":{"type":"object","name":"Line","id":"p257864","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p257865","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p257866","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p257876","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p257870","attributes":{"selected":{"type":"object","name":"Selection","id":"p257871","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p257872"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9n+hNPv1xQ0zt5237z309UDlqtP2Z86ckVFuOW7/7///6uOah+ybXgf+WDRpl32OLVe69rft9r+B+voPbcVJnzhzhsdNdau9obFx9rmOTfb/geDa4g1wertcq/YX/w32rg+rfJQ619lfXlxgG/xijf0mudbfJ+TX2B8/c8bH7sVKe3Ou69E3y5faOwLVLZq+0P7ftcURn17NsT+xuGCux6Lp9s///y/fUzLZ/ohGzHnG+f32JwJ31K2P6rR/ALRHq70NJ/0MSN/sb7H/9P//8w25jfa//v+/75vUMOzoL9cWf3h9t96+wv3hrvgN1fbb/v/fXzK5gmj6VsvrziO2ZfZ3jYwnP/mUDxXPGDE0AA2nU8woAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p257877","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p257878"}}},"glyph":{"type":"object","name":"Line","id":"p257873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p257874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p257875","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p257887","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p257881","attributes":{"selected":{"type":"object","name":"Selection","id":"p257882","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p257883"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3PK28CQRQFYAwGg2lCMFSsKAkhhBBCGkI4PAotb3aXl1qDAYGhoogaTA0IEJhWgGgFf5LmHs5nJjNz594zQWBuZS5BFF8Uw33/iJ9v4+j8Ce9rk9J9Bn+/Jqu6HI4Hk1d9AZ/0rHdFLBempPdlXAnqU8HlbKrqV8OJ6ur7gv3ONNS/iS29as4bNh+mpXltrKijuV3Mqaf5faRpoBwDJGmoPEM45CqXiwR5yuchTr5y+nigkfKOEKWxco8RoYnyTxCmqf4xRYhm+AcesUlrmAEAAA=="},"shape":[51],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7/3+89f3z9v///98/9/1x+7///893f7jL/jdQvP/QVgwaqO7/tcUb4DRIvZT+WvsfQPnHS1eD6P8rPy6y/w4Unzlzpv1ToLlFGRPtHwDFtdrbMOhf///f901qoDu9DeiukskVBOiMAaMBdf5YIpgBAAA="},"shape":[51],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p257888","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p257889"}}},"glyph":{"type":"object","name":"Line","id":"p257884","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p257885","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p257886","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p257897","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p257891","attributes":{"selected":{"type":"object","name":"Selection","id":"p257892","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p257893"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p257898","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p257899"}}},"glyph":{"type":"object","name":"Line","id":"p257894","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p257895","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p257896","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p257836","attributes":{"tools":[{"id":"p257849"},{"id":"p257850"},{"id":"p257851"},{"id":"p257859"},{"type":"object","name":"SaveTool","id":"p257860"},{"id":"p257901"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p257844","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p257845","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p257846"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p257847"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p257839","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p257840","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p257841"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p257842"}}}],"center":[{"type":"object","name":"Grid","id":"p257843","attributes":{"axis":{"id":"p257839"}}},{"type":"object","name":"Grid","id":"p257848","attributes":{"dimension":1,"axis":{"id":"p257844"}}},{"type":"object","name":"Legend","id":"p257879","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p257880","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p257876"}]}},{"type":"object","name":"LegendItem","id":"p257890","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p257887"}]}},{"type":"object","name":"LegendItem","id":"p257900","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p257897"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p257902","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p257912","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p257904"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p257913"},"y_scale":{"type":"object","name":"LinearScale","id":"p257914"},"title":{"type":"object","name":"Title","id":"p257905","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p257943","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p257937","attributes":{"selected":{"type":"object","name":"Selection","id":"p257938","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p257939"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p257944","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p257945"}}},"glyph":{"type":"object","name":"Line","id":"p257940","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p257941","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p257942","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p257952","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p257946","attributes":{"selected":{"type":"object","name":"Selection","id":"p257947","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p257948"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p257953","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p257954"}}},"glyph":{"type":"object","name":"Line","id":"p257949","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p257950","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p257951","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p257963","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p257957","attributes":{"selected":{"type":"object","name":"Selection","id":"p257958","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p257959"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodEho6FJN0eP2P///B/KX2F96965PIa3G/uH//9uLMgrtt/3/v79kcoY9Aw79MBoAOqs6G2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p257964","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p257965"}}},"glyph":{"type":"object","name":"Line","id":"p257960","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p257961","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p257962","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p257973","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p257967","attributes":{"selected":{"type":"object","name":"Selection","id":"p257968","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p257969"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p257974","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p257975"}}},"glyph":{"type":"object","name":"Line","id":"p257970","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p257971","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p257972","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p257911","attributes":{"tools":[{"id":"p257925"},{"id":"p257926"},{"id":"p257927"},{"id":"p257935"},{"type":"object","name":"SaveTool","id":"p257936"},{"id":"p257977"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p257920","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p257921","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p257922"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p257923"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p257915","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p257916"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p257917"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p257918"}}}],"center":[{"type":"object","name":"Grid","id":"p257919","attributes":{"axis":{"id":"p257915"}}},{"type":"object","name":"Grid","id":"p257924","attributes":{"dimension":1,"axis":{"id":"p257920"}}},{"type":"object","name":"Legend","id":"p257955","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p257956","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p257952"}]}},{"type":"object","name":"LegendItem","id":"p257966","attributes":{"label":{"type":"value","value":"Median Year (1928)"},"renderers":[{"id":"p257963"}]}},{"type":"object","name":"LegendItem","id":"p257976","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p257973"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p257978","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"54552216-5501-4116-a266-59ddee6d1bbb","roots":{"p257989":"d796fe05-7386-44de-b6be-c93c56d88ac8"},"root_ids":["p257989"]}];
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