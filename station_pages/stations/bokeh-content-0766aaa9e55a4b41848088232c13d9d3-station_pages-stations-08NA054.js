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
    
    
    const element = document.getElementById("a2164c27-de9c-4333-a766-b6a1481445f3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a2164c27-de9c-4333-a766-b6a1481445f3' but no matching script tag was found.")
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
                  const docs_json = '{"97f25edd-aee7-4417-9b06-91042770348f":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p669867","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p669868"}}},"roots":[{"type":"object","name":"Column","id":"p670031","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p670028","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p670027","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p670020","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p669891"},{"type":"object","name":"PanTool","id":"p669967"}]}},{"type":"object","name":"ToolProxy","id":"p670021","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p669892","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p669968","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p670022","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p669893","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p669894","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p669900","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p669899","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p669969","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p669970","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p669976","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p669975","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p670023","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p669901"},{"type":"object","name":"ResetTool","id":"p669977"}]}},{"type":"object","name":"SaveTool","id":"p670024"},{"type":"object","name":"ToolProxy","id":"p670025","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p669943","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p670026","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p670019","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p669869","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p669870"},"y_range":{"type":"object","name":"DataRange1d","id":"p669871"},"x_scale":{"type":"object","name":"LinearScale","id":"p669879"},"y_scale":{"type":"object","name":"LogScale","id":"p669880"},"title":{"type":"object","name":"Title","id":"p669872","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p669909","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p669903","attributes":{"selected":{"type":"object","name":"Selection","id":"p669904","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p669905"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7v6/789x5oa+6sE6G9Gxp8fmVXZb/v/f3/J5IpBQ7sc+vpion2F/XSg+x9WldCNvhW4Q07pQYH9r///7/smkU679B/a6nU2DxqOGYOebnJ/uOvSkhSofxOoRuf+/z+f7UOYvTA4HAMGLQ0Ap+cuCigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p669910","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p669911"}}},"glyph":{"type":"object","name":"Line","id":"p669906","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p669907","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p669908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p669918","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p669912","attributes":{"selected":{"type":"object","name":"Selection","id":"p669913","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p669914"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7v6/789x5oa+6sE6G9Gxp8fmVXZb/v/f3/J5IpBQ7sc+vpion2F/XSg+x9WldCNvhW4Q07pQYH9r///7/smkU679B/a6nU2DxqOGYOebnJ/uOvSkhSofxOoRuf+/z+f7UOYvTA4HAMGLQ0Ap+cuCigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p669919","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p669920"}}},"glyph":{"type":"object","name":"Line","id":"p669915","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p669916","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p669917","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p669929","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p669923","attributes":{"selected":{"type":"object","name":"Selection","id":"p669924","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p669925"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SOUgDURRFVRBEKwsDKgSCiCCDS4wG19zse8xkkkxsBCG9jSCkj40IEcvYCOLSxkIQApZaWEUEm9jYRAQRtLEy/787zTDz37x77mEcjVrVKH/7HPreC9fQ1kPAMQh5HsZp++fC2xzh+zFceZud9K6T5y6o6UZtgnOTeFPjnSnOT6OsFxr8bga/6jg9x+/noddV3NyzgEqr3k30cN8i9HFriXu96NHXMvevQKVXjVXmrOHAUInrzNvAox7wMRdy/grm+3GpAL785AjIfH+QPEF8qPjxELlC0HrcYfKFoeNiEXJGkOmO17ej5I1CPbb3YuSO47hr2XUYJ38CN0r7WYI9knhW9W+T7JMS7qcUe6WF+z3Nfhnh/suw56bwDGTZNytcJ1n2zgqf02R/UzivTXowhdeTo4+ccN/n6MUS/qRFP5b0eLHoKQ/9G+3k6SuPoNL/mae3gvTbL9BfQXr2FemxKNxHRfosCveoTa+2cJ/b9GsL92yJnkvCfVei7y38A9DGborgAgAA"},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7v6/789x5oa+6s46G3//+8vmVxhP1jo6UB3Pqwqsac1/ev///u+SQX25NKQ8MqAhtvgoyH+SoD6j3JaGBxeAfaDjQYA1gIo++ACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p669930","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p669931"}}},"glyph":{"type":"object","name":"Line","id":"p669926","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p669927","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p669928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p669939","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p669933","attributes":{"selected":{"type":"object","name":"Selection","id":"p669934","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p669935"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p669940","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p669941"}}},"glyph":{"type":"object","name":"Line","id":"p669936","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p669937","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p669938","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p669878","attributes":{"tools":[{"id":"p669891"},{"id":"p669892"},{"id":"p669893"},{"id":"p669901"},{"type":"object","name":"SaveTool","id":"p669902"},{"id":"p669943"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p669886","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p669887","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p669888"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p669889"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p669881","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p669882","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p669883"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p669884"}}}],"center":[{"type":"object","name":"Grid","id":"p669885","attributes":{"axis":{"id":"p669881"}}},{"type":"object","name":"Grid","id":"p669890","attributes":{"dimension":1,"axis":{"id":"p669886"}}},{"type":"object","name":"Legend","id":"p669921","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p669922","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p669918"}]}},{"type":"object","name":"LegendItem","id":"p669932","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p669929"}]}},{"type":"object","name":"LegendItem","id":"p669942","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p669939"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p669944","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p669954","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p669946"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p669955"},"y_scale":{"type":"object","name":"LinearScale","id":"p669956"},"title":{"type":"object","name":"Title","id":"p669947","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p669985","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p669979","attributes":{"selected":{"type":"object","name":"Selection","id":"p669980","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p669981"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLprTrFeY32S/b6kHsdozSz7T0bGwc6OZfa49AMAtHxRk2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p669986","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p669987"}}},"glyph":{"type":"object","name":"Line","id":"p669982","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p669983","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p669984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p669994","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p669988","attributes":{"selected":{"type":"object","name":"Selection","id":"p669989","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p669990"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLprTrFeY32S/b6kHsdozSz7T0bGwc6OZfa49AMAtHxRk2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p669995","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p669996"}}},"glyph":{"type":"object","name":"Line","id":"p669991","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p669992","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p669993","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p670005","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p669999","attributes":{"selected":{"type":"object","name":"Selection","id":"p670000","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p670001"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLprTrFeY32S/b6kHsdozSz7T0bGwc6OZfa49AMAtHxRk2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p670006","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p670007"}}},"glyph":{"type":"object","name":"Line","id":"p670002","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p670003","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p670004","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p670015","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p670009","attributes":{"selected":{"type":"object","name":"Selection","id":"p670010","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p670011"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p670016","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p670017"}}},"glyph":{"type":"object","name":"Line","id":"p670012","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p670013","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p670014","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p669953","attributes":{"tools":[{"id":"p669967"},{"id":"p669968"},{"id":"p669969"},{"id":"p669977"},{"type":"object","name":"SaveTool","id":"p669978"},{"id":"p670019"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p669962","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p669963","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p669964"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p669965"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p669957","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p669958"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p669959"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p669960"}}}],"center":[{"type":"object","name":"Grid","id":"p669961","attributes":{"axis":{"id":"p669957"}}},{"type":"object","name":"Grid","id":"p669966","attributes":{"dimension":1,"axis":{"id":"p669962"}}},{"type":"object","name":"Legend","id":"p669997","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p669998","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p669994"}]}},{"type":"object","name":"LegendItem","id":"p670008","attributes":{"label":{"type":"value","value":"Median Year (1961)"},"renderers":[{"id":"p670005"}]}},{"type":"object","name":"LegendItem","id":"p670018","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p670015"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p670030","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"97f25edd-aee7-4417-9b06-91042770348f","roots":{"p670031":"a2164c27-de9c-4333-a766-b6a1481445f3"},"root_ids":["p670031"]}];
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