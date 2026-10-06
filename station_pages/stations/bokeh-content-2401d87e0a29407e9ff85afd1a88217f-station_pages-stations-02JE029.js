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
    
    
    const element = document.getElementById("f86e1171-0d5f-44f6-8bbd-27c007e041d5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f86e1171-0d5f-44f6-8bbd-27c007e041d5' but no matching script tag was found.")
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
                  const docs_json = '{"e8be869f-db10-40c6-a09d-3982f3166a25":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p21490","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p21491"}}},"roots":[{"type":"object","name":"Column","id":"p21613","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p21495","attributes":{"text":"&lt;p&gt;&lt;strong&gt;02JE029&lt;/strong&gt;:\\n        27 revised days; 0 removed.\\n        0.40% of the earlier published daily record changed.\\n        Affected interval: 2013-07-15 to 2018-05-31;\\n        longest consecutive revision run: 5 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p21496","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p21497"},"y_range":{"type":"object","name":"DataRange1d","id":"p21498"},"x_scale":{"type":"object","name":"LinearScale","id":"p21505"},"y_scale":{"type":"object","name":"LinearScale","id":"p21506"},"title":{"type":"object","name":"Title","id":"p21503"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p21546","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p21492","attributes":{"selected":{"type":"object","name":"Selection","id":"p21493","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p21494"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhQ2AQBAAsMOdx23/QWmTRkRk5haWVtY2tnb2Do5OziYXVzd3D08vbx9fP39oAOOAbAAAAA=="},"shape":[27],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgOMD262+xEwMDQ7WucwmQdlij4gKiGyRLi8H8Vy+vgWiGAJvrIPrA1j4wzfC89QaY73MDTDvcjbwLFp9/6RFYnEX1MYhuyCoH0w4XToJpBjOZJ2C6ddN7sLzmcuZSEB1uxQaiHfb2gOkD6lMCQDSD4I1osLzEtS6wfJ1GN1je8yyYZrihcAQsr/D+Eph+bm5d5gQA0LoLwdgAAAA="},"shape":[27],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAw/uzuwMDAkJCWFgGiGRgWhIPoA2feBEP4CWkQmiEdyofSDlBaAUo3xIDkF8yM9HH4/////jNnoOaqgWmgTW4QcR83EB9onw6U1oXIM2iD6AUzZ4LFgSAFRDsYb3aC0MYGIBqoD0wvmClpCKKBrFyIeFsIlJ/hAAA8jPRp2AAAAA=="},"shape":[27],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAAF3h////9sbXw53YGRgOHDGJ9wBKHjgDE8wiGZgeJAIoRuSUemEFAgfRjPEgfhA/SEQ8QehIHrBzJluDkwMDAlpz8xBfAfjzXYgOiEtTRtk7/4zZ3Qg6hnUoXwNCN8Bat8BR4j+NCOofmNkPtB92RDz1KDudchwAAD0PNDD2AAAAA=="},"shape":[27],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y3OOw7CMAwGYIepqhiYUDfYYWsFDEiN4CqocIteg0wcxT5AJIZeoFdAdESYP8RZPjl+OiK6dV9ew0s3E1HVZ5wYId5csifzaLbm3tyZlUc7a3/wjsjX77NP/ffwYvw/Qmjko9rHuLH6kVfIN/Vg+0hKxFfck/qIKsGc/30FDMGluciXfgFjnNpct5Xs0izkB3kbjP7YAAAA"},"shape":[27],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/wHYACf/DnQy2pi7D8DVYnxQONoCwKA4juO4Ava/PsVkCN2QEcAGFEZ1mhw0wKc3velNby7AlHwfq9mTMMC77LLLLrsowIp81g2myCfA2FBeQ3kNFUCLFLz+3JpFQGLxa8209FRAdr6V7qYBA8DOeMazZCVHwH16bmt5Kj/AdZgmiEQrDMBJ5FA0mFMAwBTaS2gvoS3Acj/NlcySKsAAAAAAAAAOwJsz2JskUhTA35YbHRUpK0AFeuCuOB80QLEAZ2PKaB5AmMQy9fGgF8CKG+FS7csawJQpYD6QXfi/tApP+dgAAAA="},"shape":[27],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p21547","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p21548"}}},"glyph":{"type":"object","name":"Scatter","id":"p21543","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p21544","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p21545","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p21554","attributes":{"data_source":{"id":"p21492"},"view":{"type":"object","name":"CDSView","id":"p21555","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p21556"}}},"glyph":{"type":"object","name":"Scatter","id":"p21551","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p21552","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p21553","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p21504","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p21531"},{"type":"object","name":"WheelZoomTool","id":"p21532","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p21533","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p21534","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p21540","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p21539","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p21541"},{"type":"object","name":"SaveTool","id":"p21542"},{"type":"object","name":"HoverTool","id":"p21611","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p21526","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p21527","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p21528"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p21529"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p21507","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p21508","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p21509","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p21510","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p21511","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p21512","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p21513","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p21514","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p21515","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p21516","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p21517","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p21518","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p21519","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p21520"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p21523","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p21522","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p21521","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p21524"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p21525","attributes":{"axis":{"id":"p21507"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p21530","attributes":{"dimension":1,"axis":{"id":"p21526"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p21549","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p21550","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p21546"}]}},{"type":"object","name":"LegendItem","id":"p21557","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p21554"}]}}]}}]}},{"type":"object","name":"Figure","id":"p21558","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p21497"},"y_range":{"type":"object","name":"DataRange1d","id":"p21560"},"x_scale":{"type":"object","name":"LinearScale","id":"p21567"},"y_scale":{"type":"object","name":"LinearScale","id":"p21568"},"title":{"type":"object","name":"Title","id":"p21565"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p21608","attributes":{"data_source":{"id":"p21492"},"view":{"type":"object","name":"CDSView","id":"p21609","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p21610"}}},"glyph":{"type":"object","name":"Scatter","id":"p21605","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p21606","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p21607","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p21566","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p21593"},{"type":"object","name":"WheelZoomTool","id":"p21594","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p21595","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p21596","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p21602","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p21601","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p21603"},{"type":"object","name":"SaveTool","id":"p21604"},{"type":"object","name":"HoverTool","id":"p21612","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p21588","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p21589","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p21590"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p21591"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p21569","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p21570","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p21571","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p21572","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p21573","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p21574","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p21575","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p21576","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p21577","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p21578","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p21579","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p21580","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p21581","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p21582"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p21585","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p21584","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p21583","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p21586"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p21587","attributes":{"axis":{"id":"p21569"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p21592","attributes":{"dimension":1,"axis":{"id":"p21588"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"e8be869f-db10-40c6-a09d-3982f3166a25","roots":{"p21613":"f86e1171-0d5f-44f6-8bbd-27c007e041d5"},"root_ids":["p21613"]}];
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