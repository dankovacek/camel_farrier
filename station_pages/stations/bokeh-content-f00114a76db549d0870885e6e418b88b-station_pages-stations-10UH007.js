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
    
    
    const element = document.getElementById("bf6e6da0-06fc-4911-9ac7-0b2d1acb6ceb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bf6e6da0-06fc-4911-9ac7-0b2d1acb6ceb' but no matching script tag was found.")
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
                  const docs_json = '{"c13f6adf-5d09-4065-95c8-4c8b7d6468ed":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p584140","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p584141"}}},"roots":[{"type":"object","name":"Column","id":"p584219","attributes":{"children":[{"type":"object","name":"Figure","id":"p584142","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p584143"},"y_range":{"type":"object","name":"DataRange1d","id":"p584144"},"x_scale":{"type":"object","name":"LinearScale","id":"p584152"},"y_scale":{"type":"object","name":"LinearScale","id":"p584153"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p584200","attributes":{"start":7.9069998168945315,"end":9.290000190734863}}]]},"title":{"type":"object","name":"Title","id":"p584145","attributes":{"text":"10UH007 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p584211","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p584205","attributes":{"selected":{"type":"object","name":"Selection","id":"p584206","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584207"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[792],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2Yf0xVZRjHjyzJiDkzpsyY55wbUa6sGBE1Ja8iIiIiwtQhy6MhIjEk+iGZzKtmziFj/ihGSFwiYyNEIjIktBsZI2HMZI6RZacY2Y85IpbgWtTtfL8HeTb/6Y/+sXv/+e59z/M87/O+55z7fM6jKP/8Rncqt46aoUs0p1e18KWWujzLLHV+mwTduNJSpSdRqGckxVLzjy3QmtfgP6MMfgGlsJ9zVMxrt72B+Z21mP/lS4x779UxTrbUnRdtqTIWZKmZPGrZuc+aiNPXDf/sVkuNg8exrnEM+Z2rQl6Jb8PuTCWuR76F9VKrMZ9TA//Md2F/HvbGPNib248g3guHse7aU8ijvRPjtHcQJ6herDNun14izsGszoP/4GbYaRznFTJuEffpht8Y1698Exp/ANdjX8L1iwVYZ++zvA9LxP3T/BdiHLiI60QjTsUj0PwHMB+nw99xD+/fTPjvm8FzCOLzEcB4fvAf/lNF3ndiXDWZeY2quC9XVedf3l9KvzV2LTRV3P+fLTVD/YW9UjuE+YKfbthP8B+/Xv2riOOpGLTUuX8Sn6u7kP83ocgrIYr5xWK91Suw79xVPNfl2Of1p7C/KQ/hOZgWDLsY7G8831vsf8CnPvWpT/+vqtXv01n3ddTvux3giU0O1jnMV86yxkrd19bYWVyqs346wAEPO1i/YD/So5NboDGd8Iu8rLOO6axjlmqXTsFu6BDsAncjTsVW2M1JR54t8bCvj0McxzrYF+VAA9YgTuzjsG+erbN+w757BHUuYlhjXSU/DUCLe6FNHdD9n0KfbiF/nCS/NKBO9oO7tMYKwUXOojrE93sPfldbRVyj5QvW5c9RX3d8Qq44TS5oht3U46zniGu0NpFHzmHcfFmbeC7eOo/9nlGx/xI/nsc1rH9y2K7jOEf/STp5hbzaJ/J0550mN50gL1UJPnTHgNuMkt2C51zZO+DXQV6bmw+/sOdwvTSXcbcyr+dxvXub8LO5UfED53l+zyKPvkxeyeH5ZGD9kDRy3Bpy92qhNr+7opeRT9NFXp6EbSIfJfUZ7jeVPJomOWpolX3+gjO9EXgfn+DzFiH402h9TPCpzaPOYuTtLl+MvC89yf0/yPN4lM/rfeR8B/cRQv+ZzGs6vxemkvMCmecdkmNnT5bjjms3+NX6TrhyU451h3yl8nmB/cB5zA9dkOP2TnBqV5fK5wrz5WdhV9Km8vlX+Z2h8n2TGvGByvdPqD2vzG1U+V4KNcPeF3auBR+KsSfhI+SR8bFYz45vx/G+xyq/d3B91gmV7yf8ptSJsZ2PHU/b44H/65+pPo72qU996tP/Tr18QQ5N0dnfEFzkzp2us64KPjQyf2D9vIC6uusiueNHbWJfzhkJrjQGVrJvV6jzf93iYHdZGXg48XvM9xSTx8i1XQeYz3qdnEBe1sipUTp5RtiZSYnQsHCby8nDt8PucDA0ez78B+/X2aciZ18HFzT8Jrk3oJd9tHbBrzaXeus0OaFN8KytNq9qDY3s89WIvqLdB7T7oO7cQ7ieVIxx8Kvk30LJjbXkxSDyYn4WuWcj+3br2HdMEX1aZ9NSwVHu4MVyPm4D9nXlFXLQXvYNd8Huu+1Yt+3Fm3Ko0b+J/dYN7H+uFzxp86bNjca0tSI/u9+spaNf6cpKRryu5fJ63wq5r6h43o9FvD8LRP/OyJgn+FKpDSePz+f5RrPfmiDytLlZGUsV+zMLtrBPnCn421ZXzmbB4TbXu7IOsr9dLfq4St1R2Rc+Vo489rgEf49/J/C+231j73fpv+9D/g1guJ6swBgAAA=="},"shape":[792],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584212","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584213"}}},"glyph":{"type":"object","name":"Line","id":"p584208","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584209","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p584210","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p584151","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p584178"},{"type":"object","name":"WheelZoomTool","id":"p584179","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p584180","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p584181","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p584187","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p584186","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p584188","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p584189","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p584190","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p584191","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p584197","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p584196","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p584198"},{"type":"object","name":"SaveTool","id":"p584199"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p584173","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p584174","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p584175"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p584176"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p584201","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p584202","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p584203"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p584204"}}},{"type":"object","name":"Legend","id":"p584214","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p584215","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p584211"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p584154","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p584155","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p584156","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p584157","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p584158","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p584159","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p584160","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p584161","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p584162","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p584163","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p584164","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p584165","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p584166","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p584167"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p584170","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p584169","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p584168","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p584171"}}}],"center":[{"type":"object","name":"Grid","id":"p584172","attributes":{"axis":{"id":"p584154"}}},{"type":"object","name":"Grid","id":"p584177","attributes":{"dimension":1,"axis":{"id":"p584173"}}}]}},{"type":"object","name":"Div","id":"p584216","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p584218","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p584217","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"c13f6adf-5d09-4065-95c8-4c8b7d6468ed","roots":{"p584219":"bf6e6da0-06fc-4911-9ac7-0b2d1acb6ceb"},"root_ids":["p584219"]}];
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