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
    
    
    const element = document.getElementById("ab4f31b2-3dd9-4ffe-a633-32a7e6b3045c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ab4f31b2-3dd9-4ffe-a633-32a7e6b3045c' but no matching script tag was found.")
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
                  const docs_json = '{"6741ed0b-0fc8-4d8f-94fa-b3ad19aad1f7":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p377782","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p377783"}}},"roots":[{"type":"object","name":"Column","id":"p377946","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p377943","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p377942","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p377935","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p377806"},{"type":"object","name":"PanTool","id":"p377882"}]}},{"type":"object","name":"ToolProxy","id":"p377936","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p377807","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p377883","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p377937","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p377808","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p377809","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p377815","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p377814","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p377884","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p377885","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p377891","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p377890","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p377938","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p377816"},{"type":"object","name":"ResetTool","id":"p377892"}]}},{"type":"object","name":"SaveTool","id":"p377939"},{"type":"object","name":"ToolProxy","id":"p377940","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p377858","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p377941","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p377934","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p377784","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p377785"},"y_range":{"type":"object","name":"DataRange1d","id":"p377786"},"x_scale":{"type":"object","name":"LinearScale","id":"p377794"},"y_scale":{"type":"object","name":"LogScale","id":"p377795"},"title":{"type":"object","name":"Title","id":"p377787","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p377824","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377818","attributes":{"selected":{"type":"object","name":"Selection","id":"p377819","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377820"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/398ivV++39QemGBrVYp0y77R4E79mVzrrRveB1ooVux0H7yzJmSl/Ln26+Ra11t3THX/tP///Yca+ZQjX6lEXM/mnm2/ff//+fPnDlzlB7h4eDXf6g0d8UM+xf//9/3751Oc9qj/5Cqmfx0ex2u64vnm0+1fwdM3w+rpsBpABWLYRwoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p377825","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377826"}}},"glyph":{"type":"object","name":"Line","id":"p377821","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p377822","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p377823","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p377833","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377827","attributes":{"selected":{"type":"object","name":"Selection","id":"p377828","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377829"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/398ivV++39QemGBrVYp0y77R4E79mVzrrRveB1ooVux0H7yzJmSl/Ln26+Ra11t3THX/tP///Yca+ZQjX6lEXM/mnm2/ff//+fPnDlzlB7h4eDXf6g0d8UM+xf//9/3751Oc9qj/5Cqmfx0ex2u64vnm0+1fwdM3w+rpsBpABWLYRwoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p377834","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377835"}}},"glyph":{"type":"object","name":"Line","id":"p377830","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p377831","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p377832","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p377844","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377838","attributes":{"selected":{"type":"object","name":"Selection","id":"p377839","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377840"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y1QLUxCURg1QoNZoMmcbgQ2nzrnG0OPCMqP4OPxeCBuFiJRG0QCgUAgGKxEIxGCgUB4EZtGI4GAzsL97ju33H33fufXM3/enr2/S0/fQTy23yfL5i78OYpYL5QOxPb4vo+RXYiPR4f8jyOoFxLcO8Js89VZTQ3un+BXxs0pcWc4nkdaA+OceBNarp0kTwpjLXBBPkCBFQPIe4WBIQRp8l9DmVGADHUy0PTzLPVuIFOkdUvdHHb0yVM/DxVaJS/QRxFJqcG8o58SPpvisERfZbzoYu7pz0JA8vct+rT8fbdCvxUfd2DTt+3j1zb9V6HK7YU+qszhICwPQ4d5HHxLfU815qpB15Vwmc9FVwr6d5mzjqIUsqgzbwNRKeC1wdwP2AKbmcJ98AEAAA=="},"shape":[62],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/398ivV++x////9f+XGR/a////eX7Ztv/+n/f3uONXNIpr///z9/5syZ9qM0ZeHw4v//+/690+0ppd8B4/Fh1RR7GA0A9a2TofABAAA="},"shape":[62],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p377845","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377846"}}},"glyph":{"type":"object","name":"Line","id":"p377841","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p377842","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p377843","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p377854","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377848","attributes":{"selected":{"type":"object","name":"Selection","id":"p377849","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377850"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p377855","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377856"}}},"glyph":{"type":"object","name":"Line","id":"p377851","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p377852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p377853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p377793","attributes":{"tools":[{"id":"p377806"},{"id":"p377807"},{"id":"p377808"},{"id":"p377816"},{"type":"object","name":"SaveTool","id":"p377817"},{"id":"p377858"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p377801","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p377802","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p377803"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p377804"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p377796","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p377797","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p377798"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p377799"}}}],"center":[{"type":"object","name":"Grid","id":"p377800","attributes":{"axis":{"id":"p377796"}}},{"type":"object","name":"Grid","id":"p377805","attributes":{"dimension":1,"axis":{"id":"p377801"}}},{"type":"object","name":"Legend","id":"p377836","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p377837","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p377833"}]}},{"type":"object","name":"LegendItem","id":"p377847","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p377844"}]}},{"type":"object","name":"LegendItem","id":"p377857","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p377854"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p377859","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p377869","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p377861"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p377870"},"y_scale":{"type":"object","name":"LinearScale","id":"p377871"},"title":{"type":"object","name":"Title","id":"p377862","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p377900","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377894","attributes":{"selected":{"type":"object","name":"Selection","id":"p377895","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377896"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73/398ivV+e3Tx2o6OF/v45tjHrd067aDUTPuvQHXXXs3AUAfTBwB+ZwRzYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p377901","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377902"}}},"glyph":{"type":"object","name":"Line","id":"p377897","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p377898","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p377899","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p377909","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377903","attributes":{"selected":{"type":"object","name":"Selection","id":"p377904","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377905"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73/398ivV+e3Tx2o6OF/v45tjHrd067aDUTPuvQHXXXs3AUAfTBwB+ZwRzYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p377910","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377911"}}},"glyph":{"type":"object","name":"Line","id":"p377906","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p377907","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p377908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p377920","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377914","attributes":{"selected":{"type":"object","name":"Selection","id":"p377915","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377916"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73/398ivV+e3Tx2o6OF/v45tjHrd067aDUTPuvQHXXXs3AUAfTBwB+ZwRzYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p377921","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377922"}}},"glyph":{"type":"object","name":"Line","id":"p377917","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p377918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p377919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p377930","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377924","attributes":{"selected":{"type":"object","name":"Selection","id":"p377925","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377926"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p377931","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377932"}}},"glyph":{"type":"object","name":"Line","id":"p377927","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p377928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p377929","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p377868","attributes":{"tools":[{"id":"p377882"},{"id":"p377883"},{"id":"p377884"},{"id":"p377892"},{"type":"object","name":"SaveTool","id":"p377893"},{"id":"p377934"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p377877","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p377878","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p377879"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p377880"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p377872","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p377873"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p377874"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p377875"}}}],"center":[{"type":"object","name":"Grid","id":"p377876","attributes":{"axis":{"id":"p377872"}}},{"type":"object","name":"Grid","id":"p377881","attributes":{"dimension":1,"axis":{"id":"p377877"}}},{"type":"object","name":"Legend","id":"p377912","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p377913","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p377909"}]}},{"type":"object","name":"LegendItem","id":"p377923","attributes":{"label":{"type":"value","value":"Median Year (1920)"},"renderers":[{"id":"p377920"}]}},{"type":"object","name":"LegendItem","id":"p377933","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p377930"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p377945","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"6741ed0b-0fc8-4d8f-94fa-b3ad19aad1f7","roots":{"p377946":"ab4f31b2-3dd9-4ffe-a633-32a7e6b3045c"},"root_ids":["p377946"]}];
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