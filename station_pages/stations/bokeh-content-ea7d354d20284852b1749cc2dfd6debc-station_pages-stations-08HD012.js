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
    
    
    const element = document.getElementById("c70d6a9f-40d0-43a0-bad7-4f9243100544");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c70d6a9f-40d0-43a0-bad7-4f9243100544' but no matching script tag was found.")
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
                  const docs_json = '{"f204447b-19c6-4da1-81e9-c2db6e83598c":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p176215","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p176216"}}},"roots":[{"type":"object","name":"Column","id":"p176270","attributes":{"children":[{"type":"object","name":"Figure","id":"p176217","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p176218","attributes":{"start":-14017618.7,"end":-14007013.3}},"y_range":{"type":"object","name":"DataRange1d","id":"p176219","attributes":{"start":6499195.0,"end":6507931.0}},"x_scale":{"type":"object","name":"LinearScale","id":"p176227"},"y_scale":{"type":"object","name":"LinearScale","id":"p176228"},"title":{"type":"object","name":"Title","id":"p176220"},"renderers":[{"type":"object","name":"TileRenderer","id":"p176252","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p176251","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p176263","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p176254","attributes":{"selected":{"type":"object","name":"Selection","id":"p176255","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p176256"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 34.32905}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-14009106.0, 6500435.0], [-14009361.0, 6500314.0], [-14009381.0, 6500356.0], [-14009423.0, 6500337.0], [-14009443.0, 6500379.0], [-14009528.0, 6500339.0], [-14009548.0, 6500381.0], [-14009633.0, 6500340.0], [-14009694.0, 6500468.0], [-14009778.0, 6500428.0], [-14009798.0, 6500469.0], [-14009883.0, 6500429.0], [-14009863.0, 6500387.0], [-14009990.0, 6500326.0], [-14009970.0, 6500285.0], [-14010054.0, 6500243.0], [-14010074.0, 6500286.0], [-14010201.0, 6500225.0], [-14010221.0, 6500267.0], [-14010349.0, 6500208.0], [-14010369.0, 6500250.0], [-14010412.0, 6500229.0], [-14010432.0, 6500272.0], [-14010474.0, 6500252.0], [-14010494.0, 6500293.0], [-14010536.0, 6500274.0], [-14010598.0, 6500401.0], [-14010640.0, 6500381.0], [-14010760.0, 6500635.0], [-14010802.0, 6500616.0], [-14010824.0, 6500658.0], [-14010993.0, 6500577.0], [-14010973.0, 6500534.0], [-14011057.0, 6500494.0], [-14011097.0, 6500579.0], [-14011140.0, 6500558.0], [-14011180.0, 6500644.0], [-14011222.0, 6500623.0], [-14011263.0, 6500708.0], [-14011306.0, 6500687.0], [-14011326.0, 6500731.0], [-14011495.0, 6500649.0], [-14011515.0, 6500693.0], [-14011557.0, 6500672.0], [-14011577.0, 6500713.0], [-14011662.0, 6500673.0], [-14011642.0, 6500632.0], [-14011684.0, 6500611.0], [-14011664.0, 6500569.0], [-14012004.0, 6500407.0], [-14011982.0, 6500365.0], [-14012322.0, 6500203.0], [-14012342.0, 6500245.0], [-14012384.0, 6500225.0], [-14012404.0, 6500267.0], [-14012447.0, 6500246.0], [-14012508.0, 6500374.0], [-14012550.0, 6500354.0], [-14012590.0, 6500440.0], [-14012633.0, 6500419.0], [-14012673.0, 6500504.0], [-14012715.0, 6500483.0], [-14012755.0, 6500569.0], [-14012798.0, 6500548.0], [-14012818.0, 6500590.0], [-14013072.0, 6500469.0], [-14013092.0, 6500511.0], [-14013135.0, 6500492.0], [-14013115.0, 6500448.0], [-14013157.0, 6500429.0], [-14013177.0, 6500471.0], [-14013262.0, 6500431.0], [-14013282.0, 6500473.0], [-14013324.0, 6500452.0], [-14013345.0, 6500496.0], [-14013387.0, 6500475.0], [-14013366.0, 6500433.0], [-14013494.0, 6500372.0], [-14013453.0, 6500286.0], [-14013622.0, 6500206.0], [-14013643.0, 6500248.0], [-14013686.0, 6500229.0], [-14013827.0, 6500525.0], [-14013869.0, 6500504.0], [-14013889.0, 6500548.0], [-14013932.0, 6500527.0], [-14014012.0, 6500696.0], [-14014054.0, 6500677.0], [-14014095.0, 6500762.0], [-14014138.0, 6500741.0], [-14014178.0, 6500827.0], [-14014262.0, 6500785.0], [-14014282.0, 6500829.0], [-14014325.0, 6500808.0], [-14014346.0, 6500849.0], [-14014388.0, 6500830.0], [-14014428.0, 6500914.0], [-14014470.0, 6500895.0], [-14014632.0, 6501233.0], [-14014674.0, 6501214.0], [-14014694.0, 6501256.0], [-14014652.0, 6501277.0], [-14014692.0, 6501360.0], [-14014650.0, 6501381.0], [-14014671.0, 6501423.0], [-14014629.0, 6501444.0], [-14014649.0, 6501486.0], [-14014606.0, 6501507.0], [-14014626.0, 6501548.0], [-14014584.0, 6501569.0], [-14014604.0, 6501611.0], [-14014646.0, 6501592.0], [-14014706.0, 6501719.0], [-14014749.0, 6501698.0], [-14014830.0, 6501868.0], [-14014872.0, 6501848.0], [-14014892.0, 6501890.0], [-14014935.0, 6501869.0], [-14014955.0, 6501913.0], [-14014997.0, 6501892.0], [-14015078.0, 6502061.0], [-14015121.0, 6502042.0], [-14015182.0, 6502169.0], [-14015224.0, 6502148.0], [-14015284.0, 6502276.0], [-14015326.0, 6502256.0], [-14015347.0, 6502298.0], [-14015389.0, 6502277.0], [-14015409.0, 6502321.0], [-14015452.0, 6502300.0], [-14015472.0, 6502342.0], [-14015515.0, 6502323.0], [-14015535.0, 6502364.0], [-14015704.0, 6502284.0], [-14015724.0, 6502326.0], [-14015809.0, 6502286.0], [-14015890.0, 6502455.0], [-14015847.0, 6502476.0], [-14015949.0, 6502687.0], [-14015906.0, 6502708.0], [-14016108.0, 6503132.0], [-14016150.0, 6503111.0], [-14016272.0, 6503365.0], [-14016314.0, 6503346.0], [-14016395.0, 6503515.0], [-14016353.0, 6503536.0], [-14016373.0, 6503578.0], [-14016288.0, 6503618.0], [-14016308.0, 6503660.0], [-14016224.0, 6503702.0], [-14016244.0, 6503744.0], [-14016201.0, 6503765.0], [-14016222.0, 6503806.0], [-14016179.0, 6503827.0], [-14016219.0, 6503911.0], [-14016135.0, 6503951.0], [-14016156.0, 6503995.0], [-14016112.0, 6504014.0], [-14016134.0, 6504058.0], [-14016091.0, 6504077.0], [-14016131.0, 6504162.0], [-14016089.0, 6504183.0], [-14016230.0, 6504480.0], [-14016188.0, 6504499.0], [-14016208.0, 6504542.0], [-14016124.0, 6504583.0], [-14016144.0, 6504624.0], [-14016017.0, 6504685.0], [-14016037.0, 6504727.0], [-14015910.0, 6504788.0], [-14015950.0, 6504874.0], [-14015908.0, 6504893.0], [-14015888.0, 6504851.0], [-14015761.0, 6504912.0], [-14015741.0, 6504870.0], [-14015698.0, 6504890.0], [-14015556.0, 6504593.0], [-14015514.0, 6504614.0], [-14015473.0, 6504528.0], [-14015431.0, 6504549.0], [-14015411.0, 6504506.0], [-14015369.0, 6504527.0], [-14015308.0, 6504399.0], [-14015265.0, 6504419.0], [-14015185.0, 6504249.0], [-14015143.0, 6504270.0], [-14015102.0, 6504185.0], [-14014975.0, 6504246.0], [-14014955.0, 6504204.0], [-14014912.0, 6504223.0], [-14014892.0, 6504181.0], [-14014850.0, 6504201.0], [-14014830.0, 6504159.0], [-14014533.0, 6504300.0], [-14014553.0, 6504344.0], [-14014511.0, 6504363.0], [-14014531.0, 6504406.0], [-14014446.0, 6504447.0], [-14014466.0, 6504488.0], [-14014424.0, 6504509.0], [-14014404.0, 6504466.0], [-14014361.0, 6504487.0], [-14014280.0, 6504317.0], [-14014238.0, 6504337.0], [-14014178.0, 6504209.0], [-14014135.0, 6504230.0], [-14014054.0, 6504061.0], [-14013970.0, 6504101.0], [-14013929.0, 6504016.0], [-14013845.0, 6504056.0], [-14013825.0, 6504014.0], [-14013739.0, 6504054.0], [-14013719.0, 6504012.0], [-14013508.0, 6504113.0], [-14013528.0, 6504155.0], [-14013443.0, 6504195.0], [-14013423.0, 6504154.0], [-14013254.0, 6504234.0], [-14013274.0, 6504277.0], [-14013231.0, 6504297.0], [-14013251.0, 6504340.0], [-14013167.0, 6504380.0], [-14013187.0, 6504422.0], [-14013102.0, 6504462.0], [-14013122.0, 6504506.0], [-14013038.0, 6504546.0], [-14013058.0, 6504588.0], [-14013015.0, 6504609.0], [-14013036.0, 6504651.0], [-14012951.0, 6504691.0], [-14012991.0, 6504776.0], [-14012949.0, 6504797.0], [-14012969.0, 6504839.0], [-14012673.0, 6504980.0], [-14012693.0, 6505022.0], [-14012650.0, 6505043.0], [-14012670.0, 6505085.0], [-14012544.0, 6505146.0], [-14012564.0, 6505189.0], [-14012479.0, 6505230.0], [-14012499.0, 6505271.0], [-14012457.0, 6505292.0], [-14012477.0, 6505334.0], [-14012434.0, 6505355.0], [-14012454.0, 6505397.0], [-14012412.0, 6505416.0], [-14012432.0, 6505460.0], [-14012263.0, 6505540.0], [-14012243.0, 6505498.0], [-14012115.0, 6505559.0], [-14012136.0, 6505601.0], [-14012094.0, 6505622.0], [-14012114.0, 6505664.0], [-14012029.0, 6505704.0], [-14012049.0, 6505746.0], [-14012007.0, 6505767.0], [-14012027.0, 6505809.0], [-14011814.0, 6505910.0], [-14011836.0, 6505953.0], [-14011750.0, 6505994.0], [-14011771.0, 6506035.0], [-14011685.0, 6506076.0], [-14011705.0, 6506119.0], [-14011663.0, 6506138.0], [-14011684.0, 6506182.0], [-14011556.0, 6506241.0], [-14011576.0, 6506285.0], [-14011534.0, 6506304.0], [-14011555.0, 6506348.0], [-14011469.0, 6506388.0], [-14011490.0, 6506430.0], [-14011362.0, 6506491.0], [-14011342.0, 6506449.0], [-14011300.0, 6506468.0], [-14011280.0, 6506426.0], [-14011069.0, 6506527.0], [-14011047.0, 6506484.0], [-14010878.0, 6506566.0], [-14010858.0, 6506522.0], [-14010731.0, 6506583.0], [-14010751.0, 6506627.0], [-14010539.0, 6506726.0], [-14010560.0, 6506770.0], [-14010516.0, 6506789.0], [-14010538.0, 6506833.0], [-14010494.0, 6506852.0], [-14010474.0, 6506810.0], [-14010263.0, 6506911.0], [-14010222.0, 6506826.0], [-14010180.0, 6506847.0], [-14010159.0, 6506803.0], [-14009990.0, 6506885.0], [-14009970.0, 6506841.0], [-14009801.0, 6506923.0], [-14009739.0, 6506796.0], [-14009697.0, 6506815.0], [-14009677.0, 6506773.0], [-14009635.0, 6506794.0], [-14009595.0, 6506709.0], [-14009552.0, 6506730.0], [-14009511.0, 6506644.0], [-14009469.0, 6506665.0], [-14009449.0, 6506622.0], [-14009407.0, 6506642.0], [-14009386.0, 6506599.0], [-14009344.0, 6506620.0], [-14009303.0, 6506534.0], [-14009261.0, 6506555.0], [-14009241.0, 6506513.0], [-14009198.0, 6506533.0], [-14009118.0, 6506363.0], [-14009076.0, 6506383.0], [-14008995.0, 6506213.0], [-14008952.0, 6506234.0], [-14008912.0, 6506149.0], [-14009039.0, 6506088.0], [-14009019.0, 6506046.0], [-14009061.0, 6506025.0], [-14009041.0, 6505983.0], [-14009126.0, 6505943.0], [-14009106.0, 6505901.0], [-14009148.0, 6505880.0], [-14009128.0, 6505838.0], [-14009171.0, 6505817.0], [-14009150.0, 6505776.0], [-14009193.0, 6505755.0], [-14009173.0, 6505713.0], [-14009215.0, 6505692.0], [-14009175.0, 6505608.0], [-14009260.0, 6505566.0], [-14009240.0, 6505524.0], [-14009282.0, 6505503.0], [-14009262.0, 6505462.0], [-14009304.0, 6505442.0], [-14009223.0, 6505271.0], [-14009181.0, 6505292.0], [-14009161.0, 6505249.0], [-14009203.0, 6505230.0], [-14009061.0, 6504933.0], [-14009104.0, 6504912.0], [-14009024.0, 6504743.0], [-14009066.0, 6504722.0], [-14009005.0, 6504595.0], [-14009047.0, 6504576.0], [-14008967.0, 6504405.0], [-14008925.0, 6504426.0], [-14008904.0, 6504382.0], [-14008862.0, 6504403.0], [-14008821.0, 6504317.0], [-14008779.0, 6504338.0], [-14008759.0, 6504297.0], [-14008589.0, 6504377.0], [-14008609.0, 6504419.0], [-14008525.0, 6504459.0], [-14008444.0, 6504290.0], [-14008401.0, 6504310.0], [-14008361.0, 6504225.0], [-14008319.0, 6504246.0], [-14008279.0, 6504161.0], [-14008321.0, 6504140.0], [-14008260.0, 6504012.0], [-14008303.0, 6503993.0], [-14008282.0, 6503949.0], [-14008324.0, 6503930.0], [-14008284.0, 6503845.0], [-14008327.0, 6503826.0], [-14008287.0, 6503740.0], [-14008329.0, 6503719.0], [-14008309.0, 6503677.0], [-14008351.0, 6503657.0], [-14008271.0, 6503487.0], [-14008313.0, 6503468.0], [-14008252.0, 6503341.0], [-14008294.0, 6503320.0], [-14008254.0, 6503235.0], [-14008297.0, 6503215.0], [-14008237.0, 6503088.0], [-14008279.0, 6503067.0], [-14008259.0, 6503025.0], [-14008301.0, 6503004.0], [-14008281.0, 6502963.0], [-14008323.0, 6502942.0], [-14008303.0, 6502900.0], [-14008346.0, 6502879.0], [-14008326.0, 6502837.0], [-14008368.0, 6502816.0], [-14008348.0, 6502774.0], [-14008390.0, 6502755.0], [-14008370.0, 6502711.0], [-14008412.0, 6502692.0], [-14008311.0, 6502480.0], [-14008353.0, 6502459.0], [-14008333.0, 6502417.0], [-14008376.0, 6502396.0], [-14008356.0, 6502354.0], [-14008440.0, 6502314.0], [-14008420.0, 6502272.0], [-14008463.0, 6502251.0], [-14008442.0, 6502209.0], [-14008485.0, 6502188.0], [-14008465.0, 6502147.0], [-14008507.0, 6502126.0], [-14008487.0, 6502084.0], [-14008529.0, 6502063.0], [-14008489.0, 6501979.0], [-14008532.0, 6501958.0], [-14008512.0, 6501916.0], [-14008554.0, 6501895.0], [-14008534.0, 6501854.0], [-14008576.0, 6501833.0], [-14008556.0, 6501791.0], [-14008598.0, 6501770.0], [-14008577.0, 6501728.0], [-14008663.0, 6501688.0], [-14008622.0, 6501603.0], [-14008664.0, 6501583.0], [-14008604.0, 6501456.0], [-14008646.0, 6501435.0], [-14008626.0, 6501393.0], [-14008668.0, 6501372.0], [-14008648.0, 6501331.0], [-14008691.0, 6501310.0], [-14008671.0, 6501268.0], [-14008713.0, 6501247.0], [-14008693.0, 6501205.0], [-14008778.0, 6501165.0], [-14008758.0, 6501121.0], [-14008800.0, 6501102.0], [-14008780.0, 6501059.0], [-14008864.0, 6501019.0], [-14008844.0, 6500977.0], [-14008887.0, 6500956.0], [-14008867.0, 6500914.0], [-14008951.0, 6500874.0], [-14008931.0, 6500832.0], [-14009016.0, 6500790.0], [-14008996.0, 6500748.0], [-14009038.0, 6500727.0], [-14009018.0, 6500686.0], [-14009060.0, 6500666.0], [-14009019.0, 6500581.0], [-14009105.0, 6500541.0], [-14009084.0, 6500497.0], [-14009127.0, 6500478.0], [-14009106.0, 6500435.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p176264","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p176265"}}},"glyph":{"type":"object","name":"Patches","id":"p176260","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p176261","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p176262","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p176226","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p176239"},{"type":"object","name":"WheelZoomTool","id":"p176240","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p176241","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p176242","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p176248","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p176247","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p176249"},{"type":"object","name":"SaveTool","id":"p176250"},{"type":"object","name":"HoverTool","id":"p176268","attributes":{"renderers":[{"id":"p176263"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p176234","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p176235","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p176236","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p176237"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p176229","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p176230","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p176231","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p176232"}}}],"center":[{"type":"object","name":"Grid","id":"p176233","attributes":{"axis":{"id":"p176229"}}},{"type":"object","name":"Grid","id":"p176238","attributes":{"dimension":1,"axis":{"id":"p176234"}}},{"type":"object","name":"Legend","id":"p176266","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p176267","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p176263"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p176269","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"f204447b-19c6-4da1-81e9-c2db6e83598c","roots":{"p176270":"c70d6a9f-40d0-43a0-bad7-4f9243100544"},"root_ids":["p176270"]}];
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