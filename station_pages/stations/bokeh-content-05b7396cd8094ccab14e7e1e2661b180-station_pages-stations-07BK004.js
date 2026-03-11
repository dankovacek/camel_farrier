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
    
    
    const element = document.getElementById("b58b9bc8-38a9-43b7-a82a-3fe19f6c839e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b58b9bc8-38a9-43b7-a82a-3fe19f6c839e' but no matching script tag was found.")
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
                  const docs_json = '{"57fd827c-46b6-4a02-877c-c56048d21d27":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p41225","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p41226"}}},"roots":[{"type":"object","name":"Column","id":"p41389","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p41386","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p41385","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p41378","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p41249"},{"type":"object","name":"PanTool","id":"p41325"}]}},{"type":"object","name":"ToolProxy","id":"p41379","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p41250","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p41326","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p41380","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p41251","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p41252","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p41258","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p41257","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p41327","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p41328","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p41334","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p41333","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p41381","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p41259"},{"type":"object","name":"ResetTool","id":"p41335"}]}},{"type":"object","name":"SaveTool","id":"p41382"},{"type":"object","name":"ToolProxy","id":"p41383","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p41301","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p41384","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p41377","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p41227","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p41228"},"y_range":{"type":"object","name":"DataRange1d","id":"p41229"},"x_scale":{"type":"object","name":"LinearScale","id":"p41237"},"y_scale":{"type":"object","name":"LogScale","id":"p41238"},"title":{"type":"object","name":"Title","id":"p41230","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p41267","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41261","attributes":{"selected":{"type":"object","name":"Selection","id":"p41262","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41263"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEjoP/TUngEHvc79YdTN8qf2s2bO5Nxc/cTeluv64wk7Htt7PKz6stnmMUhdgy0XCs3gHfnIPi0tjS0r6yGI73Dfny70h8AdD0D0giMKxNMPq0Tesd64b79DrnV1B899e0ageVtO3KOYnnjoq8YDgXv21SLr2Ff63rE3NjY+bDDzlr1GTH9Sy4cboHBs1jK9DuZ/Lrxq/1Uj5n656xX7////A9Vetn8duONcMtslkHkPVNguwunvGjH5nD8vgMy7fObMBfszZ86suTrhgv2MmTMjTR0vgPTPP6KAoIHiM598Om8f03+odWfHebC/39acB7tnWeV5e6B0pa4iWLxB7OY5nHSBLZf7j6Xn7A2BGs9an7P/9////SoRwvSVxQV/nX+dtV/v/pArfsYZexNj48mlhadB7vL8I3Ha/i/Qne4PT1FMN70OPDH1/Cmw+0INToHst4/bdRInffrMmZoHc07aLy6wfXUq/aT9hENfOc5JnrTnvr74QsjBE6DwTrDcgqABc+Q5uygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41268","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41269"}}},"glyph":{"type":"object","name":"Line","id":"p41264","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41265","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p41266","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p41276","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41270","attributes":{"selected":{"type":"object","name":"Selection","id":"p41271","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41272"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEjoP/TUngEHvc79YdTN8qf2s2bO5Nxc/cTeluv64wk7Htt7PKz6stnmMUhdgy0XCs3gHfnIPi0tjS0r6yGI73Dfny70h8AdD0D0giMKxNMPq0Tesd64b79DrnV1B899e0ageVtO3KOYnnjoq8YDgXv21SLr2Ff63rE3NjY+bDDzlr1GTH9Sy4cboHBs1jK9DuZ/Lrxq/1Uj5n656xX7////A9Vetn8duONcMtslkHkPVNguwunvGjH5nD8vgMy7fObMBfszZ86suTrhgv2MmTMjTR0vgPTPP6KAoIHiM598Om8f03+odWfHebC/39acB7tnWeV5e6B0pa4iWLxB7OY5nHSBLZf7j6Xn7A2BGs9an7P/9////SoRwvSVxQV/nX+dtV/v/pArfsYZexNj48mlhadB7vL8I3Ha/i/Qne4PT1FMN70OPDH1/Cmw+0INToHst4/bdRInffrMmZoHc07aLy6wfXUq/aT9hENfOc5JnrTnvr74QsjBE6DwTrDcgqABc+Q5uygDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41277","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41278"}}},"glyph":{"type":"object","name":"Line","id":"p41273","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41274","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p41275","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p41287","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41281","attributes":{"selected":{"type":"object","name":"Selection","id":"p41282","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41283"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xO65Z2hv/CvvRCY5nXoe2wBRGIOEL6sgw+Q3NuiBBVXc7gQ51TN+VYTKq/rsAoMDKDqjBzeqm6ZfiHOBKrezAEk+k3IAqrP0qFI5nihzHFrqH5bB5Bqp2p7qDkODkBFQBMcoeY5OciClBc6Q811cdgHNO2WtyvUfDeHeJCxqu5QezwcGMDAE2qfp8MikPAtL6i93g5g5Vt8oPb7OjwBGdPnB3WHP0TeJADqngAHYZA6xUCouwIdwNbyBUHdFwTR9zsI6s5gh1aQ814EQ90b4hAWCgRXQ6DuDnVQAwkfCoW6P8zhO8gh68Og/gh3ABszJxzqnwiHGSBndUZA/RXpAABXFTfSsAEAAA=="},"shape":[54],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYEjoP/TUngFBH5j7/jGIbrDlQqEd7vs/pIRecEThAU6aEahuy4l7RNMgd8q13rb///+//IaiG2BzpPSvgvj2xsaXQeoeqLBdhNNA8XjLLRdA9PwjCggapO9tzXlkukHs5jkM+t////erRHDTEPectv8LNNf94SmiaaB++7hdJzFoUHwIRJwEuT/BcssJOA0A3W7c3rABAAA="},"shape":[54],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41288","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41289"}}},"glyph":{"type":"object","name":"Line","id":"p41284","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41285","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p41286","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p41297","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41291","attributes":{"selected":{"type":"object","name":"Selection","id":"p41292","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41293"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p41298","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41299"}}},"glyph":{"type":"object","name":"Line","id":"p41294","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41295","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p41296","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p41236","attributes":{"tools":[{"id":"p41249"},{"id":"p41250"},{"id":"p41251"},{"id":"p41259"},{"type":"object","name":"SaveTool","id":"p41260"},{"id":"p41301"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p41244","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p41245","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p41246"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p41247"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p41239","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p41240","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p41241"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p41242"}}}],"center":[{"type":"object","name":"Grid","id":"p41243","attributes":{"axis":{"id":"p41239"}}},{"type":"object","name":"Grid","id":"p41248","attributes":{"dimension":1,"axis":{"id":"p41244"}}},{"type":"object","name":"Legend","id":"p41279","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p41280","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p41276"}]}},{"type":"object","name":"LegendItem","id":"p41290","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p41287"}]}},{"type":"object","name":"LegendItem","id":"p41300","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p41297"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p41302","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p41312","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p41304"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p41313"},"y_scale":{"type":"object","name":"LinearScale","id":"p41314"},"title":{"type":"object","name":"Title","id":"p41305","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p41343","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41337","attributes":{"selected":{"type":"object","name":"Selection","id":"p41338","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41339"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qzk0xE75E7aZ6/dKrb86iX7OOfKs//fPrCHyQMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41344","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41345"}}},"glyph":{"type":"object","name":"Line","id":"p41340","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41341","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p41342","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p41352","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41346","attributes":{"selected":{"type":"object","name":"Selection","id":"p41347","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41348"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qzk0xE75E7aZ6/dKrb86iX7OOfKs//fPrCHyQMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41353","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41354"}}},"glyph":{"type":"object","name":"Line","id":"p41349","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41350","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p41351","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p41363","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41357","attributes":{"selected":{"type":"object","name":"Selection","id":"p41358","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41359"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qzk0xE75E7aZ6/dKrb86iX7OOfKs//fPrCHyQMA/BTF1GAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p41364","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41365"}}},"glyph":{"type":"object","name":"Line","id":"p41360","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41361","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p41362","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p41373","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p41367","attributes":{"selected":{"type":"object","name":"Selection","id":"p41368","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p41369"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p41374","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p41375"}}},"glyph":{"type":"object","name":"Line","id":"p41370","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p41371","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p41372","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p41311","attributes":{"tools":[{"id":"p41325"},{"id":"p41326"},{"id":"p41327"},{"id":"p41335"},{"type":"object","name":"SaveTool","id":"p41336"},{"id":"p41377"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p41320","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p41321","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p41322"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p41323"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p41315","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p41316"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p41317"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p41318"}}}],"center":[{"type":"object","name":"Grid","id":"p41319","attributes":{"axis":{"id":"p41315"}}},{"type":"object","name":"Grid","id":"p41324","attributes":{"dimension":1,"axis":{"id":"p41320"}}},{"type":"object","name":"Legend","id":"p41355","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p41356","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p41352"}]}},{"type":"object","name":"LegendItem","id":"p41366","attributes":{"label":{"type":"value","value":"Median Year (1922)"},"renderers":[{"id":"p41363"}]}},{"type":"object","name":"LegendItem","id":"p41376","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p41373"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p41388","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"57fd827c-46b6-4a02-877c-c56048d21d27","roots":{"p41389":"b58b9bc8-38a9-43b7-a82a-3fe19f6c839e"},"root_ids":["p41389"]}];
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