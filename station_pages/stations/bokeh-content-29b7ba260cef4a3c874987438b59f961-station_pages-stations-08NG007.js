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
    
    
    const element = document.getElementById("cc8f976f-e139-40ef-84e4-4f9bc230cfc4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc8f976f-e139-40ef-84e4-4f9bc230cfc4' but no matching script tag was found.")
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
                  const docs_json = '{"01c0ccf1-d67a-4b64-94ee-efb39f576948":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p535216","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p535217"}}},"roots":[{"type":"object","name":"Column","id":"p535327","attributes":{"children":[{"type":"object","name":"Figure","id":"p535218","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p535219"},"y_range":{"type":"object","name":"DataRange1d","id":"p535220"},"x_scale":{"type":"object","name":"LinearScale","id":"p535228"},"y_scale":{"type":"object","name":"LinearScale","id":"p535229"},"title":{"type":"object","name":"Title","id":"p535221","attributes":{"text":"08NG007 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p535282","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p535276","attributes":{"selected":{"type":"object","name":"Selection","id":"p535277","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p535278"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaIjMdq88xMBw4LMEmGboO+YGoh00SsB0wyFFMH0g5rwrWP57DZh2mKgFphu0b7iA5Y+2gmmGBGMw7fDrgTNYfkofmD6gZwOmGU6+dALLJ08H0w1/XYA0ANAQj+GIAAAA"},"shape":[17],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p535283","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p535284"}}},"glyph":{"type":"object","name":"VArea","id":"p535279","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p535280","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p535281","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p535293","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p535287","attributes":{"selected":{"type":"object","name":"Selection","id":"p535288","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p535289"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JQSjDYRjA4TflInFYrdSKEnEgLg4uPozNxvjzZwcRJeXioGRp5YscViu14uDgonZYiTgQqddaqZWLg8tqpYgSSREp5Hd6Do+ILc+MxbIimo6idJaiKRyO/msXp1ArK1AyZy7vn0Nb9KLGciO8ZwHNXjXawNUwf7uMEm9A471x+IM11FAryn1xiF9Joq1qRz16GOQjm2geu9CuvkZ43w7KcRiN8zXAP6VR112UmhI0p/v9vDuB+lKGkjgJ87WzaM89qNGLEP82jybpQ1uf7+N1CWW8Ds37dZDfsKiNzSi5QoCfTKD9bENN3fXyTSk0lx1op597+O9tlK0gmpYPP5/fRZ1xUH5/umPZP36o1sPYAQAA"},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p535294","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p535295"}}},"glyph":{"type":"object","name":"VArea","id":"p535290","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p535291","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p535292","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p535302","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p535296","attributes":{"selected":{"type":"object","name":"Selection","id":"p535297","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p535298"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYKh4fqniEADavKn7CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p535303","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p535304"}}},"glyph":{"type":"object","name":"VArea","id":"p535299","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p535300","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p535301","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p535312","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p535306","attributes":{"selected":{"type":"object","name":"Selection","id":"p535307","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p535308"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgOLB+2YWKQwAR6rjxCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p535313","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p535314"}}},"glyph":{"type":"object","name":"VArea","id":"p535309","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p535310","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p535311","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p535321","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p535315","attributes":{"selected":{"type":"object","name":"Selection","id":"p535316","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p535317"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p535322","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p535323"}}},"glyph":{"type":"object","name":"Line","id":"p535318","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p535319","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p535320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p535227","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p535254"},{"type":"object","name":"WheelZoomTool","id":"p535255","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p535256","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p535257","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p535263","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p535262","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p535264","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p535265","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p535266","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p535267","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p535273","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p535272","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p535274"},{"type":"object","name":"SaveTool","id":"p535275"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p535249","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p535250","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p535251"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p535252"}}}],"right":[{"type":"object","name":"Legend","id":"p535285","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p535286","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p535282"},{"id":"p535293"}]}},{"type":"object","name":"LegendItem","id":"p535305","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p535302"},{"id":"p535312"}]}},{"type":"object","name":"LegendItem","id":"p535324","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p535321"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p535230","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p535231","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p535232","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p535233","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p535234","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p535235","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p535236","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p535237","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p535238","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p535239","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p535240","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p535241","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p535242","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p535243"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p535246","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p535245","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p535244","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p535247"}}}],"center":[{"type":"object","name":"Grid","id":"p535248","attributes":{"axis":{"id":"p535230"}}},{"type":"object","name":"Grid","id":"p535253","attributes":{"dimension":1,"axis":{"id":"p535249"}}}]}},{"type":"object","name":"Div","id":"p535325","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"01c0ccf1-d67a-4b64-94ee-efb39f576948","roots":{"p535327":"cc8f976f-e139-40ef-84e4-4f9bc230cfc4"},"root_ids":["p535327"]}];
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