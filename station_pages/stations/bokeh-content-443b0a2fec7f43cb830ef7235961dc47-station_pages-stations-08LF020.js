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
    
    
    const element = document.getElementById("d721d85e-1c63-4fd5-b291-f0ba5ab05f03");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd721d85e-1c63-4fd5-b291-f0ba5ab05f03' but no matching script tag was found.")
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
                  const docs_json = '{"7f3bf966-bf18-4460-b826-bb067ed01d8f":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p470047","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p470048"}}},"roots":[{"type":"object","name":"Column","id":"p470211","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p470208","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p470207","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p470200","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p470071"},{"type":"object","name":"PanTool","id":"p470147"}]}},{"type":"object","name":"ToolProxy","id":"p470201","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p470072","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p470148","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p470202","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p470073","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p470074","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p470080","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p470079","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p470149","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p470150","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p470156","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p470155","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p470203","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p470081"},{"type":"object","name":"ResetTool","id":"p470157"}]}},{"type":"object","name":"SaveTool","id":"p470204"},{"type":"object","name":"ToolProxy","id":"p470205","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p470123","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p470206","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p470199","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p470049","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p470050"},"y_range":{"type":"object","name":"DataRange1d","id":"p470051"},"x_scale":{"type":"object","name":"LinearScale","id":"p470059"},"y_scale":{"type":"object","name":"LogScale","id":"p470060"},"title":{"type":"object","name":"Title","id":"p470052","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p470089","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470083","attributes":{"selected":{"type":"object","name":"Selection","id":"p470084","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470085"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGgQu3nOngFKH/mqcceq94z94gJbrop3J+3///9ff+jrCfu0tDS3IPUT9mvdH1px9B+z/6wRo7/v2xH7A181ZLZ2HrYXWueuOcXgsL2xsbGzq/shkHkJfLqH7E2MjYVbUg7a75BrDZY5d8C+5XWgRWXEAfvTZ87ciS/bb7+gwLYrU2Kf/b///+Mnvt1jXymybjnz8z321xYXyCYe3m1vANS/z2CnfUT/obenuXfYOz2sunJo3jZ7fWNj7b35W0Du+7/y4yaQfvF17htB9P6SyStIpnsPfY34zrjC3m+HnOucn0vttY2Nm9dtW2Sfbsul7my50P6TRoz5AbtZ9hytrwXXv55u/+L///v+vbSnF8u1ZstsnGZ/NXDHPv2vk+1DwO6ZaF8yc+bLNb967K/+/2/PsabHfqH7Qy9f3W77BV81aiZeaLPft7jAVDqlyf4X0BzfpAZ704dVJa1T6qHqazDoM2fOXNG0KoKqLyCbvnRt8Qa+nZn228DhmoFB98m1/l6mlApVn0A1uuPMmS9ng2PthcH8AKrTAMUDzecoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470090","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470091"}}},"glyph":{"type":"object","name":"Line","id":"p470086","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470087","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470088","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p470098","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470092","attributes":{"selected":{"type":"object","name":"Selection","id":"p470093","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470094"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGgQu3nOngFKH/mqcceq94z94gJbrop3J+3///9ff+jrCfu0tDS3IPUT9mvdH1px9B+z/6wRo7/v2xH7A181ZLZ2HrYXWueuOcXgsL2xsbGzq/shkHkJfLqH7E2MjYVbUg7a75BrDZY5d8C+5XWgRWXEAfvTZ87ciS/bb7+gwLYrU2Kf/b///+Mnvt1jXymybjnz8z321xYXyCYe3m1vANS/z2CnfUT/obenuXfYOz2sunJo3jZ7fWNj7b35W0Du+7/y4yaQfvF17htB9P6SyStIpnsPfY34zrjC3m+HnOucn0vttY2Nm9dtW2Sfbsul7my50P6TRoz5AbtZ9hytrwXXv55u/+L///v+vbSnF8u1ZstsnGZ/NXDHPv2vk+1DwO6ZaF8yc+bLNb967K/+/2/PsabHfqH7Qy9f3W77BV81aiZeaLPft7jAVDqlyf4X0BzfpAZ704dVJa1T6qHqazDoM2fOXNG0KoKqLyCbvnRt8Qa+nZn228DhmoFB98m1/l6mlApVn0A1uuPMmS9ng2PthcH8AKrTAMUDzecoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470099","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470100"}}},"glyph":{"type":"object","name":"Line","id":"p470095","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470096","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p470097","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p470109","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470103","attributes":{"selected":{"type":"object","name":"Selection","id":"p470104","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470105"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2Qa0SDURzGK6ILMVJKVOtiSrV0Xao9ba3Vaut99+5KIkqMGInoQ5YR6VNEiZiIKBGRiIiISESUEpGIiBIRnXN63i+v8z/n/1x+Zb+vbvvPh71M/dOxP/fwNvqdg/+zCZOdz0VXswWcF+P7+PbkfaaU9+U4K3mxLtoq+a4auSNPGYVHFr6vgbFxd7PdWse9BvimYmJk5X4jPpblZhN1mrG6O15VG22hXitsl2N502tt1G3Ho1A9vrVRvwML6qKTPl2oro1eeELd9LNjokoOQF+g7XDHOxXroX8Psl0Wh2nJwRxO3AuVwx0n8/RiT8a56GUuF+Y/t0p/X13M1wc9ac5PZbmZ040KcXJZ+pm3H1/yuXuAuQdw3rQprDzM78G6MhpkjyHEVJEh9vGiS9qce9nLB2EiNnzsN4x4Qi5q7KlBvjpY0dhXgyinJc06e+tQMgc6++tQcR1+cvBDja/95GFAUrgcM8jFgAgjGhjkE8DRaWZ9PBEgpwCUnClIXkFI9/xUkNyCUPGtIfILQWE6DZFjGCqGFibPMOpVwTC5RlCoDCPkG0Ga+qL4A968qYTIAgAA"},"shape":[89],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgYGgQu3nOnhFI5zw/bf/////6Q19PwGkGIGDSPm7/F8h3TDhq/w8o0TD1MIhvb2x8GCSfwKd7CE4DzXmgwnYQpP//tcUHwPoZGA7Y//n/f/+Jsn0g/fET3+6B0yB9j5fuBvH3l0zeAVInf/PcdvvfQPn+Q1vB5qz8uAlOQ9StIJn+BXS/Lddy+x9gcxbZfwaKF2UstP/+///8mTNn2r/4//++f+90mtPvgOH2sGqK/VOw/RPtrwL5HGt64DQo3PfN77K/CFbXAnL3fd+kBjgNUVeDQUPkC8imt4HDKQMnDVGXQDVaGEwHUI0GAANYwerIAgAA"},"shape":[89],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470110","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470111"}}},"glyph":{"type":"object","name":"Line","id":"p470106","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470107","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p470108","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p470119","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470113","attributes":{"selected":{"type":"object","name":"Selection","id":"p470114","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470115"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p470120","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470121"}}},"glyph":{"type":"object","name":"Line","id":"p470116","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470117","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470118","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p470058","attributes":{"tools":[{"id":"p470071"},{"id":"p470072"},{"id":"p470073"},{"id":"p470081"},{"type":"object","name":"SaveTool","id":"p470082"},{"id":"p470123"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p470066","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p470067","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p470068"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p470069"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p470061","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p470062","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p470063"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p470064"}}}],"center":[{"type":"object","name":"Grid","id":"p470065","attributes":{"axis":{"id":"p470061"}}},{"type":"object","name":"Grid","id":"p470070","attributes":{"dimension":1,"axis":{"id":"p470066"}}},{"type":"object","name":"Legend","id":"p470101","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p470102","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p470098"}]}},{"type":"object","name":"LegendItem","id":"p470112","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p470109"}]}},{"type":"object","name":"LegendItem","id":"p470122","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p470119"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p470124","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p470134","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p470126"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p470135"},"y_scale":{"type":"object","name":"LinearScale","id":"p470136"},"title":{"type":"object","name":"Title","id":"p470127","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p470165","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470159","attributes":{"selected":{"type":"object","name":"Selection","id":"p470160","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470161"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9IJVq3YVZSy03/39XjWLyG57vUkqlmsFWu0bH1vw/WPtt4epM769rbd2Z5I9Aw5zAK+ADtlgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470166","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470167"}}},"glyph":{"type":"object","name":"Line","id":"p470162","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470163","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470164","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p470174","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470168","attributes":{"selected":{"type":"object","name":"Selection","id":"p470169","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470170"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9IJVq3YVZSy03/39XjWLyG57vUkqlmsFWu0bH1vw/WPtt4epM769rbd2Z5I9Aw5zAK+ADtlgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470175","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470176"}}},"glyph":{"type":"object","name":"Line","id":"p470171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470172","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p470173","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p470185","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470179","attributes":{"selected":{"type":"object","name":"Selection","id":"p470180","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470181"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9Qxo9IJVq3YVZSy03/39XjWLyG57vUkqlmsFWu0bH1vw/WPtt4epM769rbd2Z5I9Aw5zAK+ADtlgAAAA"},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p470186","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470187"}}},"glyph":{"type":"object","name":"Line","id":"p470182","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470183","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p470184","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p470195","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p470189","attributes":{"selected":{"type":"object","name":"Selection","id":"p470190","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p470191"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p470196","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p470197"}}},"glyph":{"type":"object","name":"Line","id":"p470192","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p470193","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p470194","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p470133","attributes":{"tools":[{"id":"p470147"},{"id":"p470148"},{"id":"p470149"},{"id":"p470157"},{"type":"object","name":"SaveTool","id":"p470158"},{"id":"p470199"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p470142","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p470143","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p470144"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p470145"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p470137","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p470138"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p470139"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p470140"}}}],"center":[{"type":"object","name":"Grid","id":"p470141","attributes":{"axis":{"id":"p470137"}}},{"type":"object","name":"Grid","id":"p470146","attributes":{"dimension":1,"axis":{"id":"p470142"}}},{"type":"object","name":"Legend","id":"p470177","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p470178","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p470174"}]}},{"type":"object","name":"LegendItem","id":"p470188","attributes":{"label":{"type":"value","value":"Median Year (1912)"},"renderers":[{"id":"p470185"}]}},{"type":"object","name":"LegendItem","id":"p470198","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p470195"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p470210","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"7f3bf966-bf18-4460-b826-bb067ed01d8f","roots":{"p470211":"d721d85e-1c63-4fd5-b291-f0ba5ab05f03"},"root_ids":["p470211"]}];
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