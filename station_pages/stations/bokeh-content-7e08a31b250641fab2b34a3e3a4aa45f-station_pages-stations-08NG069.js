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
    
    
    const element = document.getElementById("cc5d137a-ce82-421d-8531-853956c61c28");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc5d137a-ce82-421d-8531-853956c61c28' but no matching script tag was found.")
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
                  const docs_json = '{"b04b68d2-2d16-489c-a830-bb876c52c404":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p728978","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p728979"}}},"roots":[{"type":"object","name":"Column","id":"p729142","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p729139","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p729138","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p729131","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p729002"},{"type":"object","name":"PanTool","id":"p729078"}]}},{"type":"object","name":"ToolProxy","id":"p729132","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p729003","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p729079","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p729133","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p729004","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p729005","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p729011","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p729010","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p729080","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p729081","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p729087","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p729086","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p729134","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p729012"},{"type":"object","name":"ResetTool","id":"p729088"}]}},{"type":"object","name":"SaveTool","id":"p729135"},{"type":"object","name":"ToolProxy","id":"p729136","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p729054","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p729137","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p729130","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p728980","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p728981"},"y_range":{"type":"object","name":"DataRange1d","id":"p728982"},"x_scale":{"type":"object","name":"LinearScale","id":"p728990"},"y_scale":{"type":"object","name":"LogScale","id":"p728991"},"title":{"type":"object","name":"Title","id":"p728983","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p729020","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729014","attributes":{"selected":{"type":"object","name":"Selection","id":"p729015","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729016"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHhQJSLg4PGwKkYggt/Bjuv65a0tPA7XFxdsPbWQ06HQlsv8tAC7g7GxsXP3GxaQuG2oAbND/6GvO0qEGR1MjI2Dn174Z/9NI2Z5QPZf+7NnztS8Dvxjn5aWJhaV8steM6b/kMuNH/ZAfXe1U7/bz5w5M3KX5zd7oHm3q0S+2leLrDse6/3FvvV14A2hT59B6oXcVD+DxM+f1vhgf+7MmTc5YW/tge7o/zXttT3QuNY0nVf269wfBkktfmnPwMDQkDERTEusc39pD/THlQfcL+0PfdVYc2rfc/szZ86seRv/1P5hlYhfpfUTkLoLQp8e23/ViHFP7Hxsv6TA1qv95yN77uuLf5yQfwRy596YIw/tZ82c2fmN7SFIX5yT3QP7////L3/55h7IftfzaXdBfPFDi2+DzHPgYboN0nc18Oote0age/bNvwUKD3+Oolsgd1YZWYDFGdbI3LLnur6Y4eWVm2B9cbsQdI3IOvtP7GB+wcS3N0Dm/7+2+AbIned3FNwAmTe91wEsPv+Iwg17I2Pjan+5G/aBO+Rcxa9cB4nf9+/FTYPs14zBTQPDuedkyHWQ/QxM2tdB4fglXxWsv96WC5OWbX0t+Pr/NXD4i928Zt/yOrDgxFkwf8H75Zg0UN/+E2XE028Cd6RlmoL1A9PnNVC6svG7eNX+FdDDyulXwe5wTLhqL9f6eiKDKZgvr3/3Cih9dX7acMU+uv9QbI7iFVC62sE357J90A65WnP/y6D4lDvVeQkUfo9nPbtorxXT3yTMddFeofV17RHbC6D4+fCk7rz9P2C4VYmcA5kbv8vzjD0ANdeSmigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729021","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729022"}}},"glyph":{"type":"object","name":"Line","id":"p729017","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729018","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p729019","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p729029","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729023","attributes":{"selected":{"type":"object","name":"Selection","id":"p729024","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729025"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHhQJSLg4PGwKkYggt/Bjuv65a0tPA7XFxdsPbWQ06HQlsv8tAC7g7GxsXP3GxaQuG2oAbND/6GvO0qEGR1MjI2Dn174Z/9NI2Z5QPZf+7NnztS8Dvxjn5aWJhaV8steM6b/kMuNH/ZAfXe1U7/bz5w5M3KX5zd7oHm3q0S+2leLrDse6/3FvvV14A2hT59B6oXcVD+DxM+f1vhgf+7MmTc5YW/tge7o/zXttT3QuNY0nVf269wfBkktfmnPwMDQkDERTEusc39pD/THlQfcL+0PfdVYc2rfc/szZ86seRv/1P5hlYhfpfUTkLoLQp8e23/ViHFP7Hxsv6TA1qv95yN77uuLf5yQfwRy596YIw/tZ82c2fmN7SFIX5yT3QP7////L3/55h7IftfzaXdBfPFDi2+DzHPgYboN0nc18Oote0age/bNvwUKD3+Oolsgd1YZWYDFGdbI3LLnur6Y4eWVm2B9cbsQdI3IOvtP7GB+wcS3N0Dm/7+2+AbIned3FNwAmTe91wEsPv+Iwg17I2Pjan+5G/aBO+Rcxa9cB4nf9+/FTYPs14zBTQPDuedkyHWQ/QxM2tdB4fglXxWsv96WC5OWbX0t+Pr/NXD4i928Zt/yOrDgxFkwf8H75Zg0UN/+E2XE028Cd6RlmoL1A9PnNVC6svG7eNX+FdDDyulXwe5wTLhqL9f6eiKDKZgvr3/3Cih9dX7acMU+uv9QbI7iFVC62sE357J90A65WnP/y6D4lDvVeQkUfo9nPbtorxXT3yTMddFeofV17RHbC6D4+fCk7rz9P2C4VYmcA5kbv8vzjD0ANdeSmigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729030","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729031"}}},"glyph":{"type":"object","name":"Line","id":"p729026","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729027","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p729028","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p729040","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729034","attributes":{"selected":{"type":"object","name":"Selection","id":"p729035","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729036"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SeUhUYRTFE7FEK0MsadfEJXPJPTWdo+M4Oo46+zwRK8IIKwpLxDJRRAkzLIoWCpN2MhHRIokiWmiTLDRbbBGxwigzIokWsvd9nvfPe+9b7j3nd27rXdv60KgPmlb5ntBMBlUfuvlwkv9ueDbx6XdZlQem1r3gE+Yxz63RG1P7c6EpamnPf+HLcwtQ0hSrPx6wmOeX4tHQ+23fE/x5bxnWVkRe930XwPuB+DFnl3tKXRDrBGPvRbGxnPVCsSTd69SepytYNxyXBwvG2sojWD8S5xL7FpU0rWSfKIzX/7xdORzFftFIEtuxMewbgzpZMJb94/Bk08YrXYNx1BGP+Vf3Fd4LT6CeBBS7drq8qllFXYlQFy987k+kviT8OvE3919QMnUmI2PUXy21mnpTsF+8HqdQdype1mxBvJ+G+jU4+DFrx9lE0Acg24+AftLwNnqrKimNvtKgilELpNNfOoJFmaF0+tTCGHje29qgpV8ttvd0b3gTnUHfGThaKhYy6F8H9ZDneL2OHHQYvvFtTUVkJnlkYoYEkEkuesi2tXry0cPSEaL4hGWRUxbKHcmXmgeyyCsbzQJPdTa5ZePW6XXmjhAD+Rkg7fcZyDEHM6XRHPLMQdThYwZjoJFcjZDle43km4vdUnAuOedCvaQd9c8j7zzcDx85UtqTR+75+NIvGueTfz5Uk2orE3MwYeGBWQ+mF5uYhwkR4nq3ibmYkBbvpx4xMx8zrA3CqJk5maHCVj/MzMuMnSIGTwtzs6CxVqcisDA/C04O9KrkLczRAonTw8o8rbhTKQxamasVz8XxLivztUJicbcxZxv+lFVdSy2yMW8bZqtuXDttzN0GP2nQzvztiBGyC+2cAzt0MiA758EORQp1cC4c2CyWCxycDwdEt5Z2B+fEAYnP1cl5ceKMiFtxcm6cELfH2pycHyekPBeFc6TgtYjNoXCeFHxtExOlcK4UTJNPAf4DrtRQprgEAAA="},"shape":[151],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHhQJSLgwMDAoBDTzweleUC0w8MqLhC9wP0hB4hO2CHH7vD////4/kOsYPECWxaw+nXuzFBxRqh+BgdGsL5/9gxg88F0w6Gvf+wh5oJpoPwvqPwvqPwPEA0EYLrBlus7iE5IS/sGVj9z5lcQfeDMmS9g+deBYPrAVw0w7cB1/TOYL9cKph8sLvgINo9J+7090D0O5p1vweY4d78Bqzc2fg1Wv9D1FVj846WXYHMzJmKlF0jpg2mFdjEwnTDx7QswPyrlOZjff+gp2F7fpCdgWs0QTCsYcoDpA2X7HoPNeVvzGGo/mH7ws+4RWN6TB0w7bPv8EMwvyngIDZcHYH/UZz2wB4Wz9f37YP9sOXEPxP8f/PguiL6/dPYdqP9vg83hYUKhE55euAXS17BvPoIGmT897xbYnEu+YHGGNTIIGuT+1tc3webE7cJNA9U/UGFD0CD3/rtyA2zutcUIGqS+0xFBA4XnH1HASu+f+/46NNyug/3n30s8DXK/ZgzpNCS9YNJAc+ttuYinQeEqdvMaNnrB++WEaZD/T5RRTkPS9zVoPkPQQHn7bZ+vQtP3VbC7HRMwaUi6B/Pl9e9egdOg+ONYA+bH7/IE8xtynl8Gh1fj1Mug8ATmi8tge4yNL0PT+SVoOrsETd8XoenlIjh9CjVfsP8LTt/nofnkvP0/YHxWiZyD0xD7ztgDAAtPgPa4BAAA"},"shape":[151],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729041","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729042"}}},"glyph":{"type":"object","name":"Line","id":"p729037","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729038","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p729039","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p729050","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729044","attributes":{"selected":{"type":"object","name":"Selection","id":"p729045","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729046"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p729051","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729052"}}},"glyph":{"type":"object","name":"Line","id":"p729047","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729048","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p729049","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p728989","attributes":{"tools":[{"id":"p729002"},{"id":"p729003"},{"id":"p729004"},{"id":"p729012"},{"type":"object","name":"SaveTool","id":"p729013"},{"id":"p729054"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p728997","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p728998","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p728999"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p729000"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p728992","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p728993","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p728994"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p728995"}}}],"center":[{"type":"object","name":"Grid","id":"p728996","attributes":{"axis":{"id":"p728992"}}},{"type":"object","name":"Grid","id":"p729001","attributes":{"dimension":1,"axis":{"id":"p728997"}}},{"type":"object","name":"Legend","id":"p729032","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p729033","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p729029"}]}},{"type":"object","name":"LegendItem","id":"p729043","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p729040"}]}},{"type":"object","name":"LegendItem","id":"p729053","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p729050"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p729055","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p729065","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p729057"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p729066"},"y_scale":{"type":"object","name":"LinearScale","id":"p729067"},"title":{"type":"object","name":"Title","id":"p729058","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p729096","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729090","attributes":{"selected":{"type":"object","name":"Selection","id":"p729091","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729092"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6NbXgT9ichkdSs5ZiudseW6/7VrU6gDOm/ahoaG2jL5X7N/v/b6P/9g1e6DiBeqvrtvD9AEARQu2MmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729097","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729098"}}},"glyph":{"type":"object","name":"Line","id":"p729093","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729094","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p729095","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p729105","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729099","attributes":{"selected":{"type":"object","name":"Selection","id":"p729100","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729101"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6NbXgT9ichkdSs5ZiudseW6/7VrU6gDOm/ahoaG2jL5X7N/v/b6P/9g1e6DiBeqvrtvD9AEARQu2MmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729106","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729107"}}},"glyph":{"type":"object","name":"Line","id":"p729102","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729103","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p729104","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p729116","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729110","attributes":{"selected":{"type":"object","name":"Selection","id":"p729111","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729112"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6NbXgT9ichkdSs5ZiudseW6/7VrU6gDOm/ahoaG2jL5X7N/v/b6P/9g1e6DiBeqvrtvD9AEARQu2MmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729117","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729118"}}},"glyph":{"type":"object","name":"Line","id":"p729113","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729114","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p729115","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p729126","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729120","attributes":{"selected":{"type":"object","name":"Selection","id":"p729121","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729122"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p729127","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729128"}}},"glyph":{"type":"object","name":"Line","id":"p729123","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729124","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p729125","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p729064","attributes":{"tools":[{"id":"p729078"},{"id":"p729079"},{"id":"p729080"},{"id":"p729088"},{"type":"object","name":"SaveTool","id":"p729089"},{"id":"p729130"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p729073","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p729074","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p729075"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p729076"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p729068","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p729069"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p729070"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p729071"}}}],"center":[{"type":"object","name":"Grid","id":"p729072","attributes":{"axis":{"id":"p729068"}}},{"type":"object","name":"Grid","id":"p729077","attributes":{"dimension":1,"axis":{"id":"p729073"}}},{"type":"object","name":"Legend","id":"p729108","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p729109","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p729105"}]}},{"type":"object","name":"LegendItem","id":"p729119","attributes":{"label":{"type":"value","value":"Median Year (1968)"},"renderers":[{"id":"p729116"}]}},{"type":"object","name":"LegendItem","id":"p729129","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p729126"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p729141","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"b04b68d2-2d16-489c-a830-bb876c52c404","roots":{"p729142":"cc5d137a-ce82-421d-8531-853956c61c28"},"root_ids":["p729142"]}];
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