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
    
    
    const element = document.getElementById("e0d2b11f-ea4f-445c-9410-5a37dfac5ad8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e0d2b11f-ea4f-445c-9410-5a37dfac5ad8' but no matching script tag was found.")
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
                  const docs_json = '{"c9292848-b566-4186-a04c-3d20e0f54f64":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p225529","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p225530"}}},"roots":[{"type":"object","name":"Column","id":"p225693","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p225690","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p225689","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p225682","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p225553"},{"type":"object","name":"PanTool","id":"p225629"}]}},{"type":"object","name":"ToolProxy","id":"p225683","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p225554","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p225630","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p225684","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p225555","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p225556","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p225562","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p225561","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p225631","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p225632","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p225638","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p225637","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p225685","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p225563"},{"type":"object","name":"ResetTool","id":"p225639"}]}},{"type":"object","name":"SaveTool","id":"p225686"},{"type":"object","name":"ToolProxy","id":"p225687","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p225605","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p225688","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p225681","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p225531","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p225532"},"y_range":{"type":"object","name":"DataRange1d","id":"p225533"},"x_scale":{"type":"object","name":"LinearScale","id":"p225541"},"y_scale":{"type":"object","name":"LogScale","id":"p225542"},"title":{"type":"object","name":"Title","id":"p225534","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p225571","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p225565","attributes":{"selected":{"type":"object","name":"Selection","id":"p225566","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p225567"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhQYCvh8E0jZn5ToKjD4a8aNcvDhRzWuT9cJpgq4MDIwOBgbMzrMGvmTENDDl4HBgaGB1UiPA5LCmw/nX7H4XDoq4bN2kwOkDiDZgy7Q1pa2jb3h2wgfoPIOlZstMI6d7B4wA45FpC5lRkTmUF8oDizw+vAHXU5z5nA/Jh+FNqB6zqjQ/+hrx7h0Ywgdcc8eRgdWoGMXjYGkHoQcPiuEROvefqfPTMDw4qEkL/2D6tE3vUF/7EHyXFd/21/9syZnqnOv+2NjY2Vb//8ab9DrtX7fNpPkHzCDrmfIPHHa379AKt/WIWgtWP6hfzXfwerA7rB/vrigqMb9T6D+AvcH36yb3sd+GL63U/2dlzXlXf++QiyV2+u7AeQfEPO8/f26WlpeV197+0LbLncPXe9sweGK0PI47f2wuvcFZn43kLVvQbRD/x7X4Pc+cd84Suw+c7dL+wVW19zNh94bt/xOnBG28OnIHmd2z8fgeQVmg8gaBuu65MfskH4bI0PQf65fDT3Adj814FgusCA9779////43d53gHRQDW34bTbw6ota3ffBPPNO2+C1DP8u3LDvuV1YAf/9Bv2psbGk7/cvg4WZ9IG0wcWul4Dqa93TLgK4jtwrLlizwakOx2vgPk8TJfhNEjdgVMX7VOA6WRz2UWQvv3e5gga6N7ihNUX7Ccc+rpjD8N5sLvFbp6D03+BGnQ2nYXacwak//4FpdP2XzRi1A/YnQKJJwhEnESmgf4+Yf8PqM6/9zgoPJJzjx6zNzI2jjbQOgpSd+Dz3yMgeoFM1BH7qTNn3rQ2PAz2z4FTB+E0AAyCNLAoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p225572","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p225573"}}},"glyph":{"type":"object","name":"Line","id":"p225568","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p225569","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p225570","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p225580","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p225574","attributes":{"selected":{"type":"object","name":"Selection","id":"p225575","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p225576"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhQYCvh8E0jZn5ToKjD4a8aNcvDhRzWuT9cJpgq4MDIwOBgbMzrMGvmTENDDl4HBgaGB1UiPA5LCmw/nX7H4XDoq4bN2kwOkDiDZgy7Q1pa2jb3h2wgfoPIOlZstMI6d7B4wA45FpC5lRkTmUF8oDizw+vAHXU5z5nA/Jh+FNqB6zqjQ/+hrx7h0Ywgdcc8eRgdWoGMXjYGkHoQcPiuEROvefqfPTMDw4qEkL/2D6tE3vUF/7EHyXFd/21/9syZnqnOv+2NjY2Vb//8ab9DrtX7fNpPkHzCDrmfIPHHa379AKt/WIWgtWP6hfzXfwerA7rB/vrigqMb9T6D+AvcH36yb3sd+GL63U/2dlzXlXf++QiyV2+u7AeQfEPO8/f26WlpeV197+0LbLncPXe9sweGK0PI47f2wuvcFZn43kLVvQbRD/x7X4Pc+cd84Suw+c7dL+wVW19zNh94bt/xOnBG28OnIHmd2z8fgeQVmg8gaBuu65MfskH4bI0PQf65fDT3Adj814FgusCA9779////43d53gHRQDW34bTbw6ota3ffBPPNO2+C1DP8u3LDvuV1YAf/9Bv2psbGk7/cvg4WZ9IG0wcWul4Dqa93TLgK4jtwrLlizwakOx2vgPk8TJfhNEjdgVMX7VOA6WRz2UWQvv3e5gga6N7ihNUX7Ccc+rpjD8N5sLvFbp6D03+BGnQ2nYXacwak//4FpdP2XzRi1A/YnQKJJwhEnESmgf4+Yf8PqM6/9zgoPJJzjx6zNzI2jjbQOgpSd+Dz3yMgeoFM1BH7qTNn3rQ2PAz2z4FTB+E0AAyCNLAoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p225581","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p225582"}}},"glyph":{"type":"object","name":"Line","id":"p225577","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p225578","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p225579","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p225591","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p225585","attributes":{"selected":{"type":"object","name":"Selection","id":"p225586","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p225587"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UaWxMURiGEcROFbWWoihV1U1bNX0705lOO9OZuffO3JmKNXaCqD2IBkFtQWoXxNYQhFhqF6S2kBKCEEsFse8hlopzjvf+mczNud/5vud9zjGGNT5cNLsy01C/nzP/NFvX4Hz6L/6vjq4Zt59se1gL/9/Xw633/dMqNzTC//VhOOOddLXJvnCua45V3ZK/x9dvyfWtMbL6z47a2Lb8LhLtxj8uPT68A7+PwuICnHWWdGSdTvhi337n/sXOrBeNAQk1347+2oV1u+FypKwYw/rdkVD/SkSx3oP7xGLTj5i4VvN6cr841H6+NHvPoV7cNx6pr6bt3/wpnvv3hmqnTgL7SIDcPbZDIvtJxP1rdSu+9UliX0kQcB6c9iazv2RYy8a9WDAqhX2mYLqo7p7bh/2mYt+OG7+brUtl32mo3PC39qMDaew/HRErezXddSmdc/SFa+EQgagv58lA0WxJNINz9cOxwguJVQ0tnM8CAcdSHp3JOTOhykWC8wJ71QPODZRH2w6uSMni/Fl4uu3h0cILWeRgxe82U06ZHit5WNFc6vDASi42qPIjbeRjQ97yftdrfLGRUzZG1Ll76+WcbPLKRtH8Cfeu1bWTmx0b5fhr7ORnx5GZW5+tjnKQowMCtkjIQZ4OvJl4UxiXQ645kDZYynPI14n2SjAnOTsh5BQ7OMk7F34lUC6552Ki6KbiWy7552GJLsXPYw552CnjauBiHi4pZ+tZ613MxQVpx+DObubjhqRvO+hmTm40OjmwR9eMfOaVD3UcruQzNw8k/Y+Gh/l5MEisvv3Ewxy9mLn7XFbZOC/z9KIkKpSz6YeXufpgemaIFT7m64PSe5GPOfsgT+OOGz7m7YPCHa4xdw3L5PICjflraDVvqohAowcaSuX2LzT6oCOpqqGYSKcXOpT+k3T6ocMr2ynT6YkOaVNilU5fDIxRgAx6Y0DSiCg26I8BpUeFQY8MhKkD46dPfmx5LQXw0ys/YtWF5KdffpwYLoXz07MAHOoAB+hbAPL2OloYoHcByNNVejxA/wL4IK+zvwF6aGLW+loCqUkfTSidl5j00sTacNmRST9NdNLGvhvaIkhPgzgk4x0QpK9BWMTpsG8P0tsg1HXyKkh/Q5DpxsSF6HEI4jL51WZKiD6HMFke95Mheh1CNfUU4B9AMR2uuAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/43ST0iTcRgH8J/rn4lh4ggPw4Z4EYMO70E6yPtGhISHGHQIEfYexFOIJ5FdnEiHiNgpPImLjomH8DA6tNcltsxikTrNbJsiJtO0JMpqvj3fZ+873+3dpu/lw/P8nt/z+/cKIYJ9bfWKECLpCTkhxXVse6oWqqGGWqVCCPdEew1UJOmCTcz3OatRb6pUxc9z7AlVWqX+HIvmrnM2dV33BiJnkPc7J04k7YvrTJWU77Qx/5RVGue4UDqng/NdgbLSeSpQZ5p82scx3c+RdD/+tEcgj6+kDlrvfjojm6I25fsnW62K/+W4UEniPO33D1QDkYM8Qw3ZuIS0zm9jndLSOeh9fhl9f+bM5vcR0739KKfa08PjdM7vxnp70H9vc7ecyYGtbxhnsd6d9R2blFbUjW2jT7qY9J9y3lQsDGwhDt54+NWq1v9yE7Ep1W0gdnd2r7PD2tpJFOOubN3ZoRTXm15dTSKm/8Iu/e+J248SMhmO9n+B3he3PluVJWkFcZ7oN9L7ifOtD5Zt0rg4nF/CunlSfXh0N456FuOOljy1JzcX+T4g1Q1eVxdyUl6pHJ/HuM1qx0fOFxN9tNkP3KfAcEcr54/Te20yhrqxaXeM7/PS8vtjzdCEK8/fyabZfc8Z+59Dv0Ss8a1V/ZlrFuPqxbtvyknvGeX14SG/4+uc1FeejM6g7+XVphnUafuZ6WIGXZ2cZ6mP7n/8Cg6O9EYwn+5ryuZ/faT5t7gFAAA="},"shape":[183],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p225592","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p225593"}}},"glyph":{"type":"object","name":"Line","id":"p225588","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p225589","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p225590","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p225601","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p225595","attributes":{"selected":{"type":"object","name":"Selection","id":"p225596","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p225597"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p225602","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p225603"}}},"glyph":{"type":"object","name":"Line","id":"p225598","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p225599","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p225600","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p225540","attributes":{"tools":[{"id":"p225553"},{"id":"p225554"},{"id":"p225555"},{"id":"p225563"},{"type":"object","name":"SaveTool","id":"p225564"},{"id":"p225605"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p225548","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p225549","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p225550"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p225551"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p225543","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p225544","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p225545"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p225546"}}}],"center":[{"type":"object","name":"Grid","id":"p225547","attributes":{"axis":{"id":"p225543"}}},{"type":"object","name":"Grid","id":"p225552","attributes":{"dimension":1,"axis":{"id":"p225548"}}},{"type":"object","name":"Legend","id":"p225583","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p225584","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p225580"}]}},{"type":"object","name":"LegendItem","id":"p225594","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p225591"}]}},{"type":"object","name":"LegendItem","id":"p225604","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p225601"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p225606","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p225616","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p225608"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p225617"},"y_scale":{"type":"object","name":"LinearScale","id":"p225618"},"title":{"type":"object","name":"Title","id":"p225609","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p225647","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p225641","attributes":{"selected":{"type":"object","name":"Selection","id":"p225642","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p225643"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFDQs+f/b3ur5nMNLNzI7GBsbc9+6+NO+RcCpwtPiin322q1h66Sv269etcpplfUHe3T9MD4AknMK4WAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p225648","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p225649"}}},"glyph":{"type":"object","name":"Line","id":"p225644","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p225645","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p225646","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p225656","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p225650","attributes":{"selected":{"type":"object","name":"Selection","id":"p225651","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p225652"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFDQs+f/b3ur5nMNLNzI7GBsbc9+6+NO+RcCpwtPiin322q1h66Sv269etcpplfUHe3T9MD4AknMK4WAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p225657","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p225658"}}},"glyph":{"type":"object","name":"Line","id":"p225653","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p225654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p225655","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p225667","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p225661","attributes":{"selected":{"type":"object","name":"Selection","id":"p225662","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p225663"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFDQs+f/b3ur5nMNLNzI7GBsbc9+6+NO+RcCpwtPiin322q1h66Sv269etcpplfUHe3T9MD4AknMK4WAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p225668","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p225669"}}},"glyph":{"type":"object","name":"Line","id":"p225664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p225665","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p225666","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p225677","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p225671","attributes":{"selected":{"type":"object","name":"Selection","id":"p225672","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p225673"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p225678","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p225679"}}},"glyph":{"type":"object","name":"Line","id":"p225674","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p225675","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p225676","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p225615","attributes":{"tools":[{"id":"p225629"},{"id":"p225630"},{"id":"p225631"},{"id":"p225639"},{"type":"object","name":"SaveTool","id":"p225640"},{"id":"p225681"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p225624","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p225625","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p225626"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p225627"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p225619","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p225620"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p225621"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p225622"}}}],"center":[{"type":"object","name":"Grid","id":"p225623","attributes":{"axis":{"id":"p225619"}}},{"type":"object","name":"Grid","id":"p225628","attributes":{"dimension":1,"axis":{"id":"p225624"}}},{"type":"object","name":"Legend","id":"p225659","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p225660","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p225656"}]}},{"type":"object","name":"LegendItem","id":"p225670","attributes":{"label":{"type":"value","value":"Median Year (1969)"},"renderers":[{"id":"p225667"}]}},{"type":"object","name":"LegendItem","id":"p225680","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p225677"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p225692","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c9292848-b566-4186-a04c-3d20e0f54f64","roots":{"p225693":"e0d2b11f-ea4f-445c-9410-5a37dfac5ad8"},"root_ids":["p225693"]}];
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