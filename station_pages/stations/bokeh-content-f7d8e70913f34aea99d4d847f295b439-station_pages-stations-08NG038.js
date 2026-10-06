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
    
    
    const element = document.getElementById("b43bcee3-eabb-4aa6-b666-a66450557a62");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b43bcee3-eabb-4aa6-b666-a66450557a62' but no matching script tag was found.")
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
                  const docs_json = '{"955b10b9-4968-4ac7-899f-533bccb014f8":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p745614","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p745615"}}},"roots":[{"type":"object","name":"Column","id":"p745778","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p745775","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p745774","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p745767","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p745638"},{"type":"object","name":"PanTool","id":"p745714"}]}},{"type":"object","name":"ToolProxy","id":"p745768","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p745639","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p745715","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p745769","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p745640","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p745641","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p745647","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p745646","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p745716","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p745717","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p745723","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p745722","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p745770","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p745648"},{"type":"object","name":"ResetTool","id":"p745724"}]}},{"type":"object","name":"SaveTool","id":"p745771"},{"type":"object","name":"ToolProxy","id":"p745772","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p745690","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p745773","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p745766","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p745616","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p745617"},"y_range":{"type":"object","name":"DataRange1d","id":"p745618"},"x_scale":{"type":"object","name":"LinearScale","id":"p745626"},"y_scale":{"type":"object","name":"LogScale","id":"p745627"},"title":{"type":"object","name":"Title","id":"p745619","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p745656","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745650","attributes":{"selected":{"type":"object","name":"Selection","id":"p745651","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745652"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18jjDZJSzNbdDHW/sXpMz3CXIH2wmD/B4zSo+GANR0AAHD7+bIoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p745657","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745658"}}},"glyph":{"type":"object","name":"Line","id":"p745653","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p745654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p745655","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p745665","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745659","attributes":{"selected":{"type":"object","name":"Selection","id":"p745660","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745661"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18jjDZJSzNbdDHW/sXpMz3CXIH2wmD/B4zSo+GANR0AAHD7+bIoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p745666","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745667"}}},"glyph":{"type":"object","name":"Line","id":"p745662","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p745663","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p745664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p745676","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745670","attributes":{"selected":{"type":"object","name":"Selection","id":"p745671","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745672"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SPUgCYRzGG6JoqCWXgqIgkCAl6aIP+3hMzdPsPD/uvKhJaHCyKQjcbDEImmwqGpqChlpsCgKbbAqCNlsaAidrMRp63/eel4eDu/t//J7nTtMrml75WRcXoV6k2g2j3RiCe+9BaPRaaITPx+FvdXytziTfTyF4NyzkZd001BhthvV+3Kgzy74A7mV5cI79Gh7KzXq5Oc85C3j83BVa5LwlPAsao73MuSt4EdX18irnr6F41icE7gEUvhHivhAOurVSt7bBvWF8C3pfK8z9ERwWvEJRckTxK8tLm+SJQeHVY+TS0aNOnHxxHKugEuRMoF8BbZE3ierFu1CS3NsYfJ0QMshvQOEXU/Rh4kTWOyb9mG7fn0lfabf/Kk1/aah4Ihn6zLjzvjL0m4Vad5ql7yw8Mv5Ajv5zsC1x3nLMwcK5tH9kMQ8Lkr46ZjMXG+p3eLKZTx578oPt55lTHpeyYcBhXg4+5O9y6zC3HfwD63qQjHACAAA="},"shape":[78],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+19DlBYGuzvAfpQeGuEAAHN6aQtwAgAA"},"shape":[78],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p745677","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745678"}}},"glyph":{"type":"object","name":"Line","id":"p745673","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p745674","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p745675","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p745686","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745680","attributes":{"selected":{"type":"object","name":"Selection","id":"p745681","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745682"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p745687","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745688"}}},"glyph":{"type":"object","name":"Line","id":"p745683","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p745684","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p745685","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p745625","attributes":{"tools":[{"id":"p745638"},{"id":"p745639"},{"id":"p745640"},{"id":"p745648"},{"type":"object","name":"SaveTool","id":"p745649"},{"id":"p745690"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p745633","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p745634","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p745635"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p745636"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p745628","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p745629","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p745630"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p745631"}}}],"center":[{"type":"object","name":"Grid","id":"p745632","attributes":{"axis":{"id":"p745628"}}},{"type":"object","name":"Grid","id":"p745637","attributes":{"dimension":1,"axis":{"id":"p745633"}}},{"type":"object","name":"Legend","id":"p745668","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p745669","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p745665"}]}},{"type":"object","name":"LegendItem","id":"p745679","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p745676"}]}},{"type":"object","name":"LegendItem","id":"p745689","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p745686"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p745691","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p745701","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p745693"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p745702"},"y_scale":{"type":"object","name":"LinearScale","id":"p745703"},"title":{"type":"object","name":"Title","id":"p745694","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p745732","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745726","attributes":{"selected":{"type":"object","name":"Selection","id":"p745727","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745728"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLrc2mZPpVuwvfD///d9kwLsN/7/rx94K9oel34Aah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p745733","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745734"}}},"glyph":{"type":"object","name":"Line","id":"p745729","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p745730","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p745731","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p745741","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745735","attributes":{"selected":{"type":"object","name":"Selection","id":"p745736","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745737"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLrc2mZPpVuwvfD///d9kwLsN/7/rx94K9oel34Aah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p745742","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745743"}}},"glyph":{"type":"object","name":"Line","id":"p745738","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p745739","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p745740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p745752","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745746","attributes":{"selected":{"type":"object","name":"Selection","id":"p745747","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745748"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCLrc2mZPpVuwvfD///d9kwLsN/7/rx94K9oel34Aah438GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p745753","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745754"}}},"glyph":{"type":"object","name":"Line","id":"p745749","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p745750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p745751","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p745762","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p745756","attributes":{"selected":{"type":"object","name":"Selection","id":"p745757","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p745758"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p745763","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p745764"}}},"glyph":{"type":"object","name":"Line","id":"p745759","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p745760","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p745761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p745700","attributes":{"tools":[{"id":"p745714"},{"id":"p745715"},{"id":"p745716"},{"id":"p745724"},{"type":"object","name":"SaveTool","id":"p745725"},{"id":"p745766"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p745709","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p745710","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p745711"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p745712"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p745704","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p745705"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p745706"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p745707"}}}],"center":[{"type":"object","name":"Grid","id":"p745708","attributes":{"axis":{"id":"p745704"}}},{"type":"object","name":"Grid","id":"p745713","attributes":{"dimension":1,"axis":{"id":"p745709"}}},{"type":"object","name":"Legend","id":"p745744","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p745745","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p745741"}]}},{"type":"object","name":"LegendItem","id":"p745755","attributes":{"label":{"type":"value","value":"Median Year (1929)"},"renderers":[{"id":"p745752"}]}},{"type":"object","name":"LegendItem","id":"p745765","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p745762"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p745777","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"955b10b9-4968-4ac7-899f-533bccb014f8","roots":{"p745778":"b43bcee3-eabb-4aa6-b666-a66450557a62"},"root_ids":["p745778"]}];
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