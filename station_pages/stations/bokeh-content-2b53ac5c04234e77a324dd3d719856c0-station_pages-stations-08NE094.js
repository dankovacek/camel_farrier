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
    
    
    const element = document.getElementById("d1546341-8b0d-4fc0-95e4-510b33a6c82f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd1546341-8b0d-4fc0-95e4-510b33a6c82f' but no matching script tag was found.")
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
                  const docs_json = '{"2b4d905b-4f7e-4446-9ed6-c954445a97c4":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p400774","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p400775"}}},"roots":[{"type":"object","name":"Column","id":"p400843","attributes":{"children":[{"type":"object","name":"Figure","id":"p400776","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p400777","attributes":{"start":-13094498.15,"end":-13089920.85}},"y_range":{"type":"object","name":"DataRange1d","id":"p400778","attributes":{"start":6317981.9,"end":6322056.1}},"x_scale":{"type":"object","name":"LinearScale","id":"p400786"},"y_scale":{"type":"object","name":"LinearScale","id":"p400787"},"title":{"type":"object","name":"Title","id":"p400779"},"renderers":[{"type":"object","name":"TileRenderer","id":"p400811","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p400810","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p400822","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p400813","attributes":{"selected":{"type":"object","name":"Selection","id":"p400814","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p400815"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 6.4772932493916855}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13091963.0, 6318532.5], [-13091985.0, 6318526.0], [-13091992.0, 6318547.0], [-13091999.0, 6318569.0], [-13092108.0, 6318532.5], [-13092217.0, 6318497.0], [-13092219.916666666, 6318505.166666667], [-13092231.0, 6318540.0], [-13092246.0, 6318534.76744186], [-13092275.0, 6318526.0], [-13092261.0, 6318481.0], [-13092347.09948542, 6318452.300171526], [-13092405.0, 6318627.0], [-13092405.60548926, 6318626.802863962], [-13092406.0, 6318628.0], [-13092448.108486017, 6318613.3109932495], [-13092459.379310345, 6318645.620689655], [-13092463.0, 6318657.0], [-13092506.102739725, 6318642.305884184], [-13092550.0, 6318773.0], [-13092593.100998376, 6318758.306477827], [-13092622.0, 6318846.0], [-13092622.896894999, 6318845.687129651], [-13092623.0, 6318846.0], [-13092665.106282474, 6318831.311761927], [-13092680.0, 6318875.0], [-13092723.104118465, 6318860.30541416], [-13092738.0, 6318904.0], [-13092781.10151692, 6318889.30630105], [-13092839.0, 6319064.0], [-13092814.732673267, 6319072.465346535], [-13092796.0, 6319078.0], [-13092796.298611112, 6319078.895833333], [-13092796.0, 6319079.0], [-13092810.0, 6319123.0], [-13092810.897959184, 6319122.693877551], [-13092811.0, 6319123.0], [-13092854.0, 6319109.0], [-13092857.620689655, 6319119.379310345], [-13092868.0, 6319152.0], [-13092868.893717526, 6319151.695323571], [-13092869.0, 6319152.0], [-13092912.0, 6319138.0], [-13092955.0, 6319269.0], [-13092999.0, 6319254.0], [-13093028.0, 6319341.0], [-13093071.0, 6319327.0], [-13093129.0, 6319502.0], [-13093147.732673267, 6319495.465346535], [-13093172.401220085, 6319488.176912248], [-13093187.0, 6319531.0], [-13093208.5, 6319523.5], [-13093230.0, 6319517.0], [-13093237.5, 6319538.0], [-13093245.0, 6319560.0], [-13093266.5, 6319552.5], [-13093288.0, 6319546.0], [-13093303.0, 6319590.0], [-13093346.0, 6319575.0], [-13093361.0, 6319619.0], [-13093404.0, 6319604.0], [-13093419.0, 6319648.0], [-13093462.10151692, 6319633.30630105], [-13093520.0, 6319808.0], [-13093520.896366885, 6319807.687313877], [-13093521.0, 6319808.0], [-13093563.103456477, 6319793.31274774], [-13093650.0, 6320056.0], [-13093650.89865652, 6320055.693639823], [-13093651.0, 6320056.0], [-13093666.0, 6320050.545454546], [-13093694.0, 6320041.0], [-13093737.0, 6320172.0], [-13093781.0, 6320158.0], [-13093795.0, 6320201.0], [-13093795.90410959, 6320200.712328767], [-13093796.0, 6320201.0], [-13093839.0, 6320187.0], [-13093911.0, 6320405.0], [-13093868.0, 6320420.0], [-13093868.285185184, 6320420.896296296], [-13093868.0, 6320421.0], [-13093870.916666666, 6320429.166666667], [-13093881.81851852, 6320463.4296296295], [-13093861.0, 6320471.0], [-13093796.187919464, 6320492.604026846], [-13093796.0, 6320492.0], [-13093738.0, 6320512.0], [-13093621.616438355, 6320550.794520548], [-13093608.0, 6320508.0], [-13093607.376770537, 6320508.184135977], [-13093607.0, 6320507.0], [-13093582.732673267, 6320515.465346535], [-13093564.0, 6320521.0], [-13093550.0, 6320479.0], [-13093549.408163264, 6320479.197278911], [-13093549.0, 6320478.0], [-13093114.0, 6320624.0], [-13093129.0, 6320668.0], [-13092955.0, 6320726.0], [-13092969.698630137, 6320770.095890411], [-13092926.0, 6320784.0], [-13092937.440677967, 6320817.559322034], [-13092940.71872146, 6320828.095890411], [-13092915.08219178, 6320836.835616439], [-13092898.0, 6320842.0], [-13092898.185388127, 6320842.595890411], [-13092897.0, 6320843.0], [-13092912.0, 6320887.0], [-13092868.0, 6320901.0], [-13092883.0, 6320945.0], [-13092839.0, 6320959.0], [-13092854.0, 6321003.0], [-13092767.0, 6321032.0], [-13092767.286723163, 6321032.901129943], [-13092767.0, 6321033.0], [-13092770.620689655, 6321043.379310345], [-13092781.0, 6321076.0], [-13092738.0, 6321091.0], [-13092752.0, 6321134.0], [-13092709.0, 6321149.0], [-13092723.0, 6321193.0], [-13092680.0, 6321207.0], [-13092694.0, 6321251.0], [-13092666.0, 6321260.76744186], [-13092652.0, 6321265.0], [-13092652.182750583, 6321265.587412587], [-13092651.0, 6321266.0], [-13092665.0, 6321309.0], [-13092535.590909092, 6321352.8], [-13092525.772727273, 6321324.0], [-13092521.0, 6321309.0], [-13092495.08219178, 6321317.835616439], [-13092478.0, 6321323.0], [-13092478.185388127, 6321323.595890411], [-13092477.0, 6321324.0], [-13092492.0, 6321368.0], [-13092448.0, 6321382.0], [-13092463.0, 6321426.0], [-13092419.0, 6321441.0], [-13092434.0, 6321484.0], [-13092347.0, 6321513.0], [-13092361.0, 6321557.0], [-13092274.9, 6321585.7], [-13092246.0, 6321499.0], [-13092245.102040816, 6321499.306122449], [-13092245.0, 6321499.0], [-13092202.0, 6321513.0], [-13092115.0, 6321251.0], [-13092050.0, 6321273.0], [-13091985.0, 6321294.0], [-13091985.281472316, 6321294.904732446], [-13091985.0, 6321295.0], [-13091992.0, 6321316.5], [-13091998.719031142, 6321338.096885813], [-13091912.0, 6321368.0], [-13091898.0, 6321323.0], [-13091854.5, 6321338.5], [-13091811.0, 6321353.0], [-13091811.285781324, 6321353.898169873], [-13091811.0, 6321354.0], [-13091814.620689655, 6321364.379310345], [-13091825.0, 6321397.0], [-13091738.895833334, 6321425.701388889], [-13091727.620689655, 6321393.379310345], [-13091724.0, 6321382.0], [-13091680.897959184, 6321396.693877551], [-13091666.0, 6321352.0], [-13091591.857142856, 6321377.714285715], [-13091492.591836736, 6321410.802721089], [-13091478.0, 6321368.0], [-13091477.104166666, 6321368.298611111], [-13091477.0, 6321368.0], [-13091391.0, 6321397.0], [-13091377.0, 6321352.0], [-13091349.0, 6321362.4186046515], [-13091333.895833334, 6321367.6875], [-13091319.0, 6321323.0], [-13091304.5, 6321328.395348838], [-13091275.601398602, 6321337.8041958045], [-13091247.0, 6321252.0], [-13091246.399317406, 6321252.197952218], [-13091246.0, 6321251.0], [-13091159.0, 6321280.0], [-13091144.5, 6321236.5], [-13091130.0, 6321192.0], [-13091032.126436781, 6321225.126436782], [-13090999.899360275, 6321235.704790139], [-13090985.0, 6321192.0], [-13090942.0, 6321207.0], [-13090913.0, 6321120.0], [-13090826.0, 6321149.0], [-13090811.0, 6321105.0], [-13090724.9, 6321133.7], [-13090696.0, 6321047.0], [-13090695.1, 6321047.3], [-13090695.0, 6321047.0], [-13090608.899313502, 6321075.700228833], [-13090565.0, 6320945.0], [-13090521.609281437, 6320958.806137725], [-13090450.0, 6320740.0], [-13090493.0, 6320726.0], [-13090464.2962619, 6320638.899001625], [-13090508.0, 6320624.0], [-13090493.300699301, 6320579.902097902], [-13090536.0, 6320566.0], [-13090508.0, 6320479.0], [-13090551.0, 6320463.0], [-13090522.0, 6320376.0], [-13090565.0, 6320361.0], [-13090508.0, 6320187.0], [-13090551.0, 6320172.0], [-13090508.193243453, 6320040.593212459], [-13090525.08219178, 6320034.835616439], [-13090551.0, 6320027.0], [-13090550.706734084, 6320026.099977016], [-13090551.0, 6320026.0], [-13090536.5, 6319982.5], [-13090522.292585641, 6319938.897935241], [-13090565.0, 6319924.0], [-13090551.0, 6319880.0], [-13090594.0, 6319866.0], [-13090580.0, 6319822.0], [-13090623.0, 6319808.0], [-13090622.71360609, 6319807.099904853], [-13090623.0, 6319807.0], [-13090609.0, 6319764.0], [-13090652.0, 6319749.0], [-13090623.0, 6319662.0], [-13090710.0, 6319633.0], [-13090696.280652681, 6319588.902097902], [-13090717.5, 6319581.5], [-13090739.0, 6319575.0], [-13090738.719347319, 6319574.097902098], [-13090739.0, 6319574.0], [-13090732.0, 6319552.5], [-13090725.280652681, 6319530.902097902], [-13090746.5, 6319523.5], [-13090768.0, 6319517.0], [-13090767.719347319, 6319516.097902098], [-13090768.0, 6319516.0], [-13090754.0, 6319472.0], [-13090841.0, 6319443.0], [-13090813.0, 6319356.0], [-13090943.0, 6319312.0], [-13090914.0, 6319225.0], [-13090957.0, 6319210.0], [-13090943.0, 6319167.0], [-13090986.0, 6319152.0], [-13090972.182750583, 6319107.587412587], [-13090986.0, 6319102.76744186], [-13091015.0, 6319094.0], [-13091001.182750583, 6319049.587412587], [-13091015.0, 6319044.76744186], [-13091044.0, 6319036.0], [-13091030.0, 6318991.0], [-13091290.0, 6318904.0], [-13091304.0, 6318948.0], [-13091391.0, 6318918.553846153], [-13091435.0, 6318904.0], [-13091420.0, 6318860.0], [-13091594.0, 6318802.0], [-13091608.0, 6318846.0], [-13091826.0, 6318773.0], [-13091811.0, 6318729.0], [-13091855.0, 6318715.0], [-13091840.0, 6318671.0], [-13091927.0, 6318642.0], [-13091912.299319727, 6318597.897959184], [-13091934.0, 6318590.5], [-13091956.0, 6318584.0], [-13091955.700680273, 6318583.102040816], [-13091956.0, 6318583.0], [-13091948.5, 6318561.5], [-13091941.299319727, 6318539.897959184], [-13091963.0, 6318532.5]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p400823","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p400824"}}},"glyph":{"type":"object","name":"Patches","id":"p400819","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p400820","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p400821","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p400837","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p400828","attributes":{"selected":{"type":"object","name":"Selection","id":"p400829","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p400830"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"50\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.002109895973125007}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13093839.0, 6320479.0], [-13093854.0, 6320521.0], [-13093810.0, 6320537.0], [-13093796.187919464, 6320492.604026846], [-13093861.0, 6320471.0], [-13093839.0, 6320479.0]]]}}, {\\"id\\": \\"52\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.008548357407400384}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13093854.0, 6320231.0], [-13093897.0, 6320216.0], [-13093912.0, 6320260.0], [-13093955.0, 6320245.0], [-13093970.0, 6320289.0], [-13093926.0, 6320303.0], [-13093941.0, 6320347.0], [-13093897.0, 6320361.0], [-13093912.0, 6320405.0], [-13093868.285185184, 6320420.896296296], [-13093868.0, 6320420.0], [-13093911.0, 6320405.0], [-13093839.0, 6320187.0], [-13093854.0, 6320231.0]]]}}, {\\"id\\": \\"53\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0022795834371377712}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13093695.0, 6320040.0], [-13093724.0, 6320129.0], [-13093767.0, 6320114.0], [-13093795.90410959, 6320200.712328767], [-13093795.0, 6320201.0], [-13093781.0, 6320158.0], [-13093737.0, 6320172.0], [-13093694.0, 6320041.0], [-13093666.0, 6320050.545454546], [-13093695.0, 6320040.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p400838","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p400839"}}},"glyph":{"type":"object","name":"Patches","id":"p400834","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p400835","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p400836","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p400785","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p400798"},{"type":"object","name":"WheelZoomTool","id":"p400799","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p400800","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p400801","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p400807","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p400806","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p400808"},{"type":"object","name":"SaveTool","id":"p400809"},{"type":"object","name":"HoverTool","id":"p400827","attributes":{"renderers":[{"id":"p400822"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p400841","attributes":{"renderers":[{"id":"p400837"}],"tooltips":[["New only","June 2024 / juin 2024"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p400793","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p400794","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p400795","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p400796"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p400788","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p400789","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p400790","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p400791"}}}],"center":[{"type":"object","name":"Grid","id":"p400792","attributes":{"axis":{"id":"p400788"}}},{"type":"object","name":"Grid","id":"p400797","attributes":{"dimension":1,"axis":{"id":"p400793"}}},{"type":"object","name":"Legend","id":"p400825","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p400826","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p400822"}]}},{"type":"object","name":"LegendItem","id":"p400840","attributes":{"label":{"type":"value","value":"New only (June 2024 / juin 2024)"},"renderers":[{"id":"p400837"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p400842","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"2b4d905b-4f7e-4446-9ed6-c954445a97c4","roots":{"p400843":"d1546341-8b0d-4fc0-95e4-510b33a6c82f"},"root_ids":["p400843"]}];
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