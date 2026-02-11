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
    
    
    const element = document.getElementById("b5b164fa-2c7f-47c4-9778-3e5994fa0ba4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b5b164fa-2c7f-47c4-9778-3e5994fa0ba4' but no matching script tag was found.")
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
                  const docs_json = '{"18766493-fed5-4cdd-9c94-965ba941d541":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p303833","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p303834"}}},"roots":[{"type":"object","name":"Column","id":"p304015","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p304013","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p304012","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p304005","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p303857"},{"type":"object","name":"PanTool","id":"p303942"}]}},{"type":"object","name":"ToolProxy","id":"p304006","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p303858","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p303943","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p304007","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p303859","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p303860","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p303866","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p303865","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p303944","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p303945","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p303951","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p303950","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p304008","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p303867"},{"type":"object","name":"ResetTool","id":"p303952"}]}},{"type":"object","name":"SaveTool","id":"p304009"},{"type":"object","name":"ToolProxy","id":"p304010","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p303918","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p304011","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p304003","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p303835","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p303836"},"y_range":{"type":"object","name":"DataRange1d","id":"p303837"},"x_scale":{"type":"object","name":"LinearScale","id":"p303845"},"y_scale":{"type":"object","name":"LogScale","id":"p303846"},"title":{"type":"object","name":"Title","id":"p303838","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p303875","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303869","attributes":{"selected":{"type":"object","name":"Selection","id":"p303870","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303871"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9pLGxvleKhPtr/3/fz9wR5/9g///1Z8H9dh/AMqXTO6wX3nmzJqHL1vtL/7/b/+wqsW+/dBXieNzm+x/AdX7JjUMOtpih9zSq2vr7G1F1rV/5KmydyqwzeLNKbWfDnZ/ySg9yGmH/kO+jXaF0PgsGHAaACDDRDsoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303876","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303877"}}},"glyph":{"type":"object","name":"Line","id":"p303872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303884","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303878","attributes":{"selected":{"type":"object","name":"Selection","id":"p303879","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303880"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9k8J0OFpafdcbkyw//X//33fJNz0NSAduKOP7vTV//+XS+n3gmh7jjU9cPr////1++Z3jdI46A/A+C2Z3IGTnu7+0OrM9Hb7B0ANWu1tJNO5rwMt1vG22meLrLt/qLEBGi81cDp25syb2qmV9tvA9lXY+xfYctXUVdhPB8o/rCqx71xcYDuhuQgqn2Fv1n9I9ci5FPs3M2Y+vJUbbi8MTncBNKcBthaWXSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303885","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303886"}}},"glyph":{"type":"object","name":"Line","id":"p303881","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303893","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303887","attributes":{"selected":{"type":"object","name":"Selection","id":"p303888","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303889"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9vUzZ06Pc5to/+L//+u+SRPsr/7/H/xsYr/93f//5XU39dqvOXNmi+nZbvtH///X75vfZW/3sCrHcGOn/ff//8+XTO6A00D99/172weCdt5yog1E82u3t9n/WOveWcnYZs/f+nqh9OVme4GY/lmPVjXZP/3/v3963igNo+/9/7++KKMRJ71xcUHuvFcN9teA8eubRDpt8Trwhpx3vb2ZyLp64/1V9tuA6a1kcgWcrjpzpoftQ5n9sv///2u1l9l/3i63dF1NmX2O+0O3jXeK7A8F7uB7X1QISo/2HGty7Ke6P/y0/mSWvWla2owjtmn2+///D39YlUJzGgCMZKNkKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303894","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303895"}}},"glyph":{"type":"object","name":"Line","id":"p303890","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p303892","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p303904","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303898","attributes":{"selected":{"type":"object","name":"Selection","id":"p303899","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303900"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3TWUtUcRjHcYsKgi4ql1IrzMbKFht1XEYd5z+rs885Z84s0htolYoIuq9ohZDeQCstBNFFXRXtENEbSIs2gqjbJFOjZn5fEWY7n3Oe//P8Hk9y0pOcnA56aq8/g1MPDv7//8Xn+eDD6sepRUbfLzV1tb/lRr+vMB3V19Urja5bZWpfX6vn+kYzUX3TvwbXbKo/e1634NeZ2mW7N3CfNl0/08b9Nso9aee+m+TPeLh/h5yzmedskWvdyvM6TaoKvnby3G1muurubuf5O+SO7aSOLjmzi3q8eu4JL3V5dZ+93dTXrTqyPdTZI9fTS729ck0+6vbJzfmov0/uYx/n6Jd70c95BuRuDXCuQbkLg5zPr3Mc8XNOv1xpiPMO6VzDw5x7WK5thPOPyC0J0IeA3PcA/RiVeztKX4Jy94P0x6iutKFPRvU9MvTLyHlD9C0kdyVE/0JyDWH6GJY7FaafYbnZMH2NyO2P0N+I3PsIfY7KWVH6HZV7FqXvUTlfjP7H5G7EmENMrjnOPOJy5+LMJS63EGc+Y3KHxpjTmNznMeaVkHMTzC0h9yrB/JJy/iRzTKrvd5LMM6n+r08x15TcxRTzTcktTjPntNzRNPNOy31LM/eM3HiG+Wfk3mTIQVYukCUPWbl7WXKRlWvPkY+c3KUcOcnJLcuTl7zc8Ty5ycv9yJMfS9d3WeTIkttjkSdL/rJFriy5d7gZXL1Nzmy5jE3ebLmTNrmz5R7b5A/3G9fgyHU75NGR2+eQS0fuqkM+Hblp3CyusUBeC3K5ArktyJ0ukN+C3NMCOcb9wTW5cr0uuXblDrjk25W77pJzV+4Dbg63tkjui3J2kfwX5c4W2YOi3PMi+4CbxzWX5PpK7EdJbqLEnpTkbpbYl5LcJ9wCrqXM/pTlCmX2qCx3vsw+leVeltkr3F9ca0VusMKeVeQOV9i3itztCntXkfuCqxs3/wDUk8L5AAcAAA=="},"shape":[224],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9k+JpH/9/3/fN2kCQfoakA7c0Tfo6Kv//9tzrOnBoP///1+/b37XKE0m/QGYPkomd5BMPwAaoNXeRjF9ERiPD6ta4PRvoLum5zXBaUi6bBgyNCRd1uCkt4HDrwInPR0cDiWj9AijIemnYNDSkPSZAach4gn2wmA6gO40AKK5QMUABwAA"},"shape":[224],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303905","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303906"}}},"glyph":{"type":"object","name":"Line","id":"p303901","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303902","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p303903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p303914","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303908","attributes":{"selected":{"type":"object","name":"Selection","id":"p303909","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303910"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p303915","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303916"}}},"glyph":{"type":"object","name":"Line","id":"p303911","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303912","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303913","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p303844","attributes":{"tools":[{"id":"p303857"},{"id":"p303858"},{"id":"p303859"},{"id":"p303867"},{"type":"object","name":"SaveTool","id":"p303868"},{"id":"p303918"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p303852","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p303853","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p303854"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p303855"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p303847","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p303848","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p303849"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p303850"}}}],"center":[{"type":"object","name":"Grid","id":"p303851","attributes":{"axis":{"id":"p303847"}}},{"type":"object","name":"Grid","id":"p303856","attributes":{"dimension":1,"axis":{"id":"p303852"}}},{"type":"object","name":"Legend","id":"p303896","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p303897","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p303893"}]}},{"type":"object","name":"LegendItem","id":"p303907","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p303904"}]}},{"type":"object","name":"LegendItem","id":"p303917","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p303914"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p303919","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p303929","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p303921"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p303930"},"y_scale":{"type":"object","name":"LinearScale","id":"p303931"},"title":{"type":"object","name":"Title","id":"p303922","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p303960","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303954","attributes":{"selected":{"type":"object","name":"Selection","id":"p303955","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303956"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0lLGxp9ZTArtp///b/+wqsR+wf//8b+Eyu3zOd8uzZ3aZA8AXiaf3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303961","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303962"}}},"glyph":{"type":"object","name":"Line","id":"p303957","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303958","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303959","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303969","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303963","attributes":{"selected":{"type":"object","name":"Selection","id":"p303964","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303965"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9e/Uyqrq16fZH4rKPqsysdP+4f//90+f7LP///9//b75XfYMUHWk0gCp26yjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303970","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303971"}}},"glyph":{"type":"object","name":"Line","id":"p303966","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303967","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303968","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303978","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303972","attributes":{"selected":{"type":"object","name":"Selection","id":"p303973","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303974"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9e/Uyqrq16fZH4rKPqsysdP+4f//90+f7LP///9//b75XfYMUHXotJSx8WcWk0L76f//2z+sKrFf8P9//C+hcvt8zrdLc6c22QMAXmUwaWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303979","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303980"}}},"glyph":{"type":"object","name":"Line","id":"p303975","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303976","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p303977","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p303989","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303983","attributes":{"selected":{"type":"object","name":"Selection","id":"p303984","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303985"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0lLGxp9ZTArtp///b/+wqsR+wf//8b+Eyu3zOd8uzZ3aZA8AXiaf3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303990","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303991"}}},"glyph":{"type":"object","name":"Line","id":"p303986","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303987","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p303988","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p303999","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303993","attributes":{"selected":{"type":"object","name":"Selection","id":"p303994","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303995"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p304000","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p304001"}}},"glyph":{"type":"object","name":"Line","id":"p303996","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303997","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303998","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p303928","attributes":{"tools":[{"id":"p303942"},{"id":"p303943"},{"id":"p303944"},{"id":"p303952"},{"type":"object","name":"SaveTool","id":"p303953"},{"id":"p304003"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p303937","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p303938","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p303939"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p303940"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p303932","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p303933"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p303934"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p303935"}}}],"center":[{"type":"object","name":"Grid","id":"p303936","attributes":{"axis":{"id":"p303932"}}},{"type":"object","name":"Grid","id":"p303941","attributes":{"dimension":1,"axis":{"id":"p303937"}}},{"type":"object","name":"Legend","id":"p303981","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p303982","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p303978"}]}},{"type":"object","name":"LegendItem","id":"p303992","attributes":{"label":{"type":"value","value":"Median Year (1949)"},"renderers":[{"id":"p303989"}]}},{"type":"object","name":"LegendItem","id":"p304002","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p303999"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p304004","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"18766493-fed5-4cdd-9c94-965ba941d541","roots":{"p304015":"b5b164fa-2c7f-47c4-9778-3e5994fa0ba4"},"root_ids":["p304015"]}];
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