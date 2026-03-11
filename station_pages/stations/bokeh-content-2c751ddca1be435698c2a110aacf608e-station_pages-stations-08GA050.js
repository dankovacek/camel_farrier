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
    
    
    const element = document.getElementById("fa287e8e-c371-4d66-bee1-0adb7712467b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fa287e8e-c371-4d66-bee1-0adb7712467b' but no matching script tag was found.")
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
                  const docs_json = '{"a18a226b-cb44-4b37-9c5a-3624a7dd09ab":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p263048","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p263049"}}},"roots":[{"type":"object","name":"Column","id":"p263149","attributes":{"children":[{"type":"object","name":"Figure","id":"p263050","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p263051"},"y_range":{"type":"object","name":"DataRange1d","id":"p263052"},"x_scale":{"type":"object","name":"LinearScale","id":"p263060"},"y_scale":{"type":"object","name":"LinearScale","id":"p263061"},"title":{"type":"object","name":"Title","id":"p263053","attributes":{"text":"08GA050 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p263114","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263108","attributes":{"selected":{"type":"object","name":"Selection","id":"p263109","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263110"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLgWYelwCABbQIfDCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263115","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263116"}}},"glyph":{"type":"object","name":"VArea","id":"p263111","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p263112","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p263113","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p263125","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263119","attributes":{"selected":{"type":"object","name":"Selection","id":"p263120","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263121"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYPDZvMT+EAMDw4ee+faHABP80bIQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263126","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263127"}}},"glyph":{"type":"object","name":"VArea","id":"p263122","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p263123","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p263124","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.3580200111865997},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p263134","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263128","attributes":{"selected":{"type":"object","name":"Selection","id":"p263129","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263130"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yXR/U/MAQDA4e+4SA5Xi15wyKlwIzHl7TpJa3VZEqX1xhTLDaeWkBxiVGvlJRViVEuhnCYslaSFWG/LeYtxpVXsykvNKubjp+cPeARBSG10XF0jCELYKnt0KpqNo6xmYesxKRYYp2J8qA16P5uC01ws8ds1c6yWTMLTh8S4rXscLg0ci6a1InzjNApvXPqj/Gei2TD67fuNdoYB/OH3E+se9mPWPCNGn/+KK0U9OFHThR/fd6DO+zMmlX/ETbJ2dMx4i7+H9dgQ3Ya5r1pwj0cTut9+iZbSBuxMfor3BuoweVsthjQ9wgWKKhSKK7DZ6gHmJZVjXF8ZeoXp0PZ5Cfa63MTKvCJMNy/ErYn5uKTnKo4JuoL62ktYtOgCJuRm4brxmTgz/gz2G9Kxdn0aZlam4I75p3B51gkUmyRhu+YIlrYn4lGfBAy4tx/t5+zDwYxYfDaiwYs7d+MuvRqVa6PRQrcdDdJIvJuyFU8OhmNwZCjKm4NxRBGEjcUb8ar1Bow97oee/b5oHe6D3c+9sMLVE9Py12CExWp0PqxAUe8KbAtahoVPluIB5yWourwIpeKFaIyXY03HXDzr74BRVTJ0lduhWfYMfGcyHW/ttUXtByv0V01G2X0L/DVHgvWnJ2DOHzNUq01R8doEJZ6j8ZNO+P/lNuTGk80Alvb3YUBDLw7mf8GLhz+hcvN7NDjr8aS4BeWdL7Cxqh5jsx+jdUwlVqjuY4R9GYqEEix8fR1Vd/LQmHoZz0bloKvyHL6zSUft92SUvTiO9QVaVGsPoiQ4DssWazBoghqHOqPwSvUW9MgJwa6YQEz19UcnB19sFbww/o27W81fdURvD8gEAAA="},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxUov/8/7//RNk+exgNFEwQiNhp//f///9a7dvs//3/Lx9hucX+P1j+Gpie+/44iK4/cOognAaqs+90PADXD6IfL90Nog98/gvW/3/lx01wGiYOtFf+5rntcD7MXmT11xZvsP8CpFfLrILTv4D22nItt/8K1M/WuBTOB5pn/7BqCZz+ATZnEZz+DHR/UcZCuL0wfTD5T0B9HGvm2H///3/+zJkz7V/8/3/fv3e6/TuweVMw6Kdg8yZi8GH0VbB5PfYPwP5qw0kD3XHfN6kBg94GNKdkcgUOOoMAjVBPnLkZBGlY+KH7F+YPUs3DRTNAAVL4gOMJSO8v2zcfIx6w+4+wPdjDA6t7MNIxKF3C9MHcAUy/86X018LDCT2dwsQJpQtK44kBDaD7l1h/04oGAGR/fm/IBAAA"},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263135","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263136"}}},"glyph":{"type":"object","name":"Line","id":"p263131","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263132","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p263133","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p263144","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p263138","attributes":{"selected":{"type":"object","name":"Selection","id":"p263139","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p263140"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yXR/U/MAQDA4e+4SA5Xi15wyKlwIzHl7TpJa3VZEqX1xhTLDaeWkBxiVGvlJRViVEuhnCYslaSFWG/LeYtxpVXsykvNKubjp+cPeARBSG10XF0jCELYKnt0KpqNo6xmYesxKRYYp2J8qA16P5uC01ws8ds1c6yWTMLTh8S4rXscLg0ci6a1InzjNApvXPqj/Gei2TD67fuNdoYB/OH3E+se9mPWPCNGn/+KK0U9OFHThR/fd6DO+zMmlX/ETbJ2dMx4i7+H9dgQ3Ya5r1pwj0cTut9+iZbSBuxMfor3BuoweVsthjQ9wgWKKhSKK7DZ6gHmJZVjXF8ZeoXp0PZ5Cfa63MTKvCJMNy/ErYn5uKTnKo4JuoL62ktYtOgCJuRm4brxmTgz/gz2G9Kxdn0aZlam4I75p3B51gkUmyRhu+YIlrYn4lGfBAy4tx/t5+zDwYxYfDaiwYs7d+MuvRqVa6PRQrcdDdJIvJuyFU8OhmNwZCjKm4NxRBGEjcUb8ar1Bow97oee/b5oHe6D3c+9sMLVE9Py12CExWp0PqxAUe8KbAtahoVPluIB5yWourwIpeKFaIyXY03HXDzr74BRVTJ0lduhWfYMfGcyHW/ttUXtByv0V01G2X0L/DVHgvWnJ2DOHzNUq01R8doEJZ6j8ZNO+P/lNuTGk80Alvb3YUBDLw7mf8GLhz+hcvN7NDjr8aS4BeWdL7Cxqh5jsx+jdUwlVqjuY4R9GYqEEix8fR1Vd/LQmHoZz0bloKvyHL6zSUft92SUvTiO9QVaVGsPoiQ4DssWazBoghqHOqPwSvUW9MgJwa6YQEz19UcnB19sFbww/o27W81fdURvD8gEAAA="},"shape":[153],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxUov/8/7//RNk+exgNFEwQiNhp//f///9a7dvs//3/Lx9hucX+P1j+Gpie+/44iK4/cOognAaqs+90PADXD6IfL90Nog98/gvW/3/lx01wGiYOtFf+5rntcD7MXmT11xZvsP8CpFfLrILTv4D22nItt/8K1M/WuBTOB5pn/7BqCZz+ATZnEZz+DHR/UcZCuL0wfTD5T0B9HGvm2H///3/+zJkz7V/8/3/fv3e6/TuweVMw6Kdg8yZi8GH0VbB5PfYPwP5qw0kD3XHfN6kBg94GNKdkcgUOOoMAjVBPnLkZBGlY+KH7F+YPUs3DRTNAAVL4gOMJSO8v2zcfIx6w+4+wPdjDA6t7MNIxKF3C9MHcAUy/86X018LDCT2dwsQJpQtK44kBDaD7l1h/04oGAGR/fm/IBAAA"},"shape":[153],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p263145","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p263146"}}},"glyph":{"type":"object","name":"Line","id":"p263141","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p263142","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p263143","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p263059","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p263086"},{"type":"object","name":"WheelZoomTool","id":"p263087","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p263088","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p263089","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p263095","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p263094","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p263096","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p263097","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p263098","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p263099","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p263105","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p263104","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p263106"},{"type":"object","name":"SaveTool","id":"p263107"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p263081","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p263082","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p263083"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p263084"}}}],"right":[{"type":"object","name":"Legend","id":"p263117","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p263118","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p263114"},{"id":"p263125"}]}},{"type":"object","name":"LegendItem","id":"p263137","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p263134"},{"id":"p263144"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p263062","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p263063","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p263064","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p263065","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p263066","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p263067","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p263068","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p263069","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p263070","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p263071","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p263072","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p263073","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p263074","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p263075"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p263078","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p263077","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p263076","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p263079"}}}],"center":[{"type":"object","name":"Grid","id":"p263080","attributes":{"axis":{"id":"p263062"}}},{"type":"object","name":"Grid","id":"p263085","attributes":{"dimension":1,"axis":{"id":"p263081"}}}]}},{"type":"object","name":"Div","id":"p263147","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"a18a226b-cb44-4b37-9c5a-3624a7dd09ab","roots":{"p263149":"fa287e8e-c371-4d66-bee1-0adb7712467b"},"root_ids":["p263149"]}];
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