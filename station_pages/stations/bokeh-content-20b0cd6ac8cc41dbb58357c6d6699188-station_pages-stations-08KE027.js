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
    
    
    const element = document.getElementById("da8a3537-ed84-4947-a344-c977b8d2e7ff");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'da8a3537-ed84-4947-a344-c977b8d2e7ff' but no matching script tag was found.")
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
                  const docs_json = '{"79ce104b-b1c7-4dca-a0ea-d63c17789c31":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p249518","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p249519"}}},"roots":[{"type":"object","name":"Column","id":"p249663","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p249660","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p249659","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p249652","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p249542"},{"type":"object","name":"PanTool","id":"p249599"}]}},{"type":"object","name":"ToolProxy","id":"p249653","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p249543","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p249600","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p249654","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p249544","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p249545","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p249551","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p249550","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p249601","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p249602","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p249608","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p249607","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p249655","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p249552"},{"type":"object","name":"ResetTool","id":"p249609"}]}},{"type":"object","name":"SaveTool","id":"p249656"},{"type":"object","name":"ToolProxy","id":"p249657","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p249575","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p249658","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p249651","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p249520","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p249521"},"y_range":{"type":"object","name":"DataRange1d","id":"p249522"},"x_scale":{"type":"object","name":"LinearScale","id":"p249530"},"y_scale":{"type":"object","name":"LogScale","id":"p249531"},"title":{"type":"object","name":"Title","id":"p249523","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p249560","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p249554","attributes":{"selected":{"type":"object","name":"Selection","id":"p249555","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p249556"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+t7bNH32ELNAUgAkZnDKjBwgPLdHIpkjhfKHPeGigc4yIK4hcFQ+TAHBjCIdAAAa++/PkgAAAA="},"shape":[9],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDjwVeOLPQMDw4MqkU8g2uFh1Qf7////1++b/86eESgQ8vgtSPzAfKnHIPH/l3wvgelrizfYC///f983KcAeADaBsglIAAAA"},"shape":[9],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p249561","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p249562"}}},"glyph":{"type":"object","name":"Line","id":"p249557","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p249558","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p249559","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p249571","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p249565","attributes":{"selected":{"type":"object","name":"Selection","id":"p249566","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p249567"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p249572","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p249573"}}},"glyph":{"type":"object","name":"Line","id":"p249568","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p249569","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p249570","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p249529","attributes":{"tools":[{"id":"p249542"},{"id":"p249543"},{"id":"p249544"},{"id":"p249552"},{"type":"object","name":"SaveTool","id":"p249553"},{"id":"p249575"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p249537","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p249538","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p249539"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p249540"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p249532","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p249533","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p249534"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p249535"}}}],"center":[{"type":"object","name":"Grid","id":"p249536","attributes":{"axis":{"id":"p249532"}}},{"type":"object","name":"Grid","id":"p249541","attributes":{"dimension":1,"axis":{"id":"p249537"}}},{"type":"object","name":"Legend","id":"p249563","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p249564","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p249560"}]}},{"type":"object","name":"LegendItem","id":"p249574","attributes":{"label":{"type":"value","value":"Annual (n=0)"},"renderers":[{"id":"p249571"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p249576","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p249586","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p249578"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p249587"},"y_scale":{"type":"object","name":"LinearScale","id":"p249588"},"title":{"type":"object","name":"Title","id":"p249579","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p249617","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p249611","attributes":{"selected":{"type":"object","name":"Selection","id":"p249612","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p249613"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKO93wOvCT/dkzZ3SsJj23/w8El3wv2Qv//3/fNynAHo8+sHkAXds0gmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p249618","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p249619"}}},"glyph":{"type":"object","name":"Line","id":"p249614","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p249615","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p249616","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p249626","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p249620","attributes":{"selected":{"type":"object","name":"Selection","id":"p249621","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p249622"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKO93wOvCT/dkzZ3SsJj23/w8El3wv2Qv//3/fNynAHo8+sHkAXds0gmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p249627","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p249628"}}},"glyph":{"type":"object","name":"Line","id":"p249623","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p249624","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p249625","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p249637","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p249631","attributes":{"selected":{"type":"object","name":"Selection","id":"p249632","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p249633"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKO93wOvCT/dkzZ3SsJj23/w8El3wv2Qv//3/fNynAHo8+sHkAXds0gmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p249638","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p249639"}}},"glyph":{"type":"object","name":"Line","id":"p249634","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p249635","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p249636","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p249647","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p249641","attributes":{"selected":{"type":"object","name":"Selection","id":"p249642","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p249643"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p249648","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p249649"}}},"glyph":{"type":"object","name":"Line","id":"p249644","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p249645","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p249646","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p249585","attributes":{"tools":[{"id":"p249599"},{"id":"p249600"},{"id":"p249601"},{"id":"p249609"},{"type":"object","name":"SaveTool","id":"p249610"},{"id":"p249651"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p249594","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p249595","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p249596"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p249597"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p249589","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p249590"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p249591"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p249592"}}}],"center":[{"type":"object","name":"Grid","id":"p249593","attributes":{"axis":{"id":"p249589"}}},{"type":"object","name":"Grid","id":"p249598","attributes":{"dimension":1,"axis":{"id":"p249594"}}},{"type":"object","name":"Legend","id":"p249629","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p249630","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p249626"}]}},{"type":"object","name":"LegendItem","id":"p249640","attributes":{"label":{"type":"value","value":"Median Year (1974)"},"renderers":[{"id":"p249637"}]}},{"type":"object","name":"LegendItem","id":"p249650","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p249647"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p249662","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"79ce104b-b1c7-4dca-a0ea-d63c17789c31","roots":{"p249663":"da8a3537-ed84-4947-a344-c977b8d2e7ff"},"root_ids":["p249663"]}];
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