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
    
    
    const element = document.getElementById("cfabb80a-0c65-45d0-8ee6-696d566a7f9c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cfabb80a-0c65-45d0-8ee6-696d566a7f9c' but no matching script tag was found.")
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
                  const docs_json = '{"e31da4dd-90f4-44f3-a9bc-02b99de91548":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p28280","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p28281"}}},"roots":[{"type":"object","name":"Column","id":"p28444","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p28442","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p28441","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p28434","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p28304"},{"type":"object","name":"PanTool","id":"p28380"}]}},{"type":"object","name":"ToolProxy","id":"p28435","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p28305","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p28381","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p28436","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p28306","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p28307","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p28313","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p28312","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p28382","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p28383","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p28389","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p28388","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p28437","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p28314"},{"type":"object","name":"ResetTool","id":"p28390"}]}},{"type":"object","name":"SaveTool","id":"p28438"},{"type":"object","name":"ToolProxy","id":"p28439","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p28356","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p28440","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p28432","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p28282","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p28283"},"y_range":{"type":"object","name":"DataRange1d","id":"p28284"},"x_scale":{"type":"object","name":"LinearScale","id":"p28292"},"y_scale":{"type":"object","name":"LogScale","id":"p28293"},"title":{"type":"object","name":"Title","id":"p28285","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p28322","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p28316","attributes":{"selected":{"type":"object","name":"Selection","id":"p28317","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p28318"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFgwc6aag+g695f+Z1UdjIHgSpSSg0Lra8stHrIOra8Dd6SsEncwMTZe7Gom6sDAwODwsEoYTn/ViOGXPSkE4i8osEWhgUAQmW54HSgAsufgrS5+EP+AXCu/g/vDKpEqMzC/4dBXHoegHXJPNwTwOCi2vt74K4bNwdTYuDgtjQnkLu7tFxkcQnbIHW1b/tMepN6W67O9kbHx54Jn70H8A5//vrHfKte6+tWEp/ZnzpwRKE9/ABJP6D90FYNOTEtrcl5xwf4/EKyWOUWQBvpT/RfXKbB+gYiTVKOfVon4MfQcB/EXyEQdoRq9Sa71sG/9IXtgvG2u/nQA7I9rizFpa67rix2d99sbGBuf3vN4j/30mTM5N13fbb9OrvX314s77bfJtXpnz9puD4y8CZ5u2+y1gPGxKmGLfWT/IddbFpvszywuuGu/ZL19f4FtUqL/avvngTvq3KYsA5kfz6e7yP7UmTM8szhm27/6/396megk+wdACa32Npw0FwPDBvvfjfa//v+/75vUQDK97f///SWTK6hOAwCFnOsfKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p28323","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p28324"}}},"glyph":{"type":"object","name":"Line","id":"p28319","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p28320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p28321","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p28331","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p28325","attributes":{"selected":{"type":"object","name":"Selection","id":"p28326","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p28327"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFgwc6aag+g695f+Z1UdjIHgSpSSg0Lra8stHrIOra8Dd6SsEncwMTZe7Gom6sDAwODwsEoYTn/ViOGXPSkE4i8osEWhgUAQmW54HSgAsufgrS5+EP+AXCu/g/vDKpEqMzC/4dBXHoegHXJPNwTwOCi2vt74K4bNwdTYuDgtjQnkLu7tFxkcQnbIHW1b/tMepN6W67O9kbHx54Jn70H8A5//vrHfKte6+tWEp/ZnzpwRKE9/ABJP6D90FYNOTEtrcl5xwf4/EKyWOUWQBvpT/RfXKbB+gYiTVKOfVon4MfQcB/EXyEQdoRq9Sa71sG/9IXtgvG2u/nQA7I9rizFpa67rix2d99sbGBuf3vN4j/30mTM5N13fbb9OrvX314s77bfJtXpnz9puD4y8CZ5u2+y1gPGxKmGLfWT/IddbFpvszywuuGu/ZL19f4FtUqL/avvngTvq3KYsA5kfz6e7yP7UmTM8szhm27/6/396megk+wdACa32Npw0FwPDBvvfjfa//v+/75vUQDK97f///SWTK6hOAwCFnOsfKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p28332","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p28333"}}},"glyph":{"type":"object","name":"Line","id":"p28328","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p28329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p28330","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p28342","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p28336","attributes":{"selected":{"type":"object","name":"Selection","id":"p28337","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p28338"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SaUiUURiFW0ySSDTTslLMMk1cxj1NnTPqqOOMOvuMWZFEYosWSRRFSKUYUYgmLSaFFIVkVhShRCWVJkYUhdliPwwr2hekCEO693rmz/B9373ve855TsuhDy2DZaPaFvU/pn1fXFrR0zTBZw+gsm2qcbcXJt97I/ek/OCLye9z8XVPTpHPtwCeC8TRtRPX6zwX8XwwWkOGj+xtCOG9xfjhm6rrWriE95cie/qxsV8XwjhnGeRTdGIE5y3Hx3dyUCTnRiF9qMP7rCma82PQ0O91982LWO7R4Ofqa2mH4+O4Lw6nBsua23fFc28C9GJL3+0E7k+EeMgb9UiijiSc0MrFydSTDHFpPLgxhbpW4LNmwJ4+tIL6UiGGd5YEpVFnGjJDw2fuXL+SetMhtzS3p1N3Bhr9am9e/Z5B/ZkQYv0fJ2npQ4vt+7el/M4A/QAPpLwR0JcOUo1frY7+dJCnQ8Oz6DMLfdWPPmkGsug3GwuunDuurcym72xs/SKN5dB/Du5H2MToHOagR+CGyNObnXrmoZ+0+VfPXHIhRP452JrLfHIxTy3IY0552OKst5x/m8e88tHTJIPIZ275EGYv3oswMD8DNs2a7X760MAcC3BH2q0qYJ4FUHH5GpmrERVqoJH5mnDr30YxwcScTZgjbY+bmHchynfMF44KmXsh5LRUXRHzL4KPMl5EDsVQ9uuLyaMYa2Ts/mZyMUO66y43k48ZalyXmZzMkG/7vSzkZYFnlHRiITcL4mQMHRbys6BUGbKQoxV16oKVPK1Q+Nqs5GrF6ywJxkq+NswYqRJEbeRsg6bmlThhI28bVgXJTTZyt0PFmWonfzsul8gDdvbAjpeCbsiwnX1wwEOBdLAXDsQkrjPE1jjYDwcEvDM3njjYEwcOKCNO9sWJS4JCb7WTvXFCYel1sj9OTBO3ngW42CMXVFwVLvbJBVWnbhd75cK+MEnczX65IcokhLvZMzeey9g63eybG1PUrwT/AaPOWijoBAAA"},"shape":[157],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYFgwc6aaAyMDg4OxsaoDAwPDAblWJRDtwBWuCKIfVIlIg8XPnBEH0Q2vA8Uh8tdFwPTDKmF89IICWyF8NBAIYqOB9ggg00B38eOjGw595cFGA93BBVXHCha35WIG+2txASPUXwxg+qvGH3uIuu/2EHWfkekDn/++wUrPff8YmU7oP3SVaPr////xuzzPgOj/q2VOUUyDzBWIODkY6AUyUUcGnP73///+ooyD9sD0/UCF7SA4nK4tPkCQhqTDA/Z/gPpPlO0DmRM/8e0eMP+rxh6wPx8v3W3/Gxzuu8D2lEzeAdI//5j3dvu/QIZW+zaQfHz/oa0gefkIyy1g81d+3AQSB7pro/0vIF22bz1I/Xwp/bX2X8DmrQKJ19tyLQfZZ/+waon9Z7D6hfafgHyONXPsX/z/f9+/d7r9U7D4RPsHYPvaSKaB9tz3TWqgGb0NHC4VA04DAJwRm3HoBAAA"},"shape":[157],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p28343","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p28344"}}},"glyph":{"type":"object","name":"Line","id":"p28339","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p28340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p28341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p28352","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p28346","attributes":{"selected":{"type":"object","name":"Selection","id":"p28347","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p28348"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p28353","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p28354"}}},"glyph":{"type":"object","name":"Line","id":"p28349","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p28350","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p28351","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p28291","attributes":{"tools":[{"id":"p28304"},{"id":"p28305"},{"id":"p28306"},{"id":"p28314"},{"type":"object","name":"SaveTool","id":"p28315"},{"id":"p28356"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p28299","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p28300","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p28301"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p28302"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p28294","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p28295","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p28296"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p28297"}}}],"center":[{"type":"object","name":"Grid","id":"p28298","attributes":{"axis":{"id":"p28294"}}},{"type":"object","name":"Grid","id":"p28303","attributes":{"dimension":1,"axis":{"id":"p28299"}}},{"type":"object","name":"Legend","id":"p28334","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p28335","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p28331"}]}},{"type":"object","name":"LegendItem","id":"p28345","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p28342"}]}},{"type":"object","name":"LegendItem","id":"p28355","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p28352"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p28357","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p28367","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p28359"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p28368"},"y_scale":{"type":"object","name":"LinearScale","id":"p28369"},"title":{"type":"object","name":"Title","id":"p28360","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p28398","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p28392","attributes":{"selected":{"type":"object","name":"Selection","id":"p28393","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p28394"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QyY9IyZM3kcknsMn3FlCjsICgpKCgretNdcOiVI8exR+9OWz0UcdTfaC7u4pIh01tgz4DAHAGX1VuhgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p28399","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p28400"}}},"glyph":{"type":"object","name":"Line","id":"p28395","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p28396","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p28397","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p28407","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p28401","attributes":{"selected":{"type":"object","name":"Selection","id":"p28402","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p28403"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QyY9IyZM3kcknsMn3FlCjsICgpKCgretNdcOiVI8exR+9OWz0UcdTfaC7u4pIh01tgz4DAHAGX1VuhgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p28408","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p28409"}}},"glyph":{"type":"object","name":"Line","id":"p28404","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p28405","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p28406","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p28418","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p28412","attributes":{"selected":{"type":"object","name":"Selection","id":"p28413","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p28414"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QyY9IyZM3kcknsMn3FlCjsICgpKCgretNdcOiVI8exR+9OWz0UcdTfaC7u4pIh01tgz4DAHAGX1VuhgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p28419","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p28420"}}},"glyph":{"type":"object","name":"Line","id":"p28415","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p28416","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p28417","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p28428","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p28422","attributes":{"selected":{"type":"object","name":"Selection","id":"p28423","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p28424"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p28429","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p28430"}}},"glyph":{"type":"object","name":"Line","id":"p28425","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p28426","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p28427","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p28366","attributes":{"tools":[{"id":"p28380"},{"id":"p28381"},{"id":"p28382"},{"id":"p28390"},{"type":"object","name":"SaveTool","id":"p28391"},{"id":"p28432"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p28375","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p28376","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p28377"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p28378"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p28370","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p28371"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p28372"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p28373"}}}],"center":[{"type":"object","name":"Grid","id":"p28374","attributes":{"axis":{"id":"p28370"}}},{"type":"object","name":"Grid","id":"p28379","attributes":{"dimension":1,"axis":{"id":"p28375"}}},{"type":"object","name":"Legend","id":"p28410","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p28411","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p28407"}]}},{"type":"object","name":"LegendItem","id":"p28421","attributes":{"label":{"type":"value","value":"Median Year (1922)"},"renderers":[{"id":"p28418"}]}},{"type":"object","name":"LegendItem","id":"p28431","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p28428"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p28433","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"e31da4dd-90f4-44f3-a9bc-02b99de91548","roots":{"p28444":"cfabb80a-0c65-45d0-8ee6-696d566a7f9c"},"root_ids":["p28444"]}];
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