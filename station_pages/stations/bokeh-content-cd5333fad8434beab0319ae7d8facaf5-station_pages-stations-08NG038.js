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
    
    
    const element = document.getElementById("f665a383-60f8-4a1a-8b1c-8c1c926e32d4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f665a383-60f8-4a1a-8b1c-8c1c926e32d4' but no matching script tag was found.")
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
                  const docs_json = '{"5f7efd0d-ad59-4d83-8fce-fde13941bef2":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p549194","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p549195"}}},"roots":[{"type":"object","name":"Column","id":"p549358","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p549355","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p549354","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p549347","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p549218"},{"type":"object","name":"PanTool","id":"p549294"}]}},{"type":"object","name":"ToolProxy","id":"p549348","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p549219","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p549295","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p549349","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p549220","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p549221","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p549227","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p549226","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p549296","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p549297","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p549303","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p549302","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p549350","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p549228"},{"type":"object","name":"ResetTool","id":"p549304"}]}},{"type":"object","name":"SaveTool","id":"p549351"},{"type":"object","name":"ToolProxy","id":"p549352","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p549270","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p549353","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p549346","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p549196","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p549197"},"y_range":{"type":"object","name":"DataRange1d","id":"p549198"},"x_scale":{"type":"object","name":"LinearScale","id":"p549206"},"y_scale":{"type":"object","name":"LogScale","id":"p549207"},"title":{"type":"object","name":"Title","id":"p549199","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p549236","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p549230","attributes":{"selected":{"type":"object","name":"Selection","id":"p549231","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p549232"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18jjDZJSzNbdDHW/sXpMz3CXIH2wmD/B4zSo+GANR0AAHD7+bIoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p549237","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p549238"}}},"glyph":{"type":"object","name":"Line","id":"p549233","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p549234","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p549235","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p549245","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p549239","attributes":{"selected":{"type":"object","name":"Selection","id":"p549240","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p549241"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18jjDZJSzNbdDHW/sXpMz3CXIH2wmD/B4zSo+GANR0AAHD7+bIoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p549246","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p549247"}}},"glyph":{"type":"object","name":"Line","id":"p549242","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p549243","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p549244","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p549256","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p549250","attributes":{"selected":{"type":"object","name":"Selection","id":"p549251","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p549252"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SPUgCYRzGG6JoqCWXgqIgkCAl6aIP+3hMzdPsPD/uvKhJaHCyKQjcbDEImmwqGpqChlpsCgKbbAqCNlsaAidrMRp63/eel4eDu/t//J7nTtMrml75WRcXoV6k2g2j3RiCe+9BaPRaaITPx+FvdXytziTfTyF4NyzkZd001BhthvV+3Kgzy74A7mV5cI79Gh7KzXq5Oc85C3j83BVa5LwlPAsao73MuSt4EdX18irnr6F41icE7gEUvhHivhAOurVSt7bBvWF8C3pfK8z9ERwWvEJRckTxK8tLm+SJQeHVY+TS0aNOnHxxHKugEuRMoF8BbZE3ierFu1CS3NsYfJ0QMshvQOEXU/Rh4kTWOyb9mG7fn0lfabf/Kk1/aah4Ihn6zLjzvjL0m4Vad5ql7yw8Mv5Ajv5zsC1x3nLMwcK5tH9kMQ8Lkr46ZjMXG+p3eLKZTx578oPt55lTHpeyYcBhXg4+5O9y6zC3HfwD63qQjHACAAA="},"shape":[78],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+19DlBYGuzvAfpQeGuEAAHN6aQtwAgAA"},"shape":[78],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p549257","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p549258"}}},"glyph":{"type":"object","name":"Line","id":"p549253","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p549254","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p549255","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p549266","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p549260","attributes":{"selected":{"type":"object","name":"Selection","id":"p549261","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p549262"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p549267","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p549268"}}},"glyph":{"type":"object","name":"Line","id":"p549263","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p549264","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p549265","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p549205","attributes":{"tools":[{"id":"p549218"},{"id":"p549219"},{"id":"p549220"},{"id":"p549228"},{"type":"object","name":"SaveTool","id":"p549229"},{"id":"p549270"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p549213","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p549214","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p549215"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p549216"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p549208","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p549209","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p549210"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p549211"}}}],"center":[{"type":"object","name":"Grid","id":"p549212","attributes":{"axis":{"id":"p549208"}}},{"type":"object","name":"Grid","id":"p549217","attributes":{"dimension":1,"axis":{"id":"p549213"}}},{"type":"object","name":"Legend","id":"p549248","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p549249","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p549245"}]}},{"type":"object","name":"LegendItem","id":"p549259","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p549256"}]}},{"type":"object","name":"LegendItem","id":"p549269","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p549266"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p549271","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p549281","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p549273"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p549282"},"y_scale":{"type":"object","name":"LinearScale","id":"p549283"},"title":{"type":"object","name":"Title","id":"p549274","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p549312","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p549306","attributes":{"selected":{"type":"object","name":"Selection","id":"p549307","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p549308"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLrc2mZPpVuwvfD///d9kwLsN/7/rx94K9oel34Aah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p549313","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p549314"}}},"glyph":{"type":"object","name":"Line","id":"p549309","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p549310","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p549311","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p549321","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p549315","attributes":{"selected":{"type":"object","name":"Selection","id":"p549316","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p549317"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLrc2mZPpVuwvfD///d9kwLsN/7/rx94K9oel34Aah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p549322","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p549323"}}},"glyph":{"type":"object","name":"Line","id":"p549318","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p549319","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p549320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p549332","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p549326","attributes":{"selected":{"type":"object","name":"Selection","id":"p549327","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p549328"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLrc2mZPpVuwvfD///d9kwLsN/7/rx94K9oel34Aah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p549333","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p549334"}}},"glyph":{"type":"object","name":"Line","id":"p549329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p549330","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p549331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p549342","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p549336","attributes":{"selected":{"type":"object","name":"Selection","id":"p549337","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p549338"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p549343","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p549344"}}},"glyph":{"type":"object","name":"Line","id":"p549339","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p549340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p549341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p549280","attributes":{"tools":[{"id":"p549294"},{"id":"p549295"},{"id":"p549296"},{"id":"p549304"},{"type":"object","name":"SaveTool","id":"p549305"},{"id":"p549346"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p549289","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p549290","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p549291"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p549292"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p549284","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p549285"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p549286"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p549287"}}}],"center":[{"type":"object","name":"Grid","id":"p549288","attributes":{"axis":{"id":"p549284"}}},{"type":"object","name":"Grid","id":"p549293","attributes":{"dimension":1,"axis":{"id":"p549289"}}},{"type":"object","name":"Legend","id":"p549324","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p549325","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p549321"}]}},{"type":"object","name":"LegendItem","id":"p549335","attributes":{"label":{"type":"value","value":"Median Year (1929)"},"renderers":[{"id":"p549332"}]}},{"type":"object","name":"LegendItem","id":"p549345","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p549342"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p549357","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"5f7efd0d-ad59-4d83-8fce-fde13941bef2","roots":{"p549358":"f665a383-60f8-4a1a-8b1c-8c1c926e32d4"},"root_ids":["p549358"]}];
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