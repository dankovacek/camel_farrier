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
    
    
    const element = document.getElementById("fcbb96b7-8716-4705-b770-25386cac5581");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fcbb96b7-8716-4705-b770-25386cac5581' but no matching script tag was found.")
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
                  const docs_json = '{"c453233c-0183-4c38-9b72-2a29dcfdedcb":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p719868","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p719869"}}},"roots":[{"type":"object","name":"Column","id":"p720032","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p720029","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p720028","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p720021","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p719892"},{"type":"object","name":"PanTool","id":"p719968"}]}},{"type":"object","name":"ToolProxy","id":"p720022","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p719893","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p719969","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p720023","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p719894","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p719895","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p719901","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p719900","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p719970","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p719971","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p719977","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p719976","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p720024","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p719902"},{"type":"object","name":"ResetTool","id":"p719978"}]}},{"type":"object","name":"SaveTool","id":"p720025"},{"type":"object","name":"ToolProxy","id":"p720026","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p719944","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p720027","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p720020","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p719870","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p719871"},"y_range":{"type":"object","name":"DataRange1d","id":"p719872"},"x_scale":{"type":"object","name":"LinearScale","id":"p719880"},"y_scale":{"type":"object","name":"LogScale","id":"p719881"},"title":{"type":"object","name":"Title","id":"p719873","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p719910","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719904","attributes":{"selected":{"type":"object","name":"Selection","id":"p719905","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719906"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0VSa0iTYRT+nMtq6hKbihdmadq8VOqnpdT2HtIchGQrzbBBG8WUCFuEmnOBUfuVaWCSlwhpRRa1lAoXWdTyR9G6kNq6QOWtnNPU6S5Nzd4zg86fw3ve55znOReGYRSq+J3Q4xBdLLOLQcKz3HvhzAKdTTaqjc6CEIN07ZeqTGhpbk6Vv90C0Trb9NzNzTCgEVzZEZqB/0r+nXQwCnXZirh08GGYIIOUBadIXm9qTFvCJ6SBySGqLXufCgxaTSqoVKp4tjcF8YxFvwlYlq1uaNoAe4zC61HFSXBbOvBZU5CIuFyeZT1MyIxfZfvjgFYN0SqjQcyzrD6eHIX/KuZYJNZtlyoj0H/XCCJQ7+naqjB47hBpuyAUztpkpbkFIZDCsrEd9mBopv2UHQoGi159qm44CPu2DVYEYX7HLliFHniWQNRHtQUiX8PrWwGQbxQWBnD8gZJI3NtXQIlK5dd/cjlksOzQuxg/kNLBWLuWYb3skpxlUC0w3Ph4kIs4/hngYn+F7RlccInkkyce+MI1tfhIU54v4iMfajnI26YWc+CudCCisc8Hqmh+aw+DcUrp9WjIF8vdt0joPjqN5/8Quj/5gc4FQuv0ljILGJ82HZ4nS/B5jM/oXs4Rui+fEeUcobycHI+H0Pl0Nz3yEDqvlZwkD6Hy+eLW35hXY3K4ySK1D3o3GZMZJXHlbm/cJvN6av/9XqOwv3vIRejaByO1Li9OzHMRusfiinwnvql+J6F3lXn1vgPfawxSr39qNs8SgUH6rHPjLL7pvGfIrEheFD5oJx3efDt5ZTbnnTs6/U/XFEmQ18f0tUwROifNukuTxN+iv1B5+Rfq/aZXTyDP7p7KcYL3MZw8ToQ0UCSxIT6RXzJG6P7DP72x4hwS68qtxErv6wl/FOu0hSl+knSW3brt8Q/kU9SbRshfIJDSvygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719911","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719912"}}},"glyph":{"type":"object","name":"Line","id":"p719907","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p719908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p719909","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p719919","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719913","attributes":{"selected":{"type":"object","name":"Selection","id":"p719914","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719915"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/0VSa0iTYRT+nMtq6hKbihdmadq8VOqnpdT2HtIchGQrzbBBG8WUCFuEmnOBUfuVaWCSlwhpRRa1lAoXWdTyR9G6kNq6QOWtnNPU6S5Nzd4zg86fw3ve55znOReGYRSq+J3Q4xBdLLOLQcKz3HvhzAKdTTaqjc6CEIN07ZeqTGhpbk6Vv90C0Trb9NzNzTCgEVzZEZqB/0r+nXQwCnXZirh08GGYIIOUBadIXm9qTFvCJ6SBySGqLXufCgxaTSqoVKp4tjcF8YxFvwlYlq1uaNoAe4zC61HFSXBbOvBZU5CIuFyeZT1MyIxfZfvjgFYN0SqjQcyzrD6eHIX/KuZYJNZtlyoj0H/XCCJQ7+naqjB47hBpuyAUztpkpbkFIZDCsrEd9mBopv2UHQoGi159qm44CPu2DVYEYX7HLliFHniWQNRHtQUiX8PrWwGQbxQWBnD8gZJI3NtXQIlK5dd/cjlksOzQuxg/kNLBWLuWYb3skpxlUC0w3Ph4kIs4/hngYn+F7RlccInkkyce+MI1tfhIU54v4iMfajnI26YWc+CudCCisc8Hqmh+aw+DcUrp9WjIF8vdt0joPjqN5/8Quj/5gc4FQuv0ljILGJ82HZ4nS/B5jM/oXs4Rui+fEeUcobycHI+H0Pl0Nz3yEDqvlZwkD6Hy+eLW35hXY3K4ySK1D3o3GZMZJXHlbm/cJvN6av/9XqOwv3vIRejaByO1Li9OzHMRusfiinwnvql+J6F3lXn1vgPfawxSr39qNs8SgUH6rHPjLL7pvGfIrEheFD5oJx3efDt5ZTbnnTs6/U/XFEmQ18f0tUwROifNukuTxN+iv1B5+Rfq/aZXTyDP7p7KcYL3MZw8ToQ0UCSxIT6RXzJG6P7DP72x4hwS68qtxErv6wl/FOu0hSl+knSW3brt8Q/kU9SbRshfIJDSvygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719920","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719921"}}},"glyph":{"type":"object","name":"Line","id":"p719916","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p719917","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p719918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p719930","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719924","attributes":{"selected":{"type":"object","name":"Selection","id":"p719925","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719926"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2VeVSUVRjGS0vDLFAUxQ0EUZQdhn2ZZ5h9hpn5Zh9PZllmFmXRyTKLjhll2oJlWpr7knhKcyEtU1tMypLCMLcoFMMiCJMkt7S+e3n4hzMwc7/3fZ7f705Y7xvfO2M/oQ2Tv9u0pi/w2R+Xuvj6svaQ/vPFTSv/4997oaZldfb9cX3Q8/4wlMdPib17Zn/0vC8cUdsXvpA8dQB6zhmIWT/8daXm1UH8XBSOdymPJuwaws9HoyByW+uaU8N4zggsyxpwx6h+o3heDK5vyptevzSW545G2u7f176cGsfz43DXN2//bN0fz+eMQfVJy9BbQgl83lixjKeuYyyfOw7n1Wmqnkvk88dj9K0Tvy6NmsA5JsAzXGyWxHmSMTfp4+JPtSmcKxU7Ch+YVXkklfOloWvDKydWaNI5Zzr6bfn1n3+vp3PeDMTtLBo06WAG585E4b43Mz5ZlMn5M+Gt63AOm5zFPbJQ/p3hoacSNdxHg6qjy+cf79Jwr2ws/+XCu7l7s7lfDmrPln25ZF4O98xBfef6093uXO6bi1Z1Gt+IPO6dh2vqq9qzedw/H1F9N+dHbstnDgVIDb85+NjTBcyjAMYhdz5+2FjIXAoxOebD19MjiphPEZ4Yd9sH1SeLmFMxqtPuO9S5vph5laAmd2+b45ES5laCfdrB6hO1zE+LjnU5A/v0AnMELm0UgIF5Aje9/5p6IpgrELG1QE1Qx3x1GCkD0DFnHRI/euOnv6/qmHcpNHtKHoyfUsrcS6GTQJQy/1I41PTmJunZgx6Chu0L9exDj2nqNqe79ezFgIoGQaiB/RhQeUSQbmBPBiyQgBvZlxFLmlY2r1pgZG9GrD1lm/H9OSP7M0Hi4jOxRxMk3rtN7NMEiUeMmb2a0Sh0qjKzXzOaBQ5tZvZsQbvA3Wlh3xZcFPXXWti7BVLzaCv7tyJC1P2slRxYIfE/YyUPNsh6LTZyYYNG6LnFRj5sgKgz0k5O7HBEC0Ps5MWO0EhhqJ3clGGqFK6M/JShImHXbxc3lpGjMjwz/l4VKQd5cmB+igDSQa4cWKza8+IxB/lyQtxGO4uc5MwJQXPrGid5c0LYO7ivi9y5UKcThrnInwuHJeAucqjgnNBnuEIeFXSLeB0KuVRwVVwfcxTyqUDGuUMhpwqkTq0KeVVwu4hvqJvcuiGvO5ub/Loh46p0k2M3YoVeW93k2Q0ZT4ubXLuRLBfykG8PMkUcZg8590DqNttD3j0oEetv9pB7DwziOm/2kH8PbPvbVQO99MAL5YAIyEsfvAh89VbmtCe99MKLSQf/vHxtk5d+eHHPt+ILwktPvFAv65dSwn30xQcVdtcBnY/e+DBTBu6jPz7MbnxHvdF89MiHOT+eV29UH33yYd4x88Nj+vvplR/itt1T4qdffixSbfdW+OmZH0vVb4P2dX765scq1b7nj/rpnR8bRL1hAfoXgKyvMEAPA5D1zAjQxwBk/KsD9DIAGW9jgH4GIOPrE6SnQch48oL0NYgGsX55kN4GIddbEaS/QTSJ8RuC9DiIFjFe7xB9DkE+PjtEr0PoFMdPD9HvEC6Ijy8L0fMQroh/14foewg3yJ+J+B9R7bq86AcAAA=="},"shape":[253],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/42UO2xSURjHbx9opG1am6sGNXhjYqXGGvVatSbI3ZoYFjZjiDIYZuY73cQwM98YExLiyqALm4SZ2Y6WwfpAKz6w1Vrx//3PgXIQE8/yy/97nO9xLliWlcsv3fEsntvepOitpOhyGCNxbil7fk10vZkmcchyGN5UOiDhJz3XJeG/ofwW6bnPrysdkIhf1X6DiLsmduSTiNM61re7ui9X548wuKrsiuiHGnNpu0XWm80ryh6SlhUYRF1qxF02maZGf5eEOCT0ijfB+Ve0/aLX6/VeNJsXtJ/M5fN9Luv4hPaf1/4lnXdOMX1W7E523hHinBmmU10/LXozUzslrMeLJOqQTrZ0Uui1fHLTt8cScTHmlRonGB/dOC4M2hmyXEiSyCetjcoxIfZja00if5H2eJHcrBRI3ENiP0eF5fXWghD5ZGBXSdQhUWdB9oP55kWjn7lxRN6c3uMB5b5Gd5bxLX9W+2dE52rxGdHoJyoa9x+RPT8oNQ6LRt8G4afGfg8xvtiOCNFPROdR4/1J5Ed0PWr0MS3Ee0zrugeUvEKS/lHWuwnacUjMOSXEPg1iHqUztUnxY14S9Qxin9Tof0KI/kn0S+JeEn1YtHcTJPIMwkRNyvcdL/ZS2Ke1nCXxviTe93cKZvRB4h6lS4196kphPzXF96DGnn4J8T2QmEPpboLEGUvMscd8u0pinj3dDzX6Uf5klERfP4eJd6XuE/Mr7dsk9vWD8WFoEP3usq4m+t5NYR+9l5W/KXHtjIr/BxFC//8Sc++wvl0lMfeOnlvZk1GDmO+7xOE9SLzHWOL322WcJuamxu/AIOb9xrojxLspezdBos+vpOuOJd7jC/vJ1Ej8Dynt2yTqf6a/UiDxvZDYe2eY6KOj96/s7QyJ09F7+SREne0B5V7f3pa8V5XCxwHF/vTxB9ZbfETi/Ujn7hqJ34dB597Dttgxz3vGZUukt3qfxHel7MX2O+owNIj5qFHnrUG7+ob3PXtC4ndGBsmoQbzrltgHLDVep/4AOUMu7ugHAAA="},"shape":[253],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719931","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719932"}}},"glyph":{"type":"object","name":"Line","id":"p719927","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p719928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p719929","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p719940","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719934","attributes":{"selected":{"type":"object","name":"Selection","id":"p719935","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719936"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p719941","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719942"}}},"glyph":{"type":"object","name":"Line","id":"p719937","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p719938","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p719939","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p719879","attributes":{"tools":[{"id":"p719892"},{"id":"p719893"},{"id":"p719894"},{"id":"p719902"},{"type":"object","name":"SaveTool","id":"p719903"},{"id":"p719944"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p719887","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p719888","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p719889"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p719890"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p719882","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p719883","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p719884"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p719885"}}}],"center":[{"type":"object","name":"Grid","id":"p719886","attributes":{"axis":{"id":"p719882"}}},{"type":"object","name":"Grid","id":"p719891","attributes":{"dimension":1,"axis":{"id":"p719887"}}},{"type":"object","name":"Legend","id":"p719922","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p719923","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p719919"}]}},{"type":"object","name":"LegendItem","id":"p719933","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p719930"}]}},{"type":"object","name":"LegendItem","id":"p719943","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p719940"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p719945","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p719955","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p719947"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p719956"},"y_scale":{"type":"object","name":"LinearScale","id":"p719957"},"title":{"type":"object","name":"Title","id":"p719948","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p719986","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719980","attributes":{"selected":{"type":"object","name":"Selection","id":"p719981","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719982"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiZ41cybLBzEhB0EnDsNjM0wdOjs6fpgf0nQoOWcZ3rRTwGFu8TnLUz//2q9eterVlkZWh1PZGvXNTxgc0tLSjulkfLF/v/f7ui2/v9kDADt9GA1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719987","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719988"}}},"glyph":{"type":"object","name":"Line","id":"p719983","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p719984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p719985","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p719995","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719989","attributes":{"selected":{"type":"object","name":"Selection","id":"p719990","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719991"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiZ41cybLBzEhB0EnDsNjM0wdOjs6fpgf0nQoOWcZ3rRTwGFu8TnLUz//2q9eterVlkZWh1PZGvXNTxgc0tLSjulkfLF/v/f7ui2/v9kDADt9GA1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719996","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719997"}}},"glyph":{"type":"object","name":"Line","id":"p719992","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p719993","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p719994","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p720006","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p720000","attributes":{"selected":{"type":"object","name":"Selection","id":"p720001","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p720002"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiZ41cybLBzEhB0EnDsNjM0wdOjs6fpgf0nQoOWcZ3rRTwGFu8TnLUz//2q9eterVlkZWh1PZGvXNTxgc0tLSjulkfLF/v/f7ui2/v9kDADt9GA1gAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p720007","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p720008"}}},"glyph":{"type":"object","name":"Line","id":"p720003","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p720004","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p720005","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p720016","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p720010","attributes":{"selected":{"type":"object","name":"Selection","id":"p720011","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p720012"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p720017","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p720018"}}},"glyph":{"type":"object","name":"Line","id":"p720013","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p720014","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p720015","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p719954","attributes":{"tools":[{"id":"p719968"},{"id":"p719969"},{"id":"p719970"},{"id":"p719978"},{"type":"object","name":"SaveTool","id":"p719979"},{"id":"p720020"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p719963","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p719964","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p719965"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p719966"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p719958","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p719959"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p719960"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p719961"}}}],"center":[{"type":"object","name":"Grid","id":"p719962","attributes":{"axis":{"id":"p719958"}}},{"type":"object","name":"Grid","id":"p719967","attributes":{"dimension":1,"axis":{"id":"p719963"}}},{"type":"object","name":"Legend","id":"p719998","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p719999","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p719995"}]}},{"type":"object","name":"LegendItem","id":"p720009","attributes":{"label":{"type":"value","value":"Median Year (1980)"},"renderers":[{"id":"p720006"}]}},{"type":"object","name":"LegendItem","id":"p720019","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p720016"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p720031","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c453233c-0183-4c38-9b72-2a29dcfdedcb","roots":{"p720032":"fcbb96b7-8716-4705-b770-25386cac5581"},"root_ids":["p720032"]}];
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