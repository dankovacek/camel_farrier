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
    
    
    const element = document.getElementById("f3c094ad-c6f6-476c-8254-0a6bc1c7859e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f3c094ad-c6f6-476c-8254-0a6bc1c7859e' but no matching script tag was found.")
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
                  const docs_json = '{"67195efa-0569-4fbc-9800-3198e9b9ec70":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p155613","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p155614"}}},"roots":[{"type":"object","name":"Column","id":"p155777","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p155774","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p155773","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p155766","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p155637"},{"type":"object","name":"PanTool","id":"p155713"}]}},{"type":"object","name":"ToolProxy","id":"p155767","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p155638","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p155714","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p155768","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p155639","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p155640","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p155646","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p155645","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p155715","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p155716","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p155722","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p155721","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p155769","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p155647"},{"type":"object","name":"ResetTool","id":"p155723"}]}},{"type":"object","name":"SaveTool","id":"p155770"},{"type":"object","name":"ToolProxy","id":"p155771","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p155689","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p155772","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p155765","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p155615","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p155616"},"y_range":{"type":"object","name":"DataRange1d","id":"p155617"},"x_scale":{"type":"object","name":"LinearScale","id":"p155625"},"y_scale":{"type":"object","name":"LogScale","id":"p155626"},"title":{"type":"object","name":"Title","id":"p155618","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p155655","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155649","attributes":{"selected":{"type":"object","name":"Selection","id":"p155650","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155651"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAAKP6Q7GIPB1msPZM0BQMs0BJMwgNhVCv5gEoc9McJg1EwhO9jvskGt9Hfihz0EeSO0w64Oq64XI5/ZC+Am9Dg+rRNa5K/ZCzFXqhtAnuiB0RZfDm0CgSbs7HbiuLy6w/dcB0fcAShcg6DagNXKB7Q5LCmy5riu3QcRPtELM12yF8J80O9iBDCptgvAXNEJoByh9ocEhDQQmNTgc+qoR0x/UABGXaHAQW+f+sGpFvQPIGVz69VD1dXBaO6b/0Nc5NQ5HQPoWVTs8Atn7sBLiX8lKqH0VqPSDcii/zGEmGJRB+AoIWghk75NSCN+gBBqOxRB6QhF2+kEhnAY59zozlH+hADsdgKD7QR7fnw/hN8DoPAz6C9Cbh2yh/IRcNDoHg34MCg9GGD/L4d9/IJifCeVnOiiD0oldpsN6oHdF+tIdvoHMf5sGDZ9UgrQpKH0qQ/kPUiimQcnvTAqUz0CYBgCSxfDLKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p155656","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155657"}}},"glyph":{"type":"object","name":"Line","id":"p155652","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155653","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p155654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p155664","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155658","attributes":{"selected":{"type":"object","name":"Selection","id":"p155659","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155660"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAAKP6Q7GIPB1msPZM0BQMs0BJMwgNhVCv5gEoc9McJg1EwhO9jvskGt9Hfihz0EeSO0w64Oq64XI5/ZC+Am9Dg+rRNa5K/ZCzFXqhtAnuiB0RZfDm0CgSbs7HbiuLy6w/dcB0fcAShcg6DagNXKB7Q5LCmy5riu3QcRPtELM12yF8J80O9iBDCptgvAXNEJoByh9ocEhDQQmNTgc+qoR0x/UABGXaHAQW+f+sGpFvQPIGVz69VD1dXBaO6b/0Nc5NQ5HQPoWVTs8Atn7sBLiX8lKqH0VqPSDcii/zGEmGJRB+AoIWghk75NSCN+gBBqOxRB6QhF2+kEhnAY59zozlH+hADsdgKD7QR7fnw/hN8DoPAz6C9Cbh2yh/IRcNDoHg34MCg9GGD/L4d9/IJifCeVnOiiD0oldpsN6oHdF+tIdvoHMf5sGDZ9UgrQpKH0qQ/kPUiimQcnvTAqUz0CYBgCSxfDLKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p155665","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155666"}}},"glyph":{"type":"object","name":"Line","id":"p155661","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155662","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p155663","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p155675","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155669","attributes":{"selected":{"type":"object","name":"Selection","id":"p155670","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155671"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SCUiTYRzGu8gyKynsNMvQEo+88pgz97g5N6e7t28zDKMDI7ODIjHsMoqisowEkSAzuqNILMtIig676JAiKLrsoqgsrSg66Htfn/HB2Lf3/f+f5/c8Ew488SldnboJ8rtbd6z8xoa+JX/4ux/mVXd8ijkWgN73QViV8GJbaU0wev8fgUtjH03Otobw3GgM6n/n7KjB43g+FPaPV2wfr4Tx3iTc+jCre/bFcN6fjCXFhRfywyI4JxIjHng2p1ZO4bypOGN2uMMfR3FuNMTpoPQYzo/F30TT+x+1cdwzDfsO6ptf9sRzXwIah+7VvY1K5N5EfGsPVTcncX8ScqvqA+9vSqaO6ajLHLP02unp1JOCDz9qH55/nUJdqdCeGqk+adSXhu2lNQ0H9enUmY7nkcMH7lmmod4MJAoZDRnUrYVcd1dL/ZmQY/9l0scMTBHX47LoJwvyWJGOvnR4c2ld8gkj6A8YJuw9BX1mI63yX93+Fdn0m43ZcrGevvXYkioO6OlfjyZhR2sgBwMef/k1t7rDQB45kDYW5pBLDmKlcCP5GOEV8uuM5GTEmvnfp1Uk5JJXLg4J2e255GbCvYnLdy8uNpGfCT//COMmcjQjXAowk6cZlpaTx59F5pFrHsTtwgt55GuBCktdZSFnC67aBDgLeefjc4wQnE/u+VDNROeMLyD/AkCl19ZUwBwKsODyux0ai5V5WLGrQYC3MhcbWlcLgzbmY8OrmRGHjwTbmZMdQenijZ152SHXTnQwNwfiK0RwDubngFzX4mCODviVrl0B/Z3M04neNU7m6sR6dUpVvZP5OhEiDzqZswtHg8tUpC7m7ULW2tvO1tUu5u6CoF5+w8X8XSgp2jogJcTNHrjx+6YY7GYf3NipEQm42Qs3hNuyn272w4NzEqiHPfHAulEQ9LAvHnT2CCEe9saLlXOmqo+X/fFiiMCz3MseeSExtHnZJy+k3UCFvVJwXdhSFPZLgZTfqLBnCr4KmZ8U9s0HKUfjY+98GCfWbvSxfz7I8fd97KEPBjEm1M8++iGPL/Czl34sEq+b/eynH33kpxD/AfULxQNIBQAA"},"shape":[169],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/83RqQ7CQBAG4D4GkkeoRFYiK5EV3PcVzgDLfZ8JYPdRkMg+wkokEglkf8Q0LaUBwZovm/knM8koyuMFj9oTxTxQxV6qwcuOyrbIrana67+ShqAPXpZUw0W2QP+cymdUFZ6mUh2Kib15BydjzIGBkfQ8pMbhbYA8DPZR72G/LlWzaDJqzaLPQdahmu33Gi3ptUndNJCrU3ntvaJK5RV7/R+qlu3lJexZ/ExRsNeAZt6buoss52DWm0bGxbRHUzBpMeFiHMaoLIp7RH6jCP+HyvfeAZ11eVxIBQAA"},"shape":[169],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p155676","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155677"}}},"glyph":{"type":"object","name":"Line","id":"p155672","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155673","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p155674","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p155685","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155679","attributes":{"selected":{"type":"object","name":"Selection","id":"p155680","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155681"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p155686","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155687"}}},"glyph":{"type":"object","name":"Line","id":"p155682","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155683","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p155684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p155624","attributes":{"tools":[{"id":"p155637"},{"id":"p155638"},{"id":"p155639"},{"id":"p155647"},{"type":"object","name":"SaveTool","id":"p155648"},{"id":"p155689"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p155632","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p155633","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p155634"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p155635"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p155627","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p155628","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p155629"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p155630"}}}],"center":[{"type":"object","name":"Grid","id":"p155631","attributes":{"axis":{"id":"p155627"}}},{"type":"object","name":"Grid","id":"p155636","attributes":{"dimension":1,"axis":{"id":"p155632"}}},{"type":"object","name":"Legend","id":"p155667","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p155668","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p155664"}]}},{"type":"object","name":"LegendItem","id":"p155678","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p155675"}]}},{"type":"object","name":"LegendItem","id":"p155688","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p155685"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p155690","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p155700","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p155692"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p155701"},"y_scale":{"type":"object","name":"LinearScale","id":"p155702"},"title":{"type":"object","name":"Title","id":"p155693","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p155731","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155725","attributes":{"selected":{"type":"object","name":"Selection","id":"p155726","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155727"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0A1Hex32fb9X/X5rm8PZM0AQU+pg9XxO8TnPBoc9u4Hgdy5Efm+KAwCwJ7UsYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p155732","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155733"}}},"glyph":{"type":"object","name":"Line","id":"p155728","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155729","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p155730","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p155740","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155734","attributes":{"selected":{"type":"object","name":"Selection","id":"p155735","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155736"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0A1Hex32fb9X/X5rm8PZM0AQU+pg9XxO8TnPBoc9u4Hgdy5Efm+KAwCwJ7UsYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p155741","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155742"}}},"glyph":{"type":"object","name":"Line","id":"p155737","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p155739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p155751","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155745","attributes":{"selected":{"type":"object","name":"Selection","id":"p155746","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155747"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0A1Hex32fb9X/X5rm8PZM0AQU+pg9XxO8TnPBoc9u4Hgdy5Efm+KAwCwJ7UsYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p155752","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155753"}}},"glyph":{"type":"object","name":"Line","id":"p155748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155749","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p155750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p155761","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155755","attributes":{"selected":{"type":"object","name":"Selection","id":"p155756","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155757"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p155762","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155763"}}},"glyph":{"type":"object","name":"Line","id":"p155758","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p155760","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p155699","attributes":{"tools":[{"id":"p155713"},{"id":"p155714"},{"id":"p155715"},{"id":"p155723"},{"type":"object","name":"SaveTool","id":"p155724"},{"id":"p155765"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p155708","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p155709","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p155710"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p155711"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p155703","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p155704"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p155705"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p155706"}}}],"center":[{"type":"object","name":"Grid","id":"p155707","attributes":{"axis":{"id":"p155703"}}},{"type":"object","name":"Grid","id":"p155712","attributes":{"dimension":1,"axis":{"id":"p155708"}}},{"type":"object","name":"Legend","id":"p155743","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p155744","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p155740"}]}},{"type":"object","name":"LegendItem","id":"p155754","attributes":{"label":{"type":"value","value":"Median Year (1915)"},"renderers":[{"id":"p155751"}]}},{"type":"object","name":"LegendItem","id":"p155764","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p155761"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p155776","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"67195efa-0569-4fbc-9800-3198e9b9ec70","roots":{"p155777":"f3c094ad-c6f6-476c-8254-0a6bc1c7859e"},"root_ids":["p155777"]}];
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