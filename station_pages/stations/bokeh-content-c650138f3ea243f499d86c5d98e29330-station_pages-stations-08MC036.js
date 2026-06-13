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
    
    
    const element = document.getElementById("c55f06b3-7e0a-419c-8eac-b24a754b9f4f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c55f06b3-7e0a-419c-8eac-b24a754b9f4f' but no matching script tag was found.")
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
                  const docs_json = '{"43eb716c-8f01-4174-a633-c7ffd8bb80dc":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p390057","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p390058"}}},"roots":[{"type":"object","name":"Column","id":"p390204","attributes":{"children":[{"type":"object","name":"Figure","id":"p390059","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p390060"},"y_range":{"type":"object","name":"DataRange1d","id":"p390061"},"x_scale":{"type":"object","name":"LinearScale","id":"p390069"},"y_scale":{"type":"object","name":"LogScale","id":"p390070"},"title":{"type":"object","name":"Title","id":"p390062","attributes":{"text":"08MC036 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p390123","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390117","attributes":{"selected":{"type":"object","name":"Selection","id":"p390118","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390119"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYDj57VKQEwMDQ4LDFTD9vfMqmO67fA1Mq8reANN70m6C6eANt8D0q5+3wXSj810wLdF7L8gJAOX/SV1QAAAA"},"shape":[10],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p390124","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390125"}}},"glyph":{"type":"object","name":"VArea","id":"p390120","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p390121","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p390122","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p390134","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390128","attributes":{"selected":{"type":"object","name":"Selection","id":"p390129","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390130"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYJiZoBToBAAss6mCCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p390135","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390136"}}},"glyph":{"type":"object","name":"VArea","id":"p390131","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p390132","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p390133","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p390144","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390138","attributes":{"selected":{"type":"object","name":"Selection","id":"p390139","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390140"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYLD8OTfQCQC5O8T8CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p390145","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390146"}}},"glyph":{"type":"object","name":"VArea","id":"p390141","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p390142","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p390143","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p390153","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390147","attributes":{"selected":{"type":"object","name":"Selection","id":"p390148","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390149"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYLgR/TzQiYGBIX/pi0AnAJXAWQcQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p390154","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390155"}}},"glyph":{"type":"object","name":"VArea","id":"p390150","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p390151","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p390152","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p390162","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390156","attributes":{"selected":{"type":"object","name":"Selection","id":"p390157","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390158"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFh/7X6QEwMDg5vCQzB9N/MRmC7Z/DjICQCFGTUCIAAAAA=="},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p390163","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390164"}}},"glyph":{"type":"object","name":"VArea","id":"p390159","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p390160","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p390161","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p390171","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390165","attributes":{"selected":{"type":"object","name":"Selection","id":"p390166","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390167"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFjk9izICQAGp4psCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p390172","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390173"}}},"glyph":{"type":"object","name":"VArea","id":"p390168","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p390169","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p390170","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p390180","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390174","attributes":{"selected":{"type":"object","name":"Selection","id":"p390175","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390176"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYAiVsQ92YmBgeJPqEOwEAF5I23AQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p390181","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390182"}}},"glyph":{"type":"object","name":"VArea","id":"p390177","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p390178","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p390179","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p390189","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390183","attributes":{"selected":{"type":"object","name":"Selection","id":"p390184","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390185"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYCgoSgl2YmBgYN+TGuwEABjRqH4QAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p390190","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390191"}}},"glyph":{"type":"object","name":"VArea","id":"p390186","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p390187","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p390188","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.001960000093095002},"y2":{"type":"value","value":0.5079599958658217},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p390198","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p390192","attributes":{"selected":{"type":"object","name":"Selection","id":"p390193","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p390194"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[550],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+1XTUhUURR+gUhEqwgRiUYkXLSRkIiQuIaLaBEhQbRqhghxESIhIhGOLcQiIkLMpoKxHzHLRM0mFZuZzNSy/CkrhpCnhJFJUE1hZvo65zjfmzdvtGgXNLP5uOece37vu/cbTdNyJ4+NKU3TJhr6XjAGZ/cJVkxnjgrO5I8su4accdEwAqX+YWUYhvKFn8Uh+alLy4rKYc/+U0JDbO/s2v1U4m+sHDQRcsLA7rXP2S4GOe+5cpEbjZ+fW+vIXd0kdQFRH1Dk8Ac/hOkHtsf0A3kbY2WP4/JCvhY/2A9EHOrLS97vKih4Jf1MCcUg5CvpV7K3zw3zi4lvqUv06BdhTN8XDMO7a/IJ56ctjg1YcSJzywDPWZ0+0s/yutSkPkX27p2uRyz3Fq17yOiuLeqx6h1Z470sdx7OCYi92uo31xTfe6k3aNVT/C62A+oZbzqlXzP5HSw3Nlf51Dz5O9tz11xb5I6qlE6rXmVn3+E15dXGfibmG1u5fn1oVuSBo4WtEi8t67aJfD5Lqm+oH4Slfq/6QnWvbrpsrr+Tg8bPV9U3w3Akn6hXYfFzxdTTPveONQ3yXbAfsne+rb9lxid7Pb+jmfXKNdVi4k/Koze9JS5fe/6wg387Ij7yBKIerO1529ewB1LZbr/3Ivfvt0j2+p5DFdwPQZ/0oSyChRG5y4awL1a11JfJYyXmfrs/rF/KXI6rT+L/pJqSOZzjOdI5OS/nV9O+uxOY6EPiHCS+g8Q98G/dA0vvZ03kHa0x723c3+/p/dh7pjZyv19Qs/Q+ejweEz/Iu3pJAe3vtP09gx5+39H+7pLqCF/xMRJf6xb+0F0i/EC1D/jUV3pPbm24qfDugi8svctX+f0G/zEqah5yHcJbyN5YGOsw/ZB/4k0+tncc2N7Oevd0ZqtpZ7HXrxXf532/ReYPp3YKfxLexTzgaOEDRnWw6zGj5ENAdfTFIfajbqDFr6NyRvzBj7s6tZf9AB3jm6I8kOoGHxR72kfz64+LuxRH+H560v4h4UVz5U/Eb8834Zmy70+4Ul0kl7zIb8X65tfs15mj6zJnjyck8pq86P8c9rPt1CjbefNOC/93Hc55HclL/l/oDX2DnA/4LfLVRzIGRR9B6TPsCM15uKaCZp2odxkknhut36KXPlF/qY5hRvR52T5xPZwH7IAkj5kf5rqK+r8pWebsPPexm8+jIzR0T/rF59VyTnFeBcmezkcUyT6Y3tImcj7fvA4vtPM5lu8I/iC3xBE76K374Y/jIA+7Ht8lyeV74Dr93i6OK98x8rIj9ln2Sz2IA54O/m5H3AsrIc+f+T8QdljPkT68cJ15bsz/DNx/S7z2As9R+Kx9jfsQevv9CDnuvb9FO/+350n9pN//wyt+Ac2lOJ4wEQAA"},"shape":[550],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p390199","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p390200"}}},"glyph":{"type":"object","name":"Line","id":"p390195","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p390196","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p390197","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p390068","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p390095"},{"type":"object","name":"WheelZoomTool","id":"p390096","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p390097","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p390098","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p390104","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p390103","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p390105","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p390106","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p390107","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p390108","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p390114","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p390113","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p390115"},{"type":"object","name":"SaveTool","id":"p390116"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LogAxis","id":"p390090","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p390091","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p390092"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p390093"}}}],"right":[{"type":"object","name":"Legend","id":"p390126","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p390127","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p390123"}]}},{"type":"object","name":"LegendItem","id":"p390137","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p390134"},{"id":"p390144"},{"id":"p390153"},{"id":"p390162"},{"id":"p390171"},{"id":"p390180"},{"id":"p390189"}]}},{"type":"object","name":"LegendItem","id":"p390201","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p390198"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p390071","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p390072","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p390073","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p390074","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p390075","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p390076","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p390077","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p390078","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p390079","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p390080","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p390081","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p390082","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p390083","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p390084"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p390087","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p390086","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p390085","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p390088"}}}],"center":[{"type":"object","name":"Grid","id":"p390089","attributes":{"axis":{"id":"p390071"}}},{"type":"object","name":"Grid","id":"p390094","attributes":{"dimension":1,"axis":{"id":"p390090"}}}]}},{"type":"object","name":"Div","id":"p390202","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"43eb716c-8f01-4174-a633-c7ffd8bb80dc","roots":{"p390204":"c55f06b3-7e0a-419c-8eac-b24a754b9f4f"},"root_ids":["p390204"]}];
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