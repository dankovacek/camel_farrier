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
    
    
    const element = document.getElementById("e10eecf5-19ba-4c97-a681-d7f70fb9a710");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e10eecf5-19ba-4c97-a681-d7f70fb9a710' but no matching script tag was found.")
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
                  const docs_json = '{"6d60a731-67cd-40a6-97ef-9129b1205b89":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p848227","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p848228"},"y_range":{"type":"object","name":"DataRange1d","id":"p848229"},"x_scale":{"type":"object","name":"LinearScale","id":"p848236"},"y_scale":{"type":"object","name":"LinearScale","id":"p848237"},"title":{"type":"object","name":"Title","id":"p848234"},"renderers":[{"type":"object","name":"TileRenderer","id":"p848261","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p848260","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p848269","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p848263","attributes":{"selected":{"type":"object","name":"Selection","id":"p848264","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p848265"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p848270","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p848271"}}},"glyph":{"type":"object","name":"Patch","id":"p848266","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p848267","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p848268","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p848281","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p848275","attributes":{"selected":{"type":"object","name":"Selection","id":"p848276","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p848277"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p848282","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p848283"}}},"glyph":{"type":"object","name":"Scatter","id":"p848278","attributes":{"x":{"type":"value","value":-12781069.41178615},"y":{"type":"value","value":7443037.221058334},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p848279","attributes":{"x":{"type":"value","value":-12781069.41178615},"y":{"type":"value","value":7443037.221058334},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p848280","attributes":{"x":{"type":"value","value":-12781069.41178615},"y":{"type":"value","value":7443037.221058334},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p848291","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p848285","attributes":{"selected":{"type":"object","name":"Selection","id":"p848286","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p848287"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p848292","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p848293"}}},"glyph":{"type":"object","name":"Scatter","id":"p848288","attributes":{"x":{"type":"value","value":-12781008.186066214},"y":{"type":"value","value":7442954.851666217},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p848289","attributes":{"x":{"type":"value","value":-12781008.186066214},"y":{"type":"value","value":7442954.851666217},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p848290","attributes":{"x":{"type":"value","value":-12781008.186066214},"y":{"type":"value","value":7442954.851666217},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p848235","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p848248"},{"type":"object","name":"WheelZoomTool","id":"p848249","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p848250","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p848251","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p848257","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p848256","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p848258"},{"type":"object","name":"SaveTool","id":"p848259"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p848243","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p848244","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p848245","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p848246"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p848238","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p848239","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p848240","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p848241"}}}],"center":[{"type":"object","name":"Grid","id":"p848242","attributes":{"axis":{"id":"p848238"}}},{"type":"object","name":"Grid","id":"p848247","attributes":{"dimension":1,"axis":{"id":"p848243"}}},{"type":"object","name":"Legend","id":"p848272","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p848273","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p848269"}]}},{"type":"object","name":"LegendItem","id":"p848284","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p848281"}]}},{"type":"object","name":"LegendItem","id":"p848294","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p848291"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"6d60a731-67cd-40a6-97ef-9129b1205b89","roots":{"p848227":"e10eecf5-19ba-4c97-a681-d7f70fb9a710"},"root_ids":["p848227"]}];
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