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
    
    
    const element = document.getElementById("c714ea9a-6615-48ce-83bd-9e29a6780df1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c714ea9a-6615-48ce-83bd-9e29a6780df1' but no matching script tag was found.")
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
                  const docs_json = '{"51c833cc-1da6-4134-9cfd-4e48b53e73e5":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p27264","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p27265"}}},"roots":[{"type":"object","name":"Column","id":"p27428","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p27426","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p27425","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p27418","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p27288"},{"type":"object","name":"PanTool","id":"p27364"}]}},{"type":"object","name":"ToolProxy","id":"p27419","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p27289","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p27365","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p27420","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p27290","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p27291","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p27297","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p27296","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p27366","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p27367","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p27373","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p27372","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p27421","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p27298"},{"type":"object","name":"ResetTool","id":"p27374"}]}},{"type":"object","name":"SaveTool","id":"p27422"},{"type":"object","name":"ToolProxy","id":"p27423","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p27340","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p27424","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p27416","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p27266","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p27267"},"y_range":{"type":"object","name":"DataRange1d","id":"p27268"},"x_scale":{"type":"object","name":"LinearScale","id":"p27276"},"y_scale":{"type":"object","name":"LogScale","id":"p27277"},"title":{"type":"object","name":"Title","id":"p27269","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p27306","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p27300","attributes":{"selected":{"type":"object","name":"Selection","id":"p27301","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p27302"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFgwc6aag+g695f+Z1UdjIHgSpSSg0Lra8stHrIOra8Dd6SsEncwMTZe7Gom6sDAwODwsEoYTn/ViOGXPSkE4i8osEWhgUAQmW54HSgAsufgrS5+EP+AXCu/g/vDKpEqMzC/4dBXHoegHXJPNwTwOCi2vt74K4bNwdTYuDgtjQnkLu7tFxkcQnbIHW1b/tMepN6W67O9kbHx54Jn70H8A5//vrHfKte6+tWEp/ZnzpwRKE9/ABJP6D90FYNOTEtrcl5xwf4/EKyWOUWQBvpT/RfXKbB+gYiTVKOfVon4MfQcB/EXyEQdoRq9Sa71sG/9IXtgvG2u/nQA7I9rizFpa67rix2d99sbGBuf3vN4j/30mTM5N13fbb9OrvX314s77bfJtXpnz9puD4y8CZ5u2+y1gPGxKmGLfWT/IddbFpvszywuuGu/ZL19f4FtUqL/avvngTvq3KYsA5kfz6e7yP7UmTM8szhm27/6/396megk+wdACa32Npw0FwPDBvvfjfa//v+/75vUQDK97f///SWTK6hOAwCFnOsfKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p27307","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27308"}}},"glyph":{"type":"object","name":"Line","id":"p27303","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p27304","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p27305","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p27315","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p27309","attributes":{"selected":{"type":"object","name":"Selection","id":"p27310","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p27311"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFgwc6aag+g695f+Z1UdjIHgSpSSg0Lra8stHrIOra8Dd6SsEncwMTZe7Gom6sDAwODwsEoYTn/ViOGXPSkE4i8osEWhgUAQmW54HSgAsufgrS5+EP+AXCu/g/vDKpEqMzC/4dBXHoegHXJPNwTwOCi2vt74K4bNwdTYuDgtjQnkLu7tFxkcQnbIHW1b/tMepN6W67O9kbHx54Jn70H8A5//vrHfKte6+tWEp/ZnzpwRKE9/ABJP6D90FYNOTEtrcl5xwf4/EKyWOUWQBvpT/RfXKbB+gYiTVKOfVon4MfQcB/EXyEQdoRq9Sa71sG/9IXtgvG2u/nQA7I9rizFpa67rix2d99sbGBuf3vN4j/30mTM5N13fbb9OrvX314s77bfJtXpnz9puD4y8CZ5u2+y1gPGxKmGLfWT/IddbFpvszywuuGu/ZL19f4FtUqL/avvngTvq3KYsA5kfz6e7yP7UmTM8szhm27/6/396megk+wdACa32Npw0FwPDBvvfjfa//v+/75vUQDK97f///SWTK6hOAwCFnOsfKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p27316","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27317"}}},"glyph":{"type":"object","name":"Line","id":"p27312","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p27313","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p27314","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p27326","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p27320","attributes":{"selected":{"type":"object","name":"Selection","id":"p27321","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p27322"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SaUiUURiFW0ySSDTTslLMMk1cxj1NnTPqqOOMOvuMWZFEYosWSRRFSKUYUYgmLSaFFIVkVhShRCWVJkYUhdliPwwr2hekCEO693rmz/B9373ve855TsuhDy2DZaPaFvU/pn1fXFrR0zTBZw+gsm2qcbcXJt97I/ek/OCLye9z8XVPTpHPtwCeC8TRtRPX6zwX8XwwWkOGj+xtCOG9xfjhm6rrWriE95cie/qxsV8XwjhnGeRTdGIE5y3Hx3dyUCTnRiF9qMP7rCma82PQ0O91982LWO7R4Ofqa2mH4+O4Lw6nBsua23fFc28C9GJL3+0E7k+EeMgb9UiijiSc0MrFydSTDHFpPLgxhbpW4LNmwJ4+tIL6UiGGd5YEpVFnGjJDw2fuXL+SetMhtzS3p1N3Bhr9am9e/Z5B/ZkQYv0fJ2npQ4vt+7el/M4A/QAPpLwR0JcOUo1frY7+dJCnQ8Oz6DMLfdWPPmkGsug3GwuunDuurcym72xs/SKN5dB/Du5H2MToHOagR+CGyNObnXrmoZ+0+VfPXHIhRP452JrLfHIxTy3IY0552OKst5x/m8e88tHTJIPIZ275EGYv3oswMD8DNs2a7X760MAcC3BH2q0qYJ4FUHH5GpmrERVqoJH5mnDr30YxwcScTZgjbY+bmHchynfMF44KmXsh5LRUXRHzL4KPMl5EDsVQ9uuLyaMYa2Ts/mZyMUO66y43k48ZalyXmZzMkG/7vSzkZYFnlHRiITcL4mQMHRbys6BUGbKQoxV16oKVPK1Q+Nqs5GrF6ywJxkq+NswYqRJEbeRsg6bmlThhI28bVgXJTTZyt0PFmWonfzsul8gDdvbAjpeCbsiwnX1wwEOBdLAXDsQkrjPE1jjYDwcEvDM3njjYEwcOKCNO9sWJS4JCb7WTvXFCYel1sj9OTBO3ngW42CMXVFwVLvbJBVWnbhd75cK+MEnczX65IcokhLvZMzeey9g63eybG1PUrwT/AaPOWijoBAAA"},"shape":[157],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFgwc6aaAyMDg4OxsaoDAwPDAblWJRDtwBWuCKIfVIlIg8XPnBEH0Q2vA8Uh8tdFwPTDKmF89IICWyF8NBAIYqOB9ggg00B38eOjGw595cFGA93BBVXHCha35WIG+2txASPUXwxg+qvGH3uIuu/2EHWfkekDn/++wUrPff8YmU7oP3SVaPr////xuzzPgOj/q2VOUUyDzBWIODkY6AUyUUcGnP73///+ooyD9sD0/UCF7SA4nK4tPkCQhqTDA/Z/gPpPlO0DmRM/8e0eMP+rxh6wPx8v3W3/Gxzuu8D2lEzeAdI//5j3dvu/QIZW+zaQfHz/oa0gefkIyy1g81d+3AQSB7pro/0vIF22bz1I/Xwp/bX2X8DmrQKJ19tyLQfZZ/+waon9Z7D6hfafgHyONXPsX/z/f9+/d7r9U7D4RPsHYPvaSKaB9tz3TWqgGb0NHC4VA04DAJwRm3HoBAAA"},"shape":[157],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p27327","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27328"}}},"glyph":{"type":"object","name":"Line","id":"p27323","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p27324","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p27325","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p27336","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p27330","attributes":{"selected":{"type":"object","name":"Selection","id":"p27331","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p27332"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p27337","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27338"}}},"glyph":{"type":"object","name":"Line","id":"p27333","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p27334","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p27335","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p27275","attributes":{"tools":[{"id":"p27288"},{"id":"p27289"},{"id":"p27290"},{"id":"p27298"},{"type":"object","name":"SaveTool","id":"p27299"},{"id":"p27340"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p27283","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p27284","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p27285"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p27286"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p27278","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p27279","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p27280"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p27281"}}}],"center":[{"type":"object","name":"Grid","id":"p27282","attributes":{"axis":{"id":"p27278"}}},{"type":"object","name":"Grid","id":"p27287","attributes":{"dimension":1,"axis":{"id":"p27283"}}},{"type":"object","name":"Legend","id":"p27318","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p27319","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p27315"}]}},{"type":"object","name":"LegendItem","id":"p27329","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p27326"}]}},{"type":"object","name":"LegendItem","id":"p27339","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p27336"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p27341","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p27351","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p27343"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p27352"},"y_scale":{"type":"object","name":"LinearScale","id":"p27353"},"title":{"type":"object","name":"Title","id":"p27344","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p27382","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p27376","attributes":{"selected":{"type":"object","name":"Selection","id":"p27377","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p27378"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QyY9IyZM3kcknsMn3FlCjsICgpKCgretNdcOiVI8exR+9OWz0UcdTfaC7u4pIh01tgz4DAHAGX1VuhgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p27383","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27384"}}},"glyph":{"type":"object","name":"Line","id":"p27379","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p27380","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p27381","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p27391","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p27385","attributes":{"selected":{"type":"object","name":"Selection","id":"p27386","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p27387"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QyY9IyZM3kcknsMn3FlCjsICgpKCgretNdcOiVI8exR+9OWz0UcdTfaC7u4pIh01tgz4DAHAGX1VuhgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p27392","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27393"}}},"glyph":{"type":"object","name":"Line","id":"p27388","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p27389","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p27390","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p27402","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p27396","attributes":{"selected":{"type":"object","name":"Selection","id":"p27397","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p27398"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QyY9IyZM3kcknsMn3FlCjsICgpKCgretNdcOiVI8exR+9OWz0UcdTfaC7u4pIh01tgz4DAHAGX1VuhgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p27403","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27404"}}},"glyph":{"type":"object","name":"Line","id":"p27399","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p27400","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p27401","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p27412","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p27406","attributes":{"selected":{"type":"object","name":"Selection","id":"p27407","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p27408"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p27413","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p27414"}}},"glyph":{"type":"object","name":"Line","id":"p27409","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p27410","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p27411","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p27350","attributes":{"tools":[{"id":"p27364"},{"id":"p27365"},{"id":"p27366"},{"id":"p27374"},{"type":"object","name":"SaveTool","id":"p27375"},{"id":"p27416"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p27359","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p27360","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p27361"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p27362"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p27354","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p27355"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p27356"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p27357"}}}],"center":[{"type":"object","name":"Grid","id":"p27358","attributes":{"axis":{"id":"p27354"}}},{"type":"object","name":"Grid","id":"p27363","attributes":{"dimension":1,"axis":{"id":"p27359"}}},{"type":"object","name":"Legend","id":"p27394","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p27395","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p27391"}]}},{"type":"object","name":"LegendItem","id":"p27405","attributes":{"label":{"type":"value","value":"Median Year (1922)"},"renderers":[{"id":"p27402"}]}},{"type":"object","name":"LegendItem","id":"p27415","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p27412"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p27417","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"51c833cc-1da6-4134-9cfd-4e48b53e73e5","roots":{"p27428":"c714ea9a-6615-48ce-83bd-9e29a6780df1"},"root_ids":["p27428"]}];
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