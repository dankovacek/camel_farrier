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
    
    
    const element = document.getElementById("c2738254-d3a3-49b0-a0ab-c3179705116c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c2738254-d3a3-49b0-a0ab-c3179705116c' but no matching script tag was found.")
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
                  const docs_json = '{"fcfe7550-3676-4dcf-be5f-b1aba0bd28d3":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p327541","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p327542"}}},"roots":[{"type":"object","name":"Column","id":"p327614","attributes":{"children":[{"type":"object","name":"Figure","id":"p327543","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p327544"},"y_range":{"type":"object","name":"DataRange1d","id":"p327545"},"x_scale":{"type":"object","name":"LinearScale","id":"p327553"},"y_scale":{"type":"object","name":"LinearScale","id":"p327554"},"title":{"type":"object","name":"Title","id":"p327546","attributes":{"text":"08DC003 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p327607","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p327601","attributes":{"selected":{"type":"object","name":"Selection","id":"p327602","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p327603"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JaVgIZgDA8ZdFqZWiRDoUpZRKlCJ61WqliFCKFJGrqJjzqedtjib3NZHlmFvTsDxZplduMk0Ylrk1LGMhtz37f/p9+AkhXayysiqFULoy8391QgaKl3Yol5/P4N1moz7ugmLU5an861xUq7xQe9ycwp/ORznaH9W7B+n82tUovPuhPPc0jR+7EfXHCBTrGyfz3bejuhCDerxA0XTfJH7jCFR+LVBXH5rITx6LslkrVJsqJvAB6Sgu26CccmY8bzQD9daOKPr8lsr/noMq0wO1yY1x/I48lNIX1Y27Y/npK1C07Ity95MUPmQ96pthKGa9GMO32oqqOBp12IfR/J09KOcOR2XVHHXJwWS+/2iU981Q5RxJ4ttOQnHQGuWAk6P4uizUuR1Q2P6ayB+ai2qQG+rHV0fyC+ajdPBBdfjWCH7IUhRPe6H85q8E3ulb1EdCUMQ9j+efF6FaHIXa+e1wXu9EmTAM1YumqJf9GMe7jUJ53ARV4uFYvjEVxSpLlB6Vw/hTU1En26F4d24ov3YWKi8X1GdrhvBjc1F+9ERVUBvD++SjuNAT5fgHg/kmq1EXShR+Twfx1YWoJkWgNmiM5jdtQxkQg6rm00A+/QcURiNQbjVCFXhoAH81BUWmBUqTiih+exrqIBsUN05H8tO/QmXWEfWu6v58SA7Km+6oZl6P4C3yUBT3QBl2N5y/vRz1nD4orJ58yZcUoIoIQ32vIYzP2YKybTSqA+9D+ag9KOriUOY2Q9X+4Bd8aTKKQWYoH5eH8PMnora3RnH4RDA/JAtVvQPqvAv9eKe5KI+4ooq9Kvln81As7obS+VYQX7EEdXwvFC/q+vLL1qJyDUFd+awPn1iEsjES1co3gbz7ThSnhqJMborqbUlvfk0iCi8TlGfLevEpqag/tEZRcCyA95mKqsoWdeo5f77JLJSFzqh8a3ryFxWKSZ4oDWr9+KJFqP17oqi578unr0JlKFFvqe/BBxaivBqOKuNVd954G4rtg1EGffLhrxejnpaAwswI5a7SbnxwCupacxQzj3rzFmmo9rZDHXrai789HeUcJ1SW1Z78vmwUEe4o713rymcvRG3dA8WBOx581HJUDwNRq8fufPsClKWhqKIbuvCPNqOYPxCl/Xs3vmw36pg4FPUGKPMOuPKOyajLTVHElnfmn01Ald8GdacTLnxFJsp4B1QNVc780jkoXF1RVl7pxI+ch/qVN4qVf3bk3ZegOhmAOqnOiX+7BuWaYFSezxz5M9+hSIlE+eF1B37dDtTdhqKoaoIytcSBF4moNxij8C2z5y+OQzWxNerPjtnxRVNQ+tuiunTWlk+bicLQGeWWS+353gr1la4oMv6w4Y0Xodrmh7rv/Xb89ZUopwWhMq1vy+/cgCI4HGXtS2t+xveozQej2PuxDR9ajOpWPOrZhigsS634fWNQhZujvvuLJZ89GaV1O1T7T7XmI6ejeOiIUl1sxdtko/6pC4roaxb8owWo5nVHbXfHnC9bhjImENXfj1ryC9ehcAxFWf6vGT9sM+p/BqDIf2fKd9qN6mgs6uEGKBr2f84vTULV2RT1sZ9N+JETUL6yQrXiuDHfJRPFSXuUSVUt+DezUa/ujMLzihF/5mtUY7xRv79pyK9bjLJbAKrzD5tnVf4HBn8AZnAKAAA="},"shape":[334],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/91WzUrDQBCO9QdBRMUg9OIPigRRUUIVKeoKQvAt9JJzz720Fx8it0DveQWD59y9thffoNBbnNnNJNntutZo8SeXj9n5ZuabaTJby8Jn1OHwh3HGspjrHjFNH/e+f4jnYRDsc/Qedliapk9JUpwLey+PL9n9tr2rywupfnRuYetynYm+l8YQxIHuDd4v8gBLetfQ7trRCmK/11rO48EOvcEinlsvvQXEePNxHhHmOMfPs763I2+2bMdDp4Y2IfG6z0MLz3O0o/QabPIbUfSn5VNfUn/qPCatY+DBfFYZ+CWkOhQ3hbrGuRj0/rc4+G4dnH/VvuB9rGM8IX0XVfNRHBu0tzAv4VfzqfHfundK++yjecZJcop9Ae8EUdWl2sA7yPbpsY7P/RBEKMULXbciLr7Txav1SnYj49+wGu6n16vcBhLxYG+N5xf8ZsbnecKgfp4j9/sXZT9QqF4jq9fM6xrqS3FgwFPcG6RDrsf9oMfF+oRSnMhDujlP4zfeTxPkH3XMfWnz0xxBD81Ly/usXokv5nVWpW+1LvzO2vdW5f0KW9wzTnZfFwjipqJPrWeo896+gPny/11c3xtmuR+kcAoAAA=="},"shape":[334],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p327608","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p327609"}}},"glyph":{"type":"object","name":"Line","id":"p327604","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p327605","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p327606","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p327552","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p327579"},{"type":"object","name":"WheelZoomTool","id":"p327580","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p327581","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p327582","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p327588","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p327587","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p327589","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p327590","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p327591","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p327592","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p327598","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p327597","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p327599"},{"type":"object","name":"SaveTool","id":"p327600"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p327574","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p327575","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p327576"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p327577"}}}],"right":[{"type":"object","name":"Legend","id":"p327610","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p327611","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p327607"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p327555","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p327556","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p327557","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p327558","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p327559","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p327560","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p327561","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p327562","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p327563","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p327564","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p327565","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p327566","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p327567","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p327568"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p327571","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p327570","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p327569","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p327572"}}}],"center":[{"type":"object","name":"Grid","id":"p327573","attributes":{"axis":{"id":"p327555"}}},{"type":"object","name":"Grid","id":"p327578","attributes":{"dimension":1,"axis":{"id":"p327574"}}}]}},{"type":"object","name":"Div","id":"p327612","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"fcfe7550-3676-4dcf-be5f-b1aba0bd28d3","roots":{"p327614":"c2738254-d3a3-49b0-a0ab-c3179705116c"},"root_ids":["p327614"]}];
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