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
    
    
    const element = document.getElementById("c011f2a8-738d-4fab-a60d-0a6406667263");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c011f2a8-738d-4fab-a60d-0a6406667263' but no matching script tag was found.")
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
                  const docs_json = '{"03e03be9-18e7-4dbc-a883-44f82fb19ea0":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p377904","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p377905"}}},"roots":[{"type":"object","name":"Column","id":"p377996","attributes":{"children":[{"type":"object","name":"Figure","id":"p377906","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p377907"},"y_range":{"type":"object","name":"DataRange1d","id":"p377908"},"x_scale":{"type":"object","name":"LinearScale","id":"p377916"},"y_scale":{"type":"object","name":"LinearScale","id":"p377917"},"title":{"type":"object","name":"Title","id":"p377909","attributes":{"text":"08LG021 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p377970","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377964","attributes":{"selected":{"type":"object","name":"Selection","id":"p377965","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377966"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgOMDLvbzsEAMDw4ody0C0g1MamG64IwymD5QdXAqWF8wH0w6rZcB0g+upJWD5++VgmqFKFUw7iFxeDJZf1wCmD3jogWmGx7cXgeVrO4E0ANC2asJ4AAAA"},"shape":[15],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p377971","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377972"}}},"glyph":{"type":"object","name":"VArea","id":"p377967","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.12444000139832494},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p377968","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.12444000139832494},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p377969","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.12444000139832494},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p377981","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377975","attributes":{"selected":{"type":"object","name":"Selection","id":"p377976","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377977"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JeUwOcBzA4S9jjqYtIsudZRnLmOZsfadpmogQcizLskxjrkzTfk1z33Nk2UuU0kmUIvUToRQRL02WuSLLMqZp7s9fzx+PiFz4/HxzhYgGnkLzMhhtXPuz/0rvdNScMDRBgvZVrpOPX4Latwea/KKnfPBKlLduqAnlT/j+sWgLPFFm3avnmzehSRyOdsCjx3xRAuqc0WhaGh7xSTtRhvihlryu4+cdQtvqj7Lr00Pe6ySa0iC04d8e8F9SUfeGovH+VcuXZ6FELEL91hXNgcs1vM8KlFuuqMtK7/PtMWgPe6CMrqzm76xHEzkUbUdtFX8sHnXMSDRVznt8VBLK77GoyU13+XH70dZMRln14Q7f6TialEC0fl8q+ToH6uoQNF06bvOODJRJC1DrO6OJvXiL77Yc5awL6tSSCt4ZjXadO4pLxU0+fS2agEFoG6otv3ELqusINJn15fy0RJSXvqhxjWW82x602RNQgt7d4F8dQbNV0bp/LuXzU1CDg9G8+X6d35aG0j8MteDPNT4kF+37CJTE7qgDikr4wii0oW4oLWXFfNIaNIM90RbfvcrP24Ta6oVmZ10RPywBpXQUanhDId+2A+2e8Sjer6/w5QfRLPZH+7XlMn8gGdUnCE3F1wJ+aSpK+2zUwz8v8aOy0FYuRInsitpRcJE/GonW1xWl6no+HxWD5lc/tCdu5/Hj1qPWDEETXZvLSzxKig+qnzOHf7gdbcxYlC5N2bxjH5qJk9E+bs7iY4+hdgtEk9p2gZ/iQHHORF33I5PvmYE2bT5KQGfUhvwMfsMytL1cUDKLz/PTotE09kG7+WY677YWNXsgmunVaXxTHMpWb1T3+nN8nkE7wxflzYuz/LbdaDwmoL30NpUPOYL6PgCNaT3De6agFM5ADf1+mv94Du32uSiD/zj44hw0YRH//AufaIYguAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqGNH//v+PT7Hebz/c/DXqn6GRTn/8//9/5cdF9p/+/7fnWDPH/tf///vL9s2H82HiMPr7///zZ86caU+IJlcfIXNf/P9/3793Otx9hNRTWx5mP7n0O2A4P6yaYg+jIfmE/iS1wwWXeQBkb8XjuAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p377982","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377983"}}},"glyph":{"type":"object","name":"Line","id":"p377978","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p377979","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p377980","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p377991","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p377985","attributes":{"selected":{"type":"object","name":"Selection","id":"p377986","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p377987"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JeUwOcBzA4S9jjqYtIsudZRnLmOZsfadpmogQcizLskxjrkzTfk1z33Nk2UuU0kmUIvUToRQRL02WuSLLMqZp7s9fzx+PiFz4/HxzhYgGnkLzMhhtXPuz/0rvdNScMDRBgvZVrpOPX4Latwea/KKnfPBKlLduqAnlT/j+sWgLPFFm3avnmzehSRyOdsCjx3xRAuqc0WhaGh7xSTtRhvihlryu4+cdQtvqj7Lr00Pe6ySa0iC04d8e8F9SUfeGovH+VcuXZ6FELEL91hXNgcs1vM8KlFuuqMtK7/PtMWgPe6CMrqzm76xHEzkUbUdtFX8sHnXMSDRVznt8VBLK77GoyU13+XH70dZMRln14Q7f6TialEC0fl8q+ToH6uoQNF06bvOODJRJC1DrO6OJvXiL77Yc5awL6tSSCt4ZjXadO4pLxU0+fS2agEFoG6otv3ELqusINJn15fy0RJSXvqhxjWW82x602RNQgt7d4F8dQbNV0bp/LuXzU1CDg9G8+X6d35aG0j8MteDPNT4kF+37CJTE7qgDikr4wii0oW4oLWXFfNIaNIM90RbfvcrP24Ta6oVmZ10RPywBpXQUanhDId+2A+2e8Sjer6/w5QfRLPZH+7XlMn8gGdUnCE3F1wJ+aSpK+2zUwz8v8aOy0FYuRInsitpRcJE/GonW1xWl6no+HxWD5lc/tCdu5/Hj1qPWDEETXZvLSzxKig+qnzOHf7gdbcxYlC5N2bxjH5qJk9E+bs7iY4+hdgtEk9p2gZ/iQHHORF33I5PvmYE2bT5KQGfUhvwMfsMytL1cUDKLz/PTotE09kG7+WY677YWNXsgmunVaXxTHMpWb1T3+nN8nkE7wxflzYuz/LbdaDwmoL30NpUPOYL6PgCNaT3De6agFM5ADf1+mv94Du32uSiD/zj44hw0YRH//AufaIYguAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqGNH//v+PT7Hebz/c/DXqn6GRTn/8//9/5cdF9p/+/7fnWDPH/tf///vL9s2H82HiMPr7///zZ86caU+IJlcfIXNf/P9/3793Otx9hNRTWx5mP7n0O2A4P6yaYg+jIfmE/iS1wwWXeQBkb8XjuAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p377992","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p377993"}}},"glyph":{"type":"object","name":"Line","id":"p377988","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p377989","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p377990","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p377915","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p377942"},{"type":"object","name":"WheelZoomTool","id":"p377943","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p377944","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p377945","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p377951","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p377950","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p377952","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p377953","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p377954","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p377955","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p377961","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p377960","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p377962"},{"type":"object","name":"SaveTool","id":"p377963"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p377937","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p377938","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p377939"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p377940"}}}],"right":[{"type":"object","name":"Legend","id":"p377973","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p377974","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p377970"}]}},{"type":"object","name":"LegendItem","id":"p377984","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p377981"},{"id":"p377991"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p377918","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p377919","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p377920","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p377921","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p377922","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p377923","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p377924","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p377925","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p377926","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p377927","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p377928","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p377929","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p377930","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p377931"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p377934","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p377933","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p377932","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p377935"}}}],"center":[{"type":"object","name":"Grid","id":"p377936","attributes":{"axis":{"id":"p377918"}}},{"type":"object","name":"Grid","id":"p377941","attributes":{"dimension":1,"axis":{"id":"p377937"}}}]}},{"type":"object","name":"Div","id":"p377994","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"03e03be9-18e7-4dbc-a883-44f82fb19ea0","roots":{"p377996":"c011f2a8-738d-4fab-a60d-0a6406667263"},"root_ids":["p377996"]}];
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