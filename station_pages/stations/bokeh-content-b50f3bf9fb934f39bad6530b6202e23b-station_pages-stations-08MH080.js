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
    
    
    const element = document.getElementById("fd712176-796c-4926-b8a4-efce4212c1a5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fd712176-796c-4926-b8a4-efce4212c1a5' but no matching script tag was found.")
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
                  const docs_json = '{"0dd2ac1b-1b6f-4bc5-8338-2096e04359e4":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p341667","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p341668"}}},"roots":[{"type":"object","name":"Column","id":"p341756","attributes":{"children":[{"type":"object","name":"Figure","id":"p341669","attributes":{"width":800,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p341670","attributes":{"start":-13612684.25,"end":-13609050.75}},"y_range":{"type":"object","name":"DataRange1d","id":"p341671","attributes":{"start":6276584.3,"end":6280741.7}},"x_scale":{"type":"object","name":"LinearScale","id":"p341679"},"y_scale":{"type":"object","name":"LinearScale","id":"p341680"},"title":{"type":"object","name":"Title","id":"p341672"},"renderers":[{"type":"object","name":"TileRenderer","id":"p341704","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p341703","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p341715","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p341706","attributes":{"selected":{"type":"object","name":"Selection","id":"p341707","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341708"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 4.755428399058206}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13609847.0, 6277859.0], [-13609875.0, 6277847.0], [-13609889.179743225, 6277841.429386591], [-13609907.0, 6277884.0], [-13609948.818181818, 6277866.575757576], [-13609949.0, 6277867.0], [-13609963.0, 6277860.666666667], [-13609991.0, 6277849.0], [-13610025.0, 6277933.0], [-13610025.854287025, 6277932.6461256305], [-13610026.0, 6277933.0], [-13610196.25, 6277862.0625], [-13610573.0, 6277706.0], [-13610660.0, 6277918.0], [-13610702.0, 6277901.0], [-13610719.0, 6277943.0], [-13610761.0, 6277926.0], [-13610831.0, 6278095.0], [-13610915.0, 6278060.0], [-13610880.0, 6277976.0], [-13610922.0, 6277958.0], [-13610870.0, 6277831.0], [-13610912.0, 6277813.0], [-13610843.0, 6277644.0], [-13610885.0, 6277626.0], [-13610850.0, 6277541.0], [-13610892.743088655, 6277523.37607245], [-13610893.0, 6277524.0], [-13611061.0, 6277454.0], [-13611078.0, 6277496.0], [-13611078.497159092, 6277495.798768939], [-13611079.0, 6277497.0], [-13611120.0, 6277480.0], [-13611190.0, 6277650.0], [-13611316.0, 6277597.0], [-13611323.285714285, 6277614.0], [-13611333.0, 6277638.0], [-13611333.485283561, 6277637.798994975], [-13611334.0, 6277639.0], [-13611502.0, 6277568.0], [-13611519.0, 6277611.0], [-13611603.500674764, 6277577.1997300945], [-13611618.858267717, 6277614.0], [-13611655.0, 6277704.0], [-13611950.0, 6277582.0], [-13611968.0, 6277624.0], [-13612094.0, 6277572.0], [-13612101.285714285, 6277589.0], [-13612111.0, 6277613.0], [-13612111.485714287, 6277612.8], [-13612112.0, 6277614.0], [-13612176.258064516, 6277586.129032258], [-13612195.144970413, 6277578.352071006], [-13612265.0, 6277748.0], [-13612181.0, 6277783.0], [-13612181.344927536, 6277783.852173913], [-13612181.0, 6277784.0], [-13612188.285714285, 6277801.0], [-13612198.0, 6277825.0], [-13612156.0, 6277843.0], [-13612173.0, 6277885.0], [-13612131.0, 6277903.0], [-13612166.0, 6277987.0], [-13612082.0, 6278022.0], [-13612082.338068182, 6278022.855113637], [-13612082.0, 6278023.0], [-13612098.660107903, 6278065.140272929], [-13611973.0, 6278117.0], [-13611973.347918436, 6278117.856414613], [-13611973.0, 6278118.0], [-13612025.0, 6278245.0], [-13611983.0, 6278262.0], [-13612018.0, 6278347.0], [-13611891.0, 6278400.0], [-13611875.0, 6278358.0], [-13611874.472890146, 6278358.1961338995], [-13611874.0, 6278357.0], [-13611849.705882354, 6278367.411764706], [-13611832.0, 6278374.0], [-13611832.338068182, 6278374.855113637], [-13611832.0, 6278375.0], [-13611849.0, 6278417.0], [-13611639.0, 6278505.0], [-13611655.659188544, 6278547.137947494], [-13611614.0, 6278564.0], [-13611614.352941176, 6278564.857142857], [-13611614.0, 6278565.0], [-13611649.0, 6278649.0], [-13611691.0, 6278633.0], [-13611725.0, 6278717.0], [-13611683.0, 6278734.0], [-13611701.0, 6278777.0], [-13611659.0, 6278794.0], [-13611693.0, 6278879.0], [-13611651.0, 6278896.0], [-13611651.35, 6278896.85], [-13611651.0, 6278897.0], [-13611720.65, 6279066.15], [-13611679.0, 6279084.0], [-13611713.0, 6279169.0], [-13611671.0, 6279186.0], [-13611688.64673665, 6279228.1560931085], [-13611667.5, 6279237.5], [-13611646.0, 6279246.0], [-13611646.360335195, 6279246.840782123], [-13611646.0, 6279247.0], [-13611663.637931034, 6279288.155172414], [-13611622.0, 6279306.0], [-13611742.654144548, 6279603.148223765], [-13611701.0, 6279621.0], [-13611719.0, 6279663.0], [-13611676.0, 6279680.0], [-13611676.7065267, 6279681.687813784], [-13611676.0, 6279682.0], [-13611693.634782609, 6279723.147826087], [-13611652.0, 6279740.0], [-13611652.344262294, 6279740.860655738], [-13611652.0, 6279741.0], [-13611685.658536585, 6279825.146341464], [-13611644.0, 6279843.0], [-13611662.0, 6279885.0], [-13611620.0, 6279902.0], [-13611620.341463415, 6279902.853658536], [-13611620.0, 6279903.0], [-13611653.661290323, 6279987.153225807], [-13611633.0, 6279996.5], [-13611612.0, 6280005.0], [-13611612.351955308, 6280005.840782123], [-13611612.0, 6280006.0], [-13611630.0, 6280048.0], [-13611503.0, 6280100.0], [-13611534.118110236, 6280176.0], [-13611554.655986508, 6280227.143338954], [-13611471.848484848, 6280261.646464647], [-13611454.0, 6280220.0], [-13611412.0, 6280237.0], [-13611401.8, 6280213.2], [-13611395.0, 6280196.0], [-13611394.515267175, 6280196.202290077], [-13611394.0, 6280195.0], [-13611268.0, 6280248.0], [-13611250.0, 6280205.0], [-13611208.844827587, 6280222.637931035], [-13611196.1, 6280192.9], [-13611191.0, 6280180.0], [-13611149.0, 6280198.0], [-13611114.0, 6280113.0], [-13611157.0, 6280096.0], [-13611130.605947955, 6280032.802973977], [-13611087.0, 6279926.0], [-13611086.145677838, 6279926.34880609], [-13611086.0, 6279926.0], [-13611037.294117646, 6279946.294117647], [-13610918.0, 6279995.0], [-13610901.0, 6279953.0], [-13610775.0, 6280006.0], [-13610757.0, 6279963.0], [-13610631.0, 6280016.0], [-13610613.0, 6279973.0], [-13610529.0, 6280008.0], [-13610512.0, 6279966.0], [-13610217.0, 6280088.0], [-13610043.0, 6279664.0], [-13610001.0, 6279681.0], [-13609983.666666666, 6279638.666666667], [-13609967.0, 6279597.0], [-13609966.661150511, 6279597.133963751], [-13609949.0, 6279554.0], [-13609898.0, 6279427.0], [-13609939.0, 6279410.0], [-13609938.65, 6279409.15], [-13609939.0, 6279409.0], [-13609905.0, 6279324.0], [-13609862.0, 6279342.0], [-13609828.0, 6279257.0], [-13609827.144970413, 6279257.352071006], [-13609827.0, 6279257.0], [-13609808.258064516, 6279265.129032258], [-13609743.502958579, 6279291.792899408], [-13609702.411764706, 6279192.0], [-13609674.342917997, 6279122.8448704295], [-13609695.0, 6279113.5], [-13609716.0, 6279105.0], [-13609715.664631283, 6279104.15171442], [-13609716.0, 6279104.0], [-13609710.9, 6279092.1], [-13609699.0, 6279062.0], [-13609741.0, 6279045.0], [-13609724.337479072, 6279002.8536235355], [-13609782.588235294, 6278977.588235294], [-13609808.0, 6278967.0], [-13609773.0, 6278882.0], [-13609815.0, 6278865.0], [-13609781.0, 6278780.0], [-13609823.0, 6278763.0], [-13609822.636619719, 6278762.152112676], [-13609823.0, 6278762.0], [-13609805.0, 6278720.0], [-13609763.0, 6278737.0], [-13609728.0, 6278653.0], [-13609601.85572731, 6278704.649623464], [-13609567.352941176, 6278620.857142857], [-13609609.0, 6278604.0], [-13609608.65138939, 6278603.141104295], [-13609609.0, 6278603.0], [-13609540.0, 6278433.0], [-13609498.0, 6278450.0], [-13609481.0, 6278408.0], [-13609523.0, 6278391.0], [-13609471.187932119, 6278263.462602137], [-13609482.5, 6278258.345238095], [-13609513.0, 6278246.0], [-13609478.0, 6278161.0], [-13609520.0, 6278144.0], [-13609519.645070422, 6278143.152112676], [-13609520.0, 6278143.0], [-13609503.0, 6278101.0], [-13609514.9, 6278095.9], [-13609545.0, 6278084.0], [-13609544.65, 6278083.15], [-13609545.0, 6278083.0], [-13609510.0, 6277999.0], [-13609636.0, 6277947.0], [-13609635.802263439, 6277946.499842817], [-13609637.0, 6277946.0], [-13609619.0, 6277904.0], [-13609787.0, 6277835.0], [-13609786.811136283, 6277834.492428759], [-13609788.0, 6277834.0], [-13609775.65116279, 6277804.5], [-13609771.0, 6277792.0], [-13609812.0, 6277774.0], [-13609847.0, 6277859.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p341716","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341717"}}},"glyph":{"type":"object","name":"Patches","id":"p341712","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p341713","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p341714","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p341730","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p341721","attributes":{"selected":{"type":"object","name":"Selection","id":"p341722","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341723"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.256847870561189}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13610446.0, 6277758.0], [-13610430.0, 6277716.0], [-13610471.0, 6277699.0], [-13610436.0, 6277614.0], [-13610479.0, 6277597.0], [-13610444.0, 6277512.0], [-13610486.0, 6277495.0], [-13610469.0, 6277453.0], [-13610553.0, 6277417.0], [-13610570.0, 6277460.0], [-13610612.0, 6277443.0], [-13610596.0, 6277400.0], [-13610637.0, 6277382.0], [-13610620.0, 6277339.0], [-13610662.0, 6277322.0], [-13610627.0, 6277237.0], [-13610669.0, 6277220.0], [-13610635.0, 6277135.0], [-13610803.0, 6277064.0], [-13610855.0, 6277191.0], [-13610813.0, 6277210.0], [-13610865.0, 6277337.0], [-13610823.0, 6277354.0], [-13610892.743088655, 6277523.37607245], [-13610850.0, 6277541.0], [-13610885.0, 6277626.0], [-13610843.0, 6277644.0], [-13610912.0, 6277813.0], [-13610870.0, 6277831.0], [-13610922.0, 6277958.0], [-13610880.0, 6277976.0], [-13610915.0, 6278060.0], [-13610831.0, 6278095.0], [-13610761.0, 6277926.0], [-13610719.0, 6277943.0], [-13610702.0, 6277901.0], [-13610660.0, 6277918.0], [-13610573.0, 6277706.0], [-13610196.25, 6277862.0625], [-13610446.0, 6277758.0]]]}}, {\\"id\\": \\"2\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.002061090390337631}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13609931.0, 6277825.0], [-13609948.818181818, 6277866.575757576], [-13609907.0, 6277884.0], [-13609889.179743225, 6277841.429386591], [-13609931.0, 6277825.0]]]}}, {\\"id\\": \\"20\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0020865090622240678}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13609924.0, 6279614.0], [-13609908.0, 6279571.0], [-13609949.0, 6279554.0], [-13609966.661150511, 6279597.133963751], [-13609924.0, 6279614.0]]]}}, {\\"id\\": \\"21\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.015127666666666977}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13610613.0, 6279974.0], [-13610529.0, 6280009.0], [-13610512.0, 6279967.0], [-13610217.0, 6280089.0], [-13610199.0, 6280047.0], [-13610158.0, 6280064.0], [-13610036.0, 6279767.0], [-13610078.0, 6279750.0], [-13610043.0, 6279665.0], [-13610001.0, 6279682.0], [-13609983.666666666, 6279638.666666667], [-13610001.0, 6279681.0], [-13610043.0, 6279664.0], [-13610217.0, 6280088.0], [-13610512.0, 6279966.0], [-13610529.0, 6280008.0], [-13610613.0, 6279973.0], [-13610631.0, 6280016.0], [-13610613.0, 6279974.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p341731","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341732"}}},"glyph":{"type":"object","name":"Patches","id":"p341727","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p341728","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p341729","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p341741","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p341735","attributes":{"selected":{"type":"object","name":"Selection","id":"p341736","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341737"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/1uoLJjf8zXzIACosKRiCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/zPqOG2++Eu4IwBvci9oCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p341742","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341743"}}},"glyph":{"type":"object","name":"Scatter","id":"p341738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.8},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.8},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.8},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p341739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p341740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p341751","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p341745","attributes":{"selected":{"type":"object","name":"Selection","id":"p341746","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341747"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/ytiKeqb9DXzIABydT7LCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/3N73CCx8Eu4IwDrf4NFCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p341752","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341753"}}},"glyph":{"type":"object","name":"Scatter","id":"p341748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.8},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.8},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.8},"marker":{"type":"value","value":"square"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p341749","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"square"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p341750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"square"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p341678","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p341691"},{"type":"object","name":"WheelZoomTool","id":"p341692","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p341693","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p341694","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p341700","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p341699","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p341701"},{"type":"object","name":"SaveTool","id":"p341702"},{"type":"object","name":"HoverTool","id":"p341720","attributes":{"renderers":[{"id":"p341715"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p341734","attributes":{"renderers":[{"id":"p341730"}],"tooltips":[["New only","June 2024 / juin 2024"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p341686","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p341687","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p341688","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p341689"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p341681","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p341682","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p341683","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p341684"}}}],"center":[{"type":"object","name":"Grid","id":"p341685","attributes":{"axis":{"id":"p341681"}}},{"type":"object","name":"Grid","id":"p341690","attributes":{"dimension":1,"axis":{"id":"p341686"}}},{"type":"object","name":"Legend","id":"p341718","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p341719","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p341715"}]}},{"type":"object","name":"LegendItem","id":"p341733","attributes":{"label":{"type":"value","value":"New only (June 2024 / juin 2024)"},"renderers":[{"id":"p341730"}]}},{"type":"object","name":"LegendItem","id":"p341744","attributes":{"label":{"type":"value","value":"Pour Point"},"renderers":[{"id":"p341741"}]}},{"type":"object","name":"LegendItem","id":"p341754","attributes":{"label":{"type":"value","value":"Station Location"},"renderers":[{"id":"p341751"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p341755","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"0dd2ac1b-1b6f-4bc5-8338-2096e04359e4","roots":{"p341756":"fd712176-796c-4926-b8a4-efce4212c1a5"},"root_ids":["p341756"]}];
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