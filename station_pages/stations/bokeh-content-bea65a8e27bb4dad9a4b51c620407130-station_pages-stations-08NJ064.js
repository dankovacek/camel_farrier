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
    
    
    const element = document.getElementById("bab9707a-fe12-401e-bf84-334658fd403f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bab9707a-fe12-401e-bf84-334658fd403f' but no matching script tag was found.")
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
                  const docs_json = '{"285d70d6-ddc1-4e4d-b19b-23a6f97896e9":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p801654","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p801655"}}},"roots":[{"type":"object","name":"Column","id":"p801818","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p801815","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p801814","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p801807","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p801678"},{"type":"object","name":"PanTool","id":"p801754"}]}},{"type":"object","name":"ToolProxy","id":"p801808","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p801679","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p801755","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p801809","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p801680","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p801681","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p801687","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p801686","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p801756","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p801757","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p801763","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p801762","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p801810","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p801688"},{"type":"object","name":"ResetTool","id":"p801764"}]}},{"type":"object","name":"SaveTool","id":"p801811"},{"type":"object","name":"ToolProxy","id":"p801812","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p801730","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p801813","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p801806","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p801656","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p801657"},"y_range":{"type":"object","name":"DataRange1d","id":"p801658"},"x_scale":{"type":"object","name":"LinearScale","id":"p801666"},"y_scale":{"type":"object","name":"LogScale","id":"p801667"},"title":{"type":"object","name":"Title","id":"p801659","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p801696","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801690","attributes":{"selected":{"type":"object","name":"Selection","id":"p801691","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801692"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3vx//99/97p9i+gtFhMf9PWH1Ps3/3/b/+wCkE//f9/f1HGRDj9peV1YTpXr/1VoDzHmh6c9IP///9rtbdRjf4FdKdvUgNOelqVSJ6VdaX9NqA7SyZXkElnjNJDnIakhwQ4LQymA8imARYnhQYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801697","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801698"}}},"glyph":{"type":"object","name":"Line","id":"p801693","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p801695","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p801705","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801699","attributes":{"selected":{"type":"object","name":"Selection","id":"p801700","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801701"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3vx//99/97p9i+gtFhMf9PWH1Ps3/3/b/+wCkE//f9/f1HGRDj9peV1YTpXr/1VoDzHmh6c9IP///9rtbdRjf4FdKdvUgNOelqVSJ6VdaX9NqA7SyZXkElnjNJDnIakhwQ4LQymA8imARYnhQYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801706","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801707"}}},"glyph":{"type":"object","name":"Line","id":"p801702","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801703","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p801704","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p801716","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801710","attributes":{"selected":{"type":"object","name":"Selection","id":"p801711","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801712"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2STUhUcRTFjekDIkQShQETtczKmqYxtZkc54zz/f3mvZk3U2EhFFQYLQILicCFgWEQFEgUBoKFC6GF9EGBUCEVuFAqAgODwkVRYFG0cNG7/3dmMY/3/v977rm/cxsXNt9xjKwEGtXzb+BjXXzmxUoF7PeNODM8PxRu3QL7exXWBqZavjyu5nktwq39lTuOOnmvDqPLrj8n1+p5vwHf3/z7oeeaWLcd1uW+Cw3NrN8Jz5Vn726utlBnN0xVuId6ezGoLuyjrgva3PmxQY+b+m5YYpbSAfbxQL062tivDVdFpv8g+7ZjTAm2s38H5FbK30kfnXhu/S9NHqIfL1R5pY++fPgsNgYO018Xfi1Njo8ud9GnH44RudlNv92o7di0dfphgL6BW6tSAPoHtqlHkHMEcX9cKoOcpwf7pd1UD+cK4UnK75ztDXG+EIITNVaHMOcM462UzYU5bwRGThpHOHcEn8SuK8r5ozilhKLkEMNPXQpi5BHDRXUQJ5c4KtQvQT4JqHFnEuSUhDWs98bpJHklcVcBSZFbCs1iayFFfmmo68NpckxD4fJmyDOD2d5vFokMuWahcE1kyTeLRRnDzJFzztbboJG3Zuue0Mhds/WfauSv2X2q88whb/c7l2ceeayXvq/zzCVv92/SmY+O6+Ljss6cdCisH3TmZUDSmXYbzM2AGv+awfwM3BPZrwZzLEBScAYKzLOAXfLhdoG5FiDU+34XmG8RCl+myJyLUDYeFJl3ET7reH6dydxNqFiPmczfxEuLZs0jk3tgQuGvKnEfSkiL7bMl7kUJIjf0qsT9KOG9rEV9mXtShlMAXipzX8o4LvEtlrk3R/AfXizEvXAEAAA="},"shape":[142],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3vx//99/97p9i+g9Lv//+0fVk3BST/9/39/UcZEDPoqUJ5jTQ/J9IP///9rtbfRjf4F9KdvUgPR9Dag/0omV9CIzhilR+kBpSHpPAGDFgbTAVSnAaZ6J5xwBAAA"},"shape":[142],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801717","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801718"}}},"glyph":{"type":"object","name":"Line","id":"p801713","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801714","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p801715","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p801726","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801720","attributes":{"selected":{"type":"object","name":"Selection","id":"p801721","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801722"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p801727","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801728"}}},"glyph":{"type":"object","name":"Line","id":"p801723","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801724","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p801725","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p801665","attributes":{"tools":[{"id":"p801678"},{"id":"p801679"},{"id":"p801680"},{"id":"p801688"},{"type":"object","name":"SaveTool","id":"p801689"},{"id":"p801730"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p801673","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p801674","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p801675"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p801676"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p801668","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p801669","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p801670"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p801671"}}}],"center":[{"type":"object","name":"Grid","id":"p801672","attributes":{"axis":{"id":"p801668"}}},{"type":"object","name":"Grid","id":"p801677","attributes":{"dimension":1,"axis":{"id":"p801673"}}},{"type":"object","name":"Legend","id":"p801708","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p801709","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p801705"}]}},{"type":"object","name":"LegendItem","id":"p801719","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p801716"}]}},{"type":"object","name":"LegendItem","id":"p801729","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p801726"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p801731","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p801741","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p801733"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p801742"},"y_scale":{"type":"object","name":"LinearScale","id":"p801743"},"title":{"type":"object","name":"Title","id":"p801734","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p801772","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801766","attributes":{"selected":{"type":"object","name":"Selection","id":"p801767","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801768"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodFBa2rPirVPtS4O8NLubOuzvCQgmap4usOdTL9v1bVOC/bb///eXTM6A0ww4zAEAvOeuVWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801773","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801774"}}},"glyph":{"type":"object","name":"Line","id":"p801769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p801771","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p801781","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801775","attributes":{"selected":{"type":"object","name":"Selection","id":"p801776","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801777"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodFBa2rPirVPtS4O8NLubOuzvCQgmap4usOdTL9v1bVOC/bb///eXTM6A0ww4zAEAvOeuVWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801782","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801783"}}},"glyph":{"type":"object","name":"Line","id":"p801778","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801779","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p801780","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p801792","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801786","attributes":{"selected":{"type":"object","name":"Selection","id":"p801787","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801788"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodFBa2rPirVPtS4O8NLubOuzvCQgmap4usOdTL9v1bVOC/bb///eXTM6A0ww4zAEAvOeuVWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801793","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801794"}}},"glyph":{"type":"object","name":"Line","id":"p801789","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801790","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p801791","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p801802","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801796","attributes":{"selected":{"type":"object","name":"Selection","id":"p801797","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801798"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p801803","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801804"}}},"glyph":{"type":"object","name":"Line","id":"p801799","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801800","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p801801","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p801740","attributes":{"tools":[{"id":"p801754"},{"id":"p801755"},{"id":"p801756"},{"id":"p801764"},{"type":"object","name":"SaveTool","id":"p801765"},{"id":"p801806"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p801749","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p801750","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p801751"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p801752"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p801744","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p801745"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p801746"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p801747"}}}],"center":[{"type":"object","name":"Grid","id":"p801748","attributes":{"axis":{"id":"p801744"}}},{"type":"object","name":"Grid","id":"p801753","attributes":{"dimension":1,"axis":{"id":"p801749"}}},{"type":"object","name":"Legend","id":"p801784","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p801785","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p801781"}]}},{"type":"object","name":"LegendItem","id":"p801795","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p801792"}]}},{"type":"object","name":"LegendItem","id":"p801805","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p801802"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p801817","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"285d70d6-ddc1-4e4d-b19b-23a6f97896e9","roots":{"p801818":"bab9707a-fe12-401e-bf84-334658fd403f"},"root_ids":["p801818"]}];
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