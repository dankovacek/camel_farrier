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
    
    
    const element = document.getElementById("f415db19-7472-400e-bc61-38cc79d7d03c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f415db19-7472-400e-bc61-38cc79d7d03c' but no matching script tag was found.")
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
                  const docs_json = '{"f61f677b-44e6-4566-95a7-186dc891117b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p215024","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p215025"}}},"roots":[{"type":"object","name":"Column","id":"p215125","attributes":{"children":[{"type":"object","name":"Figure","id":"p215026","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p215027"},"y_range":{"type":"object","name":"DataRange1d","id":"p215028"},"x_scale":{"type":"object","name":"LinearScale","id":"p215036"},"y_scale":{"type":"object","name":"LinearScale","id":"p215037"},"title":{"type":"object","name":"Title","id":"p215029","attributes":{"text":"08EE022 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p215090","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p215084","attributes":{"selected":{"type":"object","name":"Selection","id":"p215085","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p215086"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGiKf+/vBACEx+dwCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p215091","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p215092"}}},"glyph":{"type":"object","name":"VArea","id":"p215087","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p215088","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p215089","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p215101","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p215095","attributes":{"selected":{"type":"object","name":"Selection","id":"p215096","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p215097"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYKj8wxjgBAAX4/t+CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p215102","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p215103"}}},"glyph":{"type":"object","name":"VArea","id":"p215098","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p215099","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p215100","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p215110","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p215104","attributes":{"selected":{"type":"object","name":"Selection","id":"p215105","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p215106"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJj1nyvACQAXHm8PCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p215111","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p215112"}}},"glyph":{"type":"object","name":"VArea","id":"p215107","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p215108","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p215109","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p215119","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p215113","attributes":{"selected":{"type":"object","name":"Selection","id":"p215114","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p215115"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[518],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2XS0iUURTHv/HtVCgmFVIqrqpNi8FFhNyRFq5EhBYiooPIICEhMrgYAseFGVgNMj2YRWiZVGRCEGYmOYm9TESwmszKmSYfNfnChszUr3vPd8/1ziflLhDGzY9z7zn/c+69MvMfRWF/y3XK9qUndPAH0bjK6CvsjjFTOvpDRsbW6hygcqgkEeI8fwKj2W8HWqzWOMbMzjyDOYqyIbgGOm3VQM/QkML1QNdnTzXyeqClOx10aV/Qo3OAnuJtA1KdXVCf2pkkx3odmNdAY5Nph1lV1TJnf7ys2+p2x7J9R7BQO1+OMZrrRfO+MeIcWj+V34vCdRSxr+lAbHH2h4hEqrdI6L5yIjDL4szGPV9B5+r8NKODZE8xmicK/LBfdNQHdVnjfl7/i7H1VMq8vO5JbxhnVNZfvyP0fHU5Ri9ZV9UJe+owiydGsl7BHL22YFh+/aVRlkdKe15CfsH552SN1udankKf/cUDoOcZfAL1gfZHZFVVM8aGH4h1WldWcawP2DzbK/IYk4seMj31cGMX+a2qfTWV92B9cqR/S33MRy5T/UD7Hdanz+a6RUI0L66+XZDWEb/9BstTby9eJys0r/ZxC/mpqi1ut5tM0fpem0vEM3DeK3y+y2J/DnQukkno2yz4luYXdl8gb+h+Qsc5sgBznCU+qD8jYsxDfSTqYD99fzw3ngPnxxjzcR3vYwXe++amOrwHzJPexbO0dl/EWC/lA/GeUVdPvHd9HXIJzntNxPiO9LwtaUfubpobqX9vfZ7+ffV9/sa/zS/pw/0r2/9zO8III4wwwv9I5mNc+wbAB1mtz8BXNVVpfopkD4OvS+gYgu9fm2tE+DS2XtozBixP/g6+r8SpcB+5k/vs3dzPZnL/mc59Z5pZyz8A+ybTXr6fAusNwSTZBwsavWE+mPrdWO63o7mfN3D/rsi+GP0y9bnxwjdr61GyT8YY9ahvDfPbtB/WJ/L9WP77IYrPbeDzGbif31g3wHwq/56G3yXU3y8TbS7wxzQP/DbVX4R7baoCv0zPscD95xzkFVcE+XvMcF88HcYXteDHffnlX4h2bwF5HYk6rcebQMfctTQJ+zWVk3K9Mpr/Wfb19H4/sd8D1JePs/+HjBLne6K9n5fPPybPT+f+JvfVx9hH9D1Nwn5HIB2eQb/c35Fr+Qjz1Z38IGJpHljfinJ+5PNgg5L//mfeH29vYVswEAAA"},"shape":[518],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p215120","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p215121"}}},"glyph":{"type":"object","name":"Line","id":"p215116","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p215117","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p215118","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p215035","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p215062"},{"type":"object","name":"WheelZoomTool","id":"p215063","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p215064","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p215065","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p215071","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p215070","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p215072","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p215073","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p215074","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p215075","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p215081","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p215080","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p215082"},{"type":"object","name":"SaveTool","id":"p215083"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p215057","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p215058","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p215059"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p215060"}}}],"right":[{"type":"object","name":"Legend","id":"p215093","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p215094","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p215090"},{"id":"p215101"},{"id":"p215110"}]}},{"type":"object","name":"LegendItem","id":"p215122","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p215119"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p215038","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p215039","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p215040","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p215041","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p215042","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p215043","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p215044","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p215045","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p215046","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p215047","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p215048","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p215049","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p215050","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p215051"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p215054","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p215053","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p215052","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p215055"}}}],"center":[{"type":"object","name":"Grid","id":"p215056","attributes":{"axis":{"id":"p215038"}}},{"type":"object","name":"Grid","id":"p215061","attributes":{"dimension":1,"axis":{"id":"p215057"}}}]}},{"type":"object","name":"Div","id":"p215123","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"f61f677b-44e6-4566-95a7-186dc891117b","roots":{"p215125":"f415db19-7472-400e-bc61-38cc79d7d03c"},"root_ids":["p215125"]}];
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