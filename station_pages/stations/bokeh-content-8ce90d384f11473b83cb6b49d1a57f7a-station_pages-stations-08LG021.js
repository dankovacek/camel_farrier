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
    
    
    const element = document.getElementById("fa8ee9a8-8543-4200-b5ca-769656b85514");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fa8ee9a8-8543-4200-b5ca-769656b85514' but no matching script tag was found.")
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
                  const docs_json = '{"d6205235-73a5-4aef-a60f-7957f481ba43":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p509909","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p509910"}}},"roots":[{"type":"object","name":"Column","id":"p510073","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p510070","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p510069","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p510062","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p509933"},{"type":"object","name":"PanTool","id":"p510009"}]}},{"type":"object","name":"ToolProxy","id":"p510063","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p509934","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p510010","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p510064","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p509935","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p509936","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p509942","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p509941","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p510011","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p510012","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p510018","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510017","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p510065","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p509943"},{"type":"object","name":"ResetTool","id":"p510019"}]}},{"type":"object","name":"SaveTool","id":"p510066"},{"type":"object","name":"ToolProxy","id":"p510067","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p509985","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p510068","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p510061","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p509911","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p509912"},"y_range":{"type":"object","name":"DataRange1d","id":"p509913"},"x_scale":{"type":"object","name":"LinearScale","id":"p509921"},"y_scale":{"type":"object","name":"LogScale","id":"p509922"},"title":{"type":"object","name":"Title","id":"p509914","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p509951","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509945","attributes":{"selected":{"type":"object","name":"Selection","id":"p509946","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509947"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/398ivV++39QemGBrVYp0y77R4E79mVzrrRveB1ooVux0H7yzJmSl/Ln26+Ra11t3THX/tP///Yca+ZQjX6lEXM/mnm2/ff//+fPnDlzlB7htF//odLcFTPsX/z/f9+/dzrNaY/+Q6pm8tPtdbiuL55vPtX+HTBdPqyaAqcBFYthHCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509952","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509953"}}},"glyph":{"type":"object","name":"Line","id":"p509948","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509949","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p509950","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p509960","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509954","attributes":{"selected":{"type":"object","name":"Selection","id":"p509955","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509956"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/398ivV++39QemGBrVYp0y77R4E79mVzrrRveB1ooVux0H7yzJmSl/Ln26+Ra11t3THX/tP///Yca+ZQjX6lEXM/mnm2/ff//+fPnDlzlB7htF//odLcFTPsX/z/f9+/dzrNaY/+Q6pm8tPtdbiuL55vPtX+HTBdPqyaAqcBFYthHCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509961","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509962"}}},"glyph":{"type":"object","name":"Line","id":"p509957","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509958","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p509959","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p509971","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509965","attributes":{"selected":{"type":"object","name":"Selection","id":"p509966","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509967"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2PIVACYRSEjdB0LNJgHJ25wIwHjiPDCOuJKCB6HMeBMGMhErVBNBgIBgKBSjQSMRAIhovaNBINBmQs8t7tlf/+/+3u+9ZPLUb3/irr6xlGq/MyeW9uI7hHEHvctEKxKN93MXCKxniwz7mBsAri1B3gdfnZ/Z6a1CfxK9flIX1HSMx32n3zmP4UVNZJM+cEYxVmmAeszesEMPcUfVMCLOafwVBDjnty0Pj5Offl0VbDBfdeYkO/AvcXIBCLUZEcJaQV64o8ZXw0ZVIm1zUe1HhDPhsh+XmyyWkHeq9C3krg23PI7QT+H4f8VVgSMKuyh4steXh22cfFlxx3NfaqQTHjHvt56MniP4896yhJ0FudfRuIyGDYYO9b/AObmcJ98AEAAA=="},"shape":[62],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/398ivV++x////9f+XGR/a////eX7Ztv/+n/f3uONXNIpr///z9/5syZozSF9Iv//+/7906nmH4HjJeHVVPgNAD1rZOh8AEAAA=="},"shape":[62],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509972","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509973"}}},"glyph":{"type":"object","name":"Line","id":"p509968","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509969","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p509970","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p509981","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509975","attributes":{"selected":{"type":"object","name":"Selection","id":"p509976","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509977"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p509982","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509983"}}},"glyph":{"type":"object","name":"Line","id":"p509978","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509979","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p509980","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p509920","attributes":{"tools":[{"id":"p509933"},{"id":"p509934"},{"id":"p509935"},{"id":"p509943"},{"type":"object","name":"SaveTool","id":"p509944"},{"id":"p509985"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p509928","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p509929","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p509930"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p509931"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p509923","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p509924","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p509925"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p509926"}}}],"center":[{"type":"object","name":"Grid","id":"p509927","attributes":{"axis":{"id":"p509923"}}},{"type":"object","name":"Grid","id":"p509932","attributes":{"dimension":1,"axis":{"id":"p509928"}}},{"type":"object","name":"Legend","id":"p509963","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p509964","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p509960"}]}},{"type":"object","name":"LegendItem","id":"p509974","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p509971"}]}},{"type":"object","name":"LegendItem","id":"p509984","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p509981"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p509986","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p509996","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p509988"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p509997"},"y_scale":{"type":"object","name":"LinearScale","id":"p509998"},"title":{"type":"object","name":"Title","id":"p509989","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p510027","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510021","attributes":{"selected":{"type":"object","name":"Selection","id":"p510022","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510023"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L///+NTrPfbo4vXdnS82Mc3xz5u7dZpB6Vm2n8Fqrv2agaGOhgNAH5nBHNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510028","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510029"}}},"glyph":{"type":"object","name":"Line","id":"p510024","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510025","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510026","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p510036","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510030","attributes":{"selected":{"type":"object","name":"Selection","id":"p510031","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510032"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L///+NTrPfbo4vXdnS82Mc3xz5u7dZpB6Vm2n8Fqrv2agaGOhgNAH5nBHNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510037","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510038"}}},"glyph":{"type":"object","name":"Line","id":"p510033","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510034","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p510035","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p510047","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510041","attributes":{"selected":{"type":"object","name":"Selection","id":"p510042","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510043"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L///+NTrPfbo4vXdnS82Mc3xz5u7dZpB6Vm2n8Fqrv2agaGOhgNAH5nBHNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510048","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510049"}}},"glyph":{"type":"object","name":"Line","id":"p510044","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510045","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p510046","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p510057","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510051","attributes":{"selected":{"type":"object","name":"Selection","id":"p510052","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510053"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p510058","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510059"}}},"glyph":{"type":"object","name":"Line","id":"p510054","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510055","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510056","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p509995","attributes":{"tools":[{"id":"p510009"},{"id":"p510010"},{"id":"p510011"},{"id":"p510019"},{"type":"object","name":"SaveTool","id":"p510020"},{"id":"p510061"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p510004","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p510005","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p510006"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510007"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p509999","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p510000"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p510001"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p510002"}}}],"center":[{"type":"object","name":"Grid","id":"p510003","attributes":{"axis":{"id":"p509999"}}},{"type":"object","name":"Grid","id":"p510008","attributes":{"dimension":1,"axis":{"id":"p510004"}}},{"type":"object","name":"Legend","id":"p510039","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p510040","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p510036"}]}},{"type":"object","name":"LegendItem","id":"p510050","attributes":{"label":{"type":"value","value":"Median Year (1920)"},"renderers":[{"id":"p510047"}]}},{"type":"object","name":"LegendItem","id":"p510060","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p510057"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p510072","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"d6205235-73a5-4aef-a60f-7957f481ba43","roots":{"p510073":"fa8ee9a8-8543-4200-b5ca-769656b85514"},"root_ids":["p510073"]}];
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