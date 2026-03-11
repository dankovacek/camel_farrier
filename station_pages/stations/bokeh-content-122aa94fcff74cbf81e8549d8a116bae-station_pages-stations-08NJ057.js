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
    
    
    const element = document.getElementById("e6b66d6a-690e-4bc6-b4ff-11f960927b1e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e6b66d6a-690e-4bc6-b4ff-11f960927b1e' but no matching script tag was found.")
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
                  const docs_json = '{"2c77cf41-902a-478c-9079-2c6e5336f81c":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p798387","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p798388"}}},"roots":[{"type":"object","name":"Column","id":"p798551","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p798548","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p798547","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p798540","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p798411"},{"type":"object","name":"PanTool","id":"p798487"}]}},{"type":"object","name":"ToolProxy","id":"p798541","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p798412","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p798488","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p798542","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p798413","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p798414","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p798420","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p798419","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p798489","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p798490","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p798496","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p798495","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p798543","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p798421"},{"type":"object","name":"ResetTool","id":"p798497"}]}},{"type":"object","name":"SaveTool","id":"p798544"},{"type":"object","name":"ToolProxy","id":"p798545","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p798463","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p798546","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p798539","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p798389","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p798390"},"y_range":{"type":"object","name":"DataRange1d","id":"p798391"},"x_scale":{"type":"object","name":"LinearScale","id":"p798399"},"y_scale":{"type":"object","name":"LogScale","id":"p798400"},"title":{"type":"object","name":"Title","id":"p798392","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p798429","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798423","attributes":{"selected":{"type":"object","name":"Selection","id":"p798424","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798425"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+18EaGEwHTBKj9IjkgYAhSUjFygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798430","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798431"}}},"glyph":{"type":"object","name":"Line","id":"p798426","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798427","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p798428","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p798438","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798432","attributes":{"selected":{"type":"object","name":"Selection","id":"p798433","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798434"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+18EaGEwHTBKj9IjkgYAhSUjFygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798439","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798440"}}},"glyph":{"type":"object","name":"Line","id":"p798435","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798436","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p798437","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p798449","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798443","attributes":{"selected":{"type":"object","name":"Selection","id":"p798444","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798445"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SeUhUURjFsxVDKpMKyTYzcyop12xsmjPO6IzjbG/ezLxnVkQSEkVESBEhWVm020aIbYRIEhFFRUhlIUWEtBK2F0mISGELmURE917P+2eY+937fef8zlexe8yrr1e67RXqt99+7/PoVRtHxGHw/0j8mD0+sGZFAgbPE3H4esKUy2+TWJ+IdGPcsbl7knkvBbcHkuLP507j/RmwPNpvP7Ihle9m4tfpg38el8zi+3TcXV8vKhnsY8EBcdv7cw77zYM6fpjJvvNxVFS7ggvYPwu/zY6ncTezOCcbyx2+S9PTczgvB+2qkMu5eciQbf/mcX4+DonTmqqF1FEA0Tzt1PMC6lmEctneZqUuK+5c1T6+bimkvsUQl28NJNmo04Z9dXrjpG1LqNeOb+tebM7vtVM3cEF9oH4HPkxdm2xd6aAPBxJlmwlF9FME56gv/WZHEX05sWnrxdU9tU76c6KlTw5w0acL7yozxRMX/RZjrHB54lwxfRdDtTFK6L8E1cq4mxzcEIz/udrd5OHBGzXAQy4eyKmVmaXkUwqFpauUnLwQmbTuaPCSlxfNW74LUmXkVgYlZ5iP/HxIkCm2+sjRD1tntpDkJ08/FLa0ALkG0NQmGwXIN4iX8np9kJyD2CWvpYbIO4QzEkNNiNxDuPFgqXAeIn8Nz4TqzmyNOWjoLZws0GnMQ8NwBVxjLmEo+84w8wkjXz0IM6cwQspImHnpEND31uk6c9Oxs2GZqOjMT4eyHR9hjhGo48oI84zgiUilqS3CXCPoqX0vlEaZbxRDpfzqKHOOIkUVosw7ChWnJcbcYwgoQTHmH0OVAhrjHhjYLttbDe6DgZOC5qfjBvfCwDUZY5/B/TChMHhN7omJ7vtnPQXNJvfFxBD1leM/J8WXB2gEAAA="},"shape":[141],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QE+19E0sJgOmCUHqVH6VGaaBoAVLclcmgEAAA="},"shape":[141],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798450","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798451"}}},"glyph":{"type":"object","name":"Line","id":"p798446","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798447","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p798448","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p798459","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798453","attributes":{"selected":{"type":"object","name":"Selection","id":"p798454","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798455"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p798460","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798461"}}},"glyph":{"type":"object","name":"Line","id":"p798456","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798457","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p798458","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p798398","attributes":{"tools":[{"id":"p798411"},{"id":"p798412"},{"id":"p798413"},{"id":"p798421"},{"type":"object","name":"SaveTool","id":"p798422"},{"id":"p798463"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p798406","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p798407","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p798408"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p798409"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p798401","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p798402","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p798403"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p798404"}}}],"center":[{"type":"object","name":"Grid","id":"p798405","attributes":{"axis":{"id":"p798401"}}},{"type":"object","name":"Grid","id":"p798410","attributes":{"dimension":1,"axis":{"id":"p798406"}}},{"type":"object","name":"Legend","id":"p798441","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p798442","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p798438"}]}},{"type":"object","name":"LegendItem","id":"p798452","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p798449"}]}},{"type":"object","name":"LegendItem","id":"p798462","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p798459"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p798464","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p798474","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p798466"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p798475"},"y_scale":{"type":"object","name":"LinearScale","id":"p798476"},"title":{"type":"object","name":"Title","id":"p798467","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p798505","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798499","attributes":{"selected":{"type":"object","name":"Selection","id":"p798500","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798501"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46GPq6x0v9YXaC///f983KQAnjUs/AJZ4qUpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798506","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798507"}}},"glyph":{"type":"object","name":"Line","id":"p798502","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798503","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p798504","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p798514","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798508","attributes":{"selected":{"type":"object","name":"Selection","id":"p798509","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798510"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46GPq6x0v9YXaC///f983KQAnjUs/AJZ4qUpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798515","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798516"}}},"glyph":{"type":"object","name":"Line","id":"p798511","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798512","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p798513","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p798525","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798519","attributes":{"selected":{"type":"object","name":"Selection","id":"p798520","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798521"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46GPq6x0v9YXaC///f983KQAnjUs/AJZ4qUpgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p798526","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798527"}}},"glyph":{"type":"object","name":"Line","id":"p798522","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798523","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p798524","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p798535","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p798529","attributes":{"selected":{"type":"object","name":"Selection","id":"p798530","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p798531"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p798536","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p798537"}}},"glyph":{"type":"object","name":"Line","id":"p798532","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p798533","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p798534","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p798473","attributes":{"tools":[{"id":"p798487"},{"id":"p798488"},{"id":"p798489"},{"id":"p798497"},{"type":"object","name":"SaveTool","id":"p798498"},{"id":"p798539"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p798482","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p798483","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p798484"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p798485"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p798477","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p798478"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p798479"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p798480"}}}],"center":[{"type":"object","name":"Grid","id":"p798481","attributes":{"axis":{"id":"p798477"}}},{"type":"object","name":"Grid","id":"p798486","attributes":{"dimension":1,"axis":{"id":"p798482"}}},{"type":"object","name":"Legend","id":"p798517","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p798518","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p798514"}]}},{"type":"object","name":"LegendItem","id":"p798528","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p798525"}]}},{"type":"object","name":"LegendItem","id":"p798538","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p798535"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p798550","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"2c77cf41-902a-478c-9079-2c6e5336f81c","roots":{"p798551":"e6b66d6a-690e-4bc6-b4ff-11f960927b1e"},"root_ids":["p798551"]}];
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