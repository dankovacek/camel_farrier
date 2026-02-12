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
    
    
    const element = document.getElementById("e735cc7d-edad-4057-a85a-d60568b737fe");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e735cc7d-edad-4057-a85a-d60568b737fe' but no matching script tag was found.")
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
                  const docs_json = '{"fc5cb9f6-c8b9-44db-ba6f-20135401a6fe":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p634931","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p634932"}}},"roots":[{"type":"object","name":"Column","id":"p635095","attributes":{"children":[{"type":"object","name":"GridPlot","id":"p635092","attributes":{"rows":null,"cols":null,"toolbar":{"type":"object","name":"Toolbar","id":"p635091","attributes":{"tools":[{"type":"object","name":"ToolProxy","id":"p635084","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p634955"},{"type":"object","name":"PanTool","id":"p635031"}]}},{"type":"object","name":"ToolProxy","id":"p635085","attributes":{"tools":[{"type":"object","name":"WheelZoomTool","id":"p634956","attributes":{"renderers":"auto"}},{"type":"object","name":"WheelZoomTool","id":"p635032","attributes":{"renderers":"auto"}}]}},{"type":"object","name":"ToolProxy","id":"p635086","attributes":{"tools":[{"type":"object","name":"BoxZoomTool","id":"p634957","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p634958","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p634964","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p634963","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"BoxZoomTool","id":"p635033","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p635034","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p635040","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p635039","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}}]}},{"type":"object","name":"ToolProxy","id":"p635087","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p634965"},{"type":"object","name":"ResetTool","id":"p635041"}]}},{"type":"object","name":"SaveTool","id":"p635088"},{"type":"object","name":"ToolProxy","id":"p635089","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p635007","attributes":{"renderers":"auto","tooltips":[["Exceedance","@x{0.1f}%"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}},{"type":"object","name":"ToolProxy","id":"p635090","attributes":{"tools":[{"type":"object","name":"HoverTool","id":"p635083","attributes":{"renderers":"auto","tooltips":[["Month","@x"],["Flow","@y{0.2f} m\\u00b3/s"]],"sort_by":null}}]}}]}},"toolbar_location":"right","children":[[{"type":"object","name":"Figure","id":"p634933","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"DataRange1d","id":"p634934"},"y_range":{"type":"object","name":"DataRange1d","id":"p634935"},"x_scale":{"type":"object","name":"LinearScale","id":"p634943"},"y_scale":{"type":"object","name":"LogScale","id":"p634944"},"title":{"type":"object","name":"Title","id":"p634936","attributes":{"text":"Flow Duration Curve"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p634973","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634967","attributes":{"selected":{"type":"object","name":"Selection","id":"p634968","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634969"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7v6/789x5oa+6sE6G9Gxp8fmVXZb/v/f3/J5IpBQ7sc+vpion2F/XSgOx9WldCNvhW4Q07pQYH9r///7/smkU679B/a6nU2D+qPjEFPN7k/3HVpSQrU/QlUo3P//5/P9iHMXhjMDxi0NACn5y4KKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p634974","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634975"}}},"glyph":{"type":"object","name":"Line","id":"p634970","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634971","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p634972","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p634982","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634976","attributes":{"selected":{"type":"object","name":"Selection","id":"p634977","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634978"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3DhzZCAQAA0Eche69IGrYIISMrRGYI2cX/f4N7z7lBEARNNhsybIutthmx3Q477bLbHnvts98BBx1y2BFHHXPcqBNOGnPKuNMmTJoy7YyzzjnvgosuuWzGFVfNuua6G+bcdMtt8+646577Fjzw0COPPbHoqWeeW/LCS8teee2Nt955b8UHH32y6rMvvlrzzXc//PTLb3+s2/DXP/8B4Wgqd5QBAAA="},"shape":[101],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7v6/789x5oa+6sE6G9Gxp8fmVXZb/v/f3/J5IpBQ7sc+vpion2F/XSgOx9WldCNvhW4Q07pQYH9r///7/smkU679B/a6nU2D+qPjEFPN7k/3HVpSQrU/QlUo3P//5/P9iHMXhjMDxi0NACn5y4KKAMAAA=="},"shape":[101],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p634983","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634984"}}},"glyph":{"type":"object","name":"Line","id":"p634979","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634980","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p634981","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p634993","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634987","attributes":{"selected":{"type":"object","name":"Selection","id":"p634988","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634989"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/y2QOUgDQRiFVRBEKwsDKgSCiCDBI0aDZ17uc+NusrkaQUhvIwjptREhYhkbQTzaWAhCwFILq4hgExubiCCCNlZm5n9b7Mz888//vvccjdq+u/Ltd+i1F66h8kPQMQg5D+O0/XPha46wPoYrX7Nj7Dh574KqNmoT7JvEm1o6U+yfRkVv3Hw3g191bczx/Tx0uerhnAVUW/XuJC/nLUJft5Y414ce/S1z/gqCetAqddZw4Fa7dept4FE3+KkLuX8F9QO4VOWvADmC0t8fIk8IH0p+PEyuMLSsJ0K+CLRcPErOKDLdf30rRt4Y1LG9Gyd3AscqtcME+ZO4URhnSfpI4VnJ3KboJy3cT2n6MoT73aC/jHD/ZehzU3gGTPo1hevEpG9T+JwW/VvCeW0xB0t4vVnmkRXu+yxzyQl/Ksd8cuLjJcecbOix2zbzshFSQp82c8uLv70888uLz74CcywI91GBeRaEe7TIXIvCfV5kvkXhni0x55Jw35WYdxn/0MZuiuACAAA="},"shape":[92],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/7v6/789x5oa+6s46G3//+8vmVwxaOjpQHc9rCqhOf3r///7vkkFZNMQ92YMWhrizgSq0cJgOmDQ0QDWAij74AIAAA=="},"shape":[92],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p634994","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p634995"}}},"glyph":{"type":"object","name":"Line","id":"p634990","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.8,"line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p634991","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p634992","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p635003","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p634997","attributes":{"selected":{"type":"object","name":"Selection","id":"p634998","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p634999"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p635004","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p635005"}}},"glyph":{"type":"object","name":"Line","id":"p635000","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p635001","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p635002","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p634942","attributes":{"tools":[{"id":"p634955"},{"id":"p634956"},{"id":"p634957"},{"id":"p634965"},{"type":"object","name":"SaveTool","id":"p634966"},{"id":"p635007"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LogAxis","id":"p634950","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p634951","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p634952"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p634953"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p634945","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p634946","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p634947"},"axis_label":"Exceedance Probability (%)","major_label_policy":{"type":"object","name":"AllLabels","id":"p634948"}}}],"center":[{"type":"object","name":"Grid","id":"p634949","attributes":{"axis":{"id":"p634945"}}},{"type":"object","name":"Grid","id":"p634954","attributes":{"dimension":1,"axis":{"id":"p634950"}}},{"type":"object","name":"Legend","id":"p634985","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p634986","attributes":{"label":{"type":"value","value":"Ensemble Median"},"renderers":[{"id":"p634982"}]}},{"type":"object","name":"LegendItem","id":"p634996","attributes":{"label":{"type":"value","value":"POR"},"renderers":[{"id":"p634993"}]}},{"type":"object","name":"LegendItem","id":"p635006","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p635003"}]}}]}}]}},0,0],[{"type":"object","name":"Figure","id":"p635008","attributes":{"width":450,"height":450,"x_range":{"type":"object","name":"FactorRange","id":"p635018","attributes":{"factors":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},"y_range":{"type":"object","name":"DataRange1d","id":"p635010"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p635019"},"y_scale":{"type":"object","name":"LinearScale","id":"p635020"},"title":{"type":"object","name":"Title","id":"p635011","attributes":{"text":"Monthly Hydrograph"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p635049","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p635043","attributes":{"selected":{"type":"object","name":"Selection","id":"p635044","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p635045"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0l1zivUa65Ps9yX1OEZrZtl/MjIOdnYss8elHgC0fFGTYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p635050","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p635051"}}},"glyph":{"type":"object","name":"Line","id":"p635046","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p635047","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p635048","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p635058","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p635052","attributes":{"selected":{"type":"object","name":"Selection","id":"p635053","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p635054"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0l1zivUa65Ps9yX1OEZrZtl/MjIOdnYss8elHgC0fFGTYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p635059","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p635060"}}},"glyph":{"type":"object","name":"Line","id":"p635055","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p635056","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p635057","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"navy","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p635069","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p635063","attributes":{"selected":{"type":"object","name":"Selection","id":"p635064","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p635065"},"data":{"type":"map","entries":[["x",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]],["y",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/2NgAIEf9QxE0l1zivUa65Ps9yX1OEZrZtl/MjIOdnYss8elHgC0fFGTYAAAAA=="},"shape":[12],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p635070","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p635071"}}},"glyph":{"type":"object","name":"Line","id":"p635066","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.9,"line_width":2.5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p635067","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1,"line_width":2.5}},"muted_glyph":{"type":"object","name":"Line","id":"p635068","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2,"line_width":2.5}}}},{"type":"object","name":"GlyphRenderer","id":"p635079","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p635073","attributes":{"selected":{"type":"object","name":"Selection","id":"p635074","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p635075"},"data":{"type":"map","entries":[["x",[{"type":"number","value":"nan"}]],["y",[{"type":"number","value":"nan"}]]]}}},"view":{"type":"object","name":"CDSView","id":"p635080","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p635081"}}},"glyph":{"type":"object","name":"Line","id":"p635076","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.7}},"nonselection_glyph":{"type":"object","name":"Line","id":"p635077","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p635078","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"lightgrey","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p635017","attributes":{"tools":[{"id":"p635031"},{"id":"p635032"},{"id":"p635033"},{"id":"p635041"},{"type":"object","name":"SaveTool","id":"p635042"},{"id":"p635083"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p635026","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p635027","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p635028"},"axis_label":"Discharge (m\\u00b3/s)","major_label_policy":{"type":"object","name":"AllLabels","id":"p635029"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p635021","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p635022"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p635023"},"axis_label":"Month","major_label_policy":{"type":"object","name":"AllLabels","id":"p635024"}}}],"center":[{"type":"object","name":"Grid","id":"p635025","attributes":{"axis":{"id":"p635021"}}},{"type":"object","name":"Grid","id":"p635030","attributes":{"dimension":1,"axis":{"id":"p635026"}}},{"type":"object","name":"Legend","id":"p635061","attributes":{"click_policy":"hide","items":[{"type":"object","name":"LegendItem","id":"p635062","attributes":{"label":{"type":"value","value":"POR Mean"},"renderers":[{"id":"p635058"}]}},{"type":"object","name":"LegendItem","id":"p635072","attributes":{"label":{"type":"value","value":"Median Year (1961)"},"renderers":[{"id":"p635069"}]}},{"type":"object","name":"LegendItem","id":"p635082","attributes":{"label":{"type":"value","value":"Annual (n=1)"},"renderers":[{"id":"p635079"}]}}]}}]}},0,1]]}},{"type":"object","name":"Div","id":"p635094","attributes":{"width":800,"text":"\\n    &lt;div class=\\"cf-note-box\\"&gt;\\n        &lt;strong&gt;Notes:&lt;/strong&gt;\\n        &lt;ul&gt;\\n            &lt;li&gt;&lt;strong&gt;POR&lt;/strong&gt;: Period of Record - uses all daily observations across entire time period&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Ensemble Median&lt;/strong&gt;: At each exceedance percentile (FDC) or month (hydrograph), the median value across all individual years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Median Year&lt;/strong&gt;: The actual year with total annual volume closest to the median of all years&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Annual&lt;/strong&gt;: Light grey lines show individual year patterns preserving inter-annual variability&lt;/li&gt;\\n        &lt;/ul&gt;\\n    &lt;/div&gt;\\n    "}}]}}]}}';
                  const render_items = [{"docid":"fc5cb9f6-c8b9-44db-ba6f-20135401a6fe","roots":{"p635095":"e735cc7d-edad-4057-a85a-d60568b737fe"},"root_ids":["p635095"]}];
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