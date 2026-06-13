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
    
    
    const element = document.getElementById("bd2b2192-dc98-4dd1-a6cb-7352724c7ec1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bd2b2192-dc98-4dd1-a6cb-7352724c7ec1' but no matching script tag was found.")
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
                  const docs_json = '{"ee94f569-fa15-4c7c-8922-558e48c369ed":{"version":"3.9.1","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p361730","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p361731"}}},"roots":[{"type":"object","name":"Column","id":"p361894","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p361891","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p361890","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p361883","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p361754"},{"type":"object","name":"PanTool","id":"p361830"}]}},{"type":"object","name":"ToolProxy","id":"p361884","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p361755","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p361831","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p361885","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p361756","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p361757","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p361763","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p361762","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p361832","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p361833","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p361839","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p361838","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p361886","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p361764"},{"type":"object","name":"ResetTool","id":"p361840"}]}},{"type":"object","name":"SaveTool","id":"p361887"},{"type":"object","name":"ToolProxy","id":"p361888","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p361806","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p361889","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p361882","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p361732","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p361733"},"y_range":{"type":"object","name":"DataRange1d","id":"p361734"},"x_scale":{"type":"object","name":"LinearScale","id":"p361742"},"y_scale":{"type":"object","name":"LogScale","id":"p361743"},"title":{"type":"object","name":"Title","id":"p361735","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p361772","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361766","attributes":{"selected":{"type":"object","name":"Selection","id":"p361767","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361768"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1///+sn3z7X/hoH/+/z/fumOu/Y///93tXsy0n1xgy1VTN8P+xf//9/17pw84fWBxwdxq/un2b/7/f15jP9X+3f//9g+rpozSdAqHVJF17SmMk+2fAtNPUcbEYUsDAD8UQ5AoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361773","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361774"}}},"glyph":{"type":"object","name":"Line","id":"p361769","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361770","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p361771","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p361781","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361775","attributes":{"selected":{"type":"object","name":"Selection","id":"p361776","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361777"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1///+sn3z7X/hoH/+/z/fumOu/Y///93tXsy0n1xgy1VTN8P+xf//9/17pw84fWBxwdxq/un2b/7/f15jP9X+3f//9g+rpozSdAqHVJF17SmMk+2fAtNPUcbEYUsDAD8UQ5AoAwAA"},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361782","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361783"}}},"glyph":{"type":"object","name":"Line","id":"p361778","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361779","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p361780","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p361792","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361786","attributes":{"selected":{"type":"object","name":"Selection","id":"p361787","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361788"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2PhVS+Nl/ttzwKmuR2OeN6dfjxMxAHCl3ZQyrBY+fuTAlRcxSFFu6lt8i51qLy2w9J3p5O1m/Sg6gwcPt/oWvBwiRFUvYnD5F36/Ws5zKD6zB1M5lyprcyxhOq3drgK5LlesIGaY+cAVi7lADXPwaEbaNq7045Qc50cogVBJjhDzXdxADtH3xVqj5vDn08gB7hB7XN3OAN0XdtkD6i9ng5zQda7ekHt93YAWl4Q9N0b6g4fB5ttIB/7Qt3j5wAOlmh/qLsCHN6DvNsWAHVfgEM4OKACoe4MdNgPNiAI6t4gB7B2wWCou4MdQL7zexUMdX+Iw/enG0UdD4dA/RHqkABUbTInFOqfMIcTYSALwqD+CnMAB49fONR/4Q4zjoMURED9GeHAAAaRDgAiv7uQ2AEAAA=="},"shape":[59],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA//v1///+sn3z7X9B6e///8+fOXOm/Yv//+/7906nOv3u/3/7h1VT7Icr/RQYjkUZE+0HmgYAEPy4u9gBAAA="},"shape":[59],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361793","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361794"}}},"glyph":{"type":"object","name":"Line","id":"p361789","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361790","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p361791","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p361802","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361796","attributes":{"selected":{"type":"object","name":"Selection","id":"p361797","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361798"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p361803","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361804"}}},"glyph":{"type":"object","name":"Line","id":"p361799","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361800","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p361801","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p361741","attributes":{"tools":[{"id":"p361754"},{"id":"p361755"},{"id":"p361756"},{"id":"p361764"},{"type":"object","name":"SaveTool","id":"p361765"},{"id":"p361806"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p361749","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p361750","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p361751"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p361752"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p361744","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p361745","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p361746"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p361747"}}}],"center":[{"type":"object","name":"Grid","id":"p361748","attributes":{"axis":{"id":"p361744"}}},{"type":"object","name":"Grid","id":"p361753","attributes":{"dimension":1,"axis":{"id":"p361749"}}},{"type":"object","name":"Legend","id":"p361784","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p361785","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p361781"}]}},{"type":"object","name":"LegendItem","id":"p361795","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p361792"}]}},{"type":"object","name":"LegendItem","id":"p361805","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p361802"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p361807","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p361817","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p361809"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p361818"},"y_scale":{"type":"object","name":"LinearScale","id":"p361819"},"title":{"type":"object","name":"Title","id":"p361810","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p361848","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361842","attributes":{"selected":{"type":"object","name":"Selection","id":"p361843","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361844"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif71///+sn3z7WE0TF6kLGm6wswp9qWGxyqmfJ5sj64PnQ8AdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361849","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361850"}}},"glyph":{"type":"object","name":"Line","id":"p361845","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361846","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p361847","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p361857","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361851","attributes":{"selected":{"type":"object","name":"Selection","id":"p361852","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361853"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif71///+sn3z7WE0TF6kLGm6wswp9qWGxyqmfJ5sj64PnQ8AdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361858","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361859"}}},"glyph":{"type":"object","name":"Line","id":"p361854","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361855","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p361856","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p361868","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361862","attributes":{"selected":{"type":"object","name":"Selection","id":"p361863","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361864"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAA/2NgAIEf9WAKif71///+sn3z7WE0TF6kLGm6wswp9qWGxyqmfJ5sj64PnQ8AdqjCQWAAAAA="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p361869","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361870"}}},"glyph":{"type":"object","name":"Line","id":"p361865","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361866","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p361867","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p361878","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p361872","attributes":{"selected":{"type":"object","name":"Selection","id":"p361873","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p361874"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p361879","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p361880"}}},"glyph":{"type":"object","name":"Line","id":"p361875","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p361876","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p361877","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p361816","attributes":{"tools":[{"id":"p361830"},{"id":"p361831"},{"id":"p361832"},{"id":"p361840"},{"type":"object","name":"SaveTool","id":"p361841"},{"id":"p361882"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p361825","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p361826","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p361827"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p361828"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p361820","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p361821"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p361822"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p361823"}}}],"center":[{"type":"object","name":"Grid","id":"p361824","attributes":{"axis":{"id":"p361820"}}},{"type":"object","name":"Grid","id":"p361829","attributes":{"dimension":1,"axis":{"id":"p361825"}}},{"type":"object","name":"Legend","id":"p361860","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p361861","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p361857"}]}},{"type":"object","name":"LegendItem","id":"p361871","attributes":{"label":{"type":"value","value":"Median Year (1965)"},"renderers":[{"id":"p361868"}]}},{"type":"object","name":"LegendItem","id":"p361881","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p361878"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p361893","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"ee94f569-fa15-4c7c-8922-558e48c369ed","roots":{"p361894":"bd2b2192-dc98-4dd1-a6cb-7352724c7ec1"},"root_ids":["p361894"]}];
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