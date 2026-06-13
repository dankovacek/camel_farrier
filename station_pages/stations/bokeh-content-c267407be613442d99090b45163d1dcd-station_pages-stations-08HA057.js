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
    
    
    const element = document.getElementById("b1139fb9-8d83-4c90-82d6-e9a4304d5f1f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b1139fb9-8d83-4c90-82d6-e9a4304d5f1f' but no matching script tag was found.")
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
                  const docs_json = '{"77ad3256-23f5-4cd5-a094-b8c2220e388d":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p196171","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p196172"}}},"roots":[{"type":"object","name":"Column","id":"p196249","attributes":{"children":[{"type":"object","name":"Figure","id":"p196173","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p196174"},"y_range":{"type":"object","name":"DataRange1d","id":"p196175"},"x_scale":{"type":"object","name":"LinearScale","id":"p196183"},"y_scale":{"type":"object","name":"LinearScale","id":"p196184"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p196231","attributes":{"start":2.0369999313354494,"end":3.009999980926514}}]]},"title":{"type":"object","name":"Title","id":"p196176","attributes":{"text":"08HA057 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p196242","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p196236","attributes":{"selected":{"type":"object","name":"Selection","id":"p196237","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p196238"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+2aMUgbYRTHP6+aFicHpyJyg4MZxMFZOHHI4OTWIdCbgmOQTi6eQyYHh+LgIBwEt+IgDo6HQ+kgHVwyFS44ZpAOod3SfyInimh4v0pKPprlIPf97n3f/7373nsf51z/93t3cBntNa7VggjYzXdmEZceHU0ge8064sLTCuLii3nESUrK/RP/W+MtrB444j+rnXEbn6xOe+337Opq8r/fFZUP9+der/fx4PKtz7pk3cV3Pq9P7y3yX3LZLZl1mXAuWllh9uA8lW+nzPPsR3m5ijjlh4Eu6fq+SR/VIabxMjHIl2l9FXFCEUf1zJt1pCfyw12cIXt4n281UX5QvCBOfkdc2Oi8Ie9DMnuKOPkdcdpfAjJP12oijvYBaaWN7CnOEBe1dxCn930s6ms6T/nB6/qT6uIdV66i+mHcddD+xNetOn33cJ3zEm9U+uULJa/r7ed0VH595J9kLUb+0rkN4mgfkH//herIQodw+YeJp/NUH4d0oZzqHmQvnvmAONUTJh0L/VEfJ1jxiuxlnz4jTueYjGt0UB+A+xXnkL3s+BbV84pPxMU3J6gulx8QF51/C6J+FjHWofnmBeLUVyFOfRXitC7K+VuX/8V5jzVOho2nffaw52bzDbRfD3vuuN/3XZf064bXfs+2t7xen86J0PpoH6a8iezRejd9vzxae5U2qs+i6Rbi5D87p3yUdDZHx2kT13cCdnvi6Dk7zRuKM1S3ap6s/qzV7Jz8F54do/pTfTHi3N5hEElUq660/pQdZK+Yn/o50zmo8rRp/L0O5aqdk//clzk7J0x9wNPvLvrPWzp7+r/+LuYZlvZevH+/nmf6Ep3DmHidz5vGF/Z1fo048UhPxQmyR7/zoNww/7z2fZ2j2PUMtF//vLZzmvyjfeIPy1SCEggnAAA="},"shape":[1249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p196243","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p196244"}}},"glyph":{"type":"object","name":"Line","id":"p196239","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p196240","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p196241","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p196182","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p196209"},{"type":"object","name":"WheelZoomTool","id":"p196210","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p196211","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p196212","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p196218","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p196217","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p196219","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p196220","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p196221","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p196222","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p196228","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p196227","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p196229"},{"type":"object","name":"SaveTool","id":"p196230"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p196204","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p196205","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p196206"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p196207"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p196232","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p196233","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p196234"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p196235"}}},{"type":"object","name":"Legend","id":"p196245","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p196246","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p196242"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p196185","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p196186","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p196187","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p196188","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p196189","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p196190","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p196191","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p196192","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p196193","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p196194","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p196195","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p196196","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p196197","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p196198"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p196201","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p196200","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p196199","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p196202"}}}],"center":[{"type":"object","name":"Grid","id":"p196203","attributes":{"axis":{"id":"p196185"}}},{"type":"object","name":"Grid","id":"p196208","attributes":{"dimension":1,"axis":{"id":"p196204"}}}]}},{"type":"object","name":"Div","id":"p196247","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"77ad3256-23f5-4cd5-a094-b8c2220e388d","roots":{"p196249":"b1139fb9-8d83-4c90-82d6-e9a4304d5f1f"},"root_ids":["p196249"]}];
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