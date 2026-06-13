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
    
    
    const element = document.getElementById("e6f645d0-51c7-4e47-ae50-625b84e5a0c8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e6f645d0-51c7-4e47-ae50-625b84e5a0c8' but no matching script tag was found.")
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
                  const docs_json = '{"1ed4be6f-5a30-418c-9781-da4004cdd31d":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p139836","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p139837"}}},"roots":[{"type":"object","name":"Column","id":"p139909","attributes":{"children":[{"type":"object","name":"Figure","id":"p139838","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p139839"},"y_range":{"type":"object","name":"DataRange1d","id":"p139840"},"x_scale":{"type":"object","name":"LinearScale","id":"p139848"},"y_scale":{"type":"object","name":"LinearScale","id":"p139849"},"title":{"type":"object","name":"Title","id":"p139841","attributes":{"text":"08EC005 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p139902","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p139896","attributes":{"selected":{"type":"object","name":"Selection","id":"p139897","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p139898"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1337],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1337],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p139903","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p139904"}}},"glyph":{"type":"object","name":"Line","id":"p139899","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p139900","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p139901","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p139847","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p139874"},{"type":"object","name":"WheelZoomTool","id":"p139875","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p139876","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p139877","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p139883","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p139882","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p139884","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p139885","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p139886","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p139887","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p139893","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p139892","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p139894"},{"type":"object","name":"SaveTool","id":"p139895"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p139869","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p139870","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p139871"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p139872"}}}],"right":[{"type":"object","name":"Legend","id":"p139905","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p139906","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p139902"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p139850","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p139851","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p139852","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p139853","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p139854","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p139855","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p139856","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p139857","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p139858","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p139859","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p139860","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p139861","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p139862","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p139863"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p139866","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p139865","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p139864","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p139867"}}}],"center":[{"type":"object","name":"Grid","id":"p139868","attributes":{"axis":{"id":"p139850"}}},{"type":"object","name":"Grid","id":"p139873","attributes":{"dimension":1,"axis":{"id":"p139869"}}}]}},{"type":"object","name":"Div","id":"p139907","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"1ed4be6f-5a30-418c-9781-da4004cdd31d","roots":{"p139909":"e6f645d0-51c7-4e47-ae50-625b84e5a0c8"},"root_ids":["p139909"]}];
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