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
    
    
    const element = document.getElementById("e7e5fcc9-15fb-435a-82a4-cc2898aef491");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e7e5fcc9-15fb-435a-82a4-cc2898aef491' but no matching script tag was found.")
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
                  const docs_json = '{"46ecb4f6-6ffe-484c-9b2a-c7c6f1c988c8":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p407853","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p407854"}}},"roots":[{"type":"object","name":"Column","id":"p407936","attributes":{"children":[{"type":"object","name":"Figure","id":"p407855","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p407856"},"y_range":{"type":"object","name":"DataRange1d","id":"p407857"},"x_scale":{"type":"object","name":"LinearScale","id":"p407865"},"y_scale":{"type":"object","name":"LinearScale","id":"p407866"},"title":{"type":"object","name":"Title","id":"p407858","attributes":{"text":"08LC036 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p407919","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p407913","attributes":{"selected":{"type":"object","name":"Selection","id":"p407914","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p407915"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYCh+lh54iIGB4c6cNDDtGpwKptdxpoBp8QNJYLqhLBFMv9RJANNBj+PA9O6ZsWBaJSAGTPeyRYPpb3siAw8BAGeVmutgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p407920","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p407921"}}},"glyph":{"type":"object","name":"VArea","id":"p407916","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.00588000005111092},"y2":{"type":"value","value":0.277440015077591},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p407917","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.00588000005111092},"y2":{"type":"value","value":0.277440015077591},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p407918","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.00588000005111092},"y2":{"type":"value","value":0.277440015077591},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p407930","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p407924","attributes":{"selected":{"type":"object","name":"Selection","id":"p407925","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p407926"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1614],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2aP2hTQRzHn0spDuIshS5OojgUBxE5OzmIuBaXFHHI5BBKEZfURREUEZUSVOKfBv+0/ou1atW+NGlVRIoOCk5tKQUnRau2WtPn3aXf68svOe/ljyEp1+XDu7t397t7r8nnfjnHEX8LUad+mYqE3zHOXc0Db1jW8+K7p18zz/PcS19eivLUXHZMXE9OzGdEPWtry7Alz4v2HkqzNY4ztbFpVNR7H66l1DWvDx3c4bJfvHxz8rki769zJvF0eZxheb2+44m4P/5izyPFRX7/6fRD0U9rx/ZBce1GwvfZd96gv+VWAXk7t+vsDfabx7Vz7XV1rWtH6//weU0f6WNzcpwrirw/t3skrkjLv/H7mgcuGvmJr9++U73ssxznHJuV/Zxh72X9yapxis9n0/FjRvL4J/ce6PlvLHWetYorKBEP4sM88DzpexH0eetY7nM0kcaPeOb5/1ksFlNxgrq4nPr/HLO0tLS05MzKz/+hZc95rDwL5L7T+nFixbMEn3U9MBI+pvM59AsiDhDl1PNynjmoxhE+efNr0u9/sh3txzeu+6p7RM43Eh5Vniq8NXFhxV+XZD/joj7a3jkuxr3csn8sr50g6tEe5WK+s2/TahzQ573sRHuqYH0WpWcOq+dB1x3zhefmfPqeYs4z7rKfPC627Y6c94attwu89gdfl6ajCeWzC7Lfq6oc/dB1BxEHHR/j8v5CM4l+5dnoX+fF1DPgH5QmHyrVi6j3VOqbQ3J9D2vLq8WgcdSK1Idr7d/1sg7Ven4m2u8vS0tLy8agz/vggzIvyun1nM8oX0R+1Oeh0hPhr7p8J/Uw+Bk8mHqcz6ulb6Id9WuQ7gOob6Md7ye0bksyzw+DeCJI87Dwx0qpywfriPuoJ4M+Ty7ajuaHTd5LSfNt1FdLzdfq/COon5h8hsZhqodvV8ujTO2qNd5qo12Xf9N+f1laWlo2BuFj1MPo7/4m76O+p/M51MOnkcfFuYYieXPp68jLwnt1eVB6TsGXT5X3oR+a76X5V5TT/DDa0f51+WFdHrfUfG65v2fXKm9YL3nEcsdvlDyo5epgpe+Z/f6ytLS0tLSsHbEPwL4A+Xnk8SnpORPsK+g+RHcuRbfP0u2vTDTt0+g5W92+Cvsduq/BPgb1unPgpv2P7twsiPZ0Hel4pnPEQc/plnoOBvHpxsN9pv1eqfHQuEz3BT3nQ885Bz1/TUnzC7r3yfRe0Hp6ftz3nuX9ruV7L4rmLXT79r+witHccDIAAA=="},"shape":[1614],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p407931","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p407932"}}},"glyph":{"type":"object","name":"Line","id":"p407927","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p407928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p407929","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p407864","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p407891"},{"type":"object","name":"WheelZoomTool","id":"p407892","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p407893","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p407894","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p407900","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p407899","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p407901","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p407902","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p407903","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p407904","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p407910","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p407909","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p407911"},{"type":"object","name":"SaveTool","id":"p407912"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p407886","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p407887","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p407888"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p407889"}}}],"right":[{"type":"object","name":"Legend","id":"p407922","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p407923","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p407919"}]}},{"type":"object","name":"LegendItem","id":"p407933","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p407930"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p407867","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p407868","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p407869","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p407870","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p407871","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p407872","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p407873","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p407874","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p407875","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p407876","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p407877","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p407878","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p407879","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p407880"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p407883","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p407882","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p407881","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p407884"}}}],"center":[{"type":"object","name":"Grid","id":"p407885","attributes":{"axis":{"id":"p407867"}}},{"type":"object","name":"Grid","id":"p407890","attributes":{"dimension":1,"axis":{"id":"p407886"}}}]}},{"type":"object","name":"Div","id":"p407934","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"46ecb4f6-6ffe-484c-9b2a-c7c6f1c988c8","roots":{"p407936":"e7e5fcc9-15fb-435a-82a4-cc2898aef491"},"root_ids":["p407936"]}];
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