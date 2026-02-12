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
    
    
    const element = document.getElementById("cc1915e0-e47f-40f6-9238-94104c78b431");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc1915e0-e47f-40f6-9238-94104c78b431' but no matching script tag was found.")
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
                  const docs_json = '{"5c8af157-5047-49f5-b5d5-51a8c370cc27":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p284052","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p284053"}}},"roots":[{"type":"object","name":"Column","id":"p284130","attributes":{"children":[{"type":"object","name":"Figure","id":"p284054","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p284055"},"y_range":{"type":"object","name":"DataRange1d","id":"p284056"},"x_scale":{"type":"object","name":"LinearScale","id":"p284064"},"y_scale":{"type":"object","name":"LinearScale","id":"p284065"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p284112","attributes":{"start":2.0369999313354494,"end":3.009999980926514}}]]},"title":{"type":"object","name":"Title","id":"p284057","attributes":{"text":"08HA057 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p284123","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p284117","attributes":{"selected":{"type":"object","name":"Selection","id":"p284118","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p284119"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+1aLWjDUBB++WlaqiaqxigRE6sYFdWFlIqIqbqJwKLKZBlTNU1F1UTFqKgoBMLcqCgTkaViTISJmahBw2TFmCib666r2gaDfFkfNEnMU1/e5b577767HGPr56PD+K9msylqAG7eLkA4ezgUoP2cFoRTxzqEM90ihKMHxe3Eqhp9FufvQ1ermo8171PPk1Pef6yr1eqsP8vGmvflUU6L97mF+LNmSyU0TmBMq1Sw/UA7Kd9mIP5KBoSj/PDlF7t+Fco/pEMU6PtaVQWMT4WnP0m/8ONhE2fQfvA97zsyGC8yyDu2X28hQeevMJZA3iXwfhFBHiAcWgfYeiCCcQbhtKAtaknRF+F4EFK/JGAtGdkk8kz3E/7dpNM7g/pO+G1+qOSSyC/l12/8WDUT4st0i1z19fzxXYnCl1p+DoVH7aQ6jiuOdA/G394pZqfnQTxAddwmXiHc9PIawqljHcP1FnzrFcawumP0KoPxCeHMlxsJ5AHCaXcPWJ+94UI4qqswPd+qovo61eX/2O/ZQt9+K/3babGXTXlPnl/s+5N4970vzuMd176D6TOwDqO8ybfvvV/mu58eQPpMy/tY/eA70P8Ha9Hgh9vMCXDts0f4D5QB7ZTBcyQjPKiTEaQ/qS6GcKw74Ko/o+pIqudC9UEpT2N905IhIPyx2wNs/qXh/p67WL/vePLnPIaqdCPNa1g1MxReC9oMvD9ROyF/UpwwMD8IPHGM/5xHeDtF4u/tSYh8T3wCy1SCEggnAAA="},"shape":[1249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p284124","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p284125"}}},"glyph":{"type":"object","name":"Line","id":"p284120","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p284121","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p284122","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p284063","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p284090"},{"type":"object","name":"WheelZoomTool","id":"p284091","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p284092","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p284093","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p284099","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p284098","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p284100","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p284101","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p284102","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p284103","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p284109","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p284108","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p284110"},{"type":"object","name":"SaveTool","id":"p284111"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p284085","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p284086","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p284087"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p284088"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p284113","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p284114","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p284115"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p284116"}}},{"type":"object","name":"Legend","id":"p284126","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p284127","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p284123"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p284066","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p284067","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p284068","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p284069","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p284070","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p284071","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p284072","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p284073","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p284074","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p284075","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p284076","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p284077","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p284078","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p284079"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p284082","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p284081","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p284080","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p284083"}}}],"center":[{"type":"object","name":"Grid","id":"p284084","attributes":{"axis":{"id":"p284066"}}},{"type":"object","name":"Grid","id":"p284089","attributes":{"dimension":1,"axis":{"id":"p284085"}}}]}},{"type":"object","name":"Div","id":"p284128","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"5c8af157-5047-49f5-b5d5-51a8c370cc27","roots":{"p284130":"cc1915e0-e47f-40f6-9238-94104c78b431"},"root_ids":["p284130"]}];
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