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
    
    
    const element = document.getElementById("b1d578c0-429c-44d4-9ac1-ade7caa570a9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b1d578c0-429c-44d4-9ac1-ade7caa570a9' but no matching script tag was found.")
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
                  const docs_json = '{"af213429-6ecd-4a18-98c1-4344fa5d70ab":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p935222","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p935223"}}},"roots":[{"type":"object","name":"Column","id":"p935345","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p935227","attributes":{"text":"&lt;p&gt;&lt;strong&gt;09AH001&lt;/strong&gt;:\\n        42 revised days; 0 removed.\\n        0.26% of the earlier published daily record changed.\\n        Affected interval: 2023-11-20 to 2023-12-31;\\n        longest consecutive revision run: 42 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p935228","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p935229"},"y_range":{"type":"object","name":"DataRange1d","id":"p935230"},"x_scale":{"type":"object","name":"LinearScale","id":"p935237"},"y_scale":{"type":"object","name":"LinearScale","id":"p935238"},"title":{"type":"object","name":"Title","id":"p935235"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p935278","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p935224","attributes":{"selected":{"type":"object","name":"Selection","id":"p935225","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p935226"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DiRKBUAAAwFcSUsrR4UgI5f9/0O7MhhBCZOzCxKWpK9duzNyaW7iztHLvwaMnaxtbO89evHqz9+7gw6cvR99+/Do5+/MPvPDE8qgAAAA="},"shape":[42],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JMUiCURSA0SsEra6NCQ1GIRQIQuBDCFqjIRIEkUBQ3BxagjuJEggJUdRQ4OraEKhdNX+1iKKWoCloChKKxCGQ7JvOcEQsd9Hci4no8ze6yPr1v3J+jDbzgZpZM/6xjBJ+QztbbfG+Arr0C8r9Yptf2Uc9eUA3me/wu3m0gYcamrvhj7Iovw20pL/Leyl0S5colVmPH++gJmroOhOU4GaPL1dRf0bo4ht93k7RFj5RD6ID/usQZfsdrR6+5QMldMVXlOHyHb+lqFdPU/8AmkDLX1ABAAA="},"shape":[42],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/13KrRGDQBRF4VfCSuSWQAlIJDIyMhIVyD8JSfSWspISKCFyZSQlJMw9M8yw5ptz95n9n38XM/Z5ScPvUz3Su9Ve828Yet17jA91iemubjHDodO+wemmLjBc1ekicwxn9XSSFcaj2mF34K6VW0yNukaHcc+OFeYrPe0Wf8LmR69QAQAA"},"shape":[42],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/zXMLRLCMBAG0EhkJRKJzBFyBCQyR+gJSvmbQSKRSCRHqERWIiORyEpg8ljzZvfb3RC+NR3Tj3Dh41D7kf95li9Y5FdmLvna1z83toycdjUfeOKKc5atP2yZOOOzt8eea0Y2fG/q/p1nZiZGNgwsXb0fOXTpAyIdWoZQAQAA"},"shape":[42],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/13Luw2DMBCA4SszQAoKFx6AMhWVpUiREBIiQF48BGziUbJJPFJGCHC/m7j5dL/vRLZ3DDti0eABE/x+dM84NcUTZqp3eKZfMKcXzKXqKvpVDTU22OIN7/jg7okv7PjvccBRlUm1M/soi84zvjH8GbunR9e7H/7HZz5QAQAA"},"shape":[42],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2sx9e7xn/lsf7Km7e9r/p/2r14FAh/2z3x64rzo5jv7e6TvXnvf/Xq/WEi137L1h/bPNDDdeWbvB3smIX9eSQVGBwYw4HRYM0/vP8dcAYdJE0FA1EGRO/KEk5iUQ9xDUSCSc9DVZHdpq1Z0UBPJ0Zm4VtlBbuv9MrEPqg7OazR6+300HKR/xx44ekTLYVXo6rC1UboOs2aCgL5DbvjH3YY/DRwmim/jyjI2ctjupnolv8bY4eacFbtXnjRxKGxdqdH+xtRB4Mo/S89wcwfvfuN/HJctHN7Fspckz7Ny2LAeCPRtHAznHi0Ru2zrsLPm9Paa0/YOuYJnI5sfOUDtcXSQ1NWvmZvr5DDr04+5CarODocmMPv6LHZ24Ah8zB742BnqTxeHut1XJn+87exw+dzBWarHnB2cVfr21FxxdlB9G8litcHZAQBc5k+LUAEAAA=="},"shape":[42],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p935279","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p935280"}}},"glyph":{"type":"object","name":"Scatter","id":"p935275","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p935276","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p935277","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p935286","attributes":{"data_source":{"id":"p935224"},"view":{"type":"object","name":"CDSView","id":"p935287","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p935288"}}},"glyph":{"type":"object","name":"Scatter","id":"p935283","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p935284","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p935285","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p935236","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p935263"},{"type":"object","name":"WheelZoomTool","id":"p935264","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p935265","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p935266","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p935272","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p935271","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p935273"},{"type":"object","name":"SaveTool","id":"p935274"},{"type":"object","name":"HoverTool","id":"p935343","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p935258","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p935259","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p935260"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p935261"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p935239","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p935240","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p935241","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p935242","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p935243","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p935244","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p935245","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p935246","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p935247","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p935248","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p935249","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p935250","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p935251","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p935252"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p935255","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p935254","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p935253","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p935256"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p935257","attributes":{"axis":{"id":"p935239"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p935262","attributes":{"dimension":1,"axis":{"id":"p935258"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p935281","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p935282","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p935278"}]}},{"type":"object","name":"LegendItem","id":"p935289","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p935286"}]}}]}}]}},{"type":"object","name":"Figure","id":"p935290","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p935229"},"y_range":{"type":"object","name":"DataRange1d","id":"p935292"},"x_scale":{"type":"object","name":"LinearScale","id":"p935299"},"y_scale":{"type":"object","name":"LinearScale","id":"p935300"},"title":{"type":"object","name":"Title","id":"p935297"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p935340","attributes":{"data_source":{"id":"p935224"},"view":{"type":"object","name":"CDSView","id":"p935341","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p935342"}}},"glyph":{"type":"object","name":"Scatter","id":"p935337","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p935338","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p935339","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p935298","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p935325"},{"type":"object","name":"WheelZoomTool","id":"p935326","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p935327","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p935328","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p935334","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p935333","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p935335"},{"type":"object","name":"SaveTool","id":"p935336"},{"type":"object","name":"HoverTool","id":"p935344","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p935320","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p935321","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p935322"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p935323"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p935301","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p935302","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p935303","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p935304","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p935305","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p935306","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p935307","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p935308","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p935309","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p935310","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p935311","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p935312","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p935313","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p935314"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p935317","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p935316","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p935315","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p935318"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p935319","attributes":{"axis":{"id":"p935301"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p935324","attributes":{"dimension":1,"axis":{"id":"p935320"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"af213429-6ecd-4a18-98c1-4344fa5d70ab","roots":{"p935345":"b1d578c0-429c-44d4-9ac1-ade7caa570a9"},"root_ids":["p935345"]}];
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