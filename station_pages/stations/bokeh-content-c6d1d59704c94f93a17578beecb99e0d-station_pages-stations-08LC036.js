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
    
    
    const element = document.getElementById("d1717c28-72fa-4a93-b4ae-12488fd0d607");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd1717c28-72fa-4a93-b4ae-12488fd0d607' but no matching script tag was found.")
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
                  const docs_json = '{"66a4d70e-bc69-4e6f-87b2-057ab7728772":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p285585","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p285586"}}},"roots":[{"type":"object","name":"Column","id":"p285668","attributes":{"children":[{"type":"object","name":"Figure","id":"p285587","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p285588"},"y_range":{"type":"object","name":"DataRange1d","id":"p285589"},"x_scale":{"type":"object","name":"LinearScale","id":"p285597"},"y_scale":{"type":"object","name":"LinearScale","id":"p285598"},"title":{"type":"object","name":"Title","id":"p285590","attributes":{"text":"08LC036 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p285651","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p285645","attributes":{"selected":{"type":"object","name":"Selection","id":"p285646","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p285647"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYCh+lh54iIGB4c6cNDDtGpwKptdxpoBp8QNJYLqhLBFMv9RJANNBj+PA9O6ZsWBaJSAGTPeyRYPpb3siAw8BAGeVmutgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p285652","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p285653"}}},"glyph":{"type":"object","name":"VArea","id":"p285648","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.00588000005111092},"y2":{"type":"value","value":0.277440015077591},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p285649","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.00588000005111092},"y2":{"type":"value","value":0.277440015077591},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p285650","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.00588000005111092},"y2":{"type":"value","value":0.277440015077591},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p285662","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p285656","attributes":{"selected":{"type":"object","name":"Selection","id":"p285657","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p285658"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1614],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+2aTUhUURTHp41Ii2gdgptWUbSQFhFxc9Uioq20UaKFqxYiEm20TREUEhYiFVOZlGlfVlpWzqhZESG1SGilIkKrwiy1D3udc8f/c+YvtzdTow513Rzuveeec+7He/M7xxeL6d9cvRWFKZM11W+MBLeruPOVmQ+C+O7xlyYIgsSFj8+1Pzk9/1Tbo8OzgzpuysoGzc8gqG8+NGDWxGJjG4v6dTwYaU2GbRmvPLgjYb5K/+auJ6EUe1UTbY8W/PSq/ar1FQ91fvzZnp5Qfpf5jQP31U9pxfZ7RtqJmuo75rModpRcXyJFL1HbdM18k7h2rr2q82yb9dHP4z9kXeNHrphp6+dSKMVeoq4vrnatxDjan2Reced5EyXfy/7tO9VsPlg/Z8yk9XPavLXzT+ZNjsn+bDp+zERJiX9074EGXdeyyFzXiXiXK55c7SIenA/OC+fM94LP33XesMOS70HU+WU7zvHjXGbleWtpaTGIE9IVVwG/vwr1verjKszfO38u/lwKmcfycj+F04QDuhc46EHIWeAt4Z3Sd8M9ylWWs1Q+rr0bKcFj4DrmOdiFRByQ6Afvwb/YEc60nGfjkPGgfaornf9snGwnxau9RuwmXtT12fXWVPernuVUMTPadm6RX5VLGweGdLy+vGpI9+Viyf7UOPRUYhz6sKPrnXw9EPqBP3CwtM2J8uQS3pV1Cbf2hufB+471gnO1PdJ6W+O3MsUbt8yMxG223dT44hu23gj5Fjz7Rc616Gib7ofl2TmZ3z512aAfdnjfsf+Ig/3Dr9irnGjr0HgsZ8O+i4uZM8AfLF3c8adcxNzjspMtF3bLvaptOryEl9GfLxkVT778ZGsH8aw0n0f5yzb+ldaLOr+ocXkO5a+g6wU+Pn8+/zw/+efQv4eyeQ+ncZ/lTuEwWxcVGTScHbTcrbyY4qmkSltHBSeCX8Fj0p9R72QOA5+Bg5njZNzWUcGb0JM4MvganM15QJr/jLxA7FSu29Jl16Fcni7TOZU5EbzIdVjw499KthvVhj/mZPByGidbvmU9rg9HcS/4lzkY9TauM7rqei5uYL6BHvejzXZceujneFifx8HxrJdrO2odsJcvf7nGV+j6fl9S+ZrrnPzvu/99z+b33d8Tf0/8PVn9egS4DZwG7kLdE+Mu/uP5bIe5DuPgaeV4/W5B/NnvGrh+i7ot6rLgXvxfmPkP8XD8mAc7M1Tv5for9MSefJ+wWB+GHttnnkX91lXHTdmNh9838DpcdVxXvZV5MarOx7wa1c7VnosPlrsf68jVD68/1/le//dc6Pcnc3/+9J5iHz0/eX7y/LT6/OSfQ/8c+ufw/3kOkTcgL9B6vdbpUcdniXHoI6/gPAR6rI+8S+bbunlUfsX5Frcx32UHeRV/vwr/yHuQ73CdHnkMxhE/+0vthzv/cX03i/or/PA+sj/241qfyx/yLc6v0I94OC9DfC5/mMffM/P33a7vd1zxcFwcH89ztV12XHkpx+lqc33BdZ9c+T32i8f5+/G0e2mfG35+uI376crbfwGwitHccDIAAA=="},"shape":[1614],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p285663","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p285664"}}},"glyph":{"type":"object","name":"Line","id":"p285659","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p285660","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p285661","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p285596","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p285623"},{"type":"object","name":"WheelZoomTool","id":"p285624","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p285625","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p285626","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p285632","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p285631","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p285633","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p285634","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p285635","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p285636","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p285642","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p285641","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p285643"},{"type":"object","name":"SaveTool","id":"p285644"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p285618","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p285619","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p285620"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p285621"}}}],"right":[{"type":"object","name":"Legend","id":"p285654","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p285655","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p285651"}]}},{"type":"object","name":"LegendItem","id":"p285665","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p285662"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p285599","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p285600","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p285601","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p285602","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p285603","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p285604","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p285605","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p285606","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p285607","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p285608","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p285609","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p285610","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p285611","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p285612"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p285615","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p285614","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p285613","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p285616"}}}],"center":[{"type":"object","name":"Grid","id":"p285617","attributes":{"axis":{"id":"p285599"}}},{"type":"object","name":"Grid","id":"p285622","attributes":{"dimension":1,"axis":{"id":"p285618"}}}]}},{"type":"object","name":"Div","id":"p285666","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"66a4d70e-bc69-4e6f-87b2-057ab7728772","roots":{"p285668":"d1717c28-72fa-4a93-b4ae-12488fd0d607"},"root_ids":["p285668"]}];
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