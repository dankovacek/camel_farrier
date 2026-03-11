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
    
    
    const element = document.getElementById("f2507118-eb2c-4e75-b129-c92a4d5af24a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f2507118-eb2c-4e75-b129-c92a4d5af24a' but no matching script tag was found.")
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
                  const docs_json = '{"b3f9686a-0b0c-4185-8e0b-313597e37ba1":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p510622","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p510623"}}},"roots":[{"type":"object","name":"Column","id":"p510786","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p510783","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p510782","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p510775","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p510646"},{"type":"object","name":"PanTool","id":"p510722"}]}},{"type":"object","name":"ToolProxy","id":"p510776","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p510647","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p510723","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p510777","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p510648","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p510649","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p510655","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510654","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p510724","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p510725","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p510731","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p510730","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p510778","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p510656"},{"type":"object","name":"ResetTool","id":"p510732"}]}},{"type":"object","name":"SaveTool","id":"p510779"},{"type":"object","name":"ToolProxy","id":"p510780","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p510698","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p510781","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p510774","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p510624","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p510625"},"y_range":{"type":"object","name":"DataRange1d","id":"p510626"},"x_scale":{"type":"object","name":"LinearScale","id":"p510634"},"y_scale":{"type":"object","name":"LogScale","id":"p510635"},"title":{"type":"object","name":"Title","id":"p510627","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p510664","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510658","attributes":{"selected":{"type":"object","name":"Selection","id":"p510659","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510660"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhwROGBff+hryFXWR7Yp6albTNuvWe/zv2hFhPfXfsCW67tf9rvgMTD+HRv2b8O3BEXmXnNnoGBoSFj4lUw3ax/BUQfUNhwCURPaG+9ZP9NI6a/78kF+////8dbbrlg/6BK5NjV4nP2iwtso1aYngWrl2s9bb/W/aFVWecpe/WYfqkqyaMg9f9ZxA/bc11f/EP8/AEw/9riA/bPAnfkma3eZy/V+tqQu3qX/Q65VudGu532//7/318yeQdO+mXgDrvDvDvs//z/L3/z3HZ7Q2Nj5dMC2+3/As3Vat9mXyqy7rnnpa320q2vJcOnbgW76/PfLXAaaI58hOUW+6uLC5aGzt9sH7BDLtQ/YhNIfzyf7iZQuLAd7d8IdecGsumtcq2/FSI32P/4/59fd9NakPnzpfTXgvjxj5euti8UWSd/7s8qsP83/lwB8o/9w6olOOma14ErFtYvsv8MDIeijIUE6U9AfRxr5mDQ34HumDlzJkH671r3Qh//GfaVh77eEFg1xf4d2B3DhwYAEo6CoSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510665","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510666"}}},"glyph":{"type":"object","name":"Line","id":"p510661","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510662","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510663","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p510673","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510667","attributes":{"selected":{"type":"object","name":"Selection","id":"p510668","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510669"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhwROGBff+hryFXWR7Yp6albTNuvWe/zv2hFhPfXfsCW67tf9rvgMTD+HRv2b8O3BEXmXnNnoGBoSFj4lUw3ax/BUQfUNhwCURPaG+9ZP9NI6a/78kF+////8dbbrlg/6BK5NjV4nP2iwtso1aYngWrl2s9bb/W/aFVWecpe/WYfqkqyaMg9f9ZxA/bc11f/EP8/AEw/9riA/bPAnfkma3eZy/V+tqQu3qX/Q65VudGu532//7/318yeQdO+mXgDrvDvDvs//z/L3/z3HZ7Q2Nj5dMC2+3/As3Vat9mXyqy7rnnpa320q2vJcOnbgW76/PfLXAaaI58hOUW+6uLC5aGzt9sH7BDLtQ/YhNIfzyf7iZQuLAd7d8IdecGsumtcq2/FSI32P/4/59fd9NakPnzpfTXgvjxj5euti8UWSd/7s8qsP83/lwB8o/9w6olOOma14ErFtYvsv8MDIeijIUE6U9AfRxr5mDQ34HumDlzJkH671r3Qh//GfaVh77eEFg1xf4d2B3DhwYAEo6CoSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510674","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510675"}}},"glyph":{"type":"object","name":"Line","id":"p510670","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510671","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p510672","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p510684","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510678","attributes":{"selected":{"type":"object","name":"Selection","id":"p510679","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510680"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Sa0gUYRiFKykLyShZKsTKxMxS2bysl7yc1XXdm+vs7OzMSkWEUIhERFSERGEiYSFi/hCRkJCQQrqY2AUpiygJEZFuIhYmsoSIWIRESPN9nv0zOzPv955znjORqHs1Z05HSiLyulyy0PCyOU5dh9X7jfjR2F744XosVp9vQ92b7IvDxy18vwMnHbuVhPp4zu3CwxnxZw/n9yI96e/Vn1+SeC4Z4lTH3D6e34+Untlq5+9U7jkIebs2nfsy0Np2aud4tJV7rRjLvLOlt+UQ92cidmJq/RVLFnWy4Du3/V+oK5t6ObgRpy6lJdmoa8NI/01TOpf6eYjW3k1PWvPpIx+m+MdHgwX0cxhNwkZxIX0VQa59W0R/xYgyp22+EvoEugv+fGqqBf0Cr5qFATt92/Ft0jp6bNFO/6VYOeB3jfSXMkcZEuqF8zLmKUORKdJd4GAuB47G330Ws+JgvnLI8eFy5nSi88X3BzONTuZ14nmMUKhg7gp8PSIWuJjfheX7eYnJYy5ycEOotLa5ycONXCnsIRcP9C6R1Es+XlyY79s8MeUlJx/kpdtHXpV4ImRrKsmtEjJmip/8/PiVJoL6ybEKWy/j/HxfFXkq6JjLMC0q5Kqgt2Vo4ESnQr4KntqEQYWcA3g/LQAHyDuAz021JuoAuQcg1yWq5K9CbF1oUNmDig2mu55ZlX0EYZEgguwliGS5OMh+gsgRsTZp7ElDucBSp7EvDRLrqMbeNMhaMkLsLwQ51hpijyFcE7aWQuxTxy2BQdPZqw6RamhAZ786Hg8KAAZ7NvDadJN6yWDfBsZlsQZ7D0NsaS8Ms/8wFo2zpZ7bYX4HYayRv2r8B0sBDToYBAAA"},"shape":[131],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhwROGB/f///+/7994H0f+DH9+1Z2BgOPD57x2w+NLZYDp+lyeYlt9QdAMk/6BK5BqIbsiYeBWZPqCw4RIGzQhUr8J2EWyO5ZYLyPT+E2Xn7P8B7akSOQdWL9d6Gpl+8LPulP3f///rHROOgvgLZKKOgOgEPt1DYPdeW3wAg/4DNPerxh7730D+apldYPUCETtB9uwvmbyDaBpojvzNc9vhNNC4+ce8t4Pc81+rfRucBtoT339oK5yGhN8WDBpornyEJYIGuXflx00gc+L5dDFpiH820Iz+BgxXe9N1IPvmS+mvhdM/gPY/XroaTn8Bh+MqaLisAIWH/cOqJQTpH2D/LbL/DNRXlLGQZPoT0ByONXNw0t+B7p05cybJ9Atwep9u/w7szimjNBoNAKwST0UYBAAA"},"shape":[131],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510685","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510686"}}},"glyph":{"type":"object","name":"Line","id":"p510681","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510682","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p510683","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p510694","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510688","attributes":{"selected":{"type":"object","name":"Selection","id":"p510689","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510690"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p510695","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510696"}}},"glyph":{"type":"object","name":"Line","id":"p510691","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510692","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510693","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p510633","attributes":{"tools":[{"id":"p510646"},{"id":"p510647"},{"id":"p510648"},{"id":"p510656"},{"type":"object","name":"SaveTool","id":"p510657"},{"id":"p510698"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p510641","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p510642","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p510643"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510644"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p510636","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p510637","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p510638"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510639"}}}],"center":[{"type":"object","name":"Grid","id":"p510640","attributes":{"axis":{"id":"p510636"}}},{"type":"object","name":"Grid","id":"p510645","attributes":{"dimension":1,"axis":{"id":"p510641"}}},{"type":"object","name":"Legend","id":"p510676","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p510677","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p510673"}]}},{"type":"object","name":"LegendItem","id":"p510687","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p510684"}]}},{"type":"object","name":"LegendItem","id":"p510697","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p510694"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p510699","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p510709","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p510701"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p510710"},"y_scale":{"type":"object","name":"LinearScale","id":"p510711"},"title":{"type":"object","name":"Title","id":"p510702","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p510740","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510734","attributes":{"selected":{"type":"object","name":"Selection","id":"p510735","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510736"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aJnjhXvkWm/bz5w5M/a36FH7IxLJPg19G+2Xb732a+XHRfbv/v+3f1g1xR6XfgAcTgUIYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510741","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510742"}}},"glyph":{"type":"object","name":"Line","id":"p510737","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p510749","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510743","attributes":{"selected":{"type":"object","name":"Selection","id":"p510744","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510745"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aJnjhXvkWm/bz5w5M/a36FH7IxLJPg19G+2Xb732a+XHRfbv/v+3f1g1xR6XfgAcTgUIYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510750","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510751"}}},"glyph":{"type":"object","name":"Line","id":"p510746","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510747","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p510748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p510760","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510754","attributes":{"selected":{"type":"object","name":"Selection","id":"p510755","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510756"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aJnjhXvkWm/bz5w5M/a36FH7IxLJPg19G+2Xb732a+XHRfbv/v+3f1g1xR6XfgAcTgUIYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p510761","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510762"}}},"glyph":{"type":"object","name":"Line","id":"p510757","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510758","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p510759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p510770","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p510764","attributes":{"selected":{"type":"object","name":"Selection","id":"p510765","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p510766"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p510771","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p510772"}}},"glyph":{"type":"object","name":"Line","id":"p510767","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p510768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p510769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p510708","attributes":{"tools":[{"id":"p510722"},{"id":"p510723"},{"id":"p510724"},{"id":"p510732"},{"type":"object","name":"SaveTool","id":"p510733"},{"id":"p510774"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p510717","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p510718","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p510719"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p510720"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p510712","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p510713"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p510714"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p510715"}}}],"center":[{"type":"object","name":"Grid","id":"p510716","attributes":{"axis":{"id":"p510712"}}},{"type":"object","name":"Grid","id":"p510721","attributes":{"dimension":1,"axis":{"id":"p510717"}}},{"type":"object","name":"Legend","id":"p510752","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p510753","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p510749"}]}},{"type":"object","name":"LegendItem","id":"p510763","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p510760"}]}},{"type":"object","name":"LegendItem","id":"p510773","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p510770"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p510785","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b3f9686a-0b0c-4185-8e0b-313597e37ba1","roots":{"p510786":"f2507118-eb2c-4e75-b129-c92a4d5af24a"},"root_ids":["p510786"]}];
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