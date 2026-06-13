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
    
    
    const element = document.getElementById("c8def07c-0b70-424c-aa0a-4fb0ea33a5b9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c8def07c-0b70-424c-aa0a-4fb0ea33a5b9' but no matching script tag was found.")
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
                  const docs_json = '{"93be8199-f567-42ab-895f-7d4d977c9e63":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p340605","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p340606"}}},"roots":[{"type":"object","name":"Column","id":"p340769","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p340766","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p340765","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p340758","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p340629"},{"type":"object","name":"PanTool","id":"p340705"}]}},{"type":"object","name":"ToolProxy","id":"p340759","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p340630","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p340706","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p340760","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p340631","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p340632","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p340638","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p340637","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p340707","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p340708","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p340714","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p340713","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p340761","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p340639"},{"type":"object","name":"ResetTool","id":"p340715"}]}},{"type":"object","name":"SaveTool","id":"p340762"},{"type":"object","name":"ToolProxy","id":"p340763","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p340681","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p340764","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p340757","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p340607","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p340608"},"y_range":{"type":"object","name":"DataRange1d","id":"p340609"},"x_scale":{"type":"object","name":"LinearScale","id":"p340617"},"y_scale":{"type":"object","name":"LogScale","id":"p340618"},"title":{"type":"object","name":"Title","id":"p340610","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p340647","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p340641","attributes":{"selected":{"type":"object","name":"Selection","id":"p340642","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p340643"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGgQu3nOngFKH/mqcceq94z94gJbrop3J+3///9ff+jrCfu0tDS3IPUT9mvdH1px9B+z/6wRo7/v2xH7A181ZLZ2HrYXWueuOcXgsL2xsbGzq/shkHkJfLqH7E2MjYVbUg7a75BrDZY5d8C+5XWgRWXEAfvTZ87ciS/bb7+gwLYrU2Kf/b///+Mnvt1jXymybjnz8z321xYXyCYe3m1vANS/z2CnfUT/obenuXfYOz2sunJo3jZ7fWNj7b35W0Du+7/y4yaQfvF17htB9P6SyStIpnsPfY34zrjC3m+HnOucn0vttY2Nm9dtW2Sfbsul7my50P6TRoz5AbtZ9hytrwXXv55u/+L///v+vbSnF8u1ZstsnGZ/NXDHPv2vk+1DwO6ZaF8yc+bLNb967K/+/2/PsabHfqH7Qy9f3W77BV81aiZeaLPft7jAVDqlyf4X0J2+SQ32pg+rSlqn1EPV12DQZ86cuaJpVQRVX0A2fena4g18OzPtt4HjIQOD7pNr/b1MKRVqfgLV6I4zZ76cDY61Fwb7N4DqNADFA83nKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p340648","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p340649"}}},"glyph":{"type":"object","name":"Line","id":"p340644","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p340645","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p340646","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p340656","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p340650","attributes":{"selected":{"type":"object","name":"Selection","id":"p340651","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p340652"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGgQu3nOngFKH/mqcceq94z94gJbrop3J+3///9ff+jrCfu0tDS3IPUT9mvdH1px9B+z/6wRo7/v2xH7A181ZLZ2HrYXWueuOcXgsL2xsbGzq/shkHkJfLqH7E2MjYVbUg7a75BrDZY5d8C+5XWgRWXEAfvTZ87ciS/bb7+gwLYrU2Kf/b///+Mnvt1jXymybjnz8z321xYXyCYe3m1vANS/z2CnfUT/obenuXfYOz2sunJo3jZ7fWNj7b35W0Du+7/y4yaQfvF17htB9P6SyStIpnsPfY34zrjC3m+HnOucn0vttY2Nm9dtW2Sfbsul7my50P6TRoz5AbtZ9hytrwXXv55u/+L///v+vbSnF8u1ZstsnGZ/NXDHPv2vk+1DwO6ZaF8yc+bLNb967K/+/2/PsabHfqH7Qy9f3W77BV81aiZeaLPft7jAVDqlyf4X0J2+SQ32pg+rSlqn1EPV12DQZ86cuaJpVQRVX0A2fena4g18OzPtt4HjIQOD7pNr/b1MKRVqfgLV6I4zZ76cDY61Fwb7N4DqNADFA83nKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p340657","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p340658"}}},"glyph":{"type":"object","name":"Line","id":"p340653","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p340654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p340655","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p340667","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p340661","attributes":{"selected":{"type":"object","name":"Selection","id":"p340662","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p340663"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SbURDURzGK6IXYqSU6H2mVEuvS7Vnq7Vabd27u1cSUWKMSEQfUkakTxElIjGiREQiImJEIqKUiERElIjonNNzv1z33P95Xn7nlP2+uu0/H/Yy9U7HwdzD2+h3Dv6/TZjsfC66mi3gejG+T25P32dK+b8c5yUv1iVbFefMyB15yig8tnC+Bsbm3U2ytY77GuCLx8SSlfsb8bEiHZqo04y1vfHq2mgL9VphuxzLm15vo247HkW6k1sb9TuwqAw76dMFc2005Ql108+OCaGW8oC+QNvRrjcec9DfgWyXxWladjJHD+5F2qPdHubpxb6Mk+plLhfmP3dKf19dzNcHPVGRv53lZk43KsWXy9LPvP34kuPuAeYewEXTlqjsYX4PNhTAQfYYgqRzkxxiHy+6JP4LL3v5IGCIHT72G8bUggSgsacG2f5wVWNfDaKclqjQ2VuHwnOos78OFdfpJwc/1DW49pOHAXm6l2MGuRgQYUQDg3wCOD7LrJ9aCJBTAErOFCSvIKR7/naQ3IJQ8a0h8gtBXZezEDmGoY5DC5NnGEJcFAyTawRiWBhGyDeCNPVE8QfevKmEyAIAAA=="},"shape":[89],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYGgQu3nOnhFI5zw/bf/////6Q19PwGkGIGDSPm7/FyjumHDU/h9QQcPUwyC+vbHxYXugdAKf7iE4DTTngQrbQZD+/9cWHwCJA8EB+z///+8/UbYPpD9+4ts9cBqk//HS3SD+/pLJO0Dq5G+e227/G6iu/9BWsDkrP26C0xB1K6Dqiad/Ad1vy7Xc/gfYvEX2n4H2FWUstP/+///8mTNn2r/4//++f+90mtPvgOH2sGqK/VOw/RPtrwL5HGt64DTQefX75nfZXwSra7EHuvu+b1IDnIaor4GqR9AQdQVQdaTT28Dhn2GPi4aYnwA1n3JaGOyvAHtq0QADWMHqyAIAAA=="},"shape":[89],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p340668","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p340669"}}},"glyph":{"type":"object","name":"Line","id":"p340664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p340665","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p340666","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p340677","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p340671","attributes":{"selected":{"type":"object","name":"Selection","id":"p340672","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p340673"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p340678","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p340679"}}},"glyph":{"type":"object","name":"Line","id":"p340674","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p340675","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p340676","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p340616","attributes":{"tools":[{"id":"p340629"},{"id":"p340630"},{"id":"p340631"},{"id":"p340639"},{"type":"object","name":"SaveTool","id":"p340640"},{"id":"p340681"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p340624","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p340625","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p340626"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p340627"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p340619","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p340620","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p340621"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p340622"}}}],"center":[{"type":"object","name":"Grid","id":"p340623","attributes":{"axis":{"id":"p340619"}}},{"type":"object","name":"Grid","id":"p340628","attributes":{"dimension":1,"axis":{"id":"p340624"}}},{"type":"object","name":"Legend","id":"p340659","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p340660","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p340656"}]}},{"type":"object","name":"LegendItem","id":"p340670","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p340667"}]}},{"type":"object","name":"LegendItem","id":"p340680","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p340677"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p340682","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p340692","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p340684"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p340693"},"y_scale":{"type":"object","name":"LinearScale","id":"p340694"},"title":{"type":"object","name":"Title","id":"p340685","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p340723","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p340717","attributes":{"selected":{"type":"object","name":"Selection","id":"p340718","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p340719"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiV6watWuooyF9ru/36tmEdltrzdJxXKtQKt942MLvn+s/fYw9ca3t/XW7kyC89HNAQCvgA7ZYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p340724","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p340725"}}},"glyph":{"type":"object","name":"Line","id":"p340720","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p340721","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p340722","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p340732","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p340726","attributes":{"selected":{"type":"object","name":"Selection","id":"p340727","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p340728"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiV6watWuooyF9ru/36tmEdltrzdJxXKtQKt942MLvn+s/fYw9ca3t/XW7kyC89HNAQCvgA7ZYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p340733","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p340734"}}},"glyph":{"type":"object","name":"Line","id":"p340729","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p340730","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p340731","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p340743","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p340737","attributes":{"selected":{"type":"object","name":"Selection","id":"p340738","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p340739"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKiV6watWuooyF9ru/36tmEdltrzdJxXKtQKt942MLvn+s/fYw9ca3t/XW7kyC89HNAQCvgA7ZYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p340744","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p340745"}}},"glyph":{"type":"object","name":"Line","id":"p340740","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p340741","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p340742","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p340753","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p340747","attributes":{"selected":{"type":"object","name":"Selection","id":"p340748","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p340749"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p340754","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p340755"}}},"glyph":{"type":"object","name":"Line","id":"p340750","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p340751","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p340752","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p340691","attributes":{"tools":[{"id":"p340705"},{"id":"p340706"},{"id":"p340707"},{"id":"p340715"},{"type":"object","name":"SaveTool","id":"p340716"},{"id":"p340757"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p340700","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p340701","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p340702"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p340703"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p340695","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p340696"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p340697"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p340698"}}}],"center":[{"type":"object","name":"Grid","id":"p340699","attributes":{"axis":{"id":"p340695"}}},{"type":"object","name":"Grid","id":"p340704","attributes":{"dimension":1,"axis":{"id":"p340700"}}},{"type":"object","name":"Legend","id":"p340735","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p340736","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p340732"}]}},{"type":"object","name":"LegendItem","id":"p340746","attributes":{"label":{"type":"value","value":"Median Year (1912)"},"renderers":[{"id":"p340743"}]}},{"type":"object","name":"LegendItem","id":"p340756","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p340753"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p340768","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"93be8199-f567-42ab-895f-7d4d977c9e63","roots":{"p340769":"c8def07c-0b70-424c-aa0a-4fb0ea33a5b9"},"root_ids":["p340769"]}];
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