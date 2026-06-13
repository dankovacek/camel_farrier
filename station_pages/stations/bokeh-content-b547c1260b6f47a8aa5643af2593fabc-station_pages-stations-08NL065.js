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
    
    
    const element = document.getElementById("a897e6a8-e41f-4359-a6d1-eb5fb0d8dec3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a897e6a8-e41f-4359-a6d1-eb5fb0d8dec3' but no matching script tag was found.")
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
                  const docs_json = '{"ee4d2bee-7cd9-431d-be27-dfe572de4651":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p653007","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p653008"}}},"roots":[{"type":"object","name":"Column","id":"p653085","attributes":{"children":[{"type":"object","name":"Figure","id":"p653009","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p653010"},"y_range":{"type":"object","name":"DataRange1d","id":"p653011"},"x_scale":{"type":"object","name":"LinearScale","id":"p653019"},"y_scale":{"type":"object","name":"LogScale","id":"p653020"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p653067","attributes":{"start":0.1059999966621398,"end":1.498999943733215}}]]},"title":{"type":"object","name":"Title","id":"p653012","attributes":{"text":"08NL065 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p653078","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p653072","attributes":{"selected":{"type":"object","name":"Selection","id":"p653073","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p653074"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1614],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqeNAHyvZ9tR+s/mEEOky7/Rs93OfwsOoLsj0P/Hs/08PewZKOHijdfjmc/esQt+vmcPbfYElHo+4YHvXCaDyOxuNwaueMpufR9DyansEN/WHVfxn1z2h8jubr0Xw9Wg6MlgOj5cBoOUBuOeCw7TNF46ALCmxRxg+JdYcCWyNJ44wNkyXIsgfmnoRdnnj1P1AzxJT/////fd8kTHFwcsNT7kDGb0nXR659QMcA45Gk8CQ1/PH6l1B40FF+uPoLV/gDx+9fDOfxXYXW1xeHs/9wxStR4j+BBYbOpr2j4QMuYMD9+9H0gqdeomM5TFT6HXUPPN2OhtdouqVZPw7Urlxc8HbY1xOgdrdmDEX9mYHKh+T2o9Ddi76eA12+4cApkvoJ6PoHlA9Mx/K3f34Y9ukYVCtA2zMNOc+f4/MvsN/3FJ/8gMYXkj/IdUeCQMRJevoPuF5m6PQ3/v3/H59ivZ+e4UNuPI7qG23f0Kx9Q4VyZjR9jqbPAU+fkPYN6ePGwyP9jxx/g+L5rsoPWtTbDVOdwe17GD3YyzVC7dtB7X5gPP4P5buKMx6B/dGEFOvzOOWHR74laV3VAbnWywTDAwCCek5KcDIAAA=="},"shape":[1614],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p653079","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p653080"}}},"glyph":{"type":"object","name":"Line","id":"p653075","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p653076","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p653077","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p653018","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p653045"},{"type":"object","name":"WheelZoomTool","id":"p653046","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p653047","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p653048","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p653054","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p653053","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p653055","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p653056","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p653057","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p653058","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p653064","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p653063","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p653065"},{"type":"object","name":"SaveTool","id":"p653066"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LogAxis","id":"p653040","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p653041","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p653042"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p653043"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p653068","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p653069","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p653070"},"axis_label":"Water Level (m)","major_label_policy":{"type":"object","name":"AllLabels","id":"p653071"}}},{"type":"object","name":"Legend","id":"p653081","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p653082","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p653078"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p653021","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p653022","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p653023","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p653024","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p653025","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p653026","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p653027","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p653028","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p653029","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p653030","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p653031","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p653032","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p653033","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p653034"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p653037","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p653036","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p653035","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p653038"}}}],"center":[{"type":"object","name":"Grid","id":"p653039","attributes":{"axis":{"id":"p653021"}}},{"type":"object","name":"Grid","id":"p653044","attributes":{"dimension":1,"axis":{"id":"p653040"}}}]}},{"type":"object","name":"Div","id":"p653083","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"ee4d2bee-7cd9-431d-be27-dfe572de4651","roots":{"p653085":"a897e6a8-e41f-4359-a6d1-eb5fb0d8dec3"},"root_ids":["p653085"]}];
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