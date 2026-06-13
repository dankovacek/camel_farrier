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
    
    
    const element = document.getElementById("bd15e413-0889-4620-be4b-cf23446bbaf4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bd15e413-0889-4620-be4b-cf23446bbaf4' but no matching script tag was found.")
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
                  const docs_json = '{"2d35324b-ee8b-4362-8cd1-94f5caa0eae1":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p178867","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p178868"}}},"roots":[{"type":"object","name":"Column","id":"p178940","attributes":{"children":[{"type":"object","name":"Figure","id":"p178869","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p178870"},"y_range":{"type":"object","name":"DataRange1d","id":"p178871"},"x_scale":{"type":"object","name":"LinearScale","id":"p178879"},"y_scale":{"type":"object","name":"LinearScale","id":"p178880"},"title":{"type":"object","name":"Title","id":"p178872","attributes":{"text":"08GA014 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p178933","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p178927","attributes":{"selected":{"type":"object","name":"Selection","id":"p178928","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p178929"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[944],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+1ZO48cRRAeCIg2IyLbCAlhyeAVD1kWjA2cbXx+gM3jeA4HLAgMQhxCIvL8AAekm21ERIDkiIiJiDawRER20UVkJCY6vv6qvunpup3jQIBkyZt8V/2orndXz1VV+t25QbgLcX9//6fV5MWa4rfn/xvsyLeezfycjrhcbF2w87oLNeXY3Ex0M9/bdPqirVsQ8bvk45cSXc9uEfG7bPSO4y3HB6+k8Wa+QVwufuV4M39Y67kf4+SP8YtDOZaLRZBvIrkoZz3bIVZV51hpf5C7K8axwfWxfbAL98se2U7mD9DnbP6hs76OCH8Rm/l3Z03uFel69ntG8y/3i0/mt8Vx8CGCzznjMyniAP4gDfkK/4EP7UM72TmFXehH8v17mO0pu5aI8/I5ipvB+dif5TK5SVNeW0cacoV4XCgPCpTe8gsx5o3Rspvb0fyxXMBv8oPWDfYP5FC8Ka4YJ4gzxb/iyvW3uMn6Wj5lfu1BOcFPeU5/kz/ii/IM5KV9+nigPSCH7Cb7e/5Yfua8RZ4YX9m9qC/1THk5v1rfB+lXq1fTepzwSsJu9f1Vw8nLNt4yfzHjdoBeoGhXoPQYxKfqiezmeW91oFv9VtQF6HXZ8171xOvBnvvDzpPdcjyYPVQHEJfuL6tLqjfYd8X43yzOUV6ozii+MK68lH6qny6P6ofVPcjj9W3rJbPHBu3WrY7Rjs38gWsJUReI+N2999U9+f83/+F+fTLFixB/PZ9oxPPbCXMd/oVxhjhUnfP7wuq01o0j9pGv8UfenEl0M5+ftvHqVMJutVkPEUOnhvcV6sALaV77tR58Gxv/8bWEyFfvHw5Hyav+AZzfT/sztm8kGuewfml9VU0/t3U2X1W7zLs8b/3PmL6SX/PSS3LALqqLPB/r3jX+pt9yYahz65n5R6hx+NH3C81O0Gjb+LYfGO5+VKLWjWHl+2Wv6dz2Nx8aat7iSHJEuRFPrGcDed8zunWs6FfIu5UQdqGdu9VE9wdR92fEZv6z3ysV4wI/5zd1P++6vK3r3133ddJD8y5P/U6alxxC6Ldt+2xe8gLDeTpXWOncj21/86nz+cyw83Gh/CWcyl7uxzgf6ehPzce4t3iDqm+5PLQ/LD2C8rPmLR8Ux/JzxBznJV/lm3D83ChPL4fbPep7+DkxjyRfxLhO9Ji+yusYn5FWn4B42jB7G8Ju6hc4jnuedToi6grrJ/qmMyVq3BD55nFdv2l8dphX6EuYj+Dj/ZO9CygP+8ebz/l8XdIL9nXal9HyO+d5Wf/h32fSvkPQ9bH7QvUedj6d9lXVD98YTncMu23D5qty/vYXRgv7vPB7TnVV8pb3GiRUn817L9dr3Ueqx4q3Xc/j1u+JxvN4+onJYXaHB2l/IOsK7Bzrnuef6p/5R3GjuGAcRP/czzr1bOLLeBBN3DvZj2M++/0Pv3ckV183vX6aHMuFrct9tb0nZRfow/iM97T8DHlOujxP94j1uR+ZPZH2490w69HkP+HrT6Rx/B7/1xHvFfTpx9O75UgIIbCO8g70+kdyxjwgP/K3Pk32KPSWnPa+O+bvvIw2/6jrkxFMEB+PJP5HwpLP8bSPcsgvogdY+A/jomWvMRzbl/erb10TJ4NzIh/ZcSz+1o6bfjlOI43z1u7DeO6r26dq0ibvIF7UFzdpPvdB/fczzrPvHiDrEeh8L+n7l9WtXJ+sTsa4Eg2JmKc5b9VP3P46jVfVt18aql6W96f6Od3T8V4c6/sOrrN+QePiB/nYb0T+uk/ydz/V69JO2Q5Wp2N9kv7CgZ15D2Y5DvTRRR8U7TAm75p3SfHdQnpFO4if/C0+B99b+j5g7wfU9fPlvYB7YHBPxP6B9Rx66z7Aedfs+83119N4UfdJl/179Ft+f6iPHEO9n3SPRnv3fR3fQfAX8yW+J/J56l91Hyuu1R/0/bO/W0T38+wLcj5W20b3/aTLIX369xXjQnL9FWKp+mvp5Sh9NS/5hZKjf1+5vNG+Ud7Y16+XX3l3dP/1fFyOaP+op+wcUfuivrLvqH5eP8t9MS9FK78Uv7GeKL9i31fU4fI7r+eZvqvr/a86vqafZHwN1kV+jKOynonO9d/qvuTN3zHK7w+5zvf3QZ3iNN8D9v0FQ/wOI9Q8sFg/GGf/nuuQ9enqz/N3jse8/x7NW++LG39/t07rfazvCn0d8Ly5953z8P9Lqk9AnCi+4K/oT/k7YtHXYDJ+L1Qfo3jI8dq/1xgf4jvOr+yLxBf77tz4E/2m2e6AHQAA"},"shape":[944],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p178934","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p178935"}}},"glyph":{"type":"object","name":"Line","id":"p178930","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p178931","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p178932","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p178878","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p178905"},{"type":"object","name":"WheelZoomTool","id":"p178906","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p178907","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p178908","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p178914","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p178913","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p178915","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p178916","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p178917","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p178918","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p178924","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p178923","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p178925"},{"type":"object","name":"SaveTool","id":"p178926"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p178900","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p178901","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p178902"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p178903"}}}],"right":[{"type":"object","name":"Legend","id":"p178936","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p178937","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p178933"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p178881","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p178882","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p178883","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p178884","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p178885","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p178886","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p178887","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p178888","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p178889","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p178890","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p178891","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p178892","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p178893","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p178894"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p178897","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p178896","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p178895","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p178898"}}}],"center":[{"type":"object","name":"Grid","id":"p178899","attributes":{"axis":{"id":"p178881"}}},{"type":"object","name":"Grid","id":"p178904","attributes":{"dimension":1,"axis":{"id":"p178900"}}}]}},{"type":"object","name":"Div","id":"p178938","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"2d35324b-ee8b-4362-8cd1-94f5caa0eae1","roots":{"p178940":"bd15e413-0889-4620-be4b-cf23446bbaf4"},"root_ids":["p178940"]}];
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