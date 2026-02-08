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
    
    
    const element = document.getElementById("b001bb09-132b-4d8a-87ce-032977c8fde1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b001bb09-132b-4d8a-87ce-032977c8fde1' but no matching script tag was found.")
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
                  const docs_json = '{"a5fc7a46-8565-4c6c-9b91-d0b9873db606":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p484817","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p484818"}}},"roots":[{"type":"object","name":"Column","id":"p484886","attributes":{"children":[{"type":"object","name":"Figure","id":"p484819","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p484820","attributes":{"start":-12792861.45,"end":-12790257.55}},"y_range":{"type":"object","name":"DataRange1d","id":"p484821","attributes":{"start":6406321.6,"end":6408474.4}},"x_scale":{"type":"object","name":"LinearScale","id":"p484829"},"y_scale":{"type":"object","name":"LinearScale","id":"p484830"},"title":{"type":"object","name":"Title","id":"p484822"},"renderers":[{"type":"object","name":"TileRenderer","id":"p484854","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p484853","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p484865","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p484856","attributes":{"selected":{"type":"object","name":"Selection","id":"p484857","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p484858"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 2.018655180937752}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12790837.0, 6406570.0], [-12790850.0, 6406615.0], [-12790939.0, 6406589.0], [-12790952.0, 6406634.0], [-12790996.0, 6406620.0], [-12791009.0, 6406665.0], [-12791098.0, 6406639.0], [-12791111.0, 6406684.0], [-12791111.917535115, 6406683.7349343], [-12791112.0, 6406684.0], [-12791156.0, 6406671.0], [-12791143.264569843, 6406626.915818687], [-12791187.0, 6406613.0], [-12791200.0, 6406658.0], [-12791200.917535115, 6406657.7349343], [-12791201.0, 6406658.0], [-12791245.0, 6406646.0], [-12791257.0, 6406690.0], [-12791347.0, 6406664.0], [-12791359.0, 6406709.0], [-12791403.961086806, 6406695.865300484], [-12791404.0, 6406696.0], [-12791448.038913194, 6406683.134699516], [-12791461.0, 6406728.0], [-12791505.961086806, 6406714.865300484], [-12791506.0, 6406715.0], [-12791639.0, 6406677.0], [-12791642.137931034, 6406686.862068965], [-12791652.0, 6406721.0], [-12791652.91495327, 6406720.73271028], [-12791653.0, 6406721.0], [-12791741.349445885, 6406696.18273992], [-12791754.0, 6406739.0], [-12791843.0, 6406714.0], [-12791856.0, 6406758.0], [-12791900.67315175, 6406744.949416342], [-12791901.0, 6406746.0], [-12791945.305318903, 6406733.056873129], [-12791958.0, 6406777.0], [-12792001.752808988, 6406764.073033708], [-12792002.0, 6406765.0], [-12792002.2650657, 6406764.917535116], [-12792015.0, 6406809.0], [-12792059.66743649, 6406796.096073903], [-12792072.0, 6406840.0], [-12792072.65773672, 6406839.815242494], [-12792073.0, 6406841.0], [-12792161.08504673, 6406815.26728972], [-12792171.862068966, 6406849.137931035], [-12792175.0, 6406860.0], [-12792219.0, 6406847.0], [-12792230.823933976, 6406891.339752407], [-12792187.0, 6406904.0], [-12792303.0, 6407306.0], [-12792303.922441486, 6407305.733516904], [-12792304.0, 6407306.0], [-12792348.0, 6407294.0], [-12792361.0, 6407339.0], [-12792405.0, 6407325.0], [-12792508.0, 6407683.0], [-12792498.736842105, 6407685.736842105], [-12792464.0, 6407695.0], [-12792464.261447046, 6407695.922754282], [-12792464.0, 6407696.0], [-12792489.5, 6407785.0], [-12792514.738552954, 6407874.077245718], [-12792471.0, 6407887.0], [-12792561.0, 6408200.0], [-12792472.0, 6408226.0], [-12792459.0, 6408181.0], [-12792389.347826088, 6408201.347826087], [-12792369.925714286, 6408206.742857143], [-12792357.0, 6408162.0], [-12792312.914029287, 6408174.735947095], [-12792306.84, 6408156.08], [-12792300.0, 6408131.0], [-12792255.0, 6408144.0], [-12792243.0, 6408099.0], [-12792242.076049553, 6408099.263248451], [-12792242.0, 6408099.0], [-12792202.530434782, 6408110.530434783], [-12792064.0, 6408150.0], [-12792051.0, 6408106.0], [-12792007.0, 6408119.0], [-12791994.0, 6408074.0], [-12791905.0, 6408100.0], [-12791892.0, 6408055.0], [-12791847.0, 6408068.0], [-12791835.0, 6408023.0], [-12791746.0, 6408049.0], [-12791733.0, 6408004.0], [-12791688.0, 6408018.0], [-12791675.0, 6407973.0], [-12791586.0, 6407999.0], [-12791560.0, 6407909.0], [-12791338.0, 6407974.0], [-12791325.0, 6407929.0], [-12791280.917535115, 6407941.7349343], [-12791272.894736841, 6407915.947368421], [-12791268.0, 6407898.0], [-12791267.366475316, 6407898.177956372], [-12791267.0, 6407897.0], [-12791178.92163833, 6407922.730757342], [-12791140.0, 6407789.0], [-12791095.92297174, 6407801.73336372], [-12791083.0, 6407757.0], [-12791038.0, 6407771.0], [-12791012.0, 6407681.0], [-12790968.0, 6407694.0], [-12790929.0, 6407559.0], [-12790884.917535115, 6407572.714544631], [-12790872.0, 6407528.0], [-12790917.0, 6407516.0], [-12790891.0, 6407426.0], [-12790936.0, 6407413.0], [-12790922.0, 6407368.0], [-12790878.0, 6407381.0], [-12790852.0, 6407292.0], [-12790808.0, 6407304.0], [-12790743.0, 6407082.0], [-12790742.934256054, 6407082.017930167], [-12790730.0, 6407037.0], [-12790686.266170312, 6407049.921358772], [-12790686.0, 6407049.0], [-12790685.735430157, 6407049.084181313], [-12790673.0, 6407005.0], [-12790628.0, 6407018.0], [-12790602.519963427, 6406928.149344712], [-12790603.0, 6406928.0], [-12790590.134461682, 6406883.960272685], [-12790634.0, 6406871.0], [-12790621.339752408, 6406827.176066025], [-12790622.0, 6406827.0], [-12790621.632079747, 6406825.817399184], [-12790666.0, 6406813.0], [-12790653.227492517, 6406768.787474096], [-12790686.529411765, 6406759.05882353], [-12790698.0, 6406756.0], [-12790685.0, 6406711.0], [-12790729.0, 6406698.0], [-12790728.817399185, 6406697.367920253], [-12790730.0, 6406697.0], [-12790716.0, 6406653.0], [-12790761.0, 6406640.0], [-12790748.0, 6406596.0], [-12790837.0, 6406570.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p484866","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p484867"}}},"glyph":{"type":"object","name":"Patches","id":"p484862","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p484863","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p484864","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p484880","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p484871","attributes":{"selected":{"type":"object","name":"Selection","id":"p484872","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p484873"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"2\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0021435967255029826}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12790608.0, 6406782.0], [-12790653.227492517, 6406768.787474096], [-12790666.0, 6406813.0], [-12790621.632079747, 6406825.817399184], [-12790608.0, 6406782.0]]]}}, {\\"id\\": \\"3\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.002117634541403968}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12790577.0, 6406839.0], [-12790621.339752408, 6406827.176066025], [-12790634.0, 6406871.0], [-12790590.134461682, 6406883.960272685], [-12790577.0, 6406839.0]]]}}, {\\"id\\": \\"4\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0042685315453028306}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12790584.0, 6407030.0], [-12790558.0, 6406942.0], [-12790602.519963427, 6406928.149344712], [-12790628.0, 6407018.0], [-12790584.0, 6407030.0]]]}}, {\\"id\\": \\"5\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.002156132284905296}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12790642.0, 6407063.0], [-12790628.0, 6407018.0], [-12790673.0, 6407005.0], [-12790685.735430157, 6407049.084181313], [-12790642.0, 6407063.0]]]}}, {\\"id\\": \\"6\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.002112537300293334}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12790699.0, 6407094.0], [-12790686.266170312, 6407049.921358772], [-12790730.0, 6407037.0], [-12790742.934256054, 6407082.017930167], [-12790699.0, 6407094.0]]]}}, {\\"id\\": \\"26\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0021635253735054283}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12792047.0, 6406751.0], [-12792059.66743649, 6406796.096073903], [-12792015.0, 6406809.0], [-12792002.2650657, 6406764.917535116], [-12792047.0, 6406751.0]]]}}, {\\"id\\": \\"27\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0021050120366904886}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12791990.0, 6406720.0], [-12792001.752808988, 6406764.073033708], [-12791958.0, 6406777.0], [-12791945.305318903, 6406733.056873129], [-12791990.0, 6406720.0]]]}}, {\\"id\\": \\"28\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0021519007781823168}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12791887.0, 6406701.0], [-12791900.67315175, 6406744.949416342], [-12791856.0, 6406758.0], [-12791843.0, 6406714.0], [-12791754.0, 6406739.0], [-12791887.0, 6406701.0]]]}}, {\\"id\\": \\"31\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.002187432650230825}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12791493.0, 6406670.0], [-12791505.961086806, 6406714.865300484], [-12791461.0, 6406728.0], [-12791448.038913194, 6406683.134699516], [-12791493.0, 6406670.0]]]}}, {\\"id\\": \\"32\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0021747163251154126}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12791391.0, 6406651.0], [-12791403.961086806, 6406695.865300484], [-12791359.0, 6406709.0], [-12791347.0, 6406664.0], [-12791257.0, 6406690.0], [-12791391.0, 6406651.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p484881","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p484882"}}},"glyph":{"type":"object","name":"Patches","id":"p484877","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p484878","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p484879","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p484828","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p484841"},{"type":"object","name":"WheelZoomTool","id":"p484842","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p484843","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p484844","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p484850","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p484849","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p484851"},{"type":"object","name":"SaveTool","id":"p484852"},{"type":"object","name":"HoverTool","id":"p484870","attributes":{"renderers":[{"id":"p484865"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p484884","attributes":{"renderers":[{"id":"p484880"}],"tooltips":[["New only","June 2024 / juin 2024"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p484836","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p484837","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p484838","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p484839"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p484831","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p484832","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p484833","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p484834"}}}],"center":[{"type":"object","name":"Grid","id":"p484835","attributes":{"axis":{"id":"p484831"}}},{"type":"object","name":"Grid","id":"p484840","attributes":{"dimension":1,"axis":{"id":"p484836"}}},{"type":"object","name":"Legend","id":"p484868","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p484869","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p484865"}]}},{"type":"object","name":"LegendItem","id":"p484883","attributes":{"label":{"type":"value","value":"New only (June 2024 / juin 2024)"},"renderers":[{"id":"p484880"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p484885","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"a5fc7a46-8565-4c6c-9b91-d0b9873db606","roots":{"p484886":"b001bb09-132b-4d8a-87ce-032977c8fde1"},"root_ids":["p484886"]}];
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