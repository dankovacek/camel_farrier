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
    
    
    const element = document.getElementById("ead504af-3a10-48e4-81fa-a52576466062");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ead504af-3a10-48e4-81fa-a52576466062' but no matching script tag was found.")
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
                  const docs_json = '{"ccdd223d-2eba-4c94-be49-b0b72caad85e":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p341203","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p341204"}}},"roots":[{"type":"object","name":"Column","id":"p341367","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p341364","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p341363","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p341356","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p341227"},{"type":"object","name":"PanTool","id":"p341303"}]}},{"type":"object","name":"ToolProxy","id":"p341357","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p341228","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p341304","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p341358","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p341229","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p341230","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p341236","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p341235","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p341305","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p341306","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p341312","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p341311","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p341359","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p341237"},{"type":"object","name":"ResetTool","id":"p341313"}]}},{"type":"object","name":"SaveTool","id":"p341360"},{"type":"object","name":"ToolProxy","id":"p341361","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p341279","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p341362","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p341355","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p341205","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p341206"},"y_range":{"type":"object","name":"DataRange1d","id":"p341207"},"x_scale":{"type":"object","name":"LinearScale","id":"p341215"},"y_scale":{"type":"object","name":"LogScale","id":"p341216"},"title":{"type":"object","name":"Title","id":"p341208","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p341245","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p341239","attributes":{"selected":{"type":"object","name":"Selection","id":"p341240","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341241"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGgQu3nOngFKH/mqcceq94z94gJbrop3J+3///9ff+jrCfu0tDS3IPUT9mvdH1px9B+z/6wRo7/v2xH7A181ZLZ2HrYXWueuOcXgsL2xsbGzq/shkHkJfLqH7E2MjYVbUg7a75BrDZY5d8C+5XWgRWXEAfvTZ87ciS/bb7+gwLYrU2Kf/b///+Mnvt1jXymybjnz8z321xYXyCYe3m1vANS/z2CnfUT/obenuXfYOz2sunJo3jZ7fWNj7b35W0Du+7/y4yaQfvF17htB9P6SyStIpnsPfY34zrjC3m+HnOucn0vttY2Nm9dtW2Sfbsul7my50P6TRoz5AbtZ9hytrwXXv55u/+L///v+vbSnF8u1ZstsnGZ/NXDHPv2vk+1DwO6ZaF8yc+bLNb967K/+/2/PsabHfqH7Qy9f3W77BV81aiZeaLPft7jAVDqlyf4X0J2+SQ32pg+rSlqn1EPV12DQZ86cuaJpVQRVX0A2fena4g18OzPtt4HjIQOD7pNr/b1MKRVqfgLV6I4zZ76cDY61Fwb7N4DqNADFA83nKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p341246","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341247"}}},"glyph":{"type":"object","name":"Line","id":"p341242","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p341243","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p341244","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p341254","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p341248","attributes":{"selected":{"type":"object","name":"Selection","id":"p341249","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341250"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGgQu3nOngFKH/mqcceq94z94gJbrop3J+3///9ff+jrCfu0tDS3IPUT9mvdH1px9B+z/6wRo7/v2xH7A181ZLZ2HrYXWueuOcXgsL2xsbGzq/shkHkJfLqH7E2MjYVbUg7a75BrDZY5d8C+5XWgRWXEAfvTZ87ciS/bb7+gwLYrU2Kf/b///+Mnvt1jXymybjnz8z321xYXyCYe3m1vANS/z2CnfUT/obenuXfYOz2sunJo3jZ7fWNj7b35W0Du+7/y4yaQfvF17htB9P6SyStIpnsPfY34zrjC3m+HnOucn0vttY2Nm9dtW2Sfbsul7my50P6TRoz5AbtZ9hytrwXXv55u/+L///v+vbSnF8u1ZstsnGZ/NXDHPv2vk+1DwO6ZaF8yc+bLNb967K/+/2/PsabHfqH7Qy9f3W77BV81aiZeaLPft7jAVDqlyf4X0J2+SQ32pg+rSlqn1EPV12DQZ86cuaJpVQRVX0A2fena4g18OzPtt4HjIQOD7pNr/b1MKRVqfgLV6I4zZ76cDY61Fwb7N4DqNADFA83nKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p341255","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341256"}}},"glyph":{"type":"object","name":"Line","id":"p341251","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p341252","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p341253","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p341265","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p341259","attributes":{"selected":{"type":"object","name":"Selection","id":"p341260","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341261"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SbURDURzGK6IXYqSU6H2mVEuvS7Vnq7Vabd27u1cSUWKMSEQfUkakTxElIjGiREQiImJEIqKUiERElIjonNNzv1z33P95Xn7nlP2+uu0/H/Yy9U7HwdzD2+h3Dv6/TZjsfC66mi3gejG+T25P32dK+b8c5yUv1iVbFefMyB15yig8tnC+Bsbm3U2ytY77GuCLx8SSlfsb8bEiHZqo04y1vfHq2mgL9VphuxzLm15vo247HkW6k1sb9TuwqAw76dMFc2005Ql108+OCaGW8oC+QNvRrjcec9DfgWyXxWladjJHD+5F2qPdHubpxb6Mk+plLhfmP3dKf19dzNcHPVGRv53lZk43KsWXy9LPvP34kuPuAeYewEXTlqjsYX4PNhTAQfYYgqRzkxxiHy+6JP4LL3v5IGCIHT72G8bUggSgsacG2f5wVWNfDaKclqjQ2VuHwnOos78OFdfpJwc/1DW49pOHAXm6l2MGuRgQYUQDg3wCOD7LrJ9aCJBTAErOFCSvIKR7/naQ3IJQ8a0h8gtBXZezEDmGoY5DC5NnGEJcFAyTawRiWBhGyDeCNPVE8QfevKmEyAIAAA=="},"shape":[89],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGgQu3nOnhFI5zw/bf/////6Q19PwGkGIGDSPm7/FyjumHDU/h9QQcPUwyC+vbHxYXugdAKf7iE4DTTngQrbQZD+/9cWHwCJA8EB+z///+8/UbYPpD9+4ts9cBqk//HS3SD+/pLJO0Dq5G+e227/G6iu/9BWsDkrP26C0xB1K6Dqiad/Ad1vy7Xc/gfYvEX2n4H2FWUstP/+///8mTNn2r/4//++f+90mtPvgOH2sGqK/VOw/RPtrwL5HGt64DTQefX75nfZXwSra7EHuvu+b1IDnIaor4GqR9AQdQVQdaTT28Dhn2GPi4aYnwA1n3JaGOyvAHtq0QADWMHqyAIAAA=="},"shape":[89],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p341266","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341267"}}},"glyph":{"type":"object","name":"Line","id":"p341262","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p341263","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p341264","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p341275","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p341269","attributes":{"selected":{"type":"object","name":"Selection","id":"p341270","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341271"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p341276","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341277"}}},"glyph":{"type":"object","name":"Line","id":"p341272","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p341273","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p341274","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p341214","attributes":{"tools":[{"id":"p341227"},{"id":"p341228"},{"id":"p341229"},{"id":"p341237"},{"type":"object","name":"SaveTool","id":"p341238"},{"id":"p341279"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p341222","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p341223","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p341224"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p341225"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p341217","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p341218","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p341219"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p341220"}}}],"center":[{"type":"object","name":"Grid","id":"p341221","attributes":{"axis":{"id":"p341217"}}},{"type":"object","name":"Grid","id":"p341226","attributes":{"dimension":1,"axis":{"id":"p341222"}}},{"type":"object","name":"Legend","id":"p341257","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p341258","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p341254"}]}},{"type":"object","name":"LegendItem","id":"p341268","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p341265"}]}},{"type":"object","name":"LegendItem","id":"p341278","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p341275"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p341280","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p341290","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p341282"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p341291"},"y_scale":{"type":"object","name":"LinearScale","id":"p341292"},"title":{"type":"object","name":"Title","id":"p341283","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p341321","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p341315","attributes":{"selected":{"type":"object","name":"Selection","id":"p341316","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341317"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiV6watWuooyF9ru/36tmEdltrzdJxXKtQKt942MLvn+s/fYw9ca3t/XW7kyC89HNAQCvgA7ZYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p341322","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341323"}}},"glyph":{"type":"object","name":"Line","id":"p341318","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p341319","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p341320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p341330","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p341324","attributes":{"selected":{"type":"object","name":"Selection","id":"p341325","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341326"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiV6watWuooyF9ru/36tmEdltrzdJxXKtQKt942MLvn+s/fYw9ca3t/XW7kyC89HNAQCvgA7ZYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p341331","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341332"}}},"glyph":{"type":"object","name":"Line","id":"p341327","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p341328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p341329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p341341","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p341335","attributes":{"selected":{"type":"object","name":"Selection","id":"p341336","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341337"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiV6watWuooyF9ru/36tmEdltrzdJxXKtQKt942MLvn+s/fYw9ca3t/XW7kyC89HNAQCvgA7ZYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p341342","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341343"}}},"glyph":{"type":"object","name":"Line","id":"p341338","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p341339","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p341340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p341351","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p341345","attributes":{"selected":{"type":"object","name":"Selection","id":"p341346","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p341347"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p341352","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p341353"}}},"glyph":{"type":"object","name":"Line","id":"p341348","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p341349","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p341350","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p341289","attributes":{"tools":[{"id":"p341303"},{"id":"p341304"},{"id":"p341305"},{"id":"p341313"},{"type":"object","name":"SaveTool","id":"p341314"},{"id":"p341355"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p341298","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p341299","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p341300"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p341301"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p341293","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p341294"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p341295"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p341296"}}}],"center":[{"type":"object","name":"Grid","id":"p341297","attributes":{"axis":{"id":"p341293"}}},{"type":"object","name":"Grid","id":"p341302","attributes":{"dimension":1,"axis":{"id":"p341298"}}},{"type":"object","name":"Legend","id":"p341333","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p341334","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p341330"}]}},{"type":"object","name":"LegendItem","id":"p341344","attributes":{"label":{"type":"value","value":"Median Year (1912)"},"renderers":[{"id":"p341341"}]}},{"type":"object","name":"LegendItem","id":"p341354","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p341351"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p341366","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"ccdd223d-2eba-4c94-be49-b0b72caad85e","roots":{"p341367":"ead504af-3a10-48e4-81fa-a52576466062"},"root_ids":["p341367"]}];
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