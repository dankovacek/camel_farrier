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
    
    
    const element = document.getElementById("ae72bd7c-5024-4781-addb-11795a6eb44b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ae72bd7c-5024-4781-addb-11795a6eb44b' but no matching script tag was found.")
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
                  const docs_json = '{"afc3352c-a4c1-4a8e-a3e1-bd3815496ed5":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p152702","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p152703"}}},"roots":[{"type":"object","name":"Column","id":"p152840","attributes":{"children":[{"type":"object","name":"Figure","id":"p152704","attributes":{"width":1000,"height":350,"x_range":{"type":"object","name":"DataRange1d","id":"p152705"},"y_range":{"type":"object","name":"DataRange1d","id":"p152706"},"x_scale":{"type":"object","name":"LinearScale","id":"p152714"},"y_scale":{"type":"object","name":"LinearScale","id":"p152715"},"title":{"type":"object","name":"Title","id":"p152707","attributes":{"text":"08DC001 Observed Unit Area Runoff"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p152768","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p152762","attributes":{"selected":{"type":"object","name":"Selection","id":"p152763","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p152764"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaAjQjC06xMBw4NW1GBDN0NoCph3kjYA0AMi4M70gAAAA"},"shape":[4],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p152769","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p152770"}}},"glyph":{"type":"object","name":"VArea","id":"p152765","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"dodgerblue","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p152766","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"dodgerblue","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p152767","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"dodgerblue","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p152779","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p152773","attributes":{"selected":{"type":"object","name":"Selection","id":"p152774","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p152775"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYPgqW1h0iIHBof90QdEhAA8qrIMQAAAA"},"shape":[2],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p152780","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p152781"}}},"glyph":{"type":"object","name":"VArea","id":"p152776","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p152777","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p152778","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p152789","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p152783","attributes":{"selected":{"type":"object","name":"Selection","id":"p152784","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p152785"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHhQol90CABIltnyCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p152790","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p152791"}}},"glyph":{"type":"object","name":"VArea","id":"p152786","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p152787","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p152788","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p152798","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p152792","attributes":{"selected":{"type":"object","name":"Selection","id":"p152793","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p152794"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYNC7ylF0CAD37ilsCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p152799","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p152800"}}},"glyph":{"type":"object","name":"VArea","id":"p152795","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p152796","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p152797","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p152807","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p152801","attributes":{"selected":{"type":"object","name":"Selection","id":"p152802","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p152803"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaEgy4Cg6BABt/jsOCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p152808","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p152809"}}},"glyph":{"type":"object","name":"VArea","id":"p152804","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p152805","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p152806","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p152816","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p152810","attributes":{"selected":{"type":"object","name":"Selection","id":"p152811","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p152812"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYJjezV50CAA+u3BRCAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p152817","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p152818"}}},"glyph":{"type":"object","name":"VArea","id":"p152813","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p152814","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p152815","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p152825","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p152819","attributes":{"selected":{"type":"object","name":"Selection","id":"p152820","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p152821"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgaDj9jK3oEADFyK16CAAAAA=="},"shape":[1],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p152826","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p152827"}}},"glyph":{"type":"object","name":"VArea","id":"p152822","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.3}},"nonselection_glyph":{"type":"object","name":"VArea","id":"p152823","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.1,"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VArea","id":"p152824","attributes":{"x":{"type":"field","field":"x"},"y1":{"type":"value","value":1.225},"y2":{"type":"value","value":39.27},"fill_color":"orange","fill_alpha":0.2,"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p152834","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p152828","attributes":{"selected":{"type":"object","name":"Selection","id":"p152829","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p152830"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[457],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/9VWv08UQRTek8KCmIhBzIUIq57EEIMHu3ecHMqqBQ2NvcVVW1vTSENnQmNznQmNFQ1/gBfr/SOkuYZWEhITz7cz826+925OMF5Qt/ny5v365u3MmxdF5Xf+Lvp/MEuOmxlhr3j/osSP3W6aXYuiTt5vjaD1Y7vnmfVvWEzaJXbyPLP66kvrlz9zdlvox3F6xc4moo7P60YGHhR/A/U+vl1n5P0RCj69oliXesvfyJCH1yFP0/LcS9x+647fssIU8/h8nIdQ1Afygz3Xk+vMedme68R22p7kR86u5jAuce/09V0nVxXGKOu8oK+p/T4u8evuh/voH8ij88fIE3gvqX2maAf+yyHe/F8owit1jlK3nzXMw7whbk3FFfFhnwsm/sL+7RLj/dNbVj87h/FYZj3Y3VQ4F9JrmfJdD+EwzuHbaeHnZKjPkpNXnLyK6+N4j/B1cTk/2U259UqIB+CU4O3tL8YK8d4++bE1aSz3PXv0/SowO9k9/xexc/Dl7G/g7/K4ar70ffsTnFSdjX/F3M/ownsxwfN22f/xy3MfuHe8D+gb0w5nsP8wBt6rIFK8G6E+NYJj+pnuu9QX54385uBe6D2Ij7YXUc8y91H216j19O7fGcal+vTOPj3Ad48+927166pvrw7ftcFg8Lkonoz0d1gHv7qaK5pufkrHzDkrMg7zkMjvq56vaH9tlMnuqXuf/Zwk5s68hXrmp2XmSV+CdeJ9+Hdfr1vUc5fnVbQlQt4AP+PHc52cN9toz7x9nH4rlI8+P99Zu005/8p6+vm3uxGyF+ugN/OzsO8G4/s67azLc2frCpiM0bs5stqQdThuqvPXuEwc/d/1fw2ciyQ0n8Ocuyb9hnNicM7X9wPmqjjUB1iG/vEQ45n78xO6+877SA4AAA=="},"shape":[457],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p152835","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p152836"}}},"glyph":{"type":"object","name":"Line","id":"p152831","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_width":2.0}},"nonselection_glyph":{"type":"object","name":"Line","id":"p152832","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.1,"line_width":2.0}},"muted_glyph":{"type":"object","name":"Line","id":"p152833","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"dodgerblue","line_alpha":0.2,"line_width":2.0}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p152713","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p152740"},{"type":"object","name":"WheelZoomTool","id":"p152741","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p152742","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p152743","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p152749","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p152748","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"LassoSelectTool","id":"p152750","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p152751","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"ys":[],"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"BoxSelectTool","id":"p152752","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p152753","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"editable":true,"handles":{"type":"object","name":"BoxInteractionHandles","id":"p152759","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p152758","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"ResetTool","id":"p152760"},{"type":"object","name":"SaveTool","id":"p152761"}]}},"toolbar_location":"above","left":[{"type":"object","name":"LinearAxis","id":"p152735","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p152736","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p152737"},"axis_label":"Flow (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p152738"}}}],"right":[{"type":"object","name":"Legend","id":"p152771","attributes":{"background_fill_alpha":0.65,"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p152772","attributes":{"label":{"type":"value","value":"Ice Conditions (B)"},"renderers":[{"id":"p152768"}]}},{"type":"object","name":"LegendItem","id":"p152782","attributes":{"label":{"type":"value","value":"Estimated (E)"},"renderers":[{"id":"p152779"},{"id":"p152789"},{"id":"p152798"},{"id":"p152807"},{"id":"p152816"},{"id":"p152825"}]}},{"type":"object","name":"LegendItem","id":"p152837","attributes":{"label":{"type":"value","value":"flow_cms"},"renderers":[{"id":"p152834"}]}}]}}],"below":[{"type":"object","name":"DatetimeAxis","id":"p152716","attributes":{"ticker":{"type":"object","name":"DatetimeTicker","id":"p152717","attributes":{"num_minor_ticks":5,"tickers":[{"type":"object","name":"AdaptiveTicker","id":"p152718","attributes":{"num_minor_ticks":0,"mantissas":[1,2,5],"max_interval":500.0}},{"type":"object","name":"AdaptiveTicker","id":"p152719","attributes":{"num_minor_ticks":0,"base":60,"mantissas":[1,2,5,10,15,20,30],"min_interval":1000.0,"max_interval":1800000.0}},{"type":"object","name":"AdaptiveTicker","id":"p152720","attributes":{"num_minor_ticks":0,"base":24,"mantissas":[1,2,4,6,8,12],"min_interval":3600000.0,"max_interval":43200000.0}},{"type":"object","name":"DaysTicker","id":"p152721","attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}},{"type":"object","name":"DaysTicker","id":"p152722","attributes":{"days":[1,4,7,10,13,16,19,22,25,28]}},{"type":"object","name":"DaysTicker","id":"p152723","attributes":{"days":[1,8,15,22]}},{"type":"object","name":"DaysTicker","id":"p152724","attributes":{"days":[1,15]}},{"type":"object","name":"MonthsTicker","id":"p152725","attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]}},{"type":"object","name":"MonthsTicker","id":"p152726","attributes":{"months":[0,2,4,6,8,10]}},{"type":"object","name":"MonthsTicker","id":"p152727","attributes":{"months":[0,4,8]}},{"type":"object","name":"MonthsTicker","id":"p152728","attributes":{"months":[0,6]}},{"type":"object","name":"YearsTicker","id":"p152729"}]}},"formatter":{"type":"object","name":"DatetimeTickFormatter","id":"p152732","attributes":{"seconds":"%T","minsec":"%T","minutes":"%H:%M","hours":"%H:%M","days":"%b %d","months":"%b %Y","strip_leading_zeros":["microseconds","milliseconds","seconds"],"boundary_scaling":false,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p152731","attributes":{"microseconds":"%T","milliseconds":"%T","seconds":"%b %d, %Y","minsec":"%b %d, %Y","minutes":"%b %d, %Y","hourmin":"%b %d, %Y","hours":"%b %d, %Y","days":"%Y","months":"","years":"","boundary_scaling":false,"hide_repeats":true,"context":{"type":"object","name":"DatetimeTickFormatter","id":"p152730","attributes":{"microseconds":"%b %d, %Y","milliseconds":"%b %d, %Y","seconds":"","minsec":"","minutes":"","hourmin":"","hours":"","days":"","months":"","years":"","boundary_scaling":false,"hide_repeats":true}},"context_which":"all"}},"context_which":"all"}},"axis_label":"Date","major_label_policy":{"type":"object","name":"AllLabels","id":"p152733"}}}],"center":[{"type":"object","name":"Grid","id":"p152734","attributes":{"axis":{"id":"p152716"}}},{"type":"object","name":"Grid","id":"p152739","attributes":{"dimension":1,"axis":{"id":"p152735"}}}]}},{"type":"object","name":"Div","id":"p152838","attributes":{"text":"&lt;p&gt;&lt;em&gt;No site visit information available for this station.&lt;/em&gt;&lt;/p&gt;"}}]}}]}}';
                  const render_items = [{"docid":"afc3352c-a4c1-4a8e-a3e1-bd3815496ed5","roots":{"p152840":"ae72bd7c-5024-4781-addb-11795a6eb44b"},"root_ids":["p152840"]}];
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