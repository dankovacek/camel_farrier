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
    
    
    const element = document.getElementById("f1851500-c45a-417d-9d74-b395dba3dffc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f1851500-c45a-417d-9d74-b395dba3dffc' but no matching script tag was found.")
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
                  const docs_json = '{"abc2fed3-be3f-4d18-9bb2-647487118264":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p511023","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p511024"}}},"roots":[{"type":"object","name":"Column","id":"p511187","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p511184","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p511183","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p511176","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p511047"},{"type":"object","name":"PanTool","id":"p511123"}]}},{"type":"object","name":"ToolProxy","id":"p511177","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p511048","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p511124","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p511178","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p511049","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p511050","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p511056","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p511055","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p511125","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p511126","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p511132","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p511131","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p511179","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p511057"},{"type":"object","name":"ResetTool","id":"p511133"}]}},{"type":"object","name":"SaveTool","id":"p511180"},{"type":"object","name":"ToolProxy","id":"p511181","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p511099","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p511182","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p511175","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p511025","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p511026"},"y_range":{"type":"object","name":"DataRange1d","id":"p511027"},"x_scale":{"type":"object","name":"LinearScale","id":"p511035"},"y_scale":{"type":"object","name":"LogScale","id":"p511036"},"title":{"type":"object","name":"Title","id":"p511028","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p511065","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p511059","attributes":{"selected":{"type":"object","name":"Selection","id":"p511060","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p511061"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhwROGBff+hryFXWR7Yp6albTNuvWe/zv2hFhPfXfsCW67tf9rvgMTD+HRv2b8O3BEXmXnNnoGBoSFj4lUw3ax/BUQfUNhwCURPaG+9ZP9NI6a/78kF+////8dbbrlg/6BK5NjV4nP2iwtso1aYngWrl2s9bb/W/aFVWecpe/WYfqkqyaMg9f9ZxA/bc11f/EP8/AEw/9riA/bPAnfkma3eZy/V+tqQu3qX/Q65VudGu532//7/318yeQdO+mXgDrvDvDvs//z/L3/z3HZ7Q2Nj5dMC2+3/As3Vat9mXyqy7rnnpa320q2vJcOnbgW76/PfLXAaaI58hOUW+6uLC5aGzt9sH7BDLtQ/YhNIfzyf7iZQuLAd7d8IdecGsumtcq2/FSI32P/4/59fd9NakPnzpfTXgvjxj5euti8UWSd/7s8qsP83/lwB8o/9w6olOOma14ErFtYvsv8MDIeijIUE6U9AfRxr5mDQ34HumDlzJkH671r3Qh//GfaVh77eEFg1xf4d2B3DhwYAEo6CoSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p511066","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p511067"}}},"glyph":{"type":"object","name":"Line","id":"p511062","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p511063","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p511064","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p511074","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p511068","attributes":{"selected":{"type":"object","name":"Selection","id":"p511069","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p511070"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhwROGBff+hryFXWR7Yp6albTNuvWe/zv2hFhPfXfsCW67tf9rvgMTD+HRv2b8O3BEXmXnNnoGBoSFj4lUw3ax/BUQfUNhwCURPaG+9ZP9NI6a/78kF+////8dbbrlg/6BK5NjV4nP2iwtso1aYngWrl2s9bb/W/aFVWecpe/WYfqkqyaMg9f9ZxA/bc11f/EP8/AEw/9riA/bPAnfkma3eZy/V+tqQu3qX/Q65VudGu532//7/318yeQdO+mXgDrvDvDvs//z/L3/z3HZ7Q2Nj5dMC2+3/As3Vat9mXyqy7rnnpa320q2vJcOnbgW76/PfLXAaaI58hOUW+6uLC5aGzt9sH7BDLtQ/YhNIfzyf7iZQuLAd7d8IdecGsumtcq2/FSI32P/4/59fd9NakPnzpfTXgvjxj5euti8UWSd/7s8qsP83/lwB8o/9w6olOOma14ErFtYvsv8MDIeijIUE6U9AfRxr5mDQ34HumDlzJkH671r3Qh//GfaVh77eEFg1xf4d2B3DhwYAEo6CoSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p511075","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p511076"}}},"glyph":{"type":"object","name":"Line","id":"p511071","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p511072","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p511073","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p511085","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p511079","attributes":{"selected":{"type":"object","name":"Selection","id":"p511080","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p511081"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Sa0gUYRiFKykLyShZKsTKxMxS2bysl7yc1XXdm+vs7OzMSkWEUIhERFSERGEiYSFi/hCRkJCQQrqY2AUpiygJEZFuIhYmsoSIWIRESPN9nv0zOzPv955znjORqHs1Z05HSiLyulyy0PCyOU5dh9X7jfjR2F744XosVp9vQ92b7IvDxy18vwMnHbuVhPp4zu3CwxnxZw/n9yI96e/Vn1+SeC4Z4lTH3D6e34+Untlq5+9U7jkIebs2nfsy0Np2aud4tJV7rRjLvLOlt+UQ92cidmJq/RVLFnWy4Du3/V+oK5t6ObgRpy6lJdmoa8NI/01TOpf6eYjW3k1PWvPpIx+m+MdHgwX0cxhNwkZxIX0VQa59W0R/xYgyp22+EvoEugv+fGqqBf0Cr5qFATt92/Ft0jp6bNFO/6VYOeB3jfSXMkcZEuqF8zLmKUORKdJd4GAuB47G330Ws+JgvnLI8eFy5nSi88X3BzONTuZ14nmMUKhg7gp8PSIWuJjfheX7eYnJYy5ycEOotLa5ycONXCnsIRcP9C6R1Es+XlyY79s8MeUlJx/kpdtHXpV4ImRrKsmtEjJmip/8/PiVJoL6ybEKWy/j/HxfFXkq6JjLMC0q5Kqgt2Vo4ESnQr4KntqEQYWcA3g/LQAHyDuAz021JuoAuQcg1yWq5K9CbF1oUNmDig2mu55ZlX0EYZEgguwliGS5OMh+gsgRsTZp7ElDucBSp7EvDRLrqMbeNMhaMkLsLwQ51hpijyFcE7aWQuxTxy2BQdPZqw6RamhAZ786Hg8KAAZ7NvDadJN6yWDfBsZlsQZ7D0NsaS8Ms/8wFo2zpZ7bYX4HYayRv2r8B0sBDToYBAAA"},"shape":[131],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhwROGB/f///+/7994H0f+DH9+1Z2BgOPD57x2w+NLZYDp+lyeYlt9QdAMk/6BK5BqIbsiYeBWZPqCw4RIGzQhUr8J2EWyO5ZYLyPT+E2Xn7P8B7akSOQdWL9d6Gpl+8LPulP3f///rHROOgvgLZKKOgOgEPt1DYPdeW3wAg/4DNPerxh7730D+apldYPUCETtB9uwvmbyDaBpojvzNc9vhNNC4+ce8t4Pc81+rfRucBtoT339oK5yGhN8WDBpornyEJYIGuXflx00gc+L5dDFpiH820Iz+BgxXe9N1IPvmS+mvhdM/gPY/XroaTn8Bh+MqaLisAIWH/cOqJQTpH2D/LbL/DNRXlLGQZPoT0ByONXNw0t+B7p05cybJ9Atwep9u/w7szimjNBoNAKwST0UYBAAA"},"shape":[131],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p511086","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p511087"}}},"glyph":{"type":"object","name":"Line","id":"p511082","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p511083","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p511084","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p511095","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p511089","attributes":{"selected":{"type":"object","name":"Selection","id":"p511090","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p511091"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p511096","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p511097"}}},"glyph":{"type":"object","name":"Line","id":"p511092","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p511093","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p511094","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p511034","attributes":{"tools":[{"id":"p511047"},{"id":"p511048"},{"id":"p511049"},{"id":"p511057"},{"type":"object","name":"SaveTool","id":"p511058"},{"id":"p511099"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p511042","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p511043","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p511044"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p511045"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p511037","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p511038","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p511039"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p511040"}}}],"center":[{"type":"object","name":"Grid","id":"p511041","attributes":{"axis":{"id":"p511037"}}},{"type":"object","name":"Grid","id":"p511046","attributes":{"dimension":1,"axis":{"id":"p511042"}}},{"type":"object","name":"Legend","id":"p511077","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p511078","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p511074"}]}},{"type":"object","name":"LegendItem","id":"p511088","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p511085"}]}},{"type":"object","name":"LegendItem","id":"p511098","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p511095"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p511100","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p511110","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p511102"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p511111"},"y_scale":{"type":"object","name":"LinearScale","id":"p511112"},"title":{"type":"object","name":"Title","id":"p511103","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p511141","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p511135","attributes":{"selected":{"type":"object","name":"Selection","id":"p511136","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p511137"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aJnjhXvkWm/bz5w5M/a36FH7IxLJPg19G+2Xb732a+XHRfbv/v+3f1g1xR6XfgAcTgUIYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p511142","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p511143"}}},"glyph":{"type":"object","name":"Line","id":"p511138","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p511139","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p511140","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p511150","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p511144","attributes":{"selected":{"type":"object","name":"Selection","id":"p511145","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p511146"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aJnjhXvkWm/bz5w5M/a36FH7IxLJPg19G+2Xb732a+XHRfbv/v+3f1g1xR6XfgAcTgUIYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p511151","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p511152"}}},"glyph":{"type":"object","name":"Line","id":"p511147","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p511148","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p511149","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p511161","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p511155","attributes":{"selected":{"type":"object","name":"Selection","id":"p511156","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p511157"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aJnjhXvkWm/bz5w5M/a36FH7IxLJPg19G+2Xb732a+XHRfbv/v+3f1g1xR6XfgAcTgUIYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p511162","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p511163"}}},"glyph":{"type":"object","name":"Line","id":"p511158","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p511159","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p511160","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p511171","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p511165","attributes":{"selected":{"type":"object","name":"Selection","id":"p511166","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p511167"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p511172","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p511173"}}},"glyph":{"type":"object","name":"Line","id":"p511168","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p511169","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p511170","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p511109","attributes":{"tools":[{"id":"p511123"},{"id":"p511124"},{"id":"p511125"},{"id":"p511133"},{"type":"object","name":"SaveTool","id":"p511134"},{"id":"p511175"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p511118","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p511119","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p511120"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p511121"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p511113","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p511114"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p511115"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p511116"}}}],"center":[{"type":"object","name":"Grid","id":"p511117","attributes":{"axis":{"id":"p511113"}}},{"type":"object","name":"Grid","id":"p511122","attributes":{"dimension":1,"axis":{"id":"p511118"}}},{"type":"object","name":"Legend","id":"p511153","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p511154","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p511150"}]}},{"type":"object","name":"LegendItem","id":"p511164","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p511161"}]}},{"type":"object","name":"LegendItem","id":"p511174","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p511171"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p511186","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"abc2fed3-be3f-4d18-9bb2-647487118264","roots":{"p511187":"f1851500-c45a-417d-9d74-b395dba3dffc"},"root_ids":["p511187"]}];
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