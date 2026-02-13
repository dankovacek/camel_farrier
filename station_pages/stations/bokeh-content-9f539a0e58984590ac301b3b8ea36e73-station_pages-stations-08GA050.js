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
    
    
    const element = document.getElementById("c3c005e9-6147-453e-b042-ccb9a4f721b7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c3c005e9-6147-453e-b042-ccb9a4f721b7' but no matching script tag was found.")
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
                  const docs_json = '{"c26f9c9e-c810-426f-a041-8e01d2cab466":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p263156","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p263157"}}},"roots":[{"type":"object","name":"Column","id":"p263320","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p263317","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p263316","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p263309","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p263180"},{"type":"object","name":"PanTool","id":"p263256"}]}},{"type":"object","name":"ToolProxy","id":"p263310","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p263181","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p263257","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p263311","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p263182","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p263183","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p263189","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p263188","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p263258","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p263259","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p263265","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p263264","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p263312","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p263190"},{"type":"object","name":"ResetTool","id":"p263266"}]}},{"type":"object","name":"SaveTool","id":"p263313"},{"type":"object","name":"ToolProxy","id":"p263314","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p263232","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p263315","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p263308","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p263158","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p263159"},"y_range":{"type":"object","name":"DataRange1d","id":"p263160"},"x_scale":{"type":"object","name":"LinearScale","id":"p263168"},"y_scale":{"type":"object","name":"LogScale","id":"p263169"},"title":{"type":"object","name":"Title","id":"p263161","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p263198","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263192","attributes":{"selected":{"type":"object","name":"Selection","id":"p263193","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263194"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+E2XX7NOA4J/zJfvUtDS1YNbD9jNmzrwpXXPQfiqQrvfYb/8HrG6fPQMDQ8LXnbvAtEDETpC4/M1z2+0NjI2Lbbm22//9//+/Vvs2kPyBz3+3wOkzZ87kLLy2xd4QqG5PyWZ7oLL/Kz9ugtP/gPRZyY0gd5T9ttpgn5iWtswufLX9F6D4aplV9r/+/6+35VqOQU+YObPSX26Z/VegO9gal4LcY/+waol9PFC/n8Ni+x9g8xfZHzpzhmcP6yL7z0B/FGUshNMngeIPdBfY7zlz5s0+vjn2bTNn/mSLn2H/DmzOFKLpp2DzJsLp9UD/ap6eYH8VKM+xpsf+AThc2oim7wLNYRVqAfnzvm9SA8m0FTAeA29V228DmlMyuYJsOhUcvmVQfsaIpQE0xb7fKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263199","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263200"}}},"glyph":{"type":"object","name":"Line","id":"p263195","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263196","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p263197","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p263207","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263201","attributes":{"selected":{"type":"object","name":"Selection","id":"p263202","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263203"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+E2XX7NOA4J/zJfvUtDS1YNbD9jNmzrwpXXPQfiqQrvfYb/8HrG6fPQMDQ8LXnbvAtEDETpC4/M1z2+0NjI2Lbbm22//9//+/Vvs2kPyBz3+3wOkzZ87kLLy2xd4QqG5PyWZ7oLL/Kz9ugtP/gPRZyY0gd5T9ttpgn5iWtswufLX9F6D4aplV9r/+/6+35VqOQU+YObPSX26Z/VegO9gal4LcY/+waol9PFC/n8Ni+x9g8xfZHzpzhmcP6yL7z0B/FGUshNMngeIPdBfY7zlz5s0+vjn2bTNn/mSLn2H/DmzOFKLpp2DzJsLp9UD/ap6eYH8VKM+xpsf+AThc2oim7wLNYRVqAfnzvm9SA8m0FTAeA29V228DmlMyuYJsOhUcvmVQfsaIpQE0xb7fKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263208","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263209"}}},"glyph":{"type":"object","name":"Line","id":"p263204","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263205","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p263206","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p263218","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263212","attributes":{"selected":{"type":"object","name":"Selection","id":"p263213","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263214"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SOUgDURCGTSMINooIEkGURBTvaz2iySTmcDfX3rtiaxvL1La2Wtrapk1aW9u0WoqdbWrlzRcCu2/3ffPN/2ZHvc9h7/OnNDLXScl+zv3/M6LracmZB7Oiz+dkyvwWeL8o5jJcYt+ymGVvhf2rkjc3a3A53ufh18Vsszeoswm3Rb1tuF24Pa777DugzgGeQ3kx4BHcsTwY4BjuBM6Cs/Cc0scZ3Dn9nMuX4S7gCnAFuEt8V3BFfEV8Je1rXliLej6EemXlHsvULavXqpCnotxvBc+1cm/X+KrK3VXxVvHV8NXw1fDV8dXx1ZWzGuRpaN7fBudxI47x3eCzxZS9szkfG5/DOTn4HHxNyRhfE18TXwtfC1+LfG3ytfF18HXI18HXJV8XX5fnrnLi8t5V76vLPlfrTFz687QP3+NcPO1n4NGvp9yMz1x8PY97n/n4yr37zMnXfrMBeQL19QNyBeobB+QL1bcTMsdQfU8heUPlvkPyReSLyBeRLyJfRL6IfLFyfky+WLlBTL6YfAlzSZS7T5hPQr6EOSXKZVO+j1TPpZ/ynaTqG6fku5U/RsaigWAEAAA="},"shape":[140],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+E2XX7P8D6bnvj4Po+gOnDsLpf///23c6HrD/A1a3D04zMDAkPF66G0wLROyE00B5+ZvntsPpv0CDtNq3wWmgugOf/27BSQPtk4+w3AKy///Kj5vw0tcWb4DTQPPnS+mvtf8C5K+WWQWnfwH9Ycu1nCD9FWgvW+NSOA10v/3DqiVw+gfY3kUY9GdgeBRlLMRJA83fX7Zvvv0noDkca+bYfwe6c+bMmfYv/v+/79873f4d2PwpZNNPwfZMxElfBdvbA6cfgOOhjWIa6K/7vkkNVKe3Ad1dMrmCTnTGKE1jGgBNzFMeYAQAAA=="},"shape":[140],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263219","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263220"}}},"glyph":{"type":"object","name":"Line","id":"p263215","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263216","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p263217","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p263228","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263222","attributes":{"selected":{"type":"object","name":"Selection","id":"p263223","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263224"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p263229","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263230"}}},"glyph":{"type":"object","name":"Line","id":"p263225","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263226","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p263227","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p263167","attributes":{"tools":[{"id":"p263180"},{"id":"p263181"},{"id":"p263182"},{"id":"p263190"},{"type":"object","name":"SaveTool","id":"p263191"},{"id":"p263232"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p263175","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p263176","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p263177"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p263178"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p263170","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p263171","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p263172"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p263173"}}}],"center":[{"type":"object","name":"Grid","id":"p263174","attributes":{"axis":{"id":"p263170"}}},{"type":"object","name":"Grid","id":"p263179","attributes":{"dimension":1,"axis":{"id":"p263175"}}},{"type":"object","name":"Legend","id":"p263210","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p263211","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p263207"}]}},{"type":"object","name":"LegendItem","id":"p263221","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p263218"}]}},{"type":"object","name":"LegendItem","id":"p263231","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p263228"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p263233","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p263243","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p263235"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p263244"},"y_scale":{"type":"object","name":"LinearScale","id":"p263245"},"title":{"type":"object","name":"Title","id":"p263236","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p263274","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263268","attributes":{"selected":{"type":"object","name":"Selection","id":"p263269","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263270"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOvzn+98u7vHPjQt7ZjIj7n21VuvSa3YUGV/8MyZHUJnp9lv3pY7e6NykT0u/QDVTGRMYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263275","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263276"}}},"glyph":{"type":"object","name":"Line","id":"p263271","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263272","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p263273","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p263283","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263277","attributes":{"selected":{"type":"object","name":"Selection","id":"p263278","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263279"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOvzn+98u7vHPjQt7ZjIj7n21VuvSa3YUGV/8MyZHUJnp9lv3pY7e6NykT0u/QDVTGRMYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263284","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263285"}}},"glyph":{"type":"object","name":"Line","id":"p263280","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263281","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p263282","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p263294","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263288","attributes":{"selected":{"type":"object","name":"Selection","id":"p263289","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263290"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOvzn+98u7vHPjQt7ZjIj7n21VuvSa3YUGV/8MyZHUJnp9lv3pY7e6NykT0u/QDVTGRMYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263295","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263296"}}},"glyph":{"type":"object","name":"Line","id":"p263291","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263292","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p263293","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p263304","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263298","attributes":{"selected":{"type":"object","name":"Selection","id":"p263299","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263300"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p263305","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263306"}}},"glyph":{"type":"object","name":"Line","id":"p263301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p263303","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p263242","attributes":{"tools":[{"id":"p263256"},{"id":"p263257"},{"id":"p263258"},{"id":"p263266"},{"type":"object","name":"SaveTool","id":"p263267"},{"id":"p263308"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p263251","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p263252","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p263253"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p263254"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p263246","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p263247"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p263248"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p263249"}}}],"center":[{"type":"object","name":"Grid","id":"p263250","attributes":{"axis":{"id":"p263246"}}},{"type":"object","name":"Grid","id":"p263255","attributes":{"dimension":1,"axis":{"id":"p263251"}}},{"type":"object","name":"Legend","id":"p263286","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p263287","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p263283"}]}},{"type":"object","name":"LegendItem","id":"p263297","attributes":{"label":{"type":"value","value":"Median Year (1965)"},"renderers":[{"id":"p263294"}]}},{"type":"object","name":"LegendItem","id":"p263307","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p263304"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p263319","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c26f9c9e-c810-426f-a041-8e01d2cab466","roots":{"p263320":"c3c005e9-6147-453e-b042-ccb9a4f721b7"},"root_ids":["p263320"]}];
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