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
    
    
    const element = document.getElementById("c456763e-d6f4-415c-9664-8fc319485e1b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c456763e-d6f4-415c-9664-8fc319485e1b' but no matching script tag was found.")
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
                  const docs_json = '{"f78b6512-0f14-4215-b7c4-7f835999314a":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p278176","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p278177"}}},"roots":[{"type":"object","name":"Column","id":"p278277","attributes":{"children":[{"type":"object","name":"Figure","id":"p278178","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p278179"},"y_range":{"type":"object","name":"DataRange1d","id":"p278180"},"x_scale":{"type":"object","name":"LinearScale","id":"p278188"},"y_scale":{"type":"object","name":"LinearScale","id":"p278189"},"title":{"type":"object","name":"Title","id":"p278181","attributes":{"text":"08HA019 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p278242","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278236","attributes":{"selected":{"type":"object","name":"Selection","id":"p278237","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278238"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYOCbX+18CAARqKvJCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278243","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278244"}}},"glyph":{"type":"object","name":"VArea","id":"p278239","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p278240","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p278241","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p278253","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278247","attributes":{"selected":{"type":"object","name":"Selection","id":"p278248","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278249"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYPilneN8iIGB4cyMTOdDAOAbgqEQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278254","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278255"}}},"glyph":{"type":"object","name":"VArea","id":"p278250","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p278251","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p278252","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p278262","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278256","attributes":{"selected":{"type":"object","name":"Selection","id":"p278257","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278258"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYCgoSnE+BAAXiya8CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278263","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278264"}}},"glyph":{"type":"object","name":"VArea","id":"p278259","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p278260","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p278261","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p278271","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p278265","attributes":{"selected":{"type":"object","name":"Selection","id":"p278266","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p278267"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FeywUAADA4StqRZNUskoz0UQhK6yh4npJeWRHui5FJaldKiQu0/WiByZknELltULSpZIuScckSTLKeqgui8xQk1q/759PIBCYFrYKVQKBYHBmC9fFv+CMvkYOFavZ6fkz1rN/yt25Ki6fWsPymIcs+lbFFiIl/1bd4Uab26zIKmXp5JvsGlHMMz4WcI/ndVY+yOOEhVdZnKZga60sFkgvc0tnGuevT+WIymReN/8iz046x72jZ7l672lOapPzTrd4Xlp6nCcax3L72WguGorkmKAjvKk5nE2cpTxQuJ9rDfdx2okQDunfxcu3BfEUdSC/s5dwad5Wjtffwr6xIl6g2cwjIm9WP9nEWbYefCB7Pa/UWcsGkUL+9HEVV3qt4DMPnTjAcjkvSnfgMa1l3Cy149wuGz7svpjX3LVkIzML1iSZ84M/pnwh1IQD3xiznXAOa5cZcZuxIRckTOfoYX32CNbjeS91ud95MquKJnLqLG3eLR/Hjj/H3P6vIxnlTvUvvukwzHH5g+wzbYDNZH08pOnlej8NZ9Z+4bAln9lF8YH1dbv5Q2QXV3zq4FPe7exf/ZotrV7xaHozN2k38ZWDDRz+rp6FG+rYUPmEv5o95qrkaj43dp8l++6xbXslj19dwa1lZXx93i2OSixh95FCnrvrBv94mc81LrmcUpzDwUbZbH8ykycNpHOH5BKXNKSwzDGJva6dZ1ODRB6UneG67yc5w/8Ehz6NYyc7GevlHONu3aNcHhXB8s+HWORzkC0eHeDfVmHcmLGXFRP2sDQ8mF3f7+AZHtu5RylmpXkAJ6T4sfivL1uH+bDgrSe3rN7opvoHtF3Ir8gEAAA="},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QyDnP73/3/8xLd77BmGiHtHKv35///9RRkLh0w8ffn///9qmVX2f///ny+lv9b+1///9bZcy+3//P9v/7BqCZwPUwejYeJf//+XZ2tcag/zN1B8f9m++XD+J6A5HGvmwPkw+gfQnJUfF8FpXOLoNMxduGhC6tHtg9Ho/kXXB/MnrvDAEo7AcFgPp4HS/68t3oCThulDp9HV/Qa7dyOYv/LjJlA6O/D57xZ7AMjRMyDIBAAA"},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p278272","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p278273"}}},"glyph":{"type":"object","name":"Line","id":"p278268","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p278269","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p278270","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p278187","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p278214"},{"type":"object","name":"WheelZoomTool","id":"p278215","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p278216","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p278217","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p278223","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p278222","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p278224","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p278225","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p278226","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p278227","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p278233","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p278232","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p278234"},{"type":"object","name":"SaveTool","id":"p278235"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p278209","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p278210","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p278211"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p278212"}}}],"right":[{"type":"object","name":"Legend","id":"p278245","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p278246","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p278242"},{"id":"p278253"},{"id":"p278262"}]}},{"type":"object","name":"LegendItem","id":"p278274","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p278271"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p278190","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p278191","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p278192","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p278193","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p278194","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p278195","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p278196","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p278197","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p278198","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p278199","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p278200","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p278201","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p278202","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p278203"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p278206","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p278205","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p278204","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p278207"}}}],"center":[{"type":"object","name":"Grid","id":"p278208","attributes":{"axis":{"id":"p278190"}}},{"type":"object","name":"Grid","id":"p278213","attributes":{"dimension":1,"axis":{"id":"p278209"}}}]}},{"type":"object","name":"Div","id":"p278275","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"f78b6512-0f14-4215-b7c4-7f835999314a","roots":{"p278277":"c456763e-d6f4-415c-9664-8fc319485e1b"},"root_ids":["p278277"]}];
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