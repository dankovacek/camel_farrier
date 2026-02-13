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
    
    
    const element = document.getElementById("fbfe848f-3471-4f4a-b16a-b5aa472ca241");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fbfe848f-3471-4f4a-b16a-b5aa472ca241' but no matching script tag was found.")
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
                  const docs_json = '{"c3fb8b44-cd06-4709-bdaf-983aa4916a04":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p239373","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p239374"}}},"roots":[{"type":"object","name":"Column","id":"p239493","attributes":{"children":[{"type":"object","name":"Figure","id":"p239375","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p239376"},"y_range":{"type":"object","name":"DataRange1d","id":"p239377"},"x_scale":{"type":"object","name":"LinearScale","id":"p239385"},"y_scale":{"type":"object","name":"LinearScale","id":"p239386"},"title":{"type":"object","name":"Title","id":"p239378","attributes":{"text":"08EG004 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p239439","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p239433","attributes":{"selected":{"type":"object","name":"Selection","id":"p239434","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p239435"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JMQgBURzA4X9Wq1VKUVdKGU2vrAZ1znGcTFZlUpY3UEoMitFqNakrw+uUYlVWqwzqSikW+U3f8Imo3dDvhyK6YqF5XFt/ZTxClSqgDm5N3p6hPIuoJnePT6/Q7EsobtTgozXqaRlN5lPnzQaV56B+xdDMty5vtVEd4qj9oMa/uyiLBKpc6PDHHppOEuV7rvLLAep8Fs3pYvfDH19rtTr4AAAA"},"shape":[31],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p239440","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p239441"}}},"glyph":{"type":"object","name":"VArea","id":"p239436","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p239437","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p239438","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p239450","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p239444","attributes":{"selected":{"type":"object","name":"Selection","id":"p239445","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p239446"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JPQgBYRzA4X9ZrQZFBnV1q9XyDtYbFCnDrUbnfE9e6spANqvVKqUo9XZGq7IaDKTUDUom/KZneETM1e77oYgMzr2/KhmgXufQOJcuf5uiGuVRp+4dfjNHKRZQPaI2HyzQZByU3afFl5aon2U04xhKdtXk9y7qShxNtPX5SQ2VlUBtwgZf9VBeaVSzo8fbfTQHC8U91fn38OcX9JRN7vgAAAA="},"shape":[31],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p239451","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p239452"}}},"glyph":{"type":"object","name":"VArea","id":"p239447","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p239448","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p239449","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p239460","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p239454","attributes":{"selected":{"type":"object","name":"Selection","id":"p239455","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p239456"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgcHAwTS06xMDQcOtRCog+UDIBTDPw24Fph5Wvk8HyzjPB9IG7bmCaoeJLElheaBGYbljjD6QBtbIZc1AAAAA="},"shape":[10],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p239461","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p239462"}}},"glyph":{"type":"object","name":"VArea","id":"p239457","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p239458","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p239459","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p239469","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p239463","attributes":{"selected":{"type":"object","name":"Selection","id":"p239464","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p239465"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgONB+1rHoEAMDg1I1mHbYowGmG8KuOYDoAx+awTRDtyGYdlC9bw+W398Dpg9EWoFphi/P7cDyfVPBdIOGM5g+cOiDLVg+dh6YdvjuDaYbJv60ActrLwfSACSsCsOIAAAA"},"shape":[17],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p239470","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p239471"}}},"glyph":{"type":"object","name":"VArea","id":"p239466","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p239467","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p239468","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p239478","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p239472","attributes":{"selected":{"type":"object","name":"Selection","id":"p239473","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p239474"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaLgQu6PwEAAUJwNDCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p239479","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p239480"}}},"glyph":{"type":"object","name":"VArea","id":"p239475","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p239476","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p239477","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.9604000186920167},"y2":{"type":"value","value":57.73199844360351},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p239487","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p239481","attributes":{"selected":{"type":"object","name":"Selection","id":"p239482","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p239483"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1095],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1095],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p239488","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p239489"}}},"glyph":{"type":"object","name":"Line","id":"p239484","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p239485","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p239486","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p239384","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p239411"},{"type":"object","name":"WheelZoomTool","id":"p239412","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p239413","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p239414","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p239420","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p239419","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p239421","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p239422","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p239423","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p239424","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p239430","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p239429","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p239431"},{"type":"object","name":"SaveTool","id":"p239432"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p239406","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p239407","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p239408"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p239409"}}}],"right":[{"type":"object","name":"Legend","id":"p239442","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p239443","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p239439"}]}},{"type":"object","name":"LegendItem","id":"p239453","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p239450"},{"id":"p239460"},{"id":"p239469"},{"id":"p239478"}]}},{"type":"object","name":"LegendItem","id":"p239490","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p239487"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p239387","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p239388","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p239389","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p239390","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p239391","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p239392","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p239393","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p239394","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p239395","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p239396","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p239397","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p239398","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p239399","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p239400"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p239403","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p239402","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p239401","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p239404"}}}],"center":[{"type":"object","name":"Grid","id":"p239405","attributes":{"axis":{"id":"p239387"}}},{"type":"object","name":"Grid","id":"p239410","attributes":{"dimension":1,"axis":{"id":"p239406"}}}]}},{"type":"object","name":"Div","id":"p239491","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"c3fb8b44-cd06-4709-bdaf-983aa4916a04","roots":{"p239493":"fbfe848f-3471-4f4a-b16a-b5aa472ca241"},"root_ids":["p239493"]}];
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