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
    
    
    const element = document.getElementById("d8c0f950-1d93-42fc-bedc-069ee82c3951");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd8c0f950-1d93-42fc-bedc-069ee82c3951' but no matching script tag was found.")
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
                  const docs_json = '{"186fb0d6-529d-418d-89f1-c1a2e57180eb":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p214813","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p214814"}}},"roots":[{"type":"object","name":"Column","id":"p214977","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p214975","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p214974","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p214967","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p214837"},{"type":"object","name":"PanTool","id":"p214913"}]}},{"type":"object","name":"ToolProxy","id":"p214968","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p214838","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p214914","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p214969","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p214839","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p214840","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p214846","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p214845","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p214915","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p214916","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p214922","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p214921","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p214970","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p214847"},{"type":"object","name":"ResetTool","id":"p214923"}]}},{"type":"object","name":"SaveTool","id":"p214971"},{"type":"object","name":"ToolProxy","id":"p214972","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p214889","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p214973","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p214965","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p214815","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p214816"},"y_range":{"type":"object","name":"DataRange1d","id":"p214817"},"x_scale":{"type":"object","name":"LinearScale","id":"p214825"},"y_scale":{"type":"object","name":"LogScale","id":"p214826"},"title":{"type":"object","name":"Title","id":"p214818","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p214855","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p214849","attributes":{"selected":{"type":"object","name":"Selection","id":"p214850","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p214851"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v///9+b/Ob9vKtry8eOXnd/v///+/r2q/Za8b0F+13vgoSD9R7dNk+LS1t2u2MS/bpaWnHOt5fsA/aIRerLHDePt+W6/vLijP2jAwMDTnPTxOk17k/7JLyOQ2y5/4FpdP2f///n+/+8JQ9AwPDg591CBoo/3+1zCn7f///28ftOgmngfIJAhEI+mGVyLtOm5Mg9fWHvp4A2ZNguQVBA9U1vA48Yb9drjU5xgLMZ2DSPm5vZGxsbbP3GEif/F2VY/aVIuvKHyofA9kT33/oKMhd9Y4JR0HqD3z+e8ReLaa/SnH1YfuAHXKp/5wP2Te/DlS433nQfsbMmTOPKBwAmwtUSjINsm/i2z32J8+cuTJj3g77P///8zdO3Wy/2v2hktPUTSB3xPPpbrLnuL44o+jORvvfwPgqykDQIsAAfZOywf4XkF+2b739N6C77U3XgcNVSn+t/eSZMyPZz60EufvuHMGl9p////d3fjTPftdXjTVv42favwDGg3/vdDgdLrIufGrtdPt3wPB+WDUFg34KtncizemrQPs41vRg0Gwx/Y9yxbvsHwAjTqu9jWL6LjCcck61gsLvvm9Sg/2HwB37kpUb7LcB3VEyuQJOAwBFascqKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p214856","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p214857"}}},"glyph":{"type":"object","name":"Line","id":"p214852","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p214853","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p214854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p214864","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p214858","attributes":{"selected":{"type":"object","name":"Selection","id":"p214859","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p214860"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v///9+b/Ob9vKtry8eOXnd/v///+/r2q/Za8b0F+13vgoSD9R7dNk+LS1t2u2MS/bpaWnHOt5fsA/aIRerLHDePt+W6/vLijP2jAwMDTnPTxOk17k/7JLyOQ2y5/4FpdP2f///n+/+8JQ9AwPDg591CBoo/3+1zCn7f///28ftOgmngfIJAhEI+mGVyLtOm5Mg9fWHvp4A2ZNguQVBA9U1vA48Yb9drjU5xgLMZ2DSPm5vZGxsbbP3GEif/F2VY/aVIuvKHyofA9kT33/oKMhd9Y4JR0HqD3z+e8ReLaa/SnH1YfuAHXKp/5wP2Te/DlS433nQfsbMmTOPKBwAmwtUSjINsm/i2z32J8+cuTJj3g77P///8zdO3Wy/2v2hktPUTSB3xPPpbrLnuL44o+jORvvfwPgqykDQIsAAfZOywf4XkF+2b739N6C77U3XgcNVSn+t/eSZMyPZz60EufvuHMGl9p////d3fjTPftdXjTVv42favwDGg3/vdDgdLrIufGrtdPt3wPB+WDUFg34KtncizemrQPs41vRg0Gwx/Y9yxbvsHwAjTqu9jWL6LjCcck61gsLvvm9Sg/2HwB37kpUb7LcB3VEyuQJOAwBFascqKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p214865","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p214866"}}},"glyph":{"type":"object","name":"Line","id":"p214861","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p214862","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p214863","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p214875","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p214869","attributes":{"selected":{"type":"object","name":"Selection","id":"p214870","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p214871"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2TeWxUVRyFIbJIrA3BSgALFilQ9u7Tfc7s+8zbZwoCglHCqkADVRuwUaKIEm0EE4k1YgQCRAxLoGEnSrRhlUBDS7QKicgSIVRSCRDvvZz5Y7Z3373n953vZS/dMOGVum53tvq8494o3j+d2cvffWCcflDSm+iHJ/8/jc41P4ULFmfhyfXBKHzx56mTg0O4LgcN70yp/NEeyvXDcKCjxffyayN4Xy4eilU9DaN4fx7U7d7R3OcleFbMKRoSHcP98vFq/uflv+ljue84rPn1ZPX2+vHcvwBb3v0PK+ZM4DkTobabP4nnTcaNK7Ni2Uun8NypyFr3mdbZOI3nF+KL3D8nmscKmaMI25bLg4qYpxht7TniazFzlaB99PfF/U+VMF8puhpDZTfPljJnGW6e7Xadv1DGvOV4OO7tqv0d5cztwrOrnqv9qsvF/BUYdXGn+73fKzhHJabJ+FcrOU8VxEV/6q8qzlUNvVMeWM35aiBTvfBPDeesxfIPd8T73qvlvHVQt9+v49xubBApTz9wc35AxVoNcgBmLJMbeMjDg6sjZUAPuXiw6BcJwEs+XvQ0LNk19gMvOXnRlHfwh2GDfOTlQ/9TA3c/s85Hbj58stLa8zjLT35+DB3zzd676/3k6Efrmdv7rg0OkGcA4yW+lgC5BiAOO9CeEyTfICrOX2g7vDFIzkEcUwFC5B1CpGDxoW+/DJF7CGp5bpj8w6hfPeDo2tYwewjjD0GhKS/CPiJYcOnr429sjrCXCO413zoxNz/KfqJokjG2RNlTFE9dlsXE2FcMH78vg8TYWwzPK3Bx9hdHa9dCQTTOHuNQ4xUm2GcCktrA3Qn2moBL1leSZL9JHFkriSXZcxKSYrcrxb5TOCextaXYewpqjJEa+9dwZ9P1v6/M0uiBhn1314uRNfqg4S21oUYvdAiIIrBOP3T0VUB0eqLjZFgC1+mLjo9UoTq9MZBUwhj0x4CcetvrBj0y0CFxbzXok4FN/84TEQ16ZWJ2TCY36ZcJpc8Ck56ZuH5/ukhq0jcTklrzLZPeWXhz81aRzKJ/FkolxiUWPbSgfu6y6KMFIY9IYNFLG81SiyKbftoICOrTl9n01Mag7+RJNn21oY7psemtgxZNiuDQXweOEs2hxw5GKJEd+uxA1d3r0Os0VPzKNP1OY96j4WJpmp6nMUnqezBN39MQcMWKNL3PQEAQVzL0P4NGiWVVhs9BBjXb5bcMn4cM+qhXPf4HyhV1WSgGAAA="},"shape":[197],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC//v///9+b/Ob9gwMDAfK9l23/////33/XjC9/0TZNZD4gyoRML1ASv8qiHbgWHMFLL782GUwn4fpMkj9/0u+l8DmFGVcBNEM/65csP/7/3+89f3zIH6D2M1z9v+A6kL5zoLUx+/yPGPPCBTPeX6aajTIfrnW02B/XFDCpIHume/+8BScBvnjZx1uGuSv1TIIGuh++7hdJ3HSQH0JAhGEaaBx9Ye+nsCggf5IsNyCmwaF4+tATPofON6Og8OdSRtBA82133LiGIiWv6uCmwbqj+8/dBROA8On3jEBQYPC9fPfI8j0ApmoI+D4bJh6GOyvpxcOgWk+XQQNlN9flHEQHH7XFh8AuwtoBN1pkL8mvt0Dp3+D43MXyF3zj3lvB4nLR1huAbtz5cdNcBqUfvl0cdO/wf7bSJCG+H+D/S8gv2zfegz6GzCc7U3XwWlQ+pTSXwunv4DduwocniWTV9h/BbqXrXGp/Q+wOxdBzZlv/x2ofubMmXD6BThdTCeafgdMLw+rphBNPwX7b+Kwoa8C/cWxpodk+gEwHrTa2wYtDUwf932TGnDS28DpqgInDQCPikoKKAYAAA=="},"shape":[197],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p214876","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p214877"}}},"glyph":{"type":"object","name":"Line","id":"p214872","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p214873","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p214874","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p214885","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p214879","attributes":{"selected":{"type":"object","name":"Selection","id":"p214880","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p214881"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p214886","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p214887"}}},"glyph":{"type":"object","name":"Line","id":"p214882","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p214883","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p214884","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p214824","attributes":{"tools":[{"id":"p214837"},{"id":"p214838"},{"id":"p214839"},{"id":"p214847"},{"type":"object","name":"SaveTool","id":"p214848"},{"id":"p214889"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p214832","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p214833","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p214834"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p214835"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p214827","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p214828","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p214829"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p214830"}}}],"center":[{"type":"object","name":"Grid","id":"p214831","attributes":{"axis":{"id":"p214827"}}},{"type":"object","name":"Grid","id":"p214836","attributes":{"dimension":1,"axis":{"id":"p214832"}}},{"type":"object","name":"Legend","id":"p214867","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p214868","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p214864"}]}},{"type":"object","name":"LegendItem","id":"p214878","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p214875"}]}},{"type":"object","name":"LegendItem","id":"p214888","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p214885"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p214890","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p214900","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p214892"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p214901"},"y_scale":{"type":"object","name":"LinearScale","id":"p214902"},"title":{"type":"object","name":"Title","id":"p214893","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p214931","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p214925","attributes":{"selected":{"type":"object","name":"Selection","id":"p214926","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p214927"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P////u36x63FxQUvJm05IK9RHJPYHz9CRB98KLwHnvf0NCrq84vtb8PVJge12n/U0DwYEvNBPsHQL5We5s9AP+6q0VgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p214932","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p214933"}}},"glyph":{"type":"object","name":"Line","id":"p214928","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p214929","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p214930","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p214940","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p214934","attributes":{"selected":{"type":"object","name":"Selection","id":"p214935","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p214936"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P////u36x63FxQUvJm05IK9RHJPYHz9CRB98KLwHnvf0NCrq84vtb8PVJge12n/U0DwYEvNBPsHQL5We5s9AP+6q0VgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p214941","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p214942"}}},"glyph":{"type":"object","name":"Line","id":"p214937","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p214938","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p214939","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p214951","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p214945","attributes":{"selected":{"type":"object","name":"Selection","id":"p214946","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p214947"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qw46P////u36x63FxQUvJm05IK9RHJPYHz9CRB98KLwHnvf0NCrq84vtb8PVJge12n/U0DwYEvNBPsHQL5We5s9AP+6q0VgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p214952","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p214953"}}},"glyph":{"type":"object","name":"Line","id":"p214948","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p214949","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p214950","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p214961","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p214955","attributes":{"selected":{"type":"object","name":"Selection","id":"p214956","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p214957"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p214962","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p214963"}}},"glyph":{"type":"object","name":"Line","id":"p214958","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p214959","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p214960","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p214899","attributes":{"tools":[{"id":"p214913"},{"id":"p214914"},{"id":"p214915"},{"id":"p214923"},{"type":"object","name":"SaveTool","id":"p214924"},{"id":"p214965"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p214908","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p214909","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p214910"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p214911"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p214903","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p214904"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p214905"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p214906"}}}],"center":[{"type":"object","name":"Grid","id":"p214907","attributes":{"axis":{"id":"p214903"}}},{"type":"object","name":"Grid","id":"p214912","attributes":{"dimension":1,"axis":{"id":"p214908"}}},{"type":"object","name":"Legend","id":"p214943","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p214944","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p214940"}]}},{"type":"object","name":"LegendItem","id":"p214954","attributes":{"label":{"type":"value","value":"Median Year (1933)"},"renderers":[{"id":"p214951"}]}},{"type":"object","name":"LegendItem","id":"p214964","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p214961"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p214966","attributes":{"width":900,"text":"\\n    &lt;div style=\\"margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; font-size: 14px;\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;&lt;br&gt;\\n        &lt;ol style=\\"margin: 5px 0; padding-left: 20px;\\"&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;\\n            &lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ol&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"186fb0d6-529d-418d-89f1-c1a2e57180eb","roots":{"p214977":"d8c0f950-1d93-42fc-bedc-069ee82c3951"},"root_ids":["p214977"]}];
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