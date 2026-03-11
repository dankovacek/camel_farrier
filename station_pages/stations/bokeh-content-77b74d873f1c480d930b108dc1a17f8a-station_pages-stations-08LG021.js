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
    
    
    const element = document.getElementById("a0d197c9-5d87-4347-9110-5e5bab494d88");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a0d197c9-5d87-4347-9110-5e5bab494d88' but no matching script tag was found.")
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
                  const docs_json = '{"9811269d-a280-4348-b89e-18df5688c71b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p509508","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p509509"}}},"roots":[{"type":"object","name":"Column","id":"p509672","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p509669","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p509668","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p509661","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p509532"},{"type":"object","name":"PanTool","id":"p509608"}]}},{"type":"object","name":"ToolProxy","id":"p509662","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p509533","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p509609","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p509663","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p509534","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p509535","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p509541","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p509540","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p509610","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p509611","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p509617","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p509616","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p509664","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p509542"},{"type":"object","name":"ResetTool","id":"p509618"}]}},{"type":"object","name":"SaveTool","id":"p509665"},{"type":"object","name":"ToolProxy","id":"p509666","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p509584","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p509667","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p509660","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p509510","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p509511"},"y_range":{"type":"object","name":"DataRange1d","id":"p509512"},"x_scale":{"type":"object","name":"LinearScale","id":"p509520"},"y_scale":{"type":"object","name":"LogScale","id":"p509521"},"title":{"type":"object","name":"Title","id":"p509513","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p509550","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509544","attributes":{"selected":{"type":"object","name":"Selection","id":"p509545","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509546"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/398ivV++39QemGBrVYp0y77R4E79mVzrrRveB1ooVux0H7yzJmSl/Ln26+Ra11t3THX/tP///Yca+ZQjX6lEXM/mnm2/ff//+fPnDlzlB7htF//odLcFTPsX/z/f9+/dzrNaY/+Q6pm8tPtdbiuL55vPtX+HTBdPqyaAqcBFYthHCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509551","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509552"}}},"glyph":{"type":"object","name":"Line","id":"p509547","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509548","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p509549","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p509559","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509553","attributes":{"selected":{"type":"object","name":"Selection","id":"p509554","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509555"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/398ivV++39QemGBrVYp0y77R4E79mVzrrRveB1ooVux0H7yzJmSl/Ln26+Ra11t3THX/tP///Yca+ZQjX6lEXM/mnm2/ff//+fPnDlzlB7htF//odLcFTPsX/z/f9+/dzrNaY/+Q6pm8tPtdbiuL55vPtX+HTBdPqyaAqcBFYthHCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509560","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509561"}}},"glyph":{"type":"object","name":"Line","id":"p509556","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509557","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p509558","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p509570","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509564","attributes":{"selected":{"type":"object","name":"Selection","id":"p509565","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509566"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2PIVACYRSEjdB0LNJgHJ25wIwHjiPDCOuJKCB6HMeBMGMhErVBNBgIBgKBSjQSMRAIhovaNBINBmQs8t7tlf/+/+3u+9ZPLUb3/irr6xlGq/MyeW9uI7hHEHvctEKxKN93MXCKxniwz7mBsAri1B3gdfnZ/Z6a1CfxK9flIX1HSMx32n3zmP4UVNZJM+cEYxVmmAeszesEMPcUfVMCLOafwVBDjnty0Pj5Offl0VbDBfdeYkO/AvcXIBCLUZEcJaQV64o8ZXw0ZVIm1zUe1HhDPhsh+XmyyWkHeq9C3krg23PI7QT+H4f8VVgSMKuyh4steXh22cfFlxx3NfaqQTHjHvt56MniP4896yhJ0FudfRuIyGDYYO9b/AObmcJ98AEAAA=="},"shape":[62],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/398ivV++x////9f+XGR/a////eX7Ztv/+n/f3uONXNIpr///z9/5syZozSF9Iv//+/7906nmH4HjJeHVVPgNAD1rZOh8AEAAA=="},"shape":[62],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509571","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509572"}}},"glyph":{"type":"object","name":"Line","id":"p509567","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509568","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p509569","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p509580","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509574","attributes":{"selected":{"type":"object","name":"Selection","id":"p509575","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509576"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p509581","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509582"}}},"glyph":{"type":"object","name":"Line","id":"p509577","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509578","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p509579","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p509519","attributes":{"tools":[{"id":"p509532"},{"id":"p509533"},{"id":"p509534"},{"id":"p509542"},{"type":"object","name":"SaveTool","id":"p509543"},{"id":"p509584"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p509527","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p509528","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p509529"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p509530"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p509522","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p509523","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p509524"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p509525"}}}],"center":[{"type":"object","name":"Grid","id":"p509526","attributes":{"axis":{"id":"p509522"}}},{"type":"object","name":"Grid","id":"p509531","attributes":{"dimension":1,"axis":{"id":"p509527"}}},{"type":"object","name":"Legend","id":"p509562","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p509563","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p509559"}]}},{"type":"object","name":"LegendItem","id":"p509573","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p509570"}]}},{"type":"object","name":"LegendItem","id":"p509583","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p509580"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p509585","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p509595","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p509587"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p509596"},"y_scale":{"type":"object","name":"LinearScale","id":"p509597"},"title":{"type":"object","name":"Title","id":"p509588","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p509626","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509620","attributes":{"selected":{"type":"object","name":"Selection","id":"p509621","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509622"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L///+NTrPfbo4vXdnS82Mc3xz5u7dZpB6Vm2n8Fqrv2agaGOhgNAH5nBHNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509627","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509628"}}},"glyph":{"type":"object","name":"Line","id":"p509623","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509624","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p509625","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p509635","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509629","attributes":{"selected":{"type":"object","name":"Selection","id":"p509630","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509631"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L///+NTrPfbo4vXdnS82Mc3xz5u7dZpB6Vm2n8Fqrv2agaGOhgNAH5nBHNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509636","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509637"}}},"glyph":{"type":"object","name":"Line","id":"p509632","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509633","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p509634","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p509646","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509640","attributes":{"selected":{"type":"object","name":"Selection","id":"p509641","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509642"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9L///+NTrPfbo4vXdnS82Mc3xz5u7dZpB6Vm2n8Fqrv2agaGOhgNAH5nBHNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p509647","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509648"}}},"glyph":{"type":"object","name":"Line","id":"p509643","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509644","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p509645","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p509656","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p509650","attributes":{"selected":{"type":"object","name":"Selection","id":"p509651","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p509652"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p509657","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p509658"}}},"glyph":{"type":"object","name":"Line","id":"p509653","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p509654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p509655","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p509594","attributes":{"tools":[{"id":"p509608"},{"id":"p509609"},{"id":"p509610"},{"id":"p509618"},{"type":"object","name":"SaveTool","id":"p509619"},{"id":"p509660"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p509603","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p509604","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p509605"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p509606"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p509598","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p509599"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p509600"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p509601"}}}],"center":[{"type":"object","name":"Grid","id":"p509602","attributes":{"axis":{"id":"p509598"}}},{"type":"object","name":"Grid","id":"p509607","attributes":{"dimension":1,"axis":{"id":"p509603"}}},{"type":"object","name":"Legend","id":"p509638","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p509639","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p509635"}]}},{"type":"object","name":"LegendItem","id":"p509649","attributes":{"label":{"type":"value","value":"Median Year (1920)"},"renderers":[{"id":"p509646"}]}},{"type":"object","name":"LegendItem","id":"p509659","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p509656"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p509671","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"9811269d-a280-4348-b89e-18df5688c71b","roots":{"p509672":"a0d197c9-5d87-4347-9110-5e5bab494d88"},"root_ids":["p509672"]}];
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