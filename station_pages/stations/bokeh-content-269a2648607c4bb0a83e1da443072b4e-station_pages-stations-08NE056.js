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
    
    
    const element = document.getElementById("dc421412-a58c-49ba-aac5-422c026023a1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dc421412-a58c-49ba-aac5-422c026023a1' but no matching script tag was found.")
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
                  const docs_json = '{"e75a3166-90c9-4a66-af94-78a16436da03":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p703318","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p703319"}}},"roots":[{"type":"object","name":"Column","id":"p703482","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p703479","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p703478","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p703471","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p703342"},{"type":"object","name":"PanTool","id":"p703418"}]}},{"type":"object","name":"ToolProxy","id":"p703472","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p703343","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p703419","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p703473","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p703344","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p703345","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p703351","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p703350","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p703420","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p703421","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p703427","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p703426","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p703474","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p703352"},{"type":"object","name":"ResetTool","id":"p703428"}]}},{"type":"object","name":"SaveTool","id":"p703475"},{"type":"object","name":"ToolProxy","id":"p703476","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p703394","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p703477","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p703470","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p703320","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p703321"},"y_range":{"type":"object","name":"DataRange1d","id":"p703322"},"x_scale":{"type":"object","name":"LinearScale","id":"p703330"},"y_scale":{"type":"object","name":"LogScale","id":"p703331"},"title":{"type":"object","name":"Title","id":"p703323","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p703360","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p703354","attributes":{"selected":{"type":"object","name":"Selection","id":"p703355","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p703356"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8Y97b7f+TSd+vEtHrerrN3orrevTD2G32U2fO7LS4ttX+9///8f2HyKcvLy54+m7NVnsjY2NhN9Wt9gwMDAc+/92CQS8usOW61b/F/t////IRlrjpV4E7ziWYb7FPTkt7tn39ZnsDY2PteY6b7ZtfB1a8f7jJ/l6VyDK3qE32llzXL8+9tNH+xJkzf754bbR3e1gl4nN4Ayh8/l9bvMF+rftDrmkVG+z517kX3nq43v7X///7y/att697HZiR57Pe3pjr+mEZ23X23/7/r7c3XWd/q0rE78G1tfZJaWllhdJr7SVaX1+U51ljXySyTv7cn1X2X4DmrpYhTKvE9H/qtFkJ8uf+kskriKaB/izW/rYc5M56Wy7CdLotl/tz02X2X4Hhyda4lGj6rUbMdXaFpfZ//v+3f1i1ZNDRHzVi6jksltgvd394a5vGYvsfwHBf+XER0TQAo1obAigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p703361","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p703362"}}},"glyph":{"type":"object","name":"Line","id":"p703357","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p703358","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p703359","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p703369","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p703363","attributes":{"selected":{"type":"object","name":"Selection","id":"p703364","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p703365"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8Y97b7f+TSd+vEtHrerrN3orrevTD2G32U2fO7LS4ttX+9///8f2HyKcvLy54+m7NVnsjY2NhN9Wt9gwMDAc+/92CQS8usOW61b/F/t////IRlrjpV4E7ziWYb7FPTkt7tn39ZnsDY2PteY6b7ZtfB1a8f7jJ/l6VyDK3qE32llzXL8+9tNH+xJkzf754bbR3e1gl4nN4Ayh8/l9bvMF+rftDrmkVG+z517kX3nq43v7X///7y/att697HZiR57Pe3pjr+mEZ23X23/7/r7c3XWd/q0rE78G1tfZJaWllhdJr7SVaX1+U51ljXySyTv7cn1X2X4DmrpYhTKvE9H/qtFkJ8uf+kskriKaB/izW/rYc5M56Wy7CdLotl/tz02X2X4Hhyda4lGj6rUbMdXaFpfZ//v+3f1i1ZNDRHzVi6jksltgvd394a5vGYvsfwHBf+XER0TQAo1obAigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p703370","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p703371"}}},"glyph":{"type":"object","name":"Line","id":"p703366","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p703367","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p703368","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p703380","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p703374","attributes":{"selected":{"type":"object","name":"Selection","id":"p703375","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p703376"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yt+eyDG2uC7fTGYZncQ2zShVSdF0AHCF3e4oPHR2OuPDFRc0eHoeZCAClRe3UGRO/KEk5gWVJ2OQ61b5/zAR/pQ9YYO70DGXjeC6jNxmHPvyzLzvaZQ/eYO3n96hOwXW0DNsXL4Kala59ZpDTXPxmGF+d6Xvvl2UHPtHVaBgQPUfEeHpp1lCetknaD2ODmAXLNpgjPUPhcHg+t8Z7Yyu0LtdXVgf3arcWeZG9R+d4f7IOe8dIe6w8NhGzPI555Q93g59AFdd+S8F9Rd3g4pYA/7QN3n4wD0HNACX6g7/RzAyjX8oe71d/gKMt43AOruAIfEdbIzstkDoe4PdAA6DmhhINQfQQ5g71YFQf0T5AAy7aNxMNRfwQ78YA3BUP+FOFRdng0M0RCoP0MdwN5LCIX6N9Qh6FH6lB+SYVB/hzmAjb8cBvV/uIMmKHp7wqHhEO4AVAyMgAhoeEQ4MIBBpAMAoezTGSgCAAA="},"shape":[69],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8Y97b7f8ToP8CFWi1b7P//f9/fP+hrSTTDAwMBz7/3WKPTv/7/18+wnKLPS4aZN+eks0g9/1f+XGTPdAd8Xy6m0D27y/K2AgWv7Z4A5z+BRQv27feHkZ/+/+/3t50nT2MBuqfL6W/1v4H0JzHS1fbfwHqXy2zCicNdNf+kskrQO7DSwPtq7flWg6yFyv9FehPtsal9oToP///2z+sWmJPLxoYDsBwXQQKD7w0APhsZcYoAgAA"},"shape":[69],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p703381","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p703382"}}},"glyph":{"type":"object","name":"Line","id":"p703377","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p703378","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p703379","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p703390","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p703384","attributes":{"selected":{"type":"object","name":"Selection","id":"p703385","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p703386"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p703391","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p703392"}}},"glyph":{"type":"object","name":"Line","id":"p703387","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p703388","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p703389","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p703329","attributes":{"tools":[{"id":"p703342"},{"id":"p703343"},{"id":"p703344"},{"id":"p703352"},{"type":"object","name":"SaveTool","id":"p703353"},{"id":"p703394"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p703337","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p703338","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p703339"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p703340"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p703332","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p703333","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p703334"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p703335"}}}],"center":[{"type":"object","name":"Grid","id":"p703336","attributes":{"axis":{"id":"p703332"}}},{"type":"object","name":"Grid","id":"p703341","attributes":{"dimension":1,"axis":{"id":"p703337"}}},{"type":"object","name":"Legend","id":"p703372","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p703373","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p703369"}]}},{"type":"object","name":"LegendItem","id":"p703383","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p703380"}]}},{"type":"object","name":"LegendItem","id":"p703393","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p703390"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p703395","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p703405","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p703397"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p703406"},"y_scale":{"type":"object","name":"LinearScale","id":"p703407"},"title":{"type":"object","name":"Title","id":"p703398","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p703436","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p703430","attributes":{"selected":{"type":"object","name":"Selection","id":"p703431","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p703432"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFp40wTXdYlb7V/t/b6P5cUKex1j42I566X2uPQDAOwu6OxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p703437","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p703438"}}},"glyph":{"type":"object","name":"Line","id":"p703433","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p703434","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p703435","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p703445","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p703439","attributes":{"selected":{"type":"object","name":"Selection","id":"p703440","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p703441"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFp40wTXdYlb7V/t/b6P5cUKex1j42I566X2uPQDAOwu6OxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p703446","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p703447"}}},"glyph":{"type":"object","name":"Line","id":"p703442","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p703443","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p703444","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p703456","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p703450","attributes":{"selected":{"type":"object","name":"Selection","id":"p703451","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p703452"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCFp40wTXdYlb7V/t/b6P5cUKex1j42I566X2uPQDAOwu6OxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p703457","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p703458"}}},"glyph":{"type":"object","name":"Line","id":"p703453","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p703454","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p703455","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p703466","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p703460","attributes":{"selected":{"type":"object","name":"Selection","id":"p703461","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p703462"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p703467","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p703468"}}},"glyph":{"type":"object","name":"Line","id":"p703463","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p703464","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p703465","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p703404","attributes":{"tools":[{"id":"p703418"},{"id":"p703419"},{"id":"p703420"},{"id":"p703428"},{"type":"object","name":"SaveTool","id":"p703429"},{"id":"p703470"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p703413","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p703414","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p703415"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p703416"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p703408","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p703409"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p703410"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p703411"}}}],"center":[{"type":"object","name":"Grid","id":"p703412","attributes":{"axis":{"id":"p703408"}}},{"type":"object","name":"Grid","id":"p703417","attributes":{"dimension":1,"axis":{"id":"p703413"}}},{"type":"object","name":"Legend","id":"p703448","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p703449","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p703445"}]}},{"type":"object","name":"LegendItem","id":"p703459","attributes":{"label":{"type":"value","value":"Median Year (1940)"},"renderers":[{"id":"p703456"}]}},{"type":"object","name":"LegendItem","id":"p703469","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p703466"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p703481","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"e75a3166-90c9-4a66-af94-78a16436da03","roots":{"p703482":"dc421412-a58c-49ba-aac5-422c026023a1"},"root_ids":["p703482"]}];
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