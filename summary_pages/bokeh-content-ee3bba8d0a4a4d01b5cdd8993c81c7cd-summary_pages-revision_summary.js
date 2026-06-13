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
    
    
    const element = document.getElementById("caaaeff9-c9af-4d79-aec6-2f502b8254a4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'caaaeff9-c9af-4d79-aec6-2f502b8254a4' but no matching script tag was found.")
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
                  const docs_json = '{"90caa6de-b3c1-46a0-a208-042b603a0840":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p790311","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p790312"}}},"roots":[{"type":"object","name":"Figure","id":"p790313","attributes":{"width":700,"height":400,"x_range":{"type":"object","name":"DataRange1d","id":"p790314","attributes":{"start":9e-05}},"y_range":{"type":"object","name":"DataRange1d","id":"p790315","attributes":{"start":0,"end":1}},"x_scale":{"type":"object","name":"LogScale","id":"p790323"},"y_scale":{"type":"object","name":"LinearScale","id":"p790324"},"title":{"type":"object","name":"Title","id":"p790316","attributes":{"text":"Cumulative Distribution of Absolute Percent Area Changes"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p790355","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790349","attributes":{"selected":{"type":"object","name":"Selection","id":"p790350","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790351"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+2Xa0hUQRTHcbEwShExVzcjs1JCQiTEROg/Zn4IKQMjxA+yiVCIGIlYgQkRJGJBYS8IKaESJVBEDCPEHr57+Ko0NUsTsXLF1VzX9dHMuXMVlItpYhD75f72zj1nzpzZc/5z71ThSMvhhKOYstO+D/Y60OyDp4c26QKyLsNO+z6spA62BHbvXH/xJuxcnX2IDS2rS6+8h/+FjfmR5aPTD/Cv+N0vyOmxdxHWijxYXGJYMdaKNzwdj7vsKcXfckenNTPpWRmWy9K84YKaqCdYKQ8Y+5t8OyuwWmz2pUSwWqTlWSuxXE7E9D28+6oKf0oWHM+P4BfQYpZHx1tLzEssxXcWCozlUi+m76uGFsXqdAG1WEhTBvjK66GS0tA1ikHiBfr1eo7VPiWpp66/gUpx6vLUoMUi8Rrv2gQtHklw5VLZhFsROckDtuZFVOS0BaTOEa2LyAe5YysWcpcwz2mDynouyobA91Apotalf4BKUm3DR6nb81S+P9rl+1c77hvEgdmxJA+KdAo7oJLf8J34BC0qx3AnWvluxYZ2afKsSKO7S57X3aDtq/sMSje5ZxH9hXzGfcH5QSGk8zztdqmqIf8rnjcIgZ9nYlhP9NXbveCi33ZusFfqYB9m+J1f0DcIr8jyAWzlKtkTPSif/5DPf87xTooIMASVFN7bBJo+xQR+4QYmkPrljYAwPALe+2m5nmaIrs1MMkOIQVquGVEh2eHGfjOEWoVkj4LMHMdAbgVjINT8kv7jILPwcTnPOEjmQiygYaMF3JmHnJDxrdLfKu0npb0NijzbwIPzJdmkTk6DVCptGopczch5Z6X9rNQNB6b0hQMTXTOUoWNK/zky5X19HaNhODFxDY7fwI6J7vfZyB7xa0mqM1P0x1mRFZ2L9HdhVFe7XRnVZ68bo7//pPscqY4qPBjV1WY9o3Lfr2dXRFme0TPluSejvrzmxagvircxqhfDdkbHvrs/mxRp7g1iJ0T6XvsY6YFXBPsNRkgG76APAAA="},"shape":[500],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[500],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p790356","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790357"}}},"glyph":{"type":"object","name":"Line","id":"p790352","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790353","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p790354","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"darkred","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p790366","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790360","attributes":{"selected":{"type":"object","name":"Selection","id":"p790361","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790362"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+2Xa0hUQRTHcbEwShExVzcjs1JCQiTEROg/Zn4IKQMjxA+yiVCIGIlYgQkRJGJBYS8IKaESJVBEDCPEHr57+Ko0NUsTsXLF1VzX9dHMuXMVlItpYhD75f72zj1nzpzZc/5z71ThSMvhhKOYstO+D/Y60OyDp4c26QKyLsNO+z6spA62BHbvXH/xJuxcnX2IDS2rS6+8h/+FjfmR5aPTD/Cv+N0vyOmxdxHWijxYXGJYMdaKNzwdj7vsKcXfckenNTPpWRmWy9K84YKaqCdYKQ8Y+5t8OyuwWmz2pUSwWqTlWSuxXE7E9D28+6oKf0oWHM+P4BfQYpZHx1tLzEssxXcWCozlUi+m76uGFsXqdAG1WEhTBvjK66GS0tA1ikHiBfr1eo7VPiWpp66/gUpx6vLUoMUi8Rrv2gQtHklw5VLZhFsROckDtuZFVOS0BaTOEa2LyAe5YysWcpcwz2mDynouyobA91Apotalf4BKUm3DR6nb81S+P9rl+1c77hvEgdmxJA+KdAo7oJLf8J34BC0qx3AnWvluxYZ2afKsSKO7S57X3aDtq/sMSje5ZxH9hXzGfcH5QSGk8zztdqmqIf8rnjcIgZ9nYlhP9NXbveCi33ZusFfqYB9m+J1f0DcIr8jyAWzlKtkTPSif/5DPf87xTooIMASVFN7bBJo+xQR+4QYmkPrljYAwPALe+2m5nmaIrs1MMkOIQVquGVEh2eHGfjOEWoVkj4LMHMdAbgVjINT8kv7jILPwcTnPOEjmQiygYaMF3JmHnJDxrdLfKu0npb0NijzbwIPzJdmkTk6DVCptGopczch5Z6X9rNQNB6b0hQMTXTOUoWNK/zky5X19HaNhODFxDY7fwI6J7vfZyB7xa0mqM1P0x1mRFZ2L9HdhVFe7XRnVZ68bo7//pPscqY4qPBjV1WY9o3Lfr2dXRFme0TPluSejvrzmxagvircxqhfDdkbHvrs/mxRp7g1iJ0T6XvsY6YFXBPsNRkgG76APAAA="},"shape":[500],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[500],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p790367","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790368"}}},"glyph":{"type":"object","name":"Scatter","id":"p790363","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.6},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p790364","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p790365","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"darkred"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"darkred"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p790375","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790369","attributes":{"selected":{"type":"object","name":"Selection","id":"p790370","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790371"},"data":{"type":"map","entries":[["x",[0.041,0.041]],["y",[0,0.5]]]}}},"view":{"type":"object","name":"CDSView","id":"p790376","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790377"}}},"glyph":{"type":"object","name":"Line","id":"p790372","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790373","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p790374","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p790384","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790378","attributes":{"selected":{"type":"object","name":"Selection","id":"p790379","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790380"},"data":{"type":"map","entries":[["x",[0.241,0.241]],["y",[0,0.75]]]}}},"view":{"type":"object","name":"CDSView","id":"p790385","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790386"}}},"glyph":{"type":"object","name":"Line","id":"p790381","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790382","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p790383","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}},{"type":"object","name":"GlyphRenderer","id":"p790393","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p790387","attributes":{"selected":{"type":"object","name":"Selection","id":"p790388","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p790389"},"data":{"type":"map","entries":[["x",[1.1630000000000003,1.1630000000000003]],["y",[0,0.9]]]}}},"view":{"type":"object","name":"CDSView","id":"p790394","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p790395"}}},"glyph":{"type":"object","name":"Line","id":"p790390","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.5,"line_dash":[6]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p790391","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.1,"line_dash":[6]}},"muted_glyph":{"type":"object","name":"Line","id":"p790392","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"gray","line_alpha":0.2,"line_dash":[6]}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p790322","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p790335"},{"type":"object","name":"WheelZoomTool","id":"p790336","attributes":{"renderers":"auto"}},{"type":"object","name":"LassoSelectTool","id":"p790337","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p790338","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p790339","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p790340","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p790346","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p790345","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p790347"},{"type":"object","name":"SaveTool","id":"p790348"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p790330","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p790331","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p790332"},"axis_label":"Cumulative Probability","major_label_policy":{"type":"object","name":"AllLabels","id":"p790333"}}}],"below":[{"type":"object","name":"LogAxis","id":"p790325","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p790326","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p790327"},"axis_label":"Absolute Percent Area Change (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p790328"}}}],"center":[{"type":"object","name":"Grid","id":"p790329","attributes":{"axis":{"id":"p790325"}}},{"type":"object","name":"Grid","id":"p790334","attributes":{"dimension":1,"axis":{"id":"p790330"}}},{"type":"object","name":"Legend","id":"p790358","attributes":{"location":"bottom_right","items":[{"type":"object","name":"LegendItem","id":"p790359","attributes":{"label":{"type":"value","value":"|\\u0394Area| CDF"},"renderers":[{"id":"p790355"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"90caa6de-b3c1-46a0-a208-042b603a0840","roots":{"p790313":"caaaeff9-c9af-4d79-aec6-2f502b8254a4"},"root_ids":["p790313"]}];
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