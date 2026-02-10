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
    
    
    const element = document.getElementById("a14f35a2-784f-4ab2-b7db-f74986ab5da1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a14f35a2-784f-4ab2-b7db-f74986ab5da1' but no matching script tag was found.")
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
                  const docs_json = '{"f58ce7af-15a3-48e7-82f9-6e6b95ec8b98":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p5900","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p5901"}}},"roots":[{"type":"object","name":"Column","id":"p5969","attributes":{"children":[{"type":"object","name":"Figure","id":"p5902","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p5903","attributes":{"start":-13085170.15,"end":-13078902.85}},"y_range":{"type":"object","name":"DataRange1d","id":"p5904","attributes":{"start":7049058.6,"end":7054487.4}},"x_scale":{"type":"object","name":"LinearScale","id":"p5912"},"y_scale":{"type":"object","name":"LinearScale","id":"p5913"},"title":{"type":"object","name":"Title","id":"p5905"},"renderers":[{"type":"object","name":"TileRenderer","id":"p5937","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p5936","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p5948","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p5939","attributes":{"selected":{"type":"object","name":"Selection","id":"p5940","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p5941"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 9.85844195511194}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13079914.0, 7049686.0], [-13079930.0, 7049733.0], [-13079978.0, 7049718.0], [-13079981.80952381, 7049729.19047619], [-13079993.0, 7049765.0], [-13079993.892405063, 7049764.683939873], [-13079994.0, 7049765.0], [-13080041.414634146, 7049749.195121951], [-13080058.0, 7049797.0], [-13080106.0, 7049781.0], [-13080109.037974684, 7049789.924050633], [-13080121.0, 7049829.0], [-13080140.443037976, 7049822.113924051], [-13080169.0, 7049813.0], [-13080201.0, 7049907.0], [-13080201.902077151, 7049906.7181008905], [-13080202.0, 7049907.0], [-13080249.0, 7049892.0], [-13080265.0, 7049939.0], [-13080361.0, 7049908.0], [-13080377.0, 7049955.0], [-13080425.0, 7049939.0], [-13080441.0, 7049987.0], [-13080489.0, 7049971.0], [-13080492.037974684, 7049979.924050633], [-13080504.0, 7050019.0], [-13080520.5, 7050013.15625], [-13080552.41081703, 7050003.184119678], [-13080560.5, 7050026.5], [-13080568.0, 7050050.0], [-13080568.585365854, 7050049.804878049], [-13080569.0, 7050051.0], [-13080616.106583072, 7050034.316418495], [-13080648.0, 7050129.0], [-13080696.0, 7050114.0], [-13080700.25, 7050125.75], [-13080712.0, 7050161.0], [-13080712.892405063, 7050160.702531646], [-13080713.0, 7050161.0], [-13080760.0, 7050146.0], [-13080768.0, 7050169.0], [-13080776.0, 7050193.0], [-13080824.0, 7050177.0], [-13080839.0, 7050224.0], [-13080839.903846154, 7050223.717548077], [-13080840.0, 7050224.0], [-13080855.0, 7050219.0], [-13080887.0, 7050209.0], [-13080913.358490566, 7050283.2830188675], [-13080920.0, 7050303.0], [-13080967.0, 7050288.0], [-13080983.0, 7050335.0], [-13081031.0, 7050319.0], [-13081047.0, 7050367.0], [-13081086.0, 7050354.0], [-13081143.0, 7050336.0], [-13081159.0, 7050383.0], [-13081207.0, 7050368.0], [-13081222.0, 7050414.0], [-13081222.90562328, 7050413.722768384], [-13081223.0, 7050414.0], [-13081271.0, 7050399.0], [-13081303.0, 7050493.0], [-13081398.420447906, 7050462.187147031], [-13081404.88607595, 7050480.443037975], [-13081414.0, 7050509.0], [-13081414.897370983, 7050508.710223953], [-13081415.0, 7050509.0], [-13081510.099041533, 7050478.290934505], [-13081526.0, 7050525.0], [-13081574.0, 7050509.5], [-13081622.0, 7050495.0], [-13081638.0, 7050541.0], [-13081734.0, 7050510.0], [-13081742.0, 7050533.5], [-13081750.0, 7050558.0], [-13081798.0, 7050541.0], [-13081813.0, 7050590.0], [-13082197.100958912, 7050463.296566801], [-13082209.19047619, 7050498.80952381], [-13082213.0, 7050511.0], [-13082261.0, 7050495.0], [-13082277.0, 7050542.0], [-13082313.75, 7050529.75], [-13082325.092592593, 7050526.277777778], [-13082341.0, 7050574.0], [-13082437.0, 7050542.0], [-13082453.0, 7050590.0], [-13082499.814814815, 7050574.395061729], [-13082500.0, 7050575.0], [-13082501.203821655, 7050574.598726114], [-13082517.0, 7050621.0], [-13082613.0, 7050590.0], [-13082628.0, 7050637.0], [-13082676.0, 7050622.0], [-13082692.0, 7050669.0], [-13082740.0, 7050653.0], [-13082756.0, 7050701.0], [-13082804.0, 7050685.0], [-13082820.0, 7050732.0], [-13082868.0, 7050716.5], [-13082916.0, 7050702.0], [-13082932.0, 7050748.0], [-13083076.0, 7050702.0], [-13083091.0, 7050748.0], [-13083091.901918976, 7050747.711886994], [-13083092.0, 7050748.0], [-13083126.621052632, 7050736.621052631], [-13083235.0, 7050702.0], [-13083238.4, 7050711.2], [-13083251.0, 7050749.0], [-13083284.0, 7050738.0], [-13083299.096153846, 7050733.282451923], [-13083315.0, 7050780.0], [-13083459.0, 7050733.0], [-13083475.0, 7050781.0], [-13083523.0, 7050765.0], [-13083539.0, 7050812.0], [-13083635.0, 7050781.0], [-13083638.80952381, 7050792.19047619], [-13083650.0, 7050828.0], [-13083650.898089172, 7050827.700636943], [-13083651.0, 7050828.0], [-13083698.100946372, 7050812.299684542], [-13083730.0, 7050907.0], [-13083682.0, 7050923.0], [-13083730.0, 7051065.0], [-13083683.0, 7051080.0], [-13083683.1987315, 7051080.600422833], [-13083682.0, 7051081.0], [-13083729.698798398, 7051222.108945261], [-13083694.75, 7051234.75], [-13083682.0, 7051239.0], [-13083730.0, 7051381.0], [-13083681.0, 7051397.0], [-13083746.0, 7051586.0], [-13083794.0, 7051571.0], [-13083805.87368421, 7051606.126315789], [-13083841.0, 7051713.0], [-13083841.898734177, 7051712.700421941], [-13083842.0, 7051713.0], [-13083858.0, 7051707.333333333], [-13083889.0, 7051697.0], [-13083953.0, 7051886.0], [-13083905.0, 7051902.0], [-13083905.30094044, 7051902.893416928], [-13083905.0, 7051903.0], [-13083936.0, 7051996.0], [-13083888.0, 7052013.0], [-13083936.0, 7052155.0], [-13083888.0, 7052170.0], [-13083921.0, 7052265.0], [-13083968.095367847, 7052250.282697547], [-13084080.0, 7052582.0], [-13084032.0, 7052597.0], [-13084048.0, 7052645.0], [-13084096.0, 7052629.0], [-13084112.0, 7052676.0], [-13084160.0, 7052661.0], [-13084270.699186992, 7052992.100271002], [-13084223.0, 7053008.0], [-13084239.0, 7053056.0], [-13084287.0, 7053040.0], [-13084295.0, 7053063.5], [-13084303.0, 7053088.0], [-13084351.104635507, 7053071.310636661], [-13084392.225225225, 7053193.387387387], [-13084445.802521009, 7053356.399159664], [-13084414.0, 7053367.0], [-13084398.0, 7053372.0], [-13084414.101910828, 7053419.299363057], [-13084367.0, 7053435.0], [-13084383.0, 7053482.0], [-13084335.0, 7053498.0], [-13084350.898089172, 7053544.700636943], [-13084350.0, 7053545.0], [-13084350.101910828, 7053545.299363057], [-13084303.0, 7053561.0], [-13084318.898089172, 7053607.700636943], [-13084270.0, 7053624.0], [-13084270.051752057, 7053624.146123454], [-13084031.0, 7053703.0], [-13084047.0, 7053750.0], [-13083999.0, 7053766.0], [-13083983.0, 7053719.0], [-13083935.0, 7053734.0], [-13083919.0, 7053687.0], [-13083871.0, 7053703.0], [-13083855.0, 7053655.0], [-13083759.0, 7053687.0], [-13083743.0, 7053639.0], [-13083695.0, 7053655.0], [-13083679.0, 7053608.0], [-13083631.0, 7053623.0], [-13083615.0, 7053576.0], [-13083567.0, 7053592.0], [-13083551.0, 7053544.0], [-13083503.0, 7053560.0], [-13083488.0, 7053513.0], [-13083296.0, 7053576.0], [-13083280.0, 7053528.0], [-13083232.0, 7053544.0], [-13083216.0, 7053497.0], [-13083120.10212766, 7053528.3], [-13083120.0, 7053528.0], [-13083073.0, 7053543.0], [-13083059.4, 7053506.2], [-13083056.0, 7053496.0], [-13082960.0, 7053528.0], [-13082944.0, 7053480.0], [-13082896.585365854, 7053495.804878049], [-13082880.0, 7053448.0], [-13082808.0, 7053472.5], [-13082736.0, 7053496.0], [-13082732.962025316, 7053487.075949367], [-13082721.0, 7053448.0], [-13082701.556962024, 7053454.886075949], [-13082673.0, 7053464.0], [-13082657.0, 7053417.0], [-13082656.41273179, 7053417.189638692], [-13082656.0, 7053416.0], [-13082560.898089172, 7053447.700636943], [-13082545.0, 7053401.0], [-13082497.0, 7053416.0], [-13082489.0, 7053393.0], [-13082481.0, 7053369.0], [-13082444.25, 7053381.25], [-13082432.90562328, 7053384.722768384], [-13082417.0, 7053338.0], [-13082369.0, 7053353.0], [-13082353.0, 7053306.0], [-13082306.0, 7053321.0], [-13082292.4, 7053284.2], [-13082289.0, 7053274.0], [-13082097.0, 7053337.0], [-13082093.19047619, 7053325.80952381], [-13082082.0, 7053290.0], [-13082081.097470533, 7053290.286319693], [-13082081.0, 7053290.0], [-13082053.244725738, 7053299.122362869], [-13081937.595285393, 7053335.8111508405], [-13081922.0, 7053290.0], [-13081921.098039215, 7053290.281862745], [-13081921.0, 7053290.0], [-13081874.0, 7053304.0], [-13081867.358490566, 7053285.2830188675], [-13081842.0, 7053210.0], [-13081809.0, 7053221.0], [-13081793.903846154, 7053225.717548077], [-13081778.0, 7053179.0], [-13081730.0, 7053194.0], [-13081714.0, 7053147.0], [-13081666.892405063, 7053162.702531646], [-13081654.25, 7053127.75], [-13081650.0, 7053115.0], [-13081602.0, 7053131.0], [-13081539.0, 7052941.0], [-13081491.0, 7052957.0], [-13081459.0, 7052862.0], [-13081458.103773585, 7052862.298742139], [-13081458.0, 7052862.0], [-13081315.0, 7052909.0], [-13081251.0, 7052720.0], [-13081203.0, 7052735.0], [-13081156.0, 7052593.0], [-13081108.0, 7052608.0], [-13081092.0, 7052562.0], [-13081044.0, 7052577.0], [-13080980.0, 7052388.0], [-13080932.0, 7052403.0], [-13080901.0, 7052308.0], [-13080884.5, 7052313.84375], [-13080852.6, 7052323.8125], [-13080821.0, 7052230.0], [-13080773.0, 7052245.0], [-13080757.0, 7052198.0], [-13080709.0, 7052213.0], [-13080693.0, 7052166.0], [-13080645.0, 7052181.0], [-13080629.0, 7052134.0], [-13080581.0, 7052149.0], [-13080566.0, 7052103.0], [-13080565.105631068, 7052103.310291262], [-13080565.0, 7052103.0], [-13080517.0, 7052119.0], [-13080501.0, 7052071.0], [-13080405.0, 7052103.0], [-13080390.0, 7052056.0], [-13080389.396226415, 7052056.188679245], [-13080389.0, 7052055.0], [-13080341.892405063, 7052070.702531646], [-13080333.5, 7052047.5], [-13080326.0, 7052024.0], [-13080325.104584243, 7052024.2891446715], [-13080325.0, 7052024.0], [-13080229.596153846, 7052053.813701923], [-13080214.0, 7052008.0], [-13080310.0, 7051976.0], [-13080294.0, 7051929.0], [-13080390.0, 7051898.0], [-13080389.691588785, 7051897.102803738], [-13080390.0, 7051897.0], [-13080358.0, 7051803.0], [-13080406.0, 7051787.0], [-13080385.325301206, 7051725.837349397], [-13080359.193684211, 7051644.602105264], [-13080406.0, 7051629.0], [-13080327.0, 7051392.0], [-13080342.0, 7051387.0], [-13080374.0, 7051377.0], [-13080373.80375783, 7051376.39874739], [-13080375.0, 7051376.0], [-13080336.478991596, 7051262.042016807], [-13080327.0, 7051233.0], [-13080278.896341464, 7051249.689024391], [-13080263.0, 7051202.0], [-13080215.0, 7051218.0], [-13080072.0, 7050791.0], [-13080120.0, 7050776.0], [-13080072.0, 7050633.0], [-13080120.0, 7050618.0], [-13080088.0, 7050523.0], [-13080136.0, 7050508.0], [-13080135.70846395, 7050507.097178684], [-13080136.0, 7050507.0], [-13080105.0, 7050412.0], [-13080153.0, 7050398.0], [-13080152.696682464, 7050397.09478673], [-13080153.0, 7050397.0], [-13080089.0, 7050207.0], [-13080137.0, 7050192.0], [-13080136.701134931, 7050191.09962169], [-13080137.0, 7050191.0], [-13080121.04040404, 7050143.919191919], [-13080058.0, 7049954.0], [-13080009.0, 7049970.0], [-13079994.0, 7049923.0], [-13079946.0, 7049939.0], [-13079930.0, 7049891.0], [-13079882.0, 7049907.0], [-13079866.0, 7049859.0], [-13079818.0, 7049875.0], [-13079802.0, 7049828.0], [-13079754.0, 7049843.0], [-13079738.0, 7049796.0], [-13079681.0, 7049815.0], [-13079643.0, 7049827.0], [-13079626.0, 7049780.0], [-13079914.0, 7049686.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p5949","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p5950"}}},"glyph":{"type":"object","name":"Patches","id":"p5945","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p5946","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p5947","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p5963","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p5954","attributes":{"selected":{"type":"object","name":"Selection","id":"p5955","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p5956"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"32\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.09830151106227375}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13084287.0, 7053672.0], [-13084238.0, 7053687.0], [-13084255.0, 7053736.0], [-13084159.0, 7053765.0], [-13084175.0, 7053814.0], [-13084031.0, 7053861.0], [-13084014.0, 7053814.0], [-13083966.0, 7053829.0], [-13083951.0, 7053782.0], [-13083903.0, 7053797.0], [-13083886.0, 7053750.0], [-13083791.0, 7053782.0], [-13083775.0, 7053734.0], [-13083727.0, 7053750.0], [-13083711.0, 7053702.0], [-13083664.0, 7053719.0], [-13083647.0, 7053670.0], [-13083599.0, 7053687.0], [-13083583.0, 7053638.0], [-13083536.0, 7053655.0], [-13083519.0, 7053607.0], [-13083471.0, 7053624.0], [-13083455.0, 7053575.0], [-13083264.0, 7053638.0], [-13083247.0, 7053592.0], [-13083199.0, 7053607.0], [-13083184.0, 7053560.0], [-13083136.0, 7053575.0], [-13083120.10212766, 7053528.3], [-13083216.0, 7053497.0], [-13083232.0, 7053544.0], [-13083280.0, 7053528.0], [-13083296.0, 7053576.0], [-13083488.0, 7053513.0], [-13083503.0, 7053560.0], [-13083551.0, 7053544.0], [-13083567.0, 7053592.0], [-13083615.0, 7053576.0], [-13083631.0, 7053623.0], [-13083679.0, 7053608.0], [-13083695.0, 7053655.0], [-13083743.0, 7053639.0], [-13083759.0, 7053687.0], [-13083855.0, 7053655.0], [-13083871.0, 7053703.0], [-13083919.0, 7053687.0], [-13083935.0, 7053734.0], [-13083983.0, 7053719.0], [-13083999.0, 7053766.0], [-13084047.0, 7053750.0], [-13084031.0, 7053703.0], [-13084270.051752057, 7053624.146123454], [-13084287.0, 7053672.0]]]}}, {\\"id\\": \\"33\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0024492993630589916}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13084366.0, 7053592.0], [-13084318.898089172, 7053607.700636943], [-13084303.0, 7053561.0], [-13084350.101910828, 7053545.299363057], [-13084366.0, 7053592.0]]]}}, {\\"id\\": \\"34\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.007410299363059923}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13084446.0, 7053513.0], [-13084350.898089172, 7053544.700636943], [-13084335.0, 7053498.0], [-13084383.0, 7053482.0], [-13084367.0, 7053435.0], [-13084414.101910828, 7053419.299363057], [-13084446.0, 7053513.0]]]}}, {\\"id\\": \\"55\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0050245}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13082661.0, 7050575.0], [-13082676.0, 7050621.0], [-13082724.0, 7050606.0], [-13082740.0, 7050653.0], [-13082692.0, 7050669.0], [-13082676.0, 7050622.0], [-13082628.0, 7050637.0], [-13082613.0, 7050590.0], [-13082661.0, 7050575.0]]]}}, {\\"id\\": \\"56\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.004968401273927651}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13082596.0, 7050543.0], [-13082613.0, 7050590.0], [-13082517.0, 7050621.0], [-13082501.203821655, 7050574.598726114], [-13082596.0, 7050543.0]]]}}, {\\"id\\": \\"57\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.002631756172842346}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13082326.0, 7050526.0], [-13082341.0, 7050573.0], [-13082485.0, 7050526.0], [-13082499.814814815, 7050574.395061729], [-13082453.0, 7050590.0], [-13082437.0, 7050542.0], [-13082341.0, 7050574.0], [-13082325.092592593, 7050526.277777778], [-13082326.0, 7050526.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p5964","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p5965"}}},"glyph":{"type":"object","name":"Patches","id":"p5960","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p5961","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p5962","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p5911","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p5924"},{"type":"object","name":"WheelZoomTool","id":"p5925","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p5926","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p5927","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p5933","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p5932","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p5934"},{"type":"object","name":"SaveTool","id":"p5935"},{"type":"object","name":"HoverTool","id":"p5953","attributes":{"renderers":[{"id":"p5948"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p5967","attributes":{"renderers":[{"id":"p5963"}],"tooltips":[["New only","June 2024 / juin 2024"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p5919","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p5920","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p5921","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p5922"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p5914","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p5915","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p5916","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p5917"}}}],"center":[{"type":"object","name":"Grid","id":"p5918","attributes":{"axis":{"id":"p5914"}}},{"type":"object","name":"Grid","id":"p5923","attributes":{"dimension":1,"axis":{"id":"p5919"}}},{"type":"object","name":"Legend","id":"p5951","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p5952","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p5948"}]}},{"type":"object","name":"LegendItem","id":"p5966","attributes":{"label":{"type":"value","value":"New only (June 2024 / juin 2024)"},"renderers":[{"id":"p5963"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p5968","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"f58ce7af-15a3-48e7-82f9-6e6b95ec8b98","roots":{"p5969":"a14f35a2-784f-4ab2-b7db-f74986ab5da1"},"root_ids":["p5969"]}];
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