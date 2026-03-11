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
    
    
    const element = document.getElementById("badb884a-fe2b-48c7-950e-ae97ddc20697");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'badb884a-fe2b-48c7-950e-ae97ddc20697' but no matching script tag was found.")
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
                  const docs_json = '{"6b4d6019-d93a-45ac-953f-14b15ca403a7":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p384023","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p384024"}}},"roots":[{"type":"object","name":"Column","id":"p384170","attributes":{"children":[{"type":"object","name":"Figure","id":"p384025","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p384026"},"y_range":{"type":"object","name":"DataRange1d","id":"p384027"},"x_scale":{"type":"object","name":"LinearScale","id":"p384035"},"y_scale":{"type":"object","name":"LinearScale","id":"p384036"},"title":{"type":"object","name":"Title","id":"p384028","attributes":{"text":"08LB054 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p384089","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384083","attributes":{"selected":{"type":"object","name":"Selection","id":"p384084","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384085"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgOMCsdaXgEADRszAsCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384090","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384091"}}},"glyph":{"type":"object","name":"VArea","id":"p384086","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384087","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384088","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384100","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384094","attributes":{"selected":{"type":"object","name":"Selection","id":"p384095","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384096"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgcDg3Y1HBIQCQGQLECAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384101","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384102"}}},"glyph":{"type":"object","name":"VArea","id":"p384097","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384098","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384099","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384109","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384103","attributes":{"selected":{"type":"object","name":"Selection","id":"p384104","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384105"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaOBRmFtwiIHhwLKzc0A0g2M1kAYAUn+J/hgAAAA="},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384110","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384111"}}},"glyph":{"type":"object","name":"VArea","id":"p384106","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384107","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384108","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384118","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384112","attributes":{"selected":{"type":"object","name":"Selection","id":"p384113","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384114"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaCi9NrvgEAPDAf4WMM2wyhBMO7jcnwWiG+71AGkAGXTWMigAAAA="},"shape":[5],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384119","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384120"}}},"glyph":{"type":"object","name":"VArea","id":"p384115","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384116","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384117","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384127","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384121","attributes":{"selected":{"type":"object","name":"Selection","id":"p384122","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384123"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYBB+MbPgEAODw9qpYLrB3RlMH3j4YQaIZqiZB6YdxHyANABPXOMwMAAAAA=="},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384128","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384129"}}},"glyph":{"type":"object","name":"VArea","id":"p384124","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384125","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384126","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384136","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384130","attributes":{"selected":{"type":"object","name":"Selection","id":"p384131","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384132"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHgaMr3gEAODQz0TmG6Q3DANRB/YHAumGfy4wbTDix1TCw4BAFtBSGUwAAAA"},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384137","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384138"}}},"glyph":{"type":"object","name":"VArea","id":"p384133","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384134","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384135","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384145","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384139","attributes":{"selected":{"type":"object","name":"Selection","id":"p384140","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384141"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JQWRCcRzA8d+pa+w0Ih7vMKbYoev8b7tmhxEjSWMRY+wU/Q/RjB0eI3Xs2jU2kv4ey0aaqFavbUXXImYdxqP6nj6Hj4gUn+c3rogKZ1C/HKA5N7O9ssqhKoVQW+8/fPMO5cJGte5/8w8FNHYEpe198Yl71L8xNI+LKX/koHJPUV8uPX5TQXHOUB3/TfjXGppkHOXfH/NPddTRBJq3AEq68cn7KdTlIJqT1ojvZlFdHaKWzpCv3qLELFQfvQF/nd+5BQISyTQ4AQAA"},"shape":[39],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384146","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384147"}}},"glyph":{"type":"object","name":"VArea","id":"p384142","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p384143","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p384144","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p384155","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384149","attributes":{"selected":{"type":"object","name":"Selection","id":"p384150","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384151"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JfVAIZhzA8d/p1tawDNPW5OpqGMNydTmd7jENwzSdXI5lWCzL1dXpchrPiLZOWxYl9CqyWlarVSr11EoR0ZteydrlcrWY16urs+371+ePj4hEFt0LrhJRM/xRF09G4216/lf+3o0q6l3UDlfv8qVhKBucUD1qvMNHH0DjNA+lorOb3/gd6ieuaGL+6uJnH0NV5YF682An/zwR5dgKVHOfdfA16Wi2fIYyMtbOH89GPX8jmjpLlO0FbfzYVtQJ1micL9/mr+9CteNt1HKllT8ViuLqgOpmQwsfEIHGYg5Kclszv+gw6qaFaALvNfGv/oAqzR21+4NGvjUeJdgT1euPb/EZKWg8PkXpGLnJh15APXEDmkwLlI/yGvhuP9RhE9BMKrnBZ+9E9fFbqHuqrvN7g1GmzkB1sb6eX7kXTe9MlG9arvE2B1HnLUCz+s5V/n40Kr0Ite39Or4gDsVrKaoHQ7X8oTNo7FahFL+4wnufQz3ojeaIoDhcrOFLN6H2sULzsLCaj/4SldNk1OUVf/C+u1Ge2KKKqaviZ4WhqXRE2dxYyT/fjzr2AzRzOg1fE4Vqiyvq4d4KPi4WZb4HqrqBcn5bIprR5SgJTy/zzumo673Q+I+V8ZKN6pQvahdLNA35pXzAVlQW1qiTykp4t10oTTaoAmsu8ZahaFLtUdwbivnWfaiD3kdj1VbEZ0Si8liIur2nkA+JQZnojiqz/3d+aTyarmUoYf8U8JNSUGetQeM5ks/3ZKLa64N6igWanNzf+JV+qHrHo464lMdP24mSNxXV6qpcvi8IzQE7FNv6X/mCcNRrZ6Lpb77IH/oWld0C1EXdOfy6aJRBN1RH+n7h7ePQlCgUn6Fs/uFp1N9/gsbxRRZfnoHK1xv145c/80dzUGZtQlX5GupNhRf4Z9tRYt9ENacik68ORONnizJce56P24N6niOa2lvn+G37UY3ORR3fkcF/GIVS74LKv/cs//JHNIlLUFwG0vmGk6i/Wo5m3NM0PikNlZsX6sbRVP7rLBRLX1Spr6BenJ/Ct3yBEvQGKquyZP5sAJolNijt1Ul8SAjqCfZozt84wy/dh6prNuo9t0/z1pEoWc6oPHtO8XePoglfjDKlP5HPOYF6xTI0fz46yUcko5q2BnXucAK/KhOlbz2qA+NQv5Mbz+d/jrJ2PKr+4hP8wR1opk9FKao8zq8LQj0wHc3ha3G8fTiqkvdQr2/+iR/S//kvFnHc/6AHAAA="},"shape":[244],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGAXkgE///9tzrJlj//P///86m/baA4Ue/Kw7BaIbxG6eA9EM/65csAdK1x84dRGZ3j/3/XV7RgYGhy0n7kHVPQHrO/T1AYg+sND1HrK8giHHE5C++F2ed0C0/bbPV+E0SH3Zvutgc8+cuQNW33zgEYhe8LbmMdhce9NHyOJg85DsZbjs+wys/v1yMP3AN+kFWHyNzCsQ7WAaB6YbHBNeguVV2MC0A9f153AaZP+phW/B8mqGb8DmSemD1TFcrXgJDRew+Qe8zZ+i0CWTYe54BPI3g2bMfRCdkGJ9Hmz+wyqIv807b2Kj/1/yvYVM2xsb30bhg9SBzOl0vAGngeL3/Xuv4xSHuAMcrvW2XNfh4ug0un5SaaT0ALYPSCX0HwLHr7z+3SsYNCgcJ0vgpYHhBaYPfP6LoEH+cEy4CjcfFw1Th06jm0cCDXPXg+XHLiPTCU8vXMJGK7S+vghOPzNnXoTnIyw0ML9dQvYvLhpszl9g/rG+fx4lXXGsOWP/Dyjef+go1L1HQPz66XmHhgwNKVcOgtP7tcUH7CGl0wGwvya+3QMOV4GInfZ/gOnn5rnt9r/B/t0KkpePsNwCpyH+p5xGNxdGg+zdU7KZIA2KJz7dTSD+/qKMjVB/bbD/BeSX7VtPkP4GDA9703U4aaD586X01+KkfwDtf7x0NU76C9A9q2VWgfy1v2TyCoL0L3D5sZxsGgC7aAztoAcAAA=="},"shape":[244],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384156","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384157"}}},"glyph":{"type":"object","name":"Line","id":"p384152","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384153","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p384154","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p384165","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p384159","attributes":{"selected":{"type":"object","name":"Selection","id":"p384160","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p384161"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3JfVAIZhzA8d/p1tawDNPW5OpqGMNydTmd7jENwzSdXI5lWCzL1dXpchrPiLZOWxYl9CqyWlarVSr11EoR0ZteydrlcrWY16urs+371+ePj4hEFt0LrhJRM/xRF09G4216/lf+3o0q6l3UDlfv8qVhKBucUD1qvMNHH0DjNA+lorOb3/gd6ieuaGL+6uJnH0NV5YF682An/zwR5dgKVHOfdfA16Wi2fIYyMtbOH89GPX8jmjpLlO0FbfzYVtQJ1micL9/mr+9CteNt1HKllT8ViuLqgOpmQwsfEIHGYg5Kclszv+gw6qaFaALvNfGv/oAqzR21+4NGvjUeJdgT1euPb/EZKWg8PkXpGLnJh15APXEDmkwLlI/yGvhuP9RhE9BMKrnBZ+9E9fFbqHuqrvN7g1GmzkB1sb6eX7kXTe9MlG9arvE2B1HnLUCz+s5V/n40Kr0Ite39Or4gDsVrKaoHQ7X8oTNo7FahFL+4wnufQz3ojeaIoDhcrOFLN6H2sULzsLCaj/4SldNk1OUVf/C+u1Ge2KKKqaviZ4WhqXRE2dxYyT/fjzr2AzRzOg1fE4Vqiyvq4d4KPi4WZb4HqrqBcn5bIprR5SgJTy/zzumo673Q+I+V8ZKN6pQvahdLNA35pXzAVlQW1qiTykp4t10oTTaoAmsu8ZahaFLtUdwbivnWfaiD3kdj1VbEZ0Si8liIur2nkA+JQZnojiqz/3d+aTyarmUoYf8U8JNSUGetQeM5ks/3ZKLa64N6igWanNzf+JV+qHrHo464lMdP24mSNxXV6qpcvi8IzQE7FNv6X/mCcNRrZ6Lpb77IH/oWld0C1EXdOfy6aJRBN1RH+n7h7ePQlCgUn6Fs/uFp1N9/gsbxRRZfnoHK1xv145c/80dzUGZtQlX5GupNhRf4Z9tRYt9ENacik68ORONnizJce56P24N6niOa2lvn+G37UY3ORR3fkcF/GIVS74LKv/cs//JHNIlLUFwG0vmGk6i/Wo5m3NM0PikNlZsX6sbRVP7rLBRLX1Spr6BenJ/Ct3yBEvQGKquyZP5sAJolNijt1Ul8SAjqCfZozt84wy/dh6prNuo9t0/z1pEoWc6oPHtO8XePoglfjDKlP5HPOYF6xTI0fz46yUcko5q2BnXucAK/KhOlbz2qA+NQv5Mbz+d/jrJ2PKr+4hP8wR1opk9FKao8zq8LQj0wHc3ha3G8fTiqkvdQr2/+iR/S//kvFnHc/6AHAAA="},"shape":[244],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgGAXkgE///9tzrJlj//P///86m/baA4Ue/Kw7BaIbxG6eA9EM/65csAdK1x84dRGZ3j/3/XV7RgYGhy0n7kHVPQHrO/T1AYg+sND1HrK8giHHE5C++F2ed0C0/bbPV+E0SH3Zvutgc8+cuQNW33zgEYhe8LbmMdhce9NHyOJg85DsZbjs+wys/v1yMP3AN+kFWHyNzCsQ7WAaB6YbHBNeguVV2MC0A9f153AaZP+phW/B8mqGb8DmSemD1TFcrXgJDRew+Qe8zZ+i0CWTYe54BPI3g2bMfRCdkGJ9Hmz+wyqIv807b2Kj/1/yvYVM2xsb30bhg9SBzOl0vAGngeL3/Xuv4xSHuAMcrvW2XNfh4ug0un5SaaT0ALYPSCX0HwLHr7z+3SsYNCgcJ0vgpYHhBaYPfP6LoEH+cEy4CjcfFw1Th06jm0cCDXPXg+XHLiPTCU8vXMJGK7S+vghOPzNnXoTnIyw0ML9dQvYvLhpszl9g/rG+fx4lXXGsOWP/Dyjef+go1L1HQPz66XmHhgwNKVcOgtP7tcUH7CGl0wGwvya+3QMOV4GInfZ/gOnn5rnt9r/B/t0KkpePsNwCpyH+p5xGNxdGg+zdU7KZIA2KJz7dTSD+/qKMjVB/bbD/BeSX7VtPkP4GDA9703U4aaD586X01+KkfwDtf7x0NU76C9A9q2VWgfy1v2TyCoL0L3D5sZxsGgC7aAztoAcAAA=="},"shape":[244],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p384166","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p384167"}}},"glyph":{"type":"object","name":"Line","id":"p384162","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p384163","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p384164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p384034","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p384061"},{"type":"object","name":"WheelZoomTool","id":"p384062","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p384063","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p384064","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p384070","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p384069","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p384071","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p384072","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p384073","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p384074","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p384080","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p384079","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p384081"},{"type":"object","name":"SaveTool","id":"p384082"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p384056","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p384057","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p384058"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p384059"}}}],"right":[{"type":"object","name":"Legend","id":"p384092","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p384093","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p384089"},{"id":"p384100"},{"id":"p384109"},{"id":"p384118"},{"id":"p384127"},{"id":"p384136"}]}},{"type":"object","name":"LegendItem","id":"p384148","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p384145"}]}},{"type":"object","name":"LegendItem","id":"p384158","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p384155"},{"id":"p384165"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p384037","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p384038","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p384039","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p384040","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p384041","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p384042","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p384043","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p384044","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p384045","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p384046","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p384047","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p384048","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p384049","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p384050"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p384053","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p384052","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p384051","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p384054"}}}],"center":[{"type":"object","name":"Grid","id":"p384055","attributes":{"axis":{"id":"p384037"}}},{"type":"object","name":"Grid","id":"p384060","attributes":{"dimension":1,"axis":{"id":"p384056"}}}]}},{"type":"object","name":"Div","id":"p384168","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"6b4d6019-d93a-45ac-953f-14b15ca403a7","roots":{"p384170":"badb884a-fe2b-48c7-950e-ae97ddc20697"},"root_ids":["p384170"]}];
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