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
    
    
    const element = document.getElementById("ba11aa7e-a3bc-473c-8501-35ada18ae250");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ba11aa7e-a3bc-473c-8501-35ada18ae250' but no matching script tag was found.")
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
                  const docs_json = '{"afeaf27e-ffa5-49e8-8eda-bf0a649abdda":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p379089","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p379090"}}},"roots":[{"type":"object","name":"Column","id":"p379253","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p379250","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p379249","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p379242","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p379113"},{"type":"object","name":"PanTool","id":"p379189"}]}},{"type":"object","name":"ToolProxy","id":"p379243","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p379114","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p379190","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p379244","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p379115","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p379116","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p379122","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p379121","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p379191","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p379192","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p379198","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p379197","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p379245","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p379123"},{"type":"object","name":"ResetTool","id":"p379199"}]}},{"type":"object","name":"SaveTool","id":"p379246"},{"type":"object","name":"ToolProxy","id":"p379247","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p379165","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p379248","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p379241","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p379091","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p379092"},"y_range":{"type":"object","name":"DataRange1d","id":"p379093"},"x_scale":{"type":"object","name":"LinearScale","id":"p379101"},"y_scale":{"type":"object","name":"LogScale","id":"p379102"},"title":{"type":"object","name":"Title","id":"p379094","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p379131","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p379125","attributes":{"selected":{"type":"object","name":"Selection","id":"p379126","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p379127"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhwROGBff+hryFXWR7Yp6albTNuvWe/zv2hFhPfXfsCW67tf9rvgMTD+HRv2b8O3BEXmXnNnoGBoSFj4lUw3ax/BUQfUNhwCURPaG+9ZP9NI6a/78kF+////8dbbrlg/6BK5NjV4nP2iwtso1aYngWrl2s9bb/W/aFVWecpe/WYfqkqyaMg9f9ZxA/bc11f/EP8/AEw/9riA/bPAnfkma3eZy/V+tqQu3qX/Q65VudGu532//7/318yeQdO+mXgDrvDvDvs//z/L3/z3HZ7Q2Nj5dMC2+3/As3Vat9mXyqy7rnnpa320q2vJcOnbgW76/PfLXAaaL58hOUW+6uLC5aGzt9sH7BDLtQ/YhNIfzyf7iZQuLAd7d8IdecGsumtcq2/FSI32P/4/59fd9NakPnzpfTXgvjxj5euti8UWSd/7s8qsP83/lwB8o/9w6olOOma14ErFtYvsv8MDJ+ijIUE6U9A8zjWzLFHp78D3TFz5kx7QvTfte6FPv4z7CsPfb0hsGqK/Tuw+4YPDQASjoKhKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p379132","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p379133"}}},"glyph":{"type":"object","name":"Line","id":"p379128","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p379129","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p379130","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p379140","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p379134","attributes":{"selected":{"type":"object","name":"Selection","id":"p379135","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p379136"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhwROGBff+hryFXWR7Yp6albTNuvWe/zv2hFhPfXfsCW67tf9rvgMTD+HRv2b8O3BEXmXnNnoGBoSFj4lUw3ax/BUQfUNhwCURPaG+9ZP9NI6a/78kF+////8dbbrlg/6BK5NjV4nP2iwtso1aYngWrl2s9bb/W/aFVWecpe/WYfqkqyaMg9f9ZxA/bc11f/EP8/AEw/9riA/bPAnfkma3eZy/V+tqQu3qX/Q65VudGu532//7/318yeQdO+mXgDrvDvDvs//z/L3/z3HZ7Q2Nj5dMC2+3/As3Vat9mXyqy7rnnpa320q2vJcOnbgW76/PfLXAaaL58hOUW+6uLC5aGzt9sH7BDLtQ/YhNIfzyf7iZQuLAd7d8IdecGsumtcq2/FSI32P/4/59fd9NakPnzpfTXgvjxj5euti8UWSd/7s8qsP83/lwB8o/9w6olOOma14ErFtYvsv8MDJ+ijIUE6U9A8zjWzLFHp78D3TFz5kx7QvTfte6FPv4z7CsPfb0hsGqK/Tuw+4YPDQASjoKhKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p379141","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p379142"}}},"glyph":{"type":"object","name":"Line","id":"p379137","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p379138","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p379139","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p379151","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p379145","attributes":{"selected":{"type":"object","name":"Selection","id":"p379146","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p379147"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2Te0hTURzHKykLySgRE7EyMbN0LB/zkdOvOuecc97d3T2kJEJIRCJCKkKiMBlRIWL+IRIxQkIK6WHSCymLKAmRkF4iFSYyQkQsQiKkc47f/TPOveec3/f7+X5vJOp244njkdKI+l8uXWh/fjlOX4fV9Ub86OgpfncpFqvPt6HlVe6Z0SPxfL8dx2w7teS2JO7bgXsz8sAu7t+NrNS/F35+TuW5NMgpvXN7eH4v0vtn6+2/M3jPfqjl2izeZ0JXd1Pi+2gz7zVjIvvmloHOA7w/G7GT0+vPx+dwTg5crQn/fNdzOS8PV+L0pcxUC+daMDZ0VVjL5/wCRBtvvk6ZC6mjEGL4h/uPiqjnIELSfkkxdVmh7L+2Ul8JosRui6uUOoFw0Z+PoWZQL/BC0FzKLKPuMnybMo83LJZRfzlW9rkdY0Pl9FGB5DZJuIJ+KmAV08NFNvqy4XDSrScxKzb6q4TaPlpJn3b0Pft+d6bDTr92PI2RE6rouwpfDskLHPTvwPKdgpS0CQc5VEPS6+quJo9q5CugTnJxwi/eNiXWkE8NTs8Pbp6criEnFxSusIu8avFQ4m6sJbdaqLjS3eTnxq9MWRA3OdZh6zmcmh+sI08NvXMmIVEjVw0DnSPDR/s08tXw2CIFauTswVuR5niDh7w9+BRqFtX1kLsH6roUnfx1yLQW2nXmoGODUNc/qzMPL+Sq3u5lLl6kqQJ6mY8XebIOmwzmZKBSfg4tBvMyoOo1bjA3A6r+Jh/z80HVtcvHHH24KD+/JR/z9OOarL/hZ65+yPaPDPuZrx8PRPtaEwLMOYCXQk3G2QDzDkAcFgoCzD0I2Y6e4iDzD2IxcLLceSPIHgSxRv3q8R9LAQ06GAQAAA=="},"shape":[131],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhwROGB/f///+/7994H0f+DH9+1Z2BgOPD57x2w+NLZYDp+lyeYlt9QdAMk/6BK5BqIbsiYeBWZPqCw4RJYPzLNCFSvwnYRbI7llgvI9P4TZefs/wHtqRI5B9Yn13oamX7ws+6U/d///+sdE46CxBfIRB0B0Ql8uodA5vy/tvgABv3n///9XzX22P8Gyq+W2QVWLxCxE2TP/pLJO4imgebI3zy33R5GA42bf8x7O8g9/7Xat8FpoD3x/Ye2guwD05Dw24JBA+2Xj7DcArIfTIPcv/LjJpA58Xy6mDRI/triDWB1tKC/AcPV3nQdyP75Uvpr4fQPoHseL11tD6O/AO1fLbMKGm4rQOFh/7BqCUEaqB/ov0X2n4HhXpSxkGT6E9AejjVz7HHR34Hunjlzpj2p9Atwep9u/w7sjymjNFo4AACsEk9FGAQAAA=="},"shape":[131],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p379152","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p379153"}}},"glyph":{"type":"object","name":"Line","id":"p379148","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p379149","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p379150","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p379161","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p379155","attributes":{"selected":{"type":"object","name":"Selection","id":"p379156","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p379157"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p379162","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p379163"}}},"glyph":{"type":"object","name":"Line","id":"p379158","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p379159","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p379160","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p379100","attributes":{"tools":[{"id":"p379113"},{"id":"p379114"},{"id":"p379115"},{"id":"p379123"},{"type":"object","name":"SaveTool","id":"p379124"},{"id":"p379165"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p379108","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p379109","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p379110"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p379111"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p379103","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p379104","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p379105"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p379106"}}}],"center":[{"type":"object","name":"Grid","id":"p379107","attributes":{"axis":{"id":"p379103"}}},{"type":"object","name":"Grid","id":"p379112","attributes":{"dimension":1,"axis":{"id":"p379108"}}},{"type":"object","name":"Legend","id":"p379143","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p379144","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p379140"}]}},{"type":"object","name":"LegendItem","id":"p379154","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p379151"}]}},{"type":"object","name":"LegendItem","id":"p379164","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p379161"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p379166","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p379176","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p379168"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p379177"},"y_scale":{"type":"object","name":"LinearScale","id":"p379178"},"title":{"type":"object","name":"Title","id":"p379169","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p379207","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p379201","attributes":{"selected":{"type":"object","name":"Selection","id":"p379202","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p379203"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy1zvHCPXOtt+5kzZ8b+Fj1qf0Qi2aehb6P98q3Xfq38uMj+3f//9g+rptjj0g8AHE4FCGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p379208","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p379209"}}},"glyph":{"type":"object","name":"Line","id":"p379204","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p379205","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p379206","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p379216","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p379210","attributes":{"selected":{"type":"object","name":"Selection","id":"p379211","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p379212"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy1zvHCPXOtt+5kzZ8b+Fj1qf0Qi2aehb6P98q3Xfq38uMj+3f//9g+rptjj0g8AHE4FCGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p379217","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p379218"}}},"glyph":{"type":"object","name":"Line","id":"p379213","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p379214","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p379215","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p379227","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p379221","attributes":{"selected":{"type":"object","name":"Selection","id":"p379222","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p379223"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy1zvHCPXOtt+5kzZ8b+Fj1qf0Qi2aehb6P98q3Xfq38uMj+3f//9g+rptjj0g8AHE4FCGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p379228","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p379229"}}},"glyph":{"type":"object","name":"Line","id":"p379224","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p379225","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p379226","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p379237","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p379231","attributes":{"selected":{"type":"object","name":"Selection","id":"p379232","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p379233"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p379238","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p379239"}}},"glyph":{"type":"object","name":"Line","id":"p379234","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p379235","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p379236","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p379175","attributes":{"tools":[{"id":"p379189"},{"id":"p379190"},{"id":"p379191"},{"id":"p379199"},{"type":"object","name":"SaveTool","id":"p379200"},{"id":"p379241"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p379184","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p379185","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p379186"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p379187"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p379179","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p379180"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p379181"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p379182"}}}],"center":[{"type":"object","name":"Grid","id":"p379183","attributes":{"axis":{"id":"p379179"}}},{"type":"object","name":"Grid","id":"p379188","attributes":{"dimension":1,"axis":{"id":"p379184"}}},{"type":"object","name":"Legend","id":"p379219","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p379220","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p379216"}]}},{"type":"object","name":"LegendItem","id":"p379230","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p379227"}]}},{"type":"object","name":"LegendItem","id":"p379240","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p379237"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p379252","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"afeaf27e-ffa5-49e8-8eda-bf0a649abdda","roots":{"p379253":"ba11aa7e-a3bc-473c-8501-35ada18ae250"},"root_ids":["p379253"]}];
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