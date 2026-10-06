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
    
    
    const element = document.getElementById("c49d6e06-cfb0-42d2-95d9-e663cb4449e1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c49d6e06-cfb0-42d2-95d9-e663cb4449e1' but no matching script tag was found.")
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
                  const docs_json = '{"8dfc0c40-6f03-45fe-8f2c-df56bb961327":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p692047","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p692048"}}},"roots":[{"type":"object","name":"Column","id":"p692211","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p692208","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p692207","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p692200","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p692071"},{"type":"object","name":"PanTool","id":"p692147"}]}},{"type":"object","name":"ToolProxy","id":"p692201","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p692072","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p692148","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p692202","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p692073","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p692074","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p692080","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p692079","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p692149","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p692150","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p692156","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p692155","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p692203","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p692081"},{"type":"object","name":"ResetTool","id":"p692157"}]}},{"type":"object","name":"SaveTool","id":"p692204"},{"type":"object","name":"ToolProxy","id":"p692205","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p692123","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p692206","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p692199","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p692049","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p692050"},"y_range":{"type":"object","name":"DataRange1d","id":"p692051"},"x_scale":{"type":"object","name":"LinearScale","id":"p692059"},"y_scale":{"type":"object","name":"LogScale","id":"p692060"},"title":{"type":"object","name":"Title","id":"p692052","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p692089","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p692083","attributes":{"selected":{"type":"object","name":"Selection","id":"p692084","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p692085"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NkYHAwNtZ2SE9LW1fwV8uBkYFhwutALYf///+zrzuu6cDAwJCQloZCL5g5Ux0kjkID1bvvmKcGEi9IS1N1OHvmzBa5VhWHtLS0Y0q3lR3OnDkTkmKt7DBr5syTvkpKIPP7D5UqguTVNskqgNTLsDXKg+Rv+vOC6Ub7rbIg8w7ItUqB5E22eEgC3WrMvGaOBEh+o2ePOMjdandVxEHqNIw3i4HohP5DoiD5QlsuUbD87Z9CDjOB5r1UEwTJGxhvFgDJ/6yxFwDxHbiu84PMde505HeYPXNmp2MCjwMT2B8cDhlpaW1iN1lA6nfKsTKBwochjO+/PUjfw6o/yDSH7qbf9kB/6XOs+WFvBAzUuyrfQPINrwO/YNBA/+yZL/XFHuium9+DP4PNMTbGTQPVbZz7/pM9UJ/OXZVP9kB3vKgS+QiigeCDPdCd155nvbNPTUt7Vrz1Lcgd9xcXvAWZu8C5+w2InlFa+AZkH6fuptf2QP8qP4p4bQ8MnzTfz69A8g8Cd4DpD1nar+yB8WWT8PQlSF6NrfGlPSieSpleguQ3uD98AaJPBE17YW9ibCx8weUFyF0l0rwvQOrLVKY/B5tXJfIcJJ7j+/kZiG/x4iaYPnCi7BlIH7NmDJi/QILlGUidjP7dpyA+MP7A9IkdvWBaYZ07mL7wVQNMO3CseUIxDQw3gQhLsDkNX24/BoVHtUnDY7B73tZg0gD6Gy2nKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p692090","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p692091"}}},"glyph":{"type":"object","name":"Line","id":"p692086","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p692087","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p692088","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p692098","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p692092","attributes":{"selected":{"type":"object","name":"Selection","id":"p692093","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p692094"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NkYHAwNtZ2SE9LW1fwV8uBkYFhwutALYf///+zrzuu6cDAwJCQloZCL5g5Ux0kjkID1bvvmKcGEi9IS1N1OHvmzBa5VhWHtLS0Y0q3lR3OnDkTkmKt7DBr5syTvkpKIPP7D5UqguTVNskqgNTLsDXKg+Rv+vOC6Ub7rbIg8w7ItUqB5E22eEgC3WrMvGaOBEh+o2ePOMjdandVxEHqNIw3i4HohP5DoiD5QlsuUbD87Z9CDjOB5r1UEwTJGxhvFgDJ/6yxFwDxHbiu84PMde505HeYPXNmp2MCjwMT2B8cDhlpaW1iN1lA6nfKsTKBwochjO+/PUjfw6o/yDSH7qbf9kB/6XOs+WFvBAzUuyrfQPINrwO/YNBA/+yZL/XFHuium9+DP4PNMTbGTQPVbZz7/pM9UJ/OXZVP9kB3vKgS+QiigeCDPdCd155nvbNPTUt7Vrz1Lcgd9xcXvAWZu8C5+w2InlFa+AZkH6fuptf2QP8qP4p4bQ8MnzTfz69A8g8Cd4DpD1nar+yB8WWT8PQlSF6NrfGlPSieSpleguQ3uD98AaJPBE17YW9ibCx8weUFyF0l0rwvQOrLVKY/B5tXJfIcJJ7j+/kZiG/x4iaYPnCi7BlIH7NmDJi/QILlGUidjP7dpyA+MP7A9IkdvWBaYZ07mL7wVQNMO3CseUIxDQw3gQhLsDkNX24/BoVHtUnDY7B73tZg0gD6Gy2nKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p692099","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p692100"}}},"glyph":{"type":"object","name":"Line","id":"p692095","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p692096","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p692097","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p692109","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p692103","attributes":{"selected":{"type":"object","name":"Selection","id":"p692104","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p692105"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SPUwTYRjHdTKYOFhMTExJNAhGo6koXxW0/14/aLnS3vedC6xlLGtXWLvCiiOuXWFlZe7K4MQKq3cPvzdNmrt73+f5/37P2xjP3S1N/9Ua9v9QOypfj8rXT/X4/EylmTusnL/Q4/uXssfLV3x/rb8XxXrDvgVdHd/nR96y/52Wp6c3+84i595rcruZ/5Y5/0HF7mHlI3U+6cApgnym3hcVaUblCnW/6iyvNp5bof6KekWc42/0+a4ntlbptyprP16j77ps+/06/TdkuKNNclRl5e+q5PmhEwu4Ra5tFeknt9vk+6lcWt7hFzlr+pNXL81q5JVMz4XIXadenfx16jpwOKpafQeehuZNeAOuJv2a8DXp24KzpYKuNGvB25aN9bQNd1uxrR34d2Q6Sh08dGTbbzr46MrGNenipSsr7+7iZxcuFy4XLheuHlw9vPVkupw9/O3B1YerD1cfrgFcA7wOeO/h1+O7h2cPfo9cPh588vn48Mnp69AE+OQN8BOQO5Bdx2nAXAJ8hcwn1ILdn5A5hXpu/kK4Ij3Y/Y7gi/AZwRnhNYIrhiuGK8ZzDFcMVwJXIhvHMIErgSth3glcKVwpXCnzT+FK4crgyrgPGVwZ9yKD67f+A5F8CKc4BAAA"},"shape":[135],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/7XSSyhEURgH8DNoQvJqPGNcjMeMLDRZao4sJgvJftJdyXIWkiaLu7GQJEsLGdnKWhI3K2lWHsnKTN7GGK+RJOP7/nOKiZAym1//755zvu/eORYhpNvdIoUQwZkZl7Qgu2QymVwPhZxc1wcGvpTWN6l9n03tb1TPG9S5Deo8B+reSD3y1Ea96lfHWfMVQJm7X8sa0T4NbiRqUI8EoJloThkK2Tnry/Zq1O1jlWpdBauNRctVhppvqoylcyHNUcqK/QVI85R8lPrYOBu2pWKWvk8RS/sKWeoHqQ6pX4GqQ6MjF4YDtjyW5sxhg/4OK0vrM5UWltYJlt7zxfONtP+Zn9PviaX8yNJ7PfxG+r73ON/t/pPhvuU73k/zQm3Je6vmvfHQPRJOX5yV7f3XmO92O+ahe3G44H+X610TV3iulOOdyPrqUJSlc6A5Vwmp7+VH9fxWZLFYBc2t+QvkvREYdlihPh07R/11F1I/qK90w3BjGzRn42fIvZOQ+kKZl5Gqj1yccjZKD6C5OZym2OlBDpZnQfp/T1i6V2kag9PI9N3SpPuBLLMXj/9Tem+cr7VlQ3N47Qhzx0Z/9g0HwEUNOAQAAA=="},"shape":[135],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p692110","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p692111"}}},"glyph":{"type":"object","name":"Line","id":"p692106","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p692107","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p692108","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p692119","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p692113","attributes":{"selected":{"type":"object","name":"Selection","id":"p692114","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p692115"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p692120","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p692121"}}},"glyph":{"type":"object","name":"Line","id":"p692116","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p692117","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p692118","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p692058","attributes":{"tools":[{"id":"p692071"},{"id":"p692072"},{"id":"p692073"},{"id":"p692081"},{"type":"object","name":"SaveTool","id":"p692082"},{"id":"p692123"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p692066","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p692067","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p692068"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p692069"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p692061","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p692062","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p692063"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p692064"}}}],"center":[{"type":"object","name":"Grid","id":"p692065","attributes":{"axis":{"id":"p692061"}}},{"type":"object","name":"Grid","id":"p692070","attributes":{"dimension":1,"axis":{"id":"p692066"}}},{"type":"object","name":"Legend","id":"p692101","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p692102","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p692098"}]}},{"type":"object","name":"LegendItem","id":"p692112","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p692109"}]}},{"type":"object","name":"LegendItem","id":"p692122","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p692119"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p692124","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p692134","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p692126"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p692135"},"y_scale":{"type":"object","name":"LinearScale","id":"p692136"},"title":{"type":"object","name":"Title","id":"p692127","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p692165","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p692159","attributes":{"selected":{"type":"object","name":"Selection","id":"p692160","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p692161"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC33U782T1nvKDmlpaX3T8+QdpgZ5cWan/LEHKm6Qcn1lDxRvE7/zBMTHqh8AQTBs9GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p692166","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p692167"}}},"glyph":{"type":"object","name":"Line","id":"p692162","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p692163","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p692164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p692174","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p692168","attributes":{"selected":{"type":"object","name":"Selection","id":"p692169","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p692170"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC33U782T1nvKDmlpaX3T8+QdpgZ5cWan/LEHKm6Qcn1lDxRvE7/zBMTHqh8AQTBs9GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p692175","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p692176"}}},"glyph":{"type":"object","name":"Line","id":"p692171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p692172","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p692173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p692185","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p692179","attributes":{"selected":{"type":"object","name":"Selection","id":"p692180","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p692181"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC33U782T1nvKDmlpaX3T8+QdpgZ5cWan/LEHKm6Qcn1lDxRvE7/zBMTHqh8AQTBs9GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p692186","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p692187"}}},"glyph":{"type":"object","name":"Line","id":"p692182","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p692183","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p692184","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p692195","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p692189","attributes":{"selected":{"type":"object","name":"Selection","id":"p692190","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p692191"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p692196","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p692197"}}},"glyph":{"type":"object","name":"Line","id":"p692192","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p692193","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p692194","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p692133","attributes":{"tools":[{"id":"p692147"},{"id":"p692148"},{"id":"p692149"},{"id":"p692157"},{"type":"object","name":"SaveTool","id":"p692158"},{"id":"p692199"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p692142","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p692143","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p692144"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p692145"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p692137","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p692138"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p692139"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p692140"}}}],"center":[{"type":"object","name":"Grid","id":"p692141","attributes":{"axis":{"id":"p692137"}}},{"type":"object","name":"Grid","id":"p692146","attributes":{"dimension":1,"axis":{"id":"p692142"}}},{"type":"object","name":"Legend","id":"p692177","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p692178","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p692174"}]}},{"type":"object","name":"LegendItem","id":"p692188","attributes":{"label":{"type":"value","value":"Median Year (1930)"},"renderers":[{"id":"p692185"}]}},{"type":"object","name":"LegendItem","id":"p692198","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p692195"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p692210","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8dfc0c40-6f03-45fe-8f2c-df56bb961327","roots":{"p692211":"c49d6e06-cfb0-42d2-95d9-e663cb4449e1"},"root_ids":["p692211"]}];
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