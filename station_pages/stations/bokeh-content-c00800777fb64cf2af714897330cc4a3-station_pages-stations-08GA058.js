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
    
    
    const element = document.getElementById("a46adc49-917a-4ee4-b3de-63a1daf804a6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a46adc49-917a-4ee4-b3de-63a1daf804a6' but no matching script tag was found.")
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
                  const docs_json = '{"b44670f5-e537-4d37-ab27-8f582c057329":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p109859","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p109860"}}},"roots":[{"type":"object","name":"Column","id":"p109914","attributes":{"children":[{"type":"object","name":"Figure","id":"p109861","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p109862","attributes":{"start":-13707400.3,"end":-13703133.7}},"y_range":{"type":"object","name":"DataRange1d","id":"p109863","attributes":{"start":6403608.95,"end":6410378.05}},"x_scale":{"type":"object","name":"LinearScale","id":"p109871"},"y_scale":{"type":"object","name":"LinearScale","id":"p109872"},"title":{"type":"object","name":"Title","id":"p109864"},"renderers":[{"type":"object","name":"TileRenderer","id":"p109896","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p109895","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p109907","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p109898","attributes":{"selected":{"type":"object","name":"Selection","id":"p109899","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p109900"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 9.530096}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13703705.0, 6409597.0], [-13703651.0, 6409469.0], [-13703693.0, 6409450.0], [-13703675.0, 6409407.0], [-13703718.0, 6409390.0], [-13703626.0, 6409176.0], [-13703670.0, 6409157.0], [-13703651.0, 6409114.0], [-13703694.0, 6409097.0], [-13703640.0, 6408968.0], [-13703682.0, 6408950.0], [-13703645.0, 6408864.0], [-13703689.0, 6408845.0], [-13703652.0, 6408761.0], [-13703694.0, 6408742.0], [-13703658.0, 6408657.0], [-13703701.0, 6408638.0], [-13703646.0, 6408511.0], [-13703731.0, 6408473.0], [-13703713.0, 6408431.0], [-13703755.0, 6408413.0], [-13703720.0, 6408326.0], [-13703762.0, 6408309.0], [-13703743.0, 6408266.0], [-13703787.0, 6408247.0], [-13703750.0, 6408163.0], [-13703792.0, 6408144.0], [-13703738.0, 6408016.0], [-13703781.0, 6407997.0], [-13703762.0, 6407954.0], [-13703806.0, 6407937.0], [-13703787.0, 6407894.0], [-13703829.0, 6407875.0], [-13703793.0, 6407790.0], [-13703836.0, 6407771.0], [-13703799.0, 6407685.0], [-13703842.0, 6407668.0], [-13703806.0, 6407582.0], [-13703848.0, 6407563.0], [-13703830.0, 6407521.0], [-13703872.0, 6407502.0], [-13703855.0, 6407459.0], [-13703897.0, 6407442.0], [-13703860.0, 6407356.0], [-13703904.0, 6407337.0], [-13703885.0, 6407295.0], [-13703928.0, 6407276.0], [-13703909.0, 6407233.0], [-13703953.0, 6407216.0], [-13703934.0, 6407173.0], [-13704275.0, 6407027.0], [-13704293.0, 6407070.0], [-13704378.0, 6407033.0], [-13704397.0, 6407075.0], [-13704439.0, 6407058.0], [-13704457.0, 6407101.0], [-13704500.0, 6407082.0], [-13704518.0, 6407125.0], [-13704646.0, 6407070.0], [-13704664.0, 6407113.0], [-13704707.0, 6407094.0], [-13704725.0, 6407137.0], [-13704895.0, 6407064.0], [-13704913.0, 6407108.0], [-13704999.0, 6407070.0], [-13704962.0, 6406985.0], [-13705004.0, 6406966.0], [-13704969.0, 6406880.0], [-13705011.0, 6406863.0], [-13704974.0, 6406777.0], [-13705018.0, 6406759.0], [-13704981.0, 6406673.0], [-13705023.0, 6406654.0], [-13704988.0, 6406570.0], [-13705030.0, 6406551.0], [-13705011.0, 6406508.0], [-13705097.0, 6406472.0], [-13705079.0, 6406428.0], [-13705121.0, 6406411.0], [-13705012.0, 6406154.0], [-13705055.0, 6406135.0], [-13704945.0, 6405879.0], [-13704903.0, 6405898.0], [-13704884.0, 6405855.0], [-13704842.0, 6405873.0], [-13704787.0, 6405744.0], [-13704830.0, 6405727.0], [-13704812.0, 6405684.0], [-13704854.0, 6405665.0], [-13704836.0, 6405622.0], [-13705049.0, 6405531.0], [-13705013.0, 6405446.0], [-13705056.0, 6405427.0], [-13705038.0, 6405384.0], [-13705080.0, 6405367.0], [-13705043.0, 6405281.0], [-13705086.0, 6405262.0], [-13705105.0, 6405305.0], [-13705189.0, 6405269.0], [-13705208.0, 6405312.0], [-13705251.0, 6405293.0], [-13705268.0, 6405336.0], [-13705312.0, 6405319.0], [-13705330.0, 6405360.0], [-13705458.0, 6405306.0], [-13705439.0, 6405263.0], [-13705482.0, 6405244.0], [-13705500.0, 6405288.0], [-13705712.0, 6405196.0], [-13705695.0, 6405153.0], [-13705737.0, 6405136.0], [-13705701.0, 6405050.0], [-13705744.0, 6405031.0], [-13705725.0, 6404988.0], [-13705768.0, 6404970.0], [-13705749.0, 6404927.0], [-13705793.0, 6404908.0], [-13705774.0, 6404867.0], [-13705859.0, 6404829.0], [-13705842.0, 6404788.0], [-13705884.0, 6404769.0], [-13705865.0, 6404726.0], [-13705951.0, 6404690.0], [-13705933.0, 6404646.0], [-13705975.0, 6404629.0], [-13705957.0, 6404586.0], [-13706042.0, 6404550.0], [-13706024.0, 6404507.0], [-13706109.0, 6404471.0], [-13706091.0, 6404428.0], [-13706176.0, 6404390.0], [-13706194.0, 6404433.0], [-13706237.0, 6404416.0], [-13706255.0, 6404459.0], [-13706298.0, 6404440.0], [-13706316.0, 6404483.0], [-13706358.0, 6404464.0], [-13706377.0, 6404507.0], [-13706419.0, 6404488.0], [-13706565.0, 6404831.0], [-13706522.0, 6404848.0], [-13706559.0, 6404934.0], [-13706516.0, 6404953.0], [-13706571.0, 6405081.0], [-13706528.0, 6405100.0], [-13706546.0, 6405143.0], [-13706504.0, 6405160.0], [-13706522.0, 6405203.0], [-13706479.0, 6405222.0], [-13706497.0, 6405263.0], [-13706455.0, 6405282.0], [-13706510.0, 6405410.0], [-13706467.0, 6405429.0], [-13706485.0, 6405472.0], [-13706527.0, 6405453.0], [-13706546.0, 6405496.0], [-13706589.0, 6405479.0], [-13706661.0, 6405649.0], [-13706704.0, 6405630.0], [-13706722.0, 6405674.0], [-13706764.0, 6405655.0], [-13706819.0, 6405784.0], [-13706777.0, 6405801.0], [-13706795.0, 6405844.0], [-13706752.0, 6405863.0], [-13706789.0, 6405949.0], [-13706747.0, 6405967.0], [-13706801.0, 6406096.0], [-13706758.0, 6406113.0], [-13706795.0, 6406199.0], [-13706752.0, 6406216.0], [-13706789.0, 6406303.0], [-13706746.0, 6406322.0], [-13706764.0, 6406363.0], [-13706679.0, 6406401.0], [-13706697.0, 6406442.0], [-13706612.0, 6406480.0], [-13706630.0, 6406523.0], [-13706587.0, 6406540.0], [-13706642.0, 6406670.0], [-13706600.0, 6406687.0], [-13706618.0, 6406730.0], [-13706575.0, 6406749.0], [-13706630.0, 6406877.0], [-13706587.0, 6406896.0], [-13706605.0, 6406937.0], [-13706563.0, 6406956.0], [-13706635.0, 6407127.0], [-13706678.0, 6407109.0], [-13706732.0, 6407237.0], [-13706690.0, 6407256.0], [-13706709.0, 6407299.0], [-13706665.0, 6407316.0], [-13706684.0, 6407359.0], [-13706641.0, 6407378.0], [-13706695.0, 6407506.0], [-13706653.0, 6407525.0], [-13706708.0, 6407652.0], [-13706665.0, 6407671.0], [-13706683.0, 6407714.0], [-13706727.0, 6407695.0], [-13706799.0, 6407866.0], [-13706841.0, 6407849.0], [-13706878.0, 6407933.0], [-13706836.0, 6407952.0], [-13706908.0, 6408123.0], [-13706780.0, 6408178.0], [-13706799.0, 6408221.0], [-13706713.0, 6408257.0], [-13706731.0, 6408300.0], [-13706689.0, 6408318.0], [-13706708.0, 6408361.0], [-13706281.0, 6408544.0], [-13706299.0, 6408587.0], [-13706215.0, 6408623.0], [-13706232.0, 6408666.0], [-13706190.0, 6408685.0], [-13706171.0, 6408642.0], [-13706087.0, 6408678.0], [-13706104.0, 6408721.0], [-13706062.0, 6408738.0], [-13706080.0, 6408781.0], [-13705952.0, 6408837.0], [-13705934.0, 6408794.0], [-13705892.0, 6408812.0], [-13705910.0, 6408856.0], [-13705739.0, 6408928.0], [-13705757.0, 6408971.0], [-13705629.0, 6409026.0], [-13705611.0, 6408983.0], [-13705569.0, 6409000.0], [-13705587.0, 6409044.0], [-13705501.0, 6409081.0], [-13705520.0, 6409123.0], [-13705434.0, 6409161.0], [-13705453.0, 6409202.0], [-13705410.0, 6409221.0], [-13705392.0, 6409178.0], [-13705264.0, 6409233.0], [-13705246.0, 6409190.0], [-13705203.0, 6409209.0], [-13705185.0, 6409166.0], [-13705143.0, 6409183.0], [-13705124.0, 6409142.0], [-13705081.0, 6409159.0], [-13705063.0, 6409116.0], [-13705020.0, 6409135.0], [-13705002.0, 6409092.0], [-13704960.0, 6409111.0], [-13704997.0, 6409195.0], [-13704953.0, 6409214.0], [-13704990.0, 6409300.0], [-13704948.0, 6409318.0], [-13704966.0, 6409361.0], [-13704923.0, 6409380.0], [-13704941.0, 6409423.0], [-13704813.0, 6409476.0], [-13704795.0, 6409435.0], [-13704625.0, 6409507.0], [-13704588.0, 6409421.0], [-13704546.0, 6409440.0], [-13704509.0, 6409354.0], [-13704467.0, 6409373.0], [-13704448.0, 6409330.0], [-13704150.0, 6409457.0], [-13704132.0, 6409414.0], [-13704089.0, 6409433.0], [-13704071.0, 6409390.0], [-13704028.0, 6409409.0], [-13704010.0, 6409366.0], [-13703797.0, 6409457.0], [-13703814.0, 6409500.0], [-13703730.0, 6409537.0], [-13703748.0, 6409580.0], [-13703705.0, 6409597.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p109908","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p109909"}}},"glyph":{"type":"object","name":"Patches","id":"p109904","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p109905","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p109906","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p109870","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p109883"},{"type":"object","name":"WheelZoomTool","id":"p109884","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p109885","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p109886","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p109892","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p109891","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p109893"},{"type":"object","name":"SaveTool","id":"p109894"},{"type":"object","name":"HoverTool","id":"p109912","attributes":{"renderers":[{"id":"p109907"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p109878","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p109879","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p109880","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p109881"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p109873","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p109874","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p109875","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p109876"}}}],"center":[{"type":"object","name":"Grid","id":"p109877","attributes":{"axis":{"id":"p109873"}}},{"type":"object","name":"Grid","id":"p109882","attributes":{"dimension":1,"axis":{"id":"p109878"}}},{"type":"object","name":"Legend","id":"p109910","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p109911","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p109907"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p109913","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b44670f5-e537-4d37-ab27-8f582c057329","roots":{"p109914":"a46adc49-917a-4ee4-b3de-63a1daf804a6"},"root_ids":["p109914"]}];
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