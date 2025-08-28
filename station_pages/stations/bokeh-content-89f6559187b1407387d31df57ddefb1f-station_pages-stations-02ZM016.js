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
    
    
    const element = document.getElementById("a655fdcd-61a4-4402-ac73-4039a0968edc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a655fdcd-61a4-4402-ac73-4039a0968edc' but no matching script tag was found.")
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
                  const docs_json = '{"e478ecae-68b2-4661-a189-ccad11c9e151":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p419807","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p419808"},"y_range":{"type":"object","name":"DataRange1d","id":"p419809"},"x_scale":{"type":"object","name":"LinearScale","id":"p419816"},"y_scale":{"type":"object","name":"LinearScale","id":"p419817"},"title":{"type":"object","name":"Title","id":"p419814"},"renderers":[{"type":"object","name":"TileRenderer","id":"p419841","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p419840","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p419849","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419843","attributes":{"selected":{"type":"object","name":"Selection","id":"p419844","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419845"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p419850","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419851"}}},"glyph":{"type":"object","name":"Patch","id":"p419846","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p419847","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p419848","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p419861","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419855","attributes":{"selected":{"type":"object","name":"Selection","id":"p419856","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419857"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p419862","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419863"}}},"glyph":{"type":"object","name":"Scatter","id":"p419858","attributes":{"x":{"type":"value","value":-5912981.882754287},"y":{"type":"value","value":6000158.615634775},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p419859","attributes":{"x":{"type":"value","value":-5912981.882754287},"y":{"type":"value","value":6000158.615634775},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p419860","attributes":{"x":{"type":"value","value":-5912981.882754287},"y":{"type":"value","value":6000158.615634775},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p419871","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p419865","attributes":{"selected":{"type":"object","name":"Selection","id":"p419866","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p419867"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p419872","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p419873"}}},"glyph":{"type":"object","name":"Scatter","id":"p419868","attributes":{"x":{"type":"value","value":-5912949.600101957},"y":{"type":"value","value":6000207.911585109},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p419869","attributes":{"x":{"type":"value","value":-5912949.600101957},"y":{"type":"value","value":6000207.911585109},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p419870","attributes":{"x":{"type":"value","value":-5912949.600101957},"y":{"type":"value","value":6000207.911585109},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p419815","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p419828"},{"type":"object","name":"WheelZoomTool","id":"p419829","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p419830","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p419831","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p419837","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p419836","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p419838"},{"type":"object","name":"SaveTool","id":"p419839"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p419823","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p419824","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p419825","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p419826"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p419818","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p419819","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p419820","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p419821"}}}],"center":[{"type":"object","name":"Grid","id":"p419822","attributes":{"axis":{"id":"p419818"}}},{"type":"object","name":"Grid","id":"p419827","attributes":{"dimension":1,"axis":{"id":"p419823"}}},{"type":"object","name":"Legend","id":"p419852","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p419853","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p419849"}]}},{"type":"object","name":"LegendItem","id":"p419864","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p419861"}]}},{"type":"object","name":"LegendItem","id":"p419874","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p419871"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"e478ecae-68b2-4661-a189-ccad11c9e151","roots":{"p419807":"a655fdcd-61a4-4402-ac73-4039a0968edc"},"root_ids":["p419807"]}];
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