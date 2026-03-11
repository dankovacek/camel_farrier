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
    
    
    const element = document.getElementById("f38a8880-d8bc-42e0-8008-7cc01b555d53");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f38a8880-d8bc-42e0-8008-7cc01b555d53' but no matching script tag was found.")
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
                  const docs_json = '{"61f7ae97-c961-4e5d-ae3f-6e0393dc078f":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p469646","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p469647"}}},"roots":[{"type":"object","name":"Column","id":"p469810","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p469807","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p469806","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p469799","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p469670"},{"type":"object","name":"PanTool","id":"p469746"}]}},{"type":"object","name":"ToolProxy","id":"p469800","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p469671","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p469747","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p469801","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p469672","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p469673","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p469679","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p469678","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p469748","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p469749","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p469755","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p469754","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p469802","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p469680"},{"type":"object","name":"ResetTool","id":"p469756"}]}},{"type":"object","name":"SaveTool","id":"p469803"},{"type":"object","name":"ToolProxy","id":"p469804","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p469722","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p469805","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p469798","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p469648","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p469649"},"y_range":{"type":"object","name":"DataRange1d","id":"p469650"},"x_scale":{"type":"object","name":"LinearScale","id":"p469658"},"y_scale":{"type":"object","name":"LogScale","id":"p469659"},"title":{"type":"object","name":"Title","id":"p469651","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p469688","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p469682","attributes":{"selected":{"type":"object","name":"Selection","id":"p469683","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p469684"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGgQu3nOngFKH/mqcceq94z94gJbrop3J+3///9ff+jrCfu0tDS3IPUT9mvdH1px9B+z/6wRo7/v2xH7A181ZLZ2HrYXWueuOcXgsL2xsbGzq/shkHkJfLqH7E2MjYVbUg7a75BrDZY5d8C+5XWgRWXEAfvTZ87ciS/bb7+gwLYrU2Kf/b///+Mnvt1jXymybjnz8z321xYXyCYe3m1vANS/z2CnfUT/obenuXfYOz2sunJo3jZ7fWNj7b35W0Du+7/y4yaQfvF17htB9P6SyStIpnsPfY34zrjC3m+HnOucn0vttY2Nm9dtW2Sfbsul7my50P6TRoz5AbtZ9hytrwXXv55u/+L///v+vbSnF8u1ZstsnGZ/NXDHPv2vk+1DwO6ZaF8yc+bLNb967K/+/2/PsabHfqH7Qy9f3W77BV81aiZeaLPft7jAVDqlyf4X0BzfpAZ704dVJa1T6qHqazDoM2fOXNG0KoKqLyCbvnRt8Qa+nZn228DhmoFB98m1/l6mlApVn0A1uuPMmS9ng2PthcH8AKrTAMUDzecoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p469689","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p469690"}}},"glyph":{"type":"object","name":"Line","id":"p469685","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p469686","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p469687","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p469697","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p469691","attributes":{"selected":{"type":"object","name":"Selection","id":"p469692","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p469693"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGgQu3nOngFKH/mqcceq94z94gJbrop3J+3///9ff+jrCfu0tDS3IPUT9mvdH1px9B+z/6wRo7/v2xH7A181ZLZ2HrYXWueuOcXgsL2xsbGzq/shkHkJfLqH7E2MjYVbUg7a75BrDZY5d8C+5XWgRWXEAfvTZ87ciS/bb7+gwLYrU2Kf/b///+Mnvt1jXymybjnz8z321xYXyCYe3m1vANS/z2CnfUT/obenuXfYOz2sunJo3jZ7fWNj7b35W0Du+7/y4yaQfvF17htB9P6SyStIpnsPfY34zrjC3m+HnOucn0vttY2Nm9dtW2Sfbsul7my50P6TRoz5AbtZ9hytrwXXv55u/+L///v+vbSnF8u1ZstsnGZ/NXDHPv2vk+1DwO6ZaF8yc+bLNb967K/+/2/PsabHfqH7Qy9f3W77BV81aiZeaLPft7jAVDqlyf4X0BzfpAZ704dVJa1T6qHqazDoM2fOXNG0KoKqLyCbvnRt8Qa+nZn228DhmoFB98m1/l6mlApVn0A1uuPMmS9ng2PthcH8AKrTAMUDzecoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p469698","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p469699"}}},"glyph":{"type":"object","name":"Line","id":"p469694","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p469695","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p469696","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p469708","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p469702","attributes":{"selected":{"type":"object","name":"Selection","id":"p469703","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p469704"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Qa0SDURzGK6ILMVJKVOtiSrV0Xao9ba3Vaut99+5KIkqMGInoQ5YR6VNEiZiIKBGRiIiISESUEpGIiBIRnXN63i+v8z/n/1x+Zb+vbvvPh71M/dOxP/fwNvqdg/+zCZOdz0VXswWcF+P7+PbkfaaU9+U4K3mxLtoq+a4auSNPGYVHFr6vgbFxd7PdWse9BvimYmJk5X4jPpblZhN1mrG6O15VG22hXitsl2N502tt1G3Ho1A9vrVRvwML6qKTPl2oro1eeELd9LNjokoOQF+g7XDHOxXroX8Psl0Wh2nJwRxO3AuVwx0n8/RiT8a56GUuF+Y/t0p/X13M1wc9ac5PZbmZ040KcXJZ+pm3H1/yuXuAuQdw3rQprDzM78G6MhpkjyHEVJEh9vGiS9qce9nLB2EiNnzsN4x4Qi5q7KlBvjpY0dhXgyinJc06e+tQMgc6++tQcR1+cvBDja/95GFAUrgcM8jFgAgjGhjkE8DRaWZ9PBEgpwCUnClIXkFI9/xUkNyCUPGtIfILQWE6DZFjGCqGFibPMOpVwTC5RlCoDCPkG0Ga+qL4A968qYTIAgAA"},"shape":[89],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGgQu3nOnhFI5zw/bf/////6Q19PwGkGIGDSPm7/F8h3TDhq/w8o0TD1MIhvb2x8GCSfwKd7CE4DzXmgwnYQpP//tcUHwPoZGA7Y//n/f/+Jsn0g/fET3+6B0yB9j5fuBvH3l0zeAVInf/PcdvvfQPn+Q1vB5qz8uAlOQ9StIJn+BXS/Lddy+x9gcxbZfwaKF2UstP/+///8mTNn2r/4//++f+90mtPvgOH2sGqK/VOw/RPtrwL5HGt64DQo3PfN77K/CFbXAnL3fd+kBjgNUVeDQUPkC8imt4HDKQMnDVGXQDVaGEwHUI0GAANYwerIAgAA"},"shape":[89],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p469709","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p469710"}}},"glyph":{"type":"object","name":"Line","id":"p469705","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p469706","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p469707","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p469718","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p469712","attributes":{"selected":{"type":"object","name":"Selection","id":"p469713","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p469714"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p469719","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p469720"}}},"glyph":{"type":"object","name":"Line","id":"p469715","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p469716","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p469717","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p469657","attributes":{"tools":[{"id":"p469670"},{"id":"p469671"},{"id":"p469672"},{"id":"p469680"},{"type":"object","name":"SaveTool","id":"p469681"},{"id":"p469722"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p469665","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p469666","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p469667"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p469668"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p469660","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p469661","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p469662"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p469663"}}}],"center":[{"type":"object","name":"Grid","id":"p469664","attributes":{"axis":{"id":"p469660"}}},{"type":"object","name":"Grid","id":"p469669","attributes":{"dimension":1,"axis":{"id":"p469665"}}},{"type":"object","name":"Legend","id":"p469700","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p469701","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p469697"}]}},{"type":"object","name":"LegendItem","id":"p469711","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p469708"}]}},{"type":"object","name":"LegendItem","id":"p469721","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p469718"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p469723","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p469733","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p469725"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p469734"},"y_scale":{"type":"object","name":"LinearScale","id":"p469735"},"title":{"type":"object","name":"Title","id":"p469726","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p469764","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p469758","attributes":{"selected":{"type":"object","name":"Selection","id":"p469759","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p469760"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9IJVq3YVZSy03/39XjWLyG57vUkqlmsFWu0bH1vw/WPtt4epM769rbd2Z5I9Aw5zAK+ADtlgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p469765","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p469766"}}},"glyph":{"type":"object","name":"Line","id":"p469761","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p469762","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p469763","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p469773","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p469767","attributes":{"selected":{"type":"object","name":"Selection","id":"p469768","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p469769"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9IJVq3YVZSy03/39XjWLyG57vUkqlmsFWu0bH1vw/WPtt4epM769rbd2Z5I9Aw5zAK+ADtlgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p469774","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p469775"}}},"glyph":{"type":"object","name":"Line","id":"p469770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p469771","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p469772","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p469784","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p469778","attributes":{"selected":{"type":"object","name":"Selection","id":"p469779","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p469780"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9IJVq3YVZSy03/39XjWLyG57vUkqlmsFWu0bH1vw/WPtt4epM769rbd2Z5I9Aw5zAK+ADtlgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p469785","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p469786"}}},"glyph":{"type":"object","name":"Line","id":"p469781","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p469782","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p469783","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p469794","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p469788","attributes":{"selected":{"type":"object","name":"Selection","id":"p469789","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p469790"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p469795","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p469796"}}},"glyph":{"type":"object","name":"Line","id":"p469791","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p469792","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p469793","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p469732","attributes":{"tools":[{"id":"p469746"},{"id":"p469747"},{"id":"p469748"},{"id":"p469756"},{"type":"object","name":"SaveTool","id":"p469757"},{"id":"p469798"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p469741","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p469742","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p469743"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p469744"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p469736","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p469737"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p469738"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p469739"}}}],"center":[{"type":"object","name":"Grid","id":"p469740","attributes":{"axis":{"id":"p469736"}}},{"type":"object","name":"Grid","id":"p469745","attributes":{"dimension":1,"axis":{"id":"p469741"}}},{"type":"object","name":"Legend","id":"p469776","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p469777","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p469773"}]}},{"type":"object","name":"LegendItem","id":"p469787","attributes":{"label":{"type":"value","value":"Median Year (1912)"},"renderers":[{"id":"p469784"}]}},{"type":"object","name":"LegendItem","id":"p469797","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p469794"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p469809","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"61f7ae97-c961-4e5d-ae3f-6e0393dc078f","roots":{"p469810":"f38a8880-d8bc-42e0-8008-7cc01b555d53"},"root_ids":["p469810"]}];
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