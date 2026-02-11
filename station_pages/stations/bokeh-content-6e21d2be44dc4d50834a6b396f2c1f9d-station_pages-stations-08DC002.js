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
    
    
    const element = document.getElementById("b78247b5-ee5b-4252-a119-510ec45407a0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b78247b5-ee5b-4252-a119-510ec45407a0' but no matching script tag was found.")
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
                  const docs_json = '{"b57b7642-088f-4d95-a5ce-4bbc215051e0":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p90052","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p90053"}}},"roots":[{"type":"object","name":"Column","id":"p90125","attributes":{"children":[{"type":"object","name":"Figure","id":"p90054","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p90055"},"y_range":{"type":"object","name":"DataRange1d","id":"p90056"},"x_scale":{"type":"object","name":"LinearScale","id":"p90064"},"y_scale":{"type":"object","name":"LinearScale","id":"p90065"},"title":{"type":"object","name":"Title","id":"p90057","attributes":{"text":"08DC002 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p90118","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p90112","attributes":{"selected":{"type":"object","name":"Selection","id":"p90113","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p90114"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JfTAQZhzA8Z9my3GzWTUNUaQxIkYi8oyxRBEiSmlK5VIxW06Xe1yW9b6aNpubjet9NjtOx3HzZL3ptCzLlmm9bjadTqfLZlnbvn99/viImODcdfntIvKDA6qNF9b+r7Z6B02NG0rY99n8j8Wo87zR2PSu4Y+WoVKBqHtvr+YL3kd5bh6qE/ey+MiP0VyPRil8+Cb/Qg3q2ng00WOr+FsnUW1dinrSM2jqGjL5BatQ3bVFXdy6kp+cg9Jgj2rh2RV8fz6akqkoTt9l8Ke2ok7wRDPQs5x/txSViz/q5hvL+KS9KPdDUL33ezrv+iGa1kiU1Adp/IMq1Lvj0LiPLuXNMVTpS1A/HIdm39epvOcKVN/aoM5oTuFHslEOTkTl3b6EP7cJTeYUlL8vJvOHClH7zkDT0Z3Ery5B9Y8P6oq+RN5/F8qlIFRrf13MW3yAplKhzL6fwHdVos6JQWM5Es9/dhhVcCLq7ieL+NwvUayWoaqxQh16aiHfk4WSZ4fKpi2OP7IBTbgDSu/5WL7gbdS2bmiOdy3gI4tRXfdCveVaDG9XhlIbgCr69nz+5n40RWEok+69wddVoI6JRnNnOJovrkY1OR51/eMoPu4kSn8qqpKnUTs2vM43ZqIk2KIaaInkS9ejcbZHaT4TwSflox50QVN26TXedSuqVg/UKT2KH9qOstsPlfuNcL5tD5q0EJSH/fP4fYdQe0SiaR8K4zOqUI3Eoj7wVyjvdQzlXDKqzHGoR+vm8uUZKL42qDqaQvisbDRjE1AqTgfz/ptQdzqhyb44h7coRFXpjjqwO4i/rFFyfFBZ9s3mq3aimROE0n03kM89iHq8QlM9GMCHVqLqmY9686NXeevDKEcWowp/4s9fq0XzVjqKrRWq441+fEQWmr7nUbZ8M4u324D6i5fQRJ335W8WoCpyRT2xy4f/ahtKjBeqOz/N5LftQGMfgFJ/y5uP24/6t1A0esCLd6xA1RiFOn74Ff6Pz1FKF6FyfuzJN51Ak5iKMmiJqqzeg5+WiablWZSUlpf5oXWod72IZvqZGXxbHqo0F9TDne783iIUDw9U7Ven88u3o3k0C+XAL2681x7UZ4PRrOx35UfLUZVHoPYZmsZf+BQlKxbV2J9T+Y+OovFLRum0QJVd58JLBppPrFECm5z5y2tQr5+A5qnTU/iqjajmOKG+0uHEb9iCMt4dVfUVR36uRnN1Jsrmnx14653/+S9opyDBmAcAAA=="},"shape":[243],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFCI6Rd0YGBgWFBgywWiGa4vZkPmA+X5QHSDLRerAyMDg4Ox8X97IP/AmTMMYPUMDD/qsdANIuvA6h4sLvgLooH6fiPTuPRRiwba+9MeiU7oP/QVG/2gSuQTyTQwHBhCHr/FoHG5h1h1JNANjgkv6RGOo/TwpNHTNbXz22D3/wG5VmaUcg9XPrPlEoGWg4IORJiLXm6iy8PEcckvmDlT2+H////7z5zRdCDFX9cXi4HUPwjcIY9CLy5QdECNJzAfbA+SuMPDKkkHJHPQaXR5WLjAaJg80F8yyDTMHejhCaNx+QNOI8JNEF88ECHPhy88CcULuvvRw2WB+0MZByqkHzANALm1VzeYBwAA"},"shape":[243],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p90119","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p90120"}}},"glyph":{"type":"object","name":"Line","id":"p90115","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p90116","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p90117","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p90063","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p90090"},{"type":"object","name":"WheelZoomTool","id":"p90091","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p90092","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p90093","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p90099","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p90098","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p90100","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p90101","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p90102","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p90103","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p90109","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p90108","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p90110"},{"type":"object","name":"SaveTool","id":"p90111"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p90085","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p90086","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p90087"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p90088"}}}],"right":[{"type":"object","name":"Legend","id":"p90121","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p90122","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p90118"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p90066","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p90067","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p90068","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p90069","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p90070","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p90071","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p90072","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p90073","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p90074","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p90075","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p90076","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p90077","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p90078","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p90079"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p90082","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p90081","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p90080","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p90083"}}}],"center":[{"type":"object","name":"Grid","id":"p90084","attributes":{"axis":{"id":"p90066"}}},{"type":"object","name":"Grid","id":"p90089","attributes":{"dimension":1,"axis":{"id":"p90085"}}}]}},{"type":"object","name":"Div","id":"p90123","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"b57b7642-088f-4d95-a5ce-4bbc215051e0","roots":{"p90125":"b78247b5-ee5b-4252-a119-510ec45407a0"},"root_ids":["p90125"]}];
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