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
    
    
    const element = document.getElementById("c9df31d4-ca2f-4871-940b-9b57978c2d88");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c9df31d4-ca2f-4871-940b-9b57978c2d88' but no matching script tag was found.")
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
                  const docs_json = '{"14ddd706-5171-41e4-a209-9260b8df8f37":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p460516","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p460517"}}},"roots":[{"type":"object","name":"Column","id":"p460599","attributes":{"children":[{"type":"object","name":"Figure","id":"p460518","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p460519","attributes":{"start":-12999374.6,"end":-12994741.4}},"y_range":{"type":"object","name":"DataRange1d","id":"p460520","attributes":{"start":6377293.6,"end":6379706.4}},"x_scale":{"type":"object","name":"LinearScale","id":"p460528"},"y_scale":{"type":"object","name":"LinearScale","id":"p460529"},"title":{"type":"object","name":"Title","id":"p460521"},"renderers":[{"type":"object","name":"TileRenderer","id":"p460553","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p460552","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p460564","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p460555","attributes":{"selected":{"type":"object","name":"Selection","id":"p460556","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460557"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 3.560719319620287}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12995516.0, 6377827.954545454], [-12995628.091932457, 6377792.288930582], [-12995642.0, 6377836.0], [-12996041.793103449, 6377707.793103448], [-12996169.091932457, 6377667.288930582], [-12996183.0, 6377711.0], [-12996183.908067543, 6377710.711069418], [-12996184.0, 6377711.0], [-12996359.091932457, 6377655.288930582], [-12996373.0, 6377699.0], [-12996505.0, 6377657.0], [-12996519.0, 6377701.0], [-12996519.90992647, 6377700.710477941], [-12996520.0, 6377701.0], [-12996548.0, 6377691.7727272725], [-12996607.0, 6377673.0], [-12996606.81081081, 6377672.391891892], [-12996608.0, 6377672.0], [-12996594.193014706, 6377627.620404412], [-12996624.0, 6377618.136363637], [-12996637.084181314, 6377614.270582793], [-12996651.0, 6377659.0], [-12996739.0, 6377630.0], [-12996738.80691912, 6377629.393174381], [-12996740.0, 6377629.0], [-12996726.0, 6377586.0], [-12996769.091932457, 6377572.288930582], [-12996783.0, 6377616.0], [-12996814.0, 6377606.136363637], [-12996827.085930122, 6377602.2700661], [-12996841.0, 6377646.0], [-12996841.908067543, 6377645.711069418], [-12996842.0, 6377646.0], [-12996885.091932457, 6377632.288930582], [-12996899.0, 6377676.0], [-12996960.0, 6377656.590909091], [-12996987.088941177, 6377648.279529411], [-12997001.0, 6377692.0], [-12997002.506849315, 6377691.520547945], [-12997003.0, 6377693.0], [-12997033.352941176, 6377681.705882353], [-12997045.0, 6377678.0], [-12997059.0, 6377722.0], [-12997059.90992647, 6377721.710477941], [-12997060.0, 6377722.0], [-12997147.090993501, 6377694.289229341], [-12997175.0, 6377783.0], [-12997205.0, 6377772.7727272725], [-12997219.09007353, 6377768.289522059], [-12997233.0, 6377813.0], [-12997233.90992647, 6377812.710477941], [-12997234.0, 6377813.0], [-12997242.513513513, 6377809.972972973], [-12997277.0, 6377799.0], [-12997291.0, 6377843.0], [-12997335.0, 6377829.0], [-12997349.0, 6377873.0], [-12997349.90992647, 6377872.710477941], [-12997350.0, 6377873.0], [-12997357.0, 6377870.454545454], [-12997393.0, 6377859.0], [-12997407.0, 6377903.0], [-12997451.0, 6377889.0], [-12997479.0, 6377977.0], [-12997523.0, 6377963.0], [-12997537.0, 6378007.0], [-12997537.915818686, 6378006.708603146], [-12997538.0, 6378007.0], [-12997581.091932457, 6377993.288930582], [-12997609.0, 6378081.0], [-12997609.908067543, 6378080.711069418], [-12997610.0, 6378081.0], [-12997653.09007353, 6378067.289522059], [-12997667.0, 6378112.0], [-12997667.90410959, 6378111.691780822], [-12997668.0, 6378112.0], [-12997691.27586207, 6378103.724137931], [-12997711.0, 6378097.0], [-12997725.0, 6378142.0], [-12997769.0, 6378128.0], [-12997797.0, 6378216.0], [-12997841.0, 6378202.0], [-12997855.0, 6378246.0], [-12997855.90992647, 6378245.710477941], [-12997856.0, 6378246.0], [-12997899.091932457, 6378232.288930582], [-12997913.0, 6378276.0], [-12997957.0, 6378262.0], [-12997985.0, 6378350.0], [-12997986.818013, 6378349.421541318], [-12997987.0, 6378350.0], [-12998043.0, 6378331.545454546], [-12998073.0, 6378322.0], [-12998087.0, 6378366.0], [-12998087.915818686, 6378365.708603146], [-12998088.0, 6378366.0], [-12998131.091932457, 6378352.288930582], [-12998145.0, 6378396.0], [-12998179.0, 6378385.181818182], [-12998233.176966293, 6378368.559339887], [-12998289.0, 6378545.0], [-12998333.0, 6378531.0], [-12998347.0, 6378575.0], [-12998435.0, 6378547.0], [-12998449.0, 6378591.0], [-12998493.0, 6378577.0], [-12998536.0, 6378709.0], [-12998623.0, 6378681.0], [-12998652.0, 6378769.0], [-12998696.0, 6378755.0], [-12998710.0, 6378799.0], [-12998754.0, 6378785.0], [-12998782.0, 6378874.0], [-12998826.0, 6378860.0], [-12998840.0, 6378904.0], [-12998797.0, 6378917.0], [-12998797.180388529, 6378917.624421831], [-12998796.0, 6378918.0], [-12998810.0, 6378962.0], [-12998766.0, 6378976.0], [-12998780.0, 6379020.0], [-12998752.0, 6379029.2272727275], [-12998693.0, 6379048.0], [-12998693.18918919, 6379048.608108108], [-12998692.0, 6379049.0], [-12998678.0, 6379004.0], [-12998634.0, 6379019.0], [-12998620.0, 6378974.0], [-12998576.0, 6378988.0], [-12998562.0, 6378944.0], [-12998518.0, 6378958.0], [-12998504.0, 6378914.0], [-12998460.0, 6378928.0], [-12998446.0, 6378884.0], [-12998358.0, 6378912.0], [-12998344.0, 6378868.0], [-12998300.0, 6378882.0], [-12998286.0, 6378838.0], [-12998110.0, 6378895.0], [-12998096.0, 6378850.0], [-12997964.0, 6378893.0], [-12997950.0, 6378849.0], [-12997906.0, 6378863.0], [-12997892.0, 6378818.0], [-12997716.0, 6378875.0], [-12997730.0, 6378919.0], [-12997598.0, 6378961.0], [-12997612.0, 6379006.0], [-12997568.0, 6379020.0], [-12997582.0, 6379064.0], [-12997538.0, 6379078.0], [-12997552.0, 6379122.0], [-12997508.0, 6379136.0], [-12997522.0, 6379180.0], [-12997478.0, 6379195.0], [-12997492.0, 6379239.0], [-12997448.0, 6379253.0], [-12997462.0, 6379297.0], [-12997418.0, 6379311.0], [-12997432.0, 6379355.0], [-12997345.102505695, 6379383.307517084], [-12997345.0, 6379383.0], [-12997302.0, 6379397.0], [-12997287.0, 6379354.0], [-12997286.37033538, 6379354.190363722], [-12997286.0, 6379353.0], [-12997252.246575342, 6379364.506849315], [-12997244.0, 6379367.0], [-12997215.0, 6379278.0], [-12996775.0, 6379419.0], [-12996762.0, 6379376.0], [-12996761.091932457, 6379376.288930582], [-12996761.0, 6379376.0], [-12996717.90410959, 6379389.712328767], [-12996703.0, 6379345.0], [-12996660.0, 6379359.0], [-12996645.0, 6379316.0], [-12996644.094692541, 6379316.277764789], [-12996644.0, 6379316.0], [-12996623.573913043, 6379322.573913043], [-12996557.0, 6379343.0], [-12996544.0, 6379299.0], [-12996499.0, 6379314.0], [-12996486.0, 6379270.0], [-12996484.179310344, 6379270.525977012], [-12996484.0, 6379270.0], [-12996468.253521128, 6379275.126760564], [-12996441.0, 6379283.0], [-12996428.0, 6379239.0], [-12996339.0, 6379268.0], [-12996311.0, 6379178.0], [-12996279.80392157, 6379189.607843137], [-12996267.808219178, 6379193.424657534], [-12996253.0, 6379149.0], [-12996252.091975598, 6379149.295635852], [-12996252.0, 6379149.0], [-12996230.75862069, 6379156.24137931], [-12996210.0, 6379163.0], [-12996181.0, 6379075.0], [-12996180.092913013, 6379075.295330647], [-12996180.0, 6379075.0], [-12996137.808219178, 6379088.424657534], [-12996123.0, 6379044.0], [-12996080.0, 6379058.0], [-12996065.0, 6379015.0], [-12996064.093869733, 6379015.295019157], [-12996064.0, 6379015.0], [-12996021.818013, 6379028.421541318], [-12995994.0, 6378940.0], [-12995970.0, 6378948.0], [-12995948.91197019, 6378954.709827666], [-12995922.0, 6378866.0], [-12995920.178303389, 6378866.566750057], [-12995920.0, 6378866.0], [-12995899.118644068, 6378873.118644068], [-12995877.0, 6378880.0], [-12995849.0, 6378792.0], [-12995848.092913013, 6378792.295330647], [-12995848.0, 6378792.0], [-12995805.810191678, 6378805.42402992], [-12995777.0, 6378718.0], [-12995776.091932457, 6378718.288930582], [-12995776.0, 6378718.0], [-12995732.91286307, 6378731.709543568], [-12995706.0, 6378642.0], [-12995669.513513513, 6378654.972972973], [-12995660.909006499, 6378657.710770659], [-12995633.0, 6378569.0], [-12995632.08504673, 6378569.270327102], [-12995632.0, 6378569.0], [-12995619.0, 6378573.136363637], [-12995589.0, 6378582.0], [-12995575.0, 6378539.0], [-12995574.091932457, 6378539.288930582], [-12995574.0, 6378539.0], [-12995530.908539431, 6378552.710919272], [-12995363.0, 6378022.0], [-12995319.0, 6378036.0], [-12995277.196016403, 6377904.616051553], [-12995516.0, 6377827.954545454]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p460565","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460566"}}},"glyph":{"type":"object","name":"Patches","id":"p460561","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p460562","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p460563","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p460579","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p460570","attributes":{"selected":{"type":"object","name":"Selection","id":"p460571","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460572"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0008179494257559989}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12995277.196016403, 6377904.616051553], [-12995319.0, 6378036.0], [-12995363.0, 6378022.0], [-12995530.908539431, 6378552.710919272], [-12995530.0, 6378553.0], [-12995362.0, 6378023.0], [-12995318.0, 6378037.0], [-12995276.0, 6377905.0], [-12995277.196016403, 6377904.616051553]]]}}, {\\"id\\": \\"26\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0005609856717158109}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12997242.0, 6379368.0], [-12997214.0, 6379279.0], [-12996775.0, 6379420.0], [-12996761.091932457, 6379376.288930582], [-12996762.0, 6379376.0], [-12996775.0, 6379419.0], [-12997215.0, 6379278.0], [-12997244.0, 6379367.0], [-12997252.246575342, 6379364.506849315], [-12997242.0, 6379368.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p460580","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460581"}}},"glyph":{"type":"object","name":"Patches","id":"p460576","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p460577","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p460578","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p460593","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p460584","attributes":{"selected":{"type":"object","name":"Selection","id":"p460585","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460586"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"16\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.12210228927846672}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12998707.0, 6379093.0], [-12998663.0, 6379106.0], [-12998649.0, 6379062.0], [-12998606.0, 6379077.0], [-12998591.0, 6379032.0], [-12998547.0, 6379046.0], [-12998533.0, 6379002.0], [-12998445.0, 6379031.0], [-12998431.0, 6378986.0], [-12998387.0, 6379000.0], [-12998373.0, 6378957.0], [-12998329.0, 6378971.0], [-12998315.0, 6378926.0], [-12998182.0, 6378969.0], [-12998169.0, 6378924.0], [-12998037.0, 6378967.0], [-12998023.0, 6378922.0], [-12997935.0, 6378950.0], [-12997921.0, 6378907.0], [-12997877.0, 6378921.0], [-12997891.0, 6378965.0], [-12997803.0, 6378993.0], [-12997790.0, 6378948.0], [-12997657.0, 6378991.0], [-12997672.0, 6379036.0], [-12997627.0, 6379050.0], [-12997641.0, 6379094.0], [-12997597.0, 6379108.0], [-12997611.0, 6379151.0], [-12997567.0, 6379166.0], [-12997581.0, 6379209.0], [-12997537.0, 6379225.0], [-12997551.0, 6379268.0], [-12997508.0, 6379283.0], [-12997521.0, 6379326.0], [-12997478.0, 6379340.0], [-12997491.0, 6379385.0], [-12997360.0, 6379428.0], [-12997345.102505695, 6379383.307517084], [-12997432.0, 6379355.0], [-12997418.0, 6379311.0], [-12997462.0, 6379297.0], [-12997448.0, 6379253.0], [-12997492.0, 6379239.0], [-12997478.0, 6379195.0], [-12997522.0, 6379180.0], [-12997508.0, 6379136.0], [-12997552.0, 6379122.0], [-12997538.0, 6379078.0], [-12997582.0, 6379064.0], [-12997568.0, 6379020.0], [-12997612.0, 6379006.0], [-12997598.0, 6378961.0], [-12997730.0, 6378919.0], [-12997716.0, 6378875.0], [-12997892.0, 6378818.0], [-12997906.0, 6378863.0], [-12997950.0, 6378849.0], [-12997964.0, 6378893.0], [-12998096.0, 6378850.0], [-12998110.0, 6378895.0], [-12998286.0, 6378838.0], [-12998300.0, 6378882.0], [-12998344.0, 6378868.0], [-12998358.0, 6378912.0], [-12998446.0, 6378884.0], [-12998460.0, 6378928.0], [-12998504.0, 6378914.0], [-12998518.0, 6378958.0], [-12998562.0, 6378944.0], [-12998576.0, 6378988.0], [-12998620.0, 6378974.0], [-12998634.0, 6379019.0], [-12998678.0, 6379004.0], [-12998692.0, 6379049.0], [-12998693.18918919, 6379048.608108108], [-12998707.0, 6379093.0]]]}}, {\\"id\\": \\"19\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.04150844066005014}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-12998235.0, 6378368.0], [-12998248.0, 6378412.0], [-12998293.0, 6378399.0], [-12998306.0, 6378441.0], [-12998351.0, 6378428.0], [-12998364.0, 6378472.0], [-12998408.0, 6378459.0], [-12998436.0, 6378546.0], [-12998481.0, 6378533.0], [-12998494.0, 6378575.0], [-12998539.0, 6378562.0], [-12998552.0, 6378606.0], [-12998597.0, 6378593.0], [-12998624.0, 6378680.0], [-12998669.0, 6378667.0], [-12998682.0, 6378711.0], [-12998727.0, 6378696.0], [-12998769.0, 6378830.0], [-12998813.0, 6378814.0], [-12998840.0, 6378904.0], [-12998826.0, 6378860.0], [-12998782.0, 6378874.0], [-12998754.0, 6378785.0], [-12998710.0, 6378799.0], [-12998696.0, 6378755.0], [-12998652.0, 6378769.0], [-12998623.0, 6378681.0], [-12998536.0, 6378709.0], [-12998493.0, 6378577.0], [-12998449.0, 6378591.0], [-12998435.0, 6378547.0], [-12998347.0, 6378575.0], [-12998333.0, 6378531.0], [-12998289.0, 6378545.0], [-12998233.176966293, 6378368.559339887], [-12998235.0, 6378368.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p460594","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460595"}}},"glyph":{"type":"object","name":"Patches","id":"p460590","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p460591","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p460592","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p460527","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p460540"},{"type":"object","name":"WheelZoomTool","id":"p460541","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p460542","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p460543","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p460549","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p460548","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p460550"},{"type":"object","name":"SaveTool","id":"p460551"},{"type":"object","name":"HoverTool","id":"p460569","attributes":{"renderers":[{"id":"p460564"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p460583","attributes":{"renderers":[{"id":"p460579"}],"tooltips":[["Old only","Prerelease/Pr\\u00e9liminaire"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p460597","attributes":{"renderers":[{"id":"p460593"}],"tooltips":[["New only","June 2024 / juin 2024"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p460535","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p460536","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p460537","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p460538"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p460530","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p460531","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p460532","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p460533"}}}],"center":[{"type":"object","name":"Grid","id":"p460534","attributes":{"axis":{"id":"p460530"}}},{"type":"object","name":"Grid","id":"p460539","attributes":{"dimension":1,"axis":{"id":"p460535"}}},{"type":"object","name":"Legend","id":"p460567","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p460568","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p460564"}]}},{"type":"object","name":"LegendItem","id":"p460582","attributes":{"label":{"type":"value","value":"Old only (Prerelease/Pr\\u00e9liminaire)"},"renderers":[{"id":"p460579"}]}},{"type":"object","name":"LegendItem","id":"p460596","attributes":{"label":{"type":"value","value":"New only (June 2024 / juin 2024)"},"renderers":[{"id":"p460593"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p460598","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"14ddd706-5171-41e4-a209-9260b8df8f37","roots":{"p460599":"c9df31d4-ca2f-4871-940b-9b57978c2d88"},"root_ids":["p460599"]}];
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