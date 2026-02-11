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
    
    
    const element = document.getElementById("f9955cd2-548c-4200-ac52-085576522c2f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f9955cd2-548c-4200-ac52-085576522c2f' but no matching script tag was found.")
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
                  const docs_json = '{"be62a499-03f4-452b-b5f7-41e21b60f855":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p354996","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p354997"}}},"roots":[{"type":"object","name":"Column","id":"p355160","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p355158","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p355157","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p355150","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p355020"},{"type":"object","name":"PanTool","id":"p355096"}]}},{"type":"object","name":"ToolProxy","id":"p355151","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p355021","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p355097","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p355152","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p355022","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p355023","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p355029","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p355028","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p355098","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p355099","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p355105","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p355104","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p355153","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p355030"},{"type":"object","name":"ResetTool","id":"p355106"}]}},{"type":"object","name":"SaveTool","id":"p355154"},{"type":"object","name":"ToolProxy","id":"p355155","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p355072","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p355156","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p355148","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p354998","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p354999"},"y_range":{"type":"object","name":"DataRange1d","id":"p355000"},"x_scale":{"type":"object","name":"LinearScale","id":"p355008"},"y_scale":{"type":"object","name":"LogScale","id":"p355009"},"title":{"type":"object","name":"Title","id":"p355001","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p355038","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p355032","attributes":{"selected":{"type":"object","name":"Selection","id":"p355033","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p355034"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P+h0Q+qRI7lmuywv7a4YG/b8u32Z86cSfH9vM2+/9DXGWu/brXXjOmftPXHFnuu64s/OItvsX8duMPvkulm+/9AsPLjJorpKpF1820vbLJPSUtj21y9yf7v///xfLqk0/u/asgYqm6yX+X+sGnZhY32U2fOfClds9H+N9CfRRmk0y4Pq77MVN1of3VxgS//xQ1g915bjKAXF9hKcc/YYN936GtDg/MG+w8aMedf311vf/TMmTnXTNbbzyqwzTrYvc7+2///9famCLr10NcHT5XW2f/6/59fd9Na+zxbLvsSx7Ugf9Tf/7HK/uf//8u7QlbYx6SlHeM+u9T+y////sKJi+0/g921cJSmMQ0A/Ow1aigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p355039","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p355040"}}},"glyph":{"type":"object","name":"Line","id":"p355035","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p355036","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p355037","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p355047","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p355041","attributes":{"selected":{"type":"object","name":"Selection","id":"p355042","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p355043"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P+h0Q+qRI7lmuywv7a4YG/b8u32Z86cSfH9vM2+/9DXGWu/brXXjOmftPXHFnuu64s/OItvsX8duMPvkulm+/9AsPLjJorpKpF1820vbLJPSUtj21y9yf7v///xfLqk0/u/asgYqm6yX+X+sGnZhY32U2fOfClds9H+N9CfRRmk0y4Pq77MVN1of3VxgS//xQ1g915bjKAXF9hKcc/YYN936GtDg/MG+w8aMedf311vf/TMmTnXTNbbzyqwzTrYvc7+2///9famCLr10NcHT5XW2f/6/59fd9Na+zxbLvsSx7Ugf9Tf/7HK/uf//8u7QlbYx6SlHeM+u9T+y////sKJi+0/g921cJSmMQ0A/Ow1aigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p355048","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p355049"}}},"glyph":{"type":"object","name":"Line","id":"p355044","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p355045","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p355046","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p355058","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p355052","attributes":{"selected":{"type":"object","name":"Selection","id":"p355053","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p355054"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/1u+RjP71Cwmh+VgWsjhV9O+BfovpKF8JYcL4l9Yax3VoeLaDkLlR2QL3Q2g8kYONo/6dii/M4GqM3dI840MvjbFEqre2gEk22FtB9Xn4HBHEMRwhOp3cih0B4k4Q81xcWCrdYy/IO4GNc/dYdamZUCVHlBzPR30X3ADjfaCmu/tcFQWZIIv1B4/B5Aq01R/qH0BDmDqTgDU3kAHkOlfWIOg9gc58IANCoa6I9gBpNs3MgTqnhCHhWALQ6HuCnMAagK6KAzqvnAHs1SQw8Kh7oxwYACDSAcA8c3fUVgBAAA="},"shape":[43],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P///z//mPd2ewYGhgOf/24B8f+v/LiJIP33//94Pl3c9G+g+UUZG3HSIHOuLd4Ap38Bxcv2rbf/9v9/vb3pOjgNNG++lP5akHy9Lddy+89g/QsHLQ0AXZYjlFgBAAA="},"shape":[43],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p355059","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p355060"}}},"glyph":{"type":"object","name":"Line","id":"p355055","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p355056","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p355057","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p355068","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p355062","attributes":{"selected":{"type":"object","name":"Selection","id":"p355063","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p355064"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p355069","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p355070"}}},"glyph":{"type":"object","name":"Line","id":"p355065","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p355066","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p355067","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p355007","attributes":{"tools":[{"id":"p355020"},{"id":"p355021"},{"id":"p355022"},{"id":"p355030"},{"type":"object","name":"SaveTool","id":"p355031"},{"id":"p355072"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p355015","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p355016","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p355017"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p355018"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p355010","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p355011","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p355012"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p355013"}}}],"center":[{"type":"object","name":"Grid","id":"p355014","attributes":{"axis":{"id":"p355010"}}},{"type":"object","name":"Grid","id":"p355019","attributes":{"dimension":1,"axis":{"id":"p355015"}}},{"type":"object","name":"Legend","id":"p355050","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p355051","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p355047"}]}},{"type":"object","name":"LegendItem","id":"p355061","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p355058"}]}},{"type":"object","name":"LegendItem","id":"p355071","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p355068"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p355073","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p355083","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p355075"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p355084"},"y_scale":{"type":"object","name":"LinearScale","id":"p355085"},"title":{"type":"object","name":"Title","id":"p355076","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p355114","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p355108","attributes":{"selected":{"type":"object","name":"Selection","id":"p355109","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p355110"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p355115","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p355116"}}},"glyph":{"type":"object","name":"Line","id":"p355111","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p355112","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p355113","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p355123","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p355117","attributes":{"selected":{"type":"object","name":"Selection","id":"p355118","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p355119"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p355124","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p355125"}}},"glyph":{"type":"object","name":"Line","id":"p355120","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p355121","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p355122","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p355134","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p355128","attributes":{"selected":{"type":"object","name":"Selection","id":"p355129","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p355130"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p355135","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p355136"}}},"glyph":{"type":"object","name":"Line","id":"p355131","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p355132","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p355133","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p355144","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p355138","attributes":{"selected":{"type":"object","name":"Selection","id":"p355139","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p355140"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p355145","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p355146"}}},"glyph":{"type":"object","name":"Line","id":"p355141","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p355142","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p355143","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p355082","attributes":{"tools":[{"id":"p355096"},{"id":"p355097"},{"id":"p355098"},{"id":"p355106"},{"type":"object","name":"SaveTool","id":"p355107"},{"id":"p355148"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p355091","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p355092","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p355093"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p355094"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p355086","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p355087"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p355088"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p355089"}}}],"center":[{"type":"object","name":"Grid","id":"p355090","attributes":{"axis":{"id":"p355086"}}},{"type":"object","name":"Grid","id":"p355095","attributes":{"dimension":1,"axis":{"id":"p355091"}}},{"type":"object","name":"Legend","id":"p355126","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p355127","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p355123"}]}},{"type":"object","name":"LegendItem","id":"p355137","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p355134"}]}},{"type":"object","name":"LegendItem","id":"p355147","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p355144"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p355149","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"be62a499-03f4-452b-b5f7-41e21b60f855","roots":{"p355160":"f9955cd2-548c-4200-ac52-085576522c2f"},"root_ids":["p355160"]}];
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