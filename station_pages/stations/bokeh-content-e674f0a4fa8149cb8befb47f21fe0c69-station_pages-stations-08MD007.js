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
    
    
    const element = document.getElementById("c394449a-6113-497d-b970-032c99002dd5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c394449a-6113-497d-b970-032c99002dd5' but no matching script tag was found.")
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
                  const docs_json = '{"b4a5bcfb-5052-4849-a21f-5aa86a86ae46":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p530664","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p530665"}}},"roots":[{"type":"object","name":"Column","id":"p530756","attributes":{"children":[{"type":"object","name":"Figure","id":"p530666","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p530667"},"y_range":{"type":"object","name":"DataRange1d","id":"p530668"},"x_scale":{"type":"object","name":"LinearScale","id":"p530676"},"y_scale":{"type":"object","name":"LinearScale","id":"p530677"},"title":{"type":"object","name":"Title","id":"p530669","attributes":{"text":"08MD007 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p530730","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p530724","attributes":{"selected":{"type":"object","name":"Selection","id":"p530725","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p530726"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgOFD/qKfkEAD6wiilCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p530731","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p530732"}}},"glyph":{"type":"object","name":"VArea","id":"p530727","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.759900004863739},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p530728","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.759900004863739},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p530729","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.759900004863739},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p530741","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p530735","attributes":{"selected":{"type":"object","name":"Selection","id":"p530736","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p530737"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1248],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v9/3/8npLN9gxg8KMeRv/7/39/UcZBDHEk+fj+Q0cx5BkZGBJSrM/j1AckFsyceRFD/j/QvhNl1/Dpa8iYeBWfPEPj1Mv2xNoHJBKEmi/gNA+XPwj5j1x5WtkHjKf/oXxnsYX3/QtKp4kWR46H14En8Nl337/3OCnmEjIPazojIn1ilcdlHoz+DXToapld9sSK00ofkjzW/EmqOIz+AZR/vHS1PbHilMpTWx8h80bpUXqUHqVH6aFEwwBC/Bew/i7bNx9nOf8XWA/w6W7CWv/1H9pKdH0LbA/IR1huIVif4FJHSD+57QI87SUHjjVXsIo/rLpCoP38lJh604Hr+nNkdQveL3+ET9+Bz3/vYG3Xid3E357HIY9LPKH/0FV7YLjE7/K8gi/c6g+cukhKexlo3zly4oGBSfs4SeKw9njD1MP45O07HQ/YEytOaXr7A+537SM7/QPz4X+t9m32lOaTb8B4szddR7I8tfQRMgepXKq35VpuT6o8LnFi7SXVvbQOr1F6lB6lR+lResjRKO0rYPX9/9riAySX94TaMcB2wXz3h6SPexHSB9Q2/5j3dmztGPmb57bjcw9KOwW1/bqFQPt2C9X04eq3IMfHyo8Iedh4Hro4IX3E2odLnpA+XOkDV/wQChdC/iO3XfIZPA68kGR9X4Hpia1xqf0PsLsW2SONP6LwsYxPYpUfbPpw9a8J9buHiv+Gqj5C6kfpUXqUHqVH6VF6MNOQfsUGe2qPl1GqDzSOLBCx054EcTD9E+gfnU17qbkOAa8+0Ljzue+H7dHXVaCLE9JHaF0GLn2E7EFXh94fJKQfl//J1UcoPPHFX8nkHXjtwyZPrj5c7iDCPrzj5+SOuw8ifXSNB5g4AM0SEI0AJwAA"},"shape":[1248],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p530742","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p530743"}}},"glyph":{"type":"object","name":"Line","id":"p530738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p530739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p530740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p530751","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p530745","attributes":{"selected":{"type":"object","name":"Selection","id":"p530746","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p530747"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1248],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v9/3/8npLN9gxg8KMeRv/7/39/UcZBDHEk+fj+Q0cx5BkZGBJSrM/j1AckFsyceRFD/j/QvhNl1/Dpa8iYeBWfPEPj1Mv2xNoHJBKEmi/gNA+XPwj5j1x5WtkHjKf/oXxnsYX3/QtKp4kWR46H14En8Nl337/3OCnmEjIPazojIn1ilcdlHoz+DXToapld9sSK00ofkjzW/EmqOIz+AZR/vHS1PbHilMpTWx8h80bpUXqUHqVH6aFEwwBC/Bew/i7bNx9nOf8XWA/w6W7CWv/1H9pKdH0LbA/IR1huIVif4FJHSD+57QI87SUHjjVXsIo/rLpCoP38lJh604Hr+nNkdQveL3+ET9+Bz3/vYG3Xid3E357HIY9LPKH/0FV7YLjE7/K8gi/c6g+cukhKexlo3zly4oGBSfs4SeKw9njD1MP45O07HQ/YEytOaXr7A+537SM7/QPz4X+t9m32lOaTb8B4szddR7I8tfQRMgepXKq35VpuT6o8LnFi7SXVvbQOr1F6lB6lR+lResjRKO0rYPX9/9riAySX94TaMcB2wXz3h6SPexHSB9Q2/5j3dmztGPmb57bjcw9KOwW1/bqFQPt2C9X04eq3IMfHyo8Iedh4Hro4IX3E2odLnpA+XOkDV/wQChdC/iO3XfIZPA68kGR9X4Hpia1xqf0PsLsW2SONP6LwsYxPYpUfbPpw9a8J9buHiv+Gqj5C6kfpUXqUHqVH6VF6MNOQfsUGe2qPl1GqDzSOLBCx054EcTD9E+gfnU17qbkOAa8+0Ljzue+H7dHXVaCLE9JHaF0GLn2E7EFXh94fJKQfl//J1UcoPPHFX8nkHXjtwyZPrj5c7iDCPrzj5+SOuw8ifXSNB5g4AM0SEI0AJwAA"},"shape":[1248],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p530752","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p530753"}}},"glyph":{"type":"object","name":"Line","id":"p530748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p530749","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p530750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p530675","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p530702"},{"type":"object","name":"WheelZoomTool","id":"p530703","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p530704","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p530705","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p530711","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p530710","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p530712","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p530713","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p530714","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p530715","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p530721","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p530720","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p530722"},{"type":"object","name":"SaveTool","id":"p530723"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p530697","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p530698","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p530699"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p530700"}}}],"right":[{"type":"object","name":"Legend","id":"p530733","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p530734","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p530730"}]}},{"type":"object","name":"LegendItem","id":"p530744","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p530741"},{"id":"p530751"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p530678","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p530679","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p530680","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p530681","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p530682","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p530683","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p530684","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p530685","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p530686","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p530687","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p530688","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p530689","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p530690","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p530691"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p530694","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p530693","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p530692","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p530695"}}}],"center":[{"type":"object","name":"Grid","id":"p530696","attributes":{"axis":{"id":"p530678"}}},{"type":"object","name":"Grid","id":"p530701","attributes":{"dimension":1,"axis":{"id":"p530697"}}}]}},{"type":"object","name":"Div","id":"p530754","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"b4a5bcfb-5052-4849-a21f-5aa86a86ae46","roots":{"p530756":"c394449a-6113-497d-b970-032c99002dd5"},"root_ids":["p530756"]}];
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