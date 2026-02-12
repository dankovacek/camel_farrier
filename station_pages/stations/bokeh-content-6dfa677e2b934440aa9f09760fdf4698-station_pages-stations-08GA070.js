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
    
    
    const element = document.getElementById("e6b4359a-320d-40a5-a48e-5cd6498f498c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e6b4359a-320d-40a5-a48e-5cd6498f498c' but no matching script tag was found.")
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
                  const docs_json = '{"acb20cb4-23be-4ec5-94b8-1dcebeb51c5c":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p265420","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p265421"}}},"roots":[{"type":"object","name":"Column","id":"p265498","attributes":{"children":[{"type":"object","name":"Figure","id":"p265422","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p265423"},"y_range":{"type":"object","name":"DataRange1d","id":"p265424"},"x_scale":{"type":"object","name":"LinearScale","id":"p265432"},"y_scale":{"type":"object","name":"LinearScale","id":"p265433"},"extra_y_ranges":{"type":"map","entries":[["water_level",{"type":"object","name":"Range1d","id":"p265480","attributes":{"start":0.6819999718666077,"end":1.2909999990463257}}]]},"title":{"type":"object","name":"Title","id":"p265425","attributes":{"text":"08GA070 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p265491","attributes":{"y_range_name":"water_level","data_source":{"type":"object","name":"ColumnDataSource","id":"p265485","attributes":{"selected":{"type":"object","name":"Selection","id":"p265486","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265487"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[854],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+VYPWhUQRC+ExELEbESCw0SbERELKzkpbGQYJFGxCqIhUUQCwsRQS3EwkLEQkQkASvBKkUIFhKCWIqFFiLBWHg/3r9REATjvHnzzc1Odr07sFHTfHnvdmdmZ7+d+faVSvnf92ulfwAP3KpkpX9oPX8JLs3urmZD4MS2TSPh6uV6ZRhU+0eO/JE4Un5GjQvj1f+em4zX7+2q8bj9hxknPl5hnHv4gnF6x+k6jzt/ty52Gvz+2YlmVqZ/Tm1vyfgm2zl5tim8Zxybf9SwSP6L5zPnCjufXn9m+89nC7x/gXFs8ynGuYvHiueVccalE9sCnFhY47hW971nnL6zXDz/eFK39uAH8dP+BMhxlfnctrP19fW984869vyuXs14nYz0+7Xlb027buXfpXv8PLH1aVPHGZx9OdnJ/axOLbZlne3Az48nLcl7gNfr+1s237R/RXybDqyJv659T+v9yuMPzvckD11dV2R9lDdeV7aw1spMHPy78Ys4xg6tNG0e+D3ml3k/WhnsIm+wg/kmX8wnw5sg3waJD+1gH57PtoXnQT6T8x1P4Zf4H/L23avGKAg704t7erKuru53wa+OzS+dp34+kEeTF+aPiZPOaYEz1YbsMyPxqDgnxxcadjz7A5/LfF7adj+wX94vjesKfhF/vJ65Czt7cn461h6vI3IufPz6LHnGPjLmfFwZb9v86PpkPuzTuC7He+Zcf32wY3iHuAL+0fwPjy9uzD/4PsJ+8LOZT3UzGM/nNsJ32NE6kc8DfxCfGQ9/zFsbb2w95tnzPfBj+LSB76jXUp+1TqLuSx0F71C3aR+C+j2ontN5DXir76WOo64DUdfVbgIRF+wjLq37A9D3I9jTdYtdv37wFedTeY71vZwM+h/seH+wg/GpvPt84z3sYz720e+rj8PPY35E+pznEXjs+Rn0K98HI+cpWX8HxI28gV9eJ4BP0AOlt5frVtfQOalLvAFS3MXz8jfWQXQeA11E8ddk/YFuovXUJD81q6/oryb8qNrxOl/spex6+9Br8KPvnX+NQ9bl9dOoqLpK9CDy6XHY/KqOE56nzoWvI36f8V7rUf8eFtYlZ2eQnkytF+99XUvpVV/PUu9hF5iKb0OcgvALPaR6p6+f+v3TjpP+zr9DRxqdSHkL+j33t8i59v0e/mlfutq/rd6dWuzrJNP/tW9Dz4gu4bpidYroXUboaugJM151FOpz/hzp19APqiPz/Hid63VwRMeifnH9N3bp3Hbl947ug9GJpZ9vWHctTR7t2d9Z5xq9y/uBfBndoHrE6YyU3tVnlx+vb9HH9B4nfUr7lfsd8+AHfcPXe9W1gpjHcXt+RfLt15eyj76SupcCeZ7xA53Iejffx/Et/ftUnr+7ra7yu7Af8jLX4eb8qP625yiin8HPQJ9GdF4w/zf6Vft3Qn+yv1i/l/EY5/cxuO/6e2HEP4+394eZKudnbMuNXoZ6YN77POKZf0d9KrNO7aOpJwHiPJv65+3gPfxRH2rb7wLm/HGccw8e9OQe3rM8IN4FPNBn1DHxi7j4XgV/pg5zvTB1MzUf8Xo7qBO4XzEaPgcYuf//ll/m/hbU7Qg//fcL8Ejv++68puqT9hfHR89LvY+PON/XlaCPDXuPG0HP+vuVv19Av6jugc5J6BmvPzwO0hEbvp+J7vH6R78LQtcNqZO9PoWOTelkyltV+ktV8lfo59szVbmvBN9b8Z2T+F+RPFbkXAaI7/OUv4rkryL5iyLlbyj8a7+by/dgRflOjPxhv7D//nuw/475X+AvWKdtA7AaAAA="},"shape":[854],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265492","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265493"}}},"glyph":{"type":"object","name":"Line","id":"p265488","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p265490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p265431","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p265458"},{"type":"object","name":"WheelZoomTool","id":"p265459","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p265460","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p265461","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p265467","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p265466","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p265468","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p265469","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p265470","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p265471","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p265477","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p265476","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p265478"},{"type":"object","name":"SaveTool","id":"p265479"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p265453","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p265454","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p265455"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p265456"}}}],"right":[{"type":"object","name":"LinearAxis","id":"p265481","attributes":{"y_range_name":"water_level","ticker":{"type":"object","name":"BasicTicker","id":"p265482","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p265483"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p265484"}}},{"type":"object","name":"Legend","id":"p265494","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p265495","attributes":{"label":{"type":"value","value":"water_level_m"},"renderers":[{"id":"p265491"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p265434","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p265435","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p265436","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p265437","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p265438","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p265439","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p265440","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p265441","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p265442","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p265443","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p265444","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p265445","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p265446","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p265447"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p265450","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p265449","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p265448","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p265451"}}}],"center":[{"type":"object","name":"Grid","id":"p265452","attributes":{"axis":{"id":"p265434"}}},{"type":"object","name":"Grid","id":"p265457","attributes":{"dimension":1,"axis":{"id":"p265453"}}}]}},{"type":"object","name":"Div","id":"p265496","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"acb20cb4-23be-4ec5-94b8-1dcebeb51c5c","roots":{"p265498":"e6b4359a-320d-40a5-a48e-5cd6498f498c"},"root_ids":["p265498"]}];
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