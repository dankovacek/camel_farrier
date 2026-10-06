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
    
    
    const element = document.getElementById("f8f7569c-1327-42dc-98e0-8a334d2ef2a8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f8f7569c-1327-42dc-98e0-8a334d2ef2a8' but no matching script tag was found.")
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
                  const docs_json = '{"b20f5754-ba7d-4e66-bfde-156db7acea0c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p750104","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p750105"}}},"roots":[{"type":"object","name":"Column","id":"p750268","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p750265","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p750264","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p750257","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p750128"},{"type":"object","name":"PanTool","id":"p750204"}]}},{"type":"object","name":"ToolProxy","id":"p750258","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p750129","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p750205","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p750259","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p750130","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p750131","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p750137","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p750136","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p750206","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p750207","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p750213","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p750212","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p750260","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p750138"},{"type":"object","name":"ResetTool","id":"p750214"}]}},{"type":"object","name":"SaveTool","id":"p750261"},{"type":"object","name":"ToolProxy","id":"p750262","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p750180","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p750263","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p750256","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p750106","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p750107"},"y_range":{"type":"object","name":"DataRange1d","id":"p750108"},"x_scale":{"type":"object","name":"LinearScale","id":"p750116"},"y_scale":{"type":"object","name":"LogScale","id":"p750117"},"title":{"type":"object","name":"Title","id":"p750109","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p750146","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p750140","attributes":{"selected":{"type":"object","name":"Selection","id":"p750141","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p750142"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGC4vviNvWZM/6GHZ17bc11fLKAX9gLEf2Ty/ol9oS2X+LX/D+2Byh7oTnhg/yZwx7ymvPv2jEABzZj79kE75I6uWHLPPi0tjU154V37M2fO9Dh337FfXGDLZf/4lj2Q2p5Uf9Pe2Nj4871l1+2rRdYdNzO/BjJvgZT+VXv3h1Uh049esX9UJcLnfvKyfdvrwB2Jty+B1KV/f3IRZK6be9FFkDnXO7ZesL8MNLj29Bn7Ne4Preb8PGof1X/IlOHYYft////vL8o4aC+yzv2h6MH99izXF1/Ybb/P3groobyve+z9d8i1NnVvBZl37E/7FvsFBbavylo22/8HgpUfN8HpLFuu8EXTN9onAxUqOG4Ei19bvMH+ReCOewl/19vzrHNf2FO/3v7b///19qbr7BOB6jqS19r/+P8//vHS1fbnFhfU3v+xyv5Olci7yx9X2N+qEsk78WqZvZqxcTDr4kX2G8+c4bnVP8X+Kdi9E3HSpkB/bd/SZf8JaH/HjCb7X///3/dNasBJbwOaVzK5wn6Upk04AAB0frWaKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p750147","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p750148"}}},"glyph":{"type":"object","name":"Line","id":"p750143","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p750144","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p750145","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p750155","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p750149","attributes":{"selected":{"type":"object","name":"Selection","id":"p750150","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p750151"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGC4vviNvWZM/6GHZ17bc11fLKAX9gLEf2Ty/ol9oS2X+LX/D+2Byh7oTnhg/yZwx7ymvPv2jEABzZj79kE75I6uWHLPPi0tjU154V37M2fO9Dh337FfXGDLZf/4lj2Q2p5Uf9Pe2Nj4871l1+2rRdYdNzO/BjJvgZT+VXv3h1Uh049esX9UJcLnfvKyfdvrwB2Jty+B1KV/f3IRZK6be9FFkDnXO7ZesL8MNLj29Bn7Ne4Preb8PGof1X/IlOHYYft////vL8o4aC+yzv2h6MH99izXF1/Ybb/P3groobyve+z9d8i1NnVvBZl37E/7FvsFBbavylo22/8HgpUfN8HpLFuu8EXTN9onAxUqOG4Ei19bvMH+ReCOewl/19vzrHNf2FO/3v7b///19qbr7BOB6jqS19r/+P8//vHS1fbnFhfU3v+xyv5Olci7yx9X2N+qEsk78WqZvZqxcTDr4kX2G8+c4bnVP8X+Kdi9E3HSpkB/bd/SZf8JaH/HjCb7X///3/dNasBJbwOaVzK5wn6Upk04AAB0frWaKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p750156","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p750157"}}},"glyph":{"type":"object","name":"Line","id":"p750152","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p750153","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p750154","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p750166","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p750160","attributes":{"selected":{"type":"object","name":"Selection","id":"p750161","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p750162"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SS0hUYRiGIwgF6UIhJoKJ0WQXRjMds6aZdy5nxrmf+zkuohYWLipa1CbahG2ioEWLFhGBRYuUFi5dZZtQkHDhYpDAwsUoLly6Es//f+/ZDOfM/13e5/lT+5szJ1OtdEr/7qcHF1uzb+JHIe/tqCeaU+9rJyDfT0O/Jjr5/1kYXXeerhk9PNeL7/rp4/l+LCzHPj5cOM+6C9DtF2OsH8CvtnMv9pYusc8VrKjjy1fZL441PWCQfYfwSDe8xv7D2FtSDYY55zqe6YIRzhuFxBrl3ASiYVHBGOffwBH9jHOPcbyKIGzO3OQ+t6DXa0tyryTexlWC29wvhVMaVJp7puVcCdwXiMK2Zjsy3DsjdasZ7p+V+ndZ5shKHyvHPDlEsJtTZ/LMlYfvRc96nvkMaPwfDOY0oPVMFpi3AEUz1lNk7iLU8a6/ReafgI73eYIcSvinbsG9EnmU8EUF6C+TSxmqfXOrTD4VaF3fKuRUxbbSO10lryrm1HW4XCO3mnDYrZFfXTj8qJNjQzg8aZBnQ/J0m+RqSq7nJvmakm/DJGdLciYt8rYk7yeL3C3JfWCRvy3579r0YAuHnzZ92MKjz6EXR7i8dOjHET7/HXpyhVPOpS8X9xWvry69uSgoYcc8+vNwUfF74NGjh3Yl5LdHn57wHPDp1RcOr3369YXDjk/PgXCoBPQdCIf5gN4D4XA8pP9QODwOeQ9C4fAn5H2YxCEqWtK1IAQAAA=="},"shape":[132],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGC4vviNPZBaIMHyCkQrRKU8B9EM/648AdOXfR+B6APe5g/B6o4oPLBnBDI0Y+5j0EDhB1Ui90DqGjIm3rX//////jNn7oD1y7XeBvH/X/K9BeInCETcBIuX7bsOtodJG0wvkNK/CqeByuX1714BmzdZ4grIPqD7LoP1KWy4BKIVWl9fBKufOfMi2D5vczA/Qaj5gv0/oEAo31n7v0Baq/0YWN/nv0dAfHtj48Mg+f1FGQdB4iApED8+xXq//U+gep1Ne8H8iW/32P8G0v2HtkL1bwGJy0dYbgGL7ynZDLL3/8qPmzBooDzQ/I0gdWAapO7a4g1w+hdQvGzfensY/e3//3p703X2MBrozvlS+mvtfwDtebx0NZz+AjRntcwqsPtLJq8A6a+35Vpu/xXoLrbGpfafgP7jWDPH/inY3olE01fB+nrsHwDN12pvA5l73zepgWh6G9g9Ffaj9PAIBwAwfzepIAQAAA=="},"shape":[132],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p750167","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p750168"}}},"glyph":{"type":"object","name":"Line","id":"p750163","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p750164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p750165","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p750176","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p750170","attributes":{"selected":{"type":"object","name":"Selection","id":"p750171","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p750172"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p750177","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p750178"}}},"glyph":{"type":"object","name":"Line","id":"p750173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p750174","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p750175","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p750115","attributes":{"tools":[{"id":"p750128"},{"id":"p750129"},{"id":"p750130"},{"id":"p750138"},{"type":"object","name":"SaveTool","id":"p750139"},{"id":"p750180"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p750123","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p750124","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p750125"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p750126"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p750118","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p750119","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p750120"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p750121"}}}],"center":[{"type":"object","name":"Grid","id":"p750122","attributes":{"axis":{"id":"p750118"}}},{"type":"object","name":"Grid","id":"p750127","attributes":{"dimension":1,"axis":{"id":"p750123"}}},{"type":"object","name":"Legend","id":"p750158","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p750159","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p750155"}]}},{"type":"object","name":"LegendItem","id":"p750169","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p750166"}]}},{"type":"object","name":"LegendItem","id":"p750179","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p750176"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p750181","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p750191","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p750183"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p750192"},"y_scale":{"type":"object","name":"LinearScale","id":"p750193"},"title":{"type":"object","name":"Title","id":"p750184","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p750222","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p750216","attributes":{"selected":{"type":"object","name":"Selection","id":"p750217","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p750218"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC21sbJztkvnY/t7du4KCghft112L2i0uvNR+2///+0smV9indXREXNnfaI9LPwAsKkoNYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p750223","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p750224"}}},"glyph":{"type":"object","name":"Line","id":"p750219","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p750220","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p750221","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p750231","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p750225","attributes":{"selected":{"type":"object","name":"Selection","id":"p750226","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p750227"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC21sbJztkvnY/t7du4KCghft112L2i0uvNR+2///+0smV9indXREXNnfaI9LPwAsKkoNYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p750232","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p750233"}}},"glyph":{"type":"object","name":"Line","id":"p750228","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p750229","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p750230","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p750242","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p750236","attributes":{"selected":{"type":"object","name":"Selection","id":"p750237","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p750238"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC21sbJztkvnY/t7du4KCghft112L2i0uvNR+2///+0smV9indXREXNnfaI9LPwAsKkoNYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p750243","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p750244"}}},"glyph":{"type":"object","name":"Line","id":"p750239","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p750240","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p750241","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p750252","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p750246","attributes":{"selected":{"type":"object","name":"Selection","id":"p750247","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p750248"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p750253","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p750254"}}},"glyph":{"type":"object","name":"Line","id":"p750249","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p750250","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p750251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p750190","attributes":{"tools":[{"id":"p750204"},{"id":"p750205"},{"id":"p750206"},{"id":"p750214"},{"type":"object","name":"SaveTool","id":"p750215"},{"id":"p750256"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p750199","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p750200","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p750201"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p750202"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p750194","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p750195"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p750196"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p750197"}}}],"center":[{"type":"object","name":"Grid","id":"p750198","attributes":{"axis":{"id":"p750194"}}},{"type":"object","name":"Grid","id":"p750203","attributes":{"dimension":1,"axis":{"id":"p750199"}}},{"type":"object","name":"Legend","id":"p750234","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p750235","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p750231"}]}},{"type":"object","name":"LegendItem","id":"p750245","attributes":{"label":{"type":"value","value":"Median Year (1956)"},"renderers":[{"id":"p750242"}]}},{"type":"object","name":"LegendItem","id":"p750255","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p750252"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p750267","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b20f5754-ba7d-4e66-bfde-156db7acea0c","roots":{"p750268":"f8f7569c-1327-42dc-98e0-8a334d2ef2a8"},"root_ids":["p750268"]}];
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