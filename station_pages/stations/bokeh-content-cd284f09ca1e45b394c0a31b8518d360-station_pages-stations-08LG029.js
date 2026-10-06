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
    
    
    const element = document.getElementById("f816407e-0010-4c90-b278-3387ab762e82");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f816407e-0010-4c90-b278-3387ab762e82' but no matching script tag was found.")
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
                  const docs_json = '{"38fcba57-6693-4347-95d6-4ed79d58d87e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p575027","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p575028"}}},"roots":[{"type":"object","name":"Column","id":"p575191","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p575188","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p575187","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p575180","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p575051"},{"type":"object","name":"PanTool","id":"p575127"}]}},{"type":"object","name":"ToolProxy","id":"p575181","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p575052","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p575128","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p575182","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p575053","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p575054","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p575060","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p575059","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p575129","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p575130","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p575136","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p575135","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p575183","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p575061"},{"type":"object","name":"ResetTool","id":"p575137"}]}},{"type":"object","name":"SaveTool","id":"p575184"},{"type":"object","name":"ToolProxy","id":"p575185","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p575103","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p575186","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p575179","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p575029","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p575030"},"y_range":{"type":"object","name":"DataRange1d","id":"p575031"},"x_scale":{"type":"object","name":"LinearScale","id":"p575039"},"y_scale":{"type":"object","name":"LogScale","id":"p575040"},"title":{"type":"object","name":"Title","id":"p575032","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p575069","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p575063","attributes":{"selected":{"type":"object","name":"Selection","id":"p575064","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p575065"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGg49FXEIab/0NXDTsIOO+RasyfmCjrIt75mbAwVcLDluq688w+vw9kzZ1py0nkcvmnEvOd/yeVwfXFBrPoCDgc7ruvOdi8YHWL7D7ky+v63Z2BgSOg/9NP+q0aMuav7d/t17g+j7rh9tn8ZuEPO5cBLkDzD1YqnINrhYdUTML9x6mNkusGW67F9tci6/AdzHoHEH3T9fWgPdId2ktdDMF+FDYUGmvMAah6YVjDkwKT///+vvuTPPZD8gc9/7xCkjYyNfx9KuWMPpCcrGd2xZ2RgWOC67Tac3uj+0Il32W2wvTxMt+25ry82SJW8BebH7bppv/+rxhVrv5v2QHvlNxTdsD9z5gyPdvs1EH//ibJroHBh2nT9Klg9x5orIBoYDpfhNFBd/YFTF+3//v8fb33/PEjf/9Uyp+xbRNaF1988CnLHlX18R+z/AeUnvt1Ddfo32L5d9gfPnNHRnbodGl5b6EYfO3Nmy6b3m+y/gN2ximz6B1D/yo+L7AnRxlzXl5sVLrJ/8f//ff/e6Rg0AGN52mcoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p575070","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p575071"}}},"glyph":{"type":"object","name":"Line","id":"p575066","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p575067","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p575068","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p575078","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p575072","attributes":{"selected":{"type":"object","name":"Selection","id":"p575073","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p575074"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGg49FXEIab/0NXDTsIOO+RasyfmCjrIt75mbAwVcLDluq688w+vw9kzZ1py0nkcvmnEvOd/yeVwfXFBrPoCDgc7ruvOdi8YHWL7D7ky+v63Z2BgSOg/9NP+q0aMuav7d/t17g+j7rh9tn8ZuEPO5cBLkDzD1YqnINrhYdUTML9x6mNkusGW67F9tci6/AdzHoHEH3T9fWgPdId2ktdDMF+FDYUGmvMAah6YVjDkwKT///+vvuTPPZD8gc9/7xCkjYyNfx9KuWMPpCcrGd2xZ2RgWOC67Tac3uj+0Il32W2wvTxMt+25ry82SJW8BebH7bppv/+rxhVrv5v2QHvlNxTdsD9z5gyPdvs1EH//ibJroHBh2nT9Klg9x5orIBoYDpfhNFBd/YFTF+3//v8fb33/PEjf/9Uyp+xbRNaF1988CnLHlX18R+z/AeUnvt1Ddfo32L5d9gfPnNHRnbodGl5b6EYfO3Nmy6b3m+y/gN2ximz6B1D/yo+L7AnRxlzXl5sVLrJ/8f//ff/e6Rg0AGN52mcoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p575079","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p575080"}}},"glyph":{"type":"object","name":"Line","id":"p575075","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p575076","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p575077","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p575089","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p575083","attributes":{"selected":{"type":"object","name":"Selection","id":"p575084","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p575085"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2VCWxUVRiFrVLUIIUWrFas0BZaW2in63TvnNn3mTczb2ZeQYGoCC6IUas2CoKgAgoBl+JGEaJihbiA0FDRgiJrRFFATYkQsIrgAoKCUoj33p6Xm0xm5r37//8537lvyTf3DXjzox7LEvV50vJbduyKx3ac5fcLllftXzz5s5aC/t8HoOn8kblDmq5C//2DcHRt37yasUPQf186Pi+9RqxhvH84rh0k/8nkc9fjzt6Cbc3/ZvH5Eejq3uD4Y0Y29xmJgV+uvM364CjulwNT1/FVz5bkct88GKtNxw78msf9R2P2iw/njXprDOvko2POJ7ffPbmA9W6GGmtEIesWom+C/6dLB4tYfyxGe58Xaxz7KEbI/MMdLwRL2I8JH6fLSUvZVym0+ev/Gna0lP2VoffSwYxN3WXssxytLf+VT1xezn4rkKaEq2DfFVglpnvHqGT/lVDlzFWcowp7wrKAmfOYMWn7mm+XnTZzrmqcafhKrGrOVwPVztoazlmL7KLMymcW1nLeWnz4Rq0+blod566D87pbH9rnrOf89ehZJBVsoA4NmCHlSmmkHo0QMOzf8mMjdWnCstMnzk7Z3ER9LCieliYstlAnYPKfL9/wfT2oF/CuukDdgL+nbK6bmWWlflZYcvbuDs+3UkcrFhw6PD73nJV62iCGFwVt1NWGmySe+23U1w5V3m6nznas25X/2r3r7NTbjouCTkuOg7o74IZPWOqg/g4svSCBcNAHJ3o2ThfLST+cyH/giXsWHHLSFxfuL5ZPuOiPCwrPLhd9ciFVylfopl9uhJWBbvrmxitCnbcHeuifBwLmPY+2eOijByWqIQ/99OKRwGBBkJe+evHZlSMfP7XVS3+9GKwC56PPPiRm2V5/aYWPfvuwUtqf5qfvfpwU7tXN9NN/P6o+kBX85CCA2WLaw+MD5CGA3VLOXQFyEcRwFfgg+Qhi4vJPn0uuDpKTIDqMr28sygyRlxAknX3zQuQmhEaJ75kQ+Qnj6YWpIvFhchTGPgVomDxpWKwCrpErDRWqoEa+NEg1/1mskTMNs7LeD03arpE3DbnnOtt2XtTIXQQ7Bc1lVRHyF8F0BUyEHEaQoQ62CHmMoFPi0BMhlxHcIo+PjCj5jCKl8HcXfFFyGoXspmNOlLxGoW7fFCW3UZzaKg2Mkt8Y2lYMndpbECPHMYhwiAFi5DmGIyINnW0xch3DUxLnvTHyHYOKe6pOznUoeRt08q6jRQmqk3sdSp41OvnX0S3cMx3TmQMd4vAUCY4zD3Fc7bmr+vJonLmI470xMhBx5iMOFcctceYkDvV6OB9nXhJol3iYEsxNApLOoVMTzE8Cx1vbf2ltTzBHCSyS7RxIME8JlCtAk8xVEt+J03aDI8l8JSHCIARNMmdJqONkfZJ5S2KHPD5PJJk7AwrvXIP5M5Au1N/WbDCHBjaKt1HxUoN5NDBBAWQwlwYuU1cz/geD68VGOAcAAA=="},"shape":[231],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+3SPUhCURQA4KdQmJgUOYo5NNTQEI4h9y0NTeEqUg0hjdIg4ZINjSEO0So19UNEhIlEPaQhRPrVSpTUfqiIIDNDKX2dc7JQMcNBiOgtH+fc+94579zLcZzdl1bxHDxdpjbUrpeTQiDQivI6HSloplpo/d5ACulOZbHxeUszxYGAAo3bVKUaPPJCnoR6TSjUa0C1JoeUl1A9CeVVKyL7iEUG8bDZnCcdvmyxkMpg7LLoXyjv0aRR+N4TCs8jrSeP7ihvHLmhfGj8ulg+YbvC+FNucuaS1n8Q+qd95UL9C6pXUOhXUAz9J2j/qJOMdzTWJPQXL/RZVW2PjNZrUhTF9kj2HN8TUrlo3YV6Q97+KCsXzt3V547g+dck9M0rpBGaz3cOesO0Xk2cw+rYGfZVIs7FunWK+e1d60k1mTsVwjpw3iQvWw5WEu7XMeYrCnUmBP8h1iFxXz54wHIwt97Y/pewLi6p/bivRNjuUht38L0S8/C+82GT/RVf6b+9rNw3OL/w3gb+P9zn9X8Lc8D7o+xeY880t8VfZwb6WkjOsXp7K4qxgelZVqvvreAkfTgHAAA="},"shape":[231],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p575090","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p575091"}}},"glyph":{"type":"object","name":"Line","id":"p575086","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p575087","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p575088","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p575099","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p575093","attributes":{"selected":{"type":"object","name":"Selection","id":"p575094","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p575095"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p575100","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p575101"}}},"glyph":{"type":"object","name":"Line","id":"p575096","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p575097","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p575098","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p575038","attributes":{"tools":[{"id":"p575051"},{"id":"p575052"},{"id":"p575053"},{"id":"p575061"},{"type":"object","name":"SaveTool","id":"p575062"},{"id":"p575103"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p575046","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p575047","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p575048"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p575049"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p575041","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p575042","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p575043"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p575044"}}}],"center":[{"type":"object","name":"Grid","id":"p575045","attributes":{"axis":{"id":"p575041"}}},{"type":"object","name":"Grid","id":"p575050","attributes":{"dimension":1,"axis":{"id":"p575046"}}},{"type":"object","name":"Legend","id":"p575081","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p575082","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p575078"}]}},{"type":"object","name":"LegendItem","id":"p575092","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p575089"}]}},{"type":"object","name":"LegendItem","id":"p575102","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p575099"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p575104","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p575114","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p575106"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p575115"},"y_scale":{"type":"object","name":"LinearScale","id":"p575116"},"title":{"type":"object","name":"Title","id":"p575107","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p575145","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p575139","attributes":{"selected":{"type":"object","name":"Selection","id":"p575140","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p575141"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC83Pz7/+gTC/g4uLi4iI/Tv7qOy1ov3vjtsHZ69dypi7yv7tu3d2Yv077K9HZcteWHbQHmhIx9rND+yDvTRd+SffsgcAWF9USGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p575146","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p575147"}}},"glyph":{"type":"object","name":"Line","id":"p575142","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p575143","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p575144","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p575154","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p575148","attributes":{"selected":{"type":"object","name":"Selection","id":"p575149","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p575150"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC83Pz7/+gTC/g4uLi4iI/Tv7qOy1ov3vjtsHZ69dypi7yv7tu3d2Yv077K9HZcteWHbQHmhIx9rND+yDvTRd+SffsgcAWF9USGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p575155","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p575156"}}},"glyph":{"type":"object","name":"Line","id":"p575151","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p575152","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p575153","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p575165","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p575159","attributes":{"selected":{"type":"object","name":"Selection","id":"p575160","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p575161"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC83Pz7/+gTC/g4uLi4iI/Tv7qOy1ov3vjtsHZ69dypi7yv7tu3d2Yv077K9HZcteWHbQHmhIx9rND+yDvTRd+SffsgcAWF9USGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p575166","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p575167"}}},"glyph":{"type":"object","name":"Line","id":"p575162","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p575163","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p575164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p575175","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p575169","attributes":{"selected":{"type":"object","name":"Selection","id":"p575170","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p575171"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p575176","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p575177"}}},"glyph":{"type":"object","name":"Line","id":"p575172","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p575173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p575174","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p575113","attributes":{"tools":[{"id":"p575127"},{"id":"p575128"},{"id":"p575129"},{"id":"p575137"},{"type":"object","name":"SaveTool","id":"p575138"},{"id":"p575179"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p575122","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p575123","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p575124"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p575125"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p575117","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p575118"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p575119"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p575120"}}}],"center":[{"type":"object","name":"Grid","id":"p575121","attributes":{"axis":{"id":"p575117"}}},{"type":"object","name":"Grid","id":"p575126","attributes":{"dimension":1,"axis":{"id":"p575122"}}},{"type":"object","name":"Legend","id":"p575157","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p575158","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p575154"}]}},{"type":"object","name":"LegendItem","id":"p575168","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p575165"}]}},{"type":"object","name":"LegendItem","id":"p575178","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p575175"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p575190","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"38fcba57-6693-4347-95d6-4ed79d58d87e","roots":{"p575191":"f816407e-0010-4c90-b278-3387ab762e82"},"root_ids":["p575191"]}];
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