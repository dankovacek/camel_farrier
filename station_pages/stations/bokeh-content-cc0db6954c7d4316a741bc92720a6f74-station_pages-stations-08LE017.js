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
    
    
    const element = document.getElementById("f277171b-4ce3-4b95-aedd-41ca4ddad398");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f277171b-4ce3-4b95-aedd-41ca4ddad398' but no matching script tag was found.")
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
                  const docs_json = '{"238efc7c-88f7-4be1-b3de-7d5ccc2ad430":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p416490","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p416491"}}},"roots":[{"type":"object","name":"Column","id":"p416672","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p416669","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p416668","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p416661","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p416514"},{"type":"object","name":"PanTool","id":"p416599"}]}},{"type":"object","name":"ToolProxy","id":"p416662","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p416515","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p416600","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p416663","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p416516","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p416517","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p416523","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p416522","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p416601","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p416602","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p416608","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p416607","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p416664","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p416524"},{"type":"object","name":"ResetTool","id":"p416609"}]}},{"type":"object","name":"SaveTool","id":"p416665"},{"type":"object","name":"ToolProxy","id":"p416666","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p416575","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p416667","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p416660","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p416492","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p416493"},"y_range":{"type":"object","name":"DataRange1d","id":"p416494"},"x_scale":{"type":"object","name":"LinearScale","id":"p416502"},"y_scale":{"type":"object","name":"LogScale","id":"p416503"},"title":{"type":"object","name":"Title","id":"p416495","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p416532","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416526","attributes":{"selected":{"type":"object","name":"Selection","id":"p416527","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416528"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3v6///+ooyJ9k9HOM1ubDxZV7HfvmHmzJ17D7bb//r//75vUsMojYM2TUtTC7xVbV925kwP24cy++n//9s/rCqhO5175swTFpNCe6MzZ2Jm+KTaC4PdF0B1GgAaWlmDKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416533","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416534"}}},"glyph":{"type":"object","name":"Line","id":"p416529","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416530","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416531","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p416541","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416535","attributes":{"selected":{"type":"object","name":"Selection","id":"p416536","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416537"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////8IwoX7P9D6S8aMf7sr8/bb5NrXd3vdxYkfv+C0mn7GTNn7jSYecr+3///8f2Hjtr775ATPex+BMTfX5Rx0P7q4gLeaNUD9r+BGlbL7MJJ59hyXb9rsxVk7v+VHzfBaQNj480amzfab5dr1f7iv8H+L9A9UvprweaXTF5BkP4NdtdS+19Aftm++STTzv2HtjqqzbR/CvbPRIppq/5DqguWtYHMv++b1DBgNDAcxWdxVNsLg/kBozSZNAB5eUlrKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416542","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416543"}}},"glyph":{"type":"object","name":"Line","id":"p416538","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416539","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416540","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p416550","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416544","attributes":{"selected":{"type":"object","name":"Selection","id":"p416545","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416546"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v7//9pb/OD9n+hdIXIustcPAftN8u1Ms+r3m//5/9/8/v+e+2nzpwpaH9sj/3v//+3z32/3d5nh1zuxZJtIL5449TN9pcWF6RmBm2y//L///oTZetw0qm2XO2/pq20/wHkH/NeDqc1jY2TXXmX2W+Qa70tsGoJSPz/yo+LQDT/9cULCNLv/v/ff6Jsnv0HIF0yeQbJdLLIOvuc6Cn2S8+cmRPo2Wv/COiumTM7yaZnuT9kKm9ptv/1//9936SGAaOB4fN61rNa+zv//8+enldENfpXatq8J5/y7a3PnGGZxZFtHwNMFyWTM+hOG505EzPDJ9V+z+kzPvtrY+2Fwf4OoDoNAN77f2AoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416551","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416552"}}},"glyph":{"type":"object","name":"Line","id":"p416547","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416548","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p416549","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p416561","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416555","attributes":{"selected":{"type":"object","name":"Selection","id":"p416556","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416557"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeUgUURzHo7CiA+kyxO7sMNM88si0/e66ru66rjs7s7MjIlR02yFWVBBGFBFEEUUgQRTd930gRQRRlGGFBGEIVljRgdodRdT83nz3n93Zee/3vsfnNa5ZNqbzfIerUX13u+qfP0lIvfuTz/9cHdt77w219IHzfz/0nXxgf7+mgXDex2PfqyRtbusQOOuGISXj/bPCByO4fiRuNVy3Em8ncl8SQi1b2r9fGc39Y/F551R7xzjOGY+CnHh76wTOm4it9up7zcmcOwmPZfu9yZw/BSNT7+YdvjOV56RgXuupDbtvTuN5qZCnhuvTeW4avo5b93f5pXSePwNjO88fTDMzqCMDMu2onkk9mViyQ35lUVcWBith2dSXjctZGycOCM6kzpkwt63ybvbnUG8O/rTNX/jLl0vduTiUJivyqD8P9uITb9359JEP2VXjmkU/s7BLZBUW0FcBsuW4gtn0NxvOmEL6LIR6nVNEv0UYL3az5tD3HNxv7rGduujfBWUrAcwB6N/0cfGOfWAewAuRP9zNXNw4O0icu5mPG5tE5hAPc/LA/tOW4mFeHiSLnPhi5laMH3ZKPTuLmV8xHta4qs8O8jJHL2xTtgAv8/RixSV5UcJcSyCrO7aXMN8SDI2TIHzM2QdlY5uPeftwQ+TFlTL3Uqhjt5Qy/1Kocb3L2EMZ0tVBZeyjDL3Ux89e/FA1NPjZjx/HdEnWz54CWC9xbwywrwAC9tSu3wH2Vo5RKqBy9leO7t8ivJw9BmGHbA8Mss8g9qgig+y1AtJG45oK9lsBVcvXCvYcgoq7PsS+Q1Ax9oTYeyUuSDyrKtl/JZTtrkpyEMZpOTc3TB7CkLTa14bJRdjRcS1MPsJYJHq+hcmJ5ujK1siL5uhbrZEbzdF5WSM/mqP3i0aOIo7uzAh5ijj66yLkKuL4uBghXxHHT3eEnOmOr3SdvOmOv5U6udNRa7s+eE4nfzoMOfCTTg4NFNktV083yKMBVVOtQS4NqJjOGOTTgKrjg0FOo1C2UqLkNYpHEvvSKLmN4qrIOBklv1HI+I/vouTYhNo2xSTPJuoEzEUmuTZRJTgfN8m3CU+XDdAbk5zHoLBNjpH3GEZIIAti5D4GheeRGPmPQehsex3jPbDwVDCcYPE+WFC1z7N4Lywo3A5ZvB8WVE0vLd6TKvwHuIRRF1AGAAA="},"shape":[202],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////8IwoX7P+j0QwMDA1iN8/Z/wMKhPKdBYnfv6B0GoMGysf3HzqKjd5flHEQg/4DpE+U7bP/DTRgtcwukmkg9X/lx01E0dcWb4DTf4H+ktJfC6dB7imZvIJs+tf///W2XMtB/rF/WLUExN9ftm8+zein4PCbOOxpoH/v+yY1jNJUpqeD02kJybQwWH/AKD1KE0UDAFPjxBBQBgAA"},"shape":[202],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416562","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416563"}}},"glyph":{"type":"object","name":"Line","id":"p416558","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416559","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p416560","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p416571","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416565","attributes":{"selected":{"type":"object","name":"Selection","id":"p416566","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416567"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p416572","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416573"}}},"glyph":{"type":"object","name":"Line","id":"p416568","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416569","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416570","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p416501","attributes":{"tools":[{"id":"p416514"},{"id":"p416515"},{"id":"p416516"},{"id":"p416524"},{"type":"object","name":"SaveTool","id":"p416525"},{"id":"p416575"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p416509","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p416510","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p416511"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p416512"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p416504","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p416505","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p416506"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p416507"}}}],"center":[{"type":"object","name":"Grid","id":"p416508","attributes":{"axis":{"id":"p416504"}}},{"type":"object","name":"Grid","id":"p416513","attributes":{"dimension":1,"axis":{"id":"p416509"}}},{"type":"object","name":"Legend","id":"p416553","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p416554","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p416550"}]}},{"type":"object","name":"LegendItem","id":"p416564","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p416561"}]}},{"type":"object","name":"LegendItem","id":"p416574","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p416571"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p416576","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p416586","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p416578"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p416587"},"y_scale":{"type":"object","name":"LinearScale","id":"p416588"},"title":{"type":"object","name":"Title","id":"p416579","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p416617","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416611","attributes":{"selected":{"type":"object","name":"Selection","id":"p416612","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416613"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0hmFMt/PXyuwbyg+9/T5zjZ7dHkABZGY+mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416618","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416619"}}},"glyph":{"type":"object","name":"Line","id":"p416614","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416615","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416616","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p416626","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416620","attributes":{"selected":{"type":"object","name":"Selection","id":"p416621","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416622"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodGBo6N8Pkpvsi85Zls/q2mU/ZdUqpij7Bvul16L68+Z22wv//3/fNynAXuv/f+agHXH2DDjMAQAKk7oVYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416627","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416628"}}},"glyph":{"type":"object","name":"Line","id":"p416623","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416624","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416625","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p416635","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416629","attributes":{"selected":{"type":"object","name":"Selection","id":"p416630","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416631"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxodGBo6N8Pkpvsi85Zls/q2mU/ZdUqpij7Bvul16L68+Z22wv//3/fNynAPlcjhj/uS6p9Q/G5p893ttmjmwMA/J2NHGAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416636","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416637"}}},"glyph":{"type":"object","name":"Line","id":"p416632","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416633","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p416634","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p416646","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416640","attributes":{"selected":{"type":"object","name":"Selection","id":"p416641","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416642"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxk0hmFMt/PXyuwbyg+9/T5zjZ7dHkABZGY+mAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p416647","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416648"}}},"glyph":{"type":"object","name":"Line","id":"p416643","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416644","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p416645","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p416656","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p416650","attributes":{"selected":{"type":"object","name":"Selection","id":"p416651","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p416652"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p416657","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p416658"}}},"glyph":{"type":"object","name":"Line","id":"p416653","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p416654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p416655","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p416585","attributes":{"tools":[{"id":"p416599"},{"id":"p416600"},{"id":"p416601"},{"id":"p416609"},{"type":"object","name":"SaveTool","id":"p416610"},{"id":"p416660"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p416594","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p416595","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p416596"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p416597"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p416589","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p416590"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p416591"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p416592"}}}],"center":[{"type":"object","name":"Grid","id":"p416593","attributes":{"axis":{"id":"p416589"}}},{"type":"object","name":"Grid","id":"p416598","attributes":{"dimension":1,"axis":{"id":"p416594"}}},{"type":"object","name":"Legend","id":"p416638","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p416639","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p416635"}]}},{"type":"object","name":"LegendItem","id":"p416649","attributes":{"label":{"type":"value","value":"Median Year (1911)"},"renderers":[{"id":"p416646"}]}},{"type":"object","name":"LegendItem","id":"p416659","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p416656"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p416671","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"238efc7c-88f7-4be1-b3de-7d5ccc2ad430","roots":{"p416672":"f277171b-4ce3-4b95-aedd-41ca4ddad398"},"root_ids":["p416672"]}];
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