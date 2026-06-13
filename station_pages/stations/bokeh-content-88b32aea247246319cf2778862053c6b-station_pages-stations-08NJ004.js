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
    
    
    const element = document.getElementById("c707e010-4ba4-407c-a1aa-52aa08ee233b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c707e010-4ba4-407c-a1aa-52aa08ee233b' but no matching script tag was found.")
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
                  const docs_json = '{"adcd7b55-9ba2-47c5-b6ed-ec67470fc516":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p584397","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p584398"}}},"roots":[{"type":"object","name":"Column","id":"p584470","attributes":{"children":[{"type":"object","name":"Figure","id":"p584399","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p584400"},"y_range":{"type":"object","name":"DataRange1d","id":"p584401"},"x_scale":{"type":"object","name":"LinearScale","id":"p584409"},"y_scale":{"type":"object","name":"LinearScale","id":"p584410"},"title":{"type":"object","name":"Title","id":"p584402","attributes":{"text":"08NJ004 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p584463","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584457","attributes":{"selected":{"type":"object","name":"Selection","id":"p584458","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584459"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1279],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+1aPUxUQRB+nD9RYoz/iuKJiIghBBWDleFpYmhs7C2uora20eZiaU1hcoZCC2NjQ+fF+gobQ2NxxGiMJGpU1BARv53db9k33HovGs2h7xV8zO7szOzs37cLSWK+rzcE1jfWy9UvE+hE39XbpRRIWZen3XNbTX3l9pO9BpvX9/SFMutjyHa1a+cPmHa16emDoZ10fqnflQ8YxDcYyqynXyLiPmr02mGsfXPm2mHxd/Lq7lYodruSJB0bOyn1STKerqysPG40Rp0sceq42E/2O6/9dOzRKWMP/s46++Mef+KX+aQ/nW/2cw26cWT+YGcg7C/jQfkJicuNk86377/LJ+NhHrRfX+/mQTRPSbJT/Lr5x3n6t1Cvh/Uup/PXX5v13qm43vNbxG/Pk06dX/96XDcXrjTN+iZiX31m5AKLPKzneVD/uPw8nNd6nsfk2rt7r0y7+t1Lb/Ig7Lx3fj65c/KbtFscKhke0vdwclOIUl5CeXVheSIv2vW4w9iBP8FkbmZfKIM3CR/1vMjVw1+PKfdYrh4yMvjUkRDBj3qNDNwv+uXqnjxIv0Tw1l2qnfB22odd8R+g1LM/Qb/kvqD1tV7ML/sRYKZ/uh3j1vmjP8ZBmXYDHir9ph2dBx038ws7wlfBd+24qvxVZsty/9HjSHv0r8dL90/82PvAdolzbmazs1syWJuc3+JkqWdctBvzx35yXno75eqG0D7XQ0vMuw6oh/jwfTXrTCPuFR9MeTvMu75b6v0kjpb6iIflsX3nD5Zzf8qc8zF/9TvvXuTZ92L9ZN5j9bpcx/Gn89TOvo4vJnPfbzfPoCfnAlHrx+zHynW+CjnLXzs1H7Hx/OVyx2/Icwq0fM/nISd/++X8F/Zb8uPKy6dvzX7XDsFPPju+LOc4+Iac238bGUfzyuySnHuLQxvTABFPyb1vdplykYN6vA90Gxnvr8LjKlNT8t4NO/LOjHrhb9iXhFdRn35oH7zp+wTejWMI+xn/jAP+hMfhXNkW2qcf1mskT2M73AeE77MfRB037bIdmgjvZb/9fcDZI29uzrw/ZvTwHV+D9r1cyhHHsMWecwYrU4Opky+GiEgvGBnfGTc+I47fyrs77eBXeXevNy7LO7kg+Ftl6tUZjyhHf0+H7dHvY6Es7WycI86+vOOLHhDfar+oZ/k249H6/aZdffG+vec4pD2irtf3Idbr/OtxhCsZJ46nv2+4co4/9YjaDttrzK3H9aIwNj85zzVy/eh2Wi8jc32hc5jHsu+0Q73OMutVxs/uFy39xNZzDr+xuLhfwV9mv6S+Lm8nd8z5V/AZea8qeJziccW8KOZFsS7+mX0hedAr94bfQpyryfAtuWeAt/O9T+4T5PE494RPkzeDrwqvxzkpfJlIHkxeGyD1Sk5fkHY0fyafQnv3XgteZ/lfv7Qz/NfK8v8q5MOrPM/eFzzfc+/k+PuBvI97fuV4k+btmq+iifglX9T8kH6E90KvNm35dr3RGFvDi40dx5/x66jnwVk+POz5MnmvrR+y9sHrs3xYeL7Yw48MPw9k1hNX7weBvawf4dn4yMf7nZxB9h/v12VTj3xm/t7g3+sdP/b5du/kwXzS98PMvAM/FJ7ZaejXDddPBH9rnZpRUOv9v+I3PwA91hzC+CcAAA=="},"shape":[1279],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584464","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584465"}}},"glyph":{"type":"object","name":"Line","id":"p584460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584461","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p584462","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p584408","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p584435"},{"type":"object","name":"WheelZoomTool","id":"p584436","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p584437","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p584438","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p584444","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p584443","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p584445","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p584446","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p584447","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p584448","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p584454","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p584453","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p584455"},{"type":"object","name":"SaveTool","id":"p584456"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p584430","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p584431","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p584432"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p584433"}}}],"right":[{"type":"object","name":"Legend","id":"p584466","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p584467","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p584463"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p584411","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p584412","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p584413","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p584414","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p584415","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p584416","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p584417","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p584418","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p584419","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p584420","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p584421","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p584422","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p584423","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p584424"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p584427","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p584426","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p584425","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p584428"}}}],"center":[{"type":"object","name":"Grid","id":"p584429","attributes":{"axis":{"id":"p584411"}}},{"type":"object","name":"Grid","id":"p584434","attributes":{"dimension":1,"axis":{"id":"p584430"}}}]}},{"type":"object","name":"Div","id":"p584468","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"adcd7b55-9ba2-47c5-b6ed-ec67470fc516","roots":{"p584470":"c707e010-4ba4-407c-a1aa-52aa08ee233b"},"root_ids":["p584470"]}];
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