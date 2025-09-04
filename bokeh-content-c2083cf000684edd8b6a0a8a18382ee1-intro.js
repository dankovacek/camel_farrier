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
    
    
    const element = document.getElementById("b9f14fd9-3f18-428d-acd5-6d08eeedd04c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b9f14fd9-3f18-428d-acd5-6d08eeedd04c' but no matching script tag was found.")
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
                  const docs_json = '{"b407e9cc-7e69-4edf-9775-8524ff0fb7e7":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1073","attributes":{"width":900,"height":700,"x_range":{"type":"object","name":"DataRange1d","id":"p1074"},"y_range":{"type":"object","name":"DataRange1d","id":"p1075"},"x_scale":{"type":"object","name":"LinearScale","id":"p1083"},"y_scale":{"type":"object","name":"LinearScale","id":"p1084"},"title":{"type":"object","name":"Title","id":"p1076","attributes":{"text":"WSC Station Map View"}},"renderers":[{"type":"object","name":"TileRenderer","id":"p1109","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p1108","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p1121","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1111","attributes":{"selected":{"type":"object","name":"Selection","id":"p1112","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1113"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAEAAAACAAAAAwAAAAQAAAA="},"shape":[5],"dtype":"int32","order":"little"}],["STATION_NUMBER",{"type":"ndarray","array":["02EC009","05JA006","08HF013","08NM240","10KB001"],"shape":[5],"dtype":"object","order":"little"}],["DRAINAGE_AREA_GROSS",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAAZkAAAAAAAKBzQAAAAMDMTDBAAAAAYI/CE0AAAAAAAOi8QA=="},"shape":[5],"dtype":"float64","order":"little"}],["DRAINAGE_AREA_EFFECT",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAA+H8AAAAAAKBzQAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fw=="},"shape":[5],"dtype":"float64","order":"little"}],["LONGITUDE",{"type":"ndarray","array":{"type":"bytes","data":"F4ebNazgYMG+2mWBr6pmwcmeKVXhJGvBjqOR2ANaacHmZfDJQRxrwQ=="},"shape":[5],"dtype":"float64","order":"little"}],["LATITUDE",{"type":"ndarray","array":{"type":"bytes","data":"qveqzbPnVEG78jSGZkJYQfFYHztT7lhB/P5DklxcWEHA/YZmyHliQQ=="},"shape":[5],"dtype":"float64","order":"little"}],["PROV_TERR_STATE_LOC",{"type":"ndarray","array":["ON","SK","BC","BC","NT"],"shape":[5],"dtype":"object","order":"little"}],["HYD_STATUS",{"type":"ndarray","array":["Active","Active","Active","Active","Active"],"shape":[5],"dtype":"object","order":"little"}],["RHBN",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAAAAAAAAAAAQAAAAAAAAA="},"shape":[5],"dtype":"int32","order":"little"}],["colour",{"type":"ndarray","array":["green","green","green","green","green"],"shape":[5],"dtype":"object","order":"little"}],["station_link",{"type":"ndarray","array":["station_pages/stations/02EC009.html","station_pages/stations/05JA006.html","station_pages/stations/08HF013.html","station_pages/stations/08NM240.html","station_pages/stations/10KB001.html"],"shape":[5],"dtype":"object","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1122","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1123"}}},"glyph":{"type":"object","name":"Scatter","id":"p1117","attributes":{"x":{"type":"field","field":"LONGITUDE"},"y":{"type":"field","field":"LATITUDE"},"size":{"type":"value","value":10},"line_color":{"type":"field","field":"colour"},"line_alpha":{"type":"value","value":0.7},"fill_color":{"type":"field","field":"colour"},"fill_alpha":{"type":"value","value":0.7},"hatch_color":{"type":"field","field":"colour"},"hatch_alpha":{"type":"value","value":0.7},"marker":{"type":"value","value":"triangle"}}},"selection_glyph":{"type":"object","name":"Scatter","id":"p1119","attributes":{"x":{"type":"field","field":"LONGITUDE"},"y":{"type":"field","field":"LATITUDE"},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"gold"},"line_alpha":{"type":"value","value":0.7},"fill_color":{"type":"value","value":"gold"},"fill_alpha":{"type":"value","value":0.7},"hatch_color":{"type":"value","value":"gold"},"hatch_alpha":{"type":"value","value":0.7},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1118","attributes":{"x":{"type":"field","field":"LONGITUDE"},"y":{"type":"field","field":"LATITUDE"},"size":{"type":"value","value":10},"line_color":{"type":"field","field":"colour"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"field","field":"colour"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"field","field":"colour"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1120","attributes":{"x":{"type":"field","field":"LONGITUDE"},"y":{"type":"field","field":"LATITUDE"},"size":{"type":"value","value":10},"line_color":{"type":"field","field":"colour"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"field","field":"colour"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"field","field":"colour"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1082","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1095"},{"type":"object","name":"WheelZoomTool","id":"p1096","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1097","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1098","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1104","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1103","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"SaveTool","id":"p1105"},{"type":"object","name":"ResetTool","id":"p1106"},{"type":"object","name":"HelpTool","id":"p1107"},{"type":"object","name":"HoverTool","id":"p1126","attributes":{"renderers":"auto","tooltips":[["Station ID","@STATION_NUMBER"],["Gross Drainage Area (km\\u00b2)","@DRAINAGE_AREA_GROSS"],["Prov/Terr","@PROV_TERR_STATE_LOC"],["Status","@HYD_STATUS"]]}},{"type":"object","name":"TapTool","id":"p1128","attributes":{"renderers":"auto","callback":{"type":"object","name":"OpenURL","id":"p1127","attributes":{"url":"@station_link"}}}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p1090","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1091","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1092","attributes":{"dimension":"lat"}},"axis_label":"Latitude","major_label_policy":{"type":"object","name":"AllLabels","id":"p1093"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p1085","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1086","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1087","attributes":{"dimension":"lon"}},"axis_label":"Longitude","axis_label_text_font":"Bitstream Charter","major_label_policy":{"type":"object","name":"AllLabels","id":"p1088"}}}],"center":[{"type":"object","name":"Grid","id":"p1089","attributes":{"axis":{"id":"p1085"}}},{"type":"object","name":"Grid","id":"p1094","attributes":{"dimension":1,"axis":{"id":"p1090"}}},{"type":"object","name":"Legend","id":"p1124","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p1125","attributes":{"label":{"type":"value","value":"WSC Stations"},"renderers":[{"id":"p1121"}]}}]}}],"match_aspect":true}}]}}';
                  const render_items = [{"docid":"b407e9cc-7e69-4edf-9775-8524ff0fb7e7","roots":{"p1073":"b9f14fd9-3f18-428d-acd5-6d08eeedd04c"},"root_ids":["p1073"]}];
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