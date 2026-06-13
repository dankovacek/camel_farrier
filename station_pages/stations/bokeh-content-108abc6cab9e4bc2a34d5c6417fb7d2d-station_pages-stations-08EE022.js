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
    
    
    const element = document.getElementById("de542de5-efd8-4f4a-8672-16d46d4fff16");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'de542de5-efd8-4f4a-8672-16d46d4fff16' but no matching script tag was found.")
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
                  const docs_json = '{"1b680d80-0295-4603-97fa-e64428e3120a":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p148745","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p148746"}}},"roots":[{"type":"object","name":"Column","id":"p148846","attributes":{"children":[{"type":"object","name":"Figure","id":"p148747","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p148748"},"y_range":{"type":"object","name":"DataRange1d","id":"p148749"},"x_scale":{"type":"object","name":"LinearScale","id":"p148757"},"y_scale":{"type":"object","name":"LinearScale","id":"p148758"},"title":{"type":"object","name":"Title","id":"p148750","attributes":{"text":"08EE022 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p148811","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p148805","attributes":{"selected":{"type":"object","name":"Selection","id":"p148806","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p148807"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGiKf+/vBACEx+dwCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p148812","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p148813"}}},"glyph":{"type":"object","name":"VArea","id":"p148808","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p148809","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p148810","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p148822","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p148816","attributes":{"selected":{"type":"object","name":"Selection","id":"p148817","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p148818"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYKj8wxjgBAAX4/t+CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p148823","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p148824"}}},"glyph":{"type":"object","name":"VArea","id":"p148819","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p148820","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p148821","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p148831","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p148825","attributes":{"selected":{"type":"object","name":"Selection","id":"p148826","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p148827"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYJj1nyvACQAXHm8PCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p148832","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p148833"}}},"glyph":{"type":"object","name":"VArea","id":"p148828","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p148829","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p148830","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.010779999941587393},"y2":{"type":"value","value":8.404799766540528},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p148840","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p148834","attributes":{"selected":{"type":"object","name":"Selection","id":"p148835","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p148836"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[518],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+1XTUhUURR+WplNRWJSEaVDq2zTYnARMdyRFq5EhBYRokOESERIDC4kmGlhBlYiU8YsQsukohKCMCvJSezPRIR+zKwcm7SfqVRMslJf53zzznN8MLQLhJnNx7nn3O9899zn83uaxr9pL2BxYnBq6w9F4glnGEOFbUtdhL7OKRtjY7kTqGUXrUCcN5zK6BquBLpLS1MY7S15Sa5kwqrILHiayoHBnh6N88QH3lBlBvhoP9Ddlgle6gs+0gE+rb8JSDyrGX0ZLWtiYysP9CYRr8Ox0qXreklt53LUG7yNgcAyzvsihdHzOW1LDD4g9cU6zkFI/XRjLtBPPEDkozyI3bWdU1wnSHonFOW13eFvvG6vXvcZPOfGPjL6VM4oo2uoYBj5PTtCjKEtg4hp/y/GxkPpY7HrwcyqQY61ueevFJ3P67T1qzldH6rM6OV4qG/LU8672z0RRrP+6JlnXKeK7zxBfcHJR2qW9ue6H6DPpr1d4At238f+cPNdNaPrWQO9t8x12leyf2cH7y+p+9Zu1nF92p7bzKdvq25Vf3S943DZDeRH+jr/yS/1gtPEH26+yn06PP7Laop0pBxtNpF0qeHKi4rq9CsTF9Rvqqu416B+6npDIBBQo7S/3eM3408471lDX72Z/w6e02oEeutMfEn1hW2n1AvKp147ocah47gK4XzHzFjqhF9Q+KLzqFfW/jJXOYfol1jqZV3mQTHd9yW+F5w/Jo85SJ3cH9//5OxN855kv8xNUOYsvFaU+Vv3STyJ+Z0370Pukc7fsHH7dda5QLfwW+/bWme9X2ufeHri6Y/hx3NN86Hfon5vJ/Qn7s+beI4Tf8eJ99j/e4+zT/Jv6IIPKi19CF9VczDqp1ROL/9fcaVe62EMevx98E/s03i9+M4AcF/aV0Z7Ua1m+MhVLorJZ69lJF9sZyT/mclIvnMjI9VvRt7hWG/k07FeFYEvFj9toq1/gQ/2OW3LuI78Nvwu+Xn4XPLvoiPqzw2/TD4X/hm+mZB0JDOKT5ZY+Mi3LvDb1E/2R/19Uzl46PsBPKQ7yfDp0EF+fn6d/XN2Efw3/fBdQv5+GnNryYM/pv3w3aRvAnOtOQi/TP5+nJH853fU7d0f9cMe/yeOyRfDh5v4uAJ+PJS/7wN4bP1h5I11QeFp3FUDHlfr5AjqDpcBZb/2LP89x+Lrab7v+HuAfPkgPw9ZRbWvOU/3i+eC9EefC0M/6f4S298aSx+z7xG14DtC+vqC3ViX/r5c91uONe+BN6wHcYwerEs+HsbWJ9478++dGP9No4v/PvoLb29hWzAQAAA="},"shape":[518],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p148841","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p148842"}}},"glyph":{"type":"object","name":"Line","id":"p148837","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p148838","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p148839","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p148756","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p148783"},{"type":"object","name":"WheelZoomTool","id":"p148784","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p148785","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p148786","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p148792","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p148791","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p148793","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p148794","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p148795","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p148796","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p148802","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p148801","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p148803"},{"type":"object","name":"SaveTool","id":"p148804"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p148778","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p148779","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p148780"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p148781"}}}],"right":[{"type":"object","name":"Legend","id":"p148814","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p148815","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p148811"},{"id":"p148822"},{"id":"p148831"}]}},{"type":"object","name":"LegendItem","id":"p148843","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p148840"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p148759","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p148760","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p148761","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p148762","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p148763","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p148764","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p148765","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p148766","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p148767","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p148768","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p148769","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p148770","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p148771","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p148772"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p148775","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p148774","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p148773","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p148776"}}}],"center":[{"type":"object","name":"Grid","id":"p148777","attributes":{"axis":{"id":"p148759"}}},{"type":"object","name":"Grid","id":"p148782","attributes":{"dimension":1,"axis":{"id":"p148778"}}}]}},{"type":"object","name":"Div","id":"p148844","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"1b680d80-0295-4603-97fa-e64428e3120a","roots":{"p148846":"de542de5-efd8-4f4a-8672-16d46d4fff16"},"root_ids":["p148846"]}];
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