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
    
    
    const element = document.getElementById("ade0d9c4-749e-4cf7-bc1d-ed7b9608633a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ade0d9c4-749e-4cf7-bc1d-ed7b9608633a' but no matching script tag was found.")
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
                  const docs_json = '{"1db37ad0-0f1b-4b9e-b378-67ec188cdcc1":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p268887","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p268888"}}},"roots":[{"type":"object","name":"Column","id":"p268976","attributes":{"children":[{"type":"object","name":"Figure","id":"p268889","attributes":{"width":800,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p268890","attributes":{"start":-13791456.7,"end":-13787429.3}},"y_range":{"type":"object","name":"DataRange1d","id":"p268891","attributes":{"start":6359257.8,"end":6364910.2}},"x_scale":{"type":"object","name":"LinearScale","id":"p268899"},"y_scale":{"type":"object","name":"LinearScale","id":"p268900"},"title":{"type":"object","name":"Title","id":"p268892"},"renderers":[{"type":"object","name":"TileRenderer","id":"p268924","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p268923","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p268935","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p268926","attributes":{"selected":{"type":"object","name":"Selection","id":"p268927","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p268928"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 7.819181320185095}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13790384.161312528, 6359942.365075723], [-13790403.0, 6359985.0], [-13790572.0, 6359910.0], [-13790590.0, 6359952.0], [-13790633.0, 6359934.0], [-13790651.0, 6359976.0], [-13790777.16630197, 6359920.367614879], [-13790815.0, 6360004.0], [-13790856.530726258, 6359986.201117318], [-13790894.0, 6360071.0], [-13790852.0, 6360089.0], [-13790852.351955308, 6360089.840782123], [-13790852.0, 6360090.0], [-13790856.329113925, 6360099.341772152], [-13790869.800046286, 6360131.522332793], [-13790786.0, 6360168.0], [-13790786.36923077, 6360168.837362638], [-13790786.0, 6360169.0], [-13790841.63238512, 6360295.166301969], [-13790800.0, 6360314.0], [-13790800.351955308, 6360314.840782123], [-13790800.0, 6360315.0], [-13790818.0, 6360357.0], [-13790776.0, 6360376.0], [-13790794.629417164, 6360418.161312529], [-13790710.0, 6360455.0], [-13790729.0, 6360498.0], [-13790687.0, 6360516.0], [-13790705.0, 6360559.0], [-13790663.0, 6360577.0], [-13790681.630316742, 6360619.163348416], [-13790639.0, 6360638.0], [-13790676.631748961, 6360723.166589756], [-13790635.0, 6360742.0], [-13790635.362125725, 6360742.83618122], [-13790635.0, 6360743.0], [-13790689.637874275, 6360869.16381878], [-13790648.0, 6360888.0], [-13790685.0, 6360972.0], [-13790643.0, 6360991.0], [-13790810.0, 6361372.0], [-13790853.0, 6361354.0], [-13790889.636321086, 6361438.164521414], [-13790848.0, 6361457.0], [-13790848.201117318, 6361457.469273743], [-13790847.0, 6361458.0], [-13790866.0, 6361499.0], [-13790782.0, 6361536.0], [-13790782.368251039, 6361536.833410244], [-13790782.0, 6361537.0], [-13790800.0, 6361579.0], [-13790716.0, 6361616.0], [-13790716.368974183, 6361616.835046836], [-13790716.0, 6361617.0], [-13790725.5, 6361637.5], [-13790734.631748961, 6361658.166589756], [-13790693.0, 6361677.0], [-13790711.0, 6361720.0], [-13790669.0, 6361738.0], [-13790669.365075722, 6361738.838687471], [-13790669.0, 6361739.0], [-13790706.0, 6361823.0], [-13790664.0, 6361842.0], [-13790719.0, 6361968.0], [-13790677.0, 6361987.0], [-13790715.0, 6362073.0], [-13790757.0, 6362054.0], [-13790774.642441861, 6362095.165697674], [-13790734.0, 6362114.0], [-13790734.196903951, 6362114.458543451], [-13790733.0, 6362115.0], [-13790777.128329298, 6362214.435835351], [-13790807.0, 6362284.0], [-13790807.836056143, 6362283.630579843], [-13790808.0, 6362284.0], [-13790850.0, 6362266.0], [-13790874.251968505, 6362321.0], [-13790905.0, 6362392.0], [-13790863.0, 6362411.0], [-13790901.0, 6362496.0], [-13790858.0, 6362515.0], [-13790876.624470588, 6362556.169882353], [-13790835.0, 6362575.0], [-13790835.351955308, 6362575.840782123], [-13790835.0, 6362576.0], [-13790853.0, 6362618.0], [-13790811.0, 6362637.0], [-13790824.393442623, 6362666.606557377], [-13790829.64738419, 6362679.157640009], [-13790787.5, 6362698.0], [-13790745.0, 6362716.0], [-13790745.368974183, 6362716.835046836], [-13790745.0, 6362717.0], [-13790764.0, 6362759.0], [-13790783.0, 6362802.0], [-13790825.0, 6362783.0], [-13790862.0, 6362867.0], [-13790904.0, 6362849.0], [-13790978.0, 6363018.0], [-13790936.0, 6363037.0], [-13790991.63238512, 6363163.166301969], [-13790950.0, 6363182.0], [-13790950.368251039, 6363182.833410244], [-13790950.0, 6363183.0], [-13790968.0, 6363225.0], [-13790926.0, 6363244.0], [-13790944.623967586, 6363285.168770454], [-13790818.0, 6363342.0], [-13790836.63081315, 6363384.164471867], [-13790731.5, 6363431.0], [-13790626.0, 6363477.0], [-13790626.36918685, 6363477.835528133], [-13790626.0, 6363478.0], [-13790645.0, 6363520.0], [-13790392.0, 6363632.0], [-13790373.0, 6363590.0], [-13790331.0, 6363609.0], [-13790368.0, 6363693.0], [-13790326.0, 6363712.0], [-13790343.80364396, 6363754.530927237], [-13790176.0, 6363829.0], [-13790157.0, 6363786.0], [-13789989.0, 6363861.0], [-13790007.0, 6363904.0], [-13789965.469273742, 6363921.798882682], [-13789947.0, 6363880.0], [-13789778.0, 6363954.0], [-13789760.0, 6363913.0], [-13789759.534840794, 6363913.210429165], [-13789759.0, 6363912.0], [-13789717.465159206, 6363930.789570835], [-13789699.0, 6363889.0], [-13789614.0, 6363926.0], [-13789596.0, 6363884.0], [-13789554.0, 6363902.0], [-13789535.0, 6363860.0], [-13789493.0, 6363878.0], [-13789493.363678914, 6363878.835478586], [-13789493.0, 6363879.0], [-13789530.0, 6363963.0], [-13789488.0, 6363981.0], [-13789488.351955308, 6363981.840782123], [-13789488.0, 6363982.0], [-13789506.0, 6364024.0], [-13789464.0, 6364043.0], [-13789500.796236806, 6364127.531895365], [-13789459.0, 6364146.0], [-13789441.0, 6364104.0], [-13789440.534840794, 6364104.210429165], [-13789440.0, 6364103.0], [-13789398.465159206, 6364121.789570835], [-13789380.0, 6364080.0], [-13789338.0, 6364099.0], [-13789296.0, 6364117.0], [-13789259.0, 6364033.0], [-13789258.165553296, 6364033.370316585], [-13789258.0, 6364033.0], [-13789090.0, 6364108.0], [-13789071.0, 6364065.0], [-13788776.0, 6364196.0], [-13788794.631748961, 6364238.166589756], [-13788753.0, 6364257.0], [-13788734.0, 6364214.0], [-13788692.0, 6364233.0], [-13788673.0, 6364191.0], [-13788631.0, 6364209.0], [-13788612.0, 6364167.0], [-13788570.0, 6364185.0], [-13788552.0, 6364143.0], [-13788510.0, 6364161.0], [-13788491.0, 6364120.0], [-13788448.476064244, 6364136.811788554], [-13788393.0, 6364011.0], [-13788351.0, 6364029.0], [-13788333.0, 6363987.0], [-13788332.156093108, 6363987.35326335], [-13788332.0, 6363987.0], [-13788319.606557377, 6363992.606557377], [-13788290.0, 6364005.0], [-13788284.3, 6363992.7], [-13788272.0, 6363964.0], [-13788271.165697675, 6363964.35755814], [-13788271.0, 6363964.0], [-13788253.0, 6363972.142857143], [-13788230.0, 6363982.0], [-13788211.0, 6363940.0], [-13788169.0, 6363959.0], [-13788150.0, 6363916.0], [-13788108.0, 6363935.0], [-13788090.0, 6363892.0], [-13788066.0, 6363902.857142857], [-13788047.840782123, 6363910.639664805], [-13788029.0, 6363868.0], [-13787944.0, 6363906.0], [-13787907.365075722, 6363821.838687471], [-13787950.0, 6363803.0], [-13787894.0, 6363676.0], [-13787936.0, 6363657.0], [-13787917.0, 6363614.0], [-13787960.0, 6363596.0], [-13787941.0, 6363553.0], [-13787983.0, 6363536.0], [-13787982.62849162, 6363535.159217877], [-13787983.0, 6363535.0], [-13787965.1949758, 6363492.465775524], [-13788049.0, 6363455.0], [-13788030.368974183, 6363412.835046836], [-13788072.5, 6363394.0], [-13788115.0, 6363376.0], [-13788114.631025817, 6363375.164953164], [-13788115.0, 6363375.0], [-13788096.0, 6363333.0], [-13788138.0, 6363314.0], [-13788120.351955308, 6363271.840782123], [-13788162.0, 6363253.0], [-13788088.366051638, 6363084.835982797], [-13788256.5, 6363009.5], [-13788425.0, 6362935.0], [-13788424.631163595, 6362934.165264977], [-13788425.0, 6362934.0], [-13788415.5, 6362913.5], [-13788406.368974183, 6362892.835046836], [-13788491.0, 6362855.0], [-13788472.0, 6362812.0], [-13788514.0, 6362794.0], [-13788513.636321086, 6362793.164521414], [-13788514.0, 6362793.0], [-13788477.0, 6362709.0], [-13788520.0, 6362690.0], [-13788501.368251039, 6362647.833410244], [-13788543.0, 6362629.0], [-13788524.0, 6362587.0], [-13788566.0, 6362568.0], [-13788455.364874383, 6362314.834937779], [-13788497.0, 6362296.0], [-13788496.648044692, 6362295.159217877], [-13788497.0, 6362295.0], [-13788479.0, 6362253.0], [-13788521.0, 6362234.0], [-13788502.368251039, 6362191.833410244], [-13788523.0, 6362182.5], [-13788544.0, 6362174.0], [-13788543.648044692, 6362173.159217877], [-13788544.0, 6362173.0], [-13788526.0, 6362131.0], [-13788610.0, 6362094.0], [-13788592.0, 6362051.0], [-13788634.0, 6362033.0], [-13788615.368251039, 6361990.833410244], [-13788699.0, 6361953.0], [-13788681.351955308, 6361910.840782123], [-13788723.0, 6361892.0], [-13788722.641025642, 6361891.162393162], [-13788723.0, 6361891.0], [-13788717.3, 6361878.7], [-13788705.0, 6361850.0], [-13788831.0, 6361794.0], [-13788812.0, 6361751.0], [-13788855.0, 6361733.0], [-13788854.630316742, 6361732.163348416], [-13788855.0, 6361732.0], [-13788845.5, 6361711.5], [-13788836.368251039, 6361690.833410244], [-13788878.0, 6361672.0], [-13788877.631748961, 6361671.166589756], [-13788878.0, 6361671.0], [-13788860.0, 6361629.0], [-13788902.0, 6361610.0], [-13788884.19775596, 6361567.472417017], [-13788967.0, 6361531.0], [-13788949.0, 6361488.0], [-13789033.0, 6361451.0], [-13788978.0, 6361324.0], [-13789062.0, 6361287.0], [-13789061.631025817, 6361286.164953164], [-13789062.0, 6361286.0], [-13789052.5, 6361265.5], [-13789043.368251039, 6361244.833410244], [-13789085.0, 6361226.0], [-13789067.0, 6361183.0], [-13789143.939726027, 6361148.939726028], [-13789320.0, 6361072.0], [-13789319.630429769, 6361071.163604213], [-13789320.0, 6361071.0], [-13789301.0, 6361029.0], [-13789343.0, 6361010.0], [-13789325.351955308, 6360967.840782123], [-13789367.0, 6360949.0], [-13789366.633961203, 6360948.16558898], [-13789367.0, 6360948.0], [-13789320.5, 6360843.0], [-13789274.367453827, 6360737.837636681], [-13789317.0, 6360719.0], [-13789242.0, 6360549.0], [-13789284.0, 6360531.0], [-13789289.606557377, 6360543.393442623], [-13789302.0, 6360573.0], [-13789302.833410244, 6360572.631748961], [-13789303.0, 6360573.0], [-13789345.0, 6360554.0], [-13789363.0, 6360597.0], [-13789363.835046835, 6360596.626684944], [-13789364.0, 6360597.0], [-13789448.0, 6360559.0], [-13789429.36980843, 6360516.836934865], [-13789509.818181818, 6360481.363636363], [-13789555.0, 6360462.0], [-13789554.802442418, 6360461.528056887], [-13789556.0, 6360461.0], [-13789537.0, 6360419.0], [-13789622.0, 6360381.0], [-13789603.368251039, 6360338.833410244], [-13789624.0, 6360329.5], [-13789645.0, 6360321.0], [-13789682.0, 6360405.0], [-13789724.0, 6360386.0], [-13789743.0, 6360429.0], [-13789784.166589756, 6360410.37701892], [-13789803.0, 6360453.0], [-13790141.0, 6360304.0], [-13790122.0, 6360261.0], [-13790164.0, 6360242.0], [-13790145.369683258, 6360199.836651584], [-13790188.0, 6360181.0], [-13790169.0, 6360139.0], [-13790212.0, 6360120.0], [-13790193.0, 6360078.0], [-13790319.0, 6360022.0], [-13790318.631748961, 6360021.166589756], [-13790319.0, 6360021.0], [-13790301.0, 6359980.0], [-13790364.68553459, 6359950.842767295], [-13790384.161312528, 6359942.365075723]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p268936","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p268937"}}},"glyph":{"type":"object","name":"Patches","id":"p268932","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p268933","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p268934","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p268950","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p268941","attributes":{"selected":{"type":"object","name":"Selection","id":"p268942","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p268943"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"72\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.013185}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13790686.0, 6360972.0], [-13790644.0, 6360991.0], [-13790699.0, 6361118.0], [-13790742.0, 6361099.0], [-13790853.0, 6361354.0], [-13790810.0, 6361372.0], [-13790643.0, 6360991.0], [-13790685.0, 6360972.0], [-13790648.0, 6360888.0], [-13790686.0, 6360972.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p268951","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p268952"}}},"glyph":{"type":"object","name":"Patches","id":"p268947","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p268948","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p268949","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p268961","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p268955","attributes":{"selected":{"type":"object","name":"Selection","id":"p268956","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p268957"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+P5EXPkqG/WQQCjSWVICAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/9u/IbBN3iXCEQAtDqW/CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p268962","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p268963"}}},"glyph":{"type":"object","name":"Scatter","id":"p268958","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.8},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.8},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.8},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p268959","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p268960","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p268971","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p268965","attributes":{"selected":{"type":"object","name":"Selection","id":"p268966","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p268967"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wuSvXlggW/WQQB9BVTuCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/1v5ffk6DecIRwAqNRTeCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p268972","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p268973"}}},"glyph":{"type":"object","name":"Scatter","id":"p268968","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.8},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.8},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.8},"marker":{"type":"value","value":"square"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p268969","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"square"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p268970","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"square"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p268898","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p268911"},{"type":"object","name":"WheelZoomTool","id":"p268912","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p268913","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p268914","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p268920","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p268919","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p268921"},{"type":"object","name":"SaveTool","id":"p268922"},{"type":"object","name":"HoverTool","id":"p268940","attributes":{"renderers":[{"id":"p268935"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p268954","attributes":{"renderers":[{"id":"p268950"}],"tooltips":[["New only","June 2024 / juin 2024"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p268906","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p268907","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p268908","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p268909"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p268901","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p268902","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p268903","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p268904"}}}],"center":[{"type":"object","name":"Grid","id":"p268905","attributes":{"axis":{"id":"p268901"}}},{"type":"object","name":"Grid","id":"p268910","attributes":{"dimension":1,"axis":{"id":"p268906"}}},{"type":"object","name":"Legend","id":"p268938","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p268939","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p268935"}]}},{"type":"object","name":"LegendItem","id":"p268953","attributes":{"label":{"type":"value","value":"New only (June 2024 / juin 2024)"},"renderers":[{"id":"p268950"}]}},{"type":"object","name":"LegendItem","id":"p268964","attributes":{"label":{"type":"value","value":"Pour Point"},"renderers":[{"id":"p268961"}]}},{"type":"object","name":"LegendItem","id":"p268974","attributes":{"label":{"type":"value","value":"Station Location"},"renderers":[{"id":"p268971"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p268975","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"1db37ad0-0f1b-4b9e-b378-67ec188cdcc1","roots":{"p268976":"ade0d9c4-749e-4cf7-bc1d-ed7b9608633a"},"root_ids":["p268976"]}];
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