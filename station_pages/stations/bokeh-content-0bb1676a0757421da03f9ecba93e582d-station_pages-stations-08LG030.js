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
    
    
    const element = document.getElementById("ae1b32ba-7d44-427b-96e7-34f213077a2e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ae1b32ba-7d44-427b-96e7-34f213077a2e' but no matching script tag was found.")
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
                  const docs_json = '{"79bc77f9-d7ff-438f-9989-9658dac22738":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p378793","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p378794"}}},"roots":[{"type":"object","name":"Column","id":"p378866","attributes":{"children":[{"type":"object","name":"Figure","id":"p378795","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p378796"},"y_range":{"type":"object","name":"DataRange1d","id":"p378797"},"x_scale":{"type":"object","name":"LinearScale","id":"p378805"},"y_scale":{"type":"object","name":"LinearScale","id":"p378806"},"title":{"type":"object","name":"Title","id":"p378798","attributes":{"text":"08LG030 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p378859","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p378853","attributes":{"selected":{"type":"object","name":"Selection","id":"p378854","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p378855"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JaSwQYBzA4f9mUyqjUppNYxrLKmMZm81epaZUlk2zaVqnMY1lWZbqLaVlaTYbS4dqioiI3MdLriJypUPTbIxlLB3Gah2/T8+HR0Rn2wzHt4gYz4a3/5XuGFQn1qGW9iE+JwHF2xlVb88gH52MxsId5e7wAO97BXW/F5rYz/38khuo7vuh9pvq44eyUOIDUS2be8Pn5aLx34vyfrGXTyhAbX0ATb4FyrayHn4kEnXiCjS2ta/5oihUO9agHm3p5pPiUezWoyrp6uKDktCMuaKcG3zF219CXeaBJvjTS34iDZX2Re0w0clXZKKEBKCamungU26jcdyNUj3fzoc+RD0diiZVUJxL2vi6CNRhVmhmK1v5tGOoNqxC3dj0gg8/ifLNAVV6Zwvvloim2QXlYF8z//M86oxNaNw/GL7tKqpD3qgXxpr4zAyULf6oOr808kduovm1EyX7ewPv+QB1Vwia47/reSlClROOeqslmp7yOj76MCoLG9R36mt5nxiUfntUsW01vGUCmntOKH491fzQWdRxG9FYDVfxeZdR+XuhfjdayZ9KR7H2Q5U/+ZwPyELzcTtK4tcK3jYXdeEeNIGL5fxoPqqkMNSrLdAUlz7jgyJRjS1HnVxTxq+NQimzQxXcUsqPx6G54Iji0PWUrziDep8rmsmBEj7lIipHD9RVI8X8/jSUaR9UqeNPeKdMNLUKJWymiJ+9hfraLjQu84V8Yx6q8FDUc38e89eLUdwiUDUvRR1RWcD/OIqSsRKVe1M+3xqLJtIBZaHjEZ95GvVml3/+Bd6yl0XIBAAA"},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqCND///+/v3T2HXugYw98/nvHHsT3770P4i84ovAAxI/f5QkW/x/8+C6Ilt9QdAMk/6BK5BqIbsiYeBWZPqCw4RLYPGT6H9DcKpFzYPMst1yA04xAc1TYLoLVy7WeBonvP1F2Ds4H2fOz7pT93///6x0TjoLdJRN1BEQn8OkeAqn/f23xATj9B6j/q8Yee6B9+0sm7wDR8hGWW0D64/l0N9l/AapfLbPK/jeQ339oK1weph6o7r9W+zb7H0D5x0tXw/XB7AGaL3/z3HaQfqA5u0D2zj/mvR1q/wYUeuXHTXB3gNwrELET2V0w94FpmL2gcPj8d4v9N6B/7U3XYTX32uINIPXzpfTXwmmYu2D6Yf6D8SHu3wC1f4U9UL39w6olcBro3/8rPy6y/wwMt6KMhSTT2MMLNTxA7oa5A51Gdw+M/wnoTo41c+xh9Atw+pwO58PEvwPDY+bMmfak0u/A4TDFfpRGDQcAZfbM9sgEAAA="},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p378860","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p378861"}}},"glyph":{"type":"object","name":"Line","id":"p378856","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p378857","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p378858","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p378804","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p378831"},{"type":"object","name":"WheelZoomTool","id":"p378832","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p378833","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p378834","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p378840","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378839","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p378841","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p378842","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p378843","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p378844","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p378850","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p378849","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p378851"},{"type":"object","name":"SaveTool","id":"p378852"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p378826","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p378827","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p378828"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p378829"}}}],"right":[{"type":"object","name":"Legend","id":"p378862","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p378863","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p378859"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p378807","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p378808","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p378809","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p378810","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p378811","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p378812","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p378813","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p378814","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p378815","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p378816","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p378817","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p378818","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p378819","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p378820"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p378823","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p378822","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p378821","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p378824"}}}],"center":[{"type":"object","name":"Grid","id":"p378825","attributes":{"axis":{"id":"p378807"}}},{"type":"object","name":"Grid","id":"p378830","attributes":{"dimension":1,"axis":{"id":"p378826"}}}]}},{"type":"object","name":"Div","id":"p378864","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"79bc77f9-d7ff-438f-9989-9658dac22738","roots":{"p378866":"ae1b32ba-7d44-427b-96e7-34f213077a2e"},"root_ids":["p378866"]}];
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