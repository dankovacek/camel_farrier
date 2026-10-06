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
    
    
    const element = document.getElementById("b2224669-33fa-44b1-b5d4-b6995b6aba86");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b2224669-33fa-44b1-b5d4-b6995b6aba86' but no matching script tag was found.")
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
                  const docs_json = '{"cb46b307-eaf4-46ff-af79-ba3a4d25d53c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p684505","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p684506"}}},"roots":[{"type":"object","name":"Column","id":"p684588","attributes":{"children":[{"type":"object","name":"Figure","id":"p684507","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p684508"},"y_range":{"type":"object","name":"DataRange1d","id":"p684509"},"x_scale":{"type":"object","name":"LinearScale","id":"p684517"},"y_scale":{"type":"object","name":"LinearScale","id":"p684518"},"title":{"type":"object","name":"Title","id":"p684510","attributes":{"text":"08NC005 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p684571","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p684565","attributes":{"selected":{"type":"object","name":"Selection","id":"p684566","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p684567"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYPgTszbdCQDAwfMKCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p684572","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p684573"}}},"glyph":{"type":"object","name":"VArea","id":"p684568","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6301400065422058},"y2":{"type":"value","value":20.297999610900888},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p684569","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6301400065422058},"y2":{"type":"value","value":20.297999610900888},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p684570","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.6301400065422058},"y2":{"type":"value","value":20.297999610900888},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p684582","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p684576","attributes":{"selected":{"type":"object","name":"Selection","id":"p684577","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p684578"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3V91sIeACA8S/uTngyzjoqVEZCgwZKKNEwCg1UXKk0jEID1ZcGKqMyEio0UKEyKjTQQMY1UKFyiCM8Z9wh5+7en97n8xe8Qgi7ViVPUyHksCjl/ytea6rgC3eoCF83BM8dNBQPLqbymeswnNtVFW/KpsLCVg33/URFc5I6Pjl1OA54SuX07SOwotZI/KCGirTAUXi1sgY2KqPyJ4/RuKa7Jj58mgqvhWOw3mcqRPJYfNN0HN7fRqVrrBbW0tXGn+upKN+gg3cP1cVO16gc5TUev1ecgIvzqIh20MN2HVSoHtHHr80NcMEfVIbvMsTz9CbiwQ1UPA+ZhHPVJuOQSiotfI1wvz7GuPkcFVmLp+CA71SYpplgRcupuKGdyrT4aXiN4XRs9JCKrptNcc0IM5x8g0qv1TOwfj9zLAqpqHaeifd3noXdMqnUmm2Bv7yjsnyvJY6bbIWdmqnQiLDG7zVm45JbVEb7z8H2A+di1UtUtC+bhwt+tMERJ6mcN88WK32g8nnifJw3ZQEOeUKF5daFuN9YO9xyl8qs9fY4cLADNi2houdyR9ygsAin51C5Zv5ibPwXlV0PLcG105xw8jMqvKOdsb62C+5UR2V10FKcqLIMu12hQtvzV/ylhyuuOENlnJ0bdv5CpUbKcvzBzB2XvKAiZocHth/vidXuU9m+cQUuHOaFI8qpsPH2xkq9fHBbPpV5jr449BuVlkdX4v6zVuGWV1Rk716NA/XXYLNGKnuG+eFGdX+cXkWF38q12PjndVjhApW1S9bjFBGAvdOpMLAKxJ3eUnErIQgnTgzGyx9Rqb1lA/46ciOuuElF/JpN2Ll/CB5dROUHl1Bc2iUMxxynwmGOxGp/UvFm32ZcaLQFR7ZQaRMZjpU1I3DbbSry10bi0F+isNVlKvu7bsWtP23D2VlUBNlsx2YfqeiVFI0bTWJwxu9U+m2LxVPG7cAKNVTUBezEKUq7sE8plQbuu3Hn7nH41ikqDiyIx8v/pkLncAL+On0PrnxOZXzMXuyisw+PrqfiY/B+XDokEcdepdJhxQGsrpiE3+RSUWR/EEd+pcI29RBWNj+MX7ykMn9nMg6bkIKtHlAxICQVt6oewTkVVAb5HMUzeh/Dvc5R0bQoDWf8Q4X/sXQ8xSIDd2unsi4uE6caHMc+TVQYyhO484iT+PZ1Kg+sysLufbOxTgEVHU45uLLTKZyQQaWL9Wms+Y7Kj3vO4LJJuTj2MRWO4XlYXSMfv62mssjvLI4acA7bXqRCZdl5/OKHC/jsCSrD5hZg6/dUDkgsxE+Mi3BOKxXBURfxjDGXcO+7VDatu4wzBxVj/2IqTNxKcDeFUlyfTWWqbRn2/USl4cEruMu0q/j2UyqStl/D7lrlWLeWyo7AClylXIkTyqhY6lGFNXtcx59OU1m28Abe8ZlKx+SbeLhZNX7bRsXF2Fs4Svc2nn+PSpWNd/DLoXfx2Wv0v7H9hq171uCB+VQ+cajFpzqoDD5Sh81n1uPer6h4uOseztS7j9c2UGkS+gB3V2/A9ZVUHPFtxL59mvDE81R2WfIQ3/lOZVLaI+xh+RjrvqHiW3wzrjJs8TT9FxkGOhaQCQAA"},"shape":[306],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/91UPUxTURR+Mji8RPGnKvXn2YBAQQW080tfNKaLS3eGTswdnLrwli4a08HBdCDBdO9gHLrZvEWHDk52LYnBxBIg4hOQYv3Od++plTi4GA13eF/OvefnOz/vOI6cvWXC8cDg1dtP2X+YT3PncONP4je98kfRaz569kGw8268S/nFg03BIJPhe2FpaV1w9f6TjWy/33+9srXF97XSNvXj9Lbc99/XKIdR/PN+SA6ePt8UvesvV2jfKSU+/w4LDS9mvGp1n5hbcwLBoj8i2Gy1TgqmFitEvI9RrufOC3byjQvEUiIpCD6XBAuV6KqVeQ+Zes7MIu2R51lB1GVUEPknBEPfpX2nVrwiCB70E7htIs5kIHVptWaDE7Sbs/KcvCOP20YvXBBsth4Scb8QjEjc9YzFu8N6q9XknWF98LN2SSLOvCDuNd60lactD8qIM2mRMg7tYXfL4vyAt7lXWf1b/s5N0Yc/9Ttl85yy9ukjOGv1ZwZ6pk7kkyp3JwRR4XH7fsPqTwz7xXxRL1V/kxJEPz3BQuUeZfTP9NV3L/O+4R3t+0WjHxHBn4g5Yn8xJ5wD2FFG/9nv0H/MuOiXxjFz1PA4Lzj0g0N79J0IvpxD4DlBp13jXIEn/eNcE0T9OU84Zq4sL8hm7qKY9soLvA3PSkT/mEszt8o7TtMO/yXfNV7YzdMP6n1GELwM2jmHTH6wO01026eo55WJOMdqP/+tfFDnPdlX2EP7dh9SDhP1vt2LPe67WpF7DXXnXoNdj3uxnjuUe/Sb75jzL4LYb98EMUdGP1HftX6J2INfKXfzRr/oUx/zwj3Kd/jHfjZ8opg8MP9G9t3dLPYW5mVH7sGPPDAvyoP6mLcDQcwt/WPeD8QO/L4zXtEnD/WLd/LDniUP5ad5wY/hHcXkgaP1op3mjX1OvUFct816ap0Ql/FZRyD+Z/JTfdS5Z/Mjf7wbnl6ZstYP96yv8kUfTf3KXSL+i1/saWfqZvja/NWf5g9T5qV1EXkZn/8SfwBU4Z65kAkAAA=="},"shape":[306],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p684583","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p684584"}}},"glyph":{"type":"object","name":"Line","id":"p684579","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p684580","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p684581","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p684516","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p684543"},{"type":"object","name":"WheelZoomTool","id":"p684544","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p684545","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p684546","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p684552","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p684551","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p684553","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p684554","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p684555","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p684556","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p684562","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p684561","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p684563"},{"type":"object","name":"SaveTool","id":"p684564"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p684538","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p684539","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p684540"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p684541"}}}],"right":[{"type":"object","name":"Legend","id":"p684574","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p684575","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p684571"}]}},{"type":"object","name":"LegendItem","id":"p684585","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p684582"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p684519","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p684520","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p684521","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p684522","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p684523","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p684524","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p684525","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p684526","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p684527","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p684528","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p684529","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p684530","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p684531","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p684532"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p684535","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p684534","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p684533","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p684536"}}}],"center":[{"type":"object","name":"Grid","id":"p684537","attributes":{"axis":{"id":"p684519"}}},{"type":"object","name":"Grid","id":"p684542","attributes":{"dimension":1,"axis":{"id":"p684538"}}}]}},{"type":"object","name":"Div","id":"p684586","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"cb46b307-eaf4-46ff-af79-ba3a4d25d53c","roots":{"p684588":"b2224669-33fa-44b1-b5d4-b6995b6aba86"},"root_ids":["p684588"]}];
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