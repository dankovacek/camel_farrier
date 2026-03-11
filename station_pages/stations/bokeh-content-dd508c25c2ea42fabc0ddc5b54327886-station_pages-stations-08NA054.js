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
    
    
    const element = document.getElementById("e94e7ce1-0797-4d5d-a705-b0827c294ca1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e94e7ce1-0797-4d5d-a705-b0827c294ca1' but no matching script tag was found.")
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
                  const docs_json = '{"608740d2-5d6b-4cd1-97c3-899435a177d6":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p634488","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p634489"}}},"roots":[{"type":"object","name":"Column","id":"p634652","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p634649","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p634648","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p634641","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p634512"},{"type":"object","name":"PanTool","id":"p634588"}]}},{"type":"object","name":"ToolProxy","id":"p634642","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p634513","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p634589","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p634643","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p634514","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p634515","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p634521","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p634520","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p634590","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p634591","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p634597","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p634596","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p634644","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p634522"},{"type":"object","name":"ResetTool","id":"p634598"}]}},{"type":"object","name":"SaveTool","id":"p634645"},{"type":"object","name":"ToolProxy","id":"p634646","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p634564","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p634647","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p634640","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p634490","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p634491"},"y_range":{"type":"object","name":"DataRange1d","id":"p634492"},"x_scale":{"type":"object","name":"LinearScale","id":"p634500"},"y_scale":{"type":"object","name":"LogScale","id":"p634501"},"title":{"type":"object","name":"Title","id":"p634493","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p634530","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634524","attributes":{"selected":{"type":"object","name":"Selection","id":"p634525","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634526"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7v6/789x5oa+6sE6G9Gxp8fmVXZb/v/f3/J5IpBQ7sc+vpion2F/XSgOx9WldCNvhW4Q07pQYH9r///7/smkU679B/a6nU2D+qPjEFPN7k/3HVpSQrU/QlUo3P//5/P9iHMXhjMDxi0NACn5y4KKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p634531","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634532"}}},"glyph":{"type":"object","name":"Line","id":"p634527","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634528","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p634529","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p634539","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634533","attributes":{"selected":{"type":"object","name":"Selection","id":"p634534","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634535"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7v6/789x5oa+6sE6G9Gxp8fmVXZb/v/f3/J5IpBQ7sc+vpion2F/XSgOx9WldCNvhW4Q07pQYH9r///7/smkU679B/a6nU2D+qPjEFPN7k/3HVpSQrU/QlUo3P//5/P9iHMXhjMDxi0NACn5y4KKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p634540","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634541"}}},"glyph":{"type":"object","name":"Line","id":"p634536","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634537","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p634538","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p634550","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634544","attributes":{"selected":{"type":"object","name":"Selection","id":"p634545","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634546"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2QOUgDQRiFVRBEKwsDKgSCiCDBI0aDZ17uc+NusrkaQUhvIwjptREhYhkbQTzaWAhCwFILq4hgExubiCCCNlZm5n9b7Mz888//vvccjdq+u/Ltd+i1F66h8kPQMQg5D+O0/XPha46wPoYrX7Nj7Dh574KqNmoT7JvEm1o6U+yfRkVv3Hw3g191bczx/Tx0uerhnAVUW/XuJC/nLUJft5Y414ce/S1z/gqCetAqddZw4Fa7dept4FE3+KkLuX8F9QO4VOWvADmC0t8fIk8IH0p+PEyuMLSsJ0K+CLRcPErOKDLdf30rRt4Y1LG9Gyd3AscqtcME+ZO4URhnSfpI4VnJ3KboJy3cT2n6MoT73aC/jHD/ZehzU3gGTPo1hevEpG9T+JwW/VvCeW0xB0t4vVnmkRXu+yxzyQl/Ksd8cuLjJcecbOix2zbzshFSQp82c8uLv70888uLz74CcywI91GBeRaEe7TIXIvCfV5kvkXhni0x55Jw35WYdxn/0MZuiuACAAA="},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7v6/789x5oa+6s46G3//+8vmVwxaOjpQHc9rCqhOf3r///7vkkFZNMQ92YMWhrizgSq0cJgOmDQ0QDWAij74AIAAA=="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p634551","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634552"}}},"glyph":{"type":"object","name":"Line","id":"p634547","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634548","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p634549","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p634560","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634554","attributes":{"selected":{"type":"object","name":"Selection","id":"p634555","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634556"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p634561","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634562"}}},"glyph":{"type":"object","name":"Line","id":"p634557","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634558","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p634559","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p634499","attributes":{"tools":[{"id":"p634512"},{"id":"p634513"},{"id":"p634514"},{"id":"p634522"},{"type":"object","name":"SaveTool","id":"p634523"},{"id":"p634564"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p634507","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p634508","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p634509"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p634510"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p634502","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p634503","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p634504"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p634505"}}}],"center":[{"type":"object","name":"Grid","id":"p634506","attributes":{"axis":{"id":"p634502"}}},{"type":"object","name":"Grid","id":"p634511","attributes":{"dimension":1,"axis":{"id":"p634507"}}},{"type":"object","name":"Legend","id":"p634542","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p634543","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p634539"}]}},{"type":"object","name":"LegendItem","id":"p634553","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p634550"}]}},{"type":"object","name":"LegendItem","id":"p634563","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p634560"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p634565","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p634575","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p634567"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p634576"},"y_scale":{"type":"object","name":"LinearScale","id":"p634577"},"title":{"type":"object","name":"Title","id":"p634568","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p634606","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634600","attributes":{"selected":{"type":"object","name":"Selection","id":"p634601","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634602"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0l1zivUa65Ps9yX1OEZrZtl/MjIOdnYss8elHgC0fFGTYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p634607","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634608"}}},"glyph":{"type":"object","name":"Line","id":"p634603","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634604","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p634605","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p634615","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634609","attributes":{"selected":{"type":"object","name":"Selection","id":"p634610","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634611"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0l1zivUa65Ps9yX1OEZrZtl/MjIOdnYss8elHgC0fFGTYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p634616","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634617"}}},"glyph":{"type":"object","name":"Line","id":"p634612","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634613","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p634614","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p634626","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634620","attributes":{"selected":{"type":"object","name":"Selection","id":"p634621","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634622"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0l1zivUa65Ps9yX1OEZrZtl/MjIOdnYss8elHgC0fFGTYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p634627","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634628"}}},"glyph":{"type":"object","name":"Line","id":"p634623","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634624","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p634625","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p634636","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634630","attributes":{"selected":{"type":"object","name":"Selection","id":"p634631","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634632"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p634637","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634638"}}},"glyph":{"type":"object","name":"Line","id":"p634633","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634634","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p634635","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p634574","attributes":{"tools":[{"id":"p634588"},{"id":"p634589"},{"id":"p634590"},{"id":"p634598"},{"type":"object","name":"SaveTool","id":"p634599"},{"id":"p634640"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p634583","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p634584","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p634585"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p634586"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p634578","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p634579"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p634580"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p634581"}}}],"center":[{"type":"object","name":"Grid","id":"p634582","attributes":{"axis":{"id":"p634578"}}},{"type":"object","name":"Grid","id":"p634587","attributes":{"dimension":1,"axis":{"id":"p634583"}}},{"type":"object","name":"Legend","id":"p634618","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p634619","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p634615"}]}},{"type":"object","name":"LegendItem","id":"p634629","attributes":{"label":{"type":"value","value":"Median Year (1961)"},"renderers":[{"id":"p634626"}]}},{"type":"object","name":"LegendItem","id":"p634639","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p634636"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p634651","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"608740d2-5d6b-4cd1-97c3-899435a177d6","roots":{"p634652":"e94e7ce1-0797-4d5d-a705-b0827c294ca1"},"root_ids":["p634652"]}];
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