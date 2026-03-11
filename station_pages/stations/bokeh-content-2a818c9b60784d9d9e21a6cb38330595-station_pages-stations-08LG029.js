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
    
    
    const element = document.getElementById("c1b45354-6d5a-4c13-ae81-96071fd08869");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c1b45354-6d5a-4c13-ae81-96071fd08869' but no matching script tag was found.")
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
                  const docs_json = '{"16902bbe-d27b-4daa-a71c-ba13938e9fd7":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p510261","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p510262"}}},"roots":[{"type":"object","name":"Column","id":"p510425","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p510422","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p510421","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p510414","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p510285"},{"type":"object","name":"PanTool","id":"p510361"}]}},{"type":"object","name":"ToolProxy","id":"p510415","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p510286","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p510362","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p510416","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p510287","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p510288","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p510294","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510293","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p510363","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p510364","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p510370","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510369","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p510417","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p510295"},{"type":"object","name":"ResetTool","id":"p510371"}]}},{"type":"object","name":"SaveTool","id":"p510418"},{"type":"object","name":"ToolProxy","id":"p510419","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p510337","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p510420","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p510413","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p510263","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p510264"},"y_range":{"type":"object","name":"DataRange1d","id":"p510265"},"x_scale":{"type":"object","name":"LinearScale","id":"p510273"},"y_scale":{"type":"object","name":"LogScale","id":"p510274"},"title":{"type":"object","name":"Title","id":"p510266","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p510303","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510297","attributes":{"selected":{"type":"object","name":"Selection","id":"p510298","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510299"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGg49FXEIab/0NXDTsIOO+RasyfmCjrIt75mbAwVcLDluq688w+vw9kzZ1py0nkcvmnEvOd/yeVwfXFBrPoCDgc7ruvOdi8YHWL7D7ky+v63Z2BgSOg/9NP+q0aMuav7d/t17g+j7rh9tn8ZuEPO5cBLkDzD1YqnINrhYdUTML9x6mNkusGW67F9tci6/AdzHoH4D7r+PrQHukM7yeshmK/ChkIDzXmATCsYcmDS////V1/y5x6If+Dz3zsEaSNj49+HUsD0ZCWjO/aMDAwLXLfdhtMb3R868S67DbaXh+m2Pff1xQapkrfA/LhdN+33f9W4Yu13E2Sv/IaiG/Znzpzh0W6/BuLvP1F2DRQuTJuuXwWr51hzBer/y3AaqK7+wKmL9n///4+3vn8exP+/WuaUfYvIuvD6m0dB7riyj++I/T+g/MS3e6hO/wbbt8v+4JkzOrpTt0PDZQvd6GNnzmzZ9H6T/RewO1aRTf8A0is/LiJIG3NdX25WuMj+xf//9/17p2PQAGN52mcoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510304","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510305"}}},"glyph":{"type":"object","name":"Line","id":"p510300","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p510312","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510306","attributes":{"selected":{"type":"object","name":"Selection","id":"p510307","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510308"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGg49FXEIab/0NXDTsIOO+RasyfmCjrIt75mbAwVcLDluq688w+vw9kzZ1py0nkcvmnEvOd/yeVwfXFBrPoCDgc7ruvOdi8YHWL7D7ky+v63Z2BgSOg/9NP+q0aMuav7d/t17g+j7rh9tn8ZuEPO5cBLkDzD1YqnINrhYdUTML9x6mNkusGW67F9tci6/AdzHoH4D7r+PrQHukM7yeshmK/ChkIDzXmATCsYcmDS////V1/y5x6If+Dz3zsEaSNj49+HUsD0ZCWjO/aMDAwLXLfdhtMb3R868S67DbaXh+m2Pff1xQapkrfA/LhdN+33f9W4Yu13E2Sv/IaiG/Znzpzh0W6/BuLvP1F2DRQuTJuuXwWr51hzBer/y3AaqK7+wKmL9n///4+3vn8exP+/WuaUfYvIuvD6m0dB7riyj++I/T+g/MS3e6hO/wbbt8v+4JkzOrpTt0PDZQvd6GNnzmzZ9H6T/RewO1aRTf8A0is/LiJIG3NdX25WuMj+xf//9/17p2PQAGN52mcoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510313","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510314"}}},"glyph":{"type":"object","name":"Line","id":"p510309","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510310","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p510311","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p510323","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510317","attributes":{"selected":{"type":"object","name":"Selection","id":"p510318","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510319"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2VCWwUZRzFrVLUIIUWrFat0BZaW2i35/buvr2v7u7szOzsAApExaKIGLVqIyIoKqAQ8AAvihAVK8QDBEJFCx6cEUUONSVKwCqCB0gVlEKc7+vbTNJ0Z+b7v/97v5dd/M09A974sNuxWP496fgtW7vskR29/P+84xX3F4//rKSg//sBaDp35IkhTVeg//4gHF3bN7dmzBD0P5eOz0qvsq5hfH44rh4k7mTyvWtxR0/B5+P+zeL716Oza4PnjxnZPGcEBn658lbn/SN5Xg5sncdXPVOSy3PzYK62HTv4ax7PH4XZLzyYN/LN0ZyTj445H9921+QCzrsJ/WMKObcQfRPCP108VMT5YzAq+Jx1jaWOYkTt39/+fKSEemz4KF08WUpdpVDmrf9r2NFS6itDz8VDGZu7yqizHG2t/5VPXF5OvRVIk0IrqLsCq6xT3jYrqb8Scpy9intUYU9MDLBzHzsmbV+zf9lpO/eqxpmGr6yrmvvVQMpZW8M9a5FdlFn59IJa7luLD16v1cdOrePedfBec8sD+7z13L8e3QvF5Ab60IAZ4piURvrRCEvkga0/NNKXJiw7faJ3ypYm+uNA8dQ0S6qDPgGT/3zpuu/qQb+Ad+QH9A34e8qWukeznPTPCUfO3t2xeU766MT8wz+Ozz3rpJ8u7JcDXfTVhRuFbQdc9NcNOd7tps9urNuV/+rd69z0240LQmWOh7574EfIkuqh/x4sOS+M8TAHL7o3TrcuL/PwIv++x6bNP+xlLj7cWyze8DEfH6TMTh9z8iFV2FfoZ15+xOQNP3Pz42XLnbcGBphfAJbIPQ+3BphjACVSUIB5BvFQ82BLapC5BvHp5SNmntoWZL5BDJZGhJhzCMYs12svrggx7xBWiq/Twsw9jJO9IoAw8w+j6n0xIUwOmjF7mkigmTw0Y7ewc1czuYhguAw+Qj4imLj8k2eTqyPkJIIO8+sbijKj5CUKsVXf3Ci5iaJR2HAmSn5ieGpBqkVKjBzFsE8KjZEnBYtkEAq5UlAhByrkS4Fw859FCjlTMCvrveik7Qp5U5B7dtPSnRcUchfHTktlWVWc/MUxXQITJ4dxZEhj4uQxjk0Ch+44uYzjZmFrhko+VaQU/u5DSCWnKoSajjkqeVUhH9+sklsVp7aJAFXyq2HpiqEtPQUaOdZgibQW0MizhiPjxQYaudbwpMB5r0a+NUgsUnVyrkPa26CTdx2t0lCd3OuQ9qzRyb+OLis92zGdPdBhQWs5nWAfErgycGf1pWqCvUjg3dGiEAn2IwG51tYEe5KAxPpcgn0x0C7wsBnsjQFB59AWg/0xcLyt/Ze2doM9MrBQyDlosE8GyiWgSfYqiW+tVDZ4kuxXEjOloUn2LAkZ4/ok+5bEDnHMiSR7Z0LinWuyfybSW0SRTPbQxEbxK7DEZB9NTJAAmeyliUvkZxz+B4PrxUY4BwAA"},"shape":[231],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGg49FXEgQEINGOEQXSDLReYPnDmjCCIdjA2BtMH5FoFwPKvA8H0ga8afMj0g8UFvFB9PGB+lQgqHbiDC8rngtrHCbWPFUQrxPQzOTCC7WMEi4us+28P4f+3B/IT0tL+gen+Qz+RaSD4AaIXFNh+A4vvkPtqDzHvE1T+A1j+46WXYPGolOdg8asVT5Fph4dVT5Bphsapj4mhge7HSgPtf4RMH/DkeQR190OwuoyJYPqBChtJNNB9D4ihFQw5SKf///8vf/vnPbB7P/+9Q3MaaF/8Lk9MGhjvC1y33SaZBvmfhwk/HbfrJkEaFA4bim5g0CB3l+27DuLvP1F2DR9tv+3zVWh8g2kHjjVXsNHAdHQZJw00p/7AqYtwGiT+78oF+7/AcLK+fx5OA+X/r5Y5hUGD0r1M1BEM+h9Q38S3e4YN/Rvs310Y9B9gvN08tx2a3raM0lAalG74dDfZfwGH06pBR/8A0is/LqI5/eL///v+vdNJpgGt4CR9OAcAAA=="},"shape":[231],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510324","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510325"}}},"glyph":{"type":"object","name":"Line","id":"p510320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510321","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p510322","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p510333","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510327","attributes":{"selected":{"type":"object","name":"Selection","id":"p510328","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510329"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p510334","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510335"}}},"glyph":{"type":"object","name":"Line","id":"p510330","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510332","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p510272","attributes":{"tools":[{"id":"p510285"},{"id":"p510286"},{"id":"p510287"},{"id":"p510295"},{"type":"object","name":"SaveTool","id":"p510296"},{"id":"p510337"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p510280","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p510281","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p510282"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510283"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p510275","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p510276","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p510277"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510278"}}}],"center":[{"type":"object","name":"Grid","id":"p510279","attributes":{"axis":{"id":"p510275"}}},{"type":"object","name":"Grid","id":"p510284","attributes":{"dimension":1,"axis":{"id":"p510280"}}},{"type":"object","name":"Legend","id":"p510315","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p510316","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p510312"}]}},{"type":"object","name":"LegendItem","id":"p510326","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p510323"}]}},{"type":"object","name":"LegendItem","id":"p510336","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p510333"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p510338","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p510348","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p510340"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p510349"},"y_scale":{"type":"object","name":"LinearScale","id":"p510350"},"title":{"type":"object","name":"Title","id":"p510341","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p510379","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510373","attributes":{"selected":{"type":"object","name":"Selection","id":"p510374","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510375"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aH5+/vUPhPkdXFxcRETs39lHZa8V7X933D44e+1SxtxV9m/fvbMT699hfz0qW/bCsoP2QE0dazc/sA/20nTln3zLHgBYX1RIYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510380","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510381"}}},"glyph":{"type":"object","name":"Line","id":"p510376","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510377","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510378","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p510388","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510382","attributes":{"selected":{"type":"object","name":"Selection","id":"p510383","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510384"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aH5+/vUPhPkdXFxcRETs39lHZa8V7X933D44e+1SxtxV9m/fvbMT699hfz0qW/bCsoP2QE0dazc/sA/20nTln3zLHgBYX1RIYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510389","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510390"}}},"glyph":{"type":"object","name":"Line","id":"p510385","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510386","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p510387","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p510399","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510393","attributes":{"selected":{"type":"object","name":"Selection","id":"p510394","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510395"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aH5+/vUPhPkdXFxcRETs39lHZa8V7X933D44e+1SxtxV9m/fvbMT699hfz0qW/bCsoP2QE0dazc/sA/20nTln3zLHgBYX1RIYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510400","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510401"}}},"glyph":{"type":"object","name":"Line","id":"p510396","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510397","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p510398","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p510409","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510403","attributes":{"selected":{"type":"object","name":"Selection","id":"p510404","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510405"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p510410","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510411"}}},"glyph":{"type":"object","name":"Line","id":"p510406","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510407","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510408","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p510347","attributes":{"tools":[{"id":"p510361"},{"id":"p510362"},{"id":"p510363"},{"id":"p510371"},{"type":"object","name":"SaveTool","id":"p510372"},{"id":"p510413"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p510356","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p510357","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p510358"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510359"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p510351","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p510352"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p510353"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p510354"}}}],"center":[{"type":"object","name":"Grid","id":"p510355","attributes":{"axis":{"id":"p510351"}}},{"type":"object","name":"Grid","id":"p510360","attributes":{"dimension":1,"axis":{"id":"p510356"}}},{"type":"object","name":"Legend","id":"p510391","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p510392","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p510388"}]}},{"type":"object","name":"LegendItem","id":"p510402","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p510399"}]}},{"type":"object","name":"LegendItem","id":"p510412","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p510409"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p510424","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"16902bbe-d27b-4daa-a71c-ba13938e9fd7","roots":{"p510425":"c1b45354-6d5a-4c13-ae81-96071fd08869"},"root_ids":["p510425"]}];
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