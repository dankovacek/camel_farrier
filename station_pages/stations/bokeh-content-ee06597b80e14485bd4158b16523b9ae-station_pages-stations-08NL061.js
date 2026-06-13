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
    
    
    const element = document.getElementById("b81954a6-085f-4adf-8bc2-896c89bbcf22");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b81954a6-085f-4adf-8bc2-896c89bbcf22' but no matching script tag was found.")
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
                  const docs_json = '{"9bf145c4-3cb7-4506-9799-e792c3625d5f":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p652821","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p652822"}}},"roots":[{"type":"object","name":"Column","id":"p652899","attributes":{"children":[{"type":"object","name":"Figure","id":"p652823","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p652824"},"y_range":{"type":"object","name":"DataRange1d","id":"p652825"},"x_scale":{"type":"object","name":"LinearScale","id":"p652833"},"y_scale":{"type":"object","name":"LinearScale","id":"p652834"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p652881","attributes":{"start":-0.006999999973923,"end":1.0629999542236328}}]]},"title":{"type":"object","name":"Title","id":"p652826","attributes":{"text":"08NL061 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p652892","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p652886","attributes":{"selected":{"type":"object","name":"Selection","id":"p652887","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p652888"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1280],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9UBCgSXskT2YC+EPOH214iE29zQc+voAmzi57l0gwXKPFPMUbp67T4p6dHc15Dy/Tbb+////z3fddplo/UD1/1fLXIKrR+cTim+g+vu+SReQ9ctvmnsep/3//v+Pn/j2DE55dPuA5tcf+nrCHqhvf8nkEyB9CQIRJ+1h4jA+Ln3o4ujq/wLNt+U6juEeoPnxO+SOguwB01jMAQr9qAfJ7yk5jCEPNNfevPMghjjMHKB/gOF2AEP+D9CfJ8r2YYj/ApqXJLADQxxojnzr640Y4kBz6l+qYYqDwj/Fej1cPVCd/cOqJRj6PwPdF7hjHob4NnA8ZGCI4wqfUXFQCIDLz1F6NBxG08FoPhgtB0bLgaFcDjxQuv0Uuf5/8HslCp9Q+k54euEZOe0HB2Pj5+ToI9e+hP5DJPmLkL+JlVfQv/uEHH+Sqm/B7CNk2UOuPpj/HwTuIKkf6bDtM9Z+HqHwBKZTsvTB3UmhfmD6och+Qv4blR+tR4ZyPTKafkfT72j6BeaC0fGB0fERcDKAlAcOHGs+kNP+g+kHtq9ekawfOI45/5j3e1L0JezyJM2dTNofSTGf3vkCOG5Pkv/R3XdArpUs/cB5lXfkhMuDGvu35OhDdzeMr7Bp7mt85gH9h1cel7lkpUegYQ375pOejoH6cLmDQbsdv3mE5HGU08D+0At84YbungMlk0lSD9NPrj50+0f5o+2uenz5BEc6H003o+lmNN2AM85oe3W0/BhNB6P5YLQcGATlwALXbSj9EkL9GHR5dD66eYO1vAf2G/H3Z6iRPwE6vHFhACgAAA=="},"shape":[1280],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p652893","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p652894"}}},"glyph":{"type":"object","name":"Line","id":"p652889","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p652890","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p652891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p652832","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p652859"},{"type":"object","name":"WheelZoomTool","id":"p652860","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p652861","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p652862","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p652868","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p652867","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p652869","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p652870","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p652871","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p652872","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p652878","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p652877","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p652879"},{"type":"object","name":"SaveTool","id":"p652880"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p652854","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p652855","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p652856"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p652857"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p652882","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p652883","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p652884"},"axis_label":"Water Level (m)","major_label_policy":{"type":"object","name":"AllLabels","id":"p652885"}}},{"type":"object","name":"Legend","id":"p652895","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p652896","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p652892"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p652835","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p652836","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p652837","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p652838","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p652839","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p652840","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p652841","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p652842","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p652843","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p652844","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p652845","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p652846","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p652847","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p652848"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p652851","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p652850","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p652849","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p652852"}}}],"center":[{"type":"object","name":"Grid","id":"p652853","attributes":{"axis":{"id":"p652835"}}},{"type":"object","name":"Grid","id":"p652858","attributes":{"dimension":1,"axis":{"id":"p652854"}}}]}},{"type":"object","name":"Div","id":"p652897","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"9bf145c4-3cb7-4506-9799-e792c3625d5f","roots":{"p652899":"b81954a6-085f-4adf-8bc2-896c89bbcf22"},"root_ids":["p652899"]}];
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