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
    
    
    const element = document.getElementById("e3660bb0-89b4-4d2a-a5a3-f6fac91054e5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e3660bb0-89b4-4d2a-a5a3-f6fac91054e5' but no matching script tag was found.")
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
                  const docs_json = '{"25ec552c-bacf-42dc-b5ce-865d74d58b18":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p249977","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p249978"}}},"roots":[{"type":"object","name":"Column","id":"p250069","attributes":{"children":[{"type":"object","name":"Figure","id":"p249979","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p249980"},"y_range":{"type":"object","name":"DataRange1d","id":"p249981"},"x_scale":{"type":"object","name":"LinearScale","id":"p249989"},"y_scale":{"type":"object","name":"LinearScale","id":"p249990"},"title":{"type":"object","name":"Title","id":"p249982","attributes":{"text":"08KE027 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p250043","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p250037","attributes":{"selected":{"type":"object","name":"Selection","id":"p250038","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p250039"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEhY2eXoBAAFPmFRCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p250044","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p250045"}}},"glyph":{"type":"object","name":"VArea","id":"p250040","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":1.285199990272522},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p250041","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":1.285199990272522},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p250042","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":1.285199990272522},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p250054","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p250048","attributes":{"selected":{"type":"object","name":"Selection","id":"p250049","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p250050"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3Fe0wMAADA4VuK5FAtlehQoXRIkryuupRKSEJaKkmUlqJVSNLDUiRJkqP0WkIl5JUiaUnIK6FiOa+ENKpZxfy+fz6BQCD++NBSKhAIEoTPWG7azFbrWlm2t5378j+xa0Mnl3b/ZOHYXt5i2c/tZQKr/6vaDWHJKyUODFTmzL8qXJc6knsmq7LBdXV2cRrD0W+1uHi7Drco6bLKiQlsIdZjvyoDTnOZytUfjLgrQswi4Ux2yprFu0zNuPCeOTe5zWPFzgVsulfC3urWnJxvwxUWdtzxwJ61vZayXfcyDo135hztVdx4bjUPStxY/NSd3Tet54Q+Ly5P8mG5aBOrl21mK9sADmoOZNnWbVw/GMJ9R0J5yuRwdr22k2OWRnJpWxS3hexjoVIcz8/Yz1uMD3B6ZRLXrEzmbnkKT4w4ystHpHPk6QwumnWSm2tO8VC3bDb7msM+UfmcolbIlXlF3Dn3Aus8KGF7zzIO+3mZ8+Ku8lOtGyw4V8EzJFXs8eQOJ/rW8LXeWv6YeJ81RA0svfiIgxc/4dMvn3FDQBP/GWhmwyNveI1BG8ddfcdlju/5XesHHhXymRcqfuWA4984Y1oX197q5l/Ov1lP3svO4X84SmWAz5/6y69NFKz/r1yjyOZrh7Fvx3BO3SPk26qj+XuuGo+fq8GO9ZocsX4sF3SN4+exIlbQmsQmRfrsuWgKH2w05Bsbjflzz3TWTDThxbqzeXvpHM62seBHTfO5338RTxuwZLcUKe/Xt+XL5Uu43cGRVVudWBK8ggOHuHBmuivXGa3lnop1bODswS7vPTk6bAMXD/flFpkfq5j4s8Xdrey3JojTvgRzdeQO7hodxqLcCHYy38277u/hQo9obvoRw4qx8WyqmcDeZxM5eeEhrnh8mDt8Ulm7J43tDhzn0PGZnFMi40ZpFg++OMNi/zx27y/ghMNnuVzvPMuvFLO6w0W2arnEQdvKWaZwneuP3eQ+w0pr6T9m1Qs5wAUAAA=="},"shape":[184],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqeNEHvmp8scfiL4eHVR8wxP///1+/b/47DHGg/gdVIp+wieMNL0agbMjjt/j0HZgv9RifPIr5QPf9v7Z4A9Hqsfgbr3vprR7kn0u+l4aNf4gNP+H//+/7JgWMOH8TGz6DSx3ENYO5XAQAJB5MPcAFAAA="},"shape":[184],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p250055","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p250056"}}},"glyph":{"type":"object","name":"Line","id":"p250051","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p250052","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p250053","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p250064","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p250058","attributes":{"selected":{"type":"object","name":"Selection","id":"p250059","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p250060"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3Fe0wMAADA4VuK5FAtlehQoXRIkryuupRKSEJaKkmUlqJVSNLDUiRJkqP0WkIl5JUiaUnIK6FiOa+ENKpZxfy+fz6BQCD++NBSKhAIEoTPWG7azFbrWlm2t5378j+xa0Mnl3b/ZOHYXt5i2c/tZQKr/6vaDWHJKyUODFTmzL8qXJc6knsmq7LBdXV2cRrD0W+1uHi7Drco6bLKiQlsIdZjvyoDTnOZytUfjLgrQswi4Ux2yprFu0zNuPCeOTe5zWPFzgVsulfC3urWnJxvwxUWdtzxwJ61vZayXfcyDo135hztVdx4bjUPStxY/NSd3Tet54Q+Ly5P8mG5aBOrl21mK9sADmoOZNnWbVw/GMJ9R0J5yuRwdr22k2OWRnJpWxS3hexjoVIcz8/Yz1uMD3B6ZRLXrEzmbnkKT4w4ystHpHPk6QwumnWSm2tO8VC3bDb7msM+UfmcolbIlXlF3Dn3Aus8KGF7zzIO+3mZ8+Ku8lOtGyw4V8EzJFXs8eQOJ/rW8LXeWv6YeJ81RA0svfiIgxc/4dMvn3FDQBP/GWhmwyNveI1BG8ddfcdlju/5XesHHhXymRcqfuWA4984Y1oX197q5l/Ov1lP3svO4X84SmWAz5/6y69NFKz/r1yjyOZrh7Fvx3BO3SPk26qj+XuuGo+fq8GO9ZocsX4sF3SN4+exIlbQmsQmRfrsuWgKH2w05Bsbjflzz3TWTDThxbqzeXvpHM62seBHTfO5338RTxuwZLcUKe/Xt+XL5Uu43cGRVVudWBK8ggOHuHBmuivXGa3lnop1bODswS7vPTk6bAMXD/flFpkfq5j4s8Xdrey3JojTvgRzdeQO7hodxqLcCHYy38277u/hQo9obvoRw4qx8WyqmcDeZxM5eeEhrnh8mDt8Ulm7J43tDhzn0PGZnFMi40ZpFg++OMNi/zx27y/ghMNnuVzvPMuvFLO6w0W2arnEQdvKWaZwneuP3eQ+w0pr6T9m1Qs5wAUAAA=="},"shape":[184],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqeNEHvmp8scfiL4eHVR8wxP///1+/b/47DHGg/gdVIp+wieMNL0agbMjjt/j0HZgv9RifPIr5QPf9v7Z4A9Hqsfgbr3vprR7kn0u+l4aNf4gNP+H//+/7JgWMOH8TGz6DSx3ENYO5XAQAJB5MPcAFAAA="},"shape":[184],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p250065","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p250066"}}},"glyph":{"type":"object","name":"Line","id":"p250061","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p250062","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p250063","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p249988","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p250015"},{"type":"object","name":"WheelZoomTool","id":"p250016","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p250017","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p250018","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p250024","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p250023","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p250025","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p250026","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p250027","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p250028","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p250034","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p250033","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p250035"},{"type":"object","name":"SaveTool","id":"p250036"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p250010","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p250011","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p250012"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p250013"}}}],"right":[{"type":"object","name":"Legend","id":"p250046","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p250047","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p250043"}]}},{"type":"object","name":"LegendItem","id":"p250057","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p250054"},{"id":"p250064"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p249991","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p249992","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p249993","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p249994","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p249995","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p249996","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p249997","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p249998","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p249999","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p250000","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p250001","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p250002","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p250003","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p250004"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p250007","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p250006","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p250005","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p250008"}}}],"center":[{"type":"object","name":"Grid","id":"p250009","attributes":{"axis":{"id":"p249991"}}},{"type":"object","name":"Grid","id":"p250014","attributes":{"dimension":1,"axis":{"id":"p250010"}}}]}},{"type":"object","name":"Div","id":"p250067","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"25ec552c-bacf-42dc-b5ce-865d74d58b18","roots":{"p250069":"e3660bb0-89b4-4d2a-a5a3-f6fac91054e5"},"root_ids":["p250069"]}];
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