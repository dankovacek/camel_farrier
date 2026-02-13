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
    
    
    const element = document.getElementById("dce322d5-0ea4-4324-b0f2-55168ab44367");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dce322d5-0ea4-4324-b0f2-55168ab44367' but no matching script tag was found.")
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
                  const docs_json = '{"4b8f0df5-f930-4aaa-a816-d6c02925e40e":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p124672","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p124673"}}},"roots":[{"type":"object","name":"Column","id":"p124755","attributes":{"children":[{"type":"object","name":"Figure","id":"p124674","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p124675"},"y_range":{"type":"object","name":"DataRange1d","id":"p124676"},"x_scale":{"type":"object","name":"LinearScale","id":"p124684"},"y_scale":{"type":"object","name":"LinearScale","id":"p124685"},"title":{"type":"object","name":"Title","id":"p124677","attributes":{"text":"07MC001 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p124738","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p124732","attributes":{"selected":{"type":"object","name":"Selection","id":"p124733","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p124734"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3HaUwIcByA4V8lHVKiS4UuFJ10UaFDKaVCh3RIxRTrMAuj/qzGKqPGKkOYYtJYGWqs1ihDjBorTJgyU4YaS8b2fnr2iMjk0LbcThHlHoSSdTaL1/7O5E83oNK8nsF99FHlZG3l5zvSeZ8Vil7hFh7wIo0XuKBqOJrKX39M4UYrUUJOJ/O945t5Uwyq941J3EwHVcTWTbz4XiJvsUD5vDuBWz+L57GLUJWWxvG2wY181A/FvnoDT/ixnldEoeq4EsvHtVA5pcXw1LZoXmWK0p23jv95HMXdF6LKPBzJa9+u5T2+KJonI7j3t3CeE4Gqrn4N7xNUuslhPOB2KM+fidKwazUfeBjCjRxQBRcH870DQfyaF8r7E4Hc9OsqHhGGqujiSt7ydwUfTkSxvhnAY4xQSrP9eesDPz5qg8ruwHKe8GoZL1+C0nHMl4999uFOIahS6rx51YQX74pD+XPDk7sZoGRuX8prOpfwnjmoNPZ5cO8+d57thlJX5sZ7P7ly3UBU/mdceP4vZ16/HmWgaTE31EMJzlzEC9ud+DVLVIN7HLnp84U83Bml6MgC3vxhPh8OQGVV68Bjxux5STRK61U7PqKNYpduy+Pv2vByc1TtBfP4WM9c7uiEklIyh1e+s+Zdy1FNnLLibt8teUYkSs3l2fyJJopGqgX3ajXn2SaozuWa8d5HplxnAYr/IROe92YWr/dB1V81kxuOGvOgcJTCSzN44z8jPpiEyuSWIQ83RnVw53Te3G3Ah+xQrIqm8eh+fV7iierOcT0+8kWX24aixF/Q4WWTU3l7Aqqfzdrc0RBV8o4pvPK+Fn8wD2VivyZ3fanBMzxQVVdIbud/BG3oSgAFAAA="},"shape":[160],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p124739","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p124740"}}},"glyph":{"type":"object","name":"VArea","id":"p124735","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.499399971961975},"y2":{"type":"value","value":8.323199844360351},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p124736","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.499399971961975},"y2":{"type":"value","value":8.323199844360351},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p124737","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.499399971961975},"y2":{"type":"value","value":8.323199844360351},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p124749","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p124743","attributes":{"selected":{"type":"object","name":"Selection","id":"p124744","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p124745"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3HaUwPABjA4bcclaNC5agc/xyVoxyVo0TlKFE5KlSOylHowMKolxWmHIVVhmLC0FjOGiuhDDHkChOGZmSosWJsv0/PHhH1u7g2oVJE1luiFsev4e+qVnMbA8q0Tck87XkSvzAStWFXIrf/nMBDJqFsLVzFy1pX8m+hqA4lK3h4Z9SsZfH8+o043twbxXnDch71ZBnf64panbmU//m4hLv6oMQeiuX5v2P4/VmoxmejuUcH1PjYxbywYhGvtUUxS1nIvR4t4MlDUY9vj+Iv30dyC28UvwMRfF3zfF4cjPr29DxuY4IasHguT7sWzs/3QGlYHcbtHoTyEGfUjIw5vKx+Nm8ch+KQO4uH/ZjJs6ajVpwM4c1tUJ0WBPOosiCeY41SnTiDt96dzl0HocZsCeT5r6fxmtEoxvsCuPs3fx4fgFpQNJXXCqppxBTudXkyT+qKcnzlJF53249b9Ef1TfPl6+p8+Bk3lLd7JnLrLxN4wBTU1KPe/Pzf8fxTOIrdBS8ebIGSEefJS2+N4419UQ0bx/KwZ2N45giUip2jeVODB3fyQ40scOc5LW68ag5K67lR3KUTSszSkTyvcgSvsUc1Wj+cu9e68jgXlIIdLvzxh2HcdCKq58GhPOnXEF40E6WueDA3N0PxjXHmKeVO/Ewv1Pq1jtz64SDuPwQlddtAXvJuAP/khWqb358HNznw9CCU0lMG/rUdimFRPx56tS/P7I5antyHN9X05o5OKJHp9jz7jR2vGovast+Wu3zvxaMDUfJO9OT3jFGMonpwt9LuPM4K9XCCDX98x5qbDETx3GzFE19140UeqC9yunLzxi7cxx8l5ZglP/3PgtfPQ7W6ZM79u6BuWtGZl1R34h8NKLapHXnQiw48fRTqld1m/OtnU95vMkroERO+4097Xh6G+rOkHXc0R41Y3pZn32zDb/VBadlgzIc9NeLRw1FzsySh8j8m1Hi+uAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/9VTK3DCQBC90A800JYApaUfimw1mkkcGo+oQqMxxaDRcZ3Bo3HtoOOxoNHM0AKld5u3mQ1QUdmYN7e3+/a9d6CU+Zav6v9hd96oeBqnjdGjwTffL9N50H4wWGn27w2+9Md3uL816M06JYPquXmDvmu6r8+KmCesDOtXmCvQnD3J07ldy2MuZ7BbGDrENxlkqa9azYLHwX1OzjOv7ivK/aynW7NL4CtCb17y6L4c5hy5h+usT/PEdEf6fT8vedmH/hxvu92+B8EF1Xvzc+IZLzKeRXlnwJOO6uE7UP9HuXcp56adQgZoI98U3suWPFpPWvZpH2fwkYKuFPiT9J6jchL5nKJ+QvVW6xi+j4xena+F3CzoT1B/ECTgOzwvnhLI0YIvhT6FPgV9CnxbV9S5P5o3+wTqPGK4e/8b7s6xTr6nfaEvBf/fbviua4la39pNEM/G5T6L3oNQ50R+yJfgI/8iR94X5XooJ54XPJwb58X9PM95av4NdKwivaxT9oEvhgf28r69vfAZ8Zp8wv/jyg1z3s/tD/kxL79HDAWP/n1/4Z2W8P8Zq0MPI+XC+ANQSMCYuAUAAA=="},"shape":[183],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p124750","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p124751"}}},"glyph":{"type":"object","name":"Line","id":"p124746","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p124747","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p124748","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p124683","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p124710"},{"type":"object","name":"WheelZoomTool","id":"p124711","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p124712","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p124713","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p124719","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p124718","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p124720","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p124721","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p124722","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p124723","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p124729","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p124728","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p124730"},{"type":"object","name":"SaveTool","id":"p124731"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p124705","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p124706","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p124707"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p124708"}}}],"right":[{"type":"object","name":"Legend","id":"p124741","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p124742","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p124738"}]}},{"type":"object","name":"LegendItem","id":"p124752","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p124749"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p124686","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p124687","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p124688","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p124689","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p124690","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p124691","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p124692","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p124693","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p124694","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p124695","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p124696","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p124697","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p124698","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p124699"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p124702","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p124701","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p124700","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p124703"}}}],"center":[{"type":"object","name":"Grid","id":"p124704","attributes":{"axis":{"id":"p124686"}}},{"type":"object","name":"Grid","id":"p124709","attributes":{"dimension":1,"axis":{"id":"p124705"}}}]}},{"type":"object","name":"Div","id":"p124753","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"4b8f0df5-f930-4aaa-a816-d6c02925e40e","roots":{"p124755":"dce322d5-0ea4-4324-b0f2-55168ab44367"},"root_ids":["p124755"]}];
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