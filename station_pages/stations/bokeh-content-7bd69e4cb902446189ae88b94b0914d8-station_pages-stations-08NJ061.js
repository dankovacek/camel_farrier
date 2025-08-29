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
    
    
    const element = document.getElementById("b4dffbf6-e6c4-4eff-86c9-92c3464ec4cf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b4dffbf6-e6c4-4eff-86c9-92c3464ec4cf' but no matching script tag was found.")
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
                  const docs_json = '{"a0589f1f-9e56-4234-9b1a-03a35c537e83":{"version":"3.6.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1289176","attributes":{"width":1000,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p1289177"},"y_range":{"type":"object","name":"DataRange1d","id":"p1289178"},"x_scale":{"type":"object","name":"LinearScale","id":"p1289185"},"y_scale":{"type":"object","name":"LinearScale","id":"p1289186"},"title":{"type":"object","name":"Title","id":"p1289183"},"renderers":[{"type":"object","name":"TileRenderer","id":"p1289210","attributes":{"tile_source":{"type":"object","name":"WMTSTileSource","id":"p1289209","attributes":{"url":"https://tile.openstreetmap.org/{z}/{x}/{y}.png","max_zoom":19,"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors"}}}},{"type":"object","name":"GlyphRenderer","id":"p1289218","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1289212","attributes":{"selected":{"type":"object","name":"Selection","id":"p1289213","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1289214"},"data":{"type":"map","entries":[["x",{"type":"typed_array","array":{"type":"bytes","data":"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UMt7Pu7ZaMEiYTfR6NlowaGfgWTz2WjBdTU99+3ZaMHR8A/f9tlowbc7LE7x2WjB5KVwu/bZaMErxZi5AdpowTqTr4gD2mjBZv3z9QjaaMF2ywrFCtpowaM1TzIQ2mjBswNmARLaaMES2HGQItpowUQpAAsm2mjBXt7jmyvaaMF7ehE6L9powafkVac02mjBxoCDRTjaaMH06seyPdpowQG53oE/2mjBHG7CEkXaaMFbjWdcStpowYn3q8lP2mjBppPZZ1PaaMHASL34WNpowfCZS3Nc2mjBf9ibb3LaaMGNprI+dNpowe56vs2E2mjB36yn/oLaaMGaVTxontpowXnSxLyc2mjBpTwJKqLaaMG0CiD5o9powUNJcPW52mjBUReHxLvaaMF+gcsxwdpowVz+U4a/2mjBimiY88TaaMGZNq/CxtpowcWg8y/M2mjB8Qo4ndHaaMEfdXwK19powS5Dk9nY2mjBSPh2at7aaMFYxo054NpowYQw0qbl2mjBk/7odefaaMG/aC3j7Npowc82RLLu2mjB6esnQ/TaaMEZPba999powTTymU792mjBQcCwHf/aaMFvKvWKBNtowX74C1oG22jBma3v6gvbaMG6MGeWDdtowdTlSicT22jB4rNh9hTbaMEQHqZjGttowTyI6tAf22jBafIuPiXbaMF3wEUNJ9towb7fbQsy22jBza2E2jPbaMH7F8lHOdtowQrm3xY722jBlyQwE1HbaMGm8kbiUttowcGnKnNY22jB4iqiHlrbaMH834WvX9towd5DWBFc22jB+Pg7omHbaMHpKiXTX9towQPgCGRl22jB50PbxWHbaMEtYwPEbNtowR6V7PRq22jBrdM88YDbaMGdBSYif9towbi6CbOE22jBqezy44LbaME2K0PgmNtowUX5Wa+a22jBc2OeHKDbaMGBMbXrodtowZvmmHyn22jByzcn96rbaMHm7AqIsNtowSUMsNG122jBQMGTYrvbaMFPj6oxvdtowXv57p7C22jBiscFbsTbaMGjfOn+ydtowcb/YKrL22jBDB+JqNbbaMEb7Z932NtowTaigwje22jBRXCa19/baMFx2t5E5dtowYGo9RPn22jBrRI6gezbaMHLrmcf8NtoweZjS7D122jBB+fCW/fbaMEhnKbs/NtowTBqvbv+22jBXNQBKQTcaMFsohj4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U9xowQupK8VN3GjB3j7nV0jcaMHPcNCIRtxowbW77PdA3GjBhGpefT3caMFqtXrsN9xowSuW1aIy3GjBEOHxES3caMHD8zX5JdxowZWJ8Ysg3GjBd+3D7RzcaMFeOOBcF9xowTy1aLEV3GjBIwCFIBDcaMETMm5RDtxowefHKeQI3GjB1vkSFQfcaMGqj86nAdxowZvBt9j/22jBggzUR/rbaMFzPr14+NtowUfUeAvz22jBNgZiPPHbaMEKnB3P69towe3/7zDo22jBv5Wrw+LbaMGxx5T04NtowZcSsWPb22jBdY85uNnbaMFa2lUn1NtowUsMP1jS22jBH6L66szbaMEP1OMby9toweNpn67F22jBxc1xEMLbaMGqGI5/vNtowYmVFtS622jBb+AyQ7XbaMFhEhx0s9towTSo1wau22jBFQyqaKrbaMHpoWX7pNtowdrTTiyj22jBrmkKv53baMGA/8VRmNtowVSVgeSS22jBRMdqFZHbaMErEoeEi9towY43D1N922jBdIIrwnfbaME0Y4Z4cttowQj5QQtt22jB2479nWfbaMGuJLkwYttowVFp5khZ22jBNrQCuFPbaMEo5uvoUdtowft7p3tM22jB7a2QrErbaMG/Q0w/RdtowaGnHqFB22jBdT3aMzzbaMFYoayVONtowSo3aCgz22jBDJs6ii/baMHz5Vb5KdtowdBi300o22jBt637vCLbaMGo3+TtINtowXx1oIAb22jBa6eJsRnbaMEkiGGzDttowfQ20zgL22jB24HvpwXbaMHMs9jYA9towZ5JlGv+2mjBct9P/vjaaMFGdQuR89powTen9MHx2mjBCT2wVOzaaMH6bpmF6tpowd+5tfTk2mjBsWgneuHaaMFpSf971tpowUqt0d3S2mjBHkONcM3aaMEQdXahy9poweMKMjTG2mjBWeUa37faaMFzmv5vvdpowcfxb2+t2mjB9Fu03LLaaMG1PA+TrdpowZqHKwKo2mjBi7kUM6baaMFfT9DFoNpowVCBufae2mjBJBd1iZnaaMEFe0frldpowdkQA36Q2mjBykLsro7aaME9BJyyeNpowQ=="},"order":"little","dtype":"float64"}],["y",{"type":"typed_array","array":{"type":"bytes","data":"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"},"order":"little","dtype":"float64"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1289219","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1289220"}}},"glyph":{"type":"object","name":"Patch","id":"p1289215","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","fill_color":"#1f77b4","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"Patch","id":"p1289216","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"fill_color":"#1f77b4","fill_alpha":0.1,"hatch_alpha":0.1}},"muted_glyph":{"type":"object","name":"Patch","id":"p1289217","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"fill_color":"#1f77b4","fill_alpha":0.2,"hatch_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1289230","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1289224","attributes":{"selected":{"type":"object","name":"Selection","id":"p1289225","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1289226"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1289231","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1289232"}}},"glyph":{"type":"object","name":"Scatter","id":"p1289227","attributes":{"x":{"type":"value","value":-13030580.918450195},"y":{"type":"value","value":6381166.383300716},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"star"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1289228","attributes":{"x":{"type":"value","value":-13030580.918450195},"y":{"type":"value","value":6381166.383300716},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"star"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1289229","attributes":{"x":{"type":"value","value":-13030580.918450195},"y":{"type":"value","value":6381166.383300716},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"star"}}}}},{"type":"object","name":"GlyphRenderer","id":"p1289240","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1289234","attributes":{"selected":{"type":"object","name":"Selection","id":"p1289235","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1289236"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1289241","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1289242"}}},"glyph":{"type":"object","name":"Scatter","id":"p1289237","attributes":{"x":{"type":"value","value":-13030559.767746942},"y":{"type":"value","value":6381099.367097595},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"fill_color":{"type":"value","value":"#ff7f0e"},"hatch_color":{"type":"value","value":"#ff7f0e"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1289238","attributes":{"x":{"type":"value","value":-13030559.767746942},"y":{"type":"value","value":6381099.367097595},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1289239","attributes":{"x":{"type":"value","value":-13030559.767746942},"y":{"type":"value","value":6381099.367097595},"size":{"type":"value","value":10},"line_color":{"type":"value","value":"#ff7f0e"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#ff7f0e"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#ff7f0e"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1289184","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1289197"},{"type":"object","name":"WheelZoomTool","id":"p1289198","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1289199","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1289200","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1289206","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1289205","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p1289207"},{"type":"object","name":"SaveTool","id":"p1289208"}]}},"left":[{"type":"object","name":"MercatorAxis","id":"p1289192","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1289193","attributes":{"mantissas":[1,2,5],"dimension":"lat"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1289194","attributes":{"dimension":"lat"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1289195"}}}],"below":[{"type":"object","name":"MercatorAxis","id":"p1289187","attributes":{"ticker":{"type":"object","name":"MercatorTicker","id":"p1289188","attributes":{"mantissas":[1,2,5],"dimension":"lon"}},"formatter":{"type":"object","name":"MercatorTickFormatter","id":"p1289189","attributes":{"dimension":"lon"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1289190"}}}],"center":[{"type":"object","name":"Grid","id":"p1289191","attributes":{"axis":{"id":"p1289187"}}},{"type":"object","name":"Grid","id":"p1289196","attributes":{"dimension":1,"axis":{"id":"p1289192"}}},{"type":"object","name":"Legend","id":"p1289221","attributes":{"background_fill_alpha":0.7,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p1289222","attributes":{"label":{"type":"value","value":"Catchment (2024-06-01) [1]"},"renderers":[{"id":"p1289218"}]}},{"type":"object","name":"LegendItem","id":"p1289233","attributes":{"label":{"type":"value","value":"Station (2021-01)"},"renderers":[{"id":"p1289230"}]}},{"type":"object","name":"LegendItem","id":"p1289243","attributes":{"label":{"type":"value","value":"Pour Point (2021-01)"},"renderers":[{"id":"p1289240"}]}}]}}]}}]}}';
                  const render_items = [{"docid":"a0589f1f-9e56-4234-9b1a-03a35c537e83","roots":{"p1289176":"b4dffbf6-e6c4-4eff-86c9-92c3464ec4cf"},"root_ids":["p1289176"]}];
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