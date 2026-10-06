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
    
    
    const element = document.getElementById("a950e3c4-43fc-4d02-9672-a1bdf7c62830");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a950e3c4-43fc-4d02-9672-a1bdf7c62830' but no matching script tag was found.")
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
                  const docs_json = '{"e7b4fdfc-6334-472b-8ff3-bdfb4d7c7de6":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p799125","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p799126"}}},"roots":[{"type":"object","name":"Column","id":"p799289","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p799286","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p799285","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p799278","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p799149"},{"type":"object","name":"PanTool","id":"p799225"}]}},{"type":"object","name":"ToolProxy","id":"p799279","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p799150","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p799226","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p799280","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p799151","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p799152","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p799158","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p799157","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p799227","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p799228","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p799234","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p799233","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p799281","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p799159"},{"type":"object","name":"ResetTool","id":"p799235"}]}},{"type":"object","name":"SaveTool","id":"p799282"},{"type":"object","name":"ToolProxy","id":"p799283","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p799201","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p799284","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p799277","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p799127","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p799128"},"y_range":{"type":"object","name":"DataRange1d","id":"p799129"},"x_scale":{"type":"object","name":"LinearScale","id":"p799137"},"y_scale":{"type":"object","name":"LogScale","id":"p799138"},"title":{"type":"object","name":"Title","id":"p799130","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p799167","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p799161","attributes":{"selected":{"type":"object","name":"Selection","id":"p799162","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p799163"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3vx//99/97p9i+gtFhMf9PWH1Ps3/3/b/+wCkE//f9/f1HGRHsY/aXldWE6V6/9VaA6jjU9OOkH////12pvs6cW/QvoTt+kBntc9LQqkTwr60r7bUD3lkyuIJPOgOobpSHhOPTCAZI+EqDpJMFeGJxuAsimARYnhQYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p799168","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p799169"}}},"glyph":{"type":"object","name":"Line","id":"p799164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p799165","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p799166","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p799176","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p799170","attributes":{"selected":{"type":"object","name":"Selection","id":"p799171","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p799172"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3vx//99/97p9i+gtFhMf9PWH1Ps3/3/b/+wCkE//f9/f1HGRHsY/aXldWE6V6/9VaA6jjU9OOkH////12pvs6cW/QvoTt+kBntc9LQqkTwr60r7bUD3lkyuIJPOgOobpSHhOPTCAZI+EqDpJMFeGJxuAsimARYnhQYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p799177","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p799178"}}},"glyph":{"type":"object","name":"Line","id":"p799173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p799174","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p799175","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p799187","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p799181","attributes":{"selected":{"type":"object","name":"Selection","id":"p799182","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p799183"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2TXUhUURSFjekHIkQShQETtczKmqYxtZkcZ43z7/zduXfm3qmwEAoqDB8CC4nABwNjgqBAojAQLHwQepB+SBAqJAMflIrAwKDwwSioMHrwoXPOXfMy3Hv32Xuvb61Tv7j9vmNkNVCv/v8GPtXEp1+tlsF+3ooLwwtD4eYdsN9XYGNgsunrs0p+r0a4ua98z0kn62pQWnGtn92oZX0dvs//+6FnG3huN0Rx7+W6Rp7fC8/1l+/v/Gpin/0w1aAD7HcQg6rgEPu6oM31jw563OzvhmgmNj/COR6oR0cL57Xghly/7yjntkIcFg1bOb8NUk3S38492jEjtlmeOMZ9vFDHy33cy4cvUt7Ace7Xgd/LE2OllQ7u6YdjRCro5L6dqG7btnPqSYB7A3dF97ESuD+wS+JGkDqCeCS6udaD1NOFw3LcZBd1hfA86XfO9oSoL4TgeJWYEKbOMN5J3HNh6o3AyEpgEeqO4LNc1xWl/ijOKUOj5BDDT3G6fzRGHjFcUYDi5BJHmfolyCcBJXc6QU7dEGK9t893k1c3HiggSXJLolHav5gkvxRU+XCKHFNQuLxp8kxjtmdNJChNrhkoXOMZ8s1gScbWzJJz1u63RSNvze57RiN3ze7/QiN/zZ5TmaMPOXvepRz9yGGzXP9tjr7k7PkNOv3RcUvm/ZpOn3Soa/RRp18GpDtTboO+GVDybxr0z8BDafc3gz7mIdPoDOTpZx775It7efqah7xtvX/y9LcAhS9doM8FqLg8LtDvAnzi88Imk76bUNftlEn/TbwWNKuemsyBCYW/wmIeLKRk3C5azIUF2W7ojcV8WPggr0ttkTkpQlSvzV8tMi9FnJb2LRWZmxP4D14sxL1wBAAA"},"shape":[142],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3vx//99/97p9i+g9Lv//+0fVk2xx0U//f9/f1HGRHt0+ipQH8eaHntS6Qf////Xam+zpxf9C+hP36QGe2LpbUD/lkyusKcNnQE1d5SGhO9oONA7HCD5IAGaHxC0MDifBNhTmwYApnonnHAEAAA="},"shape":[142],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p799188","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p799189"}}},"glyph":{"type":"object","name":"Line","id":"p799184","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p799185","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p799186","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p799197","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p799191","attributes":{"selected":{"type":"object","name":"Selection","id":"p799192","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p799193"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p799198","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p799199"}}},"glyph":{"type":"object","name":"Line","id":"p799194","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p799195","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p799196","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p799136","attributes":{"tools":[{"id":"p799149"},{"id":"p799150"},{"id":"p799151"},{"id":"p799159"},{"type":"object","name":"SaveTool","id":"p799160"},{"id":"p799201"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p799144","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p799145","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p799146"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p799147"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p799139","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p799140","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p799141"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p799142"}}}],"center":[{"type":"object","name":"Grid","id":"p799143","attributes":{"axis":{"id":"p799139"}}},{"type":"object","name":"Grid","id":"p799148","attributes":{"dimension":1,"axis":{"id":"p799144"}}},{"type":"object","name":"Legend","id":"p799179","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p799180","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p799176"}]}},{"type":"object","name":"LegendItem","id":"p799190","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p799187"}]}},{"type":"object","name":"LegendItem","id":"p799200","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p799197"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p799202","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p799212","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p799204"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p799213"},"y_scale":{"type":"object","name":"LinearScale","id":"p799214"},"title":{"type":"object","name":"Title","id":"p799205","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p799243","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p799237","attributes":{"selected":{"type":"object","name":"Selection","id":"p799238","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p799239"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ5KS3tWvHWqfWmQl2Z3U4f9PQHBRM3TBfZ86mW7vm1KsN/2///+kskZcBpdP4wPALznrlVgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p799244","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p799245"}}},"glyph":{"type":"object","name":"Line","id":"p799240","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p799241","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p799242","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p799252","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p799246","attributes":{"selected":{"type":"object","name":"Selection","id":"p799247","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p799248"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ5KS3tWvHWqfWmQl2Z3U4f9PQHBRM3TBfZ86mW7vm1KsN/2///+kskZcBpdP4wPALznrlVgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p799253","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p799254"}}},"glyph":{"type":"object","name":"Line","id":"p799249","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p799250","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p799251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p799263","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p799257","attributes":{"selected":{"type":"object","name":"Selection","id":"p799258","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p799259"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ5KS3tWvHWqfWmQl2Z3U4f9PQHBRM3TBfZ86mW7vm1KsN/2///+kskZcBpdP4wPALznrlVgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p799264","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p799265"}}},"glyph":{"type":"object","name":"Line","id":"p799260","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p799261","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p799262","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p799273","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p799267","attributes":{"selected":{"type":"object","name":"Selection","id":"p799268","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p799269"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p799274","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p799275"}}},"glyph":{"type":"object","name":"Line","id":"p799270","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p799271","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p799272","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p799211","attributes":{"tools":[{"id":"p799225"},{"id":"p799226"},{"id":"p799227"},{"id":"p799235"},{"type":"object","name":"SaveTool","id":"p799236"},{"id":"p799277"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p799220","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p799221","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p799222"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p799223"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p799215","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p799216"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p799217"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p799218"}}}],"center":[{"type":"object","name":"Grid","id":"p799219","attributes":{"axis":{"id":"p799215"}}},{"type":"object","name":"Grid","id":"p799224","attributes":{"dimension":1,"axis":{"id":"p799220"}}},{"type":"object","name":"Legend","id":"p799255","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p799256","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p799252"}]}},{"type":"object","name":"LegendItem","id":"p799266","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p799263"}]}},{"type":"object","name":"LegendItem","id":"p799276","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p799273"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p799288","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"e7b4fdfc-6334-472b-8ff3-bdfb4d7c7de6","roots":{"p799289":"a950e3c4-43fc-4d02-9672-a1bdf7c62830"},"root_ids":["p799289"]}];
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