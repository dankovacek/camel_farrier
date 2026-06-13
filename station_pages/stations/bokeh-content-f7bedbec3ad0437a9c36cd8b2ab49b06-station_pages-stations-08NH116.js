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
    
    
    const element = document.getElementById("b247430c-6aa9-4fe7-9aa6-fea14899174b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b247430c-6aa9-4fe7-9aa6-fea14899174b' but no matching script tag was found.")
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
                  const docs_json = '{"77c4ed1f-ba75-4278-a436-67ed8c473944":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p578572","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p578573"}}},"roots":[{"type":"object","name":"Column","id":"p578701","attributes":{"children":[{"type":"object","name":"Figure","id":"p578574","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p578575"},"y_range":{"type":"object","name":"DataRange1d","id":"p578576"},"x_scale":{"type":"object","name":"LinearScale","id":"p578584"},"y_scale":{"type":"object","name":"LinearScale","id":"p578585"},"title":{"type":"object","name":"Title","id":"p578577","attributes":{"text":"08NH116 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p578638","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578632","attributes":{"selected":{"type":"object","name":"Selection","id":"p578633","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578634"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYAjxPxx4iIGBYS/rITCttucAmO4v2h94CABWKas1IAAAAA=="},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578639","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578640"}}},"glyph":{"type":"object","name":"VArea","id":"p578635","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p578636","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p578637","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p578649","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578643","attributes":{"selected":{"type":"object","name":"Selection","id":"p578644","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578645"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYEhY2RV4CAB0rxv2CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578650","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578651"}}},"glyph":{"type":"object","name":"VArea","id":"p578646","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p578647","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p578648","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p578659","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578653","attributes":{"selected":{"type":"object","name":"Selection","id":"p578654","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578655"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FTSiDcQDA4X9NitRoNTcnqTUHrBYXTg6Y2YfhbfMZE/vMq9lr0+ZzLk6ksJKUOe22w7LDepWsVk6cKFmtVmpObkr9nssjhOjTH9tVIcRV+Ygb9g85MHDAb/U9Hrrb5XtPktt0Cd4u7XAlEWeLOca5b4U7bqOckrb4Rxth6WmT1bjMRtMGn9XC/HcdYu9UkF9aAtz/6OMbZZ2be9ZYrq7ye9rLw84VzjYtc3txiZORRa51L7CjMscPF7PcafPwSaObfwsSz8sz/GyY5t5PF1+eT7Jm3Ml+jYNf8zYeDE9wpsvKrR8WVk7H+Gtk1K7+A6/decWIAQAA"},"shape":[49],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578660","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578661"}}},"glyph":{"type":"object","name":"VArea","id":"p578656","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p578657","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p578658","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p578668","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578662","attributes":{"selected":{"type":"object","name":"Selection","id":"p578663","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578664"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FTyhDcQDA8V8jtmy9+ffMmH+TP2N5erzHy/OnycFpO60UKX9KTpykRC0O4sLJQVaKkpXazYmlVmpS5LCdnEhtKXHwp6nv5/IRQlyPjYQSQgjf3xDvxwf5d8HkuYYBvnsyWN/t52igj23fGi9f9HJmvodHPSrHHrpZ3lZ4fbiLX7/8HIp18uVMB3vdPt65b+PPrVaeMls4+dHMypmXD6ab2FLVyIupen6M1LFpePjkvYalUzevTFbzc7mLx29ljm9Ucq1ewZvZMs4dl3J4wslXTonbkw7eW7Pzj1rCs282TkWtrIWL+chRxNabQl5aLeC0YuHAi+Dzw3ww8Q95yv8koAEAAA=="},"shape":[52],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578669","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578670"}}},"glyph":{"type":"object","name":"VArea","id":"p578665","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p578666","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p578667","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p578677","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578671","attributes":{"selected":{"type":"object","name":"Selection","id":"p578672","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578673"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/x3FWSjDAQDA4T+5kiaanMk8aA+ixAse8KA9zct4cBRKWDFpqFmJlpCGHKlpMWStHMkVIkuGRshEJFfIseQoufP7Xj5BECILJBlWQRBet8J5LTGMe0eCWSkO5OR6MYucfnyW7cuTNh/WxXtz1oAnS0Xu/KFxZfvNr/x/o+KbK1Y+OC3mncWGN772fOE59RO3nD9yrvyeYxZuWZBe817XJQ+5nHN1+SnLjo85RHbED1MHvCTZ53b9Lhd+bnN8iZ09HBt8mGpjy9gqa0OtLG9a5oi3RX4umOfV7VnuSZrmEvMkJwZMsE/DKJ86LTyRY+aG9WFWJAxylKmf30VG3qw1cN9tL5dn9nCKtZP9Yzv4yqDnGa9Wbqpq5uyLRo7O0PHPQj3vSOvY1K1ltauG01U1HHSi5jtZJS9Oq1gfWcb5bUqO+ypmt9IiPnAUsjktnzXjeXLrH4oNiMVoAgAA"},"shape":[77],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578678","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578679"}}},"glyph":{"type":"object","name":"VArea","id":"p578674","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p578675","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p578676","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0},"y2":{"type":"value","value":0.008160000387579192},"fill_color":"salmon","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p578686","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578680","attributes":{"selected":{"type":"object","name":"Selection","id":"p578681","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578682"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[518],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9v2///+kskZ9tuIpH/9/3/fN6nBfvr///YPq0rsIfwCovXjsgdiTgLcHJi5MHtg+gipI9ZdMHNgtDDYXwH21KYZoABmLow/Sg9sCJCabgfWtaO2ExcCP+oh6kbp0XAAhcBoOhhNB6PpYDQfjJYDo+UAfcoBavcfRvsNkJQ7StInBAilXwCF/PkgMBAAAA=="},"shape":[518],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578687","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578688"}}},"glyph":{"type":"object","name":"Line","id":"p578683","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_width":2,"line_dash":[2,4]}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1,"line_width":2,"line_dash":[2,4]}},"muted_glyph":{"type":"object","name":"Line","id":"p578685","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2,"line_width":2,"line_dash":[2,4]}}}},{"type":"object","name":"GlyphRenderer","id":"p578696","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p578690","attributes":{"selected":{"type":"object","name":"Selection","id":"p578691","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p578692"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[518],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/9v2///+kskZ9tuIpH/9/3/fN6nBfvr///YPq0rsIfwCovXjsgdiTgLcHJi5MHtg+gipI9ZdMHNgtDDYXwH21KYZoABmLow/Sg9sCJCabgfWtaO2ExcCP+oh6kbp0XAAhcBoOhhNB6PpYDQfjJYDo+UAfcoBavcfRvsNkJQ7StInBAilXwCF/PkgMBAAAA=="},"shape":[518],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p578697","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p578698"}}},"glyph":{"type":"object","name":"Line","id":"p578693","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p578694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p578695","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p578583","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p578610"},{"type":"object","name":"WheelZoomTool","id":"p578611","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p578612","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p578613","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p578619","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p578618","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p578620","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p578621","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p578622","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p578623","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p578629","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p578628","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p578630"},{"type":"object","name":"SaveTool","id":"p578631"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p578605","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p578606","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p578607"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p578608"}}}],"right":[{"type":"object","name":"Legend","id":"p578641","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p578642","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p578638"}]}},{"type":"object","name":"LegendItem","id":"p578652","attributes":{"label":{"type":"value","value":"Q=0 replaced"},"renderers":[{"id":"p578649"},{"id":"p578659"},{"id":"p578668"},{"id":"p578677"}]}},{"type":"object","name":"LegendItem","id":"p578689","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p578686"},{"id":"p578696"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p578586","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p578587","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p578588","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p578589","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p578590","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p578591","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p578592","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p578593","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p578594","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p578595","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p578596","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p578597","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p578598","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p578599"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p578602","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p578601","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p578600","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p578603"}}}],"center":[{"type":"object","name":"Grid","id":"p578604","attributes":{"axis":{"id":"p578586"}}},{"type":"object","name":"Grid","id":"p578609","attributes":{"dimension":1,"axis":{"id":"p578605"}}}]}},{"type":"object","name":"Div","id":"p578699","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"77c4ed1f-ba75-4278-a436-67ed8c473944","roots":{"p578701":"b247430c-6aa9-4fe7-9aa6-fea14899174b"},"root_ids":["p578701"]}];
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