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
    
    
    const element = document.getElementById("b89347ff-b58d-4246-8fd0-e07d68cf800e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b89347ff-b58d-4246-8fd0-e07d68cf800e' but no matching script tag was found.")
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
                  const docs_json = '{"8c0c8c03-0308-42bd-86c5-b5a94e194ba9":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p473454","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p473455"}}},"roots":[{"type":"object","name":"Column","id":"p473555","attributes":{"children":[{"type":"object","name":"Figure","id":"p473456","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p473457"},"y_range":{"type":"object","name":"DataRange1d","id":"p473458"},"x_scale":{"type":"object","name":"LinearScale","id":"p473466"},"y_scale":{"type":"object","name":"LinearScale","id":"p473467"},"title":{"type":"object","name":"Title","id":"p473459","attributes":{"text":"08NA058 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p473520","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473514","attributes":{"selected":{"type":"object","name":"Selection","id":"p473515","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473516"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYFhx1MzhEAMDQ5WRCZj2mW8IpuV49MH0hwodMH3oqabDIQB7qjfNMAAAAA=="},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473521","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473522"}}},"glyph":{"type":"object","name":"VArea","id":"p473517","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p473518","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p473519","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p473531","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473525","attributes":{"selected":{"type":"object","name":"Selection","id":"p473526","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473527"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYLgilWF0iIGBoeJLEpiWORcLpg8sjzA6BACAL7eMIAAAAA=="},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473532","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473533"}}},"glyph":{"type":"object","name":"VArea","id":"p473528","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p473529","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p473530","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p473540","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473534","attributes":{"selected":{"type":"object","name":"Selection","id":"p473535","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473536"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYCi4LSV0iAEInNjA9IQVHwVBtAL/XTC9ofSE4CEA5WtdwygAAAA="},"shape":[5],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473541","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473542"}}},"glyph":{"type":"object","name":"VArea","id":"p473537","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p473538","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p473539","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p473549","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p473543","attributes":{"selected":{"type":"object","name":"Selection","id":"p473544","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p473545"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[1948],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/+1bTUhUURSeWki0cBUtQlLCRRTSQiJE4uUqwoW0CMJF48JFC2kR4sLN2EKiRUS0aBUlJf3Yr00ZkzijlU6afyiBi5hEwoVEhFlS2eucM57Xm5OXNw7T440dN5/nnnPvPffcc6/fvd4XCuHPcoTAR/xl29a5moRl23YkMdxv/YBfukpiKF8drO2xQF96vCpqRLAPXxh4YoHTicWVKNazb3/uduxZBrv46ZOPrO+ALX0PrK/Qn7X/voMr0N+OffcsRqlfhn7mOrssRqmXMrcj67HspTfV+1flXyjud5zx5bsfv/NK+/N3HWu8Nd5+/t3QfNN803zzn6/putN1F4R1B+eCePOlW8jzCZfgnFB0phP5feTg1psOcrkXyna87HPVS/+4X+bfkofLcqnPN0/3ao/PZfK8xDKet95ef0jnMDeCPlxc0Y3nu4xzGJ/Hgobsv8kvPu/pfqj7YRD2Q81DzUPNQ+XDug9szH2AeZlpfiVv+wk8a2l3r3MvDvXofpzRxN+CUo78C+/xvVDy6VzlReKlHZYX5tq+qR7zfzl/LMtzTlDlfOWNKQ6mvNfyjbnf6bzqvCqfVT6r+4DuA0HaB+R7E+bT8p0K2vU2P8b7zjWReS3zHb4fZZT3p1I2vTfx4mEmfrXRy01xkXFcr2xqN9vyoMVd91vdb4O032o+aj5qPuo54H/ZB4Dnpca+vcB7WvgpvHl38eN1+Z++13z217ghHvQOXCLwK3vP2af4XptQ8nLm45J/S37NPI15mLynNb3zkHYm2VTfVA739tZs6w3nPYvJLttyk1/8joTHL88XUoZ2sno3ny8+K/mzV7vrtTe1l+t7G1M9r/c6hbrO1e/C3J913nTeCpFX+JW3XvyF9dki8xP4u146M9aD/KZhrvM5fWd2eDbmyFzuhVyPEfyg7+WYP3E/rAc18clNodD78qJ+tAs3VscJL37sdfzA9wLJlj4sp+/xXAj/F+8nP4srBpCH0Xd6aX6QcNpF/YeJAayXqjs/hPZtC0eTiIe23H2zWm/SjfHaA5OrdhOE22fGyD5VN4rt2MeKR9E+fuXTEPbTUBVNUr9dJcNuTE3sGkF9W9P8iFMP/WjdRu1RuxCPcHVqHOVrJfUvHUzPzyC2Z0WTg1ge2rx3yGkf+22sHid9ZeUUYjh2ZBr7K6tvnCK/UM/jBX3pu/I/7XE8XHFJ7GwnP60TsdfucdE42Q9G9oftoTxj/KAva19Ix7Fpfgr9gHce046fYE5xRky2UDyof46nyy8aN/fnigPFhePkiheNE+RITcMrbJ/kdP8UX/AjAzPiDnqSoT7Elc47lD+Iq3kG74fpu9CsEOPjzlv0H1yg8SCC3sl7zn9Eaeeyl+tgTdm1rmidQD+E4Davk5wQ/KA4+I3st9/9cn8Qv8jlU7SP5IQmv38DGNL/8uA8AAA="},"shape":[1948],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p473550","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p473551"}}},"glyph":{"type":"object","name":"Line","id":"p473546","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p473547","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p473548","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p473465","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p473492"},{"type":"object","name":"WheelZoomTool","id":"p473493","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p473494","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p473495","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p473501","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p473500","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p473502","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p473503","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p473504","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p473505","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p473511","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p473510","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p473512"},{"type":"object","name":"SaveTool","id":"p473513"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p473487","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p473488","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p473489"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p473490"}}}],"right":[{"type":"object","name":"Legend","id":"p473523","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p473524","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p473520"},{"id":"p473531"},{"id":"p473540"}]}},{"type":"object","name":"LegendItem","id":"p473552","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p473549"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p473468","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p473469","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p473470","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p473471","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p473472","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p473473","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p473474","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p473475","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p473476","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p473477","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p473478","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p473479","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p473480","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p473481"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p473484","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p473483","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p473482","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p473485"}}}],"center":[{"type":"object","name":"Grid","id":"p473486","attributes":{"axis":{"id":"p473468"}}},{"type":"object","name":"Grid","id":"p473491","attributes":{"dimension":1,"axis":{"id":"p473487"}}}]}},{"type":"object","name":"Div","id":"p473553","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"8c0c8c03-0308-42bd-86c5-b5a94e194ba9","roots":{"p473555":"b89347ff-b58d-4246-8fd0-e07d68cf800e"},"root_ids":["p473555"]}];
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