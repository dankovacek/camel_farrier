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
    
    
    const element = document.getElementById("dc968072-56d4-4f70-bd8a-73dd7f14fd66");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dc968072-56d4-4f70-bd8a-73dd7f14fd66' but no matching script tag was found.")
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
                  const docs_json = '{"45096ff6-4fe6-4adb-b88d-f981e711276d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p303614","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p303615"}}},"roots":[{"type":"object","name":"Column","id":"p303796","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p303794","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p303793","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p303786","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p303638"},{"type":"object","name":"PanTool","id":"p303723"}]}},{"type":"object","name":"ToolProxy","id":"p303787","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p303639","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p303724","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p303788","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p303640","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p303641","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p303647","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p303646","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p303725","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p303726","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p303732","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p303731","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p303789","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p303648"},{"type":"object","name":"ResetTool","id":"p303733"}]}},{"type":"object","name":"SaveTool","id":"p303790"},{"type":"object","name":"ToolProxy","id":"p303791","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p303699","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p303792","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p303784","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p303616","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p303617"},"y_range":{"type":"object","name":"DataRange1d","id":"p303618"},"x_scale":{"type":"object","name":"LinearScale","id":"p303626"},"y_scale":{"type":"object","name":"LogScale","id":"p303627"},"title":{"type":"object","name":"Title","id":"p303619","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p303656","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303650","attributes":{"selected":{"type":"object","name":"Selection","id":"p303651","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303652"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9pLGxvleKhPtr/3/fz9wR5/9g///1Z8H9dh/AMqXTO6wX3nmzJqHL1vtL/7/b/+wqsW+/dBXieNzm+x/AdX7JjUMOtpih9zSq2vr7G1F1rV/5KmydyqwzeLNKbWfDnZ/ySg9yGmH/kO+jXaF0PgsGHAaACDDRDsoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303657","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303658"}}},"glyph":{"type":"object","name":"Line","id":"p303653","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303655","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303665","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303659","attributes":{"selected":{"type":"object","name":"Selection","id":"p303660","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303661"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9k8J0OFpafdcbkyw//X//33fJNz0NSAduKOP7vTV//+XS+n3gmh7jjU9cPr////1++Z3jdI46A/A+C2Z3IGTnu7+0OrM9Hb7B0ANWu1tJNO5rwMt1vG22meLrLt/qLEBGi81cDp25syb2qmV9tvA9lXY+xfYctXUVdhPB8o/rCqx71xcYDuhuQgqn2Fv1n9I9ci5FPs3M2Y+vJUbbi8MTncBNKcBthaWXSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303666","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303667"}}},"glyph":{"type":"object","name":"Line","id":"p303662","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303663","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303674","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303668","attributes":{"selected":{"type":"object","name":"Selection","id":"p303669","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303670"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9vUzZ06Pc5to/+L//+u+SRPsr/7/H/xsYr/93f//5XU39dqvOXNmi+nZbvtH///X75vfZW/3sCrHcGOn/ff//8+XTO6A00D99/172weCdt5yog1E82u3t9n/WOveWcnYZs/f+nqh9OVme4GY/lmPVjXZP/3/v3963igNo+/9/7++KKMRJ71xcUHuvFcN9teA8eubRDpt8Trwhpx3vb2ZyLp64/1V9tuA6a1kcgWcrjpzpoftQ5n9sv///2u1l9l/3i63dF1NmX2O+0O3jXeK7A8F7uB7X1QISo/2HGty7Ke6P/y0/mSWvWla2owjtmn2+///D39YlUJzGgCMZKNkKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303675","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303676"}}},"glyph":{"type":"object","name":"Line","id":"p303671","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303672","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p303673","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p303685","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303679","attributes":{"selected":{"type":"object","name":"Selection","id":"p303680","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303681"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y3TWUtUcRjHcYsKgi4ql1IrzMbKFht1XEYd5z+rs885Z84s0htolYoIuq9ohZDeQCstBNFFXRXtENEbSIs2gqjbJFOjZn5fEWY7n3Oe//P8Hk9y0pOcnA56aq8/g1MPDv7//8Xn+eDD6sepRUbfLzV1tb/lRr+vMB3V19Urja5bZWpfX6vn+kYzUX3TvwbXbKo/e1634NeZ2mW7N3CfNl0/08b9Nso9aee+m+TPeLh/h5yzmedskWvdyvM6TaoKvnby3G1muurubuf5O+SO7aSOLjmzi3q8eu4JL3V5dZ+93dTXrTqyPdTZI9fTS729ck0+6vbJzfmov0/uYx/n6Jd70c95BuRuDXCuQbkLg5zPr3Mc8XNOv1xpiPMO6VzDw5x7WK5thPOPyC0J0IeA3PcA/RiVeztKX4Jy94P0x6iutKFPRvU9MvTLyHlD9C0kdyVE/0JyDWH6GJY7FaafYbnZMH2NyO2P0N+I3PsIfY7KWVH6HZV7FqXvUTlfjP7H5G7EmENMrjnOPOJy5+LMJS63EGc+Y3KHxpjTmNznMeaVkHMTzC0h9yrB/JJy/iRzTKrvd5LMM6n+r08x15TcxRTzTcktTjPntNzRNPNOy31LM/eM3HiG+Wfk3mTIQVYukCUPWbl7WXKRlWvPkY+c3KUcOcnJLcuTl7zc8Ty5ycv9yJMfS9d3WeTIkttjkSdL/rJFriy5d7gZXL1Nzmy5jE3ebLmTNrmz5R7b5A/3G9fgyHU75NGR2+eQS0fuqkM+Hblp3CyusUBeC3K5ArktyJ0ukN+C3NMCOcb9wTW5cr0uuXblDrjk25W77pJzV+4Dbg63tkjui3J2kfwX5c4W2YOi3PMi+4CbxzWX5PpK7EdJbqLEnpTkbpbYl5LcJ9wCrqXM/pTlCmX2qCx3vsw+leVeltkr3F9ca0VusMKeVeQOV9i3itztCntXkfuCqxs3/wDUk8L5AAcAAA=="},"shape":[224],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9k+JpH/9/3/fN2kCQfoakA7c0Tfo6Kv//9tzrOnBoP///1+/b37XKE0m/QGYPkomd5BMPwAaoNXeRjF9ERiPD6ta4PRvoLum5zXBaUi6bBgyNCRd1uCkt4HDrwInPR0cDiWj9AijIemnYNDSkPSZAach4gn2wmA6gO40AKK5QMUABwAA"},"shape":[224],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303686","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303687"}}},"glyph":{"type":"object","name":"Line","id":"p303682","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303683","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p303684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p303695","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303689","attributes":{"selected":{"type":"object","name":"Selection","id":"p303690","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303691"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p303696","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303697"}}},"glyph":{"type":"object","name":"Line","id":"p303692","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303693","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p303625","attributes":{"tools":[{"id":"p303638"},{"id":"p303639"},{"id":"p303640"},{"id":"p303648"},{"type":"object","name":"SaveTool","id":"p303649"},{"id":"p303699"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p303633","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p303634","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p303635"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p303636"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p303628","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p303629","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p303630"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p303631"}}}],"center":[{"type":"object","name":"Grid","id":"p303632","attributes":{"axis":{"id":"p303628"}}},{"type":"object","name":"Grid","id":"p303637","attributes":{"dimension":1,"axis":{"id":"p303633"}}},{"type":"object","name":"Legend","id":"p303677","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p303678","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p303674"}]}},{"type":"object","name":"LegendItem","id":"p303688","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p303685"}]}},{"type":"object","name":"LegendItem","id":"p303698","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p303695"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p303700","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p303710","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p303702"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p303711"},"y_scale":{"type":"object","name":"LinearScale","id":"p303712"},"title":{"type":"object","name":"Title","id":"p303703","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p303741","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303735","attributes":{"selected":{"type":"object","name":"Selection","id":"p303736","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303737"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0lLGxp9ZTArtp///b/+wqsR+wf//8b+Eyu3zOd8uzZ3aZA8AXiaf3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303742","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303743"}}},"glyph":{"type":"object","name":"Line","id":"p303738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303750","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303744","attributes":{"selected":{"type":"object","name":"Selection","id":"p303745","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303746"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9e/Uyqrq16fZH4rKPqsysdP+4f//90+f7LP///9//b75XfYMUHWk0gCp26yjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303751","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303752"}}},"glyph":{"type":"object","name":"Line","id":"p303747","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303749","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303759","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303753","attributes":{"selected":{"type":"object","name":"Selection","id":"p303754","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303755"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9e/Uyqrq16fZH4rKPqsysdP+4f//90+f7LP///9//b75XfYMUHXotJSx8WcWk0L76f//2z+sKrFf8P9//C+hcvt8zrdLc6c22QMAXmUwaWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303760","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303761"}}},"glyph":{"type":"object","name":"Line","id":"p303756","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303757","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p303758","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p303770","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303764","attributes":{"selected":{"type":"object","name":"Selection","id":"p303765","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303766"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0lLGxp9ZTArtp///b/+wqsR+wf//8b+Eyu3zOd8uzZ3aZA8AXiaf3mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303771","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303772"}}},"glyph":{"type":"object","name":"Line","id":"p303767","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p303769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p303780","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303774","attributes":{"selected":{"type":"object","name":"Selection","id":"p303775","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303776"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p303781","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303782"}}},"glyph":{"type":"object","name":"Line","id":"p303777","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303778","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303779","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p303709","attributes":{"tools":[{"id":"p303723"},{"id":"p303724"},{"id":"p303725"},{"id":"p303733"},{"type":"object","name":"SaveTool","id":"p303734"},{"id":"p303784"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p303718","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p303719","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p303720"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p303721"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p303713","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p303714"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p303715"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p303716"}}}],"center":[{"type":"object","name":"Grid","id":"p303717","attributes":{"axis":{"id":"p303713"}}},{"type":"object","name":"Grid","id":"p303722","attributes":{"dimension":1,"axis":{"id":"p303718"}}},{"type":"object","name":"Legend","id":"p303762","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p303763","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p303759"}]}},{"type":"object","name":"LegendItem","id":"p303773","attributes":{"label":{"type":"value","value":"Median Year (1949)"},"renderers":[{"id":"p303770"}]}},{"type":"object","name":"LegendItem","id":"p303783","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p303780"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p303785","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"45096ff6-4fe6-4adb-b88d-f981e711276d","roots":{"p303796":"dc968072-56d4-4f70-bd8a-73dd7f14fd66"},"root_ids":["p303796"]}];
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