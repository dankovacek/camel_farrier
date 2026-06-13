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
    
    
    const element = document.getElementById("c92fb46b-77cc-437e-ae93-22850304e904");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c92fb46b-77cc-437e-ae93-22850304e904' but no matching script tag was found.")
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
                  const docs_json = '{"ba4fdc55-2e57-4381-a2b2-ecdc92dcffb1":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p567235","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p567236"}}},"roots":[{"type":"object","name":"Column","id":"p567336","attributes":{"children":[{"type":"object","name":"Figure","id":"p567237","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p567238"},"y_range":{"type":"object","name":"DataRange1d","id":"p567239"},"x_scale":{"type":"object","name":"LinearScale","id":"p567247"},"y_scale":{"type":"object","name":"LinearScale","id":"p567248"},"title":{"type":"object","name":"Title","id":"p567240","attributes":{"text":"08NH045 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p567301","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p567295","attributes":{"selected":{"type":"object","name":"Selection","id":"p567296","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p567297"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAo/lt0CAA50CSRCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p567302","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p567303"}}},"glyph":{"type":"object","name":"VArea","id":"p567298","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.00306000002659854},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p567299","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.00306000002659854},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p567300","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.00306000002659854},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p567312","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p567306","attributes":{"selected":{"type":"object","name":"Selection","id":"p567307","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p567308"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgOJBTLlN0iIGBgV0VTDssvCQNohusG8D0gau6YJqh4LYUWJ6rE0w3LDED0gCoUrYAQAAAAA=="},"shape":[8],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p567313","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p567314"}}},"glyph":{"type":"object","name":"VArea","id":"p567309","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.00306000002659854},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p567310","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.00306000002659854},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p567311","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.00306000002659854},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p567321","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p567315","attributes":{"selected":{"type":"object","name":"Selection","id":"p567316","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p567317"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYLg5UbLoEACXZK+fCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p567322","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p567323"}}},"glyph":{"type":"object","name":"VArea","id":"p567318","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.00306000002659854},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p567319","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.00306000002659854},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p567320","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.00306000002659854},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p567330","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p567324","attributes":{"selected":{"type":"object","name":"Selection","id":"p567325","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p567326"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[913],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+2YwQ3CMAxFuwMDdQIkRkCcGIA7Q7ALV0ZhDdRLEJVy4AnXsZq0VPq9RD9xvr8tN07bdZ/ndR2HwDik9Nyfjv1a4270f+g5enpo/+84xzNXp8XDfNGPtY92pXgpvtp+cnwWr5fHaH5q8ZX6XcuOcVr5ba2POub6I18U0z/3R89r2cf6m/KlfEXuQ6oX1ctUvfD89jDPfwt7PFwnD9czLrWz7Lm/Nfbi4Lqnh/atsaXH8mvZb32e8W49Hun//Z2+lbyor6uvT/V11YfqQ/UR/3/c6r3h/YH4ntLjcjv33sh9wt//+6P928qfxWPZ53lrX6t56qnlpxWvpy/XP/3XxtRRm9/jK42TOoWXvbe/AS5dxHCIHAAA"},"shape":[913],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p567331","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p567332"}}},"glyph":{"type":"object","name":"Line","id":"p567327","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p567328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p567329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p567246","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p567273"},{"type":"object","name":"WheelZoomTool","id":"p567274","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p567275","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p567276","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p567282","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p567281","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p567283","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p567284","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p567285","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p567286","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p567292","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p567291","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p567293"},{"type":"object","name":"SaveTool","id":"p567294"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p567268","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p567269","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p567270"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p567271"}}}],"right":[{"type":"object","name":"Legend","id":"p567304","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p567305","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p567301"},{"id":"p567312"},{"id":"p567321"}]}},{"type":"object","name":"LegendItem","id":"p567333","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p567330"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p567249","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p567250","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p567251","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p567252","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p567253","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p567254","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p567255","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p567256","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p567257","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p567258","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p567259","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p567260","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p567261","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p567262"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p567265","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p567264","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p567263","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p567266"}}}],"center":[{"type":"object","name":"Grid","id":"p567267","attributes":{"axis":{"id":"p567249"}}},{"type":"object","name":"Grid","id":"p567272","attributes":{"dimension":1,"axis":{"id":"p567268"}}}]}},{"type":"object","name":"Div","id":"p567334","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"ba4fdc55-2e57-4381-a2b2-ecdc92dcffb1","roots":{"p567336":"c92fb46b-77cc-437e-ae93-22850304e904"},"root_ids":["p567336"]}];
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