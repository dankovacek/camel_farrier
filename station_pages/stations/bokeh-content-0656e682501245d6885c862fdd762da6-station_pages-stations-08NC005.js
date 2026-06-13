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
    
    
    const element = document.getElementById("b94aedca-f817-48b2-929e-937d44e28811");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b94aedca-f817-48b2-929e-937d44e28811' but no matching script tag was found.")
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
                  const docs_json = '{"aaaa1a27-c727-42e9-925f-5cfb8f882126":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p487680","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p487681"}}},"roots":[{"type":"object","name":"Column","id":"p487763","attributes":{"children":[{"type":"object","name":"Figure","id":"p487682","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p487683"},"y_range":{"type":"object","name":"DataRange1d","id":"p487684"},"x_scale":{"type":"object","name":"LinearScale","id":"p487692"},"y_scale":{"type":"object","name":"LinearScale","id":"p487693"},"title":{"type":"object","name":"Title","id":"p487685","attributes":{"text":"08NC005 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p487746","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p487740","attributes":{"selected":{"type":"object","name":"Selection","id":"p487741","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p487742"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYPgTszbdCQDAwfMKCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p487747","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p487748"}}},"glyph":{"type":"object","name":"VArea","id":"p487743","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6301400065422058},"y2":{"type":"value","value":20.297999610900888},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p487744","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6301400065422058},"y2":{"type":"value","value":20.297999610900888},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p487745","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6301400065422058},"y2":{"type":"value","value":20.297999610900888},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p487757","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p487751","attributes":{"selected":{"type":"object","name":"Selection","id":"p487752","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p487753"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3V91sIeACA8S/uTngyzjoqVEZCgwZKKNEwCg1UXKk0jEID1ZcGKqMyEio0UKEyKjTQQMY1UKFyiCM8Z9wh5+7en97n8xe8Qgi7ViVPUyHksCjl/ytea6rgC3eoCF83BM8dNBQPLqbymeswnNtVFW/KpsLCVg33/URFc5I6Pjl1OA54SuX07SOwotZI/KCGirTAUXi1sgY2KqPyJ4/RuKa7Jj58mgqvhWOw3mcqRPJYfNN0HN7fRqVrrBbW0tXGn+upKN+gg3cP1cVO16gc5TUev1ecgIvzqIh20MN2HVSoHtHHr80NcMEfVIbvMsTz9CbiwQ1UPA+ZhHPVJuOQSiotfI1wvz7GuPkcFVmLp+CA71SYpplgRcupuKGdyrT4aXiN4XRs9JCKrptNcc0IM5x8g0qv1TOwfj9zLAqpqHaeifd3noXdMqnUmm2Bv7yjsnyvJY6bbIWdmqnQiLDG7zVm45JbVEb7z8H2A+di1UtUtC+bhwt+tMERJ6mcN88WK32g8nnifJw3ZQEOeUKF5daFuN9YO9xyl8qs9fY4cLADNi2houdyR9ygsAin51C5Zv5ibPwXlV0PLcG105xw8jMqvKOdsb62C+5UR2V10FKcqLIMu12hQtvzV/ylhyuuOENlnJ0bdv5CpUbKcvzBzB2XvKAiZocHth/vidXuU9m+cQUuHOaFI8qpsPH2xkq9fHBbPpV5jr449BuVlkdX4v6zVuGWV1Rk716NA/XXYLNGKnuG+eFGdX+cXkWF38q12PjndVjhApW1S9bjFBGAvdOpMLAKxJ3eUnErIQgnTgzGyx9Rqb1lA/46ciOuuElF/JpN2Ll/CB5dROUHl1Bc2iUMxxynwmGOxGp/UvFm32ZcaLQFR7ZQaRMZjpU1I3DbbSry10bi0F+isNVlKvu7bsWtP23D2VlUBNlsx2YfqeiVFI0bTWJwxu9U+m2LxVPG7cAKNVTUBezEKUq7sE8plQbuu3Hn7nH41ikqDiyIx8v/pkLncAL+On0PrnxOZXzMXuyisw+PrqfiY/B+XDokEcdepdJhxQGsrpiE3+RSUWR/EEd+pcI29RBWNj+MX7ykMn9nMg6bkIKtHlAxICQVt6oewTkVVAb5HMUzeh/Dvc5R0bQoDWf8Q4X/sXQ8xSIDd2unsi4uE6caHMc+TVQYyhO484iT+PZ1Kg+sysLufbOxTgEVHU45uLLTKZyQQaWL9Wms+Y7Kj3vO4LJJuTj2MRWO4XlYXSMfv62mssjvLI4acA7bXqRCZdl5/OKHC/jsCSrD5hZg6/dUDkgsxE+Mi3BOKxXBURfxjDGXcO+7VDatu4wzBxVj/2IqTNxKcDeFUlyfTWWqbRn2/USl4cEruMu0q/j2UyqStl/D7lrlWLeWyo7AClylXIkTyqhY6lGFNXtcx59OU1m28Abe8ZlKx+SbeLhZNX7bRsXF2Fs4Svc2nn+PSpWNd/DLoXfx2Wv0v7H9hq171uCB+VQ+cajFpzqoDD5Sh81n1uPer6h4uOseztS7j9c2UGkS+gB3V2/A9ZVUHPFtxL59mvDE81R2WfIQ3/lOZVLaI+xh+RjrvqHiW3wzrjJs8TT9FxkGOhaQCQAA"},"shape":[306],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/91UPUxTURR+Mji8RPGnKvXn2YBAQQW080tfNKaLS3eGTswdnLrwli4a08HBdCDBdO9gHLrZvEWHDk52LYnBxBIg4hOQYv3Od++plTi4GA13eF/OvefnOz/vOI6cvWXC8cDg1dtP2X+YT3PncONP4je98kfRaz569kGw8268S/nFg03BIJPhe2FpaV1w9f6TjWy/33+9srXF97XSNvXj9Lbc99/XKIdR/PN+SA6ePt8UvesvV2jfKSU+/w4LDS9mvGp1n5hbcwLBoj8i2Gy1TgqmFitEvI9RrufOC3byjQvEUiIpCD6XBAuV6KqVeQ+Zes7MIu2R51lB1GVUEPknBEPfpX2nVrwiCB70E7htIs5kIHVptWaDE7Sbs/KcvCOP20YvXBBsth4Scb8QjEjc9YzFu8N6q9XknWF98LN2SSLOvCDuNd60lactD8qIM2mRMg7tYXfL4vyAt7lXWf1b/s5N0Yc/9Ttl85yy9ukjOGv1ZwZ6pk7kkyp3JwRR4XH7fsPqTwz7xXxRL1V/kxJEPz3BQuUeZfTP9NV3L/O+4R3t+0WjHxHBn4g5Yn8xJ5wD2FFG/9nv0H/MuOiXxjFz1PA4Lzj0g0N79J0IvpxD4DlBp13jXIEn/eNcE0T9OU84Zq4sL8hm7qKY9soLvA3PSkT/mEszt8o7TtMO/yXfNV7YzdMP6n1GELwM2jmHTH6wO01026eo55WJOMdqP/+tfFDnPdlX2EP7dh9SDhP1vt2LPe67WpF7DXXnXoNdj3uxnjuUe/Sb75jzL4LYb98EMUdGP1HftX6J2INfKXfzRr/oUx/zwj3Kd/jHfjZ8opg8MP9G9t3dLPYW5mVH7sGPPDAvyoP6mLcDQcwt/WPeD8QO/L4zXtEnD/WLd/LDniUP5ad5wY/hHcXkgaP1op3mjX1OvUFct816ap0Ql/FZRyD+Z/JTfdS5Z/Mjf7wbnl6ZstYP96yv8kUfTf3KXSL+i1/saWfqZvja/NWf5g9T5qV1EXkZn/8SfwBU4Z65kAkAAA=="},"shape":[306],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p487758","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p487759"}}},"glyph":{"type":"object","name":"Line","id":"p487754","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p487755","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p487756","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p487691","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p487718"},{"type":"object","name":"WheelZoomTool","id":"p487719","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p487720","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p487721","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p487727","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p487726","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p487728","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p487729","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p487730","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p487731","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p487737","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p487736","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p487738"},{"type":"object","name":"SaveTool","id":"p487739"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p487713","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p487714","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p487715"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p487716"}}}],"right":[{"type":"object","name":"Legend","id":"p487749","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p487750","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p487746"}]}},{"type":"object","name":"LegendItem","id":"p487760","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p487757"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p487694","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p487695","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p487696","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p487697","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p487698","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p487699","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p487700","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p487701","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p487702","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p487703","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p487704","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p487705","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p487706","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p487707"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p487710","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p487709","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p487708","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p487711"}}}],"center":[{"type":"object","name":"Grid","id":"p487712","attributes":{"axis":{"id":"p487694"}}},{"type":"object","name":"Grid","id":"p487717","attributes":{"dimension":1,"axis":{"id":"p487713"}}}]}},{"type":"object","name":"Div","id":"p487761","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"aaaa1a27-c727-42e9-925f-5cfb8f882126","roots":{"p487763":"b94aedca-f817-48b2-929e-937d44e28811"},"root_ids":["p487763"]}];
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