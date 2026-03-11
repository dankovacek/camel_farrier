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
    
    
    const element = document.getElementById("dbc8e40b-3f80-42b4-8935-5db41de214b9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dbc8e40b-3f80-42b4-8935-5db41de214b9' but no matching script tag was found.")
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
                  const docs_json = '{"07aea574-06d2-4746-afdc-f091bd013cbc":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p395419","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p395420"}}},"roots":[{"type":"object","name":"Column","id":"p395583","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p395580","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p395579","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p395572","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p395443"},{"type":"object","name":"PanTool","id":"p395519"}]}},{"type":"object","name":"ToolProxy","id":"p395573","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p395444","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p395520","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p395574","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p395445","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p395446","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p395452","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p395451","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p395521","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p395522","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p395528","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p395527","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p395575","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p395453"},{"type":"object","name":"ResetTool","id":"p395529"}]}},{"type":"object","name":"SaveTool","id":"p395576"},{"type":"object","name":"ToolProxy","id":"p395577","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p395495","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p395578","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p395571","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p395421","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p395422"},"y_range":{"type":"object","name":"DataRange1d","id":"p395423"},"x_scale":{"type":"object","name":"LinearScale","id":"p395431"},"y_scale":{"type":"object","name":"LogScale","id":"p395432"},"title":{"type":"object","name":"Title","id":"p395424","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p395461","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p395455","attributes":{"selected":{"type":"object","name":"Selection","id":"p395456","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p395457"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//vx/3/846Wr7ZVi+k9NfbPC/v////X75s+C07zr3A8235hpL2NsfLht+XT7F///3/fvxaSXuj+cZHB5mv1foEatdgRtwXW9+YjtNPuv///LszVOpZh+BnTvnpLJBOnP1xZbrAiabP8b6I/peZPsO2fO5Hz2YqL90///9xdl0I6+uLiAtyd9gv0vYLj4JhFPXwncsa+nvt/+6v//9hxresimdXfIPe1e2AONvy660z81YvI9G7rsPwDDo2RyB9XpKFuu7UYP2+0fgNNXG8n0xK8ae9yPtNhfBIbXwyoEfahKZF7+zGZoemmy51/nbvn6aAM0fhrsAQngQx4oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p395462","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p395463"}}},"glyph":{"type":"object","name":"Line","id":"p395458","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p395459","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p395460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p395470","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p395464","attributes":{"selected":{"type":"object","name":"Selection","id":"p395465","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p395466"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//vx/3/846Wr7ZVi+k9NfbPC/v////X75s+C07zr3A8235hpL2NsfLht+XT7F///3/fvxaSXuj+cZHB5mv1foEatdgRtwXW9+YjtNPuv///LszVOpZh+BnTvnpLJBOnP1xZbrAiabP8b6I/peZPsO2fO5Hz2YqL90///9xdl0I6+uLiAtyd9gv0vYLj4JhFPXwncsa+nvt/+6v//9hxresimdXfIPe1e2AONvy660z81YvI9G7rsPwDDo2RyB9XpKFuu7UYP2+0fgNNXG8n0xK8ae9yPtNhfBIbXwyoEfahKZF7+zGZoemmy51/nbvn6aAM0fhrsAQngQx4oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p395471","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p395472"}}},"glyph":{"type":"object","name":"Line","id":"p395467","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p395468","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p395469","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p395481","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p395475","attributes":{"selected":{"type":"object","name":"Selection","id":"p395476","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p395477"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2RS0hUYRzFQyQkjBIKsUAsrKbn+Giamso587rzcMY7933bhBUhBRFESIm4EYkoNyERuZCQnkiIiyJEXAkSIgWCiIQtRMReC4mwMvq+z/PnwOW+vv85v9Nftvi4bHEl2q+uv6M3Nx8WKsXG/RZc6Jlu7Znejo3nO3BHTSXf78Lru1LV/K4GXyY6VyY69/L7WvzT5ta1uX387wAqJkNCB/n/IdRmHwgd4TnHEH7/XSjI8+rw7Kmcep7bgLolK7hkNfL843i3v0QoxD0hJNqG423DJ7gvjKnn54VOcu8peMvl7nJ5hPsj+BwYXQiMnqaPM7h6Rc5Z+mnC6stKoSh9RdH086IQ6A/o3hkRitFnDGpNRZx+49jqyoVx+k7AbB832scT9J/EQzVJ5khh/s01oRTzpLBnNlkzm9SYS8PlX7uF0syXxitpbzXNnBn8UEYzzJtFo/9EKMvcOdy+JSfH/DmMPdKFmsmhGSXKSJ488shIG+t5cing/trMvbWZAvm04GPV0IeqoRZy0qFwdOvkpeOomiK5FaGrhUXyK+JGoVTIIEcDfZ+uCxnkaeCtxDFvkKsJZUczydfE396RP70jJjmbqFZjkbeFmDJqkbuFS8qIRf42lI1Wmz3YeCExTtnsw4GKEXbYi4NvXYNfuwYd9uNgmxqXPbloGOioH+hw2ZcLOyiNuOzNg7JheOzPg8I/5rFHD7KFhYDPPn0oHH0+e/WxSc05/AeeEB3CuAMAAA=="},"shape":[119],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//vx/3/846Wr7f///1+/b/4sDPr7///zZ86caf/i///7/r3TCdJ/gRq12qfhpL/+/y/P1jiV6vQzoD/2lEwmmf4N9Of0vElw+un///uLMibSnf4FDD/fpAkU01f//7fnWNNDdRqSHroGHf0BGH4lkzvoRj8Ap+M2iumLwHB9WNWCk4akxyY4DYnfBjgNAELMKpS4AwAA"},"shape":[119],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p395482","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p395483"}}},"glyph":{"type":"object","name":"Line","id":"p395478","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p395479","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p395480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p395491","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p395485","attributes":{"selected":{"type":"object","name":"Selection","id":"p395486","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p395487"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p395492","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p395493"}}},"glyph":{"type":"object","name":"Line","id":"p395488","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p395489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p395490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p395430","attributes":{"tools":[{"id":"p395443"},{"id":"p395444"},{"id":"p395445"},{"id":"p395453"},{"type":"object","name":"SaveTool","id":"p395454"},{"id":"p395495"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p395438","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p395439","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p395440"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p395441"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p395433","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p395434","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p395435"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p395436"}}}],"center":[{"type":"object","name":"Grid","id":"p395437","attributes":{"axis":{"id":"p395433"}}},{"type":"object","name":"Grid","id":"p395442","attributes":{"dimension":1,"axis":{"id":"p395438"}}},{"type":"object","name":"Legend","id":"p395473","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p395474","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p395470"}]}},{"type":"object","name":"LegendItem","id":"p395484","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p395481"}]}},{"type":"object","name":"LegendItem","id":"p395494","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p395491"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p395496","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p395506","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p395498"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p395507"},"y_scale":{"type":"object","name":"LinearScale","id":"p395508"},"title":{"type":"object","name":"Title","id":"p395499","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p395537","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p395531","attributes":{"selected":{"type":"object","name":"Selection","id":"p395532","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p395533"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Bf//9/3751u/9+Ro3HLnCn2p6vf285g6LWfu2qV18QTE+3D09LSXjq328PUX/z/3/5hVYs9AJILvCNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p395538","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p395539"}}},"glyph":{"type":"object","name":"Line","id":"p395534","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p395535","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p395536","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p395546","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p395540","attributes":{"selected":{"type":"object","name":"Selection","id":"p395541","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p395542"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Bf//9/3751u/9+Ro3HLnCn2p6vf285g6LWfu2qV18QTE+3D09LSXjq328PUX/z/3/5hVYs9AJILvCNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p395547","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p395548"}}},"glyph":{"type":"object","name":"Line","id":"p395543","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p395544","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p395545","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p395557","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p395551","attributes":{"selected":{"type":"object","name":"Selection","id":"p395552","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p395553"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6Bf//9/3751u/9+Ro3HLnCn2p6vf285g6LWfu2qV18QTE+3D09LSXjq328PUX/z/3/5hVYs9AJILvCNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p395558","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p395559"}}},"glyph":{"type":"object","name":"Line","id":"p395554","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p395555","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p395556","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p395567","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p395561","attributes":{"selected":{"type":"object","name":"Selection","id":"p395562","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p395563"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p395568","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p395569"}}},"glyph":{"type":"object","name":"Line","id":"p395564","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p395565","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p395566","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p395505","attributes":{"tools":[{"id":"p395519"},{"id":"p395520"},{"id":"p395521"},{"id":"p395529"},{"type":"object","name":"SaveTool","id":"p395530"},{"id":"p395571"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p395514","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p395515","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p395516"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p395517"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p395509","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p395510"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p395511"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p395512"}}}],"center":[{"type":"object","name":"Grid","id":"p395513","attributes":{"axis":{"id":"p395509"}}},{"type":"object","name":"Grid","id":"p395518","attributes":{"dimension":1,"axis":{"id":"p395514"}}},{"type":"object","name":"Legend","id":"p395549","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p395550","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p395546"}]}},{"type":"object","name":"LegendItem","id":"p395560","attributes":{"label":{"type":"value","value":"Median Year (1977)"},"renderers":[{"id":"p395557"}]}},{"type":"object","name":"LegendItem","id":"p395570","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p395567"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p395582","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"07aea574-06d2-4746-afdc-f091bd013cbc","roots":{"p395583":"dbc8e40b-3f80-42b4-8935-5db41de214b9"},"root_ids":["p395583"]}];
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