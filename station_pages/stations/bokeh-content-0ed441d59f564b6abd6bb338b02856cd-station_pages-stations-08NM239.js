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
    
    
    const element = document.getElementById("b94f33ca-d8b8-4972-a50b-39d801ac9f13");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b94f33ca-d8b8-4972-a50b-39d801ac9f13' but no matching script tag was found.")
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
                  const docs_json = '{"8a1a9257-9184-44d9-876e-091c6ff4fbc9":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p942756","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p942757"}}},"roots":[{"type":"object","name":"Column","id":"p942920","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p942917","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p942916","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p942909","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p942780"},{"type":"object","name":"PanTool","id":"p942856"}]}},{"type":"object","name":"ToolProxy","id":"p942910","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p942781","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p942857","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p942911","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p942782","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p942783","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p942789","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p942788","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p942858","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p942859","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p942865","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p942864","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p942912","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p942790"},{"type":"object","name":"ResetTool","id":"p942866"}]}},{"type":"object","name":"SaveTool","id":"p942913"},{"type":"object","name":"ToolProxy","id":"p942914","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p942832","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p942915","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p942908","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p942758","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p942759"},"y_range":{"type":"object","name":"DataRange1d","id":"p942760"},"x_scale":{"type":"object","name":"LinearScale","id":"p942768"},"y_scale":{"type":"object","name":"LogScale","id":"p942769"},"title":{"type":"object","name":"Title","id":"p942761","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p942798","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942792","attributes":{"selected":{"type":"object","name":"Selection","id":"p942793","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942794"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSa0iTURj+nNNq6hKbihdmadq8VOqnpdR2XtL8ICRbaYYN2iimRNgi1JwLjNqvTAOTvERIK7KopVT4RRa1/FG0LqT2dYHKWzmnqdNdmpqdswmdPy/nPc/7Ps/7vIeiKKU6YRf02iWXym1SkAm4+y8d2aC3ysd0MdkQamTWfa3OgtaWljTFu60Qo7fOzN/aAoNa0dWdYZnkXSW8mwGsWJ+jjM8AH4oKNjI0OCSKBlNTuhefmA4mu6Su/EMaUOTUpoFarU6g+1IJnuIMm4Gm6ZrG5o2wlxXfiC5JhjvM4BdtYRLB5Qm4DTApZ7/JD8QD7hqqU8WAVMCtOZESTd7V1PEo0reDUUWS+EMriiR6z9RVh8MLu0TXDWFwziovyysMhVSajuu0hUALnqf8cAhwBs3p+pFgMrd1qDKY1HfuhtUkgoALIvqwtiDC1/jmdiAUsOKiQF4AYBKZa8dKKFWr/QdOrYBMmh5+H+sPDDbG0u1H+uWU5vpBjch489MhPsEJzwKfzFfUkckHp0QxdfKhL1zXSI825/sSfNQjHY/wtmukPLjHDEY29ftANa5v66WW56K8/mFNmC+Ov38JYX+72At/Ed6f4mDXIsJ9+sqoRZKfMR1ZQF74AsnP6l/NI7wvn1HVPMK8vFy3G2F/epofuxH2axUv2Y2wfKG07Q+pqzXZXWgJn48GFxqXs7L4Cpcnb5W7lvv+j/tY8UDPsBPhtQ9F6ZwenFTgRHiPJZUFDuTV70D4X2Vde2An97VGxhOfmc1zSGRknndtmiN37PcsmpMoiiOGbKjTU29Dr83m/PPHZpZ1TaNERUNsf+s0wj5p11+eQgGc4WLVld9E73eDZpLw7OmtmkDkf4ykTCAxThTLrASfJCwdR3j/EZ/fWogPSfUVFmTB/+upcIz0aQ9X/kIZNL1t+5OfhE/ZYBpF/wAgkNK/KAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942799","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942800"}}},"glyph":{"type":"object","name":"Line","id":"p942795","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p942796","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p942797","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p942807","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942801","attributes":{"selected":{"type":"object","name":"Selection","id":"p942802","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942803"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/0VSa0iTURj+nNNq6hKbihdmadq8VOqnpdR2XtL8ICRbaYYN2iimRNgi1JwLjNqvTAOTvERIK7KopVT4RRa1/FG0LqT2dYHKWzmnqdNdmpqdswmdPy/nPc/7Ps/7vIeiKKU6YRf02iWXym1SkAm4+y8d2aC3ysd0MdkQamTWfa3OgtaWljTFu60Qo7fOzN/aAoNa0dWdYZnkXSW8mwGsWJ+jjM8AH4oKNjI0OCSKBlNTuhefmA4mu6Su/EMaUOTUpoFarU6g+1IJnuIMm4Gm6ZrG5o2wlxXfiC5JhjvM4BdtYRLB5Qm4DTApZ7/JD8QD7hqqU8WAVMCtOZESTd7V1PEo0reDUUWS+EMriiR6z9RVh8MLu0TXDWFwziovyysMhVSajuu0hUALnqf8cAhwBs3p+pFgMrd1qDKY1HfuhtUkgoALIvqwtiDC1/jmdiAUsOKiQF4AYBKZa8dKKFWr/QdOrYBMmh5+H+sPDDbG0u1H+uWU5vpBjch489MhPsEJzwKfzFfUkckHp0QxdfKhL1zXSI825/sSfNQjHY/wtmukPLjHDEY29ftANa5v66WW56K8/mFNmC+Ov38JYX+72At/Ed6f4mDXIsJ9+sqoRZKfMR1ZQF74AsnP6l/NI7wvn1HVPMK8vFy3G2F/epofuxH2axUv2Y2wfKG07Q+pqzXZXWgJn48GFxqXs7L4Cpcnb5W7lvv+j/tY8UDPsBPhtQ9F6ZwenFTgRHiPJZUFDuTV70D4X2Vde2An97VGxhOfmc1zSGRknndtmiN37PcsmpMoiiOGbKjTU29Dr83m/PPHZpZ1TaNERUNsf+s0wj5p11+eQgGc4WLVld9E73eDZpLw7OmtmkDkf4ykTCAxThTLrASfJCwdR3j/EZ/fWogPSfUVFmTB/+upcIz0aQ9X/kIZNL1t+5OfhE/ZYBpF/wAgkNK/KAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942808","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942809"}}},"glyph":{"type":"object","name":"Line","id":"p942804","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p942805","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p942806","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p942818","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942812","attributes":{"selected":{"type":"object","name":"Selection","id":"p942813","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942814"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeVhUZRjFSwvDLFAUd0EQRdlh2GHmzDDDDDPMcGe/PpllmVmURU+WWfSYUqYtWKaluS+JT2kupGVqi0lZUBjmFoVhWARhkuaW1v0+zvwzM3d5v/f8zjmhvW9897TjhCFUfrcbij/Hp39c6ub/y4b6os+WNK/6j9d7oaZ1Teb9MSHouR+K8tgp0XfP7Iee58IQuWPR84lT+6Pn+QGY9f1fV2peGcj3InG8W3k0bvdgvj8UeRHb29aeGsY5I7A8o/8do/qO4rwoXN+cM71hWTTnjkbKnt/XvZQcw/kxuOvrt34qORDLc8ag+qRtyC1qHM8bKx7y1HWO5bnjcE57quq5eJ4/HqNvnfiVKXIC95gAz3BxJ4H7JGJuwkeFnxiSuFcyduY/MKvySDL3S0H3xpdPrNSlcs9U9N366z//Xk/lvmmI2VUwcNKhNO6djvz9b6R9vDid+6fDW9fpGjY5gzoyUP6t+aGn4nXUo0PV0RULjnfrqCsTK34+/072vkzqy0LtmdIvls7Pos4sNHRt+OWCO5t6s9GmbeMbkUPdObim/as9k0P9uYjssyU3YnsuOeQhOezm4GNP55FHHiyD73z8sCWfXPIxOeqD11LDC8inAE+Mu+396pMF5FSI6pT76rs2FJKXHjXZ+9qdj+jJTY/9hkHaiQbyM6BzfdaAkF4gR+DSJiEM5Anc9N6r2kSQKxC+LU8jaCRfI0ZKAEZyNiL+w9d//PuqkbxN0O3VPxg7xUTuJhglKBP5m+DU6M1NKKIPRRAUdiwqoh9FmFYvgBbRFzMqGoUyM/0xo/KImGSmT2YslOAt9MuCpc2rWlYvtNA3C9adss/47qyF/hVDyvIV08diyLX3FNPPYsi1oqz01YomcWyVlf5a0SLGtlvpsw0d4jWXjX7bcFFcrrXRdxt6aldC/0sQLux+toQ5KIG0+XQJ82CHtNdmZy7s0Albt9qZDzsg7IxwMCcOOIcKpx3MiwPqSEHSwdyUYqocXMr8lKIibvdvFzeVMkeleGb8vdpPJ/PkxIIkcbCTuXJiiebiC8eczJcLguKuAhdz5oJQ0bbWxby5IKYM6lPG3JWhziicLGP+ynBYLl7GHCo4KzAPV5hHBRcEXqfCXCq4KrDOUZhPBRLnToU5VSAxtinMq4LbBb4hbubWjR5sbubXDYmr0s0cuxEtMG1zM89uSDytbubajUQpyMN8e5AucFg9zLkHEsNsD/PugV7I3+Jh7j0wC9ktHubfA/uBDk25lz3wQjkoAHnZBy8CX76ZPu1JL3vhxaRDf16+ttnLfnhxzzcCpJc98UKD8mJSmI998UELe9lBo4+98WGmBO5jf3yY3fS21gwfe+TDnB/OaeR97JMP849ZHx7Tz89e+SFc2av3s19+LNaoeCv87Jkfy7StOtb72Tc/VmtX5x31s3d+bBT2hgbYvwCkffkB9jAAac+MAPsYgMS/JsBeBiDxNgXYzwAkvpAgexqExJMTZF+DaBTyy4PsbRBS3sog+xtEs1i/McgeB9Eq1uutss8q5PGZKnutokuMn66y3yrOi9eXq+y5iividoPKvqu4QX4m4n9R7bq86AcAAA=="},"shape":[253],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/5WUPUyTURSGv5ZWIj+hNhWDGGxMRDBCgPJXk/p1IzEsbMYQdTDMzExNDHNnYkxIGlcGXdgknTvLKAyC/IgFKUUQ67nnPkCvfjHxW56ce++5533Pua3neS9muh9nPf0eZcMm3siYeHGhI8P6Q7s+kzbxSmkyzXranlsYt3FunH1lNpUaZ3+M82N2/f0o50c5P8K+Qzk3TP4w54g7ztdT6EqR9wdzQ/UUPUPks+4N2XtLg9w3yHmHUheWBlxODpDXz339xH3ZkNbrY/1BtlarfSiV7rOvFN3n7OV8D/v3WO8m767l5B2znpxuS3Lv7XomlyZuGa5NLXeqvq75Tu7ptHn5m9qH9Tnl2lwikHKuQ/PyxRt6vmm13TC3M6VcnM20c17prRau05cEcYL8ODqUa4XZOPfEmcc1vW9iPUa+MpdYilEnRp2Y6Y/4a0NPaxAlr5U+XtKsFyst+G5hvVn1LXc1m1j0NNG/q6bPz/PFRnQ7lP1G+ntF4/mdKPWj5EWZX5S8KPWi6Igwjwh1L2n9BnKl0hNhzhF8NtBPh+KnAX1h/Iap51D6GUZ/CP0h9Ia4L0R9j/oeeQ7Nd0HzPrvma7748XqnleJbKfP95dv6Ssm3cb545tt6Z36D6tdY+vTTt+9BKT5sXOlRyhdI8XHq2/4oxc8pejQWPXY/06QUXSf1lL45FP8n6FVKv374dr4ORe9xPUX3sS/9qH0s/E37/v9J+f6L4ruK7yq+q/iu4teh+DtiHkf4C6TMp1JP8auU34FD8XsYRJnbIXM7ROd35hBImcMB+pTyP3SAngPq7/NelPJe9ul7uZ5Sv0y/y/S1TL/K9OWbodTZu6Cts2fyPhVmv17QrL99vav14q92uU+ZfJLexZ/D5NOXO/jZxocyO/Jsm3e1zXvawpdD8bdFnS8OE0ubmvfujVJ8bDJXhzLXDYf54mf/NzlDLu7oBwAA"},"shape":[253],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942819","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942820"}}},"glyph":{"type":"object","name":"Line","id":"p942815","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p942816","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p942817","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p942828","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942822","attributes":{"selected":{"type":"object","name":"Selection","id":"p942823","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942824"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p942829","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942830"}}},"glyph":{"type":"object","name":"Line","id":"p942825","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p942826","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p942827","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p942767","attributes":{"tools":[{"id":"p942780"},{"id":"p942781"},{"id":"p942782"},{"id":"p942790"},{"type":"object","name":"SaveTool","id":"p942791"},{"id":"p942832"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p942775","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p942776","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p942777"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p942778"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p942770","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p942771","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p942772"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p942773"}}}],"center":[{"type":"object","name":"Grid","id":"p942774","attributes":{"axis":{"id":"p942770"}}},{"type":"object","name":"Grid","id":"p942779","attributes":{"dimension":1,"axis":{"id":"p942775"}}},{"type":"object","name":"Legend","id":"p942810","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p942811","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p942807"}]}},{"type":"object","name":"LegendItem","id":"p942821","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p942818"}]}},{"type":"object","name":"LegendItem","id":"p942831","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p942828"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p942833","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p942843","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p942835"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p942844"},"y_scale":{"type":"object","name":"LinearScale","id":"p942845"},"title":{"type":"object","name":"Title","id":"p942836","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p942874","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942868","attributes":{"selected":{"type":"object","name":"Selection","id":"p942869","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942870"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9KyZM1k+iAk5CDpxGB6bYerQ2dHxw/yQpkPJOcvwpp0CDnOLz1me+vnXfvWqVa+2NLI6nMrWqG9+wuCQlpZ2TCfji/37vd/Xbfn9zR4AO30YDWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942875","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942876"}}},"glyph":{"type":"object","name":"Line","id":"p942871","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p942872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p942873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p942883","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942877","attributes":{"selected":{"type":"object","name":"Selection","id":"p942878","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942879"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9KyZM1k+iAk5CDpxGB6bYerQ2dHxw/yQpkPJOcvwpp0CDnOLz1me+vnXfvWqVa+2NLI6nMrWqG9+wuCQlpZ2TCfji/37vd/Xbfn9zR4AO30YDWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942884","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942885"}}},"glyph":{"type":"object","name":"Line","id":"p942880","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p942881","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p942882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p942894","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942888","attributes":{"selected":{"type":"object","name":"Selection","id":"p942889","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942890"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9KyZM1k+iAk5CDpxGB6bYerQ2dHxw/yQpkPJOcvwpp0CDnOLz1me+vnXfvWqVa+2NLI6nMrWqG9+wuCQlpZ2TCfji/37vd/Xbfn9zR4AO30YDWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942895","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942896"}}},"glyph":{"type":"object","name":"Line","id":"p942891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p942892","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p942893","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p942904","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942898","attributes":{"selected":{"type":"object","name":"Selection","id":"p942899","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942900"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p942905","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942906"}}},"glyph":{"type":"object","name":"Line","id":"p942901","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p942902","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p942903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p942842","attributes":{"tools":[{"id":"p942856"},{"id":"p942857"},{"id":"p942858"},{"id":"p942866"},{"type":"object","name":"SaveTool","id":"p942867"},{"id":"p942908"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p942851","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p942852","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p942853"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p942854"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p942846","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p942847"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p942848"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p942849"}}}],"center":[{"type":"object","name":"Grid","id":"p942850","attributes":{"axis":{"id":"p942846"}}},{"type":"object","name":"Grid","id":"p942855","attributes":{"dimension":1,"axis":{"id":"p942851"}}},{"type":"object","name":"Legend","id":"p942886","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p942887","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p942883"}]}},{"type":"object","name":"LegendItem","id":"p942897","attributes":{"label":{"type":"value","value":"Median Year (1980)"},"renderers":[{"id":"p942894"}]}},{"type":"object","name":"LegendItem","id":"p942907","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p942904"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p942919","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8a1a9257-9184-44d9-876e-091c6ff4fbc9","roots":{"p942920":"b94f33ca-d8b8-4972-a50b-39d801ac9f13"},"root_ids":["p942920"]}];
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