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
    
    
    const element = document.getElementById("d6d6e113-20ca-4326-bbc9-3c428a795db5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd6d6e113-20ca-4326-bbc9-3c428a795db5' but no matching script tag was found.")
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
                  const docs_json = '{"9417fb05-91d5-4fdd-83d1-844d95c3cc90":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p460712","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p460713"}}},"roots":[{"type":"object","name":"Column","id":"p460876","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p460873","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p460872","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p460865","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p460736"},{"type":"object","name":"PanTool","id":"p460812"}]}},{"type":"object","name":"ToolProxy","id":"p460866","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p460737","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p460813","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p460867","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p460738","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p460739","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p460745","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p460744","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p460814","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p460815","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p460821","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p460820","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p460868","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p460746"},{"type":"object","name":"ResetTool","id":"p460822"}]}},{"type":"object","name":"SaveTool","id":"p460869"},{"type":"object","name":"ToolProxy","id":"p460870","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p460788","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p460871","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p460864","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p460714","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p460715"},"y_range":{"type":"object","name":"DataRange1d","id":"p460716"},"x_scale":{"type":"object","name":"LinearScale","id":"p460724"},"y_scale":{"type":"object","name":"LogScale","id":"p460725"},"title":{"type":"object","name":"Title","id":"p460717","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p460754","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p460748","attributes":{"selected":{"type":"object","name":"Selection","id":"p460749","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460750"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3///+kskr7P/+//9ezXCF/e///+P7Dy21//P/v/3DqiUk07/+/5/vum2x/Y////+v/LiIavRnoDuLMhbaD1caGG77y/bNt0enPwHjgWPNHPtRmr7hAIwHd9O4Wfbfgel55syZ9gBjX3olKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p460755","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460756"}}},"glyph":{"type":"object","name":"Line","id":"p460751","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p460752","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p460753","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p460763","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p460757","attributes":{"selected":{"type":"object","name":"Selection","id":"p460758","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460759"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3///+kskr7P/+//9ezXCF/e///+P7Dy21//P/v/3DqiUk07/+/5/vum2x/Y////+v/LiIavRnoDuLMhbaD1caGG77y/bNt0enPwHjgWPNHPtRmr7hAIwHd9O4Wfbfgel55syZ9gBjX3olKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p460764","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460765"}}},"glyph":{"type":"object","name":"Line","id":"p460760","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p460761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p460762","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p460774","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p460768","attributes":{"selected":{"type":"object","name":"Selection","id":"p460769","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460770"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y3Q2y4DQRzAYeLKnUQikbggRAgRhzqXTquqJ7XnXS/AM/FMPIhHcCem39w03fnm99+dz4//9dP5jL+/nbO4lsL8/3JYiGslzJ+vhve3/7Vmfz18xbXBbYaY+djit8N33N9xbpfbc34/tGL4QOcwxPzbEXfs/LHuif1T/TOuxbV0z8270L/krrgr7pq74W7DYvzetvdpm3tn7r25Hb3gfNAN9rvOdbme8z2uxz14jweuz/W5PvfIPXIDcwfcwPs/mfvEDfWG3FBvpDfixnpjbqw34SbuZao3dT9TvWdzn/Vm3Exvxr3ovXCJ54n5if3EuYRLuVQ3NS/lUi7jMi7Ty7iMy7nc3JzLuZwr3EOhV5hbcAVX6pVcqVdyJVdxlbkVV3EVV5tbc7W5tXuvuUavMbfRa/Qa7jX8AVJyFQToAwAA"},"shape":[125],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v3///+kskr7H/9/19vy7Xc/s////YPq5ZQjf7x////lR8X2dOa/gz0R1HGQvtRGjUcgPG6v2zffFD8YqU/AeObY80c+1F6eIXD9///58+cOdMeRgMA0k+70ugDAAA="},"shape":[125],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p460775","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460776"}}},"glyph":{"type":"object","name":"Line","id":"p460771","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p460772","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p460773","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p460784","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p460778","attributes":{"selected":{"type":"object","name":"Selection","id":"p460779","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460780"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p460785","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460786"}}},"glyph":{"type":"object","name":"Line","id":"p460781","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p460782","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p460783","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p460723","attributes":{"tools":[{"id":"p460736"},{"id":"p460737"},{"id":"p460738"},{"id":"p460746"},{"type":"object","name":"SaveTool","id":"p460747"},{"id":"p460788"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p460731","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p460732","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p460733"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p460734"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p460726","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p460727","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p460728"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p460729"}}}],"center":[{"type":"object","name":"Grid","id":"p460730","attributes":{"axis":{"id":"p460726"}}},{"type":"object","name":"Grid","id":"p460735","attributes":{"dimension":1,"axis":{"id":"p460731"}}},{"type":"object","name":"Legend","id":"p460766","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p460767","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p460763"}]}},{"type":"object","name":"LegendItem","id":"p460777","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p460774"}]}},{"type":"object","name":"LegendItem","id":"p460787","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p460784"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p460789","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p460799","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p460791"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p460800"},"y_scale":{"type":"object","name":"LinearScale","id":"p460801"},"title":{"type":"object","name":"Title","id":"p460792","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p460830","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p460824","attributes":{"selected":{"type":"object","name":"Selection","id":"p460825","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460826"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73///+kskr7H///x/ff2ip/ZEzZ9aEn1pkH7d267WVk+bYr74W5W1zYYG9kJISU8qZufbo+mF8AJTwivZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p460831","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460832"}}},"glyph":{"type":"object","name":"Line","id":"p460827","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p460828","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p460829","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p460839","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p460833","attributes":{"selected":{"type":"object","name":"Selection","id":"p460834","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460835"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73///+kskr7H///x/ff2ip/ZEzZ9aEn1pkH7d267WVk+bYr74W5W1zYYG9kJISU8qZufbo+mF8AJTwivZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p460840","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460841"}}},"glyph":{"type":"object","name":"Line","id":"p460836","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p460837","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p460838","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p460850","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p460844","attributes":{"selected":{"type":"object","name":"Selection","id":"p460845","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460846"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif73///+kskr7H///x/ff2ip/ZEzZ9aEn1pkH7d267WVk+bYr74W5W1zYYG9kJISU8qZufbo+mF8AJTwivZgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p460851","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460852"}}},"glyph":{"type":"object","name":"Line","id":"p460847","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p460848","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p460849","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p460860","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p460854","attributes":{"selected":{"type":"object","name":"Selection","id":"p460855","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p460856"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p460861","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p460862"}}},"glyph":{"type":"object","name":"Line","id":"p460857","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p460858","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p460859","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p460798","attributes":{"tools":[{"id":"p460812"},{"id":"p460813"},{"id":"p460814"},{"id":"p460822"},{"type":"object","name":"SaveTool","id":"p460823"},{"id":"p460864"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p460807","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p460808","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p460809"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p460810"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p460802","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p460803"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p460804"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p460805"}}}],"center":[{"type":"object","name":"Grid","id":"p460806","attributes":{"axis":{"id":"p460802"}}},{"type":"object","name":"Grid","id":"p460811","attributes":{"dimension":1,"axis":{"id":"p460807"}}},{"type":"object","name":"Legend","id":"p460842","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p460843","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p460839"}]}},{"type":"object","name":"LegendItem","id":"p460853","attributes":{"label":{"type":"value","value":"Median Year (1924)"},"renderers":[{"id":"p460850"}]}},{"type":"object","name":"LegendItem","id":"p460863","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p460860"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p460875","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"9417fb05-91d5-4fdd-83d1-844d95c3cc90","roots":{"p460876":"d6d6e113-20ca-4326-bbc9-3c428a795db5"},"root_ids":["p460876"]}];
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