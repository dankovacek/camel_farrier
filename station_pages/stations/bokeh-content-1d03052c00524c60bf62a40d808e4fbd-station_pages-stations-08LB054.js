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
    
    
    const element = document.getElementById("fa4d8a47-f86e-468c-9791-9648a0446f06");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fa4d8a47-f86e-468c-9791-9648a0446f06' but no matching script tag was found.")
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
                  const docs_json = '{"e27bcedf-f323-470e-981b-7ec255e7ba06":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p384382","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p384383"}}},"roots":[{"type":"object","name":"Column","id":"p384529","attributes":{"children":[{"type":"object","name":"Figure","id":"p384384","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p384385"},"y_range":{"type":"object","name":"DataRange1d","id":"p384386"},"x_scale":{"type":"object","name":"LinearScale","id":"p384394"},"y_scale":{"type":"object","name":"LinearScale","id":"p384395"},"title":{"type":"object","name":"Title","id":"p384387","attributes":{"text":"08LB054 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p384448","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384442","attributes":{"selected":{"type":"object","name":"Selection","id":"p384443","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384444"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgOMCsdaXgEADRszAsCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384449","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384450"}}},"glyph":{"type":"object","name":"VArea","id":"p384445","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384446","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384447","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384459","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384453","attributes":{"selected":{"type":"object","name":"Selection","id":"p384454","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384455"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgcDg3Y1HBIQCQGQLECAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384460","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384461"}}},"glyph":{"type":"object","name":"VArea","id":"p384456","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384457","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384458","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384468","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384462","attributes":{"selected":{"type":"object","name":"Selection","id":"p384463","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384464"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaOBRmFtwiIHhwLKzc0A0g2M1kAYAUn+J/hgAAAA="},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384469","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384470"}}},"glyph":{"type":"object","name":"VArea","id":"p384465","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384466","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384467","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384477","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384471","attributes":{"selected":{"type":"object","name":"Selection","id":"p384472","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384473"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaCi9NrvgEAPDAf4WMM2wyhBMO7jcnwWiG+71AGkAGXTWMigAAAA="},"shape":[5],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384478","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384479"}}},"glyph":{"type":"object","name":"VArea","id":"p384474","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384475","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384476","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384486","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384480","attributes":{"selected":{"type":"object","name":"Selection","id":"p384481","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384482"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYBB+MbPgEAODw9qpYLrB3RlMH3j4YQaIZqiZB6YdxHyANABPXOMwMAAAAA=="},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384487","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384488"}}},"glyph":{"type":"object","name":"VArea","id":"p384483","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384484","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384485","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384495","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384489","attributes":{"selected":{"type":"object","name":"Selection","id":"p384490","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384491"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHgaMr3gEAODQz0TmG6Q3DANRB/YHAumGfy4wbTDix1TCw4BAFtBSGUwAAAA"},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384496","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384497"}}},"glyph":{"type":"object","name":"VArea","id":"p384492","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384493","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384494","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384504","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384498","attributes":{"selected":{"type":"object","name":"Selection","id":"p384499","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384500"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JQWRCcRzA8d+pa+w0Ih7vMKbYoev8b7tmhxEjSWMRY+wU/Q/RjB0eI3Xs2jU2kv4ey0aaqFavbUXXImYdxqP6nj6Hj4gUn+c3rogKZ1C/HKA5N7O9ssqhKoVQW+8/fPMO5cJGte5/8w8FNHYEpe198Yl71L8xNI+LKX/koHJPUV8uPX5TQXHOUB3/TfjXGppkHOXfH/NPddTRBJq3AEq68cn7KdTlIJqT1ojvZlFdHaKWzpCv3qLELFQfvQF/nd+5BQISyTQ4AQAA"},"shape":[39],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384505","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384506"}}},"glyph":{"type":"object","name":"VArea","id":"p384501","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384502","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384503","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384514","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384508","attributes":{"selected":{"type":"object","name":"Selection","id":"p384509","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384510"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JfVAIZhzA8d/p1tawDNPW5OpqGMNydTmd7jENwzSdXI5lWCzL1dXpchrPiLZOWxYl9CqyWlarVSr11EoR0ZteydrlcrWY16urs+371+ePj4hEFt0LrhJRM/xRF09G4216/lf+3o0q6l3UDlfv8qVhKBucUD1qvMNHH0DjNA+lorOb3/gd6ieuaGL+6uJnH0NV5YF682An/zwR5dgKVHOfdfA16Wi2fIYyMtbOH89GPX8jmjpLlO0FbfzYVtQJ1micL9/mr+9CteNt1HKllT8ViuLqgOpmQwsfEIHGYg5Kclszv+gw6qaFaALvNfGv/oAqzR21+4NGvjUeJdgT1euPb/EZKWg8PkXpGLnJh15APXEDmkwLlI/yGvhuP9RhE9BMKrnBZ+9E9fFbqHuqrvN7g1GmzkB1sb6eX7kXTe9MlG9arvE2B1HnLUCz+s5V/n40Kr0Ite39Or4gDsVrKaoHQ7X8oTNo7FahFL+4wnufQz3ojeaIoDhcrOFLN6H2sULzsLCaj/4SldNk1OUVf/C+u1Ge2KKKqaviZ4WhqXRE2dxYyT/fjzr2AzRzOg1fE4Vqiyvq4d4KPi4WZb4HqrqBcn5bIprR5SgJTy/zzumo673Q+I+V8ZKN6pQvahdLNA35pXzAVlQW1qiTykp4t10oTTaoAmsu8ZahaFLtUdwbivnWfaiD3kdj1VbEZ0Si8liIur2nkA+JQZnojiqz/3d+aTyarmUoYf8U8JNSUGetQeM5ks/3ZKLa64N6igWanNzf+JV+qHrHo464lMdP24mSNxXV6qpcvi8IzQE7FNv6X/mCcNRrZ6Lpb77IH/oWld0C1EXdOfy6aJRBN1RH+n7h7ePQlCgUn6Fs/uFp1N9/gsbxRRZfnoHK1xv145c/80dzUGZtQlX5GupNhRf4Z9tRYt9ENacik68ORONnizJce56P24N6niOa2lvn+G37UY3ORR3fkcF/GIVS74LKv/cs//JHNIlLUFwG0vmGk6i/Wo5m3NM0PikNlZsX6sbRVP7rLBRLX1Spr6BenJ/Ct3yBEvQGKquyZP5sAJolNijt1Ul8SAjqCfZozt84wy/dh6prNuo9t0/z1pEoWc6oPHtO8XePoglfjDKlP5HPOYF6xTI0fz46yUcko5q2BnXucAK/KhOlbz2qA+NQv5Mbz+d/jrJ2PKr+4hP8wR1opk9FKao8zq8LQj0wHc3ha3G8fTiqkvdQr2/+iR/S//kvFnHc/6AHAAA="},"shape":[244],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGAXkgE///9tzrJlj//P///86m/baA4Ue/Kw7BaIbxG6eA9EM/65csAdK1x84dRGZ3j/3/XV7RgYGhy0n7kHVPQHrO/T1AYg+sND1HrK8giHHE5C++F2ed0C0/bbPV+E0SH3Zvutgc8+cuQNW33zgEYhe8LbmMdhce9NHyOJg85DsZbjs+wys/v1yMP3AN+kFWHyNzCsQ7WAaB6YbHBNeguVV2MC0A9f153AaZP+phW/B8mqGb8DmSemD1TFcrXgJDRew+Qe8zZ+i0CWTYe54BPI3g2bMfRCdkGJ9Hmz+wyqIv807b2Kj/1/yvYVM2xsb30bhg9SBzOl0vAGngeL3/Xuv4xSHuAMcrvW2XNfh4ug0un5SaaT0ALYPSCX0HwLHr7z+3SsYNCgcJ0vgpYHhBaYPfP6LoEH+cEy4CjcfFw1Th06jm0cCDXPXg+XHLiPTCU8vXMJGK7S+vghOPzNnXoTnIyw0ML9dQvYvLhpszl9g/rG+fx4lXXGsOWP/Dyjef+go1L1HQPz66XmHhgwNKVcOgtP7tcUH7CGl0wGwvya+3QMOV4GInfZ/gOnn5rnt9r/B/t0KkpePsNwCpyH+p5xGNxdGg+zdU7KZIA2KJz7dTSD+/qKMjVB/bbD/BeSX7VtPkP4GDA9703U4aaD586X01+KkfwDtf7x0NU76C9A9q2VWgfy1v2TyCoL0L3D5sZxsGgC7aAztoAcAAA=="},"shape":[244],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384515","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384516"}}},"glyph":{"type":"object","name":"Line","id":"p384511","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384512","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p384513","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p384524","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384518","attributes":{"selected":{"type":"object","name":"Selection","id":"p384519","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384520"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JfVAIZhzA8d/p1tawDNPW5OpqGMNydTmd7jENwzSdXI5lWCzL1dXpchrPiLZOWxYl9CqyWlarVSr11EoR0ZteydrlcrWY16urs+371+ePj4hEFt0LrhJRM/xRF09G4216/lf+3o0q6l3UDlfv8qVhKBucUD1qvMNHH0DjNA+lorOb3/gd6ieuaGL+6uJnH0NV5YF682An/zwR5dgKVHOfdfA16Wi2fIYyMtbOH89GPX8jmjpLlO0FbfzYVtQJ1micL9/mr+9CteNt1HKllT8ViuLqgOpmQwsfEIHGYg5Kclszv+gw6qaFaALvNfGv/oAqzR21+4NGvjUeJdgT1euPb/EZKWg8PkXpGLnJh15APXEDmkwLlI/yGvhuP9RhE9BMKrnBZ+9E9fFbqHuqrvN7g1GmzkB1sb6eX7kXTe9MlG9arvE2B1HnLUCz+s5V/n40Kr0Ite39Or4gDsVrKaoHQ7X8oTNo7FahFL+4wnufQz3ojeaIoDhcrOFLN6H2sULzsLCaj/4SldNk1OUVf/C+u1Ge2KKKqaviZ4WhqXRE2dxYyT/fjzr2AzRzOg1fE4Vqiyvq4d4KPi4WZb4HqrqBcn5bIprR5SgJTy/zzumo673Q+I+V8ZKN6pQvahdLNA35pXzAVlQW1qiTykp4t10oTTaoAmsu8ZahaFLtUdwbivnWfaiD3kdj1VbEZ0Si8liIur2nkA+JQZnojiqz/3d+aTyarmUoYf8U8JNSUGetQeM5ks/3ZKLa64N6igWanNzf+JV+qHrHo464lMdP24mSNxXV6qpcvi8IzQE7FNv6X/mCcNRrZ6Lpb77IH/oWld0C1EXdOfy6aJRBN1RH+n7h7ePQlCgUn6Fs/uFp1N9/gsbxRRZfnoHK1xv145c/80dzUGZtQlX5GupNhRf4Z9tRYt9ENacik68ORONnizJce56P24N6niOa2lvn+G37UY3ORR3fkcF/GIVS74LKv/cs//JHNIlLUFwG0vmGk6i/Wo5m3NM0PikNlZsX6sbRVP7rLBRLX1Spr6BenJ/Ct3yBEvQGKquyZP5sAJolNijt1Ul8SAjqCfZozt84wy/dh6prNuo9t0/z1pEoWc6oPHtO8XePoglfjDKlP5HPOYF6xTI0fz46yUcko5q2BnXucAK/KhOlbz2qA+NQv5Mbz+d/jrJ2PKr+4hP8wR1opk9FKao8zq8LQj0wHc3ha3G8fTiqkvdQr2/+iR/S//kvFnHc/6AHAAA="},"shape":[244],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGAXkgE///9tzrJlj//P///86m/baA4Ue/Kw7BaIbxG6eA9EM/65csAdK1x84dRGZ3j/3/XV7RgYGhy0n7kHVPQHrO/T1AYg+sND1HrK8giHHE5C++F2ed0C0/bbPV+E0SH3Zvutgc8+cuQNW33zgEYhe8LbmMdhce9NHyOJg85DsZbjs+wys/v1yMP3AN+kFWHyNzCsQ7WAaB6YbHBNeguVV2MC0A9f153AaZP+phW/B8mqGb8DmSemD1TFcrXgJDRew+Qe8zZ+i0CWTYe54BPI3g2bMfRCdkGJ9Hmz+wyqIv807b2Kj/1/yvYVM2xsb30bhg9SBzOl0vAGngeL3/Xuv4xSHuAMcrvW2XNfh4ug0un5SaaT0ALYPSCX0HwLHr7z+3SsYNCgcJ0vgpYHhBaYPfP6LoEH+cEy4CjcfFw1Th06jm0cCDXPXg+XHLiPTCU8vXMJGK7S+vghOPzNnXoTnIyw0ML9dQvYvLhpszl9g/rG+fx4lXXGsOWP/Dyjef+go1L1HQPz66XmHhgwNKVcOgtP7tcUH7CGl0wGwvya+3QMOV4GInfZ/gOnn5rnt9r/B/t0KkpePsNwCpyH+p5xGNxdGg+zdU7KZIA2KJz7dTSD+/qKMjVB/bbD/BeSX7VtPkP4GDA9703U4aaD586X01+KkfwDtf7x0NU76C9A9q2VWgfy1v2TyCoL0L3D5sZxsGgC7aAztoAcAAA=="},"shape":[244],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384525","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384526"}}},"glyph":{"type":"object","name":"Line","id":"p384521","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384522","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p384523","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p384393","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p384420"},{"type":"object","name":"WheelZoomTool","id":"p384421","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p384422","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p384423","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p384429","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p384428","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p384430","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p384431","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p384432","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p384433","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p384439","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p384438","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p384440"},{"type":"object","name":"SaveTool","id":"p384441"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p384415","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p384416","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p384417"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384418"}}}],"right":[{"type":"object","name":"Legend","id":"p384451","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p384452","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p384448"},{"id":"p384459"},{"id":"p384468"},{"id":"p384477"},{"id":"p384486"},{"id":"p384495"}]}},{"type":"object","name":"LegendItem","id":"p384507","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p384504"}]}},{"type":"object","name":"LegendItem","id":"p384517","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p384514"},{"id":"p384524"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p384396","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p384397","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p384398","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p384399","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p384400","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p384401","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p384402","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p384403","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p384404","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p384405","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p384406","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p384407","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p384408","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p384409"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p384412","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p384411","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p384410","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p384413"}}}],"center":[{"type":"object","name":"Grid","id":"p384414","attributes":{"axis":{"id":"p384396"}}},{"type":"object","name":"Grid","id":"p384419","attributes":{"dimension":1,"axis":{"id":"p384415"}}}]}},{"type":"object","name":"Div","id":"p384527","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"e27bcedf-f323-470e-981b-7ec255e7ba06","roots":{"p384529":"fa4d8a47-f86e-468c-9791-9648a0446f06"},"root_ids":["p384529"]}];
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