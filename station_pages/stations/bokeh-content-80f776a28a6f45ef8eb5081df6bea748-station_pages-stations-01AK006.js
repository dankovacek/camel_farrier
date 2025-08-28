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
    
    
    const element = document.getElementById("fb7214fb-daed-4822-b492-97f046456189");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fb7214fb-daed-4822-b492-97f046456189' but no matching script tag was found.")
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
                  const docs_json = '{"3549e656-9357-4430-a9fd-ae14ef103e7d":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p12933","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p12934"},"y_range":{"type":"object","name":"DataRange1d","id":"p12935"},"x_scale":{"type":"object","name":"LinearScale","id":"p12942"},"y_scale":{"type":"object","name":"LinearScale","id":"p12943"},"title":{"type":"object","name":"Title","id":"p12940"},"renderers":[{"type":"object","name":"TileRenderer","id":"p12967","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p12966","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p12975","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p12969","attributes":{"selected":{"type":"object","name":"Selection","id":"p12970","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p12971"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"zQCoRyVXXMEfo77TIFdcwVXINGfwVlzBpWpL8+tWXMG2id4Bz1ZcwS2WtkbKVlzBG69m0MBWXMGRuz4VvFZcwX3U7p6yVlzB9ODG461WXMHj+XZtpFZcwVgGT7KfVlzBRh//O5ZWXMG9K9eAkVZcwalEhwqIVlzBH1FfT4NWXMENzu0MjVZcwbESGyWEVlzBno+p4o1WXMEVnIEniVZcwQIZEOWSVlzB9v9TiYVWXMEK56P/jlZcwVuJuouKVlzBSgZJSZRWXMGaqF/Vj1ZcwYgl7pKZVlzB/jHG15RWXMHsrlSVnlZcwY7zga2VVlzBfXAQa59WXMGYwRXIkVZcwYU+pIWbVlzB1uC6EZdWXMHqxwqIoFZcwTpqIRScVlzBFmQ+j69WXMFnBlUbq1ZcwWhqM0++VlzBJQBmxKdWXMESffSBsVZcwWQfCw6tVlzBZIPpQcBWXMG2JQDOu1ZcwaSijovFVlzB9kSlF8FWXMHjwTPVylZcwVvOCxrGVlzBSUua189WXMGZ7bBjy1ZcwXbnzd7eVlzB7fOlI9pWXMHacDTh41ZcwSsTS23fVlzBGJDZKulWXMFqMvC25FZcwXwZQC3uVlzBzrtWuelWXMG8OOV281ZcwQ7b+wLvVlzB+1eKwPhWXMFzZGIF9FZcwWHh8ML9VlzBs4MHT/lWXMGgAJYMA1dcwUNFwyT6VlzBVSwTmwNXXMGnzikn/1ZcwZRLuOQIV1zB5u3OcARXXMHUal0uDldcwe67YosAV1zB3DjxSApXXMEs2wfVBVdcwUDCV0sPV1zBkGRu1wpXXMFb2xkQKFdcwdHn8VQjV1zBreEO0DZXXMH+gyVcMldcwf7nA5BFV1zBoiwxqDxXXMGRqb9lRldcwVhYrjY9V1zBRtU89EZXXMGYd1OAQldcwXNxcPtVV1zBOyBfzExXXMEWGnxHYFdcwWi8ktNbV1zBVzkhkWVXXMEe6A9iXFdcwQxlnh9mV1zBXge1q2FXXMFLhENpa1dcwcKQG65mV1zBnYo4KXpXXMHvLE+1dVdcwd2p3XJ/V1zBU7a1t3pXXMFBM0R1hFdcwZPVWgGAV1zBglLpvolXXMGbo+4bfFdcwXadC5ePV1zBxj8iI4tXXMG1vLDglFdcwSrJiCWQV1zB9T80Xq1XXMFT+wZGtldcwS71I8HJV1zBf5c6TcVXXMGSforDzldcwYdlzmfBV1zBZMPJFuhXXMG0ZeCi41dcwaTibmDtV1zB9ISF7OhXXMEGCPcu31dcwViqDbvaV1zBaS1//dBXXMHgOVdCzFdcwc1SB8zCV1zBRF/fEL5XXMEweI+atFdcwaeEZ9+vV1zBlAH2nLlXXMHoowwptVdcwbAauGHSV1zBJyeQps1XXMEVpB5k11dcwWdGNfDSV1zBVMPDrdxXXMEbcrJ+01dcwQrvQDzdV1zBdeJcJctXXMFj+wyvwVdcwXtMEgy0V1zBjM+DTqpXXMHecZrapVdcwc1SB8zCV1zBHvUdWL5XXMEOcqwVyFdcwSfDsXK6V1zBAr3O7c1XXMFgeKHV1ldcwRZs28v9V1zBxsnEPwJYXMG0RlP9C1hcwQXpaYkHWFzBGNC5/xBYXMG6FOcXCFhcwaiRddURWFzBcEBkpghYXMFLOoEhHFhcwZ/cl60XWFzBjFkmayFYXME5tw/fJVhcwSY0npwvWFzB1pGHEDRYXMGxi6SLR1hcwWHpjf9LWFzBTmYcvVVYXMH9wwUxWlhcwepAlO5jWFzBmp59YmhYXMFS9pWMolhcwWtHm+mUWFzBWMQpp55YXMH8CFe/lVhcweuF5XyfWFzBmePO8KNYXMF2QcqfylhcwSKfsxPPWFzB8Hk9gP9YXMF5bWU7BFlcwYpUtbENWVzBLZniyQRZXMHn8PrzPllcwZVO5GdDWVzBcEgB41ZZXMHC6hdvUllcwZ5IEx55WVzBTab8kX1ZXME8I4tPh1lcweqAdMOLWVzBftKpaNlZXMHPdMD01Flcwb5VLebxWVzBR0lVofZZXMFJrTPVCVpcwZlPSmEFWlzBY8b1mSJaXMERJN8NJ1pcwROIvUE6WlzBnHvl/D5aXMGwYjVzSFpcwTlWXS5NWlzBTD2tpFZaXMGFjr7TX1pcwXILTZFpWlzBIGk2BW5aXMEP5sTCd1pcwbxDrjZ8WlzBq8A89IVaXMFZHiZoilpcwUebtCWUWlzB9fidmZhaXMHjdSxXolpcwfCO6LKvWlzBpoIiqdZaXMH4JDk10lpcwecFpibvWlzBlWOPmvNaXMGD4B1Y/VpcwTM+B8wBW1zBILuViQtbXMHOGH/9D1tcwasSnHgjW1zBWXCF7CdbXMFH7ROqMVtcwfZK/R02W1zB5MeL2z9bXMGRJXVPRFtcwW8fkspXW1zBG317PlxbXMEJ+gn8ZVtcwblX829qW1zBptSBLXRbXMEEkFQVfVtcwfCoBJ9zW1zBTmTXhnxbXMFg50jJcltcwRBFMj13W1zBIWTFS1pbXMF9H5gzY1tcwaEle7hPW1zBKxmjc1RbXMFPH4b4QFtcwf58b2xFW1zBDwDhrjtbXMFIUfLdRFtcwW1X1WIxW1zBGrW+1jVbXMFQ2jRqBVtcwf43Ht4JW1zBELuPIABbXMFJDKFPCVtcwVyPEpL/WlzBCu37BQRbXMEccG1I+lpcwaVjlQP/WlzB3ezpyuFaXMGJStM+5lpcwb9vSdK1WlzBbc0yRrpaXMFtaVQSp1pcwRzHPYarWlzBQM0gC5haXMHvKgp/nFpcwe/GK0uJWlzBnSQVv41aXMGvp4YBhFpcwV0FcHWIWlzBXaGRQXVaXMEK/3q1eVpcwUGIz3xcWlzB7+W48GBaXMHd/mh6V1pcwYtcUu5bWlzBsGI1c0haXMFewB7nTFpcwV1cQLM5WlzBDLopJz5aXMEfPZtpNFpcwc2ahN04WlzBzTamqSVaXMF6lI8dKlpcwZ6acqIWWlzBTfhbFhtaXMFfe81YEVpcwehu9RMWWlzB+/FmVgxaXMGpT1DKEFpcwc5VM0/9WVzBV0lbCgJaXMGO0q/R5FlcwTwwmUXpWVzBlFvyXaVZXMHn/QjqoFlcweaZKraNWVzBXaYC+4hZXMFdQiTHdVlcwa3kOlNxWVzB0uod2F1ZXMEijTRkWVlcwVkWiSs8WVzBP8WDzklZXMFky2ZTNllcwbRtfd8xWVzBxYwQ7hRZXME9megyEFlcwYPd8dTCWFzBMjvbSMdYXMFFvkyLvVhcwfMbNv/BWFzB4DTmiLhYXMGPks/8vFhcwbOYsoGpWFzBYvab9a1YXMFgkr3BmlhcwRDwpjWfWFzBInMYeJVYXMHP0AHsmVhcweFTcy6QWFzBa0eb6ZRYXMF9ygwsi1hcwSso9p+PWFzBTsr68GhYXMH+J+RkbVhcwWpy0IsMWFzBuhTnFwhYXMEnw7FyuldcwdUgm+a+V1zB6KMMKbVXXMFxlzTkuVdcwYMapiawV1zBMHiPmrRXXMFVfnIfoVdcwd5xmtqlV1zBFPvuoYhXXMH9qelElldcwQ4tW4eMV1zBGkYX45lXXMEGX8dskFdcwWMamlSZV1zBUZcoEqNXXMHoowwptVdcwfomfmurV1zBBUA6x7hXXMHxWOpQr1dcwaC208SzV1zBszlFB6pXXMFhly57rldcwWEzUEebV1zBD5E5u59XXMEiFKv9lVdcwdBxlHGaV1zB35AngH1XXMGP7hD0gVdcwbL083huV1zBPegbNHNXXMFPa412aVdcwZPVWgGAV1zBglLpvolXXME6yY6Om1dcwSjiPhiSV1zB5Fjk56NXXMHi9AW0kFdcwT6w2JuZV1zBUTNK3o9XXMGh1WBqi1dcwcbbQ+93V1zBFn5ae3NXXMEWGnxHYFdcwcV3ZbtkV1zB6X1IQFFXXMGY2zG0VVdcwc0AqEclV1zB"},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p12976","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p12977"}}},"glyph":{"type":"object","name":"Patch","id":"p12972","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p12973","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p12974","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p12987","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p12981","attributes":{"selected":{"type":"object","name":"Selection","id":"p12982","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p12983"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p12988","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p12989"}}},"glyph":{"type":"object","name":"Scatter","id":"p12984","attributes":{"x":{"type":"value","value":-7428686.91869225},"y":{"type":"value","value":5793629.525955908},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p12985","attributes":{"x":{"type":"value","value":-7428686.91869225},"y":{"type":"value","value":5793629.525955908},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p12986","attributes":{"x":{"type":"value","value":-7428686.91869225},"y":{"type":"value","value":5793629.525955908},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p12997","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p12991","attributes":{"selected":{"type":"object","name":"Selection","id":"p12992","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p12993"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p12998","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p12999"}}},"glyph":{"type":"object","name":"Scatter","id":"p12994","attributes":{"x":{"type":"value","value":-7428706.956200592},"y":{"type":"value","value":5793632.735777869},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p12995","attributes":{"x":{"type":"value","value":-7428706.956200592},"y":{"type":"value","value":5793632.735777869},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p12996","attributes":{"x":{"type":"value","value":-7428706.956200592},"y":{"type":"value","value":5793632.735777869},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p12941","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p12954"},{"type":"object","name":"WheelZoomTool","id":"p12955","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p12956","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p12957","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p12963","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p12962","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p12964"},{"type":"object","name":"SaveTool","id":"p12965"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p12949","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p12950","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p12951","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p12952"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p12944","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p12945","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p12946","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p12947"}}}],"center":[{"type":"object","name":"Grid","id":"p12948","attributes":{"axis":{"id":"p12944"}}},{"type":"object","name":"Grid","id":"p12953","attributes":{"dimension":1,"axis":{"id":"p12949"}}},{"type":"object","name":"Legend","id":"p12978","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p12979","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p12975"}]}},{"type":"object","name":"LegendItem","id":"p12990","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p12987"}]}},{"type":"object","name":"LegendItem","id":"p13000","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p12997"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"3549e656-9357-4430-a9fd-ae14ef103e7d","roots":{"p12933":"fb7214fb-daed-4822-b492-97f046456189"},"root_ids":["p12933"]}];
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