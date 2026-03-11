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
    
    
    const element = document.getElementById("fac540de-0b03-4089-bcb4-96157658b54f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fac540de-0b03-4089-bcb4-96157658b54f' but no matching script tag was found.")
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
                  const docs_json = '{"956f3173-1f10-4d4c-9a84-e038b2b846ef":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p769645","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p769646"}}},"roots":[{"type":"object","name":"Column","id":"p769809","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p769806","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p769805","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p769798","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p769669"},{"type":"object","name":"PanTool","id":"p769745"}]}},{"type":"object","name":"ToolProxy","id":"p769799","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p769670","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p769746","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p769800","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p769671","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p769672","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p769678","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p769677","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p769747","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p769748","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p769754","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p769753","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p769801","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p769679"},{"type":"object","name":"ResetTool","id":"p769755"}]}},{"type":"object","name":"SaveTool","id":"p769802"},{"type":"object","name":"ToolProxy","id":"p769803","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p769721","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p769804","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p769797","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p769647","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p769648"},"y_range":{"type":"object","name":"DataRange1d","id":"p769649"},"x_scale":{"type":"object","name":"LinearScale","id":"p769657"},"y_scale":{"type":"object","name":"LogScale","id":"p769658"},"title":{"type":"object","name":"Title","id":"p769650","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p769687","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p769681","attributes":{"selected":{"type":"object","name":"Selection","id":"p769682","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p769683"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+1+j9Cg9SuOkAemQC74oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p769688","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p769689"}}},"glyph":{"type":"object","name":"Line","id":"p769684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p769685","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p769686","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p769696","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p769690","attributes":{"selected":{"type":"object","name":"Selection","id":"p769691","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p769692"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+1+j9Cg9SuOkAemQC74oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p769697","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p769698"}}},"glyph":{"type":"object","name":"Line","id":"p769693","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p769694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p769695","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p769707","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p769701","attributes":{"selected":{"type":"object","name":"Selection","id":"p769702","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p769703"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/1sft7fq66uv9uvBNKsDMzufjEWBgAOEL+oQvS3n5qZUaai4ggOQc3qarjJUXtWhlUtUK2SFBlSdtoNh0pEOQWU9qHoDh3d3dhY/P2cI1WfsAJJ16zGB6jd1mGWSeWmJpznUHAuHggcHGpnZraDmWTu49UgAjbSBmmvnADQUqMIear6Dw8+Pj4/3yztC7XF0eALk2dc5Qe1zdjg/17r83R1nqL0uDruAquZau0Ltd3VY4jlZzXeWG9Qd7g4g3X9+uEPd4+FQ/fXV1dXhnlB3eTmkAU2N3uYFdZ+3Q+BCJ6BSH6g7fRxsykEu8YW6189B3Rdksh/U3f4OnSBnSARA3R/gALQM6IMAqD8CHUpAzisPhPon0AHkqslqQVB/BTnEg5x9NQjqv2CHkBUBQBcEQ/0Z7OAF8o5JCNS/IQ72YAtCoP4OdTAFGxgK9X+ogxbYgDBoOIQ5KIA1hEHDI9xBFKwgHBou4Q7cYIEIaPhEODCAQaQDANzYKpZIAgAA"},"shape":[73],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+1+j9ChNAQ0AK0xpVUgCAAA="},"shape":[73],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p769708","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p769709"}}},"glyph":{"type":"object","name":"Line","id":"p769704","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p769705","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p769706","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p769717","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p769711","attributes":{"selected":{"type":"object","name":"Selection","id":"p769712","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p769713"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p769718","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p769719"}}},"glyph":{"type":"object","name":"Line","id":"p769714","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p769715","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p769716","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p769656","attributes":{"tools":[{"id":"p769669"},{"id":"p769670"},{"id":"p769671"},{"id":"p769679"},{"type":"object","name":"SaveTool","id":"p769680"},{"id":"p769721"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p769664","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p769665","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p769666"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p769667"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p769659","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p769660","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p769661"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p769662"}}}],"center":[{"type":"object","name":"Grid","id":"p769663","attributes":{"axis":{"id":"p769659"}}},{"type":"object","name":"Grid","id":"p769668","attributes":{"dimension":1,"axis":{"id":"p769664"}}},{"type":"object","name":"Legend","id":"p769699","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p769700","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p769696"}]}},{"type":"object","name":"LegendItem","id":"p769710","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p769707"}]}},{"type":"object","name":"LegendItem","id":"p769720","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p769717"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p769722","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p769732","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p769724"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p769733"},"y_scale":{"type":"object","name":"LinearScale","id":"p769734"},"title":{"type":"object","name":"Title","id":"p769725","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p769763","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p769757","attributes":{"selected":{"type":"object","name":"Selection","id":"p769758","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p769759"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0r/+/7/vm5Rgj07jUg8ASPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p769764","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p769765"}}},"glyph":{"type":"object","name":"Line","id":"p769760","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p769761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p769762","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p769772","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p769766","attributes":{"selected":{"type":"object","name":"Selection","id":"p769767","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p769768"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0r/+/7/vm5Rgj07jUg8ASPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p769773","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p769774"}}},"glyph":{"type":"object","name":"Line","id":"p769769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p769770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p769771","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p769783","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p769777","attributes":{"selected":{"type":"object","name":"Selection","id":"p769778","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p769779"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0r/+/7/vm5Rgj07jUg8ASPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p769784","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p769785"}}},"glyph":{"type":"object","name":"Line","id":"p769780","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p769781","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p769782","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p769793","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p769787","attributes":{"selected":{"type":"object","name":"Selection","id":"p769788","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p769789"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p769794","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p769795"}}},"glyph":{"type":"object","name":"Line","id":"p769790","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p769791","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p769792","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p769731","attributes":{"tools":[{"id":"p769745"},{"id":"p769746"},{"id":"p769747"},{"id":"p769755"},{"type":"object","name":"SaveTool","id":"p769756"},{"id":"p769797"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p769740","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p769741","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p769742"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p769743"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p769735","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p769736"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p769737"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p769738"}}}],"center":[{"type":"object","name":"Grid","id":"p769739","attributes":{"axis":{"id":"p769735"}}},{"type":"object","name":"Grid","id":"p769744","attributes":{"dimension":1,"axis":{"id":"p769740"}}},{"type":"object","name":"Legend","id":"p769775","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p769776","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p769772"}]}},{"type":"object","name":"LegendItem","id":"p769786","attributes":{"label":{"type":"value","value":"Median Year (1939)"},"renderers":[{"id":"p769783"}]}},{"type":"object","name":"LegendItem","id":"p769796","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p769793"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p769808","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"956f3173-1f10-4d4c-9a84-e038b2b846ef","roots":{"p769809":"fac540de-0b03-4089-bcb4-96157658b54f"},"root_ids":["p769809"]}];
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