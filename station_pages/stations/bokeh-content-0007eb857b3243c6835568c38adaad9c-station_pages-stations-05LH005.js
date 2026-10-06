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
    
    
    const element = document.getElementById("c1d47097-98f6-4b3e-bbe2-4bbafed9930f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c1d47097-98f6-4b3e-bbe2-4bbafed9930f' but no matching script tag was found.")
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
                  const docs_json = '{"ec5a2df9-228e-4c0d-8e96-af67516d3d1a":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p172559","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p172560"}}},"roots":[{"type":"object","name":"Column","id":"p172682","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p172564","attributes":{"text":"&lt;p&gt;&lt;strong&gt;05LH005&lt;/strong&gt;:\\n        28 revised days; 0 removed.\\n        0.10% of the earlier published daily record changed.\\n        Affected interval: 2024-12-04 to 2024-12-31;\\n        longest consecutive revision run: 28 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p172565","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p172566"},"y_range":{"type":"object","name":"DataRange1d","id":"p172567"},"x_scale":{"type":"object","name":"LinearScale","id":"p172574"},"y_scale":{"type":"object","name":"LinearScale","id":"p172575"},"title":{"type":"object","name":"Title","id":"p172572"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p172615","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p172561","attributes":{"selected":{"type":"object","name":"Selection","id":"p172562","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p172563"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhQ2AAAwAsOHuDv//SZs0IiIxNTO3sLSytrG1s3dwdHJ2cXVz9/D08vbx9fMHYfMlwHAAAAA="},"shape":[28],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgOFD23qLSiYGh4Y6jJYh2cJoCphlWPAPTB3gtrcDyxd1g2uHmXTDNYG9gDZZf0gSmG7iugmmHAnUbsPy1SjB9wPoMmG5YKGcLlmcvBNMMuYfB9IFLonZgeYsMMO0wbxeYZmDhtQfLZ8aD6YbzG8G0gymLA1h+dhiYPsCwEkw3pP0G0w5nfB3B8kYLgDQAMOsH5eAAAAA="},"shape":[28],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIIFAQ5AMiGtDUwzMDiAaQfjyWD6wBkdmLgfiL9g5kwfiLyxN4gGqvSC0Ac8IPKS7hD5z24O////33+GB8wHmuQKkb/pApV3htJOIDoh7ZkjhE4D0wfOnHGA8NUcHJhA8mn2EPWb7UD0gpmSYPrAGR9bEM3A0GADUffMGkpbOQAAOwPFo+AAAAA="},"shape":[28],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEhIawtwYGBgOHBGB0wnpC3zB9ELZkqC+QtmRoL5CWlqviDawbjYG0J/9oSIP/OA0GnuEPHNrlB1KDRQvwtEnZozRN7YCUo7gmigfQ5Q2h5EHzhzxtaBCWRvmg2UtobIz7SC8J9ZgvhAAKYdjI0toOrMobSZAwBk/MeO4AAAAA=="},"shape":[28],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/1XOwQ3CMAwFUBcBoqJA6Sh1Z7IYgy3AvTBKPUAWYAtOCAmEcT+5xJenH39ZcXe/6X2imJM84cDvqUL+In/c4aiVzYosINESjroqFFkjE23sEfcvWuf934G3ed8UptRY1P2qO7yL7O0VuedD7rWzZ5HW4k+eEjIxHwuJutzv7AdhgzC34AAAAA=="},"shape":[28],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wHgAB//8WfCn4k/478cq2fOrPEAwGIndmJP7ATAIdMemhXtBsAbyFzdvroIwE/ztXpGFw3Aw/InKXsVEMB8WTvZ4WESwIZhGIZJkhTA83aGxHTRFcC4+lYODz4YwFMAkGvPJBrAneMX/QTEG8CBTIoX4GwdwHGlqAaVTiDAtQGNVzqLIcC+mVNkO3giwN6gcu2ZHCTA0zluNa1DJcBHgamseZ4mwHfKgvoKJijAss/SBkt6KcChfGIVybUqwDo93O8v6CvA9BQb9v1ZLcBZTGcx6SwuwHutw0UIITDAAiMxJ4e6MMB4SwKG4AAAAA=="},"shape":[28],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p172616","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p172617"}}},"glyph":{"type":"object","name":"Scatter","id":"p172612","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p172613","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p172614","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p172623","attributes":{"data_source":{"id":"p172561"},"view":{"type":"object","name":"CDSView","id":"p172624","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p172625"}}},"glyph":{"type":"object","name":"Scatter","id":"p172620","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p172621","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p172622","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p172573","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p172600"},{"type":"object","name":"WheelZoomTool","id":"p172601","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p172602","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p172603","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p172609","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p172608","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p172610"},{"type":"object","name":"SaveTool","id":"p172611"},{"type":"object","name":"HoverTool","id":"p172680","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p172595","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p172596","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p172597"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p172598"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p172576","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p172577","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p172578","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p172579","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p172580","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p172581","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p172582","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p172583","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p172584","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p172585","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p172586","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p172587","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p172588","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p172589"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p172592","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p172591","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p172590","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p172593"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p172594","attributes":{"axis":{"id":"p172576"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p172599","attributes":{"dimension":1,"axis":{"id":"p172595"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p172618","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p172619","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p172615"}]}},{"type":"object","name":"LegendItem","id":"p172626","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p172623"}]}}]}}]}},{"type":"object","name":"Figure","id":"p172627","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p172566"},"y_range":{"type":"object","name":"DataRange1d","id":"p172629"},"x_scale":{"type":"object","name":"LinearScale","id":"p172636"},"y_scale":{"type":"object","name":"LinearScale","id":"p172637"},"title":{"type":"object","name":"Title","id":"p172634"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p172677","attributes":{"data_source":{"id":"p172561"},"view":{"type":"object","name":"CDSView","id":"p172678","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p172679"}}},"glyph":{"type":"object","name":"Scatter","id":"p172674","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p172675","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p172676","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p172635","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p172662"},{"type":"object","name":"WheelZoomTool","id":"p172663","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p172664","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p172665","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p172671","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p172670","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p172672"},{"type":"object","name":"SaveTool","id":"p172673"},{"type":"object","name":"HoverTool","id":"p172681","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p172657","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p172658","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p172659"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p172660"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p172638","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p172639","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p172640","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p172641","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p172642","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p172643","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p172644","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p172645","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p172646","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p172647","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p172648","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p172649","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p172650","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p172651"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p172654","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p172653","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p172652","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p172655"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p172656","attributes":{"axis":{"id":"p172638"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p172661","attributes":{"dimension":1,"axis":{"id":"p172657"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"ec5a2df9-228e-4c0d-8e96-af67516d3d1a","roots":{"p172682":"c1d47097-98f6-4b3e-bbe2-4bbafed9930f"},"root_ids":["p172682"]}];
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