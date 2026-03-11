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
    
    
    const element = document.getElementById("ab9d9cf3-28ed-4c4f-a5a7-d82272f559ec");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ab9d9cf3-28ed-4c4f-a5a7-d82272f559ec' but no matching script tag was found.")
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
                  const docs_json = '{"efbc0b39-bd15-4cd8-8353-616c8c6a09a1":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p313475","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p313476"}}},"roots":[{"type":"object","name":"Column","id":"p313576","attributes":{"children":[{"type":"object","name":"Figure","id":"p313477","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p313478"},"y_range":{"type":"object","name":"DataRange1d","id":"p313479"},"x_scale":{"type":"object","name":"LinearScale","id":"p313487"},"y_scale":{"type":"object","name":"LinearScale","id":"p313488"},"title":{"type":"object","name":"Title","id":"p313480","attributes":{"text":"08HB095 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p313541","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p313535","attributes":{"selected":{"type":"object","name":"Selection","id":"p313536","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p313537"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYPBW9MlyYmBoEDsGphkeZfmC+Wv5/cD8yi1gusEl0h/MF/gHphtuLwoA85e7B4L5RW/ANIPdxCAwn9MsGMy/egtMNyyoDwHzc1RCwXzzk2CagTkvDMw/JxQO5s/aDqYbUmMiwHxDxkgw/89SMM1wwisKzJ/8HkwzxE+JBvO1LGPA/G93wXTDwaZYML9XPS7LCQBP/giK6AAAAA=="},"shape":[29],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p313542","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p313543"}}},"glyph":{"type":"object","name":"VArea","id":"p313538","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p313539","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p313540","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p313552","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p313546","attributes":{"selected":{"type":"object","name":"Selection","id":"p313547","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p313548"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYNi9KyHLiYGhoS0+EUQzBLEkgfmyK8E0w0vfZDB/yycwzdAwPQXM97ZJBfPFH4LphketaVlOABx/cRFQAAAA"},"shape":[10],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p313553","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p313554"}}},"glyph":{"type":"object","name":"VArea","id":"p313549","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p313550","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p313551","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p313561","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p313555","attributes":{"selected":{"type":"object","name":"Selection","id":"p313556","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p313557"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[456],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[456],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p313562","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p313563"}}},"glyph":{"type":"object","name":"Line","id":"p313558","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p313559","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p313560","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p313571","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p313565","attributes":{"selected":{"type":"object","name":"Selection","id":"p313566","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p313567"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[456],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[456],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p313572","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p313573"}}},"glyph":{"type":"object","name":"Line","id":"p313568","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p313569","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p313570","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p313486","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p313513"},{"type":"object","name":"WheelZoomTool","id":"p313514","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p313515","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p313516","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p313522","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p313521","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p313523","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p313524","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p313525","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p313526","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p313532","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p313531","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p313533"},{"type":"object","name":"SaveTool","id":"p313534"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p313508","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p313509","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p313510"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p313511"}}}],"right":[{"type":"object","name":"Legend","id":"p313544","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p313545","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p313541"},{"id":"p313552"}]}},{"type":"object","name":"LegendItem","id":"p313564","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p313561"},{"id":"p313571"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p313489","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p313490","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p313491","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p313492","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p313493","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p313494","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p313495","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p313496","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p313497","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p313498","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p313499","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p313500","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p313501","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p313502"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p313505","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p313504","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p313503","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p313506"}}}],"center":[{"type":"object","name":"Grid","id":"p313507","attributes":{"axis":{"id":"p313489"}}},{"type":"object","name":"Grid","id":"p313512","attributes":{"dimension":1,"axis":{"id":"p313508"}}}]}},{"type":"object","name":"Div","id":"p313574","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"efbc0b39-bd15-4cd8-8353-616c8c6a09a1","roots":{"p313576":"ab9d9cf3-28ed-4c4f-a5a7-d82272f559ec"},"root_ids":["p313576"]}];
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