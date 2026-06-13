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
    
    
    const element = document.getElementById("b8f69891-5af5-43ba-aa33-2adc2688f424");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b8f69891-5af5-43ba-aa33-2adc2688f424' but no matching script tag was found.")
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
                  const docs_json = '{"80b7903f-855c-4c72-a37b-03c9b4c8d7b6":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p601834","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p601835"}}},"roots":[{"type":"object","name":"Column","id":"p601998","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p601995","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p601994","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p601987","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p601858"},{"type":"object","name":"PanTool","id":"p601934"}]}},{"type":"object","name":"ToolProxy","id":"p601988","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p601859","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p601935","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p601989","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p601860","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p601861","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p601867","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p601866","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p601936","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p601937","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p601943","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p601942","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p601990","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p601868"},{"type":"object","name":"ResetTool","id":"p601944"}]}},{"type":"object","name":"SaveTool","id":"p601991"},{"type":"object","name":"ToolProxy","id":"p601992","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p601910","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p601993","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p601986","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p601836","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p601837"},"y_range":{"type":"object","name":"DataRange1d","id":"p601838"},"x_scale":{"type":"object","name":"LinearScale","id":"p601846"},"y_scale":{"type":"object","name":"LogScale","id":"p601847"},"title":{"type":"object","name":"Title","id":"p601839","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p601876","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p601870","attributes":{"selected":{"type":"object","name":"Selection","id":"p601871","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p601872"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3vx//99/97p9i+gtFhMf9PWH1Ps3/3/b/+wCkE//f9/f1HGRHsY/aXldWE6V6/9VaA6jjU9OOkH////12pvs6cW/QvoTt+kBntc9LQqkTwr60r7bUD3lkyuIJPOgOobpSHhOPTCAZI+EqDpJMFeGJxuAsimARYnhQYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p601877","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p601878"}}},"glyph":{"type":"object","name":"Line","id":"p601873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p601874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p601875","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p601885","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p601879","attributes":{"selected":{"type":"object","name":"Selection","id":"p601880","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p601881"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3vx//99/97p9i+gtFhMf9PWH1Ps3/3/b/+wCkE//f9/f1HGRHsY/aXldWE6V6/9VaA6jjU9OOkH////12pvs6cW/QvoTt+kBntc9LQqkTwr60r7bUD3lkyuIJPOgOobpSHhOPTCAZI+EqDpJMFeGJxuAsimARYnhQYoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p601886","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p601887"}}},"glyph":{"type":"object","name":"Line","id":"p601882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p601883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p601884","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p601896","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p601890","attributes":{"selected":{"type":"object","name":"Selection","id":"p601891","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p601892"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2TXUhUURSFjekHIkQShQETtczKmqYxtZkcZ43z7/zduXfm3qmwEAoqDB8CC4nABwNjgqBAojAQLHwQepB+SBAqJAMflIrAwKDwwSioMHrwoXPOXfMy3Hv32Xuvb61Tv7j9vmNkNVCv/v8GPtXEp1+tlsF+3ooLwwtD4eYdsN9XYGNgsunrs0p+r0a4ua98z0kn62pQWnGtn92oZX0dvs//+6FnG3huN0Rx7+W6Rp7fC8/1l+/v/Gpin/0w1aAD7HcQg6rgEPu6oM31jw563OzvhmgmNj/COR6oR0cL57Xghly/7yjntkIcFg1bOb8NUk3S38492jEjtlmeOMZ9vFDHy33cy4cvUt7Ace7Xgd/LE2OllQ7u6YdjRCro5L6dqG7btnPqSYB7A3dF97ESuD+wS+JGkDqCeCS6udaD1NOFw3LcZBd1hfA86XfO9oSoL4TgeJWYEKbOMN5J3HNh6o3AyEpgEeqO4LNc1xWl/ijOKUOj5BDDT3G6fzRGHjFcUYDi5BJHmfolyCcBJXc6QU7dEGK9t893k1c3HiggSXJLolHav5gkvxRU+XCKHFNQuLxp8kxjtmdNJChNrhkoXOMZ8s1gScbWzJJz1u63RSNvze57RiN3ze7/QiN/zZ5TmaMPOXvepRz9yGGzXP9tjr7k7PkNOv3RcUvm/ZpOn3Soa/RRp18GpDtTboO+GVDybxr0z8BDafc3gz7mIdPoDOTpZx775It7efqah7xtvX/y9LcAhS9doM8FqLg8LtDvAnzi88Imk76bUNftlEn/TbwWNKuemsyBCYW/wmIeLKRk3C5azIUF2W7ojcV8WPggr0ttkTkpQlSvzV8tMi9FnJb2LRWZmxP4D14sxL1wBAAA"},"shape":[142],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3vx//99/97p9i+g9Lv//+0fVk2xx0U//f9/f1HGRHt0+ipQH8eaHntS6Qf////Xam+zpxf9C+hP36QGe2LpbUD/lkyusKcNnQE1d5SGhO9oONA7HCD5IAGaHxC0MDifBNhTmwYApnonnHAEAAA="},"shape":[142],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p601897","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p601898"}}},"glyph":{"type":"object","name":"Line","id":"p601893","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p601894","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p601895","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p601906","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p601900","attributes":{"selected":{"type":"object","name":"Selection","id":"p601901","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p601902"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p601907","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p601908"}}},"glyph":{"type":"object","name":"Line","id":"p601903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p601904","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p601905","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p601845","attributes":{"tools":[{"id":"p601858"},{"id":"p601859"},{"id":"p601860"},{"id":"p601868"},{"type":"object","name":"SaveTool","id":"p601869"},{"id":"p601910"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p601853","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p601854","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p601855"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p601856"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p601848","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p601849","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p601850"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p601851"}}}],"center":[{"type":"object","name":"Grid","id":"p601852","attributes":{"axis":{"id":"p601848"}}},{"type":"object","name":"Grid","id":"p601857","attributes":{"dimension":1,"axis":{"id":"p601853"}}},{"type":"object","name":"Legend","id":"p601888","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p601889","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p601885"}]}},{"type":"object","name":"LegendItem","id":"p601899","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p601896"}]}},{"type":"object","name":"LegendItem","id":"p601909","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p601906"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p601911","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p601921","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p601913"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p601922"},"y_scale":{"type":"object","name":"LinearScale","id":"p601923"},"title":{"type":"object","name":"Title","id":"p601914","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p601952","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p601946","attributes":{"selected":{"type":"object","name":"Selection","id":"p601947","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p601948"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ5KS3tWvHWqfWmQl2Z3U4f9PQHBRM3TBfZ86mW7vm1KsN/2///+kskZcBpdP4wPALznrlVgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p601953","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p601954"}}},"glyph":{"type":"object","name":"Line","id":"p601949","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p601950","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p601951","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p601961","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p601955","attributes":{"selected":{"type":"object","name":"Selection","id":"p601956","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p601957"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ5KS3tWvHWqfWmQl2Z3U4f9PQHBRM3TBfZ86mW7vm1KsN/2///+kskZcBpdP4wPALznrlVgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p601962","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p601963"}}},"glyph":{"type":"object","name":"Line","id":"p601958","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p601959","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p601960","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p601972","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p601966","attributes":{"selected":{"type":"object","name":"Selection","id":"p601967","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p601968"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiQ5KS3tWvHWqfWmQl2Z3U4f9PQHBRM3TBfZ86mW7vm1KsN/2///+kskZcBpdP4wPALznrlVgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p601973","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p601974"}}},"glyph":{"type":"object","name":"Line","id":"p601969","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p601970","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p601971","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p601982","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p601976","attributes":{"selected":{"type":"object","name":"Selection","id":"p601977","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p601978"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p601983","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p601984"}}},"glyph":{"type":"object","name":"Line","id":"p601979","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p601980","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p601981","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p601920","attributes":{"tools":[{"id":"p601934"},{"id":"p601935"},{"id":"p601936"},{"id":"p601944"},{"type":"object","name":"SaveTool","id":"p601945"},{"id":"p601986"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p601929","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p601930","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p601931"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p601932"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p601924","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p601925"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p601926"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p601927"}}}],"center":[{"type":"object","name":"Grid","id":"p601928","attributes":{"axis":{"id":"p601924"}}},{"type":"object","name":"Grid","id":"p601933","attributes":{"dimension":1,"axis":{"id":"p601929"}}},{"type":"object","name":"Legend","id":"p601964","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p601965","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p601961"}]}},{"type":"object","name":"LegendItem","id":"p601975","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p601972"}]}},{"type":"object","name":"LegendItem","id":"p601985","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p601982"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p601997","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"80b7903f-855c-4c72-a37b-03c9b4c8d7b6","roots":{"p601998":"b8f69891-5af5-43ba-aa33-2adc2688f424"},"root_ids":["p601998"]}];
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