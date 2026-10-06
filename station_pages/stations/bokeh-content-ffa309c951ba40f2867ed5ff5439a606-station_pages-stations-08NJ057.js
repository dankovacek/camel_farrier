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
    
    
    const element = document.getElementById("bee3d2af-ec01-48f6-8c20-32e8529cd424");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bee3d2af-ec01-48f6-8c20-32e8529cd424' but no matching script tag was found.")
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
                  const docs_json = '{"c64e6ddf-c4c0-4303-b68a-3025db36db0c":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p796344","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p796345"}}},"roots":[{"type":"object","name":"Column","id":"p796508","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p796505","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p796504","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p796497","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p796368"},{"type":"object","name":"PanTool","id":"p796444"}]}},{"type":"object","name":"ToolProxy","id":"p796498","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p796369","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p796445","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p796499","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p796370","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p796371","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p796377","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p796376","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p796446","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p796447","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p796453","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p796452","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p796500","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p796378"},{"type":"object","name":"ResetTool","id":"p796454"}]}},{"type":"object","name":"SaveTool","id":"p796501"},{"type":"object","name":"ToolProxy","id":"p796502","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p796420","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p796503","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p796496","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p796346","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p796347"},"y_range":{"type":"object","name":"DataRange1d","id":"p796348"},"x_scale":{"type":"object","name":"LinearScale","id":"p796356"},"y_scale":{"type":"object","name":"LogScale","id":"p796357"},"title":{"type":"object","name":"Title","id":"p796349","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p796386","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p796380","attributes":{"selected":{"type":"object","name":"Selection","id":"p796381","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p796382"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18EaGGwfID9KD0aDiMxHQAAhSUjFygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p796387","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p796388"}}},"glyph":{"type":"object","name":"Line","id":"p796383","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p796384","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p796385","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p796395","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p796389","attributes":{"selected":{"type":"object","name":"Selection","id":"p796390","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p796391"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18EaGGwfID9KD0aDiMxHQAAhSUjFygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p796396","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p796397"}}},"glyph":{"type":"object","name":"Line","id":"p796392","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p796393","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p796394","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p796406","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p796400","attributes":{"selected":{"type":"object","name":"Selection","id":"p796401","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p796402"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2Te0hTYRjGs7IwpDKpkOxmZlqJzVs2W3vmps45t52dbeeYFZFERBEhUkRIVhbZzW6E2I0QUSKiqAipLKSIkK6E3YskRKSwC5lERN/3+Zx/xs55v/d93uf3fBV7x7/6eqXXXqF+B+33Po9bUxUdheH/Y/Bj3iTf+lWxGH4fhyPXY6dffhvP71OQYkw8vmBfAusScXsoPqY1eybrZyPt0QH70c1JPDcHv84c+vO4aC7Pp+DupgbRMZV90nBQVHt+zme/hVDtH6azbwaOia89/kXsb8Fvs+tp1E0L52RipcN7aVZKFudloVMJyObcHKTKdf7mcH4uDgs1NesWU0ceRPPk08/zqGcJymV7m5W6rLhzVfv4ui2f+pZCFN8airdRpw376/SmqTuWUa8d3za+2Jrbb6du4IJ6QP0OfJixIcG62sE9HIiT604u4D4FcI79Mmh2FXAvJ7Zsv7i2r9bJ/ZxoG5ADXNzThXeV6eKIi/sWYoKgevJ8IfcuhLLHKOL+RahWAIrpQzFaszP+uTqL6Ycbb9QAN31xQ9KvTC+hPyVQuHpK6JMHVdGW9l2NHvrlQcu27yJBpfStFErOKC/98yJWpM3S7qWPZbB1ZwpJZfSzDAp3so+++tDcIQH46K8fL2V5g58++7FH2p8UoN8BnJVxqwnQ9wBuPFgukh6g/xqeCbrdmRo5aOjPnyYiqpGHhtHKcI1cglDrO4PkE0SuOhAkpyACKhBB8tIhwlZfp+vkpmN34wqBQCc/HSo+MSFyDEFdr8oQeYbwRKSzuSNEriH01b4XiQmTbxgjpfzqMDmHkaguWJi8w1A40yLkHoFMf31dhPwjEM2FoRHmwMBO2d5qMA8GTgk3P50wmAsD12T8Bwzmw4S63h6TOTHRe/+cO6/FZF5MjFBPOf4DJ8WXB2gEAAA="},"shape":[141],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+19E0sJgdQH2o/RoOIymg9F8QGw5AABUtyVyaAQAAA=="},"shape":[141],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p796407","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p796408"}}},"glyph":{"type":"object","name":"Line","id":"p796403","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p796404","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p796405","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p796416","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p796410","attributes":{"selected":{"type":"object","name":"Selection","id":"p796411","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p796412"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p796417","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p796418"}}},"glyph":{"type":"object","name":"Line","id":"p796413","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p796414","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p796415","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p796355","attributes":{"tools":[{"id":"p796368"},{"id":"p796369"},{"id":"p796370"},{"id":"p796378"},{"type":"object","name":"SaveTool","id":"p796379"},{"id":"p796420"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p796363","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p796364","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p796365"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p796366"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p796358","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p796359","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p796360"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p796361"}}}],"center":[{"type":"object","name":"Grid","id":"p796362","attributes":{"axis":{"id":"p796358"}}},{"type":"object","name":"Grid","id":"p796367","attributes":{"dimension":1,"axis":{"id":"p796363"}}},{"type":"object","name":"Legend","id":"p796398","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p796399","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p796395"}]}},{"type":"object","name":"LegendItem","id":"p796409","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p796406"}]}},{"type":"object","name":"LegendItem","id":"p796419","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p796416"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p796421","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p796431","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p796423"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p796432"},"y_scale":{"type":"object","name":"LinearScale","id":"p796433"},"title":{"type":"object","name":"Title","id":"p796424","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p796462","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p796456","attributes":{"selected":{"type":"object","name":"Selection","id":"p796457","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p796458"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC31Mfb3jpb5Qe+H//+/7JgXgpHHpBwCWeKlKYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p796463","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p796464"}}},"glyph":{"type":"object","name":"Line","id":"p796459","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p796460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p796461","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p796471","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p796465","attributes":{"selected":{"type":"object","name":"Selection","id":"p796466","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p796467"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC31Mfb3jpb5Qe+H//+/7JgXgpHHpBwCWeKlKYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p796472","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p796473"}}},"glyph":{"type":"object","name":"Line","id":"p796468","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p796469","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p796470","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p796482","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p796476","attributes":{"selected":{"type":"object","name":"Selection","id":"p796477","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p796478"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC31Mfb3jpb5Qe+H//+/7JgXgpHHpBwCWeKlKYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p796483","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p796484"}}},"glyph":{"type":"object","name":"Line","id":"p796479","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p796480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p796481","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p796492","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p796486","attributes":{"selected":{"type":"object","name":"Selection","id":"p796487","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p796488"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p796493","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p796494"}}},"glyph":{"type":"object","name":"Line","id":"p796489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p796490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p796491","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p796430","attributes":{"tools":[{"id":"p796444"},{"id":"p796445"},{"id":"p796446"},{"id":"p796454"},{"type":"object","name":"SaveTool","id":"p796455"},{"id":"p796496"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p796439","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p796440","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p796441"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p796442"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p796434","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p796435"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p796436"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p796437"}}}],"center":[{"type":"object","name":"Grid","id":"p796438","attributes":{"axis":{"id":"p796434"}}},{"type":"object","name":"Grid","id":"p796443","attributes":{"dimension":1,"axis":{"id":"p796439"}}},{"type":"object","name":"Legend","id":"p796474","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p796475","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p796471"}]}},{"type":"object","name":"LegendItem","id":"p796485","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p796482"}]}},{"type":"object","name":"LegendItem","id":"p796495","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p796492"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p796507","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"c64e6ddf-c4c0-4303-b68a-3025db36db0c","roots":{"p796508":"bee3d2af-ec01-48f6-8c20-32e8529cd424"},"root_ids":["p796508"]}];
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