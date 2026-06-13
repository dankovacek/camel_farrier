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
    
    
    const element = document.getElementById("a57a2768-37c0-4384-851e-9a0c6aa72e6a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a57a2768-37c0-4384-851e-9a0c6aa72e6a' but no matching script tag was found.")
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
                  const docs_json = '{"3f8c8d05-4775-44a0-9414-bad24f9c027c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p722175","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p722176"}}},"roots":[{"type":"object","name":"Column","id":"p722248","attributes":{"children":[{"type":"object","name":"Figure","id":"p722177","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p722178"},"y_range":{"type":"object","name":"DataRange1d","id":"p722179"},"x_scale":{"type":"object","name":"LinearScale","id":"p722187"},"y_scale":{"type":"object","name":"LinearScale","id":"p722188"},"title":{"type":"object","name":"Title","id":"p722180","attributes":{"text":"08NN008 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p722241","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p722235","attributes":{"selected":{"type":"object","name":"Selection","id":"p722236","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p722237"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JZ0gUYBzA4X/DMIQiqSwxkiTRvDpHaeZ6zdI0zVGmKYmSIA0LG2Ic2Jsoig1DMRQFSbJQsoSDA8PoRdthGIqSVKLYIOFAKoxs0e/T8+ERMZ0vD5X2i8iu86je+6IuG8n+r3GvQOm2okp4l8VP1qKxbUdZ/fEg39OAOikWzbQzk7/QimptEmr73AE+pQPlcwaqCkHtdXc/78hFSV+KasaRwVcVolnvjnL/YTp/oBi10xNNzbM03qcU1QMf1FmvU/nZcpTLFlS+4/t4U40mZxvK96kUvu4aav9oNAMzyXxeM6of8ajrv+3lLe0oT1NRFfxO4ue70DRmowQuQfXCnsgXFqD5swyluW8PH3IM9aAHmqLHCfzCM6havVGHvornh2wox/1RuYzt5tsq0YQHo4xM7OJPXkHtGoGm/XMcH3Ud1Vgc6pLZnbxbG8qtZFTqZyw/fhvN2UyU5YtQdfYoPi4PzTs3lLLeGN69CPWdlWji+6P5yVOobOtQr3oZxd8rQ0nyRTU9HMmXX0SzxopifxvBp9Si/hSG5uKHHbxXAyqHQp3mDOe/tKBUJaJaP7ed772JZn8GivNvGF/TjXpDLpo+V5QsRyg/ewT1pRVoNj7cxpsTqHI8UX97upW/eg7F3wfVwFAIf7gczVwASv2bYN5SjfrJVjT5U0H8fB2qxijU1plA/nkTSmE8qj9frXzTDTTBqSiDv7bwRV2oF2SjaXFBCbVv5ofyUR9bhmZxn4VvO4oq3AP18KMAvvg0iqs3qvbBTXykDc2oH0rJqD/vVom6IwhNzIRfaf8/619CQ8gEAAA="},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/6WQP0hCURTGbajBIKykIl7W2tTwZrnPoTkcgoagNzk7hINLNhaEQ5NDKIlEWRFRIQQqQmBgIEE5BGVJQRhIZSWV3s45cOVmPrC6y4/zve/8eZ/JhK8yR/gdfdZtzqBJUDPnejWok5lMN1L3pyxIoefD7j6s4Q0hfUWnggy57TaZmqqO0Hf7IhEe+fWYrV8mSANYm0ane7Q22KOqnVj77OZ2mbrLVcM7tWtvBQmvLNdCFxR+4YP7XuW+vNf6xGBfaPyghHryufpAOTj0e2SotHZH+kqpQH2byk0zkh/v3ktf/iDnnKnqBZN4NbGUw/obYTzkfIY6jyqndEfRmf0zazBnsuuEGRH3WaaOcT4RfDP+1FGdqN9mU/RdJvjYgiOJPiLmAhGxT84TaU+8TuwrRA6pvxmhPzG7HMM5LfGD7ttnRsTc1h93Kb9Gnod3SJdZ5Tw4OLbF/ssyzI0qG8yIL5wPd8xHWKus0P2rrJHvkJMnHmRGfIP/CQQC7K8Ucxv3tnq38BnlYJRzo/8L1MFga8gEAAA="},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p722242","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p722243"}}},"glyph":{"type":"object","name":"Line","id":"p722238","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p722239","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p722240","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p722186","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p722213"},{"type":"object","name":"WheelZoomTool","id":"p722214","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p722215","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p722216","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p722222","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p722221","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p722223","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p722224","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p722225","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p722226","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p722232","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p722231","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p722233"},{"type":"object","name":"SaveTool","id":"p722234"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p722208","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p722209","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p722210"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p722211"}}}],"right":[{"type":"object","name":"Legend","id":"p722244","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p722245","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p722241"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p722189","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p722190","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p722191","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p722192","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p722193","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p722194","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p722195","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p722196","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p722197","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p722198","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p722199","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p722200","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p722201","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p722202"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p722205","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p722204","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p722203","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p722206"}}}],"center":[{"type":"object","name":"Grid","id":"p722207","attributes":{"axis":{"id":"p722189"}}},{"type":"object","name":"Grid","id":"p722212","attributes":{"dimension":1,"axis":{"id":"p722208"}}}]}},{"type":"object","name":"Div","id":"p722246","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"3f8c8d05-4775-44a0-9414-bad24f9c027c","roots":{"p722248":"a57a2768-37c0-4384-851e-9a0c6aa72e6a"},"root_ids":["p722248"]}];
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