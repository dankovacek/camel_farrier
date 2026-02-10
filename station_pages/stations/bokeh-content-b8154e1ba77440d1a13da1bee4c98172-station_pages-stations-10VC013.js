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
    
    
    const element = document.getElementById("b277aca2-1a0b-4936-8f62-882b23a8ea6e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b277aca2-1a0b-4936-8f62-882b23a8ea6e' but no matching script tag was found.")
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
                  const docs_json = '{"d27e2e2a-2ed6-4241-83a0-eca4b368219d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p589473","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p589474"}}},"roots":[{"type":"object","name":"Column","id":"p589613","attributes":{"children":[{"type":"object","name":"Figure","id":"p589475","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p589476"},"y_range":{"type":"object","name":"DataRange1d","id":"p589477"},"x_scale":{"type":"object","name":"LinearScale","id":"p589485"},"y_scale":{"type":"object","name":"LinearScale","id":"p589486"},"title":{"type":"object","name":"Title","id":"p589478","attributes":{"text":"10VC013 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p589539","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589533","attributes":{"selected":{"type":"object","name":"Selection","id":"p589534","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589535"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGDimujuxMDAYDB3MpiOM5gGpnsOzwDTu8Jmg+kXL+eCabHaBWDaRWAxmC5avBRMLzBbAabPnVwFpv/ErAXTWh/Wg+mI5k1guk1sK5jesnI7mH5kswtMC1zYA6btkveD6ZxvB8H0rM4jYPqEzHEw/W39STCt4nwGTAddOwemGzIvgul1fy6D6Tv918A0l/JNMG2x7TaYTvO8B6an3HkApg/lPwbTH5iegWm5aS/AtI/mazBdtectmF7h/wFMX3v0CUyzlH0F00acP8B0wpxf7k4Ap/ZE71ABAAA="},"shape":[42],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589540","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589541"}}},"glyph":{"type":"object","name":"VArea","id":"p589536","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p589537","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p589538","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p589550","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589544","attributes":{"selected":{"type":"object","name":"Selection","id":"p589545","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589546"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLjhF+7hxMDAwPYoEkyblMaA6SSOeDA9YXYimN6nlwKm3xxMA9NSoZlg2uNFNpguq84D00v4CsH0pYXFYJrBtAxM652oANMx0dUeTgCvLlpoeAAAAA=="},"shape":[15],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589551","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589552"}}},"glyph":{"type":"object","name":"VArea","id":"p589547","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p589548","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p589549","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p589559","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589553","attributes":{"selected":{"type":"object","name":"Selection","id":"p589554","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589555"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHCrYfdwAgCQnkU2CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589560","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589561"}}},"glyph":{"type":"object","name":"VArea","id":"p589556","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p589557","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p589558","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p589569","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589563","attributes":{"selected":{"type":"object","name":"Selection","id":"p589564","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589565"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBg8vVwYmBg8JvqD6ZrNILA9KrdIR5OAKov/OwgAAAA"},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589570","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589571"}}},"glyph":{"type":"object","name":"VArea","id":"p589566","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p589567","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p589568","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p589578","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589572","attributes":{"selected":{"type":"object","name":"Selection","id":"p589573","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589574"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGDimujuxMDAYDB3MpiOM5gGpnsOzwDTu8Jmg+kXL+eCabHaBWDaRWAxmC5avBRMLzBbAabPnVwFpv/ErAXTWh/Wg+mI5k1guk1sK5jesnI7mH5kswtMC1zYA6btkveD6ZxvB92dAGLFFW6gAAAA"},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589579","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589580"}}},"glyph":{"type":"object","name":"VArea","id":"p589575","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p589576","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p589577","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p589588","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589582","attributes":{"selected":{"type":"object","name":"Selection","id":"p589583","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589584"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYNA7UeHhxMDAEBNd7eEEAPS1WtMQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589589","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589590"}}},"glyph":{"type":"object","name":"VArea","id":"p589585","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p589586","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p589587","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p589597","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589591","attributes":{"selected":{"type":"object","name":"Selection","id":"p589592","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589593"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FeyjcAQDA8V+XPC7NI7swydySbbpd204S0g13NJScmV3b3NZF0y1mlzxKlKzkES55lLHVUdut5VF2bbldOVoeW66JtI7WMXIpkhnL9/PPRxAEkbhDpRQEQT7QyQ/lJm752sNTBX3s3hpgSd0gpwUOc8XwWx6MN/P87CifaN/xNY+FCxs/cpNknMdGJtmVNMWBi1ZOefKFyw6nufeVnR0RM3xomeUrd75xnnOe60uX+P3JD15rc7JYusIJE6usz1znrrVfbHu+wR7Rb440ufnu1T9cbd1lc66Hna599jIe8E2/I37cf8ytN/6x1XbG2xqR+vzQLS/OqPXhygAxDw3586IigE8dQRynDeGiPQk3N4TxxMUI3jRHcnDSZU5dkLJBF8P9B7E813ydjy7JOMYi53zlLW5YVvCHkgRe/5vI/m3JnBidyiXjSjap09m+quJ9QxZHibI5pzuXa2PzePRTPv/Mucfervt8+6WWdb6PuL2vmD/LnvLOtJ7DNaWsdj9jY42B31wo5++vX7CgMLLMUcXaBzVq5X+uQ83R4AIAAA=="},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGNzg3///8RPf7rEHMhvEbp6zB/L/N0w9DOIvkNK/CqIPlO17DKIdONY8gPKfg+iEHXI/QbRC6+uPYPGFru/A+gpsP4Hl+w9BxL9q/AHRD6pEBBwg+oSgNDuIbjj09QPUPEYQ/8CZM4IgesHMmdwOQOfE7yl5D7Ynpv8R1J5X9jB5kLseVnGA1fUfYkY2F+gOYRDNoBkj4QBxpyzYPpF1YD4QCEL5vFD1LFCaCW4uyN2LCyDucX/IAXUfWN0Budbf9hD+F7D7olIg4cR1HRw+B7zNH4LFDTnA4cbApH3fHuTOXZ53wPKePBD/fP77Bho+4PBT0L8LCeeijIcg9f+DH9+1//P/v/zNc9tB9P6vGuD4SuDTPQSKL/tOxwMgdfZbThyzh4TnA2h8PQGJ1x84ddH+M1BfUcZC+x9A+x8vXQ3St79k8gr7r0Bz2RqX2j8Fy0+0//X//33fpAI4/wNY3QywOfvmd9mjpx8ADvT3TOACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589598","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589599"}}},"glyph":{"type":"object","name":"Line","id":"p589594","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p589595","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p589596","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p589607","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p589601","attributes":{"selected":{"type":"object","name":"Selection","id":"p589602","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p589603"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FeyjcAQDA8V+XPC7NI7swydySbbpd204S0g13NJScmV3b3NZF0y1mlzxKlKzkES55lLHVUdut5VF2bbldOVoeW66JtI7WMXIpkhnL9/PPRxAEkbhDpRQEQT7QyQ/lJm752sNTBX3s3hpgSd0gpwUOc8XwWx6MN/P87CifaN/xNY+FCxs/cpNknMdGJtmVNMWBi1ZOefKFyw6nufeVnR0RM3xomeUrd75xnnOe60uX+P3JD15rc7JYusIJE6usz1znrrVfbHu+wR7Rb440ufnu1T9cbd1lc66Hna599jIe8E2/I37cf8ytN/6x1XbG2xqR+vzQLS/OqPXhygAxDw3586IigE8dQRynDeGiPQk3N4TxxMUI3jRHcnDSZU5dkLJBF8P9B7E813ydjy7JOMYi53zlLW5YVvCHkgRe/5vI/m3JnBidyiXjSjap09m+quJ9QxZHibI5pzuXa2PzePRTPv/Mucfervt8+6WWdb6PuL2vmD/LnvLOtJ7DNaWsdj9jY42B31wo5++vX7CgMLLMUcXaBzVq5X+uQ83R4AIAAA=="},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGNzg3///8RPf7rEHMhvEbp6zB/L/N0w9DOIvkNK/CqIPlO17DKIdONY8gPKfg+iEHXI/QbRC6+uPYPGFru/A+gpsP4Hl+w9BxL9q/AHRD6pEBBwg+oSgNDuIbjj09QPUPEYQ/8CZM4IgesHMmdwOQOfE7yl5D7Ynpv8R1J5X9jB5kLseVnGA1fUfYkY2F+gOYRDNoBkj4QBxpyzYPpF1YD4QCEL5vFD1LFCaCW4uyN2LCyDucX/IAXUfWN0Budbf9hD+F7D7olIg4cR1HRw+B7zNH4LFDTnA4cbApH3fHuTOXZ53wPKePBD/fP77Bho+4PBT0L8LCeeijIcg9f+DH9+1//P/v/zNc9tB9P6vGuD4SuDTPQSKL/tOxwMgdfZbThyzh4TnA2h8PQGJ1x84ddH+M1BfUcZC+x9A+x8vXQ3St79k8gr7r0Bz2RqX2j8Fy0+0//X//33fpAI4/wNY3QywOfvmd9mjpx8ADvT3TOACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p589608","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p589609"}}},"glyph":{"type":"object","name":"Line","id":"p589604","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p589605","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p589606","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p589484","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p589511"},{"type":"object","name":"WheelZoomTool","id":"p589512","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p589513","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p589514","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p589520","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p589519","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p589521","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p589522","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p589523","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p589524","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p589530","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p589529","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p589531"},{"type":"object","name":"SaveTool","id":"p589532"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p589506","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p589507","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p589508"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p589509"}}}],"right":[{"type":"object","name":"Legend","id":"p589542","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p589543","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p589539"},{"id":"p589550"}]}},{"type":"object","name":"LegendItem","id":"p589562","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p589559"},{"id":"p589569"}]}},{"type":"object","name":"LegendItem","id":"p589581","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p589578"},{"id":"p589588"}]}},{"type":"object","name":"LegendItem","id":"p589600","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p589597"},{"id":"p589607"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p589487","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p589488","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p589489","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p589490","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p589491","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p589492","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p589493","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p589494","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p589495","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p589496","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p589497","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p589498","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p589499","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p589500"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p589503","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p589502","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p589501","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p589504"}}}],"center":[{"type":"object","name":"Grid","id":"p589505","attributes":{"axis":{"id":"p589487"}}},{"type":"object","name":"Grid","id":"p589510","attributes":{"dimension":1,"axis":{"id":"p589506"}}}]}},{"type":"object","name":"Div","id":"p589610","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p589612","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p589611","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"d27e2e2a-2ed6-4241-83a0-eca4b368219d","roots":{"p589613":"b277aca2-1a0b-4936-8f62-882b23a8ea6e"},"root_ids":["p589613"]}];
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