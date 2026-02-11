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
    
    
    const element = document.getElementById("bfa55b2c-8336-461e-a2a6-4fae13cb057b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bfa55b2c-8336-461e-a2a6-4fae13cb057b' but no matching script tag was found.")
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
                  const docs_json = '{"68ee4e12-4fb5-449e-835a-7004e1b50d13":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p592036","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p592037"}}},"roots":[{"type":"object","name":"Column","id":"p592175","attributes":{"children":[{"type":"object","name":"Figure","id":"p592038","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p592039"},"y_range":{"type":"object","name":"DataRange1d","id":"p592040"},"x_scale":{"type":"object","name":"LinearScale","id":"p592048"},"y_scale":{"type":"object","name":"LinearScale","id":"p592049"},"title":{"type":"object","name":"Title","id":"p592041","attributes":{"text":"10VC013 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p592102","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592096","attributes":{"selected":{"type":"object","name":"Selection","id":"p592097","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592098"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGDimujuxMDAYDB3MpiOM5gGpnsOzwDTu8Jmg+kXL+eCabHaBWDaRWAxmC5avBRMLzBbAabPnVwFpv/ErAXTWh/Wg+mI5k1guk1sK5jesnI7mH5kswtMC1zYA6btkveD6ZxvB8H0rM4jYPqEzHEw/W39STCt4nwGTAddOwemGzIvgul1fy6D6Tv918A0l/JNMG2x7TaYTvO8B6an3HkApg/lPwbTH5iegWm5aS/AtI/mazBdtectmF7h/wFMX3v0CUyzlH0F00acP8B0wpxf7k4Ap/ZE71ABAAA="},"shape":[42],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592103","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592104"}}},"glyph":{"type":"object","name":"VArea","id":"p592099","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p592100","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p592101","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p592113","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592107","attributes":{"selected":{"type":"object","name":"Selection","id":"p592108","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592109"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLjhF+7hxMDAwPYoEkyblMaA6SSOeDA9YXYimN6nlwKm3xxMA9NSoZlg2uNFNpguq84D00v4CsH0pYXFYJrBtAxM652oANMx0dUeTgCvLlpoeAAAAA=="},"shape":[15],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592114","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592115"}}},"glyph":{"type":"object","name":"VArea","id":"p592110","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p592111","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p592112","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p592122","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592116","attributes":{"selected":{"type":"object","name":"Selection","id":"p592117","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592118"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHCrYfdwAgCQnkU2CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592123","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592124"}}},"glyph":{"type":"object","name":"VArea","id":"p592119","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p592120","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p592121","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p592132","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592126","attributes":{"selected":{"type":"object","name":"Selection","id":"p592127","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592128"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFBg8vVwYmBg8JvqD6ZrNILA9KrdIR5OAKov/OwgAAAA"},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592133","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592134"}}},"glyph":{"type":"object","name":"VArea","id":"p592129","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p592130","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p592131","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p592141","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592135","attributes":{"selected":{"type":"object","name":"Selection","id":"p592136","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592137"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGDimujuxMDAYDB3MpiOM5gGpnsOzwDTu8Jmg+kXL+eCabHaBWDaRWAxmC5avBRMLzBbAabPnVwFpv/ErAXTWh/Wg+mI5k1guk1sK5jesnI7mH5kswtMC1zYA6btkveD6ZxvB92dAGLFFW6gAAAA"},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592142","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592143"}}},"glyph":{"type":"object","name":"VArea","id":"p592138","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p592139","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p592140","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p592151","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592145","attributes":{"selected":{"type":"object","name":"Selection","id":"p592146","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592147"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYNA7UeHhxMDAEBNd7eEEAPS1WtMQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592152","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592153"}}},"glyph":{"type":"object","name":"VArea","id":"p592148","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p592149","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p592150","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":7.629600019454956},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p592160","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592154","attributes":{"selected":{"type":"object","name":"Selection","id":"p592155","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592156"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FeyjcAQDA8V+XPC7NI7swydySbbpd204S0g13NJScmV3b3NZF0y1mlzxKlKzkES55lLHVUdut5VF2bbldOVoeW66JtI7WMXIpkhnL9/PPRxAEkbhDpRQEQT7QyQ/lJm752sNTBX3s3hpgSd0gpwUOc8XwWx6MN/P87CifaN/xNY+FCxs/cpNknMdGJtmVNMWBi1ZOefKFyw6nufeVnR0RM3xomeUrd75xnnOe60uX+P3JD15rc7JYusIJE6usz1znrrVfbHu+wR7Rb440ufnu1T9cbd1lc66Hna599jIe8E2/I37cf8ytN/6x1XbG2xqR+vzQLS/OqPXhygAxDw3586IigE8dQRynDeGiPQk3N4TxxMUI3jRHcnDSZU5dkLJBF8P9B7E813ydjy7JOMYi53zlLW5YVvCHkgRe/5vI/m3JnBidyiXjSjap09m+quJ9QxZHibI5pzuXa2PzePRTPv/Mucfervt8+6WWdb6PuL2vmD/LnvLOtJ7DNaWsdj9jY42B31wo5++vX7CgMLLMUcXaBzVq5X+uQ83R4AIAAA=="},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGNzg3///8RPf7rEHMhvEbp6zB/L/N0w9DOIvkNK/CqIPlO17DKIdONY8gPKfg+iEHXI/QbRC6+uPYPGFru/A+gpsP4Hl+w9BxL9q/AHRD6pEBBwg+oSgNDuIbjj09QPUPEYQ/8CZM4IgesHMmdwOQOfE7yl5D7Ynpv8R1J5X9jB5kLseVnGA1fUfYkY2F+gOYRDNoBkj4QBxpyzYPpF1YD4QCEL5vFD1LFCaCW4uyN2LCyDucX/IAXUfWN0Budbf9hD+F7D7olIg4cR1HRw+B7zNH4LFDTnA4cbApH3fHuTOXZ53wPKePBD/fP77Bho+4PBT0L8LCeeijIcg9f+DH9+1//P/v/zNc9tB9P6vGuD4SuDTPQSKL/tOxwMgdfZbThyzh4TnA2h8PQGJ1x84ddH+M1BfUcZC+x9A+x8vXQ3St79k8gr7r0Bz2RqX2j8Fy0+0//X//33fpAI4/wNY3QywOfvmd9mjpx8ADvT3TOACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592161","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592162"}}},"glyph":{"type":"object","name":"Line","id":"p592157","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p592158","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p592159","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p592170","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p592164","attributes":{"selected":{"type":"object","name":"Selection","id":"p592165","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p592166"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FeyjcAQDA8V+XPC7NI7swydySbbpd204S0g13NJScmV3b3NZF0y1mlzxKlKzkES55lLHVUdut5VF2bbldOVoeW66JtI7WMXIpkhnL9/PPRxAEkbhDpRQEQT7QyQ/lJm752sNTBX3s3hpgSd0gpwUOc8XwWx6MN/P87CifaN/xNY+FCxs/cpNknMdGJtmVNMWBi1ZOefKFyw6nufeVnR0RM3xomeUrd75xnnOe60uX+P3JD15rc7JYusIJE6usz1znrrVfbHu+wR7Rb440ufnu1T9cbd1lc66Hna599jIe8E2/I37cf8ytN/6x1XbG2xqR+vzQLS/OqPXhygAxDw3586IigE8dQRynDeGiPQk3N4TxxMUI3jRHcnDSZU5dkLJBF8P9B7E813ydjy7JOMYi53zlLW5YVvCHkgRe/5vI/m3JnBidyiXjSjap09m+quJ9QxZHibI5pzuXa2PzePRTPv/Mucfervt8+6WWdb6PuL2vmD/LnvLOtJ7DNaWsdj9jY42B31wo5++vX7CgMLLMUcXaBzVq5X+uQ83R4AIAAA=="},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGNzg3///8RPf7rEHMhvEbp6zB/L/N0w9DOIvkNK/CqIPlO17DKIdONY8gPKfg+iEHXI/QbRC6+uPYPGFru/A+gpsP4Hl+w9BxL9q/AHRD6pEBBwg+oSgNDuIbjj09QPUPEYQ/8CZM4IgesHMmdwOQOfE7yl5D7Ynpv8R1J5X9jB5kLseVnGA1fUfYkY2F+gOYRDNoBkj4QBxpyzYPpF1YD4QCEL5vFD1LFCaCW4uyN2LCyDucX/IAXUfWN0Budbf9hD+F7D7olIg4cR1HRw+B7zNH4LFDTnA4cbApH3fHuTOXZ53wPKePBD/fP77Bho+4PBT0L8LCeeijIcg9f+DH9+1//P/v/zNc9tB9P6vGuD4SuDTPQSKL/tOxwMgdfZbThyzh4TnA2h8PQGJ1x84ddH+M1BfUcZC+x9A+x8vXQ3St79k8gr7r0Bz2RqX2j8Fy0+0//X//33fpAI4/wNY3QywOfvmd9mjpx8ADvT3TOACAAA="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p592171","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p592172"}}},"glyph":{"type":"object","name":"Line","id":"p592167","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p592168","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p592169","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p592047","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p592074"},{"type":"object","name":"WheelZoomTool","id":"p592075","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p592076","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p592077","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p592083","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p592082","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p592084","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p592085","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p592086","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p592087","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p592093","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p592092","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p592094"},{"type":"object","name":"SaveTool","id":"p592095"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p592069","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p592070","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p592071"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p592072"}}}],"right":[{"type":"object","name":"Legend","id":"p592105","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p592106","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p592102"},{"id":"p592113"}]}},{"type":"object","name":"LegendItem","id":"p592125","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p592122"},{"id":"p592132"}]}},{"type":"object","name":"LegendItem","id":"p592144","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p592141"},{"id":"p592151"}]}},{"type":"object","name":"LegendItem","id":"p592163","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p592160"},{"id":"p592170"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p592050","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p592051","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p592052","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p592053","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p592054","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p592055","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p592056","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p592057","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p592058","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p592059","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p592060","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p592061","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p592062","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p592063"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p592066","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p592065","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p592064","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p592067"}}}],"center":[{"type":"object","name":"Grid","id":"p592068","attributes":{"axis":{"id":"p592050"}}},{"type":"object","name":"Grid","id":"p592073","attributes":{"dimension":1,"axis":{"id":"p592069"}}}]}},{"type":"object","name":"Div","id":"p592173","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"68ee4e12-4fb5-449e-835a-7004e1b50d13","roots":{"p592175":"bfa55b2c-8336-461e-a2a6-4fae13cb057b"},"root_ids":["p592175"]}];
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