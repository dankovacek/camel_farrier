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
    
    
    const element = document.getElementById("ae25c8f7-fafe-4e64-b9cb-88902846e600");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ae25c8f7-fafe-4e64-b9cb-88902846e600' but no matching script tag was found.")
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
                  const docs_json = '{"51294355-ca75-46e4-965b-004be433f80d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p933689","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p933690"}}},"roots":[{"type":"object","name":"Column","id":"p933871","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p933868","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p933867","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p933860","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p933713"},{"type":"object","name":"PanTool","id":"p933798"}]}},{"type":"object","name":"ToolProxy","id":"p933861","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p933714","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p933799","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p933862","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p933715","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p933716","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p933722","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p933721","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p933800","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p933801","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p933807","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p933806","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p933863","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p933723"},{"type":"object","name":"ResetTool","id":"p933808"}]}},{"type":"object","name":"SaveTool","id":"p933864"},{"type":"object","name":"ToolProxy","id":"p933865","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p933774","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p933866","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p933859","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p933691","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p933692"},"y_range":{"type":"object","name":"DataRange1d","id":"p933693"},"x_scale":{"type":"object","name":"LinearScale","id":"p933701"},"y_scale":{"type":"object","name":"LogScale","id":"p933702"},"title":{"type":"object","name":"Title","id":"p933694","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p933731","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933725","attributes":{"selected":{"type":"object","name":"Selection","id":"p933726","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933727"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1/3+9Lddy+18E6EkzZwbObVhm//X/f3m2xqVDlj585ozN+bSl9vu/arTsa1pi/+f/f/uHVcOfVo3pvxQVv8R+o1zraUfOxfY//v//v/LjIoI05zr3h/s3LbL//P///qKMhSOGXuT+sCnEdCEo/e8v2zffHgBhsJvsKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933732","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933733"}}},"glyph":{"type":"object","name":"Line","id":"p933728","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933729","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933730","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p933740","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933734","attributes":{"selected":{"type":"object","name":"Selection","id":"p933735","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933736"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//vw///+kskz7D8QSU8psOWqqZth//f///9a7dMoputfB0pcFp5mr8t13bh3yxT7d///2z+sGv70/sUFvb8qJ9tXH/racVNhsv3v///rp+dNGrb0oTNn3qTbT7J/CkxHRRkT4XTDzJk/WUwm2v/6//++b9IEsukO94dejAZ99leB4cuxpodqNCTdd9gDALUrkIMoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933741","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933742"}}},"glyph":{"type":"object","name":"Line","id":"p933737","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p933749","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933743","attributes":{"selected":{"type":"object","name":"Selection","id":"p933744","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933745"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v5///73ysX2v8kQB89c+aGdupCe4WYfiGlBwvsf/3/f943iXL6VpXItXLXBfY8ra93+tyeb//m///9ZftoR+86c+aO/ZL59tu+aqjoH5hn//n///uBO+hP3wnc0XbPfJ691cMqFj/ueaDw+K+zaS7NaKWY/knLps21XyfX2t3rMMf+GzA8vmoQptnWuS/kfjXb/sP///X75s8imw5JS9um1jHL/tn///JrZBD05jNnbEqZwOrWz5w5k2z6auAOoeIvM+xfANNVyWTK6enuDyeFJcwApf9+CZZp9gBOAQlLKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933750","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933751"}}},"glyph":{"type":"object","name":"Line","id":"p933746","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933747","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p933748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p933760","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933754","attributes":{"selected":{"type":"object","name":"Selection","id":"p933755","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933756"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2UCWyUVRSFFW0MDcZaQEBJQUqBYvdtWrrMmc7a6Sz/Pj8REMRGLBjRoNiomDaIJkhoQ2IMGAuiKIhESxBUSESxKBhFsUEaFhMWaSw0IRRUauN7b87NSSYz8897957z3cnZNDx10/AZb456HfQ6RQfsogPDfD/ivf7SFKExSH+egS/+cITGIv39OHw9IyqUhfRz2ZjZdyW378p4Pj8Rr6uaxN9NwV81s4Qe4u+nIjl4JDF4JIfnTMf8n0uFHuZ5M7B+zp1CuTw3F4faTxxsPzGT5+dhqL/7Wn/3LN4zG9MrnhGaw/vyYW5oMDY0zOW9j2Dt5XuFCnh/AT73nt3nPVvIPorw59u7hYrZTwnG/XNIqIR9lWLHB7JK2V8ZvIa8oIx9luP30VWnRleVs99yrPx4gVAF+67AWDcgVMn+K/He3QVCVZyjCrWfjRfycB4Pflt4++TC2x7OVY2nMy+syLxQzflqcM/+Yxn7j9VwznnoXtrz7tKeeZy3FtVZmz1Zm2s5dx1kFwfb6zh/HVqfklVPH+ox5gFdqIF+NGDLN9VCXvrihTzNkwX6A6hj14I+AeUXb5VdvAX65cOrXy4X8tE3H37sPH+887yP/jVi8pOmUCN9bERL/dEn6o820k8/eqQdtX766sfowJ7/Bvb46a8fUdVIgD4H8JaqAP0OQLq1IjNI34Mo8a8p9q8J0v8gXpZtXA8yhxB+GGr5fqglxDxCmNh7ekLv6RBzCWPJO3GhMPMJ45PnDguFmVMY/0YqhSLMK4LwtJ2haTsjzC2CNPZNzK8J0o3jnU3MsQmFqpEo84yi7UVZUeYaxXcJGUyU+TYjO2/x/XmLm5lzMxbJNk42M+8Ydv0SFoox9xhufviVUIz5xxCQdhTHyUEcndb2jdb2OHmI48zcSUIJcpFAvoxlfYJ8JPD8KRlMgpwkcVgZkiQvSSg8LifJjYZCVRr50WAqADRypKHtrm1CGnnSsPWaDEIjVxpUHBN08qUj3YZOznRkf/qGkE7edNSoxnRyp+OxdSOL1o3o5M/Aa89WCRnk0MBuidFKgzwa+FXat8sglwb+LpONGOTTRI4qk5yaCCrQTPJqYvmNrtYbXSa5NdGlAjfJrwkVe4ZFji1I1/d5LfJsQdnRZpFrC/lv7hWyyLcFbfXV5OqrFjm38cLjs4Vs8m5D4brEJvc2vpUxbbHJv40B+a/aZ3MPbNynyuE+OKhSQDvcCwcLLnU8eqnD4X446FBgOdwTBx9JvG463JcUftpRIpTi3qSg7GhNcX9SePCV94VS3KMUfMvOYdm5FPcpBRXLZJd75UKtheFyv1zsVYa43DMX/RKPXpf75uIOVfPxP/yvlEjoBgAA"},"shape":[221],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1/3+9Lddy+1846K///8uzNS4dMvSf///tH1YtGXb0j////6/8uIho+vP///uLMhYOOxqYLveX7Ztv/wFIl0yeQTb9FxhOWu3TaE5D0uVU+3fgeJwySpNJP/v/P35PyWQ4/RtYPk3PmzRKk0g/BeejiThpYP6675s0ger0NSAduKPP/iowPjnW9NCNhuT3DnsA2J71Y+gGAAA="},"shape":[221],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933761","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933762"}}},"glyph":{"type":"object","name":"Line","id":"p933757","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933758","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p933759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p933770","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933764","attributes":{"selected":{"type":"object","name":"Selection","id":"p933765","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933766"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p933771","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933772"}}},"glyph":{"type":"object","name":"Line","id":"p933767","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p933700","attributes":{"tools":[{"id":"p933713"},{"id":"p933714"},{"id":"p933715"},{"id":"p933723"},{"type":"object","name":"SaveTool","id":"p933724"},{"id":"p933774"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p933708","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p933709","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p933710"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p933711"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p933703","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p933704","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p933705"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p933706"}}}],"center":[{"type":"object","name":"Grid","id":"p933707","attributes":{"axis":{"id":"p933703"}}},{"type":"object","name":"Grid","id":"p933712","attributes":{"dimension":1,"axis":{"id":"p933708"}}},{"type":"object","name":"Legend","id":"p933752","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p933753","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p933749"}]}},{"type":"object","name":"LegendItem","id":"p933763","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p933760"}]}},{"type":"object","name":"LegendItem","id":"p933773","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p933770"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p933775","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p933785","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p933777"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p933786"},"y_scale":{"type":"object","name":"LinearScale","id":"p933787"},"title":{"type":"object","name":"Title","id":"p933778","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p933816","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933810","attributes":{"selected":{"type":"object","name":"Selection","id":"p933811","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933812"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwEaG1j48laEkvtQ7LXbrXWWGp/d06xnmXoIntNY+Nk8e0L7XHpAwCHZKMvYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933817","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933818"}}},"glyph":{"type":"object","name":"Line","id":"p933813","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933814","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933815","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p933825","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933819","attributes":{"selected":{"type":"object","name":"Selection","id":"p933820","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933821"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46MLLs/Nybk20f/Du3b8upYn2uySSddS0ptnLLp0y6b/jZHuXOOeb2ucn2ePSDwA7UqR+YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933826","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933827"}}},"glyph":{"type":"object","name":"Line","id":"p933822","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933823","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933824","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p933834","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933828","attributes":{"selected":{"type":"object","name":"Selection","id":"p933829","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933830"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46MLLs/Nybk20jzkoxlNZM9P+RvX71OVyC+yz3+/9bvFttn3p03nLsrpm2OPSDwAn+ppRYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933835","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933836"}}},"glyph":{"type":"object","name":"Line","id":"p933831","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933832","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p933833","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p933845","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933839","attributes":{"selected":{"type":"object","name":"Selection","id":"p933840","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933841"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwEaG1j48laEkvtQ7LXbrXWWGp/d06xnmXoIntNY+Nk8e0L7XHpAwCHZKMvYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p933846","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933847"}}},"glyph":{"type":"object","name":"Line","id":"p933842","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933843","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p933844","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p933855","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p933849","attributes":{"selected":{"type":"object","name":"Selection","id":"p933850","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p933851"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p933856","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p933857"}}},"glyph":{"type":"object","name":"Line","id":"p933852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p933853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p933854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p933784","attributes":{"tools":[{"id":"p933798"},{"id":"p933799"},{"id":"p933800"},{"id":"p933808"},{"type":"object","name":"SaveTool","id":"p933809"},{"id":"p933859"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p933793","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p933794","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p933795"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p933796"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p933788","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p933789"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p933790"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p933791"}}}],"center":[{"type":"object","name":"Grid","id":"p933792","attributes":{"axis":{"id":"p933788"}}},{"type":"object","name":"Grid","id":"p933797","attributes":{"dimension":1,"axis":{"id":"p933793"}}},{"type":"object","name":"Legend","id":"p933837","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p933838","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p933834"}]}},{"type":"object","name":"LegendItem","id":"p933848","attributes":{"label":{"type":"value","value":"Median Year (1955)"},"renderers":[{"id":"p933845"}]}},{"type":"object","name":"LegendItem","id":"p933858","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p933855"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p933870","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"51294355-ca75-46e4-965b-004be433f80d","roots":{"p933871":"ae25c8f7-fafe-4e64-b9cb-88902846e600"},"root_ids":["p933871"]}];
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