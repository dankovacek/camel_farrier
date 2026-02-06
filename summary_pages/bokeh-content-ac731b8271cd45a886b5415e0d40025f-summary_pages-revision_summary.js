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
    
    
    const element = document.getElementById("dd1c2313-68c9-4590-ae3b-4d49d42086ab");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dd1c2313-68c9-4590-ae3b-4d49d42086ab' but no matching script tag was found.")
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
                  const docs_json = '{"523597f1-a0cb-4a5e-9199-2da15bf5b9d2":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1006","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1007"}}},"roots":[{"type":"object","name":"Figure","id":"p1011","attributes":{"width":800,"x_range":{"type":"object","name":"DataRange1d","id":"p1012"},"y_range":{"type":"object","name":"DataRange1d","id":"p1013"},"x_scale":{"type":"object","name":"LinearScale","id":"p1021"},"y_scale":{"type":"object","name":"LinearScale","id":"p1022"},"title":{"type":"object","name":"Title","id":"p1014"},"renderers":[{"type":"object","name":"TileRenderer","id":"p1038","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p1037","attributes":{"url":"https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png","max_zoom":20,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors &amp;copy; &lt;a href=\\"https://carto.com/attributions\\"&gt;CARTO&lt;/a&gt;"}}}},{"type":"object","name":"GlyphRenderer","id":"p1049","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1040","attributes":{"selected":{"type":"object","name":"Selection","id":"p1041","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1042"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3Dhw2AMAwAsLDLLGX/fym25IiIytrG1s7eweTo5Ozi6mZ2t3h4enn7+Pr5A/KsMXdkAAAA"},"shape":[25],"dtype":"int32","order":"little"}],["station_id",{"type":"ndarray","array":["07AF010","07DB005","07EE009","07FD014","07GA002","07JC003","07QC005","08GA065","08LB053","08LE067","08NE067","08NJ134","08NM133","08NM134","09DA001","09DC004","09EA005","09FA001","09FC001","10CD003","10ED009","10FB005","10JA004","10KC001","10LA002"],"shape":[25],"dtype":"object","order":"little"}],["jaccard_index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/9v8qnir6O/39uvcH1aJrHtvvxnKn2+jc2XWs/f2Nn4XJ8b8Q9BRX3fe6vr73h6k2v3hO/v3Fq7uRT/f28ft8uRh0n5rv89gppbE1Hf2NZ82BGTPem9/r7Cr78mn9/ZB6gs6Nzx8by+3/IWH3n+EOTA+Axh8gNMwcf45xou2mL+znxTzz/nXW4Q7YPIVcxYp7/zz3h4AnyrIjcgAAAA="},"shape":[25],"dtype":"float64","order":"little"}],["percent_area_diff",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/6sWWef+sKrFvhpMT9kPpWF8ewYogPBboPIt9rNmgsBLKL3S/vriAluucGUHWy4Q6xZU/KP9DrnW14E71kHNW4LTPKhwAwMqgPKZDiwpAJl8wB5dPcydAMZGyEHIAAAA"},"shape":[25],"dtype":"float64","order":"little"}],["absolute_area_diff_km2",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+OUnheneXqCvYmgmc3eoHP2HgF/JIqvb7I/dmdrS82FxfZ8+wxmaklMtZ+2iadwTfdr+9CDK5b4OVyGqp9mH3vHjbmCe4v9YsY9rEIif+x3efIwabeX2SeU+cuJZR21X6y880/7l9n2ZYXSvA90J9gHT1PsKy1cbX/1eZb2t+ln7a3v+/dOz9tkH7HC9Ky130T7x2ZSB6IVNtq/5QVZXGH/X/Hvt9IEdgf1BZ0bHr78af8oQnz7RYZj9npgiQP2lltOlO2bL+AAAMTqFPbIAAAA"},"shape":[25],"dtype":"float64","order":"little"}],["old_area_km2",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wHIADf/yXa+nxozZkDarPpc7fmQQDtwzojSxHNAZohjXdyEZEA730+Nl+mFQPKwUGsal7pAQj7o2eyIrUA0ETY8vdIFQLraiv1l/2JAwOyePCwkMkAQejarPlf1P7Hh6ZWyjC5AS1mGONadRkCiRbbz/exBQNlfdk8O4LJAJXUCmqi3pEAvbqMBvFmJQIEExY9hmbpA07zjFA0Uy0Do2az6XCxxQIY41sVtOmBAescpOhKvk0DUmuYdp5+iQCxlGeLgtcVAVHQkl69Q0kAec6uTyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["new_area_km2",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wHIADf/umsJ+aAzZkApyxDH+viQQAAAAAAAxnNAw9MrZRmGZECdEaW9wemFQI0o7Q0+lrpAiGNd3IaJrUBWfa62Yv8FQJZDi2znAWNA2qz6XG3lM0BZhjjWxW31P4ofY+5a4i5Ab/CFyVShRkAQ6bevA+9BQOkmMQgc4LJAescpOjK3pECu2F92T1qJQDQRNjxdmbpA4JwRpRUUy0AqqRPQRCxxQP2H9NvXuV9A4umVsoy1k0Aydy0h/5+iQApoImzQtcVA3+ALk7lR0kAPVSIVyAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["latitude",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDjQfMLLgYGBocEu0cfh////9886e4Po/UXMPiDxA73fwPIM3zrB/AVv//uC1R9c5gEWnxLnCea7OoPpA4VrwOILxP6A6YTy8xB1erc9HBiB8htW+YPV8V4B0w/6/4Nphu7ZASBa4fMLMP3AsghszwLPrX5gcfadEJrTAqJuvR+YTkjdFOAAAJlDrC/IAAAA"},"shape":[25],"dtype":"float64","order":"little"}],["longitude",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NkYGBg1o09AKQYvNRjQPQCveVxINrhQXXsgf///9vbbwHLJ9w/ApZv6DKMBvNXbIkDy3NzgdUvYLkBVrfgST6YPlDoA6YVjv+MPcAIZGxnAKtr2JqfAKIfRP4F0wwtRolg/hcfMK2wqSwRpP5AxhWw+gPGsRB9dv5gWkGQE2I+mxBYf8K9RQkHAPqpdQbIAAAA"},"shape":[25],"dtype":"float64","order":"little"}],["comparison_key",{"type":"ndarray","array":["v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0","v1.0.0_vs_v1.1.0"],"shape":[25],"dtype":"object","order":"little"}],["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wHIADf/pk+hGm/HaMG1/TciJ+lnwes+YD+dCGrBZw8k12kKacEH4d0XSjppwflwfRP9bmjBdXh/YHAYZ8GH7Q4fDxRqwU/FFSAog2nBbOFmdKtYacF6lmmBPABpwd2UGTYh4mjBknhciFd1acHG06rIO3tpwR4CjJU362vBPvvces/bbME9nZWlHTZtwYjbG0MHY23BO9sIPO2pbcGO6oGNBi9qwaWlf3TIyWnBlWhWse29acGyo93y56howZcvTngWTGvBzv278R1CbMEmubE7yAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wHIADf/+JthDlkKW0HJzcJPb2pdQSTjZQ21vFtBDYhtGYHaXEFRi4D/d0xbQQkg9kHKqV1BKj1moV8FYEHyhb54HiJYQTUgSP8gFVlBuX+j75DwWEG5ljISiClYQXmpekkGklhBrW783lBXWEG52zuqr2ZYQfKeqLakg2FB3d84vgCrYUEwVLXp49RhQdaG6JCuEGNBOFHsPTe5Y0H0+20w+x1fQQ9yBd3PomBB/6/MGyKmYEF5XsmXnkNiQWvD23o5cWJBXY2bUJJBY0G8MsA2yAAAAA=="},"shape":[25],"dtype":"float64","order":"little"}],["url",{"type":"ndarray","array":["station_pages/stations/07AF010.html","station_pages/stations/07DB005.html","station_pages/stations/07EE009.html","station_pages/stations/07FD014.html","station_pages/stations/07GA002.html","station_pages/stations/07JC003.html","station_pages/stations/07QC005.html","station_pages/stations/08GA065.html","station_pages/stations/08LB053.html","station_pages/stations/08LE067.html","station_pages/stations/08NE067.html","station_pages/stations/08NJ134.html","station_pages/stations/08NM133.html","station_pages/stations/08NM134.html","station_pages/stations/09DA001.html","station_pages/stations/09DC004.html","station_pages/stations/09EA005.html","station_pages/stations/09FA001.html","station_pages/stations/09FC001.html","station_pages/stations/10CD003.html","station_pages/stations/10ED009.html","station_pages/stations/10FB005.html","station_pages/stations/10JA004.html","station_pages/stations/10KC001.html","station_pages/stations/10LA002.html"],"shape":[25],"dtype":"object","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1050","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1051"}}},"glyph":{"type":"object","name":"Scatter","id":"p1046","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_alpha":{"type":"value","value":0.8},"fill_color":{"type":"field","field":"percent_area_diff","transform":{"type":"object","name":"LinearColorMapper","id":"p1010","attributes":{"palette":["#006837","#1a9850","#66bd63","#a6d96a","#d9ef8b","#ffffbf","#fee08b","#fdae61","#f46d43","#d73027","#a50026"],"low":0.0,"high":9.67}}},"fill_alpha":{"type":"value","value":0.8},"hatch_color":{"type":"field","field":"percent_area_diff","transform":{"id":"p1010"}},"hatch_alpha":{"type":"value","value":0.8}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1047","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"field","field":"percent_area_diff","transform":{"id":"p1010"}},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"field","field":"percent_area_diff","transform":{"id":"p1010"}},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1048","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":12},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"field","field":"percent_area_diff","transform":{"id":"p1010"}},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"field","field":"percent_area_diff","transform":{"id":"p1010"}},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1020","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1033"},{"type":"object","name":"WheelZoomTool","id":"p1034","attributes":{"renderers":"auto"}},{"type":"object","name":"ResetTool","id":"p1035"},{"type":"object","name":"SaveTool","id":"p1036"},{"type":"object","name":"HoverTool","id":"p1052","attributes":{"renderers":[{"id":"p1049"}],"tooltips":[["Station","@station_id"],["Jaccard Index","@jaccard_index{0.00}"],["Percent Area Change","@percent_area_diff{0.0}%"],["","Click to view station page"]],"sort_by":null}},{"type":"object","name":"TapTool","id":"p1053","attributes":{"renderers":"auto","callback":{"type":"object","name":"OpenURL","id":"p1054","attributes":{"url":"@url"}}}}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p1028","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1029","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1030","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1031"}}}],"right":[{"type":"object","name":"ColorBar","id":"p1055","attributes":{"title":"Percent Area Change (%)","major_label_policy":{"type":"object","name":"NoOverlap","id":"p1056"},"label_standoff":12,"color_mapper":{"id":"p1010"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p1023","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1024","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1025","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1026"}}}],"center":[{"type":"object","name":"Grid","id":"p1027","attributes":{"axis":{"id":"p1023"}}},{"type":"object","name":"Grid","id":"p1032","attributes":{"dimension":1,"axis":{"id":"p1028"}}}]}}]}}';
                  const render_items = [{"docid":"523597f1-a0cb-4a5e-9199-2da15bf5b9d2","roots":{"p1011":"dd1c2313-68c9-4590-ae3b-4d49d42086ab"},"root_ids":["p1011"]}];
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