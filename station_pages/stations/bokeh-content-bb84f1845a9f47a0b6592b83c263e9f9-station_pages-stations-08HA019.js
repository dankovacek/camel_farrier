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
    
    
    const element = document.getElementById("ba6fb843-9727-4b7a-a1b1-18711482a710");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ba6fb843-9727-4b7a-a1b1-18711482a710' but no matching script tag was found.")
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
                  const docs_json = '{"91c406af-8980-4ba5-b1d6-5987a6775aba":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p384291","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p384292"}}},"roots":[{"type":"object","name":"Column","id":"p384455","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p384452","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p384451","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p384444","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p384315"},{"type":"object","name":"PanTool","id":"p384391"}]}},{"type":"object","name":"ToolProxy","id":"p384445","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p384316","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p384392","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p384446","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p384317","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p384318","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p384324","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p384323","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p384393","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p384394","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p384400","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p384399","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p384447","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p384325"},{"type":"object","name":"ResetTool","id":"p384401"}]}},{"type":"object","name":"SaveTool","id":"p384448"},{"type":"object","name":"ToolProxy","id":"p384449","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p384367","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p384450","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p384443","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p384293","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p384294"},"y_range":{"type":"object","name":"DataRange1d","id":"p384295"},"x_scale":{"type":"object","name":"LinearScale","id":"p384303"},"y_scale":{"type":"object","name":"LogScale","id":"p384304"},"title":{"type":"object","name":"Title","id":"p384296","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p384333","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384327","attributes":{"selected":{"type":"object","name":"Selection","id":"p384328","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384329"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/3/8xLd77P9B6aj+Q60P6nfbc11f7GF5cZv9oa8aMaaOW+yNjI0fP+DebN/0OvBGsOwm+48aMfMf+220t+a6/vjxrQ32/4Hg2mLy6cAdcrwf526wd31YlfJRc4P9r///95ftWw+nc2y55t/ft85ecJ27oJnNWvu////Pl9Innl5QYLtpxo019kfOnPkzk2O1/Rege1fLrCKb3vZVY885kVX2k2fOlLzgsgLkznpbruUk03WvAy0ye5bZ7/iqcSVzyVL7r///y7M1LrVfJ9canJe51D7blkv8yLkl9n/+/7d/WEV/uvPQ1xUbvZfYl4isC9+UvNj+BzDcVn5cRDfa5mHVlDLRRfafgemhKGMhzWjbh1U6THwL7RtfB55gUltgrxDT/4itZp79J2C4c6yZYw8A5hG8qCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384334","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384335"}}},"glyph":{"type":"object","name":"Line","id":"p384330","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384332","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p384342","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384336","attributes":{"selected":{"type":"object","name":"Selection","id":"p384337","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384338"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/3/8xLd77P9B6aj+Q60P6nfbc11f7GF5cZv9oa8aMaaOW+yNjI0fP+DebN/0OvBGsOwm+48aMfMf+220t+a6/vjxrQ32/4Hg2mLy6cAdcrwf526wd31YlfJRc4P9r///95ftWw+nc2y55t/ft85ecJ27oJnNWvu////Pl9Innl5QYLtpxo019kfOnPkzk2O1/Rege1fLrCKb3vZVY885kVX2k2fOlLzgsgLkznpbruUk03WvAy0ye5bZ7/iqcSVzyVL7r///y7M1LrVfJ9canJe51D7blkv8yLkl9n/+/7d/WEV/uvPQ1xUbvZfYl4isC9+UvNj+BzDcVn5cRDfa5mHVlDLRRfafgemhKGMhzWjbh1U6THwL7RtfB55gUltgrxDT/4itZp79J2C4c6yZYw8A5hG8qCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384343","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384344"}}},"glyph":{"type":"object","name":"Line","id":"p384339","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p384341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p384353","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384347","attributes":{"selected":{"type":"object","name":"Selection","id":"p384348","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384349"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2PhVS+Nl/ttzwKmuR2OeN6dfjxMxAHCl3ZQyrBY+fuTAlRcxSFFu6lt8i51qLy2w9J3p5O1m/Sg6gwcPt/oWvBwiRFUvYnD5F36/Ws5zKD6zB1M5lyprcyxhOq3drgK5LlesIGaY+cAVi7lADXPwaEbaNq7045Qc50cogVBJjhDzXdxADtH3xVqj5vDn08gB7hB7XN3OAN0XdtkD6i9ng5zQda7ekHt93YAWl4Q9N0b6g4fB5ttIB/7Qt3j5wAOlmh/qLsCHN6DvNsWAHVfgEM4OKACoe4MdNgPNiAI6t4gB7B2wWCou4MdQL7zexUMdX+Iw/enG0UdD4dA/RHqkABUbTInFOqfMIcTYSALwqD+CnMAB49fONR/4Q4zjoMURED9GeHAAAaRDgAiv7uQ2AEAAA=="},"shape":[59],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3/3/8xLd77BkYGA58/rvF/j8QrPy4yf73///7izI2gvnXFm8gmv4F1Fe2b709jP77//98Kf219oToL0B7VsussieWBppfb8u1HGQPXvrr///ybI1L7WH0n///7R9WLbGnFv0DHF6L7CmlP4PDe6E9uTQkvOfbfwL6j2PNHHsAsTcnX9gBAAA="},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384354","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384355"}}},"glyph":{"type":"object","name":"Line","id":"p384350","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384351","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p384352","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p384363","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384357","attributes":{"selected":{"type":"object","name":"Selection","id":"p384358","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384359"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p384364","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384365"}}},"glyph":{"type":"object","name":"Line","id":"p384360","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384361","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384362","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p384302","attributes":{"tools":[{"id":"p384315"},{"id":"p384316"},{"id":"p384317"},{"id":"p384325"},{"type":"object","name":"SaveTool","id":"p384326"},{"id":"p384367"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p384310","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p384311","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p384312"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384313"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p384305","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p384306","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p384307"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384308"}}}],"center":[{"type":"object","name":"Grid","id":"p384309","attributes":{"axis":{"id":"p384305"}}},{"type":"object","name":"Grid","id":"p384314","attributes":{"dimension":1,"axis":{"id":"p384310"}}},{"type":"object","name":"Legend","id":"p384345","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p384346","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p384342"}]}},{"type":"object","name":"LegendItem","id":"p384356","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p384353"}]}},{"type":"object","name":"LegendItem","id":"p384366","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p384363"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p384368","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p384378","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p384370"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p384379"},"y_scale":{"type":"object","name":"LinearScale","id":"p384380"},"title":{"type":"object","name":"Title","id":"p384371","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p384409","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384403","attributes":{"selected":{"type":"object","name":"Selection","id":"p384404","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384405"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC/3v///4iW/32MPkP///v78oY6F9/4W4ptlJS+ztXVxC3uivhsujmwMA7YrMgWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384410","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384411"}}},"glyph":{"type":"object","name":"Line","id":"p384406","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384407","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384408","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p384418","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384412","attributes":{"selected":{"type":"object","name":"Selection","id":"p384413","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384414"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC/3v///4iW/32MPkP///v78oY6F9/4W4ptlJS+ztXVxC3uivhsujmwMA7YrMgWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384419","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384420"}}},"glyph":{"type":"object","name":"Line","id":"p384415","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384416","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p384417","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p384429","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384423","attributes":{"selected":{"type":"object","name":"Selection","id":"p384424","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384425"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC/3v///4iW/32MPkP///v78oY6F9/4W4ptlJS+ztXVxC3uivhsujmwMA7YrMgWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384430","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384431"}}},"glyph":{"type":"object","name":"Line","id":"p384426","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384427","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p384428","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p384439","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384433","attributes":{"selected":{"type":"object","name":"Selection","id":"p384434","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384435"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p384440","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384441"}}},"glyph":{"type":"object","name":"Line","id":"p384436","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384437","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p384438","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p384377","attributes":{"tools":[{"id":"p384391"},{"id":"p384392"},{"id":"p384393"},{"id":"p384401"},{"type":"object","name":"SaveTool","id":"p384402"},{"id":"p384443"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p384386","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p384387","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p384388"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384389"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p384381","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p384382"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p384383"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p384384"}}}],"center":[{"type":"object","name":"Grid","id":"p384385","attributes":{"axis":{"id":"p384381"}}},{"type":"object","name":"Grid","id":"p384390","attributes":{"dimension":1,"axis":{"id":"p384386"}}},{"type":"object","name":"Legend","id":"p384421","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p384422","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p384418"}]}},{"type":"object","name":"LegendItem","id":"p384432","attributes":{"label":{"type":"value","value":"Median Year (1964)"},"renderers":[{"id":"p384429"}]}},{"type":"object","name":"LegendItem","id":"p384442","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p384439"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p384454","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"91c406af-8980-4ba5-b1d6-5987a6775aba","roots":{"p384455":"ba6fb843-9727-4b7a-a1b1-18711482a710"},"root_ids":["p384455"]}];
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