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
    
    
    const element = document.getElementById("b82e01a7-4bae-482c-bdee-98c4c1263e3e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b82e01a7-4bae-482c-bdee-98c4c1263e3e' but no matching script tag was found.")
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
                  const docs_json = '{"4615afa6-ba4b-4e1a-834f-6826daa8683f":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p378517","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p378518"}}},"roots":[{"type":"object","name":"Column","id":"p378681","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p378678","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p378677","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p378670","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p378541"},{"type":"object","name":"PanTool","id":"p378617"}]}},{"type":"object","name":"ToolProxy","id":"p378671","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p378542","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p378618","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p378672","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p378543","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378544","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378550","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378549","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p378619","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378620","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378626","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378625","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p378673","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p378551"},{"type":"object","name":"ResetTool","id":"p378627"}]}},{"type":"object","name":"SaveTool","id":"p378674"},{"type":"object","name":"ToolProxy","id":"p378675","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378593","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p378676","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378669","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p378519","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p378520"},"y_range":{"type":"object","name":"DataRange1d","id":"p378521"},"x_scale":{"type":"object","name":"LinearScale","id":"p378529"},"y_scale":{"type":"object","name":"LogScale","id":"p378530"},"title":{"type":"object","name":"Title","id":"p378522","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378559","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378553","attributes":{"selected":{"type":"object","name":"Selection","id":"p378554","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378555"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGg49FXEIab/0NXDTsIOO+RasyfmCjrIt75mbAwVcLDluq688w+vw9kzZ1py0nkcvmnEvOd/yeVwfXFBrPoCDgc7ruvOdi8YHWL7D7ky+v63Z2BgSOg/9NP+q0aMuav7d/t17g+j7rh9tn8ZuEPO5cBLkDzD1YqnINrhYdUTML9x6mNkusGW67F9tci6/AdzHoHEH3T9fWgPdId2ktdDMF+FDYUGmvMAah6YVjDkwKT///+vvuTPPZD8gc9/7xCkjYyNfx9KuWMPpCcrGd2xZ2RgWOC67Tac3uj+0Il32W2wvTxMt+25ry82SJW8BebH7bppv/+rxhVrv5v2QHvlNxTdsD9z5gyPdvs1EH//ibJroHBh2nT9Klg9x5orIBoYDpfhNFBd/YFTF+3//v8fb33/PEjf/9Uyp+xbRNaF1988CnLHlX18R+z/AeUnvt1Ddfo32L5d9gfPnNHRnbodGl5b6EYfO3Nmy6b3m+y/gN2ximz6B1D/yo+L7AnRxlzXl5sVLrJ/8f//ff/e6Rg0AGN52mcoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378560","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378561"}}},"glyph":{"type":"object","name":"Line","id":"p378556","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378557","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378558","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378568","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378562","attributes":{"selected":{"type":"object","name":"Selection","id":"p378563","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378564"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGg49FXEIab/0NXDTsIOO+RasyfmCjrIt75mbAwVcLDluq688w+vw9kzZ1py0nkcvmnEvOd/yeVwfXFBrPoCDgc7ruvOdi8YHWL7D7ky+v63Z2BgSOg/9NP+q0aMuav7d/t17g+j7rh9tn8ZuEPO5cBLkDzD1YqnINrhYdUTML9x6mNkusGW67F9tci6/AdzHoHEH3T9fWgPdId2ktdDMF+FDYUGmvMAah6YVjDkwKT///+vvuTPPZD8gc9/7xCkjYyNfx9KuWMPpCcrGd2xZ2RgWOC67Tac3uj+0Il32W2wvTxMt+25ry82SJW8BebH7bppv/+rxhVrv5v2QHvlNxTdsD9z5gyPdvs1EH//ibJroHBh2nT9Klg9x5orIBoYDpfhNFBd/YFTF+3//v8fb33/PEjf/9Uyp+xbRNaF1988CnLHlX18R+z/AeUnvt1Ddfo32L5d9gfPnNHRnbodGl5b6EYfO3Nmy6b3m+y/gN2ximz6B1D/yo+L7AnRxlzXl5sVLrJ/8f//ff/e6Rg0AGN52mcoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378569","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378570"}}},"glyph":{"type":"object","name":"Line","id":"p378565","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378566","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378567","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378579","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378573","attributes":{"selected":{"type":"object","name":"Selection","id":"p378574","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378575"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2VCWxUVRiFrVLUIIUWrFas0BZaW2in63TvnNn3mTczb2ZeQYGoCC6IUas2CoKgAgoBl+JGEaJihbiA0FDRgiJrRFFATYkQsIrgAoKCUoj33p6Xm0xm5r37//8537lvyTf3DXjzox7LEvV50vJbduyKx3ac5fcLllftXzz5s5aC/t8HoOn8kblDmq5C//2DcHRt37yasUPQf186Pi+9RqxhvH84rh0k/8nkc9fjzt6Cbc3/ZvH5Eejq3uD4Y0Y29xmJgV+uvM364CjulwNT1/FVz5bkct88GKtNxw78msf9R2P2iw/njXprDOvko2POJ7ffPbmA9W6GGmtEIesWom+C/6dLB4tYfyxGe58Xaxz7KEbI/MMdLwRL2I8JH6fLSUvZVym0+ev/Gna0lP2VoffSwYxN3WXssxytLf+VT1xezn4rkKaEq2DfFVglpnvHqGT/lVDlzFWcowp7wrKAmfOYMWn7mm+XnTZzrmqcafhKrGrOVwPVztoazlmL7KLMymcW1nLeWnz4Rq0+blod566D87pbH9rnrOf89ehZJBVsoA4NmCHlSmmkHo0QMOzf8mMjdWnCstMnzk7Z3ER9LCieliYstlAnYPKfL9/wfT2oF/CuukDdgL+nbK6bmWWlflZYcvbuDs+3UkcrFhw6PD73nJV62iCGFwVt1NWGmySe+23U1w5V3m6nznas25X/2r3r7NTbjouCTkuOg7o74IZPWOqg/g4svSCBcNAHJ3o2ThfLST+cyH/giXsWHHLSFxfuL5ZPuOiPCwrPLhd9ciFVylfopl9uhJWBbvrmxitCnbcHeuifBwLmPY+2eOijByWqIQ/99OKRwGBBkJe+evHZlSMfP7XVS3+9GKwC56PPPiRm2V5/aYWPfvuwUtqf5qfvfpwU7tXN9NN/P6o+kBX85CCA2WLaw+MD5CGA3VLOXQFyEcRwFfgg+Qhi4vJPn0uuDpKTIDqMr28sygyRlxAknX3zQuQmhEaJ75kQ+Qnj6YWpIvFhchTGPgVomDxpWKwCrpErDRWqoEa+NEg1/1mskTMNs7LeD03arpE3DbnnOtt2XtTIXQQ7Bc1lVRHyF8F0BUyEHEaQoQ62CHmMoFPi0BMhlxHcIo+PjCj5jCKl8HcXfFFyGoXspmNOlLxGoW7fFCW3UZzaKg2Mkt8Y2lYMndpbECPHMYhwiAFi5DmGIyINnW0xch3DUxLnvTHyHYOKe6pOznUoeRt08q6jRQmqk3sdSp41OvnX0S3cMx3TmQMd4vAUCY4zD3Fc7bmr+vJonLmI470xMhBx5iMOFcctceYkDvV6OB9nXhJol3iYEsxNApLOoVMTzE8Cx1vbf2ltTzBHCSyS7RxIME8JlCtAk8xVEt+J03aDI8l8JSHCIARNMmdJqONkfZJ5S2KHPD5PJJk7AwrvXIP5M5Au1N/WbDCHBjaKt1HxUoN5NDBBAWQwlwYuU1cz/geD68VGOAcAAA=="},"shape":[231],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+3SPUhCURQA4KdQmJgUOYo5NNTQEI4h9y0NTeEqUg0hjdIg4ZINjSEO0So19UNEhIlEPaQhRPrVSpTUfqiIIDNDKX2dc7JQMcNBiOgtH+fc+94579zLcZzdl1bxHDxdpjbUrpeTQiDQivI6HSloplpo/d5ACulOZbHxeUszxYGAAo3bVKUaPPJCnoR6TSjUa0C1JoeUl1A9CeVVKyL7iEUG8bDZnCcdvmyxkMpg7LLoXyjv0aRR+N4TCs8jrSeP7ihvHLmhfGj8ulg+YbvC+FNucuaS1n8Q+qd95UL9C6pXUOhXUAz9J2j/qJOMdzTWJPQXL/RZVW2PjNZrUhTF9kj2HN8TUrlo3YV6Q97+KCsXzt3V547g+dck9M0rpBGaz3cOesO0Xk2cw+rYGfZVIs7FunWK+e1d60k1mTsVwjpw3iQvWw5WEu7XMeYrCnUmBP8h1iFxXz54wHIwt97Y/pewLi6p/bivRNjuUht38L0S8/C+82GT/RVf6b+9rNw3OL/w3gb+P9zn9X8Lc8D7o+xeY880t8VfZwb6WkjOsXp7K4qxgelZVqvvreAkfTgHAAA="},"shape":[231],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378580","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378581"}}},"glyph":{"type":"object","name":"Line","id":"p378576","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378577","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378578","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378589","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378583","attributes":{"selected":{"type":"object","name":"Selection","id":"p378584","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378585"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378590","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378591"}}},"glyph":{"type":"object","name":"Line","id":"p378586","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378587","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378588","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378528","attributes":{"tools":[{"id":"p378541"},{"id":"p378542"},{"id":"p378543"},{"id":"p378551"},{"type":"object","name":"SaveTool","id":"p378552"},{"id":"p378593"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p378536","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p378537","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p378538"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378539"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p378531","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378532","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378533"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378534"}}}],"center":[{"type":"object","name":"Grid","id":"p378535","attributes":{"axis":{"id":"p378531"}}},{"type":"object","name":"Grid","id":"p378540","attributes":{"dimension":1,"axis":{"id":"p378536"}}},{"type":"object","name":"Legend","id":"p378571","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378572","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p378568"}]}},{"type":"object","name":"LegendItem","id":"p378582","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p378579"}]}},{"type":"object","name":"LegendItem","id":"p378592","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378589"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p378594","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p378604","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p378596"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p378605"},"y_scale":{"type":"object","name":"LinearScale","id":"p378606"},"title":{"type":"object","name":"Title","id":"p378597","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378635","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378629","attributes":{"selected":{"type":"object","name":"Selection","id":"p378630","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378631"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC83Pz7/+gTC/g4uLi4iI/Tv7qOy1ov3vjtsHZ69dypi7yv7tu3d2Yv077K9HZcteWHbQHmhIx9rND+yDvTRd+SffsgcAWF9USGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378636","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378637"}}},"glyph":{"type":"object","name":"Line","id":"p378632","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378633","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378634","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378644","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378638","attributes":{"selected":{"type":"object","name":"Selection","id":"p378639","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378640"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC83Pz7/+gTC/g4uLi4iI/Tv7qOy1ov3vjtsHZ69dypi7yv7tu3d2Yv077K9HZcteWHbQHmhIx9rND+yDvTRd+SffsgcAWF9USGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378645","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378646"}}},"glyph":{"type":"object","name":"Line","id":"p378641","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378642","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378643","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378655","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378649","attributes":{"selected":{"type":"object","name":"Selection","id":"p378650","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378651"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC83Pz7/+gTC/g4uLi4iI/Tv7qOy1ov3vjtsHZ69dypi7yv7tu3d2Yv077K9HZcteWHbQHmhIx9rND+yDvTRd+SffsgcAWF9USGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378656","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378657"}}},"glyph":{"type":"object","name":"Line","id":"p378652","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378653","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378665","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378659","attributes":{"selected":{"type":"object","name":"Selection","id":"p378660","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378661"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378666","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378667"}}},"glyph":{"type":"object","name":"Line","id":"p378662","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378663","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378603","attributes":{"tools":[{"id":"p378617"},{"id":"p378618"},{"id":"p378619"},{"id":"p378627"},{"type":"object","name":"SaveTool","id":"p378628"},{"id":"p378669"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p378612","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378613","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378614"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378615"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p378607","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p378608"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p378609"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p378610"}}}],"center":[{"type":"object","name":"Grid","id":"p378611","attributes":{"axis":{"id":"p378607"}}},{"type":"object","name":"Grid","id":"p378616","attributes":{"dimension":1,"axis":{"id":"p378612"}}},{"type":"object","name":"Legend","id":"p378647","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378648","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p378644"}]}},{"type":"object","name":"LegendItem","id":"p378658","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p378655"}]}},{"type":"object","name":"LegendItem","id":"p378668","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378665"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p378680","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"4615afa6-ba4b-4e1a-834f-6826daa8683f","roots":{"p378681":"b82e01a7-4bae-482c-bdee-98c4c1263e3e"},"root_ids":["p378681"]}];
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