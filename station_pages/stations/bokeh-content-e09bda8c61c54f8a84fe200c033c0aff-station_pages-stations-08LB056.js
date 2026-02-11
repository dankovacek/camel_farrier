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
    
    
    const element = document.getElementById("eca157be-0512-4de6-a281-382c50ab1106");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'eca157be-0512-4de6-a281-382c50ab1106' but no matching script tag was found.")
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
                  const docs_json = '{"6774deb4-1b87-4fd7-8aa3-e14fc3e9d910":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p218662","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p218663"}}},"roots":[{"type":"object","name":"Column","id":"p218826","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p218824","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p218823","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p218816","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p218686"},{"type":"object","name":"PanTool","id":"p218762"}]}},{"type":"object","name":"ToolProxy","id":"p218817","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p218687","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p218763","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p218818","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p218688","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p218689","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p218695","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p218694","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p218764","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p218765","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p218771","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p218770","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p218819","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p218696"},{"type":"object","name":"ResetTool","id":"p218772"}]}},{"type":"object","name":"SaveTool","id":"p218820"},{"type":"object","name":"ToolProxy","id":"p218821","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p218738","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p218822","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p218814","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p218664","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p218665"},"y_range":{"type":"object","name":"DataRange1d","id":"p218666"},"x_scale":{"type":"object","name":"LinearScale","id":"p218674"},"y_scale":{"type":"object","name":"LogScale","id":"p218675"},"title":{"type":"object","name":"Title","id":"p218667","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p218704","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p218698","attributes":{"selected":{"type":"object","name":"Selection","id":"p218699","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p218700"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v///9+b/Ob9vKtry8eOXnd/v///+/r2q/Za8b0F+13vgoSD9R7dNk+LS1t2u2MS/bpaWnHOt5fsA/aIRerLHDePt+W6/vLijP2jAwMDTnPTxOk17k/7JLyOQ2y5/4FpdP2f///n+/+8JQ9AwPDg591CBoo/3+1zCn7f///28ftOgmngfIJAhEI+mGVyLtOm5Mg9fWHvp4A2ZNguQVBA9U1vA48Yb9drjU5xgLMZ2DSPm5vZGxsbbP3GEif/F2VY/aVIuvKHyofA9kT33/oKMhd9Y4JR0HqD3z+e8ReLaa/SnH1YfuAHXKp/5wP2Te/DlS433nQfsbMmTOPKBwAmwtUSjINsm/i2z32J8+cuTJj3g77P///8zdO3Wy/2v2hktPUTSB3xPPpbrLnuL44o+jORvvfwPgqykDQIsAAfZOywf4XkF+2b739N6C77U3XgcNVSn+t/eSZMyPZz60EufvuHMGl9p////d3fjTPftdXjTVv42favwDGg3/vdDgdLrIufGrtdPt3wPB+WDUFg34KtncizemrQPs41vRg0Gwx/Y9yxbvsHwAjTqu9jWL6LjCcck61gsLvvm9Sg/2HwB37kpUb7LcB3VEyuQJOAwBFascqKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p218705","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p218706"}}},"glyph":{"type":"object","name":"Line","id":"p218701","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p218702","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p218703","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p218713","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p218707","attributes":{"selected":{"type":"object","name":"Selection","id":"p218708","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p218709"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v///9+b/Ob9vKtry8eOXnd/v///+/r2q/Za8b0F+13vgoSD9R7dNk+LS1t2u2MS/bpaWnHOt5fsA/aIRerLHDePt+W6/vLijP2jAwMDTnPTxOk17k/7JLyOQ2y5/4FpdP2f///n+/+8JQ9AwPDg591CBoo/3+1zCn7f///28ftOgmngfIJAhEI+mGVyLtOm5Mg9fWHvp4A2ZNguQVBA9U1vA48Yb9drjU5xgLMZ2DSPm5vZGxsbbP3GEif/F2VY/aVIuvKHyofA9kT33/oKMhd9Y4JR0HqD3z+e8ReLaa/SnH1YfuAHXKp/5wP2Te/DlS433nQfsbMmTOPKBwAmwtUSjINsm/i2z32J8+cuTJj3g77P///8zdO3Wy/2v2hktPUTSB3xPPpbrLnuL44o+jORvvfwPgqykDQIsAAfZOywf4XkF+2b739N6C77U3XgcNVSn+t/eSZMyPZz60EufvuHMGl9p////d3fjTPftdXjTVv42favwDGg3/vdDgdLrIufGrtdPt3wPB+WDUFg34KtncizemrQPs41vRg0Gwx/Y9yxbvsHwAjTqu9jWL6LjCcck61gsLvvm9Sg/2HwB37kpUb7LcB3VEyuQJOAwBFascqKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p218714","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p218715"}}},"glyph":{"type":"object","name":"Line","id":"p218710","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p218711","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p218712","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p218724","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p218718","attributes":{"selected":{"type":"object","name":"Selection","id":"p218719","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p218720"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeWxUVRyFIbJIrA3BSgALFilQ9u7Tfc7s+8zbZwoCglHCqkADVRuwUaKIEm0EE4k1YgQCRAxLoGEnSrRhlUBDS7QKicgSIVRSCRDvvZz5Y7Z3373n953vZS/dMOGVum53tvq8494o3j+d2cvffWCcflDSm+iHJ/8/jc41P4ULFmfhyfXBKHzx56mTg0O4LgcN70yp/NEeyvXDcKCjxffyayN4Xy4eilU9DaN4fx7U7d7R3OcleFbMKRoSHcP98vFq/uflv+ljue84rPn1ZPX2+vHcvwBb3v0PK+ZM4DkTobabP4nnTcaNK7Ni2Uun8NypyFr3mdbZOI3nF+KL3D8nmscKmaMI25bLg4qYpxht7TniazFzlaB99PfF/U+VMF8puhpDZTfPljJnGW6e7Xadv1DGvOV4OO7tqv0d5cztwrOrnqv9qsvF/BUYdXGn+73fKzhHJabJ+FcrOU8VxEV/6q8qzlUNvVMeWM35aiBTvfBPDeesxfIPd8T73qvlvHVQt9+v49xubBApTz9wc35AxVoNcgBmLJMbeMjDg6sjZUAPuXiw6BcJwEs+XvQ0LNk19gMvOXnRlHfwh2GDfOTlQ/9TA3c/s85Hbj58stLa8zjLT35+DB3zzd676/3k6Efrmdv7rg0OkGcA4yW+lgC5BiAOO9CeEyTfICrOX2g7vDFIzkEcUwFC5B1CpGDxoW+/DJF7CGp5bpj8w6hfPeDo2tYwewjjD0GhKS/CPiJYcOnr429sjrCXCO413zoxNz/KfqJokjG2RNlTFE9dlsXE2FcMH78vg8TYWwzPK3Bx9hdHa9dCQTTOHuNQ4xUm2GcCktrA3Qn2moBL1leSZL9JHFkriSXZcxKSYrcrxb5TOCextaXYewpqjJEa+9dwZ9P1v6/M0uiBhn1314uRNfqg4S21oUYvdAiIIrBOP3T0VUB0eqLjZFgC1+mLjo9UoTq9MZBUwhj0x4CcetvrBj0y0CFxbzXok4FN/84TEQ16ZWJ2TCY36ZcJpc8Ck56ZuH5/ukhq0jcTklrzLZPeWXhz81aRzKJ/FkolxiUWPbSgfu6y6KMFIY9IYNFLG81SiyKbftoICOrTl9n01Mag7+RJNn21oY7psemtgxZNiuDQXweOEs2hxw5GKJEd+uxA1d3r0Os0VPzKNP1OY96j4WJpmp6nMUnqezBN39MQcMWKNL3PQEAQVzL0P4NGiWVVhs9BBjXb5bcMn4cM+qhXPf4HyhV1WSgGAAA="},"shape":[197],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v///9+b/Ob9gwMDAfK9l23/////33/XjC9/0TZNZD4gyoRML1ASv8qiHbgWHMFLL782GUwn4fpMkj9/0u+l8DmFGVcBNEM/65csP/7/3+89f3zIH6D2M1z9v+A6kL5zoLUx+/yPGPPCBTPeX6aajTIfrnW02B/XFDCpIHume/+8BScBvnjZx1uGuSv1TIIGuh++7hdJ3HSQH0JAhGEaaBx9Ye+nsCggf5IsNyCmwaF4+tATPofON6Og8OdSRtBA82133LiGIiWv6uCmwbqj+8/dBROA8On3jEBQYPC9fPfI8j0ApmoI+D4bJh6GOyvpxcOgWk+XQQNlN9flHEQHH7XFh8AuwtoBN1pkL8mvt0Dp3+D43MXyF3zj3lvB4nLR1huAbtz5cdNcBqUfvl0cdO/wf7bSJCG+H+D/S8gv2zfegz6GzCc7U3XwWlQ+pTSXwunv4DduwocniWTV9h/BbqXrXGp/Q+wOxdBzZlv/x2ofubMmXD6BThdTCeafgdMLw+rphBNPwX7b+Kwoa8C/cWxpodk+gEwHrTa2wYtDUwf932TGnDS28DpqgInDQCPikoKKAYAAA=="},"shape":[197],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p218725","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p218726"}}},"glyph":{"type":"object","name":"Line","id":"p218721","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p218722","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p218723","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p218734","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p218728","attributes":{"selected":{"type":"object","name":"Selection","id":"p218729","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p218730"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p218735","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p218736"}}},"glyph":{"type":"object","name":"Line","id":"p218731","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p218732","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p218733","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p218673","attributes":{"tools":[{"id":"p218686"},{"id":"p218687"},{"id":"p218688"},{"id":"p218696"},{"type":"object","name":"SaveTool","id":"p218697"},{"id":"p218738"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p218681","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p218682","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p218683"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p218684"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p218676","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p218677","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p218678"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p218679"}}}],"center":[{"type":"object","name":"Grid","id":"p218680","attributes":{"axis":{"id":"p218676"}}},{"type":"object","name":"Grid","id":"p218685","attributes":{"dimension":1,"axis":{"id":"p218681"}}},{"type":"object","name":"Legend","id":"p218716","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p218717","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p218713"}]}},{"type":"object","name":"LegendItem","id":"p218727","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p218724"}]}},{"type":"object","name":"LegendItem","id":"p218737","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p218734"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p218739","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p218749","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p218741"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p218750"},"y_scale":{"type":"object","name":"LinearScale","id":"p218751"},"title":{"type":"object","name":"Title","id":"p218742","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p218780","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p218774","attributes":{"selected":{"type":"object","name":"Selection","id":"p218775","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p218776"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P////u36x63FxQUvJm05IK9RHJPYHz9CRB98KLwHnvf0NCrq84vtb8PVJge12n/U0DwYEvNBPsHQL5We5s9AP+6q0VgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p218781","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p218782"}}},"glyph":{"type":"object","name":"Line","id":"p218777","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p218778","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p218779","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p218789","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p218783","attributes":{"selected":{"type":"object","name":"Selection","id":"p218784","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p218785"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P////u36x63FxQUvJm05IK9RHJPYHz9CRB98KLwHnvf0NCrq84vtb8PVJge12n/U0DwYEvNBPsHQL5We5s9AP+6q0VgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p218790","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p218791"}}},"glyph":{"type":"object","name":"Line","id":"p218786","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p218787","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p218788","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p218800","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p218794","attributes":{"selected":{"type":"object","name":"Selection","id":"p218795","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p218796"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P////u36x63FxQUvJm05IK9RHJPYHz9CRB98KLwHnvf0NCrq84vtb8PVJge12n/U0DwYEvNBPsHQL5We5s9AP+6q0VgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p218801","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p218802"}}},"glyph":{"type":"object","name":"Line","id":"p218797","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p218798","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p218799","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p218810","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p218804","attributes":{"selected":{"type":"object","name":"Selection","id":"p218805","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p218806"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p218811","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p218812"}}},"glyph":{"type":"object","name":"Line","id":"p218807","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p218808","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p218809","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p218748","attributes":{"tools":[{"id":"p218762"},{"id":"p218763"},{"id":"p218764"},{"id":"p218772"},{"type":"object","name":"SaveTool","id":"p218773"},{"id":"p218814"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p218757","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p218758","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p218759"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p218760"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p218752","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p218753"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p218754"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p218755"}}}],"center":[{"type":"object","name":"Grid","id":"p218756","attributes":{"axis":{"id":"p218752"}}},{"type":"object","name":"Grid","id":"p218761","attributes":{"dimension":1,"axis":{"id":"p218757"}}},{"type":"object","name":"Legend","id":"p218792","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p218793","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p218789"}]}},{"type":"object","name":"LegendItem","id":"p218803","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p218800"}]}},{"type":"object","name":"LegendItem","id":"p218813","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p218810"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p218815","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"6774deb4-1b87-4fd7-8aa3-e14fc3e9d910","roots":{"p218826":"eca157be-0512-4de6-a281-382c50ab1106"},"root_ids":["p218826"]}];
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