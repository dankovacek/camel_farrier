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
    
    
    const element = document.getElementById("af8ec460-9092-47c9-a56c-b834d40e79ea");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'af8ec460-9092-47c9-a56c-b834d40e79ea' but no matching script tag was found.")
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
                  const docs_json = '{"51fb1a4b-cd5c-44f1-88a5-f6129e9fd0c5":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p345194","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p345195"}}},"roots":[{"type":"object","name":"Column","id":"p345339","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p345336","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p345335","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p345328","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p345218"},{"type":"object","name":"PanTool","id":"p345275"}]}},{"type":"object","name":"ToolProxy","id":"p345329","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p345219","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p345276","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p345330","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p345220","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p345221","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p345227","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p345226","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p345277","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p345278","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p345284","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p345283","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p345331","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p345228"},{"type":"object","name":"ResetTool","id":"p345285"}]}},{"type":"object","name":"SaveTool","id":"p345332"},{"type":"object","name":"ToolProxy","id":"p345333","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p345251","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p345334","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p345327","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p345196","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p345197"},"y_range":{"type":"object","name":"DataRange1d","id":"p345198"},"x_scale":{"type":"object","name":"LinearScale","id":"p345206"},"y_scale":{"type":"object","name":"LogScale","id":"p345207"},"title":{"type":"object","name":"Title","id":"p345199","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p345236","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345230","attributes":{"selected":{"type":"object","name":"Selection","id":"p345231","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345232"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+t7bNH32ELNoQ9MmzmsAgMHKN/NoUjmeKHMcW+oeICDLIhbGAyVD3NgAINIBwBr778+SAAAAA=="},"shape":[9],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDjwVeOLPQMDw4MqkU8g2uFh1Qf7////1++b/86eESgQ8vgtSPzAfKnHIPH/l3wvgelrizfYC///f983KcAeADaBsglIAAAA"},"shape":[9],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345237","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345238"}}},"glyph":{"type":"object","name":"Line","id":"p345233","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345234","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p345235","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p345247","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345241","attributes":{"selected":{"type":"object","name":"Selection","id":"p345242","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345243"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p345248","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345249"}}},"glyph":{"type":"object","name":"Line","id":"p345244","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345245","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p345246","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p345205","attributes":{"tools":[{"id":"p345218"},{"id":"p345219"},{"id":"p345220"},{"id":"p345228"},{"type":"object","name":"SaveTool","id":"p345229"},{"id":"p345251"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p345213","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p345214","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p345215"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p345216"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p345208","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p345209","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p345210"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p345211"}}}],"center":[{"type":"object","name":"Grid","id":"p345212","attributes":{"axis":{"id":"p345208"}}},{"type":"object","name":"Grid","id":"p345217","attributes":{"dimension":1,"axis":{"id":"p345213"}}},{"type":"object","name":"Legend","id":"p345239","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p345240","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p345236"}]}},{"type":"object","name":"LegendItem","id":"p345250","attributes":{"label":{"type":"value","value":"Annual (n=0)"},"renderers":[{"id":"p345247"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p345252","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p345262","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p345254"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p345263"},"y_scale":{"type":"object","name":"LinearScale","id":"p345264"},"title":{"type":"object","name":"Title","id":"p345255","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p345293","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345287","attributes":{"selected":{"type":"object","name":"Selection","id":"p345288","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345289"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46YbXgZ/sz545o2M16bn9fyC45HvJXvj///u+SQH2DAT0AwBd2zSCYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345294","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345295"}}},"glyph":{"type":"object","name":"Line","id":"p345290","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345291","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p345292","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p345302","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345296","attributes":{"selected":{"type":"object","name":"Selection","id":"p345297","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345298"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46YbXgZ/sz545o2M16bn9fyC45HvJXvj///u+SQH2DAT0AwBd2zSCYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345303","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345304"}}},"glyph":{"type":"object","name":"Line","id":"p345299","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345300","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p345301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p345313","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345307","attributes":{"selected":{"type":"object","name":"Selection","id":"p345308","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345309"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qy46YbXgZ/sz545o2M16bn9fyC45HvJXvj///u+SQH2DAT0AwBd2zSCYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p345314","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345315"}}},"glyph":{"type":"object","name":"Line","id":"p345310","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345311","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p345312","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p345323","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p345317","attributes":{"selected":{"type":"object","name":"Selection","id":"p345318","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p345319"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p345324","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p345325"}}},"glyph":{"type":"object","name":"Line","id":"p345320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p345321","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p345322","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p345261","attributes":{"tools":[{"id":"p345275"},{"id":"p345276"},{"id":"p345277"},{"id":"p345285"},{"type":"object","name":"SaveTool","id":"p345286"},{"id":"p345327"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p345270","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p345271","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p345272"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p345273"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p345265","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p345266"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p345267"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p345268"}}}],"center":[{"type":"object","name":"Grid","id":"p345269","attributes":{"axis":{"id":"p345265"}}},{"type":"object","name":"Grid","id":"p345274","attributes":{"dimension":1,"axis":{"id":"p345270"}}},{"type":"object","name":"Legend","id":"p345305","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p345306","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p345302"}]}},{"type":"object","name":"LegendItem","id":"p345316","attributes":{"label":{"type":"value","value":"Median Year (1974)"},"renderers":[{"id":"p345313"}]}},{"type":"object","name":"LegendItem","id":"p345326","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p345323"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p345338","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"51fb1a4b-cd5c-44f1-88a5-f6129e9fd0c5","roots":{"p345339":"af8ec460-9092-47c9-a56c-b834d40e79ea"},"root_ids":["p345339"]}];
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