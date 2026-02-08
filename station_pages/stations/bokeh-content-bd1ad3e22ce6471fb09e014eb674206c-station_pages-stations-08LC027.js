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
    
    
    const element = document.getElementById("a227a0eb-bf1f-4ed6-a41f-841f4e356252");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a227a0eb-bf1f-4ed6-a41f-841f4e356252' but no matching script tag was found.")
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
                  const docs_json = '{"addf9cc1-8c4a-477b-b45d-42280ae776d3":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p226714","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p226715"}}},"roots":[{"type":"object","name":"Column","id":"p226816","attributes":{"children":[{"type":"object","name":"Figure","id":"p226716","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p226717"},"y_range":{"type":"object","name":"DataRange1d","id":"p226718"},"x_scale":{"type":"object","name":"LinearScale","id":"p226726"},"y_scale":{"type":"object","name":"LinearScale","id":"p226727"},"title":{"type":"object","name":"Title","id":"p226719","attributes":{"text":"08LC027 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p226780","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226774","attributes":{"selected":{"type":"object","name":"Selection","id":"p226775","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226776"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaGg6tDv1EABBIxvICAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226781","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226782"}}},"glyph":{"type":"object","name":"VArea","id":"p226777","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13916000455617905},"y2":{"type":"value","value":18.054000778198244},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p226778","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13916000455617905},"y2":{"type":"value","value":18.054000778198244},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p226779","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13916000455617905},"y2":{"type":"value","value":18.054000778198244},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p226791","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226785","attributes":{"selected":{"type":"object","name":"Selection","id":"p226786","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226787"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYPg3qy71EANDg9G32tRDADyYFdAQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226792","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226793"}}},"glyph":{"type":"object","name":"VArea","id":"p226788","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13916000455617905},"y2":{"type":"value","value":18.054000778198244},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p226789","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13916000455617905},"y2":{"type":"value","value":18.054000778198244},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p226790","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13916000455617905},"y2":{"type":"value","value":18.054000778198244},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p226800","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226794","attributes":{"selected":{"type":"object","name":"Selection","id":"p226795","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226796"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaNAWzkg9xMDAkJCXnnoIAMzqomkQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226801","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226802"}}},"glyph":{"type":"object","name":"VArea","id":"p226797","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13916000455617905},"y2":{"type":"value","value":18.054000778198244},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p226798","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13916000455617905},"y2":{"type":"value","value":18.054000778198244},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p226799","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13916000455617905},"y2":{"type":"value","value":18.054000778198244},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p226809","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226803","attributes":{"selected":{"type":"object","name":"Selection","id":"p226804","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226805"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[914],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+1YTWxUVRSejiIyxdqW/tGfoZRSC6WxzSwMMeQ9dNEQIaQxRGOIndWEBTGNiy6IScdF48KQxhhiiCFOMgtjNGzsoulCJyNKhVGglo5gsTOUtmqBAnWQWNrnueeecz1v+hrWkJnNl3PPzz33vHvnfuf6fOr3oN/3+GN4OFhmA0bnu0sU2tljzyrMHKsIKGw83bUO9RWnixQmUimfwlhXFu3sUKjO1vG2KwxHIp1kX01Yg3651lq023F4M81TI+VM9zDqo3sCLj3Mg3HCg8l6zOfwYL2MlwgO1Ep/Hoe866R97OTJINrF7zRSnk12EebfTvpm8t+Ccu+eoJShPo20zhadzyvb5HjjwHyTRIi3WebPeZo6pON1XvlC3eukHurXIBHq4soH4td56cU8VTIf8KuWCHlVol8gXeGyp7zZjvWAm6g+m2g/lBPyPiqjfJ6XCN+vlOw20nffQPGKbb0P15PeT+t4aCn/ZO6BpffZkqXz/cfScRcVxl798CbKRz76U2Lm4PE5hb6v6melHK26MivHo3vDMxj31MK0RNazDOvKeMXn8cS7Ry4ZXHacnpenLhhccRznUMlPBkUcsa4FkqctMOsZ2TdJ+U5gPu+f+EWNO1/Wjyn8drTvZxMP9nH06Nx5gzDvZ13Zc6sQ9OHdQ6MGYdzZ+cEPCvv3hr/Heta/dcY1z6mFtKW/32XKa9ysi+djP5VP9MR3aD9zMYlY0v4/8jxgN3Xw+FmD7J9vL9blypvHRZ1gvjGZd8/uoYsScdz35PxvF7CABSzgk46J0T7XPQ338nX1/28Pjf6u/tetUOg31H/yzlWDYjyxuDxp7mn2YxT3N9/nmeZn8F7mee2Nfj0e771raX5239J8KicR+OQ9uodue6Hxj/cWEe9aT7ysWPJpGF8n9cCDApI3wfylxLsrabyBeKzmr6n9Hba6t1OpdjluB97YSnysifyCkn8znwP+7eJrwGfLifeWS3vg1VVSBr9a4tUv0Ly7yK+Nxlt0XvubaLzZPZ5qJ7lV5s283GBXdptcB8rav4XsOqQ9rxv5uo67k3C70Yu8sJ6ir4F1VsvvwAi/Mlk3tBf9BK5L+LMd1xHq+pz5rtqv2PX9c61+qivLT5P8FMX1UR2WvPYj82SW2Y75NOz7v9U5gO+3aFCv7448B8hH5Tmicwb5X0H545pJaQ95+eU6WOb5we+uPG/mnIVC8yj3fTOFeX96Rp/LpS+yMg9zHvm8Kr3idxPxX825Z1mflwmDDvLPy7TetJd+y4vXxg3vZnvm34KHs53h5WMHxrywP3EO+4LYrfcuGN6u63PeoOgL0I6xCOt6aRXmz5M//ij7tfJke7EuHM/XrzUfy4V7q4AFLGABHy+Ee6hnMInvM4hq1N921iC/v6wlP8ouHxVPKn3zR7wHX3spa/i9hxwe2XeD7G9JvoI8RvAc5hf5PIYReNmK5OHAS5BPMS9iHg+88p7lwa8Mf0rmHpLesUQcw9sD6Q1e75/Mp/md1PD44ECFfI+F+Sslf2U+i+/Pmu+2Gn7t4tvRTol26OtO4pkd0o75qYjX4nrfjkR2GD+tbyP9LsqnTcYJDwdd/QSj6DP4/bzBxYt5nVQH1ocjs1ulP9tz3UwfRHVmhJ+rj2K+LL73ktwf3J9Fj87N0z77w9LxFuV3Bv7+L/May81rnVW8WsT3peM3ief+5bUf83kw7I8Z2e9yXvlxkP/70X5Zngeoy21px3w5tvD5dXk+OH/uQ7iu+A7PccW6uZ/IdA/fd507OiemD6Z3fO5P2I/rif5F6O+z3ednScbHuLIvUf4efQr+H8j1vj3i6t99K+M3XPVcA6HvcPU5iOIdAfsdB9+r0wbFewPLbOe8Pn3NIPdJHE/0H+bdQunFuwT3Pfy/Z/of6pO4Xljf/wCAEp3BkBwAAA=="},"shape":[914],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226810","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226811"}}},"glyph":{"type":"object","name":"Line","id":"p226806","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p226807","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p226808","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p226725","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p226752"},{"type":"object","name":"WheelZoomTool","id":"p226753","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p226754","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p226755","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p226761","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p226760","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p226762","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p226763","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p226764","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p226765","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p226771","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p226770","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p226772"},{"type":"object","name":"SaveTool","id":"p226773"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p226747","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p226748","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p226749"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p226750"}}}],"right":[{"type":"object","name":"Legend","id":"p226783","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p226784","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p226780"},{"id":"p226791"},{"id":"p226800"}]}},{"type":"object","name":"LegendItem","id":"p226812","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p226809"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p226728","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p226729","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p226730","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p226731","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p226732","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p226733","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p226734","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p226735","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p226736","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p226737","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p226738","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p226739","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p226740","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p226741"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p226744","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p226743","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p226742","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p226745"}}}],"center":[{"type":"object","name":"Grid","id":"p226746","attributes":{"axis":{"id":"p226728"}}},{"type":"object","name":"Grid","id":"p226751","attributes":{"dimension":1,"axis":{"id":"p226747"}}}]}},{"type":"object","name":"Div","id":"p226813","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p226815","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p226814","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"addf9cc1-8c4a-477b-b45d-42280ae776d3","roots":{"p226816":"a227a0eb-bf1f-4ed6-a41f-841f4e356252"},"root_ids":["p226816"]}];
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