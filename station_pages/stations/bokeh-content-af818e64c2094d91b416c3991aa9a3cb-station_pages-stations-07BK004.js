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
    
    
    const element = document.getElementById("a3ebd665-52d6-44bb-befe-5908a8467e48");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a3ebd665-52d6-44bb-befe-5908a8467e48' but no matching script tag was found.")
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
                  const docs_json = '{"4f1cd054-0386-497e-b067-2a1fdd9cbc27":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p41472","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p41473"}}},"roots":[{"type":"object","name":"Column","id":"p41636","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p41633","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p41632","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p41625","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p41496"},{"type":"object","name":"PanTool","id":"p41572"}]}},{"type":"object","name":"ToolProxy","id":"p41626","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p41497","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p41573","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p41627","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p41498","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p41499","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p41505","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p41504","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p41574","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p41575","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p41581","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p41580","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p41628","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p41506"},{"type":"object","name":"ResetTool","id":"p41582"}]}},{"type":"object","name":"SaveTool","id":"p41629"},{"type":"object","name":"ToolProxy","id":"p41630","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p41548","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p41631","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p41624","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p41474","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p41475"},"y_range":{"type":"object","name":"DataRange1d","id":"p41476"},"x_scale":{"type":"object","name":"LinearScale","id":"p41484"},"y_scale":{"type":"object","name":"LogScale","id":"p41485"},"title":{"type":"object","name":"Title","id":"p41477","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p41514","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41508","attributes":{"selected":{"type":"object","name":"Selection","id":"p41509","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41510"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEjoP/TUngEHvc79YdTN8qf2s2bO5Nxc/cTeluv64wk7Htt7PKz6stnmMUhdgy0XCs3gHfnIPi0tjS0r6yGI73Dfny70h8AdD0D0giMKxNMPq0Tesd64b79DrnV1B899e0ageVtO3KOYnnjoq8YDgXv21SLr2Ff63rE3NjY+bDDzlr1GTH9Sy4cboHBs1jK9DuZ/Lrxq/1Uj5n656xX7////A9Vetn8duONcMtslkHkPVNguwunvGjH5nD8vgMy7fObMBfszZ86suTrhgv2MmTMjTR0vgPTPP6KAoIHiM598Om8f03+odWfHebC/39acB7tnWeV5e6B0pa4iWLxB7OY5nHSBLZf7j6Xn7A2BGs9an7P/9////SoRwvSVxQV/nX+dtV/v/pArfsYZexNj48mlhadB7vL8I3Ha/i/Qne4PT1FMN70OPDH1/Cmw+0INToHst4/bdRInffrMmZoHc07aLy6wfXUq/aT9hENfOc5JnrTnvr74QsjBE6DwTrDcgqABc+Q5uygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41515","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41516"}}},"glyph":{"type":"object","name":"Line","id":"p41511","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41512","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p41513","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p41523","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41517","attributes":{"selected":{"type":"object","name":"Selection","id":"p41518","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41519"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEjoP/TUngEHvc79YdTN8qf2s2bO5Nxc/cTeluv64wk7Htt7PKz6stnmMUhdgy0XCs3gHfnIPi0tjS0r6yGI73Dfny70h8AdD0D0giMKxNMPq0Tesd64b79DrnV1B899e0ageVtO3KOYnnjoq8YDgXv21SLr2Ff63rE3NjY+bDDzlr1GTH9Sy4cboHBs1jK9DuZ/Lrxq/1Uj5n656xX7////A9Vetn8duONcMtslkHkPVNguwunvGjH5nD8vgMy7fObMBfszZ86suTrhgv2MmTMjTR0vgPTPP6KAoIHiM598Om8f03+odWfHebC/39acB7tnWeV5e6B0pa4iWLxB7OY5nHSBLZf7j6Xn7A2BGs9an7P/9////SoRwvSVxQV/nX+dtV/v/pArfsYZexNj48mlhadB7vL8I3Ha/i/Qne4PT1FMN70OPDH1/Cmw+0INToHst4/bdRInffrMmZoHc07aLy6wfXUq/aT9hENfOc5JnrTnvr74QsjBE6DwTrDcgqABc+Q5uygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41524","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41525"}}},"glyph":{"type":"object","name":"Line","id":"p41520","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41521","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p41522","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p41534","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41528","attributes":{"selected":{"type":"object","name":"Selection","id":"p41529","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41530"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xO65Z2hv/CvvRCY5nXoe2wBRGIOEL6sgw+Q3NuiBBVXc7gQ51TN+VYTKq/rsAoMDKDqjBzeqm6ZfiHOBKrezAEk+k3IAqrP0qFI5nihzHFrqH5bB5Bqp2p7qDkODkBFQBMcoeY5OciClBc6Q811cdgHNO2WtyvUfDeHeJCxqu5QezwcGMDAE2qfp8MikPAtL6i93g5g5Vt8oPb7OjwBGdPnB3WHP0TeJADqngAHYZA6xUCouwIdwNbyBUHdFwTR9zsI6s5gh1aQ814EQ90b4hAWCgRXQ6DuDnVQAwkfCoW6P8zhO8gh68Og/gh3ABszJxzqnwiHGSBndUZA/RXpAABXFTfSsAEAAA=="},"shape":[54],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEjoP/TUngFBH5j7/jGIbrDlQqEd7vs/pIRecEThAU6aEahuy4l7RNMgd8q13rb///+//IaiG2BzpPSvgvj2xsaXQeoeqLBdhNNA8XjLLRdA9PwjCggapO9tzXlkukHs5jkM+t////erRHDTEPectv8LNNf94SmiaaB++7hdJzFoUHwIRJwEuT/BcssJOA0A3W7c3rABAAA="},"shape":[54],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41535","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41536"}}},"glyph":{"type":"object","name":"Line","id":"p41531","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41532","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p41533","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p41544","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41538","attributes":{"selected":{"type":"object","name":"Selection","id":"p41539","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41540"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p41545","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41546"}}},"glyph":{"type":"object","name":"Line","id":"p41541","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41542","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p41543","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p41483","attributes":{"tools":[{"id":"p41496"},{"id":"p41497"},{"id":"p41498"},{"id":"p41506"},{"type":"object","name":"SaveTool","id":"p41507"},{"id":"p41548"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p41491","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p41492","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p41493"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p41494"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p41486","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p41487","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p41488"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p41489"}}}],"center":[{"type":"object","name":"Grid","id":"p41490","attributes":{"axis":{"id":"p41486"}}},{"type":"object","name":"Grid","id":"p41495","attributes":{"dimension":1,"axis":{"id":"p41491"}}},{"type":"object","name":"Legend","id":"p41526","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p41527","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p41523"}]}},{"type":"object","name":"LegendItem","id":"p41537","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p41534"}]}},{"type":"object","name":"LegendItem","id":"p41547","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p41544"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p41549","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p41559","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p41551"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p41560"},"y_scale":{"type":"object","name":"LinearScale","id":"p41561"},"title":{"type":"object","name":"Title","id":"p41552","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p41590","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41584","attributes":{"selected":{"type":"object","name":"Selection","id":"p41585","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41586"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qzk0xE75E7aZ6/dKrb86iX7OOfKs//fPrCHyQMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41591","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41592"}}},"glyph":{"type":"object","name":"Line","id":"p41587","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41588","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p41589","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p41599","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41593","attributes":{"selected":{"type":"object","name":"Selection","id":"p41594","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41595"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qzk0xE75E7aZ6/dKrb86iX7OOfKs//fPrCHyQMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41600","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41601"}}},"glyph":{"type":"object","name":"Line","id":"p41596","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41597","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p41598","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p41610","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41604","attributes":{"selected":{"type":"object","name":"Selection","id":"p41605","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41606"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qzk0xE75E7aZ6/dKrb86iX7OOfKs//fPrCHyQMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41611","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41612"}}},"glyph":{"type":"object","name":"Line","id":"p41607","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41608","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p41609","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p41620","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41614","attributes":{"selected":{"type":"object","name":"Selection","id":"p41615","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41616"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p41621","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41622"}}},"glyph":{"type":"object","name":"Line","id":"p41617","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41618","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p41619","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p41558","attributes":{"tools":[{"id":"p41572"},{"id":"p41573"},{"id":"p41574"},{"id":"p41582"},{"type":"object","name":"SaveTool","id":"p41583"},{"id":"p41624"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p41567","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p41568","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p41569"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p41570"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p41562","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p41563"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p41564"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p41565"}}}],"center":[{"type":"object","name":"Grid","id":"p41566","attributes":{"axis":{"id":"p41562"}}},{"type":"object","name":"Grid","id":"p41571","attributes":{"dimension":1,"axis":{"id":"p41567"}}},{"type":"object","name":"Legend","id":"p41602","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p41603","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p41599"}]}},{"type":"object","name":"LegendItem","id":"p41613","attributes":{"label":{"type":"value","value":"Median Year (1922)"},"renderers":[{"id":"p41610"}]}},{"type":"object","name":"LegendItem","id":"p41623","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p41620"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p41635","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"4f1cd054-0386-497e-b067-2a1fdd9cbc27","roots":{"p41636":"a3ebd665-52d6-44bb-befe-5908a8467e48"},"root_ids":["p41636"]}];
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