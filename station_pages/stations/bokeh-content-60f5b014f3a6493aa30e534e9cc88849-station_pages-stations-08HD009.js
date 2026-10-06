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
    
    
    const element = document.getElementById("c3008e86-8aa3-472e-8361-f3ff9abe4ec7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c3008e86-8aa3-472e-8361-f3ff9abe4ec7' but no matching script tag was found.")
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
                  const docs_json = '{"81e62f67-a520-4b19-9f99-064e05f274d5":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p419461","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p419462"}}},"roots":[{"type":"object","name":"Column","id":"p419625","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p419622","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p419621","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p419614","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p419485"},{"type":"object","name":"PanTool","id":"p419561"}]}},{"type":"object","name":"ToolProxy","id":"p419615","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p419486","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p419562","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p419616","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p419487","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p419488","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p419494","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p419493","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p419563","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p419564","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p419570","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p419569","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p419617","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p419495"},{"type":"object","name":"ResetTool","id":"p419571"}]}},{"type":"object","name":"SaveTool","id":"p419618"},{"type":"object","name":"ToolProxy","id":"p419619","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p419537","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p419620","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p419613","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p419463","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p419464"},"y_range":{"type":"object","name":"DataRange1d","id":"p419465"},"x_scale":{"type":"object","name":"LinearScale","id":"p419473"},"y_scale":{"type":"object","name":"LogScale","id":"p419474"},"title":{"type":"object","name":"Title","id":"p419466","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p419503","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419497","attributes":{"selected":{"type":"object","name":"Selection","id":"p419498","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419499"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhQYCvh8E0jZn5ToKjD4a8aNcvDhRzWuT9cJpgq4MDIwOBgbMzrMGvmTENDDl4HBgaGB1UiPA5LCmw/nX7H4XDoq4bN2kwOkDiDZgy7Q1pa2jb3h2wgfoPIOlZstMI6d7B4wA45FpC5lRkTmUF8oDizw+vAHXU5z5nA/Jh+FNqB6zqjQ/+hrx7h0Ywgdcc8eRgdWoGMXjYGkHoQcPiuEROvefqfPTMDw4qEkL/2D6tE3vUF/7EHyXFd/21/9syZnqnOv+2NjY2Vb//8ab9DrtX7fNpPkHzCDrmfIPHHa379AKt/WIWgtWP6hfzXfwerA7rB/vrigqMb9T6D+AvcH36yb3sd+GL63U/2dlzXlXf++QiyV2+u7AeQfEPO8/f26WlpeV197+0LbLncPXe9sweGK0PI47f2wuvcFZn43kLVvQbRD/x7X4Pc+cd84Suw+c7dL+wVW19zNh94bt/xOnBG28OnIHmd2z8fgeQVmg8gaBuu65MfskH4bI0PQf65fDT3Adj814FgusCA9779////43d53gHRQDW34bTbw6ota3ffBPPNO2+C1DP8u3LDvuV1YAf/9Bv2psbGk7/cvg4WZ9IG0wcWul4Dqa93TLgK4jtwrLlizwakOx2vgPk8TJfhNEjdgVMX7VOA6WRz2UWQvv3e5gga6N7ihNUX7Ccc+rpjD8N5sLvFbp6D03+BGnQ2nYXacwak//4FpdP2XzRi1A/YnQKJJwhEnESmgf4+Yf8PqM6/9zgoPJJzjx6zNzI2jjbQOgpSd+Dz3yMgeoFM1BH7qTNn3rQ2PAz2z4FTB+E0AAyCNLAoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p419504","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419505"}}},"glyph":{"type":"object","name":"Line","id":"p419500","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p419501","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p419502","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p419512","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419506","attributes":{"selected":{"type":"object","name":"Selection","id":"p419507","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419508"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhQYCvh8E0jZn5ToKjD4a8aNcvDhRzWuT9cJpgq4MDIwOBgbMzrMGvmTENDDl4HBgaGB1UiPA5LCmw/nX7H4XDoq4bN2kwOkDiDZgy7Q1pa2jb3h2wgfoPIOlZstMI6d7B4wA45FpC5lRkTmUF8oDizw+vAHXU5z5nA/Jh+FNqB6zqjQ/+hrx7h0Ywgdcc8eRgdWoGMXjYGkHoQcPiuEROvefqfPTMDw4qEkL/2D6tE3vUF/7EHyXFd/21/9syZnqnOv+2NjY2Vb//8ab9DrtX7fNpPkHzCDrmfIPHHa379AKt/WIWgtWP6hfzXfwerA7rB/vrigqMb9T6D+AvcH36yb3sd+GL63U/2dlzXlXf++QiyV2+u7AeQfEPO8/f26WlpeV197+0LbLncPXe9sweGK0PI47f2wuvcFZn43kLVvQbRD/x7X4Pc+cd84Suw+c7dL+wVW19zNh94bt/xOnBG28OnIHmd2z8fgeQVmg8gaBuu65MfskH4bI0PQf65fDT3Adj814FgusCA9779////43d53gHRQDW34bTbw6ota3ffBPPNO2+C1DP8u3LDvuV1YAf/9Bv2psbGk7/cvg4WZ9IG0wcWul4Dqa93TLgK4jtwrLlizwakOx2vgPk8TJfhNEjdgVMX7VOA6WRz2UWQvv3e5gga6N7ihNUX7Ccc+rpjD8N5sLvFbp6D03+BGnQ2nYXacwak//4FpdP2XzRi1A/YnQKJJwhEnESmgf4+Yf8PqM6/9zgoPJJzjx6zNzI2jjbQOgpSd+Dz3yMgeoFM1BH7qTNn3rQ2PAz2z4FTB+E0AAyCNLAoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p419513","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419514"}}},"glyph":{"type":"object","name":"Line","id":"p419509","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p419510","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p419511","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p419523","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419517","attributes":{"selected":{"type":"object","name":"Selection","id":"p419518","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419519"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UaWxMURiGEcROFbWWoihV1U1bNX0705lOO9OZuffO3JmKNXaCqD2IBkFtQWoXxNYQhFhqF6S2kBKCEEsFse8hlopzjvf+mczNud/5vud9zjGGNT5cNLsy01C/nzP/NFvX4Hz6L/6vjq4Zt59se1gL/9/Xw633/dMqNzTC//VhOOOddLXJvnCua45V3ZK/x9dvyfWtMbL6z47a2Lb8LhLtxj8uPT68A7+PwuICnHWWdGSdTvhi337n/sXOrBeNAQk1347+2oV1u+FypKwYw/rdkVD/SkSx3oP7xGLTj5i4VvN6cr841H6+NHvPoV7cNx6pr6bt3/wpnvv3hmqnTgL7SIDcPbZDIvtJxP1rdSu+9UliX0kQcB6c9iazv2RYy8a9WDAqhX2mYLqo7p7bh/2mYt+OG7+brUtl32mo3PC39qMDaew/HRErezXddSmdc/SFa+EQgagv58lA0WxJNINz9cOxwguJVQ0tnM8CAcdSHp3JOTOhykWC8wJ71QPODZRH2w6uSMni/Fl4uu3h0cILWeRgxe82U06ZHit5WNFc6vDASi42qPIjbeRjQ97yftdrfLGRUzZG1Ll76+WcbPLKRtH8Cfeu1bWTmx0b5fhr7ORnx5GZW5+tjnKQowMCtkjIQZ4OvJl4UxiXQ645kDZYynPI14n2SjAnOTsh5BQ7OMk7F34lUC6552Ki6KbiWy7552GJLsXPYw552CnjauBiHi4pZ+tZ613MxQVpx+DObubjhqRvO+hmTm40OjmwR9eMfOaVD3UcruQzNw8k/Y+Gh/l5MEisvv3Ewxy9mLn7XFbZOC/z9KIkKpSz6YeXufpgemaIFT7m64PSe5GPOfsgT+OOGz7m7YPCHa4xdw3L5PICjflraDVvqohAowcaSuX2LzT6oCOpqqGYSKcXOpT+k3T6ocMr2ynT6YkOaVNilU5fDIxRgAx6Y0DSiCg26I8BpUeFQY8MhKkD46dPfmx5LQXw0ys/YtWF5KdffpwYLoXz07MAHOoAB+hbAPL2OloYoHcByNNVejxA/wL4IK+zvwF6aGLW+loCqUkfTSidl5j00sTacNmRST9NdNLGvhvaIkhPgzgk4x0QpK9BWMTpsG8P0tsg1HXyKkh/Q5DpxsSF6HEI4jL51WZKiD6HMFke95Mheh1CNfUU4B9AMR2uuAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/43ST0iTcRgH8J/rn4lh4ggPw4Z4EYMO70E6yPtGhISHGHQIEfYexFOIJ5FdnEiHiNgpPImLjomH8DA6tNcltsxikTrNbJsiJtO0JMpqvj3fZ+873+3dpu/lw/P8nt/z+/cKIYJ9bfWKECLpCTkhxXVse6oWqqGGWqVCCPdEew1UJOmCTcz3OatRb6pUxc9z7AlVWqX+HIvmrnM2dV33BiJnkPc7J04k7YvrTJWU77Qx/5RVGue4UDqng/NdgbLSeSpQZ5p82scx3c+RdD/+tEcgj6+kDlrvfjojm6I25fsnW62K/+W4UEniPO33D1QDkYM8Qw3ZuIS0zm9jndLSOeh9fhl9f+bM5vcR0739KKfa08PjdM7vxnp70H9vc7ecyYGtbxhnsd6d9R2blFbUjW2jT7qY9J9y3lQsDGwhDt54+NWq1v9yE7Ep1W0gdnd2r7PD2tpJFOOubN3ZoRTXm15dTSKm/8Iu/e+J248SMhmO9n+B3he3PluVJWkFcZ7oN9L7ifOtD5Zt0rg4nF/CunlSfXh0N456FuOOljy1JzcX+T4g1Q1eVxdyUl6pHJ/HuM1qx0fOFxN9tNkP3KfAcEcr54/Te20yhrqxaXeM7/PS8vtjzdCEK8/fyabZfc8Z+59Dv0Ss8a1V/ZlrFuPqxbtvyknvGeX14SG/4+uc1FeejM6g7+XVphnUafuZ6WIGXZ2cZ6mP7n/8Cg6O9EYwn+5ryuZ/faT5t7gFAAA="},"shape":[183],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p419524","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419525"}}},"glyph":{"type":"object","name":"Line","id":"p419520","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p419521","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p419522","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p419533","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419527","attributes":{"selected":{"type":"object","name":"Selection","id":"p419528","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419529"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p419534","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419535"}}},"glyph":{"type":"object","name":"Line","id":"p419530","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p419531","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p419532","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p419472","attributes":{"tools":[{"id":"p419485"},{"id":"p419486"},{"id":"p419487"},{"id":"p419495"},{"type":"object","name":"SaveTool","id":"p419496"},{"id":"p419537"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p419480","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p419481","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p419482"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p419483"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p419475","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p419476","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p419477"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p419478"}}}],"center":[{"type":"object","name":"Grid","id":"p419479","attributes":{"axis":{"id":"p419475"}}},{"type":"object","name":"Grid","id":"p419484","attributes":{"dimension":1,"axis":{"id":"p419480"}}},{"type":"object","name":"Legend","id":"p419515","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p419516","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p419512"}]}},{"type":"object","name":"LegendItem","id":"p419526","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p419523"}]}},{"type":"object","name":"LegendItem","id":"p419536","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p419533"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p419538","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p419548","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p419540"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p419549"},"y_scale":{"type":"object","name":"LinearScale","id":"p419550"},"title":{"type":"object","name":"Title","id":"p419541","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p419579","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419573","attributes":{"selected":{"type":"object","name":"Selection","id":"p419574","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419575"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFDQs+f/b3ur5nMNLNzI7GBsbc9+6+NO+RcCpwtPiin322q1h66Sv269etcpplfUHe3T9MD4AknMK4WAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p419580","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419581"}}},"glyph":{"type":"object","name":"Line","id":"p419576","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p419577","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p419578","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p419588","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419582","attributes":{"selected":{"type":"object","name":"Selection","id":"p419583","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419584"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFDQs+f/b3ur5nMNLNzI7GBsbc9+6+NO+RcCpwtPiin322q1h66Sv269etcpplfUHe3T9MD4AknMK4WAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p419589","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419590"}}},"glyph":{"type":"object","name":"Line","id":"p419585","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p419586","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p419587","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p419599","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419593","attributes":{"selected":{"type":"object","name":"Selection","id":"p419594","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419595"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFDQs+f/b3ur5nMNLNzI7GBsbc9+6+NO+RcCpwtPiin322q1h66Sv269etcpplfUHe3T9MD4AknMK4WAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p419600","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419601"}}},"glyph":{"type":"object","name":"Line","id":"p419596","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p419597","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p419598","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p419609","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419603","attributes":{"selected":{"type":"object","name":"Selection","id":"p419604","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419605"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p419610","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419611"}}},"glyph":{"type":"object","name":"Line","id":"p419606","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p419607","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p419608","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p419547","attributes":{"tools":[{"id":"p419561"},{"id":"p419562"},{"id":"p419563"},{"id":"p419571"},{"type":"object","name":"SaveTool","id":"p419572"},{"id":"p419613"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p419556","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p419557","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p419558"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p419559"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p419551","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p419552"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p419553"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p419554"}}}],"center":[{"type":"object","name":"Grid","id":"p419555","attributes":{"axis":{"id":"p419551"}}},{"type":"object","name":"Grid","id":"p419560","attributes":{"dimension":1,"axis":{"id":"p419556"}}},{"type":"object","name":"Legend","id":"p419591","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p419592","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p419588"}]}},{"type":"object","name":"LegendItem","id":"p419602","attributes":{"label":{"type":"value","value":"Median Year (1969)"},"renderers":[{"id":"p419599"}]}},{"type":"object","name":"LegendItem","id":"p419612","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p419609"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p419624","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"81e62f67-a520-4b19-9f99-064e05f274d5","roots":{"p419625":"c3008e86-8aa3-472e-8361-f3ff9abe4ec7"},"root_ids":["p419625"]}];
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