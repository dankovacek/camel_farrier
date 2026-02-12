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
    
    
    const element = document.getElementById("e08232b8-d27d-4fcc-b8d8-81ed523d2179");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e08232b8-d27d-4fcc-b8d8-81ed523d2179' but no matching script tag was found.")
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
                  const docs_json = '{"8cdb53b6-9f68-4c38-a3cc-fc9a08c88966":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p665901","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p665902"}}},"roots":[{"type":"object","name":"Column","id":"p666004","attributes":{"children":[{"type":"object","name":"Figure","id":"p665903","attributes":{"width":800,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p665904","attributes":{"start":-13134320.6,"end":-13132157.4}},"y_range":{"type":"object","name":"DataRange1d","id":"p665905","attributes":{"start":6459231.85,"end":6460741.15}},"x_scale":{"type":"object","name":"LinearScale","id":"p665913"},"y_scale":{"type":"object","name":"LinearScale","id":"p665914"},"title":{"type":"object","name":"Title","id":"p665906"},"renderers":[{"type":"object","name":"TileRenderer","id":"p665938","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p665937","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p665949","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p665940","attributes":{"selected":{"type":"object","name":"Selection","id":"p665941","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665942"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.8808033158222808}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133170.0, 6459603.0], [-13133182.162162162, 6459638.675675675], [-13133185.0, 6459648.0], [-13133892.0, 6459406.0], [-13133922.0, 6459495.0], [-13133966.0, 6459480.0], [-13134071.0, 6459790.0], [-13134027.0, 6459805.0], [-13134042.0, 6459849.0], [-13133998.0, 6459864.0], [-13134012.706536239, 6459909.100044464], [-13133946.627118643, 6459931.627118644], [-13133924.0, 6459939.0], [-13133935.93220339, 6459971.06779661], [-13133939.695945946, 6459982.108108108], [-13133895.0, 6459998.0], [-13133910.68362586, 6460042.110197734], [-13133822.0, 6460073.0], [-13133807.0, 6460027.0], [-13133762.945404913, 6460042.839854413], [-13133748.0, 6459999.0], [-13133615.0, 6460044.0], [-13133615.304724948, 6460044.893859849], [-13133615.0, 6460045.0], [-13133630.0, 6460088.0], [-13133409.0, 6460163.0], [-13133409.317880794, 6460163.894039735], [-13133409.0, 6460164.0], [-13133424.0, 6460208.0], [-13133380.0, 6460223.0], [-13133377.162162162, 6460214.675675675], [-13133366.0, 6460178.0], [-13133321.0, 6460194.0], [-13133335.804054054, 6460237.425225225], [-13133292.0, 6460253.0], [-13133306.700680273, 6460297.102040816], [-13133219.0, 6460327.0], [-13133219.299319727, 6460327.897959184], [-13133219.0, 6460328.0], [-13133233.0, 6460371.0], [-13133198.6, 6460383.8], [-13133189.0, 6460387.0], [-13133200.440677967, 6460420.559322034], [-13133203.71872146, 6460431.095890411], [-13133028.0, 6460491.0], [-13133013.0, 6460447.0], [-13132880.0, 6460492.0], [-13132895.0, 6460536.0], [-13132807.0, 6460566.0], [-13132792.0, 6460522.0], [-13132791.105960265, 6460522.298013245], [-13132791.0, 6460522.0], [-13132769.5, 6460529.5], [-13132747.894039735, 6460536.701986755], [-13132732.0, 6460492.0], [-13132644.0, 6460522.0], [-13132636.5, 6460500.5], [-13132629.0, 6460478.0], [-13132541.0, 6460508.0], [-13132511.0, 6460420.0], [-13132555.0, 6460405.0], [-13132524.546766253, 6460315.162960448], [-13132525.0, 6460315.0], [-13132495.30541416, 6460227.895881536], [-13132583.0, 6460198.0], [-13132582.700680273, 6460197.102040816], [-13132583.0, 6460197.0], [-13132575.5, 6460175.5], [-13132568.299319727, 6460153.897959184], [-13132612.0, 6460139.0], [-13132611.706536239, 6460138.100044464], [-13132612.0, 6460138.0], [-13132604.5, 6460116.0], [-13132597.293794014, 6460093.9009683095], [-13132686.0, 6460064.0], [-13132674.559322033, 6460030.440677966], [-13132671.28127854, 6460019.904109589], [-13132759.0, 6459990.0], [-13132758.700680273, 6459989.102040816], [-13132759.0, 6459989.0], [-13132751.5, 6459967.5], [-13132744.298986487, 6459945.896959459], [-13132921.0, 6459885.0], [-13132936.0, 6459929.0], [-13132980.0, 6459915.0], [-13132979.700680273, 6459914.102040816], [-13132980.0, 6459914.0], [-13132965.0, 6459870.0], [-13133009.0, 6459856.0], [-13133008.71872146, 6459855.095890411], [-13133009.0, 6459855.0], [-13133005.440677967, 6459844.559322034], [-13132995.0, 6459811.0], [-13133003.6, 6459807.8], [-13133039.0, 6459796.0], [-13133024.296551725, 6459751.889655173], [-13133056.06779661, 6459740.06779661], [-13133068.0, 6459736.0], [-13133053.303308824, 6459692.889705882], [-13133097.0, 6459677.0], [-13133082.299319727, 6459632.897959184], [-13133170.0, 6459603.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p665950","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665951"}}},"glyph":{"type":"object","name":"Patches","id":"p665946","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p665947","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p665948","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p665964","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p665955","attributes":{"selected":{"type":"object","name":"Selection","id":"p665956","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665957"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"1\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.00035491891891881823}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133185.0, 6459647.0], [-13133892.0, 6459406.0], [-13133185.0, 6459648.0], [-13133182.162162162, 6459638.675675675], [-13133185.0, 6459647.0]]]}}, {\\"id\\": \\"7\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.006697341059602797}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133586.0, 6460103.0], [-13133601.0, 6460148.0], [-13133469.0, 6460193.0], [-13133454.0, 6460149.0], [-13133409.317880794, 6460163.894039735], [-13133409.0, 6460163.0], [-13133630.0, 6460088.0], [-13133586.0, 6460103.0]]]}}, {\\"id\\": \\"14\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.00012160099337762221}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13132747.0, 6460537.0], [-13132732.0, 6460493.0], [-13132644.0, 6460523.0], [-13132636.5, 6460500.5], [-13132644.0, 6460522.0], [-13132732.0, 6460492.0], [-13132747.894039735, 6460536.701986755], [-13132747.0, 6460537.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p665965","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665966"}}},"glyph":{"type":"object","name":"Patches","id":"p665961","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p665962","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p665963","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p665978","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p665969","attributes":{"selected":{"type":"object","name":"Selection","id":"p665970","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665971"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 9.726925905700773e-05}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133082.0, 6459632.0], [-13133171.0, 6459602.0], [-13133182.162162162, 6459638.675675675], [-13133170.0, 6459603.0], [-13133082.299319727, 6459632.897959184], [-13133082.0, 6459632.0]]]}}, {\\"id\\": \\"11\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.01766691007466847}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13132629.0, 6460479.0], [-13132496.0, 6460524.0], [-13132482.0, 6460479.0], [-13132437.0, 6460494.0], [-13132407.0, 6460406.0], [-13132452.0, 6460390.0], [-13132436.0, 6460347.0], [-13132524.546766253, 6460315.162960448], [-13132555.0, 6460405.0], [-13132511.0, 6460420.0], [-13132541.0, 6460508.0], [-13132629.0, 6460478.0], [-13132636.5, 6460500.5], [-13132629.0, 6460479.0]]]}}, {\\"id\\": \\"13\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.006938710354107897}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133204.0, 6460432.0], [-13132807.0, 6460567.0], [-13132791.105960265, 6460522.298013245], [-13132792.0, 6460522.0], [-13132807.0, 6460566.0], [-13132895.0, 6460536.0], [-13132880.0, 6460492.0], [-13133013.0, 6460447.0], [-13133028.0, 6460491.0], [-13133203.71872146, 6460431.095890411], [-13133204.0, 6460432.0]]]}}, {\\"id\\": \\"18\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.002252807601110544}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133718.0, 6460059.0], [-13133704.0, 6460014.0], [-13133615.304724948, 6460044.893859849], [-13133615.0, 6460044.0], [-13133748.0, 6459999.0], [-13133762.945404913, 6460042.839854413], [-13133718.0, 6460059.0]]]}}, {\\"id\\": \\"22\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.000222}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13133967.0, 6459479.0], [-13134071.0, 6459790.0], [-13133966.0, 6459480.0], [-13133922.0, 6459495.0], [-13133967.0, 6459479.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p665979","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665980"}}},"glyph":{"type":"object","name":"Patches","id":"p665975","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p665976","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p665977","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p665989","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665983","attributes":{"selected":{"type":"object","name":"Selection","id":"p665984","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665985"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/zuxve1yNE/mQQCGU0ViCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//t9PLhDeGmEIwDaNrMrCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p665990","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p665991"}}},"glyph":{"type":"object","name":"Scatter","id":"p665986","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.8},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.8},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.8},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p665987","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p665988","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"green"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"green"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p665999","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p665993","attributes":{"selected":{"type":"object","name":"Selection","id":"p665994","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p665995"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/8vWW9waw5N5EABRFjJBCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/ztanvqaeWmEIwCHhinHCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p666000","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p666001"}}},"glyph":{"type":"object","name":"Scatter","id":"p665996","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.8},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.8},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.8},"marker":{"type":"value","value":"square"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p665997","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"square"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p665998","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_color":{"type":"value","value":"darkorange"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"orange"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"orange"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"square"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p665912","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p665925"},{"type":"object","name":"WheelZoomTool","id":"p665926","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p665927","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p665928","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p665934","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p665933","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p665935"},{"type":"object","name":"SaveTool","id":"p665936"},{"type":"object","name":"HoverTool","id":"p665954","attributes":{"renderers":[{"id":"p665949"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p665968","attributes":{"renderers":[{"id":"p665964"}],"tooltips":[["Old only","Prerelease/Pr\\u00e9liminaire"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p665982","attributes":{"renderers":[{"id":"p665978"}],"tooltips":[["New only","June 2024 / juin 2024"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p665920","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p665921","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p665922","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p665923"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p665915","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p665916","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p665917","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p665918"}}}],"center":[{"type":"object","name":"Grid","id":"p665919","attributes":{"axis":{"id":"p665915"}}},{"type":"object","name":"Grid","id":"p665924","attributes":{"dimension":1,"axis":{"id":"p665920"}}},{"type":"object","name":"Legend","id":"p665952","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p665953","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p665949"}]}},{"type":"object","name":"LegendItem","id":"p665967","attributes":{"label":{"type":"value","value":"Old only (Prerelease/Pr\\u00e9liminaire)"},"renderers":[{"id":"p665964"}]}},{"type":"object","name":"LegendItem","id":"p665981","attributes":{"label":{"type":"value","value":"New only (June 2024 / juin 2024)"},"renderers":[{"id":"p665978"}]}},{"type":"object","name":"LegendItem","id":"p665992","attributes":{"label":{"type":"value","value":"Pour Point"},"renderers":[{"id":"p665989"}]}},{"type":"object","name":"LegendItem","id":"p666002","attributes":{"label":{"type":"value","value":"Station Location"},"renderers":[{"id":"p665999"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p666003","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8cdb53b6-9f68-4c38-a3cc-fc9a08c88966","roots":{"p666004":"e08232b8-d27d-4fcc-b8d8-81ed523d2179"},"root_ids":["p666004"]}];
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