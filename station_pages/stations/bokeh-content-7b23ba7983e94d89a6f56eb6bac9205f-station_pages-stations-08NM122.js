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
    
    
    const element = document.getElementById("e0c5cf40-89fc-42f4-b911-c735fe085827");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e0c5cf40-89fc-42f4-b911-c735fe085827' but no matching script tag was found.")
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
                  const docs_json = '{"ba5021f7-7066-4076-8fa4-055d70089ae1":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p710942","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p710943"}}},"roots":[{"type":"object","name":"Column","id":"p711124","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p711121","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p711120","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p711113","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p710966"},{"type":"object","name":"PanTool","id":"p711051"}]}},{"type":"object","name":"ToolProxy","id":"p711114","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p710967","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p711052","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p711115","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p710968","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p710969","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p710975","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p710974","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p711053","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p711054","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p711060","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p711059","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p711116","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p710976"},{"type":"object","name":"ResetTool","id":"p711061"}]}},{"type":"object","name":"SaveTool","id":"p711117"},{"type":"object","name":"ToolProxy","id":"p711118","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p711027","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p711119","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p711112","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p710944","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p710945"},"y_range":{"type":"object","name":"DataRange1d","id":"p710946"},"x_scale":{"type":"object","name":"LinearScale","id":"p710954"},"y_scale":{"type":"object","name":"LogScale","id":"p710955"},"title":{"type":"object","name":"Title","id":"p710947","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p710984","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710978","attributes":{"selected":{"type":"object","name":"Selection","id":"p710979","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710980"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1/3+9Lddy+18E6EkzZwbObVhm//X/f3m2xqVDlj585ozN+bSl9vu/arTsa1pi/+f/f/uHVcOfVo3pvxQVv8R+o1zraUfOxfY//v//v/LjIoI05zr3h/s3LbL//P///qKMhSOGXuT+sCnEdCEoX+wv2zffHgBhsJvsKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p710985","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710986"}}},"glyph":{"type":"object","name":"Line","id":"p710981","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710982","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p710983","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p710993","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710987","attributes":{"selected":{"type":"object","name":"Selection","id":"p710988","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710989"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vw///+kskz7D8QSU8psOWqqZth//f///9a7dMoputfB0pcFp5mr8t13bh3yxT7d///2z+sGv70/sUFvb8qJ9tXH/racVNhsv3v///rp+dNGrb0oTNn3qTbT7J/CkxnRRkT4XTDzJk/WUwm2v/6//++b9IEsukO94dejAZ99leB6YdjTQ/VaEi+6LAHALUrkIMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p710994","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710995"}}},"glyph":{"type":"object","name":"Line","id":"p710990","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710991","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p710992","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p711002","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710996","attributes":{"selected":{"type":"object","name":"Selection","id":"p710997","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710998"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v5///73ysX2v8kQB89c+aGdupCe4WYfiGlBwvsf/3/f943iXL6VpXItXLXBfY8ra93+tyeb//m///9ZftoR+86c+aO/ZL59tu+aqjoH5hn//n///uBO+hP3wnc0XbPfJ691cMqFj/ueaDw/K+zaS7NaKWY/knLps21XyfX2t3rMMf+GzCcv2oQptnWuS/kfjXb/sP///X75s8imw5JS9um1jHL/tn///JrZBD05jNnbEqZwOaunzlzJtn01cAdQsVfZti/AKbLksmU09PdH04KS5gByhf9EizT7AFOAQlLKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p711003","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p711004"}}},"glyph":{"type":"object","name":"Line","id":"p710999","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p711000","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p711001","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p711013","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p711007","attributes":{"selected":{"type":"object","name":"Selection","id":"p711008","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p711009"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UC2jVVRzHyxrhMFpTc9aYtjl1tvfrbu5xv3f3ubv7+L/vldQ0G9o0MrFsVMaGWaCjDSFCw1mWpanUwrRSsLJZGmXZMIePwGmOpgNxWrlG55x9f3zhci//e/7nfL+f78naMpK5ZeScO0t9DrmdwkN24aERfh9133hputAEjP+egi/+cIQmYvz5STiaHRZKw/hz6ZjVdzWn7+pkPj8Vr6uZxv9Nx1/Vs4Ue4f8zER86Fhs6lsV1ZmLBzyVCj3K9bGyae7dQDtfNwZG2U4fbTs3i+rkY7u++3t89m++Zg5nlzwrN5fvyYHbUGx318/jex7Dhyv1C+Xx/Pj53nz/gPl/AfRTiz7f3ChVxP8WY9M8RoWLuqwS7PpBTwv2Vwi1WNzpKuc8y/D629szY2jLutwyrP14oVM59l2Ni0idUwf1X4L1784UqeY5K1Hw6WcjF87jw26I7pxfdcfFcVXgm9dKq1EtVPF817jt4IuXgiWqecz66l/VsX9Yzn+etQVXaVlfa1hqeuxbSvcNttTx/LVqellNHH+ow4SFdqJ5+1GPbN1VCbvrihlzNlQb6Ayg7N4A+AWUDt0sHboN+efDqlyuFPPTNgx87L57svOihfw3IWG4KNdDHBjTXHX+q7ngD/fSiR9pR46WvXowN7v9vcL+X/noh6Tua7aPPPrylxke/fZBurUr103c/ir3ri7zr/fTfj5cl3jf8zCGAH4abvx9uDjCPAKb2np3SezbAXIJY+k5UKMh8gti35muhIHMK4t9QhVCIeYUQnLE7MGN3iLmFoGqW2cj8GiHdONnZyBwbUaCACDPPMFpflBNmrmF8J9oSGwoz3yak5y55MHdJE3NuwmKJy+km5h3Bnl+CQhHmHsGtD78SijD/CHzSjqIoOYii09r5prUzSh6iODdvmlCMXMSQJ+u4KUY+Ynhe0H5mLEZO4pBu7FsTJy9xKDyuxMmNhgI1GvnRINPPWK6RIw2t97wrpJEnDTtEu6/3a+RKg4pjik6+dKjrI6aTMx3pn7whpJM3HdUKYJ3c6Xhi4+jijaM6+TPw2nOVQgY5NLBX1nW1QR4N/Crt22OQSwN/C7pLBwzyaSJLjUlOTfhVwU3yamLlza6Wm10muTXRpQI3ya8JVd8UixxbkLfRAbdFni0oO1otcm0hb/NnQhb5tqCtuxZfd80i5zZeeHKOkE3ebShcl9rk3sa3ss7bbPJvY1Dc1jl9Nntg4wE1DvvgoFIB7bAXDhZebn/8crvDfjhoVxeKw544+EjidcthXxL4aVexUIK9SUDZ0ZJgfxJ4+JX3hRLsUQKeFRew4kKCfUpAXQ8ZSfYqCXWdG0n2KwnpRt7mJHuWRL/EozfJviVxl5oF+B/8r5RI6AYAAA=="},"shape":[221],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1/3+9Lddy+1846K///8uzNS61Hyr0n///7R9WLbEfbvSP////r/y4yJ5Y+vP///uLMhbaDzcamE73l+2bb/8BSJdMnkE2/RcYnlrt0+xpTUPyzVT7d+B0OWWUJjMcnv3/H7+nZLI9jP4NLK+m502yH6VJC4en4HJhoj0uGpi/7vsmTQDVB1SlrwHNC9zRZ38VGP8ca3roRkPKiQ57ANie9WPoBgAA"},"shape":[221],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p711014","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p711015"}}},"glyph":{"type":"object","name":"Line","id":"p711010","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p711011","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p711012","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p711023","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p711017","attributes":{"selected":{"type":"object","name":"Selection","id":"p711018","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p711019"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p711024","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p711025"}}},"glyph":{"type":"object","name":"Line","id":"p711020","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p711021","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p711022","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p710953","attributes":{"tools":[{"id":"p710966"},{"id":"p710967"},{"id":"p710968"},{"id":"p710976"},{"type":"object","name":"SaveTool","id":"p710977"},{"id":"p711027"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p710961","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p710962","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p710963"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p710964"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p710956","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p710957","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p710958"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p710959"}}}],"center":[{"type":"object","name":"Grid","id":"p710960","attributes":{"axis":{"id":"p710956"}}},{"type":"object","name":"Grid","id":"p710965","attributes":{"dimension":1,"axis":{"id":"p710961"}}},{"type":"object","name":"Legend","id":"p711005","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p711006","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p711002"}]}},{"type":"object","name":"LegendItem","id":"p711016","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p711013"}]}},{"type":"object","name":"LegendItem","id":"p711026","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p711023"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p711028","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p711038","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p711030"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p711039"},"y_scale":{"type":"object","name":"LinearScale","id":"p711040"},"title":{"type":"object","name":"Title","id":"p711031","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p711069","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p711063","attributes":{"selected":{"type":"object","name":"Selection","id":"p711064","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p711065"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD61tbDxZS2KpfUj22q3WGkvt784p1rMMXWSvaWycLL59oT0u/QCHZKMvYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p711070","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p711071"}}},"glyph":{"type":"object","name":"Line","id":"p711066","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p711067","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p711068","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p711078","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p711072","attributes":{"selected":{"type":"object","name":"Selection","id":"p711073","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p711074"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC114eXZezq2J9g/evfvXpTTRfpdEso6a1jR72aVTJv13nGzvEud8U/v8JHtc+gE7UqR+YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p711079","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p711080"}}},"glyph":{"type":"object","name":"Line","id":"p711075","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p711076","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p711077","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p711087","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p711081","attributes":{"selected":{"type":"object","name":"Selection","id":"p711082","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p711083"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC114eXZezq2J9jEHxXgqa2ba36h+n7pcboF99vu93y2+zbYvfTpvWVbXDHtc+gEn+ppRYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p711088","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p711089"}}},"glyph":{"type":"object","name":"Line","id":"p711084","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p711085","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p711086","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p711098","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p711092","attributes":{"selected":{"type":"object","name":"Selection","id":"p711093","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p711094"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD61tbDxZS2KpfUj22q3WGkvt784p1rMMXWSvaWycLL59oT0u/QCHZKMvYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p711099","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p711100"}}},"glyph":{"type":"object","name":"Line","id":"p711095","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p711096","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p711097","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p711108","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p711102","attributes":{"selected":{"type":"object","name":"Selection","id":"p711103","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p711104"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p711109","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p711110"}}},"glyph":{"type":"object","name":"Line","id":"p711105","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p711106","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p711107","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p711037","attributes":{"tools":[{"id":"p711051"},{"id":"p711052"},{"id":"p711053"},{"id":"p711061"},{"type":"object","name":"SaveTool","id":"p711062"},{"id":"p711112"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p711046","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p711047","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p711048"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p711049"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p711041","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p711042"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p711043"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p711044"}}}],"center":[{"type":"object","name":"Grid","id":"p711045","attributes":{"axis":{"id":"p711041"}}},{"type":"object","name":"Grid","id":"p711050","attributes":{"dimension":1,"axis":{"id":"p711046"}}},{"type":"object","name":"Legend","id":"p711090","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p711091","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p711087"}]}},{"type":"object","name":"LegendItem","id":"p711101","attributes":{"label":{"type":"value","value":"Median Year (1955)"},"renderers":[{"id":"p711098"}]}},{"type":"object","name":"LegendItem","id":"p711111","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p711108"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p711123","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"ba5021f7-7066-4076-8fa4-055d70089ae1","roots":{"p711124":"e0c5cf40-89fc-42f4-b911-c735fe085827"},"root_ids":["p711124"]}];
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