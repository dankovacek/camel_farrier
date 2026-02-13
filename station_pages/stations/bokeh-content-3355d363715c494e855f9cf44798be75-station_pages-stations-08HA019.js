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
    
    
    const element = document.getElementById("f07e0874-35ce-41a6-be83-04eebac4b6c9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f07e0874-35ce-41a6-be83-04eebac4b6c9' but no matching script tag was found.")
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
                  const docs_json = '{"55eb2ce3-4c81-426a-8e68-e4457e79cbaf":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p278283","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p278284"}}},"roots":[{"type":"object","name":"Column","id":"p278447","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p278444","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p278443","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p278436","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p278307"},{"type":"object","name":"PanTool","id":"p278383"}]}},{"type":"object","name":"ToolProxy","id":"p278437","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p278308","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p278384","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p278438","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p278309","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p278310","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p278316","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p278315","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p278385","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p278386","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p278392","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p278391","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p278439","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p278317"},{"type":"object","name":"ResetTool","id":"p278393"}]}},{"type":"object","name":"SaveTool","id":"p278440"},{"type":"object","name":"ToolProxy","id":"p278441","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p278359","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p278442","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p278435","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p278285","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p278286"},"y_range":{"type":"object","name":"DataRange1d","id":"p278287"},"x_scale":{"type":"object","name":"LinearScale","id":"p278295"},"y_scale":{"type":"object","name":"LogScale","id":"p278296"},"title":{"type":"object","name":"Title","id":"p278288","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p278325","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278319","attributes":{"selected":{"type":"object","name":"Selection","id":"p278320","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278321"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/3/8xLd77P9B6aj+Q60P6nfbc11f7GF5cZv9oa8aMaaOW+yNjI0fP+DebN/0OvBGsOwm+48aMfMf+220t+a6/vjxrQ32/4Hg2mLy6cAdcrwf526wd31YlfJRc4P9r///95ftWw+nc2y55t/ft85ecJ27oJnNWvu////Pl9Innl5QYLtpxo019kfOnPkzk2O1/RegvatlVpFNb/uqseecyCr7yTNnSl5wWQFyZ70t13KS6brXgRaZPcvsd3zVuJK5ZKn91///5dkal9qvk2sNzstcap9tyyV+5NwS+z///9s/rKI/3Xno64qN3kvsS0TWhW9KXmz/A+j/lR8X0Y22eVg1pUx0kf1nYDooylhIM9r2YZUOE99C+8bXgSeY1BbYK8T0P2KrmWf/CRgOHGvm2AMA5hG8qCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278326","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278327"}}},"glyph":{"type":"object","name":"Line","id":"p278322","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278323","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p278324","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p278334","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278328","attributes":{"selected":{"type":"object","name":"Selection","id":"p278329","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278330"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/3/8xLd77P9B6aj+Q60P6nfbc11f7GF5cZv9oa8aMaaOW+yNjI0fP+DebN/0OvBGsOwm+48aMfMf+220t+a6/vjxrQ32/4Hg2mLy6cAdcrwf526wd31YlfJRc4P9r///95ftWw+nc2y55t/ft85ecJ27oJnNWvu////Pl9Innl5QYLtpxo019kfOnPkzk2O1/RegvatlVpFNb/uqseecyCr7yTNnSl5wWQFyZ70t13KS6brXgRaZPcvsd3zVuJK5ZKn91///5dkal9qvk2sNzstcap9tyyV+5NwS+z///9s/rKI/3Xno64qN3kvsS0TWhW9KXmz/A+j/lR8X0Y22eVg1pUx0kf1nYDooylhIM9r2YZUOE99C+8bXgSeY1BbYK8T0P2KrmWf/CRgOHGvm2AMA5hG8qCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278335","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278336"}}},"glyph":{"type":"object","name":"Line","id":"p278331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278332","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p278333","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p278345","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278339","attributes":{"selected":{"type":"object","name":"Selection","id":"p278340","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278341"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2PhVS+Nl/ttzwKmuR2OeN6dfjxMxAHCl3ZQyrBY+fuTAlRcxSFFu6lt8i51qLy2w9J3p5O1m/Sg6gwcPt/oWvBwiRFUvYnD5F36/Ws5zKD6zB1M5lyprcyxhOq3drgK5LlesIGaY+cAVi7lADXPwaEbaNq7045Qc50cogVBJjhDzXdxABur7wq1x83hzyeQQjeofe4OZ5JBDA+ovZ4Oc0GUqxfUfm8HoOUFQd+9oe7wcbDZBrLZF+oePwewsmh/qLsCHN6DhNsCoO4LcAgHGxQIdWegw36wAUFQ9wY5gLULBkPdHewAMsXvVTDU/SEO359uFHU8HAL1R6hDghxIZSjUP2EOJ8JAFoRB/RXmAHaGXzjUf+EOM46DFERA/RnhwAAGkQ4AIr+7kNgBAAA="},"shape":[59],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/3/8xLd77BkYGA58/rvF/j8QrPy4yf73///7izI2gvnXFm8gmv4F1Fe2bz2c/vv//3wp/bUE6S9A/atlVhFNA82vt+VaTpD++v+/PFvjUjj95/9/+4dVS6hG/wCH1yKK6c/g8F5INg0J7/n2n4Du4lgzxx4AsTcnX9gBAAA="},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278346","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278347"}}},"glyph":{"type":"object","name":"Line","id":"p278342","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278343","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p278344","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p278355","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278349","attributes":{"selected":{"type":"object","name":"Selection","id":"p278350","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278351"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p278356","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278357"}}},"glyph":{"type":"object","name":"Line","id":"p278352","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278353","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p278354","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p278294","attributes":{"tools":[{"id":"p278307"},{"id":"p278308"},{"id":"p278309"},{"id":"p278317"},{"type":"object","name":"SaveTool","id":"p278318"},{"id":"p278359"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p278302","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p278303","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p278304"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p278305"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p278297","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p278298","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p278299"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p278300"}}}],"center":[{"type":"object","name":"Grid","id":"p278301","attributes":{"axis":{"id":"p278297"}}},{"type":"object","name":"Grid","id":"p278306","attributes":{"dimension":1,"axis":{"id":"p278302"}}},{"type":"object","name":"Legend","id":"p278337","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p278338","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p278334"}]}},{"type":"object","name":"LegendItem","id":"p278348","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p278345"}]}},{"type":"object","name":"LegendItem","id":"p278358","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p278355"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p278360","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p278370","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p278362"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p278371"},"y_scale":{"type":"object","name":"LinearScale","id":"p278372"},"title":{"type":"object","name":"Title","id":"p278363","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p278401","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278395","attributes":{"selected":{"type":"object","name":"Selection","id":"p278396","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278397"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46H///8dPfLvHHsb//P///qKMhfb9F+KaZictsbd3cQl5o7/aHpd+AO2KzIFgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278402","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278403"}}},"glyph":{"type":"object","name":"Line","id":"p278398","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278399","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p278400","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p278410","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278404","attributes":{"selected":{"type":"object","name":"Selection","id":"p278405","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278406"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46H///8dPfLvHHsb//P///qKMhfb9F+KaZictsbd3cQl5o7/aHpd+AO2KzIFgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278411","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278412"}}},"glyph":{"type":"object","name":"Line","id":"p278407","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278408","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p278409","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p278421","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278415","attributes":{"selected":{"type":"object","name":"Selection","id":"p278416","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278417"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46H///8dPfLvHHsb//P///qKMhfb9F+KaZictsbd3cQl5o7/aHpd+AO2KzIFgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278422","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278423"}}},"glyph":{"type":"object","name":"Line","id":"p278418","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278419","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p278420","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p278431","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278425","attributes":{"selected":{"type":"object","name":"Selection","id":"p278426","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278427"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p278432","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278433"}}},"glyph":{"type":"object","name":"Line","id":"p278428","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278429","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p278430","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p278369","attributes":{"tools":[{"id":"p278383"},{"id":"p278384"},{"id":"p278385"},{"id":"p278393"},{"type":"object","name":"SaveTool","id":"p278394"},{"id":"p278435"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p278378","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p278379","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p278380"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p278381"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p278373","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p278374"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p278375"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p278376"}}}],"center":[{"type":"object","name":"Grid","id":"p278377","attributes":{"axis":{"id":"p278373"}}},{"type":"object","name":"Grid","id":"p278382","attributes":{"dimension":1,"axis":{"id":"p278378"}}},{"type":"object","name":"Legend","id":"p278413","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p278414","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p278410"}]}},{"type":"object","name":"LegendItem","id":"p278424","attributes":{"label":{"type":"value","value":"Median Year (1964)"},"renderers":[{"id":"p278421"}]}},{"type":"object","name":"LegendItem","id":"p278434","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p278431"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p278446","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"55eb2ce3-4c81-426a-8e68-e4457e79cbaf","roots":{"p278447":"f07e0874-35ce-41a6-be83-04eebac4b6c9"},"root_ids":["p278447"]}];
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