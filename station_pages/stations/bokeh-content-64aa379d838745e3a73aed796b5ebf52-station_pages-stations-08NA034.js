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
    
    
    const element = document.getElementById("f7c1caf4-3356-4a5f-84e2-0cae36595672");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f7c1caf4-3356-4a5f-84e2-0cae36595672' but no matching script tag was found.")
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
                  const docs_json = '{"b59ff187-9c8d-42cc-99d7-fb71f66664dc":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p344773","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p344774"}}},"roots":[{"type":"object","name":"Column","id":"p344937","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p344935","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p344934","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p344927","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p344797"},{"type":"object","name":"PanTool","id":"p344873"}]}},{"type":"object","name":"ToolProxy","id":"p344928","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p344798","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p344874","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p344929","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p344799","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p344800","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p344806","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p344805","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p344875","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p344876","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p344882","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p344881","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p344930","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p344807"},{"type":"object","name":"ResetTool","id":"p344883"}]}},{"type":"object","name":"SaveTool","id":"p344931"},{"type":"object","name":"ToolProxy","id":"p344932","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p344849","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p344933","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p344925","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p344775","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p344776"},"y_range":{"type":"object","name":"DataRange1d","id":"p344777"},"x_scale":{"type":"object","name":"LinearScale","id":"p344785"},"y_scale":{"type":"object","name":"LogScale","id":"p344786"},"title":{"type":"object","name":"Title","id":"p344778","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p344815","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p344809","attributes":{"selected":{"type":"object","name":"Selection","id":"p344810","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p344811"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P+h0Q+qRI7lmuywv7a4YG/b8u32Z86cSfH9vM2+/9DXGWu/brXXjOmftPXHFnuu64s/OItvsX8duMPvkulm+/9AsPLjJorpKpF1820vbLJPSUtj21y9yf7v///xfLqk0/u/asgYqm6yX+X+sGnZhY32U2fOfClds9H+N9CfRRmk0y4Pq77MVN1of3VxgS//xQ1g915bjKAXF9hKcc/YYN936GtDg/MG+w8aMedf311vf/TMmTnXTNbbzyqwzTrYvc7+2///9famCLr10NcHT5XW2f/6/59fd9Na+zxbLvsSx7Ugf9Tf/7HK/uf//8u7QlbYx6SlHeM+u9T+y////sKJi+0/g921cJSmMQ0A/Ow1aigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p344816","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p344817"}}},"glyph":{"type":"object","name":"Line","id":"p344812","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p344813","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p344814","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p344824","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p344818","attributes":{"selected":{"type":"object","name":"Selection","id":"p344819","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p344820"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P+h0Q+qRI7lmuywv7a4YG/b8u32Z86cSfH9vM2+/9DXGWu/brXXjOmftPXHFnuu64s/OItvsX8duMPvkulm+/9AsPLjJorpKpF1820vbLJPSUtj21y9yf7v///xfLqk0/u/asgYqm6yX+X+sGnZhY32U2fOfClds9H+N9CfRRmk0y4Pq77MVN1of3VxgS//xQ1g915bjKAXF9hKcc/YYN936GtDg/MG+w8aMedf311vf/TMmTnXTNbbzyqwzTrYvc7+2///9famCLr10NcHT5XW2f/6/59fd9Na+zxbLvsSx7Ugf9Tf/7HK/uf//8u7QlbYx6SlHeM+u9T+y////sKJi+0/g921cJSmMQ0A/Ow1aigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p344825","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p344826"}}},"glyph":{"type":"object","name":"Line","id":"p344821","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p344822","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p344823","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p344835","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p344829","attributes":{"selected":{"type":"object","name":"Selection","id":"p344830","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p344831"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/1u+RjP71Cwmh+VgWsjhV9O+BfovpKF8JYcL4l9Yax3VoeLaDkLlR2QL3Q2g8kYONo/6dii/M4GqM3dI840MvjbFEqre2gEk22FtB9Xn4HBHEMRwhOp3cih0B4k4Q81xcWCrdYy/IO4GNc/dYdamZUCVHlBzPR30X3ADjfaCmu/tcFQWZIIv1B4/B5Aq01R/qH0BDmDqTgDU3kAHkOlfWIOg9gc58IANCoa6I9gBpNs3MgTqnhCHhWALQ6HuCnMAagK6KAzqvnAHs1SQw8Kh7oxwYACDSAcA8c3fUVgBAAA="},"shape":[43],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P///z//mPd2ewYGhgOf/24B8f+v/LiJIP33//94Pl3c9G+g+UUZG3HSIHOuLd4Ap38Bxcv2rbf/9v9/vb3pOjgNNG++lP5akHy9Lddy+89g/QsHLQ0AXZYjlFgBAAA="},"shape":[43],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p344836","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p344837"}}},"glyph":{"type":"object","name":"Line","id":"p344832","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p344833","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p344834","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p344845","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p344839","attributes":{"selected":{"type":"object","name":"Selection","id":"p344840","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p344841"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p344846","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p344847"}}},"glyph":{"type":"object","name":"Line","id":"p344842","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p344843","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p344844","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p344784","attributes":{"tools":[{"id":"p344797"},{"id":"p344798"},{"id":"p344799"},{"id":"p344807"},{"type":"object","name":"SaveTool","id":"p344808"},{"id":"p344849"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p344792","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p344793","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p344794"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p344795"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p344787","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p344788","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p344789"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p344790"}}}],"center":[{"type":"object","name":"Grid","id":"p344791","attributes":{"axis":{"id":"p344787"}}},{"type":"object","name":"Grid","id":"p344796","attributes":{"dimension":1,"axis":{"id":"p344792"}}},{"type":"object","name":"Legend","id":"p344827","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p344828","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p344824"}]}},{"type":"object","name":"LegendItem","id":"p344838","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p344835"}]}},{"type":"object","name":"LegendItem","id":"p344848","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p344845"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p344850","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p344860","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p344852"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p344861"},"y_scale":{"type":"object","name":"LinearScale","id":"p344862"},"title":{"type":"object","name":"Title","id":"p344853","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p344891","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p344885","attributes":{"selected":{"type":"object","name":"Selection","id":"p344886","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p344887"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p344892","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p344893"}}},"glyph":{"type":"object","name":"Line","id":"p344888","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p344889","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p344890","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p344900","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p344894","attributes":{"selected":{"type":"object","name":"Selection","id":"p344895","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p344896"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p344901","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p344902"}}},"glyph":{"type":"object","name":"Line","id":"p344897","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p344898","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p344899","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p344911","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p344905","attributes":{"selected":{"type":"object","name":"Selection","id":"p344906","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p344907"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p344912","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p344913"}}},"glyph":{"type":"object","name":"Line","id":"p344908","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p344909","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p344910","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p344921","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p344915","attributes":{"selected":{"type":"object","name":"Selection","id":"p344916","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p344917"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p344922","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p344923"}}},"glyph":{"type":"object","name":"Line","id":"p344918","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p344919","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p344920","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p344859","attributes":{"tools":[{"id":"p344873"},{"id":"p344874"},{"id":"p344875"},{"id":"p344883"},{"type":"object","name":"SaveTool","id":"p344884"},{"id":"p344925"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p344868","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p344869","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p344870"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p344871"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p344863","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p344864"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p344865"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p344866"}}}],"center":[{"type":"object","name":"Grid","id":"p344867","attributes":{"axis":{"id":"p344863"}}},{"type":"object","name":"Grid","id":"p344872","attributes":{"dimension":1,"axis":{"id":"p344868"}}},{"type":"object","name":"Legend","id":"p344903","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p344904","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p344900"}]}},{"type":"object","name":"LegendItem","id":"p344914","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p344911"}]}},{"type":"object","name":"LegendItem","id":"p344924","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p344921"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p344926","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b59ff187-9c8d-42cc-99d7-fb71f66664dc","roots":{"p344937":"f7c1caf4-3356-4a5f-84e2-0cae36595672"},"root_ids":["p344937"]}];
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