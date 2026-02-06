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
    
    
    const element = document.getElementById("e49a7a62-e047-4f85-a2d5-cddc6e930e16");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e49a7a62-e047-4f85-a2d5-cddc6e930e16' but no matching script tag was found.")
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
                  const docs_json = '{"9e68d0a6-bd36-4ebb-b2da-5dd9300ce658":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p346033","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p346034"}}},"roots":[{"type":"object","name":"Column","id":"p346197","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p346195","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p346194","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p346187","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p346057"},{"type":"object","name":"PanTool","id":"p346133"}]}},{"type":"object","name":"ToolProxy","id":"p346188","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p346058","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p346134","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p346189","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p346059","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p346060","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p346066","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p346065","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p346135","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p346136","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p346142","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p346141","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p346190","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p346067"},{"type":"object","name":"ResetTool","id":"p346143"}]}},{"type":"object","name":"SaveTool","id":"p346191"},{"type":"object","name":"ToolProxy","id":"p346192","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p346109","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p346193","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p346185","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p346035","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p346036"},"y_range":{"type":"object","name":"DataRange1d","id":"p346037"},"x_scale":{"type":"object","name":"LinearScale","id":"p346045"},"y_scale":{"type":"object","name":"LogScale","id":"p346046"},"title":{"type":"object","name":"Title","id":"p346038","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p346075","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346069","attributes":{"selected":{"type":"object","name":"Selection","id":"p346070","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346071"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P+h0Q+qRI7lmuywv7a4YG/b8u32Z86cSfH9vM2+/9DXGWu/brXXjOmftPXHFnuu64s/OItvsX8duMPvkulm+/9AsPLjJorpKpF1820vbLJPSUtj21y9yf7v///xfLqk0/u/asgYqm6yX+X+sGnZhY32U2fOfClds9H+N9CfRRmk0y4Pq77MVN1of3VxgS//xQ1g915bjKAXF9hKcc/YYN936GtDg/MG+w8aMedf311vf/TMmTnXTNbbzyqwzTrYvc7+2///9famCLr10NcHT5XW2f/6/59fd9Na+zxbLvsSx7Ugf9Tf/7HK/uf//8u7QlbYx6SlHeM+u9T+y////sKJi+0/g921cJSmMQ0A/Ow1aigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346076","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346077"}}},"glyph":{"type":"object","name":"Line","id":"p346072","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346073","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p346074","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p346084","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346078","attributes":{"selected":{"type":"object","name":"Selection","id":"p346079","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346080"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P+h0Q+qRI7lmuywv7a4YG/b8u32Z86cSfH9vM2+/9DXGWu/brXXjOmftPXHFnuu64s/OItvsX8duMPvkulm+/9AsPLjJorpKpF1820vbLJPSUtj21y9yf7v///xfLqk0/u/asgYqm6yX+X+sGnZhY32U2fOfClds9H+N9CfRRmk0y4Pq77MVN1of3VxgS//xQ1g915bjKAXF9hKcc/YYN936GtDg/MG+w8aMedf311vf/TMmTnXTNbbzyqwzTrYvc7+2///9famCLr10NcHT5XW2f/6/59fd9Na+zxbLvsSx7Ugf9Tf/7HK/uf//8u7QlbYx6SlHeM+u9T+y////sKJi+0/g921cJSmMQ0A/Ow1aigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346085","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346086"}}},"glyph":{"type":"object","name":"Line","id":"p346081","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346082","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p346083","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p346095","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346089","attributes":{"selected":{"type":"object","name":"Selection","id":"p346090","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346091"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/1u+RjP71Cwmh+VgWsjhV9O+BfovpKF8JYcL4l9Yax3VoeLaDkLlR2QL3Q2g8kYONo/6dii/M4GqM3dI840MvjbFEqre2gEk22FtB9Xn4HBHEMRwhOp3cih0B4k4Q81xcWCrdYy/IO4GNc/dYdamZUCVHlBzPR30X3ADjfaCmu/tcFQWZIIv1B4/B5Aq01R/qH0BDmDqTgDU3kAHkOlfWIOg9gc58IANCoa6I9gBpNs3MgTqnhCHhWALQ6HuCnMAagK6KAzqvnAHs1SQw8Kh7oxwYACDSAcA8c3fUVgBAAA="},"shape":[43],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P///z//mPd2ewYGhgOf/24B8f+v/LiJIP33//94Pl3c9G+g+UUZG3HSIHOuLd4Ap38Bxcv2rbf/9v9/vb3pOjgNNG++lP5akHy9Lddy+89g/QsHLQ0AXZYjlFgBAAA="},"shape":[43],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346096","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346097"}}},"glyph":{"type":"object","name":"Line","id":"p346092","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346093","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p346094","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p346105","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346099","attributes":{"selected":{"type":"object","name":"Selection","id":"p346100","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346101"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p346106","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346107"}}},"glyph":{"type":"object","name":"Line","id":"p346102","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346103","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p346104","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p346044","attributes":{"tools":[{"id":"p346057"},{"id":"p346058"},{"id":"p346059"},{"id":"p346067"},{"type":"object","name":"SaveTool","id":"p346068"},{"id":"p346109"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p346052","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p346053","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p346054"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p346055"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p346047","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p346048","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p346049"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p346050"}}}],"center":[{"type":"object","name":"Grid","id":"p346051","attributes":{"axis":{"id":"p346047"}}},{"type":"object","name":"Grid","id":"p346056","attributes":{"dimension":1,"axis":{"id":"p346052"}}},{"type":"object","name":"Legend","id":"p346087","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p346088","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p346084"}]}},{"type":"object","name":"LegendItem","id":"p346098","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p346095"}]}},{"type":"object","name":"LegendItem","id":"p346108","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p346105"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p346110","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p346120","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p346112"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p346121"},"y_scale":{"type":"object","name":"LinearScale","id":"p346122"},"title":{"type":"object","name":"Title","id":"p346113","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p346151","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346145","attributes":{"selected":{"type":"object","name":"Selection","id":"p346146","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346147"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346152","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346153"}}},"glyph":{"type":"object","name":"Line","id":"p346148","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346149","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p346150","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p346160","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346154","attributes":{"selected":{"type":"object","name":"Selection","id":"p346155","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346156"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346161","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346162"}}},"glyph":{"type":"object","name":"Line","id":"p346157","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346158","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p346159","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p346171","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346165","attributes":{"selected":{"type":"object","name":"Selection","id":"p346166","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346167"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p346172","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346173"}}},"glyph":{"type":"object","name":"Line","id":"p346168","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346169","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p346170","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p346181","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p346175","attributes":{"selected":{"type":"object","name":"Selection","id":"p346176","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p346177"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p346182","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p346183"}}},"glyph":{"type":"object","name":"Line","id":"p346178","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p346179","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p346180","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p346119","attributes":{"tools":[{"id":"p346133"},{"id":"p346134"},{"id":"p346135"},{"id":"p346143"},{"type":"object","name":"SaveTool","id":"p346144"},{"id":"p346185"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p346128","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p346129","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p346130"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p346131"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p346123","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p346124"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p346125"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p346126"}}}],"center":[{"type":"object","name":"Grid","id":"p346127","attributes":{"axis":{"id":"p346123"}}},{"type":"object","name":"Grid","id":"p346132","attributes":{"dimension":1,"axis":{"id":"p346128"}}},{"type":"object","name":"Legend","id":"p346163","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p346164","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p346160"}]}},{"type":"object","name":"LegendItem","id":"p346174","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p346171"}]}},{"type":"object","name":"LegendItem","id":"p346184","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p346181"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p346186","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"9e68d0a6-bd36-4ebb-b2da-5dd9300ce658","roots":{"p346197":"e49a7a62-e047-4f85-a2d5-cddc6e930e16"},"root_ids":["p346197"]}];
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