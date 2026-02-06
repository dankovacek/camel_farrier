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
    
    
    const element = document.getElementById("de22580b-2250-486d-b33f-8c2c65e76eae");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'de22580b-2250-486d-b33f-8c2c65e76eae' but no matching script tag was found.")
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
                  const docs_json = '{"69328653-c37b-401c-8b4e-77e7428bca81":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p108769","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p108770"}}},"roots":[{"type":"object","name":"Column","id":"p108824","attributes":{"children":[{"type":"object","name":"Figure","id":"p108771","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p108772","attributes":{"start":-13692988.3,"end":-13687655.7}},"y_range":{"type":"object","name":"DataRange1d","id":"p108773","attributes":{"start":6424735.1,"end":6430514.9}},"x_scale":{"type":"object","name":"LinearScale","id":"p108781"},"y_scale":{"type":"object","name":"LinearScale","id":"p108782"},"title":{"type":"object","name":"Title","id":"p108774"},"renderers":[{"type":"object","name":"TileRenderer","id":"p108806","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p108805","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p108817","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p108808","attributes":{"selected":{"type":"object","name":"Selection","id":"p108809","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p108810"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 11.923733}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13689636.0, 6425530.0], [-13689935.0, 6425402.0], [-13689953.0, 6425446.0], [-13689996.0, 6425427.0], [-13690178.0, 6425857.0], [-13690220.0, 6425838.0], [-13690275.0, 6425966.0], [-13690317.0, 6425948.0], [-13690354.0, 6426035.0], [-13690396.0, 6426016.0], [-13690415.0, 6426059.0], [-13690585.0, 6425986.0], [-13690604.0, 6426028.0], [-13690646.0, 6426010.0], [-13690664.0, 6426054.0], [-13690708.0, 6426035.0], [-13690726.0, 6426078.0], [-13690769.0, 6426061.0], [-13690787.0, 6426102.0], [-13690829.0, 6426085.0], [-13690848.0, 6426128.0], [-13690933.0, 6426092.0], [-13690952.0, 6426133.0], [-13691208.0, 6426024.0], [-13691226.0, 6426067.0], [-13691269.0, 6426048.0], [-13691287.0, 6426092.0], [-13691372.0, 6426055.0], [-13691354.0, 6426012.0], [-13691440.0, 6425976.0], [-13691513.0, 6426147.0], [-13691469.0, 6426166.0], [-13691506.0, 6426252.0], [-13691548.0, 6426233.0], [-13691603.0, 6426363.0], [-13691688.0, 6426327.0], [-13691707.0, 6426368.0], [-13691750.0, 6426351.0], [-13691767.0, 6426394.0], [-13691811.0, 6426375.0], [-13691920.0, 6426632.0], [-13691877.0, 6426651.0], [-13691950.0, 6426822.0], [-13691907.0, 6426840.0], [-13691924.0, 6426883.0], [-13691840.0, 6426919.0], [-13691858.0, 6426962.0], [-13691815.0, 6426981.0], [-13691851.0, 6427066.0], [-13691809.0, 6427085.0], [-13691863.0, 6427213.0], [-13691820.0, 6427232.0], [-13692038.0, 6427747.0], [-13692081.0, 6427728.0], [-13692172.0, 6427944.0], [-13692215.0, 6427925.0], [-13692233.0, 6427968.0], [-13692276.0, 6427949.0], [-13692294.0, 6427992.0], [-13692336.0, 6427975.0], [-13692373.0, 6428060.0], [-13692330.0, 6428079.0], [-13692366.0, 6428163.0], [-13692324.0, 6428182.0], [-13692360.0, 6428269.0], [-13692317.0, 6428286.0], [-13692335.0, 6428329.0], [-13692250.0, 6428366.0], [-13692286.0, 6428452.0], [-13692244.0, 6428469.0], [-13692316.0, 6428642.0], [-13692274.0, 6428659.0], [-13692292.0, 6428703.0], [-13692250.0, 6428722.0], [-13692267.0, 6428763.0], [-13692224.0, 6428782.0], [-13692243.0, 6428825.0], [-13692199.0, 6428843.0], [-13692308.0, 6429100.0], [-13692266.0, 6429119.0], [-13692303.0, 6429205.0], [-13692046.0, 6429314.0], [-13692064.0, 6429358.0], [-13692021.0, 6429375.0], [-13692003.0, 6429332.0], [-13691960.0, 6429351.0], [-13691942.0, 6429307.0], [-13691899.0, 6429326.0], [-13691863.0, 6429240.0], [-13691692.0, 6429313.0], [-13691674.0, 6429269.0], [-13691631.0, 6429288.0], [-13691613.0, 6429245.0], [-13691570.0, 6429264.0], [-13691552.0, 6429221.0], [-13691509.0, 6429238.0], [-13691455.0, 6429110.0], [-13691411.0, 6429128.0], [-13691393.0, 6429086.0], [-13691052.0, 6429231.0], [-13691070.0, 6429275.0], [-13691027.0, 6429292.0], [-13691045.0, 6429335.0], [-13691003.0, 6429354.0], [-13691021.0, 6429397.0], [-13690893.0, 6429451.0], [-13690928.0, 6429537.0], [-13690886.0, 6429555.0], [-13690904.0, 6429598.0], [-13690604.0, 6429726.0], [-13690622.0, 6429769.0], [-13690580.0, 6429788.0], [-13690598.0, 6429829.0], [-13690555.0, 6429848.0], [-13690518.0, 6429762.0], [-13690433.0, 6429798.0], [-13690415.0, 6429757.0], [-13690373.0, 6429774.0], [-13690354.0, 6429731.0], [-13690268.0, 6429767.0], [-13690250.0, 6429726.0], [-13690122.0, 6429779.0], [-13690104.0, 6429736.0], [-13690061.0, 6429755.0], [-13690043.0, 6429712.0], [-13690000.0, 6429731.0], [-13689964.0, 6429644.0], [-13689878.0, 6429681.0], [-13689842.0, 6429594.0], [-13689799.0, 6429613.0], [-13689780.0, 6429570.0], [-13689738.0, 6429589.0], [-13689720.0, 6429546.0], [-13689677.0, 6429563.0], [-13689659.0, 6429520.0], [-13689617.0, 6429539.0], [-13689598.0, 6429496.0], [-13689556.0, 6429515.0], [-13689538.0, 6429472.0], [-13689494.0, 6429489.0], [-13689477.0, 6429447.0], [-13689433.0, 6429465.0], [-13689415.0, 6429421.0], [-13689373.0, 6429440.0], [-13689336.0, 6429354.0], [-13689294.0, 6429373.0], [-13689275.0, 6429330.0], [-13689318.0, 6429311.0], [-13689227.0, 6429097.0], [-13689185.0, 6429116.0], [-13689166.0, 6429072.0], [-13689124.0, 6429090.0], [-13689032.0, 6428875.0], [-13688990.0, 6428894.0], [-13688972.0, 6428851.0], [-13688929.0, 6428870.0], [-13688911.0, 6428827.0], [-13688868.0, 6428844.0], [-13688887.0, 6428887.0], [-13688715.0, 6428960.0], [-13688697.0, 6428917.0], [-13688654.0, 6428936.0], [-13688636.0, 6428893.0], [-13688508.0, 6428948.0], [-13688489.0, 6428905.0], [-13688447.0, 6428922.0], [-13688410.0, 6428837.0], [-13688368.0, 6428855.0], [-13688350.0, 6428813.0], [-13688307.0, 6428830.0], [-13688271.0, 6428744.0], [-13688356.0, 6428708.0], [-13688338.0, 6428665.0], [-13688380.0, 6428647.0], [-13688344.0, 6428561.0], [-13688387.0, 6428544.0], [-13688351.0, 6428457.0], [-13688393.0, 6428440.0], [-13688376.0, 6428397.0], [-13688418.0, 6428378.0], [-13688400.0, 6428334.0], [-13688442.0, 6428317.0], [-13688425.0, 6428274.0], [-13688467.0, 6428255.0], [-13688431.0, 6428170.0], [-13688474.0, 6428151.0], [-13688438.0, 6428067.0], [-13688480.0, 6428048.0], [-13688462.0, 6428004.0], [-13688505.0, 6427987.0], [-13688487.0, 6427944.0], [-13688615.0, 6427889.0], [-13688597.0, 6427845.0], [-13688639.0, 6427828.0], [-13688604.0, 6427742.0], [-13688646.0, 6427724.0], [-13688574.0, 6427552.0], [-13688530.0, 6427571.0], [-13688422.0, 6427313.0], [-13688465.0, 6427294.0], [-13688428.0, 6427210.0], [-13688471.0, 6427191.0], [-13688435.0, 6427104.0], [-13688478.0, 6427087.0], [-13688441.0, 6427000.0], [-13688484.0, 6426983.0], [-13688466.0, 6426940.0], [-13688551.0, 6426904.0], [-13688534.0, 6426860.0], [-13688576.0, 6426841.0], [-13688558.0, 6426798.0], [-13688600.0, 6426781.0], [-13688564.0, 6426695.0], [-13688607.0, 6426677.0], [-13688589.0, 6426634.0], [-13688632.0, 6426615.0], [-13688614.0, 6426572.0], [-13688700.0, 6426536.0], [-13688681.0, 6426494.0], [-13688724.0, 6426475.0], [-13688705.0, 6426432.0], [-13688749.0, 6426415.0], [-13688730.0, 6426372.0], [-13688815.0, 6426335.0], [-13688834.0, 6426378.0], [-13688877.0, 6426359.0], [-13688859.0, 6426316.0], [-13688944.0, 6426280.0], [-13688926.0, 6426237.0], [-13689097.0, 6426164.0], [-13689060.0, 6426078.0], [-13689274.0, 6425988.0], [-13689293.0, 6426031.0], [-13689463.0, 6425957.0], [-13689428.0, 6425872.0], [-13689598.0, 6425800.0], [-13689580.0, 6425757.0], [-13689666.0, 6425720.0], [-13689647.0, 6425677.0], [-13689690.0, 6425658.0], [-13689636.0, 6425530.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p108818","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p108819"}}},"glyph":{"type":"object","name":"Patches","id":"p108814","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p108815","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p108816","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p108780","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p108793"},{"type":"object","name":"WheelZoomTool","id":"p108794","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p108795","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p108796","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p108802","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p108801","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p108803"},{"type":"object","name":"SaveTool","id":"p108804"},{"type":"object","name":"HoverTool","id":"p108822","attributes":{"renderers":[{"id":"p108817"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p108788","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p108789","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p108790","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p108791"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p108783","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p108784","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p108785","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p108786"}}}],"center":[{"type":"object","name":"Grid","id":"p108787","attributes":{"axis":{"id":"p108783"}}},{"type":"object","name":"Grid","id":"p108792","attributes":{"dimension":1,"axis":{"id":"p108788"}}},{"type":"object","name":"Legend","id":"p108820","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p108821","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p108817"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p108823","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"69328653-c37b-401c-8b4e-77e7428bca81","roots":{"p108824":"de22580b-2250-486d-b33f-8c2c65e76eae"},"root_ids":["p108824"]}];
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