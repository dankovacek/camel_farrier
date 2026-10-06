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
    
    
    const element = document.getElementById("cc84c3d8-9be3-45d6-bf2c-f6393702256f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc84c3d8-9be3-45d6-bf2c-f6393702256f' but no matching script tag was found.")
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
                  const docs_json = '{"cc9b25da-ee79-49ea-9c99-d886e5b68284":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p168159","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p168160"}}},"roots":[{"type":"object","name":"Column","id":"p168282","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p168164","attributes":{"text":"&lt;p&gt;&lt;strong&gt;03LF002&lt;/strong&gt;:\\n        35 revised days; 0 removed.\\n        0.20% of the earlier published daily record changed.\\n        Affected interval: 2022-10-21 to 2023-09-30;\\n        longest consecutive revision run: 6 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p168165","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p168166"},"y_range":{"type":"object","name":"DataRange1d","id":"p168167"},"x_scale":{"type":"object","name":"LinearScale","id":"p168174"},"y_scale":{"type":"object","name":"LinearScale","id":"p168175"},"title":{"type":"object","name":"Title","id":"p168172"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p168215","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p168161","attributes":{"selected":{"type":"object","name":"Selection","id":"p168162","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p168163"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DBw6CQAAAsGPKEFHZAgL+/5G2SUMIITI2MTUz92ZhaWXt3caHrU9fvu3sHRydnF38uLq5+/Xw9PLnHzB9hQCMAAAA"},"shape":[35],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgaMirta9wYmBguJjtCKIbQifXgegDdtc7wfwlml1g+YJzYLrBurgbzGeX6AGrY97SC+abru4D0Q5pi/rB/DNfwPSB3typYHo3wwywvNz7mWB56e7ZYHrTlTlgeXH1uSC6obYSTDs8Pg2mGTzl5oHl1xWAaYYH6fPBfNddYLphNc8CsHrBeDDNUL4RTDc4hS0E85e6LAarX/hgCVh8Xs0yMD9t7wqwvoSvq8H8Q4/XguU1zNZVOAEA7T3jThgBAAA="},"shape":[35],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIIJnQ4gioGjD0KfmAehC7ohdEQXhK7ogNAL2iC0RytUvAlCOzSi0hZQ/oUGiHgGlHaoh/AZoDSM/wDKPwFV5wHVvwJGQ+2paIbonwClC6B0AJR+AVWnAaULoPp/QM01gIpztEDNgfrDA8p/0OwAAAbjYS0YAQAA"},"shape":[35],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIIZnQ4gikGiD0J/mAehK7ohdEIXhG7ogNAz2iC0QytUvAlCezSi0g5Q/o0GiHgBlA6oh/AFoHQBjA+V3wFTB9W/AUonQO1paIbonwGlK6B0BJT+AFVnAKUroPoZoLQFVFygBWoO1B8BUP6LZgcA9ppAyRgBAAA="},"shape":[35],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEP9mCKgcEBQqlAaZg4Br0fou4DjIbqx1BHpDgH1D4BKM1wAGo+mn4lHOLk2otbHwCchtRVGAEAAA=="},"shape":[35],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/8utW5a2x3u/vfjLq7ITFp+y5yucqplg98B+yt05S2009tpbmNRcVY7bZ3/k+GSWdxEH7OsMO5u/rz2433TftPD9pw/tF35TaN6w4qh9wdsDMdYGx+H0G4ZLKYzWx+31zeMubjl13F6sLVGiLfGE/ayZIHDS/qzl8znF507aG4PBY3tJMHhpn79eIJXn2vX9nno2fvWqx+2Dq7ISly4/Zm/Zc/Xafbkf+2+4cnFu6z5iH/tP0Kqx6Ig915qTZ7WmHLHnMch777ztiP0W5wfHjDSO2vdJ8iW8Yz9mP+Ng9JG0D8fsGZ14ouZPArojd80U239H7f+yvzFk/nHYXv2jsdefnkP2uxVYZ//fcdj+xNxFrcYKR+wBNiymWBgBAAA="},"shape":[35],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p168216","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p168217"}}},"glyph":{"type":"object","name":"Scatter","id":"p168212","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p168213","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p168214","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p168223","attributes":{"data_source":{"id":"p168161"},"view":{"type":"object","name":"CDSView","id":"p168224","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p168225"}}},"glyph":{"type":"object","name":"Scatter","id":"p168220","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p168221","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p168222","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p168173","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p168200"},{"type":"object","name":"WheelZoomTool","id":"p168201","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p168202","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p168203","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p168209","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p168208","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p168210"},{"type":"object","name":"SaveTool","id":"p168211"},{"type":"object","name":"HoverTool","id":"p168280","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p168195","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p168196","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p168197"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p168198"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p168176","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p168177","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p168178","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p168179","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p168180","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p168181","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p168182","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p168183","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p168184","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p168185","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p168186","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p168187","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p168188","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p168189"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p168192","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p168191","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p168190","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p168193"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p168194","attributes":{"axis":{"id":"p168176"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p168199","attributes":{"dimension":1,"axis":{"id":"p168195"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p168218","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p168219","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p168215"}]}},{"type":"object","name":"LegendItem","id":"p168226","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p168223"}]}}]}}]}},{"type":"object","name":"Figure","id":"p168227","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p168166"},"y_range":{"type":"object","name":"DataRange1d","id":"p168229"},"x_scale":{"type":"object","name":"LinearScale","id":"p168236"},"y_scale":{"type":"object","name":"LinearScale","id":"p168237"},"title":{"type":"object","name":"Title","id":"p168234"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p168277","attributes":{"data_source":{"id":"p168161"},"view":{"type":"object","name":"CDSView","id":"p168278","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p168279"}}},"glyph":{"type":"object","name":"Scatter","id":"p168274","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p168275","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p168276","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p168235","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p168262"},{"type":"object","name":"WheelZoomTool","id":"p168263","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p168264","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p168265","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p168271","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p168270","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p168272"},{"type":"object","name":"SaveTool","id":"p168273"},{"type":"object","name":"HoverTool","id":"p168281","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p168257","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p168258","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p168259"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p168260"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p168238","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p168239","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p168240","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p168241","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p168242","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p168243","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p168244","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p168245","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p168246","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p168247","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p168248","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p168249","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p168250","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p168251"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p168254","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p168253","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p168252","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p168255"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p168256","attributes":{"axis":{"id":"p168238"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p168261","attributes":{"dimension":1,"axis":{"id":"p168257"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"cc9b25da-ee79-49ea-9c99-d886e5b68284","roots":{"p168282":"cc84c3d8-9be3-45d6-bf2c-f6393702256f"},"root_ids":["p168282"]}];
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