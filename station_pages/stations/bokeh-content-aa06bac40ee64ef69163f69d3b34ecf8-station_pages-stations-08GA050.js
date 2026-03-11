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
    
    
    const element = document.getElementById("e24973dd-f239-4162-bfd7-d779bcc87e3a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e24973dd-f239-4162-bfd7-d779bcc87e3a' but no matching script tag was found.")
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
                  const docs_json = '{"2a3e634a-769b-4430-9a81-3c4c0351d19a":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p262839","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p262840"}}},"roots":[{"type":"object","name":"Column","id":"p263003","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p263000","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p262999","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p262992","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p262863"},{"type":"object","name":"PanTool","id":"p262939"}]}},{"type":"object","name":"ToolProxy","id":"p262993","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p262864","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p262940","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p262994","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p262865","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p262866","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p262872","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p262871","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p262941","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p262942","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p262948","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p262947","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p262995","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p262873"},{"type":"object","name":"ResetTool","id":"p262949"}]}},{"type":"object","name":"SaveTool","id":"p262996"},{"type":"object","name":"ToolProxy","id":"p262997","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p262915","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p262998","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p262991","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p262841","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p262842"},"y_range":{"type":"object","name":"DataRange1d","id":"p262843"},"x_scale":{"type":"object","name":"LinearScale","id":"p262851"},"y_scale":{"type":"object","name":"LogScale","id":"p262852"},"title":{"type":"object","name":"Title","id":"p262844","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p262881","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262875","attributes":{"selected":{"type":"object","name":"Selection","id":"p262876","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262877"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+E2XX7NOA4J/zJfvUtDS1YNbD9jNmzrwpXXPQfiqQrvfYb/8HrG6fPQMDQ8LXnbvAtEDETpC4/M1z2+0NjI2Lbbm22//9//+/Vvs2kPyBz3+3wOkzZ87kLLy2xd4QqG5PyWZ7oLL/Kz9ugtP/gPRZyY0gd5T9ttpgn5iWtswufLX9F6D4aplV9r/+/6+35VqOQU+YObPSX26Z/VegO9gal4LcY/+waol9PFC/n8Ni+x9g8xfZHzpzhmcP6yL7z0B/FGUshNMngeIPdBfY7zlz5s0+vjn2bTNn/mSLn2H/DmzOFKLpp2DzJsLp9UD/ap6eYH8VKM+xpsf+AThc2oim7wLNYRVqAfnzvm9SA8m0FTAeA29V228DmlMyuYJsOhUcvmVQfsaIpQE0xb7fKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262882","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262883"}}},"glyph":{"type":"object","name":"Line","id":"p262878","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262879","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p262880","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p262890","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262884","attributes":{"selected":{"type":"object","name":"Selection","id":"p262885","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262886"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+E2XX7NOA4J/zJfvUtDS1YNbD9jNmzrwpXXPQfiqQrvfYb/8HrG6fPQMDQ8LXnbvAtEDETpC4/M1z2+0NjI2Lbbm22//9//+/Vvs2kPyBz3+3wOkzZ87kLLy2xd4QqG5PyWZ7oLL/Kz9ugtP/gPRZyY0gd5T9ttpgn5iWtswufLX9F6D4aplV9r/+/6+35VqOQU+YObPSX26Z/VegO9gal4LcY/+waol9PFC/n8Ni+x9g8xfZHzpzhmcP6yL7z0B/FGUshNMngeIPdBfY7zlz5s0+vjn2bTNn/mSLn2H/DmzOFKLpp2DzJsLp9UD/ap6eYH8VKM+xpsf+AThc2oim7wLNYRVqAfnzvm9SA8m0FTAeA29V228DmlMyuYJsOhUcvmVQfsaIpQE0xb7fKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262891","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262892"}}},"glyph":{"type":"object","name":"Line","id":"p262887","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262888","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p262889","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p262901","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262895","attributes":{"selected":{"type":"object","name":"Selection","id":"p262896","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262897"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SOUgDURCGTSMINooIEkGURBTvaz2iySTmcDfX3rtiaxvL1La2Wtrapk1aW9u0WoqdbWrlzRcCu2/3ffPN/2ZHvc9h7/OnNDLXScl+zv3/M6LracmZB7Oiz+dkyvwWeL8o5jJcYt+ymGVvhf2rkjc3a3A53ufh18Vsszeoswm3Rb1tuF24Pa777DugzgGeQ3kx4BHcsTwY4BjuBM6Cs/Cc0scZ3Dn9nMuX4S7gCnAFuEt8V3BFfEV8Je1rXliLej6EemXlHsvULavXqpCnotxvBc+1cm/X+KrK3VXxVvHV8NXw1fDV8dXx1ZWzGuRpaN7fBudxI47x3eCzxZS9szkfG5/DOTn4HHxNyRhfE18TXwtfC1+LfG3ytfF18HXI18HXJV8XX5fnrnLi8t5V76vLPlfrTFz687QP3+NcPO1n4NGvp9yMz1x8PY97n/n4yr37zMnXfrMBeQL19QNyBeobB+QL1bcTMsdQfU8heUPlvkPyReSLyBeRLyJfRL6IfLFyfky+WLlBTL6YfAlzSZS7T5hPQr6EOSXKZVO+j1TPpZ/ynaTqG6fku5U/RsaigWAEAAA="},"shape":[140],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v////+E2XX7P8D6bnvj4Po+gOnDsLpf///23c6HrD/A1a3D04zMDAkPF66G0wLROyE00B5+ZvntsPpv0CDtNq3wWmgugOf/27BSQPtk4+w3AKy///Kj5vw0tcWb4DTQPPnS+mvtf8C5K+WWQWnfwH9Ycu1nCD9FWgvW+NSOA10v/3DqiVw+gfY3kUY9GdgeBRlLMRJA83fX7Zvvv0noDkca+bYfwe6c+bMmfYv/v+/79873f4d2PwpZNNPwfZMxElfBdvbA6cfgOOhjWIa6K/7vkkNVKe3Ad1dMrmCTnTGKE1jGgBNzFMeYAQAAA=="},"shape":[140],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262902","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262903"}}},"glyph":{"type":"object","name":"Line","id":"p262898","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262899","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p262900","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p262911","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262905","attributes":{"selected":{"type":"object","name":"Selection","id":"p262906","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262907"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p262912","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262913"}}},"glyph":{"type":"object","name":"Line","id":"p262908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262909","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p262910","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p262850","attributes":{"tools":[{"id":"p262863"},{"id":"p262864"},{"id":"p262865"},{"id":"p262873"},{"type":"object","name":"SaveTool","id":"p262874"},{"id":"p262915"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p262858","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p262859","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p262860"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p262861"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p262853","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p262854","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p262855"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p262856"}}}],"center":[{"type":"object","name":"Grid","id":"p262857","attributes":{"axis":{"id":"p262853"}}},{"type":"object","name":"Grid","id":"p262862","attributes":{"dimension":1,"axis":{"id":"p262858"}}},{"type":"object","name":"Legend","id":"p262893","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p262894","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p262890"}]}},{"type":"object","name":"LegendItem","id":"p262904","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p262901"}]}},{"type":"object","name":"LegendItem","id":"p262914","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p262911"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p262916","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p262926","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p262918"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p262927"},"y_scale":{"type":"object","name":"LinearScale","id":"p262928"},"title":{"type":"object","name":"Title","id":"p262919","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p262957","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262951","attributes":{"selected":{"type":"object","name":"Selection","id":"p262952","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262953"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOvzn+98u7vHPjQt7ZjIj7n21VuvSa3YUGV/8MyZHUJnp9lv3pY7e6NykT0u/QDVTGRMYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262958","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262959"}}},"glyph":{"type":"object","name":"Line","id":"p262954","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262955","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p262956","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p262966","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262960","attributes":{"selected":{"type":"object","name":"Selection","id":"p262961","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262962"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOvzn+98u7vHPjQt7ZjIj7n21VuvSa3YUGV/8MyZHUJnp9lv3pY7e6NykT0u/QDVTGRMYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262967","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262968"}}},"glyph":{"type":"object","name":"Line","id":"p262963","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262964","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p262965","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p262977","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262971","attributes":{"selected":{"type":"object","name":"Selection","id":"p262972","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262973"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw4aOvzn+98u7vHPjQt7ZjIj7n21VuvSa3YUGV/8MyZHUJnp9lv3pY7e6NykT0u/QDVTGRMYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p262978","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262979"}}},"glyph":{"type":"object","name":"Line","id":"p262974","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262975","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p262976","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p262987","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p262981","attributes":{"selected":{"type":"object","name":"Selection","id":"p262982","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p262983"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p262988","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p262989"}}},"glyph":{"type":"object","name":"Line","id":"p262984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p262985","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p262986","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p262925","attributes":{"tools":[{"id":"p262939"},{"id":"p262940"},{"id":"p262941"},{"id":"p262949"},{"type":"object","name":"SaveTool","id":"p262950"},{"id":"p262991"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p262934","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p262935","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p262936"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p262937"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p262929","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p262930"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p262931"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p262932"}}}],"center":[{"type":"object","name":"Grid","id":"p262933","attributes":{"axis":{"id":"p262929"}}},{"type":"object","name":"Grid","id":"p262938","attributes":{"dimension":1,"axis":{"id":"p262934"}}},{"type":"object","name":"Legend","id":"p262969","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p262970","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p262966"}]}},{"type":"object","name":"LegendItem","id":"p262980","attributes":{"label":{"type":"value","value":"Median Year (1965)"},"renderers":[{"id":"p262977"}]}},{"type":"object","name":"LegendItem","id":"p262990","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p262987"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p263002","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"2a3e634a-769b-4430-9a81-3c4c0351d19a","roots":{"p263003":"e24973dd-f239-4162-bfd7-d779bcc87e3a"},"root_ids":["p263003"]}];
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