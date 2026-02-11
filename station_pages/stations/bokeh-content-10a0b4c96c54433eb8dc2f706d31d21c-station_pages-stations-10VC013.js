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
    
    
    const element = document.getElementById("b9fcd854-d9e1-4669-81e5-617b8714b007");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b9fcd854-d9e1-4669-81e5-617b8714b007' but no matching script tag was found.")
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
                  const docs_json = '{"c7d729fa-83cf-456e-a12e-2d2a92998b6b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p598207","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p598208"}}},"roots":[{"type":"object","name":"Column","id":"p598346","attributes":{"children":[{"type":"object","name":"Figure","id":"p598209","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p598210"},"y_range":{"type":"object","name":"DataRange1d","id":"p598211"},"x_scale":{"type":"object","name":"LinearScale","id":"p598219"},"y_scale":{"type":"object","name":"LinearScale","id":"p598220"},"title":{"type":"object","name":"Title","id":"p598212","attributes":{"text":"10VC013 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p598273","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598267","attributes":{"selected":{"type":"object","name":"Selection","id":"p598268","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598269"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGDimujuxMDAYDB3MpiOM5gGpnsOzwDTu8Jmg+kXL+eCabHaBWDaRWAxmC5avBRMLzBbAabPnVwFpv/ErAXTWh/Wg+mI5k1guk1sK5jesnI7mH5kswtMC1zYA6btkveD6ZxvB8H0rM4jYPqEzHEw/W39STCt4nwGTAddOwemGzIvgul1fy6D6Tv918A0l/JNMG2x7TaYTvO8B6an3HkApg/lPwbTH5iegWm5aS/AtI/mazBdtectmF7h/wFMX3v0CUyzlH0F00acP8B0wpxf7k4Ap/ZE71ABAAA="},"shape":[42],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598274","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598275"}}},"glyph":{"type":"object","name":"VArea","id":"p598270","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p598271","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p598272","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p598284","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598278","attributes":{"selected":{"type":"object","name":"Selection","id":"p598279","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598280"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLjhF+7hxMDAwPYoEkyblMaA6SSOeDA9YXYimN6nlwKm3xxMA9NSoZlg2uNFNpguq84D00v4CsH0pYXFYJrBtAxM652oANMx0dUeTgCvLlpoeAAAAA=="},"shape":[15],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598285","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598286"}}},"glyph":{"type":"object","name":"VArea","id":"p598281","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p598282","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p598283","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p598293","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598287","attributes":{"selected":{"type":"object","name":"Selection","id":"p598288","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598289"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHCrYfdwAgCQnkU2CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598294","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598295"}}},"glyph":{"type":"object","name":"VArea","id":"p598290","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p598291","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p598292","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p598303","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598297","attributes":{"selected":{"type":"object","name":"Selection","id":"p598298","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598299"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBg8vVwYmBg8JvqD6ZrNILA9KrdIR5OAKov/OwgAAAA"},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598304","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598305"}}},"glyph":{"type":"object","name":"VArea","id":"p598300","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p598301","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p598302","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p598312","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598306","attributes":{"selected":{"type":"object","name":"Selection","id":"p598307","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598308"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGDimujuxMDAYDB3MpiOM5gGpnsOzwDTu8Jmg+kXL+eCabHaBWDaRWAxmC5avBRMLzBbAabPnVwFpv/ErAXTWh/Wg+mI5k1guk1sK5jesnI7mH5kswtMC1zYA6btkveD6ZxvB92dAGLFFW6gAAAA"},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598313","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598314"}}},"glyph":{"type":"object","name":"VArea","id":"p598309","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p598310","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p598311","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p598322","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598316","attributes":{"selected":{"type":"object","name":"Selection","id":"p598317","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598318"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYNA7UeHhxMDAEBNd7eEEAPS1WtMQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598323","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598324"}}},"glyph":{"type":"object","name":"VArea","id":"p598319","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p598320","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p598321","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p598331","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598325","attributes":{"selected":{"type":"object","name":"Selection","id":"p598326","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598327"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FeyjcAQDA8V+XPC7NI7swydySbbpd204S0g13NJScmV3b3NZF0y1mlzxKlKzkES55lLHVUdut5VF2bbldOVoeW66JtI7WMXIpkhnL9/PPRxAEkbhDpRQEQT7QyQ/lJm752sNTBX3s3hpgSd0gpwUOc8XwWx6MN/P87CifaN/xNY+FCxs/cpNknMdGJtmVNMWBi1ZOefKFyw6nufeVnR0RM3xomeUrd75xnnOe60uX+P3JD15rc7JYusIJE6usz1znrrVfbHu+wR7Rb440ufnu1T9cbd1lc66Hna599jIe8E2/I37cf8ytN/6x1XbG2xqR+vzQLS/OqPXhygAxDw3586IigE8dQRynDeGiPQk3N4TxxMUI3jRHcnDSZU5dkLJBF8P9B7E813ydjy7JOMYi53zlLW5YVvCHkgRe/5vI/m3JnBidyiXjSjap09m+quJ9QxZHibI5pzuXa2PzePRTPv/Mucfervt8+6WWdb6PuL2vmD/LnvLOtJ7DNaWsdj9jY42B31wo5++vX7CgMLLMUcXaBzVq5X+uQ83R4AIAAA=="},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGNzg3///8RPf7rEHMhvEbp6zB/L/N0w9DOIvkNK/CqIPlO17DKIdONY8gPKfg+iEHXI/QbRC6+uPYPGFru/A+gpsP4Hl+w9BxL9q/AHRD6pEBBwg+oSgNDuIbjj09QPUPEYQ/8CZM4IgesHMmdwOQOfE7yl5D7Ynpv8R1J5X9jB5kLseVnGA1fUfYkY2F+gOYRDNoBkj4QBxpyzYPpF1YD4QCEL5vFD1LFCaCW4uyN2LCyDucX/IAXUfWN0Budbf9hD+F7D7olIg4cR1HRw+B7zNH4LFDTnA4cbApH3fHuTOXZ53wPKePBD/fP77Bho+4PBT0L8LCeeijIcg9f+DH9+1//P/v/zNc9tB9P6vGuD4SuDTPQSKL/tOxwMgdfZbThyzh4TnA2h8PQGJ1x84ddH+M1BfUcZC+x9A+x8vXQ3St79k8gr7r0Bz2RqX2j8Fy0+0//X//33fpAI4/wNY3QywOfvmd9mjpx8ADvT3TOACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598332","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598333"}}},"glyph":{"type":"object","name":"Line","id":"p598328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p598329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p598330","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p598341","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p598335","attributes":{"selected":{"type":"object","name":"Selection","id":"p598336","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p598337"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FeyjcAQDA8V+XPC7NI7swydySbbpd204S0g13NJScmV3b3NZF0y1mlzxKlKzkES55lLHVUdut5VF2bbldOVoeW66JtI7WMXIpkhnL9/PPRxAEkbhDpRQEQT7QyQ/lJm752sNTBX3s3hpgSd0gpwUOc8XwWx6MN/P87CifaN/xNY+FCxs/cpNknMdGJtmVNMWBi1ZOefKFyw6nufeVnR0RM3xomeUrd75xnnOe60uX+P3JD15rc7JYusIJE6usz1znrrVfbHu+wR7Rb440ufnu1T9cbd1lc66Hna599jIe8E2/I37cf8ytN/6x1XbG2xqR+vzQLS/OqPXhygAxDw3586IigE8dQRynDeGiPQk3N4TxxMUI3jRHcnDSZU5dkLJBF8P9B7E813ydjy7JOMYi53zlLW5YVvCHkgRe/5vI/m3JnBidyiXjSjap09m+quJ9QxZHibI5pzuXa2PzePRTPv/Mucfervt8+6WWdb6PuL2vmD/LnvLOtJ7DNaWsdj9jY42B31wo5++vX7CgMLLMUcXaBzVq5X+uQ83R4AIAAA=="},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGNzg3///8RPf7rEHMhvEbp6zB/L/N0w9DOIvkNK/CqIPlO17DKIdONY8gPKfg+iEHXI/QbRC6+uPYPGFru/A+gpsP4Hl+w9BxL9q/AHRD6pEBBwg+oSgNDuIbjj09QPUPEYQ/8CZM4IgesHMmdwOQOfE7yl5D7Ynpv8R1J5X9jB5kLseVnGA1fUfYkY2F+gOYRDNoBkj4QBxpyzYPpF1YD4QCEL5vFD1LFCaCW4uyN2LCyDucX/IAXUfWN0Budbf9hD+F7D7olIg4cR1HRw+B7zNH4LFDTnA4cbApH3fHuTOXZ53wPKePBD/fP77Bho+4PBT0L8LCeeijIcg9f+DH9+1//P/v/zNc9tB9P6vGuD4SuDTPQSKL/tOxwMgdfZbThyzh4TnA2h8PQGJ1x84ddH+M1BfUcZC+x9A+x8vXQ3St79k8gr7r0Bz2RqX2j8Fy0+0//X//33fpAI4/wNY3QywOfvmd9mjpx8ADvT3TOACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p598342","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p598343"}}},"glyph":{"type":"object","name":"Line","id":"p598338","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p598339","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p598340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p598218","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p598245"},{"type":"object","name":"WheelZoomTool","id":"p598246","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p598247","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p598248","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p598254","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p598253","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p598255","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p598256","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p598257","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p598258","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p598264","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p598263","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p598265"},{"type":"object","name":"SaveTool","id":"p598266"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p598240","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p598241","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p598242"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p598243"}}}],"right":[{"type":"object","name":"Legend","id":"p598276","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p598277","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p598273"},{"id":"p598284"}]}},{"type":"object","name":"LegendItem","id":"p598296","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p598293"},{"id":"p598303"}]}},{"type":"object","name":"LegendItem","id":"p598315","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p598312"},{"id":"p598322"}]}},{"type":"object","name":"LegendItem","id":"p598334","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p598331"},{"id":"p598341"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p598221","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p598222","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p598223","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p598224","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p598225","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p598226","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p598227","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p598228","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p598229","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p598230","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p598231","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p598232","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p598233","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p598234"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p598237","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p598236","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p598235","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p598238"}}}],"center":[{"type":"object","name":"Grid","id":"p598239","attributes":{"axis":{"id":"p598221"}}},{"type":"object","name":"Grid","id":"p598244","attributes":{"dimension":1,"axis":{"id":"p598240"}}}]}},{"type":"object","name":"Div","id":"p598344","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"c7d729fa-83cf-456e-a12e-2d2a92998b6b","roots":{"p598346":"b9fcd854-d9e1-4669-81e5-617b8714b007"},"root_ids":["p598346"]}];
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