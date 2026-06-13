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
    
    
    const element = document.getElementById("f4b36015-1812-4a77-b022-3333c74640ab");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f4b36015-1812-4a77-b022-3333c74640ab' but no matching script tag was found.")
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
                  const docs_json = '{"022fda4b-d26d-42a7-b9a9-ced3043b9902":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p273884","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p273885"}}},"roots":[{"type":"object","name":"Column","id":"p274048","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p274045","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p274044","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p274037","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p273908"},{"type":"object","name":"PanTool","id":"p273984"}]}},{"type":"object","name":"ToolProxy","id":"p274038","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p273909","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p273985","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p274039","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p273910","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p273911","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p273917","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p273916","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p273986","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p273987","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p273993","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p273992","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p274040","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p273918"},{"type":"object","name":"ResetTool","id":"p273994"}]}},{"type":"object","name":"SaveTool","id":"p274041"},{"type":"object","name":"ToolProxy","id":"p274042","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p273960","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p274043","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p274036","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p273886","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p273887"},"y_range":{"type":"object","name":"DataRange1d","id":"p273888"},"x_scale":{"type":"object","name":"LinearScale","id":"p273896"},"y_scale":{"type":"object","name":"LogScale","id":"p273897"},"title":{"type":"object","name":"Title","id":"p273889","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p273926","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273920","attributes":{"selected":{"type":"object","name":"Selection","id":"p273921","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273922"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vx/3/846Wr7ZVi+k9NfbPC/v////X75s+C07zr3A8235hpL2NsfLht+XT7F///3/fvxaSXuj+cZHB5mv1foAFa7Qjagut68xHbafZf//+XZ2ucSjH9DOjePSWT7QnRn68ttlgRNNn+N9A/0/Mm2XfOnMn57MVE+6f//+8vyqAdfXFxAW9P+gT7X8Bw8k0inr4SuGNfT32//dX//+051vSQTevukHvavbAHGn9ddKd/asTkezZ02X8AhnPJ5A6q01G2XNuNHrbbPwCnszaS6YlfNfa4H2mxvwgM54dVCPpQlci8/JnN0PTSZM+/zt3y9dEGaDw22AMACeBDHigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p273927","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p273928"}}},"glyph":{"type":"object","name":"Line","id":"p273923","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p273924","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p273925","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p273935","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273929","attributes":{"selected":{"type":"object","name":"Selection","id":"p273930","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273931"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vx/3/846Wr7ZVi+k9NfbPC/v////X75s+C07zr3A8235hpL2NsfLht+XT7F///3/fvxaSXuj+cZHB5mv1foAFa7Qjagut68xHbafZf//+XZ2ucSjH9DOjePSWT7QnRn68ttlgRNNn+N9A/0/Mm2XfOnMn57MVE+6f//+8vyqAdfXFxAW9P+gT7X8Bw8k0inr4SuGNfT32//dX//+051vSQTevukHvavbAHGn9ddKd/asTkezZ02X8AhnPJ5A6q01G2XNuNHrbbPwCnszaS6YlfNfa4H2mxvwgM54dVCPpQlci8/JnN0PTSZM+/zt3y9dEGaDw22AMACeBDHigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p273936","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p273937"}}},"glyph":{"type":"object","name":"Line","id":"p273932","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p273933","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p273934","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p273946","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273940","attributes":{"selected":{"type":"object","name":"Selection","id":"p273941","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273942"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SW0hUYRSFIyQkjBIKsUAszKbreGmamspZcztzccaZc86cSy9hRUhBBBFSIr6IRJQvISH5ICFdkRAfCpHBJ0FCpEAQkbAHGQa7PUiEldH//67NgsO5/Xvtb+2h8pUn5SurwSF1/R28ve2oUBk277fjUt9ce9/cLmw+3417qqr4fi/e3Jeq4Xe1+DLdvTrdfYDf1+GftrihLR7kf4dQOeMTOsz/j6Au+UjoGM85Af/770JenteA589kNfLcJjQUTW/RbOb5JzFRv1XIxz4+RDrGwh1jp9jPj9kXF4VOs+8ZOKUKu1QRYP8APnsmlz2TZ+njHK5fk3Weflqw9qpKKEhfQbT8vCwE+gN69wSEQvQZghqvMky/YewQ3exSmL4jMDqn9M6pCP1H8VhVlHPEsPT2hlCM88SwfyFauxDVOJeGq7/2CcU5Xxyvpb21OOdM4IcCmOC8STS7T4WSnDuFu3dkpTh/CoXBrFArObRC0pyoT5NHGgkZ30aaXDJ4uD7/YH0+Qz5t+Fg9+qF6tI2cslA4erPklcVxVTlyy0F2KwzmyC+HW5kyIZ0cdQx8uimkk6eOdxLHkk6uBpQdzSBfA3/7x//0jxvkbKBGlUneJkJqQU1yN3FFBWiSfx5qvdvzzCGPl3JdZvPMw4JaR7/FXCx86xn52jNiMR8LO1XZzMlG03BX43CXzbxs5MW2eos2c3Og4tcd5udA4S84zNGB3MZlj8s8XSgcAy5zdbFF1QX8B54QHcK4AwAA"},"shape":[119],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vx/3/846Wr7f///1+/b/4sDPr7///zZ86caf/i///7/r3TCdJ/gQZptU+zx0V//f9fnq1xqj216WdAf+wpmWxPKv0b6O/peZPsYfTT///3F2VMtKc3/QsYvr5JE+wppa/+/2/PsabHnto0JH10QdPH4KE/AOOrZHKHPb3oB+D03WZPKX0RGE8Pq1rscdGQ9NgETZdN0HTRAKcBQswqlLgDAAA="},"shape":[119],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p273947","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p273948"}}},"glyph":{"type":"object","name":"Line","id":"p273943","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p273944","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p273945","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p273956","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273950","attributes":{"selected":{"type":"object","name":"Selection","id":"p273951","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273952"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p273957","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p273958"}}},"glyph":{"type":"object","name":"Line","id":"p273953","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p273954","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p273955","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p273895","attributes":{"tools":[{"id":"p273908"},{"id":"p273909"},{"id":"p273910"},{"id":"p273918"},{"type":"object","name":"SaveTool","id":"p273919"},{"id":"p273960"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p273903","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p273904","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p273905"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p273906"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p273898","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p273899","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p273900"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p273901"}}}],"center":[{"type":"object","name":"Grid","id":"p273902","attributes":{"axis":{"id":"p273898"}}},{"type":"object","name":"Grid","id":"p273907","attributes":{"dimension":1,"axis":{"id":"p273903"}}},{"type":"object","name":"Legend","id":"p273938","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p273939","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p273935"}]}},{"type":"object","name":"LegendItem","id":"p273949","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p273946"}]}},{"type":"object","name":"LegendItem","id":"p273959","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p273956"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p273961","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p273971","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p273963"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p273972"},"y_scale":{"type":"object","name":"LinearScale","id":"p273973"},"title":{"type":"object","name":"Title","id":"p273964","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p274002","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p273996","attributes":{"selected":{"type":"object","name":"Selection","id":"p273997","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p273998"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD/3i///7/r3T7f87cjRumTPF/nT1e9sZDL32c1et8pp4YqJ9eFpa2kvndnuYORf//7d/WNViDwCSC7wjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p274003","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p274004"}}},"glyph":{"type":"object","name":"Line","id":"p273999","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p274000","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p274001","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p274011","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p274005","attributes":{"selected":{"type":"object","name":"Selection","id":"p274006","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p274007"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD/3i///7/r3T7f87cjRumTPF/nT1e9sZDL32c1et8pp4YqJ9eFpa2kvndnuYORf//7d/WNViDwCSC7wjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p274012","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p274013"}}},"glyph":{"type":"object","name":"Line","id":"p274008","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p274009","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p274010","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p274022","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p274016","attributes":{"selected":{"type":"object","name":"Selection","id":"p274017","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p274018"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD/3i///7/r3T7f87cjRumTPF/nT1e9sZDL32c1et8pp4YqJ9eFpa2kvndnuYORf//7d/WNViDwCSC7wjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p274023","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p274024"}}},"glyph":{"type":"object","name":"Line","id":"p274019","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p274020","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p274021","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p274032","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p274026","attributes":{"selected":{"type":"object","name":"Selection","id":"p274027","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p274028"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p274033","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p274034"}}},"glyph":{"type":"object","name":"Line","id":"p274029","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p274030","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p274031","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p273970","attributes":{"tools":[{"id":"p273984"},{"id":"p273985"},{"id":"p273986"},{"id":"p273994"},{"type":"object","name":"SaveTool","id":"p273995"},{"id":"p274036"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p273979","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p273980","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p273981"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p273982"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p273974","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p273975"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p273976"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p273977"}}}],"center":[{"type":"object","name":"Grid","id":"p273978","attributes":{"axis":{"id":"p273974"}}},{"type":"object","name":"Grid","id":"p273983","attributes":{"dimension":1,"axis":{"id":"p273979"}}},{"type":"object","name":"Legend","id":"p274014","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p274015","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p274011"}]}},{"type":"object","name":"LegendItem","id":"p274025","attributes":{"label":{"type":"value","value":"Median Year (1977)"},"renderers":[{"id":"p274022"}]}},{"type":"object","name":"LegendItem","id":"p274035","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p274032"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p274047","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"022fda4b-d26d-42a7-b9a9-ced3043b9902","roots":{"p274048":"f4b36015-1812-4a77-b022-3333c74640ab"},"root_ids":["p274048"]}];
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