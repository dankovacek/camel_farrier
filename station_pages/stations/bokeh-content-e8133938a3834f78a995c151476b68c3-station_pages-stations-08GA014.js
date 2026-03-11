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
    
    
    const element = document.getElementById("d8604e4c-8707-46e7-9c92-0ae9ce83bc02");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd8604e4c-8707-46e7-9c92-0ae9ce83bc02' but no matching script tag was found.")
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
                  const docs_json = '{"b09b3706-310e-4434-bbce-cb90d894c786":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p260816","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p260817"}}},"roots":[{"type":"object","name":"Column","id":"p260889","attributes":{"children":[{"type":"object","name":"Figure","id":"p260818","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p260819"},"y_range":{"type":"object","name":"DataRange1d","id":"p260820"},"x_scale":{"type":"object","name":"LinearScale","id":"p260828"},"y_scale":{"type":"object","name":"LinearScale","id":"p260829"},"title":{"type":"object","name":"Title","id":"p260821","attributes":{"text":"08GA014 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p260882","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p260876","attributes":{"selected":{"type":"object","name":"Selection","id":"p260877","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p260878"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[944],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+1YvY9bRRB/SUF1HVU6V5EQkQJYBBSh8AjhbOfZvg87OQx3uZdLckFwoIhDSKniP4CC1h1VKgqkVFS8ispFJKrrrnJFlwaqY293frsz83ZtKyKRIsXNz7s7b753dnaz7PT3z6PsFcWTk5M/pivXczscd14MVhbzZpPkVBZ/mYwKGhe51aPbPR2X+7MujXuObtJzdFmf5vuO35M+za+58SHhE8I31x2/1XXH52jNjc+Dvk/zPZrvcT2MXKXfSpevm++7tE6Y9eJ6V2Le0rHvjF+63B/BT2P4re3Wz7WIrkXrLaf345bjP205+mcBnd5tzifwG7WJT5v4tIlexM/Eo0P0In6GT+H9BP8wv9g4PgcGf8bRyAtyEA8m38aLxY/5FXoWJE/l4wR+Fwi7EReLet9Iv7V5PGzcEAfQse+ZHoWyt0d2irwJ9jeVvSNl17iup4jr45APWl+ZD2T3YcHjFPbPpCf3LfKgmchn7Mv9QX7GaD+d3nTr+Y1TrKa/DhyubNJ369wfIS5MT5mfhdpva7wOVNO/RV2wdYPVFfjZ2FOofOjIfDgseL7DD6hLqDdWf8v/JyEHfkSewk9mvq32d4f7M9QPZ5fRh+rbaIPs2nR2Xhi48RtDqgfDPHvFz6vX+NLQ5PGlnKH5d43yckfWob8G/lxidRDrixHnmeNv9s1Vqg+fUL5+5PK5m3O080ye2Sef8e8DXV66+d+3eN1ahNAPdcLM3JE4/oLk3OT0Wdb4jq9n2fFQrlfX59mLMdZhF/QwdJuSf77L7QNCLuIDxHz43vMpSb89mr9L9Pclgi6F2Z70U2PfYXlPrrs8gnytN+oZ0/e2xAz6jsgvQzo3Bhxxfmos9/+kuGZbkl+D9D4mfcdkd3VAdPckQp/8FtcDaNb3+Dr0Najkacwg9yvy3zfE51s5D0S8gI3b8fkU6jhiXue9yzfz26bxaD4izhgfD3keI84aQ55LfthvwMXya3qk8neuHL2PoJ9GTafp63b6PqQ3D8N9ZLzKkfXxq3TOX4uhqSs59U1XJWL+KJd5n39J8ileM9L7aJ3fC6xc19986vmI8eQG/y6g9IOuh8bvVxZgHqv34dz47SHtg0NZ18of5PrTBxL9vtiRdRX6yvPL1vPIORTOI9Q15Nkx7eMxnRMl7d/G19zvDG8l6t62rH8uPiFfRm0ffx2fs9ZPH/s8wNji7DLPjxD3fzelXr5ubnE9QBf6aumXSJxzHlcj9zLp86FH0Y8033f006ZHR/eeR6fXu/87nrHyLy6NTF9m13PpqfPf8mN+gT+i+rr73YUauvW3a+j20VtLo/z+opc/x04RP4bwVwpT34Xv5+TJEt+l8i86vwiXyGezrz+I2Yn7LasbQ/V+1ooh1sO5hPcv9LOoT65Opuqr7j9DP/H0R4c/f6/6B3F+ou6lzs9U35fqVzHW577mr89Vfc8A6jqt65NG9v2G1KPWR8/1Q0rfyD1kTdoBOukHYOg/5P2F2b8h82LWkeeCqfdsXO8joM9sw/e39v3m4PNa3Y/07/V+Df5CH5lC3AeQJ9rfvq/bjd336vcdSRfyWt97cG/BuFL3FvDFfcb3kao/lnmh72kpZP31rkTIxzr0B/r+fSdO7/mWcf6aLp7Xy8fP89mJ+1/bCT9rxLq2N6WH7u/ld3pfhvcBuS8jfXo/1veJ+iLfedX7cKXfnbvx9wGGET6L67/UN7xjyPeHUOf9eZDLc8C9v2jUfXjqHAn2pd453nmwYN9SX1weyDHux3hX8Pm1/fqdcxlkecLyatn4i74m8l4Y+i/kAfJU3u8W84v3gdaO/wD9ptnugB0AAA=="},"shape":[944],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p260883","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p260884"}}},"glyph":{"type":"object","name":"Line","id":"p260879","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p260880","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p260881","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p260827","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p260854"},{"type":"object","name":"WheelZoomTool","id":"p260855","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p260856","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p260857","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p260863","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p260862","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p260864","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p260865","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p260866","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p260867","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p260873","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p260872","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p260874"},{"type":"object","name":"SaveTool","id":"p260875"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p260849","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p260850","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p260851"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p260852"}}}],"right":[{"type":"object","name":"Legend","id":"p260885","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p260886","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p260882"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p260830","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p260831","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p260832","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p260833","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p260834","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p260835","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p260836","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p260837","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p260838","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p260839","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p260840","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p260841","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p260842","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p260843"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p260846","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p260845","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p260844","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p260847"}}}],"center":[{"type":"object","name":"Grid","id":"p260848","attributes":{"axis":{"id":"p260830"}}},{"type":"object","name":"Grid","id":"p260853","attributes":{"dimension":1,"axis":{"id":"p260849"}}}]}},{"type":"object","name":"Div","id":"p260887","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"b09b3706-310e-4434-bbce-cb90d894c786","roots":{"p260889":"d8604e4c-8707-46e7-9c92-0ae9ce83bc02"},"root_ids":["p260889"]}];
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