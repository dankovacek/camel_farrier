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
    
    
    const element = document.getElementById("c05a8dc8-577b-483b-9152-ef9733a1b70b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c05a8dc8-577b-483b-9152-ef9733a1b70b' but no matching script tag was found.")
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
                  const docs_json = '{"6becf0d7-0a56-4c63-87ac-4544c29f53d3":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p345455","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p345456"}}},"roots":[{"type":"object","name":"Column","id":"p345547","attributes":{"children":[{"type":"object","name":"Figure","id":"p345457","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p345458"},"y_range":{"type":"object","name":"DataRange1d","id":"p345459"},"x_scale":{"type":"object","name":"LinearScale","id":"p345467"},"y_scale":{"type":"object","name":"LinearScale","id":"p345468"},"title":{"type":"object","name":"Title","id":"p345460","attributes":{"text":"08KE027 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p345521","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345515","attributes":{"selected":{"type":"object","name":"Selection","id":"p345516","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345517"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEhY2eXoBAAFPmFRCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345522","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345523"}}},"glyph":{"type":"object","name":"VArea","id":"p345518","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":1.285199990272522},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p345519","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":1.285199990272522},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p345520","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":1.285199990272522},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p345532","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345526","attributes":{"selected":{"type":"object","name":"Selection","id":"p345527","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345528"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3Fe0wMAADA4VuK5FAtlehQoXRIkryuupRKSEJaKkmUlqJVSNLDUiRJkqP0WkIl5JUiaUnIK6FiOa+ENKpZxfy+fz6BQCD++NBSKhAIEoTPWG7azFbrWlm2t5378j+xa0Mnl3b/ZOHYXt5i2c/tZQKr/6vaDWHJKyUODFTmzL8qXJc6knsmq7LBdXV2cRrD0W+1uHi7Drco6bLKiQlsIdZjvyoDTnOZytUfjLgrQswi4Ux2yprFu0zNuPCeOTe5zWPFzgVsulfC3urWnJxvwxUWdtzxwJ61vZayXfcyDo135hztVdx4bjUPStxY/NSd3Tet54Q+Ly5P8mG5aBOrl21mK9sADmoOZNnWbVw/GMJ9R0J5yuRwdr22k2OWRnJpWxS3hexjoVIcz8/Yz1uMD3B6ZRLXrEzmbnkKT4w4ystHpHPk6QwumnWSm2tO8VC3bDb7msM+UfmcolbIlXlF3Dn3Aus8KGF7zzIO+3mZ8+Ku8lOtGyw4V8EzJFXs8eQOJ/rW8LXeWv6YeJ81RA0svfiIgxc/4dMvn3FDQBP/GWhmwyNveI1BG8ddfcdlju/5XesHHhXymRcqfuWA4984Y1oX197q5l/Ov1lP3svO4X84SmWAz5/6y69NFKz/r1yjyOZrh7Fvx3BO3SPk26qj+XuuGo+fq8GO9ZocsX4sF3SN4+exIlbQmsQmRfrsuWgKH2w05Bsbjflzz3TWTDThxbqzeXvpHM62seBHTfO5338RTxuwZLcUKe/Xt+XL5Uu43cGRVVudWBK8ggOHuHBmuivXGa3lnop1bODswS7vPTk6bAMXD/flFpkfq5j4s8Xdrey3JojTvgRzdeQO7hodxqLcCHYy38277u/hQo9obvoRw4qx8WyqmcDeZxM5eeEhrnh8mDt8Ulm7J43tDhzn0PGZnFMi40ZpFg++OMNi/zx27y/ghMNnuVzvPMuvFLO6w0W2arnEQdvKWaZwneuP3eQ+w0pr6T9m1Qs5wAUAAA=="},"shape":[184],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzDjz7wVeOLPRZxh4dVHzDE////X79v/jts6h9UiXyyJ9V+RiAZ8vgtPn0H5ks9JtpcoPv+X1u8wX64xA/IP5d8L9kzDN/0h5UW/v//vm9SwIjz99CkYWDwuhMAJB5MPcAFAAA="},"shape":[184],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345533","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345534"}}},"glyph":{"type":"object","name":"Line","id":"p345529","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345530","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p345531","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p345542","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345536","attributes":{"selected":{"type":"object","name":"Selection","id":"p345537","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345538"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3Fe0wMAADA4VuK5FAtlehQoXRIkryuupRKSEJaKkmUlqJVSNLDUiRJkqP0WkIl5JUiaUnIK6FiOa+ENKpZxfy+fz6BQCD++NBSKhAIEoTPWG7azFbrWlm2t5378j+xa0Mnl3b/ZOHYXt5i2c/tZQKr/6vaDWHJKyUODFTmzL8qXJc6knsmq7LBdXV2cRrD0W+1uHi7Drco6bLKiQlsIdZjvyoDTnOZytUfjLgrQswi4Ux2yprFu0zNuPCeOTe5zWPFzgVsulfC3urWnJxvwxUWdtzxwJ61vZayXfcyDo135hztVdx4bjUPStxY/NSd3Tet54Q+Ly5P8mG5aBOrl21mK9sADmoOZNnWbVw/GMJ9R0J5yuRwdr22k2OWRnJpWxS3hexjoVIcz8/Yz1uMD3B6ZRLXrEzmbnkKT4w4ystHpHPk6QwumnWSm2tO8VC3bDb7msM+UfmcolbIlXlF3Dn3Aus8KGF7zzIO+3mZ8+Ku8lOtGyw4V8EzJFXs8eQOJ/rW8LXeWv6YeJ81RA0svfiIgxc/4dMvn3FDQBP/GWhmwyNveI1BG8ddfcdlju/5XesHHhXymRcqfuWA4984Y1oX197q5l/Ov1lP3svO4X84SmWAz5/6y69NFKz/r1yjyOZrh7Fvx3BO3SPk26qj+XuuGo+fq8GO9ZocsX4sF3SN4+exIlbQmsQmRfrsuWgKH2w05Bsbjflzz3TWTDThxbqzeXvpHM62seBHTfO5338RTxuwZLcUKe/Xt+XL5Uu43cGRVVudWBK8ggOHuHBmuivXGa3lnop1bODswS7vPTk6bAMXD/flFpkfq5j4s8Xdrey3JojTvgRzdeQO7hodxqLcCHYy38277u/hQo9obvoRw4qx8WyqmcDeZxM5eeEhrnh8mDt8Ulm7J43tDhzn0PGZnFMi40ZpFg++OMNi/zx27y/ghMNnuVzvPMuvFLO6w0W2arnEQdvKWaZwneuP3eQ+w0pr6T9m1Qs5wAUAAA=="},"shape":[184],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QzDjz7wVeOLPRZxh4dVHzDE////X79v/jts6h9UiXyyJ9V+RiAZ8vgtPn0H5ks9JtpcoPv+X1u8wX64xA/IP5d8L9kzDN/0h5UW/v//vm9SwIjz99CkYWDwuhMAJB5MPcAFAAA="},"shape":[184],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345543","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345544"}}},"glyph":{"type":"object","name":"Line","id":"p345539","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345540","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p345541","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p345466","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p345493"},{"type":"object","name":"WheelZoomTool","id":"p345494","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p345495","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p345496","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p345502","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p345501","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p345503","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p345504","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p345505","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p345506","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p345512","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p345511","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p345513"},{"type":"object","name":"SaveTool","id":"p345514"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p345488","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p345489","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p345490"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p345491"}}}],"right":[{"type":"object","name":"Legend","id":"p345524","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p345525","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p345521"}]}},{"type":"object","name":"LegendItem","id":"p345535","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p345532"},{"id":"p345542"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p345469","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p345470","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p345471","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p345472","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p345473","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p345474","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p345475","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p345476","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p345477","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p345478","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p345479","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p345480","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p345481","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p345482"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p345485","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p345484","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p345483","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p345486"}}}],"center":[{"type":"object","name":"Grid","id":"p345487","attributes":{"axis":{"id":"p345469"}}},{"type":"object","name":"Grid","id":"p345492","attributes":{"dimension":1,"axis":{"id":"p345488"}}}]}},{"type":"object","name":"Div","id":"p345545","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"6becf0d7-0a56-4c63-87ac-4544c29f53d3","roots":{"p345547":"c05a8dc8-577b-483b-9152-ef9733a1b70b"},"root_ids":["p345547"]}];
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