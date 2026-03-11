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
    
    
    const element = document.getElementById("e53462e8-d334-4e65-982c-1c6b12a6c344");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e53462e8-d334-4e65-982c-1c6b12a6c344' but no matching script tag was found.")
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
                  const docs_json = '{"198c73f9-32fe-489f-baca-7f91f1473d5a":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p277952","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p277953"}}},"roots":[{"type":"object","name":"Column","id":"p278116","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p278113","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p278112","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p278105","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p277976"},{"type":"object","name":"PanTool","id":"p278052"}]}},{"type":"object","name":"ToolProxy","id":"p278106","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p277977","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p278053","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p278107","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p277978","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p277979","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p277985","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p277984","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p278054","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p278055","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p278061","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p278060","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p278108","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p277986"},{"type":"object","name":"ResetTool","id":"p278062"}]}},{"type":"object","name":"SaveTool","id":"p278109"},{"type":"object","name":"ToolProxy","id":"p278110","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p278028","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p278111","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p278104","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p277954","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p277955"},"y_range":{"type":"object","name":"DataRange1d","id":"p277956"},"x_scale":{"type":"object","name":"LinearScale","id":"p277964"},"y_scale":{"type":"object","name":"LogScale","id":"p277965"},"title":{"type":"object","name":"Title","id":"p277957","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p277994","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p277988","attributes":{"selected":{"type":"object","name":"Selection","id":"p277989","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p277990"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/3/8xLd77P9B6aj+Q60P6nfbc11f7GF5cZv9oa8aMaaOW+yNjI0fP+DebN/0OvBGsOwm+48aMfMf+220t+a6/vjxrQ32/4Hg2mLy6cAdcrwf526wd31YlfJRc4P9r///95ftWw+nc2y55t/ft85ecJ27oJnNWvu////Pl9Innl5QYLtpxo019kfOnPkzk2O1/RegvatlVpFNb/uqseecyCr7yTNnSl5wWQFyZ70t13KS6brXgRaZPcvsd3zVuJK5ZKn91///5dkal9qvk2sNzstcap9tyyV+5NwS+z///9s/rKI/3Xno64qN3kvsS0TWhW9KXmz/A+j/lR8X0Y22eVg1pUx0kf1nYDooylhIM9r2YZUOE99C+8bXgSeY1BbYK8T0P2KrmWf/CRgOHGvm2AMA5hG8qCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p277995","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p277996"}}},"glyph":{"type":"object","name":"Line","id":"p277991","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p277992","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p277993","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p278003","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p277997","attributes":{"selected":{"type":"object","name":"Selection","id":"p277998","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p277999"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/3/8xLd77P9B6aj+Q60P6nfbc11f7GF5cZv9oa8aMaaOW+yNjI0fP+DebN/0OvBGsOwm+48aMfMf+220t+a6/vjxrQ32/4Hg2mLy6cAdcrwf526wd31YlfJRc4P9r///95ftWw+nc2y55t/ft85ecJ27oJnNWvu////Pl9Innl5QYLtpxo019kfOnPkzk2O1/RegvatlVpFNb/uqseecyCr7yTNnSl5wWQFyZ70t13KS6brXgRaZPcvsd3zVuJK5ZKn91///5dkal9qvk2sNzstcap9tyyV+5NwS+z///9s/rKI/3Xno64qN3kvsS0TWhW9KXmz/A+j/lR8X0Y22eVg1pUx0kf1nYDooylhIM9r2YZUOE99C+8bXgSeY1BbYK8T0P2KrmWf/CRgOHGvm2AMA5hG8qCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278004","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278005"}}},"glyph":{"type":"object","name":"Line","id":"p278000","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278001","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p278002","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p278014","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278008","attributes":{"selected":{"type":"object","name":"Selection","id":"p278009","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278010"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2PhVS+Nl/ttzwKmuR2OeN6dfjxMxAHCl3ZQyrBY+fuTAlRcxSFFu6lt8i51qLy2w9J3p5O1m/Sg6gwcPt/oWvBwiRFUvYnD5F36/Ws5zKD6zB1M5lyprcyxhOq3drgK5LlesIGaY+cAVi7lADXPwaEbaNq7045Qc50cogVBJjhDzXdxABur7wq1x83hzyeQQjeofe4OZ5JBDA+ovZ4Oc0GUqxfUfm8HoOUFQd+9oe7wcbDZBrLZF+oePwewsmh/qLsCHN6DhNsCoO4LcAgHGxQIdWegw36wAUFQ9wY5gLULBkPdHewAMsXvVTDU/SEO359uFHU8HAL1R6hDghxIZSjUP2EOJ8JAFoRB/RXmAHaGXzjUf+EOM46DFERA/RnhwAAGkQ4AIr+7kNgBAAA="},"shape":[59],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3/3/8xLd77BkYGA58/rvF/j8QrPy4yf73///7izI2gvnXFm8gmv4F1Fe2bz2c/vv//3wp/bUE6S9A/atlVhFNA82vt+VaTpD++v+/PFvjUjj95/9/+4dVS6hG/wCH1yKK6c/g8F5INg0J7/n2n4Du4lgzxx4AsTcnX9gBAAA="},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278015","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278016"}}},"glyph":{"type":"object","name":"Line","id":"p278011","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278012","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p278013","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p278024","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278018","attributes":{"selected":{"type":"object","name":"Selection","id":"p278019","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278020"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p278025","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278026"}}},"glyph":{"type":"object","name":"Line","id":"p278021","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278022","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p278023","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p277963","attributes":{"tools":[{"id":"p277976"},{"id":"p277977"},{"id":"p277978"},{"id":"p277986"},{"type":"object","name":"SaveTool","id":"p277987"},{"id":"p278028"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p277971","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p277972","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p277973"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p277974"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p277966","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p277967","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p277968"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p277969"}}}],"center":[{"type":"object","name":"Grid","id":"p277970","attributes":{"axis":{"id":"p277966"}}},{"type":"object","name":"Grid","id":"p277975","attributes":{"dimension":1,"axis":{"id":"p277971"}}},{"type":"object","name":"Legend","id":"p278006","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p278007","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p278003"}]}},{"type":"object","name":"LegendItem","id":"p278017","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p278014"}]}},{"type":"object","name":"LegendItem","id":"p278027","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p278024"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p278029","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p278039","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p278031"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p278040"},"y_scale":{"type":"object","name":"LinearScale","id":"p278041"},"title":{"type":"object","name":"Title","id":"p278032","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p278070","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278064","attributes":{"selected":{"type":"object","name":"Selection","id":"p278065","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278066"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46H///8dPfLvHHsb//P///qKMhfb9F+KaZictsbd3cQl5o7/aHpd+AO2KzIFgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278071","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278072"}}},"glyph":{"type":"object","name":"Line","id":"p278067","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278068","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p278069","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p278079","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278073","attributes":{"selected":{"type":"object","name":"Selection","id":"p278074","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278075"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46H///8dPfLvHHsb//P///qKMhfb9F+KaZictsbd3cQl5o7/aHpd+AO2KzIFgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278080","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278081"}}},"glyph":{"type":"object","name":"Line","id":"p278076","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278077","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p278078","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p278090","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278084","attributes":{"selected":{"type":"object","name":"Selection","id":"p278085","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278086"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46H///8dPfLvHHsb//P///qKMhfb9F+KaZictsbd3cQl5o7/aHpd+AO2KzIFgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278091","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278092"}}},"glyph":{"type":"object","name":"Line","id":"p278087","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278088","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p278089","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p278100","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278094","attributes":{"selected":{"type":"object","name":"Selection","id":"p278095","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278096"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p278101","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278102"}}},"glyph":{"type":"object","name":"Line","id":"p278097","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278098","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p278099","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p278038","attributes":{"tools":[{"id":"p278052"},{"id":"p278053"},{"id":"p278054"},{"id":"p278062"},{"type":"object","name":"SaveTool","id":"p278063"},{"id":"p278104"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p278047","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p278048","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p278049"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p278050"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p278042","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p278043"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p278044"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p278045"}}}],"center":[{"type":"object","name":"Grid","id":"p278046","attributes":{"axis":{"id":"p278042"}}},{"type":"object","name":"Grid","id":"p278051","attributes":{"dimension":1,"axis":{"id":"p278047"}}},{"type":"object","name":"Legend","id":"p278082","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p278083","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p278079"}]}},{"type":"object","name":"LegendItem","id":"p278093","attributes":{"label":{"type":"value","value":"Median Year (1964)"},"renderers":[{"id":"p278090"}]}},{"type":"object","name":"LegendItem","id":"p278103","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p278100"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p278115","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"198c73f9-32fe-489f-baca-7f91f1473d5a","roots":{"p278116":"e53462e8-d334-4e65-982c-1c6b12a6c344"},"root_ids":["p278116"]}];
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