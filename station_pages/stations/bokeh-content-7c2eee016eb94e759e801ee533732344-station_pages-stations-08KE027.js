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
    
    
    const element = document.getElementById("d9376d8a-a505-4240-88da-2ba4405de6d6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd9376d8a-a505-4240-88da-2ba4405de6d6' but no matching script tag was found.")
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
                  const docs_json = '{"4bf791db-4a6f-4434-ac6b-1507ed350789":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p250075","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p250076"}}},"roots":[{"type":"object","name":"Column","id":"p250220","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p250217","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p250216","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p250209","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p250099"},{"type":"object","name":"PanTool","id":"p250156"}]}},{"type":"object","name":"ToolProxy","id":"p250210","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p250100","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p250157","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p250211","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p250101","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p250102","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p250108","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p250107","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p250158","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p250159","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p250165","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p250164","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p250212","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p250109"},{"type":"object","name":"ResetTool","id":"p250166"}]}},{"type":"object","name":"SaveTool","id":"p250213"},{"type":"object","name":"ToolProxy","id":"p250214","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p250132","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p250215","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p250208","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p250077","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p250078"},"y_range":{"type":"object","name":"DataRange1d","id":"p250079"},"x_scale":{"type":"object","name":"LinearScale","id":"p250087"},"y_scale":{"type":"object","name":"LogScale","id":"p250088"},"title":{"type":"object","name":"Title","id":"p250080","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p250117","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p250111","attributes":{"selected":{"type":"object","name":"Selection","id":"p250112","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p250113"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+t7bNH32ELNAUgAkZnDKjBwgPLdHIpkjhfKHPeGigc4yIK4hcFQ+TAHBjCIdAAAa++/PkgAAAA="},"shape":[9],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDjwVeOLPQMDw4MqkU8g2uFh1Qf7////1++b/86eESgQ8vgtSPzAfKnHIPH/l3wvgelrizfYC///f983KcAeADaBsglIAAAA"},"shape":[9],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p250118","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p250119"}}},"glyph":{"type":"object","name":"Line","id":"p250114","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p250115","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p250116","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p250128","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p250122","attributes":{"selected":{"type":"object","name":"Selection","id":"p250123","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p250124"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p250129","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p250130"}}},"glyph":{"type":"object","name":"Line","id":"p250125","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p250126","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p250127","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p250086","attributes":{"tools":[{"id":"p250099"},{"id":"p250100"},{"id":"p250101"},{"id":"p250109"},{"type":"object","name":"SaveTool","id":"p250110"},{"id":"p250132"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p250094","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p250095","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p250096"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p250097"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p250089","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p250090","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p250091"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p250092"}}}],"center":[{"type":"object","name":"Grid","id":"p250093","attributes":{"axis":{"id":"p250089"}}},{"type":"object","name":"Grid","id":"p250098","attributes":{"dimension":1,"axis":{"id":"p250094"}}},{"type":"object","name":"Legend","id":"p250120","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p250121","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p250117"}]}},{"type":"object","name":"LegendItem","id":"p250131","attributes":{"label":{"type":"value","value":"Annual (n=0)"},"renderers":[{"id":"p250128"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p250133","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p250143","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p250135"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p250144"},"y_scale":{"type":"object","name":"LinearScale","id":"p250145"},"title":{"type":"object","name":"Title","id":"p250136","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p250174","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p250168","attributes":{"selected":{"type":"object","name":"Selection","id":"p250169","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p250170"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKO93wOvCT/dkzZ3SsJj23/w8El3wv2Qv//3/fNynAHo8+sHkAXds0gmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p250175","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p250176"}}},"glyph":{"type":"object","name":"Line","id":"p250171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p250172","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p250173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p250183","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p250177","attributes":{"selected":{"type":"object","name":"Selection","id":"p250178","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p250179"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKO93wOvCT/dkzZ3SsJj23/w8El3wv2Qv//3/fNynAHo8+sHkAXds0gmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p250184","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p250185"}}},"glyph":{"type":"object","name":"Line","id":"p250180","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p250181","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p250182","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p250194","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p250188","attributes":{"selected":{"type":"object","name":"Selection","id":"p250189","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p250190"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKO93wOvCT/dkzZ3SsJj23/w8El3wv2Qv//3/fNynAHo8+sHkAXds0gmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p250195","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p250196"}}},"glyph":{"type":"object","name":"Line","id":"p250191","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p250192","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p250193","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p250204","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p250198","attributes":{"selected":{"type":"object","name":"Selection","id":"p250199","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p250200"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p250205","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p250206"}}},"glyph":{"type":"object","name":"Line","id":"p250201","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p250202","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p250203","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p250142","attributes":{"tools":[{"id":"p250156"},{"id":"p250157"},{"id":"p250158"},{"id":"p250166"},{"type":"object","name":"SaveTool","id":"p250167"},{"id":"p250208"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p250151","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p250152","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p250153"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p250154"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p250146","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p250147"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p250148"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p250149"}}}],"center":[{"type":"object","name":"Grid","id":"p250150","attributes":{"axis":{"id":"p250146"}}},{"type":"object","name":"Grid","id":"p250155","attributes":{"dimension":1,"axis":{"id":"p250151"}}},{"type":"object","name":"Legend","id":"p250186","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p250187","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p250183"}]}},{"type":"object","name":"LegendItem","id":"p250197","attributes":{"label":{"type":"value","value":"Median Year (1974)"},"renderers":[{"id":"p250194"}]}},{"type":"object","name":"LegendItem","id":"p250207","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p250204"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p250219","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"4bf791db-4a6f-4434-ac6b-1507ed350789","roots":{"p250220":"d9376d8a-a505-4240-88da-2ba4405de6d6"},"root_ids":["p250220"]}];
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