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
    
    
    const element = document.getElementById("f0fe2c53-43cd-4602-bbeb-b73f68a857a9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f0fe2c53-43cd-4602-bbeb-b73f68a857a9' but no matching script tag was found.")
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
                  const docs_json = '{"5a9ffd49-387d-443c-a564-f277ef8882a5":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p190809","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p190810"}}},"roots":[{"type":"object","name":"Column","id":"p190910","attributes":{"children":[{"type":"object","name":"Figure","id":"p190811","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p190812"},"y_range":{"type":"object","name":"DataRange1d","id":"p190813"},"x_scale":{"type":"object","name":"LinearScale","id":"p190821"},"y_scale":{"type":"object","name":"LinearScale","id":"p190822"},"title":{"type":"object","name":"Title","id":"p190814","attributes":{"text":"08HA019 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p190875","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190869","attributes":{"selected":{"type":"object","name":"Selection","id":"p190870","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190871"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYOCbX+18CAARqKvJCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190876","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190877"}}},"glyph":{"type":"object","name":"VArea","id":"p190872","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p190873","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p190874","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p190886","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190880","attributes":{"selected":{"type":"object","name":"Selection","id":"p190881","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190882"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYPilneN8iIGB4cyMTOdDAOAbgqEQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190887","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190888"}}},"glyph":{"type":"object","name":"VArea","id":"p190883","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p190884","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p190885","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p190895","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190889","attributes":{"selected":{"type":"object","name":"Selection","id":"p190890","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190891"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYCgoSnE+BAAXiya8CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190896","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190897"}}},"glyph":{"type":"object","name":"VArea","id":"p190892","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p190893","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p190894","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p190904","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190898","attributes":{"selected":{"type":"object","name":"Selection","id":"p190899","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190900"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FeywUAADA4StqRZNUskoz0UQhK6yh4npJeWRHui5FJaldKiQu0/WiByZknELltULSpZIuScckSTLKeqgui8xQk1q/759PIBCYFrYKVQKBYHBmC9fFv+CMvkYOFavZ6fkz1rN/yt25Ki6fWsPymIcs+lbFFiIl/1bd4Uab26zIKmXp5JvsGlHMMz4WcI/ndVY+yOOEhVdZnKZga60sFkgvc0tnGuevT+WIymReN/8iz046x72jZ7l672lOapPzTrd4Xlp6nCcax3L72WguGorkmKAjvKk5nE2cpTxQuJ9rDfdx2okQDunfxcu3BfEUdSC/s5dwad5Wjtffwr6xIl6g2cwjIm9WP9nEWbYefCB7Pa/UWcsGkUL+9HEVV3qt4DMPnTjAcjkvSnfgMa1l3Cy149wuGz7svpjX3LVkIzML1iSZ84M/pnwh1IQD3xiznXAOa5cZcZuxIRckTOfoYX32CNbjeS91ud95MquKJnLqLG3eLR/Hjj/H3P6vIxnlTvUvvukwzHH5g+wzbYDNZH08pOnlej8NZ9Z+4bAln9lF8YH1dbv5Q2QXV3zq4FPe7exf/ZotrV7xaHozN2k38ZWDDRz+rp6FG+rYUPmEv5o95qrkaj43dp8l++6xbXslj19dwa1lZXx93i2OSixh95FCnrvrBv94mc81LrmcUpzDwUbZbH8ykycNpHOH5BKXNKSwzDGJva6dZ1ODRB6UneG67yc5w/8Ehz6NYyc7GevlHONu3aNcHhXB8s+HWORzkC0eHeDfVmHcmLGXFRP2sDQ8mF3f7+AZHtu5RylmpXkAJ6T4sfivL1uH+bDgrSe3rN7opvoHtF3Ir8gEAAA="},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqENP//v+Pn/h2j/1gd+dId9/n///3F2UsHDLx9OX///+rZVbZ//3/f76U/lr7X///19tyLbf/8/+//cOqJXA+TB2Mhqn7+v+/PFvjUnuYv4Hi+8v2zYfzPwHN4VgzB86HqfsBtHflx0X2MBqXOLo6mLtw0YTUo9sHsxfdv+jmw/wJ8zd6eGAJR2A4rAeFH5gGevf/tcUbcNKw8Een0fX9BqevjWBzVn7cBEpnBz7/3WIPAMjRMyDIBAAA"},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190905","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190906"}}},"glyph":{"type":"object","name":"Line","id":"p190901","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p190902","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p190903","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p190820","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p190847"},{"type":"object","name":"WheelZoomTool","id":"p190848","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p190849","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p190850","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p190856","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p190855","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p190857","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p190858","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p190859","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p190860","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p190866","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p190865","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p190867"},{"type":"object","name":"SaveTool","id":"p190868"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p190842","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p190843","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p190844"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p190845"}}}],"right":[{"type":"object","name":"Legend","id":"p190878","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p190879","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p190875"},{"id":"p190886"},{"id":"p190895"}]}},{"type":"object","name":"LegendItem","id":"p190907","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p190904"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p190823","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p190824","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p190825","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p190826","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p190827","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p190828","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p190829","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p190830","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p190831","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p190832","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p190833","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p190834","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p190835","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p190836"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p190839","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p190838","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p190837","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p190840"}}}],"center":[{"type":"object","name":"Grid","id":"p190841","attributes":{"axis":{"id":"p190823"}}},{"type":"object","name":"Grid","id":"p190846","attributes":{"dimension":1,"axis":{"id":"p190842"}}}]}},{"type":"object","name":"Div","id":"p190908","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"5a9ffd49-387d-443c-a564-f277ef8882a5","roots":{"p190910":"f0fe2c53-43cd-4602-bbeb-b73f68a857a9"},"root_ids":["p190910"]}];
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