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
    
    
    const element = document.getElementById("a25f3989-e9b3-462a-81d4-529e5e60503c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a25f3989-e9b3-462a-81d4-529e5e60503c' but no matching script tag was found.")
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
                  const docs_json = '{"d68ea178-07e6-4935-b9e8-c5ddcdd9a1e2":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p860232","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p860233"}}},"roots":[{"type":"object","name":"Column","id":"p860315","attributes":{"children":[{"type":"object","name":"Figure","id":"p860234","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p860235"},"y_range":{"type":"object","name":"DataRange1d","id":"p860236"},"x_scale":{"type":"object","name":"LinearScale","id":"p860244"},"y_scale":{"type":"object","name":"LinearScale","id":"p860245"},"title":{"type":"object","name":"Title","id":"p860237","attributes":{"text":"08NL005 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p860298","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p860292","attributes":{"selected":{"type":"object","name":"Selection","id":"p860293","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p860294"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaNjjdr7sEAPDgbAv50A0w8eFYNqh2x9MN6j+PQuW378KSAMAVLJmYDAAAAA="},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p860299","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p860300"}}},"glyph":{"type":"object","name":"VArea","id":"p860295","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.3915999579429625},"y2":{"type":"value","value":118.32000000000001},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p860296","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.3915999579429625},"y2":{"type":"value","value":118.32000000000001},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p860297","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.3915999579429625},"y2":{"type":"value","value":118.32000000000001},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p860309","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p860303","attributes":{"selected":{"type":"object","name":"Selection","id":"p860304","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p860305"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[458],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QyDh05IS9NxgNCacJqRgcHB2FgfQxwLvWDmTDVkuuH1RWVSaHT70eWBQBHCD5RBphmuLxYD21tgK4yPbhBZx08MvcD9IQc2mlh1QPezDCQNdN9/eyJodPeiywPj/Tcl9IPAHd9IoXG5k1RzKLWPWvaim0dpvD6oEuFCoRcXCMDp////7z9zxhmDBsfHZkeoObrE5FtSaVi+dOC6LoyPhrmX3PQ62OjBVn6P0qP0KE0izQQqh55ZQcqzm/6Q8uyAL4R2cEXmw+QR6hhi0ehoOA0sf+2NhSPgNLgcvhyMjQaWg0FQfYHIdEKaWwAyjW4/pnth7ox0x1YPIPzT4InNXzB3JKQtC0N2N1BfKDINlsdFY/E30L5IbOoR5sHsRQ8HmDshNNhfSDTCP0AayZ9gc7C4A8UeWLwjxT+wnrTFJr5gpqQFNhrYzjFFpg+c8TEmaB4ec4HAEJlGqq91sdXfhNrZsHoZnUZvPxNLw9rZuGj0ep5oGq1dQ6gdhKtdQchcYmmc7S6ouYTCk9RwQPcPoXCG08juAACrVYAzUA4AAA=="},"shape":[458],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p860310","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p860311"}}},"glyph":{"type":"object","name":"Line","id":"p860306","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p860307","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p860308","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p860243","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p860270"},{"type":"object","name":"WheelZoomTool","id":"p860271","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p860272","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p860273","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p860279","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p860278","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p860280","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p860281","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p860282","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p860283","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p860289","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p860288","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p860290"},{"type":"object","name":"SaveTool","id":"p860291"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p860265","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p860266","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p860267"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p860268"}}}],"right":[{"type":"object","name":"Legend","id":"p860301","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p860302","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p860298"}]}},{"type":"object","name":"LegendItem","id":"p860312","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p860309"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p860246","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p860247","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p860248","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p860249","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p860250","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p860251","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p860252","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p860253","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p860254","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p860255","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p860256","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p860257","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p860258","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p860259"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p860262","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p860261","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p860260","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p860263"}}}],"center":[{"type":"object","name":"Grid","id":"p860264","attributes":{"axis":{"id":"p860246"}}},{"type":"object","name":"Grid","id":"p860269","attributes":{"dimension":1,"axis":{"id":"p860265"}}}]}},{"type":"object","name":"Div","id":"p860313","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"d68ea178-07e6-4935-b9e8-c5ddcdd9a1e2","roots":{"p860315":"a25f3989-e9b3-462a-81d4-529e5e60503c"},"root_ids":["p860315"]}];
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