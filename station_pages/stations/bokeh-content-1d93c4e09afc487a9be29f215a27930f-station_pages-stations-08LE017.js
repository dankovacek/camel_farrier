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
    
    
    const element = document.getElementById("d9a1be8e-3a88-4a2a-bc0e-0c9bbcd5baf3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd9a1be8e-3a88-4a2a-bc0e-0c9bbcd5baf3' but no matching script tag was found.")
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
                  const docs_json = '{"b42e681e-89d5-4fbb-82ea-f8c8d4dc0bdf":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p490871","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p490872"}}},"roots":[{"type":"object","name":"Column","id":"p491053","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p491050","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p491049","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p491042","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p490895"},{"type":"object","name":"PanTool","id":"p490980"}]}},{"type":"object","name":"ToolProxy","id":"p491043","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p490896","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p490981","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p491044","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p490897","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p490898","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p490904","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p490903","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p490982","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p490983","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p490989","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p490988","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p491045","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p490905"},{"type":"object","name":"ResetTool","id":"p490990"}]}},{"type":"object","name":"SaveTool","id":"p491046"},{"type":"object","name":"ToolProxy","id":"p491047","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p490956","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p491048","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p491041","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p490873","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p490874"},"y_range":{"type":"object","name":"DataRange1d","id":"p490875"},"x_scale":{"type":"object","name":"LinearScale","id":"p490883"},"y_scale":{"type":"object","name":"LogScale","id":"p490884"},"title":{"type":"object","name":"Title","id":"p490876","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p490913","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490907","attributes":{"selected":{"type":"object","name":"Selection","id":"p490908","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490909"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3v6///+ooyJ9k9HOM1ubDxZV7HfvmHmzJ17D7bb//r//75vUsMojSMcTNPS1AJvVduXnTnTw/ahzH76///2D6tK6E7nnjnzhMWk0N7ozJmYGT6p9sJg9wZQnQYAGlpZgygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490914","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490915"}}},"glyph":{"type":"object","name":"Line","id":"p490910","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490911","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490912","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p490922","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490916","attributes":{"selected":{"type":"object","name":"Selection","id":"p490917","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490918"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8IwoX7P9D6S8aMf7sr8/bb5NrXd3vdxYkfv+C0mn7GTNn7jSYecr+3///8f2Hjtr775ATPex+BMTfX5Rx0P7q4gLeaNUD9r+BGlbL7MJJ59hyXb9rsxVk7v+VHzfBaQNj480amzfab5dr1f7iv8H+L9A9UvprweaXTF5BkAbaC3TXUvtfQPVl++aTTDv3H9rqqDbT/inYPxMppq36D6kuWNYGcsd936SGAaOB4Sg+i6PaXhjsjoBRmsxwAAB5eUlrKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490923","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490924"}}},"glyph":{"type":"object","name":"Line","id":"p490919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490920","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490921","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p490931","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490925","attributes":{"selected":{"type":"object","name":"Selection","id":"p490926","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490927"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v7//9pb/OD9n+hdIXIustcPAftN8u1Ms+r3m//5/9/8/v+e+2nzpwpaH9sj/3v//+3z32/3d5nh1zuxZJtIL5449TN9pcWF6RmBm2y//L///oTZetw0qm2XO2/pq20/wFUd8x7OZzWNDZOduVdZr9BrvW2wKolIPH/Kz8uAtH81xcvIEi/+/9//4myefYfgHTJ5Bkk08ki6+xzoqfYLz1zZk6gZ6/9I6D7Zs7sJJue5f6Qqbyl2f7X///3fZMaBowGht/rWc9q7e/8/z97el4R1ehfqWnznnzKt7c+c4ZlFke2fQwwXZRMzqA7bXTmTMwMn1T7PafP+OyvjbUXBod3ANVpAN77f2AoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490932","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490933"}}},"glyph":{"type":"object","name":"Line","id":"p490928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490929","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p490930","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p490942","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490936","attributes":{"selected":{"type":"object","name":"Selection","id":"p490937","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490938"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UeUhUYRTFo2ihBWkzpD0tM9Nccsm0OTOOozOO47x5b968kKCi3RaxooIwoghBjCgCCcJoX2zfkCKCKFpoQYIwAitaaEEt2yii3v3emX+GN/O9+517zu/epnUrxr050+FqUt9drtpnj+NTb/3k8z9XR33vPaGHfeD83h/9puzf1791EJzzcdj7arQ2v20onHPDkZLx4Wnh3ZE8PwrX665YCTcS+N5ohB5ue/H94li+Px5fGqfab0xgnYkoyImzr5rEeonYbp++fT+JdSfjkbx+ewrrJ2NU6q28gzen8p4ULGg7sWnXtWm8LxXyVHdlOu9NQ8+EDX9Xnk/n/TMw/s2Z5jQzgzoyINUO65nUk4llDdJhFnVlYYhqNJv6snEha3PiwOBM6pwJc8ca71Z/DvXm4E/7wsW/fLnUnYsDaXIij/rzYB8+9s6dzz7yIe7Nc81iP7OwU+wpLGBfBciW6wpms7/ZUHHlFbLPQqi/c4rYbxEmSrtZc9j3HNy532077mL/Lii740EfgAGtn5Y27AX9AJ6L/BFu+uJGy2AxwE1/3Ngi8Q710CcPbBhsyz30y4MkkRNXTN+K8cNOs7uxmP4V4948V1XLYC999MKGyxbgpZ9erDovBpfQ1xLI6Y76EvpbgmF9BUgfffZBxbnDR799uCry+pbS91IonLeV0v9SqHK9y5hDGdJVgGXMowy91MfPXPxQeNX5mY8fR3Qhys+cAtgodm8OMK8AAna6nb8DzK0cY5RB5cyvHF2/BZBy5hiEDZ9dMMg8g9itBibIXCsgaTStq2C+FVC49lQw5xCU3bUh5h2CGp/uEHOvxFmxZ00l86+Ewq+zkhyEcVLayw2ThzDErRfrw+Qi7Oi4HCYfYSwRPd/C5ERzdGVr5EVz9K3VyI3m6LygkR/N0ftVI0cRR3dmhDxFHP01EXIVcfo4FyFfEaefrgg5052+0nXypjv9rdbJnY5qe8s1n9bJnw5D4vusk0MDRfb0VU03yKMBte6qDXJpQI3LKYN8GlBxfDTIaRRqHaZEyWsUD2TclkfJbRSXBP/jUfIbhZT/9D5Kjk2o9ZFskmcTNbIglpjk2sRcwfmoSb5NeDptgN6a5DwGtQ6TYuQ9hpGyqBfFyH0MCs9DMfIfg9DZ/jrGObDwRNbJJIvzYEGtgwUW58KCwu2AxfmwoNbjS4tzMhf/AbiEURdQBgAA"},"shape":[202],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////8IwoX7P+j0QwMDA1iN8/Z/wNKhPKdBcnfv6B0GoMGysf3HzoKUodO7y/KOAgSR6H/APknyvbZ/wYauFpmF8k0UNv/lR83gdxBkL62eANYHYj+C/SflP5aOA1yV8nkFWD3kUP/+v+/3pZruT3QP/YPq5bYA/n7y/bNpxn9FByOE+2HOw0Mx/u+SQ2gcBylqRgO08HptMSeVFoYHA8B9qP0aDgQkw4AU+PEEFAGAAA="},"shape":[202],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490943","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490944"}}},"glyph":{"type":"object","name":"Line","id":"p490939","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490940","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p490941","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p490952","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490946","attributes":{"selected":{"type":"object","name":"Selection","id":"p490947","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490948"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p490953","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p490954"}}},"glyph":{"type":"object","name":"Line","id":"p490949","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490950","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490951","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p490882","attributes":{"tools":[{"id":"p490895"},{"id":"p490896"},{"id":"p490897"},{"id":"p490905"},{"type":"object","name":"SaveTool","id":"p490906"},{"id":"p490956"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p490890","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p490891","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p490892"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p490893"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p490885","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p490886","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p490887"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p490888"}}}],"center":[{"type":"object","name":"Grid","id":"p490889","attributes":{"axis":{"id":"p490885"}}},{"type":"object","name":"Grid","id":"p490894","attributes":{"dimension":1,"axis":{"id":"p490890"}}},{"type":"object","name":"Legend","id":"p490934","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p490935","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p490931"}]}},{"type":"object","name":"LegendItem","id":"p490945","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p490942"}]}},{"type":"object","name":"LegendItem","id":"p490955","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p490952"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p490957","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p490967","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p490959"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p490968"},"y_scale":{"type":"object","name":"LinearScale","id":"p490969"},"title":{"type":"object","name":"Title","id":"p490960","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p490998","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p490992","attributes":{"selected":{"type":"object","name":"Selection","id":"p490993","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p490994"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKDDqjUOb7+WsF9g3F554+39lmj24OAAWRmPpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p490999","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p491000"}}},"glyph":{"type":"object","name":"Line","id":"p490995","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p490996","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p490997","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p491007","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p491001","attributes":{"selected":{"type":"object","name":"Selection","id":"p491002","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p491003"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ4MDf37QXKTfdE5y/JZXbvsp6xaxRRl32C/9FpUf97cbnvh///v+yYF2Gv9/88ctCPOHl0/jA8ACpO6FWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p491008","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p491009"}}},"glyph":{"type":"object","name":"Line","id":"p491004","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p491005","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p491006","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p491016","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p491010","attributes":{"selected":{"type":"object","name":"Selection","id":"p491011","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p491012"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ4MDf37QXKTfdE5y/JZXbvsp6xaxRRl32C/9FpUf97cbnvh///v+yYF2OdqxPDHfUm1byg+9/T5zjZ7dHMA/J2NHGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p491017","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p491018"}}},"glyph":{"type":"object","name":"Line","id":"p491013","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p491014","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p491015","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p491027","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p491021","attributes":{"selected":{"type":"object","name":"Selection","id":"p491022","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p491023"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKDDqjUOb7+WsF9g3F554+39lmj24OAAWRmPpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p491028","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p491029"}}},"glyph":{"type":"object","name":"Line","id":"p491024","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p491025","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p491026","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p491037","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p491031","attributes":{"selected":{"type":"object","name":"Selection","id":"p491032","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p491033"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p491038","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p491039"}}},"glyph":{"type":"object","name":"Line","id":"p491034","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p491035","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p491036","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p490966","attributes":{"tools":[{"id":"p490980"},{"id":"p490981"},{"id":"p490982"},{"id":"p490990"},{"type":"object","name":"SaveTool","id":"p490991"},{"id":"p491041"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p490975","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p490976","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p490977"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p490978"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p490970","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p490971"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p490972"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p490973"}}}],"center":[{"type":"object","name":"Grid","id":"p490974","attributes":{"axis":{"id":"p490970"}}},{"type":"object","name":"Grid","id":"p490979","attributes":{"dimension":1,"axis":{"id":"p490975"}}},{"type":"object","name":"Legend","id":"p491019","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p491020","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p491016"}]}},{"type":"object","name":"LegendItem","id":"p491030","attributes":{"label":{"type":"value","value":"Median Year (1911)"},"renderers":[{"id":"p491027"}]}},{"type":"object","name":"LegendItem","id":"p491040","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p491037"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p491052","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b42e681e-89d5-4fbb-82ea-f8c8d4dc0bdf","roots":{"p491053":"d9a1be8e-3a88-4a2a-bc0e-0c9bbcd5baf3"},"root_ids":["p491053"]}];
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