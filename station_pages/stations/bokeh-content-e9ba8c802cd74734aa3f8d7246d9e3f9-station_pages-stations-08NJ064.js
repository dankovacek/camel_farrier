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
    
    
    const element = document.getElementById("d73b1937-ee59-42e6-bbf3-86cfdffd9528");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd73b1937-ee59-42e6-bbf3-86cfdffd9528' but no matching script tag was found.")
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
                  const docs_json = '{"3941b653-e465-4c09-aef2-f25e10e26646":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p801183","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p801184"}}},"roots":[{"type":"object","name":"Column","id":"p801347","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p801344","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p801343","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p801336","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p801207"},{"type":"object","name":"PanTool","id":"p801283"}]}},{"type":"object","name":"ToolProxy","id":"p801337","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p801208","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p801284","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p801338","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p801209","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p801210","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p801216","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p801215","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p801285","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p801286","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p801292","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p801291","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p801339","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p801217"},{"type":"object","name":"ResetTool","id":"p801293"}]}},{"type":"object","name":"SaveTool","id":"p801340"},{"type":"object","name":"ToolProxy","id":"p801341","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p801259","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p801342","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p801335","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p801185","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p801186"},"y_range":{"type":"object","name":"DataRange1d","id":"p801187"},"x_scale":{"type":"object","name":"LinearScale","id":"p801195"},"y_scale":{"type":"object","name":"LogScale","id":"p801196"},"title":{"type":"object","name":"Title","id":"p801188","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p801225","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801219","attributes":{"selected":{"type":"object","name":"Selection","id":"p801220","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801221"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3vx//99/97p9i+gtFhMf9PWH1Ps3/3/b/+wCkE//f9/f1HGRDj9peV1YTpXr/1VoDzHmh6c9IP///9rtbdRjf4FdKdvUgNOelqVSJ6VdaX9NqA7SyZXkElnjNJDnIakhwQ4LQymA8imARYnhQYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801226","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801227"}}},"glyph":{"type":"object","name":"Line","id":"p801222","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801223","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p801224","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p801234","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801228","attributes":{"selected":{"type":"object","name":"Selection","id":"p801229","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801230"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3vx//99/97p9i+gtFhMf9PWH1Ps3/3/b/+wCkE//f9/f1HGRDj9peV1YTpXr/1VoDzHmh6c9IP///9rtbdRjf4FdKdvUgNOelqVSJ6VdaX9NqA7SyZXkElnjNJDnIakhwQ4LQymA8imARYnhQYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801235","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801236"}}},"glyph":{"type":"object","name":"Line","id":"p801231","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801232","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p801233","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p801245","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801239","attributes":{"selected":{"type":"object","name":"Selection","id":"p801240","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801241"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2STUhUcRTFjekDIkQShQETtczKmqYxtZkc54zz/f3mvZk3U2EhFFQYLQILicCFgWEQFEgUBoKFC6GF9EGBUCEVuFAqAgODwkVRYFG0cNG7/3dmMY/3/v977rm/cxsXNt9xjKwEGtXzb+BjXXzmxUoF7PeNODM8PxRu3QL7exXWBqZavjyu5nktwq39lTuOOnmvDqPLrj8n1+p5vwHf3/z7oeeaWLcd1uW+Cw3NrN8Jz5Vn726utlBnN0xVuId6ezGoLuyjrgva3PmxQY+b+m5YYpbSAfbxQL062tivDVdFpv8g+7ZjTAm2s38H5FbK30kfnXhu/S9NHqIfL1R5pY++fPgsNgYO018Xfi1Njo8ud9GnH44RudlNv92o7di0dfphgL6BW6tSAPoHtqlHkHMEcX9cKoOcpwf7pd1UD+cK4UnK75ztDXG+EIITNVaHMOcM462UzYU5bwRGThpHOHcEn8SuK8r5ozilhKLkEMNPXQpi5BHDRXUQJ5c4KtQvQT4JqHFnEuSUhDWs98bpJHklcVcBSZFbCs1iayFFfmmo68NpckxD4fJmyDOD2d5vFokMuWahcE1kyTeLRRnDzJFzztbboJG3Zuue0Mhds/WfauSv2X2q88whb/c7l2ceeayXvq/zzCVv92/SmY+O6+Ljss6cdCisH3TmZUDSmXYbzM2AGv+awfwM3BPZrwZzLEBScAYKzLOAXfLhdoG5FiDU+34XmG8RCl+myJyLUDYeFJl3ET7reH6dydxNqFiPmczfxEuLZs0jk3tgQuGvKnEfSkiL7bMl7kUJIjf0qsT9KOG9rEV9mXtShlMAXipzX8o4LvEtlrk3R/AfXizEvXAEAAA="},"shape":[142],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3vx//99/97p9i+g9Lv//+0fVk3BST/9/39/UcZEDPoqUJ5jTQ/J9IP///9rtbfRjf4F9KdvUgPR9Dag/0omV9CIzhilR+kBpSHpPAGDFgbTAVSnAaZ6J5xwBAAA"},"shape":[142],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801246","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801247"}}},"glyph":{"type":"object","name":"Line","id":"p801242","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801243","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p801244","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p801255","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801249","attributes":{"selected":{"type":"object","name":"Selection","id":"p801250","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801251"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p801256","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801257"}}},"glyph":{"type":"object","name":"Line","id":"p801252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801253","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p801254","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p801194","attributes":{"tools":[{"id":"p801207"},{"id":"p801208"},{"id":"p801209"},{"id":"p801217"},{"type":"object","name":"SaveTool","id":"p801218"},{"id":"p801259"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p801202","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p801203","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p801204"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p801205"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p801197","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p801198","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p801199"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p801200"}}}],"center":[{"type":"object","name":"Grid","id":"p801201","attributes":{"axis":{"id":"p801197"}}},{"type":"object","name":"Grid","id":"p801206","attributes":{"dimension":1,"axis":{"id":"p801202"}}},{"type":"object","name":"Legend","id":"p801237","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p801238","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p801234"}]}},{"type":"object","name":"LegendItem","id":"p801248","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p801245"}]}},{"type":"object","name":"LegendItem","id":"p801258","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p801255"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p801260","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p801270","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p801262"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p801271"},"y_scale":{"type":"object","name":"LinearScale","id":"p801272"},"title":{"type":"object","name":"Title","id":"p801263","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p801301","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801295","attributes":{"selected":{"type":"object","name":"Selection","id":"p801296","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801297"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodFBa2rPirVPtS4O8NLubOuzvCQgmap4usOdTL9v1bVOC/bb///eXTM6A0ww4zAEAvOeuVWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801302","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801303"}}},"glyph":{"type":"object","name":"Line","id":"p801298","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801299","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p801300","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p801310","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801304","attributes":{"selected":{"type":"object","name":"Selection","id":"p801305","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801306"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodFBa2rPirVPtS4O8NLubOuzvCQgmap4usOdTL9v1bVOC/bb///eXTM6A0ww4zAEAvOeuVWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801311","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801312"}}},"glyph":{"type":"object","name":"Line","id":"p801307","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801308","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p801309","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p801321","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801315","attributes":{"selected":{"type":"object","name":"Selection","id":"p801316","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801317"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodFBa2rPirVPtS4O8NLubOuzvCQgmap4usOdTL9v1bVOC/bb///eXTM6A0ww4zAEAvOeuVWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p801322","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801323"}}},"glyph":{"type":"object","name":"Line","id":"p801318","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801319","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p801320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p801331","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p801325","attributes":{"selected":{"type":"object","name":"Selection","id":"p801326","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p801327"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p801332","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p801333"}}},"glyph":{"type":"object","name":"Line","id":"p801328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p801329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p801330","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p801269","attributes":{"tools":[{"id":"p801283"},{"id":"p801284"},{"id":"p801285"},{"id":"p801293"},{"type":"object","name":"SaveTool","id":"p801294"},{"id":"p801335"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p801278","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p801279","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p801280"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p801281"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p801273","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p801274"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p801275"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p801276"}}}],"center":[{"type":"object","name":"Grid","id":"p801277","attributes":{"axis":{"id":"p801273"}}},{"type":"object","name":"Grid","id":"p801282","attributes":{"dimension":1,"axis":{"id":"p801278"}}},{"type":"object","name":"Legend","id":"p801313","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p801314","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p801310"}]}},{"type":"object","name":"LegendItem","id":"p801324","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p801321"}]}},{"type":"object","name":"LegendItem","id":"p801334","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p801331"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p801346","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"3941b653-e465-4c09-aef2-f25e10e26646","roots":{"p801347":"d73b1937-ee59-42e6-bbf3-86cfdffd9528"},"root_ids":["p801347"]}];
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