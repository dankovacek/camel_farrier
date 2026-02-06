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
    
    
    const element = document.getElementById("ddfe0b61-1881-4b72-b6b1-caf8448da26f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ddfe0b61-1881-4b72-b6b1-caf8448da26f' but no matching script tag was found.")
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
                  const docs_json = '{"ccaf80e5-5b0d-45a9-96c4-d763715f5dbb":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p57007","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p57008"}}},"roots":[{"type":"object","name":"DataTable","id":"p57039","attributes":{"width":930,"source":{"type":"object","name":"ColumnDataSource","id":"p57009","attributes":{"selected":{"type":"object","name":"Selection","id":"p57010","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p57011"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3Dhw2AMAwAsLDLLGX/fym25IiIytrG1s7eweTo5Ozi6mZ2t3h4enn7+Pr5A/KsMXdkAAAA"},"shape":[25],"dtype":"int32","order":"little"}],["station_id",{"type":"ndarray","array":["07AF010","07DB005","07EE009","07FD014","07GA002","07JC003","07QC005","08GA065","08LB053","08LE067","08NE067","08NJ134","08NM133","08NM134","09DA001","09DC004","09EA005","09FA001","09FC001","10CD003","10ED009","10FB005","10JA004","10KC001","10LA002"],"shape":[25],"dtype":"object","order":"little"}],["jaccard_index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/9v8qnir6O/39uvcH1aJrHtvvxnKn2+jc2XWs/f2Nn4XJ8b8Q9BRX3fe6vr73h6k2v3hO/v3Fq7uRT/f28ft8uRh0n5rv89gppbE1Hf2NZ82BGTPem9/r7Cr78mn9/ZB6gs6Nzx8by+3/IWH3n+EOTA+Axh8gNMwcf45xou2mL+znxTzz/nXW4Q7YPIVcxYp7/zz3h4AnyrIjcgAAAA="},"shape":[25],"dtype":"float64","order":"little"}],["percent_area_diff",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/6sWWef+sKrFvhpMT9kPpWF8ewYogPBboPIt9rNmgsBLKL3S/vriAluucGUHWy4Q6xZU/KP9DrnW14E71kHNW4LTPKhwAwMqgPKZDiwpAJl8wB5dPcydAMZGyEHIAAAA"},"shape":[25],"dtype":"float64","order":"little"}],["old_area_km2",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wHIADf/yXa+nxozZkDarPpc7fmQQDtwzojSxHNAZohjXdyEZEA730+Nl+mFQPKwUGsal7pAQj7o2eyIrUA0ETY8vdIFQLraiv1l/2JAwOyePCwkMkAQejarPlf1P7Hh6ZWyjC5AS1mGONadRkCiRbbz/exBQNlfdk8O4LJAJXUCmqi3pEAvbqMBvFmJQIEExY9hmbpA07zjFA0Uy0Do2az6XCxxQIY41sVtOmBAescpOhKvk0DUmuYdp5+iQCxlGeLgtcVAVHQkl69Q0kAec6uTyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["new_area_km2",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wHIADf/umsJ+aAzZkApyxDH+viQQAAAAAAAxnNAw9MrZRmGZECdEaW9wemFQI0o7Q0+lrpAiGNd3IaJrUBWfa62Yv8FQJZDi2znAWNA2qz6XG3lM0BZhjjWxW31P4ofY+5a4i5Ab/CFyVShRkAQ6bevA+9BQOkmMQgc4LJAescpOjK3pECu2F92T1qJQDQRNjxdmbpA4JwRpRUUy0AqqRPQRCxxQP2H9NvXuV9A4umVsoy1k0Aydy0h/5+iQApoImzQtcVA3+ALk7lR0kAPVSIVyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["absolute_area_diff_km2",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+OUnheneXqCvYmgmc3eoHP2HgF/JIqvb7I/dmdrS82FxfZ8+wxmaklMtZ+2iadwTfdr+9CDK5b4OVyGqp9mH3vHjbmCe4v9YsY9rEIif+x3efIwabeX2SeU+cuJZR21X6y880/7l9n2ZYXSvA90J9gHT1PsKy1cbX/1eZb2t+ln7a3v+/dOz9tkH7HC9Ky130T7x2ZSB6IVNtq/5QVZXGH/X/Hvt9IEdgf1BZ0bHr78af8oQnz7RYZj9npgiQP2lltOlO2bL+AAAMTqFPbIAAAA"},"shape":[25],"dtype":"float64","order":"little"}],["page_link",{"type":"ndarray","array":["07AF010","07DB005","07EE009","07FD014","07GA002","07JC003","07QC005","08GA065","08LB053","08LE067","08NE067","08NJ134","08NM133","08NM134","09DA001","09DC004","09EA005","09FA001","09FC001","10CD003","10ED009","10FB005","10JA004","10KC001","10LA002"],"shape":[25],"dtype":"object","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p57043","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p57044"}}},"columns":[{"type":"object","name":"TableColumn","id":"p57012","attributes":{"field":"station_id","title":"Station ID","width":100,"formatter":{"type":"object","name":"StringFormatter","id":"p57013"},"editor":{"type":"object","name":"StringEditor","id":"p57014"}}},{"type":"object","name":"TableColumn","id":"p57016","attributes":{"field":"jaccard_index","title":"Jaccard Index","width":120,"formatter":{"type":"object","name":"NumberFormatter","id":"p57015","attributes":{"format":"0.0000"}},"editor":{"type":"object","name":"StringEditor","id":"p57018"}}},{"type":"object","name":"TableColumn","id":"p57020","attributes":{"field":"percent_area_diff","title":"Area Change (%)","width":130,"formatter":{"type":"object","name":"NumberFormatter","id":"p57019","attributes":{"format":"0.00"}},"editor":{"type":"object","name":"StringEditor","id":"p57022"}}},{"type":"object","name":"TableColumn","id":"p57024","attributes":{"field":"old_area_km2","title":"Old Area (km\\u00b2)","width":120,"formatter":{"type":"object","name":"NumberFormatter","id":"p57023","attributes":{"format":"0.0"}},"editor":{"type":"object","name":"StringEditor","id":"p57026"}}},{"type":"object","name":"TableColumn","id":"p57028","attributes":{"field":"new_area_km2","title":"New Area (km\\u00b2)","width":120,"formatter":{"type":"object","name":"NumberFormatter","id":"p57027","attributes":{"format":"0.0"}},"editor":{"type":"object","name":"StringEditor","id":"p57030"}}},{"type":"object","name":"TableColumn","id":"p57032","attributes":{"field":"absolute_area_diff_km2","title":"|\\u0394Area| (km\\u00b2)","width":120,"formatter":{"type":"object","name":"NumberFormatter","id":"p57031","attributes":{"format":"0.00"}},"editor":{"type":"object","name":"StringEditor","id":"p57034"}}},{"type":"object","name":"TableColumn","id":"p57036","attributes":{"field":"page_link","title":"Go to Page","width":100,"formatter":{"type":"object","name":"HTMLTemplateFormatter","id":"p57035","attributes":{"template":"&lt;a href=\\"../station_pages/stations/&lt;%= value %&gt;.html\\" target=\\"_blank\\" style=\\"color: #2563eb;\\"&gt;View \\u2192&lt;/a&gt;"}},"editor":{"type":"object","name":"StringEditor","id":"p57038"}}}]}}]}}';
                  const render_items = [{"docid":"ccaf80e5-5b0d-45a9-96c4-d763715f5dbb","roots":{"p57039":"ddfe0b61-1881-4b72-b6b1-caf8448da26f"},"root_ids":["p57039"]}];
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