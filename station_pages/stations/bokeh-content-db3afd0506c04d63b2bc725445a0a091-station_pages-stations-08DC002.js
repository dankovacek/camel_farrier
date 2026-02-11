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
    
    
    const element = document.getElementById("cc445891-726f-4c1b-b934-69634ba41d22");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc445891-726f-4c1b-b934-69634ba41d22' but no matching script tag was found.")
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
                  const docs_json = '{"b6ce5032-1fc3-4e53-a656-2ad091ff60aa":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p89578","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p89579"}}},"roots":[{"type":"object","name":"Column","id":"p89652","attributes":{"children":[{"type":"object","name":"Figure","id":"p89580","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p89581"},"y_range":{"type":"object","name":"DataRange1d","id":"p89582"},"x_scale":{"type":"object","name":"LinearScale","id":"p89590"},"y_scale":{"type":"object","name":"LinearScale","id":"p89591"},"title":{"type":"object","name":"Title","id":"p89583","attributes":{"text":"08DC002 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p89644","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p89638","attributes":{"selected":{"type":"object","name":"Selection","id":"p89639","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p89640"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JfTAQZhzA8Z9my3GzWTUNUaQxIkYi8oyxRBEiSmlK5VIxW06Xe1yW9b6aNpubjet9NjtOx3HzZL3ptCzLlmm9bjadTqfLZlnbvn99/viImODcdfntIvKDA6qNF9b+r7Z6B02NG0rY99n8j8Wo87zR2PSu4Y+WoVKBqHtvr+YL3kd5bh6qE/ey+MiP0VyPRil8+Cb/Qg3q2ng00WOr+FsnUW1dinrSM2jqGjL5BatQ3bVFXdy6kp+cg9Jgj2rh2RV8fz6akqkoTt9l8Ke2ok7wRDPQs5x/txSViz/q5hvL+KS9KPdDUL33ezrv+iGa1kiU1Adp/IMq1Lvj0LiPLuXNMVTpS1A/HIdm39epvOcKVN/aoM5oTuFHslEOTkTl3b6EP7cJTeYUlL8vJvOHClH7zkDT0Z3Ery5B9Y8P6oq+RN5/F8qlIFRrf13MW3yAplKhzL6fwHdVos6JQWM5Es9/dhhVcCLq7ieL+NwvUayWoaqxQh16aiHfk4WSZ4fKpi2OP7IBTbgDSu/5WL7gbdS2bmiOdy3gI4tRXfdCveVaDG9XhlIbgCr69nz+5n40RWEok+69wddVoI6JRnNnOJovrkY1OR51/eMoPu4kSn8qqpKnUTs2vM43ZqIk2KIaaInkS9ejcbZHaT4TwSflox50QVN26TXedSuqVg/UKT2KH9qOstsPlfuNcL5tD5q0EJSH/fP4fYdQe0SiaR8K4zOqUI3Eoj7wVyjvdQzlXDKqzHGoR+vm8uUZKL42qDqaQvisbDRjE1AqTgfz/ptQdzqhyb44h7coRFXpjjqwO4i/rFFyfFBZ9s3mq3aimROE0n03kM89iHq8QlM9GMCHVqLqmY9686NXeevDKEcWowp/4s9fq0XzVjqKrRWq441+fEQWmr7nUbZ8M4u324D6i5fQRJ335W8WoCpyRT2xy4f/ahtKjBeqOz/N5LftQGMfgFJ/y5uP24/6t1A0esCLd6xA1RiFOn74Ff6Pz1FKF6FyfuzJN51Ak5iKMmiJqqzeg5+WiablWZSUlpf5oXWod72IZvqZGXxbHqo0F9TDne783iIUDw9U7Ven88u3o3k0C+XAL2681x7UZ4PRrOx35UfLUZVHoPYZmsZf+BQlKxbV2J9T+Y+OovFLRum0QJVd58JLBppPrFECm5z5y2tQr5+A5qnTU/iqjajmOKG+0uHEb9iCMt4dVfUVR36uRnN1Jsrmnx14653/+S9opyDBmAcAAA=="},"shape":[243],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFCI6Rd0YGBgWFBgywWiGa4vZkPmA+X5QHSDLRerAyMDg4Ox8X97IP/AmTMMYPUMDD/qsdANIuvA6h4sLvgLooH6fiPTuPRRiwba+9MeiU7oP/QVG/2gSuQTyTQwHBhCHr/FoHG5h1h1JNANjgkv6RGOo/TwpNHTNbXz22D3/wG5VmaUcg9XPrPlEoGWg4IORJiLXm6iy8PEcckvmDlT2+H////7z5zRdCDFX9cXi4HUPwjcIY9CLy5QdECNJzAfbA+SuMPDKkkHJHPQaXR5WLjAaJg80F8yyDTMHejhCaNx+QNOI8JNEF88ECHPhy88CcULuvvRw2WB+0MZByqkHzANALm1VzeYBwAA"},"shape":[243],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p89645","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p89646"}}},"glyph":{"type":"object","name":"Line","id":"p89641","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p89642","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p89643","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p89589","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p89616"},{"type":"object","name":"WheelZoomTool","id":"p89617","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p89618","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p89619","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p89625","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p89624","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p89626","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p89627","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p89628","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p89629","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p89635","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p89634","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p89636"},{"type":"object","name":"SaveTool","id":"p89637"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p89611","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p89612","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p89613"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p89614"}}}],"right":[{"type":"object","name":"Legend","id":"p89647","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p89648","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p89644"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p89592","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p89593","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p89594","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p89595","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p89596","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p89597","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p89598","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p89599","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p89600","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p89601","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p89602","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p89603","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p89604","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p89605"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p89608","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p89607","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p89606","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p89609"}}}],"center":[{"type":"object","name":"Grid","id":"p89610","attributes":{"axis":{"id":"p89592"}}},{"type":"object","name":"Grid","id":"p89615","attributes":{"dimension":1,"axis":{"id":"p89611"}}}]}},{"type":"object","name":"Div","id":"p89649","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p89651","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p89650","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"b6ce5032-1fc3-4e53-a656-2ad091ff60aa","roots":{"p89652":"cc445891-726f-4c1b-b934-69634ba41d22"},"root_ids":["p89652"]}];
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