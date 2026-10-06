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
    
    
    const element = document.getElementById("c0468246-1112-4993-bdac-6471c4c454e3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c0468246-1112-4993-bdac-6471c4c454e3' but no matching script tag was found.")
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
                  const docs_json = '{"8aa798c9-29c8-478a-82f7-608ef3e6a292":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p461865","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p461866"}}},"roots":[{"type":"object","name":"Column","id":"p461988","attributes":{"sizing_mode":"stretch_width","children":[{"type":"object","name":"Div","id":"p461870","attributes":{"text":"&lt;p&gt;&lt;strong&gt;08LB069&lt;/strong&gt;:\\n        64 revised days; 0 removed.\\n        0.30% of the earlier published daily record changed.\\n        Affected interval: 2023-10-23 to 2023-12-31;\\n        longest consecutive revision run: 63 days.&lt;/p&gt;"}},{"type":"object","name":"Figure","id":"p461871","attributes":{"width":850,"height":300,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p461872"},"y_range":{"type":"object","name":"DataRange1d","id":"p461873"},"x_scale":{"type":"object","name":"LinearScale","id":"p461880"},"y_scale":{"type":"object","name":"LinearScale","id":"p461881"},"title":{"type":"object","name":"Title","id":"p461878"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p461921","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p461867","attributes":{"selected":{"type":"object","name":"Selection","id":"p461868","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p461869"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DBVICQAAAwAOlpDukQaW7JP//K3ZnNoQQIkb98NOYcRMmTfll2oxZc+YtWLRk2YpVa9Zt2LTlt207du3Zd+DQkWN//PXPiVNnzl24dOXajVt37j149OTZi/9evXn34dOXb0eRjskAAQAA"},"shape":[64],"dtype":"int32","order":"little"}],["date",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3JTSgDYBzA4b9aUSIOlIuiJCKiVmq1NyIHKSmiRFJEDqsVrdSbgya1okQkIkXtpBabjZcx5iMiEhHlpCgih9Viv9NzeERMw4JvuFpEsp42ExpX+VZC/TyKqu4GxVvo5zNdqIfOUD3mBvgaB5q1MOr07G3e2YdyH0BjTwvyq52oUjdQHJYQf9uC2raOajmGktK4ww8uob7+QlVVu8svzqCxvKHutxn+0oNifUEzX7nHJ42h6r1DOS/e5ytGUM9eoIrnhfkeJ5poBHVZzgE/PYASC6HpyjjkI92oSnwoU8kR/rcNdYcXVTiOUtR0xHtWUH//oGqvP+bNHJqCd9QT9ij/OYnS+oomaD3h88dRuR9QPkpP+WaN2n/17x+fkZq4AAIAAA=="},"shape":[64],"dtype":"float64","order":"little"}],["earlier_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/1WRrROCUBDET8WvZyUzRM1mZl4j0wkks9lEIZttzNDNRP8AuxWz2e7ePs7R9Jvl9m7fHSJSHQ6xF5E2fzplHV/XyqHoV0p5dCs/EfH7Pb/75yn4MrdRnV5zsuoTEn7Wb+8tmTYv9tncW9Ksf+dxPurtMSOH7rgc60vVqC/GOundYz76SOQHXfSRauxDIp9E/kyJfBLzg85c0EU/1e/oI9PyTOIeJPb662svF2q8gzRttNzhFDPffLIr6TfaO6zPNO5DnxH3DvskDfe0/Y115uZ6r/pVhLzRjz2o8R9J3JH83ud+j/wHFNsnWQACAAA="},"shape":[64],"dtype":"float64","order":"little"}],["later_flow",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/22QLQyDQAyFj/0whkYT5Kanl5xD40mGmp5GYdBoHAkejSTo81jQaDRrH9wylqkvr/f62qsQIhkDRwohGqVsZpHnZ6YXZhYzej7BpJ3AZrrAp/1UX/r8wZYG8qCl3SGncdMlr/LBqHaXulLIK153S87z/MjaE+vkboN9UJtMmmeu70fWXuWDNPew+kDygTR3z6R/gOQHKRekvXdM+hfYxw6YOJXB9NIRpL1Q//iCGlr3/+bpOubRHeTttsxtJ/TJId6Q7gstuvJvXb/35Qs5tMfmv3QfaNp3M09cQ/h1n74D9NdeqL8BjTBVaQACAAA="},"shape":[64],"dtype":"float64","order":"little"}],["delta_cms",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/3v9////+1VT9r8G0y1o9JT9/4Di/jvm7S9kYGBIANK/wOqW7P8LpOOB/J9A+jkS/wBUHqbuK5A/febK/ei0DdC8BUji5kB+wI51cHUgfgSQD7F/3X6Y/B+gec2vN4LFw4HyIH47kA8TR6ch7tgCdTeEflyFSt8H8kHmWXNtR1EHE7cHioPkQTTI/Nkzd4Lp6VAaxgfRQGczfNHYs/8OUP4zkAbxf+ChQeYG79gHNh8XfXXxAbA5ba8P4qVboPLYaKDx/w2ND+//AKVhfACZND5gAAIAAA=="},"shape":[64],"dtype":"float64","order":"little"}],["delta_percent",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/5ttl94vLnlz/5NQ5zn6PJf3z5OcW8/94fL+l083rHXa9mT/D13b+Wba7/dvr7/X9rXy3f5bMd0qN0I/79dpM6rgS3+zf4/NC5/tRz7tv8B5YunswDf7i+uEpshafN4vpHu1L2XS5/2ubxd6/d7wYz9bQks835sf+9cyc5Xwifzc///Ik6VzUn/uD1gWqx/x8+f+TPFGjUfr/u+/GLdY/KDv7/0v3rZyOPYyHMhPil7E/Y3hgOXZmCPKLowHVGyev3RrZjkgFLZznthLxgPl3MqzanhZD1xc5OWlOJ/1wImwqrlfvrIe6BCo1X1kwXbgyVutyy83cx446mb9U52F60Bb5taqtDCuA2dXVIvzPOE6kCU5+dvmSO4DGrU2l5/78h9Q7Fn5m38a94GEwqrrsXLcB4TeZ3aqKvAdENMpWGq0kPeAsI4c68xggQMPLF7bsisKwPkw8S2//D2ulQoeqLt5X31pu+CBw9b3H33YK3ig3rOLu1dPCE7PvFFUmyotdCDh/tuXzdOFDzywvDDp9AHhA3u2rhcTWoOgO//PPfTPX+TAVrcq0/iLIge07v429mxG0A4nt4V88RI9UJqge1WMR+xAw3/jVf/uix7oTxUsNzklCg0X0QOvP6bOrXYUPzDvVIFYW7v4gUJZnhvrhcUPAACQt0KcAAIAAA=="},"shape":[64],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p461922","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461923"}}},"glyph":{"type":"object","name":"Scatter","id":"p461918","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p461919","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p461920","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"earlier_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p461929","attributes":{"data_source":{"id":"p461867"},"view":{"type":"object","name":"CDSView","id":"p461930","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461931"}}},"glyph":{"type":"object","name":"Scatter","id":"p461926","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"fill_color":{"type":"value","value":"#EE6677"},"hatch_color":{"type":"value","value":"#EE6677"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p461927","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p461928","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"later_flow"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#EE6677"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#EE6677"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#EE6677"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p461879","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p461906"},{"type":"object","name":"WheelZoomTool","id":"p461907","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p461908","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p461909","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p461915","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p461914","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p461916"},{"type":"object","name":"SaveTool","id":"p461917"},{"type":"object","name":"HoverTool","id":"p461986","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p461901","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p461902","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p461903"},"axis_label":"Published daily mean flow (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p461904"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p461882","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p461883","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p461884","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p461885","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p461886","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p461887","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p461888","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p461889","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p461890","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p461891","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p461892","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p461893","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p461894","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p461895"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p461898","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p461897","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p461896","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p461899"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p461900","attributes":{"axis":{"id":"p461882"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p461905","attributes":{"dimension":1,"axis":{"id":"p461901"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Legend","id":"p461924","attributes":{"border_line_alpha":0,"background_fill_alpha":0,"click_policy":"hide","label_text_font_size":"10pt","items":[{"type":"object","name":"LegendItem","id":"p461925","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20250715"},"renderers":[{"id":"p461921"}]}},{"type":"object","name":"LegendItem","id":"p461932","attributes":{"label":{"type":"value","value":"Hydat_sqlite3_20260717"},"renderers":[{"id":"p461929"}]}}]}}]}},{"type":"object","name":"Figure","id":"p461933","attributes":{"width":850,"height":220,"sizing_mode":"stretch_width","x_range":{"id":"p461872"},"y_range":{"type":"object","name":"DataRange1d","id":"p461935"},"x_scale":{"type":"object","name":"LinearScale","id":"p461942"},"y_scale":{"type":"object","name":"LinearScale","id":"p461943"},"title":{"type":"object","name":"Title","id":"p461940"},"outline_line_color":null,"renderers":[{"type":"object","name":"GlyphRenderer","id":"p461983","attributes":{"data_source":{"id":"p461867"},"view":{"type":"object","name":"CDSView","id":"p461984","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p461985"}}},"glyph":{"type":"object","name":"Scatter","id":"p461980","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"fill_color":{"type":"value","value":"#4477AA"},"hatch_color":{"type":"value","value":"#4477AA"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p461981","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p461982","attributes":{"x":{"type":"field","field":"date"},"y":{"type":"field","field":"delta_cms"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#4477AA"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#4477AA"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"#4477AA"},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p461941","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p461968"},{"type":"object","name":"WheelZoomTool","id":"p461969","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p461970","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p461971","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p461977","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p461976","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p461978"},{"type":"object","name":"SaveTool","id":"p461979"},{"type":"object","name":"HoverTool","id":"p461987","attributes":{"renderers":"auto","tooltips":[["Date","@date{%F}"],["Earlier / later","@earlier_flow / @later_flow"],["Change (m3/s)","@delta_cms{0.000}"],["Change (%)","@delta_percent{0.00}"]],"formatters":{"type":"map","entries":[["@date","datetime"]]},"sort_by":null}}]}},"left":[{"type":"object","name":"LinearAxis","id":"p461963","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p461964","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p461965"},"axis_label":"Later - earlier (m3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p461966"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p461944","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p461945","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p461946","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p461947","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p461948","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p461949","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p461950","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p461951","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p461952","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p461953","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p461954","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p461955","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p461956","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p461957"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p461960","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p461959","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p461958","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"major_label_policy":{"type":"object","name":"AllLabels","id":"p461961"},"axis_line_color":"#333333","minor_tick_line_color":null}}],"center":[{"type":"object","name":"Grid","id":"p461962","attributes":{"axis":{"id":"p461944"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}},{"type":"object","name":"Grid","id":"p461967","attributes":{"dimension":1,"axis":{"id":"p461963"},"grid_line_color":"#E5E5E5","grid_line_alpha":0.5,"grid_line_width":0.5}}]}}]}}]}}';
                  const render_items = [{"docid":"8aa798c9-29c8-478a-82f7-608ef3e6a292","roots":{"p461988":"c0468246-1112-4993-bdac-6471c4c454e3"},"root_ids":["p461988"]}];
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