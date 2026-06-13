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
    
    
    const element = document.getElementById("bf1b6370-1194-46fc-bc3b-afc535b007cc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bf1b6370-1194-46fc-bc3b-afc535b007cc' but no matching script tag was found.")
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
                  const docs_json = '{"8156f762-2bb0-415a-9c7b-e6fbc512db4f":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p378869","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p378870"}}},"roots":[{"type":"object","name":"Column","id":"p379033","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p379030","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p379029","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p379022","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p378893"},{"type":"object","name":"PanTool","id":"p378969"}]}},{"type":"object","name":"ToolProxy","id":"p379023","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p378894","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p378970","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p379024","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p378895","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378896","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378902","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378901","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p378971","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378972","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378978","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378977","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p379025","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p378903"},{"type":"object","name":"ResetTool","id":"p378979"}]}},{"type":"object","name":"SaveTool","id":"p379026"},{"type":"object","name":"ToolProxy","id":"p379027","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378945","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p379028","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p379021","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p378871","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p378872"},"y_range":{"type":"object","name":"DataRange1d","id":"p378873"},"x_scale":{"type":"object","name":"LinearScale","id":"p378881"},"y_scale":{"type":"object","name":"LogScale","id":"p378882"},"title":{"type":"object","name":"Title","id":"p378874","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378911","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378905","attributes":{"selected":{"type":"object","name":"Selection","id":"p378906","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378907"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhwROGBff+hryFXWR7Yp6albTNuvWe/zv2hFhPfXfsCW67tf9rvgMTD+HRv2b8O3BEXmXnNnoGBoSFj4lUw3ax/BUQfUNhwCURPaG+9ZP9NI6a/78kF+////8dbbrlg/6BK5NjV4nP2iwtso1aYngWrl2s9bb/W/aFVWecpe/WYfqkqyaMg9f9ZxA/bc11f/EP8/AEw/9riA/bPAnfkma3eZy/V+tqQu3qX/Q65VudGu532//7/318yeQdO+mXgDrvDvDvs//z/L3/z3HZ7Q2Nj5dMC2+3/As3Vat9mXyqy7rnnpa320q2vJcOnbgW76/PfLXAaaL58hOUW+6uLC5aGzt9sH7BDLtQ/YhNIfzyf7iZQuLAd7d8IdecGsumtcq2/FSI32P/4/59fd9NakPnzpfTXgvjxj5euti8UWSd/7s8qsP83/lwB8o/9w6olOOma14ErFtYvsv8MDJ+ijIUE6U9A8zjWzLFHp78D3TFz5kx7QvTfte6FPv4z7CsPfb0hsGqK/Tuw+4YPDQASjoKhKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378912","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378913"}}},"glyph":{"type":"object","name":"Line","id":"p378908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378909","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378910","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378920","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378914","attributes":{"selected":{"type":"object","name":"Selection","id":"p378915","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378916"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhwROGBff+hryFXWR7Yp6albTNuvWe/zv2hFhPfXfsCW67tf9rvgMTD+HRv2b8O3BEXmXnNnoGBoSFj4lUw3ax/BUQfUNhwCURPaG+9ZP9NI6a/78kF+////8dbbrlg/6BK5NjV4nP2iwtso1aYngWrl2s9bb/W/aFVWecpe/WYfqkqyaMg9f9ZxA/bc11f/EP8/AEw/9riA/bPAnfkma3eZy/V+tqQu3qX/Q65VudGu532//7/318yeQdO+mXgDrvDvDvs//z/L3/z3HZ7Q2Nj5dMC2+3/As3Vat9mXyqy7rnnpa320q2vJcOnbgW76/PfLXAaaL58hOUW+6uLC5aGzt9sH7BDLtQ/YhNIfzyf7iZQuLAd7d8IdecGsumtcq2/FSI32P/4/59fd9NakPnzpfTXgvjxj5euti8UWSd/7s8qsP83/lwB8o/9w6olOOma14ErFtYvsv8MDJ+ijIUE6U9A8zjWzLFHp78D3TFz5kx7QvTfte6FPv4z7CsPfb0hsGqK/Tuw+4YPDQASjoKhKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378921","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378922"}}},"glyph":{"type":"object","name":"Line","id":"p378917","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378931","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378925","attributes":{"selected":{"type":"object","name":"Selection","id":"p378926","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378927"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2Te0hTURzHKykLySgRE7EyMbN0LB/zkdOvOuecc97d3T2kJEJIRCJCKkKiMBlRIWL+IRIxQkIK6WHSCymLKAmRkF4iFSYyQkQsQiKkc47f/TPOveec3/f7+X5vJOp244njkdKI+l8uXWh/fjlOX4fV9Ub86OgpfncpFqvPt6HlVe6Z0SPxfL8dx2w7teS2JO7bgXsz8sAu7t+NrNS/F35+TuW5NMgpvXN7eH4v0vtn6+2/M3jPfqjl2izeZ0JXd1Pi+2gz7zVjIvvmloHOA7w/G7GT0+vPx+dwTg5crQn/fNdzOS8PV+L0pcxUC+daMDZ0VVjL5/wCRBtvvk6ZC6mjEGL4h/uPiqjnIELSfkkxdVmh7L+2Ul8JosRui6uUOoFw0Z+PoWZQL/BC0FzKLKPuMnybMo83LJZRfzlW9rkdY0Pl9FGB5DZJuIJ+KmAV08NFNvqy4XDSrScxKzb6q4TaPlpJn3b0Pft+d6bDTr92PI2RE6rouwpfDskLHPTvwPKdgpS0CQc5VEPS6+quJo9q5CugTnJxwi/eNiXWkE8NTs8Pbp6criEnFxSusIu8avFQ4m6sJbdaqLjS3eTnxq9MWRA3OdZh6zmcmh+sI08NvXMmIVEjVw0DnSPDR/s08tXw2CIFauTswVuR5niDh7w9+BRqFtX1kLsH6roUnfx1yLQW2nXmoGODUNc/qzMPL+Sq3u5lLl6kqQJ6mY8XebIOmwzmZKBSfg4tBvMyoOo1bjA3A6r+Jh/z80HVtcvHHH24KD+/JR/z9OOarL/hZ65+yPaPDPuZrx8PRPtaEwLMOYCXQk3G2QDzDkAcFgoCzD0I2Y6e4iDzD2IxcLLceSPIHgSxRv3q8R9LAQ06GAQAAA=="},"shape":[131],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhwROGB/f///+/7994H0f+DH9+1Z2BgOPD57x2w+NLZYDp+lyeYlt9QdAMk/6BK5BqIbsiYeBWZPqCw4RJYPzLNCFSvwnYRbI7llgvI9P4TZefs/wHtqRI5B9Yn13oamX7ws+6U/d///+sdE46CxBfIRB0B0Ql8uodA5vy/tvgABv3n///9XzX22P8Gyq+W2QVWLxCxE2TP/pLJO4imgebI3zy33R5GA42bf8x7O8g9/7Xat8FpoD3x/Ye2guwD05Dw24JBA+2Xj7DcArIfTIPcv/LjJpA58Xy6mDRI/triDWB1tKC/AcPV3nQdyP75Uvpr4fQPoHseL11tD6O/AO1fLbMKGm4rQOFh/7BqCUEaqB/ov0X2n4HhXpSxkGT6E9AejjVz7HHR34Hunjlzpj2p9Atwep9u/w7sjymjNFo4AACsEk9FGAQAAA=="},"shape":[131],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378932","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378933"}}},"glyph":{"type":"object","name":"Line","id":"p378928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378929","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378930","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378941","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378935","attributes":{"selected":{"type":"object","name":"Selection","id":"p378936","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378937"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378942","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378943"}}},"glyph":{"type":"object","name":"Line","id":"p378938","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378939","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378940","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378880","attributes":{"tools":[{"id":"p378893"},{"id":"p378894"},{"id":"p378895"},{"id":"p378903"},{"type":"object","name":"SaveTool","id":"p378904"},{"id":"p378945"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p378888","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p378889","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p378890"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378891"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p378883","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378884","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378885"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378886"}}}],"center":[{"type":"object","name":"Grid","id":"p378887","attributes":{"axis":{"id":"p378883"}}},{"type":"object","name":"Grid","id":"p378892","attributes":{"dimension":1,"axis":{"id":"p378888"}}},{"type":"object","name":"Legend","id":"p378923","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378924","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p378920"}]}},{"type":"object","name":"LegendItem","id":"p378934","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p378931"}]}},{"type":"object","name":"LegendItem","id":"p378944","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378941"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p378946","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p378956","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p378948"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p378957"},"y_scale":{"type":"object","name":"LinearScale","id":"p378958"},"title":{"type":"object","name":"Title","id":"p378949","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378987","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378981","attributes":{"selected":{"type":"object","name":"Selection","id":"p378982","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378983"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy1zvHCPXOtt+5kzZ8b+Fj1qf0Qi2aehb6P98q3Xfq38uMj+3f//9g+rptjj0g8AHE4FCGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378988","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378989"}}},"glyph":{"type":"object","name":"Line","id":"p378984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378985","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378986","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378996","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378990","attributes":{"selected":{"type":"object","name":"Selection","id":"p378991","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378992"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy1zvHCPXOtt+5kzZ8b+Fj1qf0Qi2aehb6P98q3Xfq38uMj+3f//9g+rptjj0g8AHE4FCGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378997","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378998"}}},"glyph":{"type":"object","name":"Line","id":"p378993","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378994","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378995","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p379007","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p379001","attributes":{"selected":{"type":"object","name":"Selection","id":"p379002","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p379003"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKCy1zvHCPXOtt+5kzZ8b+Fj1qf0Qi2aehb6P98q3Xfq38uMj+3f//9g+rptjj0g8AHE4FCGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p379008","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p379009"}}},"glyph":{"type":"object","name":"Line","id":"p379004","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p379005","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p379006","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p379017","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p379011","attributes":{"selected":{"type":"object","name":"Selection","id":"p379012","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p379013"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p379018","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p379019"}}},"glyph":{"type":"object","name":"Line","id":"p379014","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p379015","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p379016","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378955","attributes":{"tools":[{"id":"p378969"},{"id":"p378970"},{"id":"p378971"},{"id":"p378979"},{"type":"object","name":"SaveTool","id":"p378980"},{"id":"p379021"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p378964","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378965","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378966"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378967"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p378959","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p378960"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p378961"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p378962"}}}],"center":[{"type":"object","name":"Grid","id":"p378963","attributes":{"axis":{"id":"p378959"}}},{"type":"object","name":"Grid","id":"p378968","attributes":{"dimension":1,"axis":{"id":"p378964"}}},{"type":"object","name":"Legend","id":"p378999","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p379000","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p378996"}]}},{"type":"object","name":"LegendItem","id":"p379010","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p379007"}]}},{"type":"object","name":"LegendItem","id":"p379020","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p379017"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p379032","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8156f762-2bb0-415a-9c7b-e6fbc512db4f","roots":{"p379033":"bf1b6370-1194-46fc-bc3b-afc535b007cc"},"root_ids":["p379033"]}];
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