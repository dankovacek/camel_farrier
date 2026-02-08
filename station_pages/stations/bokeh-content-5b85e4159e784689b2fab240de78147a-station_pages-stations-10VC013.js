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
    
    
    const element = document.getElementById("b3593f9e-e50f-4088-8508-6040f9e2ee21");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b3593f9e-e50f-4088-8508-6040f9e2ee21' but no matching script tag was found.")
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
                  const docs_json = '{"89545b2c-4776-4af8-971b-24439a9aaef4":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p584669","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p584670"}}},"roots":[{"type":"object","name":"Column","id":"p584809","attributes":{"children":[{"type":"object","name":"Figure","id":"p584671","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p584672"},"y_range":{"type":"object","name":"DataRange1d","id":"p584673"},"x_scale":{"type":"object","name":"LinearScale","id":"p584681"},"y_scale":{"type":"object","name":"LinearScale","id":"p584682"},"title":{"type":"object","name":"Title","id":"p584674","attributes":{"text":"10VC013 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p584735","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584729","attributes":{"selected":{"type":"object","name":"Selection","id":"p584730","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584731"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGDimujuxMDAYDB3MpiOM5gGpnsOzwDTu8Jmg+kXL+eCabHaBWDaRWAxmC5avBRMLzBbAabPnVwFpv/ErAXTWh/Wg+mI5k1guk1sK5jesnI7mH5kswtMC1zYA6btkveD6ZxvB8H0rM4jYPqEzHEw/W39STCt4nwGTAddOwemGzIvgul1fy6D6Tv918A0l/JNMG2x7TaYTvO8B6an3HkApg/lPwbTH5iegWm5aS/AtI/mazBdtectmF7h/wFMX3v0CUyzlH0F00acP8B0wpxf7k4Ap/ZE71ABAAA="},"shape":[42],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584736","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584737"}}},"glyph":{"type":"object","name":"VArea","id":"p584732","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p584733","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p584734","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p584746","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584740","attributes":{"selected":{"type":"object","name":"Selection","id":"p584741","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584742"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLjhF+7hxMDAwPYoEkyblMaA6SSOeDA9YXYimN6nlwKm3xxMA9NSoZlg2uNFNpguq84D00v4CsH0pYXFYJrBtAxM652oANMx0dUeTgCvLlpoeAAAAA=="},"shape":[15],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584747","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584748"}}},"glyph":{"type":"object","name":"VArea","id":"p584743","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p584744","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p584745","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p584755","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584749","attributes":{"selected":{"type":"object","name":"Selection","id":"p584750","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584751"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHCrYfdwAgCQnkU2CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584756","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584757"}}},"glyph":{"type":"object","name":"VArea","id":"p584752","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p584753","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p584754","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p584765","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584759","attributes":{"selected":{"type":"object","name":"Selection","id":"p584760","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584761"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBg8vVwYmBg8JvqD6ZrNILA9KrdIR5OAKov/OwgAAAA"},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584766","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584767"}}},"glyph":{"type":"object","name":"VArea","id":"p584762","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p584763","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p584764","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p584774","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584768","attributes":{"selected":{"type":"object","name":"Selection","id":"p584769","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584770"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGDimujuxMDAYDB3MpiOM5gGpnsOzwDTu8Jmg+kXL+eCabHaBWDaRWAxmC5avBRMLzBbAabPnVwFpv/ErAXTWh/Wg+mI5k1guk1sK5jesnI7mH5kswtMC1zYA6btkveD6ZxvB92dAGLFFW6gAAAA"},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584775","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584776"}}},"glyph":{"type":"object","name":"VArea","id":"p584771","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p584772","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p584773","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p584784","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584778","attributes":{"selected":{"type":"object","name":"Selection","id":"p584779","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584780"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYNA7UeHhxMDAEBNd7eEEAPS1WtMQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584785","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584786"}}},"glyph":{"type":"object","name":"VArea","id":"p584781","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p584782","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p584783","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p584793","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584787","attributes":{"selected":{"type":"object","name":"Selection","id":"p584788","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584789"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FeyjcAQDA8V+XPC7NI7swydySbbpd204S0g13NJScmV3b3NZF0y1mlzxKlKzkES55lLHVUdut5VF2bbldOVoeW66JtI7WMXIpkhnL9/PPRxAEkbhDpRQEQT7QyQ/lJm752sNTBX3s3hpgSd0gpwUOc8XwWx6MN/P87CifaN/xNY+FCxs/cpNknMdGJtmVNMWBi1ZOefKFyw6nufeVnR0RM3xomeUrd75xnnOe60uX+P3JD15rc7JYusIJE6usz1znrrVfbHu+wR7Rb440ufnu1T9cbd1lc66Hna599jIe8E2/I37cf8ytN/6x1XbG2xqR+vzQLS/OqPXhygAxDw3586IigE8dQRynDeGiPQk3N4TxxMUI3jRHcnDSZU5dkLJBF8P9B7E813ydjy7JOMYi53zlLW5YVvCHkgRe/5vI/m3JnBidyiXjSjap09m+quJ9QxZHibI5pzuXa2PzePRTPv/Mucfervt8+6WWdb6PuL2vmD/LnvLOtJ7DNaWsdj9jY42B31wo5++vX7CgMLLMUcXaBzVq5X+uQ83R4AIAAA=="},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGNzg3///8RPf7rEHMhvEbp6zB/L/N0w9DOIvkNK/CqIPlO17DKIdONY8gPKfg+iEHXI/QbRC6+uPYPGFru/A+gpsP4Hl+w9BxL9q/AHRD6pEBBwg+oSgNDuIbjj09QPUPEYQ/8CZM4IgesHMmdwOQOfE7yl5D7Ynpv8R1J5X9jB5kLseVnGA1fUfYkY2F+gOYRDNoBkj4QBxpyzYPpF1YD4QCEL5vFD1LFCaCW4uyN2LCyDucX/IAXUfWN0Budbf9hD+F7D7olIg4cR1HRw+B7zNH4LFDTnA4cbApH3fHuTOXZ53wPKePBD/fP77Bho+4PBT0L8LCeeijIcg9f+DH9+1//P/v/zNc9tB9P6vGuD4SuDTPQSKL/tOxwMgdfZbThyzh4TnA2h8PQGJ1x84ddH+M1BfUcZC+x9A+x8vXQ3St79k8gr7r0Bz2RqX2j8Fy0+0//X//33fpAI4/wNY3QywOfvmd9mjpx8ADvT3TOACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584794","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584795"}}},"glyph":{"type":"object","name":"Line","id":"p584790","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584791","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p584792","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p584803","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p584797","attributes":{"selected":{"type":"object","name":"Selection","id":"p584798","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p584799"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FeyjcAQDA8V+XPC7NI7swydySbbpd204S0g13NJScmV3b3NZF0y1mlzxKlKzkES55lLHVUdut5VF2bbldOVoeW66JtI7WMXIpkhnL9/PPRxAEkbhDpRQEQT7QyQ/lJm752sNTBX3s3hpgSd0gpwUOc8XwWx6MN/P87CifaN/xNY+FCxs/cpNknMdGJtmVNMWBi1ZOefKFyw6nufeVnR0RM3xomeUrd75xnnOe60uX+P3JD15rc7JYusIJE6usz1znrrVfbHu+wR7Rb440ufnu1T9cbd1lc66Hna599jIe8E2/I37cf8ytN/6x1XbG2xqR+vzQLS/OqPXhygAxDw3586IigE8dQRynDeGiPQk3N4TxxMUI3jRHcnDSZU5dkLJBF8P9B7E813ydjy7JOMYi53zlLW5YVvCHkgRe/5vI/m3JnBidyiXjSjap09m+quJ9QxZHibI5pzuXa2PzePRTPv/Mucfervt8+6WWdb6PuL2vmD/LnvLOtJ7DNaWsdj9jY42B31wo5++vX7CgMLLMUcXaBzVq5X+uQ83R4AIAAA=="},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGNzg3///8RPf7rEHMhvEbp6zB/L/N0w9DOIvkNK/CqIPlO17DKIdONY8gPKfg+iEHXI/QbRC6+uPYPGFru/A+gpsP4Hl+w9BxL9q/AHRD6pEBBwg+oSgNDuIbjj09QPUPEYQ/8CZM4IgesHMmdwOQOfE7yl5D7Ynpv8R1J5X9jB5kLseVnGA1fUfYkY2F+gOYRDNoBkj4QBxpyzYPpF1YD4QCEL5vFD1LFCaCW4uyN2LCyDucX/IAXUfWN0Budbf9hD+F7D7olIg4cR1HRw+B7zNH4LFDTnA4cbApH3fHuTOXZ53wPKePBD/fP77Bho+4PBT0L8LCeeijIcg9f+DH9+1//P/v/zNc9tB9P6vGuD4SuDTPQSKL/tOxwMgdfZbThyzh4TnA2h8PQGJ1x84ddH+M1BfUcZC+x9A+x8vXQ3St79k8gr7r0Bz2RqX2j8Fy0+0//X//33fpAI4/wNY3QywOfvmd9mjpx8ADvT3TOACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p584804","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p584805"}}},"glyph":{"type":"object","name":"Line","id":"p584800","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p584801","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p584802","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p584680","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p584707"},{"type":"object","name":"WheelZoomTool","id":"p584708","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p584709","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p584710","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p584716","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p584715","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p584717","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p584718","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p584719","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p584720","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p584726","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p584725","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p584727"},{"type":"object","name":"SaveTool","id":"p584728"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p584702","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p584703","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p584704"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p584705"}}}],"right":[{"type":"object","name":"Legend","id":"p584738","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p584739","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p584735"},{"id":"p584746"}]}},{"type":"object","name":"LegendItem","id":"p584758","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p584755"},{"id":"p584765"}]}},{"type":"object","name":"LegendItem","id":"p584777","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p584774"},{"id":"p584784"}]}},{"type":"object","name":"LegendItem","id":"p584796","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p584793"},{"id":"p584803"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p584683","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p584684","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p584685","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p584686","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p584687","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p584688","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p584689","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p584690","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p584691","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p584692","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p584693","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p584694","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p584695","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p584696"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p584699","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p584698","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p584697","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p584700"}}}],"center":[{"type":"object","name":"Grid","id":"p584701","attributes":{"axis":{"id":"p584683"}}},{"type":"object","name":"Grid","id":"p584706","attributes":{"dimension":1,"axis":{"id":"p584702"}}}]}},{"type":"object","name":"Div","id":"p584806","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p584808","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p584807","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"89545b2c-4776-4af8-971b-24439a9aaef4","roots":{"p584809":"b3593f9e-e50f-4088-8508-6040f9e2ee21"},"root_ids":["p584809"]}];
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