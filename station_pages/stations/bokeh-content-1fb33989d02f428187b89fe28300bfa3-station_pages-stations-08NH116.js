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
    
    
    const element = document.getElementById("cd9ced91-1e4a-409f-93f8-b6fac6dbf070");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cd9ced91-1e4a-409f-93f8-b6fac6dbf070' but no matching script tag was found.")
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
                  const docs_json = '{"8affc562-2ca3-4e7b-a7b9-79ab75b379bb":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p771501","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p771502"}}},"roots":[{"type":"object","name":"Column","id":"p771683","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p771680","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p771679","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p771672","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p771525"},{"type":"object","name":"PanTool","id":"p771610"}]}},{"type":"object","name":"ToolProxy","id":"p771673","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p771526","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p771611","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p771674","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p771527","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p771528","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p771534","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p771533","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p771612","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p771613","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p771619","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p771618","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p771675","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p771535"},{"type":"object","name":"ResetTool","id":"p771620"}]}},{"type":"object","name":"SaveTool","id":"p771676"},{"type":"object","name":"ToolProxy","id":"p771677","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p771586","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p771678","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p771671","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p771503","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p771504"},"y_range":{"type":"object","name":"DataRange1d","id":"p771505"},"x_scale":{"type":"object","name":"LinearScale","id":"p771513"},"y_scale":{"type":"object","name":"LogScale","id":"p771514"},"title":{"type":"object","name":"Title","id":"p771506","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p771543","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771537","attributes":{"selected":{"type":"object","name":"Selection","id":"p771538","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771539"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QG+19Q+r1GzPkbTg32S6pE/OIdq+yn//9v/7CqhGiaIy1tG6tQib0g1/XV9r8LoeYWkE1vO3OmR1cx397Klit84ecs+23//+8vmZwxStOZPnNtscd/lnR7GWNj5eLrSdD4SSCaDpo5s1A1IsZ+S2qaGO/fYHthsHjAkKEBLnW4MSgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771544","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771545"}}},"glyph":{"type":"object","name":"Line","id":"p771540","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771541","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p771542","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p771552","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771546","attributes":{"selected":{"type":"object","name":"Selection","id":"p771547","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771548"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/xP+//++b1KAvfAoPUqP0jhpAKpStlQoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771553","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771554"}}},"glyph":{"type":"object","name":"Line","id":"p771549","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771550","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p771551","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p771561","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771555","attributes":{"selected":{"type":"object","name":"Selection","id":"p771556","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771557"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7vz///s6XlF9neg9EWNmG4l/yL7zCqRY58i8+xj/v/fXjI5g2j6bGqa3kytDPtrnNeVLwun2e///z/8YVUK2bRCWpqd1spk+yS5VuWUSYn2C/7/v+6blDBK05kOu7bYQs0s3n6ZkbHwLI5o+5b//8+XTI4gmjY6c2aFZWyYfYqRcfVa/SB74f//7/smBQwZGgDeDdIZKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771562","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771563"}}},"glyph":{"type":"object","name":"Line","id":"p771558","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771559","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p771560","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p771572","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771566","attributes":{"selected":{"type":"object","name":"Selection","id":"p771567","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771568"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2QP0hCYRTF2wwajBwMgoIgEYRXFD2U4nnUXvXKf+/5/ujQ5lhbbW61KTQ0ODQEjY6ObrYZNDg0OASNjY6O+d3v3OXx3Xvuuef3rMXvY9xa5C35rmJ/9PfeNTag35uomrP2S2Wb/V3I09zjPA07eXM/tTPUGRhIHVB/iOEk9Xo7POLeMaQ9MrmfxUdspzMf5+hzgk8ln5zSz8JUBnn6AndiWKB/EfOxMijyTgkPsnDGezY0ns275+jIwgXvX2JFymEOB09xNblinmtIO1ZmrjJ6hnKqMF8V62JUY86a1jl15q2jq/RrLnO7eu/LZX5P7z975PC0j9sgTwNLiFk74ZPLRxgs69snXwCJ2Q/IGUDarZC8IVTq1FZE7ghKnvyJyN+E4L01+R9a+Acif79cEAIAAA=="},"shape":[66],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v1//9936QG++n//9s/rCrBSf8CqysgSG/7/39/yeSMIU9D/JOAkxYG0wHDjgYAT7gDRRACAAA="},"shape":[66],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771573","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771574"}}},"glyph":{"type":"object","name":"Line","id":"p771569","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771570","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p771571","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p771582","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771576","attributes":{"selected":{"type":"object","name":"Selection","id":"p771577","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771578"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p771583","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771584"}}},"glyph":{"type":"object","name":"Line","id":"p771579","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771580","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p771581","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p771512","attributes":{"tools":[{"id":"p771525"},{"id":"p771526"},{"id":"p771527"},{"id":"p771535"},{"type":"object","name":"SaveTool","id":"p771536"},{"id":"p771586"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p771520","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p771521","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p771522"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p771523"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p771515","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p771516","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p771517"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p771518"}}}],"center":[{"type":"object","name":"Grid","id":"p771519","attributes":{"axis":{"id":"p771515"}}},{"type":"object","name":"Grid","id":"p771524","attributes":{"dimension":1,"axis":{"id":"p771520"}}},{"type":"object","name":"Legend","id":"p771564","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p771565","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p771561"}]}},{"type":"object","name":"LegendItem","id":"p771575","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p771572"}]}},{"type":"object","name":"LegendItem","id":"p771585","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p771582"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p771587","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p771597","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p771589"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p771598"},"y_scale":{"type":"object","name":"LinearScale","id":"p771599"},"title":{"type":"object","name":"Title","id":"p771590","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p771628","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771622","attributes":{"selected":{"type":"object","name":"Selection","id":"p771623","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771624"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46CvNAkymXTn2x5Q9J9XuDLKHiR/4/9/+94dMewYC+gFHPaGlYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771629","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771630"}}},"glyph":{"type":"object","name":"Line","id":"p771625","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771626","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p771627","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p771637","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771631","attributes":{"selected":{"type":"object","name":"Selection","id":"p771632","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771633"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0sL//9/3TQqwx8VHpwHIebMUYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771638","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771639"}}},"glyph":{"type":"object","name":"Line","id":"p771634","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771635","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p771636","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p771646","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771640","attributes":{"selected":{"type":"object","name":"Selection","id":"p771641","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771642"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46CvNAkymXTn2x5Q9J9XuDLIX/v//vm9SgP2B///tf3/IhPNx6QcAJtwRpWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771647","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771648"}}},"glyph":{"type":"object","name":"Line","id":"p771643","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771644","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p771645","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p771657","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771651","attributes":{"selected":{"type":"object","name":"Selection","id":"p771652","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771653"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46CvNAkymXTn2x5Q9J9XuDLKHiR/4/9/+94dMewYC+gFHPaGlYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p771658","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771659"}}},"glyph":{"type":"object","name":"Line","id":"p771654","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771655","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p771656","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p771667","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p771661","attributes":{"selected":{"type":"object","name":"Selection","id":"p771662","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p771663"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p771668","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p771669"}}},"glyph":{"type":"object","name":"Line","id":"p771664","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p771665","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p771666","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p771596","attributes":{"tools":[{"id":"p771610"},{"id":"p771611"},{"id":"p771612"},{"id":"p771620"},{"type":"object","name":"SaveTool","id":"p771621"},{"id":"p771671"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p771605","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p771606","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p771607"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p771608"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p771600","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p771601"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p771602"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p771603"}}}],"center":[{"type":"object","name":"Grid","id":"p771604","attributes":{"axis":{"id":"p771600"}}},{"type":"object","name":"Grid","id":"p771609","attributes":{"dimension":1,"axis":{"id":"p771605"}}},{"type":"object","name":"Legend","id":"p771649","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p771650","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p771646"}]}},{"type":"object","name":"LegendItem","id":"p771660","attributes":{"label":{"type":"value","value":"Median Year (1960)"},"renderers":[{"id":"p771657"}]}},{"type":"object","name":"LegendItem","id":"p771670","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p771667"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p771682","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"8affc562-2ca3-4e7b-a7b9-79ab75b379bb","roots":{"p771683":"cd9ced91-1e4a-409f-93f8-b6fac6dbf070"},"root_ids":["p771683"]}];
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