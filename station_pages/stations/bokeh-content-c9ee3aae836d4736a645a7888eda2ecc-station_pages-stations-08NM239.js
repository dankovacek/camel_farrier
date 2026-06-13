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
    
    
    const element = document.getElementById("dc470356-ba01-4877-a6c2-b884db53bf03");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dc470356-ba01-4877-a6c2-b884db53bf03' but no matching script tag was found.")
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
                  const docs_json = '{"2abfcbb9-af48-4308-a355-3d1b0d7ca850":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p719730","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p719731"}}},"roots":[{"type":"object","name":"Column","id":"p719859","attributes":{"children":[{"type":"object","name":"Figure","id":"p719732","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p719733"},"y_range":{"type":"object","name":"DataRange1d","id":"p719734"},"x_scale":{"type":"object","name":"LinearScale","id":"p719742"},"y_scale":{"type":"object","name":"LinearScale","id":"p719743"},"title":{"type":"object","name":"Title","id":"p719735","attributes":{"text":"08NM239 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p719796","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719790","attributes":{"selected":{"type":"object","name":"Selection","id":"p719791","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719792"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYPh7linEiYGBYYo4C5jWTmQF04dWsYHpyC/sYPqDLSeYbm/nCnECAH/yL/Y4AAAA"},"shape":[7],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719797","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719798"}}},"glyph":{"type":"object","name":"VArea","id":"p719793","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p719794","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p719795","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p719807","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719801","attributes":{"selected":{"type":"object","name":"Selection","id":"p719802","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719803"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYBB0FApxYmBgWNElDKbtr4iA6WuyYmA6N10cTLNslADTs39JgmkjF2kwfbJXBkwnXJcF098V5MF0X5YCmFbdogim9/xVAtPB7ipg+tUEVTDdeEsNTEuoaIDp9bmaYNptuxaYvsugA6ZLvHRDnADl0pP3sAAAAA=="},"shape":[22],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719808","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719809"}}},"glyph":{"type":"object","name":"VArea","id":"p719804","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p719805","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p719806","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p719816","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719810","attributes":{"selected":{"type":"object","name":"Selection","id":"p719811","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719812"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDj57VKQEwMDQ4LDFTD9vfMqmO67fA1Mq8reANN70m6C6eANt8D0q5+3wXSj890gJwDIu/eXSAAAAA=="},"shape":[9],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719817","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719818"}}},"glyph":{"type":"object","name":"VArea","id":"p719813","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p719814","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p719815","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p719826","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719820","attributes":{"selected":{"type":"object","name":"Selection","id":"p719821","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719822"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFh/7X6QEwMDg5vCQzB9N/MRmC7Z/BhMc/99AqYXuT0D05YTngc5AQBska3dOAAAAA=="},"shape":[7],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719827","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719828"}}},"glyph":{"type":"object","name":"VArea","id":"p719823","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p719824","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p719825","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p719835","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719829","attributes":{"selected":{"type":"object","name":"Selection","id":"p719830","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719831"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYNi282uQEwMDgy/zdzD9xOdHkBMANeKd0RgAAAA="},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719836","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719837"}}},"glyph":{"type":"object","name":"VArea","id":"p719832","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p719833","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p719834","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p719844","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719838","attributes":{"selected":{"type":"object","name":"Selection","id":"p719839","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719840"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYBB68CvIiYGBYaXmHzDtUPwXTF/f8y/ICQDX/pKMIAAAAA=="},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719845","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719846"}}},"glyph":{"type":"object","name":"VArea","id":"p719841","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p719842","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p719843","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p719853","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p719847","attributes":{"selected":{"type":"object","name":"Selection","id":"p719848","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p719849"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FZzgWCgCA0Y+MpJARMkJmRFFJmyJNhdJwRSUplUpTV6VFRZSmSqmUEAoJ5ZZ2UopCyIqMi4yQUU/v+XMEAsGrnx/srQQCgeu0PO4IzOfgj59YR62AM9YUskNCEdd1feH900tYKaiU4z99ZRuNci7xrGCfe5Us2VvFkTbVbBFSw+8Lv7PH8Dru86rn0ykNbCRo5KxZTbzsVDP/KP7BAbqtPMy7jVMetPO8fh1cNbeTfc90sWzZL4426OFpW3v5c0YfbxQTOPxddIEQXzwvzGaV/fi1kSi7bRfjzkxxPiEhwboOA/jhRUl2rB7I9SZS7L9LmpWzZDhhoCzPXCzHpRHyvK1WgQeaKfK1PUo84bky50qr8Nqlqvw7Uo3PNKjzyHEa/HSvJi9/pcUtstoc6KzDGlG6fL9Jj+dbGPA3/xG8J9uQ5YaM5NsrjNky2oQLWkbxpkmmLHbYjC+9G8NjlMfxm5XmvDJ2PHe1W3DI1ImsFziJH32YzItUp3KD+zQ+EG/JQ7usONFqBtset+av+Ta8fZgtD/KcxdfvzuaJPXP4g/U89jwxnwWFdnxWayEbe9nzs2QHdv7tyK22i/noSSfWLF7CqTrL2G7Tcq5OdeZ/hV1Yfu4KjjntylZf3bhQfxV7b1nN4hnufFnUg8fareXsc568qmId/zL04tBtG1g/cyNn9vfmxfab+f/wLXzw21ZWMdnGd3du51lPdnCZ5C7esWg3S0X48o3ve3iSqR9/9N3L657tYyFpfz635ACbRB7k5/WH+J+xR7jNL4CPvQxkLdlj/GD5cV5wI4hrGoPZb3wIK/iHcuybkzxdIYyLXE7z5ltnuH/LWY6YeJ7HHbrAb3PCebXSJe52u8wnYyLYoP0K/zclkp0CrnFj7nU+pBLFqu43+d6dWzy7M5rLLWN457FYls6P4yj1eJ68NoHzEhN5ffddFrZO4vPByTyqIIVfaKayy/oH3J6Uxsf70nm47UNOC33EC79k8nftx7x34xMekprFcULPeMac5/wl7AVvKX3JEvqv+crmN2yens05IjnsPv8d95x9z6fKc3mE4Ud+7JPHSx7lc5P4Zz68sIDVwgs5qaqI5xgXc8WOEt71uJRlJMv4pmM5T7lcwfk1lew1+hv3863mC09reLRULb90quMVV+v5Z10DB41pZG2/Jk5/0cz2g1u4dlkr77vexoqN7XzHvIOt93dy8esu3irfzQNcevjqzV4e/6OP300QOP59zUEh7n0rzGGKImzoJspPbovx0jZxbp4swUeODGD1XElOHjqI566W4so4ad7dIcODLWX51lE5nponz5/UhvAGD0UWSVTi8F/KbDpDhV8FqbLrZzXu0BjGwes0WCdJkzN6tdhhpjbXhejw/iJdVtLW5/gNBmxzfwSXCIzYZ/ZIlgwz5sgSE7bQG83vvU3ZI83M0eoPPMwTjpgIAAA="},"shape":[275],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/61VPUxTURR+FJBYJSB5alCDjYkIRo1YEDGpvI3EsLzNGKIdTOfOb7GJYe78YkxIGtcOsnSz6dxZRmEQlaIiWkEF63e+cy48nbnL13Pf+f3OObee5+ULhfVZD1huvCOaXGqFH0RemlvbmO3yvNWw9plyHH8ULOXS7wW98QVi5tULYsmvEpeKuX/s6s3md+rjBPAXZLMnAvzG/aAgzu7To8XpIMV6Zsz/lGCQXZ40+a4hvyOfOybfE8wXRu8LLsXDOf2+fFvleFr1Sk6etDhZ1cveEqw35ydUz6MMZiij3pt2f8PwmvExpt/nmQd4djhh36/bPRF+JjTuOvNDPNYBdPUxH8iMhzqYB/zyHrLplSw/j/xAn4hjerHlqfmjDuNJ7Vw94Pmq2MH/FUHI40Gn03ndbLp7Iu5H9X7+ksg4F+3+vOBq5J8jhjXKmKMzgt5KxRfEnJ4VzCyUqYdD+2AtohykV6hfH1kcEt4y1bkBkTHHnDPM9ZCgiwM9xkEd9I/7QbGDXlpkxKcd4g1bPZdVHsgQq3MXBJ0/2DE+8mQc7APtMV+niOmVfkHE7RPE6bH+9ov/x+VGr9yjnpRgZrH1U/YG/n8QK8Wv3LNWuGn33Mv80DPKwdSjDUHUszUr/I8sdkx/N+kH9pRx9D6sqf/I36bey+f0B94oo44d8fe2UvzEONnstyTiPdihXVhLBYKRTx5gx3pRN+vCfUpQjiB42qddpbgv7wzek9+M12gzL9hRxlzRHnwfF8QcpQTr7TG+J6inR2TMyWlB+FP+G+2T1DO+0U/HN/3hvtd4d/3Ys3htwXxthHwDuw/6BBl1dYs96mEd8MM8wbvLm3wgT+YFe753rv8HuBYxP9TVl6wDfe+Se9RBhD4RcbosD+2rX2Vc8P6LeRdzRMjHRB9+WCf4ZB7gi0geEog4Wo8hPh31e3zoT/vckX5jvv5Ivjjk3SF43JN567ypkE/kze+YF/YFPJBf8EaZ+9FNnnWeIl95iHz6d31CP1Q2vrBn/F/KPJjhvGOOtqhfKfJ/DnH1+8MnLeotlHUfGm3qgVfuGfJUu7C2ndwT6HMf0Qfnb9Pm/Ivcuz1Cve7/kfXCL+vFXh3uQ4IPVzdUGPfgf9n+t93/M/LXPY5jneNCgXvO/U/4+/89gD++O8jP7R9lHM1P9l37yD64e1cH5pXvg+uX+45+sy9ufzGH3B/0QfdOvv8FYBhuX5gIAAA="},"shape":[275],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p719854","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p719855"}}},"glyph":{"type":"object","name":"Line","id":"p719850","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p719851","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p719852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p719741","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p719768"},{"type":"object","name":"WheelZoomTool","id":"p719769","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p719770","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p719771","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p719777","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p719776","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p719778","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p719779","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p719780","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p719781","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p719787","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p719786","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p719788"},{"type":"object","name":"SaveTool","id":"p719789"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p719763","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p719764","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p719765"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p719766"}}}],"right":[{"type":"object","name":"Legend","id":"p719799","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p719800","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p719796"},{"id":"p719807"}]}},{"type":"object","name":"LegendItem","id":"p719819","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p719816"},{"id":"p719826"},{"id":"p719835"},{"id":"p719844"}]}},{"type":"object","name":"LegendItem","id":"p719856","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p719853"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p719744","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p719745","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p719746","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p719747","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p719748","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p719749","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p719750","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p719751","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p719752","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p719753","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p719754","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p719755","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p719756","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p719757"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p719760","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p719759","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p719758","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p719761"}}}],"center":[{"type":"object","name":"Grid","id":"p719762","attributes":{"axis":{"id":"p719744"}}},{"type":"object","name":"Grid","id":"p719767","attributes":{"dimension":1,"axis":{"id":"p719763"}}}]}},{"type":"object","name":"Div","id":"p719857","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"2abfcbb9-af48-4308-a355-3d1b0d7ca850","roots":{"p719859":"dc470356-ba01-4877-a6c2-b884db53bf03"},"root_ids":["p719859"]}];
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