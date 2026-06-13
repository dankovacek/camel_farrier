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
    
    
    const element = document.getElementById("e6a91432-7e05-4fac-a8d3-658a5c977503");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e6a91432-7e05-4fac-a8d3-658a5c977503' but no matching script tag was found.")
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
                  const docs_json = '{"739c8173-9d1c-4c1f-923d-7c4fe44d383c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p225989","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p225990"}}},"roots":[{"type":"object","name":"Column","id":"p226081","attributes":{"children":[{"type":"object","name":"Figure","id":"p225991","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p225992"},"y_range":{"type":"object","name":"DataRange1d","id":"p225993"},"x_scale":{"type":"object","name":"LinearScale","id":"p226001"},"y_scale":{"type":"object","name":"LinearScale","id":"p226002"},"title":{"type":"object","name":"Title","id":"p225994","attributes":{"text":"08HD009 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p226055","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226049","attributes":{"selected":{"type":"object","name":"Selection","id":"p226050","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226051"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDBYpSx4CAC75m36CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226056","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226057"}}},"glyph":{"type":"object","name":"VArea","id":"p226052","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p226053","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p226054","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p226066","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226060","attributes":{"selected":{"type":"object","name":"Selection","id":"p226061","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226062"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGAomMlyCAASmtntCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226067","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226068"}}},"glyph":{"type":"object","name":"VArea","id":"p226063","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p226064","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p226065","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.13621999859809872},"y2":{"type":"value","value":6.181199941635132},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p226075","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p226069","attributes":{"selected":{"type":"object","name":"Selection","id":"p226070","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p226071"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/yXUfWhNcRzH8Z+NzbVxr3mM1KnVsiwuojHjbIYSua2UmTjLIg/jzmaoxVErtVqu56Zlx9iMla5IrVY7u5Ll8eIyD7ucEq2Urjw2Dd/z3l+v7u18/vu9v0qpwHNtckQp5SxKx6D1a5KrSv2AoYrHqMU6Mby4FfWLIYym1qKxZzsmYsVo5i1FX0s2WqMnoX+vQvvF54mugSV96LREMOi5jirYiKGXdajlBzF8qRT1MaswGpyHRt8MTOR70Lz8fYKrL81Bq/IB+l/dRntpCwZaG9BJO4TBfeWoXq/D0LI81NqyMJyegXrVUIZr9PUAGnoME23daI7tQF/1WbTeHEV/QQXaVzZgYFwROtVzMPh2GqrCFAy1fx3vqnnjGN7fi3r/TYwWNqNxtR4T3ho0a8rQF1+D1vJc9F/LRNvnxcCBQZ+rE/+IwaKnqDq6MDS+HbWDpzD87jDqK3ZitGM9GhkFmDiYg+b7KehbmTz8fUncy3dZt9D8Vo+WXYZ2Qy46G72oZn4a56r96EI9cgqN4zvR3FSAVvZUtH9+Gcv+zl1UJ5pQ21yF+qzVaPzW0Lz7K539ycdob2lFJ6cW1WAxaveyUT+t0CjrS2M/+zpaf+rQ7i1F58w8VFs9qPmdMeyHbqNxvwHNc+VoleehPTcDnb8DHvYPu1FrPIv6tgo05hehqaaj9ejraPbne9HZ3oxqQQ1qSWtRf5KJRtNgKvsdT9Fa2I528hF0outRXchBbVcy6rlvUtiPuoHms2NoNW9Ge/cClDuCcj9GsY91otwLlDuBch9Q7gLKPRjJviWC0j9K9yi9o3SO0ncy+8oHKD2jdIzSL0q3KL0msddjKH2idInSI0qHKP2hdDeCff9NlM5Q+kLpCqUnlI4U+44ulG5QekHpBKWP4f9L4v963N/f6lE6QHn/f13l3aO8d5R3PtTzH+9pdiu4BQAA"},"shape":[183],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/21UTWgTURDern9RKloM4iHUIF5EwUMOpYewKyJFPJSABymF7EF6kpJTCb1kRTwUKTlJT2LEo6EH6SF4MDEGjfWHiom1as3GUmqJWrWIVk3XmS87y4tmLx8z75uZb2b2PU3TzF3zXaamaVaud8MgNCORBqMzHuxmv3ZkeAcj8X6zPzNQ/8YYvtz4qtrit9LF78jj8cPTA1s4nvwbRhfyreO8Pv4TeYbTun+uI2+zLW8iegDnuV7oJH3QIXqtkRHosS+sQDfl/eLl/eX51/7BFs/rszB2d4XPtWpytRNf+qd6PVzfieWCJvVBOnazbQentzFKn1R/K9syV7L/+Hopzm7ENDVO4gUpbqefX6lD80V94mGe/Kko8bI3f15efYrXTdd14+ki9FIfARVJP/ySX/YiKHMQnvQrOmTfsteO2Nr/D3VfTnL1M9uyh/Clwnv8J2eXPrE/c/LKB/AbMcdH6iNfHnvHNvgqbr9Yhy0o58cXHYPijEjkTRv2TSzAVpGb2qy88nliK2gGshU+z19bm+d6Zrf+gu1UYfa5ivkzfbCBxLP3Lzz7D5tEOHb7KfIEsk8Yrb3nHqlI/ZeNTdetDU4+ZH9hvVli27Wv3mdMTY0W2Z8JDZW8+vd8ZN36UejEvCgsdcKqqrpQl/zx/pk56OB+WnoqqHfj1MtOceiH4mpzhx4zXi+FEQ++kkfLhrAne2r0NSP0EF/mE79z+i3yDE7WcF5NLqv/AfZP58Lz5+7tAXPn/KoesjFHZb6wKc/BxcMPmN82L7Jlrpgz8dxboVnk5fmTacyUEQceocwpk4ju43tL92KPyXkTUdwvuT+mtfyR+fJuOTcTeM/4M5V3T95PuRfhofNL0Mn3QO7FX2gYkwy4BQAA"},"shape":[183],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p226076","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p226077"}}},"glyph":{"type":"object","name":"Line","id":"p226072","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p226073","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p226074","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p226000","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p226027"},{"type":"object","name":"WheelZoomTool","id":"p226028","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p226029","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p226030","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p226036","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p226035","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p226037","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p226038","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p226039","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p226040","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p226046","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p226045","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p226047"},{"type":"object","name":"SaveTool","id":"p226048"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p226022","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p226023","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p226024"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p226025"}}}],"right":[{"type":"object","name":"Legend","id":"p226058","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p226059","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p226055"},{"id":"p226066"}]}},{"type":"object","name":"LegendItem","id":"p226078","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p226075"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p226003","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p226004","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p226005","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p226006","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p226007","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p226008","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p226009","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p226010","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p226011","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p226012","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p226013","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p226014","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p226015","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p226016"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p226019","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p226018","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p226017","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p226020"}}}],"center":[{"type":"object","name":"Grid","id":"p226021","attributes":{"axis":{"id":"p226003"}}},{"type":"object","name":"Grid","id":"p226026","attributes":{"dimension":1,"axis":{"id":"p226022"}}}]}},{"type":"object","name":"Div","id":"p226079","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"739c8173-9d1c-4c1f-923d-7c4fe44d383c","roots":{"p226081":"e6a91432-7e05-4fac-a8d3-658a5c977503"},"root_ids":["p226081"]}];
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