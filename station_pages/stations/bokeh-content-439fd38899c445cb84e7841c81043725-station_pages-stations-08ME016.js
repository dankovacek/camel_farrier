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
    
    
    const element = document.getElementById("f1dee31d-3c5f-4df5-9757-a131460935ff");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f1dee31d-3c5f-4df5-9757-a131460935ff' but no matching script tag was found.")
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
                  const docs_json = '{"8e1a94eb-4966-4e0a-a324-a0fb3b03695b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p299303","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p299304"}}},"roots":[{"type":"object","name":"Column","id":"p299485","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p299483","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p299482","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p299475","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p299327"},{"type":"object","name":"PanTool","id":"p299412"}]}},{"type":"object","name":"ToolProxy","id":"p299476","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p299328","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p299413","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p299477","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p299329","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p299330","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p299336","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p299335","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p299414","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p299415","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p299421","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p299420","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p299478","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p299337"},{"type":"object","name":"ResetTool","id":"p299422"}]}},{"type":"object","name":"SaveTool","id":"p299479"},{"type":"object","name":"ToolProxy","id":"p299480","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p299388","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p299481","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p299473","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p299305","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p299306"},"y_range":{"type":"object","name":"DataRange1d","id":"p299307"},"x_scale":{"type":"object","name":"LinearScale","id":"p299315"},"y_scale":{"type":"object","name":"LogScale","id":"p299316"},"title":{"type":"object","name":"Title","id":"p299308","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p299345","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p299339","attributes":{"selected":{"type":"object","name":"Selection","id":"p299340","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p299341"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9pLGxvleKhPtr/3/fz9wR5/9g///1Z8H9dh/AMqXTO6wX3nmzJqHL1vtL/7/b/+wqsW+/dBXieNzm+x/AdX7JjUMOtpih9zSq2vr7G1F1rV/5KmydyqwzeLNKbWfDnZ/ySg9yGmH/kO+jXaF0PgsGHAaACDDRDsoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p299346","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p299347"}}},"glyph":{"type":"object","name":"Line","id":"p299342","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p299343","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p299344","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p299354","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p299348","attributes":{"selected":{"type":"object","name":"Selection","id":"p299349","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p299350"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9k8J0OFpafdcbkyw//X//33fJNz0NSAduKOP7vTV//+XS+n3gmh7jjU9cPr////1++Z3jdI46A/A+C2Z3IGTnu7+0OrM9Hb7B0ANWu1tJNO5rwMt1vG22meLrLt/qLEBGi81cDp25syb2qmV9tvA9lXY+xfYctXUVdhPB8o/rCqx71xcYDuhuQgqn2Fv1n9I9ci5FPs3M2Y+vJUbbi8MTncBNKcBthaWXSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p299355","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p299356"}}},"glyph":{"type":"object","name":"Line","id":"p299351","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p299352","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p299353","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p299363","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p299357","attributes":{"selected":{"type":"object","name":"Selection","id":"p299358","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p299359"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9vUzZ06Pc5to/+L//+u+SRPsr/7/H/xsYr/93f//5XU39dqvOXNmi+nZbvtH///X75vfZW/3sCrHcGOn/ff//8+XTO6A00D99/172weCdt5yog1E82u3t9n/WOveWcnYZs/f+nqh9OVme4GY/lmPVjXZP/3/v3963igNo+/9/7++KKMRJ71xcUHuvFcN9teA8eubRDpt8Trwhpx3vb2ZyLp64/1V9tuA6a1kcgWcrjpzpoftQ5n9sv///2u1l9l/3i63dF1NmX2O+0O3jXeK7A8F7uB7X1QISo/2HGty7Ke6P/y0/mSWvWla2owjtmn2+///D39YlUJzGgCMZKNkKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p299364","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p299365"}}},"glyph":{"type":"object","name":"Line","id":"p299360","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p299361","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p299362","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p299374","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p299368","attributes":{"selected":{"type":"object","name":"Selection","id":"p299369","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p299370"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3TWUtUcRjHcYsKgi4ql1IrzMbKFht1XEYd5z+rs885Z84s0htolYoIuq9ohZDeQCstBNFFXRXtENEbSIs2gqjbJFOjZn5fEWY7n3Oe//P8Hk9y0pOcnA56aq8/g1MPDv7//8Xn+eDD6sepRUbfLzV1tb/lRr+vMB3V19Urja5bZWpfX6vn+kYzUX3TvwbXbKo/e1634NeZ2mW7N3CfNl0/08b9Nso9aee+m+TPeLh/h5yzmedskWvdyvM6TaoKvnby3G1muurubuf5O+SO7aSOLjmzi3q8eu4JL3V5dZ+93dTXrTqyPdTZI9fTS729ck0+6vbJzfmov0/uYx/n6Jd70c95BuRuDXCuQbkLg5zPr3Mc8XNOv1xpiPMO6VzDw5x7WK5thPOPyC0J0IeA3PcA/RiVeztKX4Jy94P0x6iutKFPRvU9MvTLyHlD9C0kdyVE/0JyDWH6GJY7FaafYbnZMH2NyO2P0N+I3PsIfY7KWVH6HZV7FqXvUTlfjP7H5G7EmENMrjnOPOJy5+LMJS63EGc+Y3KHxpjTmNznMeaVkHMTzC0h9yrB/JJy/iRzTKrvd5LMM6n+r08x15TcxRTzTcktTjPntNzRNPNOy31LM/eM3HiG+Wfk3mTIQVYukCUPWbl7WXKRlWvPkY+c3KUcOcnJLcuTl7zc8Ty5ycv9yJMfS9d3WeTIkttjkSdL/rJFriy5d7gZXL1Nzmy5jE3ebLmTNrmz5R7b5A/3G9fgyHU75NGR2+eQS0fuqkM+Hblp3CyusUBeC3K5ArktyJ0ukN+C3NMCOcb9wTW5cr0uuXblDrjk25W77pJzV+4Dbg63tkjui3J2kfwX5c4W2YOi3PMi+4CbxzWX5PpK7EdJbqLEnpTkbpbYl5LcJ9wCrqXM/pTlCmX2qCx3vsw+leVeltkr3F9ca0VusMKeVeQOV9i3itztCntXkfuCqxs3/wDUk8L5AAcAAA=="},"shape":[224],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9k+JpH/9/3/fN2kCQfoakA7c0Tfo6Kv//9tzrOnBoP///1+/b37XKE0m/QGYPkomd5BMPwAaoNXeRjF9ERiPD6ta4PRvoLum5zXBaUi6bBgyNCRd1uCkt4HDrwInPR0cDiWj9AijIemnYNDSkPSZAach4gn2wmA6gO40AKK5QMUABwAA"},"shape":[224],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p299375","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p299376"}}},"glyph":{"type":"object","name":"Line","id":"p299371","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p299372","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p299373","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p299384","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p299378","attributes":{"selected":{"type":"object","name":"Selection","id":"p299379","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p299380"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p299385","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p299386"}}},"glyph":{"type":"object","name":"Line","id":"p299381","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p299382","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p299383","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p299314","attributes":{"tools":[{"id":"p299327"},{"id":"p299328"},{"id":"p299329"},{"id":"p299337"},{"type":"object","name":"SaveTool","id":"p299338"},{"id":"p299388"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p299322","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p299323","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p299324"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p299325"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p299317","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p299318","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p299319"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p299320"}}}],"center":[{"type":"object","name":"Grid","id":"p299321","attributes":{"axis":{"id":"p299317"}}},{"type":"object","name":"Grid","id":"p299326","attributes":{"dimension":1,"axis":{"id":"p299322"}}},{"type":"object","name":"Legend","id":"p299366","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p299367","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p299363"}]}},{"type":"object","name":"LegendItem","id":"p299377","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p299374"}]}},{"type":"object","name":"LegendItem","id":"p299387","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p299384"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p299389","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p299399","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p299391"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p299400"},"y_scale":{"type":"object","name":"LinearScale","id":"p299401"},"title":{"type":"object","name":"Title","id":"p299392","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p299430","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p299424","attributes":{"selected":{"type":"object","name":"Selection","id":"p299425","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p299426"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0lLGxp9ZTArtp///b/+wqsR+wf//8b+Eyu3zOd8uzZ3aZA8AXiaf3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p299431","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p299432"}}},"glyph":{"type":"object","name":"Line","id":"p299427","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p299428","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p299429","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p299439","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p299433","attributes":{"selected":{"type":"object","name":"Selection","id":"p299434","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p299435"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9e/Uyqrq16fZH4rKPqsysdP+4f//90+f7LP///9//b75XfYMUHWk0gCp26yjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p299440","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p299441"}}},"glyph":{"type":"object","name":"Line","id":"p299436","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p299437","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p299438","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p299448","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p299442","attributes":{"selected":{"type":"object","name":"Selection","id":"p299443","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p299444"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9e/Uyqrq16fZH4rKPqsysdP+4f//90+f7LP///9//b75XfYMUHXotJSx8WcWk0L76f//2z+sKrFf8P9//C+hcvt8zrdLc6c22QMAXmUwaWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p299449","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p299450"}}},"glyph":{"type":"object","name":"Line","id":"p299445","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p299446","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p299447","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p299459","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p299453","attributes":{"selected":{"type":"object","name":"Selection","id":"p299454","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p299455"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0lLGxp9ZTArtp///b/+wqsR+wf//8b+Eyu3zOd8uzZ3aZA8AXiaf3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p299460","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p299461"}}},"glyph":{"type":"object","name":"Line","id":"p299456","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p299457","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p299458","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p299469","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p299463","attributes":{"selected":{"type":"object","name":"Selection","id":"p299464","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p299465"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p299470","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p299471"}}},"glyph":{"type":"object","name":"Line","id":"p299466","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p299467","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p299468","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p299398","attributes":{"tools":[{"id":"p299412"},{"id":"p299413"},{"id":"p299414"},{"id":"p299422"},{"type":"object","name":"SaveTool","id":"p299423"},{"id":"p299473"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p299407","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p299408","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p299409"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p299410"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p299402","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p299403"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p299404"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p299405"}}}],"center":[{"type":"object","name":"Grid","id":"p299406","attributes":{"axis":{"id":"p299402"}}},{"type":"object","name":"Grid","id":"p299411","attributes":{"dimension":1,"axis":{"id":"p299407"}}},{"type":"object","name":"Legend","id":"p299451","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p299452","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p299448"}]}},{"type":"object","name":"LegendItem","id":"p299462","attributes":{"label":{"type":"value","value":"Median Year (1949)"},"renderers":[{"id":"p299459"}]}},{"type":"object","name":"LegendItem","id":"p299472","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p299469"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p299474","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8e1a94eb-4966-4e0a-a324-a0fb3b03695b","roots":{"p299485":"f1dee31d-3c5f-4df5-9757-a131460935ff"},"root_ids":["p299485"]}];
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