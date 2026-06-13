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
    
    
    const element = document.getElementById("c934db2a-cde5-413e-94eb-e7993b28410e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c934db2a-cde5-413e-94eb-e7993b28410e' but no matching script tag was found.")
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
                  const docs_json = '{"1d1735ad-195a-4ba2-bc53-6e9d58811397":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p495757","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p495758"}}},"roots":[{"type":"object","name":"Column","id":"p495921","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p495918","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p495917","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p495910","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p495781"},{"type":"object","name":"PanTool","id":"p495857"}]}},{"type":"object","name":"ToolProxy","id":"p495911","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p495782","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p495858","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p495912","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p495783","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p495784","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p495790","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p495789","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p495859","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p495860","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p495866","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p495865","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p495913","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p495791"},{"type":"object","name":"ResetTool","id":"p495867"}]}},{"type":"object","name":"SaveTool","id":"p495914"},{"type":"object","name":"ToolProxy","id":"p495915","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p495833","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p495916","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p495909","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p495759","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p495760"},"y_range":{"type":"object","name":"DataRange1d","id":"p495761"},"x_scale":{"type":"object","name":"LinearScale","id":"p495769"},"y_scale":{"type":"object","name":"LogScale","id":"p495770"},"title":{"type":"object","name":"Title","id":"p495762","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p495799","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495793","attributes":{"selected":{"type":"object","name":"Selection","id":"p495794","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495795"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NkYHAwNtZ2SE9LW1fwV8uBkYFhwutALYf///+zrzuu6cDAwJCQloZCL5g5Ux0kjkID1bvvmKcGEi9IS1N1OHvmzBa5VhWHtLS0Y0q3lR3OnDkTkmKt7DBr5syTvkpKIPP7D5UqguTVNskqgNTLsDXKg+Rv+vOC6Ub7rbIg8w7ItUqB5E22eEgC3WrMvGaOBEh+o2ePOMjdandVxEHqNIw3i4HohP5DoiD5QlsuUbD87Z9CDjOB5r1UEwTJGxhvFgDJ/6yxFwDxHbiu84PMde505HeYPXNmp2MCjwMT2B8cDhlpaW1iN1lA6nfKsTKBwochjO+/PUjfw6o/yDSH7qbf9kB/6XOs+WFvBAzUuyrfQPINrwO/YNBA/+yZL/XFHuium9+DP4PNMTbGTQPVbZz7/pM9UJ/OXZVP9kB3vKgS+QiigeCDPdCd155nvbNPTUt7Vrz1Lcgd9xcXvAWZu8C5+w2InlFa+AZkH6fuptf2QP8qP4p4bQ8MnzTfz69A8g8Cd4DpD1nar+yB8WWT8PQlSF6NrfGlPSieSpleguQ3uD98AaJPBE17YW9ibCx8weUFyF0l0rwvQOrLVKY/B5tXJfIcJJ7j+/kZiG/x4iaYPnCi7BlIH7NmDJi/QILlGUidjP7dpyA+MP7A9IkdvWBaYZ07mL7wVQNMO3CseUIxDQw3gQhLsDkNX24/BoVHtUnDY7B73tZg0gD6Gy2nKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495800","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495801"}}},"glyph":{"type":"object","name":"Line","id":"p495796","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495797","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p495798","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p495808","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495802","attributes":{"selected":{"type":"object","name":"Selection","id":"p495803","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495804"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NkYHAwNtZ2SE9LW1fwV8uBkYFhwutALYf///+zrzuu6cDAwJCQloZCL5g5Ux0kjkID1bvvmKcGEi9IS1N1OHvmzBa5VhWHtLS0Y0q3lR3OnDkTkmKt7DBr5syTvkpKIPP7D5UqguTVNskqgNTLsDXKg+Rv+vOC6Ub7rbIg8w7ItUqB5E22eEgC3WrMvGaOBEh+o2ePOMjdandVxEHqNIw3i4HohP5DoiD5QlsuUbD87Z9CDjOB5r1UEwTJGxhvFgDJ/6yxFwDxHbiu84PMde505HeYPXNmp2MCjwMT2B8cDhlpaW1iN1lA6nfKsTKBwochjO+/PUjfw6o/yDSH7qbf9kB/6XOs+WFvBAzUuyrfQPINrwO/YNBA/+yZL/XFHuium9+DP4PNMTbGTQPVbZz7/pM9UJ/OXZVP9kB3vKgS+QiigeCDPdCd155nvbNPTUt7Vrz1Lcgd9xcXvAWZu8C5+w2InlFa+AZkH6fuptf2QP8qP4p4bQ8MnzTfz69A8g8Cd4DpD1nar+yB8WWT8PQlSF6NrfGlPSieSpleguQ3uD98AaJPBE17YW9ibCx8weUFyF0l0rwvQOrLVKY/B5tXJfIcJJ7j+/kZiG/x4iaYPnCi7BlIH7NmDJi/QILlGUidjP7dpyA+MP7A9IkdvWBaYZ07mL7wVQNMO3CseUIxDQw3gQhLsDkNX24/BoVHtUnDY7B73tZg0gD6Gy2nKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495809","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495810"}}},"glyph":{"type":"object","name":"Line","id":"p495805","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495806","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p495807","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p495819","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495813","attributes":{"selected":{"type":"object","name":"Selection","id":"p495814","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495815"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SPUwTYRjHdTKYOFhMTExJNAhGo6koXxW0/14/aLnS3vedC6xlLGtXWLvCiiOuXWFlZe7K4MQKq3cPvzdNmrt73+f5/37P2xjP3S1N/9Ua9v9QOypfj8rXT/X4/EylmTusnL/Q4/uXssfLV3x/rb8XxXrDvgVdHd/nR96y/52Wp6c3+84i595rcruZ/5Y5/0HF7mHlI3U+6cApgnym3hcVaUblCnW/6iyvNp5bof6KekWc42/0+a4ntlbptyprP16j77ps+/06/TdkuKNNclRl5e+q5PmhEwu4Ra5tFeknt9vk+6lcWt7hFzlr+pNXL81q5JVMz4XIXadenfx16jpwOKpafQeehuZNeAOuJv2a8DXp24KzpYKuNGvB25aN9bQNd1uxrR34d2Q6Sh08dGTbbzr46MrGNenipSsr7+7iZxcuFy4XLheuHlw9vPVkupw9/O3B1YerD1cfrgFcA7wOeO/h1+O7h2cPfo9cPh588vn48Mnp69AE+OQN8BOQO5Bdx2nAXAJ8hcwn1ILdn5A5hXpu/kK4Ij3Y/Y7gi/AZwRnhNYIrhiuGK8ZzDFcMVwJXIhvHMIErgSth3glcKVwpXCnzT+FK4crgyrgPGVwZ9yKD67f+A5F8CKc4BAAA"},"shape":[135],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7XSSyhEURgH8DNoQvJqPGNcjMeMLDRZao4sJgvJftJdyXIWkiaLu7GQJEsLGdnKWhI3K2lWHsnKTN7GGK+RJOP7/nOKiZAym1//755zvu/eORYhpNvdIoUQwZkZl7Qgu2QymVwPhZxc1wcGvpTWN6l9n03tb1TPG9S5Deo8B+reSD3y1Ea96lfHWfMVQJm7X8sa0T4NbiRqUI8EoJloThkK2Tnry/Zq1O1jlWpdBauNRctVhppvqoylcyHNUcqK/QVI85R8lPrYOBu2pWKWvk8RS/sKWeoHqQ6pX4GqQ6MjF4YDtjyW5sxhg/4OK0vrM5UWltYJlt7zxfONtP+Zn9PviaX8yNJ7PfxG+r73ON/t/pPhvuU73k/zQm3Je6vmvfHQPRJOX5yV7f3XmO92O+ahe3G44H+X610TV3iulOOdyPrqUJSlc6A5Vwmp7+VH9fxWZLFYBc2t+QvkvREYdlihPh07R/11F1I/qK90w3BjGzRn42fIvZOQ+kKZl5Gqj1yccjZKD6C5OZym2OlBDpZnQfp/T1i6V2kag9PI9N3SpPuBLLMXj/9Tem+cr7VlQ3N47Qhzx0Z/9g0HwEUNOAQAAA=="},"shape":[135],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495820","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495821"}}},"glyph":{"type":"object","name":"Line","id":"p495816","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495817","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p495818","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p495829","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495823","attributes":{"selected":{"type":"object","name":"Selection","id":"p495824","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495825"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p495830","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495831"}}},"glyph":{"type":"object","name":"Line","id":"p495826","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495827","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p495828","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p495768","attributes":{"tools":[{"id":"p495781"},{"id":"p495782"},{"id":"p495783"},{"id":"p495791"},{"type":"object","name":"SaveTool","id":"p495792"},{"id":"p495833"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p495776","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p495777","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p495778"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p495779"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p495771","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p495772","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p495773"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p495774"}}}],"center":[{"type":"object","name":"Grid","id":"p495775","attributes":{"axis":{"id":"p495771"}}},{"type":"object","name":"Grid","id":"p495780","attributes":{"dimension":1,"axis":{"id":"p495776"}}},{"type":"object","name":"Legend","id":"p495811","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p495812","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p495808"}]}},{"type":"object","name":"LegendItem","id":"p495822","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p495819"}]}},{"type":"object","name":"LegendItem","id":"p495832","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p495829"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p495834","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p495844","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p495836"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p495845"},"y_scale":{"type":"object","name":"LinearScale","id":"p495846"},"title":{"type":"object","name":"Title","id":"p495837","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p495875","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495869","attributes":{"selected":{"type":"object","name":"Selection","id":"p495870","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495871"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC33U782T1nvKDmlpaX3T8+QdpgZ5cWan/LEHKm6Qcn1lDxRvE7/zBMTHqh8AQTBs9GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495876","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495877"}}},"glyph":{"type":"object","name":"Line","id":"p495872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p495874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p495884","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495878","attributes":{"selected":{"type":"object","name":"Selection","id":"p495879","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495880"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC33U782T1nvKDmlpaX3T8+QdpgZ5cWan/LEHKm6Qcn1lDxRvE7/zBMTHqh8AQTBs9GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495885","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495886"}}},"glyph":{"type":"object","name":"Line","id":"p495881","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p495883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p495895","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495889","attributes":{"selected":{"type":"object","name":"Selection","id":"p495890","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495891"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC33U782T1nvKDmlpaX3T8+QdpgZ5cWan/LEHKm6Qcn1lDxRvE7/zBMTHqh8AQTBs9GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495896","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495897"}}},"glyph":{"type":"object","name":"Line","id":"p495892","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495893","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p495894","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p495905","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495899","attributes":{"selected":{"type":"object","name":"Selection","id":"p495900","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495901"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p495906","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495907"}}},"glyph":{"type":"object","name":"Line","id":"p495902","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p495903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p495904","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p495843","attributes":{"tools":[{"id":"p495857"},{"id":"p495858"},{"id":"p495859"},{"id":"p495867"},{"type":"object","name":"SaveTool","id":"p495868"},{"id":"p495909"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p495852","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p495853","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p495854"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p495855"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p495847","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p495848"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p495849"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p495850"}}}],"center":[{"type":"object","name":"Grid","id":"p495851","attributes":{"axis":{"id":"p495847"}}},{"type":"object","name":"Grid","id":"p495856","attributes":{"dimension":1,"axis":{"id":"p495852"}}},{"type":"object","name":"Legend","id":"p495887","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p495888","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p495884"}]}},{"type":"object","name":"LegendItem","id":"p495898","attributes":{"label":{"type":"value","value":"Median Year (1930)"},"renderers":[{"id":"p495895"}]}},{"type":"object","name":"LegendItem","id":"p495908","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p495905"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p495920","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"1d1735ad-195a-4ba2-bc53-6e9d58811397","roots":{"p495921":"c934db2a-cde5-413e-94eb-e7993b28410e"},"root_ids":["p495921"]}];
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