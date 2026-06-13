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
    
    
    const element = document.getElementById("d8e221cb-b3b0-4bec-ade4-07a174e845ab");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd8e221cb-b3b0-4bec-ade4-07a174e845ab' but no matching script tag was found.")
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
                  const docs_json = '{"b8098685-cd31-4f50-975e-455388493b3c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p378002","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p378003"}}},"roots":[{"type":"object","name":"Column","id":"p378166","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p378163","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p378162","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p378155","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p378026"},{"type":"object","name":"PanTool","id":"p378102"}]}},{"type":"object","name":"ToolProxy","id":"p378156","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p378027","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p378103","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p378157","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p378028","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378029","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378035","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378034","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p378104","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378105","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378111","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378110","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p378158","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p378036"},{"type":"object","name":"ResetTool","id":"p378112"}]}},{"type":"object","name":"SaveTool","id":"p378159"},{"type":"object","name":"ToolProxy","id":"p378160","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378078","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p378161","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378154","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p378004","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p378005"},"y_range":{"type":"object","name":"DataRange1d","id":"p378006"},"x_scale":{"type":"object","name":"LinearScale","id":"p378014"},"y_scale":{"type":"object","name":"LogScale","id":"p378015"},"title":{"type":"object","name":"Title","id":"p378007","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378044","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378038","attributes":{"selected":{"type":"object","name":"Selection","id":"p378039","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378040"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/398ivV++39QemGBrVYp0y77R4E79mVzrrRveB1ooVux0H7yzJmSl/Ln26+Ra11t3THX/tP///Yca+ZQjX6lEXM/mnm2/ff//+fPnDlzlB7h4eDXf6g0d8UM+xf//9/3751Oc9qj/5Cqmfx0ex2u64vnm0+1fwdM3w+rpsBpABWLYRwoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378045","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378046"}}},"glyph":{"type":"object","name":"Line","id":"p378041","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378042","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378043","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378053","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378047","attributes":{"selected":{"type":"object","name":"Selection","id":"p378048","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378049"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/398ivV++39QemGBrVYp0y77R4E79mVzrrRveB1ooVux0H7yzJmSl/Ln26+Ra11t3THX/tP///Yca+ZQjX6lEXM/mnm2/ff//+fPnDlzlB7h4eDXf6g0d8UM+xf//9/3751Oc9qj/5Cqmfx0ex2u64vnm0+1fwdM3w+rpsBpABWLYRwoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378054","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378055"}}},"glyph":{"type":"object","name":"Line","id":"p378050","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378051","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378052","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378064","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378058","attributes":{"selected":{"type":"object","name":"Selection","id":"p378059","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378060"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y1QLUxCURg1QoNZoMmcbgQ2nzrnG0OPCMqP4OPxeCBuFiJRG0QCgUAgGKxEIxGCgUB4EZtGI4GAzsL97ju33H33fufXM3/enr2/S0/fQTy23yfL5i78OYpYL5QOxPb4vo+RXYiPR4f8jyOoFxLcO8Js89VZTQ3un+BXxs0pcWc4nkdaA+OceBNarp0kTwpjLXBBPkCBFQPIe4WBIQRp8l9DmVGADHUy0PTzLPVuIFOkdUvdHHb0yVM/DxVaJS/QRxFJqcG8o58SPpvisERfZbzoYu7pz0JA8vct+rT8fbdCvxUfd2DTt+3j1zb9V6HK7YU+qszhICwPQ4d5HHxLfU815qpB15Vwmc9FVwr6d5mzjqIUsqgzbwNRKeC1wdwP2AKbmcJ98AEAAA=="},"shape":[62],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/398ivV++x////9f+XGR/a////eX7Ztv/+n/f3uONXNIpr///z9/5syZ9qM0ZeHw4v//+/690+0ppd8B4/Fh1RR7GA0A9a2TofABAAA="},"shape":[62],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378065","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378066"}}},"glyph":{"type":"object","name":"Line","id":"p378061","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378062","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378063","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378074","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378068","attributes":{"selected":{"type":"object","name":"Selection","id":"p378069","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378070"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378075","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378076"}}},"glyph":{"type":"object","name":"Line","id":"p378071","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378072","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378073","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378013","attributes":{"tools":[{"id":"p378026"},{"id":"p378027"},{"id":"p378028"},{"id":"p378036"},{"type":"object","name":"SaveTool","id":"p378037"},{"id":"p378078"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p378021","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p378022","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p378023"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378024"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p378016","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378017","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378018"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378019"}}}],"center":[{"type":"object","name":"Grid","id":"p378020","attributes":{"axis":{"id":"p378016"}}},{"type":"object","name":"Grid","id":"p378025","attributes":{"dimension":1,"axis":{"id":"p378021"}}},{"type":"object","name":"Legend","id":"p378056","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378057","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p378053"}]}},{"type":"object","name":"LegendItem","id":"p378067","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p378064"}]}},{"type":"object","name":"LegendItem","id":"p378077","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378074"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p378079","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p378089","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p378081"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p378090"},"y_scale":{"type":"object","name":"LinearScale","id":"p378091"},"title":{"type":"object","name":"Title","id":"p378082","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378120","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378114","attributes":{"selected":{"type":"object","name":"Selection","id":"p378115","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378116"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73/398ivV+e3Tx2o6OF/v45tjHrd067aDUTPuvQHXXXs3AUAfTBwB+ZwRzYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378121","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378122"}}},"glyph":{"type":"object","name":"Line","id":"p378117","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378118","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378119","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378129","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378123","attributes":{"selected":{"type":"object","name":"Selection","id":"p378124","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378125"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73/398ivV+e3Tx2o6OF/v45tjHrd067aDUTPuvQHXXXs3AUAfTBwB+ZwRzYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378130","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378131"}}},"glyph":{"type":"object","name":"Line","id":"p378126","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378127","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378128","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378140","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378134","attributes":{"selected":{"type":"object","name":"Selection","id":"p378135","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378136"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73/398ivV+e3Tx2o6OF/v45tjHrd067aDUTPuvQHXXXs3AUAfTBwB+ZwRzYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378141","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378142"}}},"glyph":{"type":"object","name":"Line","id":"p378137","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378138","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378139","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378150","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378144","attributes":{"selected":{"type":"object","name":"Selection","id":"p378145","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378146"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378151","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378152"}}},"glyph":{"type":"object","name":"Line","id":"p378147","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378148","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378149","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378088","attributes":{"tools":[{"id":"p378102"},{"id":"p378103"},{"id":"p378104"},{"id":"p378112"},{"type":"object","name":"SaveTool","id":"p378113"},{"id":"p378154"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p378097","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378098","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378099"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378100"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p378092","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p378093"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p378094"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p378095"}}}],"center":[{"type":"object","name":"Grid","id":"p378096","attributes":{"axis":{"id":"p378092"}}},{"type":"object","name":"Grid","id":"p378101","attributes":{"dimension":1,"axis":{"id":"p378097"}}},{"type":"object","name":"Legend","id":"p378132","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378133","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p378129"}]}},{"type":"object","name":"LegendItem","id":"p378143","attributes":{"label":{"type":"value","value":"Median Year (1920)"},"renderers":[{"id":"p378140"}]}},{"type":"object","name":"LegendItem","id":"p378153","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378150"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p378165","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b8098685-cd31-4f50-975e-455388493b3c","roots":{"p378166":"d8e221cb-b3b0-4bec-ade4-07a174e845ab"},"root_ids":["p378166"]}];
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