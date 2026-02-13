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
    
    
    const element = document.getElementById("cd3f25f9-ff0d-48fe-9cb3-307f65d01168");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cd3f25f9-ff0d-48fe-9cb3-307f65d01168' but no matching script tag was found.")
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
                  const docs_json = '{"9de50788-60cc-4a69-94d6-f681913b1794":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1084039","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1084040"}}},"roots":[{"type":"object","name":"Figure","id":"p1084041","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p1084042","attributes":{"start":9e-05}},"y_range":{"type":"object","name":"DataRange1d","id":"p1084043","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LogScale","id":"p1084051"},"y_scale":{"type":"object","name":"LinearScale","id":"p1084052"},"title":{"type":"object","name":"Title","id":"p1084044","attributes":{"text":"Cumulative Distribution of Absolute Percent Area Changes"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1084083","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1084077","attributes":{"selected":{"type":"object","name":"Selection","id":"p1084078","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1084079"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2We0jTURTHcawwyjHE3CMjs1IiQkbICqFz1/KPECswIvbHWCIUIUYiPcCCCBKxoLAXhJRQiRIoIoYRYg/NR4/56GFzWS6RVU42bXPOafee3+W3P8YPm4lB7J/72e/ec849v9/O+d47U+PuzcnbDzNRRhmlJB/vWSXbUnoxyigXxDXp9o3Lz1+PcpF4aEdjx8mWO/8Nu6uymiaC9/4Zv6fqYh8m1S4Z6WDKz6xbMl5Tyw8qtjb8NTfY/OeOPWmMmA2V49Xt2Y8WzF2WEWuKrXnR2JOCiS0aMay/JWJO5Tru337R+sckGWYqqc8kWZo48MaX+3xevvVhwIipYu6ONkmaUfBfhtFVAjTDTpGYrqxb5Fn89UpkW3J90dGrr0WyU4SmLsladk1RWiW5N09JpcYKN4zlBaOBnjAKMtQLqK7GvjDSgRqGcxNbLu8X2UmjaNPfiVSiwL0XidtoP3DdC1G4Z30UeVfLhH5gXu5m6deESAca4JMkhePDBn057IMMSvIUS98+yM8bO+Dn6/gM+JoFQ2FMY7Jm+gJnnEzgQjwef6G1q+orPO1iQhtifubQvss3h4GKb/9p5zDXKQfM0qdU3TdgXllNo7DWxCydfP0HX/8p8lYh22BMJG6b5AIMX+gCOtAFF6B6VboBMe4G2rPFFWoPWLF/PeDHCQ9k68sMlhEPMNXRl00AmsknAd2qJwHR/ov7ewHNDF4exwsoV3of4LTFBxWom1N8fz/393P7aW4fAEFeA2BAYQhw3QsCqktxEASZmeVx57j9HNeFGCL0QQxh3TJWIiNC38mJcP9aRnAaYgkbM8wryAHmlrySPKBjfVEcEeLECTIiU3B/BcG62qwkWJfD8QT/7iMJIrFemhMJlslqFcF63qkil1g5nlDxdTXBPryiIdgXdesI1ot2PcHjNyGNTLPX3KYjh9nra7YT1AGNkfwGRkgG76APAAA="},"shape":[500],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[500],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1084084","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1084085"}}},"glyph":{"type":"object","name":"Line","id":"p1084080","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1084081","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1084082","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p1084094","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1084088","attributes":{"selected":{"type":"object","name":"Selection","id":"p1084089","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1084090"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2We0jTURTHcawwyjHE3CMjs1IiQkbICqFz1/KPECswIvbHWCIUIUYiPcCCCBKxoLAXhJRQiRIoIoYRYg/NR4/56GFzWS6RVU42bXPOafee3+W3P8YPm4lB7J/72e/ec849v9/O+d47U+PuzcnbDzNRRhmlJB/vWSXbUnoxyigXxDXp9o3Lz1+PcpF4aEdjx8mWO/8Nu6uymiaC9/4Zv6fqYh8m1S4Z6WDKz6xbMl5Tyw8qtjb8NTfY/OeOPWmMmA2V49Xt2Y8WzF2WEWuKrXnR2JOCiS0aMay/JWJO5Tru337R+sckGWYqqc8kWZo48MaX+3xevvVhwIipYu6ONkmaUfBfhtFVAjTDTpGYrqxb5Fn89UpkW3J90dGrr0WyU4SmLsladk1RWiW5N09JpcYKN4zlBaOBnjAKMtQLqK7GvjDSgRqGcxNbLu8X2UmjaNPfiVSiwL0XidtoP3DdC1G4Z30UeVfLhH5gXu5m6deESAca4JMkhePDBn057IMMSvIUS98+yM8bO+Dn6/gM+JoFQ2FMY7Jm+gJnnEzgQjwef6G1q+orPO1iQhtifubQvss3h4GKb/9p5zDXKQfM0qdU3TdgXllNo7DWxCydfP0HX/8p8lYh22BMJG6b5AIMX+gCOtAFF6B6VboBMe4G2rPFFWoPWLF/PeDHCQ9k68sMlhEPMNXRl00AmsknAd2qJwHR/ov7ewHNDF4exwsoV3of4LTFBxWom1N8fz/393P7aW4fAEFeA2BAYQhw3QsCqktxEASZmeVx57j9HNeFGCL0QQxh3TJWIiNC38mJcP9aRnAaYgkbM8wryAHmlrySPKBjfVEcEeLECTIiU3B/BcG62qwkWJfD8QT/7iMJIrFemhMJlslqFcF63qkil1g5nlDxdTXBPryiIdgXdesI1ot2PcHjNyGNTLPX3KYjh9nra7YT1AGNkfwGRkgG76APAAA="},"shape":[500],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[500],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1084095","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1084096"}}},"glyph":{"type":"object","name":"Scatter","id":"p1084091","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1084092","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1084093","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1084103","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1084097","attributes":{"selected":{"type":"object","name":"Selection","id":"p1084098","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1084099"},"data":{"type":"map","entries":[["x",[0.041,0.041]],["y",[0,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p1084104","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1084105"}}},"glyph":{"type":"object","name":"Line","id":"p1084100","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1084101","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1084102","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1084112","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1084106","attributes":{"selected":{"type":"object","name":"Selection","id":"p1084107","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1084108"},"data":{"type":"map","entries":[["x",[0.241,0.241]],["y",[0,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p1084113","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1084114"}}},"glyph":{"type":"object","name":"Line","id":"p1084109","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1084110","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1084111","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p1084121","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1084115","attributes":{"selected":{"type":"object","name":"Selection","id":"p1084116","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1084117"},"data":{"type":"map","entries":[["x",[1.1630000000000003,1.1630000000000003]],["y",[0,0.9]]]}}},"view":{"type":"object","name":"CDSView","id":"p1084122","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1084123"}}},"glyph":{"type":"object","name":"Line","id":"p1084118","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1084119","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p1084120","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1084050","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1084063"},{"type":"object","name":"WheelZoomTool","id":"p1084064","attributes":{"renderers":"auto"}},{"type":"object","name":"LassoSelectTool","id":"p1084065","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p1084066","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p1084067","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p1084068","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p1084074","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1084073","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1084075"},{"type":"object","name":"SaveTool","id":"p1084076"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1084058","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1084059","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1084060"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p1084061"}}}],"below":[{"type":"object","name":"LogAxis","id":"p1084053","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p1084054","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p1084055"},"axis_label":"Absolute Percent Area Change (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1084056"}}}],"center":[{"type":"object","name":"Grid","id":"p1084057","attributes":{"axis":{"id":"p1084053"}}},{"type":"object","name":"Grid","id":"p1084062","attributes":{"dimension":1,"axis":{"id":"p1084058"}}},{"type":"object","name":"Legend","id":"p1084086","attributes":{"location":"bottom_right","items":[{"type":"object","name":"LegendItem","id":"p1084087","attributes":{"label":{"type":"value","value":"|\\u0394Area| CDF"},"renderers":[{"id":"p1084083"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"9de50788-60cc-4a69-94d6-f681913b1794","roots":{"p1084041":"cd3f25f9-ff0d-48fe-9cb3-307f65d01168"},"root_ids":["p1084041"]}];
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