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
    
    
    const element = document.getElementById("c513d539-4d29-4a70-bade-133799dfae1d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c513d539-4d29-4a70-bade-133799dfae1d' but no matching script tag was found.")
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
                  const docs_json = '{"06699984-6c4e-451a-851b-95cbe148ba67":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p933176","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p933177"}}},"roots":[{"type":"object","name":"Column","id":"p933358","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p933355","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p933354","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p933347","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p933200"},{"type":"object","name":"PanTool","id":"p933285"}]}},{"type":"object","name":"ToolProxy","id":"p933348","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p933201","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p933286","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p933349","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p933202","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p933203","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p933209","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p933208","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p933287","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p933288","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p933294","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p933293","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p933350","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p933210"},{"type":"object","name":"ResetTool","id":"p933295"}]}},{"type":"object","name":"SaveTool","id":"p933351"},{"type":"object","name":"ToolProxy","id":"p933352","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p933261","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p933353","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p933346","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p933178","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p933179"},"y_range":{"type":"object","name":"DataRange1d","id":"p933180"},"x_scale":{"type":"object","name":"LinearScale","id":"p933188"},"y_scale":{"type":"object","name":"LogScale","id":"p933189"},"title":{"type":"object","name":"Title","id":"p933181","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p933218","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933212","attributes":{"selected":{"type":"object","name":"Selection","id":"p933213","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933214"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1/3+9Lddy+18E6EkzZwbObVhm//X/f3m2xqVDlj585ozN+bSl9vu/arTsa1pi/+f/f/uHVcOfVo3pvxQVv8R+o1zraUfOxfY//v//v/LjIoI05zr3h/s3LbL//P///qKMhSOGXuT+sCnEdCEo/e8v2zffHgBhsJvsKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933219","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933220"}}},"glyph":{"type":"object","name":"Line","id":"p933215","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933216","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933217","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p933227","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933221","attributes":{"selected":{"type":"object","name":"Selection","id":"p933222","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933223"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//vw///+kskz7D8QSU8psOWqqZth//f///9a7dMoputfB0pcFp5mr8t13bh3yxT7d///2z+sGv70/sUFvb8qJ9tXH/racVNhsv3v///rp+dNGrb0oTNn3qTbT7J/CkxHRRkT4XTDzJk/WUwm2v/6//++b9IEsukO94dejAZ99leB4cuxpodqNCTdd9gDALUrkIMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933228","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933229"}}},"glyph":{"type":"object","name":"Line","id":"p933224","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933225","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933226","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p933236","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933230","attributes":{"selected":{"type":"object","name":"Selection","id":"p933231","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933232"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v5///73ysX2v8kQB89c+aGdupCe4WYfiGlBwvsf/3/f943iXL6VpXItXLXBfY8ra93+tyeb//m///9ZftoR+86c+aO/ZL59tu+aqjoH5hn//n///uBO+hP3wnc0XbPfJ691cMqFj/ueaDw+K+zaS7NaKWY/knLps21XyfX2t3rMMf+GzA8vmoQptnWuS/kfjXb/sP///X75s8imw5JS9um1jHL/tn///JrZBD05jNnbEqZwOrWz5w5k2z6auAOoeIvM+xfANNVyWTK6enuDyeFJcwApf9+CZZp9gBOAQlLKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933237","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933238"}}},"glyph":{"type":"object","name":"Line","id":"p933233","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933234","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p933235","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p933247","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933241","attributes":{"selected":{"type":"object","name":"Selection","id":"p933242","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933243"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2UCWyUVRSFFW0MDcZaQEBJQUqBYvdtWrrMmc7a6Sz/Pj8REMRGLBjRoNiomDaIJkhoQ2IMGAuiKIhESxBUSESxKBhFsUEaFhMWaSw0IRRUauN7b87NSSYz8897957z3cnZNDx10/AZb456HfQ6RQfsogPDfD/ivf7SFKExSH+egS/+cITGIv39OHw9IyqUhfRz2ZjZdyW378p4Pj8Rr6uaxN9NwV81s4Qe4u+nIjl4JDF4JIfnTMf8n0uFHuZ5M7B+zp1CuTw3F4faTxxsPzGT5+dhqL/7Wn/3LN4zG9MrnhGaw/vyYW5oMDY0zOW9j2Dt5XuFCnh/AT73nt3nPVvIPorw59u7hYrZTwnG/XNIqIR9lWLHB7JK2V8ZvIa8oIx9luP30VWnRleVs99yrPx4gVAF+67AWDcgVMn+K/He3QVCVZyjCrWfjRfycB4Pflt4++TC2x7OVY2nMy+syLxQzflqcM/+Yxn7j9VwznnoXtrz7tKeeZy3FtVZmz1Zm2s5dx1kFwfb6zh/HVqfklVPH+ox5gFdqIF+NGDLN9VCXvrihTzNkwX6A6hj14I+AeUXb5VdvAX65cOrXy4X8tE3H37sPH+887yP/jVi8pOmUCN9bERL/dEn6o820k8/eqQdtX766sfowJ7/Bvb46a8fUdVIgD4H8JaqAP0OQLq1IjNI34Mo8a8p9q8J0v8gXpZtXA8yhxB+GGr5fqglxDxCmNh7ekLv6RBzCWPJO3GhMPMJ45PnDguFmVMY/0YqhSLMK4LwtJ2haTsjzC2CNPZNzK8J0o3jnU3MsQmFqpEo84yi7UVZUeYaxXcJGUyU+TYjO2/x/XmLm5lzMxbJNk42M+8Ydv0SFoox9xhufviVUIz5xxCQdhTHyUEcndb2jdb2OHmI48zcSUIJcpFAvoxlfYJ8JPD8KRlMgpwkcVgZkiQvSSg8LifJjYZCVRr50WAqADRypKHtrm1CGnnSsPWaDEIjVxpUHBN08qUj3YZOznRkf/qGkE7edNSoxnRyp+OxdSOL1o3o5M/Aa89WCRnk0MBuidFKgzwa+FXat8sglwb+LpONGOTTRI4qk5yaCCrQTPJqYvmNrtYbXSa5NdGlAjfJrwkVe4ZFji1I1/d5LfJsQdnRZpFrC/lv7hWyyLcFbfXV5OqrFjm38cLjs4Vs8m5D4brEJvc2vpUxbbHJv40B+a/aZ3MPbNynyuE+OKhSQDvcCwcLLnU8eqnD4X446FBgOdwTBx9JvG463JcUftpRIpTi3qSg7GhNcX9SePCV94VS3KMUfMvOYdm5FPcpBRXLZJd75UKtheFyv1zsVYa43DMX/RKPXpf75uIOVfPxP/yvlEjoBgAA"},"shape":[221],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1/3+9Lddy+1846K///8uzNS4dMvSf///tH1YtGXb0j////6/8uIho+vP///uLMhYOOxqYLveX7Ztv/wFIl0yeQTb9FxhOWu3TaE5D0uVU+3fgeJwySpNJP/v/P35PyWQ4/RtYPk3PmzRKk0g/BeejiThpYP6675s0ger0NSAduKPP/iowPjnW9NCNhuT3DnsA2J71Y+gGAAA="},"shape":[221],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933248","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933249"}}},"glyph":{"type":"object","name":"Line","id":"p933244","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933245","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p933246","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p933257","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933251","attributes":{"selected":{"type":"object","name":"Selection","id":"p933252","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933253"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p933258","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933259"}}},"glyph":{"type":"object","name":"Line","id":"p933254","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933255","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933256","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p933187","attributes":{"tools":[{"id":"p933200"},{"id":"p933201"},{"id":"p933202"},{"id":"p933210"},{"type":"object","name":"SaveTool","id":"p933211"},{"id":"p933261"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p933195","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p933196","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p933197"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p933198"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p933190","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p933191","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p933192"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p933193"}}}],"center":[{"type":"object","name":"Grid","id":"p933194","attributes":{"axis":{"id":"p933190"}}},{"type":"object","name":"Grid","id":"p933199","attributes":{"dimension":1,"axis":{"id":"p933195"}}},{"type":"object","name":"Legend","id":"p933239","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p933240","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p933236"}]}},{"type":"object","name":"LegendItem","id":"p933250","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p933247"}]}},{"type":"object","name":"LegendItem","id":"p933260","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p933257"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p933262","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p933272","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p933264"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p933273"},"y_scale":{"type":"object","name":"LinearScale","id":"p933274"},"title":{"type":"object","name":"Title","id":"p933265","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p933303","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933297","attributes":{"selected":{"type":"object","name":"Selection","id":"p933298","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933299"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwEaG1j48laEkvtQ7LXbrXWWGp/d06xnmXoIntNY+Nk8e0L7XHpAwCHZKMvYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933304","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933305"}}},"glyph":{"type":"object","name":"Line","id":"p933300","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p933312","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933306","attributes":{"selected":{"type":"object","name":"Selection","id":"p933307","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933308"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46MLLs/Nybk20f/Du3b8upYn2uySSddS0ptnLLp0y6b/jZHuXOOeb2ucn2ePSDwA7UqR+YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933313","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933314"}}},"glyph":{"type":"object","name":"Line","id":"p933309","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933310","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933311","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p933321","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933315","attributes":{"selected":{"type":"object","name":"Selection","id":"p933316","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933317"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46MLLs/Nybk20jzkoxlNZM9P+RvX71OVyC+yz3+/9bvFttn3p03nLsrpm2OPSDwAn+ppRYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933322","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933323"}}},"glyph":{"type":"object","name":"Line","id":"p933318","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933319","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p933320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p933332","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933326","attributes":{"selected":{"type":"object","name":"Selection","id":"p933327","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933328"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwEaG1j48laEkvtQ7LXbrXWWGp/d06xnmXoIntNY+Nk8e0L7XHpAwCHZKMvYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933333","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933334"}}},"glyph":{"type":"object","name":"Line","id":"p933329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933330","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p933331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p933342","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933336","attributes":{"selected":{"type":"object","name":"Selection","id":"p933337","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933338"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p933343","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933344"}}},"glyph":{"type":"object","name":"Line","id":"p933339","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p933271","attributes":{"tools":[{"id":"p933285"},{"id":"p933286"},{"id":"p933287"},{"id":"p933295"},{"type":"object","name":"SaveTool","id":"p933296"},{"id":"p933346"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p933280","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p933281","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p933282"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p933283"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p933275","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p933276"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p933277"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p933278"}}}],"center":[{"type":"object","name":"Grid","id":"p933279","attributes":{"axis":{"id":"p933275"}}},{"type":"object","name":"Grid","id":"p933284","attributes":{"dimension":1,"axis":{"id":"p933280"}}},{"type":"object","name":"Legend","id":"p933324","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p933325","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p933321"}]}},{"type":"object","name":"LegendItem","id":"p933335","attributes":{"label":{"type":"value","value":"Median Year (1955)"},"renderers":[{"id":"p933332"}]}},{"type":"object","name":"LegendItem","id":"p933345","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p933342"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p933357","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"06699984-6c4e-451a-851b-95cbe148ba67","roots":{"p933358":"c513d539-4d29-4a70-bade-133799dfae1d"},"root_ids":["p933358"]}];
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