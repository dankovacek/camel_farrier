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
    
    
    const element = document.getElementById("b54cdefe-d965-42f6-9c83-479232b02b51");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b54cdefe-d965-42f6-9c83-479232b02b51' but no matching script tag was found.")
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
                  const docs_json = '{"002e85a1-dc0d-4f1a-9d48-9c885df7d324":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p445678","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p445679"}}},"roots":[{"type":"object","name":"Column","id":"p445823","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p445820","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p445819","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p445812","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p445702"},{"type":"object","name":"PanTool","id":"p445759"}]}},{"type":"object","name":"ToolProxy","id":"p445813","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p445703","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p445760","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p445814","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p445704","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p445705","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p445711","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p445710","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p445761","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p445762","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p445768","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p445767","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p445815","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p445712"},{"type":"object","name":"ResetTool","id":"p445769"}]}},{"type":"object","name":"SaveTool","id":"p445816"},{"type":"object","name":"ToolProxy","id":"p445817","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p445735","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p445818","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p445811","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p445680","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p445681"},"y_range":{"type":"object","name":"DataRange1d","id":"p445682"},"x_scale":{"type":"object","name":"LinearScale","id":"p445690"},"y_scale":{"type":"object","name":"LogScale","id":"p445691"},"title":{"type":"object","name":"Title","id":"p445683","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p445720","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p445714","attributes":{"selected":{"type":"object","name":"Selection","id":"p445715","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p445716"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+t7bNH32ELNAUgAkZnDKjBwgPLdHIpkjhfKHPeGigc4yIK4hcFQ+TAHBjCIdAAAa++/PkgAAAA="},"shape":[9],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDjwVeOLPQMDw4MqkU8g2uFh1Qf7////1++b/86eESgQ8vgtSPzAfKnHIPH/l3wvgelrizfYC///f983KcAeADaBsglIAAAA"},"shape":[9],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p445721","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p445722"}}},"glyph":{"type":"object","name":"Line","id":"p445717","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p445718","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p445719","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p445731","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p445725","attributes":{"selected":{"type":"object","name":"Selection","id":"p445726","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p445727"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p445732","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p445733"}}},"glyph":{"type":"object","name":"Line","id":"p445728","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p445729","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p445730","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p445689","attributes":{"tools":[{"id":"p445702"},{"id":"p445703"},{"id":"p445704"},{"id":"p445712"},{"type":"object","name":"SaveTool","id":"p445713"},{"id":"p445735"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p445697","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p445698","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p445699"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p445700"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p445692","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p445693","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p445694"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p445695"}}}],"center":[{"type":"object","name":"Grid","id":"p445696","attributes":{"axis":{"id":"p445692"}}},{"type":"object","name":"Grid","id":"p445701","attributes":{"dimension":1,"axis":{"id":"p445697"}}},{"type":"object","name":"Legend","id":"p445723","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p445724","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p445720"}]}},{"type":"object","name":"LegendItem","id":"p445734","attributes":{"label":{"type":"value","value":"Annual (n=0)"},"renderers":[{"id":"p445731"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p445736","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p445746","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p445738"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p445747"},"y_scale":{"type":"object","name":"LinearScale","id":"p445748"},"title":{"type":"object","name":"Title","id":"p445739","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p445777","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p445771","attributes":{"selected":{"type":"object","name":"Selection","id":"p445772","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p445773"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKO93wOvCT/dkzZ3SsJj23/w8El3wv2Qv//3/fNynAHo8+sHkAXds0gmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p445778","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p445779"}}},"glyph":{"type":"object","name":"Line","id":"p445774","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p445775","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p445776","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p445786","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p445780","attributes":{"selected":{"type":"object","name":"Selection","id":"p445781","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p445782"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKO93wOvCT/dkzZ3SsJj23/w8El3wv2Qv//3/fNynAHo8+sHkAXds0gmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p445787","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p445788"}}},"glyph":{"type":"object","name":"Line","id":"p445783","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p445784","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p445785","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p445797","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p445791","attributes":{"selected":{"type":"object","name":"Selection","id":"p445792","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p445793"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKO93wOvCT/dkzZ3SsJj23/w8El3wv2Qv//3/fNynAHo8+sHkAXds0gmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p445798","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p445799"}}},"glyph":{"type":"object","name":"Line","id":"p445794","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p445795","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p445796","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p445807","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p445801","attributes":{"selected":{"type":"object","name":"Selection","id":"p445802","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p445803"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p445808","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p445809"}}},"glyph":{"type":"object","name":"Line","id":"p445804","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p445805","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p445806","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p445745","attributes":{"tools":[{"id":"p445759"},{"id":"p445760"},{"id":"p445761"},{"id":"p445769"},{"type":"object","name":"SaveTool","id":"p445770"},{"id":"p445811"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p445754","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p445755","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p445756"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p445757"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p445749","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p445750"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p445751"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p445752"}}}],"center":[{"type":"object","name":"Grid","id":"p445753","attributes":{"axis":{"id":"p445749"}}},{"type":"object","name":"Grid","id":"p445758","attributes":{"dimension":1,"axis":{"id":"p445754"}}},{"type":"object","name":"Legend","id":"p445789","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p445790","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p445786"}]}},{"type":"object","name":"LegendItem","id":"p445800","attributes":{"label":{"type":"value","value":"Median Year (1974)"},"renderers":[{"id":"p445797"}]}},{"type":"object","name":"LegendItem","id":"p445810","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p445807"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p445822","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"002e85a1-dc0d-4f1a-9d48-9c885df7d324","roots":{"p445823":"b54cdefe-d965-42f6-9c83-479232b02b51"},"root_ids":["p445823"]}];
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