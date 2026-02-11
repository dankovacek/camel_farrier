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
    
    
    const element = document.getElementById("bc4bfcae-83ba-47b4-a119-6cda9a8732d0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bc4bfcae-83ba-47b4-a119-6cda9a8732d0' but no matching script tag was found.")
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
                  const docs_json = '{"ade2e2e7-cadf-4b78-baa9-5fd3698e47b1":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p305102","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p305103"}}},"roots":[{"type":"object","name":"Column","id":"p305284","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p305282","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p305281","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p305274","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p305126"},{"type":"object","name":"PanTool","id":"p305211"}]}},{"type":"object","name":"ToolProxy","id":"p305275","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p305127","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p305212","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p305276","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p305128","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p305129","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p305135","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p305134","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p305213","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p305214","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p305220","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p305219","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p305277","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p305136"},{"type":"object","name":"ResetTool","id":"p305221"}]}},{"type":"object","name":"SaveTool","id":"p305278"},{"type":"object","name":"ToolProxy","id":"p305279","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p305187","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p305280","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p305272","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p305104","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p305105"},"y_range":{"type":"object","name":"DataRange1d","id":"p305106"},"x_scale":{"type":"object","name":"LinearScale","id":"p305114"},"y_scale":{"type":"object","name":"LogScale","id":"p305115"},"title":{"type":"object","name":"Title","id":"p305107","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p305144","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305138","attributes":{"selected":{"type":"object","name":"Selection","id":"p305139","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305140"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9pLGxvleKhPtr/3/fz9wR5/9g///1Z8H9dh/AMqXTO6wX3nmzJqHL1vtL/7/b/+wqsW+/dBXieNzm+x/AdX7JjUMOtpih9zSq2vr7G1F1rV/5KmydyqwzeLNKbWfDnZ/ySg9yGmH/kO+jXaF0PgsGHAaACDDRDsoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305145","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305146"}}},"glyph":{"type":"object","name":"Line","id":"p305141","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305142","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p305143","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p305153","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305147","attributes":{"selected":{"type":"object","name":"Selection","id":"p305148","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305149"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9k8J0OFpafdcbkyw//X//33fJNz0NSAduKOP7vTV//+XS+n3gmh7jjU9cPr////1++Z3jdI46A/A+C2Z3IGTnu7+0OrM9Hb7B0ANWu1tJNO5rwMt1vG22meLrLt/qLEBGi81cDp25syb2qmV9tvA9lXY+xfYctXUVdhPB8o/rCqx71xcYDuhuQgqn2Fv1n9I9ci5FPs3M2Y+vJUbbi8MTncBNKcBthaWXSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305154","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305155"}}},"glyph":{"type":"object","name":"Line","id":"p305150","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305151","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p305152","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p305162","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305156","attributes":{"selected":{"type":"object","name":"Selection","id":"p305157","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305158"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9vUzZ06Pc5to/+L//+u+SRPsr/7/H/xsYr/93f//5XU39dqvOXNmi+nZbvtH///X75vfZW/3sCrHcGOn/ff//8+XTO6A00D99/172weCdt5yog1E82u3t9n/WOveWcnYZs/f+nqh9OVme4GY/lmPVjXZP/3/v3963igNo+/9/7++KKMRJ71xcUHuvFcN9teA8eubRDpt8Trwhpx3vb2ZyLp64/1V9tuA6a1kcgWcrjpzpoftQ5n9sv///2u1l9l/3i63dF1NmX2O+0O3jXeK7A8F7uB7X1QISo/2HGty7Ke6P/y0/mSWvWla2owjtmn2+///D39YlUJzGgCMZKNkKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305163","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305164"}}},"glyph":{"type":"object","name":"Line","id":"p305159","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305160","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p305161","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p305173","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305167","attributes":{"selected":{"type":"object","name":"Selection","id":"p305168","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305169"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3TWUtUcRjHcYsKgi4ql1IrzMbKFht1XEYd5z+rs885Z84s0htolYoIuq9ohZDeQCstBNFFXRXtENEbSIs2gqjbJFOjZn5fEWY7n3Oe//P8Hk9y0pOcnA56aq8/g1MPDv7//8Xn+eDD6sepRUbfLzV1tb/lRr+vMB3V19Urja5bZWpfX6vn+kYzUX3TvwbXbKo/e1634NeZ2mW7N3CfNl0/08b9Nso9aee+m+TPeLh/h5yzmedskWvdyvM6TaoKvnby3G1muurubuf5O+SO7aSOLjmzi3q8eu4JL3V5dZ+93dTXrTqyPdTZI9fTS729ck0+6vbJzfmov0/uYx/n6Jd70c95BuRuDXCuQbkLg5zPr3Mc8XNOv1xpiPMO6VzDw5x7WK5thPOPyC0J0IeA3PcA/RiVeztKX4Jy94P0x6iutKFPRvU9MvTLyHlD9C0kdyVE/0JyDWH6GJY7FaafYbnZMH2NyO2P0N+I3PsIfY7KWVH6HZV7FqXvUTlfjP7H5G7EmENMrjnOPOJy5+LMJS63EGc+Y3KHxpjTmNznMeaVkHMTzC0h9yrB/JJy/iRzTKrvd5LMM6n+r08x15TcxRTzTcktTjPntNzRNPNOy31LM/eM3HiG+Wfk3mTIQVYukCUPWbl7WXKRlWvPkY+c3KUcOcnJLcuTl7zc8Ty5ycv9yJMfS9d3WeTIkttjkSdL/rJFriy5d7gZXL1Nzmy5jE3ebLmTNrmz5R7b5A/3G9fgyHU75NGR2+eQS0fuqkM+Hblp3CyusUBeC3K5ArktyJ0ukN+C3NMCOcb9wTW5cr0uuXblDrjk25W77pJzV+4Dbg63tkjui3J2kfwX5c4W2YOi3PMi+4CbxzWX5PpK7EdJbqLEnpTkbpbYl5LcJ9wCrqXM/pTlCmX2qCx3vsw+leVeltkr3F9ca0VusMKeVeQOV9i3itztCntXkfuCqxs3/wDUk8L5AAcAAA=="},"shape":[224],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9k+JpH/9/3/fN2kCQfoakA7c0Tfo6Kv//9tzrOnBoP///1+/b37XKE0m/QGYPkomd5BMPwAaoNXeRjF9ERiPD6ta4PRvoLum5zXBaUi6bBgyNCRd1uCkt4HDrwInPR0cDiWj9AijIemnYNDSkPSZAach4gn2wmA6gO40AKK5QMUABwAA"},"shape":[224],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305174","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305175"}}},"glyph":{"type":"object","name":"Line","id":"p305170","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p305172","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p305183","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305177","attributes":{"selected":{"type":"object","name":"Selection","id":"p305178","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305179"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p305184","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305185"}}},"glyph":{"type":"object","name":"Line","id":"p305180","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305181","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p305182","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p305113","attributes":{"tools":[{"id":"p305126"},{"id":"p305127"},{"id":"p305128"},{"id":"p305136"},{"type":"object","name":"SaveTool","id":"p305137"},{"id":"p305187"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p305121","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p305122","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p305123"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p305124"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p305116","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p305117","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p305118"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p305119"}}}],"center":[{"type":"object","name":"Grid","id":"p305120","attributes":{"axis":{"id":"p305116"}}},{"type":"object","name":"Grid","id":"p305125","attributes":{"dimension":1,"axis":{"id":"p305121"}}},{"type":"object","name":"Legend","id":"p305165","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p305166","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p305162"}]}},{"type":"object","name":"LegendItem","id":"p305176","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p305173"}]}},{"type":"object","name":"LegendItem","id":"p305186","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p305183"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p305188","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p305198","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p305190"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p305199"},"y_scale":{"type":"object","name":"LinearScale","id":"p305200"},"title":{"type":"object","name":"Title","id":"p305191","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p305229","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305223","attributes":{"selected":{"type":"object","name":"Selection","id":"p305224","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305225"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0lLGxp9ZTArtp///b/+wqsR+wf//8b+Eyu3zOd8uzZ3aZA8AXiaf3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305230","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305231"}}},"glyph":{"type":"object","name":"Line","id":"p305226","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305227","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p305228","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p305238","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305232","attributes":{"selected":{"type":"object","name":"Selection","id":"p305233","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305234"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9e/Uyqrq16fZH4rKPqsysdP+4f//90+f7LP///9//b75XfYMUHWk0gCp26yjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305239","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305240"}}},"glyph":{"type":"object","name":"Line","id":"p305235","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305236","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p305237","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p305247","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305241","attributes":{"selected":{"type":"object","name":"Selection","id":"p305242","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305243"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9e/Uyqrq16fZH4rKPqsysdP+4f//90+f7LP///9//b75XfYMUHXotJSx8WcWk0L76f//2z+sKrFf8P9//C+hcvt8zrdLc6c22QMAXmUwaWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305248","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305249"}}},"glyph":{"type":"object","name":"Line","id":"p305244","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305245","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p305246","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p305258","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305252","attributes":{"selected":{"type":"object","name":"Selection","id":"p305253","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305254"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0lLGxp9ZTArtp///b/+wqsR+wf//8b+Eyu3zOd8uzZ3aZA8AXiaf3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p305259","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305260"}}},"glyph":{"type":"object","name":"Line","id":"p305255","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305256","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p305257","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p305268","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p305262","attributes":{"selected":{"type":"object","name":"Selection","id":"p305263","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p305264"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p305269","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p305270"}}},"glyph":{"type":"object","name":"Line","id":"p305265","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p305266","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p305267","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p305197","attributes":{"tools":[{"id":"p305211"},{"id":"p305212"},{"id":"p305213"},{"id":"p305221"},{"type":"object","name":"SaveTool","id":"p305222"},{"id":"p305272"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p305206","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p305207","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p305208"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p305209"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p305201","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p305202"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p305203"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p305204"}}}],"center":[{"type":"object","name":"Grid","id":"p305205","attributes":{"axis":{"id":"p305201"}}},{"type":"object","name":"Grid","id":"p305210","attributes":{"dimension":1,"axis":{"id":"p305206"}}},{"type":"object","name":"Legend","id":"p305250","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p305251","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p305247"}]}},{"type":"object","name":"LegendItem","id":"p305261","attributes":{"label":{"type":"value","value":"Median Year (1949)"},"renderers":[{"id":"p305258"}]}},{"type":"object","name":"LegendItem","id":"p305271","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p305268"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p305273","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"ade2e2e7-cadf-4b78-baa9-5fd3698e47b1","roots":{"p305284":"bc4bfcae-83ba-47b4-a119-6cda9a8732d0"},"root_ids":["p305284"]}];
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