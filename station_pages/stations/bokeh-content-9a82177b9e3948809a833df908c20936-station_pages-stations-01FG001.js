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
    
    
    const element = document.getElementById("c9c3676a-5ba3-46b7-8004-c7b8177b5cde");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c9c3676a-5ba3-46b7-8004-c7b8177b5cde' but no matching script tag was found.")
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
                  const docs_json = '{"95ca47d1-8c63-4e8c-8469-9e1b4a482ce0":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p76694","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p76695"},"y_range":{"type":"object","name":"DataRange1d","id":"p76696"},"x_scale":{"type":"object","name":"LinearScale","id":"p76703"},"y_scale":{"type":"object","name":"LinearScale","id":"p76704"},"title":{"type":"object","name":"Title","id":"p76701"},"renderers":[{"type":"object","name":"TileRenderer","id":"p76728","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p76727","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p76736","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p76730","attributes":{"selected":{"type":"object","name":"Selection","id":"p76731","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p76732"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p76737","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p76738"}}},"glyph":{"type":"object","name":"Patch","id":"p76733","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p76734","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p76735","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p76748","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p76742","attributes":{"selected":{"type":"object","name":"Selection","id":"p76743","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p76744"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p76749","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p76750"}}},"glyph":{"type":"object","name":"Scatter","id":"p76745","attributes":{"x":{"type":"value","value":-6813281.604129611},"y":{"type":"value","value":5763329.304147429},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p76746","attributes":{"x":{"type":"value","value":-6813281.604129611},"y":{"type":"value","value":5763329.304147429},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p76747","attributes":{"x":{"type":"value","value":-6813281.604129611},"y":{"type":"value","value":5763329.304147429},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p76758","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p76752","attributes":{"selected":{"type":"object","name":"Selection","id":"p76753","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p76754"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p76759","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p76760"}}},"glyph":{"type":"object","name":"Scatter","id":"p76755","attributes":{"x":{"type":"value","value":-6813289.396493966},"y":{"type":"value","value":5763271.724615312},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p76756","attributes":{"x":{"type":"value","value":-6813289.396493966},"y":{"type":"value","value":5763271.724615312},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p76757","attributes":{"x":{"type":"value","value":-6813289.396493966},"y":{"type":"value","value":5763271.724615312},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p76702","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p76715"},{"type":"object","name":"WheelZoomTool","id":"p76716","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p76717","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p76718","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p76724","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p76723","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p76725"},{"type":"object","name":"SaveTool","id":"p76726"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p76710","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p76711","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p76712","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p76713"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p76705","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p76706","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p76707","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p76708"}}}],"center":[{"type":"object","name":"Grid","id":"p76709","attributes":{"axis":{"id":"p76705"}}},{"type":"object","name":"Grid","id":"p76714","attributes":{"dimension":1,"axis":{"id":"p76710"}}},{"type":"object","name":"Legend","id":"p76739","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p76740","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p76736"}]}},{"type":"object","name":"LegendItem","id":"p76751","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p76748"}]}},{"type":"object","name":"LegendItem","id":"p76761","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p76758"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"95ca47d1-8c63-4e8c-8469-9e1b4a482ce0","roots":{"p76694":"c9c3676a-5ba3-46b7-8004-c7b8177b5cde"},"root_ids":["p76694"]}];
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