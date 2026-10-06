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
    
    
    const element = document.getElementById("a21dff5e-2b43-46d7-883c-7c14f607b2ee");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a21dff5e-2b43-46d7-883c-7c14f607b2ee' but no matching script tag was found.")
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
                  const docs_json = '{"e200dcd3-14a1-4c98-9774-c4c1cbfa7c60":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p140446","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p140447"}}},"roots":[{"type":"object","name":"Column","id":"p140569","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p140451","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02RF009&lt;/strong&gt;:\\n        1 revised days; 0 removed.\\n        0.01% of the earlier published daily record changed.\\n        Affected interval: 2013-04-23 to 2013-04-23;\\n        longest consecutive revision run: 1 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p140452","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p140453"},"y_range":{"type":"object","name":"DataRange1d","id":"p140454"},"x_scale":{"type":"object","name":"LinearScale","id":"p140461"},"y_scale":{"type":"object","name":"LinearScale","id":"p140462"},"title":{"type":"object","name":"Title","id":"p140459"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p140502","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p140448","attributes":{"selected":{"type":"object","name":"Selection","id":"p140449","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p140450"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGAAABzfRCEEAAAA"},"shape":[1],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaOB0flzsBABjOkfICAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAw/uzlAAD5+4cUCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAFvBwA3CHMACAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vz////+pk77QFl848zCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/4vxkbUM2H/cHgBkN6vACAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p140503","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p140504"}}},"glyph":{"type":"object","name":"Scatter","id":"p140499","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p140500","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p140501","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p140510","attributes":{"data_source":{"id":"p140448"},"view":{"type":"object","name":"CDSView","id":"p140511","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p140512"}}},"glyph":{"type":"object","name":"Scatter","id":"p140507","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p140508","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p140509","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p140460","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p140487"},{"type":"object","name":"WheelZoomTool","id":"p140488","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p140489","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p140490","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p140496","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p140495","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p140497"},{"type":"object","name":"SaveTool","id":"p140498"},{"type":"object","name":"HoverTool","id":"p140567","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p140482","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p140483","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p140484"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p140485"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p140463","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p140464","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p140465","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p140466","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p140467","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p140468","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p140469","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p140470","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p140471","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p140472","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p140473","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p140474","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p140475","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p140476"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p140479","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p140478","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p140477","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p140480"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p140481","attributes":{"axis":{"id":"p140463"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p140486","attributes":{"dimension":1,"axis":{"id":"p140482"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p140505","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p140506","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p140502"}]}},{"type":"object","name":"LegendItem","id":"p140513","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p140510"}]}}]}}]}},{"type":"object","name":"Figure","id":"p140514","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p140453"},"y_range":{"type":"object","name":"DataRange1d","id":"p140516"},"x_scale":{"type":"object","name":"LinearScale","id":"p140523"},"y_scale":{"type":"object","name":"LinearScale","id":"p140524"},"title":{"type":"object","name":"Title","id":"p140521"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p140564","attributes":{"data_source":{"id":"p140448"},"view":{"type":"object","name":"CDSView","id":"p140565","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p140566"}}},"glyph":{"type":"object","name":"Scatter","id":"p140561","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p140562","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p140563","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p140522","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p140549"},{"type":"object","name":"WheelZoomTool","id":"p140550","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p140551","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p140552","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p140558","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p140557","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p140559"},{"type":"object","name":"SaveTool","id":"p140560"},{"type":"object","name":"HoverTool","id":"p140568","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p140544","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p140545","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p140546"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p140547"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p140525","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p140526","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p140527","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p140528","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p140529","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p140530","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p140531","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p140532","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p140533","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p140534","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p140535","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p140536","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p140537","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p140538"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p140541","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p140540","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p140539","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p140542"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p140543","attributes":{"axis":{"id":"p140525"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p140548","attributes":{"dimension":1,"axis":{"id":"p140544"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"e200dcd3-14a1-4c98-9774-c4c1cbfa7c60","roots":{"p140569":"a21dff5e-2b43-46d7-883c-7c14f607b2ee"},"root_ids":["p140569"]}];
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