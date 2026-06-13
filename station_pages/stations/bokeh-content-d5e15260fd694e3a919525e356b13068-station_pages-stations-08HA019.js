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
    
    
    const element = document.getElementById("c186316b-70e2-4da4-81f0-e1883c3dd66f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c186316b-70e2-4da4-81f0-e1883c3dd66f' but no matching script tag was found.")
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
                  const docs_json = '{"ff3385e3-716d-4b43-8d05-524be1dd06e3":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p190252","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p190253"}}},"roots":[{"type":"object","name":"Column","id":"p190353","attributes":{"children":[{"type":"object","name":"Figure","id":"p190254","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p190255"},"y_range":{"type":"object","name":"DataRange1d","id":"p190256"},"x_scale":{"type":"object","name":"LinearScale","id":"p190264"},"y_scale":{"type":"object","name":"LinearScale","id":"p190265"},"title":{"type":"object","name":"Title","id":"p190257","attributes":{"text":"08HA019 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p190318","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190312","attributes":{"selected":{"type":"object","name":"Selection","id":"p190313","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190314"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYOCbX+18CAARqKvJCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190319","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190320"}}},"glyph":{"type":"object","name":"VArea","id":"p190315","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p190316","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p190317","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p190329","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190323","attributes":{"selected":{"type":"object","name":"Selection","id":"p190324","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190325"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYPilneN8iIGB4cyMTOdDAOAbgqEQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190330","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190331"}}},"glyph":{"type":"object","name":"VArea","id":"p190326","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p190327","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p190328","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p190338","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190332","attributes":{"selected":{"type":"object","name":"Selection","id":"p190333","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190334"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYCgoSnE+BAAXiya8CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190339","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190340"}}},"glyph":{"type":"object","name":"VArea","id":"p190335","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p190336","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p190337","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.027440000846981952},"y2":{"type":"value","value":0.11525999799370763},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p190347","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p190341","attributes":{"selected":{"type":"object","name":"Selection","id":"p190342","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p190343"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FeywUAADA4StqRZNUskoz0UQhK6yh4npJeWRHui5FJaldKiQu0/WiByZknELltULSpZIuScckSTLKeqgui8xQk1q/759PIBCYFrYKVQKBYHBmC9fFv+CMvkYOFavZ6fkz1rN/yt25Ki6fWsPymIcs+lbFFiIl/1bd4Uab26zIKmXp5JvsGlHMMz4WcI/ndVY+yOOEhVdZnKZga60sFkgvc0tnGuevT+WIymReN/8iz046x72jZ7l672lOapPzTrd4Xlp6nCcax3L72WguGorkmKAjvKk5nE2cpTxQuJ9rDfdx2okQDunfxcu3BfEUdSC/s5dwad5Wjtffwr6xIl6g2cwjIm9WP9nEWbYefCB7Pa/UWcsGkUL+9HEVV3qt4DMPnTjAcjkvSnfgMa1l3Cy149wuGz7svpjX3LVkIzML1iSZ84M/pnwh1IQD3xiznXAOa5cZcZuxIRckTOfoYX32CNbjeS91ud95MquKJnLqLG3eLR/Hjj/H3P6vIxnlTvUvvukwzHH5g+wzbYDNZH08pOnlej8NZ9Z+4bAln9lF8YH1dbv5Q2QXV3zq4FPe7exf/ZotrV7xaHozN2k38ZWDDRz+rp6FG+rYUPmEv5o95qrkaj43dp8l++6xbXslj19dwa1lZXx93i2OSixh95FCnrvrBv94mc81LrmcUpzDwUbZbH8ykycNpHOH5BKXNKSwzDGJva6dZ1ODRB6UneG67yc5w/8Ehz6NYyc7GevlHONu3aNcHhXB8s+HWORzkC0eHeDfVmHcmLGXFRP2sDQ8mF3f7+AZHtu5RylmpXkAJ6T4sfivL1uH+bDgrSe3rN7opvoHtF3Ir8gEAAA="},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WBqENP//v+Pn/h2j/1gd+dId9/n///3F2UsHDLx9OX///+rZVbZ//3/f76U/lr7X///19tyLbf/8/+//cOqJXA+TB2Mhqn7+v+/PFvjUnuYv4Hi+8v2zYfzPwHN4VgzB86HqfsBtHflx0X2MBqXOLo6mLtw0YTUo9sHsxfdv+jmw/wJ8zd6eGAJR2A4rAeFH5gGevf/tcUbcNKw8Een0fX9BqevjWBzVn7cBEpnBz7/3WIPAMjRMyDIBAAA"},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p190348","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p190349"}}},"glyph":{"type":"object","name":"Line","id":"p190344","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p190345","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p190346","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p190263","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p190290"},{"type":"object","name":"WheelZoomTool","id":"p190291","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p190292","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p190293","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p190299","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p190298","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p190300","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p190301","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p190302","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p190303","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p190309","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p190308","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p190310"},{"type":"object","name":"SaveTool","id":"p190311"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p190285","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p190286","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p190287"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p190288"}}}],"right":[{"type":"object","name":"Legend","id":"p190321","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p190322","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p190318"},{"id":"p190329"},{"id":"p190338"}]}},{"type":"object","name":"LegendItem","id":"p190350","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p190347"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p190266","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p190267","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p190268","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p190269","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p190270","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p190271","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p190272","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p190273","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p190274","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p190275","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p190276","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p190277","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p190278","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p190279"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p190282","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p190281","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p190280","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p190283"}}}],"center":[{"type":"object","name":"Grid","id":"p190284","attributes":{"axis":{"id":"p190266"}}},{"type":"object","name":"Grid","id":"p190289","attributes":{"dimension":1,"axis":{"id":"p190285"}}}]}},{"type":"object","name":"Div","id":"p190351","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"ff3385e3-716d-4b43-8d05-524be1dd06e3","roots":{"p190353":"c186316b-70e2-4da4-81f0-e1883c3dd66f"},"root_ids":["p190353"]}];
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