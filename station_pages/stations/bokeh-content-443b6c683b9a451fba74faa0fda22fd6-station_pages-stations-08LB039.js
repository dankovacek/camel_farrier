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
    
    
    const element = document.getElementById("e0c337c1-43d6-4c2b-a81f-7d4be693a54e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e0c337c1-43d6-4c2b-a81f-7d4be693a54e' but no matching script tag was found.")
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
                  const docs_json = '{"af7a9122-bc6e-4183-97db-d6596e2ec185":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p220219","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p220220"}}},"roots":[{"type":"object","name":"Column","id":"p220292","attributes":{"children":[{"type":"object","name":"Figure","id":"p220221","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p220222"},"y_range":{"type":"object","name":"DataRange1d","id":"p220223"},"x_scale":{"type":"object","name":"LinearScale","id":"p220231"},"y_scale":{"type":"object","name":"LinearScale","id":"p220232"},"title":{"type":"object","name":"Title","id":"p220224","attributes":{"text":"08LB039 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p220285","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p220279","attributes":{"selected":{"type":"object","name":"Selection","id":"p220280","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p220281"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[914],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7VZTUhUURR+mo069KOl4ViZv9MPWebDysruTYuKDBGCIoRmEdJSIly4aVq4ihgiWkiLBiQKChcJ0aoGiQhyYUJFZTWTZdZU/vdv03WG7N0355z73gNn85hz37n33HPP/c53ztM0LdhSs5Rr8d/304ZnuC3HDclDBe3zIbn5yXV9E/ResKNjB6Xva/Y2JI2nzsiba7j8fyuPz+ep4uD6E7u5tK6nzvQeh+3zbOPSPN2VSe/FYrG7vb3lpvmrZPuGpHlCvb2VyL4ludhXBbLe6ll5Sty/Gzk2npjHi6xXRun9e/qjj0pkP+jLjf/9PVM51DmKuHLZiSuDHhiPhU2BbEoPjdepNamcjtNfDNx/4yQj9EIT059AvV2+D5Sedubi4Mw4z7gRlt67seINqifOien6CwbIY9dX9FPrBUeuPnGiJ/bfB+m97it+SNkJjltYL9R65zWzIZ/d36V7YXCc8qfhHJLwJ9DzjvQLcr7CX6OUXrjhXNSJneY4xOLV7O9jgZ50GBd18h4JnFqAjidwB8SLwq69+ZDcd7tgCbVeYXt0IbdhvwHf0kB86WxJcaKn8ov2tBPUE/P9IeNzbwTUE37WyHMoaJ+H6OF4lhr35zQS1z8YjZ/jDPZLlBHxENxza4RZlcvxMoaMTyrs/MJgnBuaC3wROD/AbMjnRA/Dfwv5YU70ZuIp68gzZkMO3Pv/71lZL9Dz2ImdoQNbImC83D8wqMibIC6HLue/J+O6KQDeIxUuYfiC4QDJixI4XUaut7YpD1kvl+ZL3bqJh1fJPLhjncRDA7UlCG56FThtqh/8OlIXbIXxvLvWxOPN9UO1zM/rd5r4e7VpX5vouse/GbZvaKeiXtrOrc4n72cz7NehikRd1LEe8XsFnFfqKxV2loL5tvF2voLPrwTPJ9LmUfDyZUj9WKCoA7I4fL9cZL6F6oSUeP4m87u4L9+YnJ/j+UvojTvJY+FSF1k/hE5deOsEz2b1T56A8RDj0f/xohCsE3O6SH4n6kQ3wgvTFfFW5IinrW3KBO2scZM4Ks4Lwz2XEz4p4mkRp/NZFnJ/ixT824vEd64ivj2IX5ZS64n6A6sHMriNul/c99/MQR2uqnfEej+xcTv31qqeOO+vDOazU2Qdl9M1wWzwbgOegHWlOE+y3vRfyAP7EwKvP5L+HOsH8SeYl0bq+S/WSXyfu59OWMEj3+CVKFQ/aIcGPzuxU9TTpJ2+85+HmQ25ym+irif5oIj7YSd9Imx/KjsxfqrirVj9pNJz6k9xH0A+LOImk9PnAOYTUU8sVuSTDASn07iTPkqkLUPByxdxG/1NrK9swIFtSF94A7fA+wVumeQGfpngw9tN/WqEl2q7EL5dZ+qH18p95gX7Tf3kfQi/q+Z0PbDeOC9zHy5W5MtyZJ0yOl9eK0L6XKvIvI70u1Rxjd4Hdb8vm9vI9waetATxs8uJnSKPaVRcx550gn0dwQ9HreSJYN1ZMJ9hOInhrgqvMRwU95ns0wreHqH6LHcftL4C81z5zZeI/QPUfKuOHoe/B/QffG5bL9FnDiv6L+D+kr5jWNkfZudfQGWitpAcAAA="},"shape":[914],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p220286","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p220287"}}},"glyph":{"type":"object","name":"Line","id":"p220282","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p220283","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p220284","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p220230","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p220257"},{"type":"object","name":"WheelZoomTool","id":"p220258","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p220259","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p220260","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p220266","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p220265","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p220267","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p220268","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p220269","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p220270","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p220276","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p220275","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p220277"},{"type":"object","name":"SaveTool","id":"p220278"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p220252","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p220253","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p220254"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p220255"}}}],"right":[{"type":"object","name":"Legend","id":"p220288","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p220289","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p220285"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p220233","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p220234","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p220235","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p220236","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p220237","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p220238","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p220239","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p220240","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p220241","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p220242","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p220243","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p220244","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p220245","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p220246"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p220249","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p220248","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p220247","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p220250"}}}],"center":[{"type":"object","name":"Grid","id":"p220251","attributes":{"axis":{"id":"p220233"}}},{"type":"object","name":"Grid","id":"p220256","attributes":{"dimension":1,"axis":{"id":"p220252"}}}]}},{"type":"object","name":"Div","id":"p220290","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"af7a9122-bc6e-4183-97db-d6596e2ec185","roots":{"p220292":"e0c337c1-43d6-4c2b-a81f-7d4be693a54e"},"root_ids":["p220292"]}];
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