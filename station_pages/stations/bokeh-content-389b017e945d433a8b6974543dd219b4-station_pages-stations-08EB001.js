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
    
    
    const element = document.getElementById("af856e96-2a94-4a69-8d02-eadc327b44b2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'af856e96-2a94-4a69-8d02-eadc327b44b2' but no matching script tag was found.")
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
                  const docs_json = '{"518e88da-365f-495b-859a-41cc9a7fdaa0":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p155930","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p155931"}}},"roots":[{"type":"object","name":"Column","id":"p156094","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p156091","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p156090","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p156083","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p155954"},{"type":"object","name":"PanTool","id":"p156030"}]}},{"type":"object","name":"ToolProxy","id":"p156084","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p155955","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p156031","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p156085","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p155956","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p155957","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p155963","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p155962","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p156032","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p156033","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p156039","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p156038","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p156086","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p155964"},{"type":"object","name":"ResetTool","id":"p156040"}]}},{"type":"object","name":"SaveTool","id":"p156087"},{"type":"object","name":"ToolProxy","id":"p156088","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p156006","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p156089","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p156082","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p155932","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p155933"},"y_range":{"type":"object","name":"DataRange1d","id":"p155934"},"x_scale":{"type":"object","name":"LinearScale","id":"p155942"},"y_scale":{"type":"object","name":"LogScale","id":"p155943"},"title":{"type":"object","name":"Title","id":"p155935","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p155972","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155966","attributes":{"selected":{"type":"object","name":"Selection","id":"p155967","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155968"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAAKP6Q7GIPB1msPZM0BQMs0BJMwgNhVCv5gEoc9McJg1EwhO9jvskGt9Hfihz0EeSO0w64Oq64XI5/ZC+Am9Dg+rRNa5K/ZCzFXqhtAnuiB0RZfDm0CgSbs7HbiuLy6w/dcB0fcAShcg6DagNXKB7Q5LCmy5riu3QcRPtELM12yF8J80O9iBDCptgvAXNEJoByh9ocEhDQQmNTgc+qoR0x/UABGXaHAQW+f+sGpFvQPIGVz69VD1dXBaO6b/0Nc5NQ5HQPoWVTs8Atn7sBLiX8lKqH0VqPSDcii/zGEmGJRB+AoIWghk75NSCN+gBBqOxRB6QhF2+kEhnAY59zozlH+hADsdgKD7QR7fnw/hN8DoPAz6C9Cbh2yh/IRcNDoHg34MCg9GGD/L4d9/IJifCeVnOiiD0oldpsN6oHdF+tIdvoHMf5sGDZ9UgrQpKH0qQ/kPUiimQcnvTAqUz0CYBgCSxfDLKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p155973","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155974"}}},"glyph":{"type":"object","name":"Line","id":"p155969","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155970","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p155971","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p155981","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155975","attributes":{"selected":{"type":"object","name":"Selection","id":"p155976","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155977"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAAKP6Q7GIPB1msPZM0BQMs0BJMwgNhVCv5gEoc9McJg1EwhO9jvskGt9Hfihz0EeSO0w64Oq64XI5/ZC+Am9Dg+rRNa5K/ZCzFXqhtAnuiB0RZfDm0CgSbs7HbiuLy6w/dcB0fcAShcg6DagNXKB7Q5LCmy5riu3QcRPtELM12yF8J80O9iBDCptgvAXNEJoByh9ocEhDQQmNTgc+qoR0x/UABGXaHAQW+f+sGpFvQPIGVz69VD1dXBaO6b/0Nc5NQ5HQPoWVTs8Atn7sBLiX8lKqH0VqPSDcii/zGEmGJRB+AoIWghk75NSCN+gBBqOxRB6QhF2+kEhnAY59zozlH+hADsdgKD7QR7fnw/hN8DoPAz6C9Cbh2yh/IRcNDoHg34MCg9GGD/L4d9/IJifCeVnOiiD0oldpsN6oHdF+tIdvoHMf5sGDZ9UgrQpKH0qQ/kPUiimQcnvTAqUz0CYBgCSxfDLKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p155982","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155983"}}},"glyph":{"type":"object","name":"Line","id":"p155978","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155979","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p155980","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p155992","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155986","attributes":{"selected":{"type":"object","name":"Selection","id":"p155987","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155988"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SCUiTYRzGu8gyKynsNMvQEo+88pgz97g5N6e7t28zDKMDI7ODIjHsMoqisowEkSAzuqNILMtIig676JAiKLrsoqgsrSg66Htfn/HB2Lf3/f+f5/c8Ew488SldnboJ8rtbd6z8xoa+JX/4ux/mVXd8ijkWgN73QViV8GJbaU0wev8fgUtjH03Otobw3GgM6n/n7KjB43g+FPaPV2wfr4Tx3iTc+jCre/bFcN6fjCXFhRfywyI4JxIjHng2p1ZO4bypOGN2uMMfR3FuNMTpoPQYzo/F30TT+x+1cdwzDfsO6ptf9sRzXwIah+7VvY1K5N5EfGsPVTcncX8ScqvqA+9vSqaO6ajLHLP02unp1JOCDz9qH55/nUJdqdCeGqk+adSXhu2lNQ0H9enUmY7nkcMH7lmmod4MJAoZDRnUrYVcd1dL/ZmQY/9l0scMTBHX47LoJwvyWJGOvnR4c2ld8gkj6A8YJuw9BX1mI63yX93+Fdn0m43ZcrGevvXYkioO6OlfjyZhR2sgBwMef/k1t7rDQB45kDYW5pBLDmKlcCP5GOEV8uuM5GTEmvnfp1Uk5JJXLg4J2e255GbCvYnLdy8uNpGfCT//COMmcjQjXAowk6cZlpaTx59F5pFrHsTtwgt55GuBCktdZSFnC67aBDgLeefjc4wQnE/u+VDNROeMLyD/AkCl19ZUwBwKsODyux0ai5V5WLGrQYC3MhcbWlcLgzbmY8OrmRGHjwTbmZMdQenijZ152SHXTnQwNwfiK0RwDubngFzX4mCODviVrl0B/Z3M04neNU7m6sR6dUpVvZP5OhEiDzqZswtHg8tUpC7m7ULW2tvO1tUu5u6CoF5+w8X8XSgp2jogJcTNHrjx+6YY7GYf3NipEQm42Qs3hNuyn272w4NzEqiHPfHAulEQ9LAvHnT2CCEe9saLlXOmqo+X/fFiiMCz3MseeSExtHnZJy+k3UCFvVJwXdhSFPZLgZTfqLBnCr4KmZ8U9s0HKUfjY+98GCfWbvSxfz7I8fd97KEPBjEm1M8++iGPL/Czl34sEq+b/eynH33kpxD/AfULxQNIBQAA"},"shape":[169],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/83RqQ7CQBAG4D4GkkeoRFYiK5EV3PcVzgDLfZ8JYPdRkMg+wkokEglkf8Q0LaUBwZovm/knM8koyuMFj9oTxTxQxV6qwcuOyrbIrana67+ShqAPXpZUw0W2QP+cymdUFZ6mUh2Kib15BydjzIGBkfQ8pMbhbYA8DPZR72G/LlWzaDJqzaLPQdahmu33Gi3ptUndNJCrU3ntvaJK5RV7/R+qlu3lJexZ/ExRsNeAZt6buoss52DWm0bGxbRHUzBpMeFiHMaoLIp7RH6jCP+HyvfeAZ11eVxIBQAA"},"shape":[169],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p155993","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p155994"}}},"glyph":{"type":"object","name":"Line","id":"p155989","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p155990","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p155991","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p156002","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p155996","attributes":{"selected":{"type":"object","name":"Selection","id":"p155997","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p155998"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p156003","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p156004"}}},"glyph":{"type":"object","name":"Line","id":"p155999","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p156000","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p156001","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p155941","attributes":{"tools":[{"id":"p155954"},{"id":"p155955"},{"id":"p155956"},{"id":"p155964"},{"type":"object","name":"SaveTool","id":"p155965"},{"id":"p156006"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p155949","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p155950","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p155951"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p155952"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p155944","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p155945","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p155946"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p155947"}}}],"center":[{"type":"object","name":"Grid","id":"p155948","attributes":{"axis":{"id":"p155944"}}},{"type":"object","name":"Grid","id":"p155953","attributes":{"dimension":1,"axis":{"id":"p155949"}}},{"type":"object","name":"Legend","id":"p155984","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p155985","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p155981"}]}},{"type":"object","name":"LegendItem","id":"p155995","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p155992"}]}},{"type":"object","name":"LegendItem","id":"p156005","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p156002"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p156007","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p156017","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p156009"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p156018"},"y_scale":{"type":"object","name":"LinearScale","id":"p156019"},"title":{"type":"object","name":"Title","id":"p156010","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p156048","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p156042","attributes":{"selected":{"type":"object","name":"Selection","id":"p156043","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p156044"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0A1Hex32fb9X/X5rm8PZM0AQU+pg9XxO8TnPBoc9u4Hgdy5Efm+KAwCwJ7UsYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p156049","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p156050"}}},"glyph":{"type":"object","name":"Line","id":"p156045","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p156046","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p156047","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p156057","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p156051","attributes":{"selected":{"type":"object","name":"Selection","id":"p156052","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p156053"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0A1Hex32fb9X/X5rm8PZM0AQU+pg9XxO8TnPBoc9u4Hgdy5Efm+KAwCwJ7UsYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p156058","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p156059"}}},"glyph":{"type":"object","name":"Line","id":"p156054","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p156055","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p156056","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p156068","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p156062","attributes":{"selected":{"type":"object","name":"Selection","id":"p156063","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p156064"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0A1Hex32fb9X/X5rm8PZM0AQU+pg9XxO8TnPBoc9u4Hgdy5Efm+KAwCwJ7UsYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p156069","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p156070"}}},"glyph":{"type":"object","name":"Line","id":"p156065","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p156066","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p156067","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p156078","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p156072","attributes":{"selected":{"type":"object","name":"Selection","id":"p156073","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p156074"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p156079","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p156080"}}},"glyph":{"type":"object","name":"Line","id":"p156075","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p156076","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p156077","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p156016","attributes":{"tools":[{"id":"p156030"},{"id":"p156031"},{"id":"p156032"},{"id":"p156040"},{"type":"object","name":"SaveTool","id":"p156041"},{"id":"p156082"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p156025","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p156026","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p156027"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p156028"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p156020","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p156021"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p156022"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p156023"}}}],"center":[{"type":"object","name":"Grid","id":"p156024","attributes":{"axis":{"id":"p156020"}}},{"type":"object","name":"Grid","id":"p156029","attributes":{"dimension":1,"axis":{"id":"p156025"}}},{"type":"object","name":"Legend","id":"p156060","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p156061","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p156057"}]}},{"type":"object","name":"LegendItem","id":"p156071","attributes":{"label":{"type":"value","value":"Median Year (1915)"},"renderers":[{"id":"p156068"}]}},{"type":"object","name":"LegendItem","id":"p156081","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p156078"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p156093","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"518e88da-365f-495b-859a-41cc9a7fdaa0","roots":{"p156094":"af856e96-2a94-4a69-8d02-eadc327b44b2"},"root_ids":["p156094"]}];
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