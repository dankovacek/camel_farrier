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
    
    
    const element = document.getElementById("c0a1df02-414a-4b87-874a-e045e758349a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c0a1df02-414a-4b87-874a-e045e758349a' but no matching script tag was found.")
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
                  const docs_json = '{"ffe8de5f-16c0-4c73-9749-1326f9c99af8":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p345553","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p345554"}}},"roots":[{"type":"object","name":"Column","id":"p345698","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p345695","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p345694","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p345687","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p345577"},{"type":"object","name":"PanTool","id":"p345634"}]}},{"type":"object","name":"ToolProxy","id":"p345688","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p345578","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p345635","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p345689","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p345579","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p345580","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p345586","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p345585","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p345636","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p345637","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p345643","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p345642","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p345690","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p345587"},{"type":"object","name":"ResetTool","id":"p345644"}]}},{"type":"object","name":"SaveTool","id":"p345691"},{"type":"object","name":"ToolProxy","id":"p345692","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p345610","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p345693","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p345686","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p345555","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p345556"},"y_range":{"type":"object","name":"DataRange1d","id":"p345557"},"x_scale":{"type":"object","name":"LinearScale","id":"p345565"},"y_scale":{"type":"object","name":"LogScale","id":"p345566"},"title":{"type":"object","name":"Title","id":"p345558","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p345595","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345589","attributes":{"selected":{"type":"object","name":"Selection","id":"p345590","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345591"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+t7bNH32ELNoQ9MmzmsAgMHKN/NoUjmeKHMcW+oeICDLIhbGAyVD3NgAINIBwBr778+SAAAAA=="},"shape":[9],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDjwVeOLPQMDw4MqkU8g2uFh1Qf7////1++b/86eESgQ8vgtSPzAfKnHIPH/l3wvgelrizfYC///f983KcAeADaBsglIAAAA"},"shape":[9],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345596","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345597"}}},"glyph":{"type":"object","name":"Line","id":"p345592","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345593","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p345594","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p345606","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345600","attributes":{"selected":{"type":"object","name":"Selection","id":"p345601","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345602"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p345607","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345608"}}},"glyph":{"type":"object","name":"Line","id":"p345603","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345604","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p345605","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p345564","attributes":{"tools":[{"id":"p345577"},{"id":"p345578"},{"id":"p345579"},{"id":"p345587"},{"type":"object","name":"SaveTool","id":"p345588"},{"id":"p345610"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p345572","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p345573","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p345574"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p345575"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p345567","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p345568","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p345569"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p345570"}}}],"center":[{"type":"object","name":"Grid","id":"p345571","attributes":{"axis":{"id":"p345567"}}},{"type":"object","name":"Grid","id":"p345576","attributes":{"dimension":1,"axis":{"id":"p345572"}}},{"type":"object","name":"Legend","id":"p345598","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p345599","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p345595"}]}},{"type":"object","name":"LegendItem","id":"p345609","attributes":{"label":{"type":"value","value":"Annual (n=0)"},"renderers":[{"id":"p345606"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p345611","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p345621","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p345613"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p345622"},"y_scale":{"type":"object","name":"LinearScale","id":"p345623"},"title":{"type":"object","name":"Title","id":"p345614","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p345652","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345646","attributes":{"selected":{"type":"object","name":"Selection","id":"p345647","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345648"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46YbXgZ/sz545o2M16bn9fyC45HvJXvj///u+SQH2DAT0AwBd2zSCYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345653","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345654"}}},"glyph":{"type":"object","name":"Line","id":"p345649","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345650","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p345651","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p345661","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345655","attributes":{"selected":{"type":"object","name":"Selection","id":"p345656","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345657"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46YbXgZ/sz545o2M16bn9fyC45HvJXvj///u+SQH2DAT0AwBd2zSCYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345662","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345663"}}},"glyph":{"type":"object","name":"Line","id":"p345658","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345659","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p345660","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p345672","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345666","attributes":{"selected":{"type":"object","name":"Selection","id":"p345667","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345668"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46YbXgZ/sz545o2M16bn9fyC45HvJXvj///u+SQH2DAT0AwBd2zSCYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345673","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345674"}}},"glyph":{"type":"object","name":"Line","id":"p345669","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345670","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p345671","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p345682","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345676","attributes":{"selected":{"type":"object","name":"Selection","id":"p345677","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345678"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p345683","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345684"}}},"glyph":{"type":"object","name":"Line","id":"p345679","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345680","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p345681","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p345620","attributes":{"tools":[{"id":"p345634"},{"id":"p345635"},{"id":"p345636"},{"id":"p345644"},{"type":"object","name":"SaveTool","id":"p345645"},{"id":"p345686"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p345629","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p345630","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p345631"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p345632"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p345624","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p345625"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p345626"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p345627"}}}],"center":[{"type":"object","name":"Grid","id":"p345628","attributes":{"axis":{"id":"p345624"}}},{"type":"object","name":"Grid","id":"p345633","attributes":{"dimension":1,"axis":{"id":"p345629"}}},{"type":"object","name":"Legend","id":"p345664","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p345665","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p345661"}]}},{"type":"object","name":"LegendItem","id":"p345675","attributes":{"label":{"type":"value","value":"Median Year (1974)"},"renderers":[{"id":"p345672"}]}},{"type":"object","name":"LegendItem","id":"p345685","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p345682"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p345697","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"ffe8de5f-16c0-4c73-9749-1326f9c99af8","roots":{"p345698":"c0a1df02-414a-4b87-874a-e045e758349a"},"root_ids":["p345698"]}];
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