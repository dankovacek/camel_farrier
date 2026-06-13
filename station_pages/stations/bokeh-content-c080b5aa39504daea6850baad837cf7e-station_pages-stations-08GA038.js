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
    
    
    const element = document.getElementById("ff6f28f3-caf5-4b51-960d-a30f7c6dbf72");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ff6f28f3-caf5-4b51-960d-a30f7c6dbf72' but no matching script tag was found.")
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
                  const docs_json = '{"0a33e3ba-b7c4-4c30-96ca-18c390c1976f":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p180826","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p180827"}}},"roots":[{"type":"object","name":"Column","id":"p180899","attributes":{"children":[{"type":"object","name":"Figure","id":"p180828","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p180829"},"y_range":{"type":"object","name":"DataRange1d","id":"p180830"},"x_scale":{"type":"object","name":"LinearScale","id":"p180838"},"y_scale":{"type":"object","name":"LogScale","id":"p180839"},"title":{"type":"object","name":"Title","id":"p180831","attributes":{"text":"08GA038 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p180892","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p180886","attributes":{"selected":{"type":"object","name":"Selection","id":"p180887","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p180888"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1096],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1096],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p180893","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p180894"}}},"glyph":{"type":"object","name":"Line","id":"p180889","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p180890","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p180891","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p180837","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p180864"},{"type":"object","name":"WheelZoomTool","id":"p180865","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p180866","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p180867","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p180873","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p180872","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p180874","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p180875","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p180876","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p180877","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p180883","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p180882","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p180884"},{"type":"object","name":"SaveTool","id":"p180885"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LogAxis","id":"p180859","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p180860","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p180861"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p180862"}}}],"right":[{"type":"object","name":"Legend","id":"p180895","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p180896","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p180892"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p180840","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p180841","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p180842","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p180843","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p180844","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p180845","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p180846","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p180847","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p180848","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p180849","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p180850","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p180851","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p180852","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p180853"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p180856","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p180855","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p180854","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p180857"}}}],"center":[{"type":"object","name":"Grid","id":"p180858","attributes":{"axis":{"id":"p180840"}}},{"type":"object","name":"Grid","id":"p180863","attributes":{"dimension":1,"axis":{"id":"p180859"}}}]}},{"type":"object","name":"Div","id":"p180897","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"0a33e3ba-b7c4-4c30-96ca-18c390c1976f","roots":{"p180899":"ff6f28f3-caf5-4b51-960d-a30f7c6dbf72"},"root_ids":["p180899"]}];
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