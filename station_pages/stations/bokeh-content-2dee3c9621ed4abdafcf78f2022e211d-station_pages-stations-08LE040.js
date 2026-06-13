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
    
    
    const element = document.getElementById("f567d3a2-fba9-45ae-9903-f7caa9a8ab41");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f567d3a2-fba9-45ae-9903-f7caa9a8ab41' but no matching script tag was found.")
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
                  const docs_json = '{"6e9efece-7e6b-4c10-b670-4323bdc44a92":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p302428","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p302429"}}},"roots":[{"type":"object","name":"Column","id":"p302601","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p302598","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p302597","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p302590","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p302452"},{"type":"object","name":"PanTool","id":"p302528"}]}},{"type":"object","name":"ToolProxy","id":"p302591","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p302453","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p302529","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p302592","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p302454","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p302455","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p302461","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p302460","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p302530","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p302531","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p302537","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p302536","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p302593","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p302462"},{"type":"object","name":"ResetTool","id":"p302538"}]}},{"type":"object","name":"SaveTool","id":"p302594"},{"type":"object","name":"ToolProxy","id":"p302595","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p302504","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p302596","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p302589","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p302430","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p302431"},"y_range":{"type":"object","name":"DataRange1d","id":"p302432"},"x_scale":{"type":"object","name":"LinearScale","id":"p302440"},"y_scale":{"type":"object","name":"LogScale","id":"p302441"},"title":{"type":"object","name":"Title","id":"p302433","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p302470","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p302464","attributes":{"selected":{"type":"object","name":"Selection","id":"p302465","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p302466"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAwNpZxYIDSaWlpx7I5ZRxmzZw50+uVpMPZM2dyNE+Lg+U51ogC1Ror93gJOwDVPXvALeDg8bDKZMICLociW67phuXsIHUH5FpZ4XTr68AKWy5Wh2qRdewMDCxQcWY4vUOuVbuuh9HB7WFVyacNf+wnHPrKsc79p32NyDp1Y+Pv9kB3WG77/NUeaI+I/Jcv9kBnVdZc+GwPtF/NZ9kne1uu64d/zv5gD7L38983OOlXgTvudS98A9K37IXHK/tHVSJ+Qeov7GP7D5na7H0G0pfQf+gpnD5x5kzP39TH9pIx/UwWLbdA4g05zy/D6b1yrbs5Hl60zwGGwzybM2B9AhEn4XS+LZf5Yd4T9o2vAyVWGhyz//f/f3z/oaM46deBO+o0uI6A9fPpHhrMdMOnDQfss9PS2ua07rU/+FVjz93I3faXFhfMPVyz0/4Z0B8r52+3/w3271acdOuhrxmH9LfaGwDTU1/pRvu////Pl9JfSzbttENu6Rm2lfa6xsaXrf0W2n/6/9+eY80cqtEAUy5pFigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p302471","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p302472"}}},"glyph":{"type":"object","name":"Line","id":"p302467","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p302468","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p302469","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p302479","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p302473","attributes":{"selected":{"type":"object","name":"Selection","id":"p302474","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p302475"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAwNpZxYIDSaWlpx7I5ZRxmzZw50+uVpMPZM2dyNE+Lg+U51ogC1Ror93gJOwDVPXvALeDg8bDKZMICLociW67phuXsIHUH5FpZ4XTr68AKWy5Wh2qRdewMDCxQcWY4vUOuVbuuh9HB7WFVyacNf+wnHPrKsc79p32NyDp1Y+Pv9kB3WG77/NUeaI+I/Jcv9kBnVdZc+GwPtF/NZ9kne1uu64d/zv5gD7L38983OOlXgTvudS98A9K37IXHK/tHVSJ+Qeov7GP7D5na7H0G0pfQf+gpnD5x5kzP39TH9pIx/UwWLbdA4g05zy/D6b1yrbs5Hl60zwGGwzybM2B9AhEn4XS+LZf5Yd4T9o2vAyVWGhyz//f/f3z/oaM46deBO+o0uI6A9fPpHhrMdMOnDQfss9PS2ua07rU/+FVjz93I3faXFhfMPVyz0/4Z0B8r52+3/w3271acdOuhrxmH9LfaGwDTU1/pRvu////Pl9JfSzbttENu6Rm2lfa6xsaXrf0W2n/6/9+eY80cqtEAUy5pFigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p302480","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p302481"}}},"glyph":{"type":"object","name":"Line","id":"p302476","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p302477","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p302478","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p302490","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p302484","attributes":{"selected":{"type":"object","name":"Selection","id":"p302485","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p302486"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xO65Z2hv/CvvRCY5nXoe2wBRGIOEL6sgw9QdG+LElRczeFCnFM151tNqLyuwyowMICqM3J4q7pl+oU4E6h6MweQ7m9CFlB9lg5FMscLZY5bQ/XbOoBUO1XbQ81xcAAaDjTBEWqek4MsSHmhM9RcF4d9QNNuebtCzXdziAc5R9Udao+HAwMYeELt83RYBLL+lhfUXm8HsPItPlD7fR2egLzb5wd1hz9E3iQA6p4AB2FQuCgGQt0V6AAOHr4gqPuCIPp+B0HdGezQCnLei2Coe0McwkKB4GoI1N2hDmogDx8Khbo/zOE7KKDXh0H9Ee4A9u6ccKh/IhxmgIKnMwLqr0gHAFcVN9KwAQAA"},"shape":[54],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAwNpZxYGBgSNghJwGiG2y5RED0gpkzuUH0AblWVjSaGcoH0w8Cd/yyh9DfQPSBM2e+gGiFmP5PYP7nv2+w0Q4Pq16AxBP6Dz2F0////7/v33sdxG/IeX4ZmU4QiDgJVgei//3/H99/6ChOGqSOT/cQWD01aZC9E9/ugbpjp/1vsDu2YtB///+fL6W/1p4Q/en/f3uONXPsiaUBzZaK6LABAAA="},"shape":[54],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p302491","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p302492"}}},"glyph":{"type":"object","name":"Line","id":"p302487","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p302488","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p302489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p302500","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p302494","attributes":{"selected":{"type":"object","name":"Selection","id":"p302495","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p302496"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p302501","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p302502"}}},"glyph":{"type":"object","name":"Line","id":"p302497","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p302498","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p302499","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p302439","attributes":{"tools":[{"id":"p302452"},{"id":"p302453"},{"id":"p302454"},{"id":"p302462"},{"type":"object","name":"SaveTool","id":"p302463"},{"id":"p302504"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p302447","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p302448","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p302449"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p302450"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p302442","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p302443","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p302444"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p302445"}}}],"center":[{"type":"object","name":"Grid","id":"p302446","attributes":{"axis":{"id":"p302442"}}},{"type":"object","name":"Grid","id":"p302451","attributes":{"dimension":1,"axis":{"id":"p302447"}}},{"type":"object","name":"Legend","id":"p302482","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p302483","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p302479"}]}},{"type":"object","name":"LegendItem","id":"p302493","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p302490"}]}},{"type":"object","name":"LegendItem","id":"p302503","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p302500"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p302505","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p302515","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p302507"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p302516"},"y_scale":{"type":"object","name":"LinearScale","id":"p302517"},"title":{"type":"object","name":"Title","id":"p302508","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p302546","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p302540","attributes":{"selected":{"type":"object","name":"Selection","id":"p302541","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p302542"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCvT////v+/det//3/398/6Gj9gBGPgo3YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p302547","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p302548"}}},"glyph":{"type":"object","name":"Line","id":"p302543","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p302544","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p302545","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p302555","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p302549","attributes":{"selected":{"type":"object","name":"Selection","id":"p302550","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p302551"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////9C0q77VeuWlXl8+GAPQMDwxaZqAP2aWlpz2SXn7C37HsccSjpF0hchWUalwNQfF1RxkWQ+ldLZ2+xP33mzBLGPVtB8kDwox6dBgDl000wYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p302556","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p302557"}}},"glyph":{"type":"object","name":"Line","id":"p302552","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p302553","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p302554","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p302564","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p302558","attributes":{"selected":{"type":"object","name":"Selection","id":"p302559","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p302560"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////9C0q77VeuWlXl8+GAPQMDwxaZqAP2aWlpz2SXn7C37HsccSjpF0hchWUalwNQfF1RxkWQ+ldLZ2+xP33mzBLGPVtB8kDwo/4/0Dz/3uv2//7/j+8/dNQeAAp1RBNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p302565","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p302566"}}},"glyph":{"type":"object","name":"Line","id":"p302561","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p302562","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p302563","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p302575","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p302569","attributes":{"selected":{"type":"object","name":"Selection","id":"p302570","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p302571"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCvT////v+/det//3/398/6Gj9gBGPgo3YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p302576","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p302577"}}},"glyph":{"type":"object","name":"Line","id":"p302572","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p302573","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p302574","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p302585","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p302579","attributes":{"selected":{"type":"object","name":"Selection","id":"p302580","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p302581"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p302586","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p302587"}}},"glyph":{"type":"object","name":"Line","id":"p302582","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p302583","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p302584","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p302514","attributes":{"tools":[{"id":"p302528"},{"id":"p302529"},{"id":"p302530"},{"id":"p302538"},{"type":"object","name":"SaveTool","id":"p302539"},{"id":"p302589"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p302523","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p302524","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p302525"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p302526"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p302518","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p302519"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p302520"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p302521"}}}],"center":[{"type":"object","name":"Grid","id":"p302522","attributes":{"axis":{"id":"p302518"}}},{"type":"object","name":"Grid","id":"p302527","attributes":{"dimension":1,"axis":{"id":"p302523"}}},{"type":"object","name":"Legend","id":"p302567","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p302568","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p302564"}]}},{"type":"object","name":"LegendItem","id":"p302578","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p302575"}]}},{"type":"object","name":"LegendItem","id":"p302588","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p302585"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p302600","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"6e9efece-7e6b-4c10-b670-4323bdc44a92","roots":{"p302601":"f567d3a2-fba9-45ae-9903-f7caa9a8ab41"},"root_ids":["p302601"]}];
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