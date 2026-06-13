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
    
    
    const element = document.getElementById("a1e3146d-090c-41eb-9f12-da4014c68ae6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a1e3146d-090c-41eb-9f12-da4014c68ae6' but no matching script tag was found.")
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
                  const docs_json = '{"b1f5f91a-19ea-44a4-9ea9-ba6e2e432622":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p599924","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p599925"}}},"roots":[{"type":"object","name":"Column","id":"p600088","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p600085","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p600084","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p600077","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p599948"},{"type":"object","name":"PanTool","id":"p600024"}]}},{"type":"object","name":"ToolProxy","id":"p600078","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p599949","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p600025","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p600079","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p599950","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p599951","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p599957","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p599956","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p600026","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p600027","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p600033","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p600032","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p600080","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p599958"},{"type":"object","name":"ResetTool","id":"p600034"}]}},{"type":"object","name":"SaveTool","id":"p600081"},{"type":"object","name":"ToolProxy","id":"p600082","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p600000","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p600083","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p600076","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p599926","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p599927"},"y_range":{"type":"object","name":"DataRange1d","id":"p599928"},"x_scale":{"type":"object","name":"LinearScale","id":"p599936"},"y_scale":{"type":"object","name":"LogScale","id":"p599937"},"title":{"type":"object","name":"Title","id":"p599929","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p599966","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599960","attributes":{"selected":{"type":"object","name":"Selection","id":"p599961","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599962"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18EaGGwfID9KD0aDiMxHQAAhSUjFygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p599967","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599968"}}},"glyph":{"type":"object","name":"Line","id":"p599963","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599964","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p599965","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p599975","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599969","attributes":{"selected":{"type":"object","name":"Selection","id":"p599970","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599971"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18EaGGwfID9KD0aDiMxHQAAhSUjFygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p599976","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599977"}}},"glyph":{"type":"object","name":"Line","id":"p599972","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599973","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p599974","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p599986","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599980","attributes":{"selected":{"type":"object","name":"Selection","id":"p599981","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599982"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2Te0hTYRjGs7IwpDKpkOxmZlqJzVs2W3vmps45t52dbeeYFZFERBEhUkRIVhbZzW6E2I0QUSKiqAipLKSIkK6E3YskRKSwC5lERN/3+Zx/xs55v/d93uf3fBV7x7/6eqXXXqF+B+33Po9bUxUdheH/Y/Bj3iTf+lWxGH4fhyPXY6dffhvP71OQYkw8vmBfAusScXsoPqY1eybrZyPt0QH70c1JPDcHv84c+vO4aC7Pp+DupgbRMZV90nBQVHt+zme/hVDtH6azbwaOia89/kXsb8Fvs+tp1E0L52RipcN7aVZKFudloVMJyObcHKTKdf7mcH4uDgs1NesWU0ceRPPk08/zqGcJymV7m5W6rLhzVfv4ui2f+pZCFN8airdRpw376/SmqTuWUa8d3za+2Jrbb6du4IJ6QP0OfJixIcG62sE9HIiT604u4D4FcI79Mmh2FXAvJ7Zsv7i2r9bJ/ZxoG5ADXNzThXeV6eKIi/sWYoKgevJ8IfcuhLLHKOL+RahWAIrpQzFaszP+uTqL6Ycbb9QAN31xQ9KvTC+hPyVQuHpK6JMHVdGW9l2NHvrlQcu27yJBpfStFErOKC/98yJWpM3S7qWPZbB1ZwpJZfSzDAp3so+++tDcIQH46K8fL2V5g58++7FH2p8UoN8BnJVxqwnQ9wBuPFgukh6g/xqeCbrdmRo5aOjPnyYiqpGHhtHKcI1cglDrO4PkE0SuOhAkpyACKhBB8tIhwlZfp+vkpmN34wqBQCc/HSo+MSFyDEFdr8oQeYbwRKSzuSNEriH01b4XiQmTbxgjpfzqMDmHkaguWJi8w1A40yLkHoFMf31dhPwjEM2FoRHmwMBO2d5qMA8GTgk3P50wmAsD12T8Bwzmw4S63h6TOTHRe/+cO6/FZF5MjFBPOf4DJ8WXB2gEAAA="},"shape":[141],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+19E0sJgdQH2o/RoOIymg9F8QGw5AABUtyVyaAQAAA=="},"shape":[141],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p599987","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599988"}}},"glyph":{"type":"object","name":"Line","id":"p599983","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599984","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p599985","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p599996","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599990","attributes":{"selected":{"type":"object","name":"Selection","id":"p599991","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599992"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p599997","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599998"}}},"glyph":{"type":"object","name":"Line","id":"p599993","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599994","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p599995","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p599935","attributes":{"tools":[{"id":"p599948"},{"id":"p599949"},{"id":"p599950"},{"id":"p599958"},{"type":"object","name":"SaveTool","id":"p599959"},{"id":"p600000"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p599943","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p599944","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p599945"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p599946"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p599938","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p599939","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p599940"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p599941"}}}],"center":[{"type":"object","name":"Grid","id":"p599942","attributes":{"axis":{"id":"p599938"}}},{"type":"object","name":"Grid","id":"p599947","attributes":{"dimension":1,"axis":{"id":"p599943"}}},{"type":"object","name":"Legend","id":"p599978","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p599979","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p599975"}]}},{"type":"object","name":"LegendItem","id":"p599989","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p599986"}]}},{"type":"object","name":"LegendItem","id":"p599999","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p599996"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p600001","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p600011","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p600003"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p600012"},"y_scale":{"type":"object","name":"LinearScale","id":"p600013"},"title":{"type":"object","name":"Title","id":"p600004","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p600042","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p600036","attributes":{"selected":{"type":"object","name":"Selection","id":"p600037","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p600038"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC31Mfb3jpb5Qe+H//+/7JgXgpHHpBwCWeKlKYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p600043","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p600044"}}},"glyph":{"type":"object","name":"Line","id":"p600039","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p600040","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p600041","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p600051","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p600045","attributes":{"selected":{"type":"object","name":"Selection","id":"p600046","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p600047"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC31Mfb3jpb5Qe+H//+/7JgXgpHHpBwCWeKlKYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p600052","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p600053"}}},"glyph":{"type":"object","name":"Line","id":"p600048","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p600049","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p600050","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p600062","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p600056","attributes":{"selected":{"type":"object","name":"Selection","id":"p600057","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p600058"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC31Mfb3jpb5Qe+H//+/7JgXgpHHpBwCWeKlKYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p600063","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p600064"}}},"glyph":{"type":"object","name":"Line","id":"p600059","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p600060","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p600061","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p600072","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p600066","attributes":{"selected":{"type":"object","name":"Selection","id":"p600067","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p600068"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p600073","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p600074"}}},"glyph":{"type":"object","name":"Line","id":"p600069","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p600070","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p600071","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p600010","attributes":{"tools":[{"id":"p600024"},{"id":"p600025"},{"id":"p600026"},{"id":"p600034"},{"type":"object","name":"SaveTool","id":"p600035"},{"id":"p600076"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p600019","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p600020","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p600021"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p600022"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p600014","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p600015"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p600016"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p600017"}}}],"center":[{"type":"object","name":"Grid","id":"p600018","attributes":{"axis":{"id":"p600014"}}},{"type":"object","name":"Grid","id":"p600023","attributes":{"dimension":1,"axis":{"id":"p600019"}}},{"type":"object","name":"Legend","id":"p600054","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p600055","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p600051"}]}},{"type":"object","name":"LegendItem","id":"p600065","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p600062"}]}},{"type":"object","name":"LegendItem","id":"p600075","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p600072"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p600087","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b1f5f91a-19ea-44a4-9ea9-ba6e2e432622","roots":{"p600088":"a1e3146d-090c-41eb-9f12-da4014c68ae6"},"root_ids":["p600088"]}];
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