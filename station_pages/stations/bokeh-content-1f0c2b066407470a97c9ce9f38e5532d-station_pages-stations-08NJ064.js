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
    
    
    const element = document.getElementById("d47d8969-ddff-4089-acc0-d7a590397a30");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd47d8969-ddff-4089-acc0-d7a590397a30' but no matching script tag was found.")
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
                  const docs_json = '{"b44b246d-556e-415e-8d9e-322c5a78b152":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p602705","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p602706"}}},"roots":[{"type":"object","name":"Column","id":"p602869","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p602866","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p602865","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p602858","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p602729"},{"type":"object","name":"PanTool","id":"p602805"}]}},{"type":"object","name":"ToolProxy","id":"p602859","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p602730","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p602806","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p602860","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p602731","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p602732","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p602738","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p602737","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p602807","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p602808","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p602814","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p602813","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p602861","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p602739"},{"type":"object","name":"ResetTool","id":"p602815"}]}},{"type":"object","name":"SaveTool","id":"p602862"},{"type":"object","name":"ToolProxy","id":"p602863","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p602781","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p602864","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p602857","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p602707","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p602708"},"y_range":{"type":"object","name":"DataRange1d","id":"p602709"},"x_scale":{"type":"object","name":"LinearScale","id":"p602717"},"y_scale":{"type":"object","name":"LogScale","id":"p602718"},"title":{"type":"object","name":"Title","id":"p602710","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p602747","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p602741","attributes":{"selected":{"type":"object","name":"Selection","id":"p602742","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p602743"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3vx//99/97p9i+gtFhMf9PWH1Ps3/3/b/+wCkE//f9/f1HGRHsY/aXldWE6V6/9VaA6jjU9OOkH////12pvs6cW/QvoTt+kBntc9LQqkTwr60r7bUD3lkyuIJPOgOobpSHhOPTCAZI+EqDpJMFeGJxuAsimARYnhQYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p602748","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p602749"}}},"glyph":{"type":"object","name":"Line","id":"p602744","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p602745","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p602746","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p602756","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p602750","attributes":{"selected":{"type":"object","name":"Selection","id":"p602751","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p602752"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3vx//99/97p9i+gtFhMf9PWH1Ps3/3/b/+wCkE//f9/f1HGRHsY/aXldWE6V6/9VaA6jjU9OOkH////12pvs6cW/QvoTt+kBntc9LQqkTwr60r7bUD3lkyuIJPOgOobpSHhOPTCAZI+EqDpJMFeGJxuAsimARYnhQYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p602757","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p602758"}}},"glyph":{"type":"object","name":"Line","id":"p602753","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p602754","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p602755","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p602767","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p602761","attributes":{"selected":{"type":"object","name":"Selection","id":"p602762","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p602763"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2TXUhUURSFjekHIkQShQETtczKmqYxtZkcZ43z7/zduXfm3qmwEAoqDB8CC4nABwNjgqBAojAQLHwQepB+SBAqJAMflIrAwKDwwSioMHrwoXPOXfMy3Hv32Xuvb61Tv7j9vmNkNVCv/v8GPtXEp1+tlsF+3ooLwwtD4eYdsN9XYGNgsunrs0p+r0a4ua98z0kn62pQWnGtn92oZX0dvs//+6FnG3huN0Rx7+W6Rp7fC8/1l+/v/Gpin/0w1aAD7HcQg6rgEPu6oM31jw563OzvhmgmNj/COR6oR0cL57Xghly/7yjntkIcFg1bOb8NUk3S38492jEjtlmeOMZ9vFDHy33cy4cvUt7Ace7Xgd/LE2OllQ7u6YdjRCro5L6dqG7btnPqSYB7A3dF97ESuD+wS+JGkDqCeCS6udaD1NOFw3LcZBd1hfA86XfO9oSoL4TgeJWYEKbOMN5J3HNh6o3AyEpgEeqO4LNc1xWl/ijOKUOj5BDDT3G6fzRGHjFcUYDi5BJHmfolyCcBJXc6QU7dEGK9t893k1c3HiggSXJLolHav5gkvxRU+XCKHFNQuLxp8kxjtmdNJChNrhkoXOMZ8s1gScbWzJJz1u63RSNvze57RiN3ze7/QiN/zZ5TmaMPOXvepRz9yGGzXP9tjr7k7PkNOv3RcUvm/ZpOn3Soa/RRp18GpDtTboO+GVDybxr0z8BDafc3gz7mIdPoDOTpZx775It7efqah7xtvX/y9LcAhS9doM8FqLg8LtDvAnzi88Imk76bUNftlEn/TbwWNKuemsyBCYW/wmIeLKRk3C5azIUF2W7ojcV8WPggr0ttkTkpQlSvzV8tMi9FnJb2LRWZmxP4D14sxL1wBAAA"},"shape":[142],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3vx//99/97p9i+g9Lv//+0fVk2xx0U//f9/f1HGRHt0+ipQH8eaHntS6Qf////Xam+zpxf9C+hP36QGe2LpbUD/lkyusKcNnQE1d5SGhO9oONA7HCD5IAGaHxC0MDifBNhTmwYApnonnHAEAAA="},"shape":[142],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p602768","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p602769"}}},"glyph":{"type":"object","name":"Line","id":"p602764","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p602765","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p602766","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p602777","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p602771","attributes":{"selected":{"type":"object","name":"Selection","id":"p602772","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p602773"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p602778","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p602779"}}},"glyph":{"type":"object","name":"Line","id":"p602774","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p602775","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p602776","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p602716","attributes":{"tools":[{"id":"p602729"},{"id":"p602730"},{"id":"p602731"},{"id":"p602739"},{"type":"object","name":"SaveTool","id":"p602740"},{"id":"p602781"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p602724","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p602725","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p602726"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p602727"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p602719","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p602720","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p602721"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p602722"}}}],"center":[{"type":"object","name":"Grid","id":"p602723","attributes":{"axis":{"id":"p602719"}}},{"type":"object","name":"Grid","id":"p602728","attributes":{"dimension":1,"axis":{"id":"p602724"}}},{"type":"object","name":"Legend","id":"p602759","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p602760","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p602756"}]}},{"type":"object","name":"LegendItem","id":"p602770","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p602767"}]}},{"type":"object","name":"LegendItem","id":"p602780","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p602777"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p602782","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p602792","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p602784"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p602793"},"y_scale":{"type":"object","name":"LinearScale","id":"p602794"},"title":{"type":"object","name":"Title","id":"p602785","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p602823","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p602817","attributes":{"selected":{"type":"object","name":"Selection","id":"p602818","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p602819"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ5KS3tWvHWqfWmQl2Z3U4f9PQHBRM3TBfZ86mW7vm1KsN/2///+kskZcBpdP4wPALznrlVgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p602824","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p602825"}}},"glyph":{"type":"object","name":"Line","id":"p602820","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p602821","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p602822","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p602832","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p602826","attributes":{"selected":{"type":"object","name":"Selection","id":"p602827","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p602828"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ5KS3tWvHWqfWmQl2Z3U4f9PQHBRM3TBfZ86mW7vm1KsN/2///+kskZcBpdP4wPALznrlVgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p602833","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p602834"}}},"glyph":{"type":"object","name":"Line","id":"p602829","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p602830","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p602831","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p602843","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p602837","attributes":{"selected":{"type":"object","name":"Selection","id":"p602838","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p602839"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ5KS3tWvHWqfWmQl2Z3U4f9PQHBRM3TBfZ86mW7vm1KsN/2///+kskZcBpdP4wPALznrlVgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p602844","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p602845"}}},"glyph":{"type":"object","name":"Line","id":"p602840","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p602841","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p602842","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p602853","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p602847","attributes":{"selected":{"type":"object","name":"Selection","id":"p602848","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p602849"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p602854","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p602855"}}},"glyph":{"type":"object","name":"Line","id":"p602850","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p602851","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p602852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p602791","attributes":{"tools":[{"id":"p602805"},{"id":"p602806"},{"id":"p602807"},{"id":"p602815"},{"type":"object","name":"SaveTool","id":"p602816"},{"id":"p602857"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p602800","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p602801","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p602802"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p602803"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p602795","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p602796"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p602797"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p602798"}}}],"center":[{"type":"object","name":"Grid","id":"p602799","attributes":{"axis":{"id":"p602795"}}},{"type":"object","name":"Grid","id":"p602804","attributes":{"dimension":1,"axis":{"id":"p602800"}}},{"type":"object","name":"Legend","id":"p602835","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p602836","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p602832"}]}},{"type":"object","name":"LegendItem","id":"p602846","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p602843"}]}},{"type":"object","name":"LegendItem","id":"p602856","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p602853"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p602868","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b44b246d-556e-415e-8d9e-322c5a78b152","roots":{"p602869":"d47d8969-ddff-4089-acc0-d7a590397a30"},"root_ids":["p602869"]}];
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