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
    
    
    const element = document.getElementById("ee4b8e32-b261-4813-936d-fde2b0af1a6e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ee4b8e32-b261-4813-936d-fde2b0af1a6e' but no matching script tag was found.")
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
                  const docs_json = '{"ded21a1b-8029-4662-9460-22904b8d646e":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p472274","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p472275"}}},"roots":[{"type":"object","name":"Column","id":"p472348","attributes":{"children":[{"type":"object","name":"Figure","id":"p472276","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p472277"},"y_range":{"type":"object","name":"DataRange1d","id":"p472278"},"x_scale":{"type":"object","name":"LinearScale","id":"p472286"},"y_scale":{"type":"object","name":"LinearScale","id":"p472287"},"title":{"type":"object","name":"Title","id":"p472279","attributes":{"text":"08NJ004 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p472340","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p472334","attributes":{"selected":{"type":"object","name":"Selection","id":"p472335","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p472336"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1279],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2aPUwUQRTHlxOJEkP4VDjxPA84uRAjckYrc6uJobGhp7iK2ppGm4slNYUJhkILQ2ND58X6ChtDY3HESAwkQPCLEBHnZt5/eftu924PTjhgr/lldmbee/N2ZvY/A5ZV+m0/s04+87Hc74xifHImYrOyfG63Ll0sMTvzoafE4nR3nJdR70e0m3v6oFdzdjbK7djLOwl6Pmib+JK8jHq0B1V8N4LQr39x/uk17S812eVF3b9J9U+nUxTXPXtvb+99oXCbxyntYpwYd1D7dvrdqGH6ruMvgF/kE/5kvjHOMoo86nx7xKOe3+R5lPmV+UQ8fv6dehF3WZ4sq4PPI8zHo6JcDyed9vL0t0bmacv3WWWjz7PTyudrE0VOta9+ChnypDP/ffez1/yuxrmN1yu6/6vHq0Go+m0Sf9C6+qPrfw4bXbAwfp5TP4+ocm5tNxOUZlzttvGjaS3NX+ZlpZu6XLqI6pW/Phdjuauko65zKv3ST7xC7bqDEH5BpcM6Rbsotw//jFEeLxtX3Ku9bOfnF+NgdI1P9gNl/pw8Cv+ww3RopxcRj4c9xNlBOrfdq192Mdbr9R5hB/793gvsaT/mPNBG/VtsNk/nxpcvULmNxyXjl/5g35mHsBPLneP2K/IA66F0HvWiOldsBWHQ9e3JCnEE2C+KR8zNWtrnX258OUx+as1vmf//nKdq9mvd96vNM3wXwMPOw2OYPyHrOO/qRtI3IX1Y73yHDMTs14/rQaj0yS/Sy9t0b7x1HEQcxYnFHdLtzTajvtcz95tNrns+qlfxt9L9q9ZL2ampHqqne+TpXtJHbby9tK90099MBUr/oPLXQvepl1zxEFEvCZ2Gfuoc0M3HAcq4QfRTv04+buc8QPagm4vzmwPUfqiMZnxD1G/EsO++sZu0qfyIU/V4SP3HqP8t0rcpbkf99P13vvBk1GGkZHdlzKEZ7x3eX417gJd1P/gx9pNOO+/xyHhk+4SZB2/inKgHZX3Z+Ymey/zL94j3hPfpnDfoOd4XyqDffJAM3E7MI795ivnpe89O60f2q3g/j/XE9p1qlOtM2nGt46DruQb/ktiv5D520H20Yb4foW4JGTJkyFNN623/6qGpvqPWyIt10u24T3HpePV9c+lmVQ+93sIJneGhS9Auwgk7Uj9DT0Hva11m9F/C0b+mPMj18L7OM+cFqfPiC+NRl74S+hu6TepVR1+SHakP4UfrXqa384VCukwXM/2s9TT0rVsPjzj+QVM/XFZfTZ9Lf4z75wNmz+0nKfR4wosYv5WajPH/Ryn7OwPpYCff+++92ZkX7vOZa96p97qdaUA666YK67JeGc/UfvcPPdYcwvgnAAA="},"shape":[1279],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p472341","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p472342"}}},"glyph":{"type":"object","name":"Line","id":"p472337","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p472338","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p472339","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p472285","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p472312"},{"type":"object","name":"WheelZoomTool","id":"p472313","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p472314","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p472315","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p472321","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p472320","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p472322","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p472323","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p472324","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p472325","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p472331","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p472330","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p472332"},{"type":"object","name":"SaveTool","id":"p472333"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p472307","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p472308","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p472309"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p472310"}}}],"right":[{"type":"object","name":"Legend","id":"p472343","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p472344","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p472340"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p472288","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p472289","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p472290","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p472291","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p472292","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p472293","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p472294","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p472295","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p472296","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p472297","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p472298","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p472299","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p472300","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p472301"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p472304","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p472303","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p472302","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p472305"}}}],"center":[{"type":"object","name":"Grid","id":"p472306","attributes":{"axis":{"id":"p472288"}}},{"type":"object","name":"Grid","id":"p472311","attributes":{"dimension":1,"axis":{"id":"p472307"}}}]}},{"type":"object","name":"Div","id":"p472345","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p472347","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p472346","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"ded21a1b-8029-4662-9460-22904b8d646e","roots":{"p472348":"ee4b8e32-b261-4813-936d-fde2b0af1a6e"},"root_ids":["p472348"]}];
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