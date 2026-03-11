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
    
    
    const element = document.getElementById("c3b62ed7-997f-4af9-9165-b8c5deae3a15");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c3b62ed7-997f-4af9-9165-b8c5deae3a15' but no matching script tag was found.")
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
                  const docs_json = '{"eda53b0b-f87c-4028-b397-4749ff10cc6d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p942618","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p942619"}}},"roots":[{"type":"object","name":"Column","id":"p942747","attributes":{"children":[{"type":"object","name":"Figure","id":"p942620","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p942621"},"y_range":{"type":"object","name":"DataRange1d","id":"p942622"},"x_scale":{"type":"object","name":"LinearScale","id":"p942630"},"y_scale":{"type":"object","name":"LinearScale","id":"p942631"},"title":{"type":"object","name":"Title","id":"p942623","attributes":{"text":"08NM239 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p942684","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942678","attributes":{"selected":{"type":"object","name":"Selection","id":"p942679","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942680"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYPh7linEiYGBYYo4C5jWTmQF04dWsYHpyC/sYPqDLSeYbm/nCnECAH/yL/Y4AAAA"},"shape":[7],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942685","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942686"}}},"glyph":{"type":"object","name":"VArea","id":"p942681","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p942682","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p942683","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p942695","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942689","attributes":{"selected":{"type":"object","name":"Selection","id":"p942690","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942691"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYBB0FApxYmBgWNElDKbtr4iA6WuyYmA6N10cTLNslADTs39JgmkjF2kwfbJXBkwnXJcF098V5MF0X5YCmFbdogim9/xVAtPB7ipg+tUEVTDdeEsNTEuoaIDp9bmaYNptuxaYvsugA6ZLvHRDnADl0pP3sAAAAA=="},"shape":[22],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942696","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942697"}}},"glyph":{"type":"object","name":"VArea","id":"p942692","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p942693","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p942694","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p942704","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942698","attributes":{"selected":{"type":"object","name":"Selection","id":"p942699","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942700"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDj57VKQEwMDQ4LDFTD9vfMqmO67fA1Mq8reANN70m6C6eANt8D0q5+3wXSj890gJwDIu/eXSAAAAA=="},"shape":[9],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942705","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942706"}}},"glyph":{"type":"object","name":"VArea","id":"p942701","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p942702","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p942703","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p942714","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942708","attributes":{"selected":{"type":"object","name":"Selection","id":"p942709","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942710"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFh/7X6QEwMDg5vCQzB9N/MRmC7Z/BhMc/99AqYXuT0D05YTngc5AQBska3dOAAAAA=="},"shape":[7],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942715","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942716"}}},"glyph":{"type":"object","name":"VArea","id":"p942711","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p942712","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p942713","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p942723","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942717","attributes":{"selected":{"type":"object","name":"Selection","id":"p942718","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942719"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYNi282uQEwMDgy/zdzD9xOdHkBMANeKd0RgAAAA="},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942724","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942725"}}},"glyph":{"type":"object","name":"VArea","id":"p942720","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p942721","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p942722","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p942732","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942726","attributes":{"selected":{"type":"object","name":"Selection","id":"p942727","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942728"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYBB68CvIiYGBYaXmHzDtUPwXTF/f8y/ICQDX/pKMIAAAAA=="},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942733","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942734"}}},"glyph":{"type":"object","name":"VArea","id":"p942729","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p942730","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p942731","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6664000070095062},"y2":{"type":"value","value":53.34599922180176},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p942741","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p942735","attributes":{"selected":{"type":"object","name":"Selection","id":"p942736","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p942737"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FZzgWCgCA0Y+MpJARMkJmRFFJmyJNhdJwRSUplUpTV6VFRZSmSqmUEAoJ5ZZ2UopCyIqMi4yQUU/v+XMEAsGrnx/srQQCgeu0PO4IzOfgj59YR62AM9YUskNCEdd1feH900tYKaiU4z99ZRuNci7xrGCfe5Us2VvFkTbVbBFSw+8Lv7PH8Dru86rn0ykNbCRo5KxZTbzsVDP/KP7BAbqtPMy7jVMetPO8fh1cNbeTfc90sWzZL4426OFpW3v5c0YfbxQTOPxddIEQXzwvzGaV/fi1kSi7bRfjzkxxPiEhwboOA/jhRUl2rB7I9SZS7L9LmpWzZDhhoCzPXCzHpRHyvK1WgQeaKfK1PUo84bky50qr8Nqlqvw7Uo3PNKjzyHEa/HSvJi9/pcUtstoc6KzDGlG6fL9Jj+dbGPA3/xG8J9uQ5YaM5NsrjNky2oQLWkbxpkmmLHbYjC+9G8NjlMfxm5XmvDJ2PHe1W3DI1ImsFziJH32YzItUp3KD+zQ+EG/JQ7usONFqBtset+av+Ta8fZgtD/KcxdfvzuaJPXP4g/U89jwxnwWFdnxWayEbe9nzs2QHdv7tyK22i/noSSfWLF7CqTrL2G7Tcq5OdeZ/hV1Yfu4KjjntylZf3bhQfxV7b1nN4hnufFnUg8fareXsc568qmId/zL04tBtG1g/cyNn9vfmxfab+f/wLXzw21ZWMdnGd3du51lPdnCZ5C7esWg3S0X48o3ve3iSqR9/9N3L657tYyFpfz635ACbRB7k5/WH+J+xR7jNL4CPvQxkLdlj/GD5cV5wI4hrGoPZb3wIK/iHcuybkzxdIYyLXE7z5ltnuH/LWY6YeJ7HHbrAb3PCebXSJe52u8wnYyLYoP0K/zclkp0CrnFj7nU+pBLFqu43+d6dWzy7M5rLLWN457FYls6P4yj1eJ68NoHzEhN5ffddFrZO4vPByTyqIIVfaKayy/oH3J6Uxsf70nm47UNOC33EC79k8nftx7x34xMekprFcULPeMac5/wl7AVvKX3JEvqv+crmN2yens05IjnsPv8d95x9z6fKc3mE4Ud+7JPHSx7lc5P4Zz68sIDVwgs5qaqI5xgXc8WOEt71uJRlJMv4pmM5T7lcwfk1lew1+hv3863mC09reLRULb90quMVV+v5Z10DB41pZG2/Jk5/0cz2g1u4dlkr77vexoqN7XzHvIOt93dy8esu3irfzQNcevjqzV4e/6OP300QOP59zUEh7n0rzGGKImzoJspPbovx0jZxbp4swUeODGD1XElOHjqI566W4so4ad7dIcODLWX51lE5nponz5/UhvAGD0UWSVTi8F/KbDpDhV8FqbLrZzXu0BjGwes0WCdJkzN6tdhhpjbXhejw/iJdVtLW5/gNBmxzfwSXCIzYZ/ZIlgwz5sgSE7bQG83vvU3ZI83M0eoPPMwTjpgIAAA="},"shape":[275],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7VVPUxTURR+/ZPIT6ikYgCDjYkIRAjtA6Em9d2tiWFhM4Yog2FmZrGJYWYmxoSkcWXQhU3SubOM0kEUqFqKpdAWnuee+93H0Vnf8uWcd+75+c459zqOs7S8vO85hOvFL4yQ80cL3zRu5sqHXshx9ha2f7C8sXHA/7OdXzU6Y4uMyfdvGfOJLcbNlewf53ZKpV9sT58ivXLdLmX0cWXUZ6/+Lc6qMNeTgf8Zjcr9MA35ETBj9O4c5MeKeRh5orjegSzOPTTyxqyxy1t5GnFc+EmbuuZT8JeGfQr1TkE/CXwAPkZxbg5+LabwfwLyBPykTNz9LM5lgLY+F/IU6kjjvAsZdvm05IfsZ+R5sp+U+RPOyXO2Hqp/HPb3IY8p3/c/lkpWPw79iNHP30WcO9APadxbTQwyLmyzTHPUz3a7hYQyc3pLY3JxfVCeV+VVllXnLtvvDK/1ad6SW7leZeaY54zmuk/GIbsh1JGAPq7PkV0n4scRbwD13DNyb5JxK3db+qNz/ciT49A+xDEXN5BfD+J2IP8o+tuj/b9YL8ZQT5j9rx2de8b/KWNh5Rj7WYGe92up7zXLaub5Ifat6ul8h9d82J9JP1bW++IZvk/xv8b47k0F+1/DXje0v8+Fle+eqedEIt0HDfgJg49+1N+DumPQh5W9BwxPF6jrQt8XdJ+02F+xznnRuRbunRj4vo55YT879VEH/YpiTm4q48/wX6x3S76pn5bvGPQx8G770Ua8OvO6PXwMjAR9MnVFUI8DPy3wbvNu4D7lvOh8l+x/gOXVbtTVIeugvodQRwj2IcQJIQ8ffWmB9ybu3Sbka/ATAw9R8BUNeBBIcSIS/8N9fIWmz77uN83XpSd4t0g8tvW8+Z8KzCfl3cY7xX0hHphf4q0ezHWEeb6A3AReeqJP1I9LyRfxz+9S8mmmgr2oYh4PENf8f/byyDP3QA3zWQ3Q5FmF35rcE7LnfaQ+WH8VzPlPuT/ifTyD3zb26mofBB+2bvqqf7zLeLft+8zxzP9jzOPV/gt/f98HZH+O/FpSDvLT+27qaEi9rYPm9UT2K/CbKzc9sb80fw72oB38/w1gGG5fmAgAAA=="},"shape":[275],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p942742","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p942743"}}},"glyph":{"type":"object","name":"Line","id":"p942738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p942739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p942740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p942629","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p942656"},{"type":"object","name":"WheelZoomTool","id":"p942657","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p942658","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p942659","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p942665","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p942664","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p942666","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p942667","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p942668","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p942669","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p942675","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p942674","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p942676"},{"type":"object","name":"SaveTool","id":"p942677"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p942651","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p942652","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p942653"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p942654"}}}],"right":[{"type":"object","name":"Legend","id":"p942687","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p942688","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p942684"},{"id":"p942695"}]}},{"type":"object","name":"LegendItem","id":"p942707","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p942704"},{"id":"p942714"},{"id":"p942723"},{"id":"p942732"}]}},{"type":"object","name":"LegendItem","id":"p942744","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p942741"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p942632","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p942633","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p942634","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p942635","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p942636","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p942637","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p942638","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p942639","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p942640","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p942641","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p942642","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p942643","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p942644","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p942645"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p942648","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p942647","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p942646","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p942649"}}}],"center":[{"type":"object","name":"Grid","id":"p942650","attributes":{"axis":{"id":"p942632"}}},{"type":"object","name":"Grid","id":"p942655","attributes":{"dimension":1,"axis":{"id":"p942651"}}}]}},{"type":"object","name":"Div","id":"p942745","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"eda53b0b-f87c-4028-b397-4749ff10cc6d","roots":{"p942747":"c3b62ed7-997f-4af9-9165-b8c5deae3a15"},"root_ids":["p942747"]}];
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