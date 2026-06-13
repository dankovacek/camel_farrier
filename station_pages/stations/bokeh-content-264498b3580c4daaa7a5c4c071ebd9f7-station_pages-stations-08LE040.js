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
    
    
    const element = document.getElementById("c27e52e9-e795-49ff-ad75-94455d501928");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c27e52e9-e795-49ff-ad75-94455d501928' but no matching script tag was found.")
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
                  const docs_json = '{"4467b1be-ef76-4315-bb69-289996aa3d7a":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p303026","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p303027"}}},"roots":[{"type":"object","name":"Column","id":"p303199","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p303196","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p303195","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p303188","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p303050"},{"type":"object","name":"PanTool","id":"p303126"}]}},{"type":"object","name":"ToolProxy","id":"p303189","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p303051","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p303127","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p303190","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p303052","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p303053","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p303059","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p303058","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p303128","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p303129","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p303135","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p303134","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p303191","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p303060"},{"type":"object","name":"ResetTool","id":"p303136"}]}},{"type":"object","name":"SaveTool","id":"p303192"},{"type":"object","name":"ToolProxy","id":"p303193","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p303102","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p303194","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p303187","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p303028","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p303029"},"y_range":{"type":"object","name":"DataRange1d","id":"p303030"},"x_scale":{"type":"object","name":"LinearScale","id":"p303038"},"y_scale":{"type":"object","name":"LogScale","id":"p303039"},"title":{"type":"object","name":"Title","id":"p303031","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p303068","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303062","attributes":{"selected":{"type":"object","name":"Selection","id":"p303063","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303064"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAwNpZxYIDSaWlpx7I5ZRxmzZw50+uVpMPZM2dyNE+Lg+U51ogC1Ror93gJOwDVPXvALeDg8bDKZMICLociW67phuXsIHUH5FpZ4XTr68AKWy5Wh2qRdewMDCxQcWY4vUOuVbuuh9HB7WFVyacNf+wnHPrKsc79p32NyDp1Y+Pv9kB3WG77/NUeaI+I/Jcv9kBnVdZc+GwPtF/NZ9kne1uu64d/zv5gD7L38983OOlXgTvudS98A9K37IXHK/tHVSJ+Qeov7GP7D5na7H0G0pfQf+gpnD5x5kzP39TH9pIx/UwWLbdA4g05zy/D6b1yrbs5Hl60zwGGwzybM2B9AhEn4XS+LZf5Yd4T9o2vAyVWGhyz//f/f3z/oaM46deBO+o0uI6A9fPpHhrMdMOnDQfss9PS2ua07rU/+FVjz93I3faXFhfMPVyz0/4Z0B8r52+3/w3271acdOuhrxmH9LfaGwDTU1/pRvu////Pl9JfSzbttENu6Rm2lfa6xsaXrf0W2n/6/9+eY80cqtEAUy5pFigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303069","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303070"}}},"glyph":{"type":"object","name":"Line","id":"p303065","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303066","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303067","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303077","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303071","attributes":{"selected":{"type":"object","name":"Selection","id":"p303072","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303073"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAwNpZxYIDSaWlpx7I5ZRxmzZw50+uVpMPZM2dyNE+Lg+U51ogC1Ror93gJOwDVPXvALeDg8bDKZMICLociW67phuXsIHUH5FpZ4XTr68AKWy5Wh2qRdewMDCxQcWY4vUOuVbuuh9HB7WFVyacNf+wnHPrKsc79p32NyDp1Y+Pv9kB3WG77/NUeaI+I/Jcv9kBnVdZc+GwPtF/NZ9kne1uu64d/zv5gD7L38983OOlXgTvudS98A9K37IXHK/tHVSJ+Qeov7GP7D5na7H0G0pfQf+gpnD5x5kzP39TH9pIx/UwWLbdA4g05zy/D6b1yrbs5Hl60zwGGwzybM2B9AhEn4XS+LZf5Yd4T9o2vAyVWGhyz//f/f3z/oaM46deBO+o0uI6A9fPpHhrMdMOnDQfss9PS2ua07rU/+FVjz93I3faXFhfMPVyz0/4Z0B8r52+3/w3271acdOuhrxmH9LfaGwDTU1/pRvu////Pl9JfSzbttENu6Rm2lfa6xsaXrf0W2n/6/9+eY80cqtEAUy5pFigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303078","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303079"}}},"glyph":{"type":"object","name":"Line","id":"p303074","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303075","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p303076","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p303088","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303082","attributes":{"selected":{"type":"object","name":"Selection","id":"p303083","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303084"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xO65Z2hv/CvvRCY5nXoe2wBRGIOEL6sgw9QdG+LElRczeFCnFM151tNqLyuwyowMICqM3J4q7pl+oU4E6h6MweQ7m9CFlB9lg5FMscLZY5bQ/XbOoBUO1XbQ81xcAAaDjTBEWqek4MsSHmhM9RcF4d9QNNuebtCzXdziAc5R9Udao+HAwMYeELt83RYBLL+lhfUXm8HsPItPlD7fR2egLzb5wd1hz9E3iQA6p4AB2FQuCgGQt0V6AAOHr4gqPuCIPp+B0HdGezQCnLei2Coe0McwkKB4GoI1N2hDmogDx8Khbo/zOE7KKDXh0H9Ee4A9u6ccKh/IhxmgIKnMwLqr0gHAFcVN9KwAQAA"},"shape":[54],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAwNpZxYGBgSNghJwGiG2y5RED0gpkzuUH0AblWVjSaGcoH0w8Cd/yyh9DfQPSBM2e+gGiFmP5PYP7nv2+w0Q4Pq16AxBP6Dz2F0////7/v33sdxG/IeX4ZmU4QiDgJVgei//3/H99/6ChOGqSOT/cQWD01aZC9E9/ugbpjp/1vsDu2YtB///+fL6W/1p4Q/en/f3uONXPsiaUBzZaK6LABAAA="},"shape":[54],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303089","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303090"}}},"glyph":{"type":"object","name":"Line","id":"p303085","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303086","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p303087","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p303098","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303092","attributes":{"selected":{"type":"object","name":"Selection","id":"p303093","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303094"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p303099","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303100"}}},"glyph":{"type":"object","name":"Line","id":"p303095","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303096","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303097","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p303037","attributes":{"tools":[{"id":"p303050"},{"id":"p303051"},{"id":"p303052"},{"id":"p303060"},{"type":"object","name":"SaveTool","id":"p303061"},{"id":"p303102"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p303045","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p303046","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p303047"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p303048"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p303040","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p303041","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p303042"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p303043"}}}],"center":[{"type":"object","name":"Grid","id":"p303044","attributes":{"axis":{"id":"p303040"}}},{"type":"object","name":"Grid","id":"p303049","attributes":{"dimension":1,"axis":{"id":"p303045"}}},{"type":"object","name":"Legend","id":"p303080","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p303081","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p303077"}]}},{"type":"object","name":"LegendItem","id":"p303091","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p303088"}]}},{"type":"object","name":"LegendItem","id":"p303101","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p303098"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p303103","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p303113","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p303105"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p303114"},"y_scale":{"type":"object","name":"LinearScale","id":"p303115"},"title":{"type":"object","name":"Title","id":"p303106","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p303144","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303138","attributes":{"selected":{"type":"object","name":"Selection","id":"p303139","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303140"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCvT////v+/det//3/398/6Gj9gBGPgo3YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303145","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303146"}}},"glyph":{"type":"object","name":"Line","id":"p303141","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303142","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303143","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303153","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303147","attributes":{"selected":{"type":"object","name":"Selection","id":"p303148","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303149"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////9C0q77VeuWlXl8+GAPQMDwxaZqAP2aWlpz2SXn7C37HsccSjpF0hchWUalwNQfF1RxkWQ+ldLZ2+xP33mzBLGPVtB8kDwox6dBgDl000wYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303154","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303155"}}},"glyph":{"type":"object","name":"Line","id":"p303150","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303151","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303152","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p303162","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303156","attributes":{"selected":{"type":"object","name":"Selection","id":"p303157","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303158"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////9C0q77VeuWlXl8+GAPQMDwxaZqAP2aWlpz2SXn7C37HsccSjpF0hchWUalwNQfF1RxkWQ+ldLZ2+xP33mzBLGPVtB8kDwo/4/0Dz/3uv2//7/j+8/dNQeAAp1RBNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303163","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303164"}}},"glyph":{"type":"object","name":"Line","id":"p303159","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303160","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p303161","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p303173","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303167","attributes":{"selected":{"type":"object","name":"Selection","id":"p303168","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303169"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCvT////v+/det//3/398/6Gj9gBGPgo3YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p303174","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303175"}}},"glyph":{"type":"object","name":"Line","id":"p303170","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p303172","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p303183","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p303177","attributes":{"selected":{"type":"object","name":"Selection","id":"p303178","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p303179"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p303184","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p303185"}}},"glyph":{"type":"object","name":"Line","id":"p303180","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p303181","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p303182","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p303112","attributes":{"tools":[{"id":"p303126"},{"id":"p303127"},{"id":"p303128"},{"id":"p303136"},{"type":"object","name":"SaveTool","id":"p303137"},{"id":"p303187"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p303121","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p303122","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p303123"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p303124"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p303116","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p303117"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p303118"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p303119"}}}],"center":[{"type":"object","name":"Grid","id":"p303120","attributes":{"axis":{"id":"p303116"}}},{"type":"object","name":"Grid","id":"p303125","attributes":{"dimension":1,"axis":{"id":"p303121"}}},{"type":"object","name":"Legend","id":"p303165","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p303166","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p303162"}]}},{"type":"object","name":"LegendItem","id":"p303176","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p303173"}]}},{"type":"object","name":"LegendItem","id":"p303186","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p303183"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p303198","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"4467b1be-ef76-4315-bb69-289996aa3d7a","roots":{"p303199":"c27e52e9-e795-49ff-ad75-94455d501928"},"root_ids":["p303199"]}];
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