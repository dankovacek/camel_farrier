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
    
    
    const element = document.getElementById("fbc33de5-da8c-43e2-b8d1-0befe948f0c7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fbc33de5-da8c-43e2-b8d1-0befe948f0c7' but no matching script tag was found.")
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
                  const docs_json = '{"2e8c6cd5-b62a-48d4-aca5-8dd92c20af33":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p78355","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p78356"}}},"roots":[{"type":"object","name":"Column","id":"p78519","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p78516","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p78515","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p78508","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p78379"},{"type":"object","name":"PanTool","id":"p78455"}]}},{"type":"object","name":"ToolProxy","id":"p78509","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p78380","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p78456","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p78510","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p78381","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p78382","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p78388","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p78387","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p78457","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p78458","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p78464","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p78463","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p78511","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p78389"},{"type":"object","name":"ResetTool","id":"p78465"}]}},{"type":"object","name":"SaveTool","id":"p78512"},{"type":"object","name":"ToolProxy","id":"p78513","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p78431","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p78514","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p78507","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p78357","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p78358"},"y_range":{"type":"object","name":"DataRange1d","id":"p78359"},"x_scale":{"type":"object","name":"LinearScale","id":"p78367"},"y_scale":{"type":"object","name":"LogScale","id":"p78368"},"title":{"type":"object","name":"Title","id":"p78360","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p78397","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p78391","attributes":{"selected":{"type":"object","name":"Selection","id":"p78392","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p78393"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2VSSUwTURjGKCgDAkKjcaGFGGACsjTAydT/ERIhESJoUIM1bFJr6AGUeMCiiDYGE1lClIyJESkeNNDIki4IFAoWtbUQtqEiyipUMKxFkGV8j4MX5/Jn3v//3/aegwP5QpGWr4iO5IcgHV8RpMgKQiKKjU73CEASieT04wp/xDCMr/isP+KpYoQj1X5IFTPWlH/FF7mwyrDSyiNoPI+nziryQp/N5jj18gHUYac72ys8ULaIuhjCuZP/Se8AN6TEBzaNK5nbTCp2Rqu0ODQpzAlhEZUM44hyRFRM9fc9qNRgL0ir303mzLdad6HftFifzjmg81p+5Ix1GyoYRmj8ugGB4pKqmdg/gPdRePg6sMrslnzvNYgdy3uwlblKziuzRasgUMyWKZLtgH3YtvpXQDGbSK/IlgHrtjhLlwD7PT5+aZHsNYYxC2Aym5tvL83BCi3uTpb/JDgL0YemYR3r6EiZAuyfmmyZACwvLixwDHAu7UGFo2RuNI/3jdQCadkI4PwkooARwis0eQxDpkRy8EbCF8Iz2ThqBTlPda37hJX06yzCIbLnk3yVhZfZojetmYNEV/RlywDhOVar7N/BlU33Ac5lUtDbB86ssoe910f86bwaesmcrCC1F05RbHhQfM9OLvtqzDCXqDWG2k07+tbvfCL9o11NH4DjOP3z+S6QSiRPByO6YJkWu2+YjLCFG4EPjVDOMIdzSt4Tf2VD8k6Si2tsQid4qmI+urztIHipUz0GuCmi7u6XtcM2x0FRVBvBnfcXtgF5T5vn9PAjUVt837OV9FPKfjX/q0ac38SrdxCv5demDTfBXlbpY3umgzY7HeEq0JE5fW65FjY5TmC1aP6rCVq+X/ATDeF7YTyjIfrk/gY1OGEcqaMaTlJsRmRUI2xgvubcBqjB93bdWE/8pbgF1wMtLin0oupgHt/zwIUamMY6nfXV8MhgH8qwKWENA79erIK/WpH+OCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p78398","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p78399"}}},"glyph":{"type":"object","name":"Line","id":"p78394","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p78395","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p78396","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p78406","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p78400","attributes":{"selected":{"type":"object","name":"Selection","id":"p78401","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p78402"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2VSSUwTURjGKCgDAkKjcaGFGGACsjTAydT/ERIhESJoUIM1bFJr6AGUeMCiiDYGE1lClIyJESkeNNDIki4IFAoWtbUQtqEiyipUMKxFkGV8j4MX5/Jn3v//3/aegwP5QpGWr4iO5IcgHV8RpMgKQiKKjU73CEASieT04wp/xDCMr/isP+KpYoQj1X5IFTPWlH/FF7mwyrDSyiNoPI+nziryQp/N5jj18gHUYac72ys8ULaIuhjCuZP/Se8AN6TEBzaNK5nbTCp2Rqu0ODQpzAlhEZUM44hyRFRM9fc9qNRgL0ir303mzLdad6HftFifzjmg81p+5Ix1GyoYRmj8ugGB4pKqmdg/gPdRePg6sMrslnzvNYgdy3uwlblKziuzRasgUMyWKZLtgH3YtvpXQDGbSK/IlgHrtjhLlwD7PT5+aZHsNYYxC2Aym5tvL83BCi3uTpb/JDgL0YemYR3r6EiZAuyfmmyZACwvLixwDHAu7UGFo2RuNI/3jdQCadkI4PwkooARwis0eQxDpkRy8EbCF8Iz2ThqBTlPda37hJX06yzCIbLnk3yVhZfZojetmYNEV/RlywDhOVar7N/BlU33Ac5lUtDbB86ssoe910f86bwaesmcrCC1F05RbHhQfM9OLvtqzDCXqDWG2k07+tbvfCL9o11NH4DjOP3z+S6QSiRPByO6YJkWu2+YjLCFG4EPjVDOMIdzSt4Tf2VD8k6Si2tsQid4qmI+urztIHipUz0GuCmi7u6XtcM2x0FRVBvBnfcXtgF5T5vn9PAjUVt837OV9FPKfjX/q0ac38SrdxCv5demDTfBXlbpY3umgzY7HeEq0JE5fW65FjY5TmC1aP6rCVq+X/ATDeF7YTyjIfrk/gY1OGEcqaMaTlJsRmRUI2xgvubcBqjB93bdWE/8pbgF1wMtLin0oupgHt/zwIUamMY6nfXV8MhgH8qwKWENA79erIK/WpH+OCgDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p78407","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p78408"}}},"glyph":{"type":"object","name":"Line","id":"p78403","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p78404","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p78405","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p78417","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p78411","attributes":{"selected":{"type":"object","name":"Selection","id":"p78412","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p78413"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Se0yNcRzGWaaYy1K5NESaUi4p0u10ntOpU+fS6bznPee8pzHGksuYMZdGuc5cwkyYNJeEMRFj7nNpxYRlpjE0prmMZWiZVsz7+/Wcf96d3/t7v9/n+TzPxfhzSn1Vq/GifLYbgx5tXHt6xV/+D8Db7rCi6TuD0HM+EIcbVz0smxSMnvcheHDw/ZvusKG8Nxy/5tl/LP0XzvujMHrK1T7vPkXwu7E4Vbp3wJkFkfx+HG61NugTojhnPJ5Zu8aMcEVzXgw+14qLEzg3FvI4eSLnT0JISeXduprJ3DMFocu/nCzdG899UxERFfC1onEq9yYg7uUo/WYi9ydCH7byecY06pgGk0G98b14OvUkQWztfzmJumZAq95ujm6bQX3JmOsTBynUmYIl/e48nTM3lXpTUXz71ZCSyjTqTsfmZe3aoeZ06jdgd+SgI1cGZ9BHBiqaYz48sxrpxwh3fVX5bxPoC5Dy34H+TJi1Riww0acJH6TQTPrNxMJY8UUmfZvRtqUQBtVM/2asaPmpKzWTQxb+JG3YWrA7izyysF6Mic0ml2yILaseZpOPBTt0GlsKLeRkgXCzr3cOeeVg/29TwvGjOeSWgxGuJs+FtFzyy8Wxs8JBLjlaMU4usJKnFfL1EBu52hAvsNTayNcGsa3DYSdnO1IXCRJ28nbgXl2NJXibg9wdyB4pbuSRfx4eC4z385iDE4qQN9vJPJyQcXQ5mUs+ZspB+cwnH9J2uIs5uXA5XGxwMS8XVovx11zMzQVBObevwvwUCEpNHoU5KhAufdUK81SwSVfZ8lNhrm5kCdxwM183Al8kHvi2x82c3ZC2WtzMW8UufXtnnMrcVeS/DtSvqMxfRfA2p36isgcq5LhhHvbBAxlzkYe98KBAgvKwHx5InAFe9sQLPRx9spd98eJEuSiAl73xYj7ECy/744O0Y/CxRz7Ia2U+9smH8xah0MdeaZAxxmjslwa9XHpFNPZMQ4fj483WBo1903C9M+7J4lA/e+fHOoFznp/980s1xZf87KEfveSvAP8Bu0n7tRgFAAA="},"shape":[163],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/42TT0iTcRjHX62JjDITi5DhRmD0R9nhPYSI/F5PEtbBm0T0egiR6CAhHXbIdYjoJCIeRMTIRCITs2FrrLamragXEVNrK2ujTKLC1lq6/LN+z/N7+L2TdWiHfXz+f5/nNxUFPk6Nf93o7a3S8hRFU9VK4hEtk8kEDOOQJM9rbmkxKfwVVF8h7JMHwQ6WWxxAzfq6TNhX9wEdZzpLsN5bXkL2XooXY76qIt2lo3uQXxuLgLHBtt2UvwvntdVa0d/oLSS7gHRYJMUeForvpL47qE8+xfOyyecpFN9ikB9KbTAx5w8TeyO5njQTeyC1uGuNiT1WKe83E3O3kdelqA4ZNIxfTOhKMrE/ks//ycQeCbRH6xOU/4OJuyCDyc1vaHcfQGpnfV+ozzL690c+U/0S+gtHPqG/1voR6xuOx2nPGFDpOI+MuUrfZ9Pd2rWYTT73HePvzVT1Le6zNBMFOzN7Ksr4HZURW5T0RDBe3BTB+MLgG+DAlMMk7LkyvAB24PklJJtIzmNdZ2gebLtzcQ6o+07MoY4Ly6+yGRsObyPXM4s6HWMmYf4dG1Kv9szQPQxJ0d+gd3yJ/dKXX0iCvv6VZzmEu+UfM7nJA0evhf/Fjrrmp1D3YahvCve2nTYJ/unVSbbF/3D3TNIeIUnuD1xsfQJk1+uCOcR/ZwVt/VxNgG3gPR+zNO9XOf4I/V3f/TmEvNRhP+gbqI/7JNfxXj56v4eSoKO92yvJ6+2R6Qf/TXj3cEMuxZ0mJMXvzANz7E3VHtCj+9vvS8J73k6MQ75eVGVyHe90j35vY7hPmfMuS/E+BVeGQAeLu25JrmGfm5J/Acw3Dp4YBQAA"},"shape":[163],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p78418","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p78419"}}},"glyph":{"type":"object","name":"Line","id":"p78414","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p78415","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p78416","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p78427","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p78421","attributes":{"selected":{"type":"object","name":"Selection","id":"p78422","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p78423"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p78428","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p78429"}}},"glyph":{"type":"object","name":"Line","id":"p78424","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p78425","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p78426","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p78366","attributes":{"tools":[{"id":"p78379"},{"id":"p78380"},{"id":"p78381"},{"id":"p78389"},{"type":"object","name":"SaveTool","id":"p78390"},{"id":"p78431"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p78374","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p78375","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p78376"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p78377"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p78369","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p78370","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p78371"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p78372"}}}],"center":[{"type":"object","name":"Grid","id":"p78373","attributes":{"axis":{"id":"p78369"}}},{"type":"object","name":"Grid","id":"p78378","attributes":{"dimension":1,"axis":{"id":"p78374"}}},{"type":"object","name":"Legend","id":"p78409","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p78410","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p78406"}]}},{"type":"object","name":"LegendItem","id":"p78420","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p78417"}]}},{"type":"object","name":"LegendItem","id":"p78430","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p78427"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p78432","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p78442","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p78434"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p78443"},"y_scale":{"type":"object","name":"LinearScale","id":"p78444"},"title":{"type":"object","name":"Title","id":"p78435","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p78473","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p78467","attributes":{"selected":{"type":"object","name":"Selection","id":"p78468","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p78469"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotLGx8WQJF3UHyeQexm3yPA737t611blyy77m/V793Ufv2gs6cexMkHhqX1Jefp3/yB57BhzmAAAjfvytYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p78474","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p78475"}}},"glyph":{"type":"object","name":"Line","id":"p78470","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p78471","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p78472","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p78482","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p78476","attributes":{"selected":{"type":"object","name":"Selection","id":"p78477","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p78478"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotLGx8WQJF3UHyeQexm3yPA737t611blyy77m/V793Ufv2gs6cexMkHhqX1Jefp3/yB57BhzmAAAjfvytYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p78483","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p78484"}}},"glyph":{"type":"object","name":"Line","id":"p78479","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p78480","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p78481","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p78493","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p78487","attributes":{"selected":{"type":"object","name":"Selection","id":"p78488","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p78489"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxotLGx8WQJF3UHyeQexm3yPA737t611blyy77m/V793Ufv2gs6cexMkHhqX1Jefp3/yB57BhzmAAAjfvytYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p78494","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p78495"}}},"glyph":{"type":"object","name":"Line","id":"p78490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p78491","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p78492","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p78503","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p78497","attributes":{"selected":{"type":"object","name":"Selection","id":"p78498","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p78499"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p78504","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p78505"}}},"glyph":{"type":"object","name":"Line","id":"p78500","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p78501","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p78502","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p78441","attributes":{"tools":[{"id":"p78455"},{"id":"p78456"},{"id":"p78457"},{"id":"p78465"},{"type":"object","name":"SaveTool","id":"p78466"},{"id":"p78507"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p78450","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p78451","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p78452"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p78453"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p78445","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p78446"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p78447"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p78448"}}}],"center":[{"type":"object","name":"Grid","id":"p78449","attributes":{"axis":{"id":"p78445"}}},{"type":"object","name":"Grid","id":"p78454","attributes":{"dimension":1,"axis":{"id":"p78450"}}},{"type":"object","name":"Legend","id":"p78485","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p78486","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p78482"}]}},{"type":"object","name":"LegendItem","id":"p78496","attributes":{"label":{"type":"value","value":"Median Year (1963)"},"renderers":[{"id":"p78493"}]}},{"type":"object","name":"LegendItem","id":"p78506","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p78503"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p78518","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"2e8c6cd5-b62a-48d4-aca5-8dd92c20af33","roots":{"p78519":"fbc33de5-da8c-43e2-b8d1-0befe948f0c7"},"root_ids":["p78519"]}];
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