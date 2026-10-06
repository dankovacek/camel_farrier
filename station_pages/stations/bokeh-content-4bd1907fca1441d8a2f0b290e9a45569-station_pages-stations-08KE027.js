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
    
    
    const element = document.getElementById("bf8d2e61-9e26-4dc1-bc84-df5c8a5d900e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bf8d2e61-9e26-4dc1-bc84-df5c8a5d900e' but no matching script tag was found.")
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
                  const docs_json = '{"01d527db-15ca-4c04-bed8-641ad7afbc30":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p445580","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p445581"}}},"roots":[{"type":"object","name":"Column","id":"p445672","attributes":{"children":[{"type":"object","name":"Figure","id":"p445582","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p445583"},"y_range":{"type":"object","name":"DataRange1d","id":"p445584"},"x_scale":{"type":"object","name":"LinearScale","id":"p445592"},"y_scale":{"type":"object","name":"LinearScale","id":"p445593"},"title":{"type":"object","name":"Title","id":"p445585","attributes":{"text":"08KE027 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p445646","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p445640","attributes":{"selected":{"type":"object","name":"Selection","id":"p445641","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p445642"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEhY2eXoBAAFPmFRCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p445647","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p445648"}}},"glyph":{"type":"object","name":"VArea","id":"p445643","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":1.285199990272522},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p445644","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":1.285199990272522},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p445645","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":1.285199990272522},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p445657","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p445651","attributes":{"selected":{"type":"object","name":"Selection","id":"p445652","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p445653"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3Fe0wMAADA4VuK5FAtlehQoXRIkryuupRKSEJaKkmUlqJVSNLDUiRJkqP0WkIl5JUiaUnIK6FiOa+ENKpZxfy+fz6BQCD++NBSKhAIEoTPWG7azFbrWlm2t5378j+xa0Mnl3b/ZOHYXt5i2c/tZQKr/6vaDWHJKyUODFTmzL8qXJc6knsmq7LBdXV2cRrD0W+1uHi7Drco6bLKiQlsIdZjvyoDTnOZytUfjLgrQswi4Ux2yprFu0zNuPCeOTe5zWPFzgVsulfC3urWnJxvwxUWdtzxwJ61vZayXfcyDo135hztVdx4bjUPStxY/NSd3Tet54Q+Ly5P8mG5aBOrl21mK9sADmoOZNnWbVw/GMJ9R0J5yuRwdr22k2OWRnJpWxS3hexjoVIcz8/Yz1uMD3B6ZRLXrEzmbnkKT4w4ystHpHPk6QwumnWSm2tO8VC3bDb7msM+UfmcolbIlXlF3Dn3Aus8KGF7zzIO+3mZ8+Ku8lOtGyw4V8EzJFXs8eQOJ/rW8LXeWv6YeJ81RA0svfiIgxc/4dMvn3FDQBP/GWhmwyNveI1BG8ddfcdlju/5XesHHhXymRcqfuWA4984Y1oX197q5l/Ov1lP3svO4X84SmWAz5/6y69NFKz/r1yjyOZrh7Fvx3BO3SPk26qj+XuuGo+fq8GO9ZocsX4sF3SN4+exIlbQmsQmRfrsuWgKH2w05Bsbjflzz3TWTDThxbqzeXvpHM62seBHTfO5338RTxuwZLcUKe/Xt+XL5Uu43cGRVVudWBK8ggOHuHBmuivXGa3lnop1bODswS7vPTk6bAMXD/flFpkfq5j4s8Xdrey3JojTvgRzdeQO7hodxqLcCHYy38277u/hQo9obvoRw4qx8WyqmcDeZxM5eeEhrnh8mDt8Ulm7J43tDhzn0PGZnFMi40ZpFg++OMNi/zx27y/ghMNnuVzvPMuvFLO6w0W2arnEQdvKWaZwneuP3eQ+w0pr6T9m1Qs5wAUAAA=="},"shape":[184],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqeNEHvmp8scfiL4eHVR8wxP///1+/b/47DHGg/gdVIp+wieMNL0agbMjjt/j0HZgv9RifPIr5QPf9v7Z4A9Hqsfgbr3vprR7kn0u+l4aNf4gNP+H//+/7JgWMOH8TGz6DSx3ENYO5XAQAJB5MPcAFAAA="},"shape":[184],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p445658","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p445659"}}},"glyph":{"type":"object","name":"Line","id":"p445654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p445655","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p445656","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p445667","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p445661","attributes":{"selected":{"type":"object","name":"Selection","id":"p445662","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p445663"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3Fe0wMAADA4VuK5FAtlehQoXRIkryuupRKSEJaKkmUlqJVSNLDUiRJkqP0WkIl5JUiaUnIK6FiOa+ENKpZxfy+fz6BQCD++NBSKhAIEoTPWG7azFbrWlm2t5378j+xa0Mnl3b/ZOHYXt5i2c/tZQKr/6vaDWHJKyUODFTmzL8qXJc6knsmq7LBdXV2cRrD0W+1uHi7Drco6bLKiQlsIdZjvyoDTnOZytUfjLgrQswi4Ux2yprFu0zNuPCeOTe5zWPFzgVsulfC3urWnJxvwxUWdtzxwJ61vZayXfcyDo135hztVdx4bjUPStxY/NSd3Tet54Q+Ly5P8mG5aBOrl21mK9sADmoOZNnWbVw/GMJ9R0J5yuRwdr22k2OWRnJpWxS3hexjoVIcz8/Yz1uMD3B6ZRLXrEzmbnkKT4w4ystHpHPk6QwumnWSm2tO8VC3bDb7msM+UfmcolbIlXlF3Dn3Aus8KGF7zzIO+3mZ8+Ku8lOtGyw4V8EzJFXs8eQOJ/rW8LXeWv6YeJ81RA0svfiIgxc/4dMvn3FDQBP/GWhmwyNveI1BG8ddfcdlju/5XesHHhXymRcqfuWA4984Y1oX197q5l/Ov1lP3svO4X84SmWAz5/6y69NFKz/r1yjyOZrh7Fvx3BO3SPk26qj+XuuGo+fq8GO9ZocsX4sF3SN4+exIlbQmsQmRfrsuWgKH2w05Bsbjflzz3TWTDThxbqzeXvpHM62seBHTfO5338RTxuwZLcUKe/Xt+XL5Uu43cGRVVudWBK8ggOHuHBmuivXGa3lnop1bODswS7vPTk6bAMXD/flFpkfq5j4s8Xdrey3JojTvgRzdeQO7hodxqLcCHYy38277u/hQo9obvoRw4qx8WyqmcDeZxM5eeEhrnh8mDt8Ulm7J43tDhzn0PGZnFMi40ZpFg++OMNi/zx27y/ghMNnuVzvPMuvFLO6w0W2arnEQdvKWaZwneuP3eQ+w0pr6T9m1Qs5wAUAAA=="},"shape":[184],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqeNEHvmp8scfiL4eHVR8wxP///1+/b/47DHGg/gdVIp+wieMNL0agbMjjt/j0HZgv9RifPIr5QPf9v7Z4A9Hqsfgbr3vprR7kn0u+l4aNf4gNP+H//+/7JgWMOH8TGz6DSx3ENYO5XAQAJB5MPcAFAAA="},"shape":[184],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p445668","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p445669"}}},"glyph":{"type":"object","name":"Line","id":"p445664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p445665","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p445666","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p445591","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p445618"},{"type":"object","name":"WheelZoomTool","id":"p445619","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p445620","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p445621","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p445627","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p445626","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p445628","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p445629","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p445630","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p445631","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p445637","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p445636","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p445638"},{"type":"object","name":"SaveTool","id":"p445639"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p445613","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p445614","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p445615"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p445616"}}}],"right":[{"type":"object","name":"Legend","id":"p445649","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p445650","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p445646"}]}},{"type":"object","name":"LegendItem","id":"p445660","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p445657"},{"id":"p445667"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p445594","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p445595","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p445596","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p445597","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p445598","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p445599","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p445600","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p445601","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p445602","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p445603","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p445604","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p445605","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p445606","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p445607"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p445610","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p445609","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p445608","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p445611"}}}],"center":[{"type":"object","name":"Grid","id":"p445612","attributes":{"axis":{"id":"p445594"}}},{"type":"object","name":"Grid","id":"p445617","attributes":{"dimension":1,"axis":{"id":"p445613"}}}]}},{"type":"object","name":"Div","id":"p445670","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"01d527db-15ca-4c04-bed8-641ad7afbc30","roots":{"p445672":"bf8d2e61-9e26-4dc1-bc84-df5c8a5d900e"},"root_ids":["p445672"]}];
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