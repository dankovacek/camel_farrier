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
    
    
    const element = document.getElementById("aa4a07f6-e891-4c20-9657-3119447d5bbf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aa4a07f6-e891-4c20-9657-3119447d5bbf' but no matching script tag was found.")
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
                  const docs_json = '{"94dd5b76-ded4-4ec9-b944-85eb3629d923":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p498268","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p498269"}}},"roots":[{"type":"object","name":"Column","id":"p498341","attributes":{"children":[{"type":"object","name":"Figure","id":"p498270","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p498271"},"y_range":{"type":"object","name":"DataRange1d","id":"p498272"},"x_scale":{"type":"object","name":"LinearScale","id":"p498280"},"y_scale":{"type":"object","name":"LinearScale","id":"p498281"},"title":{"type":"object","name":"Title","id":"p498273","attributes":{"text":"08NL018 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p498334","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p498328","attributes":{"selected":{"type":"object","name":"Selection","id":"p498329","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p498330"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1217],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2aTUhUURTHn5USLsRFtIhQFy36khazEJF4z4VIiITQQkRwFiLRIlpJSOS4kGgRQwsJF5JhLezDRCb7RB9T2SBmNn5MGjkzTqPVIGpqfjvdd+adx5nre5O0aBZdNz/Puffce+65d+A/d64kaX+r9VLyGCh7lq78w/kcp9NXZEJ7Tc1PypyO4gVoj5TNyynsn3OhWbAL7d81Kum+GY3S6OUwZU5FdYiSb7ciH4cMbLQHzajsfxigVO8UTVKa+qPRaHZF9ecd1NadWT5ukPlvv8n5ZMnYeGOJqATrRnaQxcs223AiRr2lXsp6tf+jQa1e2yNDf0O2jwmZMJ7Pg+Sj5nR6/8hdrDuOVvWzqq9JXLI/z4KCgoKCgoL/L9WsxkVdZy9qOrq1qHuO6mnFZovouuYH6BZf27c4DpdOU53suPDqqx4Xp4+Zbp+itlqSF4R5jlX6NTLd/kXXlRNxHGsDPSvtOeGj/YG8Pub7M7PXUxvTvYtbI5T28JDXoBb34DDYrc3NoB+r8l07dWhsvEGDW0xvFwf7LWkyvtTQNJwoH5ifzAvtuC6yPozD8TDesJ3uUWoDsc7k+0ZcnRPUK24eq3pZ1U3rN3vlA10ffp+x2ieYj68b2rul+HwLCgoKCgoKJouavinJA50EZPqwqsAPeshxcBx0ZPRk13vQTy/ODGg6zZ7v8sC9ocvTB3opI9ctb4JO6jGo+UP3Xmp29vjgU3mDxTvdT+RtZpfnu0AHtS90WVLLIyO3S9d/nQbRj8TxtDyPX+s2/Dgf3x+5zvKs7XkMevjQqUfyEuiy+wZZ3nKw7q7RzpPvj7Tqz+eP68T6YP5YN8rM8ud0fUCMJ+sEP9p8O19ffl/4cXBe7Ldb8nmScYxzER5yG+eG7Z98vVA1I8vnrT5On2Ez0z+48tog34/095+98U7obEFBQUFBQcGk0teWphCqWY2pSuy9SKru36f794K/0rlHo+NAR4puS0rsvnpbjr17Wdd/t1+Fdx+NkWXd/wvuKwcGloDLR5fi3qk43abvU/A+Hd+pqC1zM3r/sP59YIoycCQtCN8LCvxw7624PJMGsR1J/Gx9cC/uuHVxgr5LCKxd9dL3EWCb+B3nb8L9seqpnaZ5Sw1NIbPxgeR+Gu93TdtN2Nsy50vUboyr14nlM6PXf57uA19/fCfEuEz3kXET7sMjZZKCjJ2DqEzOQaDt0hY9B2zdK3T/eeL5wPnwXODvLHxe+L4J49DGPNn8a3rcmvwb+zXvPwgmAAA="},"shape":[1217],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p498335","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p498336"}}},"glyph":{"type":"object","name":"Line","id":"p498331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p498332","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p498333","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p498279","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p498306"},{"type":"object","name":"WheelZoomTool","id":"p498307","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p498308","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p498309","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p498315","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p498314","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p498316","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p498317","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p498318","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p498319","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p498325","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p498324","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p498326"},{"type":"object","name":"SaveTool","id":"p498327"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p498301","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p498302","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p498303"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p498304"}}}],"right":[{"type":"object","name":"Legend","id":"p498337","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p498338","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p498334"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p498282","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p498283","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p498284","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p498285","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p498286","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p498287","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p498288","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p498289","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p498290","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p498291","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p498292","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p498293","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p498294","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p498295"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p498298","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p498297","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p498296","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p498299"}}}],"center":[{"type":"object","name":"Grid","id":"p498300","attributes":{"axis":{"id":"p498282"}}},{"type":"object","name":"Grid","id":"p498305","attributes":{"dimension":1,"axis":{"id":"p498301"}}}]}},{"type":"object","name":"Div","id":"p498339","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"94dd5b76-ded4-4ec9-b944-85eb3629d923","roots":{"p498341":"aa4a07f6-e891-4c20-9657-3119447d5bbf"},"root_ids":["p498341"]}];
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