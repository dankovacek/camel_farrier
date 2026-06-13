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
    
    
    const element = document.getElementById("a8a09e8a-7ade-4b32-8149-3480e7646336");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a8a09e8a-7ade-4b32-8149-3480e7646336' but no matching script tag was found.")
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
                  const docs_json = '{"8f9a5bcf-0198-4c50-91b9-1456944e0790":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p190916","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p190917"}}},"roots":[{"type":"object","name":"Column","id":"p191080","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p191077","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p191076","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p191069","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p190940"},{"type":"object","name":"PanTool","id":"p191016"}]}},{"type":"object","name":"ToolProxy","id":"p191070","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p190941","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p191017","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p191071","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p190942","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p190943","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p190949","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p190948","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p191018","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p191019","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p191025","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p191024","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p191072","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p190950"},{"type":"object","name":"ResetTool","id":"p191026"}]}},{"type":"object","name":"SaveTool","id":"p191073"},{"type":"object","name":"ToolProxy","id":"p191074","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p190992","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p191075","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p191068","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p190918","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p190919"},"y_range":{"type":"object","name":"DataRange1d","id":"p190920"},"x_scale":{"type":"object","name":"LinearScale","id":"p190928"},"y_scale":{"type":"object","name":"LogScale","id":"p190929"},"title":{"type":"object","name":"Title","id":"p190921","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p190958","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190952","attributes":{"selected":{"type":"object","name":"Selection","id":"p190953","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190954"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/3/8xLd77P9B6aj+Q60P6nfbc11f7GF5cZv9oa8aMaaOW+yNjI0fP+DebN/0OvBGsOwm+48aMfMf+220t+a6/vjxrQ32/4Hg2mLy6cAdcrwf526wd31YlfJRc4P9r///95ftWw+nc2y55t/ft85ecJ27oJnNWvu////Pl9Innl5QYLtpxo019kfOnPkzk2O1/Rege1fLrCKb3vZVY885kVX2k2fOlLzgsgLkznpbruUk03WvAy0ye5bZ7/iqcSVzyVL7r///y7M1LrVfJ9canJe51D7blkv8yLkl9n/+/7d/WEV/uvPQ1xUbvZfYl4isC9+UvNj+BzDcVn5cRDfa5mHVlDLRRfafgemhKGMhzWjbh1U6THwL7RtfB55gUltgrxDT/4itZp79J2C4c6yZYw8A5hG8qCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190959","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190960"}}},"glyph":{"type":"object","name":"Line","id":"p190955","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p190956","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p190957","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p190967","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190961","attributes":{"selected":{"type":"object","name":"Selection","id":"p190962","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190963"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/3/8xLd77P9B6aj+Q60P6nfbc11f7GF5cZv9oa8aMaaOW+yNjI0fP+DebN/0OvBGsOwm+48aMfMf+220t+a6/vjxrQ32/4Hg2mLy6cAdcrwf526wd31YlfJRc4P9r///95ftWw+nc2y55t/ft85ecJ27oJnNWvu////Pl9Innl5QYLtpxo019kfOnPkzk2O1/Rege1fLrCKb3vZVY885kVX2k2fOlLzgsgLkznpbruUk03WvAy0ye5bZ7/iqcSVzyVL7r///y7M1LrVfJ9canJe51D7blkv8yLkl9n/+/7d/WEV/uvPQ1xUbvZfYl4isC9+UvNj+BzDcVn5cRDfa5mHVlDLRRfafgemhKGMhzWjbh1U6THwL7RtfB55gUltgrxDT/4itZp79J2C4c6yZYw8A5hG8qCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190968","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190969"}}},"glyph":{"type":"object","name":"Line","id":"p190964","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p190965","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p190966","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p190978","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190972","attributes":{"selected":{"type":"object","name":"Selection","id":"p190973","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190974"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2PhVS+Nl/ttzwKmuR2OeN6dfjxMxAHCl3ZQyrBY+fuTAlRcxSFFu6lt8i51qLy2w9J3p5O1m/Sg6gwcPt/oWvBwiRFUvYnD5F36/Ws5zKD6zB1M5lyprcyxhOq3drgK5LlesIGaY+cAVi7lADXPwaEbaNq7045Qc50cogVBJjhDzXdxADtH3xVqj5vDn08gB7hB7XN3OAN0XdtkD6i9ng5zQda7ekHt93YAWl4Q9N0b6g4fB5ttIB/7Qt3j5wAOlmh/qLsCHN6DvNsWAHVfgEM4OKACoe4MdNgPNiAI6t4gB7B2wWCou4MdQL7zexUMdX+Iw/enG0UdD4dA/RHqkABUbTInFOqfMIcTYSALwqD+CnMAB49fONR/4Q4zjoMURED9GeHAAAaRDgAiv7uQ2AEAAA=="},"shape":[59],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/3/8xLd77BkYGA58/rvF/j8QrPy4yf73///7izI2gvnXFm8gmv4F1Fe2b709jP77//98Kf219oToL0B7VsussieWBppfb8u1HGQPXvrr///ybI1L7WH0n///7R9WLbGnFv0DHF6L7CmlP4PDe6E9uTQkvOfbfwL6j2PNHHsAsTcnX9gBAAA="},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190979","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190980"}}},"glyph":{"type":"object","name":"Line","id":"p190975","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p190976","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p190977","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p190988","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190982","attributes":{"selected":{"type":"object","name":"Selection","id":"p190983","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190984"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p190989","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190990"}}},"glyph":{"type":"object","name":"Line","id":"p190985","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p190986","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p190987","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p190927","attributes":{"tools":[{"id":"p190940"},{"id":"p190941"},{"id":"p190942"},{"id":"p190950"},{"type":"object","name":"SaveTool","id":"p190951"},{"id":"p190992"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p190935","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p190936","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p190937"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p190938"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p190930","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p190931","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p190932"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p190933"}}}],"center":[{"type":"object","name":"Grid","id":"p190934","attributes":{"axis":{"id":"p190930"}}},{"type":"object","name":"Grid","id":"p190939","attributes":{"dimension":1,"axis":{"id":"p190935"}}},{"type":"object","name":"Legend","id":"p190970","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p190971","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p190967"}]}},{"type":"object","name":"LegendItem","id":"p190981","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p190978"}]}},{"type":"object","name":"LegendItem","id":"p190991","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p190988"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p190993","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p191003","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p190995"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p191004"},"y_scale":{"type":"object","name":"LinearScale","id":"p191005"},"title":{"type":"object","name":"Title","id":"p190996","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p191034","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p191028","attributes":{"selected":{"type":"object","name":"Selection","id":"p191029","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p191030"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC/3v///4iW/32MPkP///v78oY6F9/4W4ptlJS+ztXVxC3uivhsujmwMA7YrMgWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p191035","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p191036"}}},"glyph":{"type":"object","name":"Line","id":"p191031","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p191032","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p191033","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p191043","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p191037","attributes":{"selected":{"type":"object","name":"Selection","id":"p191038","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p191039"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC/3v///4iW/32MPkP///v78oY6F9/4W4ptlJS+ztXVxC3uivhsujmwMA7YrMgWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p191044","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p191045"}}},"glyph":{"type":"object","name":"Line","id":"p191040","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p191041","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p191042","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p191054","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p191048","attributes":{"selected":{"type":"object","name":"Selection","id":"p191049","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p191050"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC/3v///4iW/32MPkP///v78oY6F9/4W4ptlJS+ztXVxC3uivhsujmwMA7YrMgWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p191055","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p191056"}}},"glyph":{"type":"object","name":"Line","id":"p191051","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p191052","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p191053","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p191064","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p191058","attributes":{"selected":{"type":"object","name":"Selection","id":"p191059","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p191060"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p191065","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p191066"}}},"glyph":{"type":"object","name":"Line","id":"p191061","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p191062","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p191063","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p191002","attributes":{"tools":[{"id":"p191016"},{"id":"p191017"},{"id":"p191018"},{"id":"p191026"},{"type":"object","name":"SaveTool","id":"p191027"},{"id":"p191068"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p191011","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p191012","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p191013"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p191014"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p191006","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p191007"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p191008"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p191009"}}}],"center":[{"type":"object","name":"Grid","id":"p191010","attributes":{"axis":{"id":"p191006"}}},{"type":"object","name":"Grid","id":"p191015","attributes":{"dimension":1,"axis":{"id":"p191011"}}},{"type":"object","name":"Legend","id":"p191046","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p191047","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p191043"}]}},{"type":"object","name":"LegendItem","id":"p191057","attributes":{"label":{"type":"value","value":"Median Year (1964)"},"renderers":[{"id":"p191054"}]}},{"type":"object","name":"LegendItem","id":"p191067","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p191064"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p191079","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8f9a5bcf-0198-4c50-91b9-1456944e0790","roots":{"p191080":"a8a09e8a-7ade-4b32-8149-3480e7646336"},"root_ids":["p191080"]}];
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