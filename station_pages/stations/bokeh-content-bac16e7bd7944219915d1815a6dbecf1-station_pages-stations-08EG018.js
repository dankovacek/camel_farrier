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
    
    
    const element = document.getElementById("f2029f13-69d1-448d-af68-d9362333a0d1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f2029f13-69d1-448d-af68-d9362333a0d1' but no matching script tag was found.")
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
                  const docs_json = '{"bd0e3e17-f381-4feb-a568-0ab020cca3d4":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p96059","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p96060"}}},"roots":[{"type":"object","name":"Column","id":"p96114","attributes":{"children":[{"type":"object","name":"Figure","id":"p96061","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p96062","attributes":{"start":-14340013.55,"end":-14329877.45}},"y_range":{"type":"object","name":"DataRange1d","id":"p96063","attributes":{"start":7353973.4,"end":7363468.6}},"x_scale":{"type":"object","name":"LinearScale","id":"p96071"},"y_scale":{"type":"object","name":"LinearScale","id":"p96072"},"title":{"type":"object","name":"Title","id":"p96064"},"renderers":[{"type":"object","name":"TileRenderer","id":"p96096","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p96095","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p96107","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p96098","attributes":{"selected":{"type":"object","name":"Selection","id":"p96099","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p96100"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 28.215236}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-14333795.0, 7355140.0], [-14333934.0, 7355069.0], [-14333983.0, 7355160.0], [-14334030.0, 7355134.0], [-14334054.0, 7355181.0], [-14334101.0, 7355158.0], [-14334125.0, 7355202.0], [-14334172.0, 7355179.0], [-14334221.0, 7355270.0], [-14334268.0, 7355245.0], [-14334392.0, 7355474.0], [-14334345.0, 7355499.0], [-14334444.0, 7355681.0], [-14334397.0, 7355705.0], [-14334471.0, 7355842.0], [-14334517.0, 7355819.0], [-14334567.0, 7355910.0], [-14334613.0, 7355885.0], [-14334639.0, 7355931.0], [-14334684.0, 7355906.0], [-14334710.0, 7355953.0], [-14334756.0, 7355928.0], [-14334830.0, 7356065.0], [-14334877.0, 7356042.0], [-14334926.0, 7356133.0], [-14334973.0, 7356108.0], [-14334997.0, 7356155.0], [-14335044.0, 7356129.0], [-14335117.0, 7356267.0], [-14335164.0, 7356244.0], [-14335213.0, 7356335.0], [-14335260.0, 7356310.0], [-14335383.0, 7356539.0], [-14335337.0, 7356564.0], [-14335411.0, 7356699.0], [-14335364.0, 7356725.0], [-14335464.0, 7356907.0], [-14335417.0, 7356932.0], [-14335639.0, 7357343.0], [-14335593.0, 7357367.0], [-14335617.0, 7357413.0], [-14335664.0, 7357388.0], [-14335737.0, 7357526.0], [-14335784.0, 7357501.0], [-14335833.0, 7357594.0], [-14335880.0, 7357568.0], [-14335954.0, 7357706.0], [-14336001.0, 7357681.0], [-14336026.0, 7357727.0], [-14336072.0, 7357702.0], [-14336170.0, 7357887.0], [-14336124.0, 7357910.0], [-14336149.0, 7357956.0], [-14336195.0, 7357931.0], [-14336294.0, 7358115.0], [-14336341.0, 7358090.0], [-14336390.0, 7358181.0], [-14336436.0, 7358158.0], [-14336487.0, 7358249.0], [-14336532.0, 7358224.0], [-14336558.0, 7358271.0], [-14336603.0, 7358245.0], [-14336703.0, 7358430.0], [-14336749.0, 7358405.0], [-14336823.0, 7358542.0], [-14336870.0, 7358517.0], [-14336944.0, 7358655.0], [-14336991.0, 7358630.0], [-14337015.0, 7358676.0], [-14337062.0, 7358653.0], [-14337087.0, 7358697.0], [-14337133.0, 7358674.0], [-14337158.0, 7358719.0], [-14337205.0, 7358695.0], [-14337179.0, 7358649.0], [-14337412.0, 7358527.0], [-14337437.0, 7358573.0], [-14337483.0, 7358550.0], [-14337508.0, 7358595.0], [-14337554.0, 7358571.0], [-14337580.0, 7358616.0], [-14337625.0, 7358593.0], [-14337650.0, 7358637.0], [-14337697.0, 7358614.0], [-14337747.0, 7358705.0], [-14337792.0, 7358680.0], [-14337842.0, 7358771.0], [-14337889.0, 7358748.0], [-14337938.0, 7358839.0], [-14337985.0, 7358816.0], [-14338034.0, 7358907.0], [-14338081.0, 7358882.0], [-14338253.0, 7359202.0], [-14338208.0, 7359227.0], [-14338257.0, 7359318.0], [-14338350.0, 7359270.0], [-14338399.0, 7359361.0], [-14338446.0, 7359336.0], [-14338495.0, 7359427.0], [-14338542.0, 7359404.0], [-14338566.0, 7359450.0], [-14338519.0, 7359473.0], [-14338545.0, 7359520.0], [-14338498.0, 7359543.0], [-14338547.0, 7359635.0], [-14338594.0, 7359611.0], [-14338643.0, 7359702.0], [-14338690.0, 7359677.0], [-14338789.0, 7359862.0], [-14338742.0, 7359885.0], [-14338792.0, 7359976.0], [-14338745.0, 7360001.0], [-14338844.0, 7360184.0], [-14338798.0, 7360209.0], [-14338822.0, 7360253.0], [-14338775.0, 7360279.0], [-14338801.0, 7360323.0], [-14338754.0, 7360349.0], [-14338779.0, 7360393.0], [-14338685.0, 7360442.0], [-14338711.0, 7360488.0], [-14338664.0, 7360512.0], [-14338688.0, 7360558.0], [-14338642.0, 7360583.0], [-14338666.0, 7360628.0], [-14338574.0, 7360676.0], [-14338598.0, 7360723.0], [-14338552.0, 7360746.0], [-14338576.0, 7360793.0], [-14338437.0, 7360865.0], [-14338461.0, 7360911.0], [-14338369.0, 7360960.0], [-14338393.0, 7361006.0], [-14338253.0, 7361078.0], [-14338279.0, 7361125.0], [-14338232.0, 7361148.0], [-14338257.0, 7361195.0], [-14338210.0, 7361218.0], [-14338234.0, 7361264.0], [-14338142.0, 7361313.0], [-14338166.0, 7361358.0], [-14338120.0, 7361383.0], [-14338144.0, 7361429.0], [-14337911.0, 7361550.0], [-14337887.0, 7361505.0], [-14337840.0, 7361528.0], [-14337791.0, 7361437.0], [-14337744.0, 7361460.0], [-14337720.0, 7361416.0], [-14337673.0, 7361439.0], [-14337649.0, 7361395.0], [-14337510.0, 7361466.0], [-14337484.0, 7361422.0], [-14337392.0, 7361470.0], [-14337416.0, 7361515.0], [-14337276.0, 7361589.0], [-14337301.0, 7361635.0], [-14337208.0, 7361684.0], [-14337232.0, 7361728.0], [-14337186.0, 7361754.0], [-14337211.0, 7361798.0], [-14337118.0, 7361847.0], [-14337142.0, 7361893.0], [-14337050.0, 7361942.0], [-14337074.0, 7361986.0], [-14336981.0, 7362035.0], [-14337005.0, 7362082.0], [-14336960.0, 7362107.0], [-14336984.0, 7362151.0], [-14336937.0, 7362177.0], [-14336913.0, 7362130.0], [-14336773.0, 7362204.0], [-14336798.0, 7362248.0], [-14336705.0, 7362297.0], [-14336729.0, 7362344.0], [-14336682.0, 7362367.0], [-14336634.0, 7362276.0], [-14336448.0, 7362373.0], [-14336422.0, 7362328.0], [-14336376.0, 7362351.0], [-14336227.0, 7362078.0], [-14336182.0, 7362101.0], [-14336131.0, 7362010.0], [-14336085.0, 7362035.0], [-14336060.0, 7361988.0], [-14336013.0, 7362014.0], [-14335964.0, 7361920.0], [-14335918.0, 7361946.0], [-14335844.0, 7361808.0], [-14335797.0, 7361833.0], [-14335773.0, 7361787.0], [-14335819.0, 7361763.0], [-14335794.0, 7361717.0], [-14335747.0, 7361742.0], [-14335698.0, 7361649.0], [-14335652.0, 7361674.0], [-14335528.0, 7361445.0], [-14335389.0, 7361519.0], [-14335413.0, 7361563.0], [-14335367.0, 7361589.0], [-14335391.0, 7361633.0], [-14335344.0, 7361658.0], [-14335370.0, 7361703.0], [-14335277.0, 7361752.0], [-14335301.0, 7361798.0], [-14335254.0, 7361821.0], [-14335280.0, 7361868.0], [-14335140.0, 7361942.0], [-14335164.0, 7361986.0], [-14335118.0, 7362012.0], [-14335093.0, 7361965.0], [-14335000.0, 7362014.0], [-14334976.0, 7361969.0], [-14334929.0, 7361992.0], [-14334905.0, 7361946.0], [-14334858.0, 7361971.0], [-14334734.0, 7361742.0], [-14334781.0, 7361719.0], [-14334682.0, 7361534.0], [-14334635.0, 7361559.0], [-14334586.0, 7361468.0], [-14334632.0, 7361443.0], [-14334484.0, 7361169.0], [-14334437.0, 7361193.0], [-14334364.0, 7361055.0], [-14334317.0, 7361080.0], [-14334243.0, 7360942.0], [-14334056.0, 7361039.0], [-14334032.0, 7360995.0], [-14333985.0, 7361018.0], [-14333961.0, 7360973.0], [-14333914.0, 7360997.0], [-14333865.0, 7360905.0], [-14333818.0, 7360931.0], [-14333769.0, 7360838.0], [-14333722.0, 7360863.0], [-14333648.0, 7360725.0], [-14333602.0, 7360750.0], [-14333528.0, 7360612.0], [-14333481.0, 7360636.0], [-14333383.0, 7360453.0], [-14333336.0, 7360479.0], [-14333237.0, 7360294.0], [-14333190.0, 7360319.0], [-14333166.0, 7360273.0], [-14333119.0, 7360298.0], [-14333070.0, 7360207.0], [-14333023.0, 7360230.0], [-14332974.0, 7360139.0], [-14332928.0, 7360162.0], [-14332878.0, 7360071.0], [-14332832.0, 7360096.0], [-14332807.0, 7360050.0], [-14332667.0, 7360123.0], [-14332643.0, 7360077.0], [-14332549.0, 7360125.0], [-14332525.0, 7360081.0], [-14332478.0, 7360104.0], [-14332453.0, 7360059.0], [-14332407.0, 7360083.0], [-14332382.0, 7360036.0], [-14332335.0, 7360061.0], [-14332311.0, 7360015.0], [-14332264.0, 7360040.0], [-14332240.0, 7359993.0], [-14332193.0, 7360019.0], [-14332168.0, 7359972.0], [-14332122.0, 7359997.0], [-14332048.0, 7359860.0], [-14332002.0, 7359883.0], [-14331977.0, 7359838.0], [-14331837.0, 7359910.0], [-14331689.0, 7359636.0], [-14331735.0, 7359611.0], [-14331711.0, 7359567.0], [-14331664.0, 7359590.0], [-14331591.0, 7359454.0], [-14331544.0, 7359477.0], [-14331519.0, 7359433.0], [-14331566.0, 7359408.0], [-14331541.0, 7359361.0], [-14331587.0, 7359338.0], [-14331464.0, 7359109.0], [-14331418.0, 7359134.0], [-14331393.0, 7359087.0], [-14331347.0, 7359113.0], [-14331297.0, 7359019.0], [-14331250.0, 7359045.0], [-14331226.0, 7358998.0], [-14331272.0, 7358975.0], [-14331075.0, 7358608.0], [-14331122.0, 7358585.0], [-14331047.0, 7358447.0], [-14331141.0, 7358399.0], [-14331117.0, 7358352.0], [-14331256.0, 7358280.0], [-14331280.0, 7358325.0], [-14331420.0, 7358253.0], [-14331395.0, 7358207.0], [-14331488.0, 7358158.0], [-14331464.0, 7358114.0], [-14331511.0, 7358088.0], [-14331460.0, 7357997.0], [-14331507.0, 7357974.0], [-14331483.0, 7357927.0], [-14331530.0, 7357904.0], [-14331455.0, 7357766.0], [-14331502.0, 7357741.0], [-14331477.0, 7357696.0], [-14331524.0, 7357671.0], [-14331499.0, 7357627.0], [-14331545.0, 7357601.0], [-14331521.0, 7357557.0], [-14331753.0, 7357435.0], [-14331828.0, 7357572.0], [-14331875.0, 7357547.0], [-14331899.0, 7357594.0], [-14331946.0, 7357568.0], [-14331970.0, 7357615.0], [-14332156.0, 7357518.0], [-14332132.0, 7357471.0], [-14332318.0, 7357374.0], [-14332293.0, 7357330.0], [-14332340.0, 7357305.0], [-14332314.0, 7357260.0], [-14332361.0, 7357235.0], [-14332337.0, 7357190.0], [-14332569.0, 7357068.0], [-14332545.0, 7357023.0], [-14332638.0, 7356975.0], [-14332613.0, 7356928.0], [-14332706.0, 7356880.0], [-14332682.0, 7356833.0], [-14332774.0, 7356785.0], [-14332676.0, 7356603.0], [-14332768.0, 7356554.0], [-14332744.0, 7356509.0], [-14332791.0, 7356484.0], [-14332742.0, 7356393.0], [-14332787.0, 7356368.0], [-14332763.0, 7356323.0], [-14332856.0, 7356275.0], [-14332832.0, 7356228.0], [-14332971.0, 7356156.0], [-14332947.0, 7356110.0], [-14332993.0, 7356087.0], [-14332969.0, 7356040.0], [-14333200.0, 7355920.0], [-14333176.0, 7355873.0], [-14333316.0, 7355800.0], [-14333292.0, 7355755.0], [-14333337.0, 7355730.0], [-14333313.0, 7355685.0], [-14333360.0, 7355660.0], [-14333335.0, 7355615.0], [-14333521.0, 7355518.0], [-14333497.0, 7355472.0], [-14333636.0, 7355400.0], [-14333611.0, 7355354.0], [-14333797.0, 7355257.0], [-14333773.0, 7355210.0], [-14333819.0, 7355187.0], [-14333795.0, 7355140.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p96108","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p96109"}}},"glyph":{"type":"object","name":"Patches","id":"p96104","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p96105","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p96106","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p96070","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p96083"},{"type":"object","name":"WheelZoomTool","id":"p96084","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p96085","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p96086","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p96092","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p96091","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p96093"},{"type":"object","name":"SaveTool","id":"p96094"},{"type":"object","name":"HoverTool","id":"p96112","attributes":{"renderers":[{"id":"p96107"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p96078","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p96079","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p96080","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p96081"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p96073","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p96074","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p96075","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p96076"}}}],"center":[{"type":"object","name":"Grid","id":"p96077","attributes":{"axis":{"id":"p96073"}}},{"type":"object","name":"Grid","id":"p96082","attributes":{"dimension":1,"axis":{"id":"p96078"}}},{"type":"object","name":"Legend","id":"p96110","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p96111","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p96107"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p96113","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"bd0e3e17-f381-4feb-a568-0ab020cca3d4","roots":{"p96114":"f2029f13-69d1-448d-af68-d9362333a0d1"},"root_ids":["p96114"]}];
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