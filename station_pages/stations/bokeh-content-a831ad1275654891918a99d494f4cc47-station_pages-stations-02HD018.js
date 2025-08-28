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
    
    
    const element = document.getElementById("fa2b1dce-b6b2-4d56-a770-25eefa86e5db");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fa2b1dce-b6b2-4d56-a770-25eefa86e5db' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.6.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.6.0.min.js"];
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
                  const docs_json = '{"3b91ddda-19a1-45e1-988a-adb30200fe6e":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p281500","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p281501"},"y_range":{"type":"object","name":"DataRange1d","id":"p281502"},"x_scale":{"type":"object","name":"LinearScale","id":"p281509"},"y_scale":{"type":"object","name":"LinearScale","id":"p281510"},"title":{"type":"object","name":"Title","id":"p281507"},"renderers":[{"type":"object","name":"TileRenderer","id":"p281534","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p281533","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p281542","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p281536","attributes":{"selected":{"type":"object","name":"Selection","id":"p281537","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p281538"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"MIj89xbiVEEciJUJIeJUQQNJnVMe4lRBOhf62TLiVEH70dzAL+JUQUfZQ0dE4lRBMt9IkUHiVEHJWboXVuJUQa/1mf5S4lRBeqkVhWfiVEFf9BfPZOJUQWNqU2eD4lRBMYxTsYDiVEFaZKdJn+JUQQonfcSW4lRBlEXCsoziVEEtj5wthOJUQeaQwrh54lRBv3LDAnfiVEHlY+2NbOJUQe5K79dp4lRBBzicRCziVEEsGqOOKeJUQZymB30f4lRBRxjsYxziVEG2blRSEuJUQXCuRkgB4lRBAnOSzhXiVEEiwHe1EuJUQUf1Miod4lRBn5sXERriVEGsA9WFJOJUQU7OtTEW4lRBlc9pqwHiVEFIK2Sh8OFUQeQi8rL64VRB+1v7d+/hVEEC/oiJ+eFUQVjOk9P24VRBAvQGwuzhVEEPyehU2+FUQdBxk8nl4VRBZP98sOLhVEEA2ykl7eFUQUKpHn3Q4VRBixTG8drhVEHjl7DY1+FUQQU2Wk3i4VRBM+1QftzhVEE/HYcE8eFUQQZjezXr4VRBXsoqqvXhVEES8BKR8uFUQUqKxAX94VRB29G2NvfhVEFwrkZIAeJUQSrlUJL+4VRBx9/iowjiVEGRhOztBeJUQQ/oo2IQ4lRBtPiSkwriVEH6MOQZH+JUQW6ryAAc4lRBWh7/k1niVEHJfQLeVuJUQZynBQqz4lRBcwjd8K/iVEGqQ493xOJUQdlaisHB4lRBzwlHSNbiVEGoSxsv0+JUQfMGEKTd4lRB+KHjitriVEHO7KuG+eJUQZ4PfW324lRBqlN84gDjVEGkz0zJ/eJUQTKoEF4741RBnogCqDjjVEF76O65QuNUQec24ANA41RBBrXOFUrjVEE+r4lGRONUQUo4oLtO41RBOc9pokvjVEFmi4IXVuNUQXNh25xe41RBUK7SrmjjVEHqvx1+buNUQaPnQPN441RBQzuieIHjVEFM9GAgyeNUQU3VBlHD41RBfx8bY83jVEGu6nYy0+NUQVYtuKfd41RBRGNpmevjVEGH8bEO9uNUQf2+zsT441RBMT0bOgPkVEGQGFemCORUQT1WqBsT5FRBJmTH0RXkVEHwwxPzSORUQUSdYAxM5FRBKqwElGDkVEFhuylKY+RUQVNZ52uW5FRBsw87hZnkVEGudmQfuORUQT1PkNW65FRBx9MWS8XkVEG4sUMByORUQWUKoxPS5FRB+CIq49fkVEGMV7lY4uRUQRd26A7l5FRBVFTmlvnkVEFMnrXg9uRUQcY0kgUL5VRBwSRgTwjlVEED/LvnReVUQZPS8p1I5VRB4W21OGflVEHCTVUIbeVUQWYs5Bp35VRBOstLNHrlVEH5dN5GhOVUQZs+R2CH5VRB/cRA+6XlVEGcDn+xqOVUQSG1TCez5VRBOQSM3bXlVEH+94ju3uVUQR+sy6Th5VRBOFuqGuzlVEF2fKSg9OVUQYrjrMQn5lRBoD31eirmVEH/tenwNOZUQayKcdcx5lRBDhQA6VrmVEE1rTgZVeZUQSTlOY9f5lRBHYOq71PmVEGGxX94aOZUQVzI/JFr5lRBDA2wt3/mVEE+VhJLeuZUQePC7l2E5lRBQHCfp4HmVEHC+326i+ZUQXntkGR95lRBHDOe2ofmVEGErh7BhOZUQecnLjeP5lRB4P3dgIzmVEF5iqYvteZUQYxuU3my5lRBrwl5i9vmVEEFGvJx2OZUQSpORIQB51RBpEbrzf7mVEHJYy1qHedUQUsy0rMa51RBCtXcxiTnVEFcEYEQIudUQdef979K51RBFBqqOULnVEGfQvKvTOdUQfLkyIk451RBhicOAEPnVEHVLSAwPedUQXVqfrlR51RB4QDtn07nVEEue1UpY+dUQbHg9HJg51RB13iMD3/nVEFRtClZfOdUQYIJreKQ51RB4GURmZPnVEG63T6snedUQTzhPHyj51RBrCOi8q3nVEG+7Al5tudUQSbV7BXV51RBNmSDX9LnVEEKkkaGBehUQeD6szwI6FRBXWM3sxLoVEHi0aVpFehUQdGx+Hwf6FRBCEoMTSXoVEEoy0h0WOhUQQ8p1b1V6FRB5olY5YjoVEGaJeEuhuhUQTKFVEKQ6FRBo47ci43oVEF8DVKfl+hUQamE2eiU6FRBI68/JNLoVEF1UBbnxuhUQSNXnPrQ6FRB+FofRM7oVEHygKdX2OhUQYPyKaHV6FRBJ9PqF+DoVEEp9AMu1+hUQZVLxaTh6FRBUGwQi97oVEHx99MB6ehUQVIHU7jr6FRBmYQaL/boVEHH5Bqc++hUQZgj5xIG6VRBZXRoyQjpVEHnpDhAE+lUQXn7uvYV6VRBwstXCiDpVEFLDJbaJelUQR/wblEw6VRBIvE02DjpVEFDz9vrQulUQYKVmQVG6VRB/z9EGVDpVEFzforpVelUQYi9Of1f6VRBhfKgJHTpVEFKwbOtaelUQd2/hzRy6VRBhH53q3zpVEFzAwJif+lUQWEtXNdq6VRBB34d8W3pVEEAKDJ6Y+lUQXLR8pNm6VRBV96mp3DpVEEDpMn+fulUQeN0Eet06VRBSTHocX3pVEE6N/j6culUQbNCRMt46VRB14/93oLpVEFohuxPlOlUQfOz9diJ6VRB+YxFqY/pVEGgcQW9melUQSHrytac6VRBaiKOYbHpVEGgvhwYtOlUQfUj5yu+6VRBwdivRcHpVEGcCn5Zy+lUQabqR3PO6VRBMc/umuLpVEFSv7q05elUQQhyk8jv6VRBySaIT/jpVEG//qw77ulUQQ5UQPLw6VRBhktn3ubpVEGADvqU6elUQY7TRPbK6VRBCmzVrM3pVEFUlAEiuelUQfQQIgzC6VRBio0dlbfpVEH5pKxLuulUQa9d4zew6VRB/JDIvrjpVEGCbc01w+lUQcRCt7zL6VRB5UrjuqzpVEGkc6rUr+lUQUxkq12l6VRBEzVV/rDpVEGfzFWHpulUQY1oHKGp6VRBdTQfKp/pVEGj1apRs+lUQfm6qtqo6VRBtotx9KvpVEGgxLnyjOlUQbYbfgyQ6VRBYxjoWEjpVEHNjW4PS+lUQUkrRHEs6VRBUHbIJy/pVEG4SicUJelUQR3yLoEq6VRBuxIh4wvpVEFWhJ8sCelUQQEjP6L06FRBjmK/6/HoVEEtb+tMtOhUQWsQwHyu6FRBl/pDaaToVEFyiZRPoehUQcg/HDyX6FRBqb6jhZToVEE9fPkOiuhUQYQj1T6E6FRBRTplK3roVEHxr9vhfOhUQfbbZURe6FRBZyfa+mDoVEEgwnxdQuhUQfHHI3dF6FRBqmA27TDoVEGJJ6ejM+hUQdeCoHwA6FRBoYcNMwPoVEGIo4wf2udUQTBrKjnd51RBVgO3wtLnVEHiI1Tc1edUQU1LqFLB51RBn2kQCcTnVEGCCa3ikOdUQeBlEZmT51RBKtXmhYnnVEFUn0o8jOdUQbEtIimC51RBCCvjZY3nVEGV0UHcl+dUQXi4ppKa51RBN1AJCaXnVEGJTjz8sudUQU00pnK951RB1MQR+cXnVEGSwE0M0OdUQeIjVNzV51RBwwwMZurnVEF+0RY28OdUQRH5Xkn651RBE1/ZzwLoVEGawo68+OdUQTLOZyn+51RB1DLonwjoVEE82VVWC+hUQdnHCEMB6FRBROGEyQnoVEFgiLo/9edUQfitJvb351RB6zHf4u3nVEFIxUqZ8OdUQRI4jw/c51RBtistKd/nVEGr3HufyudUQbCz5FXN51RBVJQIua7nVEFAQW9vsedUQacXPFyn51RBarc7LK3nVEFXsNa1oudUQbNuPGyl51RBMbsMWZvnVEFU+2/fo+dUQSa6QMyZ51RBN1AJCaXnVEFHudn1mudUQTzhPHyj51RB/+xuj63nVEHcYkCcvudUQWltCYm051RBxY1wP7fnVEFXsNa1oudUQUuOb8+l51RBMbsMWZvnVEEK8qRynudUQeVSRPyT51RBJrpAzJnnVEFU+2/fo+dUQWIJb3+v51RBN1AJCaXnVEEHjQjZqudUQeG3POy051RB0Jg+vLrnVEH7rqIypudUQTzhPHyj51RBOcDaBZnnVEEd+HVPludUQU3+dDxt51RBmx4JVnDnVEFz55jMW+dUQZsl+YJe51RBbGaT+UnnVEEWwDRDR+dUQQo37sw851RBUpaQFjrnVEHCz38DMOdUQTpj8eks51RBWGjk1iLnVEHJJle9H+dUQagAEyEB51RB0wC6av7mVEEaQ4n08+ZUQdtIMT7x5lRB4341K+fmVEFyh60R5OZUQQ6Jtf7Z5lRBsLULtdzmVEHljhN9n+ZUQd4xZTOi5lRBqu+CIXnmVEEQmdHXe+ZUQV4/TrNI5lRBV3HIzEvmVEHpVp8yDuZUQVq15egQ5lRBuEHcOujlVEHT4moh5eVUQQ1UvA7b5VRBIiwKP9XlVEGMMGAsy+VUQZwpcKbC5VRBlOCdMLjlVEFWY156teVUQUkfAo2/5VRBazaCILrlVEH4ebKqr+VUQeylc/Ss5VRBAdqnfqLlVEFtC2rIn+VUQQYwolKV5VRB6mZlnJLlVEFZnM6JiOVUQYWdCkCL5VRBfD23t3blVEHh03wBdOVUQSsQwotp5VRBaXsopWzlVEE+628vYuVUQYOv1Uhl5VRB4VIf01rlVEEscITsXeVUQTgUd2Yq5VRBDufXfy3lVEE9OTIKI+VUQZ+Vyp0d5VRBv6cpKBPlVEF6tphYDeVUQadMKEYD5VRBZ9b2jwDlVEG+mF4a9uRUQegnLmTz5FRBhdqZ7ujkVEF4OTuC4+RUQURRSvrO5FRBm7PEKsnkVEGFhESTi+RUQddVHN2I5FRB+6FgVXTkVEE8U7Fud+RUQbAWQvls5FRBTEccQ2rkVEEky5MSDuRUQSN1ssgQ5FRBzMOKtgbkVEHdDkSdA+RUQWCRuAPl41RBqgzUuefjVEFWLbin3eNUQd95nfHa41RBKdhHasbjVEFfudXkveNUQfBz6PbH41RBh5hdu7zjVEF2/W/NxuNUQW4PVxfE41RBQHEdornjVEGU1e01tONUQcH2uMCp41RBT9NNO6HjVEEzP0Ypl+NUQdprCRCU41RBuobkZGvjVEHb+JmVZeNUQR6bfCBb41RBcgVsaljjVEGniWF8YuNUQWVASzZG41RBZEM3wTvjVEGkKhtVNuNUQcnsC+Ar41RBHUrycybjVEFhy+f+G+NUQS0a3EgZ41RBeRv4wQTjVEF0NQJ4B+NUQe6+gM3e4lRB9eeHg+HiVEESosT8zOJUQbFpyrLP4lRB6DtMGrHiVEFh2k/Qs+JUQdicjL6p4lRBWamPdKziVEE7/HfKg+JUQTGMU7GA4lRBHgWfn3biVEGTv3uGc+JUQXsrHWNf4lRBPGveelbiVEEnCjZpTOJUQWj7H+RD4lRBjjNZbzniVEGKEF+5NuJUQfjSv6cs4lRBLBqjjiniVEGcpgd9H+JUQTCI/PcW4lRB"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p281543","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p281544"}}},"glyph":{"type":"object","name":"Patch","id":"p281539","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p281540","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p281541","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p281554","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p281548","attributes":{"selected":{"type":"object","name":"Selection","id":"p281549","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p281550"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p281555","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p281556"}}},"glyph":{"type":"object","name":"Scatter","id":"p281551","attributes":{"x":{"type":"value","value":-8654474.812392933},"y":{"type":"value","value":5474702.5885795355},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p281552","attributes":{"x":{"type":"value","value":-8654474.812392933},"y":{"type":"value","value":5474702.5885795355},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p281553","attributes":{"x":{"type":"value","value":-8654474.812392933},"y":{"type":"value","value":5474702.5885795355},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p281564","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p281558","attributes":{"selected":{"type":"object","name":"Selection","id":"p281559","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p281560"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p281565","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p281566"}}},"glyph":{"type":"object","name":"Scatter","id":"p281561","attributes":{"x":{"type":"value","value":-8654491.510316553},"y":{"type":"value","value":5474718.079447145},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p281562","attributes":{"x":{"type":"value","value":-8654491.510316553},"y":{"type":"value","value":5474718.079447145},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p281563","attributes":{"x":{"type":"value","value":-8654491.510316553},"y":{"type":"value","value":5474718.079447145},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p281508","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p281521"},{"type":"object","name":"WheelZoomTool","id":"p281522","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p281523","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p281524","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p281530","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p281529","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p281531"},{"type":"object","name":"SaveTool","id":"p281532"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p281516","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p281517","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p281518","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p281519"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p281511","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p281512","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p281513","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p281514"}}}],"center":[{"type":"object","name":"Grid","id":"p281515","attributes":{"axis":{"id":"p281511"}}},{"type":"object","name":"Grid","id":"p281520","attributes":{"dimension":1,"axis":{"id":"p281516"}}},{"type":"object","name":"Legend","id":"p281545","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p281546","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p281542"}]}},{"type":"object","name":"LegendItem","id":"p281557","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p281554"}]}},{"type":"object","name":"LegendItem","id":"p281567","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p281564"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"3b91ddda-19a1-45e1-988a-adb30200fe6e","roots":{"p281500":"fa2b1dce-b6b2-4d56-a770-25eefa86e5db"},"root_ids":["p281500"]}];
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