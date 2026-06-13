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
    
    
    const element = document.getElementById("d56fb862-5713-4201-a43c-cbc24a91b439");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd56fb862-5713-4201-a43c-cbc24a91b439' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.9.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.9.1.min.js"];
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
                  const docs_json = '{"3b1a7638-08be-496a-b148-327805ca5f18":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p495336","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p495337"}}},"roots":[{"type":"object","name":"Column","id":"p495430","attributes":{"children":[{"type":"object","name":"Figure","id":"p495338","attributes":{"width":800,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p495339","attributes":{"start":-13134320.6,"end":-13132157.4}},"y_range":{"type":"object","name":"DataRange1d","id":"p495340","attributes":{"start":6459231.85,"end":6460741.15}},"x_scale":{"type":"object","name":"LinearScale","id":"p495348"},"y_scale":{"type":"object","name":"LinearScale","id":"p495349"},"title":{"type":"object","name":"Title","id":"p495341"},"renderers":[{"type":"object","name":"TileRenderer","id":"p495373","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p495372","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p495381","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p495375","attributes":{"selected":{"type":"object","name":"Selection","id":"p495376","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495377"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.36330433580269483}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133170.320080759, 6459602.742729901], [-13133179.776313968, 6459630.6750753485], [-13133185.206309259, 6459647.597314904], [-13133796.650274146, 6459439.045647707], [-13133892.10993308, 6459406.563323279], [-13133922.141338313, 6459494.953125547], [-13133922.243346475, 6459494.917362397], [-13133922.299408393, 6459495.082907757], [-13133966.484920012, 6459480.046896499], [-13134052.828155577, 6459734.998674412], [-13134071.309455976, 6459789.836467538], [-13134040.123282474, 6459800.770590133], [-13134027.301236771, 6459805.1339767855], [-13134027.341222806, 6459805.252044845], [-13134026.781659655, 6459805.4482300095], [-13134037.647203911, 6459835.6827863], [-13134042.123356368, 6459848.899600727], [-13133997.838592054, 6459864.426263831], [-13134011.042287406, 6459902.636866588], [-13134013.1155867, 6459908.7587991385], [-13133924.739518965, 6459938.832499537], [-13133924.758130264, 6459938.887455994], [-13133924.367728129, 6459939.016729103], [-13133931.90067465, 6459959.978320321], [-13133939.537627527, 6459982.529032941], [-13133895.424660524, 6459997.995710155], [-13133898.937377866, 6460008.161459405], [-13133910.552198011, 6460042.458591979], [-13133824.044998886, 6460071.894906294], [-13133822.168937735, 6460072.516133025], [-13133817.63532689, 6460059.12844895], [-13133807.482262792, 6460027.485357537], [-13133762.928901087, 6460043.10667832], [-13133747.985256145, 6459998.977046343], [-13133704.05656564, 6460013.923978543], [-13133703.955136359, 6460013.607863392], [-13133670.148060206, 6460025.461321188], [-13133615.417697662, 6460044.082959111], [-13133615.589505358, 6460044.590349697], [-13133614.899543723, 6460044.832257777], [-13133628.265123645, 6460082.024487668], [-13133630.369231803, 6460088.238405044], [-13133408.958485754, 6460162.792139056], [-13133421.405866332, 6460198.815315612], [-13133424.464117402, 6460207.847826415], [-13133380.273228275, 6460222.881784218], [-13133371.511124551, 6460197.002486539], [-13133365.543884346, 6460178.404601657], [-13133357.00343557, 6460181.399104471], [-13133321.08458747, 6460193.618545376], [-13133321.19793613, 6460193.953333898], [-13133321.016088028, 6460194.017093575], [-13133324.5325642, 6460203.802541], [-13133335.976730838, 6460237.604103043], [-13133302.696040707, 6460249.273200414], [-13133291.890918247, 6460252.948986199], [-13133295.071981559, 6460262.3447279725], [-13133306.331108136, 6460297.435879392], [-13133218.504957642, 6460327.3128506085], [-13133218.790441278, 6460328.156094768], [-13133233.073690303, 6460370.960717083], [-13133192.158503653, 6460385.674732469], [-13133189.309955783, 6460386.643728861], [-13133196.417332698, 6460407.637271925], [-13133203.935178269, 6460431.0683868425], [-13133027.53549046, 6460491.072462755], [-13133012.539232956, 6460446.773697734], [-13132879.95932972, 6460491.8686764855], [-13132894.95489392, 6460536.1679192595], [-13132806.566943329, 6460566.230367415], [-13132791.571841352, 6460521.930806106], [-13132791.19500975, 6460522.058970411], [-13132791.135311853, 6460521.88619463], [-13132781.24463509, 6460525.443188393], [-13132747.518365856, 6460536.913717642], [-13132739.82737641, 6460514.654875592], [-13132732.383137688, 6460492.661970919], [-13132732.24457998, 6460492.709094579], [-13132732.135981731, 6460492.394794048], [-13132644.193584006, 6460521.88619463], [-13132635.9051241, 6460498.820840926], [-13132629.00099397, 6460478.422670351], [-13132628.621505981, 6460478.5517289], [-13132628.608855296, 6460478.516524075], [-13132540.611631772, 6460508.478752503], [-13132510.626005583, 6460419.882310715], [-13132554.819800068, 6460404.853191364], [-13132524.615888488, 6460315.611926992], [-13132525.081728853, 6460315.448586781], [-13132495.214179264, 6460227.53238154], [-13132583.232906278, 6460197.599332308], [-13132568.51435883, 6460154.112078141], [-13132611.910931675, 6460138.506144366], [-13132611.894461038, 6460138.45481168], [-13132612.431968836, 6460138.272012205], [-13132600.967800258, 6460104.4005100755], [-13132597.60432727, 6460093.917795908], [-13132685.822090987, 6460063.915596565], [-13132677.369014174, 6460038.94129599], [-13132671.135472799, 6460019.513815443], [-13132759.210757146, 6459989.559043619], [-13132744.444416158, 6459945.933702125], [-13132921.050326286, 6459885.354924621], [-13132935.97273015, 6459929.437984654], [-13132966.419946132, 6459919.081658256], [-13132980.378446203, 6459914.731387884], [-13132975.17873408, 6459899.683800115], [-13132965.167956414, 6459870.11096642], [-13132986.133517075, 6459862.979643625], [-13133009.32151381, 6459855.752997334], [-13133009.130377084, 6459855.157317462], [-13133009.357598336, 6459855.0800283495], [-13133004.522928607, 6459840.798135344], [-13132994.849980006, 6459810.652157345], [-13132996.582542675, 6459810.029137438], [-13133038.551954199, 6459795.753189428], [-13133035.069912236, 6459785.467154653], [-13133023.79304761, 6459751.674504869], [-13133039.076263769, 6459746.178770192], [-13133067.745847944, 6459736.426608459], [-13133052.920516884, 6459692.6326195365], [-13133097.263911536, 6459677.08571982], [-13133081.960500319, 6459632.799941873], [-13133170.320080759, 6459602.742729901]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p495382","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495383"}}},"glyph":{"type":"object","name":"Patches","id":"p495378","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p495379","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p495380","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p495393","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p495387","attributes":{"selected":{"type":"object","name":"Selection","id":"p495388","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495389"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"1\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 6.691688337926619e-05}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133185.315582138, 6459647.037223925], [-13133796.650274146, 6459439.045647707], [-13133185.206309259, 6459647.597314904], [-13133179.776313968, 6459630.6750753485], [-13133185.315582138, 6459647.037223925]]]}}, {\\"id\\": \\"12\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0027513948921466668}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133630.416712217, 6460088.378625607], [-13133586.226940477, 6460103.41361346], [-13133601.225901257, 6460147.709616591], [-13133468.654829262, 6460192.813630764], [-13133453.656561647, 6460148.517149796], [-13133409.466080848, 6460163.551186193], [-13133421.405866332, 6460198.815315612], [-13133408.958485754, 6460162.792139056], [-13133630.369231803, 6460088.238405044], [-13133630.416712217, 6460088.378625607]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p495394","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495395"}}},"glyph":{"type":"object","name":"Patches","id":"p495390","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p495391","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p495392","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p495404","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p495398","attributes":{"selected":{"type":"object","name":"Selection","id":"p495399","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495400"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"10\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0072115990511427055}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13132496.138661249, 6460523.620986153], [-13132481.667127447, 6460478.516524075], [-13132437.13933113, 6460494.129579418], [-13132407.083068613, 6460405.655986707], [-13132451.610864934, 6460390.04309747], [-13132436.026136223, 6460346.674114481], [-13132524.615888488, 6460315.611926992], [-13132554.819800068, 6460404.853191364], [-13132510.626005583, 6460419.882310715], [-13132540.611631772, 6460508.478752503], [-13132496.138661249, 6460523.620986153]]]}}, {\\"id\\": \\"14\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0028267266258650134}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133204.130622698, 6460431.677533906], [-13132806.720040563, 6460566.990891945], [-13132791.19500975, 6460522.058970411], [-13132791.571841352, 6460521.930806106], [-13132806.566943329, 6460566.230367415], [-13132894.95489392, 6460536.1679192595], [-13132879.95932972, 6460491.8686764855], [-13133012.539232956, 6460446.773697734], [-13133027.53549046, 6460491.072462755], [-13133203.935178269, 6460431.0683868425], [-13133204.130622698, 6460431.677533906]]]}}, {\\"id\\": \\"23\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0009027647785147623}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133718.426670162, 6460058.70980404], [-13133704.05656564, 6460013.923978543], [-13133747.985256145, 6459998.977046343], [-13133762.928901087, 6460043.10667832], [-13133718.426670162, 6460058.70980404]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p495405","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495406"}}},"glyph":{"type":"object","name":"Patches","id":"p495401","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p495402","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p495403","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p495415","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495409","attributes":{"selected":{"type":"object","name":"Selection","id":"p495410","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495411"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zuxve1yNE/mQQCGU0ViCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//t9PLhDeGmEIwDaNrMrCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495416","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495417"}}},"glyph":{"type":"object","name":"Scatter","id":"p495412","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.8},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.8},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.8},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p495413","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p495414","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p495425","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p495419","attributes":{"selected":{"type":"object","name":"Selection","id":"p495420","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495421"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/8vWW9waw5N5EABRFjJBCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/ztanvqaeWmEIwCHhinHCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p495426","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495427"}}},"glyph":{"type":"object","name":"Scatter","id":"p495422","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.8},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.8},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.8},"marker":{"type":"value","value":"square"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p495423","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"square"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p495424","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"square"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p495347","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p495360"},{"type":"object","name":"WheelZoomTool","id":"p495361","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p495362","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p495363","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p495369","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p495368","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p495370"},{"type":"object","name":"SaveTool","id":"p495371"},{"type":"object","name":"HoverTool","id":"p495386","attributes":{"renderers":[{"id":"p495381"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p495397","attributes":{"renderers":[{"id":"p495393"}],"tooltips":[["Old only","Prerelease/Pr\\u00e9liminaire"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p495408","attributes":{"renderers":[{"id":"p495404"}],"tooltips":[["New only","June 2024 / juin 2024"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p495355","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p495356","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p495357","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p495358"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p495350","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p495351","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p495352","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p495353"}}}],"center":[{"type":"object","name":"Grid","id":"p495354","attributes":{"axis":{"id":"p495350"}}},{"type":"object","name":"Grid","id":"p495359","attributes":{"dimension":1,"axis":{"id":"p495355"}}},{"type":"object","name":"Legend","id":"p495384","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p495385","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p495381"}]}},{"type":"object","name":"LegendItem","id":"p495396","attributes":{"label":{"type":"value","value":"Old only (Prerelease/Pr\\u00e9liminaire)"},"renderers":[{"id":"p495393"}]}},{"type":"object","name":"LegendItem","id":"p495407","attributes":{"label":{"type":"value","value":"New only (June 2024 / juin 2024)"},"renderers":[{"id":"p495404"}]}},{"type":"object","name":"LegendItem","id":"p495418","attributes":{"label":{"type":"value","value":"Pour Point"},"renderers":[{"id":"p495415"}]}},{"type":"object","name":"LegendItem","id":"p495428","attributes":{"label":{"type":"value","value":"Station Location"},"renderers":[{"id":"p495425"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p495429","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in a local Lambert Azimuthal Equal Area CRS; polygons are converted to EPSG:3857 only for web-map rendering&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"3b1a7638-08be-496a-b148-327805ca5f18","roots":{"p495430":"d56fb862-5713-4201-a43c-cbc24a91b439"},"root_ids":["p495430"]}];
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