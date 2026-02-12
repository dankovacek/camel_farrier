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
    
    
    const element = document.getElementById("a4bc75f1-9d1b-48f4-b510-1e46931841f0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a4bc75f1-9d1b-48f4-b510-1e46931841f0' but no matching script tag was found.")
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
                  const docs_json = '{"18a355fb-a5f8-4652-8088-d05807242758":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p729449","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p729450"}}},"roots":[{"type":"object","name":"Column","id":"p729613","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p729610","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p729609","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p729602","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p729473"},{"type":"object","name":"PanTool","id":"p729549"}]}},{"type":"object","name":"ToolProxy","id":"p729603","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p729474","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p729550","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p729604","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p729475","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p729476","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p729482","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p729481","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p729551","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p729552","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p729558","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p729557","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p729605","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p729483"},{"type":"object","name":"ResetTool","id":"p729559"}]}},{"type":"object","name":"SaveTool","id":"p729606"},{"type":"object","name":"ToolProxy","id":"p729607","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p729525","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p729608","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p729601","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p729451","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p729452"},"y_range":{"type":"object","name":"DataRange1d","id":"p729453"},"x_scale":{"type":"object","name":"LinearScale","id":"p729461"},"y_scale":{"type":"object","name":"LogScale","id":"p729462"},"title":{"type":"object","name":"Title","id":"p729454","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p729491","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729485","attributes":{"selected":{"type":"object","name":"Selection","id":"p729486","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729487"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHhQJSLg4PGwKkYggt/Bjuv65a0tPA7XFxdsPbWQ06HQlsv8tAC7g7GxsXP3GxaQuG2oAbND/6GvO0qEGR1MjI2Dn174Z/9NI2Z5QPZf+7NnztS8Dvxjn5aWJhaV8steM6b/kMuNH/ZAfXe1U7/bz5w5M3KX5zd7oHm3q0S+2leLrDse6/3FvvV14A2hT59B6oXcVD+DxM+f1vhgf+7MmTc5YW/tge7o/zXttT3QuNY0nVf269wfBkktfmnPwMDQkDERTEusc39pD/THlQfcL+0PfdVYc2rfc/szZ86seRv/1P5hlYhfpfUTkLoLQp8e23/ViHFP7Hxsv6TA1qv95yN77uuLf5yQfwRy596YIw/tZ82c2fmN7SFIX5yT3QP7////L3/55h7IftfzaXdBfPFDi2+DzHPgYboN0nc18Oote0age/bNvwUKD3+Oolsgd1YZWYDFGdbI3LLnur6Y4eWVm2B9cbsQdI3IOvtP7GB+wcS3N0Dm/7+2+AbIned3FNwAmTe91wEsPv+Iwg17I2Pjan+5G/aBO+Rcxa9cB4nf9+/FTYPs14zBTQPDuedkyHWQ/QxM2tdB4fglXxWsv96WC5OWbX0t+Pr/NXD4i928Zt/yOrDgxFkwf8H75Zg0UN/+E2XE028Cd6RlmoL1A9PnNVC6svG7eNX+FdDDyulXwe5wTLhqL9f6eiKDKZgvr3/3Cih9dX7acMU+uv9QbI7iFVC62sE357J90A65WnP/y6D4lDvVeQkUfo9nPbtorxXT3yTMddFeofV17RHbC6D4+fCk7rz9P2C4VYmcA5kbv8vzjD0ANdeSmigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729492","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729493"}}},"glyph":{"type":"object","name":"Line","id":"p729488","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729489","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p729490","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p729500","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729494","attributes":{"selected":{"type":"object","name":"Selection","id":"p729495","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729496"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHhQJSLg4PGwKkYggt/Bjuv65a0tPA7XFxdsPbWQ06HQlsv8tAC7g7GxsXP3GxaQuG2oAbND/6GvO0qEGR1MjI2Dn174Z/9NI2Z5QPZf+7NnztS8Dvxjn5aWJhaV8steM6b/kMuNH/ZAfXe1U7/bz5w5M3KX5zd7oHm3q0S+2leLrDse6/3FvvV14A2hT59B6oXcVD+DxM+f1vhgf+7MmTc5YW/tge7o/zXttT3QuNY0nVf269wfBkktfmnPwMDQkDERTEusc39pD/THlQfcL+0PfdVYc2rfc/szZ86seRv/1P5hlYhfpfUTkLoLQp8e23/ViHFP7Hxsv6TA1qv95yN77uuLf5yQfwRy596YIw/tZ82c2fmN7SFIX5yT3QP7////L3/55h7IftfzaXdBfPFDi2+DzHPgYboN0nc18Oote0age/bNvwUKD3+Oolsgd1YZWYDFGdbI3LLnur6Y4eWVm2B9cbsQdI3IOvtP7GB+wcS3N0Dm/7+2+AbIned3FNwAmTe91wEsPv+Iwg17I2Pjan+5G/aBO+Rcxa9cB4nf9+/FTYPs14zBTQPDuedkyHWQ/QxM2tdB4fglXxWsv96WC5OWbX0t+Pr/NXD4i928Zt/yOrDgxFkwf8H75Zg0UN/+E2XE028Cd6RlmoL1A9PnNVC6svG7eNX+FdDDyulXwe5wTLhqL9f6eiKDKZgvr3/3Cih9dX7acMU+uv9QbI7iFVC62sE357J90A65WnP/y6D4lDvVeQkUfo9nPbtorxXT3yTMddFeofV17RHbC6D4+fCk7rz9P2C4VYmcA5kbv8vzjD0ANdeSmigDAAA="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729501","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729502"}}},"glyph":{"type":"object","name":"Line","id":"p729497","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729498","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p729499","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p729511","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729505","attributes":{"selected":{"type":"object","name":"Selection","id":"p729506","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729507"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2SeUhUYRTFE7FEK0MsadfEJXPJPTWdo+M4Oo46+zwRK8IIKwpLxDJRRAkzLIoWCpN2MhHRIokiWmiTLDRbbBGxwigzIokWsvd9nvfPe+9b7j3nd27rXdv60KgPmlb5ntBMBlUfuvlwkv9ueDbx6XdZlQem1r3gE+Yxz63RG1P7c6EpamnPf+HLcwtQ0hSrPx6wmOeX4tHQ+23fE/x5bxnWVkRe930XwPuB+DFnl3tKXRDrBGPvRbGxnPVCsSTd69SepytYNxyXBwvG2sojWD8S5xL7FpU0rWSfKIzX/7xdORzFftFIEtuxMewbgzpZMJb94/Bk08YrXYNx1BGP+Vf3Fd4LT6CeBBS7drq8qllFXYlQFy987k+kviT8OvE3919QMnUmI2PUXy21mnpTsF+8HqdQdype1mxBvJ+G+jU4+DFrx9lE0Acg24+AftLwNnqrKimNvtKgilELpNNfOoJFmaF0+tTCGHje29qgpV8ttvd0b3gTnUHfGThaKhYy6F8H9ZDneL2OHHQYvvFtTUVkJnlkYoYEkEkuesi2tXry0cPSEaL4hGWRUxbKHcmXmgeyyCsbzQJPdTa5ZePW6XXmjhAD+Rkg7fcZyDEHM6XRHPLMQdThYwZjoJFcjZDle43km4vdUnAuOedCvaQd9c8j7zzcDx85UtqTR+75+NIvGueTfz5Uk2orE3MwYeGBWQ+mF5uYhwkR4nq3ibmYkBbvpx4xMx8zrA3CqJk5maHCVj/MzMuMnSIGTwtzs6CxVqcisDA/C04O9KrkLczRAonTw8o8rbhTKQxamasVz8XxLivztUJicbcxZxv+lFVdSy2yMW8bZqtuXDttzN0GP2nQzvztiBGyC+2cAzt0MiA758EORQp1cC4c2CyWCxycDwdEt5Z2B+fEAYnP1cl5ceKMiFtxcm6cELfH2pycHyekPBeFc6TgtYjNoXCeFHxtExOlcK4UTJNPAf4DrtRQprgEAAA="},"shape":[151],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYHhQJSLgwMDAoBDTzweleUC0w8MqLhC9wP0hB4hO2CHH7vD////4/kOsYPECWxaw+nXuzFBxRqh+BgdGsL5/9gxg88F0w6Gvf+wh5oJpoPwvqPwvqPwPEA0EYLrBlus7iE5IS/sGVj9z5lcQfeDMmS9g+deBYPrAVw0w7cB1/TOYL9cKph8sLvgINo9J+7090D0O5p1vweY4d78Bqzc2fg1Wv9D1FVj846WXYHMzJmKlF0jpg2mFdjEwnTDx7QswPyrlOZjff+gp2F7fpCdgWs0QTCsYcoDpA2X7HoPNeVvzGGo/mH7ws+4RWN6TB0w7bPv8EMwvyngIDZcHYH/UZz2wB4Wz9f37YP9sOXEPxP8f/PguiL6/dPYdqP9vg83hYUKhE55euAXS17BvPoIGmT897xbYnEu+YHGGNTIIGuT+1tc3webE7cJNA9U/UGFD0CD3/rtyA2zutcUIGqS+0xFBA4XnH1HASu+f+/46NNyug/3n30s8DXK/ZgzpNCS9YNJAc+ttuYinQeEqdvMaNnrB++WEaZD/T5RRTkPS9zVoPkPQQHn7bZ+vQtP3VbC7HRMwaUi6B/Pl9e9egdOg+ONYA+bH7/IE8xtynl8Gh1fj1Mug8ATmi8tge4yNL0PT+SVoOrsETd8XoenlIjh9CjVfsP8LTt/nofnkvP0/YHxWiZyD0xD7ztgDAAtPgPa4BAAA"},"shape":[151],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729512","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729513"}}},"glyph":{"type":"object","name":"Line","id":"p729508","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729509","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p729510","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p729521","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729515","attributes":{"selected":{"type":"object","name":"Selection","id":"p729516","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729517"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p729522","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729523"}}},"glyph":{"type":"object","name":"Line","id":"p729518","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729519","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p729520","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p729460","attributes":{"tools":[{"id":"p729473"},{"id":"p729474"},{"id":"p729475"},{"id":"p729483"},{"type":"object","name":"SaveTool","id":"p729484"},{"id":"p729525"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p729468","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p729469","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p729470"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p729471"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p729463","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p729464","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p729465"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p729466"}}}],"center":[{"type":"object","name":"Grid","id":"p729467","attributes":{"axis":{"id":"p729463"}}},{"type":"object","name":"Grid","id":"p729472","attributes":{"dimension":1,"axis":{"id":"p729468"}}},{"type":"object","name":"Legend","id":"p729503","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p729504","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p729500"}]}},{"type":"object","name":"LegendItem","id":"p729514","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p729511"}]}},{"type":"object","name":"LegendItem","id":"p729524","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p729521"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p729526","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p729536","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p729528"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p729537"},"y_scale":{"type":"object","name":"LinearScale","id":"p729538"},"title":{"type":"object","name":"Title","id":"p729529","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p729567","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729561","attributes":{"selected":{"type":"object","name":"Selection","id":"p729562","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729563"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6NbXgT9ichkdSs5ZiudseW6/7VrU6gDOm/ahoaG2jL5X7N/v/b6P/9g1e6DiBeqvrtvD9AEARQu2MmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729568","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729569"}}},"glyph":{"type":"object","name":"Line","id":"p729564","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729565","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p729566","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p729576","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729570","attributes":{"selected":{"type":"object","name":"Selection","id":"p729571","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729572"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6NbXgT9ichkdSs5ZiudseW6/7VrU6gDOm/ahoaG2jL5X7N/v/b6P/9g1e6DiBeqvrtvD9AEARQu2MmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729577","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729578"}}},"glyph":{"type":"object","name":"Line","id":"p729573","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729574","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p729575","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p729587","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729581","attributes":{"selected":{"type":"object","name":"Selection","id":"p729582","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729583"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QwE6NbXgT9ichkdSs5ZiudseW6/7VrU6gDOm/ahoaG2jL5X7N/v/b6P/9g1e6DiBeqvrtvD9AEARQu2MmAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p729588","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729589"}}},"glyph":{"type":"object","name":"Line","id":"p729584","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729585","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p729586","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p729597","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p729591","attributes":{"selected":{"type":"object","name":"Selection","id":"p729592","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p729593"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p729598","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p729599"}}},"glyph":{"type":"object","name":"Line","id":"p729594","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p729595","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p729596","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p729535","attributes":{"tools":[{"id":"p729549"},{"id":"p729550"},{"id":"p729551"},{"id":"p729559"},{"type":"object","name":"SaveTool","id":"p729560"},{"id":"p729601"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p729544","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p729545","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p729546"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p729547"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p729539","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p729540"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p729541"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p729542"}}}],"center":[{"type":"object","name":"Grid","id":"p729543","attributes":{"axis":{"id":"p729539"}}},{"type":"object","name":"Grid","id":"p729548","attributes":{"dimension":1,"axis":{"id":"p729544"}}},{"type":"object","name":"Legend","id":"p729579","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p729580","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p729576"}]}},{"type":"object","name":"LegendItem","id":"p729590","attributes":{"label":{"type":"value","value":"Median Year (1968)"},"renderers":[{"id":"p729587"}]}},{"type":"object","name":"LegendItem","id":"p729600","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p729597"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p729612","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"18a355fb-a5f8-4652-8088-d05807242758","roots":{"p729613":"a4bc75f1-9d1b-48f4-b510-1e46931841f0"},"root_ids":["p729613"]}];
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