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
    
    
    const element = document.getElementById("ecbc9c05-9901-47f7-925b-6c72e4ff3f10");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ecbc9c05-9901-47f7-925b-6c72e4ff3f10' but no matching script tag was found.")
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
                  const docs_json = '{"01cc3287-89fc-4604-a343-0654a6539364":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p574292","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p574293"}}},"roots":[{"type":"object","name":"Column","id":"p574456","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p574453","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p574452","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p574445","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p574316"},{"type":"object","name":"PanTool","id":"p574392"}]}},{"type":"object","name":"ToolProxy","id":"p574446","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p574317","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p574393","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p574447","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p574318","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p574319","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p574325","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p574324","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p574394","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p574395","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p574401","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p574400","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p574448","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p574326"},{"type":"object","name":"ResetTool","id":"p574402"}]}},{"type":"object","name":"SaveTool","id":"p574449"},{"type":"object","name":"ToolProxy","id":"p574450","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p574368","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p574451","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p574444","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p574294","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p574295"},"y_range":{"type":"object","name":"DataRange1d","id":"p574296"},"x_scale":{"type":"object","name":"LinearScale","id":"p574304"},"y_scale":{"type":"object","name":"LogScale","id":"p574305"},"title":{"type":"object","name":"Title","id":"p574297","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p574334","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574328","attributes":{"selected":{"type":"object","name":"Selection","id":"p574329","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574330"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/398ivV++39QemGBrVYp0y77R4E79mVzrrRveB1ooVux0H7yzJmSl/Ln26+Ra11t3THX/tP///Yca+ZQjX6lEXM/mnm2/ff//+fPnDlzlB7h4eDXf6g0d8UM+xf//9/3751Oc9qj/5Cqmfx0ex2u64vnm0+1fwdM3w+rpsBpABWLYRwoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574335","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574336"}}},"glyph":{"type":"object","name":"Line","id":"p574331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574332","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p574333","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p574343","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574337","attributes":{"selected":{"type":"object","name":"Selection","id":"p574338","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574339"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/398ivV++39QemGBrVYp0y77R4E79mVzrrRveB1ooVux0H7yzJmSl/Ln26+Ra11t3THX/tP///Yca+ZQjX6lEXM/mnm2/ff//+fPnDlzlB7h4eDXf6g0d8UM+xf//9/3751Oc9qj/5Cqmfx0ex2u64vnm0+1fwdM3w+rpsBpABWLYRwoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574344","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574345"}}},"glyph":{"type":"object","name":"Line","id":"p574340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p574342","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p574354","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574348","attributes":{"selected":{"type":"object","name":"Selection","id":"p574349","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574350"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y1QLUxCURg1QoNZoMmcbgQ2nzrnG0OPCMqP4OPxeCBuFiJRG0QCgUAgGKxEIxGCgUB4EZtGI4GAzsL97ju33H33fufXM3/enr2/S0/fQTy23yfL5i78OYpYL5QOxPb4vo+RXYiPR4f8jyOoFxLcO8Js89VZTQ3un+BXxs0pcWc4nkdaA+OceBNarp0kTwpjLXBBPkCBFQPIe4WBIQRp8l9DmVGADHUy0PTzLPVuIFOkdUvdHHb0yVM/DxVaJS/QRxFJqcG8o58SPpvisERfZbzoYu7pz0JA8vct+rT8fbdCvxUfd2DTt+3j1zb9V6HK7YU+qszhICwPQ4d5HHxLfU815qpB15Vwmc9FVwr6d5mzjqIUsqgzbwNRKeC1wdwP2AKbmcJ98AEAAA=="},"shape":[62],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/398ivV++x////9f+XGR/a////eX7Ztv/+n/f3uONXNIpr///z9/5syZ9qM0ZeHw4v//+/690+0ppd8B4/Fh1RR7GA0A9a2TofABAAA="},"shape":[62],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574355","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574356"}}},"glyph":{"type":"object","name":"Line","id":"p574351","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574352","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p574353","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p574364","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574358","attributes":{"selected":{"type":"object","name":"Selection","id":"p574359","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574360"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p574365","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574366"}}},"glyph":{"type":"object","name":"Line","id":"p574361","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574362","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p574363","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p574303","attributes":{"tools":[{"id":"p574316"},{"id":"p574317"},{"id":"p574318"},{"id":"p574326"},{"type":"object","name":"SaveTool","id":"p574327"},{"id":"p574368"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p574311","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p574312","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p574313"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p574314"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p574306","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p574307","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p574308"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p574309"}}}],"center":[{"type":"object","name":"Grid","id":"p574310","attributes":{"axis":{"id":"p574306"}}},{"type":"object","name":"Grid","id":"p574315","attributes":{"dimension":1,"axis":{"id":"p574311"}}},{"type":"object","name":"Legend","id":"p574346","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p574347","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p574343"}]}},{"type":"object","name":"LegendItem","id":"p574357","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p574354"}]}},{"type":"object","name":"LegendItem","id":"p574367","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p574364"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p574369","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p574379","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p574371"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p574380"},"y_scale":{"type":"object","name":"LinearScale","id":"p574381"},"title":{"type":"object","name":"Title","id":"p574372","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p574410","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574404","attributes":{"selected":{"type":"object","name":"Selection","id":"p574405","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574406"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73/398ivV+e3Tx2o6OF/v45tjHrd067aDUTPuvQHXXXs3AUAfTBwB+ZwRzYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574411","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574412"}}},"glyph":{"type":"object","name":"Line","id":"p574407","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574408","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p574409","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p574419","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574413","attributes":{"selected":{"type":"object","name":"Selection","id":"p574414","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574415"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73/398ivV+e3Tx2o6OF/v45tjHrd067aDUTPuvQHXXXs3AUAfTBwB+ZwRzYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574420","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574421"}}},"glyph":{"type":"object","name":"Line","id":"p574416","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574417","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p574418","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p574430","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574424","attributes":{"selected":{"type":"object","name":"Selection","id":"p574425","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574426"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73/398ivV+e3Tx2o6OF/v45tjHrd067aDUTPuvQHXXXs3AUAfTBwB+ZwRzYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p574431","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574432"}}},"glyph":{"type":"object","name":"Line","id":"p574427","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574428","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p574429","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p574440","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p574434","attributes":{"selected":{"type":"object","name":"Selection","id":"p574435","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p574436"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p574441","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p574442"}}},"glyph":{"type":"object","name":"Line","id":"p574437","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p574438","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p574439","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p574378","attributes":{"tools":[{"id":"p574392"},{"id":"p574393"},{"id":"p574394"},{"id":"p574402"},{"type":"object","name":"SaveTool","id":"p574403"},{"id":"p574444"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p574387","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p574388","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p574389"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p574390"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p574382","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p574383"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p574384"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p574385"}}}],"center":[{"type":"object","name":"Grid","id":"p574386","attributes":{"axis":{"id":"p574382"}}},{"type":"object","name":"Grid","id":"p574391","attributes":{"dimension":1,"axis":{"id":"p574387"}}},{"type":"object","name":"Legend","id":"p574422","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p574423","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p574419"}]}},{"type":"object","name":"LegendItem","id":"p574433","attributes":{"label":{"type":"value","value":"Median Year (1920)"},"renderers":[{"id":"p574430"}]}},{"type":"object","name":"LegendItem","id":"p574443","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p574440"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p574455","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"01cc3287-89fc-4604-a343-0654a6539364","roots":{"p574456":"ecbc9c05-9901-47f7-925b-6c72e4ff3f10"},"root_ids":["p574456"]}];
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