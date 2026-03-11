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
    
    
    const element = document.getElementById("de7c101e-e256-4b0e-b46a-d845e1bfde98");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'de7c101e-e256-4b0e-b46a-d845e1bfde98' but no matching script tag was found.")
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
                  const docs_json = '{"3d76a913-abc8-4dc5-80f4-7a846b51de1b":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p269123","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p269124"}}},"roots":[{"type":"object","name":"Column","id":"p269287","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p269284","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p269283","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p269276","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p269147"},{"type":"object","name":"PanTool","id":"p269223"}]}},{"type":"object","name":"ToolProxy","id":"p269277","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p269148","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p269224","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p269278","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p269149","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p269150","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p269156","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p269155","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p269225","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p269226","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p269232","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p269231","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p269279","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p269157"},{"type":"object","name":"ResetTool","id":"p269233"}]}},{"type":"object","name":"SaveTool","id":"p269280"},{"type":"object","name":"ToolProxy","id":"p269281","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p269199","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p269282","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p269275","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p269125","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p269126"},"y_range":{"type":"object","name":"DataRange1d","id":"p269127"},"x_scale":{"type":"object","name":"LinearScale","id":"p269135"},"y_scale":{"type":"object","name":"LogScale","id":"p269136"},"title":{"type":"object","name":"Title","id":"p269128","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p269165","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p269159","attributes":{"selected":{"type":"object","name":"Selection","id":"p269160","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p269161"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v2/3+9vek6+7///8+X0l+Lk/7x/3/846Wr4fSX////r5ZZRTL97////SWTV8Dp8P5DpuEVy+1/Ad1hy0U6/fX/f3m2xqU0o99oxPBPTFxq/+f/f/uHVUvgdI4tV7p682JQePxf+XGR/Wegf4oyFoLctb9s33yc9Cegfo41c2hGn68SmTft1Gz7V+B4wqRdd8hNDZGYbQ90dv2++bPg9HdgPM+cORMn/QEcXzPgdP2hrwrSjTPsX/z/f9+/dzoGDUw3/7Xap2HQkHCdCqd3nTlzZs/jKfbvwOGKm34GdP+eksk46d9Af0zPm0Q0/RQcXxPhdP7rwAzDc/3271peB6beb7W/Cg7PGlC83fdNSrAHAMZSJB4oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p269166","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p269167"}}},"glyph":{"type":"object","name":"Line","id":"p269162","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p269163","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p269164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p269174","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p269168","attributes":{"selected":{"type":"object","name":"Selection","id":"p269169","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p269170"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v2/3+9vek6+7///8+X0l+Lk/7x/3/846Wr4fSX////r5ZZRTL97////SWTV8Dp8P5DpuEVy+1/Ad1hy0U6/fX/f3m2xqU0o99oxPBPTFxq/+f/f/uHVUvgdI4tV7p682JQePxf+XGR/Wegf4oyFoLctb9s33yc9Cegfo41c2hGn68SmTft1Gz7V+B4wqRdd8hNDZGYbQ90dv2++bPg9HdgPM+cORMn/QEcXzPgdP2hrwrSjTPsX/z/f9+/dzoGDUw3/7Xap2HQkHCdCqd3nTlzZs/jKfbvwOGKm34GdP+eksk46d9Af0zPm0Q0/RQcXxPhdP7rwAzDc/3271peB6beb7W/Cg7PGlC83fdNSrAHAMZSJB4oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p269175","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p269176"}}},"glyph":{"type":"object","name":"Line","id":"p269171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p269172","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p269173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p269185","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p269179","attributes":{"selected":{"type":"object","name":"Selection","id":"p269180","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p269181"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TCWwUVRzGpQpaKQSxFrFFbMvRltp2u7Tblrb77d29Z3ZmZ6aKIIKKIAQ8ImCESkCJogYtokIERIQaD8B64C0GPMIZRKNQokBUjqIEKE216LzXbzPJ7My89/7f//t+/zPdD/9bt7DDfUbeO91bF1gNb93cxeded+sn33WcmJ2BvvcDsLf2jzUP7s1E3/dB6D8xo6zfqiHoWzcUBbkrnvk2mM31OXD/MrLzua5h3Dcck15+J2a+kcv9IyCXGSN5zi3YPfD3/ucX5/O8Atw+8+33f7ytkOeOwqnvH7r748rRPH8M5pXU3/DqtWNZZyyufurKnY8fK2K9Yrx4UmwoYd1xGBV+3r5KWf9WtG9u/qF0Rhl1lCN/yRDvNfkV1FOBk84Lw3uyHNTlwJbjP5073e2gvko88oL4U0mdTrh9a9fv2++k3vEYcH7x/K8+HU/dVdjz2j3qe5urqL8aralI8cbWavbhgizb4mI/LhRuu+7nZffXsK8anJ5yccsCq5b91WKr+OyvY591sIvdOaliAvudAM/cdTVKXj37rkembLCB/Tdg3/57/3ReaKAPjVjVEv1y9K+N9MONyRXlLw3b7aYvwPVzMj+6aiLoD9AV+mdD7wHQJw+k7JCHfnnw+aWjj/71mYe+ebBeFvTSPy+Wbtqh/dbmpY9e3Leo3W7dRz99iNuhHVzpo68+SDkD/fTXj2xpjJ8++9Etyl3y0+8ADn8wy74C9D2AL56d/M27xwP0P4gN4nVzkDkE8WSjKBRkHiHMyKl6+pVAiLmEkDg7xpYaYj4hVO66cepyRxNzaoK9Kbl0UxPzakKPxDzM3MLoiIsDwswvDNvsoXMyI8wxgtd7D1yevijCPCNYdujrU1MuRphrFNKWmVHmG0VSGhhlzjE47xAfYsw7Bil/T4y5x9GT9dgTjb4484/j6InZD7i2x8lBHDtEmfIEeUhgozQmQS4SsEVWF+QmyUcSs8TjiiQ5SaJosEhEIS8KbpIFFXKjIEtgMV8hPwoui3bbFXKkwA7PTlAhTyqOtf2tzytRyZWKgyuFMSr5UmGbjLnrVHKm4kMR92GVvKloE23kpMhdCqsDgoQU+UthuUMEmCKHKSwcIQhJkccUpOwMjVxquEvE2KCRTw32JlugRk41BCVoGnnV4Nq++kj8rEZudRRLQ3Xyq0PepunkWMcgEc9anTzr+G+6KKyTax3ndEFmmnynIbqvUdLkPI1DpYLYNHlPQ+K5K03u0xDdlPUzyL+BN4W99QbnwMCaIwJQg/NgQKgr3GZwLgy0CBs6Dc6HKavnFZmcExNTpaEm58VEWi40OTcmQtPEpJicHxO19u7B2RbnyMI4cWzS4jxZyJNAWZwrCxKvnRbny8IV8teM/wE25AtLyAYAAA=="},"shape":[217],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v2/3+9vek6+7///8+X0l9LNv3j///4x0tXE6S//P//f7XMKrrT//7/318yeQVB+hcwPGy5lg84/fX/f3m2xqXDjv7z/7/9w6olRNPAdPN/5cdFGPRnYHwVZSyE08Bw21+2bz7F9CegvRxr5gw7+hU4/82mmAYGf/2++bMI0t+B5cLMmTMppj+A8+UMoukX///f9++dTjINLMf+a7VPI5mGpOupBOl34PQ8hWr0M2B87CmZTDH9Gxhf0/Mm0Yx+Cs6fE4mmr4LTaw80PjvsL4L92wIVr4HT08HiJaB8e983KcEeAD6+oJjIBgAA"},"shape":[217],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p269186","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p269187"}}},"glyph":{"type":"object","name":"Line","id":"p269182","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p269183","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p269184","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p269195","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p269189","attributes":{"selected":{"type":"object","name":"Selection","id":"p269190","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p269191"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p269196","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p269197"}}},"glyph":{"type":"object","name":"Line","id":"p269192","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p269193","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p269194","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p269134","attributes":{"tools":[{"id":"p269147"},{"id":"p269148"},{"id":"p269149"},{"id":"p269157"},{"type":"object","name":"SaveTool","id":"p269158"},{"id":"p269199"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p269142","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p269143","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p269144"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p269145"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p269137","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p269138","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p269139"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p269140"}}}],"center":[{"type":"object","name":"Grid","id":"p269141","attributes":{"axis":{"id":"p269137"}}},{"type":"object","name":"Grid","id":"p269146","attributes":{"dimension":1,"axis":{"id":"p269142"}}},{"type":"object","name":"Legend","id":"p269177","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p269178","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p269174"}]}},{"type":"object","name":"LegendItem","id":"p269188","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p269185"}]}},{"type":"object","name":"LegendItem","id":"p269198","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p269195"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p269200","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p269210","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p269202"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p269211"},"y_scale":{"type":"object","name":"LinearScale","id":"p269212"},"title":{"type":"object","name":"Title","id":"p269203","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p269241","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p269235","attributes":{"selected":{"type":"object","name":"Selection","id":"p269236","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p269237"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9em3t+Uqhy63vz+neN1fhtX2DR0dK+Z9WmrvrLnUpeXXAvvs8vLjR1xn278WusXNlznTfvaqVavqlafYX6wSkUqZNNE+SL3s0rnvk+0ZoObBaACcq9RSYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p269242","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p269243"}}},"glyph":{"type":"object","name":"Line","id":"p269238","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p269239","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p269240","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p269250","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p269244","attributes":{"selected":{"type":"object","name":"Selection","id":"p269245","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p269246"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9em3t+Uqhy63vz+neN1fhtX2DR0dK+Z9WmrvrLnUpeXXAvvs8vLjR1xn278WusXNlznTfvaqVavqlafYX6wSkUqZNNE+SL3s0rnvk+0ZoObBaACcq9RSYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p269251","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p269252"}}},"glyph":{"type":"object","name":"Line","id":"p269247","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p269248","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p269249","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p269261","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p269255","attributes":{"selected":{"type":"object","name":"Selection","id":"p269256","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p269257"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9em3t+Uqhy63vz+neN1fhtX2DR0dK+Z9WmrvrLnUpeXXAvvs8vLjR1xn278WusXNlznTfvaqVavqlafYX6wSkUqZNNE+SL3s0rnvk+0ZoObBaACcq9RSYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p269262","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p269263"}}},"glyph":{"type":"object","name":"Line","id":"p269258","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p269259","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p269260","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p269271","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p269265","attributes":{"selected":{"type":"object","name":"Selection","id":"p269266","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p269267"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p269272","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p269273"}}},"glyph":{"type":"object","name":"Line","id":"p269268","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p269269","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p269270","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p269209","attributes":{"tools":[{"id":"p269223"},{"id":"p269224"},{"id":"p269225"},{"id":"p269233"},{"type":"object","name":"SaveTool","id":"p269234"},{"id":"p269275"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p269218","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p269219","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p269220"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p269221"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p269213","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p269214"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p269215"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p269216"}}}],"center":[{"type":"object","name":"Grid","id":"p269217","attributes":{"axis":{"id":"p269213"}}},{"type":"object","name":"Grid","id":"p269222","attributes":{"dimension":1,"axis":{"id":"p269218"}}},{"type":"object","name":"Legend","id":"p269253","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p269254","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p269250"}]}},{"type":"object","name":"LegendItem","id":"p269264","attributes":{"label":{"type":"value","value":"Median Year (1977)"},"renderers":[{"id":"p269261"}]}},{"type":"object","name":"LegendItem","id":"p269274","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p269271"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p269286","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"3d76a913-abc8-4dc5-80f4-7a846b51de1b","roots":{"p269287":"de7c101e-e256-4b0e-b46a-d845e1bfde98"},"root_ids":["p269287"]}];
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