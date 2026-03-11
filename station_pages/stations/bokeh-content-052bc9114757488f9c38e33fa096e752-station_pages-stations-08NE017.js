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
    
    
    const element = document.getElementById("ac7dbc6a-991b-4e47-8858-a530718fe25b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ac7dbc6a-991b-4e47-8858-a530718fe25b' but no matching script tag was found.")
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
                  const docs_json = '{"92405dfa-42ac-4c38-87fc-e81c0be48f57":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p665267","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p665268"}}},"roots":[{"type":"object","name":"Column","id":"p665431","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p665428","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p665427","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p665420","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p665291"},{"type":"object","name":"PanTool","id":"p665367"}]}},{"type":"object","name":"ToolProxy","id":"p665421","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p665292","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p665368","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p665422","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p665293","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p665294","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p665300","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p665299","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p665369","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p665370","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p665376","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p665375","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p665423","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p665301"},{"type":"object","name":"ResetTool","id":"p665377"}]}},{"type":"object","name":"SaveTool","id":"p665424"},{"type":"object","name":"ToolProxy","id":"p665425","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p665343","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p665426","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p665419","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p665269","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p665270"},"y_range":{"type":"object","name":"DataRange1d","id":"p665271"},"x_scale":{"type":"object","name":"LinearScale","id":"p665279"},"y_scale":{"type":"object","name":"LogScale","id":"p665280"},"title":{"type":"object","name":"Title","id":"p665272","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p665309","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665303","attributes":{"selected":{"type":"object","name":"Selection","id":"p665304","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665305"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NkYHAwNtZ2SE9LW1fwV8uBkYFhwutALYf///+zrzuu6cDAwJCQloZCL5g5Ux2DBqp33zFPDcQvSEtTdTh75swWuVYVh7S0tGNKt5Udzpw5E5Jirewwa+bMk75KSiD1/YdKFUHyaptkFUDqZdga5UHyN/15wXSj/VZZkHkH5FqlQPImWzwkgW41Zl4zRwIkv9GzRxzkbrW7KuIgdRrGm8XA7uw/JAqSL7TlEgXL3/4p5DATaN5LNUGQvIHxZgGQ/M8aewEQ34HrOj/IXOdOR36H2TNndjom8Dgwgf3B4ZCRltYmdpMFpH6nHCsTKHwYwvj+24P0Paz6g0xz6G76bQ/0lz7Hmh/2RsBAvavyDSTe8DrwCwYN9M+e+VJf7IHuuvk9+DPYHGNj3DRQ3ca57z+B9OncVflkD3THiyqRjyAaCD7YA9157XnWO/vUtLRnxVvfgtxxf3HBW5D+Bc7db0D0jNLCNyBzOHU3vbYH+lf5UcRre2D4pPl+fgWSfxC4A0x/yNJ+ZQ+ML5uEpy9B8mpsjS/tQfFUyvQSJL/B/eELEH0iaNoLexNjY+ELLi9A7iqR5n0BUl+mMv052Lwqkecg8Rzfz89AfIsXN8H0gRNlz0D6mDVjwPwFEizPQOpk9O8+tYfEH5g+saMXTCuscwfTF75qgGkHjjVPKKaB4SYQYQnmN3y5/RgUHtUmDY/B7nlbg0kDAPobLacoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665310","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665311"}}},"glyph":{"type":"object","name":"Line","id":"p665306","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665307","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p665308","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p665318","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665312","attributes":{"selected":{"type":"object","name":"Selection","id":"p665313","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665314"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NkYHAwNtZ2SE9LW1fwV8uBkYFhwutALYf///+zrzuu6cDAwJCQloZCL5g5Ux2DBqp33zFPDcQvSEtTdTh75swWuVYVh7S0tGNKt5Udzpw5E5Jirewwa+bMk75KSiD1/YdKFUHyaptkFUDqZdga5UHyN/15wXSj/VZZkHkH5FqlQPImWzwkgW41Zl4zRwIkv9GzRxzkbrW7KuIgdRrGm8XA7uw/JAqSL7TlEgXL3/4p5DATaN5LNUGQvIHxZgGQ/M8aewEQ34HrOj/IXOdOR36H2TNndjom8Dgwgf3B4ZCRltYmdpMFpH6nHCsTKHwYwvj+24P0Paz6g0xz6G76bQ/0lz7Hmh/2RsBAvavyDSTe8DrwCwYN9M+e+VJf7IHuuvk9+DPYHGNj3DRQ3ca57z+B9OncVflkD3THiyqRjyAaCD7YA9157XnWO/vUtLRnxVvfgtxxf3HBW5D+Bc7db0D0jNLCNyBzOHU3vbYH+lf5UcRre2D4pPl+fgWSfxC4A0x/yNJ+ZQ+ML5uEpy9B8mpsjS/tQfFUyvQSJL/B/eELEH0iaNoLexNjY+ELLi9A7iqR5n0BUl+mMv052Lwqkecg8Rzfz89AfIsXN8H0gRNlz0D6mDVjwPwFEizPQOpk9O8+tYfEH5g+saMXTCuscwfTF75qgGkHjjVPKKaB4SYQYQnmN3y5/RgUHtUmDY/B7nlbg0kDAPobLacoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665319","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665320"}}},"glyph":{"type":"object","name":"Line","id":"p665315","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665316","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p665317","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p665329","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665323","attributes":{"selected":{"type":"object","name":"Selection","id":"p665324","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665325"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SO0wbURBFkyoiUopApEiRkRIFiIiICAkfm5+v1x9s1tj7301DWihN6xZaWmihJK1b0tJS01JQ0ZqW3eE8WfLue/Pu3HNn68OJx9nRQ7Vu/0/Vo9LNoHTzWi/vbzR55x4sXrzTy/572ev1B84/6t9VsT5RN63/x+P88TP1XzQ3Orvdd75yb0an9+X8N8f9bxrbxXl0vuuvUxwsoPdDhcqgtIjuT53nasOJJfSX1C1kj3/R57de2Vqm37Jse7hC31VZ+XiV/msymUEZHxWZ/GMFP+s6sYMNfG2qbEKb+NtSLpJ32MZnVZfXhdEqfiWTuRK+a+jV8F9D14HDUcX0HXjqmrI+dbga9GvA16BvE86mLqx/E96WDPOsBXdLsa0d+Hdk25NtcmjLym/b5NGRyZx2yKUjk3d3yWcXLhcuFy4Xri5cXXLryuw7e+S3B1cPrh5cPbj6cPXJtc++R74e5x45e/B7+PLJwcefTx4+Pn0dWgA+fgPyCfAdyLZHAXMJyCtkPqGmzVDInEK9NZAQrkhPBhrBF5FnBGdErhFcMVwxXDE5x3DFcCVwJbLygwSuBK6EeSdwpXClcKXMP4UrhSuDK+N7yODK+C4yuP7oGZF8CKc4BAAA"},"shape":[135],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7XSPUhCURQH8GtFlERZmFmUWZZl0SDSGO9GQzREtEu8SRodIkQaXBoiQhwdosJVnCOiHk4RTn0QTRllX2ZlZUREdt//HUihL4Le8uMczr3n3HufjjHucvVyxthyONzDdYh7eD6f30wkHGpe9ng+VdR3fam23k5xJ+3bSes7kB8+tiEOxm1U367GVncN5PqDNtVAetwK47lW5I/9UMl1ayYSFuyzamlBbJltorpG7DebNlNs1vYPNtC+DTSHSZUdREw0T32hoo8R9cZYHfZxuWppnYH6GShvoH41lIeBAT1M+o1VNGcl1nsHyqm+lNRRHaN5X6VvFOtfVMX3TPGTpJ3r8TeK+32QtLn/ZHJ89V7S5oXW2HCW5ruTxHszh/tWlfdP3GC+7E5GEu98FPF+qOaH5q8L5XODUF6fSuN8DjdUlprS1PeqULm6D7JoM1S2Vy4R7/tgsqMcyqHMBfJvexfUD8prIzBpd0Jl8fYc8djCOfWFvKpEy/suz3CPpkOobE0XyXZH4bK5DIp3TUna/1RkYDKUonsrUvwfkFdET/9TcW5odVZAZXrjBHNnZn72HQfARQ04BAAA"},"shape":[135],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665330","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665331"}}},"glyph":{"type":"object","name":"Line","id":"p665326","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665327","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p665328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p665339","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665333","attributes":{"selected":{"type":"object","name":"Selection","id":"p665334","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665335"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p665340","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665341"}}},"glyph":{"type":"object","name":"Line","id":"p665336","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665337","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p665338","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p665278","attributes":{"tools":[{"id":"p665291"},{"id":"p665292"},{"id":"p665293"},{"id":"p665301"},{"type":"object","name":"SaveTool","id":"p665302"},{"id":"p665343"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p665286","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p665287","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p665288"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p665289"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p665281","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p665282","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p665283"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p665284"}}}],"center":[{"type":"object","name":"Grid","id":"p665285","attributes":{"axis":{"id":"p665281"}}},{"type":"object","name":"Grid","id":"p665290","attributes":{"dimension":1,"axis":{"id":"p665286"}}},{"type":"object","name":"Legend","id":"p665321","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p665322","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p665318"}]}},{"type":"object","name":"LegendItem","id":"p665332","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p665329"}]}},{"type":"object","name":"LegendItem","id":"p665342","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p665339"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p665344","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p665354","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p665346"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p665355"},"y_scale":{"type":"object","name":"LinearScale","id":"p665356"},"title":{"type":"object","name":"Title","id":"p665347","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p665385","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665379","attributes":{"selected":{"type":"object","name":"Selection","id":"p665380","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665381"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46KN+b5603lN2SEtL65ueJ+8wNciLMzvljz1QskHK9ZU9ULxN/M4Te1z6AUEwbPRgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665386","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665387"}}},"glyph":{"type":"object","name":"Line","id":"p665382","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665383","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p665384","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p665394","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665388","attributes":{"selected":{"type":"object","name":"Selection","id":"p665389","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665390"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46KN+b5603lN2SEtL65ueJ+8wNciLMzvljz1QskHK9ZU9ULxN/M4Te1z6AUEwbPRgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665395","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665396"}}},"glyph":{"type":"object","name":"Line","id":"p665391","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665392","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p665393","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p665405","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665399","attributes":{"selected":{"type":"object","name":"Selection","id":"p665400","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665401"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46KN+b5603lN2SEtL65ueJ+8wNciLMzvljz1QskHK9ZU9ULxN/M4Te1z6AUEwbPRgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665406","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665407"}}},"glyph":{"type":"object","name":"Line","id":"p665402","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665403","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p665404","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p665415","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665409","attributes":{"selected":{"type":"object","name":"Selection","id":"p665410","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665411"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p665416","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665417"}}},"glyph":{"type":"object","name":"Line","id":"p665412","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665413","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p665414","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p665353","attributes":{"tools":[{"id":"p665367"},{"id":"p665368"},{"id":"p665369"},{"id":"p665377"},{"type":"object","name":"SaveTool","id":"p665378"},{"id":"p665419"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p665362","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p665363","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p665364"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p665365"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p665357","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p665358"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p665359"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p665360"}}}],"center":[{"type":"object","name":"Grid","id":"p665361","attributes":{"axis":{"id":"p665357"}}},{"type":"object","name":"Grid","id":"p665366","attributes":{"dimension":1,"axis":{"id":"p665362"}}},{"type":"object","name":"Legend","id":"p665397","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p665398","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p665394"}]}},{"type":"object","name":"LegendItem","id":"p665408","attributes":{"label":{"type":"value","value":"Median Year (1930)"},"renderers":[{"id":"p665405"}]}},{"type":"object","name":"LegendItem","id":"p665418","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p665415"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p665430","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"92405dfa-42ac-4c38-87fc-e81c0be48f57","roots":{"p665431":"ac7dbc6a-991b-4e47-8858-a530718fe25b"},"root_ids":["p665431"]}];
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