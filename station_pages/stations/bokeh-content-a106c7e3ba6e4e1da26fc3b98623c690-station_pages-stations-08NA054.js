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
    
    
    const element = document.getElementById("a3f48d68-8e64-450b-879e-5e6185bcd2d4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a3f48d68-8e64-450b-879e-5e6185bcd2d4' but no matching script tag was found.")
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
                  const docs_json = '{"8bf6111b-d7d3-4600-8827-f84d4d7c7511":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p473189","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p473190"}}},"roots":[{"type":"object","name":"Column","id":"p473353","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p473350","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p473349","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p473342","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p473213"},{"type":"object","name":"PanTool","id":"p473289"}]}},{"type":"object","name":"ToolProxy","id":"p473343","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p473214","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p473290","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p473344","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p473215","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p473216","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p473222","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p473221","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p473291","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p473292","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p473298","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p473297","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p473345","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p473223"},{"type":"object","name":"ResetTool","id":"p473299"}]}},{"type":"object","name":"SaveTool","id":"p473346"},{"type":"object","name":"ToolProxy","id":"p473347","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p473265","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p473348","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p473341","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p473191","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p473192"},"y_range":{"type":"object","name":"DataRange1d","id":"p473193"},"x_scale":{"type":"object","name":"LinearScale","id":"p473201"},"y_scale":{"type":"object","name":"LogScale","id":"p473202"},"title":{"type":"object","name":"Title","id":"p473194","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p473231","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473225","attributes":{"selected":{"type":"object","name":"Selection","id":"p473226","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473227"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7v6/789x5oa+6sE6G9Gxp8fmVXZb/v/f3/J5IpBQ7sc+vpion2F/XSg+x9WldCNvhW4Q07pQYH9r///7/smkU679B/a6nU2DxqOGYOebnJ/uOvSkhSofxOoRuf+/z+f7UOYvTA4HAMGLQ0Ap+cuCigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473232","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473233"}}},"glyph":{"type":"object","name":"Line","id":"p473228","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473229","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p473230","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p473240","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473234","attributes":{"selected":{"type":"object","name":"Selection","id":"p473235","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473236"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7v6/789x5oa+6sE6G9Gxp8fmVXZb/v/f3/J5IpBQ7sc+vpion2F/XSg+x9WldCNvhW4Q07pQYH9r///7/smkU679B/a6nU2DxqOGYOebnJ/uOvSkhSofxOoRuf+/z+f7UOYvTA4HAMGLQ0Ap+cuCigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473241","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473242"}}},"glyph":{"type":"object","name":"Line","id":"p473237","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473238","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p473239","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p473251","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473245","attributes":{"selected":{"type":"object","name":"Selection","id":"p473246","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473247"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SOUgDURRFVRBEKwsDKgSCiCCDS4wG19zse8xkkkxsBCG9jSCkj40IEcvYCOLSxkIQApZaWEUEm9jYRAQRtLEy/787zTDz37x77mEcjVrVKH/7HPreC9fQ1kPAMQh5HsZp++fC2xzh+zFceZud9K6T5y6o6UZtgnOTeFPjnSnOT6OsFxr8bga/6jg9x+/noddV3NyzgEqr3k30cN8i9HFriXu96NHXMvevQKVXjVXmrOHAUInrzNvAox7wMRdy/grm+3GpAL785AjIfH+QPEF8qPjxELlC0HrcYfKFoeNiEXJGkOmO17ej5I1CPbb3YuSO47hr2XUYJ38CN0r7WYI9knhW9W+T7JMS7qcUe6WF+z3Nfhnh/suw56bwDGTZNytcJ1n2zgqf02R/UzivTXowhdeTo4+ccN/n6MUS/qRFP5b0eLHoKQ/9G+3k6SuPoNL/mae3gvTbL9BfQXr2FemxKNxHRfosCveoTa+2cJ/b9GsL92yJnkvCfVei7y38A9DGborgAgAA"},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7v6/789x5oa+6s46G3//+8vmVxhP1jo6UB3Pqwqsac1/ev///u+SQX25NKQ8MqAhtvgoyH+SoD6j3JaGBxeAfaDjQYA1gIo++ACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473252","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473253"}}},"glyph":{"type":"object","name":"Line","id":"p473248","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473249","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p473250","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p473261","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473255","attributes":{"selected":{"type":"object","name":"Selection","id":"p473256","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473257"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p473262","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473263"}}},"glyph":{"type":"object","name":"Line","id":"p473258","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473259","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p473260","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p473200","attributes":{"tools":[{"id":"p473213"},{"id":"p473214"},{"id":"p473215"},{"id":"p473223"},{"type":"object","name":"SaveTool","id":"p473224"},{"id":"p473265"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p473208","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p473209","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p473210"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p473211"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p473203","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p473204","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p473205"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p473206"}}}],"center":[{"type":"object","name":"Grid","id":"p473207","attributes":{"axis":{"id":"p473203"}}},{"type":"object","name":"Grid","id":"p473212","attributes":{"dimension":1,"axis":{"id":"p473208"}}},{"type":"object","name":"Legend","id":"p473243","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p473244","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p473240"}]}},{"type":"object","name":"LegendItem","id":"p473254","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p473251"}]}},{"type":"object","name":"LegendItem","id":"p473264","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p473261"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p473266","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p473276","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p473268"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p473277"},"y_scale":{"type":"object","name":"LinearScale","id":"p473278"},"title":{"type":"object","name":"Title","id":"p473269","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p473307","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473301","attributes":{"selected":{"type":"object","name":"Selection","id":"p473302","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473303"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLprTrFeY32S/b6kHsdozSz7T0bGwc6OZfa49AMAtHxRk2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473308","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473309"}}},"glyph":{"type":"object","name":"Line","id":"p473304","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473305","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p473306","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p473316","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473310","attributes":{"selected":{"type":"object","name":"Selection","id":"p473311","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473312"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLprTrFeY32S/b6kHsdozSz7T0bGwc6OZfa49AMAtHxRk2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473317","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473318"}}},"glyph":{"type":"object","name":"Line","id":"p473313","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473314","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p473315","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p473327","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473321","attributes":{"selected":{"type":"object","name":"Selection","id":"p473322","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473323"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLprTrFeY32S/b6kHsdozSz7T0bGwc6OZfa49AMAtHxRk2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473328","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473329"}}},"glyph":{"type":"object","name":"Line","id":"p473324","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473325","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p473326","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p473337","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473331","attributes":{"selected":{"type":"object","name":"Selection","id":"p473332","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473333"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p473338","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473339"}}},"glyph":{"type":"object","name":"Line","id":"p473334","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473335","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p473336","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p473275","attributes":{"tools":[{"id":"p473289"},{"id":"p473290"},{"id":"p473291"},{"id":"p473299"},{"type":"object","name":"SaveTool","id":"p473300"},{"id":"p473341"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p473284","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p473285","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p473286"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p473287"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p473279","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p473280"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p473281"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p473282"}}}],"center":[{"type":"object","name":"Grid","id":"p473283","attributes":{"axis":{"id":"p473279"}}},{"type":"object","name":"Grid","id":"p473288","attributes":{"dimension":1,"axis":{"id":"p473284"}}},{"type":"object","name":"Legend","id":"p473319","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p473320","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p473316"}]}},{"type":"object","name":"LegendItem","id":"p473330","attributes":{"label":{"type":"value","value":"Median Year (1961)"},"renderers":[{"id":"p473327"}]}},{"type":"object","name":"LegendItem","id":"p473340","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p473337"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p473352","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8bf6111b-d7d3-4600-8827-f84d4d7c7511","roots":{"p473353":"a3f48d68-8e64-450b-879e-5e6185bcd2d4"},"root_ids":["p473353"]}];
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