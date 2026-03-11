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
    
    
    const element = document.getElementById("e0fe85c1-0d1f-4732-bd47-5ea4c5932fab");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e0fe85c1-0d1f-4732-bd47-5ea4c5932fab' but no matching script tag was found.")
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
                  const docs_json = '{"044d1576-72c3-40cf-9f56-8ca9ea1a5044":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p944653","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p944654"}}},"roots":[{"type":"object","name":"Column","id":"p944817","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p944814","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p944813","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p944806","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p944677"},{"type":"object","name":"PanTool","id":"p944753"}]}},{"type":"object","name":"ToolProxy","id":"p944807","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p944678","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p944754","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p944808","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p944679","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p944680","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p944686","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p944685","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p944755","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p944756","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p944762","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p944761","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p944809","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p944687"},{"type":"object","name":"ResetTool","id":"p944763"}]}},{"type":"object","name":"SaveTool","id":"p944810"},{"type":"object","name":"ToolProxy","id":"p944811","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p944729","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p944812","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p944805","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p944655","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p944656"},"y_range":{"type":"object","name":"DataRange1d","id":"p944657"},"x_scale":{"type":"object","name":"LinearScale","id":"p944665"},"y_scale":{"type":"object","name":"LogScale","id":"p944666"},"title":{"type":"object","name":"Title","id":"p944658","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p944695","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p944689","attributes":{"selected":{"type":"object","name":"Selection","id":"p944690","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p944691"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGiw7VJwWFJgu8o4ScFBZJ2749pMORAteOGIrAMDGMg6zJw586YKm7QD1/XFE06GiDt804jRz/kh5hDTf8iUY42Ig1zra8P/C4Wh6oQc/v//v591koBDgS1XuN5/dpA5DbZcrGBaZN1/+7NnzvzRav9nf/rMGZ4LLn/sgeIOD6t+wGmgOSc7Ln2zh9j/BU5zXl+8QOPCR/tXgTv4MpTegcQbHBNegugJEiwv7IHuE6jgfgJWv0bmEZxmBJq75cQ9OA10n72x8W379e4Pf52ZdAPEv+/fe93e/WHVl63p14Byxp9Pv7sINv914AWCdA7Qnyf7ztr/AxoUyoeggfIJAhEn7Y+eObPm/NVj9jvlWr1/eh4Fiz+9cMh+pfvDWeVzDoHU23c6HoD684D9H2D4nSjbZ29kbBzcf383WP3jpQgaqH5/yeQdOOnf///H9x/aCqenzZyZ6Td9K8if/1d+3IRCX1u8AU7//f9/vpT+WrLpL0BzVsusIprunDlT8kvOMvuv///LszUuJZnmWufeWOy2xP4H2D+LMOhfwPAo2zcfg2YDppfSwtn234HuBqY1gjQAUOGENigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p944696","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p944697"}}},"glyph":{"type":"object","name":"Line","id":"p944692","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p944693","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p944694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p944704","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p944698","attributes":{"selected":{"type":"object","name":"Selection","id":"p944699","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p944700"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGiw7VJwWFJgu8o4ScFBZJ2749pMORAteOGIrAMDGMg6zJw586YKm7QD1/XFE06GiDt804jRz/kh5hDTf8iUY42Ig1zra8P/C4Wh6oQc/v//v591koBDgS1XuN5/dpA5DbZcrGBaZN1/+7NnzvzRav9nf/rMGZ4LLn/sgeIOD6t+wGmgOSc7Ln2zh9j/BU5zXl+8QOPCR/tXgTv4MpTegcQbHBNegugJEiwv7IHuE6jgfgJWv0bmEZxmBJq75cQ9OA10n72x8W379e4Pf52ZdAPEv+/fe93e/WHVl63p14Byxp9Pv7sINv914AWCdA7Qnyf7ztr/AxoUyoeggfIJAhEn7Y+eObPm/NVj9jvlWr1/eh4Fiz+9cMh+pfvDWeVzDoHU23c6HoD684D9H2D4nSjbZ29kbBzcf383WP3jpQgaqH5/yeQdOOnf///H9x/aCqenzZyZ6Td9K8if/1d+3IRCX1u8AU7//f9/vpT+WrLpL0BzVsusIprunDlT8kvOMvuv///LszUuJZnmWufeWOy2xP4H2D+LMOhfwPAo2zcfg2YDppfSwtn234HuBqY1gjQAUOGENigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p944705","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p944706"}}},"glyph":{"type":"object","name":"Line","id":"p944701","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p944702","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p944703","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p944715","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p944709","attributes":{"selected":{"type":"object","name":"Selection","id":"p944710","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p944711"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y1Sa0hTYRg2JIwEu7EYZGVoGuu6nGluuWcXN7c5d852tjMRLIKKwEKoGFgEBUGB0A+hQPJH5Q+pYNQPK0EqiArsApWBYFBUFAZCxaKioPN+5zl/Dt/3ve/zPpe32Ds5UJr75C+qf8lfXlFV3dJfBvu8ED3jfTO39lXCvl8K6zB1YfMKvjtwZrHDZYw5WbcK7r0Pzy6rXcP6GszP3j3y+fk69tVCXiODdexfj2HPwZejsQbibED/u/unyitcxNuIyKDTgtxE3C2wQK2KrcTfht/fPjw+v9bNOW58tE7+k9s5rxEvRryF+dlGzvVgwqoa8TZxfhNGY0P1yeEd5NEM6f77q5l8WnC8NDd93dxJXq3Yb6H2jLeSnxf65aBV6iNPH3wFYbKLfNvQkBTkNvL245zQcIL8AWuYpQDUEcBRoVcIUE8AwmqoPkhdQewW2tNB6gvBGNMsBiHqDCEucjxh6g3DrwaEqbsdTQqwnfrb4VIAEfoQQY1qiNCPKByqIEpfoqhUFx30pwNl6ovRpxh+yq8Yo19xfJVjb5y+xfFerqsS9C+BN/I8maCPnXgqZX2d9LMTD6S8Oklfk7gtbVNJ+tuFG9I+0EWfu3BFYFwp+p3CRYGbSdF3zcYNa/Rfs/EvacxBs+f80JiHDpumzlx0e+5Vnfno9vw/OnNK2zzSaeaVhpJ1Lc3c0javBRnml7H5dWeYYwbLhebNDPPMQNmwyGCuBhTtPQbzNXBahNwxmLOBfyJjSZZ5Z6FsO5Bl7ll8F1n3ssw/i0NCZGWOe5DDF5F5OMd9yEHZ/CjHvcjhrchebXI/TOQF6JjJPTHxShqfmdwXEyqWujz3Jo8n8nAiz/3JQ8X1Os896sZ/a3pSPZAEAAA="},"shape":[146],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGiw7VJwYGBgcDA2BtMLCmzlkGkgkEWmG14HykD5EiA6YYecODL9YHGBGNg8ruvCyDSDZowQiD5w5owgWH3/IQEHRrC93GBzbblYUWiRdf/tkeiEtLR/yLTDw6of+Gig+7/ZQ9z5BRv9oErkkz3Q/gWu296D+Ac+/30Dts8x4SUyveD98mdg+bnvH4P1r5F5hEGD/LHlxD0M+v////bGxreR6fv+vdcxaEh4XAXx/6+WuWQPCecLZNP/gOaE8p3FSYPsE4g4CaeB4vH9h47CaZD40wuHMGigvH2n4wE4DQnPA/Z//v/ff6JsH5wGqX+8dDdOGqh/f8nkHUTTv8Hu2oqTBoXbyo+bsNLXFm/AoP/+/z9fSn8tzegv4HhcRTH99f9/ebbGpTSjf4DDaRFB+hcwHsr2zSdIfwf6f+bMmWTTAGjm3yqQBAAA"},"shape":[146],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p944716","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p944717"}}},"glyph":{"type":"object","name":"Line","id":"p944712","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p944713","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p944714","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p944725","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p944719","attributes":{"selected":{"type":"object","name":"Selection","id":"p944720","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p944721"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p944726","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p944727"}}},"glyph":{"type":"object","name":"Line","id":"p944722","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p944723","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p944724","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p944664","attributes":{"tools":[{"id":"p944677"},{"id":"p944678"},{"id":"p944679"},{"id":"p944687"},{"type":"object","name":"SaveTool","id":"p944688"},{"id":"p944729"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p944672","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p944673","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p944674"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p944675"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p944667","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p944668","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p944669"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p944670"}}}],"center":[{"type":"object","name":"Grid","id":"p944671","attributes":{"axis":{"id":"p944667"}}},{"type":"object","name":"Grid","id":"p944676","attributes":{"dimension":1,"axis":{"id":"p944672"}}},{"type":"object","name":"Legend","id":"p944707","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p944708","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p944704"}]}},{"type":"object","name":"LegendItem","id":"p944718","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p944715"}]}},{"type":"object","name":"LegendItem","id":"p944728","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p944725"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p944730","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p944740","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p944732"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p944741"},"y_scale":{"type":"object","name":"LinearScale","id":"p944742"},"title":{"type":"object","name":"Title","id":"p944733","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p944771","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p944765","attributes":{"selected":{"type":"object","name":"Selection","id":"p944766","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p944767"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46NWrVv09WiTs0NnRceNK8Av7KUFenn5Tj9hPKz53c+GutfZ+oaGhZm2L7XHpBwD75Rx9YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p944772","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p944773"}}},"glyph":{"type":"object","name":"Line","id":"p944768","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p944769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p944770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p944780","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p944774","attributes":{"selected":{"type":"object","name":"Selection","id":"p944775","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p944776"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46NWrVv09WiTs0NnRceNK8Av7KUFenn5Tj9hPKz53c+GutfZ+oaGhZm2L7XHpBwD75Rx9YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p944781","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p944782"}}},"glyph":{"type":"object","name":"Line","id":"p944777","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p944778","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p944779","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p944791","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p944785","attributes":{"selected":{"type":"object","name":"Selection","id":"p944786","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p944787"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46NWrVv09WiTs0NnRceNK8Av7KUFenn5Tj9hPKz53c+GutfZ+oaGhZm2L7XHpBwD75Rx9YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p944792","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p944793"}}},"glyph":{"type":"object","name":"Line","id":"p944788","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p944789","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p944790","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p944801","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p944795","attributes":{"selected":{"type":"object","name":"Selection","id":"p944796","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p944797"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p944802","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p944803"}}},"glyph":{"type":"object","name":"Line","id":"p944798","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p944799","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p944800","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p944739","attributes":{"tools":[{"id":"p944753"},{"id":"p944754"},{"id":"p944755"},{"id":"p944763"},{"type":"object","name":"SaveTool","id":"p944764"},{"id":"p944805"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p944748","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p944749","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p944750"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p944751"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p944743","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p944744"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p944745"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p944746"}}}],"center":[{"type":"object","name":"Grid","id":"p944747","attributes":{"axis":{"id":"p944743"}}},{"type":"object","name":"Grid","id":"p944752","attributes":{"dimension":1,"axis":{"id":"p944748"}}},{"type":"object","name":"Legend","id":"p944783","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p944784","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p944780"}]}},{"type":"object","name":"LegendItem","id":"p944794","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p944791"}]}},{"type":"object","name":"LegendItem","id":"p944804","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p944801"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p944816","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"044d1576-72c3-40cf-9f56-8ca9ea1a5044","roots":{"p944817":"e0fe85c1-0d1f-4732-bd47-5ea4c5932fab"},"root_ids":["p944817"]}];
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