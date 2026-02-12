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
    
    
    const element = document.getElementById("f7e97719-7e5a-4b48-af36-c74f4dd07cfb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f7e97719-7e5a-4b48-af36-c74f4dd07cfb' but no matching script tag was found.")
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
                  const docs_json = '{"e85309cb-add0-45e4-9e33-276223a2694a":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p771972","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p771973"}}},"roots":[{"type":"object","name":"Column","id":"p772154","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p772151","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p772150","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p772143","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p771996"},{"type":"object","name":"PanTool","id":"p772081"}]}},{"type":"object","name":"ToolProxy","id":"p772144","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p771997","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p772082","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p772145","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p771998","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p771999","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p772005","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p772004","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p772083","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p772084","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p772090","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p772089","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p772146","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p772006"},{"type":"object","name":"ResetTool","id":"p772091"}]}},{"type":"object","name":"SaveTool","id":"p772147"},{"type":"object","name":"ToolProxy","id":"p772148","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p772057","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p772149","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p772142","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p771974","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p771975"},"y_range":{"type":"object","name":"DataRange1d","id":"p771976"},"x_scale":{"type":"object","name":"LinearScale","id":"p771984"},"y_scale":{"type":"object","name":"LogScale","id":"p771985"},"title":{"type":"object","name":"Title","id":"p771977","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p772014","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p772008","attributes":{"selected":{"type":"object","name":"Selection","id":"p772009","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p772010"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QG+19Q+r1GzPkbTg32S6pE/OIdq+yn//9v/7CqhGiaIy1tG6tQib0g1/XV9r8LoeYWkE1vO3OmR1cx397Klit84ecs+23//+8vmZwxStOZPnNtscd/lnR7GWNj5eLrSdD4SSCaDpo5s1A1IsZ+S2qaGO/fYHthsHjAkKEBLnW4MSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p772015","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p772016"}}},"glyph":{"type":"object","name":"Line","id":"p772011","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p772012","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p772013","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p772023","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p772017","attributes":{"selected":{"type":"object","name":"Selection","id":"p772018","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p772019"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xP+//++b1KAvfAoPUqP0jhpAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p772024","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p772025"}}},"glyph":{"type":"object","name":"Line","id":"p772020","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p772021","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p772022","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p772032","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p772026","attributes":{"selected":{"type":"object","name":"Selection","id":"p772027","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p772028"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7vz///s6XlF9neg9EWNmG4l/yL7zCqRY58i8+xj/v/fXjI5g2j6bGqa3kytDPtrnNeVLwun2e///z/8YVUK2bRCWpqd1spk+yS5VuWUSYn2C/7/v+6blDBK05kOu7bYQs0s3n6ZkbHwLI5o+5b//8+XTI4gmjY6c2aFZWyYfYqRcfVa/SB74f//7/smBQwZGgDeDdIZKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p772033","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p772034"}}},"glyph":{"type":"object","name":"Line","id":"p772029","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p772030","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p772031","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p772043","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p772037","attributes":{"selected":{"type":"object","name":"Selection","id":"p772038","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p772039"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2QP0hCYRTF2wwajBwMgoIgEYRXFD2U4nnUXvXKf+/5/ujQ5lhbbW61KTQ0ODQEjY6ObrYZNDg0OASNjY6O+d3v3OXx3Xvuuef3rMXvY9xa5C35rmJ/9PfeNTag35uomrP2S2Wb/V3I09zjPA07eXM/tTPUGRhIHVB/iOEk9Xo7POLeMaQ9MrmfxUdspzMf5+hzgk8ln5zSz8JUBnn6AndiWKB/EfOxMijyTgkPsnDGezY0ns275+jIwgXvX2JFymEOB09xNblinmtIO1ZmrjJ6hnKqMF8V62JUY86a1jl15q2jq/RrLnO7eu/LZX5P7z975PC0j9sgTwNLiFk74ZPLRxgs69snXwCJ2Q/IGUDarZC8IVTq1FZE7ghKnvyJyN+E4L01+R9a+Acif79cEAIAAA=="},"shape":[66],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QG++n//9s/rCrBSf8CqysgSG/7/39/yeSMIU9D/JOAkxYG0wHDjgYAT7gDRRACAAA="},"shape":[66],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p772044","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p772045"}}},"glyph":{"type":"object","name":"Line","id":"p772040","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p772041","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p772042","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p772053","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p772047","attributes":{"selected":{"type":"object","name":"Selection","id":"p772048","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p772049"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p772054","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p772055"}}},"glyph":{"type":"object","name":"Line","id":"p772050","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p772051","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p772052","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p771983","attributes":{"tools":[{"id":"p771996"},{"id":"p771997"},{"id":"p771998"},{"id":"p772006"},{"type":"object","name":"SaveTool","id":"p772007"},{"id":"p772057"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p771991","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p771992","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p771993"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p771994"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p771986","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p771987","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p771988"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p771989"}}}],"center":[{"type":"object","name":"Grid","id":"p771990","attributes":{"axis":{"id":"p771986"}}},{"type":"object","name":"Grid","id":"p771995","attributes":{"dimension":1,"axis":{"id":"p771991"}}},{"type":"object","name":"Legend","id":"p772035","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p772036","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p772032"}]}},{"type":"object","name":"LegendItem","id":"p772046","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p772043"}]}},{"type":"object","name":"LegendItem","id":"p772056","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p772053"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p772058","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p772068","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p772060"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p772069"},"y_scale":{"type":"object","name":"LinearScale","id":"p772070"},"title":{"type":"object","name":"Title","id":"p772061","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p772099","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p772093","attributes":{"selected":{"type":"object","name":"Selection","id":"p772094","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p772095"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46CvNAkymXTn2x5Q9J9XuDLKHiR/4/9/+94dMewYC+gFHPaGlYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p772100","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p772101"}}},"glyph":{"type":"object","name":"Line","id":"p772096","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p772097","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p772098","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p772108","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p772102","attributes":{"selected":{"type":"object","name":"Selection","id":"p772103","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p772104"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0sL//9/3TQqwx8VHpwHIebMUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p772109","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p772110"}}},"glyph":{"type":"object","name":"Line","id":"p772105","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p772106","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p772107","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p772117","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p772111","attributes":{"selected":{"type":"object","name":"Selection","id":"p772112","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p772113"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46CvNAkymXTn2x5Q9J9XuDLIX/v//vm9SgP2B///tf3/IhPNx6QcAJtwRpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p772118","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p772119"}}},"glyph":{"type":"object","name":"Line","id":"p772114","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p772115","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p772116","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p772128","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p772122","attributes":{"selected":{"type":"object","name":"Selection","id":"p772123","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p772124"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46CvNAkymXTn2x5Q9J9XuDLKHiR/4/9/+94dMewYC+gFHPaGlYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p772129","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p772130"}}},"glyph":{"type":"object","name":"Line","id":"p772125","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p772126","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p772127","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p772138","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p772132","attributes":{"selected":{"type":"object","name":"Selection","id":"p772133","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p772134"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p772139","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p772140"}}},"glyph":{"type":"object","name":"Line","id":"p772135","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p772136","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p772137","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p772067","attributes":{"tools":[{"id":"p772081"},{"id":"p772082"},{"id":"p772083"},{"id":"p772091"},{"type":"object","name":"SaveTool","id":"p772092"},{"id":"p772142"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p772076","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p772077","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p772078"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p772079"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p772071","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p772072"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p772073"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p772074"}}}],"center":[{"type":"object","name":"Grid","id":"p772075","attributes":{"axis":{"id":"p772071"}}},{"type":"object","name":"Grid","id":"p772080","attributes":{"dimension":1,"axis":{"id":"p772076"}}},{"type":"object","name":"Legend","id":"p772120","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p772121","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p772117"}]}},{"type":"object","name":"LegendItem","id":"p772131","attributes":{"label":{"type":"value","value":"Median Year (1960)"},"renderers":[{"id":"p772128"}]}},{"type":"object","name":"LegendItem","id":"p772141","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p772138"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p772153","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"e85309cb-add0-45e4-9e33-276223a2694a","roots":{"p772154":"f7e97719-7e5a-4b48-af36-c74f4dd07cfb"},"root_ids":["p772154"]}];
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