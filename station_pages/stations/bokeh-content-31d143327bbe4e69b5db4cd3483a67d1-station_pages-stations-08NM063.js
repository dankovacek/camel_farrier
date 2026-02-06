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
    
    
    const element = document.getElementById("e6ede6f4-2455-4996-86c3-058711e461c9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e6ede6f4-2455-4996-86c3-058711e461c9' but no matching script tag was found.")
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
                  const docs_json = '{"deeccb64-86ef-44df-954c-eb45eb578c7d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p495881","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p495882"}}},"roots":[{"type":"object","name":"Column","id":"p495964","attributes":{"children":[{"type":"object","name":"Figure","id":"p495883","attributes":{"width":900,"x_range":{"type":"object","name":"DataRange1d","id":"p495884","attributes":{"start":-13309667.75,"end":-13307555.25}},"y_range":{"type":"object","name":"DataRange1d","id":"p495885","attributes":{"start":6360547.35,"end":6361549.65}},"x_scale":{"type":"object","name":"LinearScale","id":"p495893"},"y_scale":{"type":"object","name":"LinearScale","id":"p495894"},"title":{"type":"object","name":"Title","id":"p495886"},"renderers":[{"type":"object","name":"TileRenderer","id":"p495918","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p495917","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p495929","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p495920","attributes":{"selected":{"type":"object","name":"Selection","id":"p495921","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495922"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.5558676572288226}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13308221.418604651, 6360691.0], [-13308227.0, 6360707.0], [-13308270.119180633, 6360691.320297952], [-13308286.0, 6360734.0], [-13308329.109512761, 6360718.301160092], [-13308345.0, 6360762.0], [-13308431.0, 6360730.0], [-13308447.0, 6360773.0], [-13308490.0, 6360757.0], [-13308506.0, 6360801.0], [-13308549.0, 6360785.0], [-13308565.0, 6360828.0], [-13308652.0, 6360797.0], [-13308668.0, 6360840.0], [-13308711.0, 6360824.0], [-13308727.0, 6360868.0], [-13308770.0, 6360852.0], [-13308786.0, 6360895.0], [-13308829.0, 6360879.0], [-13308845.0, 6360923.0], [-13308888.0, 6360907.0], [-13308904.0, 6360950.0], [-13308947.0, 6360934.0], [-13308963.0, 6360978.0], [-13309006.0, 6360962.0], [-13309022.0, 6361006.0], [-13309108.0, 6360974.0], [-13309124.0, 6361017.0], [-13309168.0, 6361001.0], [-13309183.0, 6361045.0], [-13309227.0, 6361029.0], [-13309242.0, 6361072.0], [-13309286.0, 6361056.0], [-13309302.0, 6361100.0], [-13309345.0, 6361084.0], [-13309361.0, 6361127.0], [-13309404.0, 6361112.0], [-13309420.0, 6361155.0], [-13309376.0, 6361171.0], [-13309392.0, 6361214.0], [-13309349.0, 6361230.0], [-13309365.0, 6361274.0], [-13309235.0, 6361322.0], [-13309219.0, 6361278.0], [-13309003.0, 6361358.0], [-13308987.0, 6361314.0], [-13308901.0, 6361346.0], [-13308885.0, 6361302.0], [-13308842.0, 6361318.0], [-13308826.0, 6361275.0], [-13308782.0, 6361291.0], [-13308767.0, 6361247.0], [-13308680.0, 6361279.0], [-13308664.0, 6361236.0], [-13308578.0, 6361267.0], [-13308546.0, 6361180.0], [-13308416.0, 6361228.0], [-13308401.0, 6361185.0], [-13308357.0, 6361201.0], [-13308342.0, 6361157.0], [-13308298.0, 6361173.0], [-13308282.0, 6361130.0], [-13308196.0, 6361161.0], [-13308180.0, 6361118.0], [-13308137.0, 6361134.0], [-13308121.0, 6361090.0], [-13308078.0, 6361106.0], [-13308062.0, 6361063.0], [-13308019.0, 6361079.0], [-13308003.0, 6361035.0], [-13307916.0, 6361067.0], [-13307901.0, 6361023.0], [-13307857.0, 6361039.0], [-13307841.715836678, 6360996.10573519], [-13307842.0, 6360996.0], [-13307827.0, 6360954.0], [-13307870.0, 6360936.0], [-13307857.61016949, 6360905.389830508], [-13307853.327746741, 6360893.880819367], [-13307897.0, 6360878.0], [-13307881.0, 6360834.0], [-13307925.0, 6360818.0], [-13307909.0, 6360775.0], [-13308211.447416414, 6360664.202431611], [-13308221.418604651, 6360691.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p495930","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495931"}}},"glyph":{"type":"object","name":"Patches","id":"p495926","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.7}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p495927","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p495928","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkgreen"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightgreen"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p495944","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p495935","attributes":{"selected":{"type":"object","name":"Selection","id":"p495936","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495937"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"0\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.0004571224923888221}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13308211.0, 6360663.0], [-13308211.447416414, 6360664.202431611], [-13307909.0, 6360775.0], [-13307925.0, 6360818.0], [-13307881.0, 6360834.0], [-13307924.0, 6360818.0], [-13307908.0, 6360774.0], [-13308211.0, 6360663.0]]]}}, {\\"id\\": \\"3\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 8.840255935816094e-05}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13307826.0, 6360952.0], [-13307869.0, 6360936.0], [-13307857.61016949, 6360905.389830508], [-13307870.0, 6360936.0], [-13307827.0, 6360954.0], [-13307842.0, 6360996.0], [-13307841.715836678, 6360996.10573519], [-13307826.0, 6360952.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p495945","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495946"}}},"glyph":{"type":"object","name":"Patches","id":"p495941","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p495942","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p495943","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"darkred"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p495958","attributes":{"data_source":{"type":"object","name":"GeoJSONDataSource","id":"p495949","attributes":{"selected":{"type":"object","name":"Selection","id":"p495950","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p495951"},"geojson":"{\\"type\\": \\"FeatureCollection\\", \\"features\\": [{\\"id\\": \\"1\\", \\"type\\": \\"Feature\\", \\"properties\\": {\\"area_km2\\": 0.20960894851872605}, \\"geometry\\": {\\"type\\": \\"Polygon\\", \\"coordinates\\": [[[-13308459.0, 6360671.0], [-13308476.0, 6360714.0], [-13308518.0, 6360698.0], [-13308535.0, 6360741.0], [-13308620.0, 6360710.0], [-13308637.0, 6360753.0], [-13308679.0, 6360738.0], [-13308696.0, 6360780.0], [-13308739.0, 6360765.0], [-13308755.0, 6360808.0], [-13308798.0, 6360792.0], [-13308814.0, 6360837.0], [-13308857.0, 6360820.0], [-13308873.0, 6360864.0], [-13308916.0, 6360847.0], [-13308932.0, 6360892.0], [-13308975.0, 6360875.0], [-13308991.0, 6360919.0], [-13309034.0, 6360904.0], [-13309050.0, 6360947.0], [-13309137.0, 6360914.0], [-13309152.0, 6360959.0], [-13309196.0, 6360942.0], [-13309211.0, 6360986.0], [-13309255.0, 6360971.0], [-13309270.0, 6361014.0], [-13309314.0, 6360998.0], [-13309329.0, 6361041.0], [-13309373.0, 6361026.0], [-13309421.0, 6361156.0], [-13309377.0, 6361171.0], [-13309424.0, 6361302.0], [-13309338.0, 6361334.0], [-13309354.0, 6361377.0], [-13309267.0, 6361410.0], [-13309251.0, 6361365.0], [-13309121.0, 6361413.0], [-13309106.0, 6361370.0], [-13308933.0, 6361434.0], [-13308917.0, 6361389.0], [-13308874.0, 6361406.0], [-13308858.0, 6361362.0], [-13308815.0, 6361379.0], [-13308798.0, 6361334.0], [-13308756.0, 6361351.0], [-13308739.0, 6361307.0], [-13308697.0, 6361322.0], [-13308713.0, 6361367.0], [-13308669.0, 6361382.0], [-13308654.0, 6361339.0], [-13308567.0, 6361370.0], [-13308551.0, 6361327.0], [-13308508.0, 6361343.0], [-13308492.0, 6361300.0], [-13308449.0, 6361315.0], [-13308433.0, 6361272.0], [-13308390.0, 6361288.0], [-13308374.0, 6361245.0], [-13308331.0, 6361260.0], [-13308315.0, 6361218.0], [-13308228.0, 6361248.0], [-13308213.0, 6361206.0], [-13308169.0, 6361221.0], [-13308154.0, 6361178.0], [-13308110.0, 6361194.0], [-13308094.0, 6361151.0], [-13308008.0, 6361182.0], [-13307992.0, 6361139.0], [-13307949.0, 6361154.0], [-13307932.0, 6361111.0], [-13307890.0, 6361127.0], [-13307873.0, 6361084.0], [-13307831.0, 6361099.0], [-13307799.0, 6361012.0], [-13307841.715836678, 6360996.10573519], [-13307857.0, 6361039.0], [-13307901.0, 6361023.0], [-13307916.0, 6361067.0], [-13308003.0, 6361035.0], [-13308019.0, 6361079.0], [-13308062.0, 6361063.0], [-13308078.0, 6361106.0], [-13308121.0, 6361090.0], [-13308137.0, 6361134.0], [-13308180.0, 6361118.0], [-13308196.0, 6361161.0], [-13308282.0, 6361130.0], [-13308298.0, 6361173.0], [-13308342.0, 6361157.0], [-13308357.0, 6361201.0], [-13308401.0, 6361185.0], [-13308416.0, 6361228.0], [-13308546.0, 6361180.0], [-13308578.0, 6361267.0], [-13308664.0, 6361236.0], [-13308680.0, 6361279.0], [-13308767.0, 6361247.0], [-13308782.0, 6361291.0], [-13308826.0, 6361275.0], [-13308842.0, 6361318.0], [-13308885.0, 6361302.0], [-13308901.0, 6361346.0], [-13308987.0, 6361314.0], [-13309003.0, 6361358.0], [-13309219.0, 6361278.0], [-13309235.0, 6361322.0], [-13309365.0, 6361274.0], [-13309349.0, 6361230.0], [-13309392.0, 6361214.0], [-13309376.0, 6361171.0], [-13309420.0, 6361155.0], [-13309404.0, 6361112.0], [-13309361.0, 6361127.0], [-13309345.0, 6361084.0], [-13309302.0, 6361100.0], [-13309286.0, 6361056.0], [-13309242.0, 6361072.0], [-13309227.0, 6361029.0], [-13309183.0, 6361045.0], [-13309168.0, 6361001.0], [-13309124.0, 6361017.0], [-13309108.0, 6360974.0], [-13309022.0, 6361006.0], [-13309006.0, 6360962.0], [-13308963.0, 6360978.0], [-13308947.0, 6360934.0], [-13308904.0, 6360950.0], [-13308888.0, 6360907.0], [-13308845.0, 6360923.0], [-13308829.0, 6360879.0], [-13308786.0, 6360895.0], [-13308770.0, 6360852.0], [-13308727.0, 6360868.0], [-13308711.0, 6360824.0], [-13308668.0, 6360840.0], [-13308652.0, 6360797.0], [-13308565.0, 6360828.0], [-13308549.0, 6360785.0], [-13308506.0, 6360801.0], [-13308490.0, 6360757.0], [-13308447.0, 6360773.0], [-13308431.0, 6360730.0], [-13308345.0, 6360762.0], [-13308329.109512761, 6360718.301160092], [-13308459.0, 6360671.0]]]}}], \\"crs\\": {\\"type\\": \\"name\\", \\"properties\\": {\\"name\\": \\"urn:ogc:def:crs:EPSG::3857\\"}}}"}},"view":{"type":"object","name":"CDSView","id":"p495959","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p495960"}}},"glyph":{"type":"object","name":"Patches","id":"p495955","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.6}}},"nonselection_glyph":{"type":"object","name":"Patches","id":"p495956","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Patches","id":"p495957","attributes":{"xs":{"type":"field","field":"xs"},"ys":{"type":"field","field":"ys"},"line_color":{"type":"value","value":"indigo"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2},"fill_color":{"type":"value","value":"purple"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p495892","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p495905"},{"type":"object","name":"WheelZoomTool","id":"p495906","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p495907","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p495908","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p495914","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p495913","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p495915"},{"type":"object","name":"SaveTool","id":"p495916"},{"type":"object","name":"HoverTool","id":"p495934","attributes":{"renderers":[{"id":"p495929"}],"tooltips":[["Agreement",""],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p495948","attributes":{"renderers":[{"id":"p495944"}],"tooltips":[["Old only","Prerelease/Pr\\u00e9liminaire"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}},{"type":"object","name":"HoverTool","id":"p495962","attributes":{"renderers":[{"id":"p495958"}],"tooltips":[["New only","June 2024 / juin 2024"],["Area","@area_km2{0.000} km\\u00b2"]],"sort_by":null}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p495900","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p495901","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p495902","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p495903"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p495895","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p495896","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p495897","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p495898"}}}],"center":[{"type":"object","name":"Grid","id":"p495899","attributes":{"axis":{"id":"p495895"}}},{"type":"object","name":"Grid","id":"p495904","attributes":{"dimension":1,"axis":{"id":"p495900"}}},{"type":"object","name":"Legend","id":"p495932","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p495933","attributes":{"label":{"type":"value","value":"Agreement"},"renderers":[{"id":"p495929"}]}},{"type":"object","name":"LegendItem","id":"p495947","attributes":{"label":{"type":"value","value":"Old only (Prerelease/Pr\\u00e9liminaire)"},"renderers":[{"id":"p495944"}]}},{"type":"object","name":"LegendItem","id":"p495961","attributes":{"label":{"type":"value","value":"New only (June 2024 / juin 2024)"},"renderers":[{"id":"p495958"}]}}]}}],"match_aspect":true}},{"type":"object","name":"Div","id":"p495963","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 13px;\\"&gt;\\n        &lt;strong&gt;Geometric Precision Notes:&lt;/strong&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px; line-height: 1.6;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;Coordinate Precision&lt;/strong&gt;: Coordinates rounded to 1m after reprojection to EPSG:3857 (Web Mercator) to reduce floating point errors in geometric operations&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Small Geometry Filter&lt;/strong&gt;: Sub-polygons smaller than min(1000 m\\u00b2, 0.01% of new polygon area) are filtered as vestigial artifacts&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Area Calculations&lt;/strong&gt;: Displayed areas are computed in EPSG:3857 and may differ slightly (~0.01-0.1%) from LAEA-based values in _versions.json due to projection distortion&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"deeccb64-86ef-44df-954c-eb45eb578c7d","roots":{"p495964":"e6ede6f4-2455-4996-86c3-058711e461c9"},"root_ids":["p495964"]}];
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