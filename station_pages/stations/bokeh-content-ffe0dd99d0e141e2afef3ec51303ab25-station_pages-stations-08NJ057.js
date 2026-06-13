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
    
    
    const element = document.getElementById("d04fa73c-6c75-49f8-ab56-8edc1b8a1d62");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd04fa73c-6c75-49f8-ab56-8edc1b8a1d62' but no matching script tag was found.")
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
                  const docs_json = '{"a388f747-0b22-4397-b5ca-dacf566ae1b0":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p599053","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p599054"}}},"roots":[{"type":"object","name":"Column","id":"p599217","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p599214","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p599213","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p599206","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p599077"},{"type":"object","name":"PanTool","id":"p599153"}]}},{"type":"object","name":"ToolProxy","id":"p599207","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p599078","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p599154","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p599208","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p599079","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p599080","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p599086","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p599085","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p599155","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p599156","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p599162","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p599161","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p599209","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p599087"},{"type":"object","name":"ResetTool","id":"p599163"}]}},{"type":"object","name":"SaveTool","id":"p599210"},{"type":"object","name":"ToolProxy","id":"p599211","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p599129","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p599212","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p599205","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p599055","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p599056"},"y_range":{"type":"object","name":"DataRange1d","id":"p599057"},"x_scale":{"type":"object","name":"LinearScale","id":"p599065"},"y_scale":{"type":"object","name":"LogScale","id":"p599066"},"title":{"type":"object","name":"Title","id":"p599058","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p599095","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599089","attributes":{"selected":{"type":"object","name":"Selection","id":"p599090","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599091"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18EaGGwfID9KD0aDiMxHQAAhSUjFygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p599096","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599097"}}},"glyph":{"type":"object","name":"Line","id":"p599092","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599093","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p599094","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p599104","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599098","attributes":{"selected":{"type":"object","name":"Selection","id":"p599099","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599100"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+18EaGGwfID9KD0aDiMxHQAAhSUjFygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p599105","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599106"}}},"glyph":{"type":"object","name":"Line","id":"p599101","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599102","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p599103","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p599115","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599109","attributes":{"selected":{"type":"object","name":"Selection","id":"p599110","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599111"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2Te0hTYRjGs7IwpDKpkOxmZlqJzVs2W3vmps45t52dbeeYFZFERBEhUkRIVhbZzW6E2I0QUSKiqAipLKSIkK6E3YskRKSwC5lERN/3+Zx/xs55v/d93uf3fBV7x7/6eqXXXqF+B+33Po9bUxUdheH/Y/Bj3iTf+lWxGH4fhyPXY6dffhvP71OQYkw8vmBfAusScXsoPqY1eybrZyPt0QH70c1JPDcHv84c+vO4aC7Pp+DupgbRMZV90nBQVHt+zme/hVDtH6azbwaOia89/kXsb8Fvs+tp1E0L52RipcN7aVZKFudloVMJyObcHKTKdf7mcH4uDgs1NesWU0ceRPPk08/zqGcJymV7m5W6rLhzVfv4ui2f+pZCFN8airdRpw376/SmqTuWUa8d3za+2Jrbb6du4IJ6QP0OfJixIcG62sE9HIiT604u4D4FcI79Mmh2FXAvJ7Zsv7i2r9bJ/ZxoG5ADXNzThXeV6eKIi/sWYoKgevJ8IfcuhLLHKOL+RahWAIrpQzFaszP+uTqL6Ycbb9QAN31xQ9KvTC+hPyVQuHpK6JMHVdGW9l2NHvrlQcu27yJBpfStFErOKC/98yJWpM3S7qWPZbB1ZwpJZfSzDAp3so+++tDcIQH46K8fL2V5g58++7FH2p8UoN8BnJVxqwnQ9wBuPFgukh6g/xqeCbrdmRo5aOjPnyYiqpGHhtHKcI1cglDrO4PkE0SuOhAkpyACKhBB8tIhwlZfp+vkpmN34wqBQCc/HSo+MSFyDEFdr8oQeYbwRKSzuSNEriH01b4XiQmTbxgjpfzqMDmHkaguWJi8w1A40yLkHoFMf31dhPwjEM2FoRHmwMBO2d5qMA8GTgk3P50wmAsD12T8Bwzmw4S63h6TOTHRe/+cO6/FZF5MjFBPOf4DJ8WXB2gEAAA="},"shape":[141],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+19E0sJgdQH2o/RoOIymg9F8QGw5AABUtyVyaAQAAA=="},"shape":[141],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p599116","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599117"}}},"glyph":{"type":"object","name":"Line","id":"p599112","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599113","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p599114","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p599125","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599119","attributes":{"selected":{"type":"object","name":"Selection","id":"p599120","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599121"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p599126","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599127"}}},"glyph":{"type":"object","name":"Line","id":"p599122","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599123","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p599124","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p599064","attributes":{"tools":[{"id":"p599077"},{"id":"p599078"},{"id":"p599079"},{"id":"p599087"},{"type":"object","name":"SaveTool","id":"p599088"},{"id":"p599129"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p599072","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p599073","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p599074"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p599075"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p599067","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p599068","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p599069"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p599070"}}}],"center":[{"type":"object","name":"Grid","id":"p599071","attributes":{"axis":{"id":"p599067"}}},{"type":"object","name":"Grid","id":"p599076","attributes":{"dimension":1,"axis":{"id":"p599072"}}},{"type":"object","name":"Legend","id":"p599107","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p599108","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p599104"}]}},{"type":"object","name":"LegendItem","id":"p599118","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p599115"}]}},{"type":"object","name":"LegendItem","id":"p599128","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p599125"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p599130","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p599140","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p599132"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p599141"},"y_scale":{"type":"object","name":"LinearScale","id":"p599142"},"title":{"type":"object","name":"Title","id":"p599133","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p599171","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599165","attributes":{"selected":{"type":"object","name":"Selection","id":"p599166","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599167"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC31Mfb3jpb5Qe+H//+/7JgXgpHHpBwCWeKlKYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p599172","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599173"}}},"glyph":{"type":"object","name":"Line","id":"p599168","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599169","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p599170","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p599180","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599174","attributes":{"selected":{"type":"object","name":"Selection","id":"p599175","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599176"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC31Mfb3jpb5Qe+H//+/7JgXgpHHpBwCWeKlKYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p599181","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599182"}}},"glyph":{"type":"object","name":"Line","id":"p599177","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599178","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p599179","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p599191","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599185","attributes":{"selected":{"type":"object","name":"Selection","id":"p599186","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599187"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKC31Mfb3jpb5Qe+H//+/7JgXgpHHpBwCWeKlKYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p599192","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599193"}}},"glyph":{"type":"object","name":"Line","id":"p599188","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599189","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p599190","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p599201","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p599195","attributes":{"selected":{"type":"object","name":"Selection","id":"p599196","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p599197"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p599202","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p599203"}}},"glyph":{"type":"object","name":"Line","id":"p599198","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p599199","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p599200","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p599139","attributes":{"tools":[{"id":"p599153"},{"id":"p599154"},{"id":"p599155"},{"id":"p599163"},{"type":"object","name":"SaveTool","id":"p599164"},{"id":"p599205"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p599148","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p599149","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p599150"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p599151"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p599143","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p599144"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p599145"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p599146"}}}],"center":[{"type":"object","name":"Grid","id":"p599147","attributes":{"axis":{"id":"p599143"}}},{"type":"object","name":"Grid","id":"p599152","attributes":{"dimension":1,"axis":{"id":"p599148"}}},{"type":"object","name":"Legend","id":"p599183","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p599184","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p599180"}]}},{"type":"object","name":"LegendItem","id":"p599194","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p599191"}]}},{"type":"object","name":"LegendItem","id":"p599204","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p599201"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p599216","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"a388f747-0b22-4397-b5ca-dacf566ae1b0","roots":{"p599217":"d04fa73c-6c75-49f8-ab56-8edc1b8a1d62"},"root_ids":["p599217"]}];
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