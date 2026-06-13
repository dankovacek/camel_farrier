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
    
    
    const element = document.getElementById("b0049a7a-d7f0-41e3-b049-8b724c3b4dd9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b0049a7a-d7f0-41e3-b049-8b724c3b4dd9' but no matching script tag was found.")
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
                  const docs_json = '{"69908eb9-3f9e-4c36-80cf-bff9e613f36b":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p378737","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p378738"}}},"roots":[{"type":"object","name":"Column","id":"p378901","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p378898","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p378897","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p378890","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p378761"},{"type":"object","name":"PanTool","id":"p378837"}]}},{"type":"object","name":"ToolProxy","id":"p378891","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p378762","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p378838","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p378892","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p378763","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378764","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378770","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378769","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p378839","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378840","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378846","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378845","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p378893","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p378771"},{"type":"object","name":"ResetTool","id":"p378847"}]}},{"type":"object","name":"SaveTool","id":"p378894"},{"type":"object","name":"ToolProxy","id":"p378895","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378813","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p378896","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p378889","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p378739","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p378740"},"y_range":{"type":"object","name":"DataRange1d","id":"p378741"},"x_scale":{"type":"object","name":"LinearScale","id":"p378749"},"y_scale":{"type":"object","name":"LogScale","id":"p378750"},"title":{"type":"object","name":"Title","id":"p378742","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378779","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378773","attributes":{"selected":{"type":"object","name":"Selection","id":"p378774","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378775"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGg49FXEIab/0NXDTsIOO+RasyfmCjrIt75mbAwVcLDluq688w+vw9kzZ1py0nkcvmnEvOd/yeVwfXFBrPoCDgc7ruvOdi8YHWL7D7ky+v63Z2BgSOg/9NP+q0aMuav7d/t17g+j7rh9tn8ZuEPO5cBLkDzD1YqnINrhYdUTML9x6mNkusGW67F9tci6/AdzHoHEH3T9fWgPdId2ktdDMF+FDYUGmvMAah6YVjDkwKT///+vvuTPPZD8gc9/7xCkjYyNfx9KuWMPpCcrGd2xZ2RgWOC67Tac3uj+0Il32W2wvTxMt+25ry82SJW8BebH7bppv/+rxhVrv5v2QHvlNxTdsD9z5gyPdvs1EH//ibJroHBh2nT9Klg9x5orIBoYDpfhNFBd/YFTF+3//v8fb33/PEjf/9Uyp+xbRNaF1988CnLHlX18R+z/AeUnvt1Ddfo32L5d9gfPnNHRnbodGl5b6EYfO3Nmy6b3m+y/gN2ximz6B1D/yo+L7AnRxlzXl5sVLrJ/8f//ff/e6Rg0AGN52mcoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378780","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378781"}}},"glyph":{"type":"object","name":"Line","id":"p378776","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378777","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378778","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378788","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378782","attributes":{"selected":{"type":"object","name":"Selection","id":"p378783","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378784"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGg49FXEIab/0NXDTsIOO+RasyfmCjrIt75mbAwVcLDluq688w+vw9kzZ1py0nkcvmnEvOd/yeVwfXFBrPoCDgc7ruvOdi8YHWL7D7ky+v63Z2BgSOg/9NP+q0aMuav7d/t17g+j7rh9tn8ZuEPO5cBLkDzD1YqnINrhYdUTML9x6mNkusGW67F9tci6/AdzHoHEH3T9fWgPdId2ktdDMF+FDYUGmvMAah6YVjDkwKT///+vvuTPPZD8gc9/7xCkjYyNfx9KuWMPpCcrGd2xZ2RgWOC67Tac3uj+0Il32W2wvTxMt+25ry82SJW8BebH7bppv/+rxhVrv5v2QHvlNxTdsD9z5gyPdvs1EH//ibJroHBh2nT9Klg9x5orIBoYDpfhNFBd/YFTF+3//v8fb33/PEjf/9Uyp+xbRNaF1988CnLHlX18R+z/AeUnvt1Ddfo32L5d9gfPnNHRnbodGl5b6EYfO3Nmy6b3m+y/gN2ximz6B1D/yo+L7AnRxlzXl5sVLrJ/8f//ff/e6Rg0AGN52mcoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378789","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378790"}}},"glyph":{"type":"object","name":"Line","id":"p378785","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378786","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378787","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378799","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378793","attributes":{"selected":{"type":"object","name":"Selection","id":"p378794","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378795"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2VCWxUVRiFrVLUIIUWrFas0BZaW2in63TvnNn3mTczb2ZeQYGoCC6IUas2CoKgAgoBl+JGEaJihbiA0FDRgiJrRFFATYkQsIrgAoKCUoj33p6Xm0xm5r37//8537lvyTf3DXjzox7LEvV50vJbduyKx3ac5fcLllftXzz5s5aC/t8HoOn8kblDmq5C//2DcHRt37yasUPQf186Pi+9RqxhvH84rh0k/8nkc9fjzt6Cbc3/ZvH5Eejq3uD4Y0Y29xmJgV+uvM364CjulwNT1/FVz5bkct88GKtNxw78msf9R2P2iw/njXprDOvko2POJ7ffPbmA9W6GGmtEIesWom+C/6dLB4tYfyxGe58Xaxz7KEbI/MMdLwRL2I8JH6fLSUvZVym0+ev/Gna0lP2VoffSwYxN3WXssxytLf+VT1xezn4rkKaEq2DfFVglpnvHqGT/lVDlzFWcowp7wrKAmfOYMWn7mm+XnTZzrmqcafhKrGrOVwPVztoazlmL7KLMymcW1nLeWnz4Rq0+blod566D87pbH9rnrOf89ehZJBVsoA4NmCHlSmmkHo0QMOzf8mMjdWnCstMnzk7Z3ER9LCieliYstlAnYPKfL9/wfT2oF/CuukDdgL+nbK6bmWWlflZYcvbuDs+3UkcrFhw6PD73nJV62iCGFwVt1NWGmySe+23U1w5V3m6nznas25X/2r3r7NTbjouCTkuOg7o74IZPWOqg/g4svSCBcNAHJ3o2ThfLST+cyH/giXsWHHLSFxfuL5ZPuOiPCwrPLhd9ciFVylfopl9uhJWBbvrmxitCnbcHeuifBwLmPY+2eOijByWqIQ/99OKRwGBBkJe+evHZlSMfP7XVS3+9GKwC56PPPiRm2V5/aYWPfvuwUtqf5qfvfpwU7tXN9NN/P6o+kBX85CCA2WLaw+MD5CGA3VLOXQFyEcRwFfgg+Qhi4vJPn0uuDpKTIDqMr28sygyRlxAknX3zQuQmhEaJ75kQ+Qnj6YWpIvFhchTGPgVomDxpWKwCrpErDRWqoEa+NEg1/1mskTMNs7LeD03arpE3DbnnOtt2XtTIXQQ7Bc1lVRHyF8F0BUyEHEaQoQ62CHmMoFPi0BMhlxHcIo+PjCj5jCKl8HcXfFFyGoXspmNOlLxGoW7fFCW3UZzaKg2Mkt8Y2lYMndpbECPHMYhwiAFi5DmGIyINnW0xch3DUxLnvTHyHYOKe6pOznUoeRt08q6jRQmqk3sdSp41OvnX0S3cMx3TmQMd4vAUCY4zD3Fc7bmr+vJonLmI470xMhBx5iMOFcctceYkDvV6OB9nXhJol3iYEsxNApLOoVMTzE8Cx1vbf2ltTzBHCSyS7RxIME8JlCtAk8xVEt+J03aDI8l8JSHCIARNMmdJqONkfZJ5S2KHPD5PJJk7AwrvXIP5M5Au1N/WbDCHBjaKt1HxUoN5NDBBAWQwlwYuU1cz/geD68VGOAcAAA=="},"shape":[231],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+3SPUhCURQA4KdQmJgUOYo5NNTQEI4h9y0NTeEqUg0hjdIg4ZINjSEO0So19UNEhIlEPaQhRPrVSpTUfqiIIDNDKX2dc7JQMcNBiOgtH+fc+94579zLcZzdl1bxHDxdpjbUrpeTQiDQivI6HSloplpo/d5ACulOZbHxeUszxYGAAo3bVKUaPPJCnoR6TSjUa0C1JoeUl1A9CeVVKyL7iEUG8bDZnCcdvmyxkMpg7LLoXyjv0aRR+N4TCs8jrSeP7ihvHLmhfGj8ulg+YbvC+FNucuaS1n8Q+qd95UL9C6pXUOhXUAz9J2j/qJOMdzTWJPQXL/RZVW2PjNZrUhTF9kj2HN8TUrlo3YV6Q97+KCsXzt3V547g+dck9M0rpBGaz3cOesO0Xk2cw+rYGfZVIs7FunWK+e1d60k1mTsVwjpw3iQvWw5WEu7XMeYrCnUmBP8h1iFxXz54wHIwt97Y/pewLi6p/bivRNjuUht38L0S8/C+82GT/RVf6b+9rNw3OL/w3gb+P9zn9X8Lc8D7o+xeY880t8VfZwb6WkjOsXp7K4qxgelZVqvvreAkfTgHAAA="},"shape":[231],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378800","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378801"}}},"glyph":{"type":"object","name":"Line","id":"p378796","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378797","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378798","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378809","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378803","attributes":{"selected":{"type":"object","name":"Selection","id":"p378804","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378805"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378810","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378811"}}},"glyph":{"type":"object","name":"Line","id":"p378806","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378807","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378808","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378748","attributes":{"tools":[{"id":"p378761"},{"id":"p378762"},{"id":"p378763"},{"id":"p378771"},{"type":"object","name":"SaveTool","id":"p378772"},{"id":"p378813"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p378756","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p378757","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p378758"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378759"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p378751","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378752","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378753"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378754"}}}],"center":[{"type":"object","name":"Grid","id":"p378755","attributes":{"axis":{"id":"p378751"}}},{"type":"object","name":"Grid","id":"p378760","attributes":{"dimension":1,"axis":{"id":"p378756"}}},{"type":"object","name":"Legend","id":"p378791","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378792","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p378788"}]}},{"type":"object","name":"LegendItem","id":"p378802","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p378799"}]}},{"type":"object","name":"LegendItem","id":"p378812","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378809"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p378814","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p378824","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p378816"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p378825"},"y_scale":{"type":"object","name":"LinearScale","id":"p378826"},"title":{"type":"object","name":"Title","id":"p378817","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378855","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378849","attributes":{"selected":{"type":"object","name":"Selection","id":"p378850","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378851"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC83Pz7/+gTC/g4uLi4iI/Tv7qOy1ov3vjtsHZ69dypi7yv7tu3d2Yv077K9HZcteWHbQHmhIx9rND+yDvTRd+SffsgcAWF9USGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378856","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378857"}}},"glyph":{"type":"object","name":"Line","id":"p378852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p378864","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378858","attributes":{"selected":{"type":"object","name":"Selection","id":"p378859","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378860"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC83Pz7/+gTC/g4uLi4iI/Tv7qOy1ov3vjtsHZ69dypi7yv7tu3d2Yv077K9HZcteWHbQHmhIx9rND+yDvTRd+SffsgcAWF9USGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378865","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378866"}}},"glyph":{"type":"object","name":"Line","id":"p378861","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378862","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p378863","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p378875","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378869","attributes":{"selected":{"type":"object","name":"Selection","id":"p378870","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378871"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC83Pz7/+gTC/g4uLi4iI/Tv7qOy1ov3vjtsHZ69dypi7yv7tu3d2Yv077K9HZcteWHbQHmhIx9rND+yDvTRd+SffsgcAWF9USGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378876","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378877"}}},"glyph":{"type":"object","name":"Line","id":"p378872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p378874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p378885","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378879","attributes":{"selected":{"type":"object","name":"Selection","id":"p378880","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378881"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p378886","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378887"}}},"glyph":{"type":"object","name":"Line","id":"p378882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p378884","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378823","attributes":{"tools":[{"id":"p378837"},{"id":"p378838"},{"id":"p378839"},{"id":"p378847"},{"type":"object","name":"SaveTool","id":"p378848"},{"id":"p378889"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p378832","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378833","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378834"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378835"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p378827","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p378828"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p378829"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p378830"}}}],"center":[{"type":"object","name":"Grid","id":"p378831","attributes":{"axis":{"id":"p378827"}}},{"type":"object","name":"Grid","id":"p378836","attributes":{"dimension":1,"axis":{"id":"p378832"}}},{"type":"object","name":"Legend","id":"p378867","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378868","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p378864"}]}},{"type":"object","name":"LegendItem","id":"p378878","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p378875"}]}},{"type":"object","name":"LegendItem","id":"p378888","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p378885"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p378900","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"69908eb9-3f9e-4c36-80cf-bff9e613f36b","roots":{"p378901":"b0049a7a-d7f0-41e3-b049-8b724c3b4dd9"},"root_ids":["p378901"]}];
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