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
    
    
    const element = document.getElementById("d4a8ced7-c94c-4f75-8a78-e88d0a094ff9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd4a8ced7-c94c-4f75-8a78-e88d0a094ff9' but no matching script tag was found.")
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
                  const docs_json = '{"f8b522c2-05bf-460f-8fad-2bf485f3be19":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p181846","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p181847"}}},"roots":[{"type":"object","name":"Column","id":"p181969","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p181851","attributes":{"text":"&lt;p&gt;&lt;strong&gt;05NG001&lt;/strong&gt;:\\n        65 revised days; 0 removed.\\n        0.18% of the earlier published daily record changed.\\n        Affected interval: 2023-10-28 to 2023-12-31;\\n        longest consecutive revision run: 65 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p181852","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p181853"},"y_range":{"type":"object","name":"DataRange1d","id":"p181854"},"x_scale":{"type":"object","name":"LinearScale","id":"p181861"},"y_scale":{"type":"object","name":"LinearScale","id":"p181862"},"title":{"type":"object","name":"Title","id":"p181859"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p181902","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p181848","attributes":{"selected":{"type":"object","name":"Selection","id":"p181849","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p181850"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DBVICQAAAwKM7FARBGpSSkpLm/69id2ZDCCFi1JhxEyZNmTZj1px5CxYtWfbNdytW/bBm3U8bNv2yZduOXXv2HTh05Lc/jp04debcXxcuXbl2459bd+49ePTfk2cvXr159+HTF7P6+gcEAQAA"},"shape":[65],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JTSgDYBzA4b9aUSIOlIuiJCKiVqvV3oi4KCmiRFJEDqsVrdSbg6bVihJxIFLUSimx2XgZYz4iIhFRTooiclgt/E7P4RHR9baNoSoRtepFyXpE4y7f/Fc/jaCqvUbxFwb4TDfqwVNUD7lBvtqJZjmCOj17i3f1otwF0TjSQvxSB6rUNRSnJczfNKO2r6BaiKOkNGzzA/Oorz5R2Wp2+LkpNJZX1H12w1/4UKzPaGYrd/mkUVQ9tyhnxXt8xTDq6XNUibwI3+1CE4uiLsvZ5yf7UeJhNJ0ZB3y0C1XJOspEcpT/aUXd7kcVSaAUNR7yvkXUX9+o2uqOeDODpuANtdcR4z/GUVpe0ISsx3z+GCrPPcp76QnfpFEHLv/8BcPhVwAIAgAA"},"shape":[65],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHgQuEPMgYGBQWGduzCIXuD+UAREAwFY/MHiAiEoDRZ/UCUCUVdgKw7lg9UxXF8M5ifskJMA0/2HJKHy0iAaaC6YrxDTD5MXBfEPyLWCzYXRQPsEoXwwDQQCINrB2FjYgRHIuL6YD8RfUGAL5gPF+UH8BpF13GD60FceEA30DyOYb8sFFnfgus4OFo/p54Dq44SqA9MLZs6EyLe+ZgXxgfqYQeoaXgcyQPX9sgeJvw78AqKB9n+yB8onWN9/b////3/7bZ/fguVfqkFoW67PID7QXjANtPcbiAaG9yewuqw9T0D0gYWuj8Dmva25DzJHfp37TZC5C455Xwerm+p8Gaw/wvIKMv+AwoZLYPUbii5A7T8LovefKDtn/w9Il0w+AeLXHzh1EKQvQSBiJ4h24Fizxv43UL4oY6P93///50vp77UHANwu0zIIAgAA"},"shape":[65],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/1WQr2/CUBSFH2L8aAiwrNsytpEuM5uublKHxiNQ6GpUDRpdR1KP2T/QVONrQVfX79yvXTKu+XrOffe82+ecS8vmKXaUb4zDEL05lM/GY5bhX/IEXSz29MVXY7Cv50bNvRvd93ph3Gy3Af5194FffcI4/Gl9r+JcGnnQVTkM1gdyi+brzah7yU/rVXu+Xr2Y/rtHX612jr2OyyvUXlNjcT6jNf/Q+VA+/6X7H/FPS3zN38Msm9Evm0ncY37c0TNfBbXf6D81h1bO2KiaoJOIPPlovd/I8vRunNc+Q+Nl50MVVN4AJhFa79r2qxzqfW+o/GG3J37qn5hXft+o/7zr+mjyfwGBLfI+CAIAAA=="},"shape":[65],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/02QMUjDUBRFk5gGKR2Dk8ROEkFQqZuGZJFMUrs4ZS4ODnUrLmYJDg7FsejiIE7GDlJKF4uDimYQsZMVm62YRQkpik3if7cI/uXk/n/fe/clSdO02HL1hHEle6tz7LSVLjhUe6Br+iDHDcAZJyDaLeVT59nHnBXifkcb4v46+tJZu71IHUErTkrseB5nEGWXByNVINpadgKsaOJ/srkZ+Ez/714izQ50p6JJBptz5XmCwXLYQWncn+ZQLteMkcuqCeS363Vow6ollE8vl+Hvk5+0E4zfZfcHuYPSiHzpOesjMN+unNC+LDfqGqYPTnarPM3baIbYy3grCsS+amEvVoe8i4VChuZcKA72youbItU93p/gPbfwCk47ATi/PwXfx+wSeLzWBBthDA6e1vE/Vg+2wd7pESi/fEvUd/nyDrq6dQhqOQFM42fMfT+7QZ+HfEMyfgHMf99JCAIAAA=="},"shape":[65],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wEIAvf9xcptrsHm8D+VLAQOIOANQIc0E0OSSRlAL7roIgAAIEA+6Dl4ZW0nQMw6zUmtWi1Absg3rYMHMkAnpOh4oWoyQHbNiyqY6zVAPwrcp/uEN0DsWNWV4t45QJkYyrFFVDtAozvJo1UZPUBTBDY4jzpAQB8IA9Qq/0FAvayNJi3dRECLyKHWZjJHQKYcRnWrqEhAk0PWnIUDTUAKLdjsg11OQAAAAA4AUFBA83FcE1X1TECnIOu3i1FQQFe34PDr5UxA+E1B7NEgTkDre9oR0npNQDD3FQ1qAU1Aq9CexjguVUAaAQEQ5ihRQKRqaepOCk9AwS7muIQbT0BWGukiFEVQQP9N0isqnVBAaCX7EeaxT0CTMJgywJFPQFpuu+Cpl1JAvaSGJC1tVkA93MphMVBcQG9F6ojD4WNAdz00oM4iZ0CSAgMm3mhrQLkfqZPL921APBwNKmVob0Crelfxj2tpQKsC9lVrTWlAqNhvOi9+Z0BFXtDaQ71sQF7WiheLhHhAbJbT2546fECV3sBtppCAQAEZ/8wzsIRAHYNHH2ihhkDnelgeiICLQO9Q/bni1opAZgPF60+KjEDBogQoW9aNQC6SrVWlCpFAmE696cTekkDNbSj149qSQJFjhExVLZdApqr5Xfy1n0ALTkRak7WlQG6bbwAAKrJAMLJNveFFr0AtLipNcG+jQPswCdoIAgAA"},"shape":[65],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p181903","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p181904"}}},"glyph":{"type":"object","name":"Scatter","id":"p181899","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p181900","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p181901","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p181910","attributes":{"data_source":{"id":"p181848"},"view":{"type":"object","name":"CDSView","id":"p181911","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p181912"}}},"glyph":{"type":"object","name":"Scatter","id":"p181907","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p181908","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p181909","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p181860","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p181887"},{"type":"object","name":"WheelZoomTool","id":"p181888","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p181889","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p181890","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p181896","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p181895","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p181897"},{"type":"object","name":"SaveTool","id":"p181898"},{"type":"object","name":"HoverTool","id":"p181967","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p181882","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p181883","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p181884"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p181885"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p181863","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p181864","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p181865","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p181866","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p181867","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p181868","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p181869","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p181870","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p181871","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p181872","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p181873","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p181874","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p181875","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p181876"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p181879","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p181878","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p181877","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p181880"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p181881","attributes":{"axis":{"id":"p181863"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p181886","attributes":{"dimension":1,"axis":{"id":"p181882"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p181905","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p181906","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p181902"}]}},{"type":"object","name":"LegendItem","id":"p181913","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p181910"}]}}]}}]}},{"type":"object","name":"Figure","id":"p181914","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p181853"},"y_range":{"type":"object","name":"DataRange1d","id":"p181916"},"x_scale":{"type":"object","name":"LinearScale","id":"p181923"},"y_scale":{"type":"object","name":"LinearScale","id":"p181924"},"title":{"type":"object","name":"Title","id":"p181921"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p181964","attributes":{"data_source":{"id":"p181848"},"view":{"type":"object","name":"CDSView","id":"p181965","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p181966"}}},"glyph":{"type":"object","name":"Scatter","id":"p181961","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p181962","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p181963","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p181922","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p181949"},{"type":"object","name":"WheelZoomTool","id":"p181950","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p181951","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p181952","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p181958","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p181957","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p181959"},{"type":"object","name":"SaveTool","id":"p181960"},{"type":"object","name":"HoverTool","id":"p181968","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p181944","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p181945","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p181946"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p181947"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p181925","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p181926","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p181927","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p181928","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p181929","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p181930","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p181931","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p181932","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p181933","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p181934","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p181935","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p181936","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p181937","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p181938"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p181941","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p181940","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p181939","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p181942"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p181943","attributes":{"axis":{"id":"p181925"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p181948","attributes":{"dimension":1,"axis":{"id":"p181944"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"f8b522c2-05bf-460f-8fad-2bf485f3be19","roots":{"p181969":"d4a8ced7-c94c-4f75-8a78-e88d0a094ff9"},"root_ids":["p181969"]}];
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