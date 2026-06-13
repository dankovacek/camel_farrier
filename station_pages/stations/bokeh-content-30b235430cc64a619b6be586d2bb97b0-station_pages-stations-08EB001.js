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
    
    
    const element = document.getElementById("a5b85292-b822-4e7d-942a-3c0c9392a764");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a5b85292-b822-4e7d-942a-3c0c9392a764' but no matching script tag was found.")
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
                  const docs_json = '{"f9f8fce9-1530-4051-8670-90e9f3260514":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p135313","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p135314"}}},"roots":[{"type":"object","name":"Column","id":"p135477","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p135474","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p135473","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p135466","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p135337"},{"type":"object","name":"PanTool","id":"p135413"}]}},{"type":"object","name":"ToolProxy","id":"p135467","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p135338","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p135414","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p135468","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p135339","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p135340","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p135346","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p135345","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p135415","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p135416","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p135422","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p135421","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p135469","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p135347"},{"type":"object","name":"ResetTool","id":"p135423"}]}},{"type":"object","name":"SaveTool","id":"p135470"},{"type":"object","name":"ToolProxy","id":"p135471","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p135389","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p135472","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p135465","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p135315","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p135316"},"y_range":{"type":"object","name":"DataRange1d","id":"p135317"},"x_scale":{"type":"object","name":"LinearScale","id":"p135325"},"y_scale":{"type":"object","name":"LogScale","id":"p135326"},"title":{"type":"object","name":"Title","id":"p135318","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p135355","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p135349","attributes":{"selected":{"type":"object","name":"Selection","id":"p135350","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p135351"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAKP6Q7GIPB1msPZM0BQMs0BJMwgNhVCv5gEoc9McJg1EwhO9jvskGt9Hfihz0EeSO0w64Oq64XI5/ZC+Am9Dg+rRNa5K/ZCzFXqhtAnuiB0RZfDm0CgSbs7HbiuLy6w/dcB0fcAShcg6DagNXKB7Q5LCmy5riu3QdSdaIWYr9kK4T9pdrADGVTaBOEvaITQDlD6QoNDGghManA49FUjpj+oASIv0eAgts79YdWKegeQM7j06yHiF+rgtHZM/6Gvc2ocjoD0Lap2eATy18NKiH8lK6H2VaDSD8qh/DIHULDNnFkG4SsgaCGQvU9KIeIGJRD6RTGEnlCEnX5QCBEH0iDnXmeG8i8UQMTR6QCoOJAG+kIjZn8+RF0DjM6D8hH0F6A3D9lC+Qm5EHk4nQPlI+jHoPBghPGzHP79B4L5mVB1mQ7KoHRil+mwHuhdkb50h28g89+mQeQXpBKkTUHpUxmq7kEKRD0FNCiZn0mBmsNAmAYAksXwyygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p135356","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p135357"}}},"glyph":{"type":"object","name":"Line","id":"p135352","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p135353","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p135354","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p135364","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p135358","attributes":{"selected":{"type":"object","name":"Selection","id":"p135359","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p135360"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAKP6Q7GIPB1msPZM0BQMs0BJMwgNhVCv5gEoc9McJg1EwhO9jvskGt9Hfihz0EeSO0w64Oq64XI5/ZC+Am9Dg+rRNa5K/ZCzFXqhtAnuiB0RZfDm0CgSbs7HbiuLy6w/dcB0fcAShcg6DagNXKB7Q5LCmy5riu3QdSdaIWYr9kK4T9pdrADGVTaBOEvaITQDlD6QoNDGghManA49FUjpj+oASIv0eAgts79YdWKegeQM7j06yHiF+rgtHZM/6Gvc2ocjoD0Lap2eATy18NKiH8lK6H2VaDSD8qh/DIHULDNnFkG4SsgaCGQvU9KIeIGJRD6RTGEnlCEnX5QCBEH0iDnXmeG8i8UQMTR6QCoOJAG+kIjZn8+RF0DjM6D8hH0F6A3D9lC+Qm5EHk4nQPlI+jHoPBghPGzHP79B4L5mVB1mQ7KoHRil+mwHuhdkb50h28g89+mQeQXpBKkTUHpUxmq7kEKRD0FNCiZn0mBmsNAmAYAksXwyygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p135365","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p135366"}}},"glyph":{"type":"object","name":"Line","id":"p135361","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p135362","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p135363","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p135375","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p135369","attributes":{"selected":{"type":"object","name":"Selection","id":"p135370","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p135371"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2UB0jUURzHK6NhVmLYtKFoSs7LneZ9PT3vPL19978zDKWB0g4jKdpRFE0l4ZCgIU2jKGyjFA2zolKKoGjZIrEsrTAq6f9e3+MPx/157/2+4/Nu4pHnHqWrXTtRfndr6ytbNvcv+8PfAzBvd9vn6PrB+P8+AKsTXu9cWBWI/+uDcH3c07BsczDXjcEQvweXRg8dz/UhsHbetHTenMR9U3CvY3Z36bVQ7g/D0pKixoJJ4TwnAkGPXdtS1kzleZG4YLQ5Q59F8dxpEKsD0qJ5fgz+agyfftbEck4cDh3VNbzpiee8BBwefkD7IUrDuRp8bw5RnU7n/OnI21Tr37o1kTqS4Mscu+z2+STqSUbHz5onV98lU1cKMs6OUp9U6kvFroVVB4/q0qgzDa8iRg7avzydemdAI+I6OIO6MyDHPcyg/kxIu32Z9DETU8X22Cz6yYKso1hLX1q8v74h8bQe9AeMEPZegD6zkbqmz1e3Ipt+s1EqA9PRtw7b1Wm+Oh3963BO2MnIYQ45ePb119zdbTnMIxeyzgW5zCUXMRIEPfPRwy3k+/TMSY9183/ErUrIY155OCbqaM5jbgY8mlyxb0mJgfkZ0PtHFGhgjkaESgFG5mmE6eKZUy8j8plrPsTuosZ85muCGpaKjIk5m3BLpc3SaWLeBfgSLQQXMPcCqGam5U4oZP6FgJpe07lC9lCI8hsf96SbzOzDjGq13YY3ZvZiwZW1wqCF/Vjwdlb48ROBVvZkRUCaeGNlX1bIuifb2JsN8avEBbKxPxvkuIs29miDV+mqHuxnZ592yOtjsbNXOzaq7W+qtbNfO4Il4Hb27MDJwMVqpA727UDW+vv2K2sd7N0BcZsrWxzs34Gy4h0Dk4Od5MCJ33fFBXWSByf2qurOnHKSCyeE28W9TvLhwmUZqIucuGDeIhJ0kRcX2nvEhXORGzdWzolUHzf5cWOYiKfCTY7ckDg3ucmTG9Kuv0KuFNwR11dRyJcCKf+wQs4UfBP4flbImwdSTrqH3HkwXvxdbfGQPw/k8a0ecuhBjsA1xEsevZDLy73k0otF4ro3eMmnF/3kpwj/APULxQNIBQAA"},"shape":[169],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/8XPvU4CQRQF4H2MLXkESsstKbe03AJhUVFQAghBRgFF/kQToJ1HoaTcR5iS0pISyTlTzJAJm2gCzZdz7527F8/7/eVWwQEvWZqqBXJAt9/IWvGFrD5NA51nqF9Sn26n3EOjE4oJ5v2xqRwha7PM6w/UQ6qGvM+ywmw7fOd36MUb8mZgGjPv+pynuR5y/Arli2nArE0E+toms9ZnthVdvNMmz9zjMOqg/9M2nbf47slUNnm3Q9VAXyvrnLfMMJ8yW8N7W/mI+vwhnarKuywj5qTC/5nSkHMuxT32HXnHekqjMuad3rKf1hvOX1uWmF3G7BdNRQFZXv2PKo8959bjHX9wD511eVxIBQAA"},"shape":[169],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p135376","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p135377"}}},"glyph":{"type":"object","name":"Line","id":"p135372","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p135373","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p135374","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p135385","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p135379","attributes":{"selected":{"type":"object","name":"Selection","id":"p135380","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p135381"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p135386","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p135387"}}},"glyph":{"type":"object","name":"Line","id":"p135382","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p135383","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p135384","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p135324","attributes":{"tools":[{"id":"p135337"},{"id":"p135338"},{"id":"p135339"},{"id":"p135347"},{"type":"object","name":"SaveTool","id":"p135348"},{"id":"p135389"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p135332","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p135333","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p135334"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p135335"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p135327","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p135328","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p135329"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p135330"}}}],"center":[{"type":"object","name":"Grid","id":"p135331","attributes":{"axis":{"id":"p135327"}}},{"type":"object","name":"Grid","id":"p135336","attributes":{"dimension":1,"axis":{"id":"p135332"}}},{"type":"object","name":"Legend","id":"p135367","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p135368","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p135364"}]}},{"type":"object","name":"LegendItem","id":"p135378","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p135375"}]}},{"type":"object","name":"LegendItem","id":"p135388","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p135385"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p135390","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p135400","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p135392"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p135401"},"y_scale":{"type":"object","name":"LinearScale","id":"p135402"},"title":{"type":"object","name":"Title","id":"p135393","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p135431","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p135425","attributes":{"selected":{"type":"object","name":"Selection","id":"p135426","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p135427"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKSLrhaK/Dvu/3qt9vbXM4ewYIYkodrJ7PKT7n2eCwZzcQ/M6FyO9NcQAAsCe1LGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p135432","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p135433"}}},"glyph":{"type":"object","name":"Line","id":"p135428","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p135429","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p135430","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p135440","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p135434","attributes":{"selected":{"type":"object","name":"Selection","id":"p135435","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p135436"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKSLrhaK/Dvu/3qt9vbXM4ewYIYkodrJ7PKT7n2eCwZzcQ/M6FyO9NcQAAsCe1LGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p135441","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p135442"}}},"glyph":{"type":"object","name":"Line","id":"p135437","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p135438","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p135439","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p135451","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p135445","attributes":{"selected":{"type":"object","name":"Selection","id":"p135446","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p135447"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKSLrhaK/Dvu/3qt9vbXM4ewYIYkodrJ7PKT7n2eCwZzcQ/M6FyO9NcQAAsCe1LGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p135452","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p135453"}}},"glyph":{"type":"object","name":"Line","id":"p135448","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p135449","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p135450","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p135461","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p135455","attributes":{"selected":{"type":"object","name":"Selection","id":"p135456","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p135457"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p135462","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p135463"}}},"glyph":{"type":"object","name":"Line","id":"p135458","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p135459","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p135460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p135399","attributes":{"tools":[{"id":"p135413"},{"id":"p135414"},{"id":"p135415"},{"id":"p135423"},{"type":"object","name":"SaveTool","id":"p135424"},{"id":"p135465"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p135408","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p135409","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p135410"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p135411"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p135403","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p135404"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p135405"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p135406"}}}],"center":[{"type":"object","name":"Grid","id":"p135407","attributes":{"axis":{"id":"p135403"}}},{"type":"object","name":"Grid","id":"p135412","attributes":{"dimension":1,"axis":{"id":"p135408"}}},{"type":"object","name":"Legend","id":"p135443","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p135444","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p135440"}]}},{"type":"object","name":"LegendItem","id":"p135454","attributes":{"label":{"type":"value","value":"Median Year (1915)"},"renderers":[{"id":"p135451"}]}},{"type":"object","name":"LegendItem","id":"p135464","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p135461"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p135476","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"f9f8fce9-1530-4051-8670-90e9f3260514","roots":{"p135477":"a5b85292-b822-4e7d-942a-3c0c9392a764"},"root_ids":["p135477"]}];
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