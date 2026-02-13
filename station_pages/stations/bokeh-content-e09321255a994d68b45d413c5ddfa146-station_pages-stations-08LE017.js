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
    
    
    const element = document.getElementById("ae4f3b57-628b-44d5-978a-b9de1a38be9d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ae4f3b57-628b-44d5-978a-b9de1a38be9d' but no matching script tag was found.")
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
                  const docs_json = '{"8ff93962-14c4-4c05-99d9-bb08dbd96832":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p416863","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p416864"}}},"roots":[{"type":"object","name":"Column","id":"p417045","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p417042","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p417041","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p417034","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p416887"},{"type":"object","name":"PanTool","id":"p416972"}]}},{"type":"object","name":"ToolProxy","id":"p417035","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p416888","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p416973","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p417036","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p416889","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p416890","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p416896","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p416895","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p416974","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p416975","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p416981","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p416980","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p417037","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p416897"},{"type":"object","name":"ResetTool","id":"p416982"}]}},{"type":"object","name":"SaveTool","id":"p417038"},{"type":"object","name":"ToolProxy","id":"p417039","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p416948","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p417040","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p417033","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p416865","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p416866"},"y_range":{"type":"object","name":"DataRange1d","id":"p416867"},"x_scale":{"type":"object","name":"LinearScale","id":"p416875"},"y_scale":{"type":"object","name":"LogScale","id":"p416876"},"title":{"type":"object","name":"Title","id":"p416868","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p416905","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416899","attributes":{"selected":{"type":"object","name":"Selection","id":"p416900","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416901"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9k9HOM1ubDxZV7HfvmHmzJ17D7bb//r//75vUsMojYM2TUtTC7xVbV925kwP24cy++n//9s/rCqhO5175swTFpNCe6MzZ2Jm+KTaC4PdF0B1GgAaWlmDKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416906","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416907"}}},"glyph":{"type":"object","name":"Line","id":"p416902","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416904","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p416914","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416908","attributes":{"selected":{"type":"object","name":"Selection","id":"p416909","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416910"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////8IwoX7P9D6S8aMf7sr8/bb5NrXd3vdxYkfv+C0mn7GTNn7jSYecr+3///8f2Hjtr775ATPex+BMTfX5Rx0P7q4gLeaNUD9r+BGlbL7MJJ59hyXb9rsxVk7v+VHzfBaQNj480amzfab5dr1f7iv8H+L9A9UvprweaXTF5BkP4NdtdS+19Aftm++STTzv2HtjqqzbR/CvbPRIppq/5DqguWtYHMv++b1DBgNDAcxWdxVNsLg/kBozSZNAB5eUlrKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416915","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416916"}}},"glyph":{"type":"object","name":"Line","id":"p416911","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416912","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416913","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p416923","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416917","attributes":{"selected":{"type":"object","name":"Selection","id":"p416918","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416919"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7//9pb/OD9n+hdIXIustcPAftN8u1Ms+r3m//5/9/8/v+e+2nzpwpaH9sj/3v//+3z32/3d5nh1zuxZJtIL5449TN9pcWF6RmBm2y//L///oTZetw0qm2XO2/pq20/wHkH/NeDqc1jY2TXXmX2W+Qa70tsGoJSPz/yo+LQDT/9cULCNLv/v/ff6Jsnv0HIF0yeQbJdLLIOvuc6Cn2S8+cmRPo2Wv/COiumTM7yaZnuT9kKm9ptv/1//9936SGAaOB4fN61rNa+zv//8+enldENfpXatq8J5/y7a3PnGGZxZFtHwNMFyWTM+hOG505EzPDJ9V+z+kzPvtrY+2Fwf4OoDoNAN77f2AoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416924","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416925"}}},"glyph":{"type":"object","name":"Line","id":"p416920","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416921","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p416922","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p416934","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416928","attributes":{"selected":{"type":"object","name":"Selection","id":"p416929","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416930"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeUgUURzHo7CiA+kyxO7sMNM88si0/e66ru66rjs7s7MjIlR02yFWVBBGFBFEEUUgQRTd930gRQRRlGGFBGEIVljRgdodRdT83nz3n93Zee/3vsfnNa5ZNqbzfIerUX13u+qfP0lIvfuTz/9cHdt77w219IHzfz/0nXxgf7+mgXDex2PfqyRtbusQOOuGISXj/bPCByO4fiRuNVy3Em8ncl8SQi1b2r9fGc39Y/F551R7xzjOGY+CnHh76wTOm4it9up7zcmcOwmPZfu9yZw/BSNT7+YdvjOV56RgXuupDbtvTuN5qZCnhuvTeW4avo5b93f5pXSePwNjO88fTDMzqCMDMu2onkk9mViyQ35lUVcWBith2dSXjctZGycOCM6kzpkwt63ybvbnUG8O/rTNX/jLl0vduTiUJivyqD8P9uITb9359JEP2VXjmkU/s7BLZBUW0FcBsuW4gtn0NxvOmEL6LIR6nVNEv0UYL3az5tD3HNxv7rGduujfBWUrAcwB6N/0cfGOfWAewAuRP9zNXNw4O0icu5mPG5tE5hAPc/LA/tOW4mFeHiSLnPhi5laMH3ZKPTuLmV8xHta4qs8O8jJHL2xTtgAv8/RixSV5UcJcSyCrO7aXMN8SDI2TIHzM2QdlY5uPeftwQ+TFlTL3Uqhjt5Qy/1Kocb3L2EMZ0tVBZeyjDL3Ux89e/FA1NPjZjx/HdEnWz54CWC9xbwywrwAC9tSu3wH2Vo5RKqBy9leO7t8ivJw9BmGHbA8Mss8g9qgig+y1AtJG45oK9lsBVcvXCvYcgoq7PsS+Q1Ax9oTYeyUuSDyrKtl/JZTtrkpyEMZpOTc3TB7CkLTa14bJRdjRcS1MPsJYJHq+hcmJ5ujK1siL5uhbrZEbzdF5WSM/mqP3i0aOIo7uzAh5ijj66yLkKuL4uBghXxHHT3eEnOmOr3SdvOmOv5U6udNRa7s+eE4nfzoMOfCTTg4NFNktV083yKMBVVOtQS4NqJjOGOTTgKrjg0FOo1C2UqLkNYpHEvvSKLmN4qrIOBklv1HI+I/vouTYhNo2xSTPJuoEzEUmuTZRJTgfN8m3CU+XDdAbk5zHoLBNjpH3GEZIIAti5D4GheeRGPmPQehsex3jPbDwVDCcYPE+WFC1z7N4Lywo3A5ZvB8WVE0vLd6TKvwHuIRRF1AGAAA="},"shape":[202],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////8IwoX7P+j0QwMDA1iN8/Z/wMKhPKdBYnfv6B0GoMGysf3HzqKjd5flHEQg/4DpE+U7bP/DTRgtcwukmkg9X/lx01E0dcWb4DTf4H+ktJfC6dB7imZvIJs+tf///W2XMtB/rF/WLUExN9ftm8+zein4PCbOOxpoH/v+yY1jNJUpqeD02kJybQwWH/AKD1KE0UDAFPjxBBQBgAA"},"shape":[202],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416935","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416936"}}},"glyph":{"type":"object","name":"Line","id":"p416931","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416932","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p416933","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p416944","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416938","attributes":{"selected":{"type":"object","name":"Selection","id":"p416939","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416940"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p416945","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416946"}}},"glyph":{"type":"object","name":"Line","id":"p416941","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416942","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416943","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p416874","attributes":{"tools":[{"id":"p416887"},{"id":"p416888"},{"id":"p416889"},{"id":"p416897"},{"type":"object","name":"SaveTool","id":"p416898"},{"id":"p416948"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p416882","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p416883","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p416884"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p416885"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p416877","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p416878","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p416879"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p416880"}}}],"center":[{"type":"object","name":"Grid","id":"p416881","attributes":{"axis":{"id":"p416877"}}},{"type":"object","name":"Grid","id":"p416886","attributes":{"dimension":1,"axis":{"id":"p416882"}}},{"type":"object","name":"Legend","id":"p416926","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p416927","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p416923"}]}},{"type":"object","name":"LegendItem","id":"p416937","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p416934"}]}},{"type":"object","name":"LegendItem","id":"p416947","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p416944"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p416949","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p416959","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p416951"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p416960"},"y_scale":{"type":"object","name":"LinearScale","id":"p416961"},"title":{"type":"object","name":"Title","id":"p416952","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p416990","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416984","attributes":{"selected":{"type":"object","name":"Selection","id":"p416985","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416986"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0hmFMt/PXyuwbyg+9/T5zjZ7dHkABZGY+mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416991","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416992"}}},"glyph":{"type":"object","name":"Line","id":"p416987","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416988","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416989","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p416999","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416993","attributes":{"selected":{"type":"object","name":"Selection","id":"p416994","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416995"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodGBo6N8Pkpvsi85Zls/q2mU/ZdUqpij7Bvul16L68+Z22wv//3/fNynAXuv/f+agHXH2DDjMAQAKk7oVYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p417000","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p417001"}}},"glyph":{"type":"object","name":"Line","id":"p416996","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416997","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416998","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p417008","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p417002","attributes":{"selected":{"type":"object","name":"Selection","id":"p417003","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p417004"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodGBo6N8Pkpvsi85Zls/q2mU/ZdUqpij7Bvul16L68+Z22wv//3/fNynAPlcjhj/uS6p9Q/G5p893ttmjmwMA/J2NHGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p417009","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p417010"}}},"glyph":{"type":"object","name":"Line","id":"p417005","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p417006","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p417007","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p417019","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p417013","attributes":{"selected":{"type":"object","name":"Selection","id":"p417014","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p417015"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0hmFMt/PXyuwbyg+9/T5zjZ7dHkABZGY+mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p417020","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p417021"}}},"glyph":{"type":"object","name":"Line","id":"p417016","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p417017","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p417018","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p417029","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p417023","attributes":{"selected":{"type":"object","name":"Selection","id":"p417024","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p417025"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p417030","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p417031"}}},"glyph":{"type":"object","name":"Line","id":"p417026","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p417027","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p417028","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p416958","attributes":{"tools":[{"id":"p416972"},{"id":"p416973"},{"id":"p416974"},{"id":"p416982"},{"type":"object","name":"SaveTool","id":"p416983"},{"id":"p417033"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p416967","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p416968","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p416969"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p416970"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p416962","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p416963"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p416964"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p416965"}}}],"center":[{"type":"object","name":"Grid","id":"p416966","attributes":{"axis":{"id":"p416962"}}},{"type":"object","name":"Grid","id":"p416971","attributes":{"dimension":1,"axis":{"id":"p416967"}}},{"type":"object","name":"Legend","id":"p417011","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p417012","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p417008"}]}},{"type":"object","name":"LegendItem","id":"p417022","attributes":{"label":{"type":"value","value":"Median Year (1911)"},"renderers":[{"id":"p417019"}]}},{"type":"object","name":"LegendItem","id":"p417032","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p417029"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p417044","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8ff93962-14c4-4c05-99d9-bb08dbd96832","roots":{"p417045":"ae4f3b57-628b-44d5-978a-b9de1a38be9d"},"root_ids":["p417045"]}];
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