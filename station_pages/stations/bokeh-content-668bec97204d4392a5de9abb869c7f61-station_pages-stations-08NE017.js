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
    
    
    const element = document.getElementById("d1d35036-ab29-45ad-b87c-10967821b1c6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd1d35036-ab29-45ad-b87c-10967821b1c6' but no matching script tag was found.")
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
                  const docs_json = '{"056d8647-6f94-461d-bf52-7fd5b4c2429e":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p665724","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p665725"}}},"roots":[{"type":"object","name":"Column","id":"p665888","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p665885","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p665884","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p665877","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p665748"},{"type":"object","name":"PanTool","id":"p665824"}]}},{"type":"object","name":"ToolProxy","id":"p665878","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p665749","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p665825","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p665879","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p665750","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p665751","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p665757","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p665756","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p665826","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p665827","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p665833","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p665832","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p665880","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p665758"},{"type":"object","name":"ResetTool","id":"p665834"}]}},{"type":"object","name":"SaveTool","id":"p665881"},{"type":"object","name":"ToolProxy","id":"p665882","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p665800","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p665883","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p665876","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p665726","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p665727"},"y_range":{"type":"object","name":"DataRange1d","id":"p665728"},"x_scale":{"type":"object","name":"LinearScale","id":"p665736"},"y_scale":{"type":"object","name":"LogScale","id":"p665737"},"title":{"type":"object","name":"Title","id":"p665729","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p665766","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665760","attributes":{"selected":{"type":"object","name":"Selection","id":"p665761","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665762"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NkYHAwNtZ2SE9LW1fwV8uBkYFhwutALYf///+zrzuu6cDAwJCQloZCL5g5Ux2DBqp33zFPDcQvSEtTdTh75swWuVYVh7S0tGNKt5Udzpw5E5Jirewwa+bMk75KSiD1/YdKFUHyaptkFUDqZdga5UHyN/15wXSj/VZZkHkH5FqlQPImWzwkgW41Zl4zRwIkv9GzRxzkbrW7KuIgdRrGm8XA7uw/JAqSL7TlEgXL3/4p5DATaN5LNUGQvIHxZgGQ/M8aewEQ34HrOj/IXOdOR36H2TNndjom8Dgwgf3B4ZCRltYmdpMFpH6nHCsTKHwYwvj+24P0Paz6g0xz6G76bQ/0lz7Hmh/2RsBAvavyDSTe8DrwCwYN9M+e+VJf7IHuuvk9+DPYHGNj3DRQ3ca57z+B9OncVflkD3THiyqRjyAaCD7YA9157XnWO/vUtLRnxVvfgtxxf3HBW5D+Bc7db0D0jNLCNyBzOHU3vbYH+lf5UcRre2D4pPl+fgWSfxC4A0x/yNJ+ZQ+ML5uEpy9B8mpsjS/tQfFUyvQSJL/B/eELEH0iaNoLexNjY+ELLi9A7iqR5n0BUl+mMv052Lwqkecg8Rzfz89AfIsXN8H0gRNlz0D6mDVjwPwFEizPQOpk9O8+tYfEH5g+saMXTCuscwfTF75qgGkHjjVPKKaB4SYQYQnmN3y5/RgUHtUmDY/B7nlbg0kDAPobLacoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665767","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665768"}}},"glyph":{"type":"object","name":"Line","id":"p665763","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665764","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p665765","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p665775","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665769","attributes":{"selected":{"type":"object","name":"Selection","id":"p665770","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665771"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NkYHAwNtZ2SE9LW1fwV8uBkYFhwutALYf///+zrzuu6cDAwJCQloZCL5g5Ux2DBqp33zFPDcQvSEtTdTh75swWuVYVh7S0tGNKt5Udzpw5E5Jirewwa+bMk75KSiD1/YdKFUHyaptkFUDqZdga5UHyN/15wXSj/VZZkHkH5FqlQPImWzwkgW41Zl4zRwIkv9GzRxzkbrW7KuIgdRrGm8XA7uw/JAqSL7TlEgXL3/4p5DATaN5LNUGQvIHxZgGQ/M8aewEQ34HrOj/IXOdOR36H2TNndjom8Dgwgf3B4ZCRltYmdpMFpH6nHCsTKHwYwvj+24P0Paz6g0xz6G76bQ/0lz7Hmh/2RsBAvavyDSTe8DrwCwYN9M+e+VJf7IHuuvk9+DPYHGNj3DRQ3ca57z+B9OncVflkD3THiyqRjyAaCD7YA9157XnWO/vUtLRnxVvfgtxxf3HBW5D+Bc7db0D0jNLCNyBzOHU3vbYH+lf5UcRre2D4pPl+fgWSfxC4A0x/yNJ+ZQ+ML5uEpy9B8mpsjS/tQfFUyvQSJL/B/eELEH0iaNoLexNjY+ELLi9A7iqR5n0BUl+mMv052Lwqkecg8Rzfz89AfIsXN8H0gRNlz0D6mDVjwPwFEizPQOpk9O8+tYfEH5g+saMXTCuscwfTF75qgGkHjjVPKKaB4SYQYQnmN3y5/RgUHtUmDY/B7nlbg0kDAPobLacoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665776","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665777"}}},"glyph":{"type":"object","name":"Line","id":"p665772","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665773","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p665774","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p665786","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665780","attributes":{"selected":{"type":"object","name":"Selection","id":"p665781","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665782"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SO0wbURBFkyoiUopApEiRkRIFiIiICAkfm5+v1x9s1tj7301DWihN6xZaWmihJK1b0tJS01JQ0ZqW3eE8WfLue/Pu3HNn68OJx9nRQ7Vu/0/Vo9LNoHTzWi/vbzR55x4sXrzTy/572ev1B84/6t9VsT5RN63/x+P88TP1XzQ3Orvdd75yb0an9+X8N8f9bxrbxXl0vuuvUxwsoPdDhcqgtIjuT53nasOJJfSX1C1kj3/R57de2Vqm37Jse7hC31VZ+XiV/msymUEZHxWZ/GMFP+s6sYMNfG2qbEKb+NtSLpJ32MZnVZfXhdEqfiWTuRK+a+jV8F9D14HDUcX0HXjqmrI+dbga9GvA16BvE86mLqx/E96WDPOsBXdLsa0d+Hdk25NtcmjLym/b5NGRyZx2yKUjk3d3yWcXLhcuFy4Xri5cXXLryuw7e+S3B1cPrh5cPbj6cPXJtc++R74e5x45e/B7+PLJwcefTx4+Pn0dWgA+fgPyCfAdyLZHAXMJyCtkPqGmzVDInEK9NZAQrkhPBhrBF5FnBGdErhFcMVwxXDE5x3DFcCVwJbLygwSuBK6EeSdwpXClcKXMP4UrhSuDK+N7yODK+C4yuP7oGZF8CKc4BAAA"},"shape":[135],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7XSPUhCURQH8GtFlERZmFmUWZZl0SDSGO9GQzREtEu8SRodIkQaXBoiQhwdosJVnCOiHk4RTn0QTRllX2ZlZUREdt//HUihL4Le8uMczr3n3HufjjHucvVyxthyONzDdYh7eD6f30wkHGpe9ng+VdR3fam23k5xJ+3bSes7kB8+tiEOxm1U367GVncN5PqDNtVAetwK47lW5I/9UMl1ayYSFuyzamlBbJltorpG7DebNlNs1vYPNtC+DTSHSZUdREw0T32hoo8R9cZYHfZxuWppnYH6GShvoH41lIeBAT1M+o1VNGcl1nsHyqm+lNRRHaN5X6VvFOtfVMX3TPGTpJ3r8TeK+32QtLn/ZHJ89V7S5oXW2HCW5ruTxHszh/tWlfdP3GC+7E5GEu98FPF+qOaH5q8L5XODUF6fSuN8DjdUlprS1PeqULm6D7JoM1S2Vy4R7/tgsqMcyqHMBfJvexfUD8prIzBpd0Jl8fYc8djCOfWFvKpEy/suz3CPpkOobE0XyXZH4bK5DIp3TUna/1RkYDKUonsrUvwfkFdET/9TcW5odVZAZXrjBHNnZn72HQfARQ04BAAA"},"shape":[135],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665787","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665788"}}},"glyph":{"type":"object","name":"Line","id":"p665783","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665784","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p665785","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p665796","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665790","attributes":{"selected":{"type":"object","name":"Selection","id":"p665791","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665792"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p665797","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665798"}}},"glyph":{"type":"object","name":"Line","id":"p665793","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665794","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p665795","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p665735","attributes":{"tools":[{"id":"p665748"},{"id":"p665749"},{"id":"p665750"},{"id":"p665758"},{"type":"object","name":"SaveTool","id":"p665759"},{"id":"p665800"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p665743","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p665744","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p665745"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p665746"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p665738","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p665739","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p665740"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p665741"}}}],"center":[{"type":"object","name":"Grid","id":"p665742","attributes":{"axis":{"id":"p665738"}}},{"type":"object","name":"Grid","id":"p665747","attributes":{"dimension":1,"axis":{"id":"p665743"}}},{"type":"object","name":"Legend","id":"p665778","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p665779","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p665775"}]}},{"type":"object","name":"LegendItem","id":"p665789","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p665786"}]}},{"type":"object","name":"LegendItem","id":"p665799","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p665796"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p665801","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p665811","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p665803"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p665812"},"y_scale":{"type":"object","name":"LinearScale","id":"p665813"},"title":{"type":"object","name":"Title","id":"p665804","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p665842","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665836","attributes":{"selected":{"type":"object","name":"Selection","id":"p665837","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665838"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46KN+b5603lN2SEtL65ueJ+8wNciLMzvljz1QskHK9ZU9ULxN/M4Te1z6AUEwbPRgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665843","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665844"}}},"glyph":{"type":"object","name":"Line","id":"p665839","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665840","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p665841","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p665851","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665845","attributes":{"selected":{"type":"object","name":"Selection","id":"p665846","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665847"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46KN+b5603lN2SEtL65ueJ+8wNciLMzvljz1QskHK9ZU9ULxN/M4Te1z6AUEwbPRgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665852","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665853"}}},"glyph":{"type":"object","name":"Line","id":"p665848","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665849","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p665850","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p665862","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665856","attributes":{"selected":{"type":"object","name":"Selection","id":"p665857","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665858"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46KN+b5603lN2SEtL65ueJ+8wNciLMzvljz1QskHK9ZU9ULxN/M4Te1z6AUEwbPRgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665863","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665864"}}},"glyph":{"type":"object","name":"Line","id":"p665859","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665860","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p665861","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p665872","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665866","attributes":{"selected":{"type":"object","name":"Selection","id":"p665867","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665868"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p665873","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665874"}}},"glyph":{"type":"object","name":"Line","id":"p665869","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p665870","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p665871","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p665810","attributes":{"tools":[{"id":"p665824"},{"id":"p665825"},{"id":"p665826"},{"id":"p665834"},{"type":"object","name":"SaveTool","id":"p665835"},{"id":"p665876"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p665819","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p665820","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p665821"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p665822"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p665814","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p665815"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p665816"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p665817"}}}],"center":[{"type":"object","name":"Grid","id":"p665818","attributes":{"axis":{"id":"p665814"}}},{"type":"object","name":"Grid","id":"p665823","attributes":{"dimension":1,"axis":{"id":"p665819"}}},{"type":"object","name":"Legend","id":"p665854","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p665855","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p665851"}]}},{"type":"object","name":"LegendItem","id":"p665865","attributes":{"label":{"type":"value","value":"Median Year (1930)"},"renderers":[{"id":"p665862"}]}},{"type":"object","name":"LegendItem","id":"p665875","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p665872"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p665887","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"056d8647-6f94-461d-bf52-7fd5b4c2429e","roots":{"p665888":"d1d35036-ab29-45ad-b87c-10967821b1c6"},"root_ids":["p665888"]}];
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