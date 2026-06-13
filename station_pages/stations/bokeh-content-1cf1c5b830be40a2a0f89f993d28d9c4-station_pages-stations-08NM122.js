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
    
    
    const element = document.getElementById("d085ca55-88a9-4fe4-8452-8dc8beb6a199");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd085ca55-88a9-4fe4-8452-8dc8beb6a199' but no matching script tag was found.")
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
                  const docs_json = '{"e23a5954-45b9-46d0-ab85-0634f0e9ef1e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p710071","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p710072"}}},"roots":[{"type":"object","name":"Column","id":"p710253","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p710250","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p710249","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p710242","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p710095"},{"type":"object","name":"PanTool","id":"p710180"}]}},{"type":"object","name":"ToolProxy","id":"p710243","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p710096","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p710181","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p710244","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p710097","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p710098","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p710104","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p710103","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p710182","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p710183","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p710189","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p710188","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p710245","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p710105"},{"type":"object","name":"ResetTool","id":"p710190"}]}},{"type":"object","name":"SaveTool","id":"p710246"},{"type":"object","name":"ToolProxy","id":"p710247","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p710156","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p710248","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p710241","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p710073","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p710074"},"y_range":{"type":"object","name":"DataRange1d","id":"p710075"},"x_scale":{"type":"object","name":"LinearScale","id":"p710083"},"y_scale":{"type":"object","name":"LogScale","id":"p710084"},"title":{"type":"object","name":"Title","id":"p710076","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p710113","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710107","attributes":{"selected":{"type":"object","name":"Selection","id":"p710108","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710109"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1/3+9Lddy+18E6EkzZwbObVhm//X/f3m2xqVDlj585ozN+bSl9vu/arTsa1pi/+f/f/uHVcOfVo3pvxQVv8R+o1zraUfOxfY//v//v/LjIoI05zr3h/s3LbL//P///qKMhSOGXuT+sCnEdCEoX+wv2zffHgBhsJvsKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p710114","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710115"}}},"glyph":{"type":"object","name":"Line","id":"p710110","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710111","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p710112","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p710122","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710116","attributes":{"selected":{"type":"object","name":"Selection","id":"p710117","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710118"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vw///+kskz7D8QSU8psOWqqZth//f///9a7dMoputfB0pcFp5mr8t13bh3yxT7d///2z+sGv70/sUFvb8qJ9tXH/racVNhsv3v///rp+dNGrb0oTNn3qTbT7J/CkxnRRkT4XTDzJk/WUwm2v/6//++b9IEsukO94dejAZ99leB6YdjTQ/VaEi+6LAHALUrkIMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p710123","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710124"}}},"glyph":{"type":"object","name":"Line","id":"p710119","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710120","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p710121","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p710131","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710125","attributes":{"selected":{"type":"object","name":"Selection","id":"p710126","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710127"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v5///73ysX2v8kQB89c+aGdupCe4WYfiGlBwvsf/3/f943iXL6VpXItXLXBfY8ra93+tyeb//m///9ZftoR+86c+aO/ZL59tu+aqjoH5hn//n///uBO+hP3wnc0XbPfJ691cMqFj/ueaDw/K+zaS7NaKWY/knLps21XyfX2t3rMMf+GzCcv2oQptnWuS/kfjXb/sP///X75s8imw5JS9um1jHL/tn///JrZBD05jNnbEqZwOaunzlzJtn01cAdQsVfZti/AKbLksmU09PdH04KS5gByhf9EizT7AFOAQlLKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p710132","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710133"}}},"glyph":{"type":"object","name":"Line","id":"p710128","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710129","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p710130","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p710142","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710136","attributes":{"selected":{"type":"object","name":"Selection","id":"p710137","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710138"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UC2jVVRzHyxrhMFpTc9aYtjl1tvfrbu5xv3f3ubv7+L/vldQ0G9o0MrFsVMaGWaCjDSFCw1mWpanUwrRSsLJZGmXZMIePwGmOpgNxWrlG55x9f3zhci//e/7nfL+f78naMpK5ZeScO0t9DrmdwkN24aERfh9133hputAEjP+egi/+cIQmYvz5STiaHRZKw/hz6ZjVdzWn7+pkPj8Vr6uZxv9Nx1/Vs4Ue4f8zER86Fhs6lsV1ZmLBzyVCj3K9bGyae7dQDtfNwZG2U4fbTs3i+rkY7u++3t89m++Zg5nlzwrN5fvyYHbUGx318/jex7Dhyv1C+Xx/Pj53nz/gPl/AfRTiz7f3ChVxP8WY9M8RoWLuqwS7PpBTwv2Vwi1WNzpKuc8y/D629szY2jLutwyrP14oVM59l2Ni0idUwf1X4L1784UqeY5K1Hw6WcjF87jw26I7pxfdcfFcVXgm9dKq1EtVPF817jt4IuXgiWqecz66l/VsX9Yzn+etQVXaVlfa1hqeuxbSvcNttTx/LVqellNHH+ow4SFdqJ5+1GPbN1VCbvrihlzNlQb6Ayg7N4A+AWUDt0sHboN+efDqlyuFPPTNgx87L57svOihfw3IWG4KNdDHBjTXHX+q7ngD/fSiR9pR46WvXowN7v9vcL+X/noh6Tua7aPPPrylxke/fZBurUr103c/ir3ri7zr/fTfj5cl3jf8zCGAH4abvx9uDjCPAKb2np3SezbAXIJY+k5UKMh8gti35muhIHMK4t9QhVCIeYUQnLE7MGN3iLmFoGqW2cj8GiHdONnZyBwbUaCACDPPMFpflBNmrmF8J9oSGwoz3yak5y55MHdJE3NuwmKJy+km5h3Bnl+CQhHmHsGtD78SijD/CHzSjqIoOYii09r5prUzSh6iODdvmlCMXMSQJ+u4KUY+Ynhe0H5mLEZO4pBu7FsTJy9xKDyuxMmNhgI1GvnRINPPWK6RIw2t97wrpJEnDTtEu6/3a+RKg4pjik6+dKjrI6aTMx3pn7whpJM3HdUKYJ3c6Xhi4+jijaM6+TPw2nOVQgY5NLBX1nW1QR4N/Crt22OQSwN/C7pLBwzyaSJLjUlOTfhVwU3yamLlza6Wm10muTXRpQI3ya8JVd8UixxbkLfRAbdFni0oO1otcm0hb/NnQhb5tqCtuxZfd80i5zZeeHKOkE3ebShcl9rk3sa3ss7bbPJvY1Dc1jl9Nntg4wE1DvvgoFIB7bAXDhZebn/8crvDfjhoVxeKw544+EjidcthXxL4aVexUIK9SUDZ0ZJgfxJ4+JX3hRLsUQKeFRew4kKCfUpAXQ8ZSfYqCXWdG0n2KwnpRt7mJHuWRL/EozfJviVxl5oF+B/8r5RI6AYAAA=="},"shape":[221],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1/3+9Lddy+1846K///8uzNS61Hyr0n///7R9WLbEfbvSP////r/y4yJ5Y+vP///uLMhbaDzcamE73l+2bb/8BSJdMnkE2/RcYnlrt0+xpTUPyzVT7d+B0OWWUJjMcnv3/H7+nZLI9jP4NLK+m502yH6VJC4en4HJhoj0uGpi/7vsmTQDVB1SlrwHNC9zRZ38VGP8ca3roRkPKiQ57ANie9WPoBgAA"},"shape":[221],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p710143","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710144"}}},"glyph":{"type":"object","name":"Line","id":"p710139","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710140","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p710141","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p710152","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710146","attributes":{"selected":{"type":"object","name":"Selection","id":"p710147","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710148"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p710153","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710154"}}},"glyph":{"type":"object","name":"Line","id":"p710149","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710150","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p710151","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p710082","attributes":{"tools":[{"id":"p710095"},{"id":"p710096"},{"id":"p710097"},{"id":"p710105"},{"type":"object","name":"SaveTool","id":"p710106"},{"id":"p710156"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p710090","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p710091","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p710092"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p710093"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p710085","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p710086","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p710087"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p710088"}}}],"center":[{"type":"object","name":"Grid","id":"p710089","attributes":{"axis":{"id":"p710085"}}},{"type":"object","name":"Grid","id":"p710094","attributes":{"dimension":1,"axis":{"id":"p710090"}}},{"type":"object","name":"Legend","id":"p710134","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p710135","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p710131"}]}},{"type":"object","name":"LegendItem","id":"p710145","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p710142"}]}},{"type":"object","name":"LegendItem","id":"p710155","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p710152"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p710157","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p710167","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p710159"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p710168"},"y_scale":{"type":"object","name":"LinearScale","id":"p710169"},"title":{"type":"object","name":"Title","id":"p710160","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p710198","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710192","attributes":{"selected":{"type":"object","name":"Selection","id":"p710193","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710194"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD61tbDxZS2KpfUj22q3WGkvt784p1rMMXWSvaWycLL59oT0u/QCHZKMvYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p710199","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710200"}}},"glyph":{"type":"object","name":"Line","id":"p710195","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710196","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p710197","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p710207","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710201","attributes":{"selected":{"type":"object","name":"Selection","id":"p710202","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710203"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC114eXZezq2J9g/evfvXpTTRfpdEso6a1jR72aVTJv13nGzvEud8U/v8JHtc+gE7UqR+YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p710208","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710209"}}},"glyph":{"type":"object","name":"Line","id":"p710204","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710205","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p710206","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p710216","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710210","attributes":{"selected":{"type":"object","name":"Selection","id":"p710211","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710212"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC114eXZezq2J9jEHxXgqa2ba36h+n7pcboF99vu93y2+zbYvfTpvWVbXDHtc+gEn+ppRYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p710217","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710218"}}},"glyph":{"type":"object","name":"Line","id":"p710213","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710214","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p710215","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p710227","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710221","attributes":{"selected":{"type":"object","name":"Selection","id":"p710222","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710223"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD61tbDxZS2KpfUj22q3WGkvt784p1rMMXWSvaWycLL59oT0u/QCHZKMvYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p710228","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710229"}}},"glyph":{"type":"object","name":"Line","id":"p710224","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710225","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p710226","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p710237","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p710231","attributes":{"selected":{"type":"object","name":"Selection","id":"p710232","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p710233"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p710238","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p710239"}}},"glyph":{"type":"object","name":"Line","id":"p710234","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p710235","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p710236","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p710166","attributes":{"tools":[{"id":"p710180"},{"id":"p710181"},{"id":"p710182"},{"id":"p710190"},{"type":"object","name":"SaveTool","id":"p710191"},{"id":"p710241"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p710175","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p710176","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p710177"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p710178"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p710170","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p710171"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p710172"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p710173"}}}],"center":[{"type":"object","name":"Grid","id":"p710174","attributes":{"axis":{"id":"p710170"}}},{"type":"object","name":"Grid","id":"p710179","attributes":{"dimension":1,"axis":{"id":"p710175"}}},{"type":"object","name":"Legend","id":"p710219","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p710220","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p710216"}]}},{"type":"object","name":"LegendItem","id":"p710230","attributes":{"label":{"type":"value","value":"Median Year (1955)"},"renderers":[{"id":"p710227"}]}},{"type":"object","name":"LegendItem","id":"p710240","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p710237"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p710252","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"e23a5954-45b9-46d0-ab85-0634f0e9ef1e","roots":{"p710253":"d085ca55-88a9-4fe4-8452-8dc8beb6a199"},"root_ids":["p710253"]}];
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