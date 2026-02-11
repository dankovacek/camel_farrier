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
    
    
    const element = document.getElementById("e56fbe9d-e1fc-4632-b802-855e7512d7e8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e56fbe9d-e1fc-4632-b802-855e7512d7e8' but no matching script tag was found.")
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
                  const docs_json = '{"e2b8e71a-9e62-4260-9f99-f65b5ff9f83c":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p314282","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p314283"}}},"roots":[{"type":"object","name":"Column","id":"p314403","attributes":{"children":[{"type":"object","name":"Figure","id":"p314284","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p314285"},"y_range":{"type":"object","name":"DataRange1d","id":"p314286"},"x_scale":{"type":"object","name":"LinearScale","id":"p314294"},"y_scale":{"type":"object","name":"LinearScale","id":"p314295"},"title":{"type":"object","name":"Title","id":"p314287","attributes":{"text":"08MF071 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p314348","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p314342","attributes":{"selected":{"type":"object","name":"Selection","id":"p314343","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p314344"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFi+gT3TiYGhoSiUA0Qz2P0C0w2c8znB/KvOXGD+ghdgmiGnlxvMNzfiAfOZr4PphnPVvGD+LAU+MD/1KJhmMMziz3QCALRV0sxoAAAA"},"shape":[13],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p314349","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p314350"}}},"glyph":{"type":"object","name":"VArea","id":"p314345","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.1989399942755699},"y2":{"type":"value","value":6.334200038909912},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p314346","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.1989399942755699},"y2":{"type":"value","value":6.334200038909912},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p314347","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.1989399942755699},"y2":{"type":"value","value":6.334200038909912},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p314359","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p314353","attributes":{"selected":{"type":"object","name":"Selection","id":"p314354","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p314355"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFC21s1yYmBoeHcfTDPsatHLcgIARiEWZRgAAAA="},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p314360","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p314361"}}},"glyph":{"type":"object","name":"VArea","id":"p314356","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.1989399942755699},"y2":{"type":"value","value":6.334200038909912},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p314357","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.1989399942755699},"y2":{"type":"value","value":6.334200038909912},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p314358","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.1989399942755699},"y2":{"type":"value","value":6.334200038909912},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p314368","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p314362","attributes":{"selected":{"type":"object","name":"Selection","id":"p314363","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p314364"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaBD0n53lxMDAcPczmG5YMWMOmF9iOzfLCQC7s4LwIAAAAA=="},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p314369","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p314370"}}},"glyph":{"type":"object","name":"VArea","id":"p314365","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.1989399942755699},"y2":{"type":"value","value":6.334200038909912},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p314366","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.1989399942755699},"y2":{"type":"value","value":6.334200038909912},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p314367","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":0.1989399942755699},"y2":{"type":"value","value":6.334200038909912},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p314377","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p314371","attributes":{"selected":{"type":"object","name":"Selection","id":"p314372","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p314373"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[699],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/+1YbUibVxR+Y61m1rowuiGjuFDKmO2PUooMGZJbpEgZpZRuo4i0QaSUIkOkjFLKklLEHyIiRaQ/ig4ZwjaKDBEppQZ/FBczSTX1szFvGq31I4mxZmmrNbv3ueeNV2gHK+6DLf55PPe995xzzz3n5JyjaeLvuUP7izGZTDrutUVsnNA7auI2E/+nsGJN0OzIEaB+qvelQOee2wmsB6+sCmy/eTNm4+c/+vlWVGDyx73g4yqoiwq01i3GcP7KnhWsxz9Zxvph85JAbeTEAuj6D+bBL3x1DhgbnqX9M5BXaQFqP8SeAMc6QOtDiRD215RgXffuA23Nuha0yfvp0Hv+46DQz9bzzI/vE0PYZ2/q99M9n9G91kn/tdfZgd/nBc6dP/8b+C6eWn3dfmtF00s6B3vZewvi2N8fXyV7rhC9THouE9+I0PNcb0GY7r9EegFdHs+Sug6a7w901ITpPmGydyTFT+5bpvdLCj25Xu8wySeDSX03SK8sJu0psSyI7/yddzCpR4Z6jvPPZNJv3hXoLMnJZtJOO2jdxKRckyqH838Tgh+3i1nVg/PLJjqXST1zic5j8j6Qz+9tYdLeFjq3m8n75xDfLCbs29SfTffIIn4Z9F1j2t8Ud/8vNPx8W/hxv4oJP3baiuDfzuo55BuWmxGluDTiaYX8f5XiErS9uPsp5QnkHWt51SLW37uOuHJevLsE/kftiCdn69cRQXM/iVAekPkq2rmAuD9YH6G8FVbj19pVC37tx3rAn8eHlHP3kqRv5EMPLgf5TrvWEiI9H4P+IhSk70Bmn9VJTx1yPgsEkHcP1E9j34Vm5DPNcfER8sJQYgry8zOnSS8/8nV51RS+e/dNqXRbWXAS/O8chxxX4jTO6533Q8gb3QOQo7/4dhLnT1SOC+y7FR1Dfu0eGAU//35gn/u7h1ivtIxTfgLdVtrgAx7rGaF3G6H8Pwb88JCffhcm8D1wEnonT4ew7qq9EEzldXHfDZ9OeW/alo63/zbKOEy/cxrfiPx3fT3tH2n8t6P1dlks7afbiIUV2dSnmKmuB/L+bCf1MTupHzD6C/Mf1ft8v4n4vH1fIOqggrrk27wz18/ozzSm9qcez3PqNxPUh8fVPhZ9t6iXRjuWU/WrUoe27y1/SvXY7J/RizW2ol9nRWefbOnPG1sfU90WRN1ckhNQ+2u+7xH0uu6S9aXlzATqxK7acepLx4jPqFon8noV6Dhqf0j1OtDeHPYJOdbDZh/VqagfXdauYdSpRWeHyQ4PYAff5QdUT4J29Me9VE97Iae4G7Tr0g0v1bVb0HGvDfzsoe9H/vF4fYX62QO97xz3wN7Vc4PQt/P+IOxSXrWJG1z/ltJBqvc38RXqfTfdz011vVvsb6spAW2fW/uF5jruFD/pV16ap/yq6oHvBl9DT+V9U+9K9rZmfjUk5J1rDnvITzxk58HU+wk8U+wjOXhvZ0vpCM0Lhqkf8qrvzONhgvoD+Fnyy7wt/rPd72L0Q32ffzpB9hkX9uB95jjF3yTdA32KlnEwoPYr+uV52b/ZijbjSPin+SddRe7viDeny424bS9tmKF+b4bmX5if8T5NxufANwYuEJ8ldU7HGqqjNA+KqvnC+F0y5nbcntnq3IX31Roz8o88t05zrt00V8mlfKVR/k2k8pLwk0N+Of8rrNjSF7eXBbfO9042hsh+sIvVvx+oX7UFVXtye4WJP5DljCFvc8xnUs4umhOZKP9rNAfalZpPmTA3gL4c36d8b/w+aEyZ+xlzNeMdeD6aobw8Y1N+f5z9cQuT/Upeaj72O8B8o+DYFQAA"},"shape":[699],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p314378","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p314379"}}},"glyph":{"type":"object","name":"Line","id":"p314374","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p314375","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p314376","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}},{"type":"object","name":"GlyphRenderer","id":"p314387","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p314381","attributes":{"selected":{"type":"object","name":"Selection","id":"p314382","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p314383"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2Ng0PldNC3LCQCsdMAVCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHiwuEDGAQDA2nLWCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p314388","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p314389"}}},"glyph":{"type":"object","name":"Scatter","id":"p314384","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"fill_color":{"type":"value","value":"lightblue"},"hatch_color":{"type":"value","value":"lightblue"},"marker":{"type":"value","value":"triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p314385","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p314386","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"lightblue"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"lightblue"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"lightblue"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"triangle"}}}}},{"type":"object","name":"GlyphRenderer","id":"p314397","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p314391","attributes":{"selected":{"type":"object","name":"Selection","id":"p314392","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p314393"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/wMAAAAAAAAAAAA="},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p314398","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p314399"}}},"glyph":{"type":"object","name":"Scatter","id":"p314394","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"fill_color":{"type":"value","value":"red"},"hatch_color":{"type":"value","value":"red"},"marker":{"type":"value","value":"inverted_triangle"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p314395","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.1},"marker":{"type":"value","value":"inverted_triangle"}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p314396","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"red"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_color":{"type":"value","value":"red"},"hatch_alpha":{"type":"value","value":0.2},"marker":{"type":"value","value":"inverted_triangle"}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p314293","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p314320"},{"type":"object","name":"WheelZoomTool","id":"p314321","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p314322","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p314323","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p314329","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p314328","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p314330","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p314331","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p314332","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p314333","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p314339","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p314338","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p314340"},{"type":"object","name":"SaveTool","id":"p314341"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p314315","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p314316","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p314317"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p314318"}}}],"right":[{"type":"object","name":"Legend","id":"p314351","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p314352","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p314348"},{"id":"p314359"},{"id":"p314368"}]}},{"type":"object","name":"LegendItem","id":"p314380","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p314377"}]}},{"type":"object","name":"LegendItem","id":"p314390","attributes":{"label":{"type":"value","value":"Peaks"},"renderers":[{"id":"p314387"}]}},{"type":"object","name":"LegendItem","id":"p314400","attributes":{"label":{"type":"value","value":"Lows"},"renderers":[{"id":"p314397"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p314296","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p314297","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p314298","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p314299","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p314300","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p314301","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p314302","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p314303","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p314304","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p314305","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p314306","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p314307","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p314308","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p314309"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p314312","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p314311","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p314310","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p314313"}}}],"center":[{"type":"object","name":"Grid","id":"p314314","attributes":{"axis":{"id":"p314296"}}},{"type":"object","name":"Grid","id":"p314319","attributes":{"dimension":1,"axis":{"id":"p314315"}}}]}},{"type":"object","name":"Div","id":"p314401","attributes":{"text":"No site visit information available for this station."}}]}}]}}';
                  const render_items = [{"docid":"e2b8e71a-9e62-4260-9f99-f65b5ff9f83c","roots":{"p314403":"e56fbe9d-e1fc-4632-b802-855e7512d7e8"},"root_ids":["p314403"]}];
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