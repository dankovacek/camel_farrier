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
    
    
    const element = document.getElementById("bbdf9b3e-fedd-4168-9002-30742be6d041");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bbdf9b3e-fedd-4168-9002-30742be6d041' but no matching script tag was found.")
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
                  const docs_json = '{"be5ed997-be41-4ec1-9a7c-4f4ecbb0573a":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p226086","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p226087"}}},"roots":[{"type":"object","name":"Column","id":"p226250","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p226247","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p226246","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p226239","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p226110"},{"type":"object","name":"PanTool","id":"p226186"}]}},{"type":"object","name":"ToolProxy","id":"p226240","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p226111","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p226187","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p226241","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p226112","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p226113","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p226119","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p226118","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p226188","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p226189","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p226195","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p226194","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p226242","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p226120"},{"type":"object","name":"ResetTool","id":"p226196"}]}},{"type":"object","name":"SaveTool","id":"p226243"},{"type":"object","name":"ToolProxy","id":"p226244","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p226162","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p226245","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p226238","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p226088","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p226089"},"y_range":{"type":"object","name":"DataRange1d","id":"p226090"},"x_scale":{"type":"object","name":"LinearScale","id":"p226098"},"y_scale":{"type":"object","name":"LogScale","id":"p226099"},"title":{"type":"object","name":"Title","id":"p226091","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p226128","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226122","attributes":{"selected":{"type":"object","name":"Selection","id":"p226123","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226124"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhQYCvh8E0jZn5ToKjD4a8aNcvDhRzWuT9cJpgq4MDIwOBgbMzrMGvmTENDDl4HBgaGB1UiPA5LCmw/nX7H4XDoq4bN2kwOkDiDZgy7Q1pa2jb3h2wgfoPIOlZstMI6d7B4wA45FpC5lRkTmUF8oDizw+vAHXU5z5nA/Jh+FNqB6zqjQ/+hrx7h0Ywgdcc8eRgdWoGMXjYGkHoQcPiuEROvefqfPTMDw4qEkL/2D6tE3vUF/7EHyXFd/21/9syZnqnOv+2NjY2Vb//8ab9DrtX7fNpPkHzCDrmfIPHHa379AKt/WIWgtWP6hfzXfwerA7rB/vrigqMb9T6D+AvcH36yb3sd+GL63U/2dlzXlXf++QiyV2+u7AeQfEPO8/f26WlpeV197+0LbLncPXe9sweGK0PI47f2wuvcFZn43kLVvQbRD/x7X4Pc+cd84Suw+c7dL+wVW19zNh94bt/xOnBG28OnIHmd2z8fgeQVmg8gaBuu65MfskH4bI0PQf65fDT3Adj814FgusCA9779////43d53gHRQDW34bTbw6ota3ffBPPNO2+C1DP8u3LDvuV1YAf/9Bv2psbGk7/cvg4WZ9IG0wcWul4Dqa93TLgK4jtwrLlizwakOx2vgPk8TJfhNEjdgVMX7VOA6WRz2UWQvv3e5gga6N7ihNUX7Ccc+rpjD8N5sLvFbp6D03+BGnQ2nYXacwak//4FpdP2XzRi1A/YnQKJJwhEnESmgf4+Yf8PqM6/9zgoPJJzjx6zNzI2jjbQOgpSd+Dz3yMgeoFM1BH7qTNn3rQ2PAz2z4FTB+E0AAyCNLAoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226129","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226130"}}},"glyph":{"type":"object","name":"Line","id":"p226125","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p226126","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p226127","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p226137","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226131","attributes":{"selected":{"type":"object","name":"Selection","id":"p226132","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226133"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhQYCvh8E0jZn5ToKjD4a8aNcvDhRzWuT9cJpgq4MDIwOBgbMzrMGvmTENDDl4HBgaGB1UiPA5LCmw/nX7H4XDoq4bN2kwOkDiDZgy7Q1pa2jb3h2wgfoPIOlZstMI6d7B4wA45FpC5lRkTmUF8oDizw+vAHXU5z5nA/Jh+FNqB6zqjQ/+hrx7h0Ywgdcc8eRgdWoGMXjYGkHoQcPiuEROvefqfPTMDw4qEkL/2D6tE3vUF/7EHyXFd/21/9syZnqnOv+2NjY2Vb//8ab9DrtX7fNpPkHzCDrmfIPHHa379AKt/WIWgtWP6hfzXfwerA7rB/vrigqMb9T6D+AvcH36yb3sd+GL63U/2dlzXlXf++QiyV2+u7AeQfEPO8/f26WlpeV197+0LbLncPXe9sweGK0PI47f2wuvcFZn43kLVvQbRD/x7X4Pc+cd84Suw+c7dL+wVW19zNh94bt/xOnBG28OnIHmd2z8fgeQVmg8gaBuu65MfskH4bI0PQf65fDT3Adj814FgusCA9779////43d53gHRQDW34bTbw6ota3ffBPPNO2+C1DP8u3LDvuV1YAf/9Bv2psbGk7/cvg4WZ9IG0wcWul4Dqa93TLgK4jtwrLlizwakOx2vgPk8TJfhNEjdgVMX7VOA6WRz2UWQvv3e5gga6N7ihNUX7Ccc+rpjD8N5sLvFbp6D03+BGnQ2nYXacwak//4FpdP2XzRi1A/YnQKJJwhEnESmgf4+Yf8PqM6/9zgoPJJzjx6zNzI2jjbQOgpSd+Dz3yMgeoFM1BH7qTNn3rQ2PAz2z4FTB+E0AAyCNLAoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226138","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226139"}}},"glyph":{"type":"object","name":"Line","id":"p226134","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p226135","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p226136","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p226148","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226142","attributes":{"selected":{"type":"object","name":"Selection","id":"p226143","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226144"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UaWxMURiGEcROFbWWoihV1U1bNX0705lOO9OZuffO3JmKNXaCqD2IBkFtQWoXxNYQhFhqF6S2kBKCEEsFse8hlopzjvf+mczNud/5vud9zjGGNT5cNLsy01C/nzP/NFvX4Hz6L/6vjq4Zt59se1gL/9/Xw633/dMqNzTC//VhOOOddLXJvnCua45V3ZK/x9dvyfWtMbL6z47a2Lb8LhLtxj8uPT68A7+PwuICnHWWdGSdTvhi337n/sXOrBeNAQk1347+2oV1u+FypKwYw/rdkVD/SkSx3oP7xGLTj5i4VvN6cr841H6+NHvPoV7cNx6pr6bt3/wpnvv3hmqnTgL7SIDcPbZDIvtJxP1rdSu+9UliX0kQcB6c9iazv2RYy8a9WDAqhX2mYLqo7p7bh/2mYt+OG7+brUtl32mo3PC39qMDaew/HRErezXddSmdc/SFa+EQgagv58lA0WxJNINz9cOxwguJVQ0tnM8CAcdSHp3JOTOhykWC8wJ71QPODZRH2w6uSMni/Fl4uu3h0cILWeRgxe82U06ZHit5WNFc6vDASi42qPIjbeRjQ97yftdrfLGRUzZG1Ll76+WcbPLKRtH8Cfeu1bWTmx0b5fhr7ORnx5GZW5+tjnKQowMCtkjIQZ4OvJl4UxiXQ645kDZYynPI14n2SjAnOTsh5BQ7OMk7F34lUC6552Ki6KbiWy7552GJLsXPYw552CnjauBiHi4pZ+tZ613MxQVpx+DObubjhqRvO+hmTm40OjmwR9eMfOaVD3UcruQzNw8k/Y+Gh/l5MEisvv3Ewxy9mLn7XFbZOC/z9KIkKpSz6YeXufpgemaIFT7m64PSe5GPOfsgT+OOGz7m7YPCHa4xdw3L5PICjflraDVvqohAowcaSuX2LzT6oCOpqqGYSKcXOpT+k3T6ocMr2ynT6YkOaVNilU5fDIxRgAx6Y0DSiCg26I8BpUeFQY8MhKkD46dPfmx5LQXw0ys/YtWF5KdffpwYLoXz07MAHOoAB+hbAPL2OloYoHcByNNVejxA/wL4IK+zvwF6aGLW+loCqUkfTSidl5j00sTacNmRST9NdNLGvhvaIkhPgzgk4x0QpK9BWMTpsG8P0tsg1HXyKkh/Q5DpxsSF6HEI4jL51WZKiD6HMFke95Mheh1CNfUU4B9AMR2uuAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/43ST0iTcRgH8J/rn4lh4ggPw4Z4EYMO70E6yPtGhISHGHQIEfYexFOIJ5FdnEiHiNgpPImLjomH8DA6tNcltsxikTrNbJsiJtO0JMpqvj3fZ+873+3dpu/lw/P8nt/z+/cKIYJ9bfWKECLpCTkhxXVse6oWqqGGWqVCCPdEew1UJOmCTcz3OatRb6pUxc9z7AlVWqX+HIvmrnM2dV33BiJnkPc7J04k7YvrTJWU77Qx/5RVGue4UDqng/NdgbLSeSpQZ5p82scx3c+RdD/+tEcgj6+kDlrvfjojm6I25fsnW62K/+W4UEniPO33D1QDkYM8Qw3ZuIS0zm9jndLSOeh9fhl9f+bM5vcR0739KKfa08PjdM7vxnp70H9vc7ecyYGtbxhnsd6d9R2blFbUjW2jT7qY9J9y3lQsDGwhDt54+NWq1v9yE7Ep1W0gdnd2r7PD2tpJFOOubN3ZoRTXm15dTSKm/8Iu/e+J248SMhmO9n+B3he3PluVJWkFcZ7oN9L7ifOtD5Zt0rg4nF/CunlSfXh0N456FuOOljy1JzcX+T4g1Q1eVxdyUl6pHJ/HuM1qx0fOFxN9tNkP3KfAcEcr54/Te20yhrqxaXeM7/PS8vtjzdCEK8/fyabZfc8Z+59Dv0Ss8a1V/ZlrFuPqxbtvyknvGeX14SG/4+uc1FeejM6g7+XVphnUafuZ6WIGXZ2cZ6mP7n/8Cg6O9EYwn+5ryuZ/faT5t7gFAAA="},"shape":[183],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226149","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226150"}}},"glyph":{"type":"object","name":"Line","id":"p226145","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p226146","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p226147","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p226158","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226152","attributes":{"selected":{"type":"object","name":"Selection","id":"p226153","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226154"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p226159","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226160"}}},"glyph":{"type":"object","name":"Line","id":"p226155","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p226156","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p226157","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p226097","attributes":{"tools":[{"id":"p226110"},{"id":"p226111"},{"id":"p226112"},{"id":"p226120"},{"type":"object","name":"SaveTool","id":"p226121"},{"id":"p226162"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p226105","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p226106","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p226107"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p226108"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p226100","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p226101","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p226102"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p226103"}}}],"center":[{"type":"object","name":"Grid","id":"p226104","attributes":{"axis":{"id":"p226100"}}},{"type":"object","name":"Grid","id":"p226109","attributes":{"dimension":1,"axis":{"id":"p226105"}}},{"type":"object","name":"Legend","id":"p226140","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p226141","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p226137"}]}},{"type":"object","name":"LegendItem","id":"p226151","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p226148"}]}},{"type":"object","name":"LegendItem","id":"p226161","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p226158"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p226163","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p226173","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p226165"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p226174"},"y_scale":{"type":"object","name":"LinearScale","id":"p226175"},"title":{"type":"object","name":"Title","id":"p226166","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p226204","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226198","attributes":{"selected":{"type":"object","name":"Selection","id":"p226199","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226200"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFDQs+f/b3ur5nMNLNzI7GBsbc9+6+NO+RcCpwtPiin322q1h66Sv269etcpplfUHe3T9MD4AknMK4WAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226205","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226206"}}},"glyph":{"type":"object","name":"Line","id":"p226201","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p226202","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p226203","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p226213","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226207","attributes":{"selected":{"type":"object","name":"Selection","id":"p226208","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226209"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFDQs+f/b3ur5nMNLNzI7GBsbc9+6+NO+RcCpwtPiin322q1h66Sv269etcpplfUHe3T9MD4AknMK4WAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226214","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226215"}}},"glyph":{"type":"object","name":"Line","id":"p226210","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p226211","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p226212","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p226224","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226218","attributes":{"selected":{"type":"object","name":"Selection","id":"p226219","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226220"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiRYUFDQs+f/b3ur5nMNLNzI7GBsbc9+6+NO+RcCpwtPiin322q1h66Sv269etcpplfUHe3T9MD4AknMK4WAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226225","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226226"}}},"glyph":{"type":"object","name":"Line","id":"p226221","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p226222","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p226223","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p226234","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226228","attributes":{"selected":{"type":"object","name":"Selection","id":"p226229","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226230"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p226235","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226236"}}},"glyph":{"type":"object","name":"Line","id":"p226231","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p226232","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p226233","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p226172","attributes":{"tools":[{"id":"p226186"},{"id":"p226187"},{"id":"p226188"},{"id":"p226196"},{"type":"object","name":"SaveTool","id":"p226197"},{"id":"p226238"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p226181","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p226182","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p226183"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p226184"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p226176","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p226177"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p226178"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p226179"}}}],"center":[{"type":"object","name":"Grid","id":"p226180","attributes":{"axis":{"id":"p226176"}}},{"type":"object","name":"Grid","id":"p226185","attributes":{"dimension":1,"axis":{"id":"p226181"}}},{"type":"object","name":"Legend","id":"p226216","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p226217","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p226213"}]}},{"type":"object","name":"LegendItem","id":"p226227","attributes":{"label":{"type":"value","value":"Median Year (1969)"},"renderers":[{"id":"p226224"}]}},{"type":"object","name":"LegendItem","id":"p226237","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p226234"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p226249","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"be5ed997-be41-4ec1-9a7c-4f4ecbb0573a","roots":{"p226250":"bbdf9b3e-fedd-4168-9002-30742be6d041"},"root_ids":["p226250"]}];
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