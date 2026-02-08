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
    
    
    const element = document.getElementById("bd5ab2e0-b919-4bd4-9c1a-896f2cdfc14b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bd5ab2e0-b919-4bd4-9c1a-896f2cdfc14b' but no matching script tag was found.")
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
                  const docs_json = '{"92640b08-d85a-4552-9148-4e8dc978ab89":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p180587","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p180588"}}},"roots":[{"type":"object","name":"Column","id":"p180642","attributes":{"children":[{"type":"object","name":"Figure","id":"p180589","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p180590","attributes":{"start":-13953468.95,"end":-13951814.05}},"y_range":{"type":"object","name":"DataRange1d","id":"p180591","attributes":{"start":6463969.5,"end":6465932.5}},"x_scale":{"type":"object","name":"LinearScale","id":"p180599"},"y_scale":{"type":"object","name":"LinearScale","id":"p180600"},"title":{"type":"object","name":"Title","id":"p180592"},"renderers":[{"type":"object","name":"TileRenderer","id":"p180624","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p180623","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p180635","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p180626","attributes":{"selected":{"type":"object","name":"Selection","id":"p180627","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p180628"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"StationNum\\": \\"08HD013\\", \\"NameNom\\": \\"BARRON CREEK NEAR BLOEDEL\\", \\"Status\\": \\"discontinued\\", \\"Etat\\": \\"ferm\\\\u00e9e\\", \\"Area_km2\\": 0.2853, \\"Aire_km2\\": 0.2853, \\"Version\\": \\"Prerelease/Pr\\\\u00e9liminaire\\", \\"area_km2\\": 0.6929865}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13953012.0, 6464256.0], [-13953139.0, 6464196.0], [-13953159.0, 6464239.0], [-13953201.0, 6464219.0], [-13953241.0, 6464304.0], [-13953199.0, 6464324.0], [-13953278.0, 6464493.0], [-13953024.0, 6464612.0], [-13953004.0, 6464570.0], [-13952962.0, 6464589.0], [-13952942.0, 6464547.0], [-13952900.0, 6464567.0], [-13952880.0, 6464524.0], [-13952795.0, 6464564.0], [-13952815.0, 6464606.0], [-13952773.0, 6464626.0], [-13952852.0, 6464796.0], [-13952809.0, 6464816.0], [-13952928.0, 6465070.0], [-13952886.0, 6465090.0], [-13952905.0, 6465132.0], [-13952863.0, 6465152.0], [-13952843.0, 6465110.0], [-13952801.0, 6465129.0], [-13952821.0, 6465172.0], [-13952651.0, 6465251.0], [-13952671.0, 6465294.0], [-13952587.0, 6465333.0], [-13952606.0, 6465376.0], [-13952564.0, 6465395.0], [-13952584.0, 6465438.0], [-13952541.0, 6465458.0], [-13952561.0, 6465500.0], [-13952519.0, 6465520.0], [-13952578.0, 6465647.0], [-13952451.0, 6465706.0], [-13952431.0, 6465664.0], [-13952389.0, 6465684.0], [-13952350.0, 6465599.0], [-13952223.0, 6465658.0], [-13952144.0, 6465489.0], [-13952101.0, 6465508.0], [-13952082.0, 6465466.0], [-13952039.0, 6465486.0], [-13952020.0, 6465443.0], [-13952062.0, 6465424.0], [-13952042.0, 6465381.0], [-13952084.0, 6465361.0], [-13952005.0, 6465192.0], [-13952090.0, 6465152.0], [-13952070.0, 6465110.0], [-13952155.0, 6465070.0], [-13952135.0, 6465028.0], [-13952262.0, 6464968.0], [-13952242.0, 6464926.0], [-13952369.0, 6464867.0], [-13952350.0, 6464824.0], [-13952392.0, 6464804.0], [-13952372.0, 6464762.0], [-13952541.0, 6464683.0], [-13952522.0, 6464640.0], [-13952606.0, 6464601.0], [-13952587.0, 6464558.0], [-13952629.0, 6464539.0], [-13952609.0, 6464496.0], [-13952778.0, 6464417.0], [-13952798.0, 6464459.0], [-13952967.0, 6464380.0], [-13952948.0, 6464338.0], [-13953032.0, 6464298.0], [-13953012.0, 6464256.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p180636","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p180637"}}},"glyph":{"type":"object","name":"Patches","id":"p180632","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"navy"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"dodgerblue"},"fill_alpha":{"type":"value","value":0.5}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p180633","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"dodgerblue"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p180634","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"navy"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"dodgerblue"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p180598","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p180611"},{"type":"object","name":"WheelZoomTool","id":"p180612","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p180613","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p180614","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p180620","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p180619","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p180621"},{"type":"object","name":"SaveTool","id":"p180622"},{"type":"object","name":"HoverTool","id":"p180640","attributes":{"renderers":[{"id":"p180635"}],"tooltips":[["Version","Prerelease/Pr\\u00e9liminaire"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p180606","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p180607","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p180608","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p180609"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p180601","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p180602","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p180603","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p180604"}}}],"center":[{"type":"object","name":"Grid","id":"p180605","attributes":{"axis":{"id":"p180601"}}},{"type":"object","name":"Grid","id":"p180610","attributes":{"dimension":1,"axis":{"id":"p180606"}}},{"type":"object","name":"Legend","id":"p180638","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p180639","attributes":{"label":{"type":"value","value":"Prerelease/Pr\\u00e9liminaire (2021-12-17)"},"renderers":[{"id":"p180635"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p180641","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"92640b08-d85a-4552-9148-4e8dc978ab89","roots":{"p180642":"bd5ab2e0-b919-4bd4-9c1a-896f2cdfc14b"},"root_ids":["p180642"]}];
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