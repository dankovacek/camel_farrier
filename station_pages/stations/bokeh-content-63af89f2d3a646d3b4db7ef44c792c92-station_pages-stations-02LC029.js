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
    
    
    const element = document.getElementById("d2b2f89c-fa05-444c-9948-1ce2e8d3ddb3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd2b2f89c-fa05-444c-9948-1ce2e8d3ddb3' but no matching script tag was found.")
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
                  const docs_json = '{"bd02a248-4619-4b7c-86ad-e1a046dbffe2":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p27815","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p27816"}}},"roots":[{"type":"object","name":"Column","id":"p27938","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p27820","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02LC029&lt;/strong&gt;:\\n        3 revised days; 0 removed.\\n        0.01% of the earlier published daily record changed.\\n        Affected interval: 2012-08-03 to 2014-11-22;\\n        longest consecutive revision run: 1 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p27821","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p27822"},"y_range":{"type":"object","name":"DataRange1d","id":"p27823"},"x_scale":{"type":"object","name":"LinearScale","id":"p27830"},"y_scale":{"type":"object","name":"LinearScale","id":"p27831"},"title":{"type":"object","name":"Title","id":"p27828"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p27871","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p27817","attributes":{"selected":{"type":"object","name":"Selection","id":"p27818","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p27819"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGBgBGImIAYAeg52HQwAAAA="},"shape":[3],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgcGic01fsxMDAEFIbVgKij/rMLXECAN2geQIYAAAA"},"shape":[3],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAw3mzgwAACE5ohdEOAAwAb5HQHGAAAAA=="},"shape":[3],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAFDBzC1oRlCNwQ5AABdV3/xGAAAAA=="},"shape":[3],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGAwML5sD6SAQMABQis4AACtkrz6GAAAAA=="},"shape":[3],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9s+acVUgX1/7GP/CVo1Fj2xt/3xoJnfTsMBAGj4z6gYAAAA"},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p27872","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27873"}}},"glyph":{"type":"object","name":"Scatter","id":"p27868","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p27869","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p27870","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p27879","attributes":{"data_source":{"id":"p27817"},"view":{"type":"object","name":"CDSView","id":"p27880","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27881"}}},"glyph":{"type":"object","name":"Scatter","id":"p27876","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p27877","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p27878","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p27829","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p27856"},{"type":"object","name":"WheelZoomTool","id":"p27857","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p27858","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p27859","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p27865","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p27864","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p27866"},{"type":"object","name":"SaveTool","id":"p27867"},{"type":"object","name":"HoverTool","id":"p27936","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p27851","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p27852","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p27853"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p27854"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p27832","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p27833","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p27834","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p27835","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p27836","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p27837","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p27838","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p27839","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p27840","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p27841","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p27842","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p27843","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p27844","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p27845"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p27848","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p27847","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p27846","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p27849"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p27850","attributes":{"axis":{"id":"p27832"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p27855","attributes":{"dimension":1,"axis":{"id":"p27851"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p27874","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p27875","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p27871"}]}},{"type":"object","name":"LegendItem","id":"p27882","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p27879"}]}}]}}]}},{"type":"object","name":"Figure","id":"p27883","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p27822"},"y_range":{"type":"object","name":"DataRange1d","id":"p27885"},"x_scale":{"type":"object","name":"LinearScale","id":"p27892"},"y_scale":{"type":"object","name":"LinearScale","id":"p27893"},"title":{"type":"object","name":"Title","id":"p27890"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p27933","attributes":{"data_source":{"id":"p27817"},"view":{"type":"object","name":"CDSView","id":"p27934","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27935"}}},"glyph":{"type":"object","name":"Scatter","id":"p27930","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p27931","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p27932","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p27891","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p27918"},{"type":"object","name":"WheelZoomTool","id":"p27919","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p27920","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p27921","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p27927","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p27926","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p27928"},{"type":"object","name":"SaveTool","id":"p27929"},{"type":"object","name":"HoverTool","id":"p27937","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p27913","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p27914","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p27915"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p27916"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p27894","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p27895","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p27896","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p27897","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p27898","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p27899","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p27900","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p27901","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p27902","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p27903","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p27904","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p27905","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p27906","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p27907"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p27910","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p27909","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p27908","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p27911"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p27912","attributes":{"axis":{"id":"p27894"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p27917","attributes":{"dimension":1,"axis":{"id":"p27913"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"bd02a248-4619-4b7c-86ad-e1a046dbffe2","roots":{"p27938":"d2b2f89c-fa05-444c-9948-1ce2e8d3ddb3"},"root_ids":["p27938"]}];
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