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
    
    
    const element = document.getElementById("bb20e412-596a-49c7-982b-a98b21021f9c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bb20e412-596a-49c7-982b-a98b21021f9c' but no matching script tag was found.")
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
                  const docs_json = '{"037b47e9-9245-43b4-9e65-502a7f28200e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p473577","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p473578"}}},"roots":[{"type":"object","name":"Column","id":"p473741","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p473738","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p473737","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p473730","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p473601"},{"type":"object","name":"PanTool","id":"p473677"}]}},{"type":"object","name":"ToolProxy","id":"p473731","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p473602","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p473678","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p473732","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p473603","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p473604","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p473610","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p473609","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p473679","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p473680","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p473686","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p473685","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p473733","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p473611"},{"type":"object","name":"ResetTool","id":"p473687"}]}},{"type":"object","name":"SaveTool","id":"p473734"},{"type":"object","name":"ToolProxy","id":"p473735","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p473653","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p473736","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p473729","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p473579","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p473580"},"y_range":{"type":"object","name":"DataRange1d","id":"p473581"},"x_scale":{"type":"object","name":"LinearScale","id":"p473589"},"y_scale":{"type":"object","name":"LogScale","id":"p473590"},"title":{"type":"object","name":"Title","id":"p473582","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p473619","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473613","attributes":{"selected":{"type":"object","name":"Selection","id":"p473614","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473615"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7v6/789x5oa+6sE6G9Gxp8fmVXZb/v/f3/J5IpBQ7sc+vpion2F/XSg+x9WldCNvhW4Q07pQYH9r///7/smkU679B/a6nU2DxqOGYOebnJ/uOvSkhSofxOoRuf+/z+f7UOYvTA4HAMGLQ0Ap+cuCigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473620","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473621"}}},"glyph":{"type":"object","name":"Line","id":"p473616","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473617","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p473618","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p473628","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473622","attributes":{"selected":{"type":"object","name":"Selection","id":"p473623","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473624"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7v6/789x5oa+6sE6G9Gxp8fmVXZb/v/f3/J5IpBQ7sc+vpion2F/XSg+x9WldCNvhW4Q07pQYH9r///7/smkU679B/a6nU2DxqOGYOebnJ/uOvSkhSofxOoRuf+/z+f7UOYvTA4HAMGLQ0Ap+cuCigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473629","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473630"}}},"glyph":{"type":"object","name":"Line","id":"p473625","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473626","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p473627","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p473639","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473633","attributes":{"selected":{"type":"object","name":"Selection","id":"p473634","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473635"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SOUgDURRFVRBEKwsDKgSCiCCDS4wG19zse8xkkkxsBCG9jSCkj40IEcvYCOLSxkIQApZaWEUEm9jYRAQRtLEy/787zTDz37x77mEcjVrVKH/7HPreC9fQ1kPAMQh5HsZp++fC2xzh+zFceZud9K6T5y6o6UZtgnOTeFPjnSnOT6OsFxr8bga/6jg9x+/noddV3NyzgEqr3k30cN8i9HFriXu96NHXMvevQKVXjVXmrOHAUInrzNvAox7wMRdy/grm+3GpAL785AjIfH+QPEF8qPjxELlC0HrcYfKFoeNiEXJGkOmO17ej5I1CPbb3YuSO47hr2XUYJ38CN0r7WYI9knhW9W+T7JMS7qcUe6WF+z3Nfhnh/suw56bwDGTZNytcJ1n2zgqf02R/UzivTXowhdeTo4+ccN/n6MUS/qRFP5b0eLHoKQ/9G+3k6SuPoNL/mae3gvTbL9BfQXr2FemxKNxHRfosCveoTa+2cJ/b9GsL92yJnkvCfVei7y38A9DGborgAgAA"},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7v6/789x5oa+6s46G3//+8vmVxhP1jo6UB3Pqwqsac1/ev///u+SQX25NKQ8MqAhtvgoyH+SoD6j3JaGBxeAfaDjQYA1gIo++ACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473640","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473641"}}},"glyph":{"type":"object","name":"Line","id":"p473636","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473637","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p473638","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p473649","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473643","attributes":{"selected":{"type":"object","name":"Selection","id":"p473644","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473645"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p473650","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473651"}}},"glyph":{"type":"object","name":"Line","id":"p473646","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473647","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p473648","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p473588","attributes":{"tools":[{"id":"p473601"},{"id":"p473602"},{"id":"p473603"},{"id":"p473611"},{"type":"object","name":"SaveTool","id":"p473612"},{"id":"p473653"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p473596","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p473597","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p473598"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p473599"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p473591","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p473592","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p473593"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p473594"}}}],"center":[{"type":"object","name":"Grid","id":"p473595","attributes":{"axis":{"id":"p473591"}}},{"type":"object","name":"Grid","id":"p473600","attributes":{"dimension":1,"axis":{"id":"p473596"}}},{"type":"object","name":"Legend","id":"p473631","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p473632","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p473628"}]}},{"type":"object","name":"LegendItem","id":"p473642","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p473639"}]}},{"type":"object","name":"LegendItem","id":"p473652","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p473649"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p473654","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p473664","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p473656"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p473665"},"y_scale":{"type":"object","name":"LinearScale","id":"p473666"},"title":{"type":"object","name":"Title","id":"p473657","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p473695","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473689","attributes":{"selected":{"type":"object","name":"Selection","id":"p473690","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473691"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLprTrFeY32S/b6kHsdozSz7T0bGwc6OZfa49AMAtHxRk2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473696","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473697"}}},"glyph":{"type":"object","name":"Line","id":"p473692","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473693","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p473694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p473704","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473698","attributes":{"selected":{"type":"object","name":"Selection","id":"p473699","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473700"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLprTrFeY32S/b6kHsdozSz7T0bGwc6OZfa49AMAtHxRk2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473705","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473706"}}},"glyph":{"type":"object","name":"Line","id":"p473701","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473702","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p473703","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p473715","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473709","attributes":{"selected":{"type":"object","name":"Selection","id":"p473710","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473711"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLprTrFeY32S/b6kHsdozSz7T0bGwc6OZfa49AMAtHxRk2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473716","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473717"}}},"glyph":{"type":"object","name":"Line","id":"p473712","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473713","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p473714","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p473725","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473719","attributes":{"selected":{"type":"object","name":"Selection","id":"p473720","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473721"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p473726","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473727"}}},"glyph":{"type":"object","name":"Line","id":"p473722","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473723","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p473724","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p473663","attributes":{"tools":[{"id":"p473677"},{"id":"p473678"},{"id":"p473679"},{"id":"p473687"},{"type":"object","name":"SaveTool","id":"p473688"},{"id":"p473729"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p473672","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p473673","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p473674"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p473675"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p473667","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p473668"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p473669"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p473670"}}}],"center":[{"type":"object","name":"Grid","id":"p473671","attributes":{"axis":{"id":"p473667"}}},{"type":"object","name":"Grid","id":"p473676","attributes":{"dimension":1,"axis":{"id":"p473672"}}},{"type":"object","name":"Legend","id":"p473707","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p473708","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p473704"}]}},{"type":"object","name":"LegendItem","id":"p473718","attributes":{"label":{"type":"value","value":"Median Year (1961)"},"renderers":[{"id":"p473715"}]}},{"type":"object","name":"LegendItem","id":"p473728","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p473725"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p473740","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"037b47e9-9245-43b4-9e65-502a7f28200e","roots":{"p473741":"bb20e412-596a-49c7-982b-a98b21021f9c"},"root_ids":["p473741"]}];
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