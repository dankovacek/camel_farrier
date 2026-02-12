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
    
    
    const element = document.getElementById("ecc49f98-caf6-4ba1-86d5-f5b3ea0a6694");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ecc49f98-caf6-4ba1-86d5-f5b3ea0a6694' but no matching script tag was found.")
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
                  const docs_json = '{"6e3db823-5ddc-4937-be6f-17708edd752d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p771833","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p771834"}}},"roots":[{"type":"object","name":"Column","id":"p771962","attributes":{"children":[{"type":"object","name":"Figure","id":"p771835","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p771836"},"y_range":{"type":"object","name":"DataRange1d","id":"p771837"},"x_scale":{"type":"object","name":"LinearScale","id":"p771845"},"y_scale":{"type":"object","name":"LinearScale","id":"p771846"},"title":{"type":"object","name":"Title","id":"p771838","attributes":{"text":"08NH116 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p771899","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771893","attributes":{"selected":{"type":"object","name":"Selection","id":"p771894","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771895"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYAjxPxx4iIGBYS/rITCttucAmO4v2h94CABWKas1IAAAAA=="},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771900","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771901"}}},"glyph":{"type":"object","name":"VArea","id":"p771896","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p771897","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p771898","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p771910","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771904","attributes":{"selected":{"type":"object","name":"Selection","id":"p771905","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771906"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEhY2RV4CAB0rxv2CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771911","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771912"}}},"glyph":{"type":"object","name":"VArea","id":"p771907","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p771908","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p771909","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p771920","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771914","attributes":{"selected":{"type":"object","name":"Selection","id":"p771915","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771916"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FTSiDcQDA4X9NitRoNTcnqTUHrBYXTg6Y2YfhbfMZE/vMq9lr0+ZzLk6ksJKUOe22w7LDepWsVk6cKFmtVmpObkr9nssjhOjTH9tVIcRV+Ygb9g85MHDAb/U9Hrrb5XtPktt0Cd4u7XAlEWeLOca5b4U7bqOckrb4Rxth6WmT1bjMRtMGn9XC/HcdYu9UkF9aAtz/6OMbZZ2be9ZYrq7ye9rLw84VzjYtc3txiZORRa51L7CjMscPF7PcafPwSaObfwsSz8sz/GyY5t5PF1+eT7Jm3Ml+jYNf8zYeDE9wpsvKrR8WVk7H+Gtk1K7+A6/decWIAQAA"},"shape":[49],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771921","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771922"}}},"glyph":{"type":"object","name":"VArea","id":"p771917","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p771918","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p771919","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p771929","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771923","attributes":{"selected":{"type":"object","name":"Selection","id":"p771924","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771925"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FTyhDcQDA8V8jtmy9+ffMmH+TP2N5erzHy/OnycFpO60UKX9KTpykRC0O4sLJQVaKkpXazYmlVmpS5LCdnEhtKXHwp6nv5/IRQlyPjYQSQgjf3xDvxwf5d8HkuYYBvnsyWN/t52igj23fGi9f9HJmvodHPSrHHrpZ3lZ4fbiLX7/8HIp18uVMB3vdPt65b+PPrVaeMls4+dHMypmXD6ab2FLVyIupen6M1LFpePjkvYalUzevTFbzc7mLx29ljm9Ucq1ewZvZMs4dl3J4wslXTonbkw7eW7Pzj1rCs282TkWtrIWL+chRxNabQl5aLeC0YuHAi+Dzw3ww8Q95yv8koAEAAA=="},"shape":[52],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771930","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771931"}}},"glyph":{"type":"object","name":"VArea","id":"p771926","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p771927","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p771928","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p771938","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771932","attributes":{"selected":{"type":"object","name":"Selection","id":"p771933","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771934"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/x3FWSjDAQDA4T+5kiaanMk8aA+ixAse8KA9zct4cBRKWDFpqFmJlpCGHKlpMWStHMkVIkuGRshEJFfIseQoufP7Xj5BECILJBlWQRBet8J5LTGMe0eCWSkO5OR6MYucfnyW7cuTNh/WxXtz1oAnS0Xu/KFxZfvNr/x/o+KbK1Y+OC3mncWGN772fOE59RO3nD9yrvyeYxZuWZBe817XJQ+5nHN1+SnLjo85RHbED1MHvCTZ53b9Lhd+bnN8iZ09HBt8mGpjy9gqa0OtLG9a5oi3RX4umOfV7VnuSZrmEvMkJwZMsE/DKJ86LTyRY+aG9WFWJAxylKmf30VG3qw1cN9tL5dn9nCKtZP9Yzv4yqDnGa9Wbqpq5uyLRo7O0PHPQj3vSOvY1K1ltauG01U1HHSi5jtZJS9Oq1gfWcb5bUqO+ypmt9IiPnAUsjktnzXjeXLrH4oNiMVoAgAA"},"shape":[77],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771939","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771940"}}},"glyph":{"type":"object","name":"VArea","id":"p771935","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p771936","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p771937","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p771947","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771941","attributes":{"selected":{"type":"object","name":"Selection","id":"p771942","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771943"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[518],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/9v2///+kskZ9tuIpH/9/3/fN6nBfvr///YPq0qg/AKi9eM3NwGNXwC3h1h1xLoLZg6MFgbTAVSnGaAAnT8KBhaQmm5HQ2wogB/1o/QoPUqP0qP0KD1Kj9L0pmndjxgFo4CWgFA6BACF/PkgMBAAAA=="},"shape":[518],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771948","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771949"}}},"glyph":{"type":"object","name":"Line","id":"p771944","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771945","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p771946","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p771957","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771951","attributes":{"selected":{"type":"object","name":"Selection","id":"p771952","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771953"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[518],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/9v2///+kskZ9tuIpH/9/3/fN6nBfvr///YPq0qg/AKi9eM3NwGNXwC3h1h1xLoLZg6MFgbTAVSnGaAAnT8KBhaQmm5HQ2wogB/1o/QoPUqP0qP0KD1Kj9L0pmndjxgFo4CWgFA6BACF/PkgMBAAAA=="},"shape":[518],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771958","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771959"}}},"glyph":{"type":"object","name":"Line","id":"p771954","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771955","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p771956","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p771844","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p771871"},{"type":"object","name":"WheelZoomTool","id":"p771872","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p771873","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p771874","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p771880","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p771879","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p771881","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p771882","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p771883","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p771884","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p771890","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p771889","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p771891"},{"type":"object","name":"SaveTool","id":"p771892"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p771866","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p771867","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p771868"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p771869"}}}],"right":[{"type":"object","name":"Legend","id":"p771902","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p771903","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p771899"}]}},{"type":"object","name":"LegendItem","id":"p771913","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p771910"},{"id":"p771920"},{"id":"p771929"},{"id":"p771938"}]}},{"type":"object","name":"LegendItem","id":"p771950","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p771947"},{"id":"p771957"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p771847","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p771848","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p771849","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p771850","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p771851","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p771852","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p771853","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p771854","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p771855","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p771856","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p771857","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p771858","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p771859","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p771860"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p771863","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p771862","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p771861","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p771864"}}}],"center":[{"type":"object","name":"Grid","id":"p771865","attributes":{"axis":{"id":"p771847"}}},{"type":"object","name":"Grid","id":"p771870","attributes":{"dimension":1,"axis":{"id":"p771866"}}}]}},{"type":"object","name":"Div","id":"p771960","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"6e3db823-5ddc-4937-be6f-17708edd752d","roots":{"p771962":"ecc49f98-caf6-4ba1-86d5-f5b3ea0a6694"},"root_ids":["p771962"]}];
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