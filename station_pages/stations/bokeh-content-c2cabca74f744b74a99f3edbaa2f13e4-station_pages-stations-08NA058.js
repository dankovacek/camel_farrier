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
    
    
    const element = document.getElementById("f1dffec9-1a4a-4e45-9866-a85849a67929");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f1dffec9-1a4a-4e45-9866-a85849a67929' but no matching script tag was found.")
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
                  const docs_json = '{"b915418e-69e2-465b-872b-a06b375447f7":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p635216","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p635217"}}},"roots":[{"type":"object","name":"Column","id":"p635317","attributes":{"children":[{"type":"object","name":"Figure","id":"p635218","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p635219"},"y_range":{"type":"object","name":"DataRange1d","id":"p635220"},"x_scale":{"type":"object","name":"LinearScale","id":"p635228"},"y_scale":{"type":"object","name":"LinearScale","id":"p635229"},"title":{"type":"object","name":"Title","id":"p635221","attributes":{"text":"08NA058 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p635282","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p635276","attributes":{"selected":{"type":"object","name":"Selection","id":"p635277","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p635278"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFhx1MzhEAMDQ5WRCZj2mW8IpuV49MH0hwodMH3oqabDIQB7qjfNMAAAAA=="},"shape":[6],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p635283","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p635284"}}},"glyph":{"type":"object","name":"VArea","id":"p635279","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p635280","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p635281","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p635293","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p635287","attributes":{"selected":{"type":"object","name":"Selection","id":"p635288","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p635289"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYLgilWF0iIGBoeJLEpiWORcLpg8sjzA6BACAL7eMIAAAAA=="},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p635294","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p635295"}}},"glyph":{"type":"object","name":"VArea","id":"p635290","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p635291","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p635292","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p635302","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p635296","attributes":{"selected":{"type":"object","name":"Selection","id":"p635297","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p635298"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYCi4LSV0iAEInNjA9IQVHwVBtAL/XTC9ofSE4CEA5WtdwygAAAA="},"shape":[5],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p635303","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p635304"}}},"glyph":{"type":"object","name":"VArea","id":"p635299","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p635300","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p635301","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.03332000181078902},"y2":{"type":"value","value":0.33456000924110413},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p635311","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p635305","attributes":{"selected":{"type":"object","name":"Selection","id":"p635306","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p635307"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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/z347nvwvffgO+/B992D77oH33MPvuMefL/d+W6787125zvtzvfZne+yO99jd77D7nx/3fnuuvO9dec768731Y3vqhvfUze+o258P934brrxvXTjO+nG99GN76Ib30M3voNufP/c+O658r1z5TvnyvfNle+aK98zV75jrny/XPluufK9cuU75cr3yZXvkpjvkZjvkJjvj5jvjpjvjZjvjJjvi5jvipjviZjviJjvh5jvhpjvRVe+E135PnTlu9CV70FXvgNdOf+7cO534bzvwjnfhfO9C+d6F87zzpzjnTm/O3Nud+a87sw53Znz2YVz2YXz2IVz2IXz14Vz14Xz1oVzthPnayfO1U6cp504Rztxfnbi3HTmvHTmnHTmfHTmXHTmPHTmHOzI+deRc68j511HzrmOnG8dOdecOM+cOMecOL+cOLecOK+cOKccOZ8cOZccOY8cOYccOX8cOXccOW8cOGccOF8cOFccOE8cOEccOD86cG504LzowDnRgfOhA+dCB84De84Be37/9vzu7fm92/M7t+f33Z7fdXt+z+35Hbfn99ue3217fq92/E7t+H3a8bu04/dox+/Qjt+fHb+7dvze2vE7a8fvqx2/q3b8ntrxOxLx+xHxuxHxexHxOxHx+xDxu3h3+n/fA/zvO4D//f/fnv7f/x7+93+H//3P35z+P8/yxEHgPAAA"},"shape":[1948],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2bT0hUQRzHXx0kOuwpOoS0Eh6ikA4SIUtMniI8SIcgPLR78OBBOoh48LJ2kOgQER06RUVJf7b/bRmbuH80d9NcV5TAQ2wi4UEiwiwp7TUz62+cfu7jPZd9u6v8vHyc95uZ37zfm/F9Z/w9wxA/y0GjxPxrmuxSY4yZphmMjcbZH/5LqDoiyjdHmvoZt3vPNoQtyev7ryReMd5ZbHE1LNqZD76/UHYo83rRjrbn7Ddn1+BT9pP7Y0efKK5yf/uOPFbE9mXuZ64vpIjtVv3hdkA7e6n5Q8b9oWv9G2WaX0QikUgkEonE7UGu76Od1+4z4BLX+1UX+oS+Dx7ffU8RrtsR9+MW8fjAL+hvrMPxdbd1uh1hX4b3S0Cx3/p459kGcrvfU7dxH1aphHFb2WGfR+uRSCQSiUSiW7Q7R8U6bYXrlKWDA+pcHNNKv1UK4dzejlhPF8pFqUtv27JY/rD+t9LbeJ9TqSzWc6f/HxCJRCKRSKw04nwTYL68lIHOl5YE/arlg8jzUaDVOSrQLn9ls/pqu9MqHnZ5PE7zfIqtd8tFWudEIpFIJJaeXN5l07+Gtux7WNPHBeRzvGF54iHzDTC5fjIPXXytiHW5lQ7H+hrrMKf5I07PdzebH7Jimmy2+65r+SZAyCOxy9vAeRB2+tctvV7s+nZ58JvNt7FqZ9ee/u4RiUTi1tAvYHdK0Cf8ve6dSfeLfgNzfW/le+rkbESVnRLaAeF7OdBP4AfsoCd3GMbn2qq4qOdv9UUlr34dUPVEvkCqa5DB93gaox1tcenfU5dQ3+nldEFM9SvsXzIJUT/bfDkpyj0Lp1OCJ3Y9+rDWblJntOnY5Fq9jOTembSsn20eF/2YZzzjst6Nb0nhJ9AQTkm/oepRndnMgTFh72mfH1PtxDi696RVv0L3+bITonyrumVYMfd8RkQ/LJwakc995+Gk6l/4bfVNSHt9/ZSgP3JqWlyvaWmdUna4X273fqpd7w/iocUltr9XjpOdi7zX70veJ7TD44H6+P65uaZ3IRfH9vmpNf07rcYJcTbl800r/+BXG5f0gwnjgDhp8ZL3ycvBxsA7Vc75H87H/+KuxZ/HdUjNH22eyfnllHje5tbrOvV5rxPX0+rjdZCX2rqS6wSorZOCCHEoNcvtn8cveP184bTq9x8Y0v/y4DwAAA=="},"shape":[1948],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p635312","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p635313"}}},"glyph":{"type":"object","name":"Line","id":"p635308","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p635309","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p635310","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p635227","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p635254"},{"type":"object","name":"WheelZoomTool","id":"p635255","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p635256","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p635257","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p635263","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p635262","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p635264","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p635265","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p635266","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p635267","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p635273","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p635272","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p635274"},{"type":"object","name":"SaveTool","id":"p635275"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p635249","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p635250","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p635251"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p635252"}}}],"right":[{"type":"object","name":"Legend","id":"p635285","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p635286","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p635282"},{"id":"p635293"},{"id":"p635302"}]}},{"type":"object","name":"LegendItem","id":"p635314","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p635311"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p635230","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p635231","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p635232","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p635233","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p635234","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p635235","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p635236","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p635237","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p635238","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p635239","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p635240","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p635241","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p635242","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p635243"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p635246","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p635245","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p635244","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p635247"}}}],"center":[{"type":"object","name":"Grid","id":"p635248","attributes":{"axis":{"id":"p635230"}}},{"type":"object","name":"Grid","id":"p635253","attributes":{"dimension":1,"axis":{"id":"p635249"}}}]}},{"type":"object","name":"Div","id":"p635315","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"b915418e-69e2-465b-872b-a06b375447f7","roots":{"p635317":"f1dffec9-1a4a-4e45-9866-a85849a67929"},"root_ids":["p635317"]}];
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