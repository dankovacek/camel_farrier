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
    
    
    const element = document.getElementById("ce79a440-3b0b-46b0-9219-62be5a6b7fe1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ce79a440-3b0b-46b0-9219-62be5a6b7fe1' but no matching script tag was found.")
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
                  const docs_json = '{"c91bc447-14c8-41e0-9f2d-fa29d348629a":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p302352","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p302353"}}},"roots":[{"type":"object","name":"Column","id":"p302425","attributes":{"children":[{"type":"object","name":"Figure","id":"p302354","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p302355"},"y_range":{"type":"object","name":"DataRange1d","id":"p302356"},"x_scale":{"type":"object","name":"LinearScale","id":"p302364"},"y_scale":{"type":"object","name":"LinearScale","id":"p302365"},"title":{"type":"object","name":"Title","id":"p302357","attributes":{"text":"08LE040 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p302418","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p302412","attributes":{"selected":{"type":"object","name":"Selection","id":"p302413","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p302414"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3Sd1gIaBzA8Z8L0ZVCIqOzRy57HvLy8Mi47OhCDtkjK+Ph8Z55tuTsvYnOKCWqVyq6EClCEhERJSqZx/evzx/ff78iZsVGJ79oEamtUF18XeOH2mMHmjw3lNWF1en1DqKO6o/G81s1+vsTqNb9gbphGTTRIVXpw0ejKrJD7R/pSG88GSXOEdXIK1XoH2eh2VQbpenNyvT4hahHN0bzJdWBvnU5qhatUF97XIk+dj1KiU6odry0p7feiiaxO8rEdxXpJfeh3u2Opt3nCvTbx1BNGYLashSafWfK0zuORHXHBrXvBTu61QSUQw6oOsfY0u9NRzPzF5Ry18vRj85H3bUhmrQUG/qcJajKN0cdmG5N774GJaM9qvnPf6bb/4MmqCtKzzwreuYu1At7o6lcXJZ+5jCqPoNQZ5VAo/8tQ682HFWIFeq+YZb0bB+UpRVROV0qTQ+bimZAdZTX8aXoK+agrlUPzYWkknQPjSrPBfWqBxb0uitRotqg8nz6E/2dP5q1nVEavi5Bj96OepgbmsICofsfQNW4P+rYr99m/+jeJ1A+eqLaZIm6SchX+tVRKKPtUH2J+ELfMglNc0eUa3Gf6WNnoZbaaLYnfqK3Xogq0Rn1hNSPdIvlKLtbomr3uJietA7N5I4oli8/0PdtQd2hO5qU/CK6715UVu6oD34qpLseQ7nngWpmSdQ2ZwroR7xRutqgSgt/T/cbj8bOASXw8jt69+moHzmhmXctn24/H1VQA9RuKW/pTxajLGyGqnJ6Hv30ajS926NkZeXS9SbUVbuiCc59Q++7C1V2L9RLPrym1ziMEjYQ1YASqHOCcujLh6HUskJ1IfQVfbAPmtwKKKvMS3rdqagjq6EZGp9Nf+eHam1d1A2SXtAvLUIZ5oKq8P5z+oa/0Ti3QYnNzKJ7+6MudkUTkPOM3mQ7qqs9UI8qeEr/vB9lSz9Uzb9m0hMC0fh44vdBUG0PfkJvNQrNDVuUCRGP6RaTUO+qgqZtXAY9aSaqybVQl058RN+7AKWDM6qUu+n0acvQlG2JcjDjId11HerUDmhmZKfRbbagOtINdZf8B/QHe1D8fkdl9+k+/fhRNN08UB5ZoJp3+h69ojeak9YobuGp9CfjUC+ohMbh8l36aV9UvZ1QP0u4Q180D6VqA1TBySl098VoXjRFWfIwmV5jNerQdmj6Z92m5wSgWt4Fdc3cJHr4TpTBvVDlFt2irzyEps5AlEhBNTToJj3fC82asigNQhPpl8ag9qqApiDqBn3DFFTO1VDHXL1OH+GHUlwHVcCta3SXRWiu/Ioy6n4C/fMK1Jtbo2mW+R89YQMqH1fU317F07dtQ2nVA9WN91fp4/ej+akfyq4vV+htA1HfGopmUmmU0sFx9L1/ov7NFk3yxVj6tImoylZBfSA2ht5pJkpqTVQzblymWy9Ac7gRSpe70fQHS1HPboHGNuMS/fhaVN06oE5/YehzN6NU7Ibq5Nsoeo89aB73QVnwMZLucBT1qcFoelmgPDsVQV80ArWjNZqz5y/S3cehemGPenH0BXp1X5TQGqj6J4TTX81Fs6w+Ss3k8/Twv1APaormTVoYfeUqVHXaoY54FkofEoCSr1CteXOOXn8nGtMTxasohF5wEPX6AWgaCUrMyWD6CC/UH8qg2XjuLN1lzHf/Bx0wWkJwCgAA"},"shape":[334],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKDPr////3/Xuv25Orf1QfeeGOK9z+/f8f33/oKEZ8gMQnvt2DIY7LnEEoniAQsXMwuD+BT/cQye7AFS+Ewvk3OD63kmwf0Fyy3Elv+8h1J65wIzecKXAHqeEMTMcnscVnQ87zy9jEgU4Dl88HPv99g08+of/QU2zyuMQJmfcgcMc3bOYBxX9hE4e7U66V2QFL/ByQa2XFJg7Tt2DmTG5s8g22XCLYxGH6EnbISWCTdzA2lsEmDtOHyz1Acazuh+lTiOn/hNf/Z858wSZPKLxh5js8rHqBTT9MnlgaVzrDq5/e+Yfc8ubT///2HGvmUBxOf///ny+lvxbDHCziROVzcvUBIwXFfCzmYI03dHVYwgWru9HVofOBlmG1D10dOh+XPqA4uHwDAETg0UZwCgAA"},"shape":[334],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p302419","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p302420"}}},"glyph":{"type":"object","name":"Line","id":"p302415","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p302416","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p302417","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p302363","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p302390"},{"type":"object","name":"WheelZoomTool","id":"p302391","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p302392","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p302393","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p302399","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p302398","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p302400","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p302401","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p302402","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p302403","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p302409","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p302408","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p302410"},{"type":"object","name":"SaveTool","id":"p302411"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p302385","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p302386","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p302387"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p302388"}}}],"right":[{"type":"object","name":"Legend","id":"p302421","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p302422","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p302418"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p302366","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p302367","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p302368","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p302369","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p302370","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p302371","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p302372","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p302373","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p302374","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p302375","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p302376","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p302377","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p302378","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p302379"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p302382","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p302381","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p302380","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p302383"}}}],"center":[{"type":"object","name":"Grid","id":"p302384","attributes":{"axis":{"id":"p302366"}}},{"type":"object","name":"Grid","id":"p302389","attributes":{"dimension":1,"axis":{"id":"p302385"}}}]}},{"type":"object","name":"Div","id":"p302423","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"c91bc447-14c8-41e0-9f2d-fa29d348629a","roots":{"p302425":"ce79a440-3b0b-46b0-9219-62be5a6b7fe1"},"root_ids":["p302425"]}];
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