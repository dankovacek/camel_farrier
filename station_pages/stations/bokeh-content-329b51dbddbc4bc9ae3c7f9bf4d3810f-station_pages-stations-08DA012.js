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
    
    
    const element = document.getElementById("a033670c-d27f-4a95-96d5-352ec7b6dc62");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a033670c-d27f-4a95-96d5-352ec7b6dc62' but no matching script tag was found.")
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
                  const docs_json = '{"19ea89b9-0735-4a20-9060-7221c29a9598":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p977194","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p977195"},"y_range":{"type":"object","name":"DataRange1d","id":"p977196"},"x_scale":{"type":"object","name":"LinearScale","id":"p977203"},"y_scale":{"type":"object","name":"LinearScale","id":"p977204"},"title":{"type":"object","name":"Title","id":"p977201"},"renderers":[{"type":"object","name":"TileRenderer","id":"p977228","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p977227","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p977236","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p977230","attributes":{"selected":{"type":"object","name":"Selection","id":"p977231","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p977232"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p977237","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p977238"}}},"glyph":{"type":"object","name":"Patch","id":"p977233","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p977234","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p977235","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p977248","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p977242","attributes":{"selected":{"type":"object","name":"Selection","id":"p977243","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p977244"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p977249","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p977250"}}},"glyph":{"type":"object","name":"Scatter","id":"p977245","attributes":{"x":{"type":"value","value":-14385762.135469347},"y":{"type":"value","value":7616869.872512225},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p977246","attributes":{"x":{"type":"value","value":-14385762.135469347},"y":{"type":"value","value":7616869.872512225},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p977247","attributes":{"x":{"type":"value","value":-14385762.135469347},"y":{"type":"value","value":7616869.872512225},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p977258","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p977252","attributes":{"selected":{"type":"object","name":"Selection","id":"p977253","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p977254"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p977259","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p977260"}}},"glyph":{"type":"object","name":"Scatter","id":"p977255","attributes":{"x":{"type":"value","value":-14385704.249334136},"y":{"type":"value","value":7616914.003018625},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p977256","attributes":{"x":{"type":"value","value":-14385704.249334136},"y":{"type":"value","value":7616914.003018625},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p977257","attributes":{"x":{"type":"value","value":-14385704.249334136},"y":{"type":"value","value":7616914.003018625},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p977202","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p977215"},{"type":"object","name":"WheelZoomTool","id":"p977216","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p977217","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p977218","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p977224","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p977223","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p977225"},{"type":"object","name":"SaveTool","id":"p977226"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p977210","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p977211","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p977212","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p977213"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p977205","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p977206","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p977207","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p977208"}}}],"center":[{"type":"object","name":"Grid","id":"p977209","attributes":{"axis":{"id":"p977205"}}},{"type":"object","name":"Grid","id":"p977214","attributes":{"dimension":1,"axis":{"id":"p977210"}}},{"type":"object","name":"Legend","id":"p977239","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p977240","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p977236"}]}},{"type":"object","name":"LegendItem","id":"p977251","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p977248"}]}},{"type":"object","name":"LegendItem","id":"p977261","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p977258"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"19ea89b9-0735-4a20-9060-7221c29a9598","roots":{"p977194":"a033670c-d27f-4a95-96d5-352ec7b6dc62"},"root_ids":["p977194"]}];
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