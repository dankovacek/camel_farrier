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
    
    
    const element = document.getElementById("dc0a60bd-330b-4f81-854c-6f4b63ebf4b5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dc0a60bd-330b-4f81-854c-6f4b63ebf4b5' but no matching script tag was found.")
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
                  const docs_json = '{"2cd14dfb-1953-42ad-9832-acbc3ad730ed":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p576900","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p576901"}}},"roots":[{"type":"object","name":"Column","id":"p577064","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p577061","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p577060","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p577053","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p576924"},{"type":"object","name":"PanTool","id":"p577000"}]}},{"type":"object","name":"ToolProxy","id":"p577054","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p576925","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p577001","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p577055","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p576926","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p576927","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p576933","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p576932","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p577002","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p577003","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p577009","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p577008","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p577056","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p576934"},{"type":"object","name":"ResetTool","id":"p577010"}]}},{"type":"object","name":"SaveTool","id":"p577057"},{"type":"object","name":"ToolProxy","id":"p577058","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p576976","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p577059","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p577052","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p576902","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p576903"},"y_range":{"type":"object","name":"DataRange1d","id":"p576904"},"x_scale":{"type":"object","name":"LinearScale","id":"p576912"},"y_scale":{"type":"object","name":"LogScale","id":"p576913"},"title":{"type":"object","name":"Title","id":"p576905","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p576942","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p576936","attributes":{"selected":{"type":"object","name":"Selection","id":"p576937","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p576938"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+1+j9Gg4jKYDnPkAAOmQC74oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p576943","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p576944"}}},"glyph":{"type":"object","name":"Line","id":"p576939","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p576940","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p576941","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p576951","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p576945","attributes":{"selected":{"type":"object","name":"Selection","id":"p576946","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p576947"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+1+j9Gg4jKYDnPkAAOmQC74oAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p576952","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p576953"}}},"glyph":{"type":"object","name":"Line","id":"p576948","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p576949","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p576950","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p576962","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p576956","attributes":{"selected":{"type":"object","name":"Selection","id":"p576957","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p576958"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/1sft7fq66uv9uvBNKsDMzufjEWBgAOEL+oQvS3n5qZUaai4ggOQc3qarjJUXtWhlUtUK2SFBlSdtoNh0pEOQWU9qHoDh3d3dhY/P2cI1WfsAJJ16zGB6jd1mGWSeWmJpznUHAuHggcHGpnZraDmWTu49UgAjbSBmmvnAHQcUIU91HwHh58fHx/vl3eE2uPo8ATIs69zgtrn7HB+rnX5uzvOUHtdHHYBXTPX2hVqv6vDEs/Jar6z3KDucHcA6f7zwx3qHg+H6q+vrq4O94S6y8shDej76G1eUPd5OwQudAIGgQ/UnT4ONkDbdhb7Qt3r56DuC/KhH9Td/g6dIO9LBEDdH+AAtAzogwCoPwIdSkDOKw+E+ifQARQ6k9WCoP4KcogHRdPVIKj/gh1CVgQAXRAM9WewgxfIOyYhUP+GOIB88/FxCNTfoQ6mYANDof4PdQBGHtCAMGg4hDkogDWEQcMj3AEUuwELw6HhEu7ADRaIgIZPhAMDGEQ6AADc2CqWSAIAAA=="},"shape":[73],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1//9936QE+1+j9Gg4UJAOACtMaVVIAgAA"},"shape":[73],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p576963","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p576964"}}},"glyph":{"type":"object","name":"Line","id":"p576959","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p576960","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p576961","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p576972","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p576966","attributes":{"selected":{"type":"object","name":"Selection","id":"p576967","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p576968"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p576973","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p576974"}}},"glyph":{"type":"object","name":"Line","id":"p576969","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p576970","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p576971","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p576911","attributes":{"tools":[{"id":"p576924"},{"id":"p576925"},{"id":"p576926"},{"id":"p576934"},{"type":"object","name":"SaveTool","id":"p576935"},{"id":"p576976"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p576919","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p576920","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p576921"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p576922"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p576914","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p576915","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p576916"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p576917"}}}],"center":[{"type":"object","name":"Grid","id":"p576918","attributes":{"axis":{"id":"p576914"}}},{"type":"object","name":"Grid","id":"p576923","attributes":{"dimension":1,"axis":{"id":"p576919"}}},{"type":"object","name":"Legend","id":"p576954","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p576955","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p576951"}]}},{"type":"object","name":"LegendItem","id":"p576965","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p576962"}]}},{"type":"object","name":"LegendItem","id":"p576975","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p576972"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p576977","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p576987","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p576979"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p576988"},"y_scale":{"type":"object","name":"LinearScale","id":"p576989"},"title":{"type":"object","name":"Title","id":"p576980","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p577018","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577012","attributes":{"selected":{"type":"object","name":"Selection","id":"p577013","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577014"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCPrX///3fZMS7NFpXPoBSPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p577019","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577020"}}},"glyph":{"type":"object","name":"Line","id":"p577015","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577016","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p577017","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p577027","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577021","attributes":{"selected":{"type":"object","name":"Selection","id":"p577022","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577023"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCPrX///3fZMS7NFpXPoBSPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p577028","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577029"}}},"glyph":{"type":"object","name":"Line","id":"p577024","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577025","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p577026","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p577038","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577032","attributes":{"selected":{"type":"object","name":"Selection","id":"p577033","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577034"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WCKCPrX///3fZMS7NFpXPoBSPm+V2AAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p577039","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577040"}}},"glyph":{"type":"object","name":"Line","id":"p577035","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577036","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p577037","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p577048","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p577042","attributes":{"selected":{"type":"object","name":"Selection","id":"p577043","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p577044"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p577049","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p577050"}}},"glyph":{"type":"object","name":"Line","id":"p577045","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p577046","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p577047","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p576986","attributes":{"tools":[{"id":"p577000"},{"id":"p577001"},{"id":"p577002"},{"id":"p577010"},{"type":"object","name":"SaveTool","id":"p577011"},{"id":"p577052"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p576995","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p576996","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p576997"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p576998"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p576990","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p576991"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p576992"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p576993"}}}],"center":[{"type":"object","name":"Grid","id":"p576994","attributes":{"axis":{"id":"p576990"}}},{"type":"object","name":"Grid","id":"p576999","attributes":{"dimension":1,"axis":{"id":"p576995"}}},{"type":"object","name":"Legend","id":"p577030","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p577031","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p577027"}]}},{"type":"object","name":"LegendItem","id":"p577041","attributes":{"label":{"type":"value","value":"Median Year (1939)"},"renderers":[{"id":"p577038"}]}},{"type":"object","name":"LegendItem","id":"p577051","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p577048"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p577063","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"2cd14dfb-1953-42ad-9832-acbc3ad730ed","roots":{"p577064":"dc0a60bd-330b-4f81-854c-6f4b63ebf4b5"},"root_ids":["p577064"]}];
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