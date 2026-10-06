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
    
    
    const element = document.getElementById("ac5d1bcd-1a57-43d8-9f20-1b2a1b9c4bae");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ac5d1bcd-1a57-43d8-9f20-1b2a1b9c4bae' but no matching script tag was found.")
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
                  const docs_json = '{"46f26b09-ff02-4bb2-afbc-d12e0f628ab9":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p537493","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p537494"}}},"roots":[{"type":"object","name":"Column","id":"p537657","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p537654","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p537653","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p537646","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p537517"},{"type":"object","name":"PanTool","id":"p537593"}]}},{"type":"object","name":"ToolProxy","id":"p537647","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p537518","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p537594","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p537648","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p537519","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p537520","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p537526","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p537525","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p537595","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p537596","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p537602","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p537601","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p537649","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p537527"},{"type":"object","name":"ResetTool","id":"p537603"}]}},{"type":"object","name":"SaveTool","id":"p537650"},{"type":"object","name":"ToolProxy","id":"p537651","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p537569","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p537652","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p537645","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p537495","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p537496"},"y_range":{"type":"object","name":"DataRange1d","id":"p537497"},"x_scale":{"type":"object","name":"LinearScale","id":"p537505"},"y_scale":{"type":"object","name":"LogScale","id":"p537506"},"title":{"type":"object","name":"Title","id":"p537498","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p537535","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p537529","attributes":{"selected":{"type":"object","name":"Selection","id":"p537530","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p537531"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGgQu3nOngFKH/mqcceq94z94gJbrop3J+3///9ff+jrCfu0tDS3IPUT9mvdH1px9B+z/6wRo7/v2xH7A181ZLZ2HrYXWueuOcXgsL2xsbGzq/shkHkJfLqH7E2MjYVbUg7a75BrDZY5d8C+5XWgRWXEAfvTZ87ciS/bb7+gwLYrU2Kf/b///+Mnvt1jXymybjnz8z321xYXyCYe3m1vANS/z2CnfUT/obenuXfYOz2sunJo3jZ7fWNj7b35W0Du+7/y4yaQfvF17htB9P6SyStIpnsPfY34zrjC3m+HnOucn0vttY2Nm9dtW2Sfbsul7my50P6TRoz5AbtZ9hytrwXXv55u/+L///v+vbSnF8u1ZstsnGZ/NXDHPv2vk+1DwO6ZaF8yc+bLNb967K/+/2/PsabHfqH7Qy9f3W77BV81aiZeaLPft7jAVDqlyf4X0J2+SQ32pg+rSlqn1EPV12DQZ86cuaJpVQRVX0A2fena4g18OzPtt4HjIQOD7pNr/b1MKRVqfgLV6I4zZ76cDY61Fwb7N4DqNADFA83nKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p537536","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p537537"}}},"glyph":{"type":"object","name":"Line","id":"p537532","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p537533","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p537534","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p537544","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p537538","attributes":{"selected":{"type":"object","name":"Selection","id":"p537539","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p537540"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGgQu3nOngFKH/mqcceq94z94gJbrop3J+3///9ff+jrCfu0tDS3IPUT9mvdH1px9B+z/6wRo7/v2xH7A181ZLZ2HrYXWueuOcXgsL2xsbGzq/shkHkJfLqH7E2MjYVbUg7a75BrDZY5d8C+5XWgRWXEAfvTZ87ciS/bb7+gwLYrU2Kf/b///+Mnvt1jXymybjnz8z321xYXyCYe3m1vANS/z2CnfUT/obenuXfYOz2sunJo3jZ7fWNj7b35W0Du+7/y4yaQfvF17htB9P6SyStIpnsPfY34zrjC3m+HnOucn0vttY2Nm9dtW2Sfbsul7my50P6TRoz5AbtZ9hytrwXXv55u/+L///v+vbSnF8u1ZstsnGZ/NXDHPv2vk+1DwO6ZaF8yc+bLNb967K/+/2/PsabHfqH7Qy9f3W77BV81aiZeaLPft7jAVDqlyf4X0J2+SQ32pg+rSlqn1EPV12DQZ86cuaJpVQRVX0A2fena4g18OzPtt4HjIQOD7pNr/b1MKRVqfgLV6I4zZ76cDY61Fwb7N4DqNADFA83nKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p537545","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p537546"}}},"glyph":{"type":"object","name":"Line","id":"p537541","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p537542","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p537543","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p537555","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p537549","attributes":{"selected":{"type":"object","name":"Selection","id":"p537550","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p537551"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SbURDURzGK6IXYqSU6H2mVEuvS7Vnq7Vabd27u1cSUWKMSEQfUkakTxElIjGiREQiImJEIqKUiERElIjonNNzv1z33P95Xn7nlP2+uu0/H/Yy9U7HwdzD2+h3Dv6/TZjsfC66mi3gejG+T25P32dK+b8c5yUv1iVbFefMyB15yig8tnC+Bsbm3U2ytY77GuCLx8SSlfsb8bEiHZqo04y1vfHq2mgL9VphuxzLm15vo247HkW6k1sb9TuwqAw76dMFc2005Ql108+OCaGW8oC+QNvRrjcec9DfgWyXxWladjJHD+5F2qPdHubpxb6Mk+plLhfmP3dKf19dzNcHPVGRv53lZk43KsWXy9LPvP34kuPuAeYewEXTlqjsYX4PNhTAQfYYgqRzkxxiHy+6JP4LL3v5IGCIHT72G8bUggSgsacG2f5wVWNfDaKclqjQ2VuHwnOos78OFdfpJwc/1DW49pOHAXm6l2MGuRgQYUQDg3wCOD7LrJ9aCJBTAErOFCSvIKR7/naQ3IJQ8a0h8gtBXZezEDmGoY5DC5NnGEJcFAyTawRiWBhGyDeCNPVE8QfevKmEyAIAAA=="},"shape":[89],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGgQu3nOnhFI5zw/bf/////6Q19PwGkGIGDSPm7/FyjumHDU/h9QQcPUwyC+vbHxYXugdAKf7iE4DTTngQrbQZD+/9cWHwCJA8EB+z///+8/UbYPpD9+4ts9cBqk//HS3SD+/pLJO0Dq5G+e227/G6iu/9BWsDkrP26C0xB1K6Dqiad/Ad1vy7Xc/gfYvEX2n4H2FWUstP/+///8mTNn2r/4//++f+90mtPvgOH2sGqK/VOw/RPtrwL5HGt64DTQefX75nfZXwSra7EHuvu+b1IDnIaor4GqR9AQdQVQdaTT28Dhn2GPi4aYnwA1n3JaGOyvAHtq0QADWMHqyAIAAA=="},"shape":[89],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p537556","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p537557"}}},"glyph":{"type":"object","name":"Line","id":"p537552","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p537553","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p537554","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p537565","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p537559","attributes":{"selected":{"type":"object","name":"Selection","id":"p537560","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p537561"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p537566","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p537567"}}},"glyph":{"type":"object","name":"Line","id":"p537562","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p537563","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p537564","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p537504","attributes":{"tools":[{"id":"p537517"},{"id":"p537518"},{"id":"p537519"},{"id":"p537527"},{"type":"object","name":"SaveTool","id":"p537528"},{"id":"p537569"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p537512","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p537513","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p537514"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p537515"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p537507","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p537508","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p537509"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p537510"}}}],"center":[{"type":"object","name":"Grid","id":"p537511","attributes":{"axis":{"id":"p537507"}}},{"type":"object","name":"Grid","id":"p537516","attributes":{"dimension":1,"axis":{"id":"p537512"}}},{"type":"object","name":"Legend","id":"p537547","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p537548","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p537544"}]}},{"type":"object","name":"LegendItem","id":"p537558","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p537555"}]}},{"type":"object","name":"LegendItem","id":"p537568","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p537565"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p537570","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p537580","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p537572"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p537581"},"y_scale":{"type":"object","name":"LinearScale","id":"p537582"},"title":{"type":"object","name":"Title","id":"p537573","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p537611","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p537605","attributes":{"selected":{"type":"object","name":"Selection","id":"p537606","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p537607"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiV6watWuooyF9ru/36tmEdltrzdJxXKtQKt942MLvn+s/fYw9ca3t/XW7kyC89HNAQCvgA7ZYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p537612","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p537613"}}},"glyph":{"type":"object","name":"Line","id":"p537608","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p537609","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p537610","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p537620","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p537614","attributes":{"selected":{"type":"object","name":"Selection","id":"p537615","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p537616"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiV6watWuooyF9ru/36tmEdltrzdJxXKtQKt942MLvn+s/fYw9ca3t/XW7kyC89HNAQCvgA7ZYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p537621","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p537622"}}},"glyph":{"type":"object","name":"Line","id":"p537617","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p537618","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p537619","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p537631","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p537625","attributes":{"selected":{"type":"object","name":"Selection","id":"p537626","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p537627"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiV6watWuooyF9ru/36tmEdltrzdJxXKtQKt942MLvn+s/fYw9ca3t/XW7kyC89HNAQCvgA7ZYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p537632","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p537633"}}},"glyph":{"type":"object","name":"Line","id":"p537628","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p537629","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p537630","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p537641","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p537635","attributes":{"selected":{"type":"object","name":"Selection","id":"p537636","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p537637"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p537642","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p537643"}}},"glyph":{"type":"object","name":"Line","id":"p537638","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p537639","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p537640","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p537579","attributes":{"tools":[{"id":"p537593"},{"id":"p537594"},{"id":"p537595"},{"id":"p537603"},{"type":"object","name":"SaveTool","id":"p537604"},{"id":"p537645"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p537588","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p537589","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p537590"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p537591"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p537583","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p537584"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p537585"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p537586"}}}],"center":[{"type":"object","name":"Grid","id":"p537587","attributes":{"axis":{"id":"p537583"}}},{"type":"object","name":"Grid","id":"p537592","attributes":{"dimension":1,"axis":{"id":"p537588"}}},{"type":"object","name":"Legend","id":"p537623","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p537624","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p537620"}]}},{"type":"object","name":"LegendItem","id":"p537634","attributes":{"label":{"type":"value","value":"Median Year (1912)"},"renderers":[{"id":"p537631"}]}},{"type":"object","name":"LegendItem","id":"p537644","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p537641"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p537656","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"46f26b09-ff02-4bb2-afbc-d12e0f628ab9","roots":{"p537657":"ac5d1bcd-1a57-43d8-9f20-1b2a1b9c4bae"},"root_ids":["p537657"]}];
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