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
    
    
    const element = document.getElementById("f9016b81-938e-4276-9b33-c8630c2e8dd4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f9016b81-938e-4276-9b33-c8630c2e8dd4' but no matching script tag was found.")
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
                  const docs_json = '{"1bac45ea-090f-4bc7-a86f-f315fc85b384":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p186879","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p186880"}}},"roots":[{"type":"object","name":"Column","id":"p187002","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p186884","attributes":{"text":"&lt;p&gt;&lt;strong&gt;05OF014&lt;/strong&gt;:\\n        2 revised days; 0 removed.\\n        0.01% of the earlier published daily record changed.\\n        Affected interval: 2021-03-20 to 2021-03-21;\\n        longest consecutive revision run: 2 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p186885","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p186886"},"y_range":{"type":"object","name":"DataRange1d","id":"p186887"},"x_scale":{"type":"object","name":"LinearScale","id":"p186894"},"y_scale":{"type":"object","name":"LinearScale","id":"p186895"},"title":{"type":"object","name":"Title","id":"p186892"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p186935","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p186881","attributes":{"selected":{"type":"object","name":"Selection","id":"p186882","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p186883"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBgBGIADLie3QgAAAA="},"shape":[2],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaHh+rqXciYHBwVextdwJAPztmY4QAAAA"},"shape":[2],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v//7/87Z/n7P///19/4NRNewBTx+o+EAAAAA=="},"shape":[2],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGh4HXjDnpGB4YAnzy17AMANoHYQAAAA"},"shape":[2],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHjwe+VBex4GBoaApAJ7AD9BUNUQAAAA"},"shape":[2],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9NiW5Ci0+zjYLidbR3H4ff2AAV6mogQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p186936","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p186937"}}},"glyph":{"type":"object","name":"Scatter","id":"p186932","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p186933","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p186934","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p186943","attributes":{"data_source":{"id":"p186881"},"view":{"type":"object","name":"CDSView","id":"p186944","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p186945"}}},"glyph":{"type":"object","name":"Scatter","id":"p186940","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p186941","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p186942","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p186893","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p186920"},{"type":"object","name":"WheelZoomTool","id":"p186921","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p186922","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p186923","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p186929","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p186928","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p186930"},{"type":"object","name":"SaveTool","id":"p186931"},{"type":"object","name":"HoverTool","id":"p187000","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p186915","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p186916","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p186917"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p186918"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p186896","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p186897","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p186898","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p186899","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p186900","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p186901","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p186902","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p186903","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p186904","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p186905","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p186906","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p186907","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p186908","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p186909"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p186912","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p186911","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p186910","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p186913"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p186914","attributes":{"axis":{"id":"p186896"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p186919","attributes":{"dimension":1,"axis":{"id":"p186915"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p186938","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p186939","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p186935"}]}},{"type":"object","name":"LegendItem","id":"p186946","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p186943"}]}}]}}]}},{"type":"object","name":"Figure","id":"p186947","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p186886"},"y_range":{"type":"object","name":"DataRange1d","id":"p186949"},"x_scale":{"type":"object","name":"LinearScale","id":"p186956"},"y_scale":{"type":"object","name":"LinearScale","id":"p186957"},"title":{"type":"object","name":"Title","id":"p186954"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p186997","attributes":{"data_source":{"id":"p186881"},"view":{"type":"object","name":"CDSView","id":"p186998","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p186999"}}},"glyph":{"type":"object","name":"Scatter","id":"p186994","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p186995","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p186996","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p186955","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p186982"},{"type":"object","name":"WheelZoomTool","id":"p186983","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p186984","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p186985","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p186991","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p186990","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p186992"},{"type":"object","name":"SaveTool","id":"p186993"},{"type":"object","name":"HoverTool","id":"p187001","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p186977","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p186978","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p186979"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p186980"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p186958","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p186959","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p186960","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p186961","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p186962","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p186963","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p186964","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p186965","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p186966","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p186967","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p186968","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p186969","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p186970","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p186971"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p186974","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p186973","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p186972","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p186975"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p186976","attributes":{"axis":{"id":"p186958"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p186981","attributes":{"dimension":1,"axis":{"id":"p186977"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"1bac45ea-090f-4bc7-a86f-f315fc85b384","roots":{"p187002":"f9016b81-938e-4276-9b33-c8630c2e8dd4"},"root_ids":["p187002"]}];
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