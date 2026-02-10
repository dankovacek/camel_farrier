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
    
    
    const element = document.getElementById("b8ae0768-b8c2-463e-98c9-457b3d2517d8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b8ae0768-b8c2-463e-98c9-457b3d2517d8' but no matching script tag was found.")
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
                  const docs_json = '{"5fad46ce-8e51-4ae4-8e51-356d2a288535":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p349411","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p349412"}}},"roots":[{"type":"object","name":"Column","id":"p349575","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p349573","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p349572","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p349565","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p349435"},{"type":"object","name":"PanTool","id":"p349511"}]}},{"type":"object","name":"ToolProxy","id":"p349566","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p349436","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p349512","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p349567","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p349437","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p349438","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p349444","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p349443","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p349513","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p349514","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p349520","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p349519","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p349568","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p349445"},{"type":"object","name":"ResetTool","id":"p349521"}]}},{"type":"object","name":"SaveTool","id":"p349569"},{"type":"object","name":"ToolProxy","id":"p349570","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p349487","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p349571","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p349563","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p349413","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p349414"},"y_range":{"type":"object","name":"DataRange1d","id":"p349415"},"x_scale":{"type":"object","name":"LinearScale","id":"p349423"},"y_scale":{"type":"object","name":"LogScale","id":"p349424"},"title":{"type":"object","name":"Title","id":"p349416","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p349453","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349447","attributes":{"selected":{"type":"object","name":"Selection","id":"p349448","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349449"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P+h0Q+qRI7lmuywv7a4YG/b8u32Z86cSfH9vM2+/9DXGWu/brXXjOmftPXHFnuu64s/OItvsX8duMPvkulm+/9AsPLjJorpKpF1820vbLJPSUtj21y9yf7v///xfLqk0/u/asgYqm6yX+X+sGnZhY32U2fOfClds9H+N9CfRRmk0y4Pq77MVN1of3VxgS//xQ1g915bjKAXF9hKcc/YYN936GtDg/MG+w8aMedf311vf/TMmTnXTNbbzyqwzTrYvc7+2///9famCLr10NcHT5XW2f/6/59fd9Na+zxbLvsSx7Ugf9Tf/7HK/uf//8u7QlbYx6SlHeM+u9T+y////sKJi+0/g921cJSmMQ0A/Ow1aigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p349454","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349455"}}},"glyph":{"type":"object","name":"Line","id":"p349450","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349451","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p349452","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p349462","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349456","attributes":{"selected":{"type":"object","name":"Selection","id":"p349457","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349458"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P+h0Q+qRI7lmuywv7a4YG/b8u32Z86cSfH9vM2+/9DXGWu/brXXjOmftPXHFnuu64s/OItvsX8duMPvkulm+/9AsPLjJorpKpF1820vbLJPSUtj21y9yf7v///xfLqk0/u/asgYqm6yX+X+sGnZhY32U2fOfClds9H+N9CfRRmk0y4Pq77MVN1of3VxgS//xQ1g915bjKAXF9hKcc/YYN936GtDg/MG+w8aMedf311vf/TMmTnXTNbbzyqwzTrYvc7+2///9famCLr10NcHT5XW2f/6/59fd9Na+zxbLvsSx7Ugf9Tf/7HK/uf//8u7QlbYx6SlHeM+u9T+y////sKJi+0/g921cJSmMQ0A/Ow1aigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p349463","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349464"}}},"glyph":{"type":"object","name":"Line","id":"p349459","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p349461","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p349473","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349467","attributes":{"selected":{"type":"object","name":"Selection","id":"p349468","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349469"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/1u+RjP71Cwmh+VgWsjhV9O+BfovpKF8JYcL4l9Yax3VoeLaDkLlR2QL3Q2g8kYONo/6dii/M4GqM3dI840MvjbFEqre2gEk22FtB9Xn4HBHEMRwhOp3cih0B4k4Q81xcWCrdYy/IO4GNc/dYdamZUCVHlBzPR30X3ADjfaCmu/tcFQWZIIv1B4/B5Aq01R/qH0BDmDqTgDU3kAHkOlfWIOg9gc58IANCoa6I9gBpNs3MgTqnhCHhWALQ6HuCnMAagK6KAzqvnAHs1SQw8Kh7oxwYACDSAcA8c3fUVgBAAA="},"shape":[43],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v3///+ksk77P///z//mPd2ewYGhgOf/24B8f+v/LiJIP33//94Pl3c9G+g+UUZG3HSIHOuLd4Ap38Bxcv2rbf/9v9/vb3pOjgNNG++lP5akHy9Lddy+89g/QsHLQ0AXZYjlFgBAAA="},"shape":[43],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p349474","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349475"}}},"glyph":{"type":"object","name":"Line","id":"p349470","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349471","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p349472","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p349483","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349477","attributes":{"selected":{"type":"object","name":"Selection","id":"p349478","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349479"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p349484","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349485"}}},"glyph":{"type":"object","name":"Line","id":"p349480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349481","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p349482","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p349422","attributes":{"tools":[{"id":"p349435"},{"id":"p349436"},{"id":"p349437"},{"id":"p349445"},{"type":"object","name":"SaveTool","id":"p349446"},{"id":"p349487"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p349430","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p349431","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p349432"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p349433"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p349425","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p349426","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p349427"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p349428"}}}],"center":[{"type":"object","name":"Grid","id":"p349429","attributes":{"axis":{"id":"p349425"}}},{"type":"object","name":"Grid","id":"p349434","attributes":{"dimension":1,"axis":{"id":"p349430"}}},{"type":"object","name":"Legend","id":"p349465","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p349466","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p349462"}]}},{"type":"object","name":"LegendItem","id":"p349476","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p349473"}]}},{"type":"object","name":"LegendItem","id":"p349486","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p349483"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p349488","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p349498","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p349490"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p349499"},"y_scale":{"type":"object","name":"LinearScale","id":"p349500"},"title":{"type":"object","name":"Title","id":"p349491","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p349529","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349523","attributes":{"selected":{"type":"object","name":"Selection","id":"p349524","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349525"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p349530","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349531"}}},"glyph":{"type":"object","name":"Line","id":"p349526","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349527","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p349528","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p349538","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349532","attributes":{"selected":{"type":"object","name":"Selection","id":"p349533","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349534"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p349539","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349540"}}},"glyph":{"type":"object","name":"Line","id":"p349535","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349536","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p349537","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p349549","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349543","attributes":{"selected":{"type":"object","name":"Selection","id":"p349544","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349545"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qwk0p///99flLHQ/uiZM3Pe1qy3x6UOAJbnfpxgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p349550","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349551"}}},"glyph":{"type":"object","name":"Line","id":"p349546","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349547","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p349548","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p349559","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p349553","attributes":{"selected":{"type":"object","name":"Selection","id":"p349554","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p349555"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p349560","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p349561"}}},"glyph":{"type":"object","name":"Line","id":"p349556","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p349557","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p349558","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p349497","attributes":{"tools":[{"id":"p349511"},{"id":"p349512"},{"id":"p349513"},{"id":"p349521"},{"type":"object","name":"SaveTool","id":"p349522"},{"id":"p349563"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p349506","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p349507","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p349508"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p349509"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p349501","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p349502"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p349503"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p349504"}}}],"center":[{"type":"object","name":"Grid","id":"p349505","attributes":{"axis":{"id":"p349501"}}},{"type":"object","name":"Grid","id":"p349510","attributes":{"dimension":1,"axis":{"id":"p349506"}}},{"type":"object","name":"Legend","id":"p349541","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p349542","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p349538"}]}},{"type":"object","name":"LegendItem","id":"p349552","attributes":{"label":{"type":"value","value":"Median Year (1927)"},"renderers":[{"id":"p349549"}]}},{"type":"object","name":"LegendItem","id":"p349562","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p349559"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p349564","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"5fad46ce-8e51-4ae4-8e51-356d2a288535","roots":{"p349575":"b8ae0768-b8c2-463e-98c9-457b3d2517d8"},"root_ids":["p349575"]}];
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