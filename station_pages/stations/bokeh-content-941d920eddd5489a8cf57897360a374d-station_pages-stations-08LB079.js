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
    
    
    const element = document.getElementById("ecef25e6-dfb6-4858-aede-6b235357294c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ecef25e6-dfb6-4858-aede-6b235357294c' but no matching script tag was found.")
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
                  const docs_json = '{"e13bb79a-1b68-4ec7-a266-82d1a0ff407f":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p470184","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p470185"}}},"roots":[{"type":"object","name":"Column","id":"p470348","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p470345","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p470344","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p470337","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p470208"},{"type":"object","name":"PanTool","id":"p470284"}]}},{"type":"object","name":"ToolProxy","id":"p470338","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p470209","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p470285","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p470339","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p470210","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p470211","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p470217","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p470216","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p470286","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p470287","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p470293","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p470292","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p470340","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p470218"},{"type":"object","name":"ResetTool","id":"p470294"}]}},{"type":"object","name":"SaveTool","id":"p470341"},{"type":"object","name":"ToolProxy","id":"p470342","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p470260","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p470343","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p470336","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p470186","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p470187"},"y_range":{"type":"object","name":"DataRange1d","id":"p470188"},"x_scale":{"type":"object","name":"LinearScale","id":"p470196"},"y_scale":{"type":"object","name":"LogScale","id":"p470197"},"title":{"type":"object","name":"Title","id":"p470189","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p470226","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470220","attributes":{"selected":{"type":"object","name":"Selection","id":"p470221","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470222"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vx/3/846Wr7ZVi+k9NfbPC/v////X75s+C07zr3A8235hpL2NsfLht+XT7F///3/fvxaSXuj+cZHB5mv1foAFa7Qjagut68xHbafZf//+XZ2ucSjH9DOjePSWT7QnRn68ttlgRNNn+N9A/0/Mm2XfOnMn57MVE+6f//+8vyqAdfXFxAW9P+gT7X8Bw8k0inr4SuGNfT32//dX//+051vSQTevukHvavbAHGn9ddKd/asTkezZ02X8AhnPJ5A6q01G2XNuNHrbbPwCnszaS6YlfNfa4H2mxvwgM54dVCPpQlci8/JnN0PTSZM+/zt3y9dEGaDw22AMACeBDHigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470227","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470228"}}},"glyph":{"type":"object","name":"Line","id":"p470223","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470224","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470225","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p470235","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470229","attributes":{"selected":{"type":"object","name":"Selection","id":"p470230","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470231"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vx/3/846Wr7ZVi+k9NfbPC/v////X75s+C07zr3A8235hpL2NsfLht+XT7F///3/fvxaSXuj+cZHB5mv1foAFa7Qjagut68xHbafZf//+XZ2ucSjH9DOjePSWT7QnRn68ttlgRNNn+N9A/0/Mm2XfOnMn57MVE+6f//+8vyqAdfXFxAW9P+gT7X8Bw8k0inr4SuGNfT32//dX//+051vSQTevukHvavbAHGn9ddKd/asTkezZ02X8AhnPJ5A6q01G2XNuNHrbbPwCnszaS6YlfNfa4H2mxvwgM54dVCPpQlci8/JnN0PTSZM+/zt3y9dEGaDw22AMACeBDHigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470236","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470237"}}},"glyph":{"type":"object","name":"Line","id":"p470232","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470233","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p470234","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p470246","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470240","attributes":{"selected":{"type":"object","name":"Selection","id":"p470241","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470242"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/y2SW0hUYRSFIyQkjBIKsUAszKbreGmamspZcztzccaZc86cSy9hRUhBBBFSIr6IRJQvISH5ICFdkRAfCpHBJ0FCpEAQkbAHGQa7PUiEldH//67NgsO5/Xvtb+2h8pUn5SurwSF1/R28ve2oUBk277fjUt9ce9/cLmw+3417qqr4fi/e3Jeq4Xe1+DLdvTrdfYDf1+GftrihLR7kf4dQOeMTOsz/j6Au+UjoGM85Af/770JenteA589kNfLcJjQUTW/RbOb5JzFRv1XIxz4+RDrGwh1jp9jPj9kXF4VOs+8ZOKUKu1QRYP8APnsmlz2TZ+njHK5fk3Weflqw9qpKKEhfQbT8vCwE+gN69wSEQvQZghqvMky/YewQ3exSmL4jMDqn9M6pCP1H8VhVlHPEsPT2hlCM88SwfyFauxDVOJeGq7/2CcU5Xxyvpb21OOdM4IcCmOC8STS7T4WSnDuFu3dkpTh/CoXBrFArObRC0pyoT5NHGgkZ30aaXDJ4uD7/YH0+Qz5t+Fg9+qF6tI2cslA4erPklcVxVTlyy0F2KwzmyC+HW5kyIZ0cdQx8uimkk6eOdxLHkk6uBpQdzSBfA3/7x//0jxvkbKBGlUneJkJqQU1yN3FFBWiSfx5qvdvzzCGPl3JdZvPMw4JaR7/FXCx86xn52jNiMR8LO1XZzMlG03BX43CXzbxs5MW2eos2c3Og4tcd5udA4S84zNGB3MZlj8s8XSgcAy5zdbFF1QX8B54QHcK4AwAA"},"shape":[119],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//vx/3/846Wr7f///1+/b/4sDPr7///zZ86caf/i///7/r3TCdJ/gQZptU+zx0V//f9fnq1xqj216WdAf+wpmWxPKv0b6O/peZPsYfTT///3F2VMtKc3/QsYvr5JE+wppa/+/2/PsabHnto0JH10QdPH4KE/AOOrZHKHPb3oB+D03WZPKX0RGE8Pq1rscdGQ9NgETZdN0HTRAKcBQswqlLgDAAA="},"shape":[119],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470247","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470248"}}},"glyph":{"type":"object","name":"Line","id":"p470243","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470244","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p470245","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p470256","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470250","attributes":{"selected":{"type":"object","name":"Selection","id":"p470251","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470252"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p470257","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470258"}}},"glyph":{"type":"object","name":"Line","id":"p470253","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470254","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470255","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p470195","attributes":{"tools":[{"id":"p470208"},{"id":"p470209"},{"id":"p470210"},{"id":"p470218"},{"type":"object","name":"SaveTool","id":"p470219"},{"id":"p470260"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p470203","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p470204","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p470205"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p470206"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p470198","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p470199","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p470200"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p470201"}}}],"center":[{"type":"object","name":"Grid","id":"p470202","attributes":{"axis":{"id":"p470198"}}},{"type":"object","name":"Grid","id":"p470207","attributes":{"dimension":1,"axis":{"id":"p470203"}}},{"type":"object","name":"Legend","id":"p470238","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p470239","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p470235"}]}},{"type":"object","name":"LegendItem","id":"p470249","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p470246"}]}},{"type":"object","name":"LegendItem","id":"p470259","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p470256"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p470261","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p470271","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p470263"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p470272"},"y_scale":{"type":"object","name":"LinearScale","id":"p470273"},"title":{"type":"object","name":"Title","id":"p470264","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p470302","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470296","attributes":{"selected":{"type":"object","name":"Selection","id":"p470297","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470298"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD/3i///7/r3T7f87cjRumTPF/nT1e9sZDL32c1et8pp4YqJ9eFpa2kvndnuYORf//7d/WNViDwCSC7wjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470303","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470304"}}},"glyph":{"type":"object","name":"Line","id":"p470299","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470300","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470301","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p470311","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470305","attributes":{"selected":{"type":"object","name":"Selection","id":"p470306","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470307"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD/3i///7/r3T7f87cjRumTPF/nT1e9sZDL32c1et8pp4YqJ9eFpa2kvndnuYORf//7d/WNViDwCSC7wjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470312","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470313"}}},"glyph":{"type":"object","name":"Line","id":"p470308","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470309","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p470310","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p470322","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470316","attributes":{"selected":{"type":"object","name":"Selection","id":"p470317","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470318"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKD/3i///7/r3T7f87cjRumTPF/nT1e9sZDL32c1et8pp4YqJ9eFpa2kvndnuYORf//7d/WNViDwCSC7wjYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470323","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470324"}}},"glyph":{"type":"object","name":"Line","id":"p470319","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470320","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p470321","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p470332","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470326","attributes":{"selected":{"type":"object","name":"Selection","id":"p470327","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470328"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p470333","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470334"}}},"glyph":{"type":"object","name":"Line","id":"p470329","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470330","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470331","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p470270","attributes":{"tools":[{"id":"p470284"},{"id":"p470285"},{"id":"p470286"},{"id":"p470294"},{"type":"object","name":"SaveTool","id":"p470295"},{"id":"p470336"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p470279","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p470280","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p470281"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p470282"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p470274","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p470275"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p470276"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p470277"}}}],"center":[{"type":"object","name":"Grid","id":"p470278","attributes":{"axis":{"id":"p470274"}}},{"type":"object","name":"Grid","id":"p470283","attributes":{"dimension":1,"axis":{"id":"p470279"}}},{"type":"object","name":"Legend","id":"p470314","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p470315","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p470311"}]}},{"type":"object","name":"LegendItem","id":"p470325","attributes":{"label":{"type":"value","value":"Median Year (1977)"},"renderers":[{"id":"p470322"}]}},{"type":"object","name":"LegendItem","id":"p470335","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p470332"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p470347","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"e13bb79a-1b68-4ec7-a266-82d1a0ff407f","roots":{"p470348":"ecef25e6-dfb6-4858-aede-6b235357294c"},"root_ids":["p470348"]}];
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