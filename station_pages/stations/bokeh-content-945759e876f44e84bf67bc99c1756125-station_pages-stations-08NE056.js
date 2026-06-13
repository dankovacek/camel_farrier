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
    
    
    const element = document.getElementById("b9c07d6c-f2c0-4539-ba08-9ab6de2720bf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b9c07d6c-f2c0-4539-ba08-9ab6de2720bf' but no matching script tag was found.")
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
                  const docs_json = '{"0772396f-890b-49d9-a126-19b5333e23da":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p506430","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p506431"}}},"roots":[{"type":"object","name":"Column","id":"p506594","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p506591","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p506590","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p506583","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p506454"},{"type":"object","name":"PanTool","id":"p506530"}]}},{"type":"object","name":"ToolProxy","id":"p506584","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p506455","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p506531","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p506585","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p506456","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p506457","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p506463","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p506462","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p506532","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p506533","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p506539","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p506538","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p506586","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p506464"},{"type":"object","name":"ResetTool","id":"p506540"}]}},{"type":"object","name":"SaveTool","id":"p506587"},{"type":"object","name":"ToolProxy","id":"p506588","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p506506","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p506589","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p506582","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p506432","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p506433"},"y_range":{"type":"object","name":"DataRange1d","id":"p506434"},"x_scale":{"type":"object","name":"LinearScale","id":"p506442"},"y_scale":{"type":"object","name":"LogScale","id":"p506443"},"title":{"type":"object","name":"Title","id":"p506435","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p506472","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p506466","attributes":{"selected":{"type":"object","name":"Selection","id":"p506467","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p506468"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8Y97b7f+TSd+vEtHrerrN3orrevTD2G32U2fO7LS4ttX+9///8f2HyKcvLy54+m7NVnsjY2NhN9Wt9gwMDAc+/92CQS8usOW61b/F/t////IRlrjpV4E7ziWYb7FPTkt7tn39ZnsDY2PteY6b7ZtfB1a8f7jJ/l6VyDK3qE32llzXL8+9tNH+xJkzf754bbR3e1gl4nN4Ayh8/l9bvMF+rftDrmkVG+z517kX3nq43v7X///7y/att697HZiR57Pe3pjr+mEZ23X23/7/r7c3XWd/q0rE78G1tfZJaWllhdJr7SVaX1+U51ljXySyTv7cn1X2X4DmrpYhTKvE9H/qtFkJ8uf+kskriKaB/izW/rYc5M56Wy7CdLotl/tz02X2X4Hhyda4lGj6rUbMdXaFpfZ//v+3f1i1ZNDRHzVi6jksltgvd394a5vGYvsfwHBf+XER0TQAo1obAigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p506473","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p506474"}}},"glyph":{"type":"object","name":"Line","id":"p506469","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p506470","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p506471","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p506481","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p506475","attributes":{"selected":{"type":"object","name":"Selection","id":"p506476","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p506477"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8Y97b7f+TSd+vEtHrerrN3orrevTD2G32U2fO7LS4ttX+9///8f2HyKcvLy54+m7NVnsjY2NhN9Wt9gwMDAc+/92CQS8usOW61b/F/t////IRlrjpV4E7ziWYb7FPTkt7tn39ZnsDY2PteY6b7ZtfB1a8f7jJ/l6VyDK3qE32llzXL8+9tNH+xJkzf754bbR3e1gl4nN4Ayh8/l9bvMF+rftDrmkVG+z517kX3nq43v7X///7y/att697HZiR57Pe3pjr+mEZ23X23/7/r7c3XWd/q0rE78G1tfZJaWllhdJr7SVaX1+U51ljXySyTv7cn1X2X4DmrpYhTKvE9H/qtFkJ8uf+kskriKaB/izW/rYc5M56Wy7CdLotl/tz02X2X4Hhyda4lGj6rUbMdXaFpfZ//v+3f1i1ZNDRHzVi6jksltgvd394a5vGYvsfwHBf+XER0TQAo1obAigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p506482","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p506483"}}},"glyph":{"type":"object","name":"Line","id":"p506478","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p506479","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p506480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p506492","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p506486","attributes":{"selected":{"type":"object","name":"Selection","id":"p506487","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p506488"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yt+eyDG2uC7fTGYZncQ2zShVSdF0AHCF3e4oPHR2OuPDFRc0eHoeZCAClRe3UGRO/KEk5gWVJ2OQ61b5/zAR/pQ9YYO70DGXjeC6jNxmHPvyzLzvaZQ/eYO3n96hOwXW0DNsXL4Kala59ZpDTXPxmGF+d6Xvvl2UHPtHVaBgQPUfEeHpp1lCetknaD2ODmAXLNpgjPUPhcHg+t8Z7Yyu0LtdXVgf3arcWeZG9R+d4f7IOe8dIe6w8NhGzPI555Q93g59AFdd+S8F9Rd3g4pYA/7QN3n4wD0HNACX6g7/RzAyjX8oe71d/gKMt43AOruAIfEdbIzstkDoe4PdAA6DmhhINQfQQ5g71YFQf0T5AAy7aNxMNRfwQ78YA3BUP+FOFRdng0M0RCoP0MdwN5LCIX6N9Qh6FH6lB+SYVB/hzmAjb8cBvV/uIMmKHp7wqHhEO4AVAyMgAhoeEQ4MIBBpAMAoezTGSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8Y97b7f8ToP8CFWi1b7P//f9/fP+hrSTTDAwMBz7/3WKPTv/7/18+wnKLPS4aZN+eks0g9/1f+XGTPdAd8Xy6m0D27y/K2AgWv7Z4A5z+BRQv27feHkZ/+/+/3t50nT2MBuqfL6W/1v4H0JzHS1fbfwHqXy2zCicNdNf+kskrQO7DSwPtq7flWg6yFyv9FehPtsal9oToP///2z+sWmJPLxoYDsBwXQQKD7w0APhsZcYoAgAA"},"shape":[69],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p506493","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p506494"}}},"glyph":{"type":"object","name":"Line","id":"p506489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p506490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p506491","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p506502","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p506496","attributes":{"selected":{"type":"object","name":"Selection","id":"p506497","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p506498"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p506503","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p506504"}}},"glyph":{"type":"object","name":"Line","id":"p506499","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p506500","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p506501","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p506441","attributes":{"tools":[{"id":"p506454"},{"id":"p506455"},{"id":"p506456"},{"id":"p506464"},{"type":"object","name":"SaveTool","id":"p506465"},{"id":"p506506"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p506449","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p506450","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p506451"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p506452"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p506444","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p506445","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p506446"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p506447"}}}],"center":[{"type":"object","name":"Grid","id":"p506448","attributes":{"axis":{"id":"p506444"}}},{"type":"object","name":"Grid","id":"p506453","attributes":{"dimension":1,"axis":{"id":"p506449"}}},{"type":"object","name":"Legend","id":"p506484","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p506485","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p506481"}]}},{"type":"object","name":"LegendItem","id":"p506495","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p506492"}]}},{"type":"object","name":"LegendItem","id":"p506505","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p506502"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p506507","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p506517","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p506509"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p506518"},"y_scale":{"type":"object","name":"LinearScale","id":"p506519"},"title":{"type":"object","name":"Title","id":"p506510","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p506548","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p506542","attributes":{"selected":{"type":"object","name":"Selection","id":"p506543","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p506544"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFp40wTXdYlb7V/t/b6P5cUKex1j42I566X2uPQDAOwu6OxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p506549","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p506550"}}},"glyph":{"type":"object","name":"Line","id":"p506545","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p506546","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p506547","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p506557","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p506551","attributes":{"selected":{"type":"object","name":"Selection","id":"p506552","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p506553"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFp40wTXdYlb7V/t/b6P5cUKex1j42I566X2uPQDAOwu6OxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p506558","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p506559"}}},"glyph":{"type":"object","name":"Line","id":"p506554","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p506555","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p506556","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p506568","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p506562","attributes":{"selected":{"type":"object","name":"Selection","id":"p506563","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p506564"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFp40wTXdYlb7V/t/b6P5cUKex1j42I566X2uPQDAOwu6OxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p506569","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p506570"}}},"glyph":{"type":"object","name":"Line","id":"p506565","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p506566","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p506567","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p506578","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p506572","attributes":{"selected":{"type":"object","name":"Selection","id":"p506573","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p506574"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p506579","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p506580"}}},"glyph":{"type":"object","name":"Line","id":"p506575","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p506576","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p506577","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p506516","attributes":{"tools":[{"id":"p506530"},{"id":"p506531"},{"id":"p506532"},{"id":"p506540"},{"type":"object","name":"SaveTool","id":"p506541"},{"id":"p506582"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p506525","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p506526","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p506527"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p506528"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p506520","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p506521"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p506522"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p506523"}}}],"center":[{"type":"object","name":"Grid","id":"p506524","attributes":{"axis":{"id":"p506520"}}},{"type":"object","name":"Grid","id":"p506529","attributes":{"dimension":1,"axis":{"id":"p506525"}}},{"type":"object","name":"Legend","id":"p506560","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p506561","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p506557"}]}},{"type":"object","name":"LegendItem","id":"p506571","attributes":{"label":{"type":"value","value":"Median Year (1940)"},"renderers":[{"id":"p506568"}]}},{"type":"object","name":"LegendItem","id":"p506581","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p506578"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p506593","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"0772396f-890b-49d9-a126-19b5333e23da","roots":{"p506594":"b9c07d6c-f2c0-4539-ba08-9ab6de2720bf"},"root_ids":["p506594"]}];
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