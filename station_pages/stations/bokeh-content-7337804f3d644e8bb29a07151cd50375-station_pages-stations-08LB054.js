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
    
    
    const element = document.getElementById("a3bef653-51aa-45e9-a37d-3f2fb240dfd2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a3bef653-51aa-45e9-a37d-3f2fb240dfd2' but no matching script tag was found.")
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
                  const docs_json = '{"f6e33710-6f3e-4d0b-a849-d7c4796be2fd":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p265270","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p265271"}}},"roots":[{"type":"object","name":"Column","id":"p265417","attributes":{"children":[{"type":"object","name":"Figure","id":"p265272","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p265273"},"y_range":{"type":"object","name":"DataRange1d","id":"p265274"},"x_scale":{"type":"object","name":"LinearScale","id":"p265282"},"y_scale":{"type":"object","name":"LinearScale","id":"p265283"},"title":{"type":"object","name":"Title","id":"p265275","attributes":{"text":"08LB054 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p265336","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265330","attributes":{"selected":{"type":"object","name":"Selection","id":"p265331","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265332"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgOMCsdaXgEADRszAsCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265337","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265338"}}},"glyph":{"type":"object","name":"VArea","id":"p265333","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p265334","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p265335","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p265347","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265341","attributes":{"selected":{"type":"object","name":"Selection","id":"p265342","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265343"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgcDg3Y1HBIQCQGQLECAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265348","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265349"}}},"glyph":{"type":"object","name":"VArea","id":"p265344","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p265345","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p265346","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p265356","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265350","attributes":{"selected":{"type":"object","name":"Selection","id":"p265351","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265352"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaOBRmFtwiIHhwLKzc0A0g2M1kAYAUn+J/hgAAAA="},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265357","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265358"}}},"glyph":{"type":"object","name":"VArea","id":"p265353","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p265354","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p265355","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p265365","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265359","attributes":{"selected":{"type":"object","name":"Selection","id":"p265360","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265361"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaCi9NrvgEAPDAf4WMM2wyhBMO7jcnwWiG+71AGkAGXTWMigAAAA="},"shape":[5],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265366","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265367"}}},"glyph":{"type":"object","name":"VArea","id":"p265362","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p265363","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p265364","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p265374","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265368","attributes":{"selected":{"type":"object","name":"Selection","id":"p265369","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265370"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYBB+MbPgEAODw9qpYLrB3RlMH3j4YQaIZqiZB6YdxHyANABPXOMwMAAAAA=="},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265375","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265376"}}},"glyph":{"type":"object","name":"VArea","id":"p265371","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p265372","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p265373","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p265383","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265377","attributes":{"selected":{"type":"object","name":"Selection","id":"p265378","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265379"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHgaMr3gEAODQz0TmG6Q3DANRB/YHAumGfy4wbTDix1TCw4BAFtBSGUwAAAA"},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265384","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265385"}}},"glyph":{"type":"object","name":"VArea","id":"p265380","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p265381","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p265382","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p265392","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265386","attributes":{"selected":{"type":"object","name":"Selection","id":"p265387","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265388"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JQWRCcRzA8d+pa+w0Ih7vMKbYoev8b7tmhxEjSWMRY+wU/Q/RjB0eI3Xs2jU2kv4ey0aaqFavbUXXImYdxqP6nj6Hj4gUn+c3rogKZ1C/HKA5N7O9ssqhKoVQW+8/fPMO5cJGte5/8w8FNHYEpe198Yl71L8xNI+LKX/koHJPUV8uPX5TQXHOUB3/TfjXGppkHOXfH/NPddTRBJq3AEq68cn7KdTlIJqT1ojvZlFdHaKWzpCv3qLELFQfvQF/nd+5BQISyTQ4AQAA"},"shape":[39],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265393","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265394"}}},"glyph":{"type":"object","name":"VArea","id":"p265389","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p265390","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p265391","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.9445199990272521},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p265402","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265396","attributes":{"selected":{"type":"object","name":"Selection","id":"p265397","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265398"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JfVAIZhzA8d/p1tawDNPW5OpqGMNydTmd7jENwzSdXI5lWCzL1dXpchrPiLZOWxYl9CqyWlarVSr11EoR0ZteydrlcrWY16urs+371+ePj4hEFt0LrhJRM/xRF09G4216/lf+3o0q6l3UDlfv8qVhKBucUD1qvMNHH0DjNA+lorOb3/gd6ieuaGL+6uJnH0NV5YF682An/zwR5dgKVHOfdfA16Wi2fIYyMtbOH89GPX8jmjpLlO0FbfzYVtQJ1micL9/mr+9CteNt1HKllT8ViuLqgOpmQwsfEIHGYg5Kclszv+gw6qaFaALvNfGv/oAqzR21+4NGvjUeJdgT1euPb/EZKWg8PkXpGLnJh15APXEDmkwLlI/yGvhuP9RhE9BMKrnBZ+9E9fFbqHuqrvN7g1GmzkB1sb6eX7kXTe9MlG9arvE2B1HnLUCz+s5V/n40Kr0Ite39Or4gDsVrKaoHQ7X8oTNo7FahFL+4wnufQz3ojeaIoDhcrOFLN6H2sULzsLCaj/4SldNk1OUVf/C+u1Ge2KKKqaviZ4WhqXRE2dxYyT/fjzr2AzRzOg1fE4Vqiyvq4d4KPi4WZb4HqrqBcn5bIprR5SgJTy/zzumo673Q+I+V8ZKN6pQvahdLNA35pXzAVlQW1qiTykp4t10oTTaoAmsu8ZahaFLtUdwbivnWfaiD3kdj1VbEZ0Si8liIur2nkA+JQZnojiqz/3d+aTyarmUoYf8U8JNSUGetQeM5ks/3ZKLa64N6igWanNzf+JV+qHrHo464lMdP24mSNxXV6qpcvi8IzQE7FNv6X/mCcNRrZ6Lpb77IH/oWld0C1EXdOfy6aJRBN1RH+n7h7ePQlCgUn6Fs/uFp1N9/gsbxRRZfnoHK1xv145c/80dzUGZtQlX5GupNhRf4Z9tRYt9ENacik68ORONnizJce56P24N6niOa2lvn+G37UY3ORR3fkcF/GIVS74LKv/cs//JHNIlLUFwG0vmGk6i/Wo5m3NM0PikNlZsX6sbRVP7rLBRLX1Spr6BenJ/Ct3yBEvQGKquyZP5sAJolNijt1Ul8SAjqCfZozt84wy/dh6prNuo9t0/z1pEoWc6oPHtO8XePoglfjDKlP5HPOYF6xTI0fz46yUcko5q2BnXucAK/KhOlbz2qA+NQv5Mbz+d/jrJ2PKr+4hP8wR1opk9FKao8zq8LQj0wHc3ha3G8fTiqkvdQr2/+iR/S//kvFnHc/6AHAAA="},"shape":[244],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgGAXkhMCn///tOdbMsf/5//9/nU177YFmPPhZdwpEN4jdPAeiGf5duWAPlK4/cOoiMr1/7vvr9owMDA5bTtyDqnsC1nfo6wMQfWCh6z1keQVDjicg/fG7PO+AaPttn6/CaZD6sn3XQfz9Z87cAelXaD7wCEQveFvzGGyuvSmYDxMHmwfkA90HoS/7PgOrf78cTD/wTXoBll8j8wpEO5jGgekGx4SXYHkVNjDtwHX9OZwG2X9q4VuwvJrhGxC9QEofrI7hagWYBoYL2PwD3uZPUeiSyTB3PAL5m0Ez5j6ITkixPg82/2EVxN/mnTfB/kaj/1/yvQUSh9H2xsa3Ufgg9SBzOh1vwGmg8vv+vddxikPcAQ7XelsuMA1Wj06jm0sqH2geLD0A/Q12T0L/IXD8yuvfvYJBg8JxssQVcHjioIHhBZY/8PkvggaaV++YcBVuPswedBqmDp1GN48EPsydD5YfuwyyH0YnPL1wCeweNFqh9fVFkPiCmTPBNDgfYaGB+Q2sH+ZfXDTYnL/A/GN9/zxKuuJYc8b+H1C8/9BRaHgdAfHrp+cdGjI0KJ4OnDoISif/ry0+AA4nYNSD/TXx7R5w+ApE7LT/A0xPN89tt/8N9u9WkLx8hOUWOA3S9PnvFmg4kE+jmwvjg+zdU7IZbD8+GhRPfLqbQOr2F2VshPprg/0vIL9s33qC9DdgeNibrrPHRQPNny+lvxaUHrDSP4D2P1662h4X/QUYzqtlVoHCbX/J5BUEaaC7geXHcpC7yaIBu2gM7aAHAAA="},"shape":[244],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265403","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265404"}}},"glyph":{"type":"object","name":"Line","id":"p265399","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265400","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p265401","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p265412","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p265406","attributes":{"selected":{"type":"object","name":"Selection","id":"p265407","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p265408"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JfVAIZhzA8d/p1tawDNPW5OpqGMNydTmd7jENwzSdXI5lWCzL1dXpchrPiLZOWxYl9CqyWlarVSr11EoR0ZteydrlcrWY16urs+371+ePj4hEFt0LrhJRM/xRF09G4216/lf+3o0q6l3UDlfv8qVhKBucUD1qvMNHH0DjNA+lorOb3/gd6ieuaGL+6uJnH0NV5YF682An/zwR5dgKVHOfdfA16Wi2fIYyMtbOH89GPX8jmjpLlO0FbfzYVtQJ1micL9/mr+9CteNt1HKllT8ViuLqgOpmQwsfEIHGYg5Kclszv+gw6qaFaALvNfGv/oAqzR21+4NGvjUeJdgT1euPb/EZKWg8PkXpGLnJh15APXEDmkwLlI/yGvhuP9RhE9BMKrnBZ+9E9fFbqHuqrvN7g1GmzkB1sb6eX7kXTe9MlG9arvE2B1HnLUCz+s5V/n40Kr0Ite39Or4gDsVrKaoHQ7X8oTNo7FahFL+4wnufQz3ojeaIoDhcrOFLN6H2sULzsLCaj/4SldNk1OUVf/C+u1Ge2KKKqaviZ4WhqXRE2dxYyT/fjzr2AzRzOg1fE4Vqiyvq4d4KPi4WZb4HqrqBcn5bIprR5SgJTy/zzumo673Q+I+V8ZKN6pQvahdLNA35pXzAVlQW1qiTykp4t10oTTaoAmsu8ZahaFLtUdwbivnWfaiD3kdj1VbEZ0Si8liIur2nkA+JQZnojiqz/3d+aTyarmUoYf8U8JNSUGetQeM5ks/3ZKLa64N6igWanNzf+JV+qHrHo464lMdP24mSNxXV6qpcvi8IzQE7FNv6X/mCcNRrZ6Lpb77IH/oWld0C1EXdOfy6aJRBN1RH+n7h7ePQlCgUn6Fs/uFp1N9/gsbxRRZfnoHK1xv145c/80dzUGZtQlX5GupNhRf4Z9tRYt9ENacik68ORONnizJce56P24N6niOa2lvn+G37UY3ORR3fkcF/GIVS74LKv/cs//JHNIlLUFwG0vmGk6i/Wo5m3NM0PikNlZsX6sbRVP7rLBRLX1Spr6BenJ/Ct3yBEvQGKquyZP5sAJolNijt1Ul8SAjqCfZozt84wy/dh6prNuo9t0/z1pEoWc6oPHtO8XePoglfjDKlP5HPOYF6xTI0fz46yUcko5q2BnXucAK/KhOlbz2qA+NQv5Mbz+d/jrJ2PKr+4hP8wR1opk9FKao8zq8LQj0wHc3ha3G8fTiqkvdQr2/+iR/S//kvFnHc/6AHAAA="},"shape":[244],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgGAXkhMCn///tOdbMsf/5//9/nU177YFmPPhZdwpEN4jdPAeiGf5duWAPlK4/cOoiMr1/7vvr9owMDA5bTtyDqnsC1nfo6wMQfWCh6z1keQVDjicg/fG7PO+AaPttn6/CaZD6sn3XQfz9Z87cAelXaD7wCEQveFvzGGyuvSmYDxMHmwfkA90HoS/7PgOrf78cTD/wTXoBll8j8wpEO5jGgekGx4SXYHkVNjDtwHX9OZwG2X9q4VuwvJrhGxC9QEofrI7hagWYBoYL2PwD3uZPUeiSyTB3PAL5m0Ez5j6ITkixPg82/2EVxN/mnTfB/kaj/1/yvQUSh9H2xsa3Ufgg9SBzOh1vwGmg8vv+vddxikPcAQ7XelsuMA1Wj06jm0sqH2geLD0A/Q12T0L/IXD8yuvfvYJBg8JxssQVcHjioIHhBZY/8PkvggaaV++YcBVuPswedBqmDp1GN48EPsydD5YfuwyyH0YnPL1wCeweNFqh9fVFkPiCmTPBNDgfYaGB+Q2sH+ZfXDTYnL/A/GN9/zxKuuJYc8b+H1C8/9BRaHgdAfHrp+cdGjI0KJ4OnDoISif/ry0+AA4nYNSD/TXx7R5w+ApE7LT/A0xPN89tt/8N9u9WkLx8hOUWOA3S9PnvFmg4kE+jmwvjg+zdU7IZbD8+GhRPfLqbQOr2F2VshPprg/0vIL9s33qC9DdgeNibrrPHRQPNny+lvxaUHrDSP4D2P1662h4X/QUYzqtlVoHCbX/J5BUEaaC7geXHcpC7yaIBu2gM7aAHAAA="},"shape":[244],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p265413","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p265414"}}},"glyph":{"type":"object","name":"Line","id":"p265409","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p265410","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p265411","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p265281","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p265308"},{"type":"object","name":"WheelZoomTool","id":"p265309","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p265310","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p265311","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p265317","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p265316","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p265318","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p265319","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p265320","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p265321","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p265327","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p265326","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p265328"},{"type":"object","name":"SaveTool","id":"p265329"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p265303","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p265304","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p265305"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p265306"}}}],"right":[{"type":"object","name":"Legend","id":"p265339","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p265340","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p265336"},{"id":"p265347"},{"id":"p265356"},{"id":"p265365"},{"id":"p265374"},{"id":"p265383"}]}},{"type":"object","name":"LegendItem","id":"p265395","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p265392"}]}},{"type":"object","name":"LegendItem","id":"p265405","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p265402"},{"id":"p265412"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p265284","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p265285","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p265286","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p265287","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p265288","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p265289","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p265290","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p265291","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p265292","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p265293","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p265294","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p265295","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p265296","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p265297"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p265300","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p265299","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p265298","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p265301"}}}],"center":[{"type":"object","name":"Grid","id":"p265302","attributes":{"axis":{"id":"p265284"}}},{"type":"object","name":"Grid","id":"p265307","attributes":{"dimension":1,"axis":{"id":"p265303"}}}]}},{"type":"object","name":"Div","id":"p265415","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"f6e33710-6f3e-4d0b-a849-d7c4796be2fd","roots":{"p265417":"a3bef653-51aa-45e9-a37d-3f2fb240dfd2"},"root_ids":["p265417"]}];
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