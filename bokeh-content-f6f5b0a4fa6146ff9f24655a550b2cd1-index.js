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
    
    
    const element = document.getElementById("f608296b-52e0-4db6-8ce0-54467cbe9d07");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f608296b-52e0-4db6-8ce0-54467cbe9d07' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.6.0.min.js"];
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
                  const docs_json = '{"4f9db6c6-b54b-4b91-83a5-c062fb12d2f6":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1001","attributes":{"x_range":{"type":"object","name":"DataRange1d","id":"p1002"},"y_range":{"type":"object","name":"DataRange1d","id":"p1003"},"x_scale":{"type":"object","name":"LogScale","id":"p1011"},"y_scale":{"type":"object","name":"LinearScale","id":"p1012"},"title":{"type":"object","name":"Title","id":"p1004","attributes":{"text":"Distribution of WSC monitored catchments in HYSETS"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1042","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1036","attributes":{"selected":{"type":"object","name":"Selection","id":"p1037","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1038"},"data":{"type":"map","entries":[["top",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8="},"shape":[49],"dtype":"float64","order":"little"}],["left",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8="},"shape":[49],"dtype":"float64","order":"little"}],["right",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8="},"shape":[49],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1043","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1044"}}},"glyph":{"type":"object","name":"Quad","id":"p1039","attributes":{"left":{"type":"field","field":"left"},"right":{"type":"field","field":"right"},"bottom":{"type":"value","value":0},"top":{"type":"field","field":"top"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.6},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Quad","id":"p1040","attributes":{"left":{"type":"field","field":"left"},"right":{"type":"field","field":"right"},"bottom":{"type":"value","value":0},"top":{"type":"field","field":"top"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Quad","id":"p1041","attributes":{"left":{"type":"field","field":"left"},"right":{"type":"field","field":"right"},"bottom":{"type":"value","value":0},"top":{"type":"field","field":"top"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1053","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1047","attributes":{"selected":{"type":"object","name":"Selection","id":"p1048","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1049"},"data":{"type":"map","entries":[["top",{"type":"ndarray","array":{"type":"bytes","data":"Iq6xcdrAjD8MUFmxV6SHP7wS2NPhTYM/D54ul+6Ahz+npaR6IweQP/qBZDQLE4M/W7bomeygfz8ahZc152R2P3NVAkaJIno/EFyVO03Hfj99R6oJ6Rp0PwjDDf0oL3I/m2313BTfbT++YK5/od1jPxiF1WoCjE0/5rFqjkNAUD8j4oA0pwhNPyIEzauSaVA/XQ+j+mSLSj/hoszKf1ZGPwBKOZxtJ0I/7Hanryy0Oj8b4bbucvcwP1lZr02h0yk/XTYSH9nDIT/5aFnM9xEZP53vbRE5ihM/4QETbrFGCD+NE97kp8n8PqawBlMTYPk+fmtqruu36z7JaB4wKZDmPms6skWTAeE+UwWWF7uD0j6MLeGUznzPPk6aJwVaIL0+E73bYl+zsj5soMfTjkmnPrwlUcpPjaE+SOySnNKijj6DJhxUojB5Pk15CpBt/GI+v+Darp/ZZz7+lxGsCMNMPkfv0cufrVU+AAAAAAAAAAB7yO7kUaE4PgrTtPZokDI+AAAAAAAAAAA="},"shape":[49],"dtype":"float64","order":"little"}],["left",{"type":"ndarray","array":{"type":"bytes","data":"KVyPwvUo8D8aPJ+Kw3D1P+C9cV9Jcvw/9xX+yu7eAkAINOg/gAkJQOsvu2/xmxBAKY9BslEJFkDY6w/3sDwdQBLbvkk0ZSNA6UG3t6W7KUB7XVJAHxIxQH9SllMdpjZAqI25ubgMPkAM8+8pNe9DQOGRub++ckpAt+Gf8ZWLUUAszxaaREdXQNL7pa6I4l5ANiVh+Qt9ZECdNAST7i5rQLXruuJsCHJAtBLnh+bsd0AKfdz5Sb5/QDyi0gLUDoVAIqFZZ1nwi0CQGQYZvIiSQEpazfsil5hA9WUPchNQoECDXzVTqaSlQExZIXQkt6xAjrTORJwMs0AN8lO3Gka5QPL3hXElxMBA/M8Qv6g+xkBCIZH5dYPNQErQDMYmlNNAQLYWZe/52UAOfb5QcTvhQEkED+jv3OZAFSsJSHVV7kAbN0WxdR/0QE1tPZ/DsvpAUaEOBA62AUGnQ7BCnX8HQYigpMdKLQ9B2ROO1KOuFEE6OST2unAbQUzmHyMTNCJBHDYnHNAmKEE="},"shape":[49],"dtype":"float64","order":"little"}],["right",{"type":"ndarray","array":{"type":"bytes","data":"GjyfisNw9T/gvXFfSXL8P/cV/sru3gJACDToP4AJCUDrL7tv8ZsQQCmPQbJRCRZA2OsP97A8HUAS275JNGUjQOlBt7eluylAe11SQB8SMUB/UpZTHaY2QKiNubm4DD5ADPPvKTXvQ0Dhkbm/vnJKQLfhn/GVi1FALM8WmkRHV0DS+6WuiOJeQDYlYfkLfWRAnTQEk+4ua0C167ribAhyQLQS54fm7HdACn3c+Um+f0A8otIC1A6FQCKhWWdZ8ItAkBkGGbyIkkBKWs37IpeYQPVlD3ITUKBAg181U6mkpUBMWSF0JLesQI60zkScDLNADfJTtxpGuUDy94VxJcTAQPzPEL+oPsZAQiGR+XWDzUBK0AzGJpTTQEC2FmXv+dlADn2+UHE74UBJBA/o79zmQBUrCUh1Ve5AGzdFsXUf9EBNbT2fw7L6QFGhDgQOtgFBp0OwQp1/B0GIoKTHSi0PQdkTjtSjrhRBOjkk9rpwG0FM5h8jEzQiQRw2JxzQJihB/////48FMEE="},"shape":[49],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1054","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1055"}}},"glyph":{"type":"object","name":"Quad","id":"p1050","attributes":{"left":{"type":"field","field":"left"},"right":{"type":"field","field":"right"},"bottom":{"type":"value","value":0},"top":{"type":"field","field":"top"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.6},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.6},"hatch_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Quad","id":"p1051","attributes":{"left":{"type":"field","field":"left"},"right":{"type":"field","field":"right"},"bottom":{"type":"value","value":0},"top":{"type":"field","field":"top"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Quad","id":"p1052","attributes":{"left":{"type":"field","field":"left"},"right":{"type":"field","field":"right"},"bottom":{"type":"value","value":0},"top":{"type":"field","field":"top"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1010","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1023"},{"type":"object","name":"WheelZoomTool","id":"p1024","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1025","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1026","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1032","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1031","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"SaveTool","id":"p1033"},{"type":"object","name":"ResetTool","id":"p1034"},{"type":"object","name":"HelpTool","id":"p1035"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1018","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1019","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1020"},"axis_label":"Probability Density","major_label_policy":{"type":"object","name":"AllLabels","id":"p1021"}}}],"below":[{"type":"object","name":"LogAxis","id":"p1013","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p1014","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p1015"},"axis_label":"Drainage Area (km\\u00b2)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1016"}}}],"center":[{"type":"object","name":"Grid","id":"p1017","attributes":{"axis":{"id":"p1013"}}},{"type":"object","name":"Grid","id":"p1022","attributes":{"dimension":1,"axis":{"id":"p1018"}}},{"type":"object","name":"Legend","id":"p1045","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p1046","attributes":{"label":{"type":"value","value":"HYDAT (N=8012)"},"renderers":[{"id":"p1042"}]}},{"type":"object","name":"LegendItem","id":"p1056","attributes":{"label":{"type":"value","value":"HYSETS (N=2375)"},"renderers":[{"id":"p1053"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"4f9db6c6-b54b-4b91-83a5-c062fb12d2f6","roots":{"p1001":"f608296b-52e0-4db6-8ce0-54467cbe9d07"},"root_ids":["p1001"]}];
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