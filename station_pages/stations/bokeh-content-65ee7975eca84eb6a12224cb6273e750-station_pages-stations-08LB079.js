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
    
    
    const element = document.getElementById("bd334ed9-a802-400d-bb91-e20ec788d746");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bd334ed9-a802-400d-bb91-e20ec788d746' but no matching script tag was found.")
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
                  const docs_json = '{"f9a3b79f-175f-4eaf-8b9f-54e1998a8258":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p273894","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p273895"}}},"roots":[{"type":"object","name":"Column","id":"p274058","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p274055","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p274054","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p274047","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p273918"},{"type":"object","name":"PanTool","id":"p273994"}]}},{"type":"object","name":"ToolProxy","id":"p274048","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p273919","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p273995","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p274049","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p273920","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p273921","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p273927","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p273926","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p273996","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p273997","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p274003","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p274002","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p274050","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p273928"},{"type":"object","name":"ResetTool","id":"p274004"}]}},{"type":"object","name":"SaveTool","id":"p274051"},{"type":"object","name":"ToolProxy","id":"p274052","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p273970","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p274053","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p274046","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p273896","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p273897"},"y_range":{"type":"object","name":"DataRange1d","id":"p273898"},"x_scale":{"type":"object","name":"LinearScale","id":"p273906"},"y_scale":{"type":"object","name":"LogScale","id":"p273907"},"title":{"type":"object","name":"Title","id":"p273899","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p273936","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273930","attributes":{"selected":{"type":"object","name":"Selection","id":"p273931","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273932"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vx/3/846Wr7ZVi+k9NfbPC/v////X75s+C07zr3A8235hpL2NsfLht+XT7F///3/fvxaSXuj+cZHB5mv1foAFa7Qjagut68xHbafZf//+XZ2ucSjH9DOjePSWT7QnRn68ttlgRNNn+N9A/0/Mm2XfOnMn57MVE+6f//+8vyqAdfXFxAW9P+gT7X8Bw8k0inr4SuGNfT32//dX//+051vSQTevukHvavbAHGn9ddKd/asTkezZ02X8AhnPJ5A6q01G2XNuNHrbbPwCnszaS6YlfNfa4H2mxvwgM54dVCPpQlci8/JnN0PTSZM+/zt3y9dEGaDw22AMACeBDHigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p273937","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p273938"}}},"glyph":{"type":"object","name":"Line","id":"p273933","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p273934","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p273935","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p273945","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273939","attributes":{"selected":{"type":"object","name":"Selection","id":"p273940","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273941"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vx/3/846Wr7ZVi+k9NfbPC/v////X75s+C07zr3A8235hpL2NsfLht+XT7F///3/fvxaSXuj+cZHB5mv1foAFa7Qjagut68xHbafZf//+XZ2ucSjH9DOjePSWT7QnRn68ttlgRNNn+N9A/0/Mm2XfOnMn57MVE+6f//+8vyqAdfXFxAW9P+gT7X8Bw8k0inr4SuGNfT32//dX//+051vSQTevukHvavbAHGn9ddKd/asTkezZ02X8AhnPJ5A6q01G2XNuNHrbbPwCnszaS6YlfNfa4H2mxvwgM54dVCPpQlci8/JnN0PTSZM+/zt3y9dEGaDw22AMACeBDHigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p273946","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p273947"}}},"glyph":{"type":"object","name":"Line","id":"p273942","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p273943","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p273944","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p273956","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273950","attributes":{"selected":{"type":"object","name":"Selection","id":"p273951","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273952"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SW0hUYRSFIyQkjBIKsUAszKbreGmamspZcztzccaZc86cSy9hRUhBBBFSIr6IRJQvISH5ICFdkRAfCpHBJ0FCpEAQkbAHGQa7PUiEldH//67NgsO5/Xvtb+2h8pUn5SurwSF1/R28ve2oUBk277fjUt9ce9/cLmw+3417qqr4fi/e3Jeq4Xe1+DLdvTrdfYDf1+GftrihLR7kf4dQOeMTOsz/j6Au+UjoGM85Af/770JenteA589kNfLcJjQUTW/RbOb5JzFRv1XIxz4+RDrGwh1jp9jPj9kXF4VOs+8ZOKUKu1QRYP8APnsmlz2TZ+njHK5fk3Weflqw9qpKKEhfQbT8vCwE+gN69wSEQvQZghqvMky/YewQ3exSmL4jMDqn9M6pCP1H8VhVlHPEsPT2hlCM88SwfyFauxDVOJeGq7/2CcU5Xxyvpb21OOdM4IcCmOC8STS7T4WSnDuFu3dkpTh/CoXBrFArObRC0pyoT5NHGgkZ30aaXDJ4uD7/YH0+Qz5t+Fg9+qF6tI2cslA4erPklcVxVTlyy0F2KwzmyC+HW5kyIZ0cdQx8uimkk6eOdxLHkk6uBpQdzSBfA3/7x//0jxvkbKBGlUneJkJqQU1yN3FFBWiSfx5qvdvzzCGPl3JdZvPMw4JaR7/FXCx86xn52jNiMR8LO1XZzMlG03BX43CXzbxs5MW2eos2c3Og4tcd5udA4S84zNGB3MZlj8s8XSgcAy5zdbFF1QX8B54QHcK4AwAA"},"shape":[119],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vx/3/846Wr7f///1+/b/4sDPr7///zZ86caf/i///7/r3TCdJ/gQZptU+zx0V//f9fnq1xqj216WdAf+wpmWxPKv0b6O/peZPsYfTT///3F2VMtKc3/QsYvr5JE+wppa/+/2/PsabHnto0JH10QdPH4KE/AOOrZHKHPb3oB+D03WZPKX0RGE8Pq1rscdGQ9NgETZdN0HTRAKcBQswqlLgDAAA="},"shape":[119],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p273957","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p273958"}}},"glyph":{"type":"object","name":"Line","id":"p273953","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p273954","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p273955","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p273966","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273960","attributes":{"selected":{"type":"object","name":"Selection","id":"p273961","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273962"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p273967","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p273968"}}},"glyph":{"type":"object","name":"Line","id":"p273963","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p273964","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p273965","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p273905","attributes":{"tools":[{"id":"p273918"},{"id":"p273919"},{"id":"p273920"},{"id":"p273928"},{"type":"object","name":"SaveTool","id":"p273929"},{"id":"p273970"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p273913","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p273914","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p273915"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p273916"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p273908","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p273909","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p273910"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p273911"}}}],"center":[{"type":"object","name":"Grid","id":"p273912","attributes":{"axis":{"id":"p273908"}}},{"type":"object","name":"Grid","id":"p273917","attributes":{"dimension":1,"axis":{"id":"p273913"}}},{"type":"object","name":"Legend","id":"p273948","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p273949","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p273945"}]}},{"type":"object","name":"LegendItem","id":"p273959","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p273956"}]}},{"type":"object","name":"LegendItem","id":"p273969","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p273966"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p273971","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p273981","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p273973"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p273982"},"y_scale":{"type":"object","name":"LinearScale","id":"p273983"},"title":{"type":"object","name":"Title","id":"p273974","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p274012","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p274006","attributes":{"selected":{"type":"object","name":"Selection","id":"p274007","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p274008"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD/3i///7/r3T7f87cjRumTPF/nT1e9sZDL32c1et8pp4YqJ9eFpa2kvndnuYORf//7d/WNViDwCSC7wjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p274013","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p274014"}}},"glyph":{"type":"object","name":"Line","id":"p274009","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p274010","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p274011","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p274021","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p274015","attributes":{"selected":{"type":"object","name":"Selection","id":"p274016","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p274017"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD/3i///7/r3T7f87cjRumTPF/nT1e9sZDL32c1et8pp4YqJ9eFpa2kvndnuYORf//7d/WNViDwCSC7wjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p274022","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p274023"}}},"glyph":{"type":"object","name":"Line","id":"p274018","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p274019","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p274020","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p274032","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p274026","attributes":{"selected":{"type":"object","name":"Selection","id":"p274027","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p274028"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD/3i///7/r3T7f87cjRumTPF/nT1e9sZDL32c1et8pp4YqJ9eFpa2kvndnuYORf//7d/WNViDwCSC7wjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p274033","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p274034"}}},"glyph":{"type":"object","name":"Line","id":"p274029","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p274030","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p274031","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p274042","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p274036","attributes":{"selected":{"type":"object","name":"Selection","id":"p274037","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p274038"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p274043","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p274044"}}},"glyph":{"type":"object","name":"Line","id":"p274039","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p274040","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p274041","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p273980","attributes":{"tools":[{"id":"p273994"},{"id":"p273995"},{"id":"p273996"},{"id":"p274004"},{"type":"object","name":"SaveTool","id":"p274005"},{"id":"p274046"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p273989","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p273990","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p273991"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p273992"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p273984","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p273985"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p273986"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p273987"}}}],"center":[{"type":"object","name":"Grid","id":"p273988","attributes":{"axis":{"id":"p273984"}}},{"type":"object","name":"Grid","id":"p273993","attributes":{"dimension":1,"axis":{"id":"p273989"}}},{"type":"object","name":"Legend","id":"p274024","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p274025","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p274021"}]}},{"type":"object","name":"LegendItem","id":"p274035","attributes":{"label":{"type":"value","value":"Median Year (1977)"},"renderers":[{"id":"p274032"}]}},{"type":"object","name":"LegendItem","id":"p274045","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p274042"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p274057","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"f9a3b79f-175f-4eaf-8b9f-54e1998a8258","roots":{"p274058":"bd334ed9-a802-400d-bb91-e20ec788d746"},"root_ids":["p274058"]}];
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