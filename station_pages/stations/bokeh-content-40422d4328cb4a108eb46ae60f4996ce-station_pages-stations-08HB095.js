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
    
    
    const element = document.getElementById("d50d57c5-35ec-44ef-834c-deb4b045bf1d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd50d57c5-35ec-44ef-834c-deb4b045bf1d' but no matching script tag was found.")
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
                  const docs_json = '{"2944f1d7-b180-45d3-875a-42bab8ca4651":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p222627","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p222628"}}},"roots":[{"type":"object","name":"Column","id":"p222728","attributes":{"children":[{"type":"object","name":"Figure","id":"p222629","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p222630"},"y_range":{"type":"object","name":"DataRange1d","id":"p222631"},"x_scale":{"type":"object","name":"LinearScale","id":"p222639"},"y_scale":{"type":"object","name":"LinearScale","id":"p222640"},"title":{"type":"object","name":"Title","id":"p222632","attributes":{"text":"08HB095 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p222693","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p222687","attributes":{"selected":{"type":"object","name":"Selection","id":"p222688","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p222689"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYPBW9MlyYmBoEDsGphkeZfmC+Wv5/cD8yi1gusEl0h/MF/gHphtuLwoA85e7B4L5RW/ANIPdxCAwn9MsGMy/egtMNyyoDwHzc1RCwXzzk2CagTkvDMw/JxQO5s/aDqYbUmMiwHxDxkgw/89SMM1wwisKzJ/8HkwzxE+JBvO1LGPA/G93wXTDwaZYML9XPS7LCQBP/giK6AAAAA=="},"shape":[29],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p222694","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p222695"}}},"glyph":{"type":"object","name":"VArea","id":"p222690","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p222691","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p222692","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p222704","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p222698","attributes":{"selected":{"type":"object","name":"Selection","id":"p222699","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p222700"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYNi9KyHLiYGhoS0+EUQzBLEkgfmyK8E0w0vfZDB/yycwzdAwPQXM97ZJBfPFH4LphketaVlOABx/cRFQAAAA"},"shape":[10],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p222705","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p222706"}}},"glyph":{"type":"object","name":"VArea","id":"p222701","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p222702","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p222703","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":6.283199844360352},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p222713","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p222707","attributes":{"selected":{"type":"object","name":"Selection","id":"p222708","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p222709"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[456],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[456],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p222714","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p222715"}}},"glyph":{"type":"object","name":"Line","id":"p222710","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p222711","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p222712","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p222723","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p222717","attributes":{"selected":{"type":"object","name":"Selection","id":"p222718","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p222719"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[456],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[456],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p222724","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p222725"}}},"glyph":{"type":"object","name":"Line","id":"p222720","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p222721","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p222722","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p222638","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p222665"},{"type":"object","name":"WheelZoomTool","id":"p222666","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p222667","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p222668","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p222674","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p222673","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p222675","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p222676","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p222677","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p222678","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p222684","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p222683","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p222685"},{"type":"object","name":"SaveTool","id":"p222686"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p222660","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p222661","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p222662"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p222663"}}}],"right":[{"type":"object","name":"Legend","id":"p222696","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p222697","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p222693"},{"id":"p222704"}]}},{"type":"object","name":"LegendItem","id":"p222716","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p222713"},{"id":"p222723"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p222641","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p222642","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p222643","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p222644","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p222645","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p222646","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p222647","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p222648","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p222649","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p222650","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p222651","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p222652","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p222653","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p222654"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p222657","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p222656","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p222655","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p222658"}}}],"center":[{"type":"object","name":"Grid","id":"p222659","attributes":{"axis":{"id":"p222641"}}},{"type":"object","name":"Grid","id":"p222664","attributes":{"dimension":1,"axis":{"id":"p222660"}}}]}},{"type":"object","name":"Div","id":"p222726","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"2944f1d7-b180-45d3-875a-42bab8ca4651","roots":{"p222728":"d50d57c5-35ec-44ef-834c-deb4b045bf1d"},"root_ids":["p222728"]}];
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