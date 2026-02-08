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
    
    
    const element = document.getElementById("e26867ac-969b-4dfe-8cc4-f06a196e9b2a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e26867ac-969b-4dfe-8cc4-f06a196e9b2a' but no matching script tag was found.")
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
                  const docs_json = '{"c5735b80-e396-4634-8e2e-51d131a96da6":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p180643","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p180644"}}},"roots":[{"type":"object","name":"Column","id":"p180781","attributes":{"children":[{"type":"object","name":"Figure","id":"p180645","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p180646"},"y_range":{"type":"object","name":"DataRange1d","id":"p180647"},"x_scale":{"type":"object","name":"LinearScale","id":"p180655"},"y_scale":{"type":"object","name":"LinearScale","id":"p180656"},"title":{"type":"object","name":"Title","id":"p180648","attributes":{"text":"08HD013 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p180709","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p180703","attributes":{"selected":{"type":"object","name":"Selection","id":"p180704","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p180705"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYDD6k+7nBAACAsPJCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p180710","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p180711"}}},"glyph":{"type":"object","name":"VArea","id":"p180706","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p180707","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p180708","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p180720","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p180714","attributes":{"selected":{"type":"object","name":"Selection","id":"p180715","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p180716"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJjzYoafEwDQ1zdnCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p180721","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p180722"}}},"glyph":{"type":"object","name":"VArea","id":"p180717","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p180718","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p180719","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p180729","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p180723","attributes":{"selected":{"type":"object","name":"Selection","id":"p180724","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p180725"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYOh6+NbPiYGBYUfJBz8nACjwDr4QAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p180730","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p180731"}}},"glyph":{"type":"object","name":"VArea","id":"p180726","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p180727","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p180728","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p180738","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p180732","attributes":{"selected":{"type":"object","name":"Selection","id":"p180733","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p180734"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFgjpenvxMDAcGutNpjmcNTzdwIA82ybOhgAAAA="},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p180739","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p180740"}}},"glyph":{"type":"object","name":"VArea","id":"p180735","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p180736","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p180737","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p180747","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p180741","attributes":{"selected":{"type":"object","name":"Selection","id":"p180742","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p180743"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJj0y9TfCQDXCazqCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p180748","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p180749"}}},"glyph":{"type":"object","name":"VArea","id":"p180744","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p180745","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p180746","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p180756","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p180750","attributes":{"selected":{"type":"object","name":"Selection","id":"p180751","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p180752"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYAjecCvIiYGB4dXP22C60flukBMAC4Lv6xgAAAA="},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p180757","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p180758"}}},"glyph":{"type":"object","name":"VArea","id":"p180753","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p180754","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p180755","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p180765","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p180759","attributes":{"selected":{"type":"object","name":"Selection","id":"p180760","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p180761"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYNDYnxfsBABhLY+aCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p180766","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p180767"}}},"glyph":{"type":"object","name":"VArea","id":"p180762","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p180763","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p180764","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.0009800000465474518},"y2":{"type":"value","value":0.06222000069916247},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p180774","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p180768","attributes":{"selected":{"type":"object","name":"Selection","id":"p180769","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p180770"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[945],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+2YPUoEMRTHpxJ7D2DvFSxyAsEbKGKxlSwyhYiwKqIiFq6rroXgBQQ7K9EzWFirhZYigiDK+sxm9h/YDJnMV3Zm4W3zI5nk5YOZ7C8vCPq/71ZQEXtENLN3JnzFfyW6X220Y/E/ZH3Y2Rfgs5rHribqZbF1d3mg+UgkJq8OY/wheppbOtL8le27K8dWvhEt3IYdgfVH453rMvhFND2xdSre5Tgv6ye6nys+1g2a88O8H1Tcndg+oD5qvylu1PO1Qb+NGNEOZbQHuypeqBm1bw6eN0bGaNzFwv1dnFKcZzoYVHz+MJlFyO8xk8n0zU/lVRdjd86YHpiWkcduxzwTz+Gr8GHTa0F4u81vMY6LNq+1ea7Nl139yiL8umz69vKsLNo/q6+7xi8aB+T7QfK+1W0+w2zq8yXv+1HXe5lv38U+8f8+k8kcV/5JL12evR75OWbmq818dlaaeXEzXlafRp7YzBenZdr7Q9XenOy59nbD+XS3byd7iD8PLstzXeuyxbN5f95+WfeH8/1+ie+x7veBvOPj+0b5H26W/oSIHQAA"},"shape":[945],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p180775","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p180776"}}},"glyph":{"type":"object","name":"Line","id":"p180771","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p180772","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p180773","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p180654","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p180681"},{"type":"object","name":"WheelZoomTool","id":"p180682","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p180683","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p180684","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p180690","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p180689","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p180691","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p180692","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p180693","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p180694","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p180700","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p180699","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p180701"},{"type":"object","name":"SaveTool","id":"p180702"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p180676","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p180677","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p180678"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p180679"}}}],"right":[{"type":"object","name":"Legend","id":"p180712","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p180713","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p180709"},{"id":"p180720"},{"id":"p180729"},{"id":"p180738"},{"id":"p180747"},{"id":"p180756"},{"id":"p180765"}]}},{"type":"object","name":"LegendItem","id":"p180777","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p180774"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p180657","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p180658","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p180659","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p180660","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p180661","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p180662","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p180663","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p180664","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p180665","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p180666","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p180667","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p180668","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p180669","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p180670"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p180673","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p180672","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p180671","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p180674"}}}],"center":[{"type":"object","name":"Grid","id":"p180675","attributes":{"axis":{"id":"p180657"}}},{"type":"object","name":"Grid","id":"p180680","attributes":{"dimension":1,"axis":{"id":"p180676"}}}]}},{"type":"object","name":"Div","id":"p180778","attributes":{"text":"No site visit information available for this station."}},{"type":"object","name":"Div","id":"p180780","attributes":{"text":"&lt;h2&gt;Rating Curve Table&lt;/h2&gt;"}},{"type":"object","name":"Div","id":"p180779","attributes":{"text":"No rating curve data available for this station."}}]}}]}}';
                  const render_items = [{"docid":"c5735b80-e396-4634-8e2e-51d131a96da6","roots":{"p180781":"e26867ac-969b-4dfe-8cc4-f06a196e9b2a"},"root_ids":["p180781"]}];
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