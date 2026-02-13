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
    
    
    const element = document.getElementById("a6ef48ec-5ebe-466d-a710-e4cc8e99d8f8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a6ef48ec-5ebe-466d-a710-e4cc8e99d8f8' but no matching script tag was found.")
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
                  const docs_json = '{"7b21e5be-b235-47de-8bd9-06404dedd5a4":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p798858","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p798859"}}},"roots":[{"type":"object","name":"Column","id":"p799022","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p799019","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p799018","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p799011","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p798882"},{"type":"object","name":"PanTool","id":"p798958"}]}},{"type":"object","name":"ToolProxy","id":"p799012","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p798883","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p798959","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p799013","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p798884","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p798885","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p798891","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p798890","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p798960","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p798961","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p798967","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p798966","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p799014","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p798892"},{"type":"object","name":"ResetTool","id":"p798968"}]}},{"type":"object","name":"SaveTool","id":"p799015"},{"type":"object","name":"ToolProxy","id":"p799016","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p798934","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p799017","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p799010","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p798860","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p798861"},"y_range":{"type":"object","name":"DataRange1d","id":"p798862"},"x_scale":{"type":"object","name":"LinearScale","id":"p798870"},"y_scale":{"type":"object","name":"LogScale","id":"p798871"},"title":{"type":"object","name":"Title","id":"p798863","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p798900","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798894","attributes":{"selected":{"type":"object","name":"Selection","id":"p798895","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798896"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+18EaGEwHTBKj9IjkgYAhSUjFygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798901","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798902"}}},"glyph":{"type":"object","name":"Line","id":"p798897","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798898","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p798899","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p798909","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798903","attributes":{"selected":{"type":"object","name":"Selection","id":"p798904","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798905"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+18EaGEwHTBKj9IjkgYAhSUjFygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798910","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798911"}}},"glyph":{"type":"object","name":"Line","id":"p798906","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798907","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p798908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p798920","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798914","attributes":{"selected":{"type":"object","name":"Selection","id":"p798915","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798916"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SeUhUURjFsxVDKpMKyTYzcyop12xsmjPO6IzjbG/ezLxnVkQSEkVESBEhWVm020aIbYRIEhFFRUhlIUWEtBK2F0mISGELmURE917P+2eY+937fef8zlexe8yrr1e67RXqt99+7/PoVRtHxGHw/0j8mD0+sGZFAgbPE3H4esKUy2+TWJ+IdGPcsbl7knkvBbcHkuLP507j/RmwPNpvP7Ihle9m4tfpg38el8zi+3TcXV8vKhnsY8EBcdv7cw77zYM6fpjJvvNxVFS7ggvYPwu/zY6ncTezOCcbyx2+S9PTczgvB+2qkMu5eciQbf/mcX4+DonTmqqF1FEA0Tzt1PMC6lmEctneZqUuK+5c1T6+bimkvsUQl28NJNmo04Z9dXrjpG1LqNeOb+tebM7vtVM3cEF9oH4HPkxdm2xd6aAPBxJlmwlF9FME56gv/WZHEX05sWnrxdU9tU76c6KlTw5w0acL7yozxRMX/RZjrHB54lwxfRdDtTFK6L8E1cq4mxzcEIz/udrd5OHBGzXAQy4eyKmVmaXkUwqFpauUnLwQmbTuaPCSlxfNW74LUmXkVgYlZ5iP/HxIkCm2+sjRD1tntpDkJ08/FLa0ALkG0NQmGwXIN4iX8np9kJyD2CWvpYbIO4QzEkNNiNxDuPFgqXAeIn8Nz4TqzmyNOWjoLZws0GnMQ8NwBVxjLmEo+84w8wkjXz0IM6cwQspImHnpEND31uk6c9Oxs2GZqOjMT4eyHR9hjhGo48oI84zgiUilqS3CXCPoqX0vlEaZbxRDpfzqKHOOIkUVosw7ChWnJcbcYwgoQTHmH0OVAhrjHhjYLttbDe6DgZOC5qfjBvfCwDUZY5/B/TChMHhN7omJ7vtnPQXNJvfFxBD1leM/J8WXB2gEAAA="},"shape":[141],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+19E0sJgOmCUHqVH6VGaaBoAVLclcmgEAAA="},"shape":[141],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798921","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798922"}}},"glyph":{"type":"object","name":"Line","id":"p798917","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p798919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p798930","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798924","attributes":{"selected":{"type":"object","name":"Selection","id":"p798925","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798926"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p798931","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798932"}}},"glyph":{"type":"object","name":"Line","id":"p798927","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p798929","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p798869","attributes":{"tools":[{"id":"p798882"},{"id":"p798883"},{"id":"p798884"},{"id":"p798892"},{"type":"object","name":"SaveTool","id":"p798893"},{"id":"p798934"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p798877","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p798878","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p798879"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p798880"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p798872","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p798873","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p798874"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p798875"}}}],"center":[{"type":"object","name":"Grid","id":"p798876","attributes":{"axis":{"id":"p798872"}}},{"type":"object","name":"Grid","id":"p798881","attributes":{"dimension":1,"axis":{"id":"p798877"}}},{"type":"object","name":"Legend","id":"p798912","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p798913","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p798909"}]}},{"type":"object","name":"LegendItem","id":"p798923","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p798920"}]}},{"type":"object","name":"LegendItem","id":"p798933","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p798930"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p798935","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p798945","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p798937"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p798946"},"y_scale":{"type":"object","name":"LinearScale","id":"p798947"},"title":{"type":"object","name":"Title","id":"p798938","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p798976","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798970","attributes":{"selected":{"type":"object","name":"Selection","id":"p798971","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798972"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46GPq6x0v9YXaC///f983KQAnjUs/AJZ4qUpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798977","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798978"}}},"glyph":{"type":"object","name":"Line","id":"p798973","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798974","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p798975","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p798985","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798979","attributes":{"selected":{"type":"object","name":"Selection","id":"p798980","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798981"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46GPq6x0v9YXaC///f983KQAnjUs/AJZ4qUpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798986","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798987"}}},"glyph":{"type":"object","name":"Line","id":"p798982","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798983","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p798984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p798996","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798990","attributes":{"selected":{"type":"object","name":"Selection","id":"p798991","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798992"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46GPq6x0v9YXaC///f983KQAnjUs/AJZ4qUpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798997","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798998"}}},"glyph":{"type":"object","name":"Line","id":"p798993","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798994","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p798995","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p799006","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p799000","attributes":{"selected":{"type":"object","name":"Selection","id":"p799001","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p799002"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p799007","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p799008"}}},"glyph":{"type":"object","name":"Line","id":"p799003","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p799004","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p799005","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p798944","attributes":{"tools":[{"id":"p798958"},{"id":"p798959"},{"id":"p798960"},{"id":"p798968"},{"type":"object","name":"SaveTool","id":"p798969"},{"id":"p799010"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p798953","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p798954","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p798955"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p798956"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p798948","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p798949"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p798950"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p798951"}}}],"center":[{"type":"object","name":"Grid","id":"p798952","attributes":{"axis":{"id":"p798948"}}},{"type":"object","name":"Grid","id":"p798957","attributes":{"dimension":1,"axis":{"id":"p798953"}}},{"type":"object","name":"Legend","id":"p798988","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p798989","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p798985"}]}},{"type":"object","name":"LegendItem","id":"p798999","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p798996"}]}},{"type":"object","name":"LegendItem","id":"p799009","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p799006"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p799021","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"7b21e5be-b235-47de-8bd9-06404dedd5a4","roots":{"p799022":"a6ef48ec-5ebe-466d-a710-e4cc8e99d8f8"},"root_ids":["p799022"]}];
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