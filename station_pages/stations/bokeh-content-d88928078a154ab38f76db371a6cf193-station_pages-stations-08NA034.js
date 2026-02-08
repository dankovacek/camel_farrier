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
    
    
    const element = document.getElementById("bf5b985d-1cf9-4a35-9fd5-e9ed64f69eb7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bf5b985d-1cf9-4a35-9fd5-e9ed64f69eb7' but no matching script tag was found.")
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
                  const docs_json = '{"bbdee1be-a721-4eb8-a2d8-ec9ebf531e8c":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p346242","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p346243"}}},"roots":[{"type":"object","name":"Column","id":"p346406","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p346404","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p346403","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p346396","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p346266"},{"type":"object","name":"PanTool","id":"p346342"}]}},{"type":"object","name":"ToolProxy","id":"p346397","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p346267","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p346343","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p346398","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p346268","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p346269","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p346275","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p346274","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p346344","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p346345","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p346351","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p346350","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p346399","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p346276"},{"type":"object","name":"ResetTool","id":"p346352"}]}},{"type":"object","name":"SaveTool","id":"p346400"},{"type":"object","name":"ToolProxy","id":"p346401","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p346318","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p346402","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p346394","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p346244","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p346245"},"y_range":{"type":"object","name":"DataRange1d","id":"p346246"},"x_scale":{"type":"object","name":"LinearScale","id":"p346254"},"y_scale":{"type":"object","name":"LogScale","id":"p346255"},"title":{"type":"object","name":"Title","id":"p346247","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p346284","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346278","attributes":{"selected":{"type":"object","name":"Selection","id":"p346279","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346280"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P+h0Q+qRI7lmuywv7a4YG/b8u32Z86cSfH9vM2+/9DXGWu/brXXjOmftPXHFnuu64s/OItvsX8duMPvkulm+/9AsPLjJorpKpF1820vbLJPSUtj21y9yf7v///xfLqk0/u/asgYqm6yX+X+sGnZhY32U2fOfClds9H+N9CfRRmk0y4Pq77MVN1of3VxgS//xQ1g915bjKAXF9hKcc/YYN936GtDg/MG+w8aMedf311vf/TMmTnXTNbbzyqwzTrYvc7+2///9famCLr10NcHT5XW2f/6/59fd9Na+zxbLvsSx7Ugf9Tf/7HK/uf//8u7QlbYx6SlHeM+u9T+y////sKJi+0/g921cJSmMQ0A/Ow1aigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346285","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346286"}}},"glyph":{"type":"object","name":"Line","id":"p346281","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346282","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p346283","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p346293","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346287","attributes":{"selected":{"type":"object","name":"Selection","id":"p346288","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346289"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P+h0Q+qRI7lmuywv7a4YG/b8u32Z86cSfH9vM2+/9DXGWu/brXXjOmftPXHFnuu64s/OItvsX8duMPvkulm+/9AsPLjJorpKpF1820vbLJPSUtj21y9yf7v///xfLqk0/u/asgYqm6yX+X+sGnZhY32U2fOfClds9H+N9CfRRmk0y4Pq77MVN1of3VxgS//xQ1g915bjKAXF9hKcc/YYN936GtDg/MG+w8aMedf311vf/TMmTnXTNbbzyqwzTrYvc7+2///9famCLr10NcHT5XW2f/6/59fd9Na+zxbLvsSx7Ugf9Tf/7HK/uf//8u7QlbYx6SlHeM+u9T+y////sKJi+0/g921cJSmMQ0A/Ow1aigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346294","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346295"}}},"glyph":{"type":"object","name":"Line","id":"p346290","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346291","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p346292","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p346304","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346298","attributes":{"selected":{"type":"object","name":"Selection","id":"p346299","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346300"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/1u+RjP71Cwmh+VgWsjhV9O+BfovpKF8JYcL4l9Yax3VoeLaDkLlR2QL3Q2g8kYONo/6dii/M4GqM3dI840MvjbFEqre2gEk22FtB9Xn4HBHEMRwhOp3cih0B4k4Q81xcWCrdYy/IO4GNc/dYdamZUCVHlBzPR30X3ADjfaCmu/tcFQWZIIv1B4/B5Aq01R/qH0BDmDqTgDU3kAHkOlfWIOg9gc58IANCoa6I9gBpNs3MgTqnhCHhWALQ6HuCnMAagK6KAzqvnAHs1SQw8Kh7oxwYACDSAcA8c3fUVgBAAA="},"shape":[43],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P///z//mPd2ewYGhgOf/24B8f+v/LiJIP33//94Pl3c9G+g+UUZG3HSIHOuLd4Ap38Bxcv2rbf/9v9/vb3pOjgNNG++lP5akHy9Lddy+89g/QsHLQ0AXZYjlFgBAAA="},"shape":[43],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346305","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346306"}}},"glyph":{"type":"object","name":"Line","id":"p346301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346302","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p346303","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p346314","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346308","attributes":{"selected":{"type":"object","name":"Selection","id":"p346309","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346310"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p346315","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346316"}}},"glyph":{"type":"object","name":"Line","id":"p346311","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346312","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p346313","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p346253","attributes":{"tools":[{"id":"p346266"},{"id":"p346267"},{"id":"p346268"},{"id":"p346276"},{"type":"object","name":"SaveTool","id":"p346277"},{"id":"p346318"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p346261","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p346262","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p346263"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p346264"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p346256","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p346257","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p346258"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p346259"}}}],"center":[{"type":"object","name":"Grid","id":"p346260","attributes":{"axis":{"id":"p346256"}}},{"type":"object","name":"Grid","id":"p346265","attributes":{"dimension":1,"axis":{"id":"p346261"}}},{"type":"object","name":"Legend","id":"p346296","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p346297","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p346293"}]}},{"type":"object","name":"LegendItem","id":"p346307","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p346304"}]}},{"type":"object","name":"LegendItem","id":"p346317","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p346314"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p346319","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p346329","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p346321"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p346330"},"y_scale":{"type":"object","name":"LinearScale","id":"p346331"},"title":{"type":"object","name":"Title","id":"p346322","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p346360","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346354","attributes":{"selected":{"type":"object","name":"Selection","id":"p346355","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346356"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346361","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346362"}}},"glyph":{"type":"object","name":"Line","id":"p346357","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346358","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p346359","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p346369","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346363","attributes":{"selected":{"type":"object","name":"Selection","id":"p346364","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346365"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346370","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346371"}}},"glyph":{"type":"object","name":"Line","id":"p346366","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346367","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p346368","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p346380","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346374","attributes":{"selected":{"type":"object","name":"Selection","id":"p346375","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346376"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346381","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346382"}}},"glyph":{"type":"object","name":"Line","id":"p346377","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346378","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p346379","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p346390","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346384","attributes":{"selected":{"type":"object","name":"Selection","id":"p346385","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346386"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p346391","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346392"}}},"glyph":{"type":"object","name":"Line","id":"p346387","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346388","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p346389","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p346328","attributes":{"tools":[{"id":"p346342"},{"id":"p346343"},{"id":"p346344"},{"id":"p346352"},{"type":"object","name":"SaveTool","id":"p346353"},{"id":"p346394"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p346337","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p346338","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p346339"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p346340"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p346332","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p346333"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p346334"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p346335"}}}],"center":[{"type":"object","name":"Grid","id":"p346336","attributes":{"axis":{"id":"p346332"}}},{"type":"object","name":"Grid","id":"p346341","attributes":{"dimension":1,"axis":{"id":"p346337"}}},{"type":"object","name":"Legend","id":"p346372","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p346373","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p346369"}]}},{"type":"object","name":"LegendItem","id":"p346383","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p346380"}]}},{"type":"object","name":"LegendItem","id":"p346393","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p346390"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p346395","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"bbdee1be-a721-4eb8-a2d8-ec9ebf531e8c","roots":{"p346406":"bf5b985d-1cf9-4a35-9fd5-e9ed64f69eb7"},"root_ids":["p346406"]}];
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