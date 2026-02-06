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
    
    
    const element = document.getElementById("a794320c-5cd4-405f-a6bc-a3899274fa44");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a794320c-5cd4-405f-a6bc-a3899274fa44' but no matching script tag was found.")
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
                  const docs_json = '{"c9c9e1b9-bd6a-4d66-89af-bf1b2baca72f":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p5707","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p5708"}}},"roots":[{"type":"object","name":"Column","id":"p5762","attributes":{"children":[{"type":"object","name":"Figure","id":"p5709","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p5710","attributes":{"start":-13085169.0,"end":-13078903.0}},"y_range":{"type":"object","name":"DataRange1d","id":"p5711","attributes":{"start":7049058.6,"end":7054487.4}},"x_scale":{"type":"object","name":"LinearScale","id":"p5719"},"y_scale":{"type":"object","name":"LinearScale","id":"p5720"},"title":{"type":"object","name":"Title","id":"p5712"},"renderers":[{"type":"object","name":"TileRenderer","id":"p5744","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p5743","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p5755","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p5746","attributes":{"selected":{"type":"object","name":"Selection","id":"p5747","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p5748"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 9.982613}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13079626.0, 7049780.0], [-13079914.0, 7049685.0], [-13079930.0, 7049733.0], [-13079978.0, 7049717.0], [-13079993.0, 7049765.0], [-13080041.0, 7049748.0], [-13080058.0, 7049797.0], [-13080106.0, 7049780.0], [-13080121.0, 7049829.0], [-13080169.0, 7049812.0], [-13080202.0, 7049907.0], [-13080249.0, 7049892.0], [-13080265.0, 7049939.0], [-13080361.0, 7049907.0], [-13080377.0, 7049955.0], [-13080425.0, 7049939.0], [-13080441.0, 7049987.0], [-13080489.0, 7049970.0], [-13080504.0, 7050019.0], [-13080552.0, 7050002.0], [-13080569.0, 7050051.0], [-13080617.0, 7050034.0], [-13080648.0, 7050129.0], [-13080696.0, 7050114.0], [-13080713.0, 7050161.0], [-13080760.0, 7050146.0], [-13080776.0, 7050192.0], [-13080824.0, 7050177.0], [-13080839.0, 7050224.0], [-13080887.0, 7050209.0], [-13080920.0, 7050302.0], [-13080967.0, 7050287.0], [-13080983.0, 7050334.0], [-13081031.0, 7050319.0], [-13081048.0, 7050366.0], [-13081143.0, 7050336.0], [-13081159.0, 7050383.0], [-13081207.0, 7050368.0], [-13081222.0, 7050414.0], [-13081271.0, 7050399.0], [-13081303.0, 7050493.0], [-13081398.0, 7050461.0], [-13081415.0, 7050509.0], [-13081511.0, 7050478.0], [-13081526.0, 7050524.0], [-13081622.0, 7050495.0], [-13081638.0, 7050541.0], [-13081734.0, 7050509.0], [-13081750.0, 7050558.0], [-13081798.0, 7050541.0], [-13081813.0, 7050590.0], [-13082198.0, 7050463.0], [-13082213.0, 7050511.0], [-13082261.0, 7050495.0], [-13082277.0, 7050541.0], [-13082326.0, 7050526.0], [-13082341.0, 7050573.0], [-13082485.0, 7050526.0], [-13082500.0, 7050575.0], [-13082596.0, 7050543.0], [-13082613.0, 7050590.0], [-13082661.0, 7050575.0], [-13082676.0, 7050621.0], [-13082724.0, 7050606.0], [-13082756.0, 7050700.0], [-13082804.0, 7050685.0], [-13082820.0, 7050731.0], [-13082916.0, 7050702.0], [-13082932.0, 7050748.0], [-13083076.0, 7050702.0], [-13083091.0, 7050748.0], [-13083235.0, 7050702.0], [-13083252.0, 7050748.0], [-13083300.0, 7050733.0], [-13083315.0, 7050780.0], [-13083459.0, 7050733.0], [-13083475.0, 7050780.0], [-13083523.0, 7050765.0], [-13083539.0, 7050812.0], [-13083635.0, 7050780.0], [-13083650.0, 7050828.0], [-13083698.0, 7050812.0], [-13083730.0, 7050907.0], [-13083683.0, 7050924.0], [-13083730.0, 7051065.0], [-13083683.0, 7051080.0], [-13083730.0, 7051222.0], [-13083683.0, 7051239.0], [-13083730.0, 7051381.0], [-13083681.0, 7051397.0], [-13083746.0, 7051586.0], [-13083794.0, 7051571.0], [-13083842.0, 7051713.0], [-13083890.0, 7051696.0], [-13083953.0, 7051886.0], [-13083905.0, 7051903.0], [-13083936.0, 7051996.0], [-13083888.0, 7052013.0], [-13083936.0, 7052155.0], [-13083888.0, 7052170.0], [-13083921.0, 7052265.0], [-13083969.0, 7052250.0], [-13084080.0, 7052582.0], [-13084032.0, 7052597.0], [-13084048.0, 7052644.0], [-13084096.0, 7052629.0], [-13084112.0, 7052676.0], [-13084160.0, 7052661.0], [-13084271.0, 7052993.0], [-13084224.0, 7053008.0], [-13084239.0, 7053056.0], [-13084287.0, 7053039.0], [-13084303.0, 7053088.0], [-13084352.0, 7053071.0], [-13084446.0, 7053357.0], [-13084398.0, 7053372.0], [-13084446.0, 7053513.0], [-13084350.0, 7053545.0], [-13084366.0, 7053592.0], [-13084270.0, 7053624.0], [-13084287.0, 7053672.0], [-13084238.0, 7053687.0], [-13084255.0, 7053736.0], [-13084159.0, 7053765.0], [-13084175.0, 7053814.0], [-13084031.0, 7053861.0], [-13084014.0, 7053814.0], [-13083966.0, 7053829.0], [-13083951.0, 7053782.0], [-13083903.0, 7053797.0], [-13083886.0, 7053750.0], [-13083791.0, 7053782.0], [-13083775.0, 7053734.0], [-13083727.0, 7053750.0], [-13083711.0, 7053702.0], [-13083664.0, 7053719.0], [-13083647.0, 7053670.0], [-13083599.0, 7053687.0], [-13083583.0, 7053638.0], [-13083536.0, 7053655.0], [-13083519.0, 7053607.0], [-13083471.0, 7053624.0], [-13083455.0, 7053575.0], [-13083264.0, 7053638.0], [-13083247.0, 7053592.0], [-13083199.0, 7053607.0], [-13083184.0, 7053560.0], [-13083136.0, 7053575.0], [-13083120.0, 7053528.0], [-13083073.0, 7053543.0], [-13083056.0, 7053497.0], [-13082960.0, 7053528.0], [-13082944.0, 7053480.0], [-13082897.0, 7053497.0], [-13082880.0, 7053448.0], [-13082736.0, 7053497.0], [-13082721.0, 7053448.0], [-13082673.0, 7053465.0], [-13082656.0, 7053416.0], [-13082560.0, 7053448.0], [-13082545.0, 7053401.0], [-13082497.0, 7053416.0], [-13082481.0, 7053370.0], [-13082432.0, 7053385.0], [-13082417.0, 7053338.0], [-13082369.0, 7053353.0], [-13082353.0, 7053306.0], [-13082306.0, 7053321.0], [-13082289.0, 7053275.0], [-13082097.0, 7053338.0], [-13082082.0, 7053290.0], [-13081937.0, 7053336.0], [-13081921.0, 7053290.0], [-13081874.0, 7053304.0], [-13081841.0, 7053211.0], [-13081793.0, 7053226.0], [-13081778.0, 7053179.0], [-13081730.0, 7053194.0], [-13081714.0, 7053148.0], [-13081667.0, 7053163.0], [-13081650.0, 7053116.0], [-13081602.0, 7053131.0], [-13081539.0, 7052941.0], [-13081491.0, 7052957.0], [-13081458.0, 7052862.0], [-13081315.0, 7052909.0], [-13081251.0, 7052720.0], [-13081203.0, 7052735.0], [-13081156.0, 7052593.0], [-13081108.0, 7052608.0], [-13081092.0, 7052562.0], [-13081044.0, 7052577.0], [-13080980.0, 7052388.0], [-13080932.0, 7052403.0], [-13080901.0, 7052308.0], [-13080853.0, 7052325.0], [-13080821.0, 7052230.0], [-13080773.0, 7052245.0], [-13080757.0, 7052198.0], [-13080709.0, 7052213.0], [-13080693.0, 7052166.0], [-13080645.0, 7052181.0], [-13080629.0, 7052134.0], [-13080581.0, 7052149.0], [-13080566.0, 7052103.0], [-13080517.0, 7052120.0], [-13080501.0, 7052071.0], [-13080405.0, 7052103.0], [-13080390.0, 7052056.0], [-13080342.0, 7052071.0], [-13080325.0, 7052024.0], [-13080229.0, 7052054.0], [-13080214.0, 7052008.0], [-13080310.0, 7051976.0], [-13080294.0, 7051929.0], [-13080390.0, 7051898.0], [-13080357.0, 7051802.0], [-13080405.0, 7051787.0], [-13080359.0, 7051644.0], [-13080406.0, 7051629.0], [-13080326.0, 7051392.0], [-13080374.0, 7051377.0], [-13080327.0, 7051233.0], [-13080278.0, 7051250.0], [-13080263.0, 7051202.0], [-13080215.0, 7051218.0], [-13080072.0, 7050791.0], [-13080120.0, 7050776.0], [-13080072.0, 7050633.0], [-13080120.0, 7050618.0], [-13080088.0, 7050523.0], [-13080136.0, 7050508.0], [-13080105.0, 7050412.0], [-13080153.0, 7050398.0], [-13080089.0, 7050207.0], [-13080137.0, 7050192.0], [-13080058.0, 7049954.0], [-13080009.0, 7049970.0], [-13079993.0, 7049924.0], [-13079946.0, 7049939.0], [-13079930.0, 7049892.0], [-13079882.0, 7049907.0], [-13079865.0, 7049860.0], [-13079818.0, 7049875.0], [-13079802.0, 7049829.0], [-13079754.0, 7049844.0], [-13079738.0, 7049797.0], [-13079643.0, 7049827.0], [-13079626.0, 7049780.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p5756","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p5757"}}},"glyph":{"type":"object","name":"Patches","id":"p5752","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p5753","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p5754","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p5718","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p5731"},{"type":"object","name":"WheelZoomTool","id":"p5732","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p5733","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p5734","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p5740","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p5739","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p5741"},{"type":"object","name":"SaveTool","id":"p5742"},{"type":"object","name":"HoverTool","id":"p5760","attributes":{"renderers":[{"id":"p5755"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p5726","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p5727","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p5728","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p5729"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p5721","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p5722","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p5723","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p5724"}}}],"center":[{"type":"object","name":"Grid","id":"p5725","attributes":{"axis":{"id":"p5721"}}},{"type":"object","name":"Grid","id":"p5730","attributes":{"dimension":1,"axis":{"id":"p5726"}}},{"type":"object","name":"Legend","id":"p5758","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p5759","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p5755"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p5761","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c9c9e1b9-bd6a-4d66-89af-bf1b2baca72f","roots":{"p5762":"a794320c-5cd4-405f-a6bc-a3899274fa44"},"root_ids":["p5762"]}];
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