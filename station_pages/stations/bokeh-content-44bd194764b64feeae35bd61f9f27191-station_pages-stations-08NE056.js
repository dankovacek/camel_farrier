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
    
    
    const element = document.getElementById("a744ef3a-29c6-4e4c-8221-0ab88e14ecdc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a744ef3a-29c6-4e4c-8221-0ab88e14ecdc' but no matching script tag was found.")
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
                  const docs_json = '{"38c65a91-1829-4dda-a797-4510ac5690ef":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p507028","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p507029"}}},"roots":[{"type":"object","name":"Column","id":"p507192","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p507189","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p507188","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p507181","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p507052"},{"type":"object","name":"PanTool","id":"p507128"}]}},{"type":"object","name":"ToolProxy","id":"p507182","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p507053","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p507129","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p507183","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p507054","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p507055","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p507061","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p507060","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p507130","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p507131","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p507137","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p507136","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p507184","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p507062"},{"type":"object","name":"ResetTool","id":"p507138"}]}},{"type":"object","name":"SaveTool","id":"p507185"},{"type":"object","name":"ToolProxy","id":"p507186","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p507104","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p507187","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p507180","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p507030","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p507031"},"y_range":{"type":"object","name":"DataRange1d","id":"p507032"},"x_scale":{"type":"object","name":"LinearScale","id":"p507040"},"y_scale":{"type":"object","name":"LogScale","id":"p507041"},"title":{"type":"object","name":"Title","id":"p507033","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p507070","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507064","attributes":{"selected":{"type":"object","name":"Selection","id":"p507065","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507066"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8Y97b7f+TSd+vEtHrerrN3orrevTD2G32U2fO7LS4ttX+9///8f2HyKcvLy54+m7NVnsjY2NhN9Wt9gwMDAc+/92CQS8usOW61b/F/t////IRlrjpV4E7ziWYb7FPTkt7tn39ZnsDY2PteY6b7ZtfB1a8f7jJ/l6VyDK3qE32llzXL8+9tNH+xJkzf754bbR3e1gl4nN4Ayh8/l9bvMF+rftDrmkVG+z517kX3nq43v7X///7y/att697HZiR57Pe3pjr+mEZ23X23/7/r7c3XWd/q0rE78G1tfZJaWllhdJr7SVaX1+U51ljXySyTv7cn1X2X4DmrpYhTKvE9H/qtFkJ8uf+kskriKaB/izW/rYc5M56Wy7CdLotl/tz02X2X4Hhyda4lGj6rUbMdXaFpfZ//v+3f1i1ZNDRHzVi6jksltgvd394a5vGYvsfwHBf+XER0TQAo1obAigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507071","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507072"}}},"glyph":{"type":"object","name":"Line","id":"p507067","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507068","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507069","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p507079","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507073","attributes":{"selected":{"type":"object","name":"Selection","id":"p507074","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507075"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8Y97b7f+TSd+vEtHrerrN3orrevTD2G32U2fO7LS4ttX+9///8f2HyKcvLy54+m7NVnsjY2NhN9Wt9gwMDAc+/92CQS8usOW61b/F/t////IRlrjpV4E7ziWYb7FPTkt7tn39ZnsDY2PteY6b7ZtfB1a8f7jJ/l6VyDK3qE32llzXL8+9tNH+xJkzf754bbR3e1gl4nN4Ayh8/l9bvMF+rftDrmkVG+z517kX3nq43v7X///7y/att697HZiR57Pe3pjr+mEZ23X23/7/r7c3XWd/q0rE78G1tfZJaWllhdJr7SVaX1+U51ljXySyTv7cn1X2X4DmrpYhTKvE9H/qtFkJ8uf+kskriKaB/izW/rYc5M56Wy7CdLotl/tz02X2X4Hhyda4lGj6rUbMdXaFpfZ//v+3f1i1ZNDRHzVi6jksltgvd394a5vGYvsfwHBf+XER0TQAo1obAigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507080","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507081"}}},"glyph":{"type":"object","name":"Line","id":"p507076","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507077","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p507078","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p507090","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507084","attributes":{"selected":{"type":"object","name":"Selection","id":"p507085","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507086"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yt+eyDG2uC7fTGYZncQ2zShVSdF0AHCF3e4oPHR2OuPDFRc0eHoeZCAClRe3UGRO/KEk5gWVJ2OQ61b5/zAR/pQ9YYO70DGXjeC6jNxmHPvyzLzvaZQ/eYO3n96hOwXW0DNsXL4Kala59ZpDTXPxmGF+d6Xvvl2UHPtHVaBgQPUfEeHpp1lCetknaD2ODmAXLNpgjPUPhcHg+t8Z7Yyu0LtdXVgf3arcWeZG9R+d4f7IOe8dIe6w8NhGzPI555Q93g59AFdd+S8F9Rd3g4pYA/7QN3n4wD0HNACX6g7/RzAyjX8oe71d/gKMt43AOruAIfEdbIzstkDoe4PdAA6DmhhINQfQQ5g71YFQf0T5AAy7aNxMNRfwQ78YA3BUP+FOFRdng0M0RCoP0MdwN5LCIX6N9Qh6FH6lB+SYVB/hzmAjb8cBvV/uIMmKHp7wqHhEO4AVAyMgAhoeEQ4MIBBpAMAoezTGSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8Y97b7f8ToP8CFWi1b7P//f9/fP+hrSTTDAwMBz7/3WKPTv/7/18+wnKLPS4aZN+eks0g9/1f+XGTPdAd8Xy6m0D27y/K2AgWv7Z4A5z+BRQv27feHkZ/+/+/3t50nT2MBuqfL6W/1v4H0JzHS1fbfwHqXy2zCicNdNf+kskrQO7DSwPtq7flWg6yFyv9FehPtsal9oToP///2z+sWmJPLxoYDsBwXQQKD7w0APhsZcYoAgAA"},"shape":[69],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507091","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507092"}}},"glyph":{"type":"object","name":"Line","id":"p507087","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507088","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p507089","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p507100","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507094","attributes":{"selected":{"type":"object","name":"Selection","id":"p507095","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507096"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p507101","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507102"}}},"glyph":{"type":"object","name":"Line","id":"p507097","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507098","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507099","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p507039","attributes":{"tools":[{"id":"p507052"},{"id":"p507053"},{"id":"p507054"},{"id":"p507062"},{"type":"object","name":"SaveTool","id":"p507063"},{"id":"p507104"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p507047","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p507048","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p507049"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507050"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p507042","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p507043","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p507044"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507045"}}}],"center":[{"type":"object","name":"Grid","id":"p507046","attributes":{"axis":{"id":"p507042"}}},{"type":"object","name":"Grid","id":"p507051","attributes":{"dimension":1,"axis":{"id":"p507047"}}},{"type":"object","name":"Legend","id":"p507082","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p507083","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p507079"}]}},{"type":"object","name":"LegendItem","id":"p507093","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p507090"}]}},{"type":"object","name":"LegendItem","id":"p507103","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p507100"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p507105","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p507115","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p507107"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p507116"},"y_scale":{"type":"object","name":"LinearScale","id":"p507117"},"title":{"type":"object","name":"Title","id":"p507108","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p507146","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507140","attributes":{"selected":{"type":"object","name":"Selection","id":"p507141","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507142"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFp40wTXdYlb7V/t/b6P5cUKex1j42I566X2uPQDAOwu6OxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507147","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507148"}}},"glyph":{"type":"object","name":"Line","id":"p507143","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507144","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507145","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p507155","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507149","attributes":{"selected":{"type":"object","name":"Selection","id":"p507150","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507151"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFp40wTXdYlb7V/t/b6P5cUKex1j42I566X2uPQDAOwu6OxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507156","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507157"}}},"glyph":{"type":"object","name":"Line","id":"p507152","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507153","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p507154","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p507166","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507160","attributes":{"selected":{"type":"object","name":"Selection","id":"p507161","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507162"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFp40wTXdYlb7V/t/b6P5cUKex1j42I566X2uPQDAOwu6OxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p507167","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507168"}}},"glyph":{"type":"object","name":"Line","id":"p507163","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p507165","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p507176","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p507170","attributes":{"selected":{"type":"object","name":"Selection","id":"p507171","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p507172"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p507177","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p507178"}}},"glyph":{"type":"object","name":"Line","id":"p507173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p507174","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p507175","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p507114","attributes":{"tools":[{"id":"p507128"},{"id":"p507129"},{"id":"p507130"},{"id":"p507138"},{"type":"object","name":"SaveTool","id":"p507139"},{"id":"p507180"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p507123","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p507124","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p507125"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p507126"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p507118","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p507119"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p507120"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p507121"}}}],"center":[{"type":"object","name":"Grid","id":"p507122","attributes":{"axis":{"id":"p507118"}}},{"type":"object","name":"Grid","id":"p507127","attributes":{"dimension":1,"axis":{"id":"p507123"}}},{"type":"object","name":"Legend","id":"p507158","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p507159","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p507155"}]}},{"type":"object","name":"LegendItem","id":"p507169","attributes":{"label":{"type":"value","value":"Median Year (1940)"},"renderers":[{"id":"p507166"}]}},{"type":"object","name":"LegendItem","id":"p507179","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p507176"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p507191","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"38c65a91-1829-4dda-a797-4510ac5690ef","roots":{"p507192":"a744ef3a-29c6-4e4c-8221-0ab88e14ecdc"},"root_ids":["p507192"]}];
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