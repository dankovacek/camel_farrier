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
    
    
    const element = document.getElementById("c1b8d583-5db9-46f8-8b11-267f0cbaee7a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c1b8d583-5db9-46f8-8b11-267f0cbaee7a' but no matching script tag was found.")
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
                  const docs_json = '{"42624c65-5f41-448d-9685-79a92d635f30":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p499316","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p499317"}}},"roots":[{"type":"object","name":"Column","id":"p499489","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p499486","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p499485","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p499478","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p499340"},{"type":"object","name":"PanTool","id":"p499416"}]}},{"type":"object","name":"ToolProxy","id":"p499479","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p499341","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p499417","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p499480","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p499342","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p499343","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p499349","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p499348","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p499418","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p499419","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p499425","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p499424","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p499481","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p499350"},{"type":"object","name":"ResetTool","id":"p499426"}]}},{"type":"object","name":"SaveTool","id":"p499482"},{"type":"object","name":"ToolProxy","id":"p499483","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p499392","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p499484","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p499477","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p499318","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p499319"},"y_range":{"type":"object","name":"DataRange1d","id":"p499320"},"x_scale":{"type":"object","name":"LinearScale","id":"p499328"},"y_scale":{"type":"object","name":"LogScale","id":"p499329"},"title":{"type":"object","name":"Title","id":"p499321","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p499358","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p499352","attributes":{"selected":{"type":"object","name":"Selection","id":"p499353","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p499354"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAwNpZxYIDSaWlpx7I5ZRxmzZw50+uVpMPZM2dyNE+Lg+U51ogC1Ror93gJOwDVPXvALeDg8bDKZMICLociW67phuXsIHUH5FpZ4XTr68AKWy5Wh2qRdewMDCxQcWY4vUOuVbuuh9HB7WFVyacNf+wnHPrKsc79p32NyDp1Y+Pv9kB3WG77/NUeaI+I/Jcv9kBnVdZc+GwPtF/NZ9kne1uu64d/zv5gD7L38983OOlXgTvudS98A9K37IXHK/tHVSJ+Qeov7GP7D5na7H0G0pfQf+gpnD5x5kzP39TH9pIx/UwWLbdA4g05zy/D6b1yrbs5Hl60zwGGwzybM2B9AhEn4XS+LZf5Yd4T9o2vAyVWGhyz//f/f3z/oaM46deBO+o0uI6A9fPpHhrMdMOnDQfss9PS2ua07rU/+FVjz93I3faXFhfMPVyz0/4Z0B8r52+3/w3271acdOuhrxmH9LfaGwDTU1/pRvu////Pl9JfSzbttENu6Rm2lfa6xsaXrf0W2n/6/9+eY80cqtEAUy5pFigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p499359","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p499360"}}},"glyph":{"type":"object","name":"Line","id":"p499355","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p499356","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p499357","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p499367","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p499361","attributes":{"selected":{"type":"object","name":"Selection","id":"p499362","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p499363"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAwNpZxYIDSaWlpx7I5ZRxmzZw50+uVpMPZM2dyNE+Lg+U51ogC1Ror93gJOwDVPXvALeDg8bDKZMICLociW67phuXsIHUH5FpZ4XTr68AKWy5Wh2qRdewMDCxQcWY4vUOuVbuuh9HB7WFVyacNf+wnHPrKsc79p32NyDp1Y+Pv9kB3WG77/NUeaI+I/Jcv9kBnVdZc+GwPtF/NZ9kne1uu64d/zv5gD7L38983OOlXgTvudS98A9K37IXHK/tHVSJ+Qeov7GP7D5na7H0G0pfQf+gpnD5x5kzP39TH9pIx/UwWLbdA4g05zy/D6b1yrbs5Hl60zwGGwzybM2B9AhEn4XS+LZf5Yd4T9o2vAyVWGhyz//f/f3z/oaM46deBO+o0uI6A9fPpHhrMdMOnDQfss9PS2ua07rU/+FVjz93I3faXFhfMPVyz0/4Z0B8r52+3/w3271acdOuhrxmH9LfaGwDTU1/pRvu////Pl9JfSzbttENu6Rm2lfa6xsaXrf0W2n/6/9+eY80cqtEAUy5pFigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p499368","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p499369"}}},"glyph":{"type":"object","name":"Line","id":"p499364","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p499365","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p499366","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p499378","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p499372","attributes":{"selected":{"type":"object","name":"Selection","id":"p499373","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p499374"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/xO65Z2hv/CvvRCY5nXoe2wBRGIOEL6sgw9QdG+LElRczeFCnFM151tNqLyuwyowMICqM3J4q7pl+oU4E6h6MweQ7m9CFlB9lg5FMscLZY5bQ/XbOoBUO1XbQ81xcAAaDjTBEWqek4MsSHmhM9RcF4d9QNNuebtCzXdziAc5R9Udao+HAwMYeELt83RYBLL+lhfUXm8HsPItPlD7fR2egLzb5wd1hz9E3iQA6p4AB2FQuCgGQt0V6AAOHr4gqPuCIPp+B0HdGezQCnLei2Coe0McwkKB4GoI1N2hDmogDx8Khbo/zOE7KKDXh0H9Ee4A9u6ccKh/IhxmgIKnMwLqr0gHAFcVN9KwAQAA"},"shape":[54],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgYHAwNpZxYGBgSNghJwGiG2y5RED0gpkzuUH0AblWVjSaGcoH0w8Cd/yyh9DfQPSBM2e+gGiFmP5PYP7nv2+w0Q4Pq16AxBP6Dz2F0////7/v33sdxG/IeX4ZmU4QiDgJVgei//3/H99/6ChOGqSOT/cQWD01aZC9E9/ugbpjp/1vsDu2YtB///+fL6W/1p4Q/en/f3uONXPsiaUBzZaK6LABAAA="},"shape":[54],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p499379","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p499380"}}},"glyph":{"type":"object","name":"Line","id":"p499375","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p499376","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p499377","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p499388","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p499382","attributes":{"selected":{"type":"object","name":"Selection","id":"p499383","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p499384"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p499389","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p499390"}}},"glyph":{"type":"object","name":"Line","id":"p499385","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p499386","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p499387","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p499327","attributes":{"tools":[{"id":"p499340"},{"id":"p499341"},{"id":"p499342"},{"id":"p499350"},{"type":"object","name":"SaveTool","id":"p499351"},{"id":"p499392"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p499335","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p499336","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p499337"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p499338"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p499330","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p499331","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p499332"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p499333"}}}],"center":[{"type":"object","name":"Grid","id":"p499334","attributes":{"axis":{"id":"p499330"}}},{"type":"object","name":"Grid","id":"p499339","attributes":{"dimension":1,"axis":{"id":"p499335"}}},{"type":"object","name":"Legend","id":"p499370","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p499371","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p499367"}]}},{"type":"object","name":"LegendItem","id":"p499381","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p499378"}]}},{"type":"object","name":"LegendItem","id":"p499391","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p499388"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p499393","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p499403","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p499395"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p499404"},"y_scale":{"type":"object","name":"LinearScale","id":"p499405"},"title":{"type":"object","name":"Title","id":"p499396","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p499434","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p499428","attributes":{"selected":{"type":"object","name":"Selection","id":"p499429","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p499430"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCvT////v+/det//3/398/6Gj9gBGPgo3YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p499435","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p499436"}}},"glyph":{"type":"object","name":"Line","id":"p499431","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p499432","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p499433","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p499443","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p499437","attributes":{"selected":{"type":"object","name":"Selection","id":"p499438","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p499439"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////9C0q77VeuWlXl8+GAPQMDwxaZqAP2aWlpz2SXn7C37HsccSjpF0hchWUalwNQfF1RxkWQ+ldLZ2+xP33mzBLGPVtB8kDwox6dBgDl000wYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p499444","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p499445"}}},"glyph":{"type":"object","name":"Line","id":"p499440","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p499441","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p499442","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p499452","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p499446","attributes":{"selected":{"type":"object","name":"Selection","id":"p499447","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p499448"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v////9C0q77VeuWlXl8+GAPQMDwxaZqAP2aWlpz2SXn7C37HsccSjpF0hchWUalwNQfF1RxkWQ+ldLZ2+xP33mzBLGPVtB8kDwo/4/0Dz/3uv2//7/j+8/dNQeAAp1RBNgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p499453","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p499454"}}},"glyph":{"type":"object","name":"Line","id":"p499449","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p499450","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p499451","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p499463","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p499457","attributes":{"selected":{"type":"object","name":"Selection","id":"p499458","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p499459"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCvT////v+/det//3/398/6Gj9gBGPgo3YAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p499464","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p499465"}}},"glyph":{"type":"object","name":"Line","id":"p499460","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p499461","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p499462","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p499473","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p499467","attributes":{"selected":{"type":"object","name":"Selection","id":"p499468","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p499469"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p499474","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p499475"}}},"glyph":{"type":"object","name":"Line","id":"p499470","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p499471","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p499472","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p499402","attributes":{"tools":[{"id":"p499416"},{"id":"p499417"},{"id":"p499418"},{"id":"p499426"},{"type":"object","name":"SaveTool","id":"p499427"},{"id":"p499477"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p499411","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p499412","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p499413"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p499414"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p499406","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p499407"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p499408"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p499409"}}}],"center":[{"type":"object","name":"Grid","id":"p499410","attributes":{"axis":{"id":"p499406"}}},{"type":"object","name":"Grid","id":"p499415","attributes":{"dimension":1,"axis":{"id":"p499411"}}},{"type":"object","name":"Legend","id":"p499455","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p499456","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p499452"}]}},{"type":"object","name":"LegendItem","id":"p499466","attributes":{"label":{"type":"value","value":"Median Year (1921)"},"renderers":[{"id":"p499463"}]}},{"type":"object","name":"LegendItem","id":"p499476","attributes":{"label":{"type":"value","value":"Annual (n=2)"},"renderers":[{"id":"p499473"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p499488","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"42624c65-5f41-448d-9685-79a92d635f30","roots":{"p499489":"c1b8d583-5db9-46f8-8b11-267f0cbaee7a"},"root_ids":["p499489"]}];
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