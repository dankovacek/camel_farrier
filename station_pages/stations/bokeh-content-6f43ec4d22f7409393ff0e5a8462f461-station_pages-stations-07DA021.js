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
    
    
    const element = document.getElementById("a84fe07e-38f7-4355-9088-0915c18ded62");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a84fe07e-38f7-4355-9088-0915c18ded62' but no matching script tag was found.")
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
                  const docs_json = '{"7e4131a6-a877-4648-b5c7-8ea74b4be819":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p48019","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p48020"}}},"roots":[{"type":"object","name":"Column","id":"p48097","attributes":{"children":[{"type":"object","name":"Figure","id":"p48021","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p48022"},"y_range":{"type":"object","name":"DataRange1d","id":"p48023"},"x_scale":{"type":"object","name":"LinearScale","id":"p48031"},"y_scale":{"type":"object","name":"LogScale","id":"p48032"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p48079","attributes":{"start":28.500999679565428,"end":28.833000411987303}}]]},"title":{"type":"object","name":"Title","id":"p48024","attributes":{"text":"07DA021 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p48090","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p48084","attributes":{"selected":{"type":"object","name":"Selection","id":"p48085","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p48086"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[944],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+1ZzUocQRCeeJTgE8hmXiGItwUHQg6+gQQP8wAieQNHJecERc2PSYb8megm/iRoFJG5JScRPOQ6ECRPINFLNr3l1Nj1Tc3OBhY27Mxeiqqu+bqrq3rmq17Haf0uZkj0p3QnntQ9JT7/1zNhL9KdxqrwD+8/l7j2+J9mc2z0hTpvfGnsOF6kK+t358MsvsG5de+NsEe1t1k/BS+YWqt7NxzH/6n7R+fvZfx3Nkj3Dz60xQ8Tv0x9zazrz51+VO3ReEPa0Q91u55NXJG7peL6Z7o9Xe/6tox7ekfFYf8wb7xbOD0+p/5Qh/mB/GKdoI71RfVo1Snq8dq763GsW9QNDp4DoSvnJlh6Lecv0DP1neSp7bzKunDePNzK3p/fqyqvVV77mY9V9V2C+jbf3/DuLvFJkibpnHdvcE/o8bGlDxj/4QMx7k7sy+/w4tf8580kAYz/6/P+4ReBn9Yr8DfBG5U4RVwcf9Pw89vfYf0/9Pl6zPO8kVOxrujcWrcSRzD1re5Z9iJ/3ld3PpL7cXnUdj/QH/Od5qtxKHCw7or0tF5HPgscyrvdT0DfkelTepzH+OSVWD/zS7Z7N+V4Gndi5z4zOHopcLD/xHHsl6nvbZ1PwKH56Nw/lfhJ3479e7D4mPzi4xUhCYfO4bLAcWaXrnXK2yMx7p9J3Z18KJ/vcf44H5UswXfTJLnKc3fzHNUelOI8xydzpYiz7OeDv6Md7YNyr4V8gHHwnorv1/DejXVxX0e8T94P8/0e++E9MPIkca9o8St3clPyreR7THaz+GDlkyod5mXt7oXpdau/byh+6x6R94P3CXkU4iBvQt6Tm0f4nwFxUfcGr3gQ2S3+Q3bWUbaitnmRUZFX8Tx5+LiOcHqB8kB8yuJZzK+QZ/H8zOMYj/ker4d0mx8m+5P5/yUnj7jOTvW0vuEeO61brquccfwfgPoUq7/l/gOl6GeUfrjT9XfbL/p91QexLMJnP94HlPg899MseZ/T/eZ9TiTnB99PiPtf638B0yhKS4AdAAA="},"shape":[944],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p48091","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p48092"}}},"glyph":{"type":"object","name":"Line","id":"p48087","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p48088","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p48089","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p48030","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p48057"},{"type":"object","name":"WheelZoomTool","id":"p48058","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p48059","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p48060","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p48066","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p48065","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p48067","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p48068","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p48069","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p48070","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p48076","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p48075","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p48077"},{"type":"object","name":"SaveTool","id":"p48078"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LogAxis","id":"p48052","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p48053","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p48054"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p48055"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p48080","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p48081","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p48082"},"axis_label":"Water Level (m)","major_label_policy":{"type":"object","name":"AllLabels","id":"p48083"}}},{"type":"object","name":"Legend","id":"p48093","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p48094","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p48090"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p48033","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p48034","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p48035","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p48036","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p48037","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p48038","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p48039","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p48040","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p48041","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p48042","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p48043","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p48044","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p48045","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p48046"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p48049","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p48048","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p48047","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p48050"}}}],"center":[{"type":"object","name":"Grid","id":"p48051","attributes":{"axis":{"id":"p48033"}}},{"type":"object","name":"Grid","id":"p48056","attributes":{"dimension":1,"axis":{"id":"p48052"}}}]}},{"type":"object","name":"Div","id":"p48095","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"7e4131a6-a877-4648-b5c7-8ea74b4be819","roots":{"p48097":"a84fe07e-38f7-4355-9088-0915c18ded62"},"root_ids":["p48097"]}];
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