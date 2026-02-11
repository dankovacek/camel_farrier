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
    
    
    const element = document.getElementById("b5713272-2243-437d-ae8e-9fa488b269e0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b5713272-2243-437d-ae8e-9fa488b269e0' but no matching script tag was found.")
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
                  const docs_json = '{"7c395131-8c80-4703-adcf-9475e53a5296":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p456869","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p456870"}}},"roots":[{"type":"object","name":"Column","id":"p456980","attributes":{"children":[{"type":"object","name":"Figure","id":"p456871","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p456872"},"y_range":{"type":"object","name":"DataRange1d","id":"p456873"},"x_scale":{"type":"object","name":"LinearScale","id":"p456881"},"y_scale":{"type":"object","name":"LinearScale","id":"p456882"},"title":{"type":"object","name":"Title","id":"p456874","attributes":{"text":"08NG007 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p456935","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p456929","attributes":{"selected":{"type":"object","name":"Selection","id":"p456930","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p456931"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaIjMdq88xMBw4LMEmGboO+YGoh00SsB0wyFFMH0g5rwrWP57DZh2mKgFphu0b7iA5Y+2gmmGBGMw7fDrgTNYfkofmD6gZwOmGU6+dALLJ08H0w1/XYA0ANAQj+GIAAAA"},"shape":[17],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p456936","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p456937"}}},"glyph":{"type":"object","name":"VArea","id":"p456932","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p456933","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p456934","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p456946","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p456940","attributes":{"selected":{"type":"object","name":"Selection","id":"p456941","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p456942"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JQSjDYRjA4TflInFYrdSKEnEgLg4uPozNxvjzZwcRJeXioGRp5YscViu14uDgonZYiTgQqddaqZWLg8tqpYgSSREp5Hd6Do+ILc+MxbIimo6idJaiKRyO/msXp1ArK1AyZy7vn0Nb9KLGciO8ZwHNXjXawNUwf7uMEm9A471x+IM11FAryn1xiF9Joq1qRz16GOQjm2geu9CuvkZ43w7KcRiN8zXAP6VR112UmhI0p/v9vDuB+lKGkjgJ87WzaM89qNGLEP82jybpQ1uf7+N1CWW8Ds37dZDfsKiNzSi5QoCfTKD9bENN3fXyTSk0lx1op597+O9tlK0gmpYPP5/fRZ1xUH5/umPZP36o1sPYAQAA"},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p456947","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p456948"}}},"glyph":{"type":"object","name":"VArea","id":"p456943","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p456944","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p456945","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p456955","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p456949","attributes":{"selected":{"type":"object","name":"Selection","id":"p456950","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p456951"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYKh4fqniEADavKn7CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p456956","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p456957"}}},"glyph":{"type":"object","name":"VArea","id":"p456952","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p456953","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p456954","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p456965","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p456959","attributes":{"selected":{"type":"object","name":"Selection","id":"p456960","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p456961"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgOLB+2YWKQwAR6rjxCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p456966","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p456967"}}},"glyph":{"type":"object","name":"VArea","id":"p456962","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p456963","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p456964","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.2773399925231933},"y2":{"type":"value","value":16.01399980545044},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p456974","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p456968","attributes":{"selected":{"type":"object","name":"Selection","id":"p456969","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p456970"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1249],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1249],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p456975","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p456976"}}},"glyph":{"type":"object","name":"Line","id":"p456971","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p456972","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p456973","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p456880","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p456907"},{"type":"object","name":"WheelZoomTool","id":"p456908","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p456909","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p456910","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p456916","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p456915","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p456917","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p456918","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p456919","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p456920","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p456926","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p456925","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p456927"},{"type":"object","name":"SaveTool","id":"p456928"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p456902","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p456903","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p456904"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p456905"}}}],"right":[{"type":"object","name":"Legend","id":"p456938","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p456939","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p456935"},{"id":"p456946"}]}},{"type":"object","name":"LegendItem","id":"p456958","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p456955"},{"id":"p456965"}]}},{"type":"object","name":"LegendItem","id":"p456977","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p456974"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p456883","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p456884","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p456885","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p456886","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p456887","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p456888","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p456889","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p456890","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p456891","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p456892","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p456893","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p456894","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p456895","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p456896"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p456899","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p456898","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p456897","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p456900"}}}],"center":[{"type":"object","name":"Grid","id":"p456901","attributes":{"axis":{"id":"p456883"}}},{"type":"object","name":"Grid","id":"p456906","attributes":{"dimension":1,"axis":{"id":"p456902"}}}]}},{"type":"object","name":"Div","id":"p456978","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"7c395131-8c80-4703-adcf-9475e53a5296","roots":{"p456980":"b5713272-2243-437d-ae8e-9fa488b269e0"},"root_ids":["p456980"]}];
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